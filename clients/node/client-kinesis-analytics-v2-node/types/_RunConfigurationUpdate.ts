import {
  _ApplicationRestoreConfiguration,
  _UnmarshalledApplicationRestoreConfiguration
} from "./_ApplicationRestoreConfiguration";

/**
 * <p>Describes the updates to the starting parameters for a Kinesis Data Analytics application.</p>
 */
export interface _RunConfigurationUpdate {
  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: _ApplicationRestoreConfiguration;
}

export interface _UnmarshalledRunConfigurationUpdate
  extends _RunConfigurationUpdate {
  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: _UnmarshalledApplicationRestoreConfiguration;
}
