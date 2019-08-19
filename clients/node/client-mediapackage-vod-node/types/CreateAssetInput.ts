import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A new MediaPackage VOD Asset configuration.
 */
export interface CreateAssetInput {
  /**
   * The unique identifier for the Asset.
   */
  Id: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn: string;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn: string;

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
