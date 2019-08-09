/**
 * <p>The type of the configuration to override the risk decision.</p>
 */
export interface _RiskExceptionConfigurationType {
  /**
   * <p>Overrides the risk decision to always block the pre-authentication requests. The IP range is in CIDR notation: a compact representation of an IP address and its associated routing prefix.</p>
   */
  BlockedIPRangeList?: Array<string> | Iterable<string>;

  /**
   * <p>Risk detection is not performed on the IP addresses in the range list. The IP range is in CIDR notation.</p>
   */
  SkippedIPRangeList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRiskExceptionConfigurationType
  extends _RiskExceptionConfigurationType {
  /**
   * <p>Overrides the risk decision to always block the pre-authentication requests. The IP range is in CIDR notation: a compact representation of an IP address and its associated routing prefix.</p>
   */
  BlockedIPRangeList?: Array<string>;

  /**
   * <p>Risk detection is not performed on the IP addresses in the range list. The IP range is in CIDR notation.</p>
   */
  SkippedIPRangeList?: Array<string>;
}
