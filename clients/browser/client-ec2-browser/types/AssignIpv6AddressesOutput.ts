import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssignIpv6AddressesOutput shape
 */
export interface AssignIpv6AddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IPv6 addresses assigned to the network interface.</p>
   */
  AssignedIpv6Addresses?: Array<string>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
