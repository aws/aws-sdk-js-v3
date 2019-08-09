import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateSoftwareTokenOutput shape
 */
export interface AssociateSoftwareTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique generated shared secret code that is used in the TOTP algorithm to generate a one time code.</p>
   */
  SecretCode?: string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.</p>
   */
  Session?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
