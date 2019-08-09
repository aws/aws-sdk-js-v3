import { _UnmarshalledPhoneNumberOrder } from "./_PhoneNumberOrder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePhoneNumberOrderOutput shape
 */
export interface CreatePhoneNumberOrderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: _UnmarshalledPhoneNumberOrder;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
