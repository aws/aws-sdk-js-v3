import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Describes a rule.</p>
 */
export interface _TopicRulePayload {
  /**
   * <p>The SQL statement used to query the topic. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference">AWS IoT SQL Reference</a> in the <i>AWS IoT Developer Guide</i>.</p>
   */
  sql: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions: Array<_Action> | Iterable<_Action>;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to take when an error occurs.</p>
   */
  errorAction?: _Action;
}

export interface _UnmarshalledTopicRulePayload extends _TopicRulePayload {
  /**
   * <p>The actions associated with the rule.</p>
   */
  actions: Array<_UnmarshalledAction>;

  /**
   * <p>The action to take when an error occurs.</p>
   */
  errorAction?: _UnmarshalledAction;
}
