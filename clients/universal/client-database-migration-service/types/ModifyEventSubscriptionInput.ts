import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyEventSubscriptionInput {
  /**
   * <p>The name of the AWS DMS event notification subscription to be modified.</p>
   */
  SubscriptionName: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p> The type of AWS DMS resource that generates the events you want to subscribe to. </p> <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;

  /**
   * <p> A list of event categories for a source type that you want to subscribe to. Use the <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the subscription. </p>
   */
  Enabled?: boolean;

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
