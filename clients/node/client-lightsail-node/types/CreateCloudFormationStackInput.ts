import { _InstanceEntry } from "./_InstanceEntry";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCloudFormationStackInput shape
 */
export interface CreateCloudFormationStackInput {
  /**
   * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only pass one instance entry at a time in this array. You will get an invalid parameter error if you pass more than one instance entry in this array.</p>
   */
  instances: Array<_InstanceEntry> | Iterable<_InstanceEntry>;

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
