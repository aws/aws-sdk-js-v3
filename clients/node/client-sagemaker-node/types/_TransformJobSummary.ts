/**
 * <p>Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.</p>
 */
export interface _TransformJobSummary {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.</p>
   */
  TransformEndTime?: Date | string | number;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;
}

export interface _UnmarshalledTransformJobSummary extends _TransformJobSummary {
  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;
}
