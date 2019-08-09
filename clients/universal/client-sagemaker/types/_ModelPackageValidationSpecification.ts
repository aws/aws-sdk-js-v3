import {
  _ModelPackageValidationProfile,
  _UnmarshalledModelPackageValidationProfile
} from "./_ModelPackageValidationProfile";

/**
 * <p>Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.</p>
 */
export interface _ModelPackageValidationSpecification {
  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string;

  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which specifies a batch transform job that Amazon SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles:
    | Array<_ModelPackageValidationProfile>
    | Iterable<_ModelPackageValidationProfile>;
}

export interface _UnmarshalledModelPackageValidationSpecification
  extends _ModelPackageValidationSpecification {
  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which specifies a batch transform job that Amazon SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: Array<_UnmarshalledModelPackageValidationProfile>;
}
