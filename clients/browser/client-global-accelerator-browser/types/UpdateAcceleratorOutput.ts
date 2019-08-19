import { _UnmarshalledAccelerator } from "./_Accelerator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAcceleratorOutput shape
 */
export interface UpdateAcceleratorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the updated accelerator.</p>
   */
  Accelerator?: _UnmarshalledAccelerator;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
