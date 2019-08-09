import {
  _TrainingJobDefinition,
  _UnmarshalledTrainingJobDefinition
} from "./_TrainingJobDefinition";
import {
  _TransformJobDefinition,
  _UnmarshalledTransformJobDefinition
} from "./_TransformJobDefinition";

/**
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p>
 */
export interface _AlgorithmValidationProfile {
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: _TrainingJobDefinition;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: _TransformJobDefinition;
}

export interface _UnmarshalledAlgorithmValidationProfile
  extends _AlgorithmValidationProfile {
  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: _UnmarshalledTrainingJobDefinition;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: _UnmarshalledTransformJobDefinition;
}
