import { _UnmarshalledDeviceSummary } from "./_DeviceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDevicesOutput shape
 */
export interface ListDevicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the devices.</p>
   */
  Devices?: Array<_UnmarshalledDeviceSummary>;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
