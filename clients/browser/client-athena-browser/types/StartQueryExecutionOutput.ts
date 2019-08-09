import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartQueryExecutionOutput shape
 */
export interface StartQueryExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique ID of the query that ran as a result of this request.</p>
   */
  QueryExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
