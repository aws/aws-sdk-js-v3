import { _Face, _UnmarshalledFace } from "./_Face";
import { _FaceDetail, _UnmarshalledFaceDetail } from "./_FaceDetail";

/**
 * <p>Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.</p>
 */
export interface _FaceRecord {
  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. </p>
   */
  Face?: _Face;

  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   */
  FaceDetail?: _FaceDetail;
}

export interface _UnmarshalledFaceRecord extends _FaceRecord {
  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. </p>
   */
  Face?: _UnmarshalledFace;

  /**
   * <p>Structure containing attributes of the face that the algorithm detected.</p>
   */
  FaceDetail?: _UnmarshalledFaceDetail;
}
