import { _UnmarshalledAuthenticationResultType } from "./_AuthenticationResultType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to respond to the authentication challenge.</p>
 */
export interface RespondToAuthChallengeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The challenge name. For more information, see .</p>
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
   * <p>The challenge parameters. For more information, see .</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result returned by the server in response to the request to respond to the authentication challenge.</p>
   */
  AuthenticationResult?: _UnmarshalledAuthenticationResultType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
