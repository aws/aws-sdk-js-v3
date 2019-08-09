import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAuthorizerInput shape
 */
export interface CreateAuthorizerInput {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn: string;

  /**
   * <p>The name of the token key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName: string;

  /**
   * <p>The public keys used to verify the digital signature returned by your custom authentication service.</p>
   */
  tokenSigningPublicKeys:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The status of the create authorizer request.</p>
   */
  status?: "ACTIVE" | "INACTIVE" | string;

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
