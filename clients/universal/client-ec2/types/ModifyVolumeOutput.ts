import { _UnmarshalledVolumeModification } from "./_VolumeModification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyVolumeOutput shape
 */
export interface ModifyVolumeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the volume modification.</p>
   */
  VolumeModification?: _UnmarshalledVolumeModification;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
