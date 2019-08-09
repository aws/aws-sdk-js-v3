import { _UnmarshalledMeshData } from "./_MeshData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteMeshOutput shape
 */
export interface DeleteMeshOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The service mesh that was deleted.</p>
   */
  mesh: _UnmarshalledMeshData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
