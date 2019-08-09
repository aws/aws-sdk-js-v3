import { _DocumentLocation } from "./_DocumentLocation";
import { _NotificationChannel } from "./_NotificationChannel";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDocumentAnalysisInput shape
 */
export interface StartDocumentAnalysisInput {
  /**
   * <p>The location of the document to be processed.</p>
   */
  DocumentLocation: _DocumentLocation;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected fields and the associated text. To perform both types of analysis, add TABLES and FORMS to <code>FeatureTypes</code>. All selectable elements (<code>SELECTION_ELEMENT</code>) that are detected are returned, whatever the value of <code>FeatureTypes</code>. </p>
   */
  FeatureTypes:
    | Array<"TABLES" | "FORMS" | string>
    | Iterable<"TABLES" | "FORMS" | string>;

  /**
   * <p>The idempotent token that you use to identify the start request. If you use the same token with multiple <code>StartDocumentAnalysis</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An identifier you specify that's included in the completion notification that's published to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of document, such as a tax form or a receipt, that the completion notification corresponds to.</p>
   */
  JobTag?: string;

  /**
   * <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. </p>
   */
  NotificationChannel?: _NotificationChannel;

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
