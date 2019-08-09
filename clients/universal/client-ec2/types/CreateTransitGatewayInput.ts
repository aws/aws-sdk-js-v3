import { _TransitGatewayRequestOptions } from "./_TransitGatewayRequestOptions";
import { _TagSpecification } from "./_TagSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransitGatewayInput shape
 */
export interface CreateTransitGatewayInput {
  /**
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: _TransitGatewayRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
