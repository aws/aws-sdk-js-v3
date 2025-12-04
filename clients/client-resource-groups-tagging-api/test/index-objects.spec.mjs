import {
  DescribeReportCreationCommand,
  ErrorCode,
  GetComplianceSummaryCommand,
  GetResourcesCommand,
  GetTagKeysCommand,
  GetTagValuesCommand,
  GroupByAttribute,
  ListRequiredTagsCommand,
  ResourceGroupsTaggingAPI,
  ResourceGroupsTaggingAPIClient,
  ResourceGroupsTaggingAPIServiceException,
  StartReportCreationCommand,
  TagResourcesCommand,
  TargetIdType,
  UntagResourcesCommand,
  paginateGetComplianceSummary,
  paginateGetResources,
  paginateGetTagKeys,
  paginateGetTagValues,
  paginateListRequiredTags,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResourceGroupsTaggingAPIClient === "function");
assert(typeof ResourceGroupsTaggingAPI === "function");
// commands
assert(typeof DescribeReportCreationCommand === "function");
assert(typeof GetComplianceSummaryCommand === "function");
assert(typeof GetResourcesCommand === "function");
assert(typeof GetTagKeysCommand === "function");
assert(typeof GetTagValuesCommand === "function");
assert(typeof ListRequiredTagsCommand === "function");
assert(typeof StartReportCreationCommand === "function");
assert(typeof TagResourcesCommand === "function");
assert(typeof UntagResourcesCommand === "function");
// enums
assert(typeof ErrorCode === "object");
assert(typeof GroupByAttribute === "object");
assert(typeof TargetIdType === "object");
// errors
assert(ResourceGroupsTaggingAPIServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetComplianceSummary === "function");
assert(typeof paginateGetResources === "function");
assert(typeof paginateGetTagKeys === "function");
assert(typeof paginateGetTagValues === "function");
assert(typeof paginateListRequiredTags === "function");
console.log(`ResourceGroupsTaggingAPI index test passed.`);
