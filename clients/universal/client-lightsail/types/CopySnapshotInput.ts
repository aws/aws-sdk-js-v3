import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopySnapshotInput shape
 */
export interface CopySnapshotInput {
  /**
   * <p>The name of the source instance or disk snapshot to be copied.</p>
   */
  sourceSnapshotName: string;

  /**
   * <p>The name of the new instance or disk snapshot to be created as a copy.</p>
   */
  targetSnapshotName: string;

  /**
   * <p>The AWS Region where the source snapshot is located.</p>
   */
  sourceRegion:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "eu-central-1"
    | "ca-central-1"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | string;

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
