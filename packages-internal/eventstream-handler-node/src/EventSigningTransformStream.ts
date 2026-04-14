import type { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { EventStreamCodec } from "@smithy/eventstream-codec";
import type { MessageHeaders, MessageSigner, Provider } from "@smithy/types";
import { type TransformCallback, type TransformOptions, Transform } from "node:stream";

/**
 * @internal
 */
export interface EventSigningStreamOptions extends TransformOptions {
  priorSignature: string;
  messageSigner: MessageSigner;
  eventStreamCodec: EventStreamCodec;
  systemClockOffsetProvider: Provider<number>;
  credentials?: AwsCredentialIdentityProvider;
}

/**
 * A transform stream that signs the eventstream.
 * @internal
 */
export class EventSigningTransformStream extends Transform {
  private priorSignature: string;
  private messageSigner: MessageSigner;
  private eventStreamCodec: EventStreamCodec;
  private readonly systemClockOffsetProvider: Provider<number>;
  private readonly staticCredentials?: Promise<AwsCredentialIdentity>;

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
    this.systemClockOffsetProvider = options.systemClockOffsetProvider;
    this.staticCredentials = options.credentials?.();
  }

  async _transform(chunk: Uint8Array, encoding: string, callback: TransformCallback): Promise<void> {
    try {
      const now = new Date(Date.now() + (await this.systemClockOffsetProvider()));
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
          eventStreamCredentials: await this.staticCredentials,
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
