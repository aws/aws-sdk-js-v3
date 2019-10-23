import * as _smithy from "../lib/smithy";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export type ArrayValue =
  | ArrayValue.ArrayValuesMember
  | ArrayValue.BlobValuesMember
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
  export interface StringValuesMember extends $Base {
    stringValues: Array<string>;
    booleanValues?: never;
    arrayValues?: never;
    blobValues?: never;
    doubleValues?: never;
    longValues?: never;
    $unknown?: never;
  }
  export interface BooleanValuesMember extends $Base {
    stringValues?: never;
    booleanValues: Array<boolean>;
    arrayValues?: never;
    blobValues?: never;
    doubleValues?: never;
    longValues?: never;
    $unknown?: never;
  }
  export interface ArrayValuesMember extends $Base {
    stringValues?: never;
    booleanValues?: never;
    arrayValues: Array<ArrayValue>;
    blobValues?: never;
    doubleValues?: never;
    longValues?: never;
    $unknown?: never;
  }
  export interface BlobValuesMember extends $Base {
    stringValues?: never;
    booleanValues?: never;
    arrayValues?: never;
    blobValues: Array<Uint8Array>;
    doubleValues?: never;
    longValues?: never;
    $unknown?: never;
  }
  export interface DoubleValuesMember extends $Base {
    stringValues?: never;
    booleanValues?: never;
    arrayValues?: never;
    blobValues?: never;
    doubleValues: Array<number>;
    longValues?: never;
    $unknown?: never;
  }
  export interface LongValuesMember extends $Base {
    stringValues?: never;
    booleanValues?: never;
    arrayValues?: never;
    blobValues?: never;
    doubleValues?: never;
    longValues: Array<number>;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    stringValues?: never;
    booleanValues?: never;
    arrayValues?: never;
    blobValues?: never;
    doubleValues?: never;
    longValues?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    stringValues: (value: Array<string>) => T;
    booleanValues: (value: Array<boolean>) => T;
    arrayValues: (value: Array<ArrayValue>) => T;
    blobValues: (value: Array<Uint8Array>) => T;
    doubleValues: (value: Array<number>) => T;
    longValues: (value: Array<number>) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: ArrayValue, visitor: Visitor<T>): T {
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

export interface BadRequestException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#BadRequestException";
  $name: "BadRequestException";
  $fault: "client";
  message: string | undefined;
}

export namespace BadRequestException {
  export const ID = "com.amazon.rdsdataservice#BadRequestException";
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, ID);
  }
}

export interface BatchExecuteStatementRequest {
  __type?: "com.amazon.rdsdataservice#BatchExecuteStatementRequest";
  transactionId?: string;
  resourceArn: string | undefined;
  schema?: string;
  database?: string;
  parameterSets?: Array<Array<SqlParameter>>;
  sql: string | undefined;
  secretArn: string | undefined;
}

export namespace BatchExecuteStatementRequest {
  export const ID = "com.amazon.rdsdataservice#BatchExecuteStatementRequest";
  export function isa(o: any): o is BatchExecuteStatementRequest {
    return _smithy.isa(o, ID);
  }
}

export interface BatchExecuteStatementResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#BatchExecuteStatementResponse";
  updateResults?: Array<UpdateResult>;
}

export namespace BatchExecuteStatementResponse {
  export const ID = "com.amazon.rdsdataservice#BatchExecuteStatementResponse";
  export function isa(o: any): o is BatchExecuteStatementResponse {
    return _smithy.isa(o, ID);
  }
}

export interface BeginTransactionRequest {
  __type?: "com.amazon.rdsdataservice#BeginTransactionRequest";
  resourceArn: string | undefined;
  database?: string;
  schema?: string;
  secretArn: string | undefined;
}

export namespace BeginTransactionRequest {
  export const ID = "com.amazon.rdsdataservice#BeginTransactionRequest";
  export function isa(o: any): o is BeginTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface BeginTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#BeginTransactionResponse";
  transactionId?: string;
}

export namespace BeginTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#BeginTransactionResponse";
  export function isa(o: any): o is BeginTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

export interface ColumnMetadata {
  __type?: "com.amazon.rdsdataservice#ColumnMetadata";
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
}

export namespace ColumnMetadata {
  export const ID = "com.amazon.rdsdataservice#ColumnMetadata";
  export function isa(o: any): o is ColumnMetadata {
    return _smithy.isa(o, ID);
  }
}

export interface CommitTransactionRequest {
  __type?: "com.amazon.rdsdataservice#CommitTransactionRequest";
  secretArn: string | undefined;
  resourceArn: string | undefined;
  transactionId: string | undefined;
}

export namespace CommitTransactionRequest {
  export const ID = "com.amazon.rdsdataservice#CommitTransactionRequest";
  export function isa(o: any): o is CommitTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface CommitTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#CommitTransactionResponse";
  transactionStatus?: string;
}

