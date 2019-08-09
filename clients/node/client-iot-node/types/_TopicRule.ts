import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Describes a rule.</p>
 */
export interface _TopicRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple lines, be sure to escape the newline characters.</p>
   */
  sql?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Array<_Action> | Iterable<_Action>;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: _Action;
}

export interface _UnmarshalledTopicRule extends _TopicRule {
  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Array<_UnmarshalledAction>;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: _UnmarshalledAction;
}
