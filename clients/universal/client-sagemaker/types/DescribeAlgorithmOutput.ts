import { _UnmarshalledTrainingSpecification } from "./_TrainingSpecification";
import { _UnmarshalledInferenceSpecification } from "./_InferenceSpecification";
import { _UnmarshalledAlgorithmValidationSpecification } from "./_AlgorithmValidationSpecification";
import { _UnmarshalledAlgorithmStatusDetails } from "./_AlgorithmStatusDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlgorithmOutput shape
 */
export interface DescribeAlgorithmOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: _UnmarshalledTrainingSpecification;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: _UnmarshalledInferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.</p>
   */
  ValidationSpecification?: _UnmarshalledAlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting"
    | string;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: _UnmarshalledAlgorithmStatusDetails;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
