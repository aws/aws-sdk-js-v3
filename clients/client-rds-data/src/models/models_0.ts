// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RDSDataServiceException as __BaseException } from "./RDSDataServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const TypeHint = {
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  JSON: "JSON",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  UUID: "UUID",
} as const;

/**
 * @public
 */
export type TypeHint = (typeof TypeHint)[keyof typeof TypeHint];

/**
 * @public
 * <p>There are insufficient privileges to make the call.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * @public
 * <p>An internal error occurred.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * @public
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export class ServiceUnavailableError extends __BaseException {
  readonly name: "ServiceUnavailableError" = "ServiceUnavailableError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableError, __BaseException>) {
    super({
      name: "ServiceUnavailableError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

/**
 * @public
 * <p>The execution of the SQL statement timed out.</p>
 */
export class StatementTimeoutException extends __BaseException {
  readonly name: "StatementTimeoutException" = "StatementTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The database connection ID that executed the SQL statement.</p>
   */
  dbConnectionId?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatementTimeoutException, __BaseException>) {
    super({
      name: "StatementTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatementTimeoutException.prototype);
    this.dbConnectionId = opts.dbConnectionId;
  }
}

/**
 * @public
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * @public
   * <p>The name of the database schema.</p>
   */
  schema?: string;
}

/**
 * @public
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionResponse {
  /**
   * @public
   * <p>The transaction ID of the transaction started by the call.</p>
   */
  transactionId?: string;
}

/**
 * @public
 * <p>Contains the metadata for a column.</p>
 */
export interface ColumnMetadata {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of the column.</p>
   */
  type?: number;

  /**
   * @public
   * <p>The database-specific data type of the column.</p>
   */
  typeName?: string;

  /**
   * @public
   * <p>The label for the column.</p>
   */
  label?: string;

  /**
   * @public
   * <p>The name of the schema that owns the table that includes the column.</p>
   */
  schemaName?: string;

  /**
   * @public
   * <p>The name of the table that includes the column.</p>
   */
  tableName?: string;

  /**
   * @public
   * <p>A value that indicates whether the column increments automatically.</p>
   */
  isAutoIncrement?: boolean;

  /**
   * @public
   * <p>A value that indicates whether an integer column is signed.</p>
   */
  isSigned?: boolean;

  /**
   * @public
   * <p>A value that indicates whether the column contains currency values.</p>
   */
  isCurrency?: boolean;

  /**
   * @public
   * <p>A value that indicates whether the column is case-sensitive.</p>
   */
  isCaseSensitive?: boolean;

  /**
   * @public
   * <p>A value that indicates whether the column is nullable.</p>
   */
  nullable?: number;

  /**
   * @public
   * <p>The precision value of a decimal number column.</p>
   */
  precision?: number;

  /**
   * @public
   * <p>The scale value of a decimal number column.</p>
   */
  scale?: number;

  /**
   * @public
   * <p>The type of the column.</p>
   */
  arrayBaseColumnType?: number;
}

/**
 * @public
 * <p>The request parameters represent the input of a commit transaction request.</p>
 */
export interface CommitTransactionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the transaction to end and commit.</p>
   */
  transactionId: string | undefined;
}

/**
 * @public
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionResponse {
  /**
   * @public
   * <p>The status of the commit operation.</p>
   */
  transactionStatus?: string;
}

/**
 * @public
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DecimalReturnType = {
  DOUBLE_OR_LONG: "DOUBLE_OR_LONG",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type DecimalReturnType = (typeof DecimalReturnType)[keyof typeof DecimalReturnType];

/**
 * @public
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlRequest {
  /**
   * @public
   * <p>The ARN of the Aurora Serverless DB cluster.</p>
   */
  dbClusterOrInstanceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password
   *             for the credentials in the secret.</p>
   *         <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   */
  awsSecretStoreArn: string | undefined;

  /**
   * @public
   * <p>One or more SQL statements to run on the DB cluster.</p>
   *         <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL
   *             statement is permitted, including data definition, data manipulation, and commit
   *             statements. </p>
   */
  sqlStatements: string | undefined;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * @public
   * <p>The name of the database schema.</p>
   */
  schema?: string;
}

/**
 * @public
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface ResultSetMetadata {
  /**
   * @public
   * <p>The number of columns in the result set.</p>
   */
  columnCount?: number;

  /**
   * @public
   * <p>The metadata of the columns in the result set.</p>
   */
  columnMetadata?: ColumnMetadata[];
}

