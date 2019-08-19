import { _S3Resource } from "./_S3Resource";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateS3ResourcesInput shape
 */
export interface DisassociateS3ResourcesInput {
  /**
   * <p>The ID of the Amazon Macie member account whose resources you want to remove from being monitored by Amazon Macie. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources (buckets or prefixes) that you want to remove from being monitored and classified by Amazon Macie. </p>
   */
  associatedS3Resources: Array<_S3Resource> | Iterable<_S3Resource>;

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
