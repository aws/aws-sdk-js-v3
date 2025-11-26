import {
  AssociateAccountsCommand,
  AutomationEventFilterName,
  AutomationRuleFilterName,
  ComparisonOperator,
  ComputeOptimizerAutomation,
  ComputeOptimizerAutomationClient,
  ComputeOptimizerAutomationServiceException,
  CreateAutomationRuleCommand,
  DeleteAutomationRuleCommand,
  DisassociateAccountsCommand,
  EnrollmentStatus,
  EventStatus,
  EventType,
  GetAutomationEventCommand,
  GetAutomationRuleCommand,
  GetEnrollmentConfigurationCommand,
  ListAccountsCommand,
  ListAutomationEventStepsCommand,
  ListAutomationEventSummariesCommand,
  ListAutomationEventsCommand,
  ListAutomationRulePreviewCommand,
  ListAutomationRulePreviewSummariesCommand,
  ListAutomationRulesCommand,
  ListRecommendedActionSummariesCommand,
  ListRecommendedActionsCommand,
  ListTagsForResourceCommand,
  OrganizationRuleMode,
  RecommendedActionFilterName,
  RecommendedActionType,
  ResourceType,
  RollbackAutomationEventCommand,
  RuleApplyOrder,
  RuleStatus,
  RuleType,
  SavingsEstimationMode,
  StartAutomationEventCommand,
  StepStatus,
  StepType,
  SummaryDimensionKey,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAutomationRuleCommand,
  UpdateEnrollmentConfigurationCommand,
  paginateListAccounts,
  paginateListAutomationEventSteps,
  paginateListAutomationEventSummaries,
  paginateListAutomationEvents,
  paginateListAutomationRulePreview,
  paginateListAutomationRulePreviewSummaries,
  paginateListAutomationRules,
  paginateListRecommendedActionSummaries,
  paginateListRecommendedActions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComputeOptimizerAutomationClient === "function")
assert(typeof ComputeOptimizerAutomation === "function")
// commands
assert(typeof AssociateAccountsCommand === "function")
assert(typeof CreateAutomationRuleCommand === "function")
assert(typeof DeleteAutomationRuleCommand === "function")
assert(typeof DisassociateAccountsCommand === "function")
assert(typeof GetAutomationEventCommand === "function")
assert(typeof GetAutomationRuleCommand === "function")
assert(typeof GetEnrollmentConfigurationCommand === "function")
assert(typeof ListAccountsCommand === "function")
assert(typeof ListAutomationEventsCommand === "function")
assert(typeof ListAutomationEventStepsCommand === "function")
assert(typeof ListAutomationEventSummariesCommand === "function")
assert(typeof ListAutomationRulePreviewCommand === "function")
assert(typeof ListAutomationRulePreviewSummariesCommand === "function")
assert(typeof ListAutomationRulesCommand === "function")
assert(typeof ListRecommendedActionsCommand === "function")
assert(typeof ListRecommendedActionSummariesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RollbackAutomationEventCommand === "function")
assert(typeof StartAutomationEventCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAutomationRuleCommand === "function")
assert(typeof UpdateEnrollmentConfigurationCommand === "function")
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
assert(ComputeOptimizerAutomationServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAccounts === "function")
assert(typeof paginateListAutomationEventSteps === "function")
assert(typeof paginateListAutomationEventSummaries === "function")
assert(typeof paginateListAutomationEvents === "function")
assert(typeof paginateListAutomationRulePreview === "function")
assert(typeof paginateListAutomationRulePreviewSummaries === "function")
assert(typeof paginateListAutomationRules === "function")
assert(typeof paginateListRecommendedActionSummaries === "function")
assert(typeof paginateListRecommendedActions === "function")
console.log(`ComputeOptimizerAutomation index test passed.`);
