import {
  AcceptReservedNodeExchangeCommand,
  ActionType,
  AddPartnerCommand,
  ApplicationType,
  AquaConfigurationStatus,
  AquaStatus,
  AssociateDataShareConsumerCommand,
  AuthorizationStatus,
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeDataShareCommand,
  AuthorizeEndpointAccessCommand,
  AuthorizeSnapshotAccessCommand,
  BatchDeleteClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsCommand,
  CancelResizeCommand,
  CopyClusterSnapshotCommand,
  CreateAuthenticationProfileCommand,
  CreateClusterCommand,
  CreateClusterParameterGroupCommand,
  CreateClusterSecurityGroupCommand,
  CreateClusterSnapshotCommand,
  CreateClusterSubnetGroupCommand,
  CreateCustomDomainAssociationCommand,
  CreateEndpointAccessCommand,
  CreateEventSubscriptionCommand,
  CreateHsmClientCertificateCommand,
  CreateHsmConfigurationCommand,
  CreateIntegrationCommand,
  CreateRedshiftIdcApplicationCommand,
  CreateScheduledActionCommand,
  CreateSnapshotCopyGrantCommand,
  CreateSnapshotScheduleCommand,
  CreateTagsCommand,
  CreateUsageLimitCommand,
  DataShareStatus,
  DataShareStatusForConsumer,
  DataShareStatusForProducer,
  DataShareType,
  DeauthorizeDataShareCommand,
  DeleteAuthenticationProfileCommand,
  DeleteClusterCommand,
  DeleteClusterParameterGroupCommand,
  DeleteClusterSecurityGroupCommand,
  DeleteClusterSnapshotCommand,
  DeleteClusterSubnetGroupCommand,
  DeleteCustomDomainAssociationCommand,
  DeleteEndpointAccessCommand,
  DeleteEventSubscriptionCommand,
  DeleteHsmClientCertificateCommand,
  DeleteHsmConfigurationCommand,
  DeleteIntegrationCommand,
  DeletePartnerCommand,
  DeleteRedshiftIdcApplicationCommand,
  DeleteResourcePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotScheduleCommand,
  DeleteTagsCommand,
  DeleteUsageLimitCommand,
  DeregisterNamespaceCommand,
  DescribeAccountAttributesCommand,
  DescribeAuthenticationProfilesCommand,
  DescribeClusterDbRevisionsCommand,
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParametersCommand,
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSnapshotsCommand,
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterTracksCommand,
  DescribeClusterVersionsCommand,
  DescribeClustersCommand,
  DescribeCustomDomainAssociationsCommand,
  DescribeDataSharesCommand,
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForProducerCommand,
  DescribeDefaultClusterParametersCommand,
  DescribeEndpointAccessCommand,
  DescribeEndpointAuthorizationCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeHsmClientCertificatesCommand,
  DescribeHsmConfigurationsCommand,
  DescribeInboundIntegrationsCommand,
  DescribeIntegrationsCommand,
  DescribeIntegrationsFilterName,
  DescribeLoggingStatusCommand,
  DescribeNodeConfigurationOptionsCommand,
  DescribeOrderableClusterOptionsCommand,
  DescribePartnersCommand,
  DescribeRedshiftIdcApplicationsCommand,
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodesCommand,
  DescribeResizeCommand,
  DescribeScheduledActionsCommand,
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotSchedulesCommand,
  DescribeStorageCommand,
  DescribeTableRestoreStatusCommand,
  DescribeTagsCommand,
  DescribeUsageLimitsCommand,
  DisableLoggingCommand,
  DisableSnapshotCopyCommand,
  DisassociateDataShareConsumerCommand,
  EnableLoggingCommand,
  EnableSnapshotCopyCommand,
  FailoverPrimaryComputeCommand,
  GetClusterCredentialsCommand,
  GetClusterCredentialsWithIAMCommand,
  GetIdentityCenterAuthTokenCommand,
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeOfferingsCommand,
  GetResourcePolicyCommand,
  ImpactRankingType,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  ListRecommendationsCommand,
  LogDestinationType,
  Mode,
  ModifyAquaConfigurationCommand,
  ModifyAuthenticationProfileCommand,
  ModifyClusterCommand,
  ModifyClusterDbRevisionCommand,
  ModifyClusterIamRolesCommand,
  ModifyClusterMaintenanceCommand,
  ModifyClusterParameterGroupCommand,
  ModifyClusterSnapshotCommand,
  ModifyClusterSnapshotScheduleCommand,
  ModifyClusterSubnetGroupCommand,
  ModifyCustomDomainAssociationCommand,
  ModifyEndpointAccessCommand,
  ModifyEventSubscriptionCommand,
  ModifyIntegrationCommand,
  ModifyLakehouseConfigurationCommand,
  ModifyRedshiftIdcApplicationCommand,
  ModifyScheduledActionCommand,
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotScheduleCommand,
  ModifyUsageLimitCommand,
  NamespaceRegistrationStatus,
  NodeConfigurationOptionsFilterName,
  OperatorType,
  ParameterApplyType,
  PartnerIntegrationStatus,
  PauseClusterCommand,
  PurchaseReservedNodeOfferingCommand,
  PutResourcePolicyCommand,
  RebootClusterCommand,
  RecommendedActionType,
  Redshift,
  RedshiftClient,
  RedshiftServiceException,
  RegisterNamespaceCommand,
  RejectDataShareCommand,
  ReservedNodeExchangeActionType,
  ReservedNodeExchangeStatusType,
  ReservedNodeOfferingType,
  ResetClusterParameterGroupCommand,
  ResizeClusterCommand,
  RestoreFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotCommand,
  ResumeClusterCommand,
  RevokeClusterSecurityGroupIngressCommand,
  RevokeEndpointAccessCommand,
  RevokeSnapshotAccessCommand,
  RotateEncryptionKeyCommand,
  ScheduleState,
  ScheduledActionFilterName,
  ScheduledActionState,
  ScheduledActionTypeValues,
  ServiceAuthorization,
  SnapshotAttributeToSortBy,
  SortByOrder,
  SourceType,
  TableRestoreStatusType,
  UpdatePartnerStatusCommand,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  UsageLimitLimitType,
  UsageLimitPeriod,
  ZeroETLIntegrationStatus,
  paginateDescribeClusterDbRevisions,
  paginateDescribeClusterParameterGroups,
  paginateDescribeClusterParameters,
  paginateDescribeClusterSecurityGroups,
  paginateDescribeClusterSnapshots,
  paginateDescribeClusterSubnetGroups,
  paginateDescribeClusterTracks,
  paginateDescribeClusterVersions,
  paginateDescribeClusters,
  paginateDescribeCustomDomainAssociations,
  paginateDescribeDataShares,
  paginateDescribeDataSharesForConsumer,
  paginateDescribeDataSharesForProducer,
  paginateDescribeDefaultClusterParameters,
  paginateDescribeEndpointAccess,
  paginateDescribeEndpointAuthorization,
  paginateDescribeEventSubscriptions,
  paginateDescribeEvents,
  paginateDescribeHsmClientCertificates,
  paginateDescribeHsmConfigurations,
  paginateDescribeInboundIntegrations,
  paginateDescribeIntegrations,
  paginateDescribeNodeConfigurationOptions,
  paginateDescribeOrderableClusterOptions,
  paginateDescribeRedshiftIdcApplications,
  paginateDescribeReservedNodeExchangeStatus,
  paginateDescribeReservedNodeOfferings,
  paginateDescribeReservedNodes,
  paginateDescribeScheduledActions,
  paginateDescribeSnapshotCopyGrants,
  paginateDescribeSnapshotSchedules,
  paginateDescribeTableRestoreStatus,
  paginateDescribeTags,
  paginateDescribeUsageLimits,
  paginateGetReservedNodeExchangeConfigurationOptions,
  paginateGetReservedNodeExchangeOfferings,
  paginateListRecommendations,
  waitForClusterAvailable,
  waitForClusterDeleted,
  waitForClusterRestored,
  waitForSnapshotAvailable,
  waitUntilClusterAvailable,
  waitUntilClusterDeleted,
  waitUntilClusterRestored,
  waitUntilSnapshotAvailable,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RedshiftClient === "function");
