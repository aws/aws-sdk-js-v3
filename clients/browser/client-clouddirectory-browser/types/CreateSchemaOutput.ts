import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSchemaOutput shape
 */
export interface CreateSchemaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
