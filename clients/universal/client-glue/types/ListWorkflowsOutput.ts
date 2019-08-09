import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWorkflowsOutput shape
 */
export interface ListWorkflowsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of names of workflows in the account.</p>
   */
  Workflows?: Array<string>;

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
