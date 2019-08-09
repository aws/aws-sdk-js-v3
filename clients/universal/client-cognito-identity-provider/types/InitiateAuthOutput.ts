import { _UnmarshalledAuthenticationResultType } from "./_AuthenticationResultType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Initiates the authentication response.</p>
 */
export interface InitiateAuthOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the challenge which you are responding to with this call. This is returned to you in the <code>AdminInitiateAuth</code> response if you need to pass another challenge.</p> <p>Valid values include the following. Note that all of these challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable) in the parameters.</p> <ul> <li> <p> <code>SMS_MFA</code>: Next challenge is to supply an <code>SMS_MFA_CODE</code>, delivered via SMS.</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: Next challenge is to supply <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after the client-side SRP calculations.</p> </li> <li> <p> <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.</p> </li> <li> <p> <code>DEVICE_SRP_AUTH</code>: If device tracking was enabled on your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking this device.</p> </li> <li> <p> <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to <code>PASSWORD_VERIFIER</code>, but for devices only.</p> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: For users which are required to change their passwords after successful first login. This challenge should be passed with <code>NEW_PASSWORD</code> and any other required attributes.</p> </li> </ul>
   */
  ChallengeName?:
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
   * <p>The session which should be passed both ways in challenge-response calls to the service. If the or API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. These are returned to you in the <code>InitiateAuth</code> response if you need to pass another challenge. The responses in this parameter should be used to compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p> <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable).</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result of the authentication response. This is only returned if the caller does not need to pass another challenge. If the caller does need to pass another challenge before it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and <code>Session</code> are returned.</p>
   */
  AuthenticationResult?: _UnmarshalledAuthenticationResultType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
