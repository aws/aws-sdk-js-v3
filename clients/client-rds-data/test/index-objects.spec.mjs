import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  ArrayValue$,
  BadRequestException,
  BadRequestException$,
  BatchExecuteStatement$,
  BatchExecuteStatementCommand,
  BatchExecuteStatementRequest$,
  BatchExecuteStatementResponse$,
  BeginTransaction$,
  BeginTransactionCommand,
  BeginTransactionRequest$,
  BeginTransactionResponse$,
  ColumnMetadata$,
  CommitTransaction$,
  CommitTransactionCommand,
  CommitTransactionRequest$,
  CommitTransactionResponse$,
  DatabaseErrorException,
  DatabaseErrorException$,
  DatabaseNotFoundException,
  DatabaseNotFoundException$,
  DatabaseResumingException,
  DatabaseResumingException$,
  DatabaseUnavailableException,
  DatabaseUnavailableException$,
  DecimalReturnType,
  ExecuteSql$,
  ExecuteSqlCommand,
  ExecuteSqlRequest$,
  ExecuteSqlResponse$,
  ExecuteStatement$,
  ExecuteStatementCommand,
  ExecuteStatementRequest$,
  ExecuteStatementResponse$,
  Field$,
  ForbiddenException,
  ForbiddenException$,
  HttpEndpointNotEnabledException,
  HttpEndpointNotEnabledException$,
  InternalServerErrorException,
  InternalServerErrorException$,
  InvalidResourceStateException,
  InvalidResourceStateException$,
  InvalidSecretException,
  InvalidSecretException$,
  LongReturnType,
  NotFoundException,
  NotFoundException$,
  RDSData,
  RDSDataClient,
  RDSDataServiceException,
  RecordsFormatType,
  ResultFrame$,
  ResultSetMetadata$,
  ResultSetOptions$,
  RollbackTransaction$,
  RollbackTransactionCommand,
  RollbackTransactionRequest$,
  RollbackTransactionResponse$,
  SecretsErrorException,
  SecretsErrorException$,
  ServiceUnavailableError,
  ServiceUnavailableError$,
  SqlParameter$,
  SqlStatementResult$,
  StatementTimeoutException,
  StatementTimeoutException$,
  StructValue$,
  TransactionNotFoundException,
  TransactionNotFoundException$,
  TypeHint,
  UnsupportedResultException,
  UnsupportedResultException$,
  UpdateResult$,
  Value$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RDSDataClient === "function");
assert(typeof RDSData === "function");
// commands
assert(typeof BatchExecuteStatementCommand === "function");
assert(typeof BatchExecuteStatement$ === "object");
assert(typeof BeginTransactionCommand === "function");
assert(typeof BeginTransaction$ === "object");
assert(typeof CommitTransactionCommand === "function");
assert(typeof CommitTransaction$ === "object");
assert(typeof ExecuteSqlCommand === "function");
assert(typeof ExecuteSql$ === "object");
assert(typeof ExecuteStatementCommand === "function");
assert(typeof ExecuteStatement$ === "object");
assert(typeof RollbackTransactionCommand === "function");
assert(typeof RollbackTransaction$ === "object");
// structural schemas
assert(typeof ArrayValue$ === "object");
assert(typeof BatchExecuteStatementRequest$ === "object");
assert(typeof BatchExecuteStatementResponse$ === "object");
assert(typeof BeginTransactionRequest$ === "object");
assert(typeof BeginTransactionResponse$ === "object");
assert(typeof ColumnMetadata$ === "object");
assert(typeof CommitTransactionRequest$ === "object");
assert(typeof CommitTransactionResponse$ === "object");
assert(typeof ExecuteSqlRequest$ === "object");
assert(typeof ExecuteSqlResponse$ === "object");
assert(typeof ExecuteStatementRequest$ === "object");
assert(typeof ExecuteStatementResponse$ === "object");
assert(typeof Field$ === "object");
assert(typeof _Record$ === "object");
assert(typeof ResultFrame$ === "object");
assert(typeof ResultSetMetadata$ === "object");
assert(typeof ResultSetOptions$ === "object");
assert(typeof RollbackTransactionRequest$ === "object");
assert(typeof RollbackTransactionResponse$ === "object");
assert(typeof SqlParameter$ === "object");
assert(typeof SqlStatementResult$ === "object");
assert(typeof StructValue$ === "object");
assert(typeof UpdateResult$ === "object");
assert(typeof Value$ === "object");
// enums
assert(typeof DecimalReturnType === "object");
assert(typeof LongReturnType === "object");
assert(typeof RecordsFormatType === "object");
assert(typeof TypeHint === "object");
// errors
assert(AccessDeniedException.prototype instanceof RDSDataServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof RDSDataServiceException);
assert(typeof BadRequestException$ === "object");
assert(DatabaseErrorException.prototype instanceof RDSDataServiceException);
assert(typeof DatabaseErrorException$ === "object");
assert(DatabaseNotFoundException.prototype instanceof RDSDataServiceException);
assert(typeof DatabaseNotFoundException$ === "object");
assert(DatabaseResumingException.prototype instanceof RDSDataServiceException);
assert(typeof DatabaseResumingException$ === "object");
assert(DatabaseUnavailableException.prototype instanceof RDSDataServiceException);
assert(typeof DatabaseUnavailableException$ === "object");
assert(ForbiddenException.prototype instanceof RDSDataServiceException);
assert(typeof ForbiddenException$ === "object");
assert(HttpEndpointNotEnabledException.prototype instanceof RDSDataServiceException);
assert(typeof HttpEndpointNotEnabledException$ === "object");
assert(InternalServerErrorException.prototype instanceof RDSDataServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(InvalidResourceStateException.prototype instanceof RDSDataServiceException);
assert(typeof InvalidResourceStateException$ === "object");
assert(InvalidSecretException.prototype instanceof RDSDataServiceException);
assert(typeof InvalidSecretException$ === "object");
assert(NotFoundException.prototype instanceof RDSDataServiceException);
assert(typeof NotFoundException$ === "object");
assert(SecretsErrorException.prototype instanceof RDSDataServiceException);
assert(typeof SecretsErrorException$ === "object");
assert(ServiceUnavailableError.prototype instanceof RDSDataServiceException);
assert(typeof ServiceUnavailableError$ === "object");
assert(StatementTimeoutException.prototype instanceof RDSDataServiceException);
assert(typeof StatementTimeoutException$ === "object");
assert(TransactionNotFoundException.prototype instanceof RDSDataServiceException);
assert(typeof TransactionNotFoundException$ === "object");
assert(UnsupportedResultException.prototype instanceof RDSDataServiceException);
assert(typeof UnsupportedResultException$ === "object");
assert(RDSDataServiceException.prototype instanceof Error);
console.log(`RDSData index test passed.`);
