import { _UnmarshalledAddress } from "./_Address";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAddressesOutput shape
 */
export interface DescribeAddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Snowball shipping addresses that were created for this account.</p>
   */
  Addresses?: Array<_UnmarshalledAddress>;

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of returned addresses will start from this point in the array.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
