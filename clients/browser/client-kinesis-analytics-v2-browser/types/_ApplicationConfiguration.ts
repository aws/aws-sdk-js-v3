import {
  _SqlApplicationConfiguration,
  _UnmarshalledSqlApplicationConfiguration
} from "./_SqlApplicationConfiguration";
import {
  _FlinkApplicationConfiguration,
  _UnmarshalledFlinkApplicationConfiguration
} from "./_FlinkApplicationConfiguration";
import {
  _EnvironmentProperties,
  _UnmarshalledEnvironmentProperties
} from "./_EnvironmentProperties";
import {
  _ApplicationCodeConfiguration,
  _UnmarshalledApplicationCodeConfiguration
} from "./_ApplicationCodeConfiguration";
import {
  _ApplicationSnapshotConfiguration,
  _UnmarshalledApplicationSnapshotConfiguration
} from "./_ApplicationSnapshotConfiguration";

/**
 * <p>Specifies the creation parameters for an Amazon Kinesis Data Analytics application.</p>
 */
export interface _ApplicationConfiguration {
  /**
   * <p>The creation and update parameters for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfiguration?: _SqlApplicationConfiguration;

  /**
   * <p>The creation and update parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfiguration?: _FlinkApplicationConfiguration;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: _EnvironmentProperties;

  /**
   * <p>The code location and type parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration: _ApplicationCodeConfiguration;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: _ApplicationSnapshotConfiguration;
}

export interface _UnmarshalledApplicationConfiguration
  extends _ApplicationConfiguration {
  /**
   * <p>The creation and update parameters for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfiguration?: _UnmarshalledSqlApplicationConfiguration;

  /**
   * <p>The creation and update parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfiguration?: _UnmarshalledFlinkApplicationConfiguration;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: _UnmarshalledEnvironmentProperties;

  /**
   * <p>The code location and type parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration: _UnmarshalledApplicationCodeConfiguration;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: _UnmarshalledApplicationSnapshotConfiguration;
}
