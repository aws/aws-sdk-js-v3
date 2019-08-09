import { _PatchOperation } from "./_PatchOperation";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The PATCH request to update a usage plan of a given plan Id.</p>
 */
export interface UpdateUsagePlanInput {
  /**
   * <p>[Required] The Id of the to-be-updated usage plan.</p>
   */
  usagePlanId: string;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: Array<_PatchOperation> | Iterable<_PatchOperation>;

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
