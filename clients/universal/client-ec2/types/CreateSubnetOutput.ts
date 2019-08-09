import { _UnmarshalledSubnet } from "./_Subnet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSubnetOutput shape
 */
export interface CreateSubnetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: _UnmarshalledSubnet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
