/**
 * <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>
 */
export interface _WafOverrideAction {
  /**
   * <p> <code>COUNT</code> overrides the action specified by the individual rule within a <code>RuleGroup</code> . If set to <code>NONE</code>, the rule's action will take place.</p>
   */
  Type: "NONE" | "COUNT" | string;
}

export type _UnmarshalledWafOverrideAction = _WafOverrideAction;
