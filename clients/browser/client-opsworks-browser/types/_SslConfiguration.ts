/**
 * <p>Describes an app's SSL configuration.</p>
 */
export interface _SslConfiguration {
  /**
   * <p>The contents of the certificate's domain.crt file.</p>
   */
  Certificate: string;

  /**
   * <p>The private key; the contents of the certificate's domain.kex file.</p>
   */
  PrivateKey: string;

  /**
   * <p>Optional. Can be used to specify an intermediate certificate authority key or client authentication.</p>
   */
  Chain?: string;
}

export type _UnmarshalledSslConfiguration = _SslConfiguration;
