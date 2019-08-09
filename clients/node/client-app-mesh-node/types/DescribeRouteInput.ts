import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRouteInput shape
 */
export interface DescribeRouteInput {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string;

  /**
   * <p>The name of the route to describe.</p>
   */
  routeName: string;

  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string;

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
