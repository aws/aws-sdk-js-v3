import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The error message returned by this <code>BadRequestException</code> error.</p>
   */
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

export enum TypeHint {
  DATE = "DATE",
  DECIMAL = "DECIMAL",
  TIME = "TIME",
  TIMESTAMP = "TIMESTAMP",
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
    ...obj,
  });
}

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export interface ServiceUnavailableError extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableError";
  $fault: "server";
}

export namespace ServiceUnavailableError {
  export const filterSensitiveLog = (obj: ServiceUnavailableError): any => ({
    ...obj,
  });
}

/**
 * <p>The execution of the SQL statement timed out.</p>
 */
export interface StatementTimeoutException extends __SmithyException, $MetadataBearer {
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
    ...obj,
  });
}

/**
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionRequest {
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
    ...obj,
  });
}

/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionResponse {
  /**
   * <p>The transaction ID of the transaction started by the call.</p>
   */
  transactionId?: string;
}

export namespace BeginTransactionResponse {
  export const filterSensitiveLog = (obj: BeginTransactionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the metadata for a column.</p>
 */
export interface ColumnMetadata {
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
    ...obj,
  });
}

/**
 * <p>The request parameters represent the input of a commit transaction request.</p>
 */
export interface CommitTransactionRequest {
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
    ...obj,
  });
}

/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionResponse {
  /**
   * <p>The status of the commit operation.</p>
   */
  transactionStatus?: string;
}

export namespace CommitTransactionResponse {
  export const filterSensitiveLog = (obj: CommitTransactionResponse): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

export enum DecimalReturnType {
  DOUBLE_OR_LONG = "DOUBLE_OR_LONG",
  STRING = "STRING",
}

/**
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlRequest {
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
    ...obj,
  });
}

/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface ResultSetMetadata {
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
  });
}

/**
 * <p>Options that control how the result set is returned.</p>
 */
export interface ResultSetOptions {
  /**
   * <p>A value that indicates how a field of <code>DECIMAL</code> type is represented
   *             in the response. The value of <code>STRING</code>, the default, specifies that
   *             it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code>
   *             specifies that it is converted to a Long value if its scale is 0, or to a Double
   *             value otherwise.</p>
   *         <important>
   *             <p>Conversion to Double or Long can result in roundoff errors due to precision loss.
   *                 We recommend converting to String, especially when working with currency values.</p>
   *         </important>
   */
  decimalReturnType?: DecimalReturnType | string;
}

export namespace ResultSetOptions {
  export const filterSensitiveLog = (obj: ResultSetOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionRequest {
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
    ...obj,
  });
}

/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionResponse {
  /**
   * <p>The status of the rollback operation.</p>
   */
  transactionStatus?: string;
}

export namespace RollbackTransactionResponse {
  export const filterSensitiveLog = (obj: RollbackTransactionResponse): any => ({
    ...obj,
  });
}

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
  /**
   * <p>An array of arrays.</p>
   */
  export interface ArrayValuesMember {
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
  export interface BooleanValuesMember {
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
  export interface DoubleValuesMember {
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
  export interface LongValuesMember {
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
  export interface StringValuesMember {
    arrayValues?: never;
    booleanValues?: never;
    doubleValues?: never;
    longValues?: never;
    stringValues: string[];
    $unknown?: never;
  }

