import { _UnmarshalledQueryExecution } from "./_QueryExecution";
import { _UnmarshalledUnprocessedQueryExecutionId } from "./_UnprocessedQueryExecutionId";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetQueryExecutionOutput shape
 */
export interface BatchGetQueryExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a query execution.</p>
   */
  QueryExecutions?: Array<_UnmarshalledQueryExecution>;

  /**
   * <p>Information about the query executions that failed to run.</p>
   */
  UnprocessedQueryExecutionIds?: Array<
    _UnmarshalledUnprocessedQueryExecutionId
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
