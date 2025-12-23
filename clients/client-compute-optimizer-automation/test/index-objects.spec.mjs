import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountInfo$,
  AssociateAccounts$,
  AssociateAccountsCommand,
  AssociateAccountsRequest$,
  AssociateAccountsResponse$,
  AutomationEvent$,
  AutomationEventFilter$,
  AutomationEventFilterName,
  AutomationEventStep$,
  AutomationEventSummary$,
  AutomationRule$,
  AutomationRuleFilterName,
  ComparisonOperator,
  ComputeOptimizerAutomation,
  ComputeOptimizerAutomationClient,
  ComputeOptimizerAutomationServiceException,
  CreateAutomationRule$,
  CreateAutomationRuleCommand,
  CreateAutomationRuleRequest$,
  CreateAutomationRuleResponse$,
  Criteria$,
  DeleteAutomationRule$,
  DeleteAutomationRuleCommand,
  DeleteAutomationRuleRequest$,
  DeleteAutomationRuleResponse$,
  DisassociateAccounts$,
  DisassociateAccountsCommand,
  DisassociateAccountsRequest$,
  DisassociateAccountsResponse$,
  DoubleCriteriaCondition$,
  EbsVolume$,
  EbsVolumeConfiguration$,
  EnrollmentStatus,
  EstimatedMonthlySavings$,
  EventStatus,
  EventType,
  Filter$,
  ForbiddenException,
  ForbiddenException$,
  GetAutomationEvent$,
  GetAutomationEventCommand,
  GetAutomationEventRequest$,
  GetAutomationEventResponse$,
  GetAutomationRule$,
  GetAutomationRuleCommand,
  GetAutomationRuleRequest$,
  GetAutomationRuleResponse$,
  GetEnrollmentConfiguration$,
  GetEnrollmentConfigurationCommand,
  GetEnrollmentConfigurationRequest$,
  GetEnrollmentConfigurationResponse$,
  IdempotencyTokenInUseException,
  IdempotencyTokenInUseException$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  IntegerCriteriaCondition$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  ListAccounts$,
  ListAccountsCommand,
  ListAccountsRequest$,
  ListAccountsResponse$,
  ListAutomationEvents$,
  ListAutomationEventsCommand,
  ListAutomationEventsRequest$,
  ListAutomationEventsResponse$,
  ListAutomationEventSteps$,
  ListAutomationEventStepsCommand,
  ListAutomationEventStepsRequest$,
  ListAutomationEventStepsResponse$,
  ListAutomationEventSummaries$,
  ListAutomationEventSummariesCommand,
  ListAutomationEventSummariesRequest$,
  ListAutomationEventSummariesResponse$,
  ListAutomationRulePreview$,
  ListAutomationRulePreviewCommand,
  ListAutomationRulePreviewRequest$,
  ListAutomationRulePreviewResponse$,
  ListAutomationRulePreviewSummaries$,
  ListAutomationRulePreviewSummariesCommand,
  ListAutomationRulePreviewSummariesRequest$,
  ListAutomationRulePreviewSummariesResponse$,
  ListAutomationRules$,
  ListAutomationRulesCommand,
  ListAutomationRulesRequest$,
  ListAutomationRulesResponse$,
  ListRecommendedActions$,
  ListRecommendedActionsCommand,
  ListRecommendedActionsRequest$,
  ListRecommendedActionsResponse$,
  ListRecommendedActionSummaries$,
  ListRecommendedActionSummariesCommand,
  ListRecommendedActionSummariesRequest$,
  ListRecommendedActionSummariesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotManagementAccountException,
  NotManagementAccountException$,
  OptInRequiredException,
  OptInRequiredException$,
  OrganizationConfiguration$,
  OrganizationRuleMode,
  OrganizationScope$,
  paginateListAccounts,
  paginateListAutomationEvents,
  paginateListAutomationEventSteps,
  paginateListAutomationEventSummaries,
  paginateListAutomationRulePreview,
  paginateListAutomationRulePreviewSummaries,
  paginateListAutomationRules,
  paginateListRecommendedActions,
  paginateListRecommendedActionSummaries,
  PreviewResult$,
  PreviewResultSummary$,
  RecommendedAction$,
  RecommendedActionFilter$,
  RecommendedActionFilterName,
  RecommendedActionSummary$,
  RecommendedActionTotal$,
  RecommendedActionType,
  ResourceDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTagsCriteriaCondition$,
  ResourceType,
  RollbackAutomationEvent$,
  RollbackAutomationEventCommand,
  RollbackAutomationEventRequest$,
  RollbackAutomationEventResponse$,
  RuleApplyOrder,
  RulePreviewTotal$,
  RuleStatus,
  RuleType,
  SavingsEstimationMode,
  Schedule$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartAutomationEvent$,
  StartAutomationEventCommand,
  StartAutomationEventRequest$,
  StartAutomationEventResponse$,
  StepStatus,
  StepType,
  StringCriteriaCondition$,
  SummaryDimension$,
  SummaryDimensionKey,
  SummaryTotals$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimePeriod$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAutomationRule$,
  UpdateAutomationRuleCommand,
  UpdateAutomationRuleRequest$,
  UpdateAutomationRuleResponse$,
  UpdateEnrollmentConfiguration$,
  UpdateEnrollmentConfigurationCommand,
  UpdateEnrollmentConfigurationRequest$,
  UpdateEnrollmentConfigurationResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComputeOptimizerAutomationClient === "function");
