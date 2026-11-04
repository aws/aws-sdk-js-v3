// smithy-typescript generated code
import type { DecimalReturnType, LongReturnType, RecordsFormatType, TypeHint } from "./enums";

/**
 * The request parameters represent the input of a request to start a SQL transaction.
 *
 * @public
 */
export interface BeginTransactionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name or ARN of the secret that enables access to the DB cluster.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  database?: string | undefined;

  /**
   * The name of the database schema.
   *
   * @public
   */
  schema?: string | undefined;
}

/**
 * The response elements represent the output of a request to start a SQL transaction.
 *
 * @public
 */
export interface BeginTransactionResponse {
  /**
   * The transaction ID of the transaction started by the call.
   *
   * @public
   */
  transactionId?: string | undefined;
}

/**
 * Contains the metadata for a column.
 *
 * @public
 */
export interface ColumnMetadata {
  /**
   * The name of the column.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the column.
   *
   * @public
   */
  type?: number | undefined;

  /**
   * The database-specific data type of the column.
   *
   * @public
   */
  typeName?: string | undefined;

  /**
   * The label for the column.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * The name of the schema that owns the table that includes the column.
   *
   * @public
   */
  schemaName?: string | undefined;

  /**
   * The name of the table that includes the column.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * A value that indicates whether the column increments automatically.
   *
   * @public
   */
  isAutoIncrement?: boolean | undefined;

  /**
   * A value that indicates whether an integer column is signed.
   *
   * @public
   */
  isSigned?: boolean | undefined;

  /**
   * A value that indicates whether the column contains currency values.
   *
   * @public
   */
  isCurrency?: boolean | undefined;

  /**
   * A value that indicates whether the column is case-sensitive.
   *
   * @public
   */
  isCaseSensitive?: boolean | undefined;

  /**
   * A value that indicates whether the column is nullable.
   *
   * @public
   */
  nullable?: number | undefined;

  /**
   * The precision value of a decimal number column.
   *
   * @public
   */
  precision?: number | undefined;

  /**
   * The scale value of a decimal number column.
   *
   * @public
   */
  scale?: number | undefined;

  /**
   * The type of the column.
   *
   * @public
   */
  arrayBaseColumnType?: number | undefined;
}

/**
 * The request parameters represent the input of a commit transaction request.
 *
 * @public
 */
export interface CommitTransactionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name or ARN of the secret that enables access to the DB cluster.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The identifier of the transaction to end and commit.
   *
   * @public
   */
  transactionId: string | undefined;
}

/**
 * The response elements represent the output of a commit transaction request.
 *
 * @public
 */
export interface CommitTransactionResponse {
  /**
   * The status of the commit operation.
   *
   * @public
   */
  transactionStatus?: string | undefined;
}

/**
 * The request parameters represent the input of a request to run one or more SQL statements.
 *
 * @public
 */
export interface ExecuteSqlRequest {
  /**
   * The ARN of the Aurora Serverless DB cluster.
   *
   * @public
   */
  dbClusterOrInstanceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.
   *
   * For information about creating the secret, see [Create a database secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html).
   *
   * @public
   */
  awsSecretStoreArn: string | undefined;

  /**
   * One or more SQL statements to run on the DB cluster.
   *
   * You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements.
   *
   * @public
   */
  sqlStatements: string | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  database?: string | undefined;

  /**
   * The name of the database schema.
   *
   * @public
   */
  schema?: string | undefined;
}

/**
 * The metadata of the result set returned by a SQL statement.
 *
 * @public
 */
export interface ResultSetMetadata {
  /**
   * The number of columns in the result set.
   *
   * @public
   */
  columnCount?: number | undefined;

  /**
   * The metadata of the columns in the result set.
   *
   * @public
   */
  columnMetadata?: ColumnMetadata[] | undefined;
}

/**
 * Options that control how the result set is returned.
 *
 * @public
 */
