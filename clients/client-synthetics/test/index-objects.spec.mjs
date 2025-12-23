import {
  AccessDeniedException,
  AccessDeniedException$,
  ArtifactConfigInput$,
  ArtifactConfigOutput$,
  AssociateResource$,
  AssociateResourceCommand,
  AssociateResourceRequest$,
  AssociateResourceResponse$,
  BadRequestException,
  BadRequestException$,
  BaseScreenshot$,
  BrowserConfig$,
  BrowserType,
  Canary$,
  CanaryCodeInput$,
  CanaryCodeOutput$,
  CanaryDryRunConfigOutput$,
  CanaryLastRun$,
  CanaryRun$,
  CanaryRunConfigInput$,
  CanaryRunConfigOutput$,
  CanaryRunState,
  CanaryRunStateReasonCode,
  CanaryRunStatus$,
  CanaryRunTestResult,
  CanaryRunTimeline$,
  CanaryScheduleInput$,
  CanaryScheduleOutput$,
  CanaryState,
  CanaryStateReasonCode,
  CanaryStatus$,
  CanaryTimeline$,
  ConflictException,
  ConflictException$,
  CreateCanary$,
  CreateCanaryCommand,
  CreateCanaryRequest$,
  CreateCanaryResponse$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResponse$,
  DeleteCanary$,
  DeleteCanaryCommand,
  DeleteCanaryRequest$,
  DeleteCanaryResponse$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResponse$,
  Dependency$,
  DependencyType,
  DescribeCanaries$,
  DescribeCanariesCommand,
  DescribeCanariesLastRun$,
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunRequest$,
  DescribeCanariesLastRunResponse$,
  DescribeCanariesRequest$,
  DescribeCanariesResponse$,
  DescribeRuntimeVersions$,
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsRequest$,
  DescribeRuntimeVersionsResponse$,
  DisassociateResource$,
  DisassociateResourceCommand,
  DisassociateResourceRequest$,
  DisassociateResourceResponse$,
  DryRunConfigOutput$,
  EncryptionMode,
  EngineConfig$,
  GetCanary$,
  GetCanaryCommand,
  GetCanaryRequest$,
  GetCanaryResponse$,
  GetCanaryRuns$,
  GetCanaryRunsCommand,
  GetCanaryRunsRequest$,
  GetCanaryRunsResponse$,
  GetGroup$,
  GetGroupCommand,
  GetGroupRequest$,
  GetGroupResponse$,
  Group$,
  GroupSummary$,
  InternalFailureException,
  InternalFailureException$,
  InternalServerException,
  InternalServerException$,
  ListAssociatedGroups$,
  ListAssociatedGroupsCommand,
  ListAssociatedGroupsRequest$,
  ListAssociatedGroupsResponse$,
  ListGroupResources$,
  ListGroupResourcesCommand,
  ListGroupResourcesRequest$,
  ListGroupResourcesResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotFoundException,
  NotFoundException$,
  paginateDescribeCanaries,
  paginateDescribeCanariesLastRun,
  paginateDescribeRuntimeVersions,
  paginateGetCanaryRuns,
  paginateListAssociatedGroups,
  paginateListGroupResources,
  paginateListGroups,
  ProvisionedResourceCleanupSetting,
  RequestEntityTooLargeException,
  RequestEntityTooLargeException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceToTag,
  RetryConfigInput$,
  RetryConfigOutput$,
  RuntimeVersion$,
  RunType,
  S3EncryptionConfig$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartCanary$,
  StartCanaryCommand,
  StartCanaryDryRun$,
  StartCanaryDryRunCommand,
  StartCanaryDryRunRequest$,
  StartCanaryDryRunResponse$,
  StartCanaryRequest$,
  StartCanaryResponse$,
  StopCanary$,
  StopCanaryCommand,
  StopCanaryRequest$,
  StopCanaryResponse$,
  Synthetics,
  SyntheticsClient,
  SyntheticsServiceException,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCanary$,
  UpdateCanaryCommand,
  UpdateCanaryRequest$,
  UpdateCanaryResponse$,
  ValidationException,
  ValidationException$,
  VisualReferenceInput$,
  VisualReferenceOutput$,
  VpcConfigInput$,
  VpcConfigOutput$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SyntheticsClient === "function");
