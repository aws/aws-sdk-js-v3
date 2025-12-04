import {
  Athena,
  AthenaClient,
  AthenaServiceException,
  AuthenticationType,
  BatchGetNamedQueryCommand,
  BatchGetPreparedStatementCommand,
  BatchGetQueryExecutionCommand,
  CalculationExecutionState,
  CancelCapacityReservationCommand,
  CapacityAllocationStatus,
  CapacityReservationStatus,
  ColumnNullable,
  ConnectionType,
  CreateCapacityReservationCommand,
  CreateDataCatalogCommand,
  CreateNamedQueryCommand,
  CreateNotebookCommand,
  CreatePreparedStatementCommand,
  CreatePresignedNotebookUrlCommand,
  CreateWorkGroupCommand,
  DataCatalogStatus,
  DataCatalogType,
  DeleteCapacityReservationCommand,
  DeleteDataCatalogCommand,
  DeleteNamedQueryCommand,
  DeleteNotebookCommand,
  DeletePreparedStatementCommand,
  DeleteWorkGroupCommand,
  EncryptionOption,
  ExecutorState,
  ExecutorType,
  ExportNotebookCommand,
  GetCalculationExecutionCodeCommand,
  GetCalculationExecutionCommand,
  GetCalculationExecutionStatusCommand,
  GetCapacityAssignmentConfigurationCommand,
  GetCapacityReservationCommand,
  GetDataCatalogCommand,
  GetDatabaseCommand,
  GetNamedQueryCommand,
  GetNotebookMetadataCommand,
  GetPreparedStatementCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  GetQueryRuntimeStatisticsCommand,
  GetResourceDashboardCommand,
  GetSessionCommand,
  GetSessionEndpointCommand,
  GetSessionStatusCommand,
  GetTableMetadataCommand,
  GetWorkGroupCommand,
  ImportNotebookCommand,
  ListApplicationDPUSizesCommand,
  ListCalculationExecutionsCommand,
  ListCapacityReservationsCommand,
  ListDataCatalogsCommand,
  ListDatabasesCommand,
  ListEngineVersionsCommand,
  ListExecutorsCommand,
  ListNamedQueriesCommand,
  ListNotebookMetadataCommand,
  ListNotebookSessionsCommand,
  ListPreparedStatementsCommand,
  ListQueryExecutionsCommand,
  ListSessionsCommand,
  ListTableMetadataCommand,
  ListTagsForResourceCommand,
  ListWorkGroupsCommand,
  NotebookType,
  PutCapacityAssignmentConfigurationCommand,
  QueryExecutionState,
  QueryResultType,
  S3AclOption,
  SessionState,
  StartCalculationExecutionCommand,
  StartQueryExecutionCommand,
  StartSessionCommand,
  StatementType,
  StopCalculationExecutionCommand,
  StopQueryExecutionCommand,
  TagResourceCommand,
  TerminateSessionCommand,
  UntagResourceCommand,
  UpdateCapacityReservationCommand,
  UpdateDataCatalogCommand,
  UpdateNamedQueryCommand,
  UpdateNotebookCommand,
  UpdateNotebookMetadataCommand,
  UpdatePreparedStatementCommand,
  UpdateWorkGroupCommand,
  WorkGroupState,
  paginateGetQueryResults,
  paginateListApplicationDPUSizes,
  paginateListCalculationExecutions,
  paginateListCapacityReservations,
  paginateListDataCatalogs,
  paginateListDatabases,
  paginateListEngineVersions,
  paginateListExecutors,
  paginateListNamedQueries,
  paginateListPreparedStatements,
  paginateListQueryExecutions,
  paginateListSessions,
  paginateListTableMetadata,
  paginateListTagsForResource,
  paginateListWorkGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AthenaClient === "function")
