import {
  _DestinationSettings,
  _UnmarshalledDestinationSettings
} from "./_DestinationSettings";

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
 */
export interface _FileGroupSettings {
  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _DestinationSettings;
}

export interface _UnmarshalledFileGroupSettings extends _FileGroupSettings {
  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _UnmarshalledDestinationSettings;
}
