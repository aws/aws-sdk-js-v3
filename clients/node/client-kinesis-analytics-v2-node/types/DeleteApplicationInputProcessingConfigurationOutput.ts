import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApplicationInputProcessingConfigurationOutput shape
 */
export interface DeleteApplicationInputProcessingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
