import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InvokeDeviceMethodOutput shape
 */
export interface InvokeDeviceMethodOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A JSON encoded string containing the device method response.</p>
   */
  DeviceMethodResponse?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
