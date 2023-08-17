import { EventStreamCodec } from "@smithy/eventstream-codec";
import { MessageHeaders, MessageSigner } from "@smithy/types";
import { Transform, TransformCallback, TransformOptions } from "stream";

/**
 * @internal
 */
export interface EventSigningStreamOptions extends TransformOptions {
  priorSignature: string;
  messageSigner: MessageSigner;
  eventStreamCodec: EventStreamCodec;
}

/**
 * @internal
 *
 * A transform stream that signs the eventstream
 */
export class EventSigningStream extends Transform {
  private priorSignature: string;
  private messageSigner: MessageSigner;
  private eventStreamCodec: EventStreamCodec;

  constructor(options: EventSigningStreamOptions) {
    super({
      autoDestroy: true,
      readableObjectMode: true,
      writableObjectMode: true,
      ...options,
    });

    this.priorSignature = options.priorSignature;
    this.eventStreamCodec = options.eventStreamCodec;
    this.messageSigner = options.messageSigner;
  }

  async _transform(chunk: Uint8Array, encoding: string, callback: TransformCallback): Promise<void> {
    try {
      const now = new Date();
      const dateHeader: MessageHeaders = {
        ":date": { type: "timestamp", value: now },
      };
      const signedMessage = await this.messageSigner.sign(
        {
          message: {
            body: chunk,
            headers: dateHeader,
          },
          priorSignature: this.priorSignature,
        },
        {
          signingDate: now,
        }
      );
      this.priorSignature = signedMessage.signature;
      const serializedSigned = this.eventStreamCodec.encode({
        headers: {
          ...dateHeader,
          ":chunk-signature": {
            type: "binary",
            value: getSignatureBinary(signedMessage.signature),
          },
        },
        body: chunk,
      });
      this.push(serializedSigned);
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}

function getSignatureBinary(signature: string): Uint8Array {
  const buf = Buffer.from(signature, "hex");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
