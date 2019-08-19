import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _Landmark, _UnmarshalledLandmark } from "./_Landmark";
import { _Pose, _UnmarshalledPose } from "./_Pose";
import { _ImageQuality, _UnmarshalledImageQuality } from "./_ImageQuality";

/**
 * <p>Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.</p>
 */
export interface _ComparedFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Level of confidence that what the bounding box contains is a face.</p>
   */
  Confidence?: number;

  /**
   * <p>An array of facial landmarks.</p>
   */
  Landmarks?: Array<_Landmark> | Iterable<_Landmark>;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
   */
  Pose?: _Pose;

  /**
   * <p>Identifies face image brightness and sharpness. </p>
   */
  Quality?: _ImageQuality;
}

export interface _UnmarshalledComparedFace extends _ComparedFace {
  /**
   * <p>Bounding box of the face.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>An array of facial landmarks.</p>
   */
  Landmarks?: Array<_UnmarshalledLandmark>;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
   */
  Pose?: _UnmarshalledPose;

  /**
   * <p>Identifies face image brightness and sharpness. </p>
   */
  Quality?: _UnmarshalledImageQuality;
}
