import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchAvailablePhoneNumbersOutput shape
 */
export interface SearchAvailablePhoneNumbersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
