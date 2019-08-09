import { _PushSync } from "./_PushSync";
import { _CognitoStreams } from "./_CognitoStreams";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the SetIdentityPoolConfiguration operation.</p>
 */
export interface SetIdentityPoolConfigurationInput {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.</p>
   */
  IdentityPoolId: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: _PushSync;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: _CognitoStreams;

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
