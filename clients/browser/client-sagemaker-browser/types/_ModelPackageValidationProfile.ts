import {
  _TransformJobDefinition,
  _UnmarshalledTransformJobDefinition
} from "./_TransformJobDefinition";

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p>
 */
export interface _ModelPackageValidationProfile {
  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used for the validation of the model package.</p>
   */
  TransformJobDefinition: _TransformJobDefinition;
}

export interface _UnmarshalledModelPackageValidationProfile
  extends _ModelPackageValidationProfile {
  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used for the validation of the model package.</p>
   */
  TransformJobDefinition: _UnmarshalledTransformJobDefinition;
}
