import { _UnmarshalledAccelerator } from "./_Accelerator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAcceleratorOutput shape
 */
export interface CreateAcceleratorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The accelerator that is created by specifying a listener and the supported IP address types.</p>
   */
  Accelerator?: _UnmarshalledAccelerator;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
