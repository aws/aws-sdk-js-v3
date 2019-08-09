import { _UnmarshalledAddress } from "./_Address";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAddressOutput shape
 */
export interface DescribeAddressOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The address that you want the Snowball or Snowballs associated with a specific job to be shipped to.</p>
   */
  Address?: _UnmarshalledAddress;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
