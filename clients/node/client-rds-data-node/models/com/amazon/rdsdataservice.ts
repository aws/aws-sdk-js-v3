import {
  SmithyException as $SmithyException,
  SmithyStructure as $SmithyStructure,
  TaggedUnion
} from "../../../shared/shapeTypes";

export type ArrayValue = TaggedUnion<{
  stringValues?: Array<string>;
  booleanValues?: Array<boolean>;
  arrayValues?: Array<ArrayValue>;
  blobValues?: Array<Uint8Array>;
  doubleValues?: Array<number>;
  longValues?: Array<number>;
}>;

namespace ArrayValue {
  export interface ArrayValueVisitor<T> {
    stringValues: (value: Array<string>) => T;
    booleanValues: (value: Array<boolean>) => T;
    arrayValues: (value: Array<ArrayValue>) => T;
    blobValues: (value: Array<Uint8Array>) => T;
    doubleValues: (value: Array<number>) => T;
    longValues: (value: Array<number>) => T;
    _: (name: string, value: any) => T;
  }

  export function visit<T>(
    value: ArrayValue,
    visitor: ArrayValueVisitor<T>
  ): T {
    if (value.stringValues !== undefined)
      return visitor.stringValues(value.stringValues);
    if (value.booleanValues !== undefined)
      return visitor.booleanValues(value.booleanValues);
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    if (value.blobValues !== undefined)
      return visitor.blobValues(value.blobValues);
    if (value.doubleValues !== undefined)
      return visitor.doubleValues(value.doubleValues);
    if (value.longValues !== undefined)
      return visitor.longValues(value.longValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export class BadRequestException extends $SmithyException {
  readonly message?: string;
  constructor(args: { $service: string; message?: string }) {
    super({
      id: "com.amazon.rdsdataservice#BadRequestException",
      name: "BadRequestException",
      fault: "client",
      service: args.$service
    });
    this.message = args.message;
  }
}

export class BatchExecuteStatementRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#BatchExecuteStatementRequest";
  readonly transactionId?: string;
  readonly resourceArn: string | undefined;
  readonly schema?: string;
  readonly database?: string;
  readonly parameterSets?: Array<Array<SqlParameter>>;
  readonly sql: string | undefined;
  readonly secretArn: string | undefined;
  constructor(args: {
    transactionId?: string;
    resourceArn: string | undefined;
    schema?: string;
    database?: string;
    parameterSets?: Array<Array<SqlParameter>>;
    sql: string | undefined;
    secretArn: string | undefined;
  }) {
    this.transactionId = args.transactionId;
    this.resourceArn = args.resourceArn;
    this.schema = args.schema;
    this.database = args.database;
    this.parameterSets = args.parameterSets;
    this.sql = args.sql;
    this.secretArn = args.secretArn;
  }
}

export class BatchExecuteStatementResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#BatchExecuteStatementResponse";
  readonly updateResults?: Array<UpdateResult>;
  constructor(args: { updateResults?: Array<UpdateResult> }) {
    this.updateResults = args.updateResults;
  }
}

export class BeginTransactionRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#BeginTransactionRequest";
  readonly resourceArn: string | undefined;
  readonly database?: string;
  readonly schema?: string;
  readonly secretArn: string | undefined;
  constructor(args: {
    resourceArn: string | undefined;
    database?: string;
    schema?: string;
    secretArn: string | undefined;
  }) {
    this.resourceArn = args.resourceArn;
    this.database = args.database;
    this.schema = args.schema;
    this.secretArn = args.secretArn;
  }
}

export class BeginTransactionResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#BeginTransactionResponse";
  readonly transactionId?: string;
  constructor(args: { transactionId?: string }) {
    this.transactionId = args.transactionId;
  }
}

