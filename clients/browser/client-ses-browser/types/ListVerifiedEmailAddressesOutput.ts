import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of email addresses that you have verified with Amazon SES under your AWS account.</p>
 */
export interface ListVerifiedEmailAddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of email addresses that have been verified.</p>
   */
  VerifiedEmailAddresses?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
