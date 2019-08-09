import { _CorsRule } from "./_CorsRule";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutCorsPolicyInput shape
 */
export interface PutCorsPolicyInput {
  /**
   * <p>The name of the container that you want to assign the CORS policy to.</p>
   */
  ContainerName: string;

  /**
   * <p>The CORS policy to apply to the container. </p>
   */
  CorsPolicy: Array<_CorsRule> | Iterable<_CorsRule>;

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
