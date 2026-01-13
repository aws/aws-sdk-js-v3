import {
  AcceptReservedNodeExchange$,
  AcceptReservedNodeExchangeCommand,
  AcceptReservedNodeExchangeInputMessage$,
  AcceptReservedNodeExchangeOutputMessage$,
  AccessToClusterDeniedFault,
  AccessToClusterDeniedFault$,
  AccessToSnapshotDeniedFault,
  AccessToSnapshotDeniedFault$,
  AccountAttribute$,
  AccountAttributeList$,
  AccountWithRestoreAccess$,
  ActionType,
  AddPartner$,
  AddPartnerCommand,
  ApplicationType,
  AquaConfiguration$,
  AquaConfigurationStatus,
  AquaStatus,
  AssociateDataShareConsumer$,
  AssociateDataShareConsumerCommand,
  AssociateDataShareConsumerMessage$,
  Association$,
  AttributeValueTarget$,
  AuthenticationProfile$,
  AuthenticationProfileAlreadyExistsFault,
  AuthenticationProfileAlreadyExistsFault$,
  AuthenticationProfileNotFoundFault,
  AuthenticationProfileNotFoundFault$,
  AuthenticationProfileQuotaExceededFault,
  AuthenticationProfileQuotaExceededFault$,
  AuthorizationAlreadyExistsFault,
  AuthorizationAlreadyExistsFault$,
  AuthorizationNotFoundFault,
  AuthorizationNotFoundFault$,
  AuthorizationQuotaExceededFault,
  AuthorizationQuotaExceededFault$,
  AuthorizationStatus,
  AuthorizeClusterSecurityGroupIngress$,
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeClusterSecurityGroupIngressMessage$,
  AuthorizeClusterSecurityGroupIngressResult$,
  AuthorizeDataShare$,
  AuthorizeDataShareCommand,
  AuthorizeDataShareMessage$,
  AuthorizedTokenIssuer$,
  AuthorizeEndpointAccess$,
  AuthorizeEndpointAccessCommand,
  AuthorizeEndpointAccessMessage$,
  AuthorizeSnapshotAccess$,
  AuthorizeSnapshotAccessCommand,
  AuthorizeSnapshotAccessMessage$,
  AuthorizeSnapshotAccessResult$,
  AvailabilityZone$,
  BatchDeleteClusterSnapshots$,
  BatchDeleteClusterSnapshotsCommand,
  BatchDeleteClusterSnapshotsRequest$,
  BatchDeleteClusterSnapshotsResult$,
  BatchDeleteRequestSizeExceededFault,
  BatchDeleteRequestSizeExceededFault$,
  BatchModifyClusterSnapshots$,
  BatchModifyClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsLimitExceededFault,
  BatchModifyClusterSnapshotsLimitExceededFault$,
  BatchModifyClusterSnapshotsMessage$,
  BatchModifyClusterSnapshotsOutputMessage$,
  BucketNotFoundFault,
  BucketNotFoundFault$,
  CancelResize$,
  CancelResizeCommand,
  CancelResizeMessage$,
  CertificateAssociation$,
  Cluster$,
  ClusterAlreadyExistsFault,
  ClusterAlreadyExistsFault$,
  ClusterAssociatedToSchedule$,
  ClusterCredentials$,
  ClusterDbRevision$,
  ClusterDbRevisionsMessage$,
  ClusterExtendedCredentials$,
  ClusterIamRole$,
  ClusterNode$,
  ClusterNotFoundFault,
  ClusterNotFoundFault$,
  ClusterOnLatestRevisionFault,
  ClusterOnLatestRevisionFault$,
  ClusterParameterGroup$,
  ClusterParameterGroupAlreadyExistsFault,
  ClusterParameterGroupAlreadyExistsFault$,
  ClusterParameterGroupDetails$,
  ClusterParameterGroupNameMessage$,
  ClusterParameterGroupNotFoundFault,
  ClusterParameterGroupNotFoundFault$,
  ClusterParameterGroupQuotaExceededFault,
  ClusterParameterGroupQuotaExceededFault$,
  ClusterParameterGroupsMessage$,
  ClusterParameterGroupStatus$,
  ClusterParameterStatus$,
  ClusterQuotaExceededFault,
  ClusterQuotaExceededFault$,
  ClusterSecurityGroup$,
  ClusterSecurityGroupAlreadyExistsFault,
  ClusterSecurityGroupAlreadyExistsFault$,
  ClusterSecurityGroupMembership$,
  ClusterSecurityGroupMessage$,
  ClusterSecurityGroupNotFoundFault,
  ClusterSecurityGroupNotFoundFault$,
  ClusterSecurityGroupQuotaExceededFault,
  ClusterSecurityGroupQuotaExceededFault$,
  ClustersMessage$,
  ClusterSnapshotAlreadyExistsFault,
  ClusterSnapshotAlreadyExistsFault$,
  ClusterSnapshotCopyStatus$,
  ClusterSnapshotNotFoundFault,
  ClusterSnapshotNotFoundFault$,
  ClusterSnapshotQuotaExceededFault,
  ClusterSnapshotQuotaExceededFault$,
  ClusterSubnetGroup$,
  ClusterSubnetGroupAlreadyExistsFault,
  ClusterSubnetGroupAlreadyExistsFault$,
  ClusterSubnetGroupMessage$,
  ClusterSubnetGroupNotFoundFault,
  ClusterSubnetGroupNotFoundFault$,
  ClusterSubnetGroupQuotaExceededFault,
  ClusterSubnetGroupQuotaExceededFault$,
  ClusterSubnetQuotaExceededFault,
  ClusterSubnetQuotaExceededFault$,
  ClusterVersion$,
  ClusterVersionsMessage$,
  ConflictPolicyUpdateFault,
  ConflictPolicyUpdateFault$,
  Connect$,
  CopyClusterSnapshot$,
  CopyClusterSnapshotCommand,
  CopyClusterSnapshotMessage$,
  CopyClusterSnapshotResult$,
  CopyToRegionDisabledFault,
  CopyToRegionDisabledFault$,
  CreateAuthenticationProfile$,
  CreateAuthenticationProfileCommand,
  CreateAuthenticationProfileMessage$,
  CreateAuthenticationProfileResult$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterMessage$,
  CreateClusterParameterGroup$,
  CreateClusterParameterGroupCommand,
  CreateClusterParameterGroupMessage$,
  CreateClusterParameterGroupResult$,
  CreateClusterResult$,
  CreateClusterSecurityGroup$,
  CreateClusterSecurityGroupCommand,
  CreateClusterSecurityGroupMessage$,
  CreateClusterSecurityGroupResult$,
  CreateClusterSnapshot$,
  CreateClusterSnapshotCommand,
  CreateClusterSnapshotMessage$,
  CreateClusterSnapshotResult$,
  CreateClusterSubnetGroup$,
  CreateClusterSubnetGroupCommand,
  CreateClusterSubnetGroupMessage$,
  CreateClusterSubnetGroupResult$,
  CreateCustomDomainAssociation$,
  CreateCustomDomainAssociationCommand,
  CreateCustomDomainAssociationMessage$,
  CreateCustomDomainAssociationResult$,
  CreateEndpointAccess$,
  CreateEndpointAccessCommand,
  CreateEndpointAccessMessage$,
  CreateEventSubscription$,
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionMessage$,
  CreateEventSubscriptionResult$,
  CreateHsmClientCertificate$,
  CreateHsmClientCertificateCommand,
  CreateHsmClientCertificateMessage$,
  CreateHsmClientCertificateResult$,
  CreateHsmConfiguration$,
  CreateHsmConfigurationCommand,
  CreateHsmConfigurationMessage$,
  CreateHsmConfigurationResult$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationMessage$,
  CreateRedshiftIdcApplication$,
  CreateRedshiftIdcApplicationCommand,
  CreateRedshiftIdcApplicationMessage$,
  CreateRedshiftIdcApplicationResult$,
  CreateScheduledAction$,
  CreateScheduledActionCommand,
  CreateScheduledActionMessage$,
  CreateSnapshotCopyGrant$,
  CreateSnapshotCopyGrantCommand,
  CreateSnapshotCopyGrantMessage$,
  CreateSnapshotCopyGrantResult$,
  CreateSnapshotSchedule$,
  CreateSnapshotScheduleCommand,
  CreateSnapshotScheduleMessage$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsMessage$,
  CreateUsageLimit$,
  CreateUsageLimitCommand,
  CreateUsageLimitMessage$,
  CustomCnameAssociationFault,
  CustomCnameAssociationFault$,
  CustomDomainAssociationNotFoundFault,
  CustomDomainAssociationNotFoundFault$,
  CustomDomainAssociationsMessage$,
  CustomerStorageMessage$,
  DataShare$,
  DataShareAssociation$,
  DataShareStatus,
  DataShareStatusForConsumer,
  DataShareStatusForProducer,
  DataShareType,
  DataTransferProgress$,
  DeauthorizeDataShare$,
  DeauthorizeDataShareCommand,
  DeauthorizeDataShareMessage$,
  DefaultClusterParameters$,
  DeferredMaintenanceWindow$,
  DeleteAuthenticationProfile$,
  DeleteAuthenticationProfileCommand,
  DeleteAuthenticationProfileMessage$,
  DeleteAuthenticationProfileResult$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterMessage$,
  DeleteClusterParameterGroup$,
  DeleteClusterParameterGroupCommand,
  DeleteClusterParameterGroupMessage$,
  DeleteClusterResult$,
  DeleteClusterSecurityGroup$,
  DeleteClusterSecurityGroupCommand,
  DeleteClusterSecurityGroupMessage$,
  DeleteClusterSnapshot$,
  DeleteClusterSnapshotCommand,
  DeleteClusterSnapshotMessage$,
  DeleteClusterSnapshotResult$,
  DeleteClusterSubnetGroup$,
  DeleteClusterSubnetGroupCommand,
  DeleteClusterSubnetGroupMessage$,
  DeleteCustomDomainAssociation$,
  DeleteCustomDomainAssociationCommand,
  DeleteCustomDomainAssociationMessage$,
  DeleteEndpointAccess$,
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessMessage$,
  DeleteEventSubscription$,
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionMessage$,
  DeleteHsmClientCertificate$,
  DeleteHsmClientCertificateCommand,
  DeleteHsmClientCertificateMessage$,
  DeleteHsmConfiguration$,
  DeleteHsmConfigurationCommand,
  DeleteHsmConfigurationMessage$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationMessage$,
  DeletePartner$,
  DeletePartnerCommand,
  DeleteRedshiftIdcApplication$,
  DeleteRedshiftIdcApplicationCommand,
  DeleteRedshiftIdcApplicationMessage$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyMessage$,
  DeleteScheduledAction$,
  DeleteScheduledActionCommand,
  DeleteScheduledActionMessage$,
  DeleteSnapshotCopyGrant$,
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotCopyGrantMessage$,
  DeleteSnapshotSchedule$,
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleMessage$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsMessage$,
  DeleteUsageLimit$,
  DeleteUsageLimitCommand,
  DeleteUsageLimitMessage$,
  DependentServiceAccessDeniedFault,
  DependentServiceAccessDeniedFault$,
  DependentServiceRequestThrottlingFault,
  DependentServiceRequestThrottlingFault$,
  DependentServiceUnavailableFault,
  DependentServiceUnavailableFault$,
  DeregisterNamespace$,
  DeregisterNamespaceCommand,
  DeregisterNamespaceInputMessage$,
  DeregisterNamespaceOutputMessage$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesMessage$,
  DescribeAuthenticationProfiles$,
  DescribeAuthenticationProfilesCommand,
  DescribeAuthenticationProfilesMessage$,
  DescribeAuthenticationProfilesResult$,
  DescribeClusterDbRevisions$,
  DescribeClusterDbRevisionsCommand,
  DescribeClusterDbRevisionsMessage$,
  DescribeClusterParameterGroups$,
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParameterGroupsMessage$,
  DescribeClusterParameters$,
  DescribeClusterParametersCommand,
  DescribeClusterParametersMessage$,
  DescribeClusters$,
  DescribeClustersCommand,
  DescribeClusterSecurityGroups$,
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSecurityGroupsMessage$,
  DescribeClustersMessage$,
  DescribeClusterSnapshots$,
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsMessage$,
  DescribeClusterSubnetGroups$,
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsMessage$,
  DescribeClusterTracks$,
  DescribeClusterTracksCommand,
  DescribeClusterTracksMessage$,
  DescribeClusterVersions$,
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsMessage$,
  DescribeCustomDomainAssociations$,
  DescribeCustomDomainAssociationsCommand,
  DescribeCustomDomainAssociationsMessage$,
  DescribeDataShares$,
  DescribeDataSharesCommand,
  DescribeDataSharesForConsumer$,
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForConsumerMessage$,
  DescribeDataSharesForConsumerResult$,
  DescribeDataSharesForProducer$,
  DescribeDataSharesForProducerCommand,
  DescribeDataSharesForProducerMessage$,
  DescribeDataSharesForProducerResult$,
  DescribeDataSharesMessage$,
  DescribeDataSharesResult$,
  DescribeDefaultClusterParameters$,
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersMessage$,
  DescribeDefaultClusterParametersResult$,
  DescribeEndpointAccess$,
  DescribeEndpointAccessCommand,
  DescribeEndpointAccessMessage$,
  DescribeEndpointAuthorization$,
  DescribeEndpointAuthorizationCommand,
  DescribeEndpointAuthorizationMessage$,
  DescribeEventCategories$,
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesMessage$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeEventSubscriptions$,
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsMessage$,
  DescribeHsmClientCertificates$,
  DescribeHsmClientCertificatesCommand,
  DescribeHsmClientCertificatesMessage$,
  DescribeHsmConfigurations$,
  DescribeHsmConfigurationsCommand,
  DescribeHsmConfigurationsMessage$,
  DescribeInboundIntegrations$,
  DescribeInboundIntegrationsCommand,
  DescribeInboundIntegrationsMessage$,
  DescribeIntegrations$,
  DescribeIntegrationsCommand,
  DescribeIntegrationsFilter$,
  DescribeIntegrationsFilterName,
  DescribeIntegrationsMessage$,
  DescribeLoggingStatus$,
  DescribeLoggingStatusCommand,
  DescribeLoggingStatusMessage$,
  DescribeNodeConfigurationOptions$,
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsMessage$,
  DescribeOrderableClusterOptions$,
  DescribeOrderableClusterOptionsCommand,
  DescribeOrderableClusterOptionsMessage$,
  DescribePartners$,
  DescribePartnersCommand,
  DescribePartnersInputMessage$,
  DescribePartnersOutputMessage$,
  DescribeRedshiftIdcApplications$,
  DescribeRedshiftIdcApplicationsCommand,
  DescribeRedshiftIdcApplicationsMessage$,
  DescribeRedshiftIdcApplicationsResult$,
  DescribeReservedNodeExchangeStatus$,
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeExchangeStatusInputMessage$,
  DescribeReservedNodeExchangeStatusOutputMessage$,
  DescribeReservedNodeOfferings$,
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodeOfferingsMessage$,
  DescribeReservedNodes$,
  DescribeReservedNodesCommand,
  DescribeReservedNodesMessage$,
  DescribeResize$,
  DescribeResizeCommand,
  DescribeResizeMessage$,
  DescribeScheduledActions$,
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsMessage$,
  DescribeSnapshotCopyGrants$,
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotCopyGrantsMessage$,
  DescribeSnapshotSchedules$,
  DescribeSnapshotSchedulesCommand,
  DescribeSnapshotSchedulesMessage$,
  DescribeSnapshotSchedulesOutputMessage$,
  DescribeStorage$,
  DescribeStorageCommand,
  DescribeTableRestoreStatus$,
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusMessage$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsMessage$,
  DescribeUsageLimits$,
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsMessage$,
  DisableLogging$,
  DisableLoggingCommand,
  DisableLoggingMessage$,
  DisableSnapshotCopy$,
  DisableSnapshotCopyCommand,
  DisableSnapshotCopyMessage$,
  DisableSnapshotCopyResult$,
  DisassociateDataShareConsumer$,
  DisassociateDataShareConsumerCommand,
  DisassociateDataShareConsumerMessage$,
  EC2SecurityGroup$,
  ElasticIpStatus$,
  EnableLogging$,
  EnableLoggingCommand,
  EnableLoggingMessage$,
  EnableSnapshotCopy$,
  EnableSnapshotCopyCommand,
  EnableSnapshotCopyMessage$,
  EnableSnapshotCopyResult$,
  Endpoint$,
  EndpointAccess$,
  EndpointAccessList$,
  EndpointAlreadyExistsFault,
  EndpointAlreadyExistsFault$,
  EndpointAuthorization$,
  EndpointAuthorizationAlreadyExistsFault,
  EndpointAuthorizationAlreadyExistsFault$,
  EndpointAuthorizationList$,
  EndpointAuthorizationNotFoundFault,
  EndpointAuthorizationNotFoundFault$,
  EndpointAuthorizationsPerClusterLimitExceededFault,
  EndpointAuthorizationsPerClusterLimitExceededFault$,
  EndpointNotFoundFault,
  EndpointNotFoundFault$,
  EndpointsPerAuthorizationLimitExceededFault,
  EndpointsPerAuthorizationLimitExceededFault$,
  EndpointsPerClusterLimitExceededFault,
  EndpointsPerClusterLimitExceededFault$,
  Event$,
  EventCategoriesMap$,
  EventCategoriesMessage$,
  EventInfoMap$,
  EventsMessage$,
  EventSubscription$,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionQuotaExceededFault$,
  EventSubscriptionsMessage$,
  FailoverPrimaryCompute$,
  FailoverPrimaryComputeCommand,
  FailoverPrimaryComputeInputMessage$,
  FailoverPrimaryComputeResult$,
  GetClusterCredentials$,
  GetClusterCredentialsCommand,
  GetClusterCredentialsMessage$,
  GetClusterCredentialsWithIAM$,
  GetClusterCredentialsWithIAMCommand,
  GetClusterCredentialsWithIAMMessage$,
  GetIdentityCenterAuthToken$,
  GetIdentityCenterAuthTokenCommand,
  GetIdentityCenterAuthTokenRequest$,
  GetIdentityCenterAuthTokenResponse$,
  GetReservedNodeExchangeConfigurationOptions$,
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeConfigurationOptionsInputMessage$,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage$,
  GetReservedNodeExchangeOfferings$,
  GetReservedNodeExchangeOfferingsCommand,
  GetReservedNodeExchangeOfferingsInputMessage$,
  GetReservedNodeExchangeOfferingsOutputMessage$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyMessage$,
  GetResourcePolicyResult$,
  HsmClientCertificate$,
  HsmClientCertificateAlreadyExistsFault,
  HsmClientCertificateAlreadyExistsFault$,
  HsmClientCertificateMessage$,
  HsmClientCertificateNotFoundFault,
  HsmClientCertificateNotFoundFault$,
  HsmClientCertificateQuotaExceededFault,
  HsmClientCertificateQuotaExceededFault$,
  HsmConfiguration$,
  HsmConfigurationAlreadyExistsFault,
  HsmConfigurationAlreadyExistsFault$,
  HsmConfigurationMessage$,
  HsmConfigurationNotFoundFault,
  HsmConfigurationNotFoundFault$,
  HsmConfigurationQuotaExceededFault,
  HsmConfigurationQuotaExceededFault$,
  HsmStatus$,
  ImpactRankingType,
  InboundIntegration$,
  InboundIntegrationsMessage$,
  IncompatibleOrderableOptions,
  IncompatibleOrderableOptions$,
  InProgressTableRestoreQuotaExceededFault,
  InProgressTableRestoreQuotaExceededFault$,
  InsufficientClusterCapacityFault,
  InsufficientClusterCapacityFault$,
  InsufficientS3BucketPolicyFault,
  InsufficientS3BucketPolicyFault$,
  Integration$,
  IntegrationAlreadyExistsFault,
  IntegrationAlreadyExistsFault$,
  IntegrationConflictOperationFault,
  IntegrationConflictOperationFault$,
  IntegrationConflictStateFault,
  IntegrationConflictStateFault$,
  IntegrationError$,
  IntegrationNotFoundFault,
  IntegrationNotFoundFault$,
  IntegrationQuotaExceededFault,
  IntegrationQuotaExceededFault$,
  IntegrationsMessage$,
  IntegrationSourceNotFoundFault,
  IntegrationSourceNotFoundFault$,
  IntegrationTargetNotFoundFault,
  IntegrationTargetNotFoundFault$,
  InvalidAuthenticationProfileRequestFault,
  InvalidAuthenticationProfileRequestFault$,
  InvalidAuthorizationStateFault,
  InvalidAuthorizationStateFault$,
  InvalidClusterParameterGroupStateFault,
  InvalidClusterParameterGroupStateFault$,
  InvalidClusterSecurityGroupStateFault,
  InvalidClusterSecurityGroupStateFault$,
  InvalidClusterSnapshotScheduleStateFault,
  InvalidClusterSnapshotScheduleStateFault$,
  InvalidClusterSnapshotStateFault,
  InvalidClusterSnapshotStateFault$,
  InvalidClusterStateFault,
  InvalidClusterStateFault$,
  InvalidClusterSubnetGroupStateFault,
  InvalidClusterSubnetGroupStateFault$,
  InvalidClusterSubnetStateFault,
  InvalidClusterSubnetStateFault$,
  InvalidClusterTrackFault,
  InvalidClusterTrackFault$,
  InvalidDataShareFault,
  InvalidDataShareFault$,
  InvalidElasticIpFault,
  InvalidElasticIpFault$,
  InvalidEndpointStateFault,
  InvalidEndpointStateFault$,
  InvalidHsmClientCertificateStateFault,
  InvalidHsmClientCertificateStateFault$,
  InvalidHsmConfigurationStateFault,
  InvalidHsmConfigurationStateFault$,
  InvalidNamespaceFault,
  InvalidNamespaceFault$,
  InvalidPolicyFault,
  InvalidPolicyFault$,
  InvalidReservedNodeStateFault,
  InvalidReservedNodeStateFault$,
  InvalidRestoreFault,
  InvalidRestoreFault$,
  InvalidRetentionPeriodFault,
  InvalidRetentionPeriodFault$,
  InvalidS3BucketNameFault,
  InvalidS3BucketNameFault$,
  InvalidS3KeyPrefixFault,
  InvalidS3KeyPrefixFault$,
  InvalidScheduledActionFault,
  InvalidScheduledActionFault$,
  InvalidScheduleFault,
  InvalidScheduleFault$,
  InvalidSnapshotCopyGrantStateFault,
  InvalidSnapshotCopyGrantStateFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidSubscriptionStateFault,
  InvalidSubscriptionStateFault$,
  InvalidTableRestoreArgumentFault,
  InvalidTableRestoreArgumentFault$,
  InvalidTagFault,
  InvalidTagFault$,
  InvalidUsageLimitFault,
  InvalidUsageLimitFault$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  IPRange$,
  Ipv6CidrBlockNotFoundFault,
  Ipv6CidrBlockNotFoundFault$,
  LakeFormationQuery$,
  LakeFormationScopeUnion$,
  LakehouseConfiguration$,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  LimitExceededFault,
  LimitExceededFault$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsMessage$,
  ListRecommendationsResult$,
  LogDestinationType,
  LoggingStatus$,
  MaintenanceTrack$,
  Mode,
  ModifyAquaConfiguration$,
  ModifyAquaConfigurationCommand,
  ModifyAquaInputMessage$,
  ModifyAquaOutputMessage$,
  ModifyAuthenticationProfile$,
  ModifyAuthenticationProfileCommand,
  ModifyAuthenticationProfileMessage$,
  ModifyAuthenticationProfileResult$,
  ModifyCluster$,
  ModifyClusterCommand,
  ModifyClusterDbRevision$,
  ModifyClusterDbRevisionCommand,
  ModifyClusterDbRevisionMessage$,
  ModifyClusterDbRevisionResult$,
  ModifyClusterIamRoles$,
  ModifyClusterIamRolesCommand,
  ModifyClusterIamRolesMessage$,
  ModifyClusterIamRolesResult$,
  ModifyClusterMaintenance$,
  ModifyClusterMaintenanceCommand,
  ModifyClusterMaintenanceMessage$,
  ModifyClusterMaintenanceResult$,
  ModifyClusterMessage$,
  ModifyClusterParameterGroup$,
  ModifyClusterParameterGroupCommand,
  ModifyClusterParameterGroupMessage$,
  ModifyClusterResult$,
  ModifyClusterSnapshot$,
  ModifyClusterSnapshotCommand,
  ModifyClusterSnapshotMessage$,
  ModifyClusterSnapshotResult$,
  ModifyClusterSnapshotSchedule$,
  ModifyClusterSnapshotScheduleCommand,
  ModifyClusterSnapshotScheduleMessage$,
  ModifyClusterSubnetGroup$,
  ModifyClusterSubnetGroupCommand,
  ModifyClusterSubnetGroupMessage$,
  ModifyClusterSubnetGroupResult$,
  ModifyCustomDomainAssociation$,
  ModifyCustomDomainAssociationCommand,
  ModifyCustomDomainAssociationMessage$,
  ModifyCustomDomainAssociationResult$,
  ModifyEndpointAccess$,
  ModifyEndpointAccessCommand,
  ModifyEndpointAccessMessage$,
  ModifyEventSubscription$,
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionMessage$,
  ModifyEventSubscriptionResult$,
  ModifyIntegration$,
  ModifyIntegrationCommand,
  ModifyIntegrationMessage$,
  ModifyLakehouseConfiguration$,
  ModifyLakehouseConfigurationCommand,
  ModifyLakehouseConfigurationMessage$,
  ModifyRedshiftIdcApplication$,
  ModifyRedshiftIdcApplicationCommand,
  ModifyRedshiftIdcApplicationMessage$,
  ModifyRedshiftIdcApplicationResult$,
  ModifyScheduledAction$,
  ModifyScheduledActionCommand,
  ModifyScheduledActionMessage$,
  ModifySnapshotCopyRetentionPeriod$,
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotCopyRetentionPeriodMessage$,
  ModifySnapshotCopyRetentionPeriodResult$,
  ModifySnapshotSchedule$,
  ModifySnapshotScheduleCommand,
  ModifySnapshotScheduleMessage$,
  ModifyUsageLimit$,
  ModifyUsageLimitCommand,
  ModifyUsageLimitMessage$,
  NamespaceIdentifierUnion$,
  NamespaceRegistrationStatus,
  NetworkInterface$,
  NodeConfigurationOption$,
  NodeConfigurationOptionsFilter$,
  NodeConfigurationOptionsFilterName,
  NodeConfigurationOptionsMessage$,
  NumberOfNodesPerClusterLimitExceededFault,
  NumberOfNodesPerClusterLimitExceededFault$,
  NumberOfNodesQuotaExceededFault,
  NumberOfNodesQuotaExceededFault$,
  OperatorType,
  OrderableClusterOption$,
  OrderableClusterOptionsMessage$,
  paginateDescribeClusterDbRevisions,
  paginateDescribeClusterParameterGroups,
  paginateDescribeClusterParameters,
  paginateDescribeClusters,
  paginateDescribeClusterSecurityGroups,
  paginateDescribeClusterSnapshots,
  paginateDescribeClusterSubnetGroups,
  paginateDescribeClusterTracks,
  paginateDescribeClusterVersions,
  paginateDescribeCustomDomainAssociations,
  paginateDescribeDataShares,
  paginateDescribeDataSharesForConsumer,
  paginateDescribeDataSharesForProducer,
  paginateDescribeDefaultClusterParameters,
  paginateDescribeEndpointAccess,
  paginateDescribeEndpointAuthorization,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
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
  Parameter$,
  ParameterApplyType,
  PartnerIntegrationInfo$,
  PartnerIntegrationInputMessage$,
  PartnerIntegrationOutputMessage$,
  PartnerIntegrationStatus,
  PartnerNotFoundFault,
  PartnerNotFoundFault$,
  PauseCluster$,
  PauseClusterCommand,
  PauseClusterMessage$,
  PauseClusterResult$,
  PendingModifiedValues$,
  ProvisionedIdentifier$,
  PurchaseReservedNodeOffering$,
  PurchaseReservedNodeOfferingCommand,
  PurchaseReservedNodeOfferingMessage$,
  PurchaseReservedNodeOfferingResult$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyMessage$,
  PutResourcePolicyResult$,
  ReadWriteAccess$,
  RebootCluster$,
  RebootClusterCommand,
  RebootClusterMessage$,
  RebootClusterResult$,
  Recommendation$,
  RecommendedAction$,
  RecommendedActionType,
  RecurringCharge$,
  Redshift,
  RedshiftClient,
  RedshiftIdcApplication$,
  RedshiftIdcApplicationAlreadyExistsFault,
  RedshiftIdcApplicationAlreadyExistsFault$,
  RedshiftIdcApplicationNotExistsFault,
  RedshiftIdcApplicationNotExistsFault$,
  RedshiftIdcApplicationQuotaExceededFault,
  RedshiftIdcApplicationQuotaExceededFault$,
  RedshiftInvalidParameterFault,
  RedshiftInvalidParameterFault$,
  RedshiftScopeUnion$,
  RedshiftServiceException,
  ReferenceLink$,
  RegisterNamespace$,
  RegisterNamespaceCommand,
  RegisterNamespaceInputMessage$,
  RegisterNamespaceOutputMessage$,
  RejectDataShare$,
  RejectDataShareCommand,
  RejectDataShareMessage$,
  ReservedNode$,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeAlreadyExistsFault$,
  ReservedNodeAlreadyMigratedFault,
  ReservedNodeAlreadyMigratedFault$,
  ReservedNodeConfigurationOption$,
  ReservedNodeExchangeActionType,
  ReservedNodeExchangeNotFoundFault,
  ReservedNodeExchangeNotFoundFault$,
  ReservedNodeExchangeStatus$,
  ReservedNodeExchangeStatusType,
  ReservedNodeNotFoundFault,
  ReservedNodeNotFoundFault$,
  ReservedNodeOffering$,
  ReservedNodeOfferingNotFoundFault,
  ReservedNodeOfferingNotFoundFault$,
  ReservedNodeOfferingsMessage$,
  ReservedNodeOfferingType,
  ReservedNodeQuotaExceededFault,
  ReservedNodeQuotaExceededFault$,
  ReservedNodesMessage$,
  ResetClusterParameterGroup$,
  ResetClusterParameterGroupCommand,
  ResetClusterParameterGroupMessage$,
  ResizeCluster$,
  ResizeClusterCommand,
  ResizeClusterMessage$,
  ResizeClusterResult$,
  ResizeInfo$,
  ResizeNotFoundFault,
  ResizeNotFoundFault$,
  ResizeProgressMessage$,
  ResourceNotFoundFault,
  ResourceNotFoundFault$,
  ResourcePolicy$,
  RestoreFromClusterSnapshot$,
  RestoreFromClusterSnapshotCommand,
  RestoreFromClusterSnapshotMessage$,
  RestoreFromClusterSnapshotResult$,
  RestoreStatus$,
  RestoreTableFromClusterSnapshot$,
  RestoreTableFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotMessage$,
  RestoreTableFromClusterSnapshotResult$,
  ResumeCluster$,
  ResumeClusterCommand,
  ResumeClusterMessage$,
  ResumeClusterResult$,
  RevisionTarget$,
  RevokeClusterSecurityGroupIngress$,
  RevokeClusterSecurityGroupIngressCommand,
  RevokeClusterSecurityGroupIngressMessage$,
  RevokeClusterSecurityGroupIngressResult$,
  RevokeEndpointAccess$,
  RevokeEndpointAccessCommand,
  RevokeEndpointAccessMessage$,
  RevokeSnapshotAccess$,
  RevokeSnapshotAccessCommand,
  RevokeSnapshotAccessMessage$,
  RevokeSnapshotAccessResult$,
  RotateEncryptionKey$,
  RotateEncryptionKeyCommand,
  RotateEncryptionKeyMessage$,
  RotateEncryptionKeyResult$,
  S3AccessGrantsScopeUnion$,
  ScheduledAction$,
  ScheduledActionAlreadyExistsFault,
  ScheduledActionAlreadyExistsFault$,
  ScheduledActionFilter$,
  ScheduledActionFilterName,
  ScheduledActionNotFoundFault,
  ScheduledActionNotFoundFault$,
  ScheduledActionQuotaExceededFault,
  ScheduledActionQuotaExceededFault$,
  ScheduledActionsMessage$,
  ScheduledActionState,
  ScheduledActionType$,
  ScheduledActionTypeUnsupportedFault,
  ScheduledActionTypeUnsupportedFault$,
  ScheduledActionTypeValues,
  ScheduleDefinitionTypeUnsupportedFault,
  ScheduleDefinitionTypeUnsupportedFault$,
  ScheduleState,
  SecondaryClusterInfo$,
  ServerlessIdentifier$,
  ServiceAuthorization,
  ServiceIntegrationsUnion$,
  Snapshot$,
  SnapshotAttributeToSortBy,
  SnapshotCopyAlreadyDisabledFault,
  SnapshotCopyAlreadyDisabledFault$,
  SnapshotCopyAlreadyEnabledFault,
  SnapshotCopyAlreadyEnabledFault$,
  SnapshotCopyDisabledFault,
  SnapshotCopyDisabledFault$,
  SnapshotCopyGrant$,
  SnapshotCopyGrantAlreadyExistsFault,
  SnapshotCopyGrantAlreadyExistsFault$,
  SnapshotCopyGrantMessage$,
  SnapshotCopyGrantNotFoundFault,
  SnapshotCopyGrantNotFoundFault$,
  SnapshotCopyGrantQuotaExceededFault,
  SnapshotCopyGrantQuotaExceededFault$,
  SnapshotErrorMessage$,
  SnapshotMessage$,
  SnapshotSchedule$,
  SnapshotScheduleAlreadyExistsFault,
  SnapshotScheduleAlreadyExistsFault$,
  SnapshotScheduleNotFoundFault,
  SnapshotScheduleNotFoundFault$,
  SnapshotScheduleQuotaExceededFault,
  SnapshotScheduleQuotaExceededFault$,
  SnapshotScheduleUpdateInProgressFault,
  SnapshotScheduleUpdateInProgressFault$,
  SnapshotSortingEntity$,
  SNSInvalidTopicFault,
  SNSInvalidTopicFault$,
  SNSNoAuthorizationFault,
  SNSNoAuthorizationFault$,
  SNSTopicArnNotFoundFault,
  SNSTopicArnNotFoundFault$,
  SortByOrder,
  SourceNotFoundFault,
  SourceNotFoundFault$,
  SourceType,
  Subnet$,
  SubnetAlreadyInUse,
  SubnetAlreadyInUse$,
  SubscriptionAlreadyExistFault,
  SubscriptionAlreadyExistFault$,
  SubscriptionCategoryNotFoundFault,
  SubscriptionCategoryNotFoundFault$,
  SubscriptionEventIdNotFoundFault,
  SubscriptionEventIdNotFoundFault$,
  SubscriptionNotFoundFault,
  SubscriptionNotFoundFault$,
  SubscriptionSeverityNotFoundFault,
  SubscriptionSeverityNotFoundFault$,
  SupportedOperation$,
  SupportedPlatform$,
  TableLimitExceededFault,
  TableLimitExceededFault$,
  TableRestoreNotFoundFault,
  TableRestoreNotFoundFault$,
  TableRestoreStatus$,
  TableRestoreStatusMessage$,
  TableRestoreStatusType,
  Tag$,
  TaggedResource$,
  TaggedResourceListMessage$,
  TagLimitExceededFault,
  TagLimitExceededFault$,
  TrackListMessage$,
  UnauthorizedOperation,
  UnauthorizedOperation$,
  UnauthorizedPartnerIntegrationFault,
  UnauthorizedPartnerIntegrationFault$,
  UnknownSnapshotCopyRegionFault,
  UnknownSnapshotCopyRegionFault$,
  UnsupportedOperationFault,
  UnsupportedOperationFault$,
  UnsupportedOptionFault,
  UnsupportedOptionFault$,
  UpdatePartnerStatus$,
  UpdatePartnerStatusCommand,
  UpdatePartnerStatusInputMessage$,
  UpdateTarget$,
  UsageLimit$,
  UsageLimitAlreadyExistsFault,
  UsageLimitAlreadyExistsFault$,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  UsageLimitLimitType,
  UsageLimitList$,
  UsageLimitNotFoundFault,
  UsageLimitNotFoundFault$,
  UsageLimitPeriod,
  VpcEndpoint$,
  VpcSecurityGroupMembership$,
  waitForClusterAvailable,
  waitForClusterDeleted,
  waitForClusterRestored,
  waitForSnapshotAvailable,
  waitUntilClusterAvailable,
  waitUntilClusterDeleted,
  waitUntilClusterRestored,
  waitUntilSnapshotAvailable,
  ZeroETLIntegrationStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RedshiftClient === "function");
