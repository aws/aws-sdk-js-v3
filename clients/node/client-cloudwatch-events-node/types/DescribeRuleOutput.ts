import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRuleOutput shape
 */
export interface DescribeRuleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>Specifies whether the rule is enabled or disabled.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, this field displays the principal name of the AWS service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
