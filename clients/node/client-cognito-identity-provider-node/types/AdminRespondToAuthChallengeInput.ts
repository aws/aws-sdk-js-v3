import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _ContextDataType } from "./_ContextDataType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request to respond to the authentication challenge, as an administrator.</p>
 */
export interface AdminRespondToAuthChallengeInput {
  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   */
  UserPoolId: string;

  /**
   * <p>The app client ID.</p>
   */
  ClientId: string;

  /**
   * <p>The challenge name. For more information, see .</p>
   */
  ChallengeName:
    | "SMS_MFA"
    | "SOFTWARE_TOKEN_MFA"
    | "SELECT_MFA_TYPE"
    | "MFA_SETUP"
    | "PASSWORD_VERIFIER"
    | "CUSTOM_CHALLENGE"
    | "DEVICE_SRP_AUTH"
    | "DEVICE_PASSWORD_VERIFIER"
    | "ADMIN_NO_SRP_AUTH"
    | "NEW_PASSWORD_REQUIRED"
    | string;

  /**
   * <p>The challenge responses. These are inputs corresponding to the value of <code>ChallengeName</code>, for example:</p> <ul> <li> <p> <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret).</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret).</p> </li> <li> <p> <code>ADMIN_NO_SRP_AUTH</code>: <code>PASSWORD</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret). </p> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, any other required attributes, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret). </p> </li> </ul> <p>The value of the <code>USERNAME</code> attribute must be the user's actual username, not an alias (such as email address or phone number). To make this easier, the <code>AdminInitiateAuth</code> response includes the actual username value in the <code>USERNAMEUSER_ID_FOR_SRP</code> attribute, even if you specified an alias in your call to <code>AdminInitiateAuth</code>.</p>
   */
  ChallengeResponses?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for <code>AdminRespondToAuthChallenge</code> calls.</p>
   */
  AnalyticsMetadata?: _AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
   */
  ContextData?: _ContextDataType;

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
