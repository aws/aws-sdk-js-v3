import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartJobRunOutput shape
 */
export interface StartJobRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