assert(typeof ComputeOptimizerAutomation === "function");
// commands
assert(typeof AssociateAccountsCommand === "function");
assert(typeof AssociateAccounts$ === "object");
assert(typeof CreateAutomationRuleCommand === "function");
assert(typeof CreateAutomationRule$ === "object");
assert(typeof DeleteAutomationRuleCommand === "function");
assert(typeof DeleteAutomationRule$ === "object");
assert(typeof DisassociateAccountsCommand === "function");
assert(typeof DisassociateAccounts$ === "object");
assert(typeof GetAutomationEventCommand === "function");
assert(typeof GetAutomationEvent$ === "object");
assert(typeof GetAutomationRuleCommand === "function");
assert(typeof GetAutomationRule$ === "object");
assert(typeof GetEnrollmentConfigurationCommand === "function");
assert(typeof GetEnrollmentConfiguration$ === "object");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListAccounts$ === "object");
assert(typeof ListAutomationEventsCommand === "function");
assert(typeof ListAutomationEvents$ === "object");
assert(typeof ListAutomationEventStepsCommand === "function");
assert(typeof ListAutomationEventSteps$ === "object");
assert(typeof ListAutomationEventSummariesCommand === "function");
assert(typeof ListAutomationEventSummaries$ === "object");
assert(typeof ListAutomationRulePreviewCommand === "function");
assert(typeof ListAutomationRulePreview$ === "object");
assert(typeof ListAutomationRulePreviewSummariesCommand === "function");
assert(typeof ListAutomationRulePreviewSummaries$ === "object");
assert(typeof ListAutomationRulesCommand === "function");
assert(typeof ListAutomationRules$ === "object");
assert(typeof ListRecommendedActionsCommand === "function");
assert(typeof ListRecommendedActions$ === "object");
assert(typeof ListRecommendedActionSummariesCommand === "function");
assert(typeof ListRecommendedActionSummaries$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RollbackAutomationEventCommand === "function");
assert(typeof RollbackAutomationEvent$ === "object");
assert(typeof StartAutomationEventCommand === "function");
assert(typeof StartAutomationEvent$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAutomationRuleCommand === "function");
assert(typeof UpdateAutomationRule$ === "object");
assert(typeof UpdateEnrollmentConfigurationCommand === "function");
assert(typeof UpdateEnrollmentConfiguration$ === "object");
// structural schemas
assert(typeof AccountInfo$ === "object");
assert(typeof AssociateAccountsRequest$ === "object");
assert(typeof AssociateAccountsResponse$ === "object");
assert(typeof AutomationEvent$ === "object");
assert(typeof AutomationEventFilter$ === "object");
assert(typeof AutomationEventStep$ === "object");
assert(typeof AutomationEventSummary$ === "object");
assert(typeof AutomationRule$ === "object");
assert(typeof CreateAutomationRuleRequest$ === "object");
assert(typeof CreateAutomationRuleResponse$ === "object");
assert(typeof Criteria$ === "object");
assert(typeof DeleteAutomationRuleRequest$ === "object");
assert(typeof DeleteAutomationRuleResponse$ === "object");
assert(typeof DisassociateAccountsRequest$ === "object");
assert(typeof DisassociateAccountsResponse$ === "object");
assert(typeof DoubleCriteriaCondition$ === "object");
assert(typeof EbsVolume$ === "object");
assert(typeof EbsVolumeConfiguration$ === "object");
assert(typeof EstimatedMonthlySavings$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetAutomationEventRequest$ === "object");
assert(typeof GetAutomationEventResponse$ === "object");
assert(typeof GetAutomationRuleRequest$ === "object");
assert(typeof GetAutomationRuleResponse$ === "object");
assert(typeof GetEnrollmentConfigurationRequest$ === "object");
assert(typeof GetEnrollmentConfigurationResponse$ === "object");
assert(typeof IntegerCriteriaCondition$ === "object");
assert(typeof ListAccountsRequest$ === "object");
assert(typeof ListAccountsResponse$ === "object");
assert(typeof ListAutomationEventsRequest$ === "object");
assert(typeof ListAutomationEventsResponse$ === "object");
assert(typeof ListAutomationEventStepsRequest$ === "object");
assert(typeof ListAutomationEventStepsResponse$ === "object");
assert(typeof ListAutomationEventSummariesRequest$ === "object");
assert(typeof ListAutomationEventSummariesResponse$ === "object");
assert(typeof ListAutomationRulePreviewRequest$ === "object");
assert(typeof ListAutomationRulePreviewResponse$ === "object");
assert(typeof ListAutomationRulePreviewSummariesRequest$ === "object");
assert(typeof ListAutomationRulePreviewSummariesResponse$ === "object");
assert(typeof ListAutomationRulesRequest$ === "object");
assert(typeof ListAutomationRulesResponse$ === "object");
assert(typeof ListRecommendedActionsRequest$ === "object");
assert(typeof ListRecommendedActionsResponse$ === "object");
assert(typeof ListRecommendedActionSummariesRequest$ === "object");
assert(typeof ListRecommendedActionSummariesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OrganizationConfiguration$ === "object");
assert(typeof OrganizationScope$ === "object");
assert(typeof PreviewResult$ === "object");
assert(typeof PreviewResultSummary$ === "object");
assert(typeof RecommendedAction$ === "object");
assert(typeof RecommendedActionFilter$ === "object");
assert(typeof RecommendedActionSummary$ === "object");
assert(typeof RecommendedActionTotal$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceTagsCriteriaCondition$ === "object");
assert(typeof RollbackAutomationEventRequest$ === "object");
assert(typeof RollbackAutomationEventResponse$ === "object");
assert(typeof RulePreviewTotal$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof StartAutomationEventRequest$ === "object");
assert(typeof StartAutomationEventResponse$ === "object");
assert(typeof StringCriteriaCondition$ === "object");
assert(typeof SummaryDimension$ === "object");
assert(typeof SummaryTotals$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAutomationRuleRequest$ === "object");
assert(typeof UpdateAutomationRuleResponse$ === "object");
assert(typeof UpdateEnrollmentConfigurationRequest$ === "object");
assert(typeof UpdateEnrollmentConfigurationResponse$ === "object");
// enums
assert(typeof AutomationEventFilterName === "object");
assert(typeof AutomationRuleFilterName === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof EnrollmentStatus === "object");
assert(typeof EventStatus === "object");
assert(typeof EventType === "object");
assert(typeof OrganizationRuleMode === "object");
assert(typeof RecommendedActionFilterName === "object");
assert(typeof RecommendedActionType === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleApplyOrder === "object");
assert(typeof RuleStatus === "object");
assert(typeof RuleType === "object");
assert(typeof SavingsEstimationMode === "object");
assert(typeof StepStatus === "object");
assert(typeof StepType === "object");
assert(typeof SummaryDimensionKey === "object");
// errors
assert(AccessDeniedException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ForbiddenException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof ForbiddenException$ === "object");
assert(IdempotencyTokenInUseException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof IdempotencyTokenInUseException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InternalServerException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(NotManagementAccountException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof NotManagementAccountException$ === "object");
assert(OptInRequiredException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof OptInRequiredException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof ComputeOptimizerAutomationServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ComputeOptimizerAutomationServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccounts === "function");
assert(typeof paginateListAutomationEventSteps === "function");
assert(typeof paginateListAutomationEventSummaries === "function");
assert(typeof paginateListAutomationEvents === "function");
assert(typeof paginateListAutomationRulePreview === "function");
assert(typeof paginateListAutomationRulePreviewSummaries === "function");
assert(typeof paginateListAutomationRules === "function");
assert(typeof paginateListRecommendedActionSummaries === "function");
assert(typeof paginateListRecommendedActions === "function");
console.log(`ComputeOptimizerAutomation index test passed.`);
