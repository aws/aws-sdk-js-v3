import {
  _ModelPackageContainerDefinition,
  _UnmarshalledModelPackageContainerDefinition
} from "./_ModelPackageContainerDefinition";

/**
 * <p>Defines how to perform inference generation after a training job is run.</p>
 */
export interface _InferenceSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers:
    | Array<_ModelPackageContainerDefinition>
    | Iterable<_ModelPackageContainerDefinition>;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes:
    | Array<
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
        | string
      >
    | Iterable<
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
        | string
      >;

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes:
    | Array<
        | "ml.t2.medium"
        | "ml.t2.large"
        | "ml.t2.xlarge"
        | "ml.t2.2xlarge"
        | "ml.m4.xlarge"
        | "ml.m4.2xlarge"
        | "ml.m4.4xlarge"
        | "ml.m4.10xlarge"
        | "ml.m4.16xlarge"
        | "ml.m5.large"
        | "ml.m5.xlarge"
        | "ml.m5.2xlarge"
        | "ml.m5.4xlarge"
        | "ml.m5.12xlarge"
        | "ml.m5.24xlarge"
        | "ml.c4.large"
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
        | "ml.c5.large"
        | "ml.c5.xlarge"
        | "ml.c5.2xlarge"
        | "ml.c5.4xlarge"
        | "ml.c5.9xlarge"
        | "ml.c5.18xlarge"
        | string
      >
    | Iterable<
        | "ml.t2.medium"
        | "ml.t2.large"
        | "ml.t2.xlarge"
        | "ml.t2.2xlarge"
        | "ml.m4.xlarge"
        | "ml.m4.2xlarge"
        | "ml.m4.4xlarge"
        | "ml.m4.10xlarge"
        | "ml.m4.16xlarge"
        | "ml.m5.large"
        | "ml.m5.xlarge"
        | "ml.m5.2xlarge"
        | "ml.m5.4xlarge"
        | "ml.m5.12xlarge"
        | "ml.m5.24xlarge"
        | "ml.c4.large"
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
        | "ml.c5.large"
        | "ml.c5.xlarge"
        | "ml.c5.2xlarge"
        | "ml.c5.4xlarge"
        | "ml.c5.9xlarge"
        | "ml.c5.18xlarge"
        | string
      >;

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: Array<string> | Iterable<string>;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInferenceSpecification
  extends _InferenceSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: Array<_UnmarshalledModelPackageContainerDefinition>;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes: Array<
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
    | string
  >;

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes: Array<
    | "ml.t2.medium"
    | "ml.t2.large"
    | "ml.t2.xlarge"
    | "ml.t2.2xlarge"
    | "ml.m4.xlarge"
    | "ml.m4.2xlarge"
    | "ml.m4.4xlarge"
    | "ml.m4.10xlarge"
    | "ml.m4.16xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.24xlarge"
    | "ml.c4.large"
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
    | "ml.c5.large"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.18xlarge"
    | string
  >;

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: Array<string>;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: Array<string>;
}
