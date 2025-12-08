import {
  AcceptReservedNodeExchangeCommand,
  AccessToClusterDeniedFault,
  AccessToSnapshotDeniedFault,
  ActionType,
  AddPartnerCommand,
  ApplicationType,
  AquaConfigurationStatus,
  AquaStatus,
  AssociateDataShareConsumerCommand,
  AuthenticationProfileAlreadyExistsFault,
  AuthenticationProfileNotFoundFault,
  AuthenticationProfileQuotaExceededFault,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault,
  AuthorizationStatus,
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeDataShareCommand,
  AuthorizeEndpointAccessCommand,
  AuthorizeSnapshotAccessCommand,
  BatchDeleteClusterSnapshotsCommand,
  BatchDeleteRequestSizeExceededFault,
  BatchModifyClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsLimitExceededFault,
  BucketNotFoundFault,
  CancelResizeCommand,
  ClusterAlreadyExistsFault,
  ClusterNotFoundFault,
  ClusterOnLatestRevisionFault,
  ClusterParameterGroupAlreadyExistsFault,
  ClusterParameterGroupNotFoundFault,
  ClusterParameterGroupQuotaExceededFault,
  ClusterQuotaExceededFault,
  ClusterSecurityGroupAlreadyExistsFault,
  ClusterSecurityGroupNotFoundFault,
  ClusterSecurityGroupQuotaExceededFault,
  ClusterSnapshotAlreadyExistsFault,
  ClusterSnapshotNotFoundFault,
  ClusterSnapshotQuotaExceededFault,
  ClusterSubnetGroupAlreadyExistsFault,
  ClusterSubnetGroupNotFoundFault,
  ClusterSubnetGroupQuotaExceededFault,
  ClusterSubnetQuotaExceededFault,
  ConflictPolicyUpdateFault,
  CopyClusterSnapshotCommand,
  CopyToRegionDisabledFault,
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
  CustomCnameAssociationFault,
  CustomDomainAssociationNotFoundFault,
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
  DependentServiceAccessDeniedFault,
  DependentServiceRequestThrottlingFault,
  DependentServiceUnavailableFault,
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
  EndpointAlreadyExistsFault,
  EndpointAuthorizationAlreadyExistsFault,
  EndpointAuthorizationNotFoundFault,
  EndpointAuthorizationsPerClusterLimitExceededFault,
  EndpointNotFoundFault,
  EndpointsPerAuthorizationLimitExceededFault,
  EndpointsPerClusterLimitExceededFault,
  EventSubscriptionQuotaExceededFault,
  FailoverPrimaryComputeCommand,
  GetClusterCredentialsCommand,
  GetClusterCredentialsWithIAMCommand,
  GetIdentityCenterAuthTokenCommand,
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeOfferingsCommand,
  GetResourcePolicyCommand,
  HsmClientCertificateAlreadyExistsFault,
  HsmClientCertificateNotFoundFault,
  HsmClientCertificateQuotaExceededFault,
  HsmConfigurationAlreadyExistsFault,
  HsmConfigurationNotFoundFault,
  HsmConfigurationQuotaExceededFault,
  ImpactRankingType,
  InProgressTableRestoreQuotaExceededFault,
  IncompatibleOrderableOptions,
  InsufficientClusterCapacityFault,
  InsufficientS3BucketPolicyFault,
  IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault,
  IntegrationConflictStateFault,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  IntegrationSourceNotFoundFault,
  IntegrationTargetNotFoundFault,
  InvalidAuthenticationProfileRequestFault,
  InvalidAuthorizationStateFault,
  InvalidClusterParameterGroupStateFault,
  InvalidClusterSecurityGroupStateFault,
  InvalidClusterSnapshotScheduleStateFault,
  InvalidClusterSnapshotStateFault,
  InvalidClusterStateFault,
  InvalidClusterSubnetGroupStateFault,
  InvalidClusterSubnetStateFault,
  InvalidClusterTrackFault,
  InvalidDataShareFault,
  InvalidElasticIpFault,
  InvalidEndpointStateFault,
  InvalidHsmClientCertificateStateFault,
  InvalidHsmConfigurationStateFault,
  InvalidNamespaceFault,
  InvalidPolicyFault,
  InvalidReservedNodeStateFault,
  InvalidRestoreFault,
  InvalidRetentionPeriodFault,
  InvalidS3BucketNameFault,
  InvalidS3KeyPrefixFault,
  InvalidScheduleFault,
  InvalidScheduledActionFault,
  InvalidSnapshotCopyGrantStateFault,
  InvalidSubnet,
  InvalidSubscriptionStateFault,
  InvalidTableRestoreArgumentFault,
  InvalidTagFault,
  InvalidUsageLimitFault,
  InvalidVPCNetworkStateFault,
  Ipv6CidrBlockNotFoundFault,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  LimitExceededFault,
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
  NumberOfNodesPerClusterLimitExceededFault,
  NumberOfNodesQuotaExceededFault,
  OperatorType,
  ParameterApplyType,
  PartnerIntegrationStatus,
  PartnerNotFoundFault,
  PauseClusterCommand,
  PurchaseReservedNodeOfferingCommand,
  PutResourcePolicyCommand,
  RebootClusterCommand,
  RecommendedActionType,
  Redshift,
  RedshiftClient,
  RedshiftIdcApplicationAlreadyExistsFault,
  RedshiftIdcApplicationNotExistsFault,
  RedshiftIdcApplicationQuotaExceededFault,
  RedshiftInvalidParameterFault,
  RedshiftServiceException,
  RegisterNamespaceCommand,
  RejectDataShareCommand,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeAlreadyMigratedFault,
  ReservedNodeExchangeActionType,
  ReservedNodeExchangeNotFoundFault,
  ReservedNodeExchangeStatusType,
  ReservedNodeNotFoundFault,
  ReservedNodeOfferingNotFoundFault,
  ReservedNodeOfferingType,
  ReservedNodeQuotaExceededFault,
  ResetClusterParameterGroupCommand,
  ResizeClusterCommand,
  ResizeNotFoundFault,
  ResourceNotFoundFault,
  RestoreFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotCommand,
  ResumeClusterCommand,
  RevokeClusterSecurityGroupIngressCommand,
  RevokeEndpointAccessCommand,
  RevokeSnapshotAccessCommand,
  RotateEncryptionKeyCommand,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  ScheduleDefinitionTypeUnsupportedFault,
  ScheduleState,
  ScheduledActionAlreadyExistsFault,
  ScheduledActionFilterName,
  ScheduledActionNotFoundFault,
  ScheduledActionQuotaExceededFault,
  ScheduledActionState,
  ScheduledActionTypeUnsupportedFault,
  ScheduledActionTypeValues,
  ServiceAuthorization,
  SnapshotAttributeToSortBy,
  SnapshotCopyAlreadyDisabledFault,
  SnapshotCopyAlreadyEnabledFault,
  SnapshotCopyDisabledFault,
  SnapshotCopyGrantAlreadyExistsFault,
  SnapshotCopyGrantNotFoundFault,
  SnapshotCopyGrantQuotaExceededFault,
  SnapshotScheduleAlreadyExistsFault,
  SnapshotScheduleNotFoundFault,
  SnapshotScheduleQuotaExceededFault,
  SnapshotScheduleUpdateInProgressFault,
  SortByOrder,
  SourceNotFoundFault,
  SourceType,
  SubnetAlreadyInUse,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionEventIdNotFoundFault,
  SubscriptionNotFoundFault,
  SubscriptionSeverityNotFoundFault,
  TableLimitExceededFault,
  TableRestoreNotFoundFault,
  TableRestoreStatusType,
  TagLimitExceededFault,
  UnauthorizedOperation,
  UnauthorizedPartnerIntegrationFault,
  UnknownSnapshotCopyRegionFault,
  UnsupportedOperationFault,
  UnsupportedOptionFault,
  UpdatePartnerStatusCommand,
  UsageLimitAlreadyExistsFault,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  UsageLimitLimitType,
  UsageLimitNotFoundFault,
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
assert(AccessToClusterDeniedFault.prototype instanceof RedshiftServiceException);
assert(AccessToSnapshotDeniedFault.prototype instanceof RedshiftServiceException);
assert(AuthenticationProfileAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(AuthenticationProfileNotFoundFault.prototype instanceof RedshiftServiceException);
assert(AuthenticationProfileQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(AuthorizationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(AuthorizationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(AuthorizationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(BatchDeleteRequestSizeExceededFault.prototype instanceof RedshiftServiceException);
assert(BatchModifyClusterSnapshotsLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(BucketNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ClusterNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterOnLatestRevisionFault.prototype instanceof RedshiftServiceException);
assert(ClusterParameterGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ClusterParameterGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterParameterGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ClusterQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ClusterSecurityGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ClusterSecurityGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterSecurityGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ClusterSnapshotAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ClusterSnapshotNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterSnapshotQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ClusterSubnetGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ClusterSubnetGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ClusterSubnetGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ClusterSubnetQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ConflictPolicyUpdateFault.prototype instanceof RedshiftServiceException);
assert(CopyToRegionDisabledFault.prototype instanceof RedshiftServiceException);
assert(CustomCnameAssociationFault.prototype instanceof RedshiftServiceException);
assert(CustomDomainAssociationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(DependentServiceAccessDeniedFault.prototype instanceof RedshiftServiceException);
assert(DependentServiceRequestThrottlingFault.prototype instanceof RedshiftServiceException);
assert(DependentServiceUnavailableFault.prototype instanceof RedshiftServiceException);
assert(EndpointAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(EndpointAuthorizationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(EndpointAuthorizationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(EndpointAuthorizationsPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(EndpointNotFoundFault.prototype instanceof RedshiftServiceException);
assert(EndpointsPerAuthorizationLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(EndpointsPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(EventSubscriptionQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(HsmClientCertificateAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(HsmClientCertificateNotFoundFault.prototype instanceof RedshiftServiceException);
assert(HsmClientCertificateQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(HsmConfigurationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(HsmConfigurationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(HsmConfigurationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(IncompatibleOrderableOptions.prototype instanceof RedshiftServiceException);
assert(InProgressTableRestoreQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(InsufficientClusterCapacityFault.prototype instanceof RedshiftServiceException);
assert(InsufficientS3BucketPolicyFault.prototype instanceof RedshiftServiceException);
assert(IntegrationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(IntegrationConflictOperationFault.prototype instanceof RedshiftServiceException);
assert(IntegrationConflictStateFault.prototype instanceof RedshiftServiceException);
assert(IntegrationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(IntegrationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(IntegrationSourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(IntegrationTargetNotFoundFault.prototype instanceof RedshiftServiceException);
assert(InvalidAuthenticationProfileRequestFault.prototype instanceof RedshiftServiceException);
assert(InvalidAuthorizationStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterParameterGroupStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterSecurityGroupStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterSnapshotScheduleStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterSnapshotStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterSubnetGroupStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterSubnetStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidClusterTrackFault.prototype instanceof RedshiftServiceException);
assert(InvalidDataShareFault.prototype instanceof RedshiftServiceException);
assert(InvalidElasticIpFault.prototype instanceof RedshiftServiceException);
assert(InvalidEndpointStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidHsmClientCertificateStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidHsmConfigurationStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidNamespaceFault.prototype instanceof RedshiftServiceException);
assert(InvalidPolicyFault.prototype instanceof RedshiftServiceException);
assert(InvalidReservedNodeStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidRestoreFault.prototype instanceof RedshiftServiceException);
assert(InvalidRetentionPeriodFault.prototype instanceof RedshiftServiceException);
assert(InvalidS3BucketNameFault.prototype instanceof RedshiftServiceException);
assert(InvalidS3KeyPrefixFault.prototype instanceof RedshiftServiceException);
assert(InvalidScheduledActionFault.prototype instanceof RedshiftServiceException);
assert(InvalidScheduleFault.prototype instanceof RedshiftServiceException);
assert(InvalidSnapshotCopyGrantStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidSubnet.prototype instanceof RedshiftServiceException);
assert(InvalidSubscriptionStateFault.prototype instanceof RedshiftServiceException);
assert(InvalidTableRestoreArgumentFault.prototype instanceof RedshiftServiceException);
assert(InvalidTagFault.prototype instanceof RedshiftServiceException);
assert(InvalidUsageLimitFault.prototype instanceof RedshiftServiceException);
assert(InvalidVPCNetworkStateFault.prototype instanceof RedshiftServiceException);
assert(Ipv6CidrBlockNotFoundFault.prototype instanceof RedshiftServiceException);
assert(LimitExceededFault.prototype instanceof RedshiftServiceException);
assert(NumberOfNodesPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(NumberOfNodesQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(PartnerNotFoundFault.prototype instanceof RedshiftServiceException);
assert(RedshiftIdcApplicationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(RedshiftIdcApplicationNotExistsFault.prototype instanceof RedshiftServiceException);
assert(RedshiftIdcApplicationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(RedshiftInvalidParameterFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeAlreadyMigratedFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeExchangeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeOfferingNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ReservedNodeQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ResizeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ResourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ScheduledActionAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(ScheduledActionNotFoundFault.prototype instanceof RedshiftServiceException);
assert(ScheduledActionQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(ScheduledActionTypeUnsupportedFault.prototype instanceof RedshiftServiceException);
assert(ScheduleDefinitionTypeUnsupportedFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyAlreadyDisabledFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyAlreadyEnabledFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyDisabledFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyGrantAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyGrantNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SnapshotCopyGrantQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(SnapshotScheduleAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(SnapshotScheduleNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SnapshotScheduleQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(SnapshotScheduleUpdateInProgressFault.prototype instanceof RedshiftServiceException);
assert(SNSInvalidTopicFault.prototype instanceof RedshiftServiceException);
assert(SNSNoAuthorizationFault.prototype instanceof RedshiftServiceException);
assert(SNSTopicArnNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SubnetAlreadyInUse.prototype instanceof RedshiftServiceException);
assert(SubscriptionAlreadyExistFault.prototype instanceof RedshiftServiceException);
assert(SubscriptionCategoryNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SubscriptionEventIdNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SubscriptionNotFoundFault.prototype instanceof RedshiftServiceException);
assert(SubscriptionSeverityNotFoundFault.prototype instanceof RedshiftServiceException);
assert(TableLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(TableRestoreNotFoundFault.prototype instanceof RedshiftServiceException);
assert(TagLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(UnauthorizedOperation.prototype instanceof RedshiftServiceException);
assert(UnauthorizedPartnerIntegrationFault.prototype instanceof RedshiftServiceException);
assert(UnknownSnapshotCopyRegionFault.prototype instanceof RedshiftServiceException);
assert(UnsupportedOperationFault.prototype instanceof RedshiftServiceException);
assert(UnsupportedOptionFault.prototype instanceof RedshiftServiceException);
assert(UsageLimitAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(UsageLimitNotFoundFault.prototype instanceof RedshiftServiceException);
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
