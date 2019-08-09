import { _UnmarshalledAssignedPrivateIpAddress } from "./_AssignedPrivateIpAddress";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssignPrivateIpAddressesOutput shape
 */
export interface AssignPrivateIpAddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   */
  AssignedPrivateIpAddresses?: Array<_UnmarshalledAssignedPrivateIpAddress>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
