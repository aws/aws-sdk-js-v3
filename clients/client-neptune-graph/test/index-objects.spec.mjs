import {
  AccessDeniedException,
  AccessDeniedException$,
  BlankNodeHandling,
  CancelExportTask$,
  CancelExportTaskCommand,
  CancelExportTaskInput$,
  CancelExportTaskOutput$,
  CancelImportTask$,
  CancelImportTaskCommand,
  CancelImportTaskInput$,
  CancelImportTaskOutput$,
  CancelQuery$,
  CancelQueryCommand,
  CancelQueryInput$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateGraph$,
  CreateGraphCommand,
  CreateGraphInput$,
  CreateGraphOutput$,
  CreateGraphSnapshot$,
  CreateGraphSnapshotCommand,
  CreateGraphSnapshotInput$,
  CreateGraphSnapshotOutput$,
  CreateGraphUsingImportTask$,
  CreateGraphUsingImportTaskCommand,
  CreateGraphUsingImportTaskInput$,
  CreateGraphUsingImportTaskOutput$,
  CreatePrivateGraphEndpoint$,
  CreatePrivateGraphEndpointCommand,
  CreatePrivateGraphEndpointInput$,
  CreatePrivateGraphEndpointOutput$,
  DeleteGraph$,
  DeleteGraphCommand,
  DeleteGraphInput$,
  DeleteGraphOutput$,
  DeleteGraphSnapshot$,
  DeleteGraphSnapshotCommand,
  DeleteGraphSnapshotInput$,
  DeleteGraphSnapshotOutput$,
  DeletePrivateGraphEndpoint$,
  DeletePrivateGraphEndpointCommand,
  DeletePrivateGraphEndpointInput$,
  DeletePrivateGraphEndpointOutput$,
  EdgeStructure$,
  ExecuteQuery$,
  ExecuteQueryCommand,
  ExecuteQueryInput$,
  ExecuteQueryOutput$,
  ExplainMode,
  ExportFilter$,
  ExportFilterElement$,
  ExportFilterPropertyAttributes$,
  ExportFormat,
  ExportTaskDetails$,
  ExportTaskStatus,
  ExportTaskSummary$,
  Format,
  GetExportTask$,
  GetExportTaskCommand,
  GetExportTaskInput$,
  GetExportTaskOutput$,
  GetGraph$,
  GetGraphCommand,
  GetGraphInput$,
  GetGraphOutput$,
  GetGraphSnapshot$,
  GetGraphSnapshotCommand,
  GetGraphSnapshotInput$,
  GetGraphSnapshotOutput$,
  GetGraphSummary$,
  GetGraphSummaryCommand,
  GetGraphSummaryInput$,
  GetGraphSummaryOutput$,
  GetImportTask$,
  GetImportTaskCommand,
  GetImportTaskInput$,
  GetImportTaskOutput$,
  GetPrivateGraphEndpoint$,
  GetPrivateGraphEndpointCommand,
  GetPrivateGraphEndpointInput$,
  GetPrivateGraphEndpointOutput$,
  GetQuery$,
  GetQueryCommand,
  GetQueryInput$,
  GetQueryOutput$,
  GraphDataSummary$,
  GraphSnapshotSummary$,
  GraphStatus,
  GraphSummary$,
  GraphSummaryMode,
  ImportOptions$,
  ImportTaskDetails$,
  ImportTaskStatus,
  ImportTaskSummary$,
  InternalServerException,
  InternalServerException$,
  ListExportTasks$,
  ListExportTasksCommand,
  ListExportTasksInput$,
  ListExportTasksOutput$,
  ListGraphs$,
  ListGraphsCommand,
  ListGraphsInput$,
  ListGraphSnapshots$,
  ListGraphSnapshotsCommand,
  ListGraphSnapshotsInput$,
  ListGraphSnapshotsOutput$,
  ListGraphsOutput$,
  ListImportTasks$,
  ListImportTasksCommand,
  ListImportTasksInput$,
  ListImportTasksOutput$,
  ListPrivateGraphEndpoints$,
  ListPrivateGraphEndpointsCommand,
  ListPrivateGraphEndpointsInput$,
  ListPrivateGraphEndpointsOutput$,
  ListQueries$,
  ListQueriesCommand,
  ListQueriesInput$,
  ListQueriesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MultiValueHandlingType,
  NeptuneGraph,
  NeptuneGraphClient,
  NeptuneGraphServiceException,
  NeptuneImportOptions$,
  NodeStructure$,
  paginateListExportTasks,
  paginateListGraphs,
  paginateListGraphSnapshots,
  paginateListImportTasks,
  paginateListPrivateGraphEndpoints,
  ParquetType,
  PlanCacheType,
  PrivateGraphEndpointStatus,
  PrivateGraphEndpointSummary$,
  QueryLanguage,
  QueryState,
  QueryStateInput,
  QuerySummary$,
  ResetGraph$,
  ResetGraphCommand,
  ResetGraphInput$,
  ResetGraphOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreGraphFromSnapshot$,
  RestoreGraphFromSnapshotCommand,
  RestoreGraphFromSnapshotInput$,
  RestoreGraphFromSnapshotOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnapshotStatus,
  StartExportTask$,
  StartExportTaskCommand,
  StartExportTaskInput$,
  StartExportTaskOutput$,
  StartGraph$,
  StartGraphCommand,
  StartGraphInput$,
  StartGraphOutput$,
  StartImportTask$,
  StartImportTaskCommand,
  StartImportTaskInput$,
  StartImportTaskOutput$,
  StopGraph$,
  StopGraphCommand,
  StopGraphInput$,
  StopGraphOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UnprocessableException,
  UnprocessableException$,
  UnprocessableExceptionReason,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateGraph$,
  UpdateGraphCommand,
  UpdateGraphInput$,
  UpdateGraphOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  VectorSearchConfiguration$,
  waitForExportTaskCancelled,
  waitForExportTaskSuccessful,
  waitForGraphAvailable,
  waitForGraphDeleted,
  waitForGraphSnapshotAvailable,
  waitForGraphSnapshotDeleted,
  waitForGraphStopped,
  waitForImportTaskCancelled,
  waitForImportTaskSuccessful,
  waitForPrivateGraphEndpointAvailable,
  waitForPrivateGraphEndpointDeleted,
  waitUntilExportTaskCancelled,
  waitUntilExportTaskSuccessful,
  waitUntilGraphAvailable,
  waitUntilGraphDeleted,
  waitUntilGraphSnapshotAvailable,
  waitUntilGraphSnapshotDeleted,
  waitUntilGraphStopped,
  waitUntilImportTaskCancelled,
  waitUntilImportTaskSuccessful,
  waitUntilPrivateGraphEndpointAvailable,
  waitUntilPrivateGraphEndpointDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptuneGraphClient === "function");
