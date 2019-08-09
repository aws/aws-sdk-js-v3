import { _RuleCondition, _UnmarshalledRuleCondition } from "./_RuleCondition";
import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Information about a rule.</p>
 */
export interface _Rule {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;

  /**
   * <p>The priority.</p>
   */
  Priority?: string;

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>, and zero or more of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: Array<_RuleCondition> | Iterable<_RuleCondition>;

  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>redirect</code>, or <code>fixed-response</code>, and it must be the last action to be performed.</p>
   */
  Actions?: Array<_Action> | Iterable<_Action>;

  /**
   * <p>Indicates whether this is the default rule.</p>
   */
  IsDefault?: boolean;
}

export interface _UnmarshalledRule extends _Rule {
  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>, and zero or more of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: Array<_UnmarshalledRuleCondition>;

  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>redirect</code>, or <code>fixed-response</code>, and it must be the last action to be performed.</p>
   */
  Actions?: Array<_UnmarshalledAction>;
}
