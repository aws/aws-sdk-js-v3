import { _UnmarshalledFaceMatch } from "./_FaceMatch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchFacesOutput shape
 */
export interface SearchFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ID of the face that was searched for matches in a collection.</p>
   */
  SearchedFaceId?: string;

  /**
   * <p>An array of faces that matched the input face, along with the confidence in the match.</p>
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
