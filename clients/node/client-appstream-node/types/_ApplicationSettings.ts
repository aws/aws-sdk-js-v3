/**
 * <p>The persistent application settings for users of a stack.</p>
 */
export interface _ApplicationSettings {
  /**
   * <p>Enables or disables persistent application settings for users during their streaming sessions. </p>
   */
  Enabled: boolean;

  /**
   * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. </p>
   */
  SettingsGroup?: string;
}

export type _UnmarshalledApplicationSettings = _ApplicationSettings;
