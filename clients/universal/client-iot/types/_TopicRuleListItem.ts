/**
 * <p>Describes a rule.</p>
 */
export interface _TopicRuleListItem {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

export interface _UnmarshalledTopicRuleListItem extends _TopicRuleListItem {
  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;
}
