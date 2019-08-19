import { _UnmarshalledInferenceSpecification } from "./_InferenceSpecification";
import { _UnmarshalledSourceAlgorithmSpecification } from "./_SourceAlgorithmSpecification";
import { _UnmarshalledModelPackageValidationSpecification } from "./_ModelPackageValidationSpecification";
import { _UnmarshalledModelPackageStatusDetails } from "./_ModelPackageStatusDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeModelPackageOutput shape
 */
export interface DescribeModelPackageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Details about inference jobs that can be run with models based on this model package.</p>
   */
  InferenceSpecification?: _UnmarshalledInferenceSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: _UnmarshalledSourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.</p>
   */
  ValidationSpecification?: _UnmarshalledModelPackageValidationSpecification;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting"
    | string;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: _UnmarshalledModelPackageStatusDetails;

  /**
   * <p>Whether the model package is certified for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
