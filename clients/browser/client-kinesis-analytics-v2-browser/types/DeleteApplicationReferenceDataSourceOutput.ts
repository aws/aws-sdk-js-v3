import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApplicationReferenceDataSourceOutput shape
 */
export interface DeleteApplicationReferenceDataSourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
