import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDevicesInPlacementOutput shape
 */
export interface GetDevicesInPlacementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing the devices (zero or more) within the placement.</p>
   */
  devices: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
