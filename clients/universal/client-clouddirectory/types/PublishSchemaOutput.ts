import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PublishSchemaOutput shape
 */
export interface PublishSchemaOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
