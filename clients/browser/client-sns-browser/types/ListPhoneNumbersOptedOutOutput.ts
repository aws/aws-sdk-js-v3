import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the <code>ListPhoneNumbersOptedOut</code> action.</p>
 */
export interface ListPhoneNumbersOptedOutOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of phone numbers that are opted out of receiving SMS messages. The list is paginated, and each page can contain up to 100 phone numbers.</p>
   */
  phoneNumbers?: Array<string>;

  /**
   * <p>A <code>NextToken</code> string is returned when you call the <code>ListPhoneNumbersOptedOut</code> action if additional records are available after the first page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
