import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteInstanceInput shape
 */
export interface DeleteInstanceInput {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string;

  /**
   * <p>Whether to delete the instance Elastic IP address.</p>
   */
  DeleteElasticIp?: boolean;

  /**
   * <p>Whether to delete the instance's Amazon EBS volumes.</p>
   */
  DeleteVolumes?: boolean;

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
