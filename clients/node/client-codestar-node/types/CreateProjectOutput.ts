import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProjectOutput shape
 */
export interface CreateProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the project.</p>
   */
  id: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the created project.</p>
   */
  arn: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project creation.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  projectTemplateId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