  export interface $UnknownMember {
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
    if (value.arrayValues !== undefined) return visitor.arrayValues(value.arrayValues);
    if (value.booleanValues !== undefined) return visitor.booleanValues(value.booleanValues);
    if (value.doubleValues !== undefined) return visitor.doubleValues(value.doubleValues);
    if (value.longValues !== undefined) return visitor.longValues(value.longValues);
    if (value.stringValues !== undefined) return visitor.stringValues(value.stringValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: ArrayValue): any => {
    if (obj.arrayValues !== undefined)
      return { arrayValues: obj.arrayValues.map((item) => ArrayValue.filterSensitiveLog(item)) };
    if (obj.booleanValues !== undefined) return { booleanValues: obj.booleanValues };
    if (obj.doubleValues !== undefined) return { doubleValues: obj.doubleValues };
    if (obj.longValues !== undefined) return { longValues: obj.longValues };
    if (obj.stringValues !== undefined) return { stringValues: obj.stringValues };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
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
  /**
   * <p>An array of values.</p>
   */
  export interface ArrayValueMember {
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
  export interface BlobValueMember {
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
  export interface BooleanValueMember {
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
  export interface DoubleValueMember {
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
  export interface IsNullMember {
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
  export interface LongValueMember {
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
  export interface StringValueMember {
    arrayValue?: never;
    blobValue?: never;
    booleanValue?: never;
    doubleValue?: never;
    isNull?: never;
    longValue?: never;
    stringValue: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
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
    if (value.arrayValue !== undefined) return visitor.arrayValue(value.arrayValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: Field): any => {
    if (obj.arrayValue !== undefined) return { arrayValue: ArrayValue.filterSensitiveLog(obj.arrayValue) };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.isNull !== undefined) return { isNull: obj.isNull };
    if (obj.longValue !== undefined) return { longValue: obj.longValue };
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A parameter used in a SQL statement.</p>
 */
export interface SqlParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  name?: string;

  /**
   * <p>A hint that specifies the correct object type for data type mapping.</p>
   *         <p>
   *             <b>Values:</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DECIMAL</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>DECIMAL</code> type to the database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TIMESTAMP</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>TIMESTAMP</code> type to the database. The accepted format is <code>YYYY-MM-DD HH:MM:SS[.FFF]</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TIME</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>TIME</code> type to the database. The accepted format is <code>HH:MM:SS[.FFF]</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DATE</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>DATE</code> type to the database. The accepted format is <code>YYYY-MM-DD</code>.</p>
   *             </li>
   *          </ul>
   */
  typeHint?: TypeHint | string;

  /**
   * <p>The value of the parameter.</p>
   */
  value?: Field;
}

export namespace SqlParameter {
  export const filterSensitiveLog = (obj: SqlParameter): any => ({
    ...obj,
    ...(obj.value && { value: Field.filterSensitiveLog(obj.value) }),
  });
}

/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Field[];
}

export namespace UpdateResult {
  export const filterSensitiveLog = (obj: UpdateResult): any => ({
    ...obj,
    ...(obj.generatedFields && { generatedFields: obj.generatedFields.map((item) => Field.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Contains the value of a column.</p>
 *
 *         <important>
 *             <p>This data type is deprecated.</p>
 *         </important>
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
  /**
   * <p>An array of column values.</p>
   */
  export interface ArrayValuesMember {
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
  export interface BigIntValueMember {
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
  export interface BitValueMember {
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
  export interface BlobValueMember {
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
  export interface DoubleValueMember {
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
  export interface IntValueMember {
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
  export interface IsNullMember {
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
  export interface RealValueMember {
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
  export interface StringValueMember {
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
  export interface StructValueMember {
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

  export interface $UnknownMember {
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
    if (value.arrayValues !== undefined) return visitor.arrayValues(value.arrayValues);
    if (value.bigIntValue !== undefined) return visitor.bigIntValue(value.bigIntValue);
    if (value.bitValue !== undefined) return visitor.bitValue(value.bitValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.intValue !== undefined) return visitor.intValue(value.intValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.realValue !== undefined) return visitor.realValue(value.realValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.structValue !== undefined) return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: Value): any => {
    if (obj.arrayValues !== undefined)
      return { arrayValues: obj.arrayValues.map((item) => Value.filterSensitiveLog(item)) };
    if (obj.bigIntValue !== undefined) return { bigIntValue: obj.bigIntValue };
    if (obj.bitValue !== undefined) return { bitValue: obj.bitValue };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.intValue !== undefined) return { intValue: obj.intValue };
    if (obj.isNull !== undefined) return { isNull: obj.isNull };
    if (obj.realValue !== undefined) return { realValue: obj.realValue };
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.structValue !== undefined) return { structValue: StructValue.filterSensitiveLog(obj.structValue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementRequest {
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
   *         <note>
   *             <p>Array parameters are not supported.</p>
   *         </note>
   */
  parameters?: SqlParameter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Options that control how the result set is returned.</p>
   */
  resultSetOptions?: ResultSetOptions;

  /**
   * <p>The name of the database schema.</p>
   *         <note>
   *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
   *         </note>
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
    ...(obj.parameters && { parameters: obj.parameters.map((item) => SqlParameter.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A structure value returned by a call.</p>
 */
export interface StructValue {
  /**
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Value[];
}

export namespace StructValue {
  export const filterSensitiveLog = (obj: StructValue): any => ({
    ...obj,
    ...(obj.attributes && { attributes: obj.attributes.map((item) => Value.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementRequest {
  /**
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * <p>The parameter set for the batch operation.</p>
   *         <p>The SQL statement is executed as many times as the number of parameter sets provided.
   *           To execute a SQL statement with no parameters, use one of the following options:</p>
   *         <ul>
   *             <li>
   *                 <p>Specify one or more empty parameter sets.</p>
   *             </li>
   *             <li>
   *                 <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Array parameters are not supported.</p>
   *         </note>
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
  export const filterSensitiveLog = (obj: BatchExecuteStatementRequest): any => ({
    ...obj,
    ...(obj.parameterSets && {
      parameterSets: obj.parameterSets.map((item) => item.map((item) => SqlParameter.filterSensitiveLog(item))),
    }),
  });
}

/**
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementResponse {
  /**
   * <p>The execution results of each batch entry.</p>
   */
  updateResults?: UpdateResult[];
}

export namespace BatchExecuteStatementResponse {
  export const filterSensitiveLog = (obj: BatchExecuteStatementResponse): any => ({
    ...obj,
    ...(obj.updateResults && { updateResults: obj.updateResults.map((item) => UpdateResult.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A record returned by a call.</p>
 */
export interface _Record {
  /**
   * <p>The values returned in the record.</p>
   */
  values?: Value[];
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
    ...(obj.values && { values: obj.values.map((item) => Value.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementResponse {
  /**
   * <p>Metadata for the columns included in the results.</p>
   */
  columnMetadata?: ColumnMetadata[];

  /**
   * <p>Values for fields generated during the request.</p>
   *
   *         <note>
   *             <p>The <code>generatedFields</code> data isn't supported by Aurora PostgreSQL.
   *                 To get the values of generated fields, use the <code>RETURNING</code> clause. For
   *                 more information, see <a href="https://www.postgresql.org/docs/10/dml-returning.html">Returning Data From
   *                     Modified Rows</a> in the PostgreSQL documentation.</p>
   *         </note>
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
    ...(obj.generatedFields && { generatedFields: obj.generatedFields.map((item) => Field.filterSensitiveLog(item)) }),
    ...(obj.records && { records: obj.records.map((item) => item.map((item) => Field.filterSensitiveLog(item))) }),
  });
}

/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface ResultFrame {
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
    ...(obj.records && { records: obj.records.map((item) => _Record.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The result of a SQL statement.</p>
 *
 *         <important>
 *             <p>This data type is deprecated.</p>
 *         </important>
 */
export interface SqlStatementResult {
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
    ...(obj.resultFrame && { resultFrame: ResultFrame.filterSensitiveLog(obj.resultFrame) }),
  });
}

/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlResponse {
  /**
   * <p>The results of the SQL statement or statements.</p>
   */
  sqlStatementResults?: SqlStatementResult[];
}

export namespace ExecuteSqlResponse {
  export const filterSensitiveLog = (obj: ExecuteSqlResponse): any => ({
    ...obj,
  });
}
