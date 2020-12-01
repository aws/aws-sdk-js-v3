import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             You are not authorized to perform this action.
 *         </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface CancelQueryRequest {
  /**
   * <p>
   *       The id of the query that needs to be cancelled. <code>QueryID</code> is returned as part of QueryResult.
   *     </p>
   */
  QueryId: string | undefined;
}

export namespace CancelQueryRequest {
  export const filterSensitiveLog = (obj: CancelQueryRequest): any => ({
    ...obj,
  });
}

export interface CancelQueryResponse {
  /**
   * <p>
   *         A <code>CancellationMessage</code> is returned when a <code>CancelQuery</code> request for the query specified by <code>QueryId</code> has already been issued.
   *     </p>
   */
  CancellationMessage?: string;
}

export namespace CancelQueryResponse {
  export const filterSensitiveLog = (obj: CancelQueryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Timestream was unable to fully process this request because of an internal server error.
 *         </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested endpoint was invalid.</p>
 */
export interface InvalidEndpointException extends __SmithyException, $MetadataBearer {
  name: "InvalidEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndpointException {
  export const filterSensitiveLog = (obj: InvalidEndpointException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Invalid or malformed request.
 *         </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum ScalarType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DOUBLE = "DOUBLE",
  INTEGER = "INTEGER",
  INTERVAL_DAY_TO_SECOND = "INTERVAL_DAY_TO_SECOND",
  INTERVAL_YEAR_TO_MONTH = "INTERVAL_YEAR_TO_MONTH",
  TIME = "TIME",
  TIMESTAMP = "TIMESTAMP",
  UNKNOWN = "UNKNOWN",
  VARCHAR = "VARCHAR",
}

/**
 * <p>
 *        Unable to poll results for a cancelled query.
 *     </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsRequest {}

export namespace DescribeEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.</p>
 */
export interface Endpoint {
  /**
   * <p>An endpoint address.</p>
   */
  Address: string | undefined;

  /**
   * <p>The TTL for the endpoint, in minutes.</p>
   */
  CachePeriodInMinutes: number | undefined;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsResponse {
  /**
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code> request is made.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export namespace DescribeEndpointsResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Timestream was unable to run the query successfully.
 *     </p>
 */
export interface QueryExecutionException extends __SmithyException, $MetadataBearer {
  name: "QueryExecutionException";
  $fault: "client";
  Message?: string;
}

export namespace QueryExecutionException {
  export const filterSensitiveLog = (obj: QueryExecutionException): any => ({
    ...obj,
  });
}

export interface QueryRequest {
  /**
   * <p>
   *             The query to be executed by Timestream.
   *         </p>
   */
  QueryString: string | undefined;

  /**
   * <p>
   *        Unique, case-sensitive string of up to 64 ASCII characters that you specify when you make a Query request.
   *        Providing a <code>ClientToken</code> makes the call to <code>Query</code> idempotent, meaning that multiple identical calls
   *        have the same effect as one single call.
   *     </p>
   *
   *          <p>Your query request will fail in the following cases:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   If you submit a request with the same client token outside the 5-minute idepotency window.
   *                </p>
   *            </li>
   *             <li>
   *                <p>
   *                   If you submit a request with the same client token but a change in other parameters within the 5-minute idempotency window.
   *                </p>
   *            </li>
   *          </ul>
   *
   *          <p>
   *       After 4 hours, any request with the same client token is treated as a new request.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>
   *        A pagination token passed to get a set of results.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>
   *       The total number of rows to return in the output. If the total number of rows available
   *       is more than the value specified, a NextToken is provided in the command's output.
   *       To resume pagination, provide the NextToken value in the starting-token argument of a
   *       subsequent command.
   *     </p>
   */
  MaxRows?: number;
}

export namespace QueryRequest {
  export const filterSensitiveLog = (obj: QueryRequest): any => ({
    ...obj,
    ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
    ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Information about the status of the query, including progress and bytes scannned.</p>
 */
export interface QueryStatus {
  /**
   * <p>The progress of the query, expressed as a percentage.</p>
   */
  ProgressPercentage?: number;

  /**
   * <p>The amount of data scanned by the query in bytes.
   *             This is a cumulative sum and represents the total amount of bytes scanned since the query was started.
   *         </p>
   */
  CumulativeBytesScanned?: number;

  /**
   * <p>The amount of data scanned by the query in bytes that you will be charged for.
   *             This is a cumulative sum and represents the total amount of data that you will be charged
   *             for since the query was started.
   *             The charge is applied only once and is either applied when
   *             the query completes execution or when the query is cancelled.
   *         </p>
   */
  CumulativeBytesMetered?: number;
}

export namespace QueryStatus {
  export const filterSensitiveLog = (obj: QueryStatus): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Contains the meta data for query results such as the column names, data types, and other attributes.
 *         </p>
 */
export interface ColumnInfo {
  /**
   * <p>
   *             The name of the result set column. The name of the result set is available for columns of all data types except for arrays.
   *         </p>
   */
  Name?: string;

  /**
   * <p>
   *             The data type of the result set column. The data type can be a scalar or complex. Scalar data types are integers, strings, doubles, booleans, and others. Complex data types are types such as arrays, rows, and others.
   *         </p>
   */
  Type: Type | undefined;
}

export namespace ColumnInfo {
  export const filterSensitiveLog = (obj: ColumnInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.</p>
 */
export interface Type {
  /**
   * <p>Indicates if the column is of type string, integer, boolean, double, timestamp, date, time. </p>
   */
  ScalarType?: ScalarType | string;

  /**
   * <p>Indicates if the column is an array.</p>
   */
  ArrayColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a timeseries data type.</p>
   */
  TimeSeriesMeasureValueColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a row.</p>
   */
  RowColumnInfo?: ColumnInfo[];
}

export namespace Type {
  export const filterSensitiveLog = (obj: Type): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Datum represents a single data point in a query result.
 *         </p>
 */
export interface Datum {
  /**
   * <p>
   *             Indicates if the data point is a scalar value such as integer, string, double, or boolean.
   *         </p>
   */
  ScalarValue?: string;

  /**
   * <p>
   *             Indicates if the data point is of timeseries data type.
   *         </p>
   */
  TimeSeriesValue?: TimeSeriesDataPoint[];

  /**
   * <p>
   *             Indicates if the data point is an array.
   *         </p>
   */
  ArrayValue?: Datum[];

  /**
   * <p>
   *             Indicates if the data point is a row.
   *         </p>
   */
  RowValue?: Row;

  /**
   * <p>
   *             Indicates if the data point is null.
   *         </p>
   */
  NullValue?: boolean;
}

export namespace Datum {
  export const filterSensitiveLog = (obj: Datum): any => ({
    ...obj,
  });
}

/**
 * <p>The timeseries datatype represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the timeseries. It represents a tuple of (time, measure value) in a timeseries. </p>
 */
export interface TimeSeriesDataPoint {
  /**
   * <p>The timestamp when the measure value was collected.</p>
   */
  Time: string | undefined;

  /**
   * <p>The measure value for the  data point.</p>
   */
  Value: Datum | undefined;
}

export namespace TimeSeriesDataPoint {
  export const filterSensitiveLog = (obj: TimeSeriesDataPoint): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single row in the query results.</p>
 */
export interface Row {
  /**
   * <p>List of data points in a single row of the result set.</p>
   */
  Data: Datum[] | undefined;
}

export namespace Row {
  export const filterSensitiveLog = (obj: Row): any => ({
    ...obj,
  });
}

export interface QueryResponse {
  /**
   * <p>
   *        A unique ID for the given query.
   *     </p>
   */
  QueryId: string | undefined;

  /**
   * <p>
   *        A pagination token that can be used again on a <code>Query</code> call to get the next set of results.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>
   *             The result set rows returned by the query.
   *         </p>
   */
  Rows: Row[] | undefined;

  /**
   * <p>
   *             The column data types of the returned result set.
   *         </p>
   */
  ColumnInfo: ColumnInfo[] | undefined;

  /**
   * <p>Information about the status of the query, including progress and bytes scannned.</p>
   */
  QueryStatus?: QueryStatus;
}

export namespace QueryResponse {
  export const filterSensitiveLog = (obj: QueryResponse): any => ({
    ...obj,
  });
}
