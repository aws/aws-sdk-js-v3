import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSchemaOutput shape
 */
export interface UpdateSchemaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
