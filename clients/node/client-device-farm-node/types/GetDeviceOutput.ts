import { _UnmarshalledDevice } from "./_Device";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get device request.</p>
 */
export interface GetDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the requested device.</p>
   */
  device?: _UnmarshalledDevice;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
