import {
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  AddRegionAction$,
  AttributeValueList$,
  AutomationExecution$,
  BatchGetIncidentFindings$,
  BatchGetIncidentFindingsCommand,
  BatchGetIncidentFindingsError$,
  BatchGetIncidentFindingsInput$,
  BatchGetIncidentFindingsOutput$,
  ChatChannel$,
  CloudFormationStackUpdate$,
  CodeDeployDeployment$,
  Condition$,
  ConflictException,
  ConflictException$,
  CreateReplicationSet$,
  CreateReplicationSetCommand,
  CreateReplicationSetInput$,
  CreateReplicationSetOutput$,
  CreateResponsePlan$,
  CreateResponsePlanCommand,
  CreateResponsePlanInput$,
  CreateResponsePlanOutput$,
  CreateTimelineEvent$,
  CreateTimelineEventCommand,
  CreateTimelineEventInput$,
  CreateTimelineEventOutput$,
  DeleteIncidentRecord$,
  DeleteIncidentRecordCommand,
  DeleteIncidentRecordInput$,
  DeleteIncidentRecordOutput$,
  DeleteRegionAction$,
  DeleteReplicationSet$,
  DeleteReplicationSetCommand,
  DeleteReplicationSetInput$,
  DeleteReplicationSetOutput$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyInput$,
  DeleteResourcePolicyOutput$,
  DeleteResponsePlan$,
  DeleteResponsePlanCommand,
  DeleteResponsePlanInput$,
  DeleteResponsePlanOutput$,
  DeleteTimelineEvent$,
  DeleteTimelineEventCommand,
  DeleteTimelineEventInput$,
  DeleteTimelineEventOutput$,
  DynamicSsmParameterValue$,
  EmptyChatChannel$,
  EventReference$,
  EventSummary$,
  Filter$,
  Finding$,
  FindingDetails$,
  FindingSummary$,
  GetIncidentRecord$,
  GetIncidentRecordCommand,
  GetIncidentRecordInput$,
  GetIncidentRecordOutput$,
  GetReplicationSet$,
  GetReplicationSetCommand,
  GetReplicationSetInput$,
  GetReplicationSetOutput$,
  GetResourcePolicies$,
  GetResourcePoliciesCommand,
  GetResourcePoliciesInput$,
  GetResourcePoliciesOutput$,
  GetResponsePlan$,
  GetResponsePlanCommand,
  GetResponsePlanInput$,
  GetResponsePlanOutput$,
  GetTimelineEvent$,
  GetTimelineEventCommand,
  GetTimelineEventInput$,
  GetTimelineEventOutput$,
  IncidentRecord$,
  IncidentRecordSource$,
  IncidentRecordStatus,
  IncidentRecordSummary$,
  IncidentTemplate$,
  Integration$,
  InternalServerException,
  InternalServerException$,
  ItemIdentifier$,
  ItemType,
  ItemValue$,
  ListIncidentFindings$,
  ListIncidentFindingsCommand,
  ListIncidentFindingsInput$,
  ListIncidentFindingsOutput$,
  ListIncidentRecords$,
  ListIncidentRecordsCommand,
  ListIncidentRecordsInput$,
  ListIncidentRecordsOutput$,
  ListRelatedItems$,
  ListRelatedItemsCommand,
  ListRelatedItemsInput$,
  ListRelatedItemsOutput$,
  ListReplicationSets$,
  ListReplicationSetsCommand,
  ListReplicationSetsInput$,
  ListReplicationSetsOutput$,
  ListResponsePlans$,
  ListResponsePlansCommand,
  ListResponsePlansInput$,
  ListResponsePlansOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTimelineEvents$,
  ListTimelineEventsCommand,
  ListTimelineEventsInput$,
  ListTimelineEventsOutput$,
  NotificationTargetItem$,
  PagerDutyConfiguration$,
  PagerDutyIncidentConfiguration$,
  PagerDutyIncidentDetail$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyInput$,
  PutResourcePolicyOutput$,
  RegionInfo$,
  RegionMapInputValue$,
  RegionStatus,
  RelatedItem$,
  RelatedItemsUpdate$,
  ReplicationSet$,
  ReplicationSetStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicy$,
  ResourceType,
  ResponsePlanSummary$,
  SSMIncidents,
  SSMIncidentsClient,
  SSMIncidentsServiceException,
  ServiceCode,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  SsmAutomation$,
  SsmTargetAccount,
  StartIncident$,
  StartIncidentCommand,
  StartIncidentInput$,
  StartIncidentOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimelineEvent$,
  TimelineEventSort,
  TriggerDetails$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDeletionProtection$,
  UpdateDeletionProtectionCommand,
  UpdateDeletionProtectionInput$,
  UpdateDeletionProtectionOutput$,
  UpdateIncidentRecord$,
  UpdateIncidentRecordCommand,
  UpdateIncidentRecordInput$,
  UpdateIncidentRecordOutput$,
  UpdateRelatedItems$,
  UpdateRelatedItemsCommand,
  UpdateRelatedItemsInput$,
  UpdateRelatedItemsOutput$,
  UpdateReplicationSet$,
  UpdateReplicationSetAction$,
  UpdateReplicationSetCommand,
  UpdateReplicationSetInput$,
  UpdateReplicationSetOutput$,
  UpdateResponsePlan$,
  UpdateResponsePlanCommand,
  UpdateResponsePlanInput$,
  UpdateResponsePlanOutput$,
  UpdateTimelineEvent$,
  UpdateTimelineEventCommand,
  UpdateTimelineEventInput$,
  UpdateTimelineEventOutput$,
  ValidationException,
  ValidationException$,
  VariableType,
  paginateGetResourcePolicies,
  paginateListIncidentFindings,
  paginateListIncidentRecords,
  paginateListRelatedItems,
  paginateListReplicationSets,
  paginateListResponsePlans,
  paginateListTimelineEvents,
  waitForWaitForReplicationSetActive,
  waitForWaitForReplicationSetDeleted,
  waitUntilWaitForReplicationSetActive,
  waitUntilWaitForReplicationSetDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMIncidentsClient === "function");
