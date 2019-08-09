/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface _ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export type _UnmarshalledClassicLinkDnsSupport = _ClassicLinkDnsSupport;