assert(typeof Redshift === "function");
// commands
assert(typeof AcceptReservedNodeExchangeCommand === "function");
assert(typeof AcceptReservedNodeExchange$ === "object");
assert(typeof AddPartnerCommand === "function");
assert(typeof AddPartner$ === "object");
assert(typeof AssociateDataShareConsumerCommand === "function");
assert(typeof AssociateDataShareConsumer$ === "object");
assert(typeof AuthorizeClusterSecurityGroupIngressCommand === "function");
assert(typeof AuthorizeClusterSecurityGroupIngress$ === "object");
assert(typeof AuthorizeDataShareCommand === "function");
assert(typeof AuthorizeDataShare$ === "object");
assert(typeof AuthorizeEndpointAccessCommand === "function");
assert(typeof AuthorizeEndpointAccess$ === "object");
assert(typeof AuthorizeSnapshotAccessCommand === "function");
assert(typeof AuthorizeSnapshotAccess$ === "object");
assert(typeof BatchDeleteClusterSnapshotsCommand === "function");
assert(typeof BatchDeleteClusterSnapshots$ === "object");
assert(typeof BatchModifyClusterSnapshotsCommand === "function");
assert(typeof BatchModifyClusterSnapshots$ === "object");
assert(typeof CancelResizeCommand === "function");
assert(typeof CancelResize$ === "object");
assert(typeof CopyClusterSnapshotCommand === "function");
assert(typeof CopyClusterSnapshot$ === "object");
assert(typeof CreateAuthenticationProfileCommand === "function");
assert(typeof CreateAuthenticationProfile$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateClusterParameterGroupCommand === "function");
assert(typeof CreateClusterParameterGroup$ === "object");
assert(typeof CreateClusterSecurityGroupCommand === "function");
assert(typeof CreateClusterSecurityGroup$ === "object");
assert(typeof CreateClusterSnapshotCommand === "function");
assert(typeof CreateClusterSnapshot$ === "object");
assert(typeof CreateClusterSubnetGroupCommand === "function");
assert(typeof CreateClusterSubnetGroup$ === "object");
assert(typeof CreateCustomDomainAssociationCommand === "function");
assert(typeof CreateCustomDomainAssociation$ === "object");
assert(typeof CreateEndpointAccessCommand === "function");
assert(typeof CreateEndpointAccess$ === "object");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateEventSubscription$ === "object");
assert(typeof CreateHsmClientCertificateCommand === "function");
assert(typeof CreateHsmClientCertificate$ === "object");
assert(typeof CreateHsmConfigurationCommand === "function");
assert(typeof CreateHsmConfiguration$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateRedshiftIdcApplicationCommand === "function");
assert(typeof CreateRedshiftIdcApplication$ === "object");
assert(typeof CreateScheduledActionCommand === "function");
assert(typeof CreateScheduledAction$ === "object");
assert(typeof CreateSnapshotCopyGrantCommand === "function");
assert(typeof CreateSnapshotCopyGrant$ === "object");
assert(typeof CreateSnapshotScheduleCommand === "function");
assert(typeof CreateSnapshotSchedule$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof CreateUsageLimitCommand === "function");
assert(typeof CreateUsageLimit$ === "object");
assert(typeof DeauthorizeDataShareCommand === "function");
assert(typeof DeauthorizeDataShare$ === "object");
assert(typeof DeleteAuthenticationProfileCommand === "function");
assert(typeof DeleteAuthenticationProfile$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteClusterParameterGroupCommand === "function");
assert(typeof DeleteClusterParameterGroup$ === "object");
assert(typeof DeleteClusterSecurityGroupCommand === "function");
assert(typeof DeleteClusterSecurityGroup$ === "object");
assert(typeof DeleteClusterSnapshotCommand === "function");
assert(typeof DeleteClusterSnapshot$ === "object");
assert(typeof DeleteClusterSubnetGroupCommand === "function");
assert(typeof DeleteClusterSubnetGroup$ === "object");
assert(typeof DeleteCustomDomainAssociationCommand === "function");
assert(typeof DeleteCustomDomainAssociation$ === "object");
assert(typeof DeleteEndpointAccessCommand === "function");
assert(typeof DeleteEndpointAccess$ === "object");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteEventSubscription$ === "object");
assert(typeof DeleteHsmClientCertificateCommand === "function");
assert(typeof DeleteHsmClientCertificate$ === "object");
assert(typeof DeleteHsmConfigurationCommand === "function");
assert(typeof DeleteHsmConfiguration$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeletePartnerCommand === "function");
assert(typeof DeletePartner$ === "object");
assert(typeof DeleteRedshiftIdcApplicationCommand === "function");
assert(typeof DeleteRedshiftIdcApplication$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteScheduledAction$ === "object");
assert(typeof DeleteSnapshotCopyGrantCommand === "function");
assert(typeof DeleteSnapshotCopyGrant$ === "object");
assert(typeof DeleteSnapshotScheduleCommand === "function");
assert(typeof DeleteSnapshotSchedule$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteUsageLimitCommand === "function");
assert(typeof DeleteUsageLimit$ === "object");
assert(typeof DeregisterNamespaceCommand === "function");
assert(typeof DeregisterNamespace$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeAuthenticationProfilesCommand === "function");
assert(typeof DescribeAuthenticationProfiles$ === "object");
assert(typeof DescribeClusterDbRevisionsCommand === "function");
assert(typeof DescribeClusterDbRevisions$ === "object");
assert(typeof DescribeClusterParameterGroupsCommand === "function");
assert(typeof DescribeClusterParameterGroups$ === "object");
assert(typeof DescribeClusterParametersCommand === "function");
assert(typeof DescribeClusterParameters$ === "object");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusters$ === "object");
assert(typeof DescribeClusterSecurityGroupsCommand === "function");
assert(typeof DescribeClusterSecurityGroups$ === "object");
assert(typeof DescribeClusterSnapshotsCommand === "function");
assert(typeof DescribeClusterSnapshots$ === "object");
assert(typeof DescribeClusterSubnetGroupsCommand === "function");
assert(typeof DescribeClusterSubnetGroups$ === "object");
assert(typeof DescribeClusterTracksCommand === "function");
assert(typeof DescribeClusterTracks$ === "object");
assert(typeof DescribeClusterVersionsCommand === "function");
assert(typeof DescribeClusterVersions$ === "object");
assert(typeof DescribeCustomDomainAssociationsCommand === "function");
assert(typeof DescribeCustomDomainAssociations$ === "object");
assert(typeof DescribeDataSharesCommand === "function");
assert(typeof DescribeDataShares$ === "object");
assert(typeof DescribeDataSharesForConsumerCommand === "function");
assert(typeof DescribeDataSharesForConsumer$ === "object");
assert(typeof DescribeDataSharesForProducerCommand === "function");
assert(typeof DescribeDataSharesForProducer$ === "object");
assert(typeof DescribeDefaultClusterParametersCommand === "function");
assert(typeof DescribeDefaultClusterParameters$ === "object");
assert(typeof DescribeEndpointAccessCommand === "function");
assert(typeof DescribeEndpointAccess$ === "object");
assert(typeof DescribeEndpointAuthorizationCommand === "function");
assert(typeof DescribeEndpointAuthorization$ === "object");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventCategories$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeEventSubscriptions$ === "object");
assert(typeof DescribeHsmClientCertificatesCommand === "function");
assert(typeof DescribeHsmClientCertificates$ === "object");
assert(typeof DescribeHsmConfigurationsCommand === "function");
assert(typeof DescribeHsmConfigurations$ === "object");
assert(typeof DescribeInboundIntegrationsCommand === "function");
assert(typeof DescribeInboundIntegrations$ === "object");
assert(typeof DescribeIntegrationsCommand === "function");
assert(typeof DescribeIntegrations$ === "object");
assert(typeof DescribeLoggingStatusCommand === "function");
assert(typeof DescribeLoggingStatus$ === "object");
assert(typeof DescribeNodeConfigurationOptionsCommand === "function");
assert(typeof DescribeNodeConfigurationOptions$ === "object");
assert(typeof DescribeOrderableClusterOptionsCommand === "function");
assert(typeof DescribeOrderableClusterOptions$ === "object");
assert(typeof DescribePartnersCommand === "function");
assert(typeof DescribePartners$ === "object");
assert(typeof DescribeRedshiftIdcApplicationsCommand === "function");
assert(typeof DescribeRedshiftIdcApplications$ === "object");
assert(typeof DescribeReservedNodeExchangeStatusCommand === "function");
assert(typeof DescribeReservedNodeExchangeStatus$ === "object");
assert(typeof DescribeReservedNodeOfferingsCommand === "function");
assert(typeof DescribeReservedNodeOfferings$ === "object");
assert(typeof DescribeReservedNodesCommand === "function");
assert(typeof DescribeReservedNodes$ === "object");
assert(typeof DescribeResizeCommand === "function");
assert(typeof DescribeResize$ === "object");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof DescribeScheduledActions$ === "object");
assert(typeof DescribeSnapshotCopyGrantsCommand === "function");
assert(typeof DescribeSnapshotCopyGrants$ === "object");
assert(typeof DescribeSnapshotSchedulesCommand === "function");
assert(typeof DescribeSnapshotSchedules$ === "object");
assert(typeof DescribeStorageCommand === "function");
assert(typeof DescribeStorage$ === "object");
assert(typeof DescribeTableRestoreStatusCommand === "function");
assert(typeof DescribeTableRestoreStatus$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeUsageLimitsCommand === "function");
assert(typeof DescribeUsageLimits$ === "object");
assert(typeof DisableLoggingCommand === "function");
assert(typeof DisableLogging$ === "object");
assert(typeof DisableSnapshotCopyCommand === "function");
assert(typeof DisableSnapshotCopy$ === "object");
assert(typeof DisassociateDataShareConsumerCommand === "function");
assert(typeof DisassociateDataShareConsumer$ === "object");
assert(typeof EnableLoggingCommand === "function");
assert(typeof EnableLogging$ === "object");
assert(typeof EnableSnapshotCopyCommand === "function");
assert(typeof EnableSnapshotCopy$ === "object");
assert(typeof FailoverPrimaryComputeCommand === "function");
assert(typeof FailoverPrimaryCompute$ === "object");
assert(typeof GetClusterCredentialsCommand === "function");
assert(typeof GetClusterCredentials$ === "object");
assert(typeof GetClusterCredentialsWithIAMCommand === "function");
assert(typeof GetClusterCredentialsWithIAM$ === "object");
assert(typeof GetIdentityCenterAuthTokenCommand === "function");
assert(typeof GetIdentityCenterAuthToken$ === "object");
assert(typeof GetReservedNodeExchangeConfigurationOptionsCommand === "function");
assert(typeof GetReservedNodeExchangeConfigurationOptions$ === "object");
assert(typeof GetReservedNodeExchangeOfferingsCommand === "function");
assert(typeof GetReservedNodeExchangeOfferings$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ModifyAquaConfigurationCommand === "function");
assert(typeof ModifyAquaConfiguration$ === "object");
assert(typeof ModifyAuthenticationProfileCommand === "function");
assert(typeof ModifyAuthenticationProfile$ === "object");
assert(typeof ModifyClusterCommand === "function");
assert(typeof ModifyCluster$ === "object");
assert(typeof ModifyClusterDbRevisionCommand === "function");
assert(typeof ModifyClusterDbRevision$ === "object");
assert(typeof ModifyClusterIamRolesCommand === "function");
assert(typeof ModifyClusterIamRoles$ === "object");
assert(typeof ModifyClusterMaintenanceCommand === "function");
assert(typeof ModifyClusterMaintenance$ === "object");
assert(typeof ModifyClusterParameterGroupCommand === "function");
assert(typeof ModifyClusterParameterGroup$ === "object");
assert(typeof ModifyClusterSnapshotCommand === "function");
assert(typeof ModifyClusterSnapshot$ === "object");
assert(typeof ModifyClusterSnapshotScheduleCommand === "function");
assert(typeof ModifyClusterSnapshotSchedule$ === "object");
assert(typeof ModifyClusterSubnetGroupCommand === "function");
assert(typeof ModifyClusterSubnetGroup$ === "object");
assert(typeof ModifyCustomDomainAssociationCommand === "function");
assert(typeof ModifyCustomDomainAssociation$ === "object");
assert(typeof ModifyEndpointAccessCommand === "function");
assert(typeof ModifyEndpointAccess$ === "object");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyEventSubscription$ === "object");
assert(typeof ModifyIntegrationCommand === "function");
assert(typeof ModifyIntegration$ === "object");
assert(typeof ModifyLakehouseConfigurationCommand === "function");
assert(typeof ModifyLakehouseConfiguration$ === "object");
assert(typeof ModifyRedshiftIdcApplicationCommand === "function");
assert(typeof ModifyRedshiftIdcApplication$ === "object");
assert(typeof ModifyScheduledActionCommand === "function");
assert(typeof ModifyScheduledAction$ === "object");
assert(typeof ModifySnapshotCopyRetentionPeriodCommand === "function");
assert(typeof ModifySnapshotCopyRetentionPeriod$ === "object");
assert(typeof ModifySnapshotScheduleCommand === "function");
assert(typeof ModifySnapshotSchedule$ === "object");
assert(typeof ModifyUsageLimitCommand === "function");
assert(typeof ModifyUsageLimit$ === "object");
assert(typeof PauseClusterCommand === "function");
assert(typeof PauseCluster$ === "object");
assert(typeof PurchaseReservedNodeOfferingCommand === "function");
assert(typeof PurchaseReservedNodeOffering$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RebootClusterCommand === "function");
assert(typeof RebootCluster$ === "object");
assert(typeof RegisterNamespaceCommand === "function");
assert(typeof RegisterNamespace$ === "object");
assert(typeof RejectDataShareCommand === "function");
assert(typeof RejectDataShare$ === "object");
assert(typeof ResetClusterParameterGroupCommand === "function");
assert(typeof ResetClusterParameterGroup$ === "object");
assert(typeof ResizeClusterCommand === "function");
assert(typeof ResizeCluster$ === "object");
assert(typeof RestoreFromClusterSnapshotCommand === "function");
assert(typeof RestoreFromClusterSnapshot$ === "object");
assert(typeof RestoreTableFromClusterSnapshotCommand === "function");
assert(typeof RestoreTableFromClusterSnapshot$ === "object");
assert(typeof ResumeClusterCommand === "function");
assert(typeof ResumeCluster$ === "object");
assert(typeof RevokeClusterSecurityGroupIngressCommand === "function");
assert(typeof RevokeClusterSecurityGroupIngress$ === "object");
assert(typeof RevokeEndpointAccessCommand === "function");
assert(typeof RevokeEndpointAccess$ === "object");
assert(typeof RevokeSnapshotAccessCommand === "function");
assert(typeof RevokeSnapshotAccess$ === "object");
assert(typeof RotateEncryptionKeyCommand === "function");
assert(typeof RotateEncryptionKey$ === "object");
assert(typeof UpdatePartnerStatusCommand === "function");
assert(typeof UpdatePartnerStatus$ === "object");
// structural schemas
assert(typeof AcceptReservedNodeExchangeInputMessage$ === "object");
assert(typeof AcceptReservedNodeExchangeOutputMessage$ === "object");
assert(typeof AccountAttribute$ === "object");
assert(typeof AccountAttributeList$ === "object");
assert(typeof AccountWithRestoreAccess$ === "object");
assert(typeof AquaConfiguration$ === "object");
assert(typeof AssociateDataShareConsumerMessage$ === "object");
assert(typeof Association$ === "object");
assert(typeof AttributeValueTarget$ === "object");
assert(typeof AuthenticationProfile$ === "object");
assert(typeof AuthorizeClusterSecurityGroupIngressMessage$ === "object");
assert(typeof AuthorizeClusterSecurityGroupIngressResult$ === "object");
assert(typeof AuthorizeDataShareMessage$ === "object");
assert(typeof AuthorizedTokenIssuer$ === "object");
assert(typeof AuthorizeEndpointAccessMessage$ === "object");
assert(typeof AuthorizeSnapshotAccessMessage$ === "object");
assert(typeof AuthorizeSnapshotAccessResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof BatchDeleteClusterSnapshotsRequest$ === "object");
assert(typeof BatchDeleteClusterSnapshotsResult$ === "object");
assert(typeof BatchModifyClusterSnapshotsMessage$ === "object");
assert(typeof BatchModifyClusterSnapshotsOutputMessage$ === "object");
assert(typeof CancelResizeMessage$ === "object");
assert(typeof CertificateAssociation$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterAssociatedToSchedule$ === "object");
assert(typeof ClusterCredentials$ === "object");
assert(typeof ClusterDbRevision$ === "object");
assert(typeof ClusterDbRevisionsMessage$ === "object");
assert(typeof ClusterExtendedCredentials$ === "object");
assert(typeof ClusterIamRole$ === "object");
assert(typeof ClusterNode$ === "object");
assert(typeof ClusterParameterGroup$ === "object");
assert(typeof ClusterParameterGroupDetails$ === "object");
assert(typeof ClusterParameterGroupNameMessage$ === "object");
assert(typeof ClusterParameterGroupsMessage$ === "object");
assert(typeof ClusterParameterGroupStatus$ === "object");
assert(typeof ClusterParameterStatus$ === "object");
assert(typeof ClusterSecurityGroup$ === "object");
assert(typeof ClusterSecurityGroupMembership$ === "object");
assert(typeof ClusterSecurityGroupMessage$ === "object");
assert(typeof ClustersMessage$ === "object");
assert(typeof ClusterSnapshotCopyStatus$ === "object");
assert(typeof ClusterSubnetGroup$ === "object");
assert(typeof ClusterSubnetGroupMessage$ === "object");
assert(typeof ClusterVersion$ === "object");
assert(typeof ClusterVersionsMessage$ === "object");
assert(typeof Connect$ === "object");
assert(typeof CopyClusterSnapshotMessage$ === "object");
assert(typeof CopyClusterSnapshotResult$ === "object");
assert(typeof CreateAuthenticationProfileMessage$ === "object");
assert(typeof CreateAuthenticationProfileResult$ === "object");
assert(typeof CreateClusterMessage$ === "object");
assert(typeof CreateClusterParameterGroupMessage$ === "object");
assert(typeof CreateClusterParameterGroupResult$ === "object");
assert(typeof CreateClusterResult$ === "object");
assert(typeof CreateClusterSecurityGroupMessage$ === "object");
assert(typeof CreateClusterSecurityGroupResult$ === "object");
assert(typeof CreateClusterSnapshotMessage$ === "object");
assert(typeof CreateClusterSnapshotResult$ === "object");
assert(typeof CreateClusterSubnetGroupMessage$ === "object");
assert(typeof CreateClusterSubnetGroupResult$ === "object");
assert(typeof CreateCustomDomainAssociationMessage$ === "object");
assert(typeof CreateCustomDomainAssociationResult$ === "object");
assert(typeof CreateEndpointAccessMessage$ === "object");
assert(typeof CreateEventSubscriptionMessage$ === "object");
assert(typeof CreateEventSubscriptionResult$ === "object");
assert(typeof CreateHsmClientCertificateMessage$ === "object");
assert(typeof CreateHsmClientCertificateResult$ === "object");
assert(typeof CreateHsmConfigurationMessage$ === "object");
assert(typeof CreateHsmConfigurationResult$ === "object");
assert(typeof CreateIntegrationMessage$ === "object");
assert(typeof CreateRedshiftIdcApplicationMessage$ === "object");
assert(typeof CreateRedshiftIdcApplicationResult$ === "object");
assert(typeof CreateScheduledActionMessage$ === "object");
assert(typeof CreateSnapshotCopyGrantMessage$ === "object");
assert(typeof CreateSnapshotCopyGrantResult$ === "object");
assert(typeof CreateSnapshotScheduleMessage$ === "object");
assert(typeof CreateTagsMessage$ === "object");
assert(typeof CreateUsageLimitMessage$ === "object");
assert(typeof CustomDomainAssociationsMessage$ === "object");
assert(typeof CustomerStorageMessage$ === "object");
assert(typeof DataShare$ === "object");
assert(typeof DataShareAssociation$ === "object");
assert(typeof DataTransferProgress$ === "object");
assert(typeof DeauthorizeDataShareMessage$ === "object");
assert(typeof DefaultClusterParameters$ === "object");
assert(typeof DeferredMaintenanceWindow$ === "object");
assert(typeof DeleteAuthenticationProfileMessage$ === "object");
assert(typeof DeleteAuthenticationProfileResult$ === "object");
assert(typeof DeleteClusterMessage$ === "object");
assert(typeof DeleteClusterParameterGroupMessage$ === "object");
assert(typeof DeleteClusterResult$ === "object");
assert(typeof DeleteClusterSecurityGroupMessage$ === "object");
assert(typeof DeleteClusterSnapshotMessage$ === "object");
assert(typeof DeleteClusterSnapshotResult$ === "object");
assert(typeof DeleteClusterSubnetGroupMessage$ === "object");
assert(typeof DeleteCustomDomainAssociationMessage$ === "object");
assert(typeof DeleteEndpointAccessMessage$ === "object");
assert(typeof DeleteEventSubscriptionMessage$ === "object");
assert(typeof DeleteHsmClientCertificateMessage$ === "object");
assert(typeof DeleteHsmConfigurationMessage$ === "object");
assert(typeof DeleteIntegrationMessage$ === "object");
assert(typeof DeleteRedshiftIdcApplicationMessage$ === "object");
assert(typeof DeleteResourcePolicyMessage$ === "object");
assert(typeof DeleteScheduledActionMessage$ === "object");
assert(typeof DeleteSnapshotCopyGrantMessage$ === "object");
assert(typeof DeleteSnapshotScheduleMessage$ === "object");
assert(typeof DeleteTagsMessage$ === "object");
assert(typeof DeleteUsageLimitMessage$ === "object");
assert(typeof DeregisterNamespaceInputMessage$ === "object");
assert(typeof DeregisterNamespaceOutputMessage$ === "object");
assert(typeof DescribeAccountAttributesMessage$ === "object");
assert(typeof DescribeAuthenticationProfilesMessage$ === "object");
assert(typeof DescribeAuthenticationProfilesResult$ === "object");
assert(typeof DescribeClusterDbRevisionsMessage$ === "object");
assert(typeof DescribeClusterParameterGroupsMessage$ === "object");
assert(typeof DescribeClusterParametersMessage$ === "object");
assert(typeof DescribeClusterSecurityGroupsMessage$ === "object");
assert(typeof DescribeClustersMessage$ === "object");
assert(typeof DescribeClusterSnapshotsMessage$ === "object");
assert(typeof DescribeClusterSubnetGroupsMessage$ === "object");
assert(typeof DescribeClusterTracksMessage$ === "object");
assert(typeof DescribeClusterVersionsMessage$ === "object");
assert(typeof DescribeCustomDomainAssociationsMessage$ === "object");
assert(typeof DescribeDataSharesForConsumerMessage$ === "object");
assert(typeof DescribeDataSharesForConsumerResult$ === "object");
assert(typeof DescribeDataSharesForProducerMessage$ === "object");
assert(typeof DescribeDataSharesForProducerResult$ === "object");
assert(typeof DescribeDataSharesMessage$ === "object");
assert(typeof DescribeDataSharesResult$ === "object");
assert(typeof DescribeDefaultClusterParametersMessage$ === "object");
assert(typeof DescribeDefaultClusterParametersResult$ === "object");
assert(typeof DescribeEndpointAccessMessage$ === "object");
assert(typeof DescribeEndpointAuthorizationMessage$ === "object");
assert(typeof DescribeEventCategoriesMessage$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeEventSubscriptionsMessage$ === "object");
assert(typeof DescribeHsmClientCertificatesMessage$ === "object");
assert(typeof DescribeHsmConfigurationsMessage$ === "object");
assert(typeof DescribeInboundIntegrationsMessage$ === "object");
assert(typeof DescribeIntegrationsFilter$ === "object");
assert(typeof DescribeIntegrationsMessage$ === "object");
assert(typeof DescribeLoggingStatusMessage$ === "object");
assert(typeof DescribeNodeConfigurationOptionsMessage$ === "object");
assert(typeof DescribeOrderableClusterOptionsMessage$ === "object");
assert(typeof DescribePartnersInputMessage$ === "object");
assert(typeof DescribePartnersOutputMessage$ === "object");
assert(typeof DescribeRedshiftIdcApplicationsMessage$ === "object");
assert(typeof DescribeRedshiftIdcApplicationsResult$ === "object");
assert(typeof DescribeReservedNodeExchangeStatusInputMessage$ === "object");
assert(typeof DescribeReservedNodeExchangeStatusOutputMessage$ === "object");
assert(typeof DescribeReservedNodeOfferingsMessage$ === "object");
assert(typeof DescribeReservedNodesMessage$ === "object");
assert(typeof DescribeResizeMessage$ === "object");
assert(typeof DescribeScheduledActionsMessage$ === "object");
assert(typeof DescribeSnapshotCopyGrantsMessage$ === "object");
assert(typeof DescribeSnapshotSchedulesMessage$ === "object");
assert(typeof DescribeSnapshotSchedulesOutputMessage$ === "object");
assert(typeof DescribeTableRestoreStatusMessage$ === "object");
assert(typeof DescribeTagsMessage$ === "object");
assert(typeof DescribeUsageLimitsMessage$ === "object");
assert(typeof DisableLoggingMessage$ === "object");
assert(typeof DisableSnapshotCopyMessage$ === "object");
assert(typeof DisableSnapshotCopyResult$ === "object");
assert(typeof DisassociateDataShareConsumerMessage$ === "object");
assert(typeof EC2SecurityGroup$ === "object");
assert(typeof ElasticIpStatus$ === "object");
assert(typeof EnableLoggingMessage$ === "object");
assert(typeof EnableSnapshotCopyMessage$ === "object");
assert(typeof EnableSnapshotCopyResult$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointAccess$ === "object");
assert(typeof EndpointAccessList$ === "object");
assert(typeof EndpointAuthorization$ === "object");
assert(typeof EndpointAuthorizationList$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventCategoriesMap$ === "object");
assert(typeof EventCategoriesMessage$ === "object");
assert(typeof EventInfoMap$ === "object");
assert(typeof EventsMessage$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof EventSubscriptionsMessage$ === "object");
assert(typeof FailoverPrimaryComputeInputMessage$ === "object");
assert(typeof FailoverPrimaryComputeResult$ === "object");
assert(typeof GetClusterCredentialsMessage$ === "object");
assert(typeof GetClusterCredentialsWithIAMMessage$ === "object");
assert(typeof GetIdentityCenterAuthTokenRequest$ === "object");
assert(typeof GetIdentityCenterAuthTokenResponse$ === "object");
assert(typeof GetReservedNodeExchangeConfigurationOptionsInputMessage$ === "object");
assert(typeof GetReservedNodeExchangeConfigurationOptionsOutputMessage$ === "object");
assert(typeof GetReservedNodeExchangeOfferingsInputMessage$ === "object");
assert(typeof GetReservedNodeExchangeOfferingsOutputMessage$ === "object");
assert(typeof GetResourcePolicyMessage$ === "object");
assert(typeof GetResourcePolicyResult$ === "object");
assert(typeof HsmClientCertificate$ === "object");
assert(typeof HsmClientCertificateMessage$ === "object");
assert(typeof HsmConfiguration$ === "object");
assert(typeof HsmConfigurationMessage$ === "object");
assert(typeof HsmStatus$ === "object");
assert(typeof InboundIntegration$ === "object");
assert(typeof InboundIntegrationsMessage$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationError$ === "object");
assert(typeof IntegrationsMessage$ === "object");
assert(typeof IPRange$ === "object");
assert(typeof LakeFormationQuery$ === "object");
assert(typeof LakeFormationScopeUnion$ === "object");
assert(typeof LakehouseConfiguration$ === "object");
assert(typeof ListRecommendationsMessage$ === "object");
assert(typeof ListRecommendationsResult$ === "object");
assert(typeof LoggingStatus$ === "object");
assert(typeof MaintenanceTrack$ === "object");
assert(typeof ModifyAquaInputMessage$ === "object");
assert(typeof ModifyAquaOutputMessage$ === "object");
assert(typeof ModifyAuthenticationProfileMessage$ === "object");
assert(typeof ModifyAuthenticationProfileResult$ === "object");
assert(typeof ModifyClusterDbRevisionMessage$ === "object");
assert(typeof ModifyClusterDbRevisionResult$ === "object");
assert(typeof ModifyClusterIamRolesMessage$ === "object");
assert(typeof ModifyClusterIamRolesResult$ === "object");
assert(typeof ModifyClusterMaintenanceMessage$ === "object");
assert(typeof ModifyClusterMaintenanceResult$ === "object");
assert(typeof ModifyClusterMessage$ === "object");
assert(typeof ModifyClusterParameterGroupMessage$ === "object");
assert(typeof ModifyClusterResult$ === "object");
assert(typeof ModifyClusterSnapshotMessage$ === "object");
assert(typeof ModifyClusterSnapshotResult$ === "object");
assert(typeof ModifyClusterSnapshotScheduleMessage$ === "object");
assert(typeof ModifyClusterSubnetGroupMessage$ === "object");
assert(typeof ModifyClusterSubnetGroupResult$ === "object");
assert(typeof ModifyCustomDomainAssociationMessage$ === "object");
assert(typeof ModifyCustomDomainAssociationResult$ === "object");
assert(typeof ModifyEndpointAccessMessage$ === "object");
assert(typeof ModifyEventSubscriptionMessage$ === "object");
assert(typeof ModifyEventSubscriptionResult$ === "object");
assert(typeof ModifyIntegrationMessage$ === "object");
assert(typeof ModifyLakehouseConfigurationMessage$ === "object");
assert(typeof ModifyRedshiftIdcApplicationMessage$ === "object");
assert(typeof ModifyRedshiftIdcApplicationResult$ === "object");
assert(typeof ModifyScheduledActionMessage$ === "object");
assert(typeof ModifySnapshotCopyRetentionPeriodMessage$ === "object");
assert(typeof ModifySnapshotCopyRetentionPeriodResult$ === "object");
assert(typeof ModifySnapshotScheduleMessage$ === "object");
assert(typeof ModifyUsageLimitMessage$ === "object");
assert(typeof NamespaceIdentifierUnion$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof NodeConfigurationOption$ === "object");
assert(typeof NodeConfigurationOptionsFilter$ === "object");
assert(typeof NodeConfigurationOptionsMessage$ === "object");
assert(typeof OrderableClusterOption$ === "object");
assert(typeof OrderableClusterOptionsMessage$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof PartnerIntegrationInfo$ === "object");
assert(typeof PartnerIntegrationInputMessage$ === "object");
assert(typeof PartnerIntegrationOutputMessage$ === "object");
assert(typeof PauseClusterMessage$ === "object");
assert(typeof PauseClusterResult$ === "object");
assert(typeof PendingModifiedValues$ === "object");
assert(typeof ProvisionedIdentifier$ === "object");
assert(typeof PurchaseReservedNodeOfferingMessage$ === "object");
assert(typeof PurchaseReservedNodeOfferingResult$ === "object");
assert(typeof PutResourcePolicyMessage$ === "object");
assert(typeof PutResourcePolicyResult$ === "object");
assert(typeof ReadWriteAccess$ === "object");
assert(typeof RebootClusterMessage$ === "object");
assert(typeof RebootClusterResult$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendedAction$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RedshiftIdcApplication$ === "object");
assert(typeof RedshiftScopeUnion$ === "object");
assert(typeof ReferenceLink$ === "object");
assert(typeof RegisterNamespaceInputMessage$ === "object");
assert(typeof RegisterNamespaceOutputMessage$ === "object");
assert(typeof RejectDataShareMessage$ === "object");
assert(typeof ReservedNode$ === "object");
assert(typeof ReservedNodeConfigurationOption$ === "object");
assert(typeof ReservedNodeExchangeStatus$ === "object");
assert(typeof ReservedNodeOffering$ === "object");
assert(typeof ReservedNodeOfferingsMessage$ === "object");
assert(typeof ReservedNodesMessage$ === "object");
assert(typeof ResetClusterParameterGroupMessage$ === "object");
assert(typeof ResizeClusterMessage$ === "object");
assert(typeof ResizeClusterResult$ === "object");
assert(typeof ResizeInfo$ === "object");
assert(typeof ResizeProgressMessage$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof RestoreFromClusterSnapshotMessage$ === "object");
assert(typeof RestoreFromClusterSnapshotResult$ === "object");
assert(typeof RestoreStatus$ === "object");
assert(typeof RestoreTableFromClusterSnapshotMessage$ === "object");
assert(typeof RestoreTableFromClusterSnapshotResult$ === "object");
assert(typeof ResumeClusterMessage$ === "object");
assert(typeof ResumeClusterResult$ === "object");
assert(typeof RevisionTarget$ === "object");
assert(typeof RevokeClusterSecurityGroupIngressMessage$ === "object");
assert(typeof RevokeClusterSecurityGroupIngressResult$ === "object");
assert(typeof RevokeEndpointAccessMessage$ === "object");
assert(typeof RevokeSnapshotAccessMessage$ === "object");
assert(typeof RevokeSnapshotAccessResult$ === "object");
assert(typeof RotateEncryptionKeyMessage$ === "object");
assert(typeof RotateEncryptionKeyResult$ === "object");
assert(typeof S3AccessGrantsScopeUnion$ === "object");
assert(typeof ScheduledAction$ === "object");
assert(typeof ScheduledActionFilter$ === "object");
assert(typeof ScheduledActionsMessage$ === "object");
assert(typeof ScheduledActionType$ === "object");
assert(typeof SecondaryClusterInfo$ === "object");
assert(typeof ServerlessIdentifier$ === "object");
assert(typeof ServiceIntegrationsUnion$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof SnapshotCopyGrant$ === "object");
assert(typeof SnapshotCopyGrantMessage$ === "object");
assert(typeof SnapshotErrorMessage$ === "object");
assert(typeof SnapshotMessage$ === "object");
assert(typeof SnapshotSchedule$ === "object");
assert(typeof SnapshotSortingEntity$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SupportedOperation$ === "object");
assert(typeof SupportedPlatform$ === "object");
assert(typeof TableRestoreStatus$ === "object");
assert(typeof TableRestoreStatusMessage$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TaggedResource$ === "object");
assert(typeof TaggedResourceListMessage$ === "object");
assert(typeof TrackListMessage$ === "object");
assert(typeof UpdatePartnerStatusInputMessage$ === "object");
assert(typeof UpdateTarget$ === "object");
assert(typeof UsageLimit$ === "object");
assert(typeof UsageLimitList$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
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
assert(typeof AccessToClusterDeniedFault$ === "object");
assert(AccessToSnapshotDeniedFault.prototype instanceof RedshiftServiceException);
assert(typeof AccessToSnapshotDeniedFault$ === "object");
assert(AuthenticationProfileAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthenticationProfileAlreadyExistsFault$ === "object");
assert(AuthenticationProfileNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthenticationProfileNotFoundFault$ === "object");
assert(AuthenticationProfileQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthenticationProfileQuotaExceededFault$ === "object");
assert(AuthorizationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthorizationAlreadyExistsFault$ === "object");
assert(AuthorizationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthorizationNotFoundFault$ === "object");
assert(AuthorizationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof AuthorizationQuotaExceededFault$ === "object");
assert(BatchDeleteRequestSizeExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof BatchDeleteRequestSizeExceededFault$ === "object");
assert(BatchModifyClusterSnapshotsLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof BatchModifyClusterSnapshotsLimitExceededFault$ === "object");
assert(BucketNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof BucketNotFoundFault$ === "object");
assert(ClusterAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterAlreadyExistsFault$ === "object");
assert(ClusterNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterNotFoundFault$ === "object");
assert(ClusterOnLatestRevisionFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterOnLatestRevisionFault$ === "object");
assert(ClusterParameterGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterParameterGroupAlreadyExistsFault$ === "object");
assert(ClusterParameterGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterParameterGroupNotFoundFault$ === "object");
assert(ClusterParameterGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterParameterGroupQuotaExceededFault$ === "object");
assert(ClusterQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterQuotaExceededFault$ === "object");
assert(ClusterSecurityGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSecurityGroupAlreadyExistsFault$ === "object");
assert(ClusterSecurityGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSecurityGroupNotFoundFault$ === "object");
assert(ClusterSecurityGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSecurityGroupQuotaExceededFault$ === "object");
assert(ClusterSnapshotAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSnapshotAlreadyExistsFault$ === "object");
assert(ClusterSnapshotNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSnapshotNotFoundFault$ === "object");
assert(ClusterSnapshotQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSnapshotQuotaExceededFault$ === "object");
assert(ClusterSubnetGroupAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSubnetGroupAlreadyExistsFault$ === "object");
assert(ClusterSubnetGroupNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSubnetGroupNotFoundFault$ === "object");
assert(ClusterSubnetGroupQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSubnetGroupQuotaExceededFault$ === "object");
assert(ClusterSubnetQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ClusterSubnetQuotaExceededFault$ === "object");
assert(ConflictPolicyUpdateFault.prototype instanceof RedshiftServiceException);
assert(typeof ConflictPolicyUpdateFault$ === "object");
assert(CopyToRegionDisabledFault.prototype instanceof RedshiftServiceException);
assert(typeof CopyToRegionDisabledFault$ === "object");
assert(CustomCnameAssociationFault.prototype instanceof RedshiftServiceException);
assert(typeof CustomCnameAssociationFault$ === "object");
assert(CustomDomainAssociationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof CustomDomainAssociationNotFoundFault$ === "object");
assert(DependentServiceAccessDeniedFault.prototype instanceof RedshiftServiceException);
assert(typeof DependentServiceAccessDeniedFault$ === "object");
assert(DependentServiceRequestThrottlingFault.prototype instanceof RedshiftServiceException);
assert(typeof DependentServiceRequestThrottlingFault$ === "object");
assert(DependentServiceUnavailableFault.prototype instanceof RedshiftServiceException);
assert(typeof DependentServiceUnavailableFault$ === "object");
assert(EndpointAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointAlreadyExistsFault$ === "object");
assert(EndpointAuthorizationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointAuthorizationAlreadyExistsFault$ === "object");
assert(EndpointAuthorizationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointAuthorizationNotFoundFault$ === "object");
assert(EndpointAuthorizationsPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointAuthorizationsPerClusterLimitExceededFault$ === "object");
assert(EndpointNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointNotFoundFault$ === "object");
assert(EndpointsPerAuthorizationLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointsPerAuthorizationLimitExceededFault$ === "object");
assert(EndpointsPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof EndpointsPerClusterLimitExceededFault$ === "object");
assert(EventSubscriptionQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof EventSubscriptionQuotaExceededFault$ === "object");
assert(HsmClientCertificateAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmClientCertificateAlreadyExistsFault$ === "object");
assert(HsmClientCertificateNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmClientCertificateNotFoundFault$ === "object");
assert(HsmClientCertificateQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmClientCertificateQuotaExceededFault$ === "object");
assert(HsmConfigurationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmConfigurationAlreadyExistsFault$ === "object");
assert(HsmConfigurationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmConfigurationNotFoundFault$ === "object");
assert(HsmConfigurationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof HsmConfigurationQuotaExceededFault$ === "object");
assert(IncompatibleOrderableOptions.prototype instanceof RedshiftServiceException);
assert(typeof IncompatibleOrderableOptions$ === "object");
assert(InProgressTableRestoreQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof InProgressTableRestoreQuotaExceededFault$ === "object");
assert(InsufficientClusterCapacityFault.prototype instanceof RedshiftServiceException);
assert(typeof InsufficientClusterCapacityFault$ === "object");
assert(InsufficientS3BucketPolicyFault.prototype instanceof RedshiftServiceException);
assert(typeof InsufficientS3BucketPolicyFault$ === "object");
assert(IntegrationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationAlreadyExistsFault$ === "object");
assert(IntegrationConflictOperationFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationConflictOperationFault$ === "object");
assert(IntegrationConflictStateFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationConflictStateFault$ === "object");
assert(IntegrationNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationNotFoundFault$ === "object");
assert(IntegrationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationQuotaExceededFault$ === "object");
assert(IntegrationSourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationSourceNotFoundFault$ === "object");
assert(IntegrationTargetNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof IntegrationTargetNotFoundFault$ === "object");
assert(InvalidAuthenticationProfileRequestFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidAuthenticationProfileRequestFault$ === "object");
assert(InvalidAuthorizationStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidAuthorizationStateFault$ === "object");
assert(InvalidClusterParameterGroupStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterParameterGroupStateFault$ === "object");
assert(InvalidClusterSecurityGroupStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterSecurityGroupStateFault$ === "object");
assert(InvalidClusterSnapshotScheduleStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterSnapshotScheduleStateFault$ === "object");
assert(InvalidClusterSnapshotStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterSnapshotStateFault$ === "object");
assert(InvalidClusterStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterStateFault$ === "object");
assert(InvalidClusterSubnetGroupStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterSubnetGroupStateFault$ === "object");
assert(InvalidClusterSubnetStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterSubnetStateFault$ === "object");
assert(InvalidClusterTrackFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidClusterTrackFault$ === "object");
assert(InvalidDataShareFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidDataShareFault$ === "object");
assert(InvalidElasticIpFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidElasticIpFault$ === "object");
assert(InvalidEndpointStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidEndpointStateFault$ === "object");
assert(InvalidHsmClientCertificateStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidHsmClientCertificateStateFault$ === "object");
assert(InvalidHsmConfigurationStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidHsmConfigurationStateFault$ === "object");
assert(InvalidNamespaceFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidNamespaceFault$ === "object");
assert(InvalidPolicyFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidPolicyFault$ === "object");
assert(InvalidReservedNodeStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidReservedNodeStateFault$ === "object");
assert(InvalidRestoreFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidRestoreFault$ === "object");
assert(InvalidRetentionPeriodFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidRetentionPeriodFault$ === "object");
assert(InvalidS3BucketNameFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidS3BucketNameFault$ === "object");
assert(InvalidS3KeyPrefixFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidS3KeyPrefixFault$ === "object");
assert(InvalidScheduledActionFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidScheduledActionFault$ === "object");
assert(InvalidScheduleFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidScheduleFault$ === "object");
assert(InvalidSnapshotCopyGrantStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidSnapshotCopyGrantStateFault$ === "object");
assert(InvalidSubnet.prototype instanceof RedshiftServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidSubscriptionStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidSubscriptionStateFault$ === "object");
assert(InvalidTableRestoreArgumentFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidTableRestoreArgumentFault$ === "object");
assert(InvalidTagFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidTagFault$ === "object");
assert(InvalidUsageLimitFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidUsageLimitFault$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof RedshiftServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(Ipv6CidrBlockNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof Ipv6CidrBlockNotFoundFault$ === "object");
assert(LimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof LimitExceededFault$ === "object");
assert(NumberOfNodesPerClusterLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof NumberOfNodesPerClusterLimitExceededFault$ === "object");
assert(NumberOfNodesQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof NumberOfNodesQuotaExceededFault$ === "object");
assert(PartnerNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof PartnerNotFoundFault$ === "object");
assert(RedshiftIdcApplicationAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof RedshiftIdcApplicationAlreadyExistsFault$ === "object");
assert(RedshiftIdcApplicationNotExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof RedshiftIdcApplicationNotExistsFault$ === "object");
assert(RedshiftIdcApplicationQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof RedshiftIdcApplicationQuotaExceededFault$ === "object");
assert(RedshiftInvalidParameterFault.prototype instanceof RedshiftServiceException);
assert(typeof RedshiftInvalidParameterFault$ === "object");
assert(ReservedNodeAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeAlreadyExistsFault$ === "object");
assert(ReservedNodeAlreadyMigratedFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeAlreadyMigratedFault$ === "object");
assert(ReservedNodeExchangeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeExchangeNotFoundFault$ === "object");
assert(ReservedNodeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeNotFoundFault$ === "object");
assert(ReservedNodeOfferingNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeOfferingNotFoundFault$ === "object");
assert(ReservedNodeQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ReservedNodeQuotaExceededFault$ === "object");
assert(ResizeNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ResizeNotFoundFault$ === "object");
assert(ResourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ResourceNotFoundFault$ === "object");
assert(ScheduledActionAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof ScheduledActionAlreadyExistsFault$ === "object");
assert(ScheduledActionNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof ScheduledActionNotFoundFault$ === "object");
assert(ScheduledActionQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof ScheduledActionQuotaExceededFault$ === "object");
assert(ScheduledActionTypeUnsupportedFault.prototype instanceof RedshiftServiceException);
assert(typeof ScheduledActionTypeUnsupportedFault$ === "object");
assert(ScheduleDefinitionTypeUnsupportedFault.prototype instanceof RedshiftServiceException);
assert(typeof ScheduleDefinitionTypeUnsupportedFault$ === "object");
assert(SnapshotCopyAlreadyDisabledFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyAlreadyDisabledFault$ === "object");
assert(SnapshotCopyAlreadyEnabledFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyAlreadyEnabledFault$ === "object");
assert(SnapshotCopyDisabledFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyDisabledFault$ === "object");
assert(SnapshotCopyGrantAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyGrantAlreadyExistsFault$ === "object");
assert(SnapshotCopyGrantNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyGrantNotFoundFault$ === "object");
assert(SnapshotCopyGrantQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotCopyGrantQuotaExceededFault$ === "object");
assert(SnapshotScheduleAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotScheduleAlreadyExistsFault$ === "object");
assert(SnapshotScheduleNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotScheduleNotFoundFault$ === "object");
assert(SnapshotScheduleQuotaExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotScheduleQuotaExceededFault$ === "object");
assert(SnapshotScheduleUpdateInProgressFault.prototype instanceof RedshiftServiceException);
assert(typeof SnapshotScheduleUpdateInProgressFault$ === "object");
assert(SNSInvalidTopicFault.prototype instanceof RedshiftServiceException);
assert(typeof SNSInvalidTopicFault$ === "object");
assert(SNSNoAuthorizationFault.prototype instanceof RedshiftServiceException);
assert(typeof SNSNoAuthorizationFault$ === "object");
assert(SNSTopicArnNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SNSTopicArnNotFoundFault$ === "object");
assert(SourceNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SourceNotFoundFault$ === "object");
assert(SubnetAlreadyInUse.prototype instanceof RedshiftServiceException);
assert(typeof SubnetAlreadyInUse$ === "object");
assert(SubscriptionAlreadyExistFault.prototype instanceof RedshiftServiceException);
assert(typeof SubscriptionAlreadyExistFault$ === "object");
assert(SubscriptionCategoryNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SubscriptionCategoryNotFoundFault$ === "object");
assert(SubscriptionEventIdNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SubscriptionEventIdNotFoundFault$ === "object");
assert(SubscriptionNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SubscriptionNotFoundFault$ === "object");
assert(SubscriptionSeverityNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof SubscriptionSeverityNotFoundFault$ === "object");
assert(TableLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof TableLimitExceededFault$ === "object");
assert(TableRestoreNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof TableRestoreNotFoundFault$ === "object");
assert(TagLimitExceededFault.prototype instanceof RedshiftServiceException);
assert(typeof TagLimitExceededFault$ === "object");
assert(UnauthorizedOperation.prototype instanceof RedshiftServiceException);
assert(typeof UnauthorizedOperation$ === "object");
assert(UnauthorizedPartnerIntegrationFault.prototype instanceof RedshiftServiceException);
assert(typeof UnauthorizedPartnerIntegrationFault$ === "object");
assert(UnknownSnapshotCopyRegionFault.prototype instanceof RedshiftServiceException);
assert(typeof UnknownSnapshotCopyRegionFault$ === "object");
assert(UnsupportedOperationFault.prototype instanceof RedshiftServiceException);
assert(typeof UnsupportedOperationFault$ === "object");
assert(UnsupportedOptionFault.prototype instanceof RedshiftServiceException);
assert(typeof UnsupportedOptionFault$ === "object");
assert(UsageLimitAlreadyExistsFault.prototype instanceof RedshiftServiceException);
assert(typeof UsageLimitAlreadyExistsFault$ === "object");
assert(UsageLimitNotFoundFault.prototype instanceof RedshiftServiceException);
assert(typeof UsageLimitNotFoundFault$ === "object");
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
