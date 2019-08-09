import { _S3Config } from "./_S3Config";
import { _TagListEntry } from "./_TagListEntry";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateLocationS3Request</p>
 */
export interface CreateLocationS3Input {
  /**
   * <p>A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket.</p>
   */
  S3BucketArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
   */
  S3Config: _S3Config;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: Array<_TagListEntry> | Iterable<_TagListEntry>;

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
