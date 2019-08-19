/**
 * <p>Describes the permissions for an image. </p>
 */
export interface _ImagePermissions {
  /**
   * <p>Indicates whether the image can be used for a fleet.</p>
   */
  allowFleet?: boolean;

  /**
   * <p>Indicates whether the image can be used for an image builder.</p>
   */
  allowImageBuilder?: boolean;
}

export type _UnmarshalledImagePermissions = _ImagePermissions;