/**
 * @public
 * @enum
 */
export const RecordsFormatType = {
  JSON: "JSON",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RecordsFormatType = (typeof RecordsFormatType)[keyof typeof RecordsFormatType];

/**
 * @public
 * @enum
 */
export const LongReturnType = {
  LONG: "LONG",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type LongReturnType = (typeof LongReturnType)[keyof typeof LongReturnType];

/**
 * @public
 * <p>Options that control how the result set is returned.</p>
 */
export interface ResultSetOptions {
  /**
   * @public
   * <p>A value that indicates how a field of <code>DECIMAL</code> type is represented
   *             in the response. The value of <code>STRING</code>, the default, specifies that
   *             it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code>
   *             specifies that it is converted to a Long value if its scale is 0, or to a Double
   *             value otherwise.</p>
   *         <note>
   *             <p>Conversion to Double or Long can result in roundoff errors due to precision loss.
   *                 We recommend converting to String, especially when working with currency values.</p>
   *         </note>
   */
  decimalReturnType?: DecimalReturnType;

  /**
   * @public
   * <p>A value that indicates how a field of <code>LONG</code> type is represented.
   *         Allowed values are <code>LONG</code> and <code>STRING</code>. The default
   *         is <code>LONG</code>. Specify <code>STRING</code> if the length or
   *         precision of numeric values might cause truncation or rounding errors.
   *         </p>
   */
  longReturnType?: LongReturnType;
}

/**
 * @public
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the transaction to roll back.</p>
   */
  transactionId: string | undefined;
}

/**
 * @public
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionResponse {
  /**
   * @public
   * <p>The status of the rollback operation.</p>
   */
  transactionStatus?: string;
}

/**
 * @public
 * <p>Contains an array.</p>
 */
export type ArrayValue =
  | ArrayValue.ArrayValuesMember
  | ArrayValue.BooleanValuesMember
  | ArrayValue.DoubleValuesMember
  | ArrayValue.LongValuesMember
  | ArrayValue.StringValuesMember
  | ArrayValue.$UnknownMember;

/**
 * @public
 */
