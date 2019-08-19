import { _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _UnmarshalledFaceMatch } from "./_FaceMatch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchFacesByImageOutput shape
 */
export interface SearchFacesByImageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The bounding box around the face in the input image that Amazon Rekognition used for the search.</p>
   */
  SearchedFaceBoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>The level of confidence that the <code>searchedFaceBoundingBox</code>, contains a face.</p>
   */
  SearchedFaceConfidence?: number;

  /**
   * <p>An array of faces that match the input face, along with the confidence in the match.</p>
   */
  FaceMatches?: Array<_UnmarshalledFaceMatch>;

  /**
   * <p>Version number of the face detection model associated with the input collection (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
