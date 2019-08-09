import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAppliedSchemaArnsOutput shape
 */
export interface ListAppliedSchemaArnsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARNs of schemas that are applied to the directory.</p>
   */
  SchemaArns?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