export namespace ArrayValue {
  /**
   * @public
   * <p>An array of Boolean values.</p>
   */
  export interface BooleanValuesMember {
    booleanValues: boolean[];
    longValues?: never;
    doubleValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of integers.</p>
   */
  export interface LongValuesMember {
    booleanValues?: never;
    longValues: number[];
    doubleValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of floating-point numbers.</p>
   */
  export interface DoubleValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues: number[];
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of strings.</p>
   */
  export interface StringValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues?: never;
    stringValues: string[];
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of arrays.</p>
   */
  export interface ArrayValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues?: never;
    stringValues?: never;
    arrayValues: ArrayValue[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    booleanValues: (value: boolean[]) => T;
    longValues: (value: number[]) => T;
    doubleValues: (value: number[]) => T;
    stringValues: (value: string[]) => T;
    arrayValues: (value: ArrayValue[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ArrayValue, visitor: Visitor<T>): T => {
    if (value.booleanValues !== undefined) return visitor.booleanValues(value.booleanValues);
    if (value.longValues !== undefined) return visitor.longValues(value.longValues);
    if (value.doubleValues !== undefined) return visitor.doubleValues(value.doubleValues);
    if (value.stringValues !== undefined) return visitor.stringValues(value.stringValues);
    if (value.arrayValues !== undefined) return visitor.arrayValues(value.arrayValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
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

/**
 * @public
 */
export namespace Field {
  /**
   * @public
   * <p>A NULL value.</p>
   */
  export interface IsNullMember {
    isNull: boolean;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value of Boolean data type.</p>
   */
  export interface BooleanValueMember {
    isNull?: never;
    booleanValue: boolean;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value of long data type.</p>
   */
  export interface LongValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue: number;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value of double data type.</p>
   */
  export interface DoubleValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue: number;
    stringValue?: never;
    blobValue?: never;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value of string data type.</p>
   */
  export interface StringValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue: string;
    blobValue?: never;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value of BLOB data type.</p>
   */
  export interface BlobValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue: Uint8Array;
    arrayValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of values.</p>
   */
  export interface ArrayValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValue: ArrayValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    isNull: (value: boolean) => T;
    booleanValue: (value: boolean) => T;
    longValue: (value: number) => T;
    doubleValue: (value: number) => T;
    stringValue: (value: string) => T;
    blobValue: (value: Uint8Array) => T;
    arrayValue: (value: ArrayValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Field, visitor: Visitor<T>): T => {
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.arrayValue !== undefined) return visitor.arrayValue(value.arrayValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A parameter used in a SQL statement.</p>
 */
export interface SqlParameter {
  /**
   * @public
   * <p>The name of the parameter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value of the parameter.</p>
   */
  value?: Field;

  /**
   * @public
   * <p>A hint that specifies the correct object type for data type mapping. Possible values
   *             are as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>DATE</code> - The corresponding <code>String</code> parameter value is sent as an object
   *               of <code>DATE</code> type to the database. The accepted format is <code>YYYY-MM-DD</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DECIMAL</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>DECIMAL</code> type to the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> - The corresponding <code>String</code> parameter value is sent as an
   *            object of <code>JSON</code> type to the database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TIME</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>TIME</code> type to the database. The accepted format is <code>HH:MM:SS[.FFF]</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - The corresponding <code>String</code> parameter value is sent as an object
   *               of <code>TIMESTAMP</code> type to the database. The accepted format is <code>YYYY-MM-DD HH:MM:SS[.FFF]</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UUID</code> - The corresponding <code>String</code> parameter value is sent as an object of
   *              <code>UUID</code> type to the database.
   *           </p>
   *             </li>
   *          </ul>
   */
  typeHint?: TypeHint;
}

/**
 * @public
 * <p>The response elements represent the results of an update.</p>
 */
export interface UpdateResult {
  /**
   * @public
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Field[];
}

/**
 * @public
 * <p>Contains the value of a column.</p>
 *
 *         <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *         </note>
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

/**
 * @public
 */
export namespace Value {
  /**
   * @public
   * <p>A NULL value.</p>
   */
  export interface IsNullMember {
    isNull: boolean;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of BIT data type.</p>
   */
  export interface BitValueMember {
    isNull?: never;
    bitValue: boolean;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of big integer data type.</p>
   */
  export interface BigIntValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue: number;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of integer data type.</p>
   */
  export interface IntValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue: number;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of double data type.</p>
   */
  export interface DoubleValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue: number;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of real data type.</p>
   */
  export interface RealValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue: number;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of string data type.</p>
   */
  export interface StringValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue: string;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of BLOB data type.</p>
   */
  export interface BlobValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue: Uint8Array;
    arrayValues?: never;
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An array of column values.</p>
   */
  export interface ArrayValuesMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues: Value[];
    structValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A value for a column of STRUCT data type.</p>
   */
  export interface StructValueMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue: StructValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    isNull?: never;
    bitValue?: never;
    bigIntValue?: never;
    intValue?: never;
    doubleValue?: never;
    realValue?: never;
    stringValue?: never;
    blobValue?: never;
    arrayValues?: never;
    structValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    isNull: (value: boolean) => T;
    bitValue: (value: boolean) => T;
    bigIntValue: (value: number) => T;
    intValue: (value: number) => T;
    doubleValue: (value: number) => T;
    realValue: (value: number) => T;
    stringValue: (value: string) => T;
    blobValue: (value: Uint8Array) => T;
    arrayValues: (value: Value[]) => T;
    structValue: (value: StructValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Value, visitor: Visitor<T>): T => {
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.bitValue !== undefined) return visitor.bitValue(value.bitValue);
    if (value.bigIntValue !== undefined) return visitor.bigIntValue(value.bigIntValue);
    if (value.intValue !== undefined) return visitor.intValue(value.intValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.realValue !== undefined) return visitor.realValue(value.realValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.arrayValues !== undefined) return visitor.arrayValues(value.arrayValues);
    if (value.structValue !== undefined) return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in
   *             the secret.</p>
   *         <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The SQL statement to run.</p>
   */
  sql: string | undefined;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * @public
   * <p>The name of the database schema.</p>
   *         <note>
   *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
   *         </note>
   */
  schema?: string;

  /**
   * @public
   * <p>The parameters for the SQL statement.</p>
   *         <note>
   *             <p>Array parameters are not supported.</p>
   *         </note>
   */
  parameters?: SqlParameter[];

  /**
   * @public
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
   */
  transactionId?: string;

  /**
   * @public
   * <p>A value that indicates whether to include metadata in the results.</p>
   */
  includeResultMetadata?: boolean;

  /**
   * @public
   * <p>A value that indicates whether to continue running the statement after
   *             the call times out. By default, the statement stops running when the call
   *             times out.</p>
   *         <note>
   *             <p>For DDL statements, we recommend continuing to run the statement after
   *                the call times out. When a DDL statement terminates before it is finished
   *                running, it can result in errors and possibly corrupted data structures.</p>
   *         </note>
   */
  continueAfterTimeout?: boolean;

  /**
   * @public
   * <p>Options that control how the result set is returned.</p>
   */
  resultSetOptions?: ResultSetOptions;

  /**
   * @public
   * <p>A value that indicates whether to format the result set as a single JSON string.
   *         This parameter only applies to <code>SELECT</code> statements and is ignored for
   *         other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>.
   *         The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p>
   *         <p>For usage information about the JSON format for result sets, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a>
   *           in the <i>Amazon Aurora User Guide</i>.</p>
   */
  formatRecordsAs?: RecordsFormatType;
}

/**
 * @public
 * <p>A structure value returned by a call.</p>
 *         <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *         </note>
 */
export interface StructValue {
  /**
   * @public
   * <p>The attributes returned in the record.</p>
   */
  attributes?: Value[];
}

/**
 * @public
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in
   *             the secret.</p>
   *         <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   */
  secretArn: string | undefined;

  /**
   * @public
   * <p>The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.</p>
   */
  sql: string | undefined;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  database?: string;

  /**
   * @public
   * <p>The name of the database schema.</p>
   *         <note>
   *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
   *         </note>
   */
  schema?: string;

  /**
   * @public
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
   * @public
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *         <p>If the SQL statement is not part of a transaction, don't set this
   *             parameter.</p>
   */
  transactionId?: string;
}

/**
 * @public
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 */
export interface BatchExecuteStatementResponse {
  /**
   * @public
   * <p>The execution results of each batch entry.</p>
   */
  updateResults?: UpdateResult[];
}

/**
 * @public
 * <p>A record returned by a call.</p>
 *         <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *         </note>
 */
export interface _Record {
  /**
   * @public
   * <p>The values returned in the record.</p>
   */
  values?: Value[];
}

/**
 * @public
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementResponse {
  /**
   * @public
   * <p>The records returned by the SQL statement. This field is blank if the
   *         <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
   */
  records?: Field[][];

  /**
   * @public
   * <p>Metadata for the columns included in the results. This field is blank if the
   *         <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
   */
  columnMetadata?: ColumnMetadata[];

  /**
   * @public
   * <p>The number of records updated by the request.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * @public
   * <p>Values for fields generated during a DML request.</p>
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
   * @public
   * <p>A string value that represents the result set of a <code>SELECT</code> statement
   *         in JSON format. This value is only present when the <code>formatRecordsAs</code>
   *         parameter is set to <code>JSON</code>.</p>
   *         <p>The size limit for this field is currently 10 MB. If the JSON-formatted string representing the
   *           result set requires more than 10 MB, the call returns an error.</p>
   */
  formattedRecords?: string;
}

/**
 * @public
 * <p>The result set returned by a SQL statement.</p>
 *         <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *         </note>
 */
export interface ResultFrame {
  /**
   * @public
   * <p>The result-set metadata in the result set.</p>
   */
  resultSetMetadata?: ResultSetMetadata;

  /**
   * @public
   * <p>The records in the result set.</p>
   */
  records?: _Record[];
}

/**
 * @public
 * <p>The result of a SQL statement.</p>
 *
 *         <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *         </note>
 */
export interface SqlStatementResult {
  /**
   * @public
   * <p>The result set of the SQL statement.</p>
   */
  resultFrame?: ResultFrame;

  /**
   * @public
   * <p>The number of records updated by a SQL statement.</p>
   */
  numberOfRecordsUpdated?: number;
}

/**
 * @public
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 */
export interface ExecuteSqlResponse {
  /**
   * @public
   * <p>The results of the SQL statement or statements.</p>
   */
  sqlStatementResults?: SqlStatementResult[];
}
