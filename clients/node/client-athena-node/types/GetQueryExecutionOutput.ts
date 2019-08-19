import { _UnmarshalledQueryExecution } from "./_QueryExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetQueryExecutionOutput shape
 */
export interface GetQueryExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the query execution.</p>
   */
  QueryExecution?: _UnmarshalledQueryExecution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
