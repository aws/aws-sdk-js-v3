import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The result of the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An unique identifier for the job flow.</p>
   */
  JobFlowId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
