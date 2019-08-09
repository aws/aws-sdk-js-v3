import {
  _OutputLocationRef,
  _UnmarshalledOutputLocationRef
} from "./_OutputLocationRef";

/**
 * Media Package Group Settings
 */
export interface _MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   */
  Destination: _OutputLocationRef;
}

export interface _UnmarshalledMediaPackageGroupSettings
  extends _MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   */
  Destination: _UnmarshalledOutputLocationRef;
}
