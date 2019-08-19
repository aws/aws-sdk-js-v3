import { _QueryExecutionContext } from "./_QueryExecutionContext";
import { _ResultConfiguration } from "./_ResultConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartQueryExecutionInput shape
 */
export interface StartQueryExecutionInput {
  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another <code>StartQueryExecution</code> request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the <code>QueryString</code>, an error is returned.</p> <important> <p>This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail.</p> </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The database within which the query executes.</p>
   */
  QueryExecutionContext?: _QueryExecutionContext;

  /**
   * <p>Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings. This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  ResultConfiguration?: _ResultConfiguration;

  /**
   * <p>The name of the workgroup in which the query is being started.</p>
   */
  WorkGroup?: string;

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