assert(typeof Redshift === "function");
// commands
assert(typeof AcceptReservedNodeExchangeCommand === "function");
assert(typeof AddPartnerCommand === "function");
assert(typeof AssociateDataShareConsumerCommand === "function");
assert(typeof AuthorizeClusterSecurityGroupIngressCommand === "function");
assert(typeof AuthorizeDataShareCommand === "function");
assert(typeof AuthorizeEndpointAccessCommand === "function");
assert(typeof AuthorizeSnapshotAccessCommand === "function");
assert(typeof BatchDeleteClusterSnapshotsCommand === "function");
assert(typeof BatchModifyClusterSnapshotsCommand === "function");
assert(typeof CancelResizeCommand === "function");
assert(typeof CopyClusterSnapshotCommand === "function");
assert(typeof CreateAuthenticationProfileCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateClusterParameterGroupCommand === "function");
assert(typeof CreateClusterSecurityGroupCommand === "function");
assert(typeof CreateClusterSnapshotCommand === "function");
assert(typeof CreateClusterSubnetGroupCommand === "function");
assert(typeof CreateCustomDomainAssociationCommand === "function");
assert(typeof CreateEndpointAccessCommand === "function");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateHsmClientCertificateCommand === "function");
assert(typeof CreateHsmConfigurationCommand === "function");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateRedshiftIdcApplicationCommand === "function");
assert(typeof CreateScheduledActionCommand === "function");
assert(typeof CreateSnapshotCopyGrantCommand === "function");
assert(typeof CreateSnapshotScheduleCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateUsageLimitCommand === "function");
assert(typeof DeauthorizeDataShareCommand === "function");
assert(typeof DeleteAuthenticationProfileCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteClusterParameterGroupCommand === "function");
assert(typeof DeleteClusterSecurityGroupCommand === "function");
assert(typeof DeleteClusterSnapshotCommand === "function");
assert(typeof DeleteClusterSubnetGroupCommand === "function");
assert(typeof DeleteCustomDomainAssociationCommand === "function");
assert(typeof DeleteEndpointAccessCommand === "function");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteHsmClientCertificateCommand === "function");
assert(typeof DeleteHsmConfigurationCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeletePartnerCommand === "function");
assert(typeof DeleteRedshiftIdcApplicationCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteSnapshotCopyGrantCommand === "function");
assert(typeof DeleteSnapshotScheduleCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteUsageLimitCommand === "function");
assert(typeof DeregisterNamespaceCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAuthenticationProfilesCommand === "function");
assert(typeof DescribeClusterDbRevisionsCommand === "function");
assert(typeof DescribeClusterParameterGroupsCommand === "function");
assert(typeof DescribeClusterParametersCommand === "function");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusterSecurityGroupsCommand === "function");
assert(typeof DescribeClusterSnapshotsCommand === "function");
assert(typeof DescribeClusterSubnetGroupsCommand === "function");
assert(typeof DescribeClusterTracksCommand === "function");
assert(typeof DescribeClusterVersionsCommand === "function");
assert(typeof DescribeCustomDomainAssociationsCommand === "function");
assert(typeof DescribeDataSharesCommand === "function");
assert(typeof DescribeDataSharesForConsumerCommand === "function");
assert(typeof DescribeDataSharesForProducerCommand === "function");
assert(typeof DescribeDefaultClusterParametersCommand === "function");
assert(typeof DescribeEndpointAccessCommand === "function");
assert(typeof DescribeEndpointAuthorizationCommand === "function");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeHsmClientCertificatesCommand === "function");
assert(typeof DescribeHsmConfigurationsCommand === "function");
assert(typeof DescribeInboundIntegrationsCommand === "function");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof DescribeLoggingStatusCommand === "function");
assert(typeof DescribeNodeConfigurationOptionsCommand === "function");
assert(typeof DescribeOrderableClusterOptionsCommand === "function");
assert(typeof DescribePartnersCommand === "function");
assert(typeof DescribeRedshiftIdcApplicationsCommand === "function");
assert(typeof DescribeReservedNodeExchangeStatusCommand === "function");
assert(typeof DescribeReservedNodeOfferingsCommand === "function");
assert(typeof DescribeReservedNodesCommand === "function");
assert(typeof DescribeResizeCommand === "function");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof DescribeSnapshotCopyGrantsCommand === "function");
assert(typeof DescribeSnapshotSchedulesCommand === "function");
assert(typeof DescribeStorageCommand === "function");
assert(typeof DescribeTableRestoreStatusCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeUsageLimitsCommand === "function");
assert(typeof DisableLoggingCommand === "function");
assert(typeof DisableSnapshotCopyCommand === "function");
assert(typeof DisassociateDataShareConsumerCommand === "function");
assert(typeof EnableLoggingCommand === "function");
assert(typeof EnableSnapshotCopyCommand === "function");
assert(typeof FailoverPrimaryComputeCommand === "function");
assert(typeof GetClusterCredentialsCommand === "function");
assert(typeof GetClusterCredentialsWithIAMCommand === "function");
assert(typeof GetIdentityCenterAuthTokenCommand === "function");
assert(typeof GetReservedNodeExchangeConfigurationOptionsCommand === "function");
assert(typeof GetReservedNodeExchangeOfferingsCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ModifyAquaConfigurationCommand === "function");
assert(typeof ModifyAuthenticationProfileCommand === "function");
assert(typeof ModifyClusterCommand === "function");
assert(typeof ModifyClusterDbRevisionCommand === "function");
assert(typeof ModifyClusterIamRolesCommand === "function");
assert(typeof ModifyClusterMaintenanceCommand === "function");
assert(typeof ModifyClusterParameterGroupCommand === "function");
assert(typeof ModifyClusterSnapshotCommand === "function");
assert(typeof ModifyClusterSnapshotScheduleCommand === "function");
assert(typeof ModifyClusterSubnetGroupCommand === "function");
assert(typeof ModifyCustomDomainAssociationCommand === "function");
assert(typeof ModifyEndpointAccessCommand === "function");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof ModifyLakehouseConfigurationCommand === "function");
assert(typeof ModifyRedshiftIdcApplicationCommand === "function");
assert(typeof ModifyScheduledActionCommand === "function");
assert(typeof ModifySnapshotCopyRetentionPeriodCommand === "function");
assert(typeof ModifySnapshotScheduleCommand === "function");
assert(typeof ModifyUsageLimitCommand === "function");
assert(typeof PauseClusterCommand === "function");
assert(typeof PurchaseReservedNodeOfferingCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RebootClusterCommand === "function");
assert(typeof RegisterNamespaceCommand === "function");
assert(typeof RejectDataShareCommand === "function");
assert(typeof ResetClusterParameterGroupCommand === "function");
assert(typeof ResizeClusterCommand === "function");
assert(typeof RestoreFromClusterSnapshotCommand === "function");
assert(typeof RestoreTableFromClusterSnapshotCommand === "function");
assert(typeof ResumeClusterCommand === "function");
assert(typeof RevokeClusterSecurityGroupIngressCommand === "function");
assert(typeof RevokeEndpointAccessCommand === "function");
assert(typeof RevokeSnapshotAccessCommand === "function");
assert(typeof RotateEncryptionKeyCommand === "function");
assert(typeof UpdatePartnerStatusCommand === "function");
// enums
assert(typeof ActionType === "object");
assert(typeof ApplicationType === "object");
assert(typeof AquaConfigurationStatus === "object");
assert(typeof AquaStatus === "object");
assert(typeof AuthorizationStatus === "object");
assert(typeof DataShareStatus === "object");
assert(typeof DataShareStatusForConsumer === "object");
assert(typeof DataShareStatusForProducer === "object");
assert(typeof DataShareType === "object");
assert(typeof DescribeIntegrationsFilterName === "object");
assert(typeof ImpactRankingType === "object");
assert(typeof LakehouseIdcRegistration === "object");
assert(typeof LakehouseRegistration === "object");
assert(typeof LogDestinationType === "object");
assert(typeof Mode === "object");
assert(typeof NamespaceRegistrationStatus === "object");
assert(typeof NodeConfigurationOptionsFilterName === "object");
assert(typeof OperatorType === "object");
assert(typeof ParameterApplyType === "object");
assert(typeof PartnerIntegrationStatus === "object");
assert(typeof RecommendedActionType === "object");
assert(typeof ReservedNodeExchangeActionType === "object");
assert(typeof ReservedNodeExchangeStatusType === "object");
assert(typeof ReservedNodeOfferingType === "object");
assert(typeof ScheduledActionFilterName === "object");
assert(typeof ScheduledActionState === "object");
assert(typeof ScheduledActionTypeValues === "object");
assert(typeof ScheduleState === "object");
assert(typeof ServiceAuthorization === "object");
assert(typeof SnapshotAttributeToSortBy === "object");
assert(typeof SortByOrder === "object");
assert(typeof SourceType === "object");
assert(typeof TableRestoreStatusType === "object");
assert(typeof UsageLimitBreachAction === "object");
assert(typeof UsageLimitFeatureType === "object");
assert(typeof UsageLimitLimitType === "object");
assert(typeof UsageLimitPeriod === "object");
assert(typeof ZeroETLIntegrationStatus === "object");
// errors
assert(RedshiftServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForClusterAvailable === "function");
assert(typeof waitForClusterDeleted === "function");
assert(typeof waitForClusterRestored === "function");
assert(typeof waitForSnapshotAvailable === "function");
assert(typeof waitUntilClusterAvailable === "function");
assert(typeof waitUntilClusterDeleted === "function");
assert(typeof waitUntilClusterRestored === "function");
assert(typeof waitUntilSnapshotAvailable === "function");
// paginators
assert(typeof paginateDescribeClusterDbRevisions === "function");
assert(typeof paginateDescribeClusterParameterGroups === "function");
assert(typeof paginateDescribeClusterParameters === "function");
assert(typeof paginateDescribeClusterSecurityGroups === "function");
assert(typeof paginateDescribeClusterSnapshots === "function");
assert(typeof paginateDescribeClusterSubnetGroups === "function");
assert(typeof paginateDescribeClusterTracks === "function");
assert(typeof paginateDescribeClusterVersions === "function");
assert(typeof paginateDescribeClusters === "function");
assert(typeof paginateDescribeCustomDomainAssociations === "function");
assert(typeof paginateDescribeDataShares === "function");
assert(typeof paginateDescribeDataSharesForConsumer === "function");
assert(typeof paginateDescribeDataSharesForProducer === "function");
assert(typeof paginateDescribeDefaultClusterParameters === "function");
assert(typeof paginateDescribeEndpointAccess === "function");
assert(typeof paginateDescribeEndpointAuthorization === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeHsmClientCertificates === "function");
assert(typeof paginateDescribeHsmConfigurations === "function");
assert(typeof paginateDescribeInboundIntegrations === "function");
assert(typeof paginateDescribeIntegrations === "function");
assert(typeof paginateDescribeNodeConfigurationOptions === "function");
assert(typeof paginateDescribeOrderableClusterOptions === "function");
assert(typeof paginateDescribeRedshiftIdcApplications === "function");
assert(typeof paginateDescribeReservedNodeExchangeStatus === "function");
assert(typeof paginateDescribeReservedNodeOfferings === "function");
assert(typeof paginateDescribeReservedNodes === "function");
assert(typeof paginateDescribeScheduledActions === "function");
assert(typeof paginateDescribeSnapshotCopyGrants === "function");
assert(typeof paginateDescribeSnapshotSchedules === "function");
assert(typeof paginateDescribeTableRestoreStatus === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateDescribeUsageLimits === "function");
assert(typeof paginateGetReservedNodeExchangeConfigurationOptions === "function");
assert(typeof paginateGetReservedNodeExchangeOfferings === "function");
assert(typeof paginateListRecommendations === "function");
console.log(`Redshift index test passed.`);
