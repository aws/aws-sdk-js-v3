import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteProjectOutput shape
 */
export interface DeleteProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of deleting the project and its resources.</p>
   */
  stackId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
   */
  projectArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
