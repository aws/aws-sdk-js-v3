/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface _SageMakerMachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The ARN of the Amazon SageMaker training job that represents the source model.
   */
  SageMakerJobArn?: string;
}

export type _UnmarshalledSageMakerMachineLearningModelResourceData = _SageMakerMachineLearningModelResourceData;
