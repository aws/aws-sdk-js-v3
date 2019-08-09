import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";

/**
 * <p>Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. </p>
 */
export interface _Face {
  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the face.</p>
   */
  FaceId?: string;

  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Unique identifier that Amazon Rekognition assigns to the input image.</p>
   */
  ImageId?: string;

  /**
   * <p>Identifier that you assign to all the faces in the input image.</p>
   */
  ExternalImageId?: string;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such as a tree).</p>
   */
  Confidence?: number;
}

export interface _UnmarshalledFace extends _Face {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;
}