export namespace CommitTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#CommitTransactionResponse";
  export function isa(o: any): o is CommitTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

export enum DecimalReturnType {
  STRING = "STRING",
  DOUBLE_OR_LONG = "DOUBLE_OR_LONG"
}

export interface ExecuteSqlRequest {
  __type?: "com.amazon.rdsdataservice#ExecuteSqlRequest";
  dbClusterOrInstanceArn: string | undefined;
  schema?: string;
  database?: string;
  awsSecretStoreArn: string | undefined;
  sqlStatements: string | undefined;
}

export namespace ExecuteSqlRequest {
  export const ID = "com.amazon.rdsdataservice#ExecuteSqlRequest";
  export function isa(o: any): o is ExecuteSqlRequest {
    return _smithy.isa(o, ID);
  }
}

export interface ExecuteSqlResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#ExecuteSqlResponse";
  sqlStatementResults?: Array<SqlStatementResult>;
}

export namespace ExecuteSqlResponse {
  export const ID = "com.amazon.rdsdataservice#ExecuteSqlResponse";
  export function isa(o: any): o is ExecuteSqlResponse {
    return _smithy.isa(o, ID);
  }
}

export interface ExecuteStatementRequest {
  __type?: "com.amazon.rdsdataservice#ExecuteStatementRequest";
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
}

export namespace ExecuteStatementRequest {
  export const ID = "com.amazon.rdsdataservice#ExecuteStatementRequest";
  export function isa(o: any): o is ExecuteStatementRequest {
    return _smithy.isa(o, ID);
  }
}

export interface ExecuteStatementResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#ExecuteStatementResponse";
  numberOfRecordsUpdated?: number;
  records?: Array<Array<Field>>;
  columnMetadata?: Array<ColumnMetadata>;
  generatedFields?: Array<Field>;
}

export namespace ExecuteStatementResponse {
  export const ID = "com.amazon.rdsdataservice#ExecuteStatementResponse";
  export function isa(o: any): o is ExecuteStatementResponse {
    return _smithy.isa(o, ID);
  }
}

export type Field =
  | Field.ArrayValueMember
  | Field.BlobValueMember
  | Field.BooleanValueMember
  | Field.DoubleValueMember
  | Field.IsNullMember
  | Field.LongValueMember
  | Field.StringValueMember
  | Field.StructValueMember
  | Field.$UnknownMember;

export namespace Field {
  export const ID = "com.amazon.rdsdataservice#Field";
  interface $Base {
    __type?: "com.amazon.rdsdataservice#Field";
  }
  export interface BlobValueMember extends $Base {
    blobValue: Uint8Array;
    booleanValue?: never;
    arrayValue?: never;
    structValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface BooleanValueMember extends $Base {
    blobValue?: never;
    booleanValue: boolean;
    arrayValue?: never;
    structValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface ArrayValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue: ArrayValue;
    structValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface StructValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    structValue: { [key: string]: Field };
    longValue?: never;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface LongValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    structValue?: never;
    longValue: number;
    isNull?: never;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface IsNullMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    structValue?: never;
    longValue?: never;
    isNull: boolean;
    doubleValue?: never;
    stringValue?: never;
    $unknown?: never;
  }
  export interface DoubleValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    structValue?: never;
    longValue?: never;
    isNull?: never;
    doubleValue: number;
    stringValue?: never;
    $unknown?: never;
  }
  export interface StringValueMember extends $Base {
    blobValue?: never;
    booleanValue?: never;
    arrayValue?: never;
    structValue?: never;
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
    structValue?: never;
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
    structValue: (value: { [key: string]: Field }) => T;
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

export interface ForbiddenException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#ForbiddenException";
  $name: "ForbiddenException";
  $fault: "client";
  message: string | undefined;
}

export namespace ForbiddenException {
  export const ID = "com.amazon.rdsdataservice#ForbiddenException";
  export function isa(o: any): o is ForbiddenException {
    return _smithy.isa(o, ID);
  }
}

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

export interface NotFoundException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#NotFoundException";
  $name: "NotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace NotFoundException {
  export const ID = "com.amazon.rdsdataservice#NotFoundException";
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, ID);
  }
}

export interface _Record {
  __type?: "com.amazon.rdsdataservice#Record";
  values?: Array<Value>;
}

export namespace _Record {
  export const ID = "com.amazon.rdsdataservice#Record";
  export function isa(o: any): o is _Record {
    return _smithy.isa(o, ID);
  }
}

export interface ResultFrame {
  __type?: "com.amazon.rdsdataservice#ResultFrame";
  records?: Array<_Record>;
  resultSetMetadata?: ResultSetMetadata;
}

