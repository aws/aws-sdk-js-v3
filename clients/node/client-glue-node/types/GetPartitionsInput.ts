import { _Segment } from "./_Segment";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPartitionsInput shape
 */
export interface GetPartitionsInput {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string;

  /**
   * <p>An expression filtering the partitions to be returned.</p> <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p> <p> <i>Operators</i>: The following are the operators that you can use in the <code>Expression</code> API call:</p> <dl> <dt>=</dt> <dd> <p>Checks if the values of the two operands are equal or not; if yes, then the condition becomes true.</p> <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p> <p>(a = b) is not true.</p> </dd> <dt>&lt; &gt;</dt> <dd> <p>Checks if the values of two operands are equal or not; if the values are not equal, then the condition becomes true.</p> <p>Example: (a &lt; &gt; b) is true.</p> </dd> <dt>&gt;</dt> <dd> <p>Checks if the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true.</p> <p>Example: (a &gt; b) is not true.</p> </dd> <dt>&lt;</dt> <dd> <p>Checks if the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true.</p> <p>Example: (a &lt; b) is true.</p> </dd> <dt>&gt;=</dt> <dd> <p>Checks if the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true.</p> <p>Example: (a &gt;= b) is not true.</p> </dd> <dt>&lt;=</dt> <dd> <p>Checks if the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true.</p> <p>Example: (a &lt;= b) is true.</p> </dd> <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt> <dd> <p>Logical operators.</p> </dd> </dl> <p> <i>Supported Partition Key Types</i>: The following are the the supported partition keys.</p> <ul> <li> <p> <code>string</code> </p> </li> <li> <p> <code>date</code> </p> </li> <li> <p> <code>timestamp</code> </p> </li> <li> <p> <code>int</code> </p> </li> <li> <p> <code>bigint</code> </p> </li> <li> <p> <code>long</code> </p> </li> <li> <p> <code>tinyint</code> </p> </li> <li> <p> <code>smallint</code> </p> </li> <li> <p> <code>decimal</code> </p> </li> </ul> <p>If an invalid type is encountered, an exception is thrown. </p> <p>The following list shows the valid operators on each type. When you define a crawler, the <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog partitions. </p> <p> <i>Sample API Call</i>: </p>
   */
  Expression?: string;

  /**
   * <p>A continuation token, if this is not the first call to retrieve these partitions.</p>
   */
  NextToken?: string;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: _Segment;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;

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
