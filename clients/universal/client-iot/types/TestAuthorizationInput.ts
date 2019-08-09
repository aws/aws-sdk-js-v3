import { _AuthInfo } from "./_AuthInfo";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestAuthorizationInput shape
 */
export interface TestAuthorizationInput {
  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: Array<_AuthInfo> | Iterable<_AuthInfo>;

  /**
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: Array<string> | Iterable<string>;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: Array<string> | Iterable<string>;

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
