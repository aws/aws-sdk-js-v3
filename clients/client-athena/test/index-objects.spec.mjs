import {
  AclConfiguration$,
  ApplicationDPUSizes$,
  Athena,
  AthenaClient,
  AthenaError$,
  AthenaServiceException,
  AuthenticationType,
  BatchGetNamedQuery$,
  BatchGetNamedQueryCommand,
  BatchGetNamedQueryInput$,
  BatchGetNamedQueryOutput$,
  BatchGetPreparedStatement$,
  BatchGetPreparedStatementCommand,
  BatchGetPreparedStatementInput$,
  BatchGetPreparedStatementOutput$,
  BatchGetQueryExecution$,
  BatchGetQueryExecutionCommand,
  BatchGetQueryExecutionInput$,
  BatchGetQueryExecutionOutput$,
  CalculationConfiguration$,
  CalculationExecutionState,
  CalculationResult$,
  CalculationStatistics$,
  CalculationStatus$,
  CalculationSummary$,
  CancelCapacityReservation$,
  CancelCapacityReservationCommand,
  CancelCapacityReservationInput$,
  CancelCapacityReservationOutput$,
  CapacityAllocation$,
  CapacityAllocationStatus,
  CapacityAssignment$,
  CapacityAssignmentConfiguration$,
  CapacityReservation$,
  CapacityReservationStatus,
  Classification$,
  CloudWatchLoggingConfiguration$,
  Column$,
  ColumnInfo$,
  ColumnNullable,
  ConnectionType,
  CreateCapacityReservation$,
  CreateCapacityReservationCommand,
  CreateCapacityReservationInput$,
  CreateCapacityReservationOutput$,
  CreateDataCatalog$,
  CreateDataCatalogCommand,
  CreateDataCatalogInput$,
  CreateDataCatalogOutput$,
  CreateNamedQuery$,
  CreateNamedQueryCommand,
  CreateNamedQueryInput$,
  CreateNamedQueryOutput$,
  CreateNotebook$,
  CreateNotebookCommand,
  CreateNotebookInput$,
  CreateNotebookOutput$,
  CreatePreparedStatement$,
  CreatePreparedStatementCommand,
  CreatePreparedStatementInput$,
  CreatePreparedStatementOutput$,
  CreatePresignedNotebookUrl$,
  CreatePresignedNotebookUrlCommand,
  CreatePresignedNotebookUrlRequest$,
  CreatePresignedNotebookUrlResponse$,
  CreateWorkGroup$,
  CreateWorkGroupCommand,
  CreateWorkGroupInput$,
  CreateWorkGroupOutput$,
  CustomerContentEncryptionConfiguration$,
  DataCatalog$,
  DataCatalogStatus,
  DataCatalogSummary$,
  DataCatalogType,
  Database$,
  Datum$,
  DeleteCapacityReservation$,
  DeleteCapacityReservationCommand,
  DeleteCapacityReservationInput$,
  DeleteCapacityReservationOutput$,
  DeleteDataCatalog$,
  DeleteDataCatalogCommand,
  DeleteDataCatalogInput$,
  DeleteDataCatalogOutput$,
  DeleteNamedQuery$,
  DeleteNamedQueryCommand,
  DeleteNamedQueryInput$,
  DeleteNamedQueryOutput$,
  DeleteNotebook$,
  DeleteNotebookCommand,
  DeleteNotebookInput$,
  DeleteNotebookOutput$,
  DeletePreparedStatement$,
  DeletePreparedStatementCommand,
  DeletePreparedStatementInput$,
  DeletePreparedStatementOutput$,
  DeleteWorkGroup$,
  DeleteWorkGroupCommand,
  DeleteWorkGroupInput$,
  DeleteWorkGroupOutput$,
  EncryptionConfiguration$,
  EncryptionOption,
  EngineConfiguration$,
  EngineVersion$,
  ExecutorState,
  ExecutorType,
  ExecutorsSummary$,
  ExportNotebook$,
  ExportNotebookCommand,
  ExportNotebookInput$,
  ExportNotebookOutput$,
  FilterDefinition$,
  GetCalculationExecution$,
  GetCalculationExecutionCode$,
  GetCalculationExecutionCodeCommand,
  GetCalculationExecutionCodeRequest$,
  GetCalculationExecutionCodeResponse$,
  GetCalculationExecutionCommand,
  GetCalculationExecutionRequest$,
  GetCalculationExecutionResponse$,
  GetCalculationExecutionStatus$,
  GetCalculationExecutionStatusCommand,
  GetCalculationExecutionStatusRequest$,
  GetCalculationExecutionStatusResponse$,
  GetCapacityAssignmentConfiguration$,
  GetCapacityAssignmentConfigurationCommand,
  GetCapacityAssignmentConfigurationInput$,
  GetCapacityAssignmentConfigurationOutput$,
  GetCapacityReservation$,
  GetCapacityReservationCommand,
  GetCapacityReservationInput$,
  GetCapacityReservationOutput$,
  GetDataCatalog$,
  GetDataCatalogCommand,
  GetDataCatalogInput$,
  GetDataCatalogOutput$,
  GetDatabase$,
  GetDatabaseCommand,
  GetDatabaseInput$,
  GetDatabaseOutput$,
  GetNamedQuery$,
  GetNamedQueryCommand,
  GetNamedQueryInput$,
  GetNamedQueryOutput$,
  GetNotebookMetadata$,
  GetNotebookMetadataCommand,
  GetNotebookMetadataInput$,
  GetNotebookMetadataOutput$,
  GetPreparedStatement$,
  GetPreparedStatementCommand,
  GetPreparedStatementInput$,
  GetPreparedStatementOutput$,
  GetQueryExecution$,
  GetQueryExecutionCommand,
  GetQueryExecutionInput$,
  GetQueryExecutionOutput$,
  GetQueryResults$,
  GetQueryResultsCommand,
  GetQueryResultsInput$,
  GetQueryResultsOutput$,
  GetQueryRuntimeStatistics$,
  GetQueryRuntimeStatisticsCommand,
  GetQueryRuntimeStatisticsInput$,
  GetQueryRuntimeStatisticsOutput$,
  GetResourceDashboard$,
  GetResourceDashboardCommand,
  GetResourceDashboardRequest$,
  GetResourceDashboardResponse$,
  GetSession$,
  GetSessionCommand,
  GetSessionEndpoint$,
  GetSessionEndpointCommand,
  GetSessionEndpointRequest$,
  GetSessionEndpointResponse$,
  GetSessionRequest$,
  GetSessionResponse$,
  GetSessionStatus$,
  GetSessionStatusCommand,
  GetSessionStatusRequest$,
  GetSessionStatusResponse$,
  GetTableMetadata$,
  GetTableMetadataCommand,
  GetTableMetadataInput$,
  GetTableMetadataOutput$,
  GetWorkGroup$,
  GetWorkGroupCommand,
  GetWorkGroupInput$,
  GetWorkGroupOutput$,
  IdentityCenterConfiguration$,
  ImportNotebook$,
  ImportNotebookCommand,
  ImportNotebookInput$,
  ImportNotebookOutput$,
  InternalServerException,
  InternalServerException$,
  InvalidRequestException,
  InvalidRequestException$,
  ListApplicationDPUSizes$,
  ListApplicationDPUSizesCommand,
  ListApplicationDPUSizesInput$,
  ListApplicationDPUSizesOutput$,
  ListCalculationExecutions$,
  ListCalculationExecutionsCommand,
  ListCalculationExecutionsRequest$,
  ListCalculationExecutionsResponse$,
  ListCapacityReservations$,
  ListCapacityReservationsCommand,
  ListCapacityReservationsInput$,
  ListCapacityReservationsOutput$,
  ListDataCatalogs$,
  ListDataCatalogsCommand,
  ListDataCatalogsInput$,
  ListDataCatalogsOutput$,
  ListDatabases$,
  ListDatabasesCommand,
  ListDatabasesInput$,
  ListDatabasesOutput$,
  ListEngineVersions$,
  ListEngineVersionsCommand,
  ListEngineVersionsInput$,
  ListEngineVersionsOutput$,
  ListExecutors$,
  ListExecutorsCommand,
  ListExecutorsRequest$,
  ListExecutorsResponse$,
  ListNamedQueries$,
  ListNamedQueriesCommand,
  ListNamedQueriesInput$,
  ListNamedQueriesOutput$,
  ListNotebookMetadata$,
  ListNotebookMetadataCommand,
  ListNotebookMetadataInput$,
  ListNotebookMetadataOutput$,
  ListNotebookSessions$,
  ListNotebookSessionsCommand,
  ListNotebookSessionsRequest$,
  ListNotebookSessionsResponse$,
  ListPreparedStatements$,
  ListPreparedStatementsCommand,
  ListPreparedStatementsInput$,
  ListPreparedStatementsOutput$,
  ListQueryExecutions$,
  ListQueryExecutionsCommand,
  ListQueryExecutionsInput$,
  ListQueryExecutionsOutput$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListTableMetadata$,
  ListTableMetadataCommand,
  ListTableMetadataInput$,
  ListTableMetadataOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListWorkGroups$,
  ListWorkGroupsCommand,
  ListWorkGroupsInput$,
  ListWorkGroupsOutput$,
  ManagedLoggingConfiguration$,
  ManagedQueryResultsConfiguration$,
  ManagedQueryResultsConfigurationUpdates$,
  ManagedQueryResultsEncryptionConfiguration$,
  MetadataException,
  MetadataException$,
  MonitoringConfiguration$,
  NamedQuery$,
  NotebookMetadata$,
  NotebookSessionSummary$,
  NotebookType,
  PreparedStatement$,
  PreparedStatementSummary$,
  PutCapacityAssignmentConfiguration$,
  PutCapacityAssignmentConfigurationCommand,
  PutCapacityAssignmentConfigurationInput$,
  PutCapacityAssignmentConfigurationOutput$,
  QueryExecution$,
  QueryExecutionContext$,
  QueryExecutionState,
  QueryExecutionStatistics$,
  QueryExecutionStatus$,
  QueryResultType,
  QueryResultsS3AccessGrantsConfiguration$,
  QueryRuntimeStatistics$,
  QueryRuntimeStatisticsRows$,
  QueryRuntimeStatisticsTimeline$,
  QueryStage$,
  QueryStagePlanNode$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultConfiguration$,
  ResultConfigurationUpdates$,
  ResultReuseByAgeConfiguration$,
  ResultReuseConfiguration$,
  ResultReuseInformation$,
  ResultSet$,
  ResultSetMetadata$,
  Row$,
  S3AclOption,
  S3LoggingConfiguration$,
  SessionAlreadyExistsException,
  SessionAlreadyExistsException$,
  SessionConfiguration$,
  SessionState,
  SessionStatistics$,
  SessionStatus$,
  SessionSummary$,
  StartCalculationExecution$,
  StartCalculationExecutionCommand,
  StartCalculationExecutionRequest$,
  StartCalculationExecutionResponse$,
  StartQueryExecution$,
  StartQueryExecutionCommand,
  StartQueryExecutionInput$,
  StartQueryExecutionOutput$,
  StartSession$,
  StartSessionCommand,
  StartSessionRequest$,
  StartSessionResponse$,
  StatementType,
  StopCalculationExecution$,
  StopCalculationExecutionCommand,
  StopCalculationExecutionRequest$,
  StopCalculationExecutionResponse$,
  StopQueryExecution$,
  StopQueryExecutionCommand,
  StopQueryExecutionInput$,
  StopQueryExecutionOutput$,
  TableMetadata$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TerminateSession$,
  TerminateSessionCommand,
  TerminateSessionRequest$,
  TerminateSessionResponse$,
  ThrottleReason,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnprocessedNamedQueryId$,
  UnprocessedPreparedStatementName$,
  UnprocessedQueryExecutionId$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateCapacityReservation$,
  UpdateCapacityReservationCommand,
  UpdateCapacityReservationInput$,
  UpdateCapacityReservationOutput$,
  UpdateDataCatalog$,
  UpdateDataCatalogCommand,
  UpdateDataCatalogInput$,
  UpdateDataCatalogOutput$,
  UpdateNamedQuery$,
  UpdateNamedQueryCommand,
  UpdateNamedQueryInput$,
  UpdateNamedQueryOutput$,
  UpdateNotebook$,
  UpdateNotebookCommand,
  UpdateNotebookInput$,
  UpdateNotebookMetadata$,
  UpdateNotebookMetadataCommand,
  UpdateNotebookMetadataInput$,
  UpdateNotebookMetadataOutput$,
  UpdateNotebookOutput$,
  UpdatePreparedStatement$,
  UpdatePreparedStatementCommand,
  UpdatePreparedStatementInput$,
  UpdatePreparedStatementOutput$,
  UpdateWorkGroup$,
  UpdateWorkGroupCommand,
  UpdateWorkGroupInput$,
  UpdateWorkGroupOutput$,
  WorkGroup$,
  WorkGroupConfiguration$,
  WorkGroupConfigurationUpdates$,
  WorkGroupState,
  WorkGroupSummary$,
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
assert(typeof AthenaClient === "function");
assert(typeof Athena === "function");
// commands
assert(typeof BatchGetNamedQueryCommand === "function");
assert(typeof BatchGetNamedQuery$ === "object");
assert(typeof BatchGetPreparedStatementCommand === "function");
assert(typeof BatchGetPreparedStatement$ === "object");
assert(typeof BatchGetQueryExecutionCommand === "function");
assert(typeof BatchGetQueryExecution$ === "object");
assert(typeof CancelCapacityReservationCommand === "function");
assert(typeof CancelCapacityReservation$ === "object");
assert(typeof CreateCapacityReservationCommand === "function");
assert(typeof CreateCapacityReservation$ === "object");
assert(typeof CreateDataCatalogCommand === "function");
assert(typeof CreateDataCatalog$ === "object");
assert(typeof CreateNamedQueryCommand === "function");
assert(typeof CreateNamedQuery$ === "object");
assert(typeof CreateNotebookCommand === "function");
assert(typeof CreateNotebook$ === "object");
assert(typeof CreatePreparedStatementCommand === "function");
assert(typeof CreatePreparedStatement$ === "object");
assert(typeof CreatePresignedNotebookUrlCommand === "function");
assert(typeof CreatePresignedNotebookUrl$ === "object");
assert(typeof CreateWorkGroupCommand === "function");
assert(typeof CreateWorkGroup$ === "object");
assert(typeof DeleteCapacityReservationCommand === "function");
assert(typeof DeleteCapacityReservation$ === "object");
assert(typeof DeleteDataCatalogCommand === "function");
assert(typeof DeleteDataCatalog$ === "object");
assert(typeof DeleteNamedQueryCommand === "function");
assert(typeof DeleteNamedQuery$ === "object");
assert(typeof DeleteNotebookCommand === "function");
assert(typeof DeleteNotebook$ === "object");
assert(typeof DeletePreparedStatementCommand === "function");
assert(typeof DeletePreparedStatement$ === "object");
assert(typeof DeleteWorkGroupCommand === "function");
assert(typeof DeleteWorkGroup$ === "object");
assert(typeof ExportNotebookCommand === "function");
assert(typeof ExportNotebook$ === "object");
assert(typeof GetCalculationExecutionCommand === "function");
assert(typeof GetCalculationExecution$ === "object");
assert(typeof GetCalculationExecutionCodeCommand === "function");
assert(typeof GetCalculationExecutionCode$ === "object");
assert(typeof GetCalculationExecutionStatusCommand === "function");
assert(typeof GetCalculationExecutionStatus$ === "object");
assert(typeof GetCapacityAssignmentConfigurationCommand === "function");
assert(typeof GetCapacityAssignmentConfiguration$ === "object");
assert(typeof GetCapacityReservationCommand === "function");
assert(typeof GetCapacityReservation$ === "object");
assert(typeof GetDatabaseCommand === "function");
assert(typeof GetDatabase$ === "object");
assert(typeof GetDataCatalogCommand === "function");
assert(typeof GetDataCatalog$ === "object");
assert(typeof GetNamedQueryCommand === "function");
assert(typeof GetNamedQuery$ === "object");
assert(typeof GetNotebookMetadataCommand === "function");
assert(typeof GetNotebookMetadata$ === "object");
assert(typeof GetPreparedStatementCommand === "function");
assert(typeof GetPreparedStatement$ === "object");
assert(typeof GetQueryExecutionCommand === "function");
assert(typeof GetQueryExecution$ === "object");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryResults$ === "object");
assert(typeof GetQueryRuntimeStatisticsCommand === "function");
assert(typeof GetQueryRuntimeStatistics$ === "object");
assert(typeof GetResourceDashboardCommand === "function");
assert(typeof GetResourceDashboard$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof GetSessionEndpointCommand === "function");
assert(typeof GetSessionEndpoint$ === "object");
assert(typeof GetSessionStatusCommand === "function");
assert(typeof GetSessionStatus$ === "object");
assert(typeof GetTableMetadataCommand === "function");
assert(typeof GetTableMetadata$ === "object");
assert(typeof GetWorkGroupCommand === "function");
assert(typeof GetWorkGroup$ === "object");
assert(typeof ImportNotebookCommand === "function");
assert(typeof ImportNotebook$ === "object");
assert(typeof ListApplicationDPUSizesCommand === "function");
assert(typeof ListApplicationDPUSizes$ === "object");
assert(typeof ListCalculationExecutionsCommand === "function");
assert(typeof ListCalculationExecutions$ === "object");
assert(typeof ListCapacityReservationsCommand === "function");
assert(typeof ListCapacityReservations$ === "object");
assert(typeof ListDatabasesCommand === "function");
assert(typeof ListDatabases$ === "object");
assert(typeof ListDataCatalogsCommand === "function");
assert(typeof ListDataCatalogs$ === "object");
assert(typeof ListEngineVersionsCommand === "function");
assert(typeof ListEngineVersions$ === "object");
assert(typeof ListExecutorsCommand === "function");
assert(typeof ListExecutors$ === "object");
assert(typeof ListNamedQueriesCommand === "function");
assert(typeof ListNamedQueries$ === "object");
assert(typeof ListNotebookMetadataCommand === "function");
assert(typeof ListNotebookMetadata$ === "object");
assert(typeof ListNotebookSessionsCommand === "function");
assert(typeof ListNotebookSessions$ === "object");
assert(typeof ListPreparedStatementsCommand === "function");
assert(typeof ListPreparedStatements$ === "object");
assert(typeof ListQueryExecutionsCommand === "function");
assert(typeof ListQueryExecutions$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListTableMetadataCommand === "function");
assert(typeof ListTableMetadata$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkGroupsCommand === "function");
assert(typeof ListWorkGroups$ === "object");
assert(typeof PutCapacityAssignmentConfigurationCommand === "function");
assert(typeof PutCapacityAssignmentConfiguration$ === "object");
assert(typeof StartCalculationExecutionCommand === "function");
assert(typeof StartCalculationExecution$ === "object");
assert(typeof StartQueryExecutionCommand === "function");
assert(typeof StartQueryExecution$ === "object");
assert(typeof StartSessionCommand === "function");
assert(typeof StartSession$ === "object");
assert(typeof StopCalculationExecutionCommand === "function");
assert(typeof StopCalculationExecution$ === "object");
assert(typeof StopQueryExecutionCommand === "function");
assert(typeof StopQueryExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateSessionCommand === "function");
assert(typeof TerminateSession$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCapacityReservationCommand === "function");
assert(typeof UpdateCapacityReservation$ === "object");
assert(typeof UpdateDataCatalogCommand === "function");
assert(typeof UpdateDataCatalog$ === "object");
assert(typeof UpdateNamedQueryCommand === "function");
assert(typeof UpdateNamedQuery$ === "object");
assert(typeof UpdateNotebookCommand === "function");
assert(typeof UpdateNotebook$ === "object");
assert(typeof UpdateNotebookMetadataCommand === "function");
assert(typeof UpdateNotebookMetadata$ === "object");
assert(typeof UpdatePreparedStatementCommand === "function");
assert(typeof UpdatePreparedStatement$ === "object");
assert(typeof UpdateWorkGroupCommand === "function");
assert(typeof UpdateWorkGroup$ === "object");
// structural schemas
assert(typeof AclConfiguration$ === "object");
assert(typeof ApplicationDPUSizes$ === "object");
assert(typeof AthenaError$ === "object");
assert(typeof BatchGetNamedQueryInput$ === "object");
assert(typeof BatchGetNamedQueryOutput$ === "object");
assert(typeof BatchGetPreparedStatementInput$ === "object");
assert(typeof BatchGetPreparedStatementOutput$ === "object");
assert(typeof BatchGetQueryExecutionInput$ === "object");
assert(typeof BatchGetQueryExecutionOutput$ === "object");
assert(typeof CalculationConfiguration$ === "object");
assert(typeof CalculationResult$ === "object");
assert(typeof CalculationStatistics$ === "object");
assert(typeof CalculationStatus$ === "object");
assert(typeof CalculationSummary$ === "object");
assert(typeof CancelCapacityReservationInput$ === "object");
assert(typeof CancelCapacityReservationOutput$ === "object");
assert(typeof CapacityAllocation$ === "object");
assert(typeof CapacityAssignment$ === "object");
assert(typeof CapacityAssignmentConfiguration$ === "object");
assert(typeof CapacityReservation$ === "object");
assert(typeof Classification$ === "object");
assert(typeof CloudWatchLoggingConfiguration$ === "object");
assert(typeof Column$ === "object");
assert(typeof ColumnInfo$ === "object");
assert(typeof CreateCapacityReservationInput$ === "object");
assert(typeof CreateCapacityReservationOutput$ === "object");
assert(typeof CreateDataCatalogInput$ === "object");
assert(typeof CreateDataCatalogOutput$ === "object");
assert(typeof CreateNamedQueryInput$ === "object");
assert(typeof CreateNamedQueryOutput$ === "object");
assert(typeof CreateNotebookInput$ === "object");
assert(typeof CreateNotebookOutput$ === "object");
assert(typeof CreatePreparedStatementInput$ === "object");
assert(typeof CreatePreparedStatementOutput$ === "object");
assert(typeof CreatePresignedNotebookUrlRequest$ === "object");
assert(typeof CreatePresignedNotebookUrlResponse$ === "object");
assert(typeof CreateWorkGroupInput$ === "object");
assert(typeof CreateWorkGroupOutput$ === "object");
assert(typeof CustomerContentEncryptionConfiguration$ === "object");
assert(typeof Database$ === "object");
assert(typeof DataCatalog$ === "object");
assert(typeof DataCatalogSummary$ === "object");
assert(typeof Datum$ === "object");
assert(typeof DeleteCapacityReservationInput$ === "object");
assert(typeof DeleteCapacityReservationOutput$ === "object");
assert(typeof DeleteDataCatalogInput$ === "object");
assert(typeof DeleteDataCatalogOutput$ === "object");
assert(typeof DeleteNamedQueryInput$ === "object");
assert(typeof DeleteNamedQueryOutput$ === "object");
assert(typeof DeleteNotebookInput$ === "object");
assert(typeof DeleteNotebookOutput$ === "object");
assert(typeof DeletePreparedStatementInput$ === "object");
assert(typeof DeletePreparedStatementOutput$ === "object");
assert(typeof DeleteWorkGroupInput$ === "object");
assert(typeof DeleteWorkGroupOutput$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EngineConfiguration$ === "object");
assert(typeof EngineVersion$ === "object");
assert(typeof ExecutorsSummary$ === "object");
assert(typeof ExportNotebookInput$ === "object");
assert(typeof ExportNotebookOutput$ === "object");
assert(typeof FilterDefinition$ === "object");
assert(typeof GetCalculationExecutionCodeRequest$ === "object");
assert(typeof GetCalculationExecutionCodeResponse$ === "object");
assert(typeof GetCalculationExecutionRequest$ === "object");
assert(typeof GetCalculationExecutionResponse$ === "object");
assert(typeof GetCalculationExecutionStatusRequest$ === "object");
assert(typeof GetCalculationExecutionStatusResponse$ === "object");
assert(typeof GetCapacityAssignmentConfigurationInput$ === "object");
assert(typeof GetCapacityAssignmentConfigurationOutput$ === "object");
assert(typeof GetCapacityReservationInput$ === "object");
assert(typeof GetCapacityReservationOutput$ === "object");
assert(typeof GetDatabaseInput$ === "object");
assert(typeof GetDatabaseOutput$ === "object");
assert(typeof GetDataCatalogInput$ === "object");
assert(typeof GetDataCatalogOutput$ === "object");
assert(typeof GetNamedQueryInput$ === "object");
assert(typeof GetNamedQueryOutput$ === "object");
assert(typeof GetNotebookMetadataInput$ === "object");
assert(typeof GetNotebookMetadataOutput$ === "object");
assert(typeof GetPreparedStatementInput$ === "object");
assert(typeof GetPreparedStatementOutput$ === "object");
assert(typeof GetQueryExecutionInput$ === "object");
assert(typeof GetQueryExecutionOutput$ === "object");
assert(typeof GetQueryResultsInput$ === "object");
assert(typeof GetQueryResultsOutput$ === "object");
assert(typeof GetQueryRuntimeStatisticsInput$ === "object");
assert(typeof GetQueryRuntimeStatisticsOutput$ === "object");
assert(typeof GetResourceDashboardRequest$ === "object");
assert(typeof GetResourceDashboardResponse$ === "object");
assert(typeof GetSessionEndpointRequest$ === "object");
assert(typeof GetSessionEndpointResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GetSessionStatusRequest$ === "object");
assert(typeof GetSessionStatusResponse$ === "object");
assert(typeof GetTableMetadataInput$ === "object");
assert(typeof GetTableMetadataOutput$ === "object");
assert(typeof GetWorkGroupInput$ === "object");
assert(typeof GetWorkGroupOutput$ === "object");
assert(typeof IdentityCenterConfiguration$ === "object");
assert(typeof ImportNotebookInput$ === "object");
assert(typeof ImportNotebookOutput$ === "object");
assert(typeof ListApplicationDPUSizesInput$ === "object");
assert(typeof ListApplicationDPUSizesOutput$ === "object");
assert(typeof ListCalculationExecutionsRequest$ === "object");
assert(typeof ListCalculationExecutionsResponse$ === "object");
assert(typeof ListCapacityReservationsInput$ === "object");
assert(typeof ListCapacityReservationsOutput$ === "object");
assert(typeof ListDatabasesInput$ === "object");
assert(typeof ListDatabasesOutput$ === "object");
assert(typeof ListDataCatalogsInput$ === "object");
assert(typeof ListDataCatalogsOutput$ === "object");
assert(typeof ListEngineVersionsInput$ === "object");
assert(typeof ListEngineVersionsOutput$ === "object");
assert(typeof ListExecutorsRequest$ === "object");
assert(typeof ListExecutorsResponse$ === "object");
assert(typeof ListNamedQueriesInput$ === "object");
assert(typeof ListNamedQueriesOutput$ === "object");
assert(typeof ListNotebookMetadataInput$ === "object");
assert(typeof ListNotebookMetadataOutput$ === "object");
assert(typeof ListNotebookSessionsRequest$ === "object");
assert(typeof ListNotebookSessionsResponse$ === "object");
assert(typeof ListPreparedStatementsInput$ === "object");
assert(typeof ListPreparedStatementsOutput$ === "object");
assert(typeof ListQueryExecutionsInput$ === "object");
assert(typeof ListQueryExecutionsOutput$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListTableMetadataInput$ === "object");
assert(typeof ListTableMetadataOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListWorkGroupsInput$ === "object");
assert(typeof ListWorkGroupsOutput$ === "object");
assert(typeof ManagedLoggingConfiguration$ === "object");
assert(typeof ManagedQueryResultsConfiguration$ === "object");
assert(typeof ManagedQueryResultsConfigurationUpdates$ === "object");
assert(typeof ManagedQueryResultsEncryptionConfiguration$ === "object");
assert(typeof MonitoringConfiguration$ === "object");
assert(typeof NamedQuery$ === "object");
assert(typeof NotebookMetadata$ === "object");
assert(typeof NotebookSessionSummary$ === "object");
assert(typeof PreparedStatement$ === "object");
assert(typeof PreparedStatementSummary$ === "object");
assert(typeof PutCapacityAssignmentConfigurationInput$ === "object");
assert(typeof PutCapacityAssignmentConfigurationOutput$ === "object");
assert(typeof QueryExecution$ === "object");
assert(typeof QueryExecutionContext$ === "object");
assert(typeof QueryExecutionStatistics$ === "object");
assert(typeof QueryExecutionStatus$ === "object");
assert(typeof QueryResultsS3AccessGrantsConfiguration$ === "object");
assert(typeof QueryRuntimeStatistics$ === "object");
assert(typeof QueryRuntimeStatisticsRows$ === "object");
assert(typeof QueryRuntimeStatisticsTimeline$ === "object");
assert(typeof QueryStage$ === "object");
assert(typeof QueryStagePlanNode$ === "object");
assert(typeof ResultConfiguration$ === "object");
assert(typeof ResultConfigurationUpdates$ === "object");
assert(typeof ResultReuseByAgeConfiguration$ === "object");
assert(typeof ResultReuseConfiguration$ === "object");
assert(typeof ResultReuseInformation$ === "object");
assert(typeof ResultSet$ === "object");
assert(typeof ResultSetMetadata$ === "object");
assert(typeof Row$ === "object");
assert(typeof S3LoggingConfiguration$ === "object");
assert(typeof SessionConfiguration$ === "object");
assert(typeof SessionStatistics$ === "object");
assert(typeof SessionStatus$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof StartCalculationExecutionRequest$ === "object");
assert(typeof StartCalculationExecutionResponse$ === "object");
assert(typeof StartQueryExecutionInput$ === "object");
assert(typeof StartQueryExecutionOutput$ === "object");
assert(typeof StartSessionRequest$ === "object");
assert(typeof StartSessionResponse$ === "object");
assert(typeof StopCalculationExecutionRequest$ === "object");
assert(typeof StopCalculationExecutionResponse$ === "object");
assert(typeof StopQueryExecutionInput$ === "object");
assert(typeof StopQueryExecutionOutput$ === "object");
assert(typeof TableMetadata$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TerminateSessionRequest$ === "object");
assert(typeof TerminateSessionResponse$ === "object");
assert(typeof UnprocessedNamedQueryId$ === "object");
assert(typeof UnprocessedPreparedStatementName$ === "object");
assert(typeof UnprocessedQueryExecutionId$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateCapacityReservationInput$ === "object");
assert(typeof UpdateCapacityReservationOutput$ === "object");
assert(typeof UpdateDataCatalogInput$ === "object");
assert(typeof UpdateDataCatalogOutput$ === "object");
assert(typeof UpdateNamedQueryInput$ === "object");
assert(typeof UpdateNamedQueryOutput$ === "object");
assert(typeof UpdateNotebookInput$ === "object");
assert(typeof UpdateNotebookMetadataInput$ === "object");
assert(typeof UpdateNotebookMetadataOutput$ === "object");
assert(typeof UpdateNotebookOutput$ === "object");
assert(typeof UpdatePreparedStatementInput$ === "object");
assert(typeof UpdatePreparedStatementOutput$ === "object");
assert(typeof UpdateWorkGroupInput$ === "object");
assert(typeof UpdateWorkGroupOutput$ === "object");
assert(typeof WorkGroup$ === "object");
assert(typeof WorkGroupConfiguration$ === "object");
assert(typeof WorkGroupConfigurationUpdates$ === "object");
assert(typeof WorkGroupSummary$ === "object");
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
assert(typeof ThrottleReason === "object");
assert(typeof WorkGroupState === "object");
// errors
assert(InternalServerException.prototype instanceof AthenaServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof AthenaServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(MetadataException.prototype instanceof AthenaServiceException);
assert(typeof MetadataException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AthenaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SessionAlreadyExistsException.prototype instanceof AthenaServiceException);
assert(typeof SessionAlreadyExistsException$ === "object");
assert(TooManyRequestsException.prototype instanceof AthenaServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(AthenaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResults === "function");
assert(typeof paginateListApplicationDPUSizes === "function");
assert(typeof paginateListCalculationExecutions === "function");
assert(typeof paginateListCapacityReservations === "function");
assert(typeof paginateListDataCatalogs === "function");
assert(typeof paginateListDatabases === "function");
assert(typeof paginateListEngineVersions === "function");
assert(typeof paginateListExecutors === "function");
assert(typeof paginateListNamedQueries === "function");
assert(typeof paginateListPreparedStatements === "function");
assert(typeof paginateListQueryExecutions === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListTableMetadata === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListWorkGroups === "function");
console.log(`Athena index test passed.`);
