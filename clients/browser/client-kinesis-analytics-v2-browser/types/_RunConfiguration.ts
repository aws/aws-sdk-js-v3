import {
  _SqlRunConfiguration,
  _UnmarshalledSqlRunConfiguration
} from "./_SqlRunConfiguration";
import {
  _ApplicationRestoreConfiguration,
  _UnmarshalledApplicationRestoreConfiguration
} from "./_ApplicationRestoreConfiguration";

/**
 * <p>Describes the starting parameters for an Amazon Kinesis Data Analytics application.</p>
 */
export interface _RunConfiguration {
  /**
   * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlRunConfigurations?:
    | Array<_SqlRunConfiguration>
    | Iterable<_SqlRunConfiguration>;

  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: _ApplicationRestoreConfiguration;
}

export interface _UnmarshalledRunConfiguration extends _RunConfiguration {
  /**
   * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlRunConfigurations?: Array<_UnmarshalledSqlRunConfiguration>;

  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: _UnmarshalledApplicationRestoreConfiguration;
}
