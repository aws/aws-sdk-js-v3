import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteJobOutput shape
 */
export interface DeleteJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
