import { _UnmarshalledFace } from "./_Face";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFacesOutput shape
 */
export interface ListFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Face</code> objects. </p>
   */
  Faces?: Array<_UnmarshalledFace>;

  /**
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.</p>
   */
  NextToken?: string;

  /**
   * <p>Version number of the face detection model associated with the input collection (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
