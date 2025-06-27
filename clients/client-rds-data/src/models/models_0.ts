// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RDSDataServiceException as __BaseException } from "./RDSDataServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
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
 * <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 * @public
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
 * <p>There was an error in processing the SQL statement.</p>
 * @public
 */
export class DatabaseErrorException extends __BaseException {
  readonly name: "DatabaseErrorException" = "DatabaseErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseErrorException, __BaseException>) {
    super({
      name: "DatabaseErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseErrorException.prototype);
  }
}

/**
 * <p>The DB cluster doesn't have a DB instance.</p>
 * @public
 */
export class DatabaseNotFoundException extends __BaseException {
  readonly name: "DatabaseNotFoundException" = "DatabaseNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseNotFoundException, __BaseException>) {
    super({
      name: "DatabaseNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseNotFoundException.prototype);
  }
}

/**
 * <p>A request was cancelled because the Aurora Serverless v2 DB instance was paused.
 *          The Data API request automatically resumes the DB instance. Wait a few seconds and
 *          try again.</p>
 * @public
 */
export class DatabaseResumingException extends __BaseException {
  readonly name: "DatabaseResumingException" = "DatabaseResumingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseResumingException, __BaseException>) {
    super({
      name: "DatabaseResumingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseResumingException.prototype);
  }
}

/**
 * <p>The writer instance in the DB cluster isn't available.</p>
 * @public
 */
export class DatabaseUnavailableException extends __BaseException {
  readonly name: "DatabaseUnavailableException" = "DatabaseUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseUnavailableException, __BaseException>) {
    super({
      name: "DatabaseUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseUnavailableException.prototype);
  }
}

/**
 * <p>There are insufficient privileges to make the call.</p>
 * @public
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
 * <p>The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.</p>
 * @public
 */
export class HttpEndpointNotEnabledException extends __BaseException {
  readonly name: "HttpEndpointNotEnabledException" = "HttpEndpointNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HttpEndpointNotEnabledException, __BaseException>) {
    super({
      name: "HttpEndpointNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HttpEndpointNotEnabledException.prototype);
  }
}

/**
 * <p>An internal error occurred.</p>
 * @public
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
 * <p>The resource is in an invalid state.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * <p>The Secrets Manager secret used with the request isn't valid.</p>
 * @public
 */
export class InvalidSecretException extends __BaseException {
  readonly name: "InvalidSecretException" = "InvalidSecretException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecretException, __BaseException>) {
    super({
      name: "InvalidSecretException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecretException.prototype);
  }
}

/**
 * <p>There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>RDS Data API timed out retrieving the secret.</p>
 *             </li>
 *             <li>
 *                <p>The secret provided wasn't found.</p>
 *             </li>
 *             <li>
 *                <p>The secret couldn't be decrypted.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class SecretsErrorException extends __BaseException {
  readonly name: "SecretsErrorException" = "SecretsErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecretsErrorException, __BaseException>) {
    super({
      name: "SecretsErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecretsErrorException.prototype);
  }
}

/**
 * <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 * @public
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
 * <p>The execution of the SQL statement timed out.</p>
 * @public
 */
export class StatementTimeoutException extends __BaseException {
  readonly name: "StatementTimeoutException" = "StatementTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * <p>The database connection ID that executed the SQL statement.</p>
   * @public
   */
  dbConnectionId?: number | undefined;

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
 * <p>The transaction ID wasn't found.</p>
 * @public
 */
export class TransactionNotFoundException extends __BaseException {
  readonly name: "TransactionNotFoundException" = "TransactionNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionNotFoundException, __BaseException>) {
    super({
      name: "TransactionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionNotFoundException.prototype);
  }
}

/**
 * <p>The request parameters represent the input of a request to start a SQL
 *             transaction.</p>
 * @public
 */
export interface BeginTransactionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  database?: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   * @public
   */
  schema?: string | undefined;
}

/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 * @public
 */
export interface BeginTransactionResponse {
  /**
   * <p>The transaction ID of the transaction started by the call.</p>
   * @public
   */
  transactionId?: string | undefined;
}

/**
 * <p>Contains the metadata for a column.</p>
 * @public
 */
export interface ColumnMetadata {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the column.</p>
   * @public
   */
  type?: number | undefined;

  /**
   * <p>The database-specific data type of the column.</p>
   * @public
   */
  typeName?: string | undefined;

