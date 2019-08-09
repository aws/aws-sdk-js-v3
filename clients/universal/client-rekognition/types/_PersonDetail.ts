import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _FaceDetail, _UnmarshalledFaceDetail } from "./_FaceDetail";

/**
 * <p>Details about a person detected in a video analysis request.</p>
 */
export interface _PersonDetail {
  /**
   * <p>Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.</p>
   */
  Index?: number;

  /**
   * <p>Bounding box around the detected person.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Face details for the detected person.</p>
   */
  Face?: _FaceDetail;
}

export interface _UnmarshalledPersonDetail extends _PersonDetail {
  /**
   * <p>Bounding box around the detected person.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>Face details for the detected person.</p>
   */
  Face?: _UnmarshalledFaceDetail;
}
