import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLabelingJobOutput shape
 */
export interface CreateLabelingJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the labeling job.</p>
   */
  LabelingJobArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
