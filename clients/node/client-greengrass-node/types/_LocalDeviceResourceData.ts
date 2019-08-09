import {
  _GroupOwnerSetting,
  _UnmarshalledGroupOwnerSetting
} from "./_GroupOwnerSetting";

/**
 * Attributes that define a local device resource.
 */
export interface _LocalDeviceResourceData {
  /**
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: _GroupOwnerSetting;

  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   */
  SourcePath?: string;
}

export interface _UnmarshalledLocalDeviceResourceData
  extends _LocalDeviceResourceData {
  /**
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: _UnmarshalledGroupOwnerSetting;
}
