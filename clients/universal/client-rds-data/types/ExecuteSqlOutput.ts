import { _UnmarshalledSqlStatementResult } from "./_SqlStatementResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The results of the SQL statement or statements.</p>
   */
  sqlStatementResults?: Array<_UnmarshalledSqlStatementResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
