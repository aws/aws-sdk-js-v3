/**
 * <p>Describes the persistent application settings for users of a stack.</p>
 */
export interface _ApplicationSettingsResponse {
  /**
   * <p>Specifies whether persistent application settings are enabled for users during their streaming sessions.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>
   */
  SettingsGroup?: string;

  /**
   * <p>The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region. </p>
   */
  S3BucketName?: string;
}

export type _UnmarshalledApplicationSettingsResponse = _ApplicationSettingsResponse;