  /**
   * <p>The label for the column.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>The name of the schema that owns the table that includes the column.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The name of the table that includes the column.</p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>A value that indicates whether the column increments automatically.</p>
   * @public
   */
  isAutoIncrement?: boolean | undefined;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   * @public
   */
  isSigned?: boolean | undefined;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   * @public
   */
  isCurrency?: boolean | undefined;

  /**
   * <p>A value that indicates whether the column is case-sensitive.</p>
   * @public
   */
  isCaseSensitive?: boolean | undefined;

  /**
   * <p>A value that indicates whether the column is nullable.</p>
   * @public
   */
  nullable?: number | undefined;

  /**
   * <p>The precision value of a decimal number column.</p>
   * @public
   */
  precision?: number | undefined;

  /**
   * <p>The scale value of a decimal number column.</p>
   * @public
   */
  scale?: number | undefined;

  /**
   * <p>The type of the column.</p>
   * @public
   */
  arrayBaseColumnType?: number | undefined;
}

/**
 * <p>The request parameters represent the input of a commit transaction request.</p>
 * @public
 */
export interface CommitTransactionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The identifier of the transaction to end and commit.</p>
   * @public
   */
  transactionId: string | undefined;
}

/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 * @public
 */
export interface CommitTransactionResponse {
  /**
   * <p>The status of the commit operation.</p>
   * @public
   */
  transactionStatus?: string | undefined;
}

/**
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 * @public
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
 * <p>The request parameters represent the input of a request to run one or more SQL
 *             statements.</p>
 * @public
 */
export interface ExecuteSqlRequest {
  /**
   * <p>The ARN of the Aurora Serverless DB cluster.</p>
   * @public
   */
  dbClusterOrInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password
   *             for the credentials in the secret.</p>
   *          <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   * @public
   */
  awsSecretStoreArn: string | undefined;

  /**
   * <p>One or more SQL statements to run on the DB cluster.</p>
   *          <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL
   *             statement is permitted, including data definition, data manipulation, and commit
   *             statements. </p>
   * @public
   */
  sqlStatements: string | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  database?: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   * @public
   */
  schema?: string | undefined;
}

/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 * @public
 */
export interface ResultSetMetadata {
  /**
   * <p>The number of columns in the result set.</p>
   * @public
   */
  columnCount?: number | undefined;

  /**
   * <p>The metadata of the columns in the result set.</p>
   * @public
   */
  columnMetadata?: ColumnMetadata[] | undefined;
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
 * <p>Options that control how the result set is returned.</p>
 * @public
 */
export interface ResultSetOptions {
  /**
   * <p>A value that indicates how a field of <code>DECIMAL</code> type is represented
   *             in the response. The value of <code>STRING</code>, the default, specifies that
   *             it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code>
   *             specifies that it is converted to a Long value if its scale is 0, or to a Double
   *             value otherwise.</p>
   *          <note>
   *             <p>Conversion to Double or Long can result in roundoff errors due to precision loss.
   *                 We recommend converting to String, especially when working with currency values.</p>
   *          </note>
   * @public
   */
  decimalReturnType?: DecimalReturnType | undefined;

  /**
   * <p>A value that indicates how a field of <code>LONG</code> type is represented.
   *         Allowed values are <code>LONG</code> and <code>STRING</code>. The default
   *         is <code>LONG</code>. Specify <code>STRING</code> if the length or
   *         precision of numeric values might cause truncation or rounding errors.
   *         </p>
   * @public
   */
  longReturnType?: LongReturnType | undefined;
}

/**
 * <p>There was a problem with the result because of one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>It contained an unsupported data type.</p>
 *             </li>
 *             <li>
 *                <p>It contained a multidimensional array.</p>
 *             </li>
 *             <li>
 *                <p>The size was too large.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class UnsupportedResultException extends __BaseException {
  readonly name: "UnsupportedResultException" = "UnsupportedResultException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedResultException, __BaseException>) {
    super({
      name: "UnsupportedResultException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedResultException.prototype);
  }
}

/**
 * <p>The request parameters represent the input of a request to perform a rollback of a
 *             transaction.</p>
 * @public
 */
export interface RollbackTransactionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the DB cluster.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The identifier of the transaction to roll back.</p>
   * @public
   */
  transactionId: string | undefined;
}

/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 * @public
 */
export interface RollbackTransactionResponse {
  /**
   * <p>The status of the rollback operation.</p>
   * @public
   */
  transactionStatus?: string | undefined;
}

/**
 * <p>Contains an array.</p>
 * @public
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
   * <p>An array of Boolean values.</p>
   * @public
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
   * <p>An array of integers.</p>
   * @public
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
   * <p>An array of floating-point numbers.</p>
   * @public
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
   * <p>An array of strings.</p>
   * @public
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
   * <p>An array of arrays.</p>
   * @public
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
 * <p>Contains a value.</p>
 * @public
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
   * <p>A NULL value.</p>
   * @public
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
   * <p>A value of Boolean data type.</p>
   * @public
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
   * <p>A value of long data type.</p>
   * @public
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
   * <p>A value of double data type.</p>
   * @public
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
   * <p>A value of string data type.</p>
   * @public
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
   * <p>A value of BLOB data type.</p>
   * @public
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
   * <p>An array of values.</p>
   * @public
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
 * <p>A parameter used in a SQL statement.</p>
 * @public
 */
export interface SqlParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: Field | undefined;

