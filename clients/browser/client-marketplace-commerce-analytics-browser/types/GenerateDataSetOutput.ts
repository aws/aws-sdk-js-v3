import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Container for the result of the GenerateDataSet operation.
 */
export interface GenerateDataSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A unique identifier representing a specific request to the GenerateDataSet operation. This identifier can be used to correlate a request with notifications from the SNS topic.
   */
  dataSetRequestId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
