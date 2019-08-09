/**
 * <p>Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _CheckpointConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default checkpointing behavior of Kinesis Data Analytics.</p>
   */
  ConfigurationTypeUpdate?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   */
  CheckpointIntervalUpdate?: number;

  /**
   * <p>Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.</p>
   */
  MinPauseBetweenCheckpointsUpdate?: number;
}

export type _UnmarshalledCheckpointConfigurationUpdate = _CheckpointConfigurationUpdate;
