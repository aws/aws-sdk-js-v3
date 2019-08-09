import { _UnmarshalledDeviceInstance } from "./_DeviceInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDeviceInstanceOutput shape
 */
export interface UpdateDeviceInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about your device instance.</p>
   */
  deviceInstance?: _UnmarshalledDeviceInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
