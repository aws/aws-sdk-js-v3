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
    if ("stringValues" in value)
      return visitor.stringValues(value.stringValues);
    if ("booleanValues" in value)
      return visitor.booleanValues(value.booleanValues);
    if ("arrayValues" in value) return visitor.arrayValues(value.arrayValues);
    if ("blobValues" in value) return visitor.blobValues(value.blobValues);
    if ("doubleValues" in value)
      return visitor.doubleValues(value.doubleValues);
    if ("longValues" in value) return visitor.longValues(value.longValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export class BadRequestException extends $SmithyException {
  readonly message?: string;
  constructor(
    serviceId: string,
    args: {
      message?: string;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "BadRequestException",
      fault: "client",
      service: serviceId
    });
    this.message = args.message;
  }
}

export class BatchExecuteStatementRequest implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "BatchExecuteStatementRequest";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "BatchExecuteStatementResponse";
  readonly updateResults?: Array<UpdateResult>;
  constructor(args: { updateResults?: Array<UpdateResult> }) {
    this.updateResults = args.updateResults;
  }
}

export class BeginTransactionRequest implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "BeginTransactionRequest";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "BeginTransactionResponse";
  readonly transactionId?: string;
  constructor(args: { transactionId?: string }) {
    this.transactionId = args.transactionId;
  }
}

export class ColumnMetadata implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ColumnMetadata";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "CommitTransactionRequest";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "CommitTransactionResponse";
  readonly transactionStatus?: string;
  constructor(args: { transactionStatus?: string }) {
    this.transactionStatus = args.transactionStatus;
  }
}

export class ExecuteSqlRequest implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ExecuteSqlRequest";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ExecuteSqlResponse";
  readonly sqlStatementResults?: Array<SqlStatementResult>;
  constructor(args: { sqlStatementResults?: Array<SqlStatementResult> }) {
    this.sqlStatementResults = args.sqlStatementResults;
  }
}

export class ExecuteStatementRequest implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ExecuteStatementRequest";
  readonly continueAfterTimeout?: boolean;
  readonly includeResultMetadata?: boolean;
  readonly schema?: string;
  readonly secretArn: string | undefined;
  readonly parameters?: Array<SqlParameter>;
  readonly transactionId?: string;
  readonly sql: string | undefined;
  readonly resourceArn: string | undefined;
  readonly database?: string;
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
  }
}

export class ExecuteStatementResponse implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ExecuteStatementResponse";
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
    if ("blobValue" in value) return visitor.blobValue(value.blobValue);
    if ("booleanValue" in value)
      return visitor.booleanValue(value.booleanValue);
    if ("arrayValue" in value) return visitor.arrayValue(value.arrayValue);
    if ("structValue" in value) return visitor.structValue(value.structValue);
    if ("longValue" in value) return visitor.longValue(value.longValue);
    if ("isNull" in value) return visitor.isNull(value.isNull);
    if ("doubleValue" in value) return visitor.doubleValue(value.doubleValue);
    if ("stringValue" in value) return visitor.stringValue(value.stringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export class ForbiddenException extends $SmithyException {
  readonly message?: string;
  constructor(
    serviceId: string,
    args: {
      message?: string;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "ForbiddenException",
      fault: "client",
      service: serviceId
    });
    this.message = args.message;
  }
}

export class InternalServerErrorException extends $SmithyException {
  constructor(
    serviceId: string,
    args: {
      message?: string;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "InternalServerErrorException",
      fault: "server",
      service: serviceId
    });
  }
}

export class NotFoundException extends $SmithyException {
  readonly message?: string;
  constructor(
    serviceId: string,
    args: {
      message?: string;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "NotFoundException",
      fault: "client",
      service: serviceId
    });
    this.message = args.message;
  }
}

export class _Record implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "Record";
  readonly values?: Array<Value>;
  constructor(args: { values?: Array<Value> }) {
    this.values = args.values;
  }
}

export class ResultFrame implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ResultFrame";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "ResultSetMetadata";
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

export class RollbackTransactionRequest implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "RollbackTransactionRequest";
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
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "RollbackTransactionResponse";
  readonly transactionStatus?: string;
  constructor(args: { transactionStatus?: string }) {
    this.transactionStatus = args.transactionStatus;
  }
}

export class ServiceUnavailableError extends $SmithyException {
  constructor(
    serviceId: string,
    args: {
      message?: string;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "ServiceUnavailableError",
      fault: "server",
      service: serviceId
    });
  }
}

export class SqlParameter implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "SqlParameter";
  readonly name?: string;
  readonly value?: Field;
  constructor(args: { name?: string; value?: Field }) {
    this.name = args.name;
    this.value = args.value;
  }
}

export class SqlStatementResult implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "SqlStatementResult";
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
  constructor(
    serviceId: string,
    args: {
      message?: string;
      dbConnectionId?: number;
    }
  ) {
    super({
      namespace: "com.amazon.rdsdataservice",
      name: "StatementTimeoutException",
      fault: "client",
      service: serviceId
    });
    this.message = args.message;
    this.dbConnectionId = args.dbConnectionId;
  }
}

export class StructValue implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "StructValue";
  readonly attributes?: Array<Value>;
  constructor(args: { attributes?: Array<Value> }) {
    this.attributes = args.attributes;
  }
}

export class UpdateResult implements $SmithyStructure {
  readonly $namespace = "com.amazon.rdsdataservice";
  readonly $name = "UpdateResult";
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
    if ("blobValue" in value) return visitor.blobValue(value.blobValue);
    if ("realValue" in value) return visitor.realValue(value.realValue);
    if ("bigIntValue" in value) return visitor.bigIntValue(value.bigIntValue);
    if ("intValue" in value) return visitor.intValue(value.intValue);
    if ("stringValue" in value) return visitor.stringValue(value.stringValue);
    if ("arrayValues" in value) return visitor.arrayValues(value.arrayValues);
    if ("doubleValue" in value) return visitor.doubleValue(value.doubleValue);
    if ("isNull" in value) return visitor.isNull(value.isNull);
    if ("structValue" in value) return visitor.structValue(value.structValue);
    if ("bitValue" in value) return visitor.bitValue(value.bitValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}