  /**
   * <p>A hint that specifies the correct object type for data type mapping. Possible values
   *             are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DATE</code> - The corresponding <code>String</code> parameter value is sent as an object
   *               of <code>DATE</code> type to the database. The accepted format is <code>YYYY-MM-DD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DECIMAL</code> - The corresponding <code>String</code> parameter value is sent as an object
   *                     of <code>DECIMAL</code> type to the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> - The corresponding <code>String</code> parameter value is sent as an
   *            object of <code>JSON</code> type to the database.</p>
   *             </li>
   *             <li>
   *                <p>
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
   * @public
   */
  typeHint?: TypeHint | undefined;
}

/**
 * <p>The response elements represent the results of an update.</p>
 * @public
 */
export interface UpdateResult {
  /**
   * <p>Values for fields generated during the request.</p>
   * @public
   */
  generatedFields?: Field[] | undefined;
}

/**
 * <p>Contains the value of a column.</p>
 *          <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *          </note>
 * @public
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
   * <p>A NULL value.</p>
   * @public
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
   * <p>A value for a column of BIT data type.</p>
   * @public
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
   * <p>A value for a column of big integer data type.</p>
   * @public
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
   * <p>A value for a column of integer data type.</p>
   * @public
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
   * <p>A value for a column of double data type.</p>
   * @public
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
   * <p>A value for a column of real data type.</p>
   * @public
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
   * <p>A value for a column of string data type.</p>
   * @public
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
   * <p>A value for a column of BLOB data type.</p>
   * @public
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
   * <p>An array of column values.</p>
   * @public
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
   * <p>A value for a column of STRUCT data type.</p>
   * @public
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
 * <p>The request parameters represent the input of a request to run a SQL statement against
 *             a database.</p>
 * @public
 */
export interface ExecuteStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in
   *             the secret.</p>
   *          <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The SQL statement to run.</p>
   * @public
   */
  sql: string | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  database?: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   *          <note>
   *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
   *          </note>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>The parameters for the SQL statement.</p>
   *          <note>
   *             <p>Array parameters are not supported.</p>
   *          </note>
   * @public
   */
  parameters?: SqlParameter[] | undefined;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *          <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>A value that indicates whether to include metadata in the results.</p>
   * @public
   */
  includeResultMetadata?: boolean | undefined;

  /**
   * <p>A value that indicates whether to continue running the statement after
   *             the call times out. By default, the statement stops running when the call
   *             times out.</p>
   *          <note>
   *             <p>For DDL statements, we recommend continuing to run the statement after
   *                the call times out. When a DDL statement terminates before it is finished
   *                running, it can result in errors and possibly corrupted data structures.</p>
   *          </note>
   * @public
   */
  continueAfterTimeout?: boolean | undefined;

  /**
   * <p>Options that control how the result set is returned.</p>
   * @public
   */
  resultSetOptions?: ResultSetOptions | undefined;

  /**
   * <p>A value that indicates whether to format the result set as a single JSON string.
   *         This parameter only applies to <code>SELECT</code> statements and is ignored for
   *         other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>.
   *         The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p>
   *          <p>For usage information about the JSON format for result sets, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a>
   *           in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  formatRecordsAs?: RecordsFormatType | undefined;
}

/**
 * <p>A structure value returned by a call.</p>
 *          <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *          </note>
 * @public
 */
export interface StructValue {
  /**
   * <p>The attributes returned in the record.</p>
   * @public
   */
  attributes?: Value[] | undefined;
}

/**
 * <p>The request parameters represent the input of a SQL statement over an array of
 *             data.</p>
 * @public
 */
export interface BatchExecuteStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in
   *             the secret.</p>
   *          <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.</p>
   * @public
   */
  sql: string | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  database?: string | undefined;

