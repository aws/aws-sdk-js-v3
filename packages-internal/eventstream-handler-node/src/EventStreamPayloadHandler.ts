import { EventStreamCodec } from "@smithy/eventstream-codec";
import type {
  Decoder,
  Encoder,
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  HttpRequest,
  MessageSigner,
  MetadataBearer,
  Provider,
} from "@smithy/types";
import { PassThrough, pipeline, Readable } from "node:stream";

import { EventSigningTransformStream } from "./EventSigningTransformStream";

/**
 * @internal
 */
export interface EventStreamPayloadHandlerOptions {
  messageSigner: Provider<MessageSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  systemClockOffset?: number;
}

/**
 * @internal
 */
export class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
  private readonly messageSigner: Provider<MessageSigner>;
  private readonly eventStreamCodec: EventStreamCodec;
  private readonly systemClockOffsetProvider: Provider<number>;

  constructor(options: EventStreamPayloadHandlerOptions) {
    this.messageSigner = options.messageSigner;
    this.eventStreamCodec = new EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
    this.systemClockOffsetProvider = async () => options.systemClockOffset ?? 0;
  }

  async handle<T extends MetadataBearer>(
    next: FinalizeHandler<any, T>,
    args: FinalizeHandlerArguments<any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: HandlerExecutionContext = {} as any
  ): Promise<FinalizeHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload, query } = request;

    if (!(payload instanceof Readable)) {
      throw new Error("Eventstream payload must be a Readable stream.");
    }

    const payloadStream = payload as Readable;
    request.body = new PassThrough({
      objectMode: true,
    });

    const match = request.headers?.authorization?.match(/Signature=([\w]+)$/);
    // Sign the eventstream based on the signature from initial request.
    let priorSignature = match?.[1] ?? (query?.["X-Amz-Signature"] as string) ?? "";
    if (context.__staticSignature) {
      priorSignature = "";
    }
    const signingStream = new EventSigningTransformStream({
      priorSignature,
      eventStreamCodec: this.eventStreamCodec,
      messageSigner: await this.messageSigner(),
      systemClockOffsetProvider: this.systemClockOffsetProvider,
    });

    // this promise rejects on pipeline error, resolves after http layer completes
    // this is used in a race against the http layer's response below
    let resolvePipeline: () => void;
    const pipelineError = new Promise<FinalizeHandlerOutput<any>>((resolve, reject) => {
      resolvePipeline = () => resolve(undefined as any);
      pipeline(payloadStream, signingStream, request.body, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          reject(new Error(`Pipeline error in @aws-sdk/eventstream-handler-node: ${err.message}`, { cause: err }));
        }
        // it resolves after next(args) completes
      });
    });

    let result: FinalizeHandlerOutput<any>;
    try {
      // if pipeline errors, it will reject and be caught here
      // if response completes (success or error), use that result
      result = await Promise.race([next(args), pipelineError]);
    } catch (e) {
      // Close the payload stream otherwise the retry would hang
      // because of the previous connection.
      request.body.end();
      throw e;
    } finally {
      // for stream pipeline promise
      resolvePipeline!();
    }

    return result;
  }
}