export class ColumnMetadata implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ColumnMetadata";
  readonly nullable?: number;
  readonly label?: string;
  readonly typeName?: string;
  readonly isCaseSensitive?: boolean;
  readonly isCurrency?: boolean;
  readonly arrayBaseColumnType?: number;
  readonly precision?: number;
  readonly type?: number;
  readonly isSigned?: boolean;
  readonly schemaName?: string;
  readonly isAutoIncrement?: boolean;
  readonly name?: string;
  readonly scale?: number;
  readonly tableName?: string;
  constructor(args: {
    nullable?: number;
    label?: string;
    typeName?: string;
    isCaseSensitive?: boolean;
    isCurrency?: boolean;
    arrayBaseColumnType?: number;
    precision?: number;
    type?: number;
    isSigned?: boolean;
    schemaName?: string;
    isAutoIncrement?: boolean;
    name?: string;
    scale?: number;
    tableName?: string;
  }) {
    this.nullable = args.nullable;
    this.label = args.label;
    this.typeName = args.typeName;
    this.isCaseSensitive = args.isCaseSensitive;
    this.isCurrency = args.isCurrency;
    this.arrayBaseColumnType = args.arrayBaseColumnType;
    this.precision = args.precision;
    this.type = args.type;
    this.isSigned = args.isSigned;
    this.schemaName = args.schemaName;
    this.isAutoIncrement = args.isAutoIncrement;
    this.name = args.name;
    this.scale = args.scale;
    this.tableName = args.tableName;
  }
}

export class CommitTransactionRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#CommitTransactionRequest";
  readonly secretArn: string | undefined;
  readonly resourceArn: string | undefined;
  readonly transactionId: string | undefined;
  constructor(args: {
    secretArn: string | undefined;
    resourceArn: string | undefined;
    transactionId: string | undefined;
  }) {
    this.secretArn = args.secretArn;
    this.resourceArn = args.resourceArn;
    this.transactionId = args.transactionId;
  }
}

export class CommitTransactionResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#CommitTransactionResponse";
  readonly transactionStatus?: string;
  constructor(args: { transactionStatus?: string }) {
    this.transactionStatus = args.transactionStatus;
  }
}

export enum DecimalReturnType {
  STRING = "STRING",
  DOUBLE_OR_LONG = "DOUBLE_OR_LONG"
}

export class ExecuteSqlRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ExecuteSqlRequest";
  readonly dbClusterOrInstanceArn: string | undefined;
  readonly schema?: string;
  readonly database?: string;
  readonly awsSecretStoreArn: string | undefined;
  readonly sqlStatements: string | undefined;
  constructor(args: {
    dbClusterOrInstanceArn: string | undefined;
    schema?: string;
    database?: string;
    awsSecretStoreArn: string | undefined;
    sqlStatements: string | undefined;
  }) {
    this.dbClusterOrInstanceArn = args.dbClusterOrInstanceArn;
    this.schema = args.schema;
    this.database = args.database;
    this.awsSecretStoreArn = args.awsSecretStoreArn;
    this.sqlStatements = args.sqlStatements;
  }
}

export class ExecuteSqlResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ExecuteSqlResponse";
  readonly sqlStatementResults?: Array<SqlStatementResult>;
  constructor(args: { sqlStatementResults?: Array<SqlStatementResult> }) {
    this.sqlStatementResults = args.sqlStatementResults;
  }
}

export class ExecuteStatementRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ExecuteStatementRequest";
  readonly continueAfterTimeout?: boolean;
  readonly includeResultMetadata?: boolean;
  readonly schema?: string;
  readonly secretArn: string | undefined;
  readonly parameters?: Array<SqlParameter>;
  readonly transactionId?: string;
  readonly sql: string | undefined;
  readonly resourceArn: string | undefined;
  readonly database?: string;
  readonly resultSetOptions?: ResultSetOptions;
  constructor(args: {
    continueAfterTimeout?: boolean;
    includeResultMetadata?: boolean;
    schema?: string;
    secretArn: string | undefined;
    parameters?: Array<SqlParameter>;
    transactionId?: string;
    sql: string | undefined;
    resourceArn: string | undefined;
    database?: string;
    resultSetOptions?: ResultSetOptions;
  }) {
    this.continueAfterTimeout = args.continueAfterTimeout;
    this.includeResultMetadata = args.includeResultMetadata;
    this.schema = args.schema;
    this.secretArn = args.secretArn;
    this.parameters = args.parameters;
    this.transactionId = args.transactionId;
    this.sql = args.sql;
    this.resourceArn = args.resourceArn;
    this.database = args.database;
    this.resultSetOptions = args.resultSetOptions;
  }
}

