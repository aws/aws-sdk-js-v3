import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResendContactReachabilityEmailOutput shape
 */
export interface ResendContactReachabilityEmailOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The domain name for which you requested a confirmation email.</p>
   */
  domainName?: string;

  /**
   * <p>The email address for the registrant contact at the time that we sent the verification email.</p>
   */
  emailAddress?: string;

  /**
   * <p> <code>True</code> if the email address for the registrant contact has already been verified, and <code>false</code> otherwise. If the email address has already been verified, we don't send another confirmation email.</p>
   */
  isAlreadyVerified?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
