import {
  _CheckpointConfigurationUpdate,
  _UnmarshalledCheckpointConfigurationUpdate
} from "./_CheckpointConfigurationUpdate";
import {
  _MonitoringConfigurationUpdate,
  _UnmarshalledMonitoringConfigurationUpdate
} from "./_MonitoringConfigurationUpdate";
import {
  _ParallelismConfigurationUpdate,
  _UnmarshalledParallelismConfigurationUpdate
} from "./_ParallelismConfigurationUpdate";

/**
 * <p>Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _FlinkApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationUpdate?: _CheckpointConfigurationUpdate;

  /**
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfigurationUpdate?: _MonitoringConfigurationUpdate;

  /**
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationUpdate?: _ParallelismConfigurationUpdate;
}

export interface _UnmarshalledFlinkApplicationConfigurationUpdate
  extends _FlinkApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationUpdate?: _UnmarshalledCheckpointConfigurationUpdate;

  /**
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfigurationUpdate?: _UnmarshalledMonitoringConfigurationUpdate;

  /**
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationUpdate?: _UnmarshalledParallelismConfigurationUpdate;
}
