import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRaidArraysInput shape
 */
export interface DescribeRaidArraysInput {
  /**
   * <p>The instance ID. If you use this parameter, <code>DescribeRaidArrays</code> returns descriptions of the RAID arrays associated with the specified instance. </p>
   */
  InstanceId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>An array of RAID array IDs. If you use this parameter, <code>DescribeRaidArrays</code> returns descriptions of the specified arrays. Otherwise, it returns a description of every array.</p>
   */
  RaidArrayIds?: Array<string> | Iterable<string>;

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
