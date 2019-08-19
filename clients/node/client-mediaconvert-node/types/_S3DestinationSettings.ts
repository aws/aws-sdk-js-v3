import {
  _S3EncryptionSettings,
  _UnmarshalledS3EncryptionSettings
} from "./_S3EncryptionSettings";

/**
 * Settings associated with S3 destination
 */
export interface _S3DestinationSettings {
  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   */
  Encryption?: _S3EncryptionSettings;
}

export interface _UnmarshalledS3DestinationSettings
  extends _S3DestinationSettings {
  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   */
  Encryption?: _UnmarshalledS3EncryptionSettings;
}
