import {
  ActiveSessionsExceededException,
  ActiveSessionsExceededException$,
  ActiveStatementsExceededException,
  ActiveStatementsExceededException$,
  ActiveWaitingRequestsExceededException,
  ActiveWaitingRequestsExceededException$,
  BatchExecuteStatement$,
  BatchExecuteStatementCommand,
  BatchExecuteStatementException,
  BatchExecuteStatementException$,
  BatchExecuteStatementInput$,
  BatchExecuteStatementOutput$,
  CancelStatement$,
  CancelStatementCommand,
  CancelStatementRequest$,
  CancelStatementResponse$,
  ColumnMetadata$,
  DatabaseConnectionException,
  DatabaseConnectionException$,
  DescribeStatement$,
  DescribeStatementCommand,
  DescribeStatementRequest$,
  DescribeStatementResponse$,
  DescribeTable$,
  DescribeTableCommand,
  DescribeTableRequest$,
  DescribeTableResponse$,
  ExecuteStatement$,
  ExecuteStatementCommand,
  ExecuteStatementException,
  ExecuteStatementException$,
  ExecuteStatementInput$,
  ExecuteStatementOutput$,
  ExecutionMode,
  Field$,
  GetStatementResult$,
  GetStatementResultCommand,
  GetStatementResultRequest$,
  GetStatementResultResponse$,
  GetStatementResultV2$,
  GetStatementResultV2Command,
  GetStatementResultV2Request$,
  GetStatementResultV2Response$,
  InternalServerException,
  InternalServerException$,
  ListDatabases$,
  ListDatabasesCommand,
  ListDatabasesRequest$,
  ListDatabasesResponse$,
  ListSchemas$,
  ListSchemasCommand,
  ListSchemasRequest$,
  ListSchemasResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListStatements$,
  ListStatementsCommand,
  ListStatementsRequest$,
  ListStatementsResponse$,
  ListTables$,
  ListTablesCommand,
  ListTablesRequest$,
  ListTablesResponse$,
  paginateDescribeTable,
  paginateGetStatementResult,
  paginateGetStatementResultV2,
  paginateListDatabases,
  paginateListSchemas,
  paginateListSessions,
  paginateListStatements,
  paginateListTables,
  QueryRecords$,
  QueryTimeoutException,
  QueryTimeoutException$,
  RedshiftData,
  RedshiftDataClient,
  RedshiftDataServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultFormatString,
  SessionData$,
  SessionStatusString,
  SqlParameter$,
  StatementData$,
  StatementStatusString,
  StatusString,
  SubStatementData$,
  TableMember$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RedshiftDataClient === "function");
assert(typeof RedshiftData === "function");
// commands
assert(typeof BatchExecuteStatementCommand === "function");
assert(typeof BatchExecuteStatement$ === "object");
assert(typeof CancelStatementCommand === "function");
assert(typeof CancelStatement$ === "object");
assert(typeof DescribeStatementCommand === "function");
assert(typeof DescribeStatement$ === "object");
assert(typeof DescribeTableCommand === "function");
assert(typeof DescribeTable$ === "object");
assert(typeof ExecuteStatementCommand === "function");
assert(typeof ExecuteStatement$ === "object");
assert(typeof GetStatementResultCommand === "function");
assert(typeof GetStatementResult$ === "object");
assert(typeof GetStatementResultV2Command === "function");
assert(typeof GetStatementResultV2$ === "object");
assert(typeof ListDatabasesCommand === "function");
assert(typeof ListDatabases$ === "object");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemas$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListStatementsCommand === "function");
assert(typeof ListStatements$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
// structural schemas
assert(typeof BatchExecuteStatementInput$ === "object");
assert(typeof BatchExecuteStatementOutput$ === "object");
assert(typeof CancelStatementRequest$ === "object");
assert(typeof CancelStatementResponse$ === "object");
assert(typeof ColumnMetadata$ === "object");
assert(typeof DescribeStatementRequest$ === "object");
assert(typeof DescribeStatementResponse$ === "object");
assert(typeof DescribeTableRequest$ === "object");
assert(typeof DescribeTableResponse$ === "object");
assert(typeof ExecuteStatementInput$ === "object");
assert(typeof ExecuteStatementOutput$ === "object");
assert(typeof Field$ === "object");
assert(typeof GetStatementResultRequest$ === "object");
assert(typeof GetStatementResultResponse$ === "object");
assert(typeof GetStatementResultV2Request$ === "object");
assert(typeof GetStatementResultV2Response$ === "object");
assert(typeof ListDatabasesRequest$ === "object");
assert(typeof ListDatabasesResponse$ === "object");
assert(typeof ListSchemasRequest$ === "object");
assert(typeof ListSchemasResponse$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListStatementsRequest$ === "object");
assert(typeof ListStatementsResponse$ === "object");
assert(typeof ListTablesRequest$ === "object");
assert(typeof ListTablesResponse$ === "object");
assert(typeof QueryRecords$ === "object");
assert(typeof SessionData$ === "object");
assert(typeof SqlParameter$ === "object");
assert(typeof StatementData$ === "object");
assert(typeof SubStatementData$ === "object");
assert(typeof TableMember$ === "object");
// enums
assert(typeof ExecutionMode === "object");
assert(typeof ResultFormatString === "object");
assert(typeof SessionStatusString === "object");
assert(typeof StatementStatusString === "object");
assert(typeof StatusString === "object");
// errors
assert(ActiveSessionsExceededException.prototype instanceof RedshiftDataServiceException);
assert(typeof ActiveSessionsExceededException$ === "object");
assert(ActiveStatementsExceededException.prototype instanceof RedshiftDataServiceException);
assert(typeof ActiveStatementsExceededException$ === "object");
assert(ActiveWaitingRequestsExceededException.prototype instanceof RedshiftDataServiceException);
assert(typeof ActiveWaitingRequestsExceededException$ === "object");
assert(BatchExecuteStatementException.prototype instanceof RedshiftDataServiceException);
assert(typeof BatchExecuteStatementException$ === "object");
assert(DatabaseConnectionException.prototype instanceof RedshiftDataServiceException);
assert(typeof DatabaseConnectionException$ === "object");
assert(ExecuteStatementException.prototype instanceof RedshiftDataServiceException);
assert(typeof ExecuteStatementException$ === "object");
assert(InternalServerException.prototype instanceof RedshiftDataServiceException);
assert(typeof InternalServerException$ === "object");
assert(QueryTimeoutException.prototype instanceof RedshiftDataServiceException);
assert(typeof QueryTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RedshiftDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof RedshiftDataServiceException);
assert(typeof ValidationException$ === "object");
assert(RedshiftDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeTable === "function");
assert(typeof paginateGetStatementResult === "function");
assert(typeof paginateGetStatementResultV2 === "function");
assert(typeof paginateListDatabases === "function");
assert(typeof paginateListSchemas === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListStatements === "function");
assert(typeof paginateListTables === "function");
console.log(`RedshiftData index test passed.`);