assert(typeof Athena === "function")
// commands
assert(typeof BatchGetNamedQueryCommand === "function")
assert(typeof BatchGetPreparedStatementCommand === "function")
assert(typeof BatchGetQueryExecutionCommand === "function")
assert(typeof CancelCapacityReservationCommand === "function")
assert(typeof CreateCapacityReservationCommand === "function")
assert(typeof CreateDataCatalogCommand === "function")
assert(typeof CreateNamedQueryCommand === "function")
assert(typeof CreateNotebookCommand === "function")
assert(typeof CreatePreparedStatementCommand === "function")
assert(typeof CreatePresignedNotebookUrlCommand === "function")
assert(typeof CreateWorkGroupCommand === "function")
assert(typeof DeleteCapacityReservationCommand === "function")
assert(typeof DeleteDataCatalogCommand === "function")
assert(typeof DeleteNamedQueryCommand === "function")
assert(typeof DeleteNotebookCommand === "function")
assert(typeof DeletePreparedStatementCommand === "function")
assert(typeof DeleteWorkGroupCommand === "function")
assert(typeof ExportNotebookCommand === "function")
assert(typeof GetCalculationExecutionCommand === "function")
assert(typeof GetCalculationExecutionCodeCommand === "function")
assert(typeof GetCalculationExecutionStatusCommand === "function")
assert(typeof GetCapacityAssignmentConfigurationCommand === "function")
assert(typeof GetCapacityReservationCommand === "function")
assert(typeof GetDatabaseCommand === "function")
assert(typeof GetDataCatalogCommand === "function")
assert(typeof GetNamedQueryCommand === "function")
assert(typeof GetNotebookMetadataCommand === "function")
assert(typeof GetPreparedStatementCommand === "function")
assert(typeof GetQueryExecutionCommand === "function")
assert(typeof GetQueryResultsCommand === "function")
assert(typeof GetQueryRuntimeStatisticsCommand === "function")
assert(typeof GetResourceDashboardCommand === "function")
assert(typeof GetSessionCommand === "function")
assert(typeof GetSessionEndpointCommand === "function")
assert(typeof GetSessionStatusCommand === "function")
assert(typeof GetTableMetadataCommand === "function")
assert(typeof GetWorkGroupCommand === "function")
assert(typeof ImportNotebookCommand === "function")
assert(typeof ListApplicationDPUSizesCommand === "function")
assert(typeof ListCalculationExecutionsCommand === "function")
assert(typeof ListCapacityReservationsCommand === "function")
assert(typeof ListDatabasesCommand === "function")
assert(typeof ListDataCatalogsCommand === "function")
assert(typeof ListEngineVersionsCommand === "function")
assert(typeof ListExecutorsCommand === "function")
assert(typeof ListNamedQueriesCommand === "function")
assert(typeof ListNotebookMetadataCommand === "function")
assert(typeof ListNotebookSessionsCommand === "function")
assert(typeof ListPreparedStatementsCommand === "function")
assert(typeof ListQueryExecutionsCommand === "function")
assert(typeof ListSessionsCommand === "function")
assert(typeof ListTableMetadataCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWorkGroupsCommand === "function")
assert(typeof PutCapacityAssignmentConfigurationCommand === "function")
assert(typeof StartCalculationExecutionCommand === "function")
assert(typeof StartQueryExecutionCommand === "function")
assert(typeof StartSessionCommand === "function")
assert(typeof StopCalculationExecutionCommand === "function")
assert(typeof StopQueryExecutionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TerminateSessionCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCapacityReservationCommand === "function")
assert(typeof UpdateDataCatalogCommand === "function")
assert(typeof UpdateNamedQueryCommand === "function")
assert(typeof UpdateNotebookCommand === "function")
assert(typeof UpdateNotebookMetadataCommand === "function")
assert(typeof UpdatePreparedStatementCommand === "function")
assert(typeof UpdateWorkGroupCommand === "function")
// enums
assert(typeof AuthenticationType === "object");
assert(typeof CalculationExecutionState === "object");
assert(typeof CapacityAllocationStatus === "object");
assert(typeof CapacityReservationStatus === "object");
assert(typeof ColumnNullable === "object");
assert(typeof ConnectionType === "object");
assert(typeof DataCatalogStatus === "object");
assert(typeof DataCatalogType === "object");
assert(typeof EncryptionOption === "object");
assert(typeof ExecutorState === "object");
assert(typeof ExecutorType === "object");
assert(typeof NotebookType === "object");
assert(typeof QueryExecutionState === "object");
assert(typeof QueryResultType === "object");
assert(typeof S3AclOption === "object");
assert(typeof SessionState === "object");
assert(typeof StatementType === "object");
assert(typeof WorkGroupState === "object");
// errors
assert(AthenaServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetQueryResults === "function")
assert(typeof paginateListApplicationDPUSizes === "function")
assert(typeof paginateListCalculationExecutions === "function")
assert(typeof paginateListCapacityReservations === "function")
assert(typeof paginateListDataCatalogs === "function")
assert(typeof paginateListDatabases === "function")
assert(typeof paginateListEngineVersions === "function")
assert(typeof paginateListExecutors === "function")
assert(typeof paginateListNamedQueries === "function")
assert(typeof paginateListPreparedStatements === "function")
assert(typeof paginateListQueryExecutions === "function")
assert(typeof paginateListSessions === "function")
assert(typeof paginateListTableMetadata === "function")
assert(typeof paginateListTagsForResource === "function")
assert(typeof paginateListWorkGroups === "function")
console.log(`Athena index test passed.`);
