import {
  AccessDeniedException,
  BadRequestException,
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  DatabaseErrorException,
  DatabaseNotFoundException,
  DatabaseResumingException,
  DatabaseUnavailableException,
  DecimalReturnType,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  ForbiddenException,
  HttpEndpointNotEnabledException,
  InternalServerErrorException,
  InvalidResourceStateException,
  InvalidSecretException,
  LongReturnType,
  NotFoundException,
  RDSData,
  RDSDataClient,
  RDSDataServiceException,
  RecordsFormatType,
  RollbackTransactionCommand,
  SecretsErrorException,
  ServiceUnavailableError,
  StatementTimeoutException,
  TransactionNotFoundException,
  TypeHint,
  UnsupportedResultException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RDSDataClient === "function");
assert(typeof RDSData === "function");
// commands
assert(typeof BatchExecuteStatementCommand === "function");
assert(typeof BeginTransactionCommand === "function");
assert(typeof CommitTransactionCommand === "function");
assert(typeof ExecuteSqlCommand === "function");
assert(typeof ExecuteStatementCommand === "function");
assert(typeof RollbackTransactionCommand === "function");
// enums
assert(typeof DecimalReturnType === "object");
assert(typeof LongReturnType === "object");
assert(typeof RecordsFormatType === "object");
assert(typeof TypeHint === "object");
// errors
assert(AccessDeniedException.prototype instanceof RDSDataServiceException);
assert(BadRequestException.prototype instanceof RDSDataServiceException);
assert(DatabaseErrorException.prototype instanceof RDSDataServiceException);
assert(DatabaseNotFoundException.prototype instanceof RDSDataServiceException);
assert(DatabaseResumingException.prototype instanceof RDSDataServiceException);
assert(DatabaseUnavailableException.prototype instanceof RDSDataServiceException);
assert(ForbiddenException.prototype instanceof RDSDataServiceException);
assert(HttpEndpointNotEnabledException.prototype instanceof RDSDataServiceException);
assert(InternalServerErrorException.prototype instanceof RDSDataServiceException);
assert(InvalidResourceStateException.prototype instanceof RDSDataServiceException);
assert(InvalidSecretException.prototype instanceof RDSDataServiceException);
assert(NotFoundException.prototype instanceof RDSDataServiceException);
assert(SecretsErrorException.prototype instanceof RDSDataServiceException);
assert(ServiceUnavailableError.prototype instanceof RDSDataServiceException);
assert(StatementTimeoutException.prototype instanceof RDSDataServiceException);
assert(TransactionNotFoundException.prototype instanceof RDSDataServiceException);
assert(UnsupportedResultException.prototype instanceof RDSDataServiceException);
assert(RDSDataServiceException.prototype instanceof Error);
console.log(`RDSData index test passed.`);
