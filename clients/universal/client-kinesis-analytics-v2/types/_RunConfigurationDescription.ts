import {
  _ApplicationRestoreConfiguration,
  _UnmarshalledApplicationRestoreConfiguration
} from "./_ApplicationRestoreConfiguration";

/**
 * <p>Describes the starting properties for a Kinesis Data Analytics application.</p>
 */
export interface _RunConfigurationDescription {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: _ApplicationRestoreConfiguration;
}

export interface _UnmarshalledRunConfigurationDescription
  extends _RunConfigurationDescription {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: _UnmarshalledApplicationRestoreConfiguration;
}
