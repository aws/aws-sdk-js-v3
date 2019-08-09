import {
  _S3DestinationSettings,
  _UnmarshalledS3DestinationSettings
} from "./_S3DestinationSettings";

/**
 * Settings associated with the destination. Will vary based on the type of destination
 */
export interface _DestinationSettings {
  /**
   * Settings associated with S3 destination
   */
  S3Settings?: _S3DestinationSettings;
}

export interface _UnmarshalledDestinationSettings extends _DestinationSettings {
  /**
   * Settings associated with S3 destination
   */
  S3Settings?: _UnmarshalledS3DestinationSettings;
}
