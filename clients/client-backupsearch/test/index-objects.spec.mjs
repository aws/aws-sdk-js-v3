import {
  AccessDeniedException,
  AccessDeniedException$,
  BackupCreationTimeFilter$,
  BackupSearch,
  BackupSearchClient,
  BackupSearchServiceException,
  ConflictException,
  ConflictException$,
  CurrentSearchProgress$,
  EBSItemFilter$,
  EBSResultItem$,
  ExportJobStatus,
  ExportJobSummary$,
  ExportSpecification$,
  GetSearchJob$,
  GetSearchJobCommand,
  GetSearchJobInput$,
  GetSearchJobOutput$,
  GetSearchResultExportJob$,
  GetSearchResultExportJobCommand,
  GetSearchResultExportJobInput$,
  GetSearchResultExportJobOutput$,
  InternalServerException,
  InternalServerException$,
  ItemFilters$,
  ListSearchJobBackups$,
  ListSearchJobBackupsCommand,
  ListSearchJobBackupsInput$,
  ListSearchJobBackupsOutput$,
  ListSearchJobResults$,
  ListSearchJobResultsCommand,
  ListSearchJobResultsInput$,
  ListSearchJobResultsOutput$,
  ListSearchJobs$,
  ListSearchJobsCommand,
  ListSearchJobsInput$,
  ListSearchJobsOutput$,
  ListSearchResultExportJobs$,
  ListSearchResultExportJobsCommand,
  ListSearchResultExportJobsInput$,
  ListSearchResultExportJobsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LongCondition$,
  LongConditionOperator,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ResultItem$,
  S3ExportSpecification$,
  S3ItemFilter$,
  S3ResultItem$,
  SearchJobBackupsResult$,
  SearchJobState,
  SearchJobSummary$,
  SearchScope$,
  SearchScopeSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartSearchJob$,
  StartSearchJobCommand,
  StartSearchJobInput$,
  StartSearchJobOutput$,
  StartSearchResultExportJob$,
  StartSearchResultExportJobCommand,
  StartSearchResultExportJobInput$,
  StartSearchResultExportJobOutput$,
  StopSearchJob$,
  StopSearchJobCommand,
  StopSearchJobInput$,
  StopSearchJobOutput$,
  StringCondition$,
  StringConditionOperator,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimeCondition$,
  TimeConditionOperator,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  paginateListSearchJobBackups,
  paginateListSearchJobResults,
  paginateListSearchJobs,
  paginateListSearchResultExportJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BackupSearchClient === "function");
assert(typeof BackupSearch === "function");
// commands
assert(typeof GetSearchJobCommand === "function");
assert(typeof GetSearchJob$ === "object");
assert(typeof GetSearchResultExportJobCommand === "function");
assert(typeof GetSearchResultExportJob$ === "object");
assert(typeof ListSearchJobBackupsCommand === "function");
assert(typeof ListSearchJobBackups$ === "object");
assert(typeof ListSearchJobResultsCommand === "function");
assert(typeof ListSearchJobResults$ === "object");
assert(typeof ListSearchJobsCommand === "function");
assert(typeof ListSearchJobs$ === "object");
assert(typeof ListSearchResultExportJobsCommand === "function");
assert(typeof ListSearchResultExportJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartSearchJobCommand === "function");
assert(typeof StartSearchJob$ === "object");
assert(typeof StartSearchResultExportJobCommand === "function");
assert(typeof StartSearchResultExportJob$ === "object");
assert(typeof StopSearchJobCommand === "function");
assert(typeof StopSearchJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof BackupCreationTimeFilter$ === "object");
assert(typeof CurrentSearchProgress$ === "object");
assert(typeof EBSItemFilter$ === "object");
assert(typeof EBSResultItem$ === "object");
assert(typeof ExportJobSummary$ === "object");
assert(typeof ExportSpecification$ === "object");
assert(typeof GetSearchJobInput$ === "object");
assert(typeof GetSearchJobOutput$ === "object");
assert(typeof GetSearchResultExportJobInput$ === "object");
assert(typeof GetSearchResultExportJobOutput$ === "object");
assert(typeof ItemFilters$ === "object");
assert(typeof ListSearchJobBackupsInput$ === "object");
assert(typeof ListSearchJobBackupsOutput$ === "object");
assert(typeof ListSearchJobResultsInput$ === "object");
assert(typeof ListSearchJobResultsOutput$ === "object");
assert(typeof ListSearchJobsInput$ === "object");
assert(typeof ListSearchJobsOutput$ === "object");
assert(typeof ListSearchResultExportJobsInput$ === "object");
assert(typeof ListSearchResultExportJobsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LongCondition$ === "object");
assert(typeof ResultItem$ === "object");
assert(typeof S3ExportSpecification$ === "object");
assert(typeof S3ItemFilter$ === "object");
assert(typeof S3ResultItem$ === "object");
assert(typeof SearchJobBackupsResult$ === "object");
assert(typeof SearchJobSummary$ === "object");
assert(typeof SearchScope$ === "object");
assert(typeof SearchScopeSummary$ === "object");
assert(typeof StartSearchJobInput$ === "object");
assert(typeof StartSearchJobOutput$ === "object");
assert(typeof StartSearchResultExportJobInput$ === "object");
assert(typeof StartSearchResultExportJobOutput$ === "object");
assert(typeof StopSearchJobInput$ === "object");
assert(typeof StopSearchJobOutput$ === "object");
assert(typeof StringCondition$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeCondition$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof ExportJobStatus === "object");
assert(typeof LongConditionOperator === "object");
assert(typeof ResourceType === "object");
assert(typeof SearchJobState === "object");
assert(typeof StringConditionOperator === "object");
assert(typeof TimeConditionOperator === "object");
// errors
assert(AccessDeniedException.prototype instanceof BackupSearchServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BackupSearchServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BackupSearchServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BackupSearchServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BackupSearchServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BackupSearchServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BackupSearchServiceException);
assert(typeof ValidationException$ === "object");
assert(BackupSearchServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSearchJobBackups === "function");
assert(typeof paginateListSearchJobResults === "function");
assert(typeof paginateListSearchJobs === "function");
assert(typeof paginateListSearchResultExportJobs === "function");
console.log(`BackupSearch index test passed.`);
