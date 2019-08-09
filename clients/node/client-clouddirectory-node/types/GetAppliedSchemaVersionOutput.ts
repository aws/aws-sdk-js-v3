import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAppliedSchemaVersionOutput shape
 */
export interface GetAppliedSchemaVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   */
  AppliedSchemaArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
