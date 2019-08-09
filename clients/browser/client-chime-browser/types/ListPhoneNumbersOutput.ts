import { _UnmarshalledPhoneNumber } from "./_PhoneNumber";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPhoneNumbersOutput shape
 */
export interface ListPhoneNumbersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: Array<_UnmarshalledPhoneNumber>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
