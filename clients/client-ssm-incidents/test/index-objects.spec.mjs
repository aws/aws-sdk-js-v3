import {
  BatchGetIncidentFindingsCommand,
  CreateReplicationSetCommand,
  CreateResponsePlanCommand,
  CreateTimelineEventCommand,
  DeleteIncidentRecordCommand,
  DeleteReplicationSetCommand,
  DeleteResourcePolicyCommand,
  DeleteResponsePlanCommand,
  DeleteTimelineEventCommand,
  GetIncidentRecordCommand,
  GetReplicationSetCommand,
  GetResourcePoliciesCommand,
  GetResponsePlanCommand,
  GetTimelineEventCommand,
  IncidentRecordStatus,
  ItemType,
  ListIncidentFindingsCommand,
  ListIncidentRecordsCommand,
  ListRelatedItemsCommand,
  ListReplicationSetsCommand,
  ListResponsePlansCommand,
  ListTagsForResourceCommand,
  ListTimelineEventsCommand,
  PutResourcePolicyCommand,
  RegionStatus,
  ReplicationSetStatus,
  SSMIncidents,
  SSMIncidentsClient,
  SSMIncidentsServiceException,
  SortOrder,
  SsmTargetAccount,
  StartIncidentCommand,
  TagResourceCommand,
  TimelineEventSort,
  UntagResourceCommand,
  UpdateDeletionProtectionCommand,
  UpdateIncidentRecordCommand,
  UpdateRelatedItemsCommand,
  UpdateReplicationSetCommand,
  UpdateResponsePlanCommand,
  UpdateTimelineEventCommand,
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
assert(typeof CreateReplicationSetCommand === "function");
assert(typeof CreateResponsePlanCommand === "function");
assert(typeof CreateTimelineEventCommand === "function");
assert(typeof DeleteIncidentRecordCommand === "function");
assert(typeof DeleteReplicationSetCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResponsePlanCommand === "function");
assert(typeof DeleteTimelineEventCommand === "function");
assert(typeof GetIncidentRecordCommand === "function");
assert(typeof GetReplicationSetCommand === "function");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResponsePlanCommand === "function");
assert(typeof GetTimelineEventCommand === "function");
assert(typeof ListIncidentFindingsCommand === "function");
assert(typeof ListIncidentRecordsCommand === "function");
assert(typeof ListRelatedItemsCommand === "function");
assert(typeof ListReplicationSetsCommand === "function");
assert(typeof ListResponsePlansCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTimelineEventsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof StartIncidentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDeletionProtectionCommand === "function");
assert(typeof UpdateIncidentRecordCommand === "function");
assert(typeof UpdateRelatedItemsCommand === "function");
assert(typeof UpdateReplicationSetCommand === "function");
assert(typeof UpdateResponsePlanCommand === "function");
assert(typeof UpdateTimelineEventCommand === "function");
// enums
assert(typeof IncidentRecordStatus === "object");
assert(typeof ItemType === "object");
assert(typeof RegionStatus === "object");
assert(typeof ReplicationSetStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof SsmTargetAccount === "object");
assert(typeof TimelineEventSort === "object");
assert(typeof VariableType === "object");
// errors
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
