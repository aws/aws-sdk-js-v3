import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutRuleInput shape
 */
export interface PutRuleInput {
  /**
   * <p>The name of the rule that you're creating or updating.</p>
   */
  Name: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>A description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The event bus to associate with this rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
