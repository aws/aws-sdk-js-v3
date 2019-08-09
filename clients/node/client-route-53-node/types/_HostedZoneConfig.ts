/**
 * <p>A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.</p>
 */
export interface _HostedZoneConfig {
  /**
   * <p>Any comments that you want to include about the hosted zone.</p>
   */
  Comment?: string;

  /**
   * <p>A value that indicates whether this is a private hosted zone.</p>
   */
  PrivateZone?: boolean;
}

export type _UnmarshalledHostedZoneConfig = _HostedZoneConfig;
