import { _UnmarshalledDeviceType } from "./_DeviceType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Gets the device response, as an administrator.</p>
 */
export interface AdminGetDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The device.</p>
   */
  Device: _UnmarshalledDeviceType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
