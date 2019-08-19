import { _UnmarshalledFaceRecord } from "./_FaceRecord";
import { _UnmarshalledUnindexedFace } from "./_UnindexedFace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * IndexFacesOutput shape
 */
export interface IndexFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of faces detected and added to the collection. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. </p>
   */
  FaceRecords?: Array<_UnmarshalledFaceRecord>;

  /**
   * <p>If your collection is associated with a face detection model that's later than version 3.0, the value of <code>OrientationCorrection</code> is always null and no orientation information is returned.</p> <p>If your collection is associated with a face detection model that's version 3.0 or earlier, the following applies:</p> <ul> <li> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. The value of <code>OrientationCorrection</code> is null.</p> </li> <li> <p>If the image doesn't contain orientation information in its Exif metadata, Amazon Rekognition returns an estimated orientation (ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270). Amazon Rekognition doesn’t perform image correction for images. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.</p> </li> </ul> <p>Bounding box information is returned in the <code>FaceRecords</code> array. You can get the version of the face detection model by calling <a>DescribeCollection</a>. </p>
   */
  OrientationCorrection?:
    | "ROTATE_0"
    | "ROTATE_90"
    | "ROTATE_180"
    | "ROTATE_270"
    | string;

  /**
   * <p>The version number of the face detection model that's associated with the input collection (<code>CollectionId</code>).</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>An array of faces that were detected in the image but weren't indexed. They weren't indexed because the quality filter identified them as low quality, or the <code>MaxFaces</code> request parameter filtered them out. To use the quality filter, you specify the <code>QualityFilter</code> request parameter.</p>
   */
  UnindexedFaces?: Array<_UnmarshalledUnindexedFace>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
