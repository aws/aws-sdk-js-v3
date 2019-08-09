/**
 * <p>A summary of the rule groups you are subscribed to.</p>
 */
export interface _SubscribedRuleGroupSummary {
  /**
   * <p>A unique identifier for a <code>RuleGroup</code>.</p>
   */
  RuleGroupId: string;

  /**
   * <p>A friendly name or description of the <code>RuleGroup</code>. You can't change the name of a <code>RuleGroup</code> after you create it.</p>
   */
  Name: string;

  /**
   * <p>A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the <code>RuleGroup</code>.</p>
   */
  MetricName: string;
}

export type _UnmarshalledSubscribedRuleGroupSummary = _SubscribedRuleGroupSummary;
