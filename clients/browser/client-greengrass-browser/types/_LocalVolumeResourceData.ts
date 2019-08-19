import {
  _GroupOwnerSetting,
  _UnmarshalledGroupOwnerSetting
} from "./_GroupOwnerSetting";

/**
 * Attributes that define a local volume resource.
 */
export interface _LocalVolumeResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: _GroupOwnerSetting;

  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   */
  SourcePath?: string;
}

export interface _UnmarshalledLocalVolumeResourceData
  extends _LocalVolumeResourceData {
  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: _UnmarshalledGroupOwnerSetting;
}
