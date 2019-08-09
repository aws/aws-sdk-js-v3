import { _IpRuleItem, _UnmarshalledIpRuleItem } from "./_IpRuleItem";

/**
 * <p>Describes an IP access control group.</p>
 */
export interface _WorkspacesIpGroup {
  /**
   * <p>The identifier of the group.</p>
   */
  groupId?: string;

  /**
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * <p>The description of the group.</p>
   */
  groupDesc?: string;

  /**
   * <p>The rules.</p>
   */
  userRules?: Array<_IpRuleItem> | Iterable<_IpRuleItem>;
}

export interface _UnmarshalledWorkspacesIpGroup extends _WorkspacesIpGroup {
  /**
   * <p>The rules.</p>
   */
  userRules?: Array<_UnmarshalledIpRuleItem>;
}
