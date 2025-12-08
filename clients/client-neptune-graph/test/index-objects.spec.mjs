import {
  AccessDeniedException,
  BlankNodeHandling,
  CancelExportTaskCommand,
  CancelImportTaskCommand,
  CancelQueryCommand,
  ConflictException,
  ConflictExceptionReason,
  CreateGraphCommand,
  CreateGraphSnapshotCommand,
  CreateGraphUsingImportTaskCommand,
  CreatePrivateGraphEndpointCommand,
  DeleteGraphCommand,
  DeleteGraphSnapshotCommand,
  DeletePrivateGraphEndpointCommand,
  ExecuteQueryCommand,
  ExplainMode,
  ExportFormat,
  ExportTaskStatus,
  Format,
  GetExportTaskCommand,
  GetGraphCommand,
  GetGraphSnapshotCommand,
  GetGraphSummaryCommand,
  GetImportTaskCommand,
  GetPrivateGraphEndpointCommand,
  GetQueryCommand,
  GraphStatus,
  GraphSummaryMode,
  ImportTaskStatus,
  InternalServerException,
  ListExportTasksCommand,
  ListGraphSnapshotsCommand,
  ListGraphsCommand,
  ListImportTasksCommand,
  ListPrivateGraphEndpointsCommand,
  ListQueriesCommand,
  ListTagsForResourceCommand,
  MultiValueHandlingType,
  NeptuneGraph,
  NeptuneGraphClient,
  NeptuneGraphServiceException,
  ParquetType,
  PlanCacheType,
  PrivateGraphEndpointStatus,
  QueryLanguage,
  QueryState,
  QueryStateInput,
  ResetGraphCommand,
  ResourceNotFoundException,
  RestoreGraphFromSnapshotCommand,
  ServiceQuotaExceededException,
  SnapshotStatus,
  StartExportTaskCommand,
  StartGraphCommand,
  StartImportTaskCommand,
  StopGraphCommand,
  TagResourceCommand,
  ThrottlingException,
  UnprocessableException,
  UnprocessableExceptionReason,
  UntagResourceCommand,
  UpdateGraphCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListExportTasks,
  paginateListGraphSnapshots,
  paginateListGraphs,
  paginateListImportTasks,
  paginateListPrivateGraphEndpoints,
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
assert(typeof CancelImportTaskCommand === "function");
assert(typeof CancelQueryCommand === "function");
assert(typeof CreateGraphCommand === "function");
assert(typeof CreateGraphSnapshotCommand === "function");
assert(typeof CreateGraphUsingImportTaskCommand === "function");
assert(typeof CreatePrivateGraphEndpointCommand === "function");
assert(typeof DeleteGraphCommand === "function");
assert(typeof DeleteGraphSnapshotCommand === "function");
assert(typeof DeletePrivateGraphEndpointCommand === "function");
assert(typeof ExecuteQueryCommand === "function");
assert(typeof GetExportTaskCommand === "function");
assert(typeof GetGraphCommand === "function");
assert(typeof GetGraphSnapshotCommand === "function");
assert(typeof GetGraphSummaryCommand === "function");
assert(typeof GetImportTaskCommand === "function");
assert(typeof GetPrivateGraphEndpointCommand === "function");
assert(typeof GetQueryCommand === "function");
assert(typeof ListExportTasksCommand === "function");
assert(typeof ListGraphsCommand === "function");
assert(typeof ListGraphSnapshotsCommand === "function");
assert(typeof ListImportTasksCommand === "function");
assert(typeof ListPrivateGraphEndpointsCommand === "function");
assert(typeof ListQueriesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ResetGraphCommand === "function");
assert(typeof RestoreGraphFromSnapshotCommand === "function");
assert(typeof StartExportTaskCommand === "function");
assert(typeof StartGraphCommand === "function");
assert(typeof StartImportTaskCommand === "function");
assert(typeof StopGraphCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateGraphCommand === "function");
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
assert(ConflictException.prototype instanceof NeptuneGraphServiceException);
assert(InternalServerException.prototype instanceof NeptuneGraphServiceException);
assert(ResourceNotFoundException.prototype instanceof NeptuneGraphServiceException);
assert(ServiceQuotaExceededException.prototype instanceof NeptuneGraphServiceException);
assert(ThrottlingException.prototype instanceof NeptuneGraphServiceException);
assert(UnprocessableException.prototype instanceof NeptuneGraphServiceException);
assert(ValidationException.prototype instanceof NeptuneGraphServiceException);
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
