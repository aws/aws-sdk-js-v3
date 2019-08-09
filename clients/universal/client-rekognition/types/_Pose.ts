/**
 * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
 */
export interface _Pose {
  /**
   * <p>Value representing the face rotation on the roll axis.</p>
   */
  Roll?: number;

  /**
   * <p>Value representing the face rotation on the yaw axis.</p>
   */
  Yaw?: number;

  /**
   * <p>Value representing the face rotation on the pitch axis.</p>
   */
  Pitch?: number;
}

export type _UnmarshalledPose = _Pose;
