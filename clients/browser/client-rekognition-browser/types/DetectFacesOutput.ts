import { _UnmarshalledFaceDetail } from "./_FaceDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectFacesOutput shape
 */
export interface DetectFacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details of each face found in the image. </p>
   */
  FaceDetails?: Array<_UnmarshalledFaceDetail>;

  /**
   * <p>The value of <code>OrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>
   */
  OrientationCorrection?:
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
