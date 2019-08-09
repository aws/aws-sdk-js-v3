import { _ParameterConstraints } from "./_ParameterConstraints";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRouteResponseInput shape
 */
export interface UpdateRouteResponseInput {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

  /**
   * <p>The model selection expression for the route response.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>The response models for the route response.</p>
   */
  ResponseModels?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The route response parameters.</p>
   */
  ResponseParameters?:
    | { [key: string]: _ParameterConstraints }
    | Iterable<[string, _ParameterConstraints]>;

  /**
   * <p>The route ID.</p>
   */
  RouteId: string;

  /**
   * <p>The route response ID.</p>
   */
  RouteResponseId: string;

  /**
   * <p>The route response key.</p>
   */
  RouteResponseKey?: string;

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
