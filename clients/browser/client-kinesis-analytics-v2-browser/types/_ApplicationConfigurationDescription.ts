import {
  _SqlApplicationConfigurationDescription,
  _UnmarshalledSqlApplicationConfigurationDescription
} from "./_SqlApplicationConfigurationDescription";
import {
  _ApplicationCodeConfigurationDescription,
  _UnmarshalledApplicationCodeConfigurationDescription
} from "./_ApplicationCodeConfigurationDescription";
import {
  _RunConfigurationDescription,
  _UnmarshalledRunConfigurationDescription
} from "./_RunConfigurationDescription";
import {
  _FlinkApplicationConfigurationDescription,
  _UnmarshalledFlinkApplicationConfigurationDescription
} from "./_FlinkApplicationConfigurationDescription";
import {
  _EnvironmentPropertyDescriptions,
  _UnmarshalledEnvironmentPropertyDescriptions
} from "./_EnvironmentPropertyDescriptions";
import {
  _ApplicationSnapshotConfigurationDescription,
  _UnmarshalledApplicationSnapshotConfigurationDescription
} from "./_ApplicationSnapshotConfigurationDescription";

/**
 * <p>Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application.</p>
 */
export interface _ApplicationConfigurationDescription {
  /**
   * <p>The details about inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: _SqlApplicationConfigurationDescription;

  /**
   * <p>The details about the application code for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfigurationDescription?: _ApplicationCodeConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: _RunConfigurationDescription;

  /**
   * <p>The details about a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: _FlinkApplicationConfigurationDescription;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyDescriptions?: _EnvironmentPropertyDescriptions;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: _ApplicationSnapshotConfigurationDescription;
}

export interface _UnmarshalledApplicationConfigurationDescription
  extends _ApplicationConfigurationDescription {
  /**
   * <p>The details about inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: _UnmarshalledSqlApplicationConfigurationDescription;

  /**
   * <p>The details about the application code for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfigurationDescription?: _UnmarshalledApplicationCodeConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: _UnmarshalledRunConfigurationDescription;

  /**
   * <p>The details about a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: _UnmarshalledFlinkApplicationConfigurationDescription;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyDescriptions?: _UnmarshalledEnvironmentPropertyDescriptions;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: _UnmarshalledApplicationSnapshotConfigurationDescription;
}
