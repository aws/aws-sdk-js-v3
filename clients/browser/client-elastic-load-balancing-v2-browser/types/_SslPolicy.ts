import { _Cipher, _UnmarshalledCipher } from "./_Cipher";

/**
 * <p>Information about a policy used for SSL negotiation.</p>
 */
export interface _SslPolicy {
  /**
   * <p>The protocols.</p>
   */
  SslProtocols?: Array<string> | Iterable<string>;

  /**
   * <p>The ciphers.</p>
   */
  Ciphers?: Array<_Cipher> | Iterable<_Cipher>;

  /**
   * <p>The name of the policy.</p>
   */
  Name?: string;
}

export interface _UnmarshalledSslPolicy extends _SslPolicy {
  /**
   * <p>The protocols.</p>
   */
  SslProtocols?: Array<string>;

  /**
   * <p>The ciphers.</p>
   */
  Ciphers?: Array<_UnmarshalledCipher>;
}
