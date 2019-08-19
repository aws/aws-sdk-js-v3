import { _UnmarshalledDeviceEvent } from "./_DeviceEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeviceEventsOutput shape
 */
export interface ListDeviceEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of zero or more elements describing the event(s) associated with the
   *  device.</p>
   */
  Events?: Array<_UnmarshalledDeviceEvent>;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
