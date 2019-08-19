import { _InstancePatchStateFilter } from "./_InstancePatchStateFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstancePatchStatesForPatchGroupInput shape
 */
export interface DescribeInstancePatchStatesForPatchGroupInput {
  /**
   * <p>The name of the patch group for which the patch state information should be retrieved.</p>
   */
  PatchGroup: string;

  /**
   * <p>Each entry in the array is a structure containing:</p> <p>Key (string between 1 and 200 characters)</p> <p> Values (array containing a single string)</p> <p> Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")</p>
   */
  Filters?:
    | Array<_InstancePatchStateFilter>
    | Iterable<_InstancePatchStateFilter>;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of patches to return (per page).</p>
   */
  MaxResults?: number;

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
