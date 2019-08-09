import { _UnmarshalledMeshRef } from "./_MeshRef";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMeshesOutput shape
 */
export interface ListMeshesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of existing service meshes.</p>
   */
  meshes: Array<_UnmarshalledMeshRef>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
