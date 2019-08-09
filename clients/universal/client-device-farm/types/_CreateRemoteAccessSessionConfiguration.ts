/**
 * <p>Configuration settings for a remote access session, including billing method.</p>
 */
export interface _CreateRemoteAccessSessionConfiguration {
  /**
   * <p>The billing method for the remote access session.</p>
   */
  billingMethod?: "METERED" | "UNMETERED" | string;

  /**
   * <p>An array of Amazon Resource Names (ARNs) included in the VPC endpoint configuration.</p>
   */
  vpceConfigurationArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCreateRemoteAccessSessionConfiguration
  extends _CreateRemoteAccessSessionConfiguration {
  /**
   * <p>An array of Amazon Resource Names (ARNs) included in the VPC endpoint configuration.</p>
   */
  vpceConfigurationArns?: Array<string>;
}
