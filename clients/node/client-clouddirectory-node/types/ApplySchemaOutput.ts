import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ApplySchemaOutput shape
 */
export interface ApplySchemaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on this directory. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn?: string;

  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
