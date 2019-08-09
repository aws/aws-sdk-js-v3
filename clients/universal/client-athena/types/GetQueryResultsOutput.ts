import { _UnmarshalledResultSet } from "./_ResultSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetQueryResultsOutput shape
 */
export interface GetQueryResultsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of rows inserted with a CREATE TABLE AS SELECT statement. </p>
   */
  UpdateCount?: number;

  /**
   * <p>The results of the query execution.</p>
   */
  ResultSet?: _UnmarshalledResultSet;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
