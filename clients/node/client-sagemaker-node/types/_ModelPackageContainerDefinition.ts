/**
 * <p>Describes the Docker container for the model package.</p>
 */
export interface _ModelPackageContainerDefinition {
  /**
   * <p>The DNS host name for the Docker container.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.</p> <p>If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code> image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>.</p>
   */
  Image: string;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for training.</p>
   */
  ImageDigest?: string;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single <code>gzip</code> compressed tar archive (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;

  /**
   * <p>The AWS Marketplace product ID of the model package.</p>
   */
  ProductId?: string;
}

export type _UnmarshalledModelPackageContainerDefinition = _ModelPackageContainerDefinition;
