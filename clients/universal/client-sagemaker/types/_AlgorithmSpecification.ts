import {
  _MetricDefinition,
  _UnmarshalledMetricDefinition
} from "./_MetricDefinition";

/**
 * <p>Specifies the training algorithm to use in a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html">CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
 */
export interface _AlgorithmSpecification {
  /**
   * <p>The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code> image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an algorithm resource that you created or subscribe to on AWS Marketplace. If you specify a value for this parameter, you can't specify a value for <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>The input mode that the algorithm supports. For the input modes that Amazon SageMaker algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. If an algorithm supports the <code>File</code> input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the <code>Pipe</code> input mode, Amazon SageMaker streams data directly from S3 to the container. </p> <p> In File mode, make sure you provision ML storage volume with sufficient capacity to accommodate the data download from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container use ML storage volume to also store intermediate information, if any. </p> <p> For distributed algorithms using File mode, training data is distributed uniformly, and your training duration is predictable if the input data objects size is approximately same. Amazon SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed where one host in a training cluster is overloaded, thus becoming bottleneck in training. </p>
   */
  TrainingInputMode: "Pipe" | "File" | string;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: Array<_MetricDefinition> | Iterable<_MetricDefinition>;
}

export interface _UnmarshalledAlgorithmSpecification
  extends _AlgorithmSpecification {
  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: Array<_UnmarshalledMetricDefinition>;
}
