import { _InferenceSpecification } from "./_InferenceSpecification";
import { _ModelPackageValidationSpecification } from "./_ModelPackageValidationSpecification";
import { _SourceAlgorithmSpecification } from "./_SourceAlgorithmSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateModelPackageInput shape
 */
export interface CreateModelPackageInput {
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string;

  /**
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>Specifies details about inference jobs that can be run with models based on this model package, including the following:</p> <ul> <li> <p>The Amazon ECR paths of containers that contain the inference code and model artifacts.</p> </li> <li> <p>The instance types that the model package supports for transform jobs and real-time endpoints used for inference.</p> </li> <li> <p>The input and output content formats that the model package supports for inference.</p> </li> </ul>
   */
  InferenceSpecification?: _InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.</p>
   */
  ValidationSpecification?: _ModelPackageValidationSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: _SourceAlgorithmSpecification;

  /**
   * <p>Whether to certify the model package for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
