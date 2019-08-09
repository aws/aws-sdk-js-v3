import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request representing the confirmation for a password reset.</p>
 */
export interface ConfirmForgotPasswordInput {
  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   */
  ClientId: string;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>The user name of the user for whom you want to enter a code to retrieve a forgotten password.</p>
   */
  Username: string;

  /**
   * <p>The confirmation code sent by a user's request to retrieve a forgotten password. For more information, see </p>
   */
  ConfirmationCode: string;

  /**
   * <p>The password sent by a user's request to retrieve a forgotten password.</p>
   */
  Password: string;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmForgotPassword</code> calls.</p>
   */
  AnalyticsMetadata?: _AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
   */
  UserContextData?: _UserContextDataType;

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
