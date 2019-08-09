import {
  _BatchArrayProperties,
  _UnmarshalledBatchArrayProperties
} from "./_BatchArrayProperties";
import {
  _BatchRetryStrategy,
  _UnmarshalledBatchRetryStrategy
} from "./_BatchRetryStrategy";

/**
 * <p>The custom parameters to be used when the target is an AWS Batch job.</p>
 */
export interface _BatchParameters {
  /**
   * <p>The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.</p>
   */
  JobDefinition: string;

  /**
   * <p>The name to use for this execution of the job, if the target is an AWS Batch job.</p>
   */
  JobName: string;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.</p>
   */
  ArrayProperties?: _BatchArrayProperties;

  /**
   * <p>The retry strategy to use for failed jobs if the target is an AWS Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.</p>
   */
  RetryStrategy?: _BatchRetryStrategy;
}

export interface _UnmarshalledBatchParameters extends _BatchParameters {
  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.</p>
   */
  ArrayProperties?: _UnmarshalledBatchArrayProperties;

  /**
   * <p>The retry strategy to use for failed jobs if the target is an AWS Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.</p>
   */
  RetryStrategy?: _UnmarshalledBatchRetryStrategy;
}
