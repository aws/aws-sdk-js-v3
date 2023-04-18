import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { EventSigner, MessageHeaders } from "@aws-sdk/types";
import { fromHex } from "@aws-sdk/util-hex-encoding";

/**
 * Get a transform stream that signs the eventstream
 * Implementation replicated from @aws-sdk/eventstream-handler-node::EventSigningStream
 * but modified to be compatible with WHATWG stream interface
 */
export const getEventSigningTransformStream = (
  initialSignature: string,
  eventSigner: EventSigner,
  eventStreamCodec: EventStreamCodec
): TransformStream<Uint8Array, Uint8Array> => {
  let priorSignature = initialSignature;
  const transformer: Transformer<Uint8Array, Uint8Array> = {
    start() {},
    async transform(chunk, controller) {
      try {
        const now = new Date();
        const dateHeader: MessageHeaders = {
          ":date": { type: "timestamp", value: now },
        };
        const signature = await eventSigner.sign(
          {
            payload: chunk,
            headers: eventStreamCodec.formatHeaders(dateHeader),
          },
          {
            priorSignature,
            signingDate: now,
          }
        );
        priorSignature = signature;
        const serializedSigned = eventStreamCodec.encode({
          headers: {
            ...dateHeader,
            ":chunk-signature": {
              type: "binary",
              value: fromHex(signature),
            },
          },
          body: chunk,
        });
        controller.enqueue(serializedSigned);
      } catch (error) {
        controller.error(error);
      }
    },
  };
  return new TransformStream({ ...transformer });
};
