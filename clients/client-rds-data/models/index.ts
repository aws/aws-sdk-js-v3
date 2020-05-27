import {
  SENSITIVE_STRING,
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
    arrayValues: ArrayValue[];
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
    booleanValues: boolean[];
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
    doubleValues: number[];
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
    longValues: number[];
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
    stringValues: string[];
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
    arrayValues: (value: ArrayValue[]) => T;
    booleanValues: (value: boolean[]) => T;
    doubleValues: (value: number[]) => T;
    longValues: (value: number[]) => T;
    stringValues: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
  export const visit = <T>(value: ArrayValue, visitor: Visitor<T>): T => {
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
  };
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
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
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
  parameterSets?: SqlParameter[][];

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
  export const filterSensitiveLog = (
    obj: BatchExecuteStatementRequest
  ): any => ({
    ...obj,
    ...(obj.parameterSets && {
      parameterSets: obj.parameterSets.map(item =>
        item.map(item => SqlParameter.filterSensitiveLog(item))
      )
    })
  });
  export const isa = (o: any): o is BatchExecuteStatementRequest =>
    __isa(o, "BatchExecuteStatementRequest");
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
  updateResults?: UpdateResult[];
}

export namespace BatchExecuteStatementResponse {
  export const filterSensitiveLog = (
    obj: BatchExecuteStatementResponse
  ): any => ({
    ...obj,
    ...(obj.updateResults && {
      updateResults: obj.updateResults.map(item =>
        UpdateResult.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is BatchExecuteStatementResponse =>
    __isa(o, "BatchExecuteStatementResponse");
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
  export const filterSensitiveLog = (obj: BeginTransactionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BeginTransactionRequest =>
    __isa(o, "BeginTransactionRequest");
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
  export const filterSensitiveLog = (obj: BeginTransactionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BeginTransactionResponse =>
    __isa(o, "BeginTransactionResponse");
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
  export const filterSensitiveLog = (obj: ColumnMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ColumnMetadata =>
    __isa(o, "ColumnMetadata");
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
  export const filterSensitiveLog = (obj: CommitTransactionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitTransactionRequest =>
    __isa(o, "CommitTransactionRequest");
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
  export const filterSensitiveLog = (obj: CommitTransactionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitTransactionResponse =>
    __isa(o, "CommitTransactionResponse");
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
  export const filterSensitiveLog = (obj: ExecuteSqlRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecuteSqlRequest =>
    __isa(o, "ExecuteSqlRequest");
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
  sqlStatementResults?: SqlStatementResult[];
}

export namespace ExecuteSqlResponse {
  export const filterSensitiveLog = (obj: ExecuteSqlResponse): any => ({
    ...obj,
    ...(obj.sqlStatementResults && {
      sqlStatementResults: obj.sqlStatementResults.map(item =>
        SqlStatementResult.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ExecuteSqlResponse =>
    __isa(o, "ExecuteSqlResponse");
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
  parameters?: SqlParameter[];

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
  export const filterSensitiveLog = (obj: ExecuteStatementRequest): any => ({
    ...obj,
    ...(obj.parameters && {
      parameters: obj.parameters.map(item =>
        SqlParameter.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ExecuteStatementRequest =>
    __isa(o, "ExecuteStatementRequest");
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
  columnMetadata?: ColumnMetadata[];

  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Field[];

  /**
   * <p>The number of records updated by the request.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The records returned by the SQL statement.</p>
   */
  records?: Field[][];
}

export namespace ExecuteStatementResponse {
  export const filterSensitiveLog = (obj: ExecuteStatementResponse): any => ({
    ...obj,
    ...(obj.columnMetadata && {
      columnMetadata: obj.columnMetadata.map(item =>
        ColumnMetadata.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ExecuteStatementResponse =>
    __isa(o, "ExecuteStatementResponse");
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
  export const visit = <T>(value: Field, visitor: Visitor<T>): T => {
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
  };
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
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
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
  __type?: "Record";
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Value[];
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj
  });
  export const isa = (o: any): o is _Record => __isa(o, "Record");
}

/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface ResultFrame {
  __type?: "ResultFrame";
  /**
   * <p>The records in the result set.</p>
   */
  records?: _Record[];

  /**
   * <p>The result-set metadata in the result set.</p>
   */
  resultSetMetadata?: ResultSetMetadata;
}

export namespace ResultFrame {
  export const filterSensitiveLog = (obj: ResultFrame): any => ({
    ...obj,
    ...(obj.records && {
      records: obj.records.map(item => _Record.filterSensitiveLog(item))
    }),
    ...(obj.resultSetMetadata && {
      resultSetMetadata: ResultSetMetadata.filterSensitiveLog(
        obj.resultSetMetadata
      )
    })
  });
  export const isa = (o: any): o is ResultFrame => __isa(o, "ResultFrame");
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
  columnMetadata?: ColumnMetadata[];
}

export namespace ResultSetMetadata {
  export const filterSensitiveLog = (obj: ResultSetMetadata): any => ({
    ...obj,
    ...(obj.columnMetadata && {
      columnMetadata: obj.columnMetadata.map(item =>
        ColumnMetadata.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ResultSetMetadata =>
    __isa(o, "ResultSetMetadata");
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
  export const filterSensitiveLog = (obj: RollbackTransactionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RollbackTransactionRequest =>
    __isa(o, "RollbackTransactionRequest");
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
  export const filterSensitiveLog = (
    obj: RollbackTransactionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RollbackTransactionResponse =>
    __isa(o, "RollbackTransactionResponse");
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
  export const filterSensitiveLog = (obj: ServiceUnavailableError): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableError =>
    __isa(o, "ServiceUnavailableError");
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
  export const filterSensitiveLog = (obj: SqlParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlParameter => __isa(o, "SqlParameter");
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
  export const filterSensitiveLog = (obj: SqlStatementResult): any => ({
    ...obj,
    ...(obj.resultFrame && {
      resultFrame: ResultFrame.filterSensitiveLog(obj.resultFrame)
    })
  });
  export const isa = (o: any): o is SqlStatementResult =>
    __isa(o, "SqlStatementResult");
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
  export const filterSensitiveLog = (obj: StatementTimeoutException): any => ({
    ...obj
  });
  export const isa = (o: any): o is StatementTimeoutException =>
    __isa(o, "StatementTimeoutException");
}

/**
 * <p>A structure value returned by a call.</p>
 */
export interface StructValue {
  __type?: "StructValue";
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Value[];
}

export namespace StructValue {
  export const filterSensitiveLog = (obj: StructValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is StructValue => __isa(o, "StructValue");
}

/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
  __type?: "UpdateResult";
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Field[];
}

export namespace UpdateResult {
  export const filterSensitiveLog = (obj: UpdateResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateResult => __isa(o, "UpdateResult");
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
    arrayValues: Value[];
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
    arrayValues: (value: Value[]) => T;
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
  export const visit = <T>(value: Value, visitor: Visitor<T>): T => {
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
  };
}
