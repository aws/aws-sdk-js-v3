import {
  AccessDeniedErrorCode,
  AccessDeniedException,
  AddAttributesToFindingsCommand,
  AgentHealth,
  AgentHealthCode,
  AgentsAlreadyRunningAssessmentException,
  AssessmentRunInProgressException,
  AssessmentRunNotificationSnsStatusCode,
  AssessmentRunState,
  AssetType,
  CreateAssessmentTargetCommand,
  CreateAssessmentTemplateCommand,
  CreateExclusionsPreviewCommand,
  CreateResourceGroupCommand,
  DeleteAssessmentRunCommand,
  DeleteAssessmentTargetCommand,
  DeleteAssessmentTemplateCommand,
  DescribeAssessmentRunsCommand,
  DescribeAssessmentTargetsCommand,
  DescribeAssessmentTemplatesCommand,
  DescribeCrossAccountAccessRoleCommand,
  DescribeExclusionsCommand,
  DescribeFindingsCommand,
  DescribeResourceGroupsCommand,
  DescribeRulesPackagesCommand,
  FailedItemErrorCode,
  GetAssessmentReportCommand,
  GetExclusionsPreviewCommand,
  GetTelemetryMetadataCommand,
  Inspector,
  InspectorClient,
  InspectorEvent,
  InspectorServiceException,
  InternalException,
  InvalidCrossAccountRoleErrorCode,
  InvalidCrossAccountRoleException,
  InvalidInputErrorCode,
  InvalidInputException,
  LimitExceededErrorCode,
  LimitExceededException,
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunsCommand,
  ListAssessmentTargetsCommand,
  ListAssessmentTemplatesCommand,
  ListEventSubscriptionsCommand,
  ListExclusionsCommand,
  ListFindingsCommand,
  ListRulesPackagesCommand,
  ListTagsForResourceCommand,
  Locale,
  NoSuchEntityErrorCode,
  NoSuchEntityException,
  PreviewAgentsCommand,
  PreviewGenerationInProgressException,
  PreviewStatus,
  RegisterCrossAccountAccessRoleCommand,
  RemoveAttributesFromFindingsCommand,
  ReportFileFormat,
  ReportStatus,
  ReportType,
  ScopeType,
  ServiceTemporarilyUnavailableException,
  SetTagsForResourceCommand,
  Severity,
  StartAssessmentRunCommand,
  StopAction,
  StopAssessmentRunCommand,
  SubscribeToEventCommand,
  UnsubscribeFromEventCommand,
  UnsupportedFeatureException,
  UpdateAssessmentTargetCommand,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InspectorClient === "function");
assert(typeof Inspector === "function");
// commands
assert(typeof AddAttributesToFindingsCommand === "function");
assert(typeof CreateAssessmentTargetCommand === "function");
assert(typeof CreateAssessmentTemplateCommand === "function");
assert(typeof CreateExclusionsPreviewCommand === "function");
assert(typeof CreateResourceGroupCommand === "function");
assert(typeof DeleteAssessmentRunCommand === "function");
assert(typeof DeleteAssessmentTargetCommand === "function");
assert(typeof DeleteAssessmentTemplateCommand === "function");
assert(typeof DescribeAssessmentRunsCommand === "function");
assert(typeof DescribeAssessmentTargetsCommand === "function");
assert(typeof DescribeAssessmentTemplatesCommand === "function");
assert(typeof DescribeCrossAccountAccessRoleCommand === "function");
assert(typeof DescribeExclusionsCommand === "function");
assert(typeof DescribeFindingsCommand === "function");
assert(typeof DescribeResourceGroupsCommand === "function");
assert(typeof DescribeRulesPackagesCommand === "function");
assert(typeof GetAssessmentReportCommand === "function");
assert(typeof GetExclusionsPreviewCommand === "function");
assert(typeof GetTelemetryMetadataCommand === "function");
assert(typeof ListAssessmentRunAgentsCommand === "function");
assert(typeof ListAssessmentRunsCommand === "function");
assert(typeof ListAssessmentTargetsCommand === "function");
assert(typeof ListAssessmentTemplatesCommand === "function");
assert(typeof ListEventSubscriptionsCommand === "function");
assert(typeof ListExclusionsCommand === "function");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListRulesPackagesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PreviewAgentsCommand === "function");
assert(typeof RegisterCrossAccountAccessRoleCommand === "function");
assert(typeof RemoveAttributesFromFindingsCommand === "function");
assert(typeof SetTagsForResourceCommand === "function");
assert(typeof StartAssessmentRunCommand === "function");
assert(typeof StopAssessmentRunCommand === "function");
assert(typeof SubscribeToEventCommand === "function");
assert(typeof UnsubscribeFromEventCommand === "function");
assert(typeof UpdateAssessmentTargetCommand === "function");
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
assert(AgentsAlreadyRunningAssessmentException.prototype instanceof InspectorServiceException);
assert(AssessmentRunInProgressException.prototype instanceof InspectorServiceException);
assert(InternalException.prototype instanceof InspectorServiceException);
assert(InvalidCrossAccountRoleException.prototype instanceof InspectorServiceException);
assert(InvalidInputException.prototype instanceof InspectorServiceException);
assert(LimitExceededException.prototype instanceof InspectorServiceException);
assert(NoSuchEntityException.prototype instanceof InspectorServiceException);
assert(PreviewGenerationInProgressException.prototype instanceof InspectorServiceException);
assert(ServiceTemporarilyUnavailableException.prototype instanceof InspectorServiceException);
assert(UnsupportedFeatureException.prototype instanceof InspectorServiceException);
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
