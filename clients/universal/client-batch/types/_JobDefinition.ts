import { _RetryStrategy, _UnmarshalledRetryStrategy } from "./_RetryStrategy";
import {
  _ContainerProperties,
  _UnmarshalledContainerProperties
} from "./_ContainerProperties";
import { _JobTimeout, _UnmarshalledJobTimeout } from "./_JobTimeout";
import {
  _NodeProperties,
  _UnmarshalledNodeProperties
} from "./_NodeProperties";

/**
 * <p>An object representing an AWS Batch job definition.</p>
 */
export interface _JobDefinition {
  /**
   * <p>The name of the job definition. </p>
   */
  jobDefinitionName: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the job definition. </p>
   */
  jobDefinitionArn: string;

  /**
   * <p>The revision of the job definition.</p>
   */
  revision: number;

  /**
   * <p>The status of the job definition.</p>
   */
  status?: string;

  /**
   * <p>The type of job definition.</p>
   */
  type: string;

  /**
   * <p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job Definition Parameters</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>
   */
  retryStrategy?: _RetryStrategy;

  /**
   * <p>An object with various properties specific to container-based jobs. </p>
   */
  containerProperties?: _ContainerProperties;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished.</p>
   */
  timeout?: _JobTimeout;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs.</p>
   */
  nodeProperties?: _NodeProperties;
}

export interface _UnmarshalledJobDefinition extends _JobDefinition {
  /**
   * <p>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html">Job Definition Parameters</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The retry strategy to use for failed jobs that are submitted with this job definition.</p>
   */
  retryStrategy?: _UnmarshalledRetryStrategy;

  /**
   * <p>An object with various properties specific to container-based jobs. </p>
   */
  containerProperties?: _UnmarshalledContainerProperties;

  /**
   * <p>The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished.</p>
   */
  timeout?: _UnmarshalledJobTimeout;

  /**
   * <p>An object with various properties specific to multi-node parallel jobs.</p>
   */
  nodeProperties?: _UnmarshalledNodeProperties;
}
