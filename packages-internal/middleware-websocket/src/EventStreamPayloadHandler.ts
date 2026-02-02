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

import { getEventSigningTransformStream } from "./get-event-signing-stream";

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
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial request.
 * 2. Close the stream if initial request fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 *
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

  public async handle<T extends MetadataBearer>(
    next: FinalizeHandler<any, T>,
    args: FinalizeHandlerArguments<any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: HandlerExecutionContext = {} as any
  ): Promise<FinalizeHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload, headers, query } = request;

    if (!(payload instanceof ReadableStream)) {
      throw new Error("Eventstream payload must be a ReadableStream.");
    }

    const placeHolderStream = new TransformStream();
    request.body = placeHolderStream.readable;

    const match = (headers?.authorization ?? "").match(/Signature=(\w+)$/);
    // Sign the eventstream based on the signature from initial request.
    const priorSignature = (match ?? [])[1] ?? (query && (query["X-Amz-Signature"] as string)) ?? "";
    const signingStream = getEventSigningTransformStream(
      priorSignature,
      await this.messageSigner(),
      this.eventStreamCodec,
      this.systemClockOffsetProvider
    );

    payload.pipeThrough(signingStream).pipeThrough(placeHolderStream);

    let result: FinalizeHandlerOutput<any>;
    try {
      result = await next(args);
    } catch (e) {
      // Close the stream if we can. It's likely that the stream's
      // lock is held by something we have no access to, so failure
      // to close here is ignored.
      const p = payload.cancel?.();
      if (p instanceof Promise) {
        p.catch(() => {});
      }
      throw e;
    }

    return result;
  }
}
