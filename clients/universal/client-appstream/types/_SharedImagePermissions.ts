import {
  _ImagePermissions,
  _UnmarshalledImagePermissions
} from "./_ImagePermissions";

/**
 * <p>Describes the permissions that are available to the specified AWS account for a shared image.</p>
 */
export interface _SharedImagePermissions {
  /**
   * <p>The 12-digit identifier of the AWS account with which the image is shared.</p>
   */
  sharedAccountId: string;

  /**
   * <p>Describes the permissions for a shared image.</p>
   */
  imagePermissions: _ImagePermissions;
}

export interface _UnmarshalledSharedImagePermissions
  extends _SharedImagePermissions {
  /**
   * <p>Describes the permissions for a shared image.</p>
   */
  imagePermissions: _UnmarshalledImagePermissions;
}
