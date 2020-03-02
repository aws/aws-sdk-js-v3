import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains an array.</p>
 */
export type ArrayValue =
  | ArrayValue.ArrayValuesMember
  | ArrayValue.BooleanValuesMember
  | ArrayValue.DoubleValuesMember
  | ArrayValue.LongValuesMember
  | ArrayValue.StringValuesMember
  | ArrayValue.$UnknownMember;

export namespace ArrayValue {
  interface $Base {
    __type?: "ArrayValue";
  }
  /**
   * <p>An array of arrays.</p>
   */
  export interface ArrayValuesMember extends $Base {
    arrayValues: Array<ArrayValue>;
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of Boolean values.</p>
   */
  export interface BooleanValuesMember extends $Base {
    arrayValues?: never;
    booleanValues: Array<boolean>;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of integers.</p>
   */
  export interface DoubleValuesMember extends $Base {
    arrayValues?: never;
    booleanValues?: never;
    doubleValues: Array<number>;
    longValues?: never;
    stringValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of floating point numbers.</p>
   */
  export interface LongValuesMember extends $Base {
    arrayValues?: never;
    booleanValues?: never;
    doubleValues?: never;
    longValues: Array<number>;
    stringValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of strings.</p>
   */
  export interface StringValuesMember extends $Base {
    arrayValues?: never;
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues: Array<string>;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    arrayValues?: never;
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    arrayValues: (value: Array<ArrayValue>) => T;
    booleanValues: (value: Array<boolean>) => T;
    doubleValues: (value: Array<number>) => T;
    longValues: (value: Array<number>) => T;
    stringValues: (value: Array<string>) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: ArrayValue, visitor: Visitor<T>): T {
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    if (value.booleanValues !== undefined)
      return visitor.booleanValues(value.booleanValues);
    if (value.doubleValues !== undefined)
      return visitor.doubleValues(value.doubleValues);
    if (value.longValues !== undefined)
      return visitor.longValues(value.longValues);
    if (value.stringValues !== undefined)
      return visitor.stringValues(value.stringValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>BadRequestException</code> error.</p>
   */
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementRequest {
  __type?: "BatchExecuteStatementRequest";
  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The parameter set for the batch operation.</p>
   */
  parameterSets?: Array<Array<SqlParameter>>;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The SQL statement to run.</p>
   */
  sql: string | undefined;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this
   *             parameter.</p>
   */
  transactionId?: string;
}

export namespace BatchExecuteStatementRequest {
  export function isa(o: any): o is BatchExecuteStatementRequest {
    return __isa(o, "BatchExecuteStatementRequest");
  }
}

/**
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementResponse {
  __type?: "BatchExecuteStatementResponse";
  /**
   * <p>The execution results of each batch entry.</p>
   */
  updateResults?: Array<UpdateResult>;
}

export namespace BatchExecuteStatementResponse {
  export function isa(o: any): o is BatchExecuteStatementResponse {
    return __isa(o, "BatchExecuteStatementResponse");
  }
}

/**
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionRequest {
  __type?: "BeginTransactionRequest";
  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;
}

export namespace BeginTransactionRequest {
  export function isa(o: any): o is BeginTransactionRequest {
    return __isa(o, "BeginTransactionRequest");
  }
}

/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionResponse {
  __type?: "BeginTransactionResponse";
  /**
   * <p>The transaction ID of the transaction started by the call.</p>
   */
  transactionId?: string;
}

export namespace BeginTransactionResponse {
  export function isa(o: any): o is BeginTransactionResponse {
    return __isa(o, "BeginTransactionResponse");
  }
}

/**
 * <p>Contains the metadata for a column.</p>
 */
export interface ColumnMetadata {
  __type?: "ColumnMetadata";
  /**
   * <p>The type of the column.</p>
   */
  arrayBaseColumnType?: number;

  /**
   * <p>A value that indicates whether the column increments automatically.</p>
   */
  isAutoIncrement?: boolean;

