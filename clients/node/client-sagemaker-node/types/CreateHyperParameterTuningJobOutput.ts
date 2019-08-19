import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHyperParameterTuningJobOutput shape
 */
export interface CreateHyperParameterTuningJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job. Amazon SageMaker assigns an ARN to a hyperparameter tuning job when you create it.</p>
   */
  HyperParameterTuningJobArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
