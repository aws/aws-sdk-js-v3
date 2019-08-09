/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface _S3MachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   */
  S3Uri?: string;
}

export type _UnmarshalledS3MachineLearningModelResourceData = _S3MachineLearningModelResourceData;
