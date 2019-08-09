/**
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>.</p>
 */
export interface _CheckpointConfiguration {
  /**
   * <p>Describes whether the application uses Amazon Kinesis Data Analytics' default checkpointing behavior. </p>
   */
  ConfigurationType: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the <code>CheckpointInterval</code>, the application otherwise performs continual checkpoint operations. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/ops/state/large_state_tuning.html#tuning-checkpointing"> Tuning Checkpointing</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>.</p>
   */
  MinPauseBetweenCheckpoints?: number;
}

export type _UnmarshalledCheckpointConfiguration = _CheckpointConfiguration;
