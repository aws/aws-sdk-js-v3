import { _UserContextDataType } from "./_UserContextDataType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to resend the confirmation code.</p>
 */
export interface ResendConfirmationCodeInput {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
   */
  UserContextData?: _UserContextDataType;

  /**
   * <p>The user name of the user to whom you wish to resend a confirmation code.</p>
   */
  Username: string;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ResendConfirmationCode</code> calls.</p>
   */
  AnalyticsMetadata?: _AnalyticsMetadataType;

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
