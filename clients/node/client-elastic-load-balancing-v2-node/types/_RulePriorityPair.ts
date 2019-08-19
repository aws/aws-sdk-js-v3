/**
 * <p>Information about the priorities for the rules for a listener.</p>
 */
export interface _RulePriorityPair {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;

  /**
   * <p>The rule priority.</p>
   */
  Priority?: number;
}

export type _UnmarshalledRulePriorityPair = _RulePriorityPair;
