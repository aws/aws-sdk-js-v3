import { _UnmarshalledNetworkInterfacePermission } from "./_NetworkInterfacePermission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: _UnmarshalledNetworkInterfacePermission;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
