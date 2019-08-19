import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateCaseInput {
  /**
   * <p>The title of the AWS Support case.</p>
   */
  subject: string;

  /**
   * <p>The code for the AWS service returned by the call to <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p> <note> <p>The availability of severity levels depends on each customer's support subscription. In other words, your subscription may not necessarily require the urgent level of response time.</p> </note>
   */
  severityCode?: string;

  /**
   * <p>The category of problem for the AWS Support case.</p>
   */
  categoryCode?: string;

  /**
   * <p>The communication body text when you create an AWS Support case by calling <a>CreateCase</a>.</p>
   */
  communicationBody: string;

  /**
   * <p>A list of email addresses that AWS Support copies on case correspondence.</p>
   */
  ccEmailAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>The type of issue for the case. You can specify either "customer-service" or "technical." If you do not indicate a value, the default is "technical."</p>
   */
  issueType?: string;

  /**
   * <p>The ID of a set of one or more attachments for the case. Create the set by using <a>AddAttachmentsToSet</a>.</p>
   */
  attachmentSetId?: string;

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
