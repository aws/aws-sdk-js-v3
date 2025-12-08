import {
  AccessDeniedException,
  AssociateResourceCommand,
  BadRequestException,
  BrowserType,
  CanaryRunState,
  CanaryRunStateReasonCode,
  CanaryRunTestResult,
  CanaryState,
  CanaryStateReasonCode,
  ConflictException,
  CreateCanaryCommand,
  CreateGroupCommand,
  DeleteCanaryCommand,
  DeleteGroupCommand,
  DependencyType,
  DescribeCanariesCommand,
  DescribeCanariesLastRunCommand,
  DescribeRuntimeVersionsCommand,
  DisassociateResourceCommand,
  EncryptionMode,
  GetCanaryCommand,
  GetCanaryRunsCommand,
  GetGroupCommand,
  InternalFailureException,
  InternalServerException,
  ListAssociatedGroupsCommand,
  ListGroupResourcesCommand,
  ListGroupsCommand,
  ListTagsForResourceCommand,
  NotFoundException,
  ProvisionedResourceCleanupSetting,
  RequestEntityTooLargeException,
  ResourceNotFoundException,
  ResourceToTag,
  RunType,
  ServiceQuotaExceededException,
  StartCanaryCommand,
  StartCanaryDryRunCommand,
  StopCanaryCommand,
  Synthetics,
  SyntheticsClient,
  SyntheticsServiceException,
  TagResourceCommand,
  TooManyRequestsException,
  UntagResourceCommand,
  UpdateCanaryCommand,
  ValidationException,
  paginateDescribeCanaries,
  paginateDescribeCanariesLastRun,
  paginateDescribeRuntimeVersions,
  paginateGetCanaryRuns,
  paginateListAssociatedGroups,
  paginateListGroupResources,
  paginateListGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SyntheticsClient === "function");
assert(typeof Synthetics === "function");
// commands
assert(typeof AssociateResourceCommand === "function");
assert(typeof CreateCanaryCommand === "function");
assert(typeof CreateGroupCommand === "function");
assert(typeof DeleteCanaryCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DescribeCanariesCommand === "function");
assert(typeof DescribeCanariesLastRunCommand === "function");
assert(typeof DescribeRuntimeVersionsCommand === "function");
assert(typeof DisassociateResourceCommand === "function");
assert(typeof GetCanaryCommand === "function");
assert(typeof GetCanaryRunsCommand === "function");
assert(typeof GetGroupCommand === "function");
assert(typeof ListAssociatedGroupsCommand === "function");
assert(typeof ListGroupResourcesCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartCanaryCommand === "function");
assert(typeof StartCanaryDryRunCommand === "function");
assert(typeof StopCanaryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCanaryCommand === "function");
// enums
assert(typeof BrowserType === "object");
assert(typeof CanaryRunState === "object");
assert(typeof CanaryRunStateReasonCode === "object");
assert(typeof CanaryRunTestResult === "object");
assert(typeof CanaryState === "object");
assert(typeof CanaryStateReasonCode === "object");
assert(typeof DependencyType === "object");
assert(typeof EncryptionMode === "object");
assert(typeof ProvisionedResourceCleanupSetting === "object");
assert(typeof ResourceToTag === "object");
assert(typeof RunType === "object");
// errors
assert(AccessDeniedException.prototype instanceof SyntheticsServiceException);
assert(BadRequestException.prototype instanceof SyntheticsServiceException);
assert(ConflictException.prototype instanceof SyntheticsServiceException);
assert(InternalFailureException.prototype instanceof SyntheticsServiceException);
assert(InternalServerException.prototype instanceof SyntheticsServiceException);
assert(NotFoundException.prototype instanceof SyntheticsServiceException);
assert(RequestEntityTooLargeException.prototype instanceof SyntheticsServiceException);
assert(ResourceNotFoundException.prototype instanceof SyntheticsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SyntheticsServiceException);
assert(TooManyRequestsException.prototype instanceof SyntheticsServiceException);
assert(ValidationException.prototype instanceof SyntheticsServiceException);
assert(SyntheticsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCanaries === "function");
assert(typeof paginateDescribeCanariesLastRun === "function");
assert(typeof paginateDescribeRuntimeVersions === "function");
assert(typeof paginateGetCanaryRuns === "function");
assert(typeof paginateListAssociatedGroups === "function");
assert(typeof paginateListGroupResources === "function");
assert(typeof paginateListGroups === "function");
console.log(`Synthetics index test passed.`);
