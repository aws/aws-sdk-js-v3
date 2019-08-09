import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetImportJobOutput shape
 */
export interface CreateDatasetImportJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the dataset import job.</p>
   */
  datasetImportJobArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
