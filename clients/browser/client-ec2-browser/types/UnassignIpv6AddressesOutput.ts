import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UnassignIpv6AddressesOutput shape
 */
export interface UnassignIpv6AddressesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