export interface ResultSetOptions {
  /**
   * A value that indicates how a field of `DECIMAL` type is represented in the response. The value of `STRING`, the default, specifies that it is converted to a String value. The value of `DOUBLE_OR_LONG` specifies that it is converted to a Long value if its scale is 0, or to a Double value otherwise.
   *
   * > **Note:** Conversion to Double or Long can result in roundoff errors due to precision loss. We recommend converting to String, especially when working with currency values.
   *
   * @public
   */
  decimalReturnType?: DecimalReturnType | undefined;

  /**
   * A value that indicates how a field of `LONG` type is represented. Allowed values are `LONG` and `STRING`. The default is `LONG`. Specify `STRING` if the length or precision of numeric values might cause truncation or rounding errors.
   *
   * @public
   */
  longReturnType?: LongReturnType | undefined;
}

/**
 * The request parameters represent the input of a request to perform a rollback of a transaction.
 *
 * @public
 */
export interface RollbackTransactionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name or ARN of the secret that enables access to the DB cluster.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The identifier of the transaction to roll back.
   *
   * @public
   */
  transactionId: string | undefined;
}

/**
 * The response elements represent the output of a request to perform a rollback of a transaction.
 *
 * @public
 */
export interface RollbackTransactionResponse {
  /**
   * The status of the rollback operation.
   *
   * @public
   */
  transactionStatus?: string | undefined;
}

