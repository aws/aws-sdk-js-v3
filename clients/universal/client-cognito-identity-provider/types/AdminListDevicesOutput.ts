import { _UnmarshalledDeviceType } from "./_DeviceType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Lists the device's response, as an administrator.</p>
 */
export interface AdminListDevicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The devices in the list of devices response.</p>
   */
  Devices?: Array<_UnmarshalledDeviceType>;

  /**
   * <p>The pagination token.</p>
   */
  PaginationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
