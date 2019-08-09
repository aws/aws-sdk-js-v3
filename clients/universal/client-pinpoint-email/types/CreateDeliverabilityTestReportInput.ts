import { _EmailContent } from "./_EmailContent";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.</p>
 */
export interface CreateDeliverabilityTestReportInput {
  /**
   * <p>A unique name that helps you to identify the predictive inbox placement test when you retrieve the results.</p>
   */
  ReportName?: string;

  /**
   * <p>The email address that the predictive inbox placement test email was sent from.</p>
   */
  FromEmailAddress: string;

  /**
   * <p>The HTML body of the message that you sent when you performed the predictive inbox placement test.</p>
   */
  Content: _EmailContent;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
