/**
 * <p>Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _CheckpointConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default checkpointing behavior in Kinesis Data Analytics.</p>
   */
  ConfigurationType?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations.</p>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.</p>
   */
  MinPauseBetweenCheckpoints?: number;
}

export type _UnmarshalledCheckpointConfigurationDescription = _CheckpointConfigurationDescription;
