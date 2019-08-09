import { _UnmarshalledVTLDevice } from "./_VTLDevice";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeVTLDevicesOutput</p>
 */
export interface DescribeVTLDevicesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of VTL device objects composed of the Amazon Resource Name(ARN) of the VTL devices.</p>
   */
  VTLDevices?: Array<_UnmarshalledVTLDevice>;

  /**
   * <p>An opaque string that indicates the position at which the VTL devices that were fetched for description ended. Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL devices to describe, this field does not appear in the response.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
