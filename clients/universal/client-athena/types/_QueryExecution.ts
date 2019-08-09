import {
  _ResultConfiguration,
  _UnmarshalledResultConfiguration
} from "./_ResultConfiguration";
import {
  _QueryExecutionContext,
  _UnmarshalledQueryExecutionContext
} from "./_QueryExecutionContext";
import {
  _QueryExecutionStatus,
  _UnmarshalledQueryExecutionStatus
} from "./_QueryExecutionStatus";
import {
  _QueryExecutionStatistics,
  _UnmarshalledQueryExecutionStatistics
} from "./_QueryExecutionStatistics";

/**
 * <p>Information about a single instance of a query execution.</p>
 */
export interface _QueryExecution {
  /**
   * <p>The unique identifier for each query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The SQL query statements which the query execution ran.</p>
   */
  Query?: string;

  /**
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query statements. <code>DML</code> indicates DML (Data Manipulation Language) query statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or <code>DESCRIBE &lt;table&gt;</code>.</p>
   */
  StatementType?: "DDL" | "DML" | "UTILITY" | string;

  /**
   * <p>The location in Amazon S3 where query results were stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.</p>
   */
  ResultConfiguration?: _ResultConfiguration;

  /**
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: _QueryExecutionContext;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</p>
   */
  Status?: _QueryExecutionStatus;

  /**
   * <p>The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.</p>
   */
  Statistics?: _QueryExecutionStatistics;

  /**
   * <p>The name of the workgroup in which the query ran.</p>
   */
  WorkGroup?: string;
}

export interface _UnmarshalledQueryExecution extends _QueryExecution {
  /**
   * <p>The location in Amazon S3 where query results were stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.</p>
   */
  ResultConfiguration?: _UnmarshalledResultConfiguration;

  /**
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: _UnmarshalledQueryExecutionContext;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</p>
   */
  Status?: _UnmarshalledQueryExecutionStatus;

  /**
   * <p>The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.</p>
   */
  Statistics?: _UnmarshalledQueryExecutionStatistics;
}
