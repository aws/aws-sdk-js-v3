import type { EventStreamCodec } from "@smithy/eventstream-codec";
import type { MessageHeaders, MessageSigner, Provider } from "@smithy/types";
import { fromHex } from "@smithy/util-hex-encoding";

/**
 * A transform stream that signs the eventstream.
 *
 * Implementation replicated from @aws-sdk/eventstream-handler-node::EventSigningStream
 * but modified to be compatible with web stream interface.
 *
 * @internal
 */
export class EventSigningTransformStream extends TransformStream<Uint8Array, Uint8Array> {
  /**
   * @override
   */
  public declare readable: ReadableStream<Uint8Array>;

  /**
   * @override
   */
  public declare writable: WritableStream<Uint8Array>;

  public constructor(
    initialSignature: string,
    messageSigner: MessageSigner,
    eventStreamCodec: EventStreamCodec,
    systemClockOffsetProvider: Provider<number>
  ) {
    let priorSignature = initialSignature;
    super({
      start() {},
      async transform(chunk, controller) {
        try {
          const now = new Date(Date.now() + (await systemClockOffsetProvider()));
          const dateHeader: MessageHeaders = {
            ":date": { type: "timestamp", value: now },
          };
          const signedMessage = await messageSigner.sign(
            {
              message: {
                body: chunk,
                headers: dateHeader,
              },
              priorSignature: priorSignature,
            },
            {
              signingDate: now,
            }
          );
          priorSignature = signedMessage.signature;
          const serializedSigned = eventStreamCodec.encode({
            headers: {
              ...dateHeader,
              ":chunk-signature": {
                type: "binary",
                value: fromHex(signedMessage.signature),
              },
            },
            body: chunk,
          });
          controller.enqueue(serializedSigned);
        } catch (error) {
          controller.error(error);
        }
      },
    });
  }
}