  /**
   * <p>A value that indicates whether the column is case-sensitive.</p>
   */
  isCaseSensitive?: boolean;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   */
  isCurrency?: boolean;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   */
  isSigned?: boolean;

  /**
   * <p>The label for the column.</p>
   */
  label?: string;

  /**
   * <p>The name of the column.</p>
   */
  name?: string;

  /**
   * <p>A value that indicates whether the column is nullable.</p>
   */
  nullable?: number;

  /**
   * <p>The precision value of a decimal number column.</p>
   */
  precision?: number;

  /**
   * <p>The scale value of a decimal number column.</p>
   */
  scale?: number;

  /**
   * <p>The name of the schema that owns the table that includes the column.</p>
   */
  schemaName?: string;

  /**
   * <p>The name of the table that includes the column.</p>
   */
  tableName?: string;

  /**
   * <p>The type of the column.</p>
   */
  type?: number;

  /**
   * <p>The database-specific data type of the column.</p>
   */
  typeName?: string;
}

export namespace ColumnMetadata {
  export function isa(o: any): o is ColumnMetadata {
    return __isa(o, "ColumnMetadata");
  }
}

/**
 * <p>The request parameters represent the input of a commit transaction request.</p>
 */
export interface CommitTransactionRequest {
  __type?: "CommitTransactionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The identifier of the transaction to end and commit.</p>
   */
  transactionId: string | undefined;
}

export namespace CommitTransactionRequest {
  export function isa(o: any): o is CommitTransactionRequest {
    return __isa(o, "CommitTransactionRequest");
  }
}

/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionResponse {
  __type?: "CommitTransactionResponse";
  /**
   * <p>The status of the commit operation.</p>
   */
  transactionStatus?: string;
}

export namespace CommitTransactionResponse {
  export function isa(o: any): o is CommitTransactionResponse {
    return __isa(o, "CommitTransactionResponse");
  }
}

/**
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlRequest {
  __type?: "ExecuteSqlRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.</p>
   */
  awsSecretStoreArn: string | undefined;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The ARN of the Aurora Serverless DB cluster.</p>
   */
  dbClusterOrInstanceArn: string | undefined;

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
  sqlStatements: string | undefined;
}

export namespace ExecuteSqlRequest {
  export function isa(o: any): o is ExecuteSqlRequest {
    return __isa(o, "ExecuteSqlRequest");
  }
}

/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlResponse {
  __type?: "ExecuteSqlResponse";
  /**
   * <p>The results of the SQL statement or statements.</p>
   */
  sqlStatementResults?: Array<SqlStatementResult>;
}

export namespace ExecuteSqlResponse {
  export function isa(o: any): o is ExecuteSqlResponse {
    return __isa(o, "ExecuteSqlResponse");
  }
}

/**
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementRequest {
  __type?: "ExecuteStatementRequest";
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
  parameters?: Array<SqlParameter>;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The SQL statement to run.</p>
   */
  sql: string | undefined;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
   */
  transactionId?: string;
}

export namespace ExecuteStatementRequest {
  export function isa(o: any): o is ExecuteStatementRequest {
    return __isa(o, "ExecuteStatementRequest");
  }
}

/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementResponse {
  __type?: "ExecuteStatementResponse";
  /**
   * <p>Metadata for the columns included in the results.</p>
   */
  columnMetadata?: Array<ColumnMetadata>;

  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<Field>;

  /**
   * <p>The number of records updated by the request.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The records returned by the SQL statement.</p>
   */
  records?: Array<Array<Field>>;
}

export namespace ExecuteStatementResponse {
  export function isa(o: any): o is ExecuteStatementResponse {
    return __isa(o, "ExecuteStatementResponse");
  }
}

/**
 * <p>Contains a value.</p>
 */
export type Field =
  | Field.ArrayValueMember
  | Field.BlobValueMember
  | Field.BooleanValueMember
  | Field.DoubleValueMember
  | Field.IsNullMember
  | Field.LongValueMember
  | Field.StringValueMember
  | Field.$UnknownMember;

export namespace Field {
  interface $Base {
    __type?: "Field";
  }
  /**
   * <p>An array of values.</p>
   */
  export interface ArrayValueMember extends $Base {
    arrayValue: ArrayValue;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of BLOB data type.</p>
   */
  export interface BlobValueMember extends $Base {
    arrayValue?: never;
    blobValue: Uint8Array;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of Boolean data type.</p>
   */
  export interface BooleanValueMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue: boolean;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of double data type.</p>
   */
  export interface DoubleValueMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue: number;
    isNull?: never;
    longValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A NULL value.</p>
   */
  export interface IsNullMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull: boolean;
    longValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of long data type.</p>
   */
  export interface LongValueMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue: number;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of string data type.</p>
   */
  export interface StringValueMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue: string;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    arrayValue: (value: ArrayValue) => T;
    blobValue: (value: Uint8Array) => T;
    booleanValue: (value: boolean) => T;
    doubleValue: (value: number) => T;
    isNull: (value: boolean) => T;
    longValue: (value: number) => T;
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: Field, visitor: Visitor<T>): T {
    if (value.arrayValue !== undefined)
      return visitor.arrayValue(value.arrayValue);
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.booleanValue !== undefined)
      return visitor.booleanValue(value.booleanValue);
    if (value.doubleValue !== undefined)
      return visitor.doubleValue(value.doubleValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.longValue !== undefined)
      return visitor.longValue(value.longValue);
    if (value.stringValue !== undefined)
      return visitor.stringValue(value.stringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>There are insufficient privileges to make the call.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>ForbiddenException</code> error.</p>
   */
  message?: string;
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
}

/**
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>NotFoundException</code> error.</p>
   */
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
  __type?: "Record";
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Array<Value>;
}

export namespace _Record {
  export function isa(o: any): o is _Record {
    return __isa(o, "Record");
  }
}

/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface ResultFrame {
  __type?: "ResultFrame";
  /**
   * <p>The records in the result set.</p>
   */
  records?: Array<_Record>;

  /**
   * <p>The result-set metadata in the result set.</p>
   */
  resultSetMetadata?: ResultSetMetadata;
}

export namespace ResultFrame {
  export function isa(o: any): o is ResultFrame {
    return __isa(o, "ResultFrame");
  }
}

/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface ResultSetMetadata {
  __type?: "ResultSetMetadata";
  /**
   * <p>The number of columns in the result set.</p>
   */
  columnCount?: number;

  /**
   * <p>The metadata of the columns in the result set.</p>
   */
  columnMetadata?: Array<ColumnMetadata>;
}

export namespace ResultSetMetadata {
  export function isa(o: any): o is ResultSetMetadata {
    return __isa(o, "ResultSetMetadata");
  }
}

/**
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionRequest {
  __type?: "RollbackTransactionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The identifier of the transaction to roll back.</p>
   */
  transactionId: string | undefined;
}

export namespace RollbackTransactionRequest {
  export function isa(o: any): o is RollbackTransactionRequest {
    return __isa(o, "RollbackTransactionRequest");
  }
}

/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionResponse {
  __type?: "RollbackTransactionResponse";
  /**
   * <p>The status of the rollback operation.</p>
   */
  transactionStatus?: string;
}

export namespace RollbackTransactionResponse {
  export function isa(o: any): o is RollbackTransactionResponse {
    return __isa(o, "RollbackTransactionResponse");
  }
}

/**
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export interface ServiceUnavailableError
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableError";
  $fault: "server";
}

export namespace ServiceUnavailableError {
  export function isa(o: any): o is ServiceUnavailableError {
    return __isa(o, "ServiceUnavailableError");
  }
}

/**
 * <p>A parameter used in a SQL statement.</p>
 */
export interface SqlParameter {
  __type?: "SqlParameter";
  /**
   * <p>The name of the parameter.</p>
   */
  name?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  value?: Field;
}

export namespace SqlParameter {
  export function isa(o: any): o is SqlParameter {
    return __isa(o, "SqlParameter");
  }
}

/**
 * <p>The result of a SQL statement.</p>
 */
export interface SqlStatementResult {
  __type?: "SqlStatementResult";
  /**
   * <p>The number of records updated by a SQL statement.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The result set of the SQL statement.</p>
   */
  resultFrame?: ResultFrame;
}

export namespace SqlStatementResult {
  export function isa(o: any): o is SqlStatementResult {
    return __isa(o, "SqlStatementResult");
  }
}

/**
 * <p>The execution of the SQL statement timed out.</p>
 */
export interface StatementTimeoutException
  extends __SmithyException,
    $MetadataBearer {
  name: "StatementTimeoutException";
  $fault: "client";
  /**
   * <p>The database connection ID that executed the SQL statement.</p>
   */
  dbConnectionId?: number;

  /**
   * <p>The error message returned by this <code>StatementTimeoutException</code> error.</p>
   */
  message?: string;
}

export namespace StatementTimeoutException {
  export function isa(o: any): o is StatementTimeoutException {
    return __isa(o, "StatementTimeoutException");
  }
}

/**
 * <p>A structure value returned by a call.</p>
 */
export interface StructValue {
  __type?: "StructValue";
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Array<Value>;
}

export namespace StructValue {
  export function isa(o: any): o is StructValue {
    return __isa(o, "StructValue");
  }
}

/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
  __type?: "UpdateResult";
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<Field>;
}

export namespace UpdateResult {
  export function isa(o: any): o is UpdateResult {
    return __isa(o, "UpdateResult");
  }
}

/**
 * <p>Contains the value of a column.</p>
 */
export type Value =
  | Value.ArrayValuesMember
  | Value.BigIntValueMember
  | Value.BitValueMember
  | Value.BlobValueMember
  | Value.DoubleValueMember
  | Value.IntValueMember
  | Value.IsNullMember
  | Value.RealValueMember
  | Value.StringValueMember
  | Value.StructValueMember
  | Value.$UnknownMember;

export namespace Value {
  interface $Base {
    __type?: "Value";
  }
  /**
   * <p>An array of column values.</p>
   */
  export interface ArrayValuesMember extends $Base {
    arrayValues: Array<Value>;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of big integer data type.</p>
   */
  export interface BigIntValueMember extends $Base {
    arrayValues?: never;
    bigIntValue: number;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of BIT data type.</p>
   */
  export interface BitValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue: boolean;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of BLOB data type.</p>
   */
  export interface BlobValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue: Uint8Array;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of double data type.</p>
   */
  export interface DoubleValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue: number;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of integer data type.</p>
   */
  export interface IntValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue: number;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A NULL value.</p>
   */
  export interface IsNullMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull: boolean;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of real data type.</p>
   */
  export interface RealValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue: number;
    stringValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of string data type.</p>
   */
  export interface StringValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue: string;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of STRUCT data type.</p>
   */
  export interface StructValueMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue: StructValue;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    arrayValues?: never;
    bigIntValue?: never;
    bitValue?: never;
    blobValue?: never;
    doubleValue?: never;
    intValue?: never;
    isNull?: never;
    realValue?: never;
    stringValue?: never;
    structValue?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    arrayValues: (value: Array<Value>) => T;
    bigIntValue: (value: number) => T;
    bitValue: (value: boolean) => T;
    blobValue: (value: Uint8Array) => T;
    doubleValue: (value: number) => T;
    intValue: (value: number) => T;
    isNull: (value: boolean) => T;
    realValue: (value: number) => T;
    stringValue: (value: string) => T;
    structValue: (value: StructValue) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: Value, visitor: Visitor<T>): T {
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    if (value.bigIntValue !== undefined)
      return visitor.bigIntValue(value.bigIntValue);
    if (value.bitValue !== undefined) return visitor.bitValue(value.bitValue);
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.doubleValue !== undefined)
      return visitor.doubleValue(value.doubleValue);
    if (value.intValue !== undefined) return visitor.intValue(value.intValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.realValue !== undefined)
      return visitor.realValue(value.realValue);
    if (value.stringValue !== undefined)
      return visitor.stringValue(value.stringValue);
    if (value.structValue !== undefined)
      return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}
