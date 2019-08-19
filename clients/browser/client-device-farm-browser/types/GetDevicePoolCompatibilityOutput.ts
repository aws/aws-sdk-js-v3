import { _UnmarshalledDevicePoolCompatibilityResult } from "./_DevicePoolCompatibilityResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of describe device pool compatibility request.</p>
 */
export interface GetDevicePoolCompatibilityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about compatible devices.</p>
   */
  compatibleDevices?: Array<_UnmarshalledDevicePoolCompatibilityResult>;

  /**
   * <p>Information about incompatible devices.</p>
   */
  incompatibleDevices?: Array<_UnmarshalledDevicePoolCompatibilityResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
