import {
  _MetricDefinition,
  _UnmarshalledMetricDefinition
} from "./_MetricDefinition";

/**
 * <p>Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.</p>
 */
export interface _HyperParameterAlgorithmSpecification {
  /**
   * <p> The registry path of the Docker image that contains the training algorithm. For information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code> image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The input mode that the algorithm supports: File or Pipe. In File input mode, Amazon SageMaker downloads the training data from Amazon S3 to the storage volume that is attached to the training instance and mounts the directory to the Docker volume for the training container. In Pipe input mode, Amazon SageMaker streams data directly from Amazon S3 to the container. </p> <p>If you specify File mode, make sure that you provision the storage volume that is attached to the training instance with enough capacity to accommodate the training data downloaded from Amazon S3, the model artifacts, and intermediate information.</p> <p/> <p>For more information about input modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   */
  TrainingInputMode: "Pipe" | "File" | string;

  /**
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you specify a value for this parameter, do not specify a value for <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>An array of <a>MetricDefinition</a> objects that specify the metrics that the algorithm emits.</p>
   */
  MetricDefinitions?: Array<_MetricDefinition> | Iterable<_MetricDefinition>;
}

export interface _UnmarshalledHyperParameterAlgorithmSpecification
  extends _HyperParameterAlgorithmSpecification {
  /**
   * <p>An array of <a>MetricDefinition</a> objects that specify the metrics that the algorithm emits.</p>
   */
  MetricDefinitions?: Array<_UnmarshalledMetricDefinition>;
}
