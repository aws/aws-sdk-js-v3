import { _ResourceServerScopeType } from "./_ResourceServerScopeType";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResourceServerInput shape
 */
export interface UpdateResourceServerInput {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string;

  /**
   * <p>The identifier for the resource server.</p>
   */
  Identifier: string;

  /**
   * <p>The name of the resource server.</p>
   */
  Name: string;

  /**
   * <p>The scope values to be set for the resource server.</p>
   */
  Scopes?: Array<_ResourceServerScopeType> | Iterable<_ResourceServerScopeType>;

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
