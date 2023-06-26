import { EventStreamCodec } from "@smithy/eventstream-codec";
import {
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
import { PassThrough, pipeline, Readable } from "stream";

import { EventSigningStream } from "./EventSigningStream";

/**
 * @internal
 */
export interface EventStreamPayloadHandlerOptions {
  messageSigner: Provider<MessageSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

/**
 * @internal
 *
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial attempt.
 * 2. Close the stream is attempt fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
export class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
  private readonly messageSigner: Provider<MessageSigner>;
  private readonly eventStreamCodec: EventStreamCodec;

  constructor(options: EventStreamPayloadHandlerOptions) {
    this.messageSigner = options.messageSigner;
    this.eventStreamCodec = new EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
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

    let result: FinalizeHandlerOutput<any>;
    try {
      result = await next(args);
    } catch (e) {
      // Close the payload stream otherwise the retry would hang
      // because of the previous connection.
      request.body.end();
      throw e;
    }

    // If response is successful, start piping the payload stream
    const match = (request.headers["authorization"] || "").match(/Signature=([\w]+)$/);
    // Sign the eventstream based on the signature from initial request.
    const priorSignature = (match || [])[1] || (query && (query["X-Amz-Signature"] as string)) || "";
    const signingStream = new EventSigningStream({
      priorSignature,
      eventStreamCodec: this.eventStreamCodec,
      messageSigner: await this.messageSigner(),
    });

    pipeline(payloadStream, signingStream, request.body, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        throw err;
      }
    });

    return result;
  }
}
