/**
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 */
export interface _Rule {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The state of the rule.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>
   */
  RoleArn?: string;

  /**
   * <p>If an AWS service created the rule on behalf of your account, this field displays the principal name of the service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The event bus associated with the rule.</p>
   */
  EventBusName?: string;
}

export type _UnmarshalledRule = _Rule;