/**
 * Contains an array.
 *
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
   * An array of Boolean values. Can contain null values.
   *
   * @public
   */
  export interface BooleanValuesMember {
    booleanValues: (boolean | null)[];
    longValues?: never;
    doubleValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * An array of integers. Can contain null values.
   *
   * @public
   */
  export interface LongValuesMember {
    booleanValues?: never;
    longValues: (number | null)[];
    doubleValues?: never;
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * An array of floating-point numbers. Can contain null values.
   *
   * @public
   */
  export interface DoubleValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues: (number | null)[];
    stringValues?: never;
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * An array of strings. Can contain null values.
   *
   * @public
   */
  export interface StringValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues?: never;
    stringValues: (string | null)[];
    arrayValues?: never;
    $unknown?: never;
  }

  /**
   * An array of arrays. Can contain null values.
   *
   * @public
   */
  export interface ArrayValuesMember {
    booleanValues?: never;
    longValues?: never;
    doubleValues?: never;
    stringValues?: never;
    arrayValues: (ArrayValue | null)[];
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    booleanValues: (value: (boolean | null)[]) => T;
    longValues: (value: (number | null)[]) => T;
    doubleValues: (value: (number | null)[]) => T;
    stringValues: (value: (string | null)[]) => T;
    arrayValues: (value: (ArrayValue | null)[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains a value.
 *
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
   * A NULL value.
   *
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
   * A value of Boolean data type.
   *
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
   * A value of long data type.
   *
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
   * A value of double data type.
   *
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
   * A value of string data type.
   *
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
   * A value of BLOB data type.
   *
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
   * An array of values.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * A parameter used in a SQL statement.
 *
 * @public
 */
export interface SqlParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  value?: Field | undefined;

  /**
   * A hint that specifies the correct object type for data type mapping. Possible values are as follows:
   *
   * - `DATE` - The corresponding `String` parameter value is sent as an object of `DATE` type to the database. The accepted format is `YYYY-MM-DD`.
   * - `DECIMAL` - The corresponding `String` parameter value is sent as an object of `DECIMAL` type to the database.
   * - `JSON` - The corresponding `String` parameter value is sent as an object of `JSON` type to the database.
   * - `TIME` - The corresponding `String` parameter value is sent as an object of `TIME` type to the database. The accepted format is `HH:MM:SS[.FFF]`.
   * - `TIMESTAMP` - The corresponding `String` parameter value is sent as an object of `TIMESTAMP` type to the database. The accepted format is `YYYY-MM-DD HH:MM:SS[.FFF]`.
   * - `UUID` - The corresponding `String` parameter value is sent as an object of `UUID` type to the database.
   *
   * @public
   */
  typeHint?: TypeHint | undefined;
}

/**
 * The response elements represent the results of an update.
 *
 * @public
 */
export interface UpdateResult {
  /**
   * Values for fields generated during the request.
   *
   * @public
   */
  generatedFields?: Field[] | undefined;
}

/**
 * Contains the value of a column.
 *
 * > **Note:** This data structure is only used with the deprecated `ExecuteSql` operation. Use the `BatchExecuteStatement` or `ExecuteStatement` operation instead.
 *
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
   * A NULL value.
   *
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
   * A value for a column of BIT data type.
   *
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
   * A value for a column of big integer data type.
   *
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
   * A value for a column of integer data type.
   *
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
   * A value for a column of double data type.
   *
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
   * A value for a column of real data type.
   *
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
   * A value for a column of string data type.
   *
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
   * A value for a column of BLOB data type.
   *
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
   * An array of column values.
   *
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
   * A value for a column of STRUCT data type.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * The request parameters represent the input of a request to run a SQL statement against a database.
 *
 * @public
 */
export interface ExecuteStatementRequest {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.
   *
   * For information about creating the secret, see [Create a database secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html).
   *
   * > **Note:**
   * >
   * > When you use the CLI on Linux to reference a secret created in the RDS console, the ARN might include special characters like `rds!cluster`. If you enclose the ARN in double quotes, the `!` character might trigger a shell expansion error, such as `-bash: !cluster: event not found`. To avoid this, escape the exclamation mark (\!) in the ARN or enclose the entire ARN in single quotes (') instead of double quotes.
   * >
   * > Alternatively, disable shell history expansion by running `set +H` before you execute the command.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The SQL statement to run.
   *
   * @public
   */
  sql: string | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  database?: string | undefined;

  /**
   * The name of the database schema.
   *
   * > **Note:** Currently, the `schema` parameter isn't supported.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * The parameters for the SQL statement.
   *
   * > **Note:** Array parameters are not supported.
   *
   * @public
   */
  parameters?: SqlParameter[] | undefined;

  /**
   * The identifier of a transaction that was started by using the `BeginTransaction` operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.
   *
   * If the SQL statement is not part of a transaction, don't set this parameter.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * A value that indicates whether to include metadata in the results.
   *
   * @public
   */
  includeResultMetadata?: boolean | undefined;

  /**
   * A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.
   *
   * > **Note:** For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.
   *
   * @public
   */
  continueAfterTimeout?: boolean | undefined;

  /**
   * Options that control how the result set is returned.
   *
   * @public
   */
  resultSetOptions?: ResultSetOptions | undefined;

  /**
   * A value that indicates whether to format the result set as a single JSON string. This parameter only applies to `SELECT` statements and is ignored for other types of statements. Allowed values are `NONE` and `JSON`. The default value is `NONE`. The result is returned in the `formattedRecords` field.
   *
   * For usage information about the JSON format for result sets, see [Using the Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  formatRecordsAs?: RecordsFormatType | undefined;
}

/**
 * A structure value returned by a call.
 *
 * > **Note:** This data structure is only used with the deprecated `ExecuteSql` operation. Use the `BatchExecuteStatement` or `ExecuteStatement` operation instead.
 *
 * @public
 */
export interface StructValue {
  /**
   * The attributes returned in the record.
   *
   * @public
   */
  attributes?: Value[] | undefined;
}

/**
 * The request parameters represent the input of a SQL statement over an array of data.
 *
 * @public
 */
export interface BatchExecuteStatementRequest {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.
   *
   * For information about creating the secret, see [Create a database secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html).
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.
   *
   * @public
   */
  sql: string | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  database?: string | undefined;

  /**
   * The name of the database schema.
   *
   * > **Note:** Currently, the `schema` parameter isn't supported.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * The parameter set for the batch operation.
   *
   * The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:
   *
   * - Specify one or more empty parameter sets.
   * - Use the `ExecuteStatement` operation instead of the `BatchExecuteStatement` operation.
   *
   * > **Note:** Array parameters are not supported.
   *
   * @public
   */
  parameterSets?: SqlParameter[][] | undefined;

  /**
   * The identifier of a transaction that was started by using the `BeginTransaction` operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.
   *
   * If the SQL statement is not part of a transaction, don't set this parameter.
   *
   * @public
   */
  transactionId?: string | undefined;
}

/**
 * The response elements represent the output of a SQL statement over an array of data.
 *
 * @public
 */
export interface BatchExecuteStatementResponse {
  /**
   * The execution results of each batch entry.
   *
   * @public
   */
  updateResults?: UpdateResult[] | undefined;
}

/**
 * A record returned by a call.
 *
 * > **Note:** This data structure is only used with the deprecated `ExecuteSql` operation. Use the `BatchExecuteStatement` or `ExecuteStatement` operation instead.
 *
 * @public
 */
export interface _Record {
  /**
   * The values returned in the record.
   *
   * @public
   */
  values?: Value[] | undefined;
}

/**
 * The response elements represent the output of a request to run a SQL statement against a database.
 *
 * @public
 */
export interface ExecuteStatementResponse {
  /**
   * The records returned by the SQL statement. This field is blank if the `formatRecordsAs` parameter is set to `JSON`.
   *
   * @public
   */
  records?: Field[][] | undefined;

  /**
   * Metadata for the columns included in the results. This field is blank if the `formatRecordsAs` parameter is set to `JSON`.
   *
   * @public
   */
  columnMetadata?: ColumnMetadata[] | undefined;

  /**
   * The number of records updated by the request.
   *
   * @public
   */
  numberOfRecordsUpdated?: number | undefined;

  /**
   * Values for fields generated during a DML request.
   *
   * > **Note:** The `generatedFields` data isn't supported by Aurora PostgreSQL. To get the values of generated fields, use the `RETURNING` clause. For more information, see [Returning Data From Modified Rows](https://www.postgresql.org/docs/10/dml-returning.html) in the PostgreSQL documentation.
   *
   * @public
   */
  generatedFields?: Field[] | undefined;

  /**
   * A string value that represents the result set of a `SELECT` statement in JSON format. This value is only present when the `formatRecordsAs` parameter is set to `JSON`.
   *
   * The size limit for this field is currently 10 MB. If the JSON-formatted string representing the result set requires more than 10 MB, the call returns an error.
   *
   * @public
   */
  formattedRecords?: string | undefined;
}

/**
 * The result set returned by a SQL statement.
 *
 * > **Note:** This data structure is only used with the deprecated `ExecuteSql` operation. Use the `BatchExecuteStatement` or `ExecuteStatement` operation instead.
 *
 * @public
 */
export interface ResultFrame {
  /**
   * The result-set metadata in the result set.
   *
   * @public
   */
  resultSetMetadata?: ResultSetMetadata | undefined;

  /**
   * The records in the result set.
   *
   * @public
   */
  records?: _Record[] | undefined;
}

/**
 * The result of a SQL statement.
 *
 * > **Note:** This data structure is only used with the deprecated `ExecuteSql` operation. Use the `BatchExecuteStatement` or `ExecuteStatement` operation instead.
 *
 * @public
 */
export interface SqlStatementResult {
  /**
   * The result set of the SQL statement.
   *
   * @public
   */
  resultFrame?: ResultFrame | undefined;

  /**
   * The number of records updated by a SQL statement.
   *
   * @public
   */
  numberOfRecordsUpdated?: number | undefined;
}

/**
 * The response elements represent the output of a request to run one or more SQL statements.
 *
 * @public
 */
export interface ExecuteSqlResponse {
  /**
   * The results of the SQL statement or statements.
   *
   * @public
   */
  sqlStatementResults?: SqlStatementResult[] | undefined;
}
