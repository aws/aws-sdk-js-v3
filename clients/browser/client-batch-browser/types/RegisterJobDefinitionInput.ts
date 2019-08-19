import { _ContainerProperties } from "./_ContainerProperties";
import { _NodeProperties } from "./_NodeProperties";
import { _RetryStrategy } from "./_RetryStrategy";
import { _JobTimeout } from "./_JobTimeout";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterJobDefinitionInput shape
 */
export interface RegisterJobDefinitionInput {
  /**
   * <p>The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p>
   */
  jobDefinitionName: string;

  /**
   * <p>The type of job definition.</p>
   */
  type: "container" | "multinode" | string;

  /**
   * <p>Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.</p>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>An object with various properties specific to single-node container-based jobs. If the job definition's <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code> or <code>nodeProperties</code>.</p>
   */
  containerProperties?: _ContainerProperties;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html">Multi-node Parallel Jobs</a> in the <i>AWS Batch User Guide</i>. If the job definition's <code>type</code> parameter is <code>container</code>, then you must specify either <code>containerProperties</code> or <code>nodeProperties</code>.</p>
   */
  nodeProperties?: _NodeProperties;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that is specified during a <a>SubmitJob</a> operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it is not retried. </p>
   */
  retryStrategy?: _RetryStrategy;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition, after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that is specified during a <a>SubmitJob</a> operation overrides the timeout configuration defined here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/job_timeouts.html">Job Timeouts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
