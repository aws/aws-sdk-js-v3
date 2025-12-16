import {
  AccessDeniedException,
  AccessDeniedException$,
  Association$,
  ConfigParameter$,
  ConflictException,
  ConflictException$,
  ConvertRecoveryPointToSnapshot$,
  ConvertRecoveryPointToSnapshotCommand,
  ConvertRecoveryPointToSnapshotRequest$,
  ConvertRecoveryPointToSnapshotResponse$,
  CreateCustomDomainAssociation$,
  CreateCustomDomainAssociationCommand,
  CreateCustomDomainAssociationRequest$,
  CreateCustomDomainAssociationResponse$,
  CreateEndpointAccess$,
  CreateEndpointAccessCommand,
  CreateEndpointAccessRequest$,
  CreateEndpointAccessResponse$,
  CreateNamespace$,
  CreateNamespaceCommand,
  CreateNamespaceRequest$,
  CreateNamespaceResponse$,
  CreateReservation$,
  CreateReservationCommand,
  CreateReservationRequest$,
  CreateReservationResponse$,
  CreateScheduledAction$,
  CreateScheduledActionCommand,
  CreateScheduledActionRequest$,
  CreateScheduledActionResponse$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotCopyConfiguration$,
  CreateSnapshotCopyConfigurationCommand,
  CreateSnapshotCopyConfigurationRequest$,
  CreateSnapshotCopyConfigurationResponse$,
  CreateSnapshotRequest$,
  CreateSnapshotResponse$,
  CreateSnapshotScheduleActionParameters$,
  CreateUsageLimit$,
  CreateUsageLimitCommand,
  CreateUsageLimitRequest$,
  CreateUsageLimitResponse$,
  CreateWorkgroup$,
  CreateWorkgroupCommand,
  CreateWorkgroupRequest$,
  CreateWorkgroupResponse$,
  DeleteCustomDomainAssociation$,
  DeleteCustomDomainAssociationCommand,
  DeleteCustomDomainAssociationRequest$,
  DeleteCustomDomainAssociationResponse$,
  DeleteEndpointAccess$,
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessRequest$,
  DeleteEndpointAccessResponse$,
  DeleteNamespace$,
  DeleteNamespaceCommand,
  DeleteNamespaceRequest$,
  DeleteNamespaceResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteScheduledAction$,
  DeleteScheduledActionCommand,
  DeleteScheduledActionRequest$,
  DeleteScheduledActionResponse$,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotCopyConfiguration$,
  DeleteSnapshotCopyConfigurationCommand,
  DeleteSnapshotCopyConfigurationRequest$,
  DeleteSnapshotCopyConfigurationResponse$,
  DeleteSnapshotRequest$,
  DeleteSnapshotResponse$,
  DeleteUsageLimit$,
  DeleteUsageLimitCommand,
  DeleteUsageLimitRequest$,
  DeleteUsageLimitResponse$,
  DeleteWorkgroup$,
  DeleteWorkgroupCommand,
  DeleteWorkgroupRequest$,
  DeleteWorkgroupResponse$,
  DryRunException,
  DryRunException$,
  Endpoint$,
  EndpointAccess$,
  GetCredentials$,
  GetCredentialsCommand,
  GetCredentialsRequest$,
  GetCredentialsResponse$,
  GetCustomDomainAssociation$,
  GetCustomDomainAssociationCommand,
  GetCustomDomainAssociationRequest$,
  GetCustomDomainAssociationResponse$,
  GetEndpointAccess$,
  GetEndpointAccessCommand,
  GetEndpointAccessRequest$,
  GetEndpointAccessResponse$,
  GetIdentityCenterAuthToken$,
  GetIdentityCenterAuthTokenCommand,
  GetIdentityCenterAuthTokenRequest$,
  GetIdentityCenterAuthTokenResponse$,
  GetNamespace$,
  GetNamespaceCommand,
  GetNamespaceRequest$,
  GetNamespaceResponse$,
  GetRecoveryPoint$,
  GetRecoveryPointCommand,
  GetRecoveryPointRequest$,
  GetRecoveryPointResponse$,
  GetReservation$,
  GetReservationCommand,
  GetReservationOffering$,
  GetReservationOfferingCommand,
  GetReservationOfferingRequest$,
  GetReservationOfferingResponse$,
  GetReservationRequest$,
  GetReservationResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetScheduledAction$,
  GetScheduledActionCommand,
  GetScheduledActionRequest$,
  GetScheduledActionResponse$,
  GetSnapshot$,
  GetSnapshotCommand,
  GetSnapshotRequest$,
  GetSnapshotResponse$,
  GetTableRestoreStatus$,
  GetTableRestoreStatusCommand,
  GetTableRestoreStatusRequest$,
  GetTableRestoreStatusResponse$,
  GetTrack$,
  GetTrackCommand,
  GetTrackRequest$,
  GetTrackResponse$,
  GetUsageLimit$,
  GetUsageLimitCommand,
  GetUsageLimitRequest$,
  GetUsageLimitResponse$,
  GetWorkgroup$,
  GetWorkgroupCommand,
  GetWorkgroupRequest$,
  GetWorkgroupResponse$,
  InsufficientCapacityException,
  InsufficientCapacityException$,
  InternalServerException,
  InternalServerException$,
  InvalidPaginationException,
  InvalidPaginationException$,
  Ipv6CidrBlockNotFoundException,
  Ipv6CidrBlockNotFoundException$,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  ListCustomDomainAssociations$,
  ListCustomDomainAssociationsCommand,
  ListCustomDomainAssociationsRequest$,
  ListCustomDomainAssociationsResponse$,
  ListEndpointAccess$,
  ListEndpointAccessCommand,
  ListEndpointAccessRequest$,
  ListEndpointAccessResponse$,
  ListManagedWorkgroups$,
  ListManagedWorkgroupsCommand,
  ListManagedWorkgroupsRequest$,
  ListManagedWorkgroupsResponse$,
  ListNamespaces$,
  ListNamespacesCommand,
  ListNamespacesRequest$,
  ListNamespacesResponse$,
  ListRecoveryPoints$,
  ListRecoveryPointsCommand,
  ListRecoveryPointsRequest$,
  ListRecoveryPointsResponse$,
  ListReservationOfferings$,
  ListReservationOfferingsCommand,
  ListReservationOfferingsRequest$,
  ListReservationOfferingsResponse$,
  ListReservations$,
  ListReservationsCommand,
  ListReservationsRequest$,
  ListReservationsResponse$,
  ListScheduledActions$,
  ListScheduledActionsCommand,
  ListScheduledActionsRequest$,
  ListScheduledActionsResponse$,
  ListSnapshotCopyConfigurations$,
  ListSnapshotCopyConfigurationsCommand,
  ListSnapshotCopyConfigurationsRequest$,
  ListSnapshotCopyConfigurationsResponse$,
  ListSnapshots$,
  ListSnapshotsCommand,
  ListSnapshotsRequest$,
  ListSnapshotsResponse$,
  ListTableRestoreStatus$,
  ListTableRestoreStatusCommand,
  ListTableRestoreStatusRequest$,
  ListTableRestoreStatusResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTracks$,
  ListTracksCommand,
  ListTracksRequest$,
  ListTracksResponse$,
  ListUsageLimits$,
  ListUsageLimitsCommand,
  ListUsageLimitsRequest$,
  ListUsageLimitsResponse$,
  ListWorkgroups$,
  ListWorkgroupsCommand,
  ListWorkgroupsRequest$,
  ListWorkgroupsResponse$,
  LogExport,
  ManagedWorkgroupListItem$,
  ManagedWorkgroupStatus,
  Namespace$,
  NamespaceStatus,
  NetworkInterface$,
  OfferingType,
  PerformanceTarget$,
  PerformanceTargetStatus,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RecoveryPoint$,
  RedshiftServerless,
  RedshiftServerlessClient,
  RedshiftServerlessServiceException,
  Reservation$,
  ReservationOffering$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicy$,
  RestoreFromRecoveryPoint$,
  RestoreFromRecoveryPointCommand,
  RestoreFromRecoveryPointRequest$,
  RestoreFromRecoveryPointResponse$,
  RestoreFromSnapshot$,
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotRequest$,
  RestoreFromSnapshotResponse$,
  RestoreTableFromRecoveryPoint$,
  RestoreTableFromRecoveryPointCommand,
  RestoreTableFromRecoveryPointRequest$,
  RestoreTableFromRecoveryPointResponse$,
  RestoreTableFromSnapshot$,
  RestoreTableFromSnapshotCommand,
  RestoreTableFromSnapshotRequest$,
  RestoreTableFromSnapshotResponse$,
  Schedule$,
  ScheduledActionAssociation$,
  ScheduledActionResponse$,
  ServerlessTrack$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Snapshot$,
  SnapshotCopyConfiguration$,
  SnapshotStatus,
  State,
  TableRestoreStatus$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetAction$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCustomDomainAssociation$,
  UpdateCustomDomainAssociationCommand,
  UpdateCustomDomainAssociationRequest$,
  UpdateCustomDomainAssociationResponse$,
  UpdateEndpointAccess$,
  UpdateEndpointAccessCommand,
  UpdateEndpointAccessRequest$,
  UpdateEndpointAccessResponse$,
  UpdateLakehouseConfiguration$,
  UpdateLakehouseConfigurationCommand,
  UpdateLakehouseConfigurationRequest$,
  UpdateLakehouseConfigurationResponse$,
  UpdateNamespace$,
  UpdateNamespaceCommand,
  UpdateNamespaceRequest$,
  UpdateNamespaceResponse$,
  UpdateScheduledAction$,
  UpdateScheduledActionCommand,
  UpdateScheduledActionRequest$,
  UpdateScheduledActionResponse$,
  UpdateSnapshot$,
  UpdateSnapshotCommand,
  UpdateSnapshotCopyConfiguration$,
  UpdateSnapshotCopyConfigurationCommand,
  UpdateSnapshotCopyConfigurationRequest$,
  UpdateSnapshotCopyConfigurationResponse$,
  UpdateSnapshotRequest$,
  UpdateSnapshotResponse$,
  UpdateTarget$,
  UpdateUsageLimit$,
  UpdateUsageLimitCommand,
  UpdateUsageLimitRequest$,
  UpdateUsageLimitResponse$,
  UpdateWorkgroup$,
  UpdateWorkgroupCommand,
  UpdateWorkgroupRequest$,
  UpdateWorkgroupResponse$,
  UsageLimit$,
  UsageLimitBreachAction,
  UsageLimitPeriod,
  UsageLimitUsageType,
  ValidationException,
  ValidationException$,
  VpcEndpoint$,
  VpcSecurityGroupMembership$,
  Workgroup$,
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
assert(typeof ConvertRecoveryPointToSnapshot$ === "object");
assert(typeof CreateCustomDomainAssociationCommand === "function");
assert(typeof CreateCustomDomainAssociation$ === "object");
assert(typeof CreateEndpointAccessCommand === "function");
assert(typeof CreateEndpointAccess$ === "object");
assert(typeof CreateNamespaceCommand === "function");
assert(typeof CreateNamespace$ === "object");
assert(typeof CreateReservationCommand === "function");
assert(typeof CreateReservation$ === "object");
assert(typeof CreateScheduledActionCommand === "function");
assert(typeof CreateScheduledAction$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateSnapshotCopyConfigurationCommand === "function");
assert(typeof CreateSnapshotCopyConfiguration$ === "object");
assert(typeof CreateUsageLimitCommand === "function");
assert(typeof CreateUsageLimit$ === "object");
assert(typeof CreateWorkgroupCommand === "function");
assert(typeof CreateWorkgroup$ === "object");
assert(typeof DeleteCustomDomainAssociationCommand === "function");
assert(typeof DeleteCustomDomainAssociation$ === "object");
assert(typeof DeleteEndpointAccessCommand === "function");
assert(typeof DeleteEndpointAccess$ === "object");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteNamespace$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteScheduledAction$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteSnapshotCopyConfigurationCommand === "function");
assert(typeof DeleteSnapshotCopyConfiguration$ === "object");
assert(typeof DeleteUsageLimitCommand === "function");
assert(typeof DeleteUsageLimit$ === "object");
assert(typeof DeleteWorkgroupCommand === "function");
assert(typeof DeleteWorkgroup$ === "object");
assert(typeof GetCredentialsCommand === "function");
assert(typeof GetCredentials$ === "object");
assert(typeof GetCustomDomainAssociationCommand === "function");
assert(typeof GetCustomDomainAssociation$ === "object");
assert(typeof GetEndpointAccessCommand === "function");
assert(typeof GetEndpointAccess$ === "object");
assert(typeof GetIdentityCenterAuthTokenCommand === "function");
assert(typeof GetIdentityCenterAuthToken$ === "object");
assert(typeof GetNamespaceCommand === "function");
assert(typeof GetNamespace$ === "object");
assert(typeof GetRecoveryPointCommand === "function");
assert(typeof GetRecoveryPoint$ === "object");
assert(typeof GetReservationCommand === "function");
assert(typeof GetReservation$ === "object");
assert(typeof GetReservationOfferingCommand === "function");
assert(typeof GetReservationOffering$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetScheduledActionCommand === "function");
assert(typeof GetScheduledAction$ === "object");
assert(typeof GetSnapshotCommand === "function");
assert(typeof GetSnapshot$ === "object");
assert(typeof GetTableRestoreStatusCommand === "function");
assert(typeof GetTableRestoreStatus$ === "object");
assert(typeof GetTrackCommand === "function");
assert(typeof GetTrack$ === "object");
assert(typeof GetUsageLimitCommand === "function");
assert(typeof GetUsageLimit$ === "object");
assert(typeof GetWorkgroupCommand === "function");
assert(typeof GetWorkgroup$ === "object");
assert(typeof ListCustomDomainAssociationsCommand === "function");
assert(typeof ListCustomDomainAssociations$ === "object");
assert(typeof ListEndpointAccessCommand === "function");
assert(typeof ListEndpointAccess$ === "object");
assert(typeof ListManagedWorkgroupsCommand === "function");
assert(typeof ListManagedWorkgroups$ === "object");
assert(typeof ListNamespacesCommand === "function");
assert(typeof ListNamespaces$ === "object");
assert(typeof ListRecoveryPointsCommand === "function");
assert(typeof ListRecoveryPoints$ === "object");
assert(typeof ListReservationOfferingsCommand === "function");
assert(typeof ListReservationOfferings$ === "object");
assert(typeof ListReservationsCommand === "function");
assert(typeof ListReservations$ === "object");
assert(typeof ListScheduledActionsCommand === "function");
assert(typeof ListScheduledActions$ === "object");
assert(typeof ListSnapshotCopyConfigurationsCommand === "function");
assert(typeof ListSnapshotCopyConfigurations$ === "object");
assert(typeof ListSnapshotsCommand === "function");
assert(typeof ListSnapshots$ === "object");
assert(typeof ListTableRestoreStatusCommand === "function");
assert(typeof ListTableRestoreStatus$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTracksCommand === "function");
assert(typeof ListTracks$ === "object");
assert(typeof ListUsageLimitsCommand === "function");
assert(typeof ListUsageLimits$ === "object");
assert(typeof ListWorkgroupsCommand === "function");
assert(typeof ListWorkgroups$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RestoreFromRecoveryPointCommand === "function");
assert(typeof RestoreFromRecoveryPoint$ === "object");
assert(typeof RestoreFromSnapshotCommand === "function");
assert(typeof RestoreFromSnapshot$ === "object");
assert(typeof RestoreTableFromRecoveryPointCommand === "function");
assert(typeof RestoreTableFromRecoveryPoint$ === "object");
assert(typeof RestoreTableFromSnapshotCommand === "function");
assert(typeof RestoreTableFromSnapshot$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCustomDomainAssociationCommand === "function");
assert(typeof UpdateCustomDomainAssociation$ === "object");
assert(typeof UpdateEndpointAccessCommand === "function");
assert(typeof UpdateEndpointAccess$ === "object");
assert(typeof UpdateLakehouseConfigurationCommand === "function");
assert(typeof UpdateLakehouseConfiguration$ === "object");
assert(typeof UpdateNamespaceCommand === "function");
assert(typeof UpdateNamespace$ === "object");
assert(typeof UpdateScheduledActionCommand === "function");
assert(typeof UpdateScheduledAction$ === "object");
assert(typeof UpdateSnapshotCommand === "function");
assert(typeof UpdateSnapshot$ === "object");
assert(typeof UpdateSnapshotCopyConfigurationCommand === "function");
assert(typeof UpdateSnapshotCopyConfiguration$ === "object");
assert(typeof UpdateUsageLimitCommand === "function");
assert(typeof UpdateUsageLimit$ === "object");
assert(typeof UpdateWorkgroupCommand === "function");
assert(typeof UpdateWorkgroup$ === "object");
// structural schemas
assert(typeof Association$ === "object");
assert(typeof ConfigParameter$ === "object");
assert(typeof ConvertRecoveryPointToSnapshotRequest$ === "object");
assert(typeof ConvertRecoveryPointToSnapshotResponse$ === "object");
assert(typeof CreateCustomDomainAssociationRequest$ === "object");
assert(typeof CreateCustomDomainAssociationResponse$ === "object");
assert(typeof CreateEndpointAccessRequest$ === "object");
assert(typeof CreateEndpointAccessResponse$ === "object");
assert(typeof CreateNamespaceRequest$ === "object");
assert(typeof CreateNamespaceResponse$ === "object");
assert(typeof CreateReservationRequest$ === "object");
assert(typeof CreateReservationResponse$ === "object");
assert(typeof CreateScheduledActionRequest$ === "object");
assert(typeof CreateScheduledActionResponse$ === "object");
assert(typeof CreateSnapshotCopyConfigurationRequest$ === "object");
assert(typeof CreateSnapshotCopyConfigurationResponse$ === "object");
assert(typeof CreateSnapshotRequest$ === "object");
assert(typeof CreateSnapshotResponse$ === "object");
assert(typeof CreateSnapshotScheduleActionParameters$ === "object");
assert(typeof CreateUsageLimitRequest$ === "object");
assert(typeof CreateUsageLimitResponse$ === "object");
assert(typeof CreateWorkgroupRequest$ === "object");
assert(typeof CreateWorkgroupResponse$ === "object");
assert(typeof DeleteCustomDomainAssociationRequest$ === "object");
assert(typeof DeleteCustomDomainAssociationResponse$ === "object");
assert(typeof DeleteEndpointAccessRequest$ === "object");
assert(typeof DeleteEndpointAccessResponse$ === "object");
assert(typeof DeleteNamespaceRequest$ === "object");
assert(typeof DeleteNamespaceResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteScheduledActionRequest$ === "object");
assert(typeof DeleteScheduledActionResponse$ === "object");
assert(typeof DeleteSnapshotCopyConfigurationRequest$ === "object");
assert(typeof DeleteSnapshotCopyConfigurationResponse$ === "object");
assert(typeof DeleteSnapshotRequest$ === "object");
assert(typeof DeleteSnapshotResponse$ === "object");
assert(typeof DeleteUsageLimitRequest$ === "object");
assert(typeof DeleteUsageLimitResponse$ === "object");
assert(typeof DeleteWorkgroupRequest$ === "object");
assert(typeof DeleteWorkgroupResponse$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointAccess$ === "object");
assert(typeof GetCredentialsRequest$ === "object");
assert(typeof GetCredentialsResponse$ === "object");
assert(typeof GetCustomDomainAssociationRequest$ === "object");
assert(typeof GetCustomDomainAssociationResponse$ === "object");
assert(typeof GetEndpointAccessRequest$ === "object");
assert(typeof GetEndpointAccessResponse$ === "object");
assert(typeof GetIdentityCenterAuthTokenRequest$ === "object");
assert(typeof GetIdentityCenterAuthTokenResponse$ === "object");
assert(typeof GetNamespaceRequest$ === "object");
assert(typeof GetNamespaceResponse$ === "object");
assert(typeof GetRecoveryPointRequest$ === "object");
assert(typeof GetRecoveryPointResponse$ === "object");
assert(typeof GetReservationOfferingRequest$ === "object");
assert(typeof GetReservationOfferingResponse$ === "object");
assert(typeof GetReservationRequest$ === "object");
assert(typeof GetReservationResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetScheduledActionRequest$ === "object");
assert(typeof GetScheduledActionResponse$ === "object");
assert(typeof GetSnapshotRequest$ === "object");
assert(typeof GetSnapshotResponse$ === "object");
assert(typeof GetTableRestoreStatusRequest$ === "object");
assert(typeof GetTableRestoreStatusResponse$ === "object");
assert(typeof GetTrackRequest$ === "object");
assert(typeof GetTrackResponse$ === "object");
assert(typeof GetUsageLimitRequest$ === "object");
assert(typeof GetUsageLimitResponse$ === "object");
assert(typeof GetWorkgroupRequest$ === "object");
assert(typeof GetWorkgroupResponse$ === "object");
assert(typeof ListCustomDomainAssociationsRequest$ === "object");
assert(typeof ListCustomDomainAssociationsResponse$ === "object");
assert(typeof ListEndpointAccessRequest$ === "object");
assert(typeof ListEndpointAccessResponse$ === "object");
assert(typeof ListManagedWorkgroupsRequest$ === "object");
assert(typeof ListManagedWorkgroupsResponse$ === "object");
assert(typeof ListNamespacesRequest$ === "object");
assert(typeof ListNamespacesResponse$ === "object");
assert(typeof ListRecoveryPointsRequest$ === "object");
assert(typeof ListRecoveryPointsResponse$ === "object");
assert(typeof ListReservationOfferingsRequest$ === "object");
assert(typeof ListReservationOfferingsResponse$ === "object");
assert(typeof ListReservationsRequest$ === "object");
assert(typeof ListReservationsResponse$ === "object");
assert(typeof ListScheduledActionsRequest$ === "object");
assert(typeof ListScheduledActionsResponse$ === "object");
assert(typeof ListSnapshotCopyConfigurationsRequest$ === "object");
assert(typeof ListSnapshotCopyConfigurationsResponse$ === "object");
assert(typeof ListSnapshotsRequest$ === "object");
assert(typeof ListSnapshotsResponse$ === "object");
assert(typeof ListTableRestoreStatusRequest$ === "object");
assert(typeof ListTableRestoreStatusResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTracksRequest$ === "object");
assert(typeof ListTracksResponse$ === "object");
assert(typeof ListUsageLimitsRequest$ === "object");
assert(typeof ListUsageLimitsResponse$ === "object");
assert(typeof ListWorkgroupsRequest$ === "object");
assert(typeof ListWorkgroupsResponse$ === "object");
assert(typeof ManagedWorkgroupListItem$ === "object");
assert(typeof Namespace$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof PerformanceTarget$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RecoveryPoint$ === "object");
assert(typeof Reservation$ === "object");
assert(typeof ReservationOffering$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof RestoreFromRecoveryPointRequest$ === "object");
assert(typeof RestoreFromRecoveryPointResponse$ === "object");
assert(typeof RestoreFromSnapshotRequest$ === "object");
assert(typeof RestoreFromSnapshotResponse$ === "object");
assert(typeof RestoreTableFromRecoveryPointRequest$ === "object");
assert(typeof RestoreTableFromRecoveryPointResponse$ === "object");
assert(typeof RestoreTableFromSnapshotRequest$ === "object");
assert(typeof RestoreTableFromSnapshotResponse$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof ScheduledActionAssociation$ === "object");
assert(typeof ScheduledActionResponse$ === "object");
assert(typeof ServerlessTrack$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof SnapshotCopyConfiguration$ === "object");
assert(typeof TableRestoreStatus$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetAction$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCustomDomainAssociationRequest$ === "object");
assert(typeof UpdateCustomDomainAssociationResponse$ === "object");
assert(typeof UpdateEndpointAccessRequest$ === "object");
assert(typeof UpdateEndpointAccessResponse$ === "object");
assert(typeof UpdateLakehouseConfigurationRequest$ === "object");
assert(typeof UpdateLakehouseConfigurationResponse$ === "object");
assert(typeof UpdateNamespaceRequest$ === "object");
assert(typeof UpdateNamespaceResponse$ === "object");
assert(typeof UpdateScheduledActionRequest$ === "object");
assert(typeof UpdateScheduledActionResponse$ === "object");
assert(typeof UpdateSnapshotCopyConfigurationRequest$ === "object");
assert(typeof UpdateSnapshotCopyConfigurationResponse$ === "object");
assert(typeof UpdateSnapshotRequest$ === "object");
assert(typeof UpdateSnapshotResponse$ === "object");
assert(typeof UpdateTarget$ === "object");
assert(typeof UpdateUsageLimitRequest$ === "object");
assert(typeof UpdateUsageLimitResponse$ === "object");
assert(typeof UpdateWorkgroupRequest$ === "object");
assert(typeof UpdateWorkgroupResponse$ === "object");
assert(typeof UsageLimit$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
assert(typeof Workgroup$ === "object");
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
assert(AccessDeniedException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof ConflictException$ === "object");
assert(DryRunException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof DryRunException$ === "object");
assert(InsufficientCapacityException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof InsufficientCapacityException$ === "object");
assert(InternalServerException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidPaginationException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof InvalidPaginationException$ === "object");
assert(Ipv6CidrBlockNotFoundException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof Ipv6CidrBlockNotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof RedshiftServerlessServiceException);
assert(typeof ValidationException$ === "object");
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
