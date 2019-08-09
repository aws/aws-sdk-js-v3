import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSchemaAsJsonOutput shape
 */
export interface GetSchemaAsJsonOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the retrieved schema.</p>
   */
  Name?: string;

  /**
   * <p>The JSON representation of the schema document.</p>
   */
  Document?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
