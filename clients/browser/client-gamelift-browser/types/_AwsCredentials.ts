/**
 * <p>Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.</p>
 */
export interface _AwsCredentials {
  /**
   * <p>Temporary key allowing access to the Amazon GameLift S3 account.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>Temporary secret key allowing access to the Amazon GameLift S3 account.</p>
   */
  SecretAccessKey?: string;

  /**
   * <p>Token used to associate a specific build ID with the files uploaded using these credentials.</p>
   */
  SessionToken?: string;
}

export type _UnmarshalledAwsCredentials = _AwsCredentials;