export namespace ResultFrame {
  export const ID = "com.amazon.rdsdataservice#ResultFrame";
  export function isa(o: any): o is ResultFrame {
    return _smithy.isa(o, ID);
  }
}

export interface ResultSetMetadata {
  __type?: "com.amazon.rdsdataservice#ResultSetMetadata";
  columnMetadata?: Array<ColumnMetadata>;
  columnCount?: number;
}

export namespace ResultSetMetadata {
  export const ID = "com.amazon.rdsdataservice#ResultSetMetadata";
  export function isa(o: any): o is ResultSetMetadata {
    return _smithy.isa(o, ID);
  }
}

export interface ResultSetOptions {
  __type?: "com.amazon.rdsdataservice#ResultSetOptions";
  decimalReturnType?: DecimalReturnType | string;
}

export namespace ResultSetOptions {
  export const ID = "com.amazon.rdsdataservice#ResultSetOptions";
  export function isa(o: any): o is ResultSetOptions {
    return _smithy.isa(o, ID);
  }
}

export interface RollbackTransactionRequest {
  __type?: "com.amazon.rdsdataservice#RollbackTransactionRequest";
  secretArn: string | undefined;
  resourceArn: string | undefined;
  transactionId: string | undefined;
}

export namespace RollbackTransactionRequest {
  export const ID = "com.amazon.rdsdataservice#RollbackTransactionRequest";
  export function isa(o: any): o is RollbackTransactionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface RollbackTransactionResponse extends $MetadataBearer {
  __type?: "com.amazon.rdsdataservice#RollbackTransactionResponse";
  transactionStatus?: string;
}

export namespace RollbackTransactionResponse {
  export const ID = "com.amazon.rdsdataservice#RollbackTransactionResponse";
  export function isa(o: any): o is RollbackTransactionResponse {
    return _smithy.isa(o, ID);
  }
}

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

export interface SqlParameter {
  __type?: "com.amazon.rdsdataservice#SqlParameter";
  name?: string;
  value?: Field;
}

export namespace SqlParameter {
  export const ID = "com.amazon.rdsdataservice#SqlParameter";
  export function isa(o: any): o is SqlParameter {
    return _smithy.isa(o, ID);
  }
}

export interface SqlStatementResult {
  __type?: "com.amazon.rdsdataservice#SqlStatementResult";
  numberOfRecordsUpdated?: number;
  resultFrame?: ResultFrame;
}

export namespace SqlStatementResult {
  export const ID = "com.amazon.rdsdataservice#SqlStatementResult";
  export function isa(o: any): o is SqlStatementResult {
    return _smithy.isa(o, ID);
  }
}

export interface StatementTimeoutException extends _smithy.SmithyException {
  __type: "com.amazon.rdsdataservice#StatementTimeoutException";
  $name: "StatementTimeoutException";
  $fault: "client";
  message: string | undefined;
  dbConnectionId?: number;
}

export namespace StatementTimeoutException {
  export const ID = "com.amazon.rdsdataservice#StatementTimeoutException";
  export function isa(o: any): o is StatementTimeoutException {
    return _smithy.isa(o, ID);
  }
}

export interface StructValue {
  __type?: "com.amazon.rdsdataservice#StructValue";
  attributes?: Array<Value>;
}

export namespace StructValue {
  export const ID = "com.amazon.rdsdataservice#StructValue";
  export function isa(o: any): o is StructValue {
    return _smithy.isa(o, ID);
  }
}

export interface UpdateResult {
  __type?: "com.amazon.rdsdataservice#UpdateResult";
  generatedFields?: Array<Field>;
}

export namespace UpdateResult {
  export const ID = "com.amazon.rdsdataservice#UpdateResult";
  export function isa(o: any): o is UpdateResult {
    return _smithy.isa(o, ID);
  }
}

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
  export interface BlobValueMember extends $Base {
    blobValue: Uint8Array;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface RealValueMember extends $Base {
    blobValue?: never;
    realValue: number;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface BigIntValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue: number;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface IntValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue: number;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface StringValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue: string;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface ArrayValuesMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues: Array<Value>;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface DoubleValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue: number;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface IsNullMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull: boolean;
    structValue?: never;
    bitValue?: never;
    $unknown?: never;
  }
  export interface StructValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue: StructValue;
    bitValue?: never;
    $unknown?: never;
  }
  export interface BitValueMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue: boolean;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    blobValue?: never;
    realValue?: never;
    bigIntValue?: never;
    intValue?: never;
    stringValue?: never;
    arrayValues?: never;
    doubleValue?: never;
    isNull?: never;
    structValue?: never;
    bitValue?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
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
  export function visit<T>(value: Value, visitor: Visitor<T>): T {
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
