import {
  BackupSearch,
  BackupSearchClient,
  BackupSearchServiceException,
  ExportJobStatus,
  GetSearchJobCommand,
  GetSearchResultExportJobCommand,
  ListSearchJobBackupsCommand,
  ListSearchJobResultsCommand,
  ListSearchJobsCommand,
  ListSearchResultExportJobsCommand,
  ListTagsForResourceCommand,
  LongConditionOperator,
  ResourceType,
  SearchJobState,
  StartSearchJobCommand,
  StartSearchResultExportJobCommand,
  StopSearchJobCommand,
  StringConditionOperator,
  TagResourceCommand,
  TimeConditionOperator,
  UntagResourceCommand,
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
assert(typeof GetSearchResultExportJobCommand === "function");
assert(typeof ListSearchJobBackupsCommand === "function");
assert(typeof ListSearchJobResultsCommand === "function");
assert(typeof ListSearchJobsCommand === "function");
assert(typeof ListSearchResultExportJobsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartSearchJobCommand === "function");
assert(typeof StartSearchResultExportJobCommand === "function");
assert(typeof StopSearchJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof ExportJobStatus === "object");
assert(typeof LongConditionOperator === "object");
assert(typeof ResourceType === "object");
assert(typeof SearchJobState === "object");
assert(typeof StringConditionOperator === "object");
assert(typeof TimeConditionOperator === "object");
// errors
assert(BackupSearchServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSearchJobBackups === "function");
assert(typeof paginateListSearchJobResults === "function");
assert(typeof paginateListSearchJobs === "function");
assert(typeof paginateListSearchResultExportJobs === "function");
console.log(`BackupSearch index test passed.`);
