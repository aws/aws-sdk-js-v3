import { _UnmarshalledCelebrity } from "./_Celebrity";
import { _UnmarshalledComparedFace } from "./_ComparedFace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RecognizeCelebritiesOutput shape
 */
export interface RecognizeCelebritiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 15 celebrities in an image.</p>
   */
  CelebrityFaces?: Array<_UnmarshalledCelebrity>;

  /**
   * <p>Details about each unrecognized face in the image.</p>
   */
  UnrecognizedFaces?: Array<_UnmarshalledComparedFace>;

  /**
   * <p>The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> represent face locations before the image orientation is corrected. </p> <note> <p>If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If so, and the Exif metadata for the input image populates the orientation field, the value of <code>OrientationCorrection</code> is null. The <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> bounding box coordinates represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. </p> </note>
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