assert(typeof SSMIncidents === "function");
// commands
assert(typeof BatchGetIncidentFindingsCommand === "function");
assert(typeof BatchGetIncidentFindings$ === "object");
assert(typeof CreateReplicationSetCommand === "function");
assert(typeof CreateReplicationSet$ === "object");
assert(typeof CreateResponsePlanCommand === "function");
assert(typeof CreateResponsePlan$ === "object");
assert(typeof CreateTimelineEventCommand === "function");
assert(typeof CreateTimelineEvent$ === "object");
assert(typeof DeleteIncidentRecordCommand === "function");
assert(typeof DeleteIncidentRecord$ === "object");
assert(typeof DeleteReplicationSetCommand === "function");
assert(typeof DeleteReplicationSet$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteResponsePlanCommand === "function");
assert(typeof DeleteResponsePlan$ === "object");
assert(typeof DeleteTimelineEventCommand === "function");
assert(typeof DeleteTimelineEvent$ === "object");
assert(typeof GetIncidentRecordCommand === "function");
assert(typeof GetIncidentRecord$ === "object");
assert(typeof GetReplicationSetCommand === "function");
assert(typeof GetReplicationSet$ === "object");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourcePolicies$ === "object");
assert(typeof GetResponsePlanCommand === "function");
assert(typeof GetResponsePlan$ === "object");
assert(typeof GetTimelineEventCommand === "function");
assert(typeof GetTimelineEvent$ === "object");
assert(typeof ListIncidentFindingsCommand === "function");
assert(typeof ListIncidentFindings$ === "object");
assert(typeof ListIncidentRecordsCommand === "function");
assert(typeof ListIncidentRecords$ === "object");
assert(typeof ListRelatedItemsCommand === "function");
assert(typeof ListRelatedItems$ === "object");
assert(typeof ListReplicationSetsCommand === "function");
assert(typeof ListReplicationSets$ === "object");
assert(typeof ListResponsePlansCommand === "function");
assert(typeof ListResponsePlans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTimelineEventsCommand === "function");
assert(typeof ListTimelineEvents$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof StartIncidentCommand === "function");
assert(typeof StartIncident$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeletionProtectionCommand === "function");
assert(typeof UpdateDeletionProtection$ === "object");
assert(typeof UpdateIncidentRecordCommand === "function");
assert(typeof UpdateIncidentRecord$ === "object");
assert(typeof UpdateRelatedItemsCommand === "function");
assert(typeof UpdateRelatedItems$ === "object");
assert(typeof UpdateReplicationSetCommand === "function");
assert(typeof UpdateReplicationSet$ === "object");
assert(typeof UpdateResponsePlanCommand === "function");
assert(typeof UpdateResponsePlan$ === "object");
assert(typeof UpdateTimelineEventCommand === "function");
assert(typeof UpdateTimelineEvent$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof AddRegionAction$ === "object");
assert(typeof AttributeValueList$ === "object");
assert(typeof AutomationExecution$ === "object");
assert(typeof BatchGetIncidentFindingsError$ === "object");
assert(typeof BatchGetIncidentFindingsInput$ === "object");
assert(typeof BatchGetIncidentFindingsOutput$ === "object");
assert(typeof ChatChannel$ === "object");
assert(typeof CloudFormationStackUpdate$ === "object");
assert(typeof CodeDeployDeployment$ === "object");
assert(typeof Condition$ === "object");
assert(typeof CreateReplicationSetInput$ === "object");
assert(typeof CreateReplicationSetOutput$ === "object");
assert(typeof CreateResponsePlanInput$ === "object");
assert(typeof CreateResponsePlanOutput$ === "object");
assert(typeof CreateTimelineEventInput$ === "object");
assert(typeof CreateTimelineEventOutput$ === "object");
assert(typeof DeleteIncidentRecordInput$ === "object");
assert(typeof DeleteIncidentRecordOutput$ === "object");
assert(typeof DeleteRegionAction$ === "object");
assert(typeof DeleteReplicationSetInput$ === "object");
assert(typeof DeleteReplicationSetOutput$ === "object");
assert(typeof DeleteResourcePolicyInput$ === "object");
assert(typeof DeleteResourcePolicyOutput$ === "object");
assert(typeof DeleteResponsePlanInput$ === "object");
assert(typeof DeleteResponsePlanOutput$ === "object");
assert(typeof DeleteTimelineEventInput$ === "object");
assert(typeof DeleteTimelineEventOutput$ === "object");
assert(typeof DynamicSsmParameterValue$ === "object");
assert(typeof EmptyChatChannel$ === "object");
assert(typeof EventReference$ === "object");
assert(typeof EventSummary$ === "object");
assert(typeof Filter$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingDetails$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof GetIncidentRecordInput$ === "object");
assert(typeof GetIncidentRecordOutput$ === "object");
assert(typeof GetReplicationSetInput$ === "object");
assert(typeof GetReplicationSetOutput$ === "object");
assert(typeof GetResourcePoliciesInput$ === "object");
assert(typeof GetResourcePoliciesOutput$ === "object");
assert(typeof GetResponsePlanInput$ === "object");
assert(typeof GetResponsePlanOutput$ === "object");
assert(typeof GetTimelineEventInput$ === "object");
assert(typeof GetTimelineEventOutput$ === "object");
assert(typeof IncidentRecord$ === "object");
assert(typeof IncidentRecordSource$ === "object");
assert(typeof IncidentRecordSummary$ === "object");
assert(typeof IncidentTemplate$ === "object");
assert(typeof Integration$ === "object");
assert(typeof ItemIdentifier$ === "object");
assert(typeof ItemValue$ === "object");
assert(typeof ListIncidentFindingsInput$ === "object");
assert(typeof ListIncidentFindingsOutput$ === "object");
assert(typeof ListIncidentRecordsInput$ === "object");
assert(typeof ListIncidentRecordsOutput$ === "object");
assert(typeof ListRelatedItemsInput$ === "object");
assert(typeof ListRelatedItemsOutput$ === "object");
assert(typeof ListReplicationSetsInput$ === "object");
assert(typeof ListReplicationSetsOutput$ === "object");
assert(typeof ListResponsePlansInput$ === "object");
assert(typeof ListResponsePlansOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTimelineEventsInput$ === "object");
assert(typeof ListTimelineEventsOutput$ === "object");
assert(typeof NotificationTargetItem$ === "object");
assert(typeof PagerDutyConfiguration$ === "object");
assert(typeof PagerDutyIncidentConfiguration$ === "object");
assert(typeof PagerDutyIncidentDetail$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof PutResourcePolicyOutput$ === "object");
assert(typeof RegionInfo$ === "object");
assert(typeof RegionMapInputValue$ === "object");
assert(typeof RelatedItem$ === "object");
assert(typeof RelatedItemsUpdate$ === "object");
assert(typeof ReplicationSet$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof ResponsePlanSummary$ === "object");
assert(typeof SsmAutomation$ === "object");
assert(typeof StartIncidentInput$ === "object");
assert(typeof StartIncidentOutput$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimelineEvent$ === "object");
assert(typeof TriggerDetails$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDeletionProtectionInput$ === "object");
assert(typeof UpdateDeletionProtectionOutput$ === "object");
assert(typeof UpdateIncidentRecordInput$ === "object");
assert(typeof UpdateIncidentRecordOutput$ === "object");
assert(typeof UpdateRelatedItemsInput$ === "object");
assert(typeof UpdateRelatedItemsOutput$ === "object");
assert(typeof UpdateReplicationSetAction$ === "object");
assert(typeof UpdateReplicationSetInput$ === "object");
assert(typeof UpdateReplicationSetOutput$ === "object");
assert(typeof UpdateResponsePlanInput$ === "object");
assert(typeof UpdateResponsePlanOutput$ === "object");
assert(typeof UpdateTimelineEventInput$ === "object");
assert(typeof UpdateTimelineEventOutput$ === "object");
// enums
assert(typeof IncidentRecordStatus === "object");
assert(typeof ItemType === "object");
assert(typeof RegionStatus === "object");
assert(typeof ReplicationSetStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof ServiceCode === "object");
assert(typeof SortOrder === "object");
assert(typeof SsmTargetAccount === "object");
assert(typeof TimelineEventSort === "object");
assert(typeof VariableType === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSMIncidentsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SSMIncidentsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SSMIncidentsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSMIncidentsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SSMIncidentsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SSMIncidentsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SSMIncidentsServiceException);
assert(typeof ValidationException$ === "object");
assert(SSMIncidentsServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForWaitForReplicationSetActive === "function");
assert(typeof waitForWaitForReplicationSetDeleted === "function");
assert(typeof waitUntilWaitForReplicationSetActive === "function");
assert(typeof waitUntilWaitForReplicationSetDeleted === "function");
// paginators
assert(typeof paginateGetResourcePolicies === "function");
assert(typeof paginateListIncidentFindings === "function");
assert(typeof paginateListIncidentRecords === "function");
assert(typeof paginateListRelatedItems === "function");
assert(typeof paginateListReplicationSets === "function");
assert(typeof paginateListResponsePlans === "function");
assert(typeof paginateListTimelineEvents === "function");
console.log(`SSMIncidents index test passed.`);
