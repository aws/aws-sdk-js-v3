import { _UnmarshalledDeviceDescription } from "./_DeviceDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeviceOutput shape
 */
export interface DescribeDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Device details.</p>
   */
  DeviceDescription?: _UnmarshalledDeviceDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
