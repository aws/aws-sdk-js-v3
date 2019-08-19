import { _UnmarshalledPhoneNumber } from "./_PhoneNumber";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPhoneNumberOutput shape
 */
export interface GetPhoneNumberOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: _UnmarshalledPhoneNumber;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
