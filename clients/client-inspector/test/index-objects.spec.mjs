import {
  AccessDeniedErrorCode,
  AccessDeniedException,
  AccessDeniedException$,
  AddAttributesToFindings$,
  AddAttributesToFindingsCommand,
  AddAttributesToFindingsRequest$,
  AddAttributesToFindingsResponse$,
  AgentAlreadyRunningAssessment$,
  AgentFilter$,
  AgentHealth,
  AgentHealthCode,
  AgentPreview$,
  AgentsAlreadyRunningAssessmentException,
  AgentsAlreadyRunningAssessmentException$,
  AssessmentRun$,
  AssessmentRunAgent$,
  AssessmentRunFilter$,
  AssessmentRunInProgressException,
  AssessmentRunInProgressException$,
  AssessmentRunNotification$,
  AssessmentRunNotificationSnsStatusCode,
  AssessmentRunState,
  AssessmentRunStateChange$,
  AssessmentTarget$,
  AssessmentTargetFilter$,
  AssessmentTemplate$,
  AssessmentTemplateFilter$,
  AssetAttributes$,
  AssetType,
  Attribute$,
  CreateAssessmentTarget$,
  CreateAssessmentTargetCommand,
  CreateAssessmentTargetRequest$,
  CreateAssessmentTargetResponse$,
  CreateAssessmentTemplate$,
  CreateAssessmentTemplateCommand,
  CreateAssessmentTemplateRequest$,
  CreateAssessmentTemplateResponse$,
  CreateExclusionsPreview$,
  CreateExclusionsPreviewCommand,
  CreateExclusionsPreviewRequest$,
  CreateExclusionsPreviewResponse$,
  CreateResourceGroup$,
  CreateResourceGroupCommand,
  CreateResourceGroupRequest$,
  CreateResourceGroupResponse$,
  DeleteAssessmentRun$,
  DeleteAssessmentRunCommand,
  DeleteAssessmentRunRequest$,
  DeleteAssessmentTarget$,
  DeleteAssessmentTargetCommand,
  DeleteAssessmentTargetRequest$,
  DeleteAssessmentTemplate$,
  DeleteAssessmentTemplateCommand,
  DeleteAssessmentTemplateRequest$,
  DescribeAssessmentRuns$,
  DescribeAssessmentRunsCommand,
  DescribeAssessmentRunsRequest$,
  DescribeAssessmentRunsResponse$,
  DescribeAssessmentTargets$,
  DescribeAssessmentTargetsCommand,
  DescribeAssessmentTargetsRequest$,
  DescribeAssessmentTargetsResponse$,
  DescribeAssessmentTemplates$,
  DescribeAssessmentTemplatesCommand,
  DescribeAssessmentTemplatesRequest$,
  DescribeAssessmentTemplatesResponse$,
  DescribeCrossAccountAccessRole$,
  DescribeCrossAccountAccessRoleCommand,
  DescribeCrossAccountAccessRoleResponse$,
  DescribeExclusions$,
  DescribeExclusionsCommand,
  DescribeExclusionsRequest$,
  DescribeExclusionsResponse$,
  DescribeFindings$,
  DescribeFindingsCommand,
  DescribeFindingsRequest$,
  DescribeFindingsResponse$,
  DescribeResourceGroups$,
  DescribeResourceGroupsCommand,
  DescribeResourceGroupsRequest$,
  DescribeResourceGroupsResponse$,
  DescribeRulesPackages$,
  DescribeRulesPackagesCommand,
  DescribeRulesPackagesRequest$,
  DescribeRulesPackagesResponse$,
  DurationRange$,
  EventSubscription$,
  Exclusion$,
  ExclusionPreview$,
  FailedItemDetails$,
  FailedItemErrorCode,
  Finding$,
  FindingFilter$,
  GetAssessmentReport$,
  GetAssessmentReportCommand,
  GetAssessmentReportRequest$,
  GetAssessmentReportResponse$,
  GetExclusionsPreview$,
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewRequest$,
  GetExclusionsPreviewResponse$,
  GetTelemetryMetadata$,
  GetTelemetryMetadataCommand,
  GetTelemetryMetadataRequest$,
  GetTelemetryMetadataResponse$,
  Inspector,
  InspectorClient,
  InspectorEvent,
  InspectorServiceAttributes$,
  InspectorServiceException,
  InternalException,
  InternalException$,
  InvalidCrossAccountRoleErrorCode,
  InvalidCrossAccountRoleException,
  InvalidCrossAccountRoleException$,
  InvalidInputErrorCode,
  InvalidInputException,
  InvalidInputException$,
  LimitExceededErrorCode,
  LimitExceededException,
  LimitExceededException$,
  ListAssessmentRunAgents$,
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunAgentsRequest$,
  ListAssessmentRunAgentsResponse$,
  ListAssessmentRuns$,
  ListAssessmentRunsCommand,
  ListAssessmentRunsRequest$,
  ListAssessmentRunsResponse$,
  ListAssessmentTargets$,
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsRequest$,
  ListAssessmentTargetsResponse$,
  ListAssessmentTemplates$,
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesRequest$,
  ListAssessmentTemplatesResponse$,
  ListEventSubscriptions$,
  ListEventSubscriptionsCommand,
  ListEventSubscriptionsRequest$,
  ListEventSubscriptionsResponse$,
  ListExclusions$,
  ListExclusionsCommand,
  ListExclusionsRequest$,
  ListExclusionsResponse$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsRequest$,
  ListFindingsResponse$,
  ListRulesPackages$,
  ListRulesPackagesCommand,
  ListRulesPackagesRequest$,
  ListRulesPackagesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Locale,
  NetworkInterface$,
  NoSuchEntityErrorCode,
  NoSuchEntityException,
  NoSuchEntityException$,
  paginateGetExclusionsPreview,
  paginateListAssessmentRunAgents,
  paginateListAssessmentRuns,
  paginateListAssessmentTargets,
  paginateListAssessmentTemplates,
  paginateListEventSubscriptions,
  paginateListExclusions,
  paginateListFindings,
  paginateListRulesPackages,
  paginatePreviewAgents,
  PreviewAgents$,
  PreviewAgentsCommand,
  PreviewAgentsRequest$,
  PreviewAgentsResponse$,
  PreviewGenerationInProgressException,
  PreviewGenerationInProgressException$,
  PreviewStatus,
  PrivateIp$,
  RegisterCrossAccountAccessRole$,
  RegisterCrossAccountAccessRoleCommand,
  RegisterCrossAccountAccessRoleRequest$,
  RemoveAttributesFromFindings$,
  RemoveAttributesFromFindingsCommand,
  RemoveAttributesFromFindingsRequest$,
  RemoveAttributesFromFindingsResponse$,
  ReportFileFormat,
  ReportStatus,
  ReportType,
  ResourceGroup$,
  ResourceGroupTag$,
  RulesPackage$,
  Scope$,
  ScopeType,
  SecurityGroup$,
  ServiceTemporarilyUnavailableException,
  ServiceTemporarilyUnavailableException$,
  SetTagsForResource$,
  SetTagsForResourceCommand,
  SetTagsForResourceRequest$,
  Severity,
  StartAssessmentRun$,
  StartAssessmentRunCommand,
  StartAssessmentRunRequest$,
  StartAssessmentRunResponse$,
  StopAction,
  StopAssessmentRun$,
  StopAssessmentRunCommand,
  StopAssessmentRunRequest$,
  SubscribeToEvent$,
  SubscribeToEventCommand,
  SubscribeToEventRequest$,
  Subscription$,
  Tag$,
  TelemetryMetadata$,
  TimestampRange$,
  UnsubscribeFromEvent$,
  UnsubscribeFromEventCommand,
  UnsubscribeFromEventRequest$,
  UnsupportedFeatureException,
  UnsupportedFeatureException$,
  UpdateAssessmentTarget$,
  UpdateAssessmentTargetCommand,
  UpdateAssessmentTargetRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InspectorClient === "function");
