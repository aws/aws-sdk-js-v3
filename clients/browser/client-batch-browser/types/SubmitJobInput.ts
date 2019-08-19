import { _ArrayProperties } from "./_ArrayProperties";
import { _JobDependency } from "./_JobDependency";
import { _ContainerOverrides } from "./_ContainerOverrides";
import { _NodeOverrides } from "./_NodeOverrides";
import { _RetryStrategy } from "./_RetryStrategy";
import { _JobTimeout } from "./_JobTimeout";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SubmitJobInput shape
 */
export interface SubmitJobInput {
  /**
   * <p>The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. </p>
   */
  jobName: string;

  /**
   * <p>The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue. </p>
   */
  jobQueue: string;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/array_jobs.html">Array Jobs</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  arrayProperties?: _ArrayProperties;

  /**
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.</p>
   */
  dependsOn?: Array<_JobDependency> | Iterable<_JobDependency>;

  /**
   * <p>The job definition used by this job. This value can be either a <code>name:revision</code> or the Amazon Resource Name (ARN) for the job definition.</p>
   */
  jobDefinition: string;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.</p>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container (that is specified in the job definition or the Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the job definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p>
   */
  containerOverrides?: _ContainerOverrides;

  /**
   * <p>A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.</p>
   */
  nodeOverrides?: _NodeOverrides;

  /**
   * <p>The retry strategy to use for failed jobs from this <a>SubmitJob</a> operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.</p>
   */
  retryStrategy?: _RetryStrategy;

  /**
   * <p>The timeout configuration for this <a>SubmitJob</a> operation. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  timeout?: _JobTimeout;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
