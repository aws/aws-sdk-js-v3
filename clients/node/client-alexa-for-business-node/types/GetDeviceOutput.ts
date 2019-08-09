import { _UnmarshalledDevice } from "./_Device";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDeviceOutput shape
 */
export interface GetDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the device requested. Required.</p>
   */
  Device?: _UnmarshalledDevice;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
