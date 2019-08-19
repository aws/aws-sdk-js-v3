/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.</p>
 */
export interface _SourceAlgorithm {
  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single <code>gzip</code> compressed tar archive (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;

  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.</p>
   */
  AlgorithmName: string;
}

export type _UnmarshalledSourceAlgorithm = _SourceAlgorithm;
