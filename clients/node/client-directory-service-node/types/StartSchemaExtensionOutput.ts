import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSchemaExtensionOutput shape
 */
export interface StartSchemaExtensionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the schema extension that will be applied.</p>
   */
  SchemaExtensionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
