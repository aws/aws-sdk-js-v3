import { _UnmarshalledIpPermission } from "./_IpPermission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeFleetPortSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that contains port settings for the requested fleet ID.</p>
   */
  InboundPermissions?: Array<_UnmarshalledIpPermission>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
