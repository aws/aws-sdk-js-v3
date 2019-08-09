/**
 * <p>Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).</p>
 */
export interface _DeliveryOptions {
  /**
   * <p>Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: "Require" | "Optional" | string;
}

export type _UnmarshalledDeliveryOptions = _DeliveryOptions;
