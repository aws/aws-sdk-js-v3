/**
 * _NewDhcpConfiguration shape
 */
export interface _NewDhcpConfiguration {
  /**
   * _String shape
   */
  Key?: string;

  /**
   * _ValueStringList shape
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledNewDhcpConfiguration
  extends _NewDhcpConfiguration {
  /**
   * _ValueStringList shape
   */
  Values?: Array<string>;
}
