import { _UnmarshalledAcceleratorAttributes } from "./_AcceleratorAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAcceleratorAttributesOutput shape
 */
export interface UpdateAcceleratorAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Updated attributes for the accelerator.</p>
   */
  AcceleratorAttributes?: _UnmarshalledAcceleratorAttributes;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
