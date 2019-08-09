import { _UnmarshalledPhoneNumberOrder } from "./_PhoneNumberOrder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPhoneNumberOrdersOutput shape
 */
export interface ListPhoneNumberOrdersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: Array<_UnmarshalledPhoneNumberOrder>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
