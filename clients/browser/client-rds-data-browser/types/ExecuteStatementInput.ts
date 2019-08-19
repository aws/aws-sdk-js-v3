import { _SqlParameter } from "./_SqlParameter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementInput {
  /**
   * <p>A value that indicates whether to continue running the statement after
   *             the call times out. By default, the statement stops running when the call
   *             times out.</p>
   *         <important>
   *             <p>For DDL statements, we recommend continuing to run the statement after
   *                the call times out. When a DDL statement terminates before it is finished
   *                running, it can result in errors and possibly corrupted data structures.</p>
   *         </important>
   */
  continueAfterTimeout?: boolean;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>A value that indicates whether to include metadata in the results.</p>
   */
  includeResultMetadata?: boolean;

  /**
   * <p>The parameters for the SQL statement.</p>
   */
  parameters?: Array<_SqlParameter> | Iterable<_SqlParameter>;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string;

  /**
   * <p>The SQL statement to run.</p>
   */
  sql: string;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
   */
  transactionId?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
