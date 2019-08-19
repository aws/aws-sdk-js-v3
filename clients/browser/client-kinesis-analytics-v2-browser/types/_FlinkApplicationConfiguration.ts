import {
  _CheckpointConfiguration,
  _UnmarshalledCheckpointConfiguration
} from "./_CheckpointConfiguration";
import {
  _MonitoringConfiguration,
  _UnmarshalledMonitoringConfiguration
} from "./_MonitoringConfiguration";
import {
  _ParallelismConfiguration,
  _UnmarshalledParallelismConfiguration
} from "./_ParallelismConfiguration";

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _FlinkApplicationConfiguration {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. </p>
   */
  CheckpointConfiguration?: _CheckpointConfiguration;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfiguration?: _MonitoringConfiguration;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfiguration?: _ParallelismConfiguration;
}

export interface _UnmarshalledFlinkApplicationConfiguration
  extends _FlinkApplicationConfiguration {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. </p>
   */
  CheckpointConfiguration?: _UnmarshalledCheckpointConfiguration;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfiguration?: _UnmarshalledMonitoringConfiguration;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfiguration?: _UnmarshalledParallelismConfiguration;
}
