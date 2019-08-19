import { _S3ResourceClassificationUpdate } from "./_S3ResourceClassificationUpdate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateS3ResourcesInput shape
 */
export interface UpdateS3ResourcesInput {
  /**
   * <p>The AWS ID of the Amazon Macie member account whose S3 resources' classification types you want to update. </p>
   */
  memberAccountId?: string;

  /**
   * <p>The S3 resources whose classification types you want to update.</p>
   */
  s3ResourcesUpdate:
    | Array<_S3ResourceClassificationUpdate>
    | Iterable<_S3ResourceClassificationUpdate>;

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