export class ExecuteStatementResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ExecuteStatementResponse";
  readonly numberOfRecordsUpdated?: number;
  readonly records?: Array<Array<Field>>;
  readonly columnMetadata?: Array<ColumnMetadata>;
  readonly generatedFields?: Array<Field>;
  constructor(args: {
    numberOfRecordsUpdated?: number;
    records?: Array<Array<Field>>;
    columnMetadata?: Array<ColumnMetadata>;
    generatedFields?: Array<Field>;
  }) {
    this.numberOfRecordsUpdated = args.numberOfRecordsUpdated;
    this.records = args.records;
    this.columnMetadata = args.columnMetadata;
    this.generatedFields = args.generatedFields;
  }
}

export type Field = TaggedUnion<{
  blobValue?: Uint8Array;
  booleanValue?: boolean;
  arrayValue?: ArrayValue;
  structValue?: { [key: string]: Field };
  longValue?: number;
  isNull?: boolean;
  doubleValue?: number;
  stringValue?: string;
}>;

namespace Field {
  export interface FieldVisitor<T> {
    blobValue: (value: Uint8Array) => T;
    booleanValue: (value: boolean) => T;
    arrayValue: (value: ArrayValue) => T;
    structValue: (value: { [key: string]: Field }) => T;
    longValue: (value: number) => T;
    isNull: (value: boolean) => T;
    doubleValue: (value: number) => T;
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export function visit<T>(value: Field, visitor: FieldVisitor<T>): T {
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.booleanValue !== undefined)
      return visitor.booleanValue(value.booleanValue);
    if (value.arrayValue !== undefined)
      return visitor.arrayValue(value.arrayValue);
    if (value.structValue !== undefined)
      return visitor.structValue(value.structValue);
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

export class ForbiddenException extends $SmithyException {
  readonly message?: string;
  constructor(args: { $service: string; message?: string }) {
    super({
      id: "com.amazon.rdsdataservice#ForbiddenException",
      name: "ForbiddenException",
      fault: "client",
      service: args.$service
    });
    this.message = args.message;
  }
}

export class InternalServerErrorException extends $SmithyException {
  constructor(args: { $service: string; message?: string }) {
    super({
      id: "com.amazon.rdsdataservice#InternalServerErrorException",
      name: "InternalServerErrorException",
      fault: "server",
      service: args.$service
    });
  }
}

export class NotFoundException extends $SmithyException {
  readonly message?: string;
  constructor(args: { $service: string; message?: string }) {
    super({
      id: "com.amazon.rdsdataservice#NotFoundException",
      name: "NotFoundException",
      fault: "client",
      service: args.$service
    });
    this.message = args.message;
  }
}

export class _Record implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#Record";
  readonly values?: Array<Value>;
  constructor(args: { values?: Array<Value> }) {
    this.values = args.values;
  }
}

export class ResultFrame implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ResultFrame";
  readonly records?: Array<Record>;
  readonly resultSetMetadata?: ResultSetMetadata;
  constructor(args: {
    records?: Array<Record>;
    resultSetMetadata?: ResultSetMetadata;
  }) {
    this.records = args.records;
    this.resultSetMetadata = args.resultSetMetadata;
  }
}

export class ResultSetMetadata implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ResultSetMetadata";
  readonly columnMetadata?: Array<ColumnMetadata>;
  readonly columnCount?: number;
  constructor(args: {
    columnMetadata?: Array<ColumnMetadata>;
    columnCount?: number;
  }) {
    this.columnMetadata = args.columnMetadata;
    this.columnCount = args.columnCount;
  }
}

export class ResultSetOptions implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#ResultSetOptions";
  readonly decimalReturnType?: DecimalReturnType | string;
  constructor(args: { decimalReturnType?: DecimalReturnType | string }) {
    this.decimalReturnType = args.decimalReturnType;
  }
}

