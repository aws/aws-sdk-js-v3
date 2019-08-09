import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFacesOutput shape
 */
export interface DeleteFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of strings (face IDs) of the faces that were deleted.</p>
   */
  DeletedFaces?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
