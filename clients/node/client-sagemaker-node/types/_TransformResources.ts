/**
 * <p>Describes the resources, including ML instance types and ML instance count, to use for transform job.</p>
 */
export interface _TransformResources {
  /**
   * <p>The ML compute instance type for the transform job. If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or <code>ml.m5.large</code>instance types.</p>
   */
  InstanceType:
    | "ml.m4.xlarge"
    | "ml.m4.2xlarge"
    | "ml.m4.4xlarge"
    | "ml.m4.10xlarge"
    | "ml.m4.16xlarge"
    | "ml.c4.xlarge"
    | "ml.c4.2xlarge"
    | "ml.c4.4xlarge"
    | "ml.c4.8xlarge"
    | "ml.p2.xlarge"
    | "ml.p2.8xlarge"
    | "ml.p2.16xlarge"
    | "ml.p3.2xlarge"
    | "ml.p3.8xlarge"
    | "ml.p3.16xlarge"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.18xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.24xlarge"
    | string;

  /**
   * <p>The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is <code>1</code>.</p>
   */
  InstanceCount: number;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the batch transform job. The <code>VolumeKmsKeyId</code> can be any of the following formats:</p> <ul> <li> <p>// KMS Key ID</p> <p> <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>// Amazon Resource Name (ARN) of a KMS Key</p> <p> <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;
}

export type _UnmarshalledTransformResources = _TransformResources;