  /**
   * <p>The name of the database schema.</p>
   *          <note>
   *             <p>Currently, the <code>schema</code> parameter isn't supported.</p>
   *          </note>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>The parameter set for the batch operation.</p>
   *          <p>The SQL statement is executed as many times as the number of parameter sets provided.
   *           To execute a SQL statement with no parameters, use one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Specify one or more empty parameter sets.</p>
   *             </li>
   *             <li>
   *                <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Array parameters are not supported.</p>
   *          </note>
   * @public
   */
  parameterSets?: SqlParameter[][] | undefined;

  /**
   * <p>The identifier of a transaction that was started by using the
   *                 <code>BeginTransaction</code> operation. Specify the transaction ID of the
   *             transaction that you want to include the SQL statement in.</p>
   *          <p>If the SQL statement is not part of a transaction, don't set this
   *             parameter.</p>
   * @public
   */
  transactionId?: string | undefined;
}

/**
 * <p>The response elements represent the output of a SQL statement over an array of
 *             data.</p>
 * @public
 */
export interface BatchExecuteStatementResponse {
  /**
   * <p>The execution results of each batch entry.</p>
   * @public
   */
  updateResults?: UpdateResult[] | undefined;
}

/**
 * <p>A record returned by a call.</p>
 *          <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *          </note>
 * @public
 */
export interface _Record {
  /**
   * <p>The values returned in the record.</p>
   * @public
   */
  values?: Value[] | undefined;
}

/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 * @public
 */
export interface ExecuteStatementResponse {
  /**
   * <p>The records returned by the SQL statement. This field is blank if the
   *         <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
   * @public
   */
  records?: Field[][] | undefined;

  /**
   * <p>Metadata for the columns included in the results. This field is blank if the
   *         <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
   * @public
   */
  columnMetadata?: ColumnMetadata[] | undefined;

  /**
   * <p>The number of records updated by the request.</p>
   * @public
   */
  numberOfRecordsUpdated?: number | undefined;

  /**
   * <p>Values for fields generated during a DML request.</p>
   *          <note>
   *             <p>The <code>generatedFields</code> data isn't supported by Aurora PostgreSQL.
   *                 To get the values of generated fields, use the <code>RETURNING</code> clause. For
   *                 more information, see <a href="https://www.postgresql.org/docs/10/dml-returning.html">Returning Data From
   *                     Modified Rows</a> in the PostgreSQL documentation.</p>
   *          </note>
   * @public
   */
  generatedFields?: Field[] | undefined;

  /**
   * <p>A string value that represents the result set of a <code>SELECT</code> statement
   *         in JSON format. This value is only present when the <code>formatRecordsAs</code>
   *         parameter is set to <code>JSON</code>.</p>
   *          <p>The size limit for this field is currently 10 MB. If the JSON-formatted string representing the
   *           result set requires more than 10 MB, the call returns an error.</p>
   * @public
   */
  formattedRecords?: string | undefined;
}

/**
 * <p>The result set returned by a SQL statement.</p>
 *          <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *          </note>
 * @public
 */
export interface ResultFrame {
  /**
   * <p>The result-set metadata in the result set.</p>
   * @public
   */
  resultSetMetadata?: ResultSetMetadata | undefined;

  /**
   * <p>The records in the result set.</p>
   * @public
   */
  records?: _Record[] | undefined;
}

/**
 * <p>The result of a SQL statement.</p>
 *          <note>
 *             <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation.
 *               Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p>
 *          </note>
 * @public
 */
export interface SqlStatementResult {
  /**
   * <p>The result set of the SQL statement.</p>
   * @public
   */
  resultFrame?: ResultFrame | undefined;

  /**
   * <p>The number of records updated by a SQL statement.</p>
   * @public
   */
  numberOfRecordsUpdated?: number | undefined;
}

/**
 * <p>The response elements represent the output of a request to run one or more SQL
 *             statements.</p>
 * @public
 */
export interface ExecuteSqlResponse {
  /**
   * <p>The results of the SQL statement or statements.</p>
   * @public
   */
  sqlStatementResults?: SqlStatementResult[] | undefined;
}
