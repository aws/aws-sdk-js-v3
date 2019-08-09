/**
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface _IpRuleItem {
  /**
   * <p>The IP address range, in CIDR notation.</p>
   */
  ipRule?: string;

  /**
   * <p>The description.</p>
   */
  ruleDesc?: string;
}

export type _UnmarshalledIpRuleItem = _IpRuleItem;
