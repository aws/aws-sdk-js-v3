import { _UnmarshalledResultField } from "./_ResultField";
import { _UnmarshalledQueryStatistics } from "./_QueryStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetQueryResultsOutput shape
 */
export interface GetQueryResultsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The log events that matched the query criteria during the most recent time it ran.</p> <p>The <code>results</code> value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of <code>field</code>/<code>value</code> pairs.</p>
   */
  results?: Array<Array<_UnmarshalledResultField>>;

  /**
   * <p>Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.</p>
   */
  statistics?: _UnmarshalledQueryStatistics;

  /**
   * <p>The status of the most recent running of the query. Possible values are <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, <code>Timeout</code>, and <code>Unknown</code>.</p> <p>Queries time out after 15 minutes of execution. To avoid having your queries time out, reduce the time range being searched, or partition your query into a number of queries.</p>
   */
  status?:
    | "Scheduled"
    | "Running"
    | "Complete"
    | "Failed"
    | "Cancelled"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
