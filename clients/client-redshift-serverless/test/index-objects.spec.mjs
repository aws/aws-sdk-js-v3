import {
  ConvertRecoveryPointToSnapshotCommand,
  CreateCustomDomainAssociationCommand,
  CreateEndpointAccessCommand,
  CreateNamespaceCommand,
  CreateReservationCommand,
  CreateScheduledActionCommand,
  CreateSnapshotCommand,
  CreateSnapshotCopyConfigurationCommand,
  CreateUsageLimitCommand,
  CreateWorkgroupCommand,
  DeleteCustomDomainAssociationCommand,
  DeleteEndpointAccessCommand,
  DeleteNamespaceCommand,
  DeleteResourcePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteSnapshotCommand,
  DeleteSnapshotCopyConfigurationCommand,
  DeleteUsageLimitCommand,
  DeleteWorkgroupCommand,
  GetCredentialsCommand,
  GetCustomDomainAssociationCommand,
  GetEndpointAccessCommand,
  GetNamespaceCommand,
  GetRecoveryPointCommand,
  GetReservationCommand,
  GetReservationOfferingCommand,
  GetResourcePolicyCommand,
  GetScheduledActionCommand,
  GetSnapshotCommand,
  GetTableRestoreStatusCommand,
  GetTrackCommand,
  GetUsageLimitCommand,
  GetWorkgroupCommand,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  ListCustomDomainAssociationsCommand,
  ListEndpointAccessCommand,
  ListManagedWorkgroupsCommand,
  ListNamespacesCommand,
  ListRecoveryPointsCommand,
  ListReservationOfferingsCommand,
  ListReservationsCommand,
  ListScheduledActionsCommand,
  ListSnapshotCopyConfigurationsCommand,
  ListSnapshotsCommand,
  ListTableRestoreStatusCommand,
  ListTagsForResourceCommand,
  ListTracksCommand,
  ListUsageLimitsCommand,
  ListWorkgroupsCommand,
  LogExport,
  ManagedWorkgroupStatus,
  NamespaceStatus,
  OfferingType,
  PerformanceTargetStatus,
  PutResourcePolicyCommand,
  RedshiftServerless,
  RedshiftServerlessClient,
  RedshiftServerlessServiceException,
  RestoreFromRecoveryPointCommand,
  RestoreFromSnapshotCommand,
  RestoreTableFromRecoveryPointCommand,
  RestoreTableFromSnapshotCommand,
  SnapshotStatus,
  State,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCustomDomainAssociationCommand,
  UpdateEndpointAccessCommand,
  UpdateLakehouseConfigurationCommand,
  UpdateNamespaceCommand,
  UpdateScheduledActionCommand,
  UpdateSnapshotCommand,
  UpdateSnapshotCopyConfigurationCommand,
  UpdateUsageLimitCommand,
  UpdateWorkgroupCommand,
  UsageLimitBreachAction,
  UsageLimitPeriod,
  UsageLimitUsageType,
  WorkgroupStatus,
  paginateListCustomDomainAssociations,
  paginateListEndpointAccess,
  paginateListManagedWorkgroups,
  paginateListNamespaces,
  paginateListRecoveryPoints,
  paginateListReservationOfferings,
  paginateListReservations,
  paginateListScheduledActions,
  paginateListSnapshotCopyConfigurations,
  paginateListSnapshots,
  paginateListTableRestoreStatus,
  paginateListTracks,
  paginateListUsageLimits,
  paginateListWorkgroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RedshiftServerlessClient === "function");
