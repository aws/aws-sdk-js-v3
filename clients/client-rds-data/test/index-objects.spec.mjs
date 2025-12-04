import {
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  DecimalReturnType,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  LongReturnType,
  RDSData,
  RDSDataClient,
  RDSDataServiceException,
  RecordsFormatType,
  RollbackTransactionCommand,
  TypeHint,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RDSDataClient === "function")
assert(typeof RDSData === "function")
// commands
assert(typeof BatchExecuteStatementCommand === "function")
assert(typeof BeginTransactionCommand === "function")
assert(typeof CommitTransactionCommand === "function")
assert(typeof ExecuteSqlCommand === "function")
assert(typeof ExecuteStatementCommand === "function")
assert(typeof RollbackTransactionCommand === "function")
// enums
assert(typeof DecimalReturnType === "object");
assert(typeof LongReturnType === "object");
assert(typeof RecordsFormatType === "object");
assert(typeof TypeHint === "object");
// errors
assert(RDSDataServiceException.prototype instanceof Error)
console.log(`RDSData index test passed.`);
