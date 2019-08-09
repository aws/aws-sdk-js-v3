import {
  _SqlApplicationConfigurationUpdate,
  _UnmarshalledSqlApplicationConfigurationUpdate
} from "./_SqlApplicationConfigurationUpdate";
import {
  _ApplicationCodeConfigurationUpdate,
  _UnmarshalledApplicationCodeConfigurationUpdate
} from "./_ApplicationCodeConfigurationUpdate";
import {
  _FlinkApplicationConfigurationUpdate,
  _UnmarshalledFlinkApplicationConfigurationUpdate
} from "./_FlinkApplicationConfigurationUpdate";
import {
  _EnvironmentPropertyUpdates,
  _UnmarshalledEnvironmentPropertyUpdates
} from "./_EnvironmentPropertyUpdates";
import {
  _ApplicationSnapshotConfigurationUpdate,
  _UnmarshalledApplicationSnapshotConfigurationUpdate
} from "./_ApplicationSnapshotConfigurationUpdate";

/**
 * <p>Describes updates to an application's configuration.</p>
 */
export interface _ApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an SQL-based Kinesis Data Analytics application's configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: _SqlApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's code configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: _ApplicationCodeConfigurationUpdate;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: _FlinkApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: _EnvironmentPropertyUpdates;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: _ApplicationSnapshotConfigurationUpdate;
}

export interface _UnmarshalledApplicationConfigurationUpdate
  extends _ApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an SQL-based Kinesis Data Analytics application's configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: _UnmarshalledSqlApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's code configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: _UnmarshalledApplicationCodeConfigurationUpdate;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: _UnmarshalledFlinkApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: _UnmarshalledEnvironmentPropertyUpdates;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: _UnmarshalledApplicationSnapshotConfigurationUpdate;
}
