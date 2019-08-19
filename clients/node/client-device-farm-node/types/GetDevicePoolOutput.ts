import { _UnmarshalledDevicePool } from "./_DevicePool";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get device pool request.</p>
 */
export interface GetDevicePoolOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the requested device pool.</p>
   */
  devicePool?: _UnmarshalledDevicePool;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
