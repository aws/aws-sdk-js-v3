/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface _ContainerDefinition {
  /**
   * <p>This parameter is ignored for models that contain only a <code>PrimaryContainer</code>.</p> <p>When a <code>ContainerDefinition</code> is part of an inference pipeline, the value of ths parameter uniquely identifies the container for the purposes of logging and metrics. For information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html">Use Logs and Metrics to Monitor an Inference Pipeline</a>. If you don't specify a value for this parameter for a <code>ContainerDefinition</code> that is part of an inference pipeline, a unique name is automatically assigned based on the position of the <code>ContainerDefinition</code> in the pipeline. If you specify a value for the <code>ContainerHostName</code> for any <code>ContainerDefinition</code> that is part of an inference pipeline, you must specify a value for the <code>ContainerHostName</code> parameter of every <code>ContainerDefinition</code> in that pipeline.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code> image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a> </p>
   */
  Image?: string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for Amazon SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common Parameters</a>. </p> <p>If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide</i>.</p> <important> <p>If you use a built-in algorithm to create a model, Amazon SageMaker requires that you provide a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p> </important>
   */
  ModelDataUrl?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the <code>Environment</code> string to string map can have length of up to 1024. We support up to 16 entries in the map. </p>
   */
  Environment?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the model.</p>
   */
  ModelPackageName?: string;
}

export interface _UnmarshalledContainerDefinition extends _ContainerDefinition {
  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the <code>Environment</code> string to string map can have length of up to 1024. We support up to 16 entries in the map. </p>
   */
  Environment?: { [key: string]: string };
}
