import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { EventSigner, MessageHeaders } from "@aws-sdk/types";
import { Transform, TransformCallback, TransformOptions } from "stream";

export interface EventSigningStreamOptions extends TransformOptions {
  priorSignature: string;
  eventSigner: EventSigner;
  eventStreamCodec: EventStreamCodec;
}

/**
 * A transform stream that signs the eventstream
 */
export class EventSigningStream extends Transform {
  private priorSignature: string;
  private eventSigner: EventSigner;
  private eventStreamCodec: EventStreamCodec;

  constructor(options: EventSigningStreamOptions) {
    super({
      autoDestroy: true,
      readableObjectMode: true,
      writableObjectMode: true,
      ...options,
    });

    this.priorSignature = options.priorSignature;
    this.eventSigner = options.eventSigner;
    this.eventStreamCodec = options.eventStreamCodec;
  }

  async _transform(chunk: Uint8Array, encoding: string, callback: TransformCallback): Promise<void> {
    try {
      const now = new Date();
      const dateHeader: MessageHeaders = {
        ":date": { type: "timestamp", value: now },
      };
      const signature = await this.eventSigner.sign(
        {
          payload: chunk,
          headers: this.eventStreamCodec.formatHeaders(dateHeader),
        },
        {
          priorSignature: this.priorSignature,
          signingDate: now,
        }
      );
      this.priorSignature = signature;
      const serializedSigned = this.eventStreamCodec.encode({
        headers: {
          ...dateHeader,
          ":chunk-signature": {
            type: "binary",
            value: getSignatureBinary(signature),
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