assert(typeof NeptuneGraph === "function");
// commands
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CancelExportTask$ === "object");
assert(typeof CancelImportTaskCommand === "function");
assert(typeof CancelImportTask$ === "object");
assert(typeof CancelQueryCommand === "function");
assert(typeof CancelQuery$ === "object");
assert(typeof CreateGraphCommand === "function");
assert(typeof CreateGraph$ === "object");
assert(typeof CreateGraphSnapshotCommand === "function");
assert(typeof CreateGraphSnapshot$ === "object");
assert(typeof CreateGraphUsingImportTaskCommand === "function");
assert(typeof CreateGraphUsingImportTask$ === "object");
assert(typeof CreatePrivateGraphEndpointCommand === "function");
assert(typeof CreatePrivateGraphEndpoint$ === "object");
assert(typeof DeleteGraphCommand === "function");
assert(typeof DeleteGraph$ === "object");
assert(typeof DeleteGraphSnapshotCommand === "function");
assert(typeof DeleteGraphSnapshot$ === "object");
assert(typeof DeletePrivateGraphEndpointCommand === "function");
assert(typeof DeletePrivateGraphEndpoint$ === "object");
assert(typeof ExecuteQueryCommand === "function");
assert(typeof ExecuteQuery$ === "object");
assert(typeof GetExportTaskCommand === "function");
assert(typeof GetExportTask$ === "object");
assert(typeof GetGraphCommand === "function");
assert(typeof GetGraph$ === "object");
assert(typeof GetGraphSnapshotCommand === "function");
assert(typeof GetGraphSnapshot$ === "object");
assert(typeof GetGraphSummaryCommand === "function");
assert(typeof GetGraphSummary$ === "object");
assert(typeof GetImportTaskCommand === "function");
assert(typeof GetImportTask$ === "object");
assert(typeof GetPrivateGraphEndpointCommand === "function");
assert(typeof GetPrivateGraphEndpoint$ === "object");
assert(typeof GetQueryCommand === "function");
assert(typeof GetQuery$ === "object");
assert(typeof ListExportTasksCommand === "function");
assert(typeof ListExportTasks$ === "object");
assert(typeof ListGraphsCommand === "function");
assert(typeof ListGraphs$ === "object");
assert(typeof ListGraphSnapshotsCommand === "function");
assert(typeof ListGraphSnapshots$ === "object");
assert(typeof ListImportTasksCommand === "function");
assert(typeof ListImportTasks$ === "object");
assert(typeof ListPrivateGraphEndpointsCommand === "function");
assert(typeof ListPrivateGraphEndpoints$ === "object");
assert(typeof ListQueriesCommand === "function");
assert(typeof ListQueries$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ResetGraphCommand === "function");
assert(typeof ResetGraph$ === "object");
assert(typeof RestoreGraphFromSnapshotCommand === "function");
assert(typeof RestoreGraphFromSnapshot$ === "object");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StartExportTask$ === "object");
assert(typeof StartGraphCommand === "function");
assert(typeof StartGraph$ === "object");
assert(typeof StartImportTaskCommand === "function");
assert(typeof StartImportTask$ === "object");
assert(typeof StopGraphCommand === "function");
assert(typeof StopGraph$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGraphCommand === "function");
assert(typeof UpdateGraph$ === "object");
// structural schemas
assert(typeof CancelExportTaskInput$ === "object");
assert(typeof CancelExportTaskOutput$ === "object");
assert(typeof CancelImportTaskInput$ === "object");
assert(typeof CancelImportTaskOutput$ === "object");
assert(typeof CancelQueryInput$ === "object");
assert(typeof CreateGraphInput$ === "object");
assert(typeof CreateGraphOutput$ === "object");
assert(typeof CreateGraphSnapshotInput$ === "object");
assert(typeof CreateGraphSnapshotOutput$ === "object");
assert(typeof CreateGraphUsingImportTaskInput$ === "object");
assert(typeof CreateGraphUsingImportTaskOutput$ === "object");
assert(typeof CreatePrivateGraphEndpointInput$ === "object");
assert(typeof CreatePrivateGraphEndpointOutput$ === "object");
assert(typeof DeleteGraphInput$ === "object");
assert(typeof DeleteGraphOutput$ === "object");
assert(typeof DeleteGraphSnapshotInput$ === "object");
assert(typeof DeleteGraphSnapshotOutput$ === "object");
assert(typeof DeletePrivateGraphEndpointInput$ === "object");
assert(typeof DeletePrivateGraphEndpointOutput$ === "object");
assert(typeof EdgeStructure$ === "object");
assert(typeof ExecuteQueryInput$ === "object");
assert(typeof ExecuteQueryOutput$ === "object");
assert(typeof ExportFilter$ === "object");
assert(typeof ExportFilterElement$ === "object");
assert(typeof ExportFilterPropertyAttributes$ === "object");
assert(typeof ExportTaskDetails$ === "object");
assert(typeof ExportTaskSummary$ === "object");
assert(typeof GetExportTaskInput$ === "object");
assert(typeof GetExportTaskOutput$ === "object");
assert(typeof GetGraphInput$ === "object");
assert(typeof GetGraphOutput$ === "object");
assert(typeof GetGraphSnapshotInput$ === "object");
assert(typeof GetGraphSnapshotOutput$ === "object");
assert(typeof GetGraphSummaryInput$ === "object");
assert(typeof GetGraphSummaryOutput$ === "object");
assert(typeof GetImportTaskInput$ === "object");
assert(typeof GetImportTaskOutput$ === "object");
assert(typeof GetPrivateGraphEndpointInput$ === "object");
assert(typeof GetPrivateGraphEndpointOutput$ === "object");
assert(typeof GetQueryInput$ === "object");
assert(typeof GetQueryOutput$ === "object");
assert(typeof GraphDataSummary$ === "object");
assert(typeof GraphSnapshotSummary$ === "object");
assert(typeof GraphSummary$ === "object");
assert(typeof ImportOptions$ === "object");
assert(typeof ImportTaskDetails$ === "object");
assert(typeof ImportTaskSummary$ === "object");
assert(typeof ListExportTasksInput$ === "object");
assert(typeof ListExportTasksOutput$ === "object");
assert(typeof ListGraphsInput$ === "object");
assert(typeof ListGraphSnapshotsInput$ === "object");
assert(typeof ListGraphSnapshotsOutput$ === "object");
assert(typeof ListGraphsOutput$ === "object");
assert(typeof ListImportTasksInput$ === "object");
assert(typeof ListImportTasksOutput$ === "object");
assert(typeof ListPrivateGraphEndpointsInput$ === "object");
assert(typeof ListPrivateGraphEndpointsOutput$ === "object");
assert(typeof ListQueriesInput$ === "object");
assert(typeof ListQueriesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof NeptuneImportOptions$ === "object");
assert(typeof NodeStructure$ === "object");
assert(typeof PrivateGraphEndpointSummary$ === "object");
assert(typeof QuerySummary$ === "object");
assert(typeof ResetGraphInput$ === "object");
assert(typeof ResetGraphOutput$ === "object");
assert(typeof RestoreGraphFromSnapshotInput$ === "object");
assert(typeof RestoreGraphFromSnapshotOutput$ === "object");
assert(typeof StartExportTaskInput$ === "object");
assert(typeof StartExportTaskOutput$ === "object");
assert(typeof StartGraphInput$ === "object");
assert(typeof StartGraphOutput$ === "object");
assert(typeof StartImportTaskInput$ === "object");
assert(typeof StartImportTaskOutput$ === "object");
assert(typeof StopGraphInput$ === "object");
assert(typeof StopGraphOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateGraphInput$ === "object");
assert(typeof UpdateGraphOutput$ === "object");
assert(typeof VectorSearchConfiguration$ === "object");
// enums
assert(typeof BlankNodeHandling === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof ExplainMode === "object");
assert(typeof ExportFormat === "object");
assert(typeof ExportTaskStatus === "object");
assert(typeof Format === "object");
assert(typeof GraphStatus === "object");
assert(typeof GraphSummaryMode === "object");
assert(typeof ImportTaskStatus === "object");
assert(typeof MultiValueHandlingType === "object");
assert(typeof ParquetType === "object");
assert(typeof PlanCacheType === "object");
assert(typeof PrivateGraphEndpointStatus === "object");
assert(typeof QueryLanguage === "object");
assert(typeof QueryState === "object");
assert(typeof QueryStateInput === "object");
assert(typeof SnapshotStatus === "object");
assert(typeof UnprocessableExceptionReason === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof NeptuneGraphServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NeptuneGraphServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NeptuneGraphServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NeptuneGraphServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NeptuneGraphServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NeptuneGraphServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnprocessableException.prototype instanceof NeptuneGraphServiceException);
assert(typeof UnprocessableException$ === "object");
assert(ValidationException.prototype instanceof NeptuneGraphServiceException);
assert(typeof ValidationException$ === "object");
assert(NeptuneGraphServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForExportTaskCancelled === "function");
assert(typeof waitForExportTaskSuccessful === "function");
assert(typeof waitForGraphAvailable === "function");
assert(typeof waitForGraphDeleted === "function");
assert(typeof waitForGraphSnapshotAvailable === "function");
assert(typeof waitForGraphSnapshotDeleted === "function");
assert(typeof waitForGraphStopped === "function");
assert(typeof waitForImportTaskCancelled === "function");
assert(typeof waitForImportTaskSuccessful === "function");
assert(typeof waitForPrivateGraphEndpointAvailable === "function");
assert(typeof waitForPrivateGraphEndpointDeleted === "function");
assert(typeof waitUntilExportTaskCancelled === "function");
assert(typeof waitUntilExportTaskSuccessful === "function");
assert(typeof waitUntilGraphAvailable === "function");
assert(typeof waitUntilGraphDeleted === "function");
assert(typeof waitUntilGraphSnapshotAvailable === "function");
assert(typeof waitUntilGraphSnapshotDeleted === "function");
assert(typeof waitUntilGraphStopped === "function");
assert(typeof waitUntilImportTaskCancelled === "function");
assert(typeof waitUntilImportTaskSuccessful === "function");
assert(typeof waitUntilPrivateGraphEndpointAvailable === "function");
assert(typeof waitUntilPrivateGraphEndpointDeleted === "function");
// paginators
assert(typeof paginateListExportTasks === "function");
assert(typeof paginateListGraphSnapshots === "function");
assert(typeof paginateListGraphs === "function");
assert(typeof paginateListImportTasks === "function");
assert(typeof paginateListPrivateGraphEndpoints === "function");
console.log(`NeptuneGraph index test passed.`);
