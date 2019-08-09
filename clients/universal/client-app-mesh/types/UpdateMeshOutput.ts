import { _UnmarshalledMeshData } from "./_MeshData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMeshOutput shape
 */
export interface UpdateMeshOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object representing a service mesh returned by a describe operation.</p>
   */
  mesh: _UnmarshalledMeshData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
