import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.</p>
 */
export interface VerifyDomainIdentityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A TXT record that you must place in the DNS settings of the domain to complete domain verification with Amazon SES.</p> <p>As Amazon SES searches for the TXT record, the domain's verification status is "Pending". When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p>
   */
  VerificationToken: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
