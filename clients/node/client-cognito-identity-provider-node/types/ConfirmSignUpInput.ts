import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to confirm registration of a user.</p>
 */
export interface ConfirmSignUpInput {
  /**
   * <p>The ID of the app client associated with the user pool.</p>
   */
  ClientId: string;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>The user name of the user whose registration you wish to confirm.</p>
   */
  Username: string;

  /**
   * <p>The confirmation code sent by a user's request to confirm registration.</p>
   */
  ConfirmationCode: string;

  /**
   * <p>Boolean to be specified to force user confirmation irrespective of existing alias. By default set to <code>False</code>. If this parameter is set to <code>True</code> and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to <code>False</code>, the API will throw an <b>AliasExistsException</b> error.</p>
   */
  ForceAliasCreation?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmSignUp</code> calls.</p>
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
