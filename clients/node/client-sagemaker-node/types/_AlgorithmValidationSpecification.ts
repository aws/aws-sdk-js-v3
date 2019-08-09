import {
  _AlgorithmValidationProfile,
  _UnmarshalledAlgorithmValidationProfile
} from "./_AlgorithmValidationProfile";

/**
 * <p>Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.</p>
 */
export interface _AlgorithmValidationSpecification {
  /**
   * <p>The IAM roles that Amazon SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string;

  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a training job and batch transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles:
    | Array<_AlgorithmValidationProfile>
    | Iterable<_AlgorithmValidationProfile>;
}

export interface _UnmarshalledAlgorithmValidationSpecification
  extends _AlgorithmValidationSpecification {
  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a training job and batch transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: Array<_UnmarshalledAlgorithmValidationProfile>;
}
