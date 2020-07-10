import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { EventSigner, MessageHeaders } from "@aws-sdk/types";
import { Transform, TransformCallback, TransformOptions } from "stream";

export interface EventSigningStreamOptions extends TransformOptions {
  priorSignature: string;
  eventSigner: EventSigner;
  eventMarshaller: EventMarshaller;
}

/**
 * A transform stream that signs the eventstream
 */
export class EventSigningStream extends Transform {
  private priorSignature: string;
  private eventSigner: EventSigner;
  private eventMarshaller: EventMarshaller;
  constructor(options: EventSigningStreamOptions) {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
      ...options,
    });
    this.priorSignature = options.priorSignature;
    this.eventSigner = options.eventSigner;
    this.eventMarshaller = options.eventMarshaller;
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    this.on("error", () => {
      this.destroy();
    });
    this.on("end", () => {
      this.destroy();
    });
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
          headers: this.eventMarshaller.formatHeaders(dateHeader),
        },
        {
          priorSignature: this.priorSignature,
          signingDate: now,
        }
      );
      this.priorSignature = signature;
      const serializedSigned = this.eventMarshaller.marshall({
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
