import { _FaceDetail, _UnmarshalledFaceDetail } from "./_FaceDetail";

/**
 * <p>Information about a face detected in a video analysis request and the time the face was detected in the video. </p>
 */
export interface _FaceDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the face was detected.</p>
   */
  Timestamp?: number;

  /**
   * <p>The face properties for the detected face.</p>
   */
  Face?: _FaceDetail;
}

export interface _UnmarshalledFaceDetection extends _FaceDetection {
  /**
   * <p>The face properties for the detected face.</p>
   */
  Face?: _UnmarshalledFaceDetail;
}