assert(typeof RedshiftServerless === "function");
// commands
assert(typeof ConvertRecoveryPointToSnapshotCommand === "function");
assert(typeof CreateCustomDomainAssociationCommand === "function");
assert(typeof CreateEndpointAccessCommand === "function");
assert(typeof CreateNamespaceCommand === "function");
assert(typeof CreateReservationCommand === "function");
assert(typeof CreateScheduledActionCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshotCopyConfigurationCommand === "function");
assert(typeof CreateUsageLimitCommand === "function");
assert(typeof CreateWorkgroupCommand === "function");
assert(typeof DeleteCustomDomainAssociationCommand === "function");
assert(typeof DeleteEndpointAccessCommand === "function");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshotCopyConfigurationCommand === "function");
assert(typeof DeleteUsageLimitCommand === "function");
assert(typeof DeleteWorkgroupCommand === "function");
assert(typeof GetCredentialsCommand === "function");
assert(typeof GetCustomDomainAssociationCommand === "function");
assert(typeof GetEndpointAccessCommand === "function");
assert(typeof GetNamespaceCommand === "function");
assert(typeof GetRecoveryPointCommand === "function");
assert(typeof GetReservationCommand === "function");
assert(typeof GetReservationOfferingCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetScheduledActionCommand === "function");
assert(typeof GetSnapshotCommand === "function");
assert(typeof GetTableRestoreStatusCommand === "function");
assert(typeof GetTrackCommand === "function");
assert(typeof GetUsageLimitCommand === "function");
assert(typeof GetWorkgroupCommand === "function");
assert(typeof ListCustomDomainAssociationsCommand === "function");
assert(typeof ListEndpointAccessCommand === "function");
assert(typeof ListManagedWorkgroupsCommand === "function");
assert(typeof ListNamespacesCommand === "function");
assert(typeof ListRecoveryPointsCommand === "function");
assert(typeof ListReservationOfferingsCommand === "function");
assert(typeof ListReservationsCommand === "function");
assert(typeof ListScheduledActionsCommand === "function");
assert(typeof ListSnapshotCopyConfigurationsCommand === "function");
assert(typeof ListSnapshotsCommand === "function");
assert(typeof ListTableRestoreStatusCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTracksCommand === "function");
assert(typeof ListUsageLimitsCommand === "function");
assert(typeof ListWorkgroupsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RestoreFromRecoveryPointCommand === "function");
assert(typeof RestoreFromSnapshotCommand === "function");
assert(typeof RestoreTableFromRecoveryPointCommand === "function");
assert(typeof RestoreTableFromSnapshotCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCustomDomainAssociationCommand === "function");
assert(typeof UpdateEndpointAccessCommand === "function");
assert(typeof UpdateLakehouseConfigurationCommand === "function");
assert(typeof UpdateNamespaceCommand === "function");
assert(typeof UpdateScheduledActionCommand === "function");
assert(typeof UpdateSnapshotCommand === "function");
assert(typeof UpdateSnapshotCopyConfigurationCommand === "function");
assert(typeof UpdateUsageLimitCommand === "function");
assert(typeof UpdateWorkgroupCommand === "function");
// enums
assert(typeof LakehouseIdcRegistration === "object");
assert(typeof LakehouseRegistration === "object");
assert(typeof LogExport === "object");
assert(typeof ManagedWorkgroupStatus === "object");
assert(typeof NamespaceStatus === "object");
assert(typeof OfferingType === "object");
assert(typeof PerformanceTargetStatus === "object");
assert(typeof SnapshotStatus === "object");
assert(typeof State === "object");
assert(typeof UsageLimitBreachAction === "object");
assert(typeof UsageLimitPeriod === "object");
assert(typeof UsageLimitUsageType === "object");
assert(typeof WorkgroupStatus === "object");
// errors
assert(RedshiftServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCustomDomainAssociations === "function");
assert(typeof paginateListEndpointAccess === "function");
assert(typeof paginateListManagedWorkgroups === "function");
assert(typeof paginateListNamespaces === "function");
assert(typeof paginateListRecoveryPoints === "function");
assert(typeof paginateListReservationOfferings === "function");
assert(typeof paginateListReservations === "function");
assert(typeof paginateListScheduledActions === "function");
assert(typeof paginateListSnapshotCopyConfigurations === "function");
assert(typeof paginateListSnapshots === "function");
assert(typeof paginateListTableRestoreStatus === "function");
assert(typeof paginateListTracks === "function");
assert(typeof paginateListUsageLimits === "function");
assert(typeof paginateListWorkgroups === "function");
console.log(`RedshiftServerless index test passed.`);
