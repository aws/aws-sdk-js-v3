import { _UnmarshalledDeviceType } from "./_DeviceType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response to list devices.</p>
 */
export interface ListDevicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The devices returned in the list devices response.</p>
   */
  Devices?: Array<_UnmarshalledDeviceType>;

  /**
   * <p>The pagination token for the list device response.</p>
   */
  PaginationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
