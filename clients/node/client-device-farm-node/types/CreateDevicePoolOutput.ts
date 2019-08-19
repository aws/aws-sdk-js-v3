import { _UnmarshalledDevicePool } from "./_DevicePool";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a create device pool request.</p>
 */
export interface CreateDevicePoolOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly created device pool.</p>
   */
  devicePool?: _UnmarshalledDevicePool;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
