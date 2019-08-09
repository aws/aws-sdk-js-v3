import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSolutionMetricsOutput shape
 */
export interface GetSolutionMetricsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The same solution version ARN as specified in the request.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The metrics for the solution version.</p>
   */
  metrics?: { [key: string]: number };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
