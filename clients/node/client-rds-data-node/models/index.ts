import * as _smithy from "../lib/smithy";
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
  export const ID = "com.amazon.rdsdataservice#ArrayValue";
  interface $Base {
    __type?: "com.amazon.rdsdataservice#ArrayValue";
  }
  /**
   * <p>An array of Boolean values.</p>
   */
  export interface BooleanValuesMember extends $Base {
    booleanValues: Array<boolean>;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of integers.</p>
   */
  export interface DoubleValuesMember extends $Base {
    booleanValues?: never;
    doubleValues: Array<number>;
    longValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of floating point numbers.</p>
   */
  export interface LongValuesMember extends $Base {
    booleanValues?: never;
    doubleValues?: never;
    longValues: Array<number>;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of strings.</p>
   */
  export interface StringValuesMember extends $Base {
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues: Array<string>;
    arrayValues?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of arrays.</p>
   */
  export interface ArrayValuesMember extends $Base {
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    arrayValues: Array<ArrayValue>;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    booleanValues: (value: Array<boolean>) => T;
    doubleValues: (value: Array<number>) => T;
    longValues: (value: Array<number>) => T;
    stringValues: (value: Array<string>) => T;
    arrayValues: (value: Array<ArrayValue>) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: ArrayValue, visitor: Visitor<T>): T {
    if (value.booleanValues !== undefined)
      return visitor.booleanValues(value.booleanValues);
    if (value.doubleValues !== undefined)
      return visitor.doubleValues(value.doubleValues);
    if (value.longValues !== undefined)
      return visitor.longValues(value.longValues);
    if (value.stringValues !== undefined)
      return visitor.stringValues(value.stringValues);
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export interface BadRequestException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#BadRequestException";
  $name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>BadRequestException</code> error.</p>
   */
  message?: string;
}

export namespace BadRequestException {
  export const ID = "com.amazon.rdsdataservice#BadRequestException";
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementRequest {
  __type?: "com.amazon.rdsdataservice#BatchExecuteStatementRequest";
  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this
   *             parameter.</p>
   */
  transactionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The parameter set for the batch operation.</p>
   */
  parameterSets?: Array<Array<SqlParameter>>;

  /**
   * <p>The SQL statement to run.</p>
   */
  sql: string | undefined;
}

export namespace BatchExecuteStatementRequest {
  export const ID = "com.amazon.rdsdataservice#BatchExecuteStatementRequest";
  export function isa(o: any): o is BatchExecuteStatementRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#BatchExecuteStatementResponse";
  /**
   * <p>The execution results of each batch entry.</p>
   */
  updateResults?: Array<UpdateResult>;
}

export namespace BatchExecuteStatementResponse {
  export const ID = "com.amazon.rdsdataservice#BatchExecuteStatementResponse";
  export function isa(o: any): o is BatchExecuteStatementResponse {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionRequest {
  __type?: "com.amazon.rdsdataservice#BeginTransactionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;

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
  export const ID = "com.amazon.rdsdataservice#BeginTransactionRequest";
  export function isa(o: any): o is BeginTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#BeginTransactionResponse";
  /**
   * <p>The transaction ID of the transaction started by the call.</p>
   */
  transactionId?: string;
}

export namespace BeginTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#BeginTransactionResponse";
  export function isa(o: any): o is BeginTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>Contains the metadata for a column.</p>
 */
export interface ColumnMetadata {
  __type?: "com.amazon.rdsdataservice#ColumnMetadata";
  /**
   * <p>A value that indicates whether the column is nullable.</p>
   */
  nullable?: number;

  /**
   * <p>The label for the column.</p>
   */
  label?: string;

  /**
   * <p>The database-specific data type of the column.</p>
   */
  typeName?: string;

  /**
   * <p>A value that indicates whether the column is case-sensitive.</p>
   */
  isCaseSensitive?: boolean;

  /**
   * <p>The precision value of a decimal number column.</p>
   */
  precision?: number;

  /**
   * <p>The type of the column.</p>
   */
  type?: number;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   */
  isSigned?: boolean;

  /**
   * <p>The name of the schema that owns the table that includes the column.</p>
   */
  schemaName?: string;

  /**
   * <p>The name of the column.</p>
   */
  name?: string;

  /**
   * <p>The name of the table that includes the column.</p>
   */
  tableName?: string;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   */
  isCurrency?: boolean;

  /**
   * <p>The type of the column.</p>
   */
  arrayBaseColumnType?: number;

  /**
   * <p>A value that indicates whether the column increments automatically.</p>
   */
  isAutoIncrement?: boolean;

  /**
   * <p>The scale value of a decimal number column.</p>
   */
  scale?: number;
}

export namespace ColumnMetadata {
  export const ID = "com.amazon.rdsdataservice#ColumnMetadata";
  export function isa(o: any): o is ColumnMetadata {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a commit transaction request.</p>
 */
export interface CommitTransactionRequest {
  __type?: "com.amazon.rdsdataservice#CommitTransactionRequest";
  /**
   * <p>The identifier of the transaction to end and commit.</p>
   */
  transactionId: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;
}

export namespace CommitTransactionRequest {
  export const ID = "com.amazon.rdsdataservice#CommitTransactionRequest";
  export function isa(o: any): o is CommitTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#CommitTransactionResponse";
  /**
   * <p>The status of the commit operation.</p>
   */
  transactionStatus?: string;
}

export namespace CommitTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#CommitTransactionResponse";
  export function isa(o: any): o is CommitTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlRequest {
  __type?: "com.amazon.rdsdataservice#ExecuteSqlRequest";
  /**
   * <p>The ARN of the Aurora Serverless DB cluster.</p>
   */
  dbClusterOrInstanceArn: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.</p>
   */
  awsSecretStoreArn: string | undefined;

  /**
   * <p>One or more SQL statements to run on the DB cluster.</p>
   *         <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL
   *             statement is permitted, including data definition, data manipulation, and commit
   *             statements. </p>
   */
  sqlStatements: string | undefined;
}

export namespace ExecuteSqlRequest {
  export const ID = "com.amazon.rdsdataservice#ExecuteSqlRequest";
  export function isa(o: any): o is ExecuteSqlRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#ExecuteSqlResponse";
  /**
   * <p>The results of the SQL statement or statements.</p>
   */
  sqlStatementResults?: Array<SqlStatementResult>;
}

export namespace ExecuteSqlResponse {
  export const ID = "com.amazon.rdsdataservice#ExecuteSqlResponse";
  export function isa(o: any): o is ExecuteSqlResponse {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementRequest {
  __type?: "com.amazon.rdsdataservice#ExecuteStatementRequest";
  /**
   * <p>A value that indicates whether to include metadata in the results.</p>
   */
  includeResultMetadata?: boolean;

  /**
   * <p>The name of the database schema.</p>
   */
  schema?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * <p>The parameters for the SQL statement.</p>
   */
  parameters?: Array<SqlParameter>;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
   */
  transactionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

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
   * <p>The SQL statement to run.</p>
   */
  sql: string | undefined;

  /**
   * <p>The name of the database.</p>
   */
  database?: string;
}

export namespace ExecuteStatementRequest {
  export const ID = "com.amazon.rdsdataservice#ExecuteStatementRequest";
  export function isa(o: any): o is ExecuteStatementRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#ExecuteStatementResponse";
  /**
   * <p>The number of records updated by the request.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The records returned by the SQL statement.</p>
   */
  records?: Array<Array<Field>>;

  /**
   * <p>Metadata for the columns included in the results.</p>
   */
  columnMetadata?: Array<ColumnMetadata>;

  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<Field>;
}

export namespace ExecuteStatementResponse {
  export const ID = "com.amazon.rdsdataservice#ExecuteStatementResponse";
  export function isa(o: any): o is ExecuteStatementResponse {
    return _smithy.isa(o, ID);
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
  export const ID = "com.amazon.rdsdataservice#Field";
  interface $Base {
    __type?: "com.amazon.rdsdataservice#Field";
  }
  /**
   * <p>A value of BLOB data type.</p>
   */
  export interface BlobValueMember extends $Base {
    blobValue: Uint8Array;
    booleanValue?: never;
    arrayValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of Boolean data type.</p>
   */
  export interface BooleanValueMember extends $Base {
    blobValue?: never;
    booleanValue: boolean;
    arrayValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of values.</p>
   */
  export interface ArrayValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue: ArrayValue;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of long data type.</p>
   */
  export interface LongValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    longValue: number;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A NULL value.</p>
   */
  export interface IsNullMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    longValue?: never;
    isNull: boolean;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of double data type.</p>
   */
  export interface DoubleValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue: number;
    stringValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value of string data type.</p>
   */
  export interface StringValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue: string;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    blobValue: (value: Uint8Array) => T;
    booleanValue: (value: boolean) => T;
    arrayValue: (value: ArrayValue) => T;
    longValue: (value: number) => T;
    isNull: (value: boolean) => T;
    doubleValue: (value: number) => T;
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: Field, visitor: Visitor<T>): T {
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.booleanValue !== undefined)
      return visitor.booleanValue(value.booleanValue);
    if (value.arrayValue !== undefined)
      return visitor.arrayValue(value.arrayValue);
    if (value.longValue !== undefined)
      return visitor.longValue(value.longValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.doubleValue !== undefined)
      return visitor.doubleValue(value.doubleValue);
    if (value.stringValue !== undefined)
      return visitor.stringValue(value.stringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>There are insufficient privileges to make the call.</p>
 */
export interface ForbiddenException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#ForbiddenException";
  $name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>ForbiddenException</code> error.</p>
   */
  message?: string;
}

export namespace ForbiddenException {
  export const ID = "com.amazon.rdsdataservice#ForbiddenException";
  export function isa(o: any): o is ForbiddenException {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServerErrorException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#InternalServerErrorException";
  $name: "InternalServerErrorException";
  $fault: "server";
}

export namespace InternalServerErrorException {
  export const ID = "com.amazon.rdsdataservice#InternalServerErrorException";
  export function isa(o: any): o is InternalServerErrorException {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 */
export interface NotFoundException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#NotFoundException";
  $name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>NotFoundException</code> error.</p>
   */
  message?: string;
}

export namespace NotFoundException {
  export const ID = "com.amazon.rdsdataservice#NotFoundException";
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
  __type?: "com.amazon.rdsdataservice#Record";
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Array<Value>;
}

export namespace _Record {
  export const ID = "com.amazon.rdsdataservice#Record";
  export function isa(o: any): o is _Record {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface ResultFrame {
  __type?: "com.amazon.rdsdataservice#ResultFrame";
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
  export const ID = "com.amazon.rdsdataservice#ResultFrame";
  export function isa(o: any): o is ResultFrame {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface ResultSetMetadata {
  __type?: "com.amazon.rdsdataservice#ResultSetMetadata";
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
  export const ID = "com.amazon.rdsdataservice#ResultSetMetadata";
  export function isa(o: any): o is ResultSetMetadata {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionRequest {
  __type?: "com.amazon.rdsdataservice#RollbackTransactionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The identifier of the transaction to roll back.</p>
   */
  transactionId: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;
}

export namespace RollbackTransactionRequest {
  export const ID = "com.amazon.rdsdataservice#RollbackTransactionRequest";
  export function isa(o: any): o is RollbackTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#RollbackTransactionResponse";
  /**
   * <p>The status of the rollback operation.</p>
   */
  transactionStatus?: string;
}

export namespace RollbackTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#RollbackTransactionResponse";
  export function isa(o: any): o is RollbackTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export interface ServiceUnavailableError extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#ServiceUnavailableError";
  $name: "ServiceUnavailableError";
  $fault: "server";
}

export namespace ServiceUnavailableError {
  export const ID = "com.amazon.rdsdataservice#ServiceUnavailableError";
  export function isa(o: any): o is ServiceUnavailableError {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>A parameter used in a SQL statement.</p>
 */
export interface SqlParameter {
  __type?: "com.amazon.rdsdataservice#SqlParameter";
  /**
   * <p>The value of the parameter.</p>
   */
  value?: Field;

  /**
   * <p>The name of the parameter.</p>
   */
  name?: string;
}

export namespace SqlParameter {
  export const ID = "com.amazon.rdsdataservice#SqlParameter";
  export function isa(o: any): o is SqlParameter {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The result of a SQL statement.</p>
 */
export interface SqlStatementResult {
  __type?: "com.amazon.rdsdataservice#SqlStatementResult";
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
  export const ID = "com.amazon.rdsdataservice#SqlStatementResult";
  export function isa(o: any): o is SqlStatementResult {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The execution of the SQL statement timed out.</p>
 */
export interface StatementTimeoutException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#StatementTimeoutException";
  $name: "StatementTimeoutException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>StatementTimeoutException</code> error.</p>
   */
  message?: string;

  /**
   * <p>The database connection ID that executed the SQL statement.</p>
   */
  dbConnectionId?: number;
}

export namespace StatementTimeoutException {
  export const ID = "com.amazon.rdsdataservice#StatementTimeoutException";
  export function isa(o: any): o is StatementTimeoutException {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>A structure value returned by a call.</p>
 */
export interface StructValue {
  __type?: "com.amazon.rdsdataservice#StructValue";
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Array<Value>;
}

export namespace StructValue {
  export const ID = "com.amazon.rdsdataservice#StructValue";
  export function isa(o: any): o is StructValue {
    return _smithy.isa(o, ID);
  }
}

/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
  __type?: "com.amazon.rdsdataservice#UpdateResult";
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<Field>;
}

export namespace UpdateResult {
  export const ID = "com.amazon.rdsdataservice#UpdateResult";
  export function isa(o: any): o is UpdateResult {
    return _smithy.isa(o, ID);
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
  export const ID = "com.amazon.rdsdataservice#Value";
  interface $Base {
    __type?: "com.amazon.rdsdataservice#Value";
  }
  /**
   * <p>A value for a column of real data type.</p>
   */
  export interface RealValueMember extends $Base {
    realValue: number;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of big integer data type.</p>
   */
  export interface BigIntValueMember extends $Base {
    realValue?: never;
    bigIntValue: number;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of integer data type.</p>
   */
  export interface IntValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue: number;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>An array of column values.</p>
   */
  export interface ArrayValuesMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues: Array<Value>;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A NULL value.</p>
   */
  export interface IsNullMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull: boolean;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of BIT data type.</p>
   */
  export interface BitValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue: boolean;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of BLOB data type.</p>
   */
  export interface BlobValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue: Uint8Array;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of string data type.</p>
   */
  export interface StringValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue: string;
    doubleValue?: never;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of double data type.</p>
   */
  export interface DoubleValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue: number;
    structValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A value for a column of STRUCT data type.</p>
   */
  export interface StructValueMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue: StructValue;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    arrayValues?: never;
    isNull?: never;
    bitValue?: never;
    blobValue?: never;
    stringValue?: never;
    doubleValue?: never;
    structValue?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    realValue: (value: number) => T;
    bigIntValue: (value: number) => T;
    intValue: (value: number) => T;
    arrayValues: (value: Array<Value>) => T;
    isNull: (value: boolean) => T;
    bitValue: (value: boolean) => T;
    blobValue: (value: Uint8Array) => T;
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    structValue: (value: StructValue) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: Value, visitor: Visitor<T>): T {
    if (value.realValue !== undefined)
      return visitor.realValue(value.realValue);
    if (value.bigIntValue !== undefined)
      return visitor.bigIntValue(value.bigIntValue);
    if (value.intValue !== undefined) return visitor.intValue(value.intValue);
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.bitValue !== undefined) return visitor.bitValue(value.bitValue);
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.stringValue !== undefined)
      return visitor.stringValue(value.stringValue);
    if (value.doubleValue !== undefined)
      return visitor.doubleValue(value.doubleValue);
    if (value.structValue !== undefined)
      return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}
