import { _PatchOperation } from "./_PatchOperation";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents an update integration response request.</p>
 */
export interface UpdateIntegrationResponseInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] Specifies an update integration response request's resource identifier.</p>
   */
  resourceId: string;

  /**
   * <p>[Required] Specifies an update integration response request's HTTP method.</p>
   */
  httpMethod: string;

  /**
   * <p>[Required] Specifies an update integration response request's status code.</p>
   */
  statusCode: string;

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
