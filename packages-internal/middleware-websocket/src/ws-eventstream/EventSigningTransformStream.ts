import type { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { EventStreamCodec } from "@smithy/core/event-streams";
import { fromHex } from "@smithy/core/serde";
import type { MessageHeaders, MessageSigner, Provider } from "@smithy/types";

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
    systemClockOffsetProvider: Provider<number>,
    credentials?: AwsCredentialIdentityProvider
  ) {
    let priorSignature = initialSignature;
    const staticCredentials: Promise<AwsCredentialIdentity> | undefined = credentials?.();
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
              eventStreamCredentials: await staticCredentials,
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