export class RollbackTransactionRequest implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#RollbackTransactionRequest";
  readonly secretArn: string | undefined;
  readonly resourceArn: string | undefined;
  readonly transactionId: string | undefined;
  constructor(args: {
    secretArn: string | undefined;
    resourceArn: string | undefined;
    transactionId: string | undefined;
  }) {
    this.secretArn = args.secretArn;
    this.resourceArn = args.resourceArn;
    this.transactionId = args.transactionId;
  }
}

export class RollbackTransactionResponse implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#RollbackTransactionResponse";
  readonly transactionStatus?: string;
  constructor(args: { transactionStatus?: string }) {
    this.transactionStatus = args.transactionStatus;
  }
}

export class ServiceUnavailableError extends $SmithyException {
  constructor(args: { $service: string; message?: string }) {
    super({
      id: "com.amazon.rdsdataservice#ServiceUnavailableError",
      name: "ServiceUnavailableError",
      fault: "server",
      service: args.$service
    });
  }
}

export class SqlParameter implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#SqlParameter";
  readonly name?: string;
  readonly value?: Field;
  constructor(args: { name?: string; value?: Field }) {
    this.name = args.name;
    this.value = args.value;
  }
}

export class SqlStatementResult implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#SqlStatementResult";
  readonly numberOfRecordsUpdated?: number;
  readonly resultFrame?: ResultFrame;
  constructor(args: {
    numberOfRecordsUpdated?: number;
    resultFrame?: ResultFrame;
  }) {
    this.numberOfRecordsUpdated = args.numberOfRecordsUpdated;
    this.resultFrame = args.resultFrame;
  }
}

export class StatementTimeoutException extends $SmithyException {
  readonly message?: string;
  readonly dbConnectionId?: number;
  constructor(args: {
    $service: string;
    message?: string;
    dbConnectionId?: number;
  }) {
    super({
      id: "com.amazon.rdsdataservice#StatementTimeoutException",
      name: "StatementTimeoutException",
      fault: "client",
      service: args.$service
    });
    this.message = args.message;
    this.dbConnectionId = args.dbConnectionId;
  }
}

export class StructValue implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#StructValue";
  readonly attributes?: Array<Value>;
  constructor(args: { attributes?: Array<Value> }) {
    this.attributes = args.attributes;
  }
}

export class UpdateResult implements $SmithyStructure {
  readonly $id = "com.amazon.rdsdataservice#UpdateResult";
  readonly generatedFields?: Array<Field>;
  constructor(args: { generatedFields?: Array<Field> }) {
    this.generatedFields = args.generatedFields;
  }
}

export type Value = TaggedUnion<{
  blobValue?: Uint8Array;
  realValue?: number;
  bigIntValue?: number;
  intValue?: number;
  stringValue?: string;
  arrayValues?: Array<Value>;
  doubleValue?: number;
  isNull?: boolean;
  structValue?: StructValue;
  bitValue?: boolean;
}>;

namespace Value {
  export interface ValueVisitor<T> {
    blobValue: (value: Uint8Array) => T;
    realValue: (value: number) => T;
    bigIntValue: (value: number) => T;
    intValue: (value: number) => T;
    stringValue: (value: string) => T;
    arrayValues: (value: Array<Value>) => T;
    doubleValue: (value: number) => T;
    isNull: (value: boolean) => T;
    structValue: (value: StructValue) => T;
    bitValue: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export function visit<T>(value: Value, visitor: ValueVisitor<T>): T {
    if (value.blobValue !== undefined)
      return visitor.blobValue(value.blobValue);
    if (value.realValue !== undefined)
      return visitor.realValue(value.realValue);
    if (value.bigIntValue !== undefined)
      return visitor.bigIntValue(value.bigIntValue);
    if (value.intValue !== undefined) return visitor.intValue(value.intValue);
    if (value.stringValue !== undefined)
      return visitor.stringValue(value.stringValue);
    if (value.arrayValues !== undefined)
      return visitor.arrayValues(value.arrayValues);
    if (value.doubleValue !== undefined)
      return visitor.doubleValue(value.doubleValue);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.structValue !== undefined)
      return visitor.structValue(value.structValue);
    if (value.bitValue !== undefined) return visitor.bitValue(value.bitValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}