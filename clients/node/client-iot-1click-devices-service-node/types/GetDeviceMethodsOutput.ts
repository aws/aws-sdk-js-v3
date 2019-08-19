import { _UnmarshalledDeviceMethod } from "./_DeviceMethod";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDeviceMethodsOutput shape
 */
export interface GetDeviceMethodsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of available device APIs.</p>
   */
  DeviceMethods?: Array<_UnmarshalledDeviceMethod>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
