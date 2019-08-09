import { _RouteSpec } from "./_RouteSpec";
import { _TagRef } from "./_TagRef";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRouteInput shape
 */
export interface CreateRouteInput {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh to create the route in.</p>
   */
  meshName: string;

  /**
   * <p>The name to use for the route.</p>
   */
  routeName: string;

  /**
   * <p>The route specification to apply.</p>
   */
  spec: _RouteSpec;

  /**
   * <p>Optional metadata that you can apply to the route to assist with categorization and
   *          organization. Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: Array<_TagRef> | Iterable<_TagRef>;

  /**
   * <p>The name of the virtual router in which to create the route.</p>
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
