/**
 * <p>Used to associate a configuration set with a dedicated IP pool.</p>
 */
export interface _DeliveryOptions {
  /**
   * <p>Specifies whether Amazon Pinpoint should require that incoming email is delivered over a connection that’s encrypted by using Transport Layer Security (TLS). If this value is set to <code>Require</code>, Amazon Pinpoint will bounce email messages that cannot be delivered over TLS. The default value is <code>Optional</code>.</p>
   */
  TlsPolicy?: "REQUIRE" | "OPTIONAL" | string;

  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration set.</p>
   */
  SendingPoolName?: string;
}

export type _UnmarshalledDeliveryOptions = _DeliveryOptions;