assert(typeof Inspector === "function");
// commands
assert(typeof AddAttributesToFindingsCommand === "function");
assert(typeof AddAttributesToFindings$ === "object");
assert(typeof CreateAssessmentTargetCommand === "function");
assert(typeof CreateAssessmentTarget$ === "object");
assert(typeof CreateAssessmentTemplateCommand === "function");
assert(typeof CreateAssessmentTemplate$ === "object");
assert(typeof CreateExclusionsPreviewCommand === "function");
assert(typeof CreateExclusionsPreview$ === "object");
assert(typeof CreateResourceGroupCommand === "function");
assert(typeof CreateResourceGroup$ === "object");
assert(typeof DeleteAssessmentRunCommand === "function");
assert(typeof DeleteAssessmentRun$ === "object");
assert(typeof DeleteAssessmentTargetCommand === "function");
assert(typeof DeleteAssessmentTarget$ === "object");
assert(typeof DeleteAssessmentTemplateCommand === "function");
assert(typeof DeleteAssessmentTemplate$ === "object");
assert(typeof DescribeAssessmentRunsCommand === "function");
assert(typeof DescribeAssessmentRuns$ === "object");
assert(typeof DescribeAssessmentTargetsCommand === "function");
assert(typeof DescribeAssessmentTargets$ === "object");
assert(typeof DescribeAssessmentTemplatesCommand === "function");
assert(typeof DescribeAssessmentTemplates$ === "object");
assert(typeof DescribeCrossAccountAccessRoleCommand === "function");
assert(typeof DescribeCrossAccountAccessRole$ === "object");
assert(typeof DescribeExclusionsCommand === "function");
assert(typeof DescribeExclusions$ === "object");
assert(typeof DescribeFindingsCommand === "function");
assert(typeof DescribeFindings$ === "object");
assert(typeof DescribeResourceGroupsCommand === "function");
assert(typeof DescribeResourceGroups$ === "object");
assert(typeof DescribeRulesPackagesCommand === "function");
assert(typeof DescribeRulesPackages$ === "object");
assert(typeof GetAssessmentReportCommand === "function");
assert(typeof GetAssessmentReport$ === "object");
assert(typeof GetExclusionsPreviewCommand === "function");
assert(typeof GetExclusionsPreview$ === "object");
assert(typeof GetTelemetryMetadataCommand === "function");
assert(typeof GetTelemetryMetadata$ === "object");
assert(typeof ListAssessmentRunAgentsCommand === "function");
assert(typeof ListAssessmentRunAgents$ === "object");
assert(typeof ListAssessmentRunsCommand === "function");
assert(typeof ListAssessmentRuns$ === "object");
assert(typeof ListAssessmentTargetsCommand === "function");
assert(typeof ListAssessmentTargets$ === "object");
assert(typeof ListAssessmentTemplatesCommand === "function");
assert(typeof ListAssessmentTemplates$ === "object");
assert(typeof ListEventSubscriptionsCommand === "function");
assert(typeof ListEventSubscriptions$ === "object");
assert(typeof ListExclusionsCommand === "function");
assert(typeof ListExclusions$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListRulesPackagesCommand === "function");
assert(typeof ListRulesPackages$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PreviewAgentsCommand === "function");
assert(typeof PreviewAgents$ === "object");
assert(typeof RegisterCrossAccountAccessRoleCommand === "function");
assert(typeof RegisterCrossAccountAccessRole$ === "object");
assert(typeof RemoveAttributesFromFindingsCommand === "function");
assert(typeof RemoveAttributesFromFindings$ === "object");
assert(typeof SetTagsForResourceCommand === "function");
assert(typeof SetTagsForResource$ === "object");
assert(typeof StartAssessmentRunCommand === "function");
assert(typeof StartAssessmentRun$ === "object");
assert(typeof StopAssessmentRunCommand === "function");
assert(typeof StopAssessmentRun$ === "object");
assert(typeof SubscribeToEventCommand === "function");
assert(typeof SubscribeToEvent$ === "object");
assert(typeof UnsubscribeFromEventCommand === "function");
assert(typeof UnsubscribeFromEvent$ === "object");
assert(typeof UpdateAssessmentTargetCommand === "function");
assert(typeof UpdateAssessmentTarget$ === "object");
// structural schemas
assert(typeof AddAttributesToFindingsRequest$ === "object");
assert(typeof AddAttributesToFindingsResponse$ === "object");
assert(typeof AgentAlreadyRunningAssessment$ === "object");
assert(typeof AgentFilter$ === "object");
assert(typeof AgentPreview$ === "object");
assert(typeof AssessmentRun$ === "object");
assert(typeof AssessmentRunAgent$ === "object");
assert(typeof AssessmentRunFilter$ === "object");
assert(typeof AssessmentRunNotification$ === "object");
assert(typeof AssessmentRunStateChange$ === "object");
assert(typeof AssessmentTarget$ === "object");
assert(typeof AssessmentTargetFilter$ === "object");
assert(typeof AssessmentTemplate$ === "object");
assert(typeof AssessmentTemplateFilter$ === "object");
assert(typeof AssetAttributes$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof CreateAssessmentTargetRequest$ === "object");
assert(typeof CreateAssessmentTargetResponse$ === "object");
assert(typeof CreateAssessmentTemplateRequest$ === "object");
assert(typeof CreateAssessmentTemplateResponse$ === "object");
assert(typeof CreateExclusionsPreviewRequest$ === "object");
assert(typeof CreateExclusionsPreviewResponse$ === "object");
assert(typeof CreateResourceGroupRequest$ === "object");
assert(typeof CreateResourceGroupResponse$ === "object");
assert(typeof DeleteAssessmentRunRequest$ === "object");
assert(typeof DeleteAssessmentTargetRequest$ === "object");
assert(typeof DeleteAssessmentTemplateRequest$ === "object");
assert(typeof DescribeAssessmentRunsRequest$ === "object");
assert(typeof DescribeAssessmentRunsResponse$ === "object");
assert(typeof DescribeAssessmentTargetsRequest$ === "object");
assert(typeof DescribeAssessmentTargetsResponse$ === "object");
assert(typeof DescribeAssessmentTemplatesRequest$ === "object");
assert(typeof DescribeAssessmentTemplatesResponse$ === "object");
assert(typeof DescribeCrossAccountAccessRoleResponse$ === "object");
assert(typeof DescribeExclusionsRequest$ === "object");
assert(typeof DescribeExclusionsResponse$ === "object");
assert(typeof DescribeFindingsRequest$ === "object");
assert(typeof DescribeFindingsResponse$ === "object");
assert(typeof DescribeResourceGroupsRequest$ === "object");
assert(typeof DescribeResourceGroupsResponse$ === "object");
assert(typeof DescribeRulesPackagesRequest$ === "object");
assert(typeof DescribeRulesPackagesResponse$ === "object");
assert(typeof DurationRange$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof Exclusion$ === "object");
assert(typeof ExclusionPreview$ === "object");
assert(typeof FailedItemDetails$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingFilter$ === "object");
assert(typeof GetAssessmentReportRequest$ === "object");
assert(typeof GetAssessmentReportResponse$ === "object");
assert(typeof GetExclusionsPreviewRequest$ === "object");
assert(typeof GetExclusionsPreviewResponse$ === "object");
assert(typeof GetTelemetryMetadataRequest$ === "object");
assert(typeof GetTelemetryMetadataResponse$ === "object");
assert(typeof InspectorServiceAttributes$ === "object");
assert(typeof ListAssessmentRunAgentsRequest$ === "object");
assert(typeof ListAssessmentRunAgentsResponse$ === "object");
assert(typeof ListAssessmentRunsRequest$ === "object");
assert(typeof ListAssessmentRunsResponse$ === "object");
assert(typeof ListAssessmentTargetsRequest$ === "object");
assert(typeof ListAssessmentTargetsResponse$ === "object");
assert(typeof ListAssessmentTemplatesRequest$ === "object");
assert(typeof ListAssessmentTemplatesResponse$ === "object");
assert(typeof ListEventSubscriptionsRequest$ === "object");
assert(typeof ListEventSubscriptionsResponse$ === "object");
assert(typeof ListExclusionsRequest$ === "object");
assert(typeof ListExclusionsResponse$ === "object");
assert(typeof ListFindingsRequest$ === "object");
assert(typeof ListFindingsResponse$ === "object");
assert(typeof ListRulesPackagesRequest$ === "object");
assert(typeof ListRulesPackagesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof PreviewAgentsRequest$ === "object");
assert(typeof PreviewAgentsResponse$ === "object");
assert(typeof PrivateIp$ === "object");
assert(typeof RegisterCrossAccountAccessRoleRequest$ === "object");
assert(typeof RemoveAttributesFromFindingsRequest$ === "object");
assert(typeof RemoveAttributesFromFindingsResponse$ === "object");
assert(typeof ResourceGroup$ === "object");
assert(typeof ResourceGroupTag$ === "object");
assert(typeof RulesPackage$ === "object");
assert(typeof Scope$ === "object");
assert(typeof SecurityGroup$ === "object");
assert(typeof SetTagsForResourceRequest$ === "object");
assert(typeof StartAssessmentRunRequest$ === "object");
assert(typeof StartAssessmentRunResponse$ === "object");
assert(typeof StopAssessmentRunRequest$ === "object");
assert(typeof SubscribeToEventRequest$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TelemetryMetadata$ === "object");
assert(typeof TimestampRange$ === "object");
assert(typeof UnsubscribeFromEventRequest$ === "object");
assert(typeof UpdateAssessmentTargetRequest$ === "object");
// enums
assert(typeof AccessDeniedErrorCode === "object");
assert(typeof AgentHealth === "object");
assert(typeof AgentHealthCode === "object");
assert(typeof AssessmentRunNotificationSnsStatusCode === "object");
assert(typeof AssessmentRunState === "object");
assert(typeof AssetType === "object");
assert(typeof FailedItemErrorCode === "object");
assert(typeof InspectorEvent === "object");
assert(typeof InvalidCrossAccountRoleErrorCode === "object");
assert(typeof InvalidInputErrorCode === "object");
assert(typeof LimitExceededErrorCode === "object");
assert(typeof Locale === "object");
assert(typeof NoSuchEntityErrorCode === "object");
assert(typeof PreviewStatus === "object");
assert(typeof ReportFileFormat === "object");
assert(typeof ReportStatus === "object");
assert(typeof ReportType === "object");
assert(typeof ScopeType === "object");
assert(typeof Severity === "object");
assert(typeof StopAction === "object");
// errors
assert(AccessDeniedException.prototype instanceof InspectorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AgentsAlreadyRunningAssessmentException.prototype instanceof InspectorServiceException);
assert(typeof AgentsAlreadyRunningAssessmentException$ === "object");
assert(AssessmentRunInProgressException.prototype instanceof InspectorServiceException);
assert(typeof AssessmentRunInProgressException$ === "object");
assert(InternalException.prototype instanceof InspectorServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidCrossAccountRoleException.prototype instanceof InspectorServiceException);
assert(typeof InvalidCrossAccountRoleException$ === "object");
assert(InvalidInputException.prototype instanceof InspectorServiceException);
assert(typeof InvalidInputException$ === "object");
assert(LimitExceededException.prototype instanceof InspectorServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NoSuchEntityException.prototype instanceof InspectorServiceException);
assert(typeof NoSuchEntityException$ === "object");
assert(PreviewGenerationInProgressException.prototype instanceof InspectorServiceException);
assert(typeof PreviewGenerationInProgressException$ === "object");
assert(ServiceTemporarilyUnavailableException.prototype instanceof InspectorServiceException);
assert(typeof ServiceTemporarilyUnavailableException$ === "object");
assert(UnsupportedFeatureException.prototype instanceof InspectorServiceException);
assert(typeof UnsupportedFeatureException$ === "object");
assert(InspectorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetExclusionsPreview === "function");
assert(typeof paginateListAssessmentRunAgents === "function");
assert(typeof paginateListAssessmentRuns === "function");
assert(typeof paginateListAssessmentTargets === "function");
assert(typeof paginateListAssessmentTemplates === "function");
assert(typeof paginateListEventSubscriptions === "function");
assert(typeof paginateListExclusions === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListRulesPackages === "function");
assert(typeof paginatePreviewAgents === "function");
console.log(`Inspector index test passed.`);
