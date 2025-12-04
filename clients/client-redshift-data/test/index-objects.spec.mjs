import {
  BatchExecuteStatementCommand,
  CancelStatementCommand,
  DescribeStatementCommand,
  DescribeTableCommand,
  ExecuteStatementCommand,
  GetStatementResultCommand,
  GetStatementResultV2Command,
  ListDatabasesCommand,
  ListSchemasCommand,
  ListStatementsCommand,
  ListTablesCommand,
  RedshiftData,
  RedshiftDataClient,
  RedshiftDataServiceException,
  ResultFormatString,
  StatementStatusString,
  StatusString,
  paginateDescribeTable,
  paginateGetStatementResult,
  paginateGetStatementResultV2,
  paginateListDatabases,
  paginateListSchemas,
  paginateListStatements,
  paginateListTables,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RedshiftDataClient === "function")
assert(typeof RedshiftData === "function")
// commands
assert(typeof BatchExecuteStatementCommand === "function")
assert(typeof CancelStatementCommand === "function")
assert(typeof DescribeStatementCommand === "function")
assert(typeof DescribeTableCommand === "function")
assert(typeof ExecuteStatementCommand === "function")
assert(typeof GetStatementResultCommand === "function")
assert(typeof GetStatementResultV2Command === "function")
assert(typeof ListDatabasesCommand === "function")
assert(typeof ListSchemasCommand === "function")
assert(typeof ListStatementsCommand === "function")
assert(typeof ListTablesCommand === "function")
// enums
assert(typeof ResultFormatString === "object");
assert(typeof StatementStatusString === "object");
assert(typeof StatusString === "object");
// errors
assert(RedshiftDataServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeTable === "function")
assert(typeof paginateGetStatementResult === "function")
assert(typeof paginateGetStatementResultV2 === "function")
assert(typeof paginateListDatabases === "function")
assert(typeof paginateListSchemas === "function")
assert(typeof paginateListStatements === "function")
assert(typeof paginateListTables === "function")
console.log(`RedshiftData index test passed.`);
