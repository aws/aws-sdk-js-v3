import { _UnmarshalledAddress } from "./_Address";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAddressesOutput shape
 */
export interface DescribeAddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Array<_UnmarshalledAddress>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
