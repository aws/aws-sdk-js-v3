import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.</p>
   */
  awsSecretStoreArn: string;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The ARN of the Aurora Serverless DB cluster.</p>
   */
  dbClusterOrInstanceArn: string;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>One or more SQL statements to run on the DB cluster.</p>
   *         <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL
   *             statement is permitted, including data definition, data manipulation, and commit
   *             statements. </p>
   */
  sqlStatements: string;

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
