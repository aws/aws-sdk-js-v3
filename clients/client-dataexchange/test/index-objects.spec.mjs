import {
  AcceptDataGrantCommand,
  AcceptanceStateFilterValue,
  AssetType,
  CancelJobCommand,
  Code,
  CreateDataGrantCommand,
  CreateDataSetCommand,
  CreateEventActionCommand,
  CreateJobCommand,
  CreateRevisionCommand,
  DataExchange,
  DataExchangeClient,
  DataExchangeServiceException,
  DataGrantAcceptanceState,
  DatabaseLFTagPolicyPermission,
  DeleteAssetCommand,
  DeleteDataGrantCommand,
  DeleteDataSetCommand,
  DeleteEventActionCommand,
  DeleteRevisionCommand,
  GetAssetCommand,
  GetDataGrantCommand,
  GetDataSetCommand,
  GetEventActionCommand,
  GetJobCommand,
  GetReceivedDataGrantCommand,
  GetRevisionCommand,
  GrantDistributionScope,
  JobErrorLimitName,
  JobErrorResourceTypes,
  LFPermission,
  LFResourceType,
  LakeFormationDataPermissionType,
  ListDataGrantsCommand,
  ListDataSetRevisionsCommand,
  ListDataSetsCommand,
  ListEventActionsCommand,
  ListJobsCommand,
  ListReceivedDataGrantsCommand,
  ListRevisionAssetsCommand,
  ListTagsForResourceCommand,
  NotificationType,
  Origin,
  ProtocolType,
  RevokeRevisionCommand,
  SchemaChangeType,
  SendApiAssetCommand,
  SendDataSetNotificationCommand,
  ServerSideEncryptionTypes,
  StartJobCommand,
  State,
  TableTagPolicyLFPermission,
  TagResourceCommand,
  Type,
  UntagResourceCommand,
  UpdateAssetCommand,
  UpdateDataSetCommand,
  UpdateEventActionCommand,
  UpdateRevisionCommand,
  paginateListDataGrants,
  paginateListDataSetRevisions,
  paginateListDataSets,
  paginateListEventActions,
  paginateListJobs,
  paginateListReceivedDataGrants,
  paginateListRevisionAssets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataExchangeClient === "function")
assert(typeof DataExchange === "function")
// commands
assert(typeof AcceptDataGrantCommand === "function")
assert(typeof CancelJobCommand === "function")
assert(typeof CreateDataGrantCommand === "function")
assert(typeof CreateDataSetCommand === "function")
assert(typeof CreateEventActionCommand === "function")
assert(typeof CreateJobCommand === "function")
assert(typeof CreateRevisionCommand === "function")
assert(typeof DeleteAssetCommand === "function")
assert(typeof DeleteDataGrantCommand === "function")
assert(typeof DeleteDataSetCommand === "function")
assert(typeof DeleteEventActionCommand === "function")
assert(typeof DeleteRevisionCommand === "function")
assert(typeof GetAssetCommand === "function")
assert(typeof GetDataGrantCommand === "function")
assert(typeof GetDataSetCommand === "function")
assert(typeof GetEventActionCommand === "function")
assert(typeof GetJobCommand === "function")
assert(typeof GetReceivedDataGrantCommand === "function")
assert(typeof GetRevisionCommand === "function")
assert(typeof ListDataGrantsCommand === "function")
assert(typeof ListDataSetRevisionsCommand === "function")
assert(typeof ListDataSetsCommand === "function")
assert(typeof ListEventActionsCommand === "function")
assert(typeof ListJobsCommand === "function")
assert(typeof ListReceivedDataGrantsCommand === "function")
assert(typeof ListRevisionAssetsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RevokeRevisionCommand === "function")
assert(typeof SendApiAssetCommand === "function")
assert(typeof SendDataSetNotificationCommand === "function")
assert(typeof StartJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAssetCommand === "function")
assert(typeof UpdateDataSetCommand === "function")
assert(typeof UpdateEventActionCommand === "function")
assert(typeof UpdateRevisionCommand === "function")
// enums
assert(typeof AcceptanceStateFilterValue === "object");
assert(typeof AssetType === "object");
assert(typeof Code === "object");
assert(typeof DatabaseLFTagPolicyPermission === "object");
assert(typeof DataGrantAcceptanceState === "object");
assert(typeof GrantDistributionScope === "object");
assert(typeof JobErrorLimitName === "object");
assert(typeof JobErrorResourceTypes === "object");
assert(typeof LakeFormationDataPermissionType === "object");
assert(typeof LFPermission === "object");
assert(typeof LFResourceType === "object");
assert(typeof NotificationType === "object");
assert(typeof Origin === "object");
assert(typeof ProtocolType === "object");
assert(typeof SchemaChangeType === "object");
assert(typeof ServerSideEncryptionTypes === "object");
assert(typeof State === "object");
assert(typeof TableTagPolicyLFPermission === "object");
assert(typeof Type === "object");
// errors
assert(DataExchangeServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDataGrants === "function")
assert(typeof paginateListDataSetRevisions === "function")
assert(typeof paginateListDataSets === "function")
assert(typeof paginateListEventActions === "function")
assert(typeof paginateListJobs === "function")
assert(typeof paginateListReceivedDataGrants === "function")
assert(typeof paginateListRevisionAssets === "function")
console.log(`DataExchange index test passed.`);
