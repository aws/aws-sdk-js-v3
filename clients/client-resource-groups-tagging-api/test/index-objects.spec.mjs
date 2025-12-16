import {
  ComplianceDetails$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConstraintViolationException,
  ConstraintViolationException$,
  DescribeReportCreation$,
  DescribeReportCreationCommand,
  DescribeReportCreationInput$,
  DescribeReportCreationOutput$,
  ErrorCode,
  FailureInfo$,
  GetComplianceSummary$,
  GetComplianceSummaryCommand,
  GetComplianceSummaryInput$,
  GetComplianceSummaryOutput$,
  GetResources$,
  GetResourcesCommand,
  GetResourcesInput$,
  GetResourcesOutput$,
  GetTagKeys$,
  GetTagKeysCommand,
  GetTagKeysInput$,
  GetTagKeysOutput$,
  GetTagValues$,
  GetTagValuesCommand,
  GetTagValuesInput$,
  GetTagValuesOutput$,
  GroupByAttribute,
  InternalServiceException,
  InternalServiceException$,
  InvalidParameterException,
  InvalidParameterException$,
  ListRequiredTags$,
  ListRequiredTagsCommand,
  ListRequiredTagsInput$,
  ListRequiredTagsOutput$,
  PaginationTokenExpiredException,
  PaginationTokenExpiredException$,
  RequiredTag$,
  ResourceGroupsTaggingAPI,
  ResourceGroupsTaggingAPIClient,
  ResourceGroupsTaggingAPIServiceException,
  ResourceTagMapping$,
  StartReportCreation$,
  StartReportCreationCommand,
  StartReportCreationInput$,
  StartReportCreationOutput$,
  Summary$,
  Tag$,
  TagFilter$,
  TagResources$,
  TagResourcesCommand,
  TagResourcesInput$,
  TagResourcesOutput$,
  TargetIdType,
  ThrottledException,
  ThrottledException$,
  UntagResources$,
  UntagResourcesCommand,
  UntagResourcesInput$,
  UntagResourcesOutput$,
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
assert(typeof DescribeReportCreation$ === "object");
assert(typeof GetComplianceSummaryCommand === "function");
assert(typeof GetComplianceSummary$ === "object");
assert(typeof GetResourcesCommand === "function");
assert(typeof GetResources$ === "object");
assert(typeof GetTagKeysCommand === "function");
assert(typeof GetTagKeys$ === "object");
assert(typeof GetTagValuesCommand === "function");
assert(typeof GetTagValues$ === "object");
assert(typeof ListRequiredTagsCommand === "function");
assert(typeof ListRequiredTags$ === "object");
assert(typeof StartReportCreationCommand === "function");
assert(typeof StartReportCreation$ === "object");
assert(typeof TagResourcesCommand === "function");
assert(typeof TagResources$ === "object");
assert(typeof UntagResourcesCommand === "function");
assert(typeof UntagResources$ === "object");
// structural schemas
assert(typeof ComplianceDetails$ === "object");
assert(typeof DescribeReportCreationInput$ === "object");
assert(typeof DescribeReportCreationOutput$ === "object");
assert(typeof FailureInfo$ === "object");
assert(typeof GetComplianceSummaryInput$ === "object");
assert(typeof GetComplianceSummaryOutput$ === "object");
assert(typeof GetResourcesInput$ === "object");
assert(typeof GetResourcesOutput$ === "object");
assert(typeof GetTagKeysInput$ === "object");
assert(typeof GetTagKeysOutput$ === "object");
assert(typeof GetTagValuesInput$ === "object");
assert(typeof GetTagValuesOutput$ === "object");
assert(typeof ListRequiredTagsInput$ === "object");
assert(typeof ListRequiredTagsOutput$ === "object");
assert(typeof RequiredTag$ === "object");
assert(typeof ResourceTagMapping$ === "object");
assert(typeof StartReportCreationInput$ === "object");
assert(typeof StartReportCreationOutput$ === "object");
assert(typeof Summary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourcesInput$ === "object");
assert(typeof TagResourcesOutput$ === "object");
assert(typeof UntagResourcesInput$ === "object");
assert(typeof UntagResourcesOutput$ === "object");
// enums
assert(typeof ErrorCode === "object");
assert(typeof GroupByAttribute === "object");
assert(typeof TargetIdType === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConstraintViolationException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof ConstraintViolationException$ === "object");
assert(InternalServiceException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidParameterException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(PaginationTokenExpiredException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof PaginationTokenExpiredException$ === "object");
assert(ThrottledException.prototype instanceof ResourceGroupsTaggingAPIServiceException);
assert(typeof ThrottledException$ === "object");
assert(ResourceGroupsTaggingAPIServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetComplianceSummary === "function");
assert(typeof paginateGetResources === "function");
assert(typeof paginateGetTagKeys === "function");
assert(typeof paginateGetTagValues === "function");
assert(typeof paginateListRequiredTags === "function");
console.log(`ResourceGroupsTaggingAPI index test passed.`);
