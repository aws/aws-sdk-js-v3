/**
 * <p>Provides summary information about a training job.</p>
 */
export interface _TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (<code>Completed</code>, <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date | string | number;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;
}

export interface _UnmarshalledTrainingJobSummary extends _TrainingJobSummary {
  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (<code>Completed</code>, <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;
}
