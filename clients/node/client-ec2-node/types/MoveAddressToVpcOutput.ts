import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MoveAddressToVpcOutput shape
 */
export interface MoveAddressToVpcOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The status of the move of the IP address.</p>
   */
  Status?: "MoveInProgress" | "InVpc" | "InClassic" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
