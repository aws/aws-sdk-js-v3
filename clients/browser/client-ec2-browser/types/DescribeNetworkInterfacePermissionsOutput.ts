import { _UnmarshalledNetworkInterfacePermission } from "./_NetworkInterfacePermission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The network interface permissions.</p>
   */
  NetworkInterfacePermissions?: Array<_UnmarshalledNetworkInterfacePermission>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
