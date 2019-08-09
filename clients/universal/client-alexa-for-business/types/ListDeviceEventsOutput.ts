import { _UnmarshalledDeviceEvent } from "./_DeviceEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeviceEventsOutput shape
 */
export interface ListDeviceEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The device events requested for the device ARN.</p>
   */
  DeviceEvents?: Array<_UnmarshalledDeviceEvent>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