assert(typeof Synthetics === "function");
// commands
assert(typeof AssociateResourceCommand === "function");
assert(typeof AssociateResource$ === "object");
assert(typeof CreateCanaryCommand === "function");
assert(typeof CreateCanary$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof DeleteCanaryCommand === "function");
assert(typeof DeleteCanary$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DescribeCanariesCommand === "function");
assert(typeof DescribeCanaries$ === "object");
assert(typeof DescribeCanariesLastRunCommand === "function");
assert(typeof DescribeCanariesLastRun$ === "object");
assert(typeof DescribeRuntimeVersionsCommand === "function");
assert(typeof DescribeRuntimeVersions$ === "object");
assert(typeof DisassociateResourceCommand === "function");
assert(typeof DisassociateResource$ === "object");
assert(typeof GetCanaryCommand === "function");
assert(typeof GetCanary$ === "object");
assert(typeof GetCanaryRunsCommand === "function");
assert(typeof GetCanaryRuns$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof ListAssociatedGroupsCommand === "function");
assert(typeof ListAssociatedGroups$ === "object");
assert(typeof ListGroupResourcesCommand === "function");
assert(typeof ListGroupResources$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartCanaryCommand === "function");
assert(typeof StartCanary$ === "object");
assert(typeof StartCanaryDryRunCommand === "function");
assert(typeof StartCanaryDryRun$ === "object");
assert(typeof StopCanaryCommand === "function");
assert(typeof StopCanary$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCanaryCommand === "function");
assert(typeof UpdateCanary$ === "object");
// structural schemas
assert(typeof ArtifactConfigInput$ === "object");
assert(typeof ArtifactConfigOutput$ === "object");
assert(typeof AssociateResourceRequest$ === "object");
assert(typeof AssociateResourceResponse$ === "object");
assert(typeof BaseScreenshot$ === "object");
assert(typeof BrowserConfig$ === "object");
assert(typeof Canary$ === "object");
assert(typeof CanaryCodeInput$ === "object");
assert(typeof CanaryCodeOutput$ === "object");
assert(typeof CanaryDryRunConfigOutput$ === "object");
assert(typeof CanaryLastRun$ === "object");
assert(typeof CanaryRun$ === "object");
assert(typeof CanaryRunConfigInput$ === "object");
assert(typeof CanaryRunConfigOutput$ === "object");
assert(typeof CanaryRunStatus$ === "object");
assert(typeof CanaryRunTimeline$ === "object");
assert(typeof CanaryScheduleInput$ === "object");
assert(typeof CanaryScheduleOutput$ === "object");
assert(typeof CanaryStatus$ === "object");
assert(typeof CanaryTimeline$ === "object");
assert(typeof CreateCanaryRequest$ === "object");
assert(typeof CreateCanaryResponse$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof DeleteCanaryRequest$ === "object");
assert(typeof DeleteCanaryResponse$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResponse$ === "object");
assert(typeof Dependency$ === "object");
assert(typeof DescribeCanariesLastRunRequest$ === "object");
assert(typeof DescribeCanariesLastRunResponse$ === "object");
assert(typeof DescribeCanariesRequest$ === "object");
assert(typeof DescribeCanariesResponse$ === "object");
assert(typeof DescribeRuntimeVersionsRequest$ === "object");
assert(typeof DescribeRuntimeVersionsResponse$ === "object");
assert(typeof DisassociateResourceRequest$ === "object");
assert(typeof DisassociateResourceResponse$ === "object");
assert(typeof DryRunConfigOutput$ === "object");
assert(typeof EngineConfig$ === "object");
assert(typeof GetCanaryRequest$ === "object");
assert(typeof GetCanaryResponse$ === "object");
assert(typeof GetCanaryRunsRequest$ === "object");
assert(typeof GetCanaryRunsResponse$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupSummary$ === "object");
assert(typeof ListAssociatedGroupsRequest$ === "object");
assert(typeof ListAssociatedGroupsResponse$ === "object");
assert(typeof ListGroupResourcesRequest$ === "object");
assert(typeof ListGroupResourcesResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof RetryConfigInput$ === "object");
assert(typeof RetryConfigOutput$ === "object");
assert(typeof RuntimeVersion$ === "object");
assert(typeof S3EncryptionConfig$ === "object");
assert(typeof StartCanaryDryRunRequest$ === "object");
assert(typeof StartCanaryDryRunResponse$ === "object");
assert(typeof StartCanaryRequest$ === "object");
assert(typeof StartCanaryResponse$ === "object");
assert(typeof StopCanaryRequest$ === "object");
assert(typeof StopCanaryResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCanaryRequest$ === "object");
assert(typeof UpdateCanaryResponse$ === "object");
assert(typeof VisualReferenceInput$ === "object");
assert(typeof VisualReferenceOutput$ === "object");
assert(typeof VpcConfigInput$ === "object");
assert(typeof VpcConfigOutput$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof SyntheticsServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof SyntheticsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalFailureException.prototype instanceof SyntheticsServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InternalServerException.prototype instanceof SyntheticsServiceException);
assert(typeof InternalServerException$ === "object");
assert(NotFoundException.prototype instanceof SyntheticsServiceException);
assert(typeof NotFoundException$ === "object");
assert(RequestEntityTooLargeException.prototype instanceof SyntheticsServiceException);
assert(typeof RequestEntityTooLargeException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SyntheticsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SyntheticsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof SyntheticsServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof SyntheticsServiceException);
assert(typeof ValidationException$ === "object");
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
