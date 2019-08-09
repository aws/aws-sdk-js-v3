import { _UnmarshalledDeviceInstance } from "./_DeviceInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeviceInstancesOutput shape
 */
export interface ListDeviceInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about your device instances.</p>
   */
  deviceInstances?: Array<_UnmarshalledDeviceInstance>;

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
