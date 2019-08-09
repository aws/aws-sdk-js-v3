import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";

/**
 * <p>Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. </p>
 */
export interface _ComparedSourceImageFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Confidence level that the selected bounding box contains a face.</p>
   */
  Confidence?: number;
}

export interface _UnmarshalledComparedSourceImageFace
  extends _ComparedSourceImageFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;
}
