import { _UnmarshalledDeviceData } from "./_DeviceData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchDevicesOutput shape
 */
export interface SearchDevicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The devices that meet the specified set of filter criteria, in sort order.</p>
   */
  Devices?: Array<_UnmarshalledDeviceData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of devices returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
