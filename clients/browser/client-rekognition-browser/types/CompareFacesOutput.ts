import { _UnmarshalledComparedSourceImageFace } from "./_ComparedSourceImageFace";
import { _UnmarshalledCompareFacesMatch } from "./_CompareFacesMatch";
import { _UnmarshalledComparedFace } from "./_ComparedFace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CompareFacesOutput shape
 */
export interface CompareFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The face in the source image that was used for comparison.</p>
   */
  SourceImageFace?: _UnmarshalledComparedSourceImageFace;

  /**
   * <p>An array of faces in the target image that match the source image face. Each <code>CompareFacesMatch</code> object provides the bounding box, the confidence level that the bounding box contains a face, and the similarity score for the face in the bounding box and the face in the source image.</p>
   */
  FaceMatches?: Array<_UnmarshalledCompareFacesMatch>;

  /**
   * <p>An array of faces in the target image that did not match the source image face.</p>
   */
  UnmatchedFaces?: Array<_UnmarshalledComparedFace>;

  /**
   * <p>The value of <code>SourceImageOrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>
   */
  SourceImageOrientationCorrection?:
    | "ROTATE_0"
    | "ROTATE_90"
    | "ROTATE_180"
    | "ROTATE_270"
    | string;

  /**
   * <p>The value of <code>TargetImageOrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>
   */
  TargetImageOrientationCorrection?:
    | "ROTATE_0"
    | "ROTATE_90"
    | "ROTATE_180"
    | "ROTATE_270"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
