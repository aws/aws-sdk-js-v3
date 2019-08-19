import { _UnmarshalledDeviceDescription } from "./_DeviceDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDevicesOutput shape
 */
export interface ListDevicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of devices.</p>
   */
  Devices?: Array<_UnmarshalledDeviceDescription>;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
