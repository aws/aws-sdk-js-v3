import { _Face, _UnmarshalledFace } from "./_Face";

/**
 * <p>Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.</p>
 */
export interface _FaceMatch {
  /**
   * <p>Confidence in the match of this face with the input face.</p>
   */
  Similarity?: number;

  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the source image, and external image ID that you assigned.</p>
   */
  Face?: _Face;
}

export interface _UnmarshalledFaceMatch extends _FaceMatch {
  /**
   * <p>Describes the face properties such as the bounding box, face ID, image ID of the source image, and external image ID that you assigned.</p>
   */
  Face?: _UnmarshalledFace;
}
