import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteWorkflowOutput shape
 */
export interface DeleteWorkflowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
