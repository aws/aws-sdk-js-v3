import {
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  AcceptAddressTransferCommand,
  AcceptCapacityReservationBillingOwnershipCommand,
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcPeeringConnectionCommand,
  AccountAttributeName,
  ActivityStatus,
  AddressAttributeName,
  AddressFamily,
  AddressTransferStatus,
  AdvertiseByoipCidrCommand,
  Affinity,
  AllocateAddressCommand,
  AllocateHostsCommand,
  AllocateIpamPoolCidrCommand,
  AllocationState,
  AllocationStrategy,
  AllocationType,
  AllowedImagesSettingsDisabledState,
  AllowedImagesSettingsEnabledState,
  AllowsMultipleInstanceTypes,
  AmdSevSnpSpecification,
  AnalysisStatus,
  ApplianceModeSupportValue,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  ArchitectureType,
  ArchitectureValues,
  AsnAssociationState,
  AsnState,
  AssignIpv6AddressesCommand,
  AssignPrivateIpAddressesCommand,
  AssignPrivateNatGatewayAddressCommand,
  AssociateAddressCommand,
  AssociateCapacityReservationBillingOwnerCommand,
  AssociateClientVpnTargetNetworkCommand,
  AssociateDhcpOptionsCommand,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateIamInstanceProfileCommand,
  AssociateInstanceEventWindowCommand,
  AssociateIpamByoasnCommand,
  AssociateIpamResourceDiscoveryCommand,
  AssociateNatGatewayAddressCommand,
  AssociateRouteServerCommand,
  AssociateRouteTableCommand,
  AssociateSecurityGroupVpcCommand,
  AssociateSubnetCidrBlockCommand,
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayRouteTableCommand,
  AssociateTrunkInterfaceCommand,
  AssociateVpcCidrBlockCommand,
  AssociatedNetworkType,
  AssociationStatusCode,
  AttachClassicLinkVpcCommand,
  AttachInternetGatewayCommand,
  AttachNetworkInterfaceCommand,
  AttachVerifiedAccessTrustProviderCommand,
  AttachVolumeCommand,
  AttachVpnGatewayCommand,
  AttachmentLimitType,
  AttachmentStatus,
  AuthorizeClientVpnIngressCommand,
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupIngressCommand,
  AutoAcceptSharedAssociationsValue,
  AutoAcceptSharedAttachmentsValue,
  AutoPlacement,
  AutoProvisionZonesState,
  AutoScalingIpsState,
  AvailabilityMode,
  AvailabilityZoneOptInStatus,
  AvailabilityZoneState,
  BandwidthWeightingType,
  BareMetal,
  BatchState,
  BgpStatus,
  BlockPublicAccessMode,
  BootModeType,
  BootModeValues,
  BundleInstanceCommand,
  BundleTaskState,
  BurstablePerformance,
  ByoipCidrState,
  CallerRole,
  CancelBatchErrorCode,
  CancelBundleTaskCommand,
  CancelCapacityReservationCommand,
  CancelCapacityReservationFleetsCommand,
  CancelConversionTaskCommand,
  CancelDeclarativePoliciesReportCommand,
  CancelExportTaskCommand,
  CancelImageLaunchPermissionCommand,
  CancelImportTaskCommand,
  CancelReservedInstancesListingCommand,
  CancelSpotFleetRequestsCommand,
  CancelSpotInstanceRequestState,
  CancelSpotInstanceRequestsCommand,
  CapacityBlockExtensionStatus,
  CapacityBlockInterconnectStatus,
  CapacityBlockResourceState,
  CapacityManagerDataExportStatus,
  CapacityManagerStatus,
  CapacityReservationBillingRequestStatus,
  CapacityReservationDeliveryPreference,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationPreference,
  CapacityReservationState,
  CapacityReservationTenancy,
  CapacityReservationType,
  CapacityTenancy,
  CarrierGatewayState,
  ClientCertificateRevocationListStatusCode,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatusCode,
  ClientVpnConnectionStatusCode,
  ClientVpnEndpointAttributeStatusCode,
  ClientVpnEndpointStatusCode,
  ClientVpnRouteStatusCode,
  Comparison,
  ConfirmProductInstanceCommand,
  ConnectionNotificationState,
  ConnectionNotificationType,
  ConnectivityType,
  ContainerFormat,
  ConversionTaskState,
  CopyFpgaImageCommand,
  CopyImageCommand,
  CopySnapshotCommand,
  CopyTagsFromSource,
  CopyVolumesCommand,
  CpuManufacturer,
  CreateCapacityManagerDataExportCommand,
  CreateCapacityReservationBySplittingCommand,
  CreateCapacityReservationCommand,
  CreateCapacityReservationFleetCommand,
  CreateCarrierGatewayCommand,
  CreateClientVpnEndpointCommand,
  CreateClientVpnRouteCommand,
  CreateCoipCidrCommand,
  CreateCoipPoolCommand,
  CreateCustomerGatewayCommand,
  CreateDefaultSubnetCommand,
  CreateDefaultVpcCommand,
  CreateDelegateMacVolumeOwnershipTaskCommand,
  CreateDhcpOptionsCommand,
  CreateEgressOnlyInternetGatewayCommand,
  CreateFleetCommand,
  CreateFlowLogsCommand,
  CreateFpgaImageCommand,
  CreateImageCommand,
  CreateImageUsageReportCommand,
  CreateInstanceConnectEndpointCommand,
  CreateInstanceEventWindowCommand,
  CreateInstanceExportTaskCommand,
  CreateInternetGatewayCommand,
  CreateInterruptibleCapacityReservationAllocationCommand,
  CreateIpamCommand,
  CreateIpamExternalResourceVerificationTokenCommand,
  CreateIpamPolicyCommand,
  CreateIpamPoolCommand,
  CreateIpamPrefixListResolverCommand,
  CreateIpamPrefixListResolverTargetCommand,
  CreateIpamResourceDiscoveryCommand,
  CreateIpamScopeCommand,
  CreateKeyPairCommand,
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateVersionCommand,
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateLocalGatewayVirtualInterfaceCommand,
  CreateLocalGatewayVirtualInterfaceGroupCommand,
  CreateMacSystemIntegrityProtectionModificationTaskCommand,
  CreateManagedPrefixListCommand,
  CreateNatGatewayCommand,
  CreateNetworkAclCommand,
  CreateNetworkAclEntryCommand,
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsPathCommand,
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfacePermissionCommand,
  CreatePlacementGroupCommand,
  CreatePublicIpv4PoolCommand,
  CreateReplaceRootVolumeTaskCommand,
  CreateReservedInstancesListingCommand,
  CreateRestoreImageTaskCommand,
  CreateRouteCommand,
  CreateRouteServerCommand,
  CreateRouteServerEndpointCommand,
  CreateRouteServerPeerCommand,
  CreateRouteTableCommand,
  CreateSecurityGroupCommand,
  CreateSnapshotCommand,
  CreateSnapshotsCommand,
  CreateSpotDatafeedSubscriptionCommand,
  CreateStoreImageTaskCommand,
  CreateSubnetCidrReservationCommand,
  CreateSubnetCommand,
  CreateTagsCommand,
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorTargetCommand,
  CreateTransitGatewayCommand,
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayMeteringPolicyCommand,
  CreateTransitGatewayMeteringPolicyEntryCommand,
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayVpcAttachmentCommand,
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessTrustProviderCommand,
  CreateVolumeCommand,
  CreateVpcBlockPublicAccessExclusionCommand,
  CreateVpcCommand,
  CreateVpcEncryptionControlCommand,
  CreateVpcEndpointCommand,
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcPeeringConnectionCommand,
  CreateVpnConcentratorCommand,
  CreateVpnConnectionCommand,
  CreateVpnConnectionRouteCommand,
  CreateVpnGatewayCommand,
  CurrencyCodeValues,
  DatafeedSubscriptionState,
  DefaultInstanceMetadataEndpointState,
  DefaultInstanceMetadataTagsState,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DefaultTargetCapacityType,
  DeleteCapacityManagerDataExportCommand,
  DeleteCarrierGatewayCommand,
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnRouteCommand,
  DeleteCoipCidrCommand,
  DeleteCoipPoolCommand,
  DeleteCustomerGatewayCommand,
  DeleteDhcpOptionsCommand,
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteFleetErrorCode,
  DeleteFleetsCommand,
  DeleteFlowLogsCommand,
  DeleteFpgaImageCommand,
  DeleteImageUsageReportCommand,
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceEventWindowCommand,
  DeleteInternetGatewayCommand,
  DeleteIpamCommand,
  DeleteIpamExternalResourceVerificationTokenCommand,
  DeleteIpamPolicyCommand,
  DeleteIpamPoolCommand,
  DeleteIpamPrefixListResolverCommand,
  DeleteIpamPrefixListResolverTargetCommand,
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamScopeCommand,
  DeleteKeyPairCommand,
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateVersionsCommand,
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteLocalGatewayVirtualInterfaceCommand,
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
  DeleteManagedPrefixListCommand,
  DeleteNatGatewayCommand,
  DeleteNetworkAclCommand,
  DeleteNetworkAclEntryCommand,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfacePermissionCommand,
  DeletePlacementGroupCommand,
  DeletePublicIpv4PoolCommand,
  DeleteQueuedReservedInstancesCommand,
  DeleteQueuedReservedInstancesErrorCode,
  DeleteRouteCommand,
  DeleteRouteServerCommand,
  DeleteRouteServerEndpointCommand,
  DeleteRouteServerPeerCommand,
  DeleteRouteTableCommand,
  DeleteSecurityGroupCommand,
  DeleteSnapshotCommand,
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSubnetCidrReservationCommand,
  DeleteSubnetCommand,
  DeleteTagsCommand,
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorTargetCommand,
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayMeteringPolicyCommand,
  DeleteTransitGatewayMeteringPolicyEntryCommand,
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVolumeCommand,
  DeleteVpcBlockPublicAccessExclusionCommand,
  DeleteVpcCommand,
  DeleteVpcEncryptionControlCommand,
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointsCommand,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpnConcentratorCommand,
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionRouteCommand,
  DeleteVpnGatewayCommand,
  DeprovisionByoipCidrCommand,
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamPoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrCommand,
  DeregisterImageCommand,
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DescribeAccountAttributesCommand,
  DescribeAddressTransfersCommand,
  DescribeAddressesAttributeCommand,
  DescribeAddressesCommand,
  DescribeAggregateIdFormatCommand,
  DescribeAvailabilityZonesCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeBundleTasksCommand,
  DescribeByoipCidrsCommand,
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityBlockStatusCommand,
  DescribeCapacityBlocksCommand,
  DescribeCapacityManagerDataExportsCommand,
  DescribeCapacityReservationBillingRequestsCommand,
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationTopologyCommand,
  DescribeCapacityReservationsCommand,
  DescribeCarrierGatewaysCommand,
  DescribeClassicLinkInstancesCommand,
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnTargetNetworksCommand,
  DescribeCoipPoolsCommand,
  DescribeConversionTasksCommand,
  DescribeCustomerGatewaysCommand,
  DescribeDeclarativePoliciesReportsCommand,
  DescribeDhcpOptionsCommand,
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeElasticGpusCommand,
  DescribeExportImageTasksCommand,
  DescribeExportTasksCommand,
  DescribeFastLaunchImagesCommand,
  DescribeFastSnapshotRestoresCommand,
  DescribeFleetHistoryCommand,
  DescribeFleetInstancesCommand,
  DescribeFleetsCommand,
  DescribeFlowLogsCommand,
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImagesCommand,
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationsCommand,
  DescribeHostsCommand,
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIdFormatCommand,
  DescribeIdentityIdFormatCommand,
  DescribeImageAttributeCommand,
  DescribeImageReferencesCommand,
  DescribeImageUsageReportEntriesCommand,
  DescribeImageUsageReportsCommand,
  DescribeImagesCommand,
  DescribeImportImageTasksCommand,
  DescribeImportSnapshotTasksCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceImageMetadataCommand,
  DescribeInstanceSqlHaHistoryStatesCommand,
  DescribeInstanceSqlHaStatesCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInstancesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamExternalResourceVerificationTokensCommand,
  DescribeIpamPoliciesCommand,
  DescribeIpamPoolsCommand,
  DescribeIpamPrefixListResolverTargetsCommand,
  DescribeIpamPrefixListResolversCommand,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamScopesCommand,
  DescribeIpamsCommand,
  DescribeIpv6PoolsCommand,
  DescribeKeyPairsCommand,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplatesCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewaysCommand,
  DescribeLockedSnapshotsCommand,
  DescribeMacHostsCommand,
  DescribeMacModificationTasksCommand,
  DescribeManagedPrefixListsCommand,
  DescribeMovingAddressesCommand,
  DescribeNatGatewaysCommand,
  DescribeNetworkAclsCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacesCommand,
  DescribeOutpostLagsCommand,
  DescribePlacementGroupsCommand,
  DescribePrefixListsCommand,
  DescribePrincipalIdFormatCommand,
  DescribePublicIpv4PoolsCommand,
  DescribeRegionsCommand,
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesOfferingsCommand,
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerPeersCommand,
  DescribeRouteServersCommand,
  DescribeRouteTablesCommand,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstancesCommand,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeSecurityGroupsCommand,
  DescribeServiceLinkVirtualInterfacesCommand,
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotsCommand,
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestsCommand,
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotPriceHistoryCommand,
  DescribeStaleSecurityGroupsCommand,
  DescribeStoreImageTasksCommand,
  DescribeSubnetsCommand,
  DescribeTagsCommand,
  DescribeTrafficMirrorFilterRulesCommand,
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorTargetsCommand,
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayMeteringPoliciesCommand,
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewaysCommand,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVolumeAttributeCommand,
  DescribeVolumeStatusCommand,
  DescribeVolumesCommand,
  DescribeVolumesModificationsCommand,
  DescribeVpcAttributeCommand,
  DescribeVpcBlockPublicAccessExclusionsCommand,
  DescribeVpcBlockPublicAccessOptionsCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEncryptionControlsCommand,
  DescribeVpcEndpointAssociationsCommand,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcEndpointsCommand,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcsCommand,
  DescribeVpnConcentratorsCommand,
  DescribeVpnConnectionsCommand,
  DescribeVpnGatewaysCommand,
  DestinationFileFormat,
  DetachClassicLinkVpcCommand,
  DetachInternetGatewayCommand,
  DetachNetworkInterfaceCommand,
  DetachVerifiedAccessTrustProviderCommand,
  DetachVolumeCommand,
  DetachVpnGatewayCommand,
  DeviceTrustProviderType,
  DeviceType,
  DisableAddressTransferCommand,
  DisableAllowedImagesSettingsCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableCapacityManagerCommand,
  DisableEbsEncryptionByDefaultCommand,
  DisableFastLaunchCommand,
  DisableFastSnapshotRestoresCommand,
  DisableImageBlockPublicAccessCommand,
  DisableImageCommand,
  DisableImageDeprecationCommand,
  DisableImageDeregistrationProtectionCommand,
  DisableInstanceSqlHaStandbyDetectionsCommand,
  DisableIpamOrganizationAdminAccountCommand,
  DisableIpamPolicyCommand,
  DisableRouteServerPropagationCommand,
  DisableSerialConsoleAccessCommand,
  DisableSnapshotBlockPublicAccessCommand,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableVgwRoutePropagationCommand,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupportCommand,
  DisassociateAddressCommand,
  DisassociateCapacityReservationBillingOwnerCommand,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateIamInstanceProfileCommand,
  DisassociateInstanceEventWindowCommand,
  DisassociateIpamByoasnCommand,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateNatGatewayAddressCommand,
  DisassociateRouteServerCommand,
  DisassociateRouteTableCommand,
  DisassociateSecurityGroupVpcCommand,
  DisassociateSubnetCidrBlockCommand,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTrunkInterfaceCommand,
  DisassociateVpcCidrBlockCommand,
  DiskImageFormat,
  DiskType,
  DnsNameState,
  DnsRecordIpType,
  DnsSupportValue,
  DomainType,
  DynamicRoutingValue,
  EC2,
  EC2Client,
  EC2ServiceException,
  EbsEncryptionSupport,
  EbsNvmeSupport,
  EbsOptimizedSupport,
  Ec2InstanceConnectEndpointState,
  EkPubKeyFormat,
  EkPubKeyType,
  ElasticGpuState,
  ElasticGpuStatus,
  EnaSupport,
  EnableAddressTransferCommand,
  EnableAllowedImagesSettingsCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableCapacityManagerCommand,
  EnableEbsEncryptionByDefaultCommand,
  EnableFastLaunchCommand,
  EnableFastSnapshotRestoresCommand,
  EnableImageBlockPublicAccessCommand,
  EnableImageCommand,
  EnableImageDeprecationCommand,
  EnableImageDeregistrationProtectionCommand,
  EnableInstanceSqlHaStandbyDetectionsCommand,
  EnableIpamOrganizationAdminAccountCommand,
  EnableIpamPolicyCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableRouteServerPropagationCommand,
  EnableSerialConsoleAccessCommand,
  EnableSnapshotBlockPublicAccessCommand,
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableVgwRoutePropagationCommand,
  EnableVolumeIOCommand,
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkDnsSupportCommand,
  EncryptionStateValue,
  EncryptionSupportOptionValue,
  EndDateType,
  EndpointIpAddressType,
  EphemeralNvmeSupport,
  EventCode,
  EventType,
  ExcessCapacityTerminationPolicy,
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientConfigurationCommand,
  ExportEnvironment,
  ExportImageCommand,
  ExportTaskState,
  ExportTransitGatewayRoutesCommand,
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FilterByDimension,
  FindingsFound,
  FleetActivityStatus,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetEventType,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetStateCode,
  FleetType,
  FlexibleEnaQueuesSupport,
  FlowLogsResourceType,
  FpgaImageAttributeName,
  FpgaImageStateCode,
  GatewayAssociationState,
  GatewayType,
  GetActiveVpnTunnelStatusCommand,
  GetAllowedImagesSettingsCommand,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAwsNetworkPerformanceDataCommand,
  GetCapacityManagerAttributesCommand,
  GetCapacityManagerMetricDataCommand,
  GetCapacityManagerMetricDimensionsCommand,
  GetCapacityReservationUsageCommand,
  GetCoipPoolUsageCommand,
  GetConsoleOutputCommand,
  GetConsoleScreenshotCommand,
  GetDeclarativePoliciesReportSummaryCommand,
  GetDefaultCreditSpecificationCommand,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsEncryptionByDefaultCommand,
  GetEnabledIpamPolicyCommand,
  GetFlowLogsIntegrationTemplateCommand,
  GetGroupsForCapacityReservationCommand,
  GetHostReservationPurchasePreviewCommand,
  GetImageAncestryCommand,
  GetImageBlockPublicAccessStateCommand,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceTpmEkPubCommand,
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceUefiDataCommand,
  GetIpamAddressHistoryCommand,
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamPolicyAllocationRulesCommand,
  GetIpamPolicyOrganizationTargetsCommand,
  GetIpamPoolAllocationsCommand,
  GetIpamPoolCidrsCommand,
  GetIpamPrefixListResolverRulesCommand,
  GetIpamPrefixListResolverVersionEntriesCommand,
  GetIpamPrefixListResolverVersionsCommand,
  GetIpamResourceCidrsCommand,
  GetLaunchTemplateDataCommand,
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListEntriesCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeContentCommand,
  GetPasswordDataCommand,
  GetReservedInstancesExchangeQuoteCommand,
  GetRouteServerAssociationsCommand,
  GetRouteServerPropagationsCommand,
  GetRouteServerRoutingDatabaseCommand,
  GetSecurityGroupsForVpcCommand,
  GetSerialConsoleAccessStatusCommand,
  GetSnapshotBlockPublicAccessStateCommand,
  GetSpotPlacementScoresCommand,
  GetSubnetCidrReservationsCommand,
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayMeteringPolicyEntriesCommand,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTablePropagationsCommand,
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessEndpointTargetsCommand,
  GetVerifiedAccessGroupPolicyCommand,
  GetVpcResourcesBlockingEncryptionEnforcementCommand,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceTypesCommand,
  GetVpnTunnelReplacementStatusCommand,
  GroupBy,
  HaStatus,
  HostMaintenance,
  HostRecovery,
  HostTenancy,
  HostnameType,
  HttpTokensState,
  HypervisorType,
  IamInstanceProfileAssociationState,
  Igmpv2SupportValue,
  ImageAttributeName,
  ImageBlockPublicAccessDisabledState,
  ImageBlockPublicAccessEnabledState,
  ImageReferenceOptionName,
  ImageReferenceResourceType,
  ImageState,
  ImageTypeValues,
  ImdsSupportValues,
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportImageCommand,
  ImportInstanceCommand,
  ImportKeyPairCommand,
  ImportSnapshotCommand,
  ImportVolumeCommand,
  IngestionStatus,
  InitializationType,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceBandwidthWeighting,
  InstanceBootModeValues,
  InstanceEventWindowState,
  InstanceGeneration,
  InstanceHealthStatus,
  InstanceInterruptionBehavior,
  InstanceLifecycle,
  InstanceLifecycleType,
  InstanceMatchCriteria,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceRebootMigrationState,
  InstanceStateName,
  InstanceStorageEncryptionSupport,
  InstanceTypeHypervisor,
  InterfacePermissionType,
  InterfaceProtocolType,
  InternetGatewayBlockMode,
  InternetGatewayExclusionMode,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  IpAddressType,
  IpSource,
  IpamAddressHistoryResourceType,
  IpamAssociatedResourceDiscoveryStatus,
  IpamComplianceStatus,
  IpamDiscoveryFailureCode,
  IpamExternalResourceVerificationTokenState,
  IpamManagementState,
  IpamMeteredAccount,
  IpamNetworkInterfaceAttachmentStatus,
  IpamOverlapStatus,
  IpamPolicyManagedBy,
  IpamPolicyResourceType,
  IpamPolicyState,
  IpamPoolAllocationResourceType,
  IpamPoolAwsService,
  IpamPoolCidrFailureCode,
  IpamPoolCidrState,
  IpamPoolPublicIpSource,
  IpamPoolSourceResourceType,
  IpamPoolState,
  IpamPrefixListResolverRuleConditionOperation,
  IpamPrefixListResolverRuleType,
  IpamPrefixListResolverState,
  IpamPrefixListResolverTargetState,
  IpamPrefixListResolverVersionCreationStatus,
  IpamPublicAddressAssociationStatus,
  IpamPublicAddressAwsService,
  IpamPublicAddressType,
  IpamResourceCidrIpSource,
  IpamResourceDiscoveryAssociationState,
  IpamResourceDiscoveryState,
  IpamResourceType,
  IpamScopeExternalAuthorityType,
  IpamScopeState,
  IpamScopeType,
  IpamState,
  IpamTier,
  Ipv6AddressAttribute,
  Ipv6SupportValue,
  KeyFormat,
  KeyType,
  LaunchTemplateAutoRecoveryState,
  LaunchTemplateErrorCode,
  LaunchTemplateHttpTokensState,
  LaunchTemplateInstanceMetadataEndpointState,
  LaunchTemplateInstanceMetadataOptionsState,
  LaunchTemplateInstanceMetadataProtocolIpv6,
  LaunchTemplateInstanceMetadataTagsState,
  ListImagesInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommand,
  ListVolumesInRecycleBinCommand,
  ListingState,
  ListingStatus,
  LocalGatewayRouteState,
  LocalGatewayRouteTableMode,
  LocalGatewayRouteType,
  LocalGatewayVirtualInterfaceConfigurationState,
  LocalGatewayVirtualInterfaceGroupConfigurationState,
  LocalStorage,
  LocalStorageType,
  LocationType,
  LockMode,
  LockSnapshotCommand,
  LockState,
  LogDestinationType,
  MacModificationTaskState,
  MacModificationTaskType,
  MacSystemIntegrityProtectionSettingStatus,
  ManagedBy,
  MarketType,
  MembershipType,
  MetadataDefaultHttpTokensState,
  Metric,
  MetricType,
  ModifyAddressAttributeCommand,
  ModifyAvailabilityZoneGroupCommand,
  ModifyAvailabilityZoneOptInStatus,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationFleetCommand,
  ModifyClientVpnEndpointCommand,
  ModifyDefaultCreditSpecificationCommand,
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyFleetCommand,
  ModifyFpgaImageAttributeCommand,
  ModifyHostsCommand,
  ModifyIdFormatCommand,
  ModifyIdentityIdFormatCommand,
  ModifyImageAttributeCommand,
  ModifyInstanceAttributeCommand,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceConnectEndpointCommand,
  ModifyInstanceCpuOptionsCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceNetworkPerformanceOptionsCommand,
  ModifyInstancePlacementCommand,
  ModifyIpamCommand,
  ModifyIpamPolicyAllocationRulesCommand,
  ModifyIpamPoolCommand,
  ModifyIpamPrefixListResolverCommand,
  ModifyIpamPrefixListResolverTargetCommand,
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamScopeCommand,
  ModifyLaunchTemplateCommand,
  ModifyLocalGatewayRouteCommand,
  ModifyManagedPrefixListCommand,
  ModifyNetworkInterfaceAttributeCommand,
  ModifyPrivateDnsNameOptionsCommand,
  ModifyPublicIpDnsNameOptionsCommand,
  ModifyReservedInstancesCommand,
  ModifyRouteServerCommand,
  ModifySecurityGroupRulesCommand,
  ModifySnapshotAttributeCommand,
  ModifySnapshotTierCommand,
  ModifySpotFleetRequestCommand,
  ModifySubnetAttributeCommand,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorSessionCommand,
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayMeteringPolicyCommand,
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVolumeAttributeCommand,
  ModifyVolumeCommand,
  ModifyVpcAttributeCommand,
  ModifyVpcBlockPublicAccessExclusionCommand,
  ModifyVpcBlockPublicAccessOptionsCommand,
  ModifyVpcEncryptionControlCommand,
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcTenancyCommand,
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelOptionsCommand,
  MonitorInstancesCommand,
  MonitoringState,
  MoveAddressToVpcCommand,
  MoveByoipCidrToIpamCommand,
  MoveCapacityReservationInstancesCommand,
  MoveStatus,
  MulticastSupportValue,
  NatGatewayAddressStatus,
  NatGatewayApplianceModifyState,
  NatGatewayApplianceState,
  NatGatewayApplianceType,
  NatGatewayState,
  NetworkInterfaceAttribute,
  NetworkInterfaceCreationType,
  NetworkInterfacePermissionStateCode,
  NetworkInterfaceStatus,
  NetworkInterfaceType,
  NitroEnclavesSupport,
  NitroTpmSupport,
  OfferingClassType,
  OfferingTypeValues,
  OnDemandAllocationStrategy,
  OperationType,
  OutputFormat,
  PartitionLoadFrequency,
  PayerResponsibility,
  PaymentOption,
  PeriodType,
  PermissionGroup,
  PhcSupport,
  PlacementGroupState,
  PlacementGroupStrategy,
  PlacementStrategy,
  PlatformValues,
  PrefixListState,
  PrincipalType,
  ProductCodeValues,
  Protocol,
  ProtocolValue,
  ProvisionByoipCidrCommand,
  ProvisionIpamByoasnCommand,
  ProvisionIpamPoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommand,
  PublicIpDnsOption,
  PurchaseCapacityBlockCommand,
  PurchaseCapacityBlockExtensionCommand,
  PurchaseHostReservationCommand,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseScheduledInstancesCommand,
  RIProductDescription,
  RebootInstancesCommand,
  RebootMigrationSupport,
  RecurringChargeFrequency,
  RegisterImageCommand,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RejectCapacityReservationBillingOwnershipCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcPeeringConnectionCommand,
  ReleaseAddressCommand,
  ReleaseHostsCommand,
  ReleaseIpamPoolAllocationCommand,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclEntryCommand,
  ReplaceRootVolumeTaskState,
  ReplaceRouteCommand,
  ReplaceRouteTableAssociationCommand,
  ReplaceTransitGatewayRouteCommand,
  ReplaceVpnTunnelCommand,
  ReplacementStrategy,
  ReportInstanceReasonCodes,
  ReportInstanceStatusCommand,
  ReportState,
  ReportStatusType,
  RequestSpotFleetCommand,
  RequestSpotInstancesCommand,
  ReservationEndDateType,
  ReservationState,
  ReservationType,
  ReservedInstanceState,
  ResetAddressAttributeCommand,
  ResetEbsDefaultKmsKeyIdCommand,
  ResetFpgaImageAttributeCommand,
  ResetFpgaImageAttributeName,
  ResetImageAttributeCommand,
  ResetImageAttributeName,
  ResetInstanceAttributeCommand,
  ResetNetworkInterfaceAttributeCommand,
  ResetSnapshotAttributeCommand,
  ResourceType,
  RestoreAddressToClassicCommand,
  RestoreImageFromRecycleBinCommand,
  RestoreManagedPrefixListVersionCommand,
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotTierCommand,
  RestoreVolumeFromRecycleBinCommand,
  RevokeClientVpnIngressCommand,
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupIngressCommand,
  RootDeviceType,
  RouteOrigin,
  RouteServerAssociationState,
  RouteServerBfdState,
  RouteServerBgpState,
  RouteServerEndpointState,
  RouteServerPeerLivenessMode,
  RouteServerPeerState,
  RouteServerPersistRoutesAction,
  RouteServerPersistRoutesState,
  RouteServerPropagationState,
  RouteServerRouteInstallationStatus,
  RouteServerRouteStatus,
  RouteServerState,
  RouteState,
  RouteTableAssociationStateCode,
  RuleAction,
  RunInstancesCommand,
  RunScheduledInstancesCommand,
  SSEType,
  Schedule,
  Scope,
  SearchLocalGatewayRoutesCommand,
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayRoutesCommand,
  SecurityGroupReferencingSupportValue,
  SecurityGroupVpcAssociationState,
  SelfServicePortal,
  SendDiagnosticInterruptCommand,
  ServiceConnectivityType,
  ServiceLinkVirtualInterfaceConfigurationState,
  ServiceManaged,
  ServiceState,
  ServiceType,
  ShutdownBehavior,
  SnapshotAttributeName,
  SnapshotBlockPublicAccessState,
  SnapshotLocationEnum,
  SnapshotReturnCodes,
  SnapshotState,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  SpotInstanceState,
  SpotInstanceType,
  SpreadLevel,
  SqlServerLicenseUsage,
  StartDeclarativePoliciesReportCommand,
  StartInstancesCommand,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAnalysisCommand,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  State,
  StaticSourcesSupportValue,
  StatisticType,
  Status,
  StatusName,
  StatusType,
  StopInstancesCommand,
  StorageTier,
  SubnetCidrBlockStateCode,
  SubnetCidrReservationType,
  SubnetState,
  SummaryStatus,
  SupportedAdditionalProcessorFeature,
  TargetCapacityUnitType,
  TargetStorageTier,
  TelemetryStatus,
  Tenancy,
  TerminateClientVpnConnectionsCommand,
  TerminateInstancesCommand,
  TieringOperationStatus,
  TokenState,
  TpmSupportValues,
  TrafficDirection,
  TrafficIpAddressType,
  TrafficMirrorFilterRuleField,
  TrafficMirrorNetworkService,
  TrafficMirrorRuleAction,
  TrafficMirrorSessionField,
  TrafficMirrorTargetType,
  TrafficType,
  TransferType,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayConnectPeerState,
  TransitGatewayMeteringPayerType,
  TransitGatewayMeteringPolicyEntryState,
  TransitGatewayMeteringPolicyState,
  TransitGatewayMulitcastDomainAssociationState,
  TransitGatewayMulticastDomainState,
  TransitGatewayPolicyTableState,
  TransitGatewayPrefixListReferenceState,
  TransitGatewayPropagationState,
  TransitGatewayRouteState,
  TransitGatewayRouteTableAnnouncementDirection,
  TransitGatewayRouteTableAnnouncementState,
  TransitGatewayRouteTableState,
  TransitGatewayRouteType,
  TransitGatewayState,
  TransportProtocol,
  TrustProviderType,
  TunnelInsideIpVersion,
  UnassignIpv6AddressesCommand,
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateNatGatewayAddressCommand,
  UnlimitedSupportedInstanceFamily,
  UnlockSnapshotCommand,
  UnmonitorInstancesCommand,
  UnsuccessfulInstanceCreditSpecificationErrorCode,
  UpdateCapacityManagerOrganizationsAccessCommand,
  UpdateInterruptibleCapacityReservationAllocationCommand,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  UsageClassType,
  UserTrustProviderType,
  VerificationMethod,
  VerifiedAccessEndpointAttachmentType,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessEndpointStatusCode,
  VerifiedAccessEndpointType,
  VerifiedAccessLogDeliveryStatusCode,
  VirtualizationType,
  VolumeAttachmentState,
  VolumeAttributeName,
  VolumeModificationState,
  VolumeState,
  VolumeStatusInfoStatus,
  VolumeStatusName,
  VolumeType,
  VpcAttributeName,
  VpcBlockPublicAccessExclusionState,
  VpcBlockPublicAccessExclusionsAllowed,
  VpcBlockPublicAccessState,
  VpcCidrBlockStateCode,
  VpcEncryptionControlExclusionState,
  VpcEncryptionControlExclusionStateInput,
  VpcEncryptionControlMode,
  VpcEncryptionControlState,
  VpcEndpointType,
  VpcPeeringConnectionStateReasonCode,
  VpcState,
  VpcTenancy,
  VpnConcentratorType,
  VpnEcmpSupportValue,
  VpnProtocol,
  VpnState,
  VpnStaticRouteSource,
  VpnTunnelBandwidth,
  VpnTunnelProvisioningStatus,
  WeekDay,
  WithdrawByoipCidrCommand,
  _InstanceType,
  paginateDescribeAddressTransfers,
  paginateDescribeAddressesAttribute,
  paginateDescribeAwsNetworkPerformanceMetricSubscriptions,
  paginateDescribeByoipCidrs,
  paginateDescribeCapacityBlockExtensionHistory,
  paginateDescribeCapacityBlockExtensionOfferings,
  paginateDescribeCapacityBlockOfferings,
  paginateDescribeCapacityBlockStatus,
  paginateDescribeCapacityBlocks,
  paginateDescribeCapacityManagerDataExports,
  paginateDescribeCapacityReservationBillingRequests,
  paginateDescribeCapacityReservationFleets,
  paginateDescribeCapacityReservations,
  paginateDescribeCarrierGateways,
  paginateDescribeClassicLinkInstances,
  paginateDescribeClientVpnAuthorizationRules,
  paginateDescribeClientVpnConnections,
  paginateDescribeClientVpnEndpoints,
  paginateDescribeClientVpnRoutes,
  paginateDescribeClientVpnTargetNetworks,
  paginateDescribeCoipPools,
  paginateDescribeDhcpOptions,
  paginateDescribeEgressOnlyInternetGateways,
  paginateDescribeExportImageTasks,
  paginateDescribeFastLaunchImages,
  paginateDescribeFastSnapshotRestores,
  paginateDescribeFleets,
  paginateDescribeFlowLogs,
  paginateDescribeFpgaImages,
  paginateDescribeHostReservationOfferings,
  paginateDescribeHostReservations,
  paginateDescribeHosts,
  paginateDescribeIamInstanceProfileAssociations,
  paginateDescribeImageReferences,
  paginateDescribeImageUsageReportEntries,
  paginateDescribeImageUsageReports,
  paginateDescribeImages,
  paginateDescribeImportImageTasks,
  paginateDescribeImportSnapshotTasks,
  paginateDescribeInstanceConnectEndpoints,
  paginateDescribeInstanceCreditSpecifications,
  paginateDescribeInstanceEventWindows,
  paginateDescribeInstanceImageMetadata,
  paginateDescribeInstanceStatus,
  paginateDescribeInstanceTopology,
  paginateDescribeInstanceTypeOfferings,
  paginateDescribeInstanceTypes,
  paginateDescribeInstances,
  paginateDescribeInternetGateways,
  paginateDescribeIpamPools,
  paginateDescribeIpamPrefixListResolverTargets,
  paginateDescribeIpamPrefixListResolvers,
  paginateDescribeIpamResourceDiscoveries,
  paginateDescribeIpamResourceDiscoveryAssociations,
  paginateDescribeIpamScopes,
  paginateDescribeIpams,
  paginateDescribeIpv6Pools,
  paginateDescribeLaunchTemplateVersions,
  paginateDescribeLaunchTemplates,
  paginateDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations,
  paginateDescribeLocalGatewayRouteTableVpcAssociations,
  paginateDescribeLocalGatewayRouteTables,
  paginateDescribeLocalGatewayVirtualInterfaceGroups,
  paginateDescribeLocalGatewayVirtualInterfaces,
  paginateDescribeLocalGateways,
  paginateDescribeMacHosts,
  paginateDescribeMacModificationTasks,
  paginateDescribeManagedPrefixLists,
  paginateDescribeMovingAddresses,
  paginateDescribeNatGateways,
  paginateDescribeNetworkAcls,
  paginateDescribeNetworkInsightsAccessScopeAnalyses,
  paginateDescribeNetworkInsightsAccessScopes,
  paginateDescribeNetworkInsightsAnalyses,
  paginateDescribeNetworkInsightsPaths,
  paginateDescribeNetworkInterfacePermissions,
  paginateDescribeNetworkInterfaces,
  paginateDescribePrefixLists,
  paginateDescribePrincipalIdFormat,
  paginateDescribePublicIpv4Pools,
  paginateDescribeReplaceRootVolumeTasks,
  paginateDescribeReservedInstancesModifications,
  paginateDescribeReservedInstancesOfferings,
  paginateDescribeRouteServerEndpoints,
  paginateDescribeRouteServerPeers,
  paginateDescribeRouteServers,
  paginateDescribeRouteTables,
  paginateDescribeScheduledInstanceAvailability,
  paginateDescribeScheduledInstances,
  paginateDescribeSecurityGroupRules,
  paginateDescribeSecurityGroupVpcAssociations,
  paginateDescribeSecurityGroups,
  paginateDescribeSnapshotTierStatus,
  paginateDescribeSnapshots,
  paginateDescribeSpotFleetRequests,
  paginateDescribeSpotInstanceRequests,
  paginateDescribeSpotPriceHistory,
  paginateDescribeStaleSecurityGroups,
  paginateDescribeStoreImageTasks,
  paginateDescribeSubnets,
  paginateDescribeTags,
  paginateDescribeTrafficMirrorFilters,
  paginateDescribeTrafficMirrorSessions,
  paginateDescribeTrafficMirrorTargets,
  paginateDescribeTransitGatewayAttachments,
  paginateDescribeTransitGatewayConnectPeers,
  paginateDescribeTransitGatewayConnects,
  paginateDescribeTransitGatewayMulticastDomains,
  paginateDescribeTransitGatewayPeeringAttachments,
  paginateDescribeTransitGatewayPolicyTables,
  paginateDescribeTransitGatewayRouteTableAnnouncements,
  paginateDescribeTransitGatewayRouteTables,
  paginateDescribeTransitGatewayVpcAttachments,
  paginateDescribeTransitGateways,
  paginateDescribeTrunkInterfaceAssociations,
  paginateDescribeVerifiedAccessEndpoints,
  paginateDescribeVerifiedAccessGroups,
  paginateDescribeVerifiedAccessInstanceLoggingConfigurations,
  paginateDescribeVerifiedAccessInstances,
  paginateDescribeVerifiedAccessTrustProviders,
  paginateDescribeVolumeStatus,
  paginateDescribeVolumes,
  paginateDescribeVolumesModifications,
  paginateDescribeVpcClassicLinkDnsSupport,
  paginateDescribeVpcEndpointConnectionNotifications,
  paginateDescribeVpcEndpointConnections,
  paginateDescribeVpcEndpointServiceConfigurations,
  paginateDescribeVpcEndpointServicePermissions,
  paginateDescribeVpcEndpoints,
  paginateDescribeVpcPeeringConnections,
  paginateDescribeVpcs,
  paginateDescribeVpnConcentrators,
  paginateGetAssociatedIpv6PoolCidrs,
  paginateGetAwsNetworkPerformanceData,
  paginateGetCapacityManagerMetricData,
  paginateGetCapacityManagerMetricDimensions,
  paginateGetGroupsForCapacityReservation,
  paginateGetInstanceTypesFromInstanceRequirements,
  paginateGetIpamAddressHistory,
  paginateGetIpamDiscoveredAccounts,
  paginateGetIpamDiscoveredResourceCidrs,
  paginateGetIpamPoolAllocations,
  paginateGetIpamPoolCidrs,
  paginateGetIpamPrefixListResolverRules,
  paginateGetIpamPrefixListResolverVersionEntries,
  paginateGetIpamPrefixListResolverVersions,
  paginateGetIpamResourceCidrs,
  paginateGetManagedPrefixListAssociations,
  paginateGetManagedPrefixListEntries,
  paginateGetNetworkInsightsAccessScopeAnalysisFindings,
  paginateGetSecurityGroupsForVpc,
  paginateGetSpotPlacementScores,
  paginateGetTransitGatewayAttachmentPropagations,
  paginateGetTransitGatewayMulticastDomainAssociations,
  paginateGetTransitGatewayPolicyTableAssociations,
  paginateGetTransitGatewayPrefixListReferences,
  paginateGetTransitGatewayRouteTableAssociations,
  paginateGetTransitGatewayRouteTablePropagations,
  paginateGetVpnConnectionDeviceTypes,
  paginateListImagesInRecycleBin,
  paginateListSnapshotsInRecycleBin,
  paginateSearchLocalGatewayRoutes,
  paginateSearchTransitGatewayMulticastGroups,
  waitForBundleTaskComplete,
  waitForConversionTaskCancelled,
  waitForConversionTaskCompleted,
  waitForConversionTaskDeleted,
  waitForCustomerGatewayAvailable,
  waitForExportTaskCancelled,
  waitForExportTaskCompleted,
  waitForImageAvailable,
  waitForImageExists,
  waitForImageUsageReportAvailable,
  waitForInstanceExists,
  waitForInstanceRunning,
  waitForInstanceStatusOk,
  waitForInstanceStopped,
  waitForInstanceTerminated,
  waitForInternetGatewayExists,
  waitForKeyPairExists,
  waitForNatGatewayAvailable,
  waitForNatGatewayDeleted,
  waitForNetworkInterfaceAvailable,
  waitForPasswordDataAvailable,
  waitForSecurityGroupExists,
  waitForSecurityGroupVpcAssociationAssociated,
  waitForSecurityGroupVpcAssociationDisassociated,
  waitForSnapshotCompleted,
  waitForSnapshotImported,
  waitForSpotInstanceRequestFulfilled,
  waitForStoreImageTaskComplete,
  waitForSubnetAvailable,
  waitForSystemStatusOk,
  waitForVolumeAvailable,
  waitForVolumeDeleted,
  waitForVolumeInUse,
  waitForVpcAvailable,
  waitForVpcExists,
  waitForVpcPeeringConnectionDeleted,
  waitForVpcPeeringConnectionExists,
  waitForVpnConnectionAvailable,
  waitForVpnConnectionDeleted,
  waitUntilBundleTaskComplete,
  waitUntilConversionTaskCancelled,
  waitUntilConversionTaskCompleted,
  waitUntilConversionTaskDeleted,
  waitUntilCustomerGatewayAvailable,
  waitUntilExportTaskCancelled,
  waitUntilExportTaskCompleted,
  waitUntilImageAvailable,
  waitUntilImageExists,
  waitUntilImageUsageReportAvailable,
  waitUntilInstanceExists,
  waitUntilInstanceRunning,
  waitUntilInstanceStatusOk,
  waitUntilInstanceStopped,
  waitUntilInstanceTerminated,
  waitUntilInternetGatewayExists,
  waitUntilKeyPairExists,
  waitUntilNatGatewayAvailable,
  waitUntilNatGatewayDeleted,
  waitUntilNetworkInterfaceAvailable,
  waitUntilPasswordDataAvailable,
  waitUntilSecurityGroupExists,
  waitUntilSecurityGroupVpcAssociationAssociated,
  waitUntilSecurityGroupVpcAssociationDisassociated,
  waitUntilSnapshotCompleted,
  waitUntilSnapshotImported,
  waitUntilSpotInstanceRequestFulfilled,
  waitUntilStoreImageTaskComplete,
  waitUntilSubnetAvailable,
  waitUntilSystemStatusOk,
  waitUntilVolumeAvailable,
  waitUntilVolumeDeleted,
  waitUntilVolumeInUse,
  waitUntilVpcAvailable,
  waitUntilVpcExists,
  waitUntilVpcPeeringConnectionDeleted,
  waitUntilVpcPeeringConnectionExists,
  waitUntilVpnConnectionAvailable,
  waitUntilVpnConnectionDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EC2Client === "function");
assert(typeof EC2 === "function");
// commands
assert(typeof AcceptAddressTransferCommand === "function");
assert(typeof AcceptCapacityReservationBillingOwnershipCommand === "function");
assert(typeof AcceptReservedInstancesExchangeQuoteCommand === "function");
assert(typeof AcceptTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof AcceptTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof AcceptTransitGatewayVpcAttachmentCommand === "function");
assert(typeof AcceptVpcEndpointConnectionsCommand === "function");
assert(typeof AcceptVpcPeeringConnectionCommand === "function");
assert(typeof AdvertiseByoipCidrCommand === "function");
assert(typeof AllocateAddressCommand === "function");
assert(typeof AllocateHostsCommand === "function");
assert(typeof AllocateIpamPoolCidrCommand === "function");
assert(typeof ApplySecurityGroupsToClientVpnTargetNetworkCommand === "function");
assert(typeof AssignIpv6AddressesCommand === "function");
assert(typeof AssignPrivateIpAddressesCommand === "function");
assert(typeof AssignPrivateNatGatewayAddressCommand === "function");
assert(typeof AssociateAddressCommand === "function");
assert(typeof AssociateCapacityReservationBillingOwnerCommand === "function");
assert(typeof AssociateClientVpnTargetNetworkCommand === "function");
assert(typeof AssociateDhcpOptionsCommand === "function");
assert(typeof AssociateEnclaveCertificateIamRoleCommand === "function");
assert(typeof AssociateIamInstanceProfileCommand === "function");
assert(typeof AssociateInstanceEventWindowCommand === "function");
assert(typeof AssociateIpamByoasnCommand === "function");
assert(typeof AssociateIpamResourceDiscoveryCommand === "function");
assert(typeof AssociateNatGatewayAddressCommand === "function");
assert(typeof AssociateRouteServerCommand === "function");
assert(typeof AssociateRouteTableCommand === "function");
assert(typeof AssociateSecurityGroupVpcCommand === "function");
assert(typeof AssociateSubnetCidrBlockCommand === "function");
assert(typeof AssociateTransitGatewayMulticastDomainCommand === "function");
assert(typeof AssociateTransitGatewayPolicyTableCommand === "function");
assert(typeof AssociateTransitGatewayRouteTableCommand === "function");
assert(typeof AssociateTrunkInterfaceCommand === "function");
assert(typeof AssociateVpcCidrBlockCommand === "function");
assert(typeof AttachClassicLinkVpcCommand === "function");
assert(typeof AttachInternetGatewayCommand === "function");
assert(typeof AttachNetworkInterfaceCommand === "function");
assert(typeof AttachVerifiedAccessTrustProviderCommand === "function");
assert(typeof AttachVolumeCommand === "function");
assert(typeof AttachVpnGatewayCommand === "function");
assert(typeof AuthorizeClientVpnIngressCommand === "function");
assert(typeof AuthorizeSecurityGroupEgressCommand === "function");
assert(typeof AuthorizeSecurityGroupIngressCommand === "function");
assert(typeof BundleInstanceCommand === "function");
assert(typeof CancelBundleTaskCommand === "function");
assert(typeof CancelCapacityReservationCommand === "function");
assert(typeof CancelCapacityReservationFleetsCommand === "function");
assert(typeof CancelConversionTaskCommand === "function");
assert(typeof CancelDeclarativePoliciesReportCommand === "function");
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CancelImageLaunchPermissionCommand === "function");
assert(typeof CancelImportTaskCommand === "function");
assert(typeof CancelReservedInstancesListingCommand === "function");
assert(typeof CancelSpotFleetRequestsCommand === "function");
assert(typeof CancelSpotInstanceRequestsCommand === "function");
assert(typeof ConfirmProductInstanceCommand === "function");
assert(typeof CopyFpgaImageCommand === "function");
assert(typeof CopyImageCommand === "function");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CopyVolumesCommand === "function");
assert(typeof CreateCapacityManagerDataExportCommand === "function");
assert(typeof CreateCapacityReservationCommand === "function");
assert(typeof CreateCapacityReservationBySplittingCommand === "function");
assert(typeof CreateCapacityReservationFleetCommand === "function");
assert(typeof CreateCarrierGatewayCommand === "function");
assert(typeof CreateClientVpnEndpointCommand === "function");
assert(typeof CreateClientVpnRouteCommand === "function");
assert(typeof CreateCoipCidrCommand === "function");
assert(typeof CreateCoipPoolCommand === "function");
assert(typeof CreateCustomerGatewayCommand === "function");
assert(typeof CreateDefaultSubnetCommand === "function");
assert(typeof CreateDefaultVpcCommand === "function");
assert(typeof CreateDelegateMacVolumeOwnershipTaskCommand === "function");
assert(typeof CreateDhcpOptionsCommand === "function");
assert(typeof CreateEgressOnlyInternetGatewayCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFlowLogsCommand === "function");
assert(typeof CreateFpgaImageCommand === "function");
assert(typeof CreateImageCommand === "function");
assert(typeof CreateImageUsageReportCommand === "function");
assert(typeof CreateInstanceConnectEndpointCommand === "function");
assert(typeof CreateInstanceEventWindowCommand === "function");
assert(typeof CreateInstanceExportTaskCommand === "function");
assert(typeof CreateInternetGatewayCommand === "function");
assert(typeof CreateInterruptibleCapacityReservationAllocationCommand === "function");
assert(typeof CreateIpamCommand === "function");
assert(typeof CreateIpamExternalResourceVerificationTokenCommand === "function");
assert(typeof CreateIpamPolicyCommand === "function");
assert(typeof CreateIpamPoolCommand === "function");
assert(typeof CreateIpamPrefixListResolverCommand === "function");
assert(typeof CreateIpamPrefixListResolverTargetCommand === "function");
assert(typeof CreateIpamResourceDiscoveryCommand === "function");
assert(typeof CreateIpamScopeCommand === "function");
assert(typeof CreateKeyPairCommand === "function");
assert(typeof CreateLaunchTemplateCommand === "function");
assert(typeof CreateLaunchTemplateVersionCommand === "function");
assert(typeof CreateLocalGatewayRouteCommand === "function");
assert(typeof CreateLocalGatewayRouteTableCommand === "function");
assert(typeof CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand === "function");
assert(typeof CreateLocalGatewayRouteTableVpcAssociationCommand === "function");
assert(typeof CreateLocalGatewayVirtualInterfaceCommand === "function");
assert(typeof CreateLocalGatewayVirtualInterfaceGroupCommand === "function");
assert(typeof CreateMacSystemIntegrityProtectionModificationTaskCommand === "function");
assert(typeof CreateManagedPrefixListCommand === "function");
assert(typeof CreateNatGatewayCommand === "function");
assert(typeof CreateNetworkAclCommand === "function");
assert(typeof CreateNetworkAclEntryCommand === "function");
assert(typeof CreateNetworkInsightsAccessScopeCommand === "function");
assert(typeof CreateNetworkInsightsPathCommand === "function");
assert(typeof CreateNetworkInterfaceCommand === "function");
assert(typeof CreateNetworkInterfacePermissionCommand === "function");
assert(typeof CreatePlacementGroupCommand === "function");
assert(typeof CreatePublicIpv4PoolCommand === "function");
assert(typeof CreateReplaceRootVolumeTaskCommand === "function");
assert(typeof CreateReservedInstancesListingCommand === "function");
assert(typeof CreateRestoreImageTaskCommand === "function");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRouteServerCommand === "function");
assert(typeof CreateRouteServerEndpointCommand === "function");
assert(typeof CreateRouteServerPeerCommand === "function");
assert(typeof CreateRouteTableCommand === "function");
assert(typeof CreateSecurityGroupCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshotsCommand === "function");
assert(typeof CreateSpotDatafeedSubscriptionCommand === "function");
assert(typeof CreateStoreImageTaskCommand === "function");
assert(typeof CreateSubnetCommand === "function");
assert(typeof CreateSubnetCidrReservationCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTrafficMirrorFilterCommand === "function");
assert(typeof CreateTrafficMirrorFilterRuleCommand === "function");
assert(typeof CreateTrafficMirrorSessionCommand === "function");
assert(typeof CreateTrafficMirrorTargetCommand === "function");
assert(typeof CreateTransitGatewayCommand === "function");
assert(typeof CreateTransitGatewayConnectCommand === "function");
assert(typeof CreateTransitGatewayConnectPeerCommand === "function");
assert(typeof CreateTransitGatewayMeteringPolicyCommand === "function");
assert(typeof CreateTransitGatewayMeteringPolicyEntryCommand === "function");
assert(typeof CreateTransitGatewayMulticastDomainCommand === "function");
assert(typeof CreateTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof CreateTransitGatewayPolicyTableCommand === "function");
assert(typeof CreateTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof CreateTransitGatewayRouteCommand === "function");
assert(typeof CreateTransitGatewayRouteTableCommand === "function");
assert(typeof CreateTransitGatewayRouteTableAnnouncementCommand === "function");
assert(typeof CreateTransitGatewayVpcAttachmentCommand === "function");
assert(typeof CreateVerifiedAccessEndpointCommand === "function");
assert(typeof CreateVerifiedAccessGroupCommand === "function");
assert(typeof CreateVerifiedAccessInstanceCommand === "function");
assert(typeof CreateVerifiedAccessTrustProviderCommand === "function");
assert(typeof CreateVolumeCommand === "function");
assert(typeof CreateVpcCommand === "function");
assert(typeof CreateVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof CreateVpcEncryptionControlCommand === "function");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof CreateVpcEndpointConnectionNotificationCommand === "function");
assert(typeof CreateVpcEndpointServiceConfigurationCommand === "function");
assert(typeof CreateVpcPeeringConnectionCommand === "function");
assert(typeof CreateVpnConcentratorCommand === "function");
assert(typeof CreateVpnConnectionCommand === "function");
assert(typeof CreateVpnConnectionRouteCommand === "function");
assert(typeof CreateVpnGatewayCommand === "function");
assert(typeof DeleteCapacityManagerDataExportCommand === "function");
assert(typeof DeleteCarrierGatewayCommand === "function");
assert(typeof DeleteClientVpnEndpointCommand === "function");
assert(typeof DeleteClientVpnRouteCommand === "function");
assert(typeof DeleteCoipCidrCommand === "function");
assert(typeof DeleteCoipPoolCommand === "function");
assert(typeof DeleteCustomerGatewayCommand === "function");
assert(typeof DeleteDhcpOptionsCommand === "function");
assert(typeof DeleteEgressOnlyInternetGatewayCommand === "function");
assert(typeof DeleteFleetsCommand === "function");
assert(typeof DeleteFlowLogsCommand === "function");
assert(typeof DeleteFpgaImageCommand === "function");
assert(typeof DeleteImageUsageReportCommand === "function");
assert(typeof DeleteInstanceConnectEndpointCommand === "function");
assert(typeof DeleteInstanceEventWindowCommand === "function");
assert(typeof DeleteInternetGatewayCommand === "function");
assert(typeof DeleteIpamCommand === "function");
assert(typeof DeleteIpamExternalResourceVerificationTokenCommand === "function");
assert(typeof DeleteIpamPolicyCommand === "function");
assert(typeof DeleteIpamPoolCommand === "function");
assert(typeof DeleteIpamPrefixListResolverCommand === "function");
assert(typeof DeleteIpamPrefixListResolverTargetCommand === "function");
assert(typeof DeleteIpamResourceDiscoveryCommand === "function");
assert(typeof DeleteIpamScopeCommand === "function");
assert(typeof DeleteKeyPairCommand === "function");
assert(typeof DeleteLaunchTemplateCommand === "function");
assert(typeof DeleteLaunchTemplateVersionsCommand === "function");
assert(typeof DeleteLocalGatewayRouteCommand === "function");
assert(typeof DeleteLocalGatewayRouteTableCommand === "function");
assert(typeof DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand === "function");
assert(typeof DeleteLocalGatewayRouteTableVpcAssociationCommand === "function");
assert(typeof DeleteLocalGatewayVirtualInterfaceCommand === "function");
assert(typeof DeleteLocalGatewayVirtualInterfaceGroupCommand === "function");
assert(typeof DeleteManagedPrefixListCommand === "function");
assert(typeof DeleteNatGatewayCommand === "function");
assert(typeof DeleteNetworkAclCommand === "function");
assert(typeof DeleteNetworkAclEntryCommand === "function");
assert(typeof DeleteNetworkInsightsAccessScopeCommand === "function");
assert(typeof DeleteNetworkInsightsAccessScopeAnalysisCommand === "function");
assert(typeof DeleteNetworkInsightsAnalysisCommand === "function");
assert(typeof DeleteNetworkInsightsPathCommand === "function");
assert(typeof DeleteNetworkInterfaceCommand === "function");
assert(typeof DeleteNetworkInterfacePermissionCommand === "function");
assert(typeof DeletePlacementGroupCommand === "function");
assert(typeof DeletePublicIpv4PoolCommand === "function");
assert(typeof DeleteQueuedReservedInstancesCommand === "function");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRouteServerCommand === "function");
assert(typeof DeleteRouteServerEndpointCommand === "function");
assert(typeof DeleteRouteServerPeerCommand === "function");
assert(typeof DeleteRouteTableCommand === "function");
assert(typeof DeleteSecurityGroupCommand === "function");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSpotDatafeedSubscriptionCommand === "function");
assert(typeof DeleteSubnetCommand === "function");
assert(typeof DeleteSubnetCidrReservationCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTrafficMirrorFilterCommand === "function");
assert(typeof DeleteTrafficMirrorFilterRuleCommand === "function");
assert(typeof DeleteTrafficMirrorSessionCommand === "function");
assert(typeof DeleteTrafficMirrorTargetCommand === "function");
assert(typeof DeleteTransitGatewayCommand === "function");
assert(typeof DeleteTransitGatewayConnectCommand === "function");
assert(typeof DeleteTransitGatewayConnectPeerCommand === "function");
assert(typeof DeleteTransitGatewayMeteringPolicyCommand === "function");
assert(typeof DeleteTransitGatewayMeteringPolicyEntryCommand === "function");
assert(typeof DeleteTransitGatewayMulticastDomainCommand === "function");
assert(typeof DeleteTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof DeleteTransitGatewayPolicyTableCommand === "function");
assert(typeof DeleteTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof DeleteTransitGatewayRouteCommand === "function");
assert(typeof DeleteTransitGatewayRouteTableCommand === "function");
assert(typeof DeleteTransitGatewayRouteTableAnnouncementCommand === "function");
assert(typeof DeleteTransitGatewayVpcAttachmentCommand === "function");
assert(typeof DeleteVerifiedAccessEndpointCommand === "function");
assert(typeof DeleteVerifiedAccessGroupCommand === "function");
assert(typeof DeleteVerifiedAccessInstanceCommand === "function");
assert(typeof DeleteVerifiedAccessTrustProviderCommand === "function");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DeleteVpcCommand === "function");
assert(typeof DeleteVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof DeleteVpcEncryptionControlCommand === "function");
assert(typeof DeleteVpcEndpointConnectionNotificationsCommand === "function");
assert(typeof DeleteVpcEndpointsCommand === "function");
assert(typeof DeleteVpcEndpointServiceConfigurationsCommand === "function");
assert(typeof DeleteVpcPeeringConnectionCommand === "function");
assert(typeof DeleteVpnConcentratorCommand === "function");
assert(typeof DeleteVpnConnectionCommand === "function");
assert(typeof DeleteVpnConnectionRouteCommand === "function");
assert(typeof DeleteVpnGatewayCommand === "function");
assert(typeof DeprovisionByoipCidrCommand === "function");
assert(typeof DeprovisionIpamByoasnCommand === "function");
assert(typeof DeprovisionIpamPoolCidrCommand === "function");
assert(typeof DeprovisionPublicIpv4PoolCidrCommand === "function");
assert(typeof DeregisterImageCommand === "function");
assert(typeof DeregisterInstanceEventNotificationAttributesCommand === "function");
assert(typeof DeregisterTransitGatewayMulticastGroupMembersCommand === "function");
assert(typeof DeregisterTransitGatewayMulticastGroupSourcesCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAddressesCommand === "function");
assert(typeof DescribeAddressesAttributeCommand === "function");
assert(typeof DescribeAddressTransfersCommand === "function");
assert(typeof DescribeAggregateIdFormatCommand === "function");
assert(typeof DescribeAvailabilityZonesCommand === "function");
assert(typeof DescribeAwsNetworkPerformanceMetricSubscriptionsCommand === "function");
assert(typeof DescribeBundleTasksCommand === "function");
assert(typeof DescribeByoipCidrsCommand === "function");
assert(typeof DescribeCapacityBlockExtensionHistoryCommand === "function");
assert(typeof DescribeCapacityBlockExtensionOfferingsCommand === "function");
assert(typeof DescribeCapacityBlockOfferingsCommand === "function");
assert(typeof DescribeCapacityBlocksCommand === "function");
assert(typeof DescribeCapacityBlockStatusCommand === "function");
assert(typeof DescribeCapacityManagerDataExportsCommand === "function");
assert(typeof DescribeCapacityReservationBillingRequestsCommand === "function");
assert(typeof DescribeCapacityReservationFleetsCommand === "function");
assert(typeof DescribeCapacityReservationsCommand === "function");
assert(typeof DescribeCapacityReservationTopologyCommand === "function");
assert(typeof DescribeCarrierGatewaysCommand === "function");
assert(typeof DescribeClassicLinkInstancesCommand === "function");
assert(typeof DescribeClientVpnAuthorizationRulesCommand === "function");
assert(typeof DescribeClientVpnConnectionsCommand === "function");
assert(typeof DescribeClientVpnEndpointsCommand === "function");
assert(typeof DescribeClientVpnRoutesCommand === "function");
assert(typeof DescribeClientVpnTargetNetworksCommand === "function");
assert(typeof DescribeCoipPoolsCommand === "function");
assert(typeof DescribeConversionTasksCommand === "function");
assert(typeof DescribeCustomerGatewaysCommand === "function");
assert(typeof DescribeDeclarativePoliciesReportsCommand === "function");
assert(typeof DescribeDhcpOptionsCommand === "function");
assert(typeof DescribeEgressOnlyInternetGatewaysCommand === "function");
assert(typeof DescribeElasticGpusCommand === "function");
assert(typeof DescribeExportImageTasksCommand === "function");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeFastLaunchImagesCommand === "function");
assert(typeof DescribeFastSnapshotRestoresCommand === "function");
assert(typeof DescribeFleetHistoryCommand === "function");
assert(typeof DescribeFleetInstancesCommand === "function");
assert(typeof DescribeFleetsCommand === "function");
assert(typeof DescribeFlowLogsCommand === "function");
assert(typeof DescribeFpgaImageAttributeCommand === "function");
assert(typeof DescribeFpgaImagesCommand === "function");
assert(typeof DescribeHostReservationOfferingsCommand === "function");
assert(typeof DescribeHostReservationsCommand === "function");
assert(typeof DescribeHostsCommand === "function");
assert(typeof DescribeIamInstanceProfileAssociationsCommand === "function");
assert(typeof DescribeIdentityIdFormatCommand === "function");
assert(typeof DescribeIdFormatCommand === "function");
assert(typeof DescribeImageAttributeCommand === "function");
assert(typeof DescribeImageReferencesCommand === "function");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImageUsageReportEntriesCommand === "function");
assert(typeof DescribeImageUsageReportsCommand === "function");
assert(typeof DescribeImportImageTasksCommand === "function");
assert(typeof DescribeImportSnapshotTasksCommand === "function");
assert(typeof DescribeInstanceAttributeCommand === "function");
assert(typeof DescribeInstanceConnectEndpointsCommand === "function");
assert(typeof DescribeInstanceCreditSpecificationsCommand === "function");
assert(typeof DescribeInstanceEventNotificationAttributesCommand === "function");
assert(typeof DescribeInstanceEventWindowsCommand === "function");
assert(typeof DescribeInstanceImageMetadataCommand === "function");
assert(typeof DescribeInstancesCommand === "function");
assert(typeof DescribeInstanceSqlHaHistoryStatesCommand === "function");
assert(typeof DescribeInstanceSqlHaStatesCommand === "function");
assert(typeof DescribeInstanceStatusCommand === "function");
assert(typeof DescribeInstanceTopologyCommand === "function");
assert(typeof DescribeInstanceTypeOfferingsCommand === "function");
assert(typeof DescribeInstanceTypesCommand === "function");
assert(typeof DescribeInternetGatewaysCommand === "function");
assert(typeof DescribeIpamByoasnCommand === "function");
assert(typeof DescribeIpamExternalResourceVerificationTokensCommand === "function");
assert(typeof DescribeIpamPoliciesCommand === "function");
assert(typeof DescribeIpamPoolsCommand === "function");
assert(typeof DescribeIpamPrefixListResolversCommand === "function");
assert(typeof DescribeIpamPrefixListResolverTargetsCommand === "function");
assert(typeof DescribeIpamResourceDiscoveriesCommand === "function");
assert(typeof DescribeIpamResourceDiscoveryAssociationsCommand === "function");
assert(typeof DescribeIpamsCommand === "function");
assert(typeof DescribeIpamScopesCommand === "function");
assert(typeof DescribeIpv6PoolsCommand === "function");
assert(typeof DescribeKeyPairsCommand === "function");
assert(typeof DescribeLaunchTemplatesCommand === "function");
assert(typeof DescribeLaunchTemplateVersionsCommand === "function");
assert(typeof DescribeLocalGatewayRouteTablesCommand === "function");
assert(typeof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand === "function");
assert(typeof DescribeLocalGatewayRouteTableVpcAssociationsCommand === "function");
assert(typeof DescribeLocalGatewaysCommand === "function");
assert(typeof DescribeLocalGatewayVirtualInterfaceGroupsCommand === "function");
assert(typeof DescribeLocalGatewayVirtualInterfacesCommand === "function");
assert(typeof DescribeLockedSnapshotsCommand === "function");
assert(typeof DescribeMacHostsCommand === "function");
assert(typeof DescribeMacModificationTasksCommand === "function");
assert(typeof DescribeManagedPrefixListsCommand === "function");
assert(typeof DescribeMovingAddressesCommand === "function");
assert(typeof DescribeNatGatewaysCommand === "function");
assert(typeof DescribeNetworkAclsCommand === "function");
assert(typeof DescribeNetworkInsightsAccessScopeAnalysesCommand === "function");
assert(typeof DescribeNetworkInsightsAccessScopesCommand === "function");
assert(typeof DescribeNetworkInsightsAnalysesCommand === "function");
assert(typeof DescribeNetworkInsightsPathsCommand === "function");
assert(typeof DescribeNetworkInterfaceAttributeCommand === "function");
assert(typeof DescribeNetworkInterfacePermissionsCommand === "function");
assert(typeof DescribeNetworkInterfacesCommand === "function");
assert(typeof DescribeOutpostLagsCommand === "function");
assert(typeof DescribePlacementGroupsCommand === "function");
assert(typeof DescribePrefixListsCommand === "function");
assert(typeof DescribePrincipalIdFormatCommand === "function");
assert(typeof DescribePublicIpv4PoolsCommand === "function");
assert(typeof DescribeRegionsCommand === "function");
assert(typeof DescribeReplaceRootVolumeTasksCommand === "function");
assert(typeof DescribeReservedInstancesCommand === "function");
assert(typeof DescribeReservedInstancesListingsCommand === "function");
assert(typeof DescribeReservedInstancesModificationsCommand === "function");
assert(typeof DescribeReservedInstancesOfferingsCommand === "function");
assert(typeof DescribeRouteServerEndpointsCommand === "function");
assert(typeof DescribeRouteServerPeersCommand === "function");
assert(typeof DescribeRouteServersCommand === "function");
assert(typeof DescribeRouteTablesCommand === "function");
assert(typeof DescribeScheduledInstanceAvailabilityCommand === "function");
assert(typeof DescribeScheduledInstancesCommand === "function");
assert(typeof DescribeSecurityGroupReferencesCommand === "function");
assert(typeof DescribeSecurityGroupRulesCommand === "function");
assert(typeof DescribeSecurityGroupsCommand === "function");
assert(typeof DescribeSecurityGroupVpcAssociationsCommand === "function");
assert(typeof DescribeServiceLinkVirtualInterfacesCommand === "function");
assert(typeof DescribeSnapshotAttributeCommand === "function");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshotTierStatusCommand === "function");
assert(typeof DescribeSpotDatafeedSubscriptionCommand === "function");
assert(typeof DescribeSpotFleetInstancesCommand === "function");
assert(typeof DescribeSpotFleetRequestHistoryCommand === "function");
assert(typeof DescribeSpotFleetRequestsCommand === "function");
assert(typeof DescribeSpotInstanceRequestsCommand === "function");
assert(typeof DescribeSpotPriceHistoryCommand === "function");
assert(typeof DescribeStaleSecurityGroupsCommand === "function");
assert(typeof DescribeStoreImageTasksCommand === "function");
assert(typeof DescribeSubnetsCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTrafficMirrorFilterRulesCommand === "function");
assert(typeof DescribeTrafficMirrorFiltersCommand === "function");
assert(typeof DescribeTrafficMirrorSessionsCommand === "function");
assert(typeof DescribeTrafficMirrorTargetsCommand === "function");
assert(typeof DescribeTransitGatewayAttachmentsCommand === "function");
assert(typeof DescribeTransitGatewayConnectPeersCommand === "function");
assert(typeof DescribeTransitGatewayConnectsCommand === "function");
assert(typeof DescribeTransitGatewayMeteringPoliciesCommand === "function");
assert(typeof DescribeTransitGatewayMulticastDomainsCommand === "function");
assert(typeof DescribeTransitGatewayPeeringAttachmentsCommand === "function");
assert(typeof DescribeTransitGatewayPolicyTablesCommand === "function");
assert(typeof DescribeTransitGatewayRouteTableAnnouncementsCommand === "function");
assert(typeof DescribeTransitGatewayRouteTablesCommand === "function");
assert(typeof DescribeTransitGatewaysCommand === "function");
assert(typeof DescribeTransitGatewayVpcAttachmentsCommand === "function");
assert(typeof DescribeTrunkInterfaceAssociationsCommand === "function");
assert(typeof DescribeVerifiedAccessEndpointsCommand === "function");
assert(typeof DescribeVerifiedAccessGroupsCommand === "function");
assert(typeof DescribeVerifiedAccessInstanceLoggingConfigurationsCommand === "function");
assert(typeof DescribeVerifiedAccessInstancesCommand === "function");
assert(typeof DescribeVerifiedAccessTrustProvidersCommand === "function");
assert(typeof DescribeVolumeAttributeCommand === "function");
assert(typeof DescribeVolumesCommand === "function");
assert(typeof DescribeVolumesModificationsCommand === "function");
assert(typeof DescribeVolumeStatusCommand === "function");
assert(typeof DescribeVpcAttributeCommand === "function");
assert(typeof DescribeVpcBlockPublicAccessExclusionsCommand === "function");
assert(typeof DescribeVpcBlockPublicAccessOptionsCommand === "function");
assert(typeof DescribeVpcClassicLinkCommand === "function");
assert(typeof DescribeVpcClassicLinkDnsSupportCommand === "function");
assert(typeof DescribeVpcEncryptionControlsCommand === "function");
assert(typeof DescribeVpcEndpointAssociationsCommand === "function");
assert(typeof DescribeVpcEndpointConnectionNotificationsCommand === "function");
assert(typeof DescribeVpcEndpointConnectionsCommand === "function");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DescribeVpcEndpointServiceConfigurationsCommand === "function");
assert(typeof DescribeVpcEndpointServicePermissionsCommand === "function");
assert(typeof DescribeVpcEndpointServicesCommand === "function");
assert(typeof DescribeVpcPeeringConnectionsCommand === "function");
assert(typeof DescribeVpcsCommand === "function");
assert(typeof DescribeVpnConcentratorsCommand === "function");
assert(typeof DescribeVpnConnectionsCommand === "function");
assert(typeof DescribeVpnGatewaysCommand === "function");
assert(typeof DetachClassicLinkVpcCommand === "function");
assert(typeof DetachInternetGatewayCommand === "function");
assert(typeof DetachNetworkInterfaceCommand === "function");
assert(typeof DetachVerifiedAccessTrustProviderCommand === "function");
assert(typeof DetachVolumeCommand === "function");
assert(typeof DetachVpnGatewayCommand === "function");
assert(typeof DisableAddressTransferCommand === "function");
assert(typeof DisableAllowedImagesSettingsCommand === "function");
assert(typeof DisableAwsNetworkPerformanceMetricSubscriptionCommand === "function");
assert(typeof DisableCapacityManagerCommand === "function");
assert(typeof DisableEbsEncryptionByDefaultCommand === "function");
assert(typeof DisableFastLaunchCommand === "function");
assert(typeof DisableFastSnapshotRestoresCommand === "function");
assert(typeof DisableImageCommand === "function");
assert(typeof DisableImageBlockPublicAccessCommand === "function");
assert(typeof DisableImageDeprecationCommand === "function");
assert(typeof DisableImageDeregistrationProtectionCommand === "function");
assert(typeof DisableInstanceSqlHaStandbyDetectionsCommand === "function");
assert(typeof DisableIpamOrganizationAdminAccountCommand === "function");
assert(typeof DisableIpamPolicyCommand === "function");
assert(typeof DisableRouteServerPropagationCommand === "function");
assert(typeof DisableSerialConsoleAccessCommand === "function");
assert(typeof DisableSnapshotBlockPublicAccessCommand === "function");
assert(typeof DisableTransitGatewayRouteTablePropagationCommand === "function");
assert(typeof DisableVgwRoutePropagationCommand === "function");
assert(typeof DisableVpcClassicLinkCommand === "function");
assert(typeof DisableVpcClassicLinkDnsSupportCommand === "function");
assert(typeof DisassociateAddressCommand === "function");
assert(typeof DisassociateCapacityReservationBillingOwnerCommand === "function");
assert(typeof DisassociateClientVpnTargetNetworkCommand === "function");
assert(typeof DisassociateEnclaveCertificateIamRoleCommand === "function");
assert(typeof DisassociateIamInstanceProfileCommand === "function");
assert(typeof DisassociateInstanceEventWindowCommand === "function");
assert(typeof DisassociateIpamByoasnCommand === "function");
assert(typeof DisassociateIpamResourceDiscoveryCommand === "function");
assert(typeof DisassociateNatGatewayAddressCommand === "function");
assert(typeof DisassociateRouteServerCommand === "function");
assert(typeof DisassociateRouteTableCommand === "function");
assert(typeof DisassociateSecurityGroupVpcCommand === "function");
assert(typeof DisassociateSubnetCidrBlockCommand === "function");
assert(typeof DisassociateTransitGatewayMulticastDomainCommand === "function");
assert(typeof DisassociateTransitGatewayPolicyTableCommand === "function");
assert(typeof DisassociateTransitGatewayRouteTableCommand === "function");
assert(typeof DisassociateTrunkInterfaceCommand === "function");
assert(typeof DisassociateVpcCidrBlockCommand === "function");
assert(typeof EnableAddressTransferCommand === "function");
assert(typeof EnableAllowedImagesSettingsCommand === "function");
assert(typeof EnableAwsNetworkPerformanceMetricSubscriptionCommand === "function");
assert(typeof EnableCapacityManagerCommand === "function");
assert(typeof EnableEbsEncryptionByDefaultCommand === "function");
assert(typeof EnableFastLaunchCommand === "function");
assert(typeof EnableFastSnapshotRestoresCommand === "function");
assert(typeof EnableImageCommand === "function");
assert(typeof EnableImageBlockPublicAccessCommand === "function");
assert(typeof EnableImageDeprecationCommand === "function");
assert(typeof EnableImageDeregistrationProtectionCommand === "function");
assert(typeof EnableInstanceSqlHaStandbyDetectionsCommand === "function");
assert(typeof EnableIpamOrganizationAdminAccountCommand === "function");
assert(typeof EnableIpamPolicyCommand === "function");
assert(typeof EnableReachabilityAnalyzerOrganizationSharingCommand === "function");
assert(typeof EnableRouteServerPropagationCommand === "function");
assert(typeof EnableSerialConsoleAccessCommand === "function");
assert(typeof EnableSnapshotBlockPublicAccessCommand === "function");
assert(typeof EnableTransitGatewayRouteTablePropagationCommand === "function");
assert(typeof EnableVgwRoutePropagationCommand === "function");
assert(typeof EnableVolumeIOCommand === "function");
assert(typeof EnableVpcClassicLinkCommand === "function");
assert(typeof EnableVpcClassicLinkDnsSupportCommand === "function");
assert(typeof ExportClientVpnClientCertificateRevocationListCommand === "function");
assert(typeof ExportClientVpnClientConfigurationCommand === "function");
assert(typeof ExportImageCommand === "function");
assert(typeof ExportTransitGatewayRoutesCommand === "function");
assert(typeof ExportVerifiedAccessInstanceClientConfigurationCommand === "function");
assert(typeof GetActiveVpnTunnelStatusCommand === "function");
assert(typeof GetAllowedImagesSettingsCommand === "function");
assert(typeof GetAssociatedEnclaveCertificateIamRolesCommand === "function");
assert(typeof GetAssociatedIpv6PoolCidrsCommand === "function");
assert(typeof GetAwsNetworkPerformanceDataCommand === "function");
assert(typeof GetCapacityManagerAttributesCommand === "function");
assert(typeof GetCapacityManagerMetricDataCommand === "function");
assert(typeof GetCapacityManagerMetricDimensionsCommand === "function");
assert(typeof GetCapacityReservationUsageCommand === "function");
assert(typeof GetCoipPoolUsageCommand === "function");
assert(typeof GetConsoleOutputCommand === "function");
assert(typeof GetConsoleScreenshotCommand === "function");
assert(typeof GetDeclarativePoliciesReportSummaryCommand === "function");
assert(typeof GetDefaultCreditSpecificationCommand === "function");
assert(typeof GetEbsDefaultKmsKeyIdCommand === "function");
assert(typeof GetEbsEncryptionByDefaultCommand === "function");
assert(typeof GetEnabledIpamPolicyCommand === "function");
assert(typeof GetFlowLogsIntegrationTemplateCommand === "function");
assert(typeof GetGroupsForCapacityReservationCommand === "function");
assert(typeof GetHostReservationPurchasePreviewCommand === "function");
assert(typeof GetImageAncestryCommand === "function");
assert(typeof GetImageBlockPublicAccessStateCommand === "function");
assert(typeof GetInstanceMetadataDefaultsCommand === "function");
assert(typeof GetInstanceTpmEkPubCommand === "function");
assert(typeof GetInstanceTypesFromInstanceRequirementsCommand === "function");
assert(typeof GetInstanceUefiDataCommand === "function");
assert(typeof GetIpamAddressHistoryCommand === "function");
assert(typeof GetIpamDiscoveredAccountsCommand === "function");
assert(typeof GetIpamDiscoveredPublicAddressesCommand === "function");
assert(typeof GetIpamDiscoveredResourceCidrsCommand === "function");
assert(typeof GetIpamPolicyAllocationRulesCommand === "function");
assert(typeof GetIpamPolicyOrganizationTargetsCommand === "function");
assert(typeof GetIpamPoolAllocationsCommand === "function");
assert(typeof GetIpamPoolCidrsCommand === "function");
assert(typeof GetIpamPrefixListResolverRulesCommand === "function");
assert(typeof GetIpamPrefixListResolverVersionEntriesCommand === "function");
assert(typeof GetIpamPrefixListResolverVersionsCommand === "function");
assert(typeof GetIpamResourceCidrsCommand === "function");
assert(typeof GetLaunchTemplateDataCommand === "function");
assert(typeof GetManagedPrefixListAssociationsCommand === "function");
assert(typeof GetManagedPrefixListEntriesCommand === "function");
assert(typeof GetNetworkInsightsAccessScopeAnalysisFindingsCommand === "function");
assert(typeof GetNetworkInsightsAccessScopeContentCommand === "function");
assert(typeof GetPasswordDataCommand === "function");
assert(typeof GetReservedInstancesExchangeQuoteCommand === "function");
assert(typeof GetRouteServerAssociationsCommand === "function");
assert(typeof GetRouteServerPropagationsCommand === "function");
assert(typeof GetRouteServerRoutingDatabaseCommand === "function");
assert(typeof GetSecurityGroupsForVpcCommand === "function");
assert(typeof GetSerialConsoleAccessStatusCommand === "function");
assert(typeof GetSnapshotBlockPublicAccessStateCommand === "function");
assert(typeof GetSpotPlacementScoresCommand === "function");
assert(typeof GetSubnetCidrReservationsCommand === "function");
assert(typeof GetTransitGatewayAttachmentPropagationsCommand === "function");
assert(typeof GetTransitGatewayMeteringPolicyEntriesCommand === "function");
assert(typeof GetTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof GetTransitGatewayPolicyTableAssociationsCommand === "function");
assert(typeof GetTransitGatewayPolicyTableEntriesCommand === "function");
assert(typeof GetTransitGatewayPrefixListReferencesCommand === "function");
assert(typeof GetTransitGatewayRouteTableAssociationsCommand === "function");
assert(typeof GetTransitGatewayRouteTablePropagationsCommand === "function");
assert(typeof GetVerifiedAccessEndpointPolicyCommand === "function");
assert(typeof GetVerifiedAccessEndpointTargetsCommand === "function");
assert(typeof GetVerifiedAccessGroupPolicyCommand === "function");
assert(typeof GetVpcResourcesBlockingEncryptionEnforcementCommand === "function");
assert(typeof GetVpnConnectionDeviceSampleConfigurationCommand === "function");
assert(typeof GetVpnConnectionDeviceTypesCommand === "function");
assert(typeof GetVpnTunnelReplacementStatusCommand === "function");
assert(typeof ImportClientVpnClientCertificateRevocationListCommand === "function");
assert(typeof ImportImageCommand === "function");
assert(typeof ImportInstanceCommand === "function");
assert(typeof ImportKeyPairCommand === "function");
assert(typeof ImportSnapshotCommand === "function");
assert(typeof ImportVolumeCommand === "function");
assert(typeof ListImagesInRecycleBinCommand === "function");
assert(typeof ListSnapshotsInRecycleBinCommand === "function");
assert(typeof ListVolumesInRecycleBinCommand === "function");
assert(typeof LockSnapshotCommand === "function");
assert(typeof ModifyAddressAttributeCommand === "function");
assert(typeof ModifyAvailabilityZoneGroupCommand === "function");
assert(typeof ModifyCapacityReservationCommand === "function");
assert(typeof ModifyCapacityReservationFleetCommand === "function");
assert(typeof ModifyClientVpnEndpointCommand === "function");
assert(typeof ModifyDefaultCreditSpecificationCommand === "function");
assert(typeof ModifyEbsDefaultKmsKeyIdCommand === "function");
assert(typeof ModifyFleetCommand === "function");
assert(typeof ModifyFpgaImageAttributeCommand === "function");
assert(typeof ModifyHostsCommand === "function");
assert(typeof ModifyIdentityIdFormatCommand === "function");
assert(typeof ModifyIdFormatCommand === "function");
assert(typeof ModifyImageAttributeCommand === "function");
assert(typeof ModifyInstanceAttributeCommand === "function");
assert(typeof ModifyInstanceCapacityReservationAttributesCommand === "function");
assert(typeof ModifyInstanceConnectEndpointCommand === "function");
assert(typeof ModifyInstanceCpuOptionsCommand === "function");
assert(typeof ModifyInstanceCreditSpecificationCommand === "function");
assert(typeof ModifyInstanceEventStartTimeCommand === "function");
assert(typeof ModifyInstanceEventWindowCommand === "function");
assert(typeof ModifyInstanceMaintenanceOptionsCommand === "function");
assert(typeof ModifyInstanceMetadataDefaultsCommand === "function");
assert(typeof ModifyInstanceMetadataOptionsCommand === "function");
assert(typeof ModifyInstanceNetworkPerformanceOptionsCommand === "function");
assert(typeof ModifyInstancePlacementCommand === "function");
assert(typeof ModifyIpamCommand === "function");
assert(typeof ModifyIpamPolicyAllocationRulesCommand === "function");
assert(typeof ModifyIpamPoolCommand === "function");
assert(typeof ModifyIpamPrefixListResolverCommand === "function");
assert(typeof ModifyIpamPrefixListResolverTargetCommand === "function");
assert(typeof ModifyIpamResourceCidrCommand === "function");
assert(typeof ModifyIpamResourceDiscoveryCommand === "function");
assert(typeof ModifyIpamScopeCommand === "function");
assert(typeof ModifyLaunchTemplateCommand === "function");
assert(typeof ModifyLocalGatewayRouteCommand === "function");
assert(typeof ModifyManagedPrefixListCommand === "function");
assert(typeof ModifyNetworkInterfaceAttributeCommand === "function");
assert(typeof ModifyPrivateDnsNameOptionsCommand === "function");
assert(typeof ModifyPublicIpDnsNameOptionsCommand === "function");
assert(typeof ModifyReservedInstancesCommand === "function");
assert(typeof ModifyRouteServerCommand === "function");
assert(typeof ModifySecurityGroupRulesCommand === "function");
assert(typeof ModifySnapshotAttributeCommand === "function");
assert(typeof ModifySnapshotTierCommand === "function");
assert(typeof ModifySpotFleetRequestCommand === "function");
assert(typeof ModifySubnetAttributeCommand === "function");
assert(typeof ModifyTrafficMirrorFilterNetworkServicesCommand === "function");
assert(typeof ModifyTrafficMirrorFilterRuleCommand === "function");
assert(typeof ModifyTrafficMirrorSessionCommand === "function");
assert(typeof ModifyTransitGatewayCommand === "function");
assert(typeof ModifyTransitGatewayMeteringPolicyCommand === "function");
assert(typeof ModifyTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof ModifyTransitGatewayVpcAttachmentCommand === "function");
assert(typeof ModifyVerifiedAccessEndpointCommand === "function");
assert(typeof ModifyVerifiedAccessEndpointPolicyCommand === "function");
assert(typeof ModifyVerifiedAccessGroupCommand === "function");
assert(typeof ModifyVerifiedAccessGroupPolicyCommand === "function");
assert(typeof ModifyVerifiedAccessInstanceCommand === "function");
assert(typeof ModifyVerifiedAccessInstanceLoggingConfigurationCommand === "function");
assert(typeof ModifyVerifiedAccessTrustProviderCommand === "function");
assert(typeof ModifyVolumeCommand === "function");
assert(typeof ModifyVolumeAttributeCommand === "function");
assert(typeof ModifyVpcAttributeCommand === "function");
assert(typeof ModifyVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof ModifyVpcBlockPublicAccessOptionsCommand === "function");
assert(typeof ModifyVpcEncryptionControlCommand === "function");
assert(typeof ModifyVpcEndpointCommand === "function");
assert(typeof ModifyVpcEndpointConnectionNotificationCommand === "function");
assert(typeof ModifyVpcEndpointServiceConfigurationCommand === "function");
assert(typeof ModifyVpcEndpointServicePayerResponsibilityCommand === "function");
assert(typeof ModifyVpcEndpointServicePermissionsCommand === "function");
assert(typeof ModifyVpcPeeringConnectionOptionsCommand === "function");
assert(typeof ModifyVpcTenancyCommand === "function");
assert(typeof ModifyVpnConnectionCommand === "function");
assert(typeof ModifyVpnConnectionOptionsCommand === "function");
assert(typeof ModifyVpnTunnelCertificateCommand === "function");
assert(typeof ModifyVpnTunnelOptionsCommand === "function");
assert(typeof MonitorInstancesCommand === "function");
assert(typeof MoveAddressToVpcCommand === "function");
assert(typeof MoveByoipCidrToIpamCommand === "function");
assert(typeof MoveCapacityReservationInstancesCommand === "function");
assert(typeof ProvisionByoipCidrCommand === "function");
assert(typeof ProvisionIpamByoasnCommand === "function");
assert(typeof ProvisionIpamPoolCidrCommand === "function");
assert(typeof ProvisionPublicIpv4PoolCidrCommand === "function");
assert(typeof PurchaseCapacityBlockCommand === "function");
assert(typeof PurchaseCapacityBlockExtensionCommand === "function");
assert(typeof PurchaseHostReservationCommand === "function");
assert(typeof PurchaseReservedInstancesOfferingCommand === "function");
assert(typeof PurchaseScheduledInstancesCommand === "function");
assert(typeof RebootInstancesCommand === "function");
assert(typeof RegisterImageCommand === "function");
assert(typeof RegisterInstanceEventNotificationAttributesCommand === "function");
assert(typeof RegisterTransitGatewayMulticastGroupMembersCommand === "function");
assert(typeof RegisterTransitGatewayMulticastGroupSourcesCommand === "function");
assert(typeof RejectCapacityReservationBillingOwnershipCommand === "function");
assert(typeof RejectTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof RejectTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof RejectTransitGatewayVpcAttachmentCommand === "function");
assert(typeof RejectVpcEndpointConnectionsCommand === "function");
assert(typeof RejectVpcPeeringConnectionCommand === "function");
assert(typeof ReleaseAddressCommand === "function");
assert(typeof ReleaseHostsCommand === "function");
assert(typeof ReleaseIpamPoolAllocationCommand === "function");
assert(typeof ReplaceIamInstanceProfileAssociationCommand === "function");
assert(typeof ReplaceImageCriteriaInAllowedImagesSettingsCommand === "function");
assert(typeof ReplaceNetworkAclAssociationCommand === "function");
assert(typeof ReplaceNetworkAclEntryCommand === "function");
assert(typeof ReplaceRouteCommand === "function");
assert(typeof ReplaceRouteTableAssociationCommand === "function");
assert(typeof ReplaceTransitGatewayRouteCommand === "function");
assert(typeof ReplaceVpnTunnelCommand === "function");
assert(typeof ReportInstanceStatusCommand === "function");
assert(typeof RequestSpotFleetCommand === "function");
assert(typeof RequestSpotInstancesCommand === "function");
assert(typeof ResetAddressAttributeCommand === "function");
assert(typeof ResetEbsDefaultKmsKeyIdCommand === "function");
assert(typeof ResetFpgaImageAttributeCommand === "function");
assert(typeof ResetImageAttributeCommand === "function");
assert(typeof ResetInstanceAttributeCommand === "function");
assert(typeof ResetNetworkInterfaceAttributeCommand === "function");
assert(typeof ResetSnapshotAttributeCommand === "function");
assert(typeof RestoreAddressToClassicCommand === "function");
assert(typeof RestoreImageFromRecycleBinCommand === "function");
assert(typeof RestoreManagedPrefixListVersionCommand === "function");
assert(typeof RestoreSnapshotFromRecycleBinCommand === "function");
assert(typeof RestoreSnapshotTierCommand === "function");
assert(typeof RestoreVolumeFromRecycleBinCommand === "function");
assert(typeof RevokeClientVpnIngressCommand === "function");
assert(typeof RevokeSecurityGroupEgressCommand === "function");
assert(typeof RevokeSecurityGroupIngressCommand === "function");
assert(typeof RunInstancesCommand === "function");
assert(typeof RunScheduledInstancesCommand === "function");
assert(typeof SearchLocalGatewayRoutesCommand === "function");
assert(typeof SearchTransitGatewayMulticastGroupsCommand === "function");
assert(typeof SearchTransitGatewayRoutesCommand === "function");
assert(typeof SendDiagnosticInterruptCommand === "function");
assert(typeof StartDeclarativePoliciesReportCommand === "function");
assert(typeof StartInstancesCommand === "function");
assert(typeof StartNetworkInsightsAccessScopeAnalysisCommand === "function");
assert(typeof StartNetworkInsightsAnalysisCommand === "function");
assert(typeof StartVpcEndpointServicePrivateDnsVerificationCommand === "function");
assert(typeof StopInstancesCommand === "function");
assert(typeof TerminateClientVpnConnectionsCommand === "function");
assert(typeof TerminateInstancesCommand === "function");
assert(typeof UnassignIpv6AddressesCommand === "function");
assert(typeof UnassignPrivateIpAddressesCommand === "function");
assert(typeof UnassignPrivateNatGatewayAddressCommand === "function");
assert(typeof UnlockSnapshotCommand === "function");
assert(typeof UnmonitorInstancesCommand === "function");
assert(typeof UpdateCapacityManagerOrganizationsAccessCommand === "function");
assert(typeof UpdateInterruptibleCapacityReservationAllocationCommand === "function");
assert(typeof UpdateSecurityGroupRuleDescriptionsEgressCommand === "function");
assert(typeof UpdateSecurityGroupRuleDescriptionsIngressCommand === "function");
assert(typeof WithdrawByoipCidrCommand === "function");
// enums
assert(typeof AcceleratorManufacturer === "object");
assert(typeof AcceleratorName === "object");
assert(typeof AcceleratorType === "object");
assert(typeof AccountAttributeName === "object");
assert(typeof ActivityStatus === "object");
assert(typeof AddressAttributeName === "object");
assert(typeof AddressFamily === "object");
assert(typeof AddressTransferStatus === "object");
assert(typeof Affinity === "object");
assert(typeof AllocationState === "object");
assert(typeof AllocationStrategy === "object");
assert(typeof AllocationType === "object");
assert(typeof AllowedImagesSettingsDisabledState === "object");
assert(typeof AllowedImagesSettingsEnabledState === "object");
assert(typeof AllowsMultipleInstanceTypes === "object");
assert(typeof AmdSevSnpSpecification === "object");
assert(typeof AnalysisStatus === "object");
assert(typeof ApplianceModeSupportValue === "object");
assert(typeof ArchitectureType === "object");
assert(typeof ArchitectureValues === "object");
assert(typeof AsnAssociationState === "object");
assert(typeof AsnState === "object");
assert(typeof AssociatedNetworkType === "object");
assert(typeof AssociationStatusCode === "object");
assert(typeof AttachmentLimitType === "object");
assert(typeof AttachmentStatus === "object");
assert(typeof AutoAcceptSharedAssociationsValue === "object");
assert(typeof AutoAcceptSharedAttachmentsValue === "object");
assert(typeof AutoPlacement === "object");
assert(typeof AutoProvisionZonesState === "object");
assert(typeof AutoScalingIpsState === "object");
assert(typeof AvailabilityMode === "object");
assert(typeof AvailabilityZoneOptInStatus === "object");
assert(typeof AvailabilityZoneState === "object");
assert(typeof BandwidthWeightingType === "object");
assert(typeof BareMetal === "object");
assert(typeof BatchState === "object");
assert(typeof BgpStatus === "object");
assert(typeof BlockPublicAccessMode === "object");
assert(typeof BootModeType === "object");
assert(typeof BootModeValues === "object");
assert(typeof BundleTaskState === "object");
assert(typeof BurstablePerformance === "object");
assert(typeof ByoipCidrState === "object");
assert(typeof CallerRole === "object");
assert(typeof CancelBatchErrorCode === "object");
assert(typeof CancelSpotInstanceRequestState === "object");
assert(typeof CapacityBlockExtensionStatus === "object");
assert(typeof CapacityBlockInterconnectStatus === "object");
assert(typeof CapacityBlockResourceState === "object");
assert(typeof CapacityManagerDataExportStatus === "object");
assert(typeof CapacityManagerStatus === "object");
assert(typeof CapacityReservationBillingRequestStatus === "object");
assert(typeof CapacityReservationDeliveryPreference === "object");
assert(typeof CapacityReservationFleetState === "object");
assert(typeof CapacityReservationInstancePlatform === "object");
assert(typeof CapacityReservationPreference === "object");
assert(typeof CapacityReservationState === "object");
assert(typeof CapacityReservationTenancy === "object");
assert(typeof CapacityReservationType === "object");
assert(typeof CapacityTenancy === "object");
assert(typeof CarrierGatewayState === "object");
assert(typeof ClientCertificateRevocationListStatusCode === "object");
assert(typeof ClientVpnAuthenticationType === "object");
assert(typeof ClientVpnAuthorizationRuleStatusCode === "object");
assert(typeof ClientVpnConnectionStatusCode === "object");
assert(typeof ClientVpnEndpointAttributeStatusCode === "object");
assert(typeof ClientVpnEndpointStatusCode === "object");
assert(typeof ClientVpnRouteStatusCode === "object");
assert(typeof Comparison === "object");
assert(typeof ConnectionNotificationState === "object");
assert(typeof ConnectionNotificationType === "object");
assert(typeof ConnectivityType === "object");
assert(typeof ContainerFormat === "object");
assert(typeof ConversionTaskState === "object");
assert(typeof CopyTagsFromSource === "object");
assert(typeof CpuManufacturer === "object");
assert(typeof CurrencyCodeValues === "object");
assert(typeof DatafeedSubscriptionState === "object");
assert(typeof DefaultInstanceMetadataEndpointState === "object");
assert(typeof DefaultInstanceMetadataTagsState === "object");
assert(typeof DefaultRouteTableAssociationValue === "object");
assert(typeof DefaultRouteTablePropagationValue === "object");
assert(typeof DefaultTargetCapacityType === "object");
assert(typeof DeleteFleetErrorCode === "object");
assert(typeof DeleteQueuedReservedInstancesErrorCode === "object");
assert(typeof DestinationFileFormat === "object");
assert(typeof DeviceTrustProviderType === "object");
assert(typeof DeviceType === "object");
assert(typeof DiskImageFormat === "object");
assert(typeof DiskType === "object");
assert(typeof DnsNameState === "object");
assert(typeof DnsRecordIpType === "object");
assert(typeof DnsSupportValue === "object");
assert(typeof DomainType === "object");
assert(typeof DynamicRoutingValue === "object");
assert(typeof EbsEncryptionSupport === "object");
assert(typeof EbsNvmeSupport === "object");
assert(typeof EbsOptimizedSupport === "object");
assert(typeof Ec2InstanceConnectEndpointState === "object");
assert(typeof EkPubKeyFormat === "object");
assert(typeof EkPubKeyType === "object");
assert(typeof ElasticGpuState === "object");
assert(typeof ElasticGpuStatus === "object");
assert(typeof EnaSupport === "object");
assert(typeof EncryptionStateValue === "object");
assert(typeof EncryptionSupportOptionValue === "object");
assert(typeof EndDateType === "object");
assert(typeof EndpointIpAddressType === "object");
assert(typeof EphemeralNvmeSupport === "object");
assert(typeof EventCode === "object");
assert(typeof EventType === "object");
assert(typeof ExcessCapacityTerminationPolicy === "object");
assert(typeof ExportEnvironment === "object");
assert(typeof ExportTaskState === "object");
assert(typeof FastLaunchResourceType === "object");
assert(typeof FastLaunchStateCode === "object");
assert(typeof FastSnapshotRestoreStateCode === "object");
assert(typeof FilterByDimension === "object");
assert(typeof FindingsFound === "object");
assert(typeof FleetActivityStatus === "object");
assert(typeof FleetCapacityReservationTenancy === "object");
assert(typeof FleetCapacityReservationUsageStrategy === "object");
assert(typeof FleetEventType === "object");
assert(typeof FleetExcessCapacityTerminationPolicy === "object");
assert(typeof FleetInstanceMatchCriteria === "object");
assert(typeof FleetOnDemandAllocationStrategy === "object");
assert(typeof FleetReplacementStrategy === "object");
assert(typeof FleetStateCode === "object");
assert(typeof FleetType === "object");
assert(typeof FlexibleEnaQueuesSupport === "object");
assert(typeof FlowLogsResourceType === "object");
assert(typeof FpgaImageAttributeName === "object");
assert(typeof FpgaImageStateCode === "object");
assert(typeof GatewayAssociationState === "object");
assert(typeof GatewayType === "object");
assert(typeof GroupBy === "object");
assert(typeof HaStatus === "object");
assert(typeof HostMaintenance === "object");
assert(typeof HostnameType === "object");
assert(typeof HostRecovery === "object");
assert(typeof HostTenancy === "object");
assert(typeof HttpTokensState === "object");
assert(typeof HypervisorType === "object");
assert(typeof IamInstanceProfileAssociationState === "object");
assert(typeof Igmpv2SupportValue === "object");
assert(typeof ImageAttributeName === "object");
assert(typeof ImageBlockPublicAccessDisabledState === "object");
assert(typeof ImageBlockPublicAccessEnabledState === "object");
assert(typeof ImageReferenceOptionName === "object");
assert(typeof ImageReferenceResourceType === "object");
assert(typeof ImageState === "object");
assert(typeof ImageTypeValues === "object");
assert(typeof ImdsSupportValues === "object");
assert(typeof IngestionStatus === "object");
assert(typeof InitializationType === "object");
assert(typeof InstanceAttributeName === "object");
assert(typeof InstanceAutoRecoveryState === "object");
assert(typeof InstanceBandwidthWeighting === "object");
assert(typeof InstanceBootModeValues === "object");
assert(typeof InstanceEventWindowState === "object");
assert(typeof InstanceGeneration === "object");
assert(typeof InstanceHealthStatus === "object");
assert(typeof InstanceInterruptionBehavior === "object");
assert(typeof InstanceLifecycle === "object");
assert(typeof InstanceLifecycleType === "object");
assert(typeof InstanceMatchCriteria === "object");
assert(typeof InstanceMetadataEndpointState === "object");
assert(typeof InstanceMetadataOptionsState === "object");
assert(typeof InstanceMetadataProtocolState === "object");
assert(typeof InstanceMetadataTagsState === "object");
assert(typeof InstanceRebootMigrationState === "object");
assert(typeof InstanceStateName === "object");
assert(typeof InstanceStorageEncryptionSupport === "object");
assert(typeof _InstanceType === "object");
assert(typeof InstanceTypeHypervisor === "object");
assert(typeof InterfacePermissionType === "object");
assert(typeof InterfaceProtocolType === "object");
assert(typeof InternetGatewayBlockMode === "object");
assert(typeof InternetGatewayExclusionMode === "object");
assert(typeof InterruptibleCapacityReservationAllocationStatus === "object");
assert(typeof InterruptionType === "object");
assert(typeof IpAddressType === "object");
assert(typeof IpamAddressHistoryResourceType === "object");
assert(typeof IpamAssociatedResourceDiscoveryStatus === "object");
assert(typeof IpamComplianceStatus === "object");
assert(typeof IpamDiscoveryFailureCode === "object");
assert(typeof IpamExternalResourceVerificationTokenState === "object");
assert(typeof IpamManagementState === "object");
assert(typeof IpamMeteredAccount === "object");
assert(typeof IpamNetworkInterfaceAttachmentStatus === "object");
assert(typeof IpamOverlapStatus === "object");
assert(typeof IpamPolicyManagedBy === "object");
assert(typeof IpamPolicyResourceType === "object");
assert(typeof IpamPolicyState === "object");
assert(typeof IpamPoolAllocationResourceType === "object");
assert(typeof IpamPoolAwsService === "object");
assert(typeof IpamPoolCidrFailureCode === "object");
assert(typeof IpamPoolCidrState === "object");
assert(typeof IpamPoolPublicIpSource === "object");
assert(typeof IpamPoolSourceResourceType === "object");
assert(typeof IpamPoolState === "object");
assert(typeof IpamPrefixListResolverRuleConditionOperation === "object");
assert(typeof IpamPrefixListResolverRuleType === "object");
assert(typeof IpamPrefixListResolverState === "object");
assert(typeof IpamPrefixListResolverTargetState === "object");
assert(typeof IpamPrefixListResolverVersionCreationStatus === "object");
assert(typeof IpamPublicAddressAssociationStatus === "object");
assert(typeof IpamPublicAddressAwsService === "object");
assert(typeof IpamPublicAddressType === "object");
assert(typeof IpamResourceCidrIpSource === "object");
assert(typeof IpamResourceDiscoveryAssociationState === "object");
assert(typeof IpamResourceDiscoveryState === "object");
assert(typeof IpamResourceType === "object");
assert(typeof IpamScopeExternalAuthorityType === "object");
assert(typeof IpamScopeState === "object");
assert(typeof IpamScopeType === "object");
assert(typeof IpamState === "object");
assert(typeof IpamTier === "object");
assert(typeof IpSource === "object");
assert(typeof Ipv6AddressAttribute === "object");
assert(typeof Ipv6SupportValue === "object");
assert(typeof KeyFormat === "object");
assert(typeof KeyType === "object");
assert(typeof LaunchTemplateAutoRecoveryState === "object");
assert(typeof LaunchTemplateErrorCode === "object");
assert(typeof LaunchTemplateHttpTokensState === "object");
assert(typeof LaunchTemplateInstanceMetadataEndpointState === "object");
assert(typeof LaunchTemplateInstanceMetadataOptionsState === "object");
assert(typeof LaunchTemplateInstanceMetadataProtocolIpv6 === "object");
assert(typeof LaunchTemplateInstanceMetadataTagsState === "object");
assert(typeof ListingState === "object");
assert(typeof ListingStatus === "object");
assert(typeof LocalGatewayRouteState === "object");
assert(typeof LocalGatewayRouteTableMode === "object");
assert(typeof LocalGatewayRouteType === "object");
assert(typeof LocalGatewayVirtualInterfaceConfigurationState === "object");
assert(typeof LocalGatewayVirtualInterfaceGroupConfigurationState === "object");
assert(typeof LocalStorage === "object");
assert(typeof LocalStorageType === "object");
assert(typeof LocationType === "object");
assert(typeof LockMode === "object");
assert(typeof LockState === "object");
assert(typeof LogDestinationType === "object");
assert(typeof MacModificationTaskState === "object");
assert(typeof MacModificationTaskType === "object");
assert(typeof MacSystemIntegrityProtectionSettingStatus === "object");
assert(typeof ManagedBy === "object");
assert(typeof MarketType === "object");
assert(typeof MembershipType === "object");
assert(typeof MetadataDefaultHttpTokensState === "object");
assert(typeof Metric === "object");
assert(typeof MetricType === "object");
assert(typeof ModifyAvailabilityZoneOptInStatus === "object");
assert(typeof MonitoringState === "object");
assert(typeof MoveStatus === "object");
assert(typeof MulticastSupportValue === "object");
assert(typeof NatGatewayAddressStatus === "object");
assert(typeof NatGatewayApplianceModifyState === "object");
assert(typeof NatGatewayApplianceState === "object");
assert(typeof NatGatewayApplianceType === "object");
assert(typeof NatGatewayState === "object");
assert(typeof NetworkInterfaceAttribute === "object");
assert(typeof NetworkInterfaceCreationType === "object");
assert(typeof NetworkInterfacePermissionStateCode === "object");
assert(typeof NetworkInterfaceStatus === "object");
assert(typeof NetworkInterfaceType === "object");
assert(typeof NitroEnclavesSupport === "object");
assert(typeof NitroTpmSupport === "object");
assert(typeof OfferingClassType === "object");
assert(typeof OfferingTypeValues === "object");
assert(typeof OnDemandAllocationStrategy === "object");
assert(typeof OperationType === "object");
assert(typeof OutputFormat === "object");
assert(typeof PartitionLoadFrequency === "object");
assert(typeof PayerResponsibility === "object");
assert(typeof PaymentOption === "object");
assert(typeof PeriodType === "object");
assert(typeof PermissionGroup === "object");
assert(typeof PhcSupport === "object");
assert(typeof PlacementGroupState === "object");
assert(typeof PlacementGroupStrategy === "object");
assert(typeof PlacementStrategy === "object");
assert(typeof PlatformValues === "object");
assert(typeof PrefixListState === "object");
assert(typeof PrincipalType === "object");
assert(typeof ProductCodeValues === "object");
assert(typeof Protocol === "object");
assert(typeof ProtocolValue === "object");
assert(typeof PublicIpDnsOption === "object");
assert(typeof RebootMigrationSupport === "object");
assert(typeof RecurringChargeFrequency === "object");
assert(typeof ReplacementStrategy === "object");
assert(typeof ReplaceRootVolumeTaskState === "object");
assert(typeof ReportInstanceReasonCodes === "object");
assert(typeof ReportState === "object");
assert(typeof ReportStatusType === "object");
assert(typeof ReservationEndDateType === "object");
assert(typeof ReservationState === "object");
assert(typeof ReservationType === "object");
assert(typeof ReservedInstanceState === "object");
assert(typeof ResetFpgaImageAttributeName === "object");
assert(typeof ResetImageAttributeName === "object");
assert(typeof ResourceType === "object");
assert(typeof RIProductDescription === "object");
assert(typeof RootDeviceType === "object");
assert(typeof RouteOrigin === "object");
assert(typeof RouteServerAssociationState === "object");
assert(typeof RouteServerBfdState === "object");
assert(typeof RouteServerBgpState === "object");
assert(typeof RouteServerEndpointState === "object");
assert(typeof RouteServerPeerLivenessMode === "object");
assert(typeof RouteServerPeerState === "object");
assert(typeof RouteServerPersistRoutesAction === "object");
assert(typeof RouteServerPersistRoutesState === "object");
assert(typeof RouteServerPropagationState === "object");
assert(typeof RouteServerRouteInstallationStatus === "object");
assert(typeof RouteServerRouteStatus === "object");
assert(typeof RouteServerState === "object");
assert(typeof RouteState === "object");
assert(typeof RouteTableAssociationStateCode === "object");
assert(typeof RuleAction === "object");
assert(typeof Schedule === "object");
assert(typeof Scope === "object");
assert(typeof SecurityGroupReferencingSupportValue === "object");
assert(typeof SecurityGroupVpcAssociationState === "object");
assert(typeof SelfServicePortal === "object");
assert(typeof ServiceConnectivityType === "object");
assert(typeof ServiceLinkVirtualInterfaceConfigurationState === "object");
assert(typeof ServiceManaged === "object");
assert(typeof ServiceState === "object");
assert(typeof ServiceType === "object");
assert(typeof ShutdownBehavior === "object");
assert(typeof SnapshotAttributeName === "object");
assert(typeof SnapshotBlockPublicAccessState === "object");
assert(typeof SnapshotLocationEnum === "object");
assert(typeof SnapshotReturnCodes === "object");
assert(typeof SnapshotState === "object");
assert(typeof SpotAllocationStrategy === "object");
assert(typeof SpotInstanceInterruptionBehavior === "object");
assert(typeof SpotInstanceState === "object");
assert(typeof SpotInstanceType === "object");
assert(typeof SpreadLevel === "object");
assert(typeof SqlServerLicenseUsage === "object");
assert(typeof SSEType === "object");
assert(typeof State === "object");
assert(typeof StaticSourcesSupportValue === "object");
assert(typeof StatisticType === "object");
assert(typeof Status === "object");
assert(typeof StatusName === "object");
assert(typeof StatusType === "object");
assert(typeof StorageTier === "object");
assert(typeof SubnetCidrBlockStateCode === "object");
assert(typeof SubnetCidrReservationType === "object");
assert(typeof SubnetState === "object");
assert(typeof SummaryStatus === "object");
assert(typeof SupportedAdditionalProcessorFeature === "object");
assert(typeof TargetCapacityUnitType === "object");
assert(typeof TargetStorageTier === "object");
assert(typeof TelemetryStatus === "object");
assert(typeof Tenancy === "object");
assert(typeof TieringOperationStatus === "object");
assert(typeof TokenState === "object");
assert(typeof TpmSupportValues === "object");
assert(typeof TrafficDirection === "object");
assert(typeof TrafficIpAddressType === "object");
assert(typeof TrafficMirrorFilterRuleField === "object");
assert(typeof TrafficMirrorNetworkService === "object");
assert(typeof TrafficMirrorRuleAction === "object");
assert(typeof TrafficMirrorSessionField === "object");
assert(typeof TrafficMirrorTargetType === "object");
assert(typeof TrafficType === "object");
assert(typeof TransferType === "object");
assert(typeof TransitGatewayAssociationState === "object");
assert(typeof TransitGatewayAttachmentResourceType === "object");
assert(typeof TransitGatewayAttachmentState === "object");
assert(typeof TransitGatewayConnectPeerState === "object");
assert(typeof TransitGatewayMeteringPayerType === "object");
assert(typeof TransitGatewayMeteringPolicyEntryState === "object");
assert(typeof TransitGatewayMeteringPolicyState === "object");
assert(typeof TransitGatewayMulitcastDomainAssociationState === "object");
assert(typeof TransitGatewayMulticastDomainState === "object");
assert(typeof TransitGatewayPolicyTableState === "object");
assert(typeof TransitGatewayPrefixListReferenceState === "object");
assert(typeof TransitGatewayPropagationState === "object");
assert(typeof TransitGatewayRouteState === "object");
assert(typeof TransitGatewayRouteTableAnnouncementDirection === "object");
assert(typeof TransitGatewayRouteTableAnnouncementState === "object");
assert(typeof TransitGatewayRouteTableState === "object");
assert(typeof TransitGatewayRouteType === "object");
assert(typeof TransitGatewayState === "object");
assert(typeof TransportProtocol === "object");
assert(typeof TrustProviderType === "object");
assert(typeof TunnelInsideIpVersion === "object");
assert(typeof UnlimitedSupportedInstanceFamily === "object");
assert(typeof UnsuccessfulInstanceCreditSpecificationErrorCode === "object");
assert(typeof UsageClassType === "object");
assert(typeof UserTrustProviderType === "object");
assert(typeof VerificationMethod === "object");
assert(typeof VerifiedAccessEndpointAttachmentType === "object");
assert(typeof VerifiedAccessEndpointProtocol === "object");
assert(typeof VerifiedAccessEndpointStatusCode === "object");
assert(typeof VerifiedAccessEndpointType === "object");
assert(typeof VerifiedAccessLogDeliveryStatusCode === "object");
assert(typeof VirtualizationType === "object");
assert(typeof VolumeAttachmentState === "object");
assert(typeof VolumeAttributeName === "object");
assert(typeof VolumeModificationState === "object");
assert(typeof VolumeState === "object");
assert(typeof VolumeStatusInfoStatus === "object");
assert(typeof VolumeStatusName === "object");
assert(typeof VolumeType === "object");
assert(typeof VpcAttributeName === "object");
assert(typeof VpcBlockPublicAccessExclusionsAllowed === "object");
assert(typeof VpcBlockPublicAccessExclusionState === "object");
assert(typeof VpcBlockPublicAccessState === "object");
assert(typeof VpcCidrBlockStateCode === "object");
assert(typeof VpcEncryptionControlExclusionState === "object");
assert(typeof VpcEncryptionControlExclusionStateInput === "object");
assert(typeof VpcEncryptionControlMode === "object");
assert(typeof VpcEncryptionControlState === "object");
assert(typeof VpcEndpointType === "object");
assert(typeof VpcPeeringConnectionStateReasonCode === "object");
assert(typeof VpcState === "object");
assert(typeof VpcTenancy === "object");
assert(typeof VpnConcentratorType === "object");
assert(typeof VpnEcmpSupportValue === "object");
assert(typeof VpnProtocol === "object");
assert(typeof VpnState === "object");
assert(typeof VpnStaticRouteSource === "object");
assert(typeof VpnTunnelBandwidth === "object");
assert(typeof VpnTunnelProvisioningStatus === "object");
assert(typeof WeekDay === "object");
// errors
assert(EC2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForBundleTaskComplete === "function");
assert(typeof waitForConversionTaskCancelled === "function");
assert(typeof waitForConversionTaskCompleted === "function");
assert(typeof waitForConversionTaskDeleted === "function");
assert(typeof waitForCustomerGatewayAvailable === "function");
assert(typeof waitForExportTaskCancelled === "function");
assert(typeof waitForExportTaskCompleted === "function");
assert(typeof waitForImageAvailable === "function");
assert(typeof waitForImageExists === "function");
assert(typeof waitForImageUsageReportAvailable === "function");
assert(typeof waitForInstanceExists === "function");
assert(typeof waitForInstanceRunning === "function");
assert(typeof waitForInstanceStatusOk === "function");
assert(typeof waitForInstanceStopped === "function");
assert(typeof waitForInstanceTerminated === "function");
assert(typeof waitForInternetGatewayExists === "function");
assert(typeof waitForKeyPairExists === "function");
assert(typeof waitForNatGatewayAvailable === "function");
assert(typeof waitForNatGatewayDeleted === "function");
assert(typeof waitForNetworkInterfaceAvailable === "function");
assert(typeof waitForPasswordDataAvailable === "function");
assert(typeof waitForSecurityGroupExists === "function");
assert(typeof waitForSecurityGroupVpcAssociationAssociated === "function");
assert(typeof waitForSecurityGroupVpcAssociationDisassociated === "function");
assert(typeof waitForSnapshotCompleted === "function");
assert(typeof waitForSnapshotImported === "function");
assert(typeof waitForSpotInstanceRequestFulfilled === "function");
assert(typeof waitForStoreImageTaskComplete === "function");
assert(typeof waitForSubnetAvailable === "function");
assert(typeof waitForSystemStatusOk === "function");
assert(typeof waitForVolumeAvailable === "function");
assert(typeof waitForVolumeDeleted === "function");
assert(typeof waitForVolumeInUse === "function");
assert(typeof waitForVpcAvailable === "function");
assert(typeof waitForVpcExists === "function");
assert(typeof waitForVpcPeeringConnectionDeleted === "function");
assert(typeof waitForVpcPeeringConnectionExists === "function");
assert(typeof waitForVpnConnectionAvailable === "function");
assert(typeof waitForVpnConnectionDeleted === "function");
assert(typeof waitUntilBundleTaskComplete === "function");
assert(typeof waitUntilConversionTaskCancelled === "function");
assert(typeof waitUntilConversionTaskCompleted === "function");
assert(typeof waitUntilConversionTaskDeleted === "function");
assert(typeof waitUntilCustomerGatewayAvailable === "function");
assert(typeof waitUntilExportTaskCancelled === "function");
assert(typeof waitUntilExportTaskCompleted === "function");
assert(typeof waitUntilImageAvailable === "function");
assert(typeof waitUntilImageExists === "function");
assert(typeof waitUntilImageUsageReportAvailable === "function");
assert(typeof waitUntilInstanceExists === "function");
assert(typeof waitUntilInstanceRunning === "function");
assert(typeof waitUntilInstanceStatusOk === "function");
assert(typeof waitUntilInstanceStopped === "function");
assert(typeof waitUntilInstanceTerminated === "function");
assert(typeof waitUntilInternetGatewayExists === "function");
assert(typeof waitUntilKeyPairExists === "function");
assert(typeof waitUntilNatGatewayAvailable === "function");
assert(typeof waitUntilNatGatewayDeleted === "function");
assert(typeof waitUntilNetworkInterfaceAvailable === "function");
assert(typeof waitUntilPasswordDataAvailable === "function");
assert(typeof waitUntilSecurityGroupExists === "function");
assert(typeof waitUntilSecurityGroupVpcAssociationAssociated === "function");
assert(typeof waitUntilSecurityGroupVpcAssociationDisassociated === "function");
assert(typeof waitUntilSnapshotCompleted === "function");
assert(typeof waitUntilSnapshotImported === "function");
assert(typeof waitUntilSpotInstanceRequestFulfilled === "function");
assert(typeof waitUntilStoreImageTaskComplete === "function");
assert(typeof waitUntilSubnetAvailable === "function");
assert(typeof waitUntilSystemStatusOk === "function");
assert(typeof waitUntilVolumeAvailable === "function");
assert(typeof waitUntilVolumeDeleted === "function");
assert(typeof waitUntilVolumeInUse === "function");
assert(typeof waitUntilVpcAvailable === "function");
assert(typeof waitUntilVpcExists === "function");
assert(typeof waitUntilVpcPeeringConnectionDeleted === "function");
assert(typeof waitUntilVpcPeeringConnectionExists === "function");
assert(typeof waitUntilVpnConnectionAvailable === "function");
assert(typeof waitUntilVpnConnectionDeleted === "function");
// paginators
assert(typeof paginateDescribeAddressTransfers === "function");
assert(typeof paginateDescribeAddressesAttribute === "function");
assert(typeof paginateDescribeAwsNetworkPerformanceMetricSubscriptions === "function");
assert(typeof paginateDescribeByoipCidrs === "function");
assert(typeof paginateDescribeCapacityBlockExtensionHistory === "function");
assert(typeof paginateDescribeCapacityBlockExtensionOfferings === "function");
assert(typeof paginateDescribeCapacityBlockOfferings === "function");
assert(typeof paginateDescribeCapacityBlockStatus === "function");
assert(typeof paginateDescribeCapacityBlocks === "function");
assert(typeof paginateDescribeCapacityManagerDataExports === "function");
assert(typeof paginateDescribeCapacityReservationBillingRequests === "function");
assert(typeof paginateDescribeCapacityReservationFleets === "function");
assert(typeof paginateDescribeCapacityReservations === "function");
assert(typeof paginateDescribeCarrierGateways === "function");
assert(typeof paginateDescribeClassicLinkInstances === "function");
assert(typeof paginateDescribeClientVpnAuthorizationRules === "function");
assert(typeof paginateDescribeClientVpnConnections === "function");
assert(typeof paginateDescribeClientVpnEndpoints === "function");
assert(typeof paginateDescribeClientVpnRoutes === "function");
assert(typeof paginateDescribeClientVpnTargetNetworks === "function");
assert(typeof paginateDescribeCoipPools === "function");
assert(typeof paginateDescribeDhcpOptions === "function");
assert(typeof paginateDescribeEgressOnlyInternetGateways === "function");
assert(typeof paginateDescribeExportImageTasks === "function");
assert(typeof paginateDescribeFastLaunchImages === "function");
assert(typeof paginateDescribeFastSnapshotRestores === "function");
assert(typeof paginateDescribeFleets === "function");
assert(typeof paginateDescribeFlowLogs === "function");
assert(typeof paginateDescribeFpgaImages === "function");
assert(typeof paginateDescribeHostReservationOfferings === "function");
assert(typeof paginateDescribeHostReservations === "function");
assert(typeof paginateDescribeHosts === "function");
assert(typeof paginateDescribeIamInstanceProfileAssociations === "function");
assert(typeof paginateDescribeImageReferences === "function");
assert(typeof paginateDescribeImageUsageReportEntries === "function");
assert(typeof paginateDescribeImageUsageReports === "function");
assert(typeof paginateDescribeImages === "function");
assert(typeof paginateDescribeImportImageTasks === "function");
assert(typeof paginateDescribeImportSnapshotTasks === "function");
assert(typeof paginateDescribeInstanceConnectEndpoints === "function");
assert(typeof paginateDescribeInstanceCreditSpecifications === "function");
assert(typeof paginateDescribeInstanceEventWindows === "function");
assert(typeof paginateDescribeInstanceImageMetadata === "function");
assert(typeof paginateDescribeInstanceStatus === "function");
assert(typeof paginateDescribeInstanceTopology === "function");
assert(typeof paginateDescribeInstanceTypeOfferings === "function");
assert(typeof paginateDescribeInstanceTypes === "function");
assert(typeof paginateDescribeInstances === "function");
assert(typeof paginateDescribeInternetGateways === "function");
assert(typeof paginateDescribeIpamPools === "function");
assert(typeof paginateDescribeIpamPrefixListResolverTargets === "function");
assert(typeof paginateDescribeIpamPrefixListResolvers === "function");
assert(typeof paginateDescribeIpamResourceDiscoveries === "function");
assert(typeof paginateDescribeIpamResourceDiscoveryAssociations === "function");
assert(typeof paginateDescribeIpamScopes === "function");
assert(typeof paginateDescribeIpams === "function");
assert(typeof paginateDescribeIpv6Pools === "function");
assert(typeof paginateDescribeLaunchTemplateVersions === "function");
assert(typeof paginateDescribeLaunchTemplates === "function");
assert(typeof paginateDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations === "function");
assert(typeof paginateDescribeLocalGatewayRouteTableVpcAssociations === "function");
assert(typeof paginateDescribeLocalGatewayRouteTables === "function");
assert(typeof paginateDescribeLocalGatewayVirtualInterfaceGroups === "function");
assert(typeof paginateDescribeLocalGatewayVirtualInterfaces === "function");
assert(typeof paginateDescribeLocalGateways === "function");
assert(typeof paginateDescribeMacHosts === "function");
assert(typeof paginateDescribeMacModificationTasks === "function");
assert(typeof paginateDescribeManagedPrefixLists === "function");
assert(typeof paginateDescribeMovingAddresses === "function");
assert(typeof paginateDescribeNatGateways === "function");
assert(typeof paginateDescribeNetworkAcls === "function");
assert(typeof paginateDescribeNetworkInsightsAccessScopeAnalyses === "function");
assert(typeof paginateDescribeNetworkInsightsAccessScopes === "function");
assert(typeof paginateDescribeNetworkInsightsAnalyses === "function");
assert(typeof paginateDescribeNetworkInsightsPaths === "function");
assert(typeof paginateDescribeNetworkInterfacePermissions === "function");
assert(typeof paginateDescribeNetworkInterfaces === "function");
assert(typeof paginateDescribePrefixLists === "function");
assert(typeof paginateDescribePrincipalIdFormat === "function");
assert(typeof paginateDescribePublicIpv4Pools === "function");
assert(typeof paginateDescribeReplaceRootVolumeTasks === "function");
assert(typeof paginateDescribeReservedInstancesModifications === "function");
assert(typeof paginateDescribeReservedInstancesOfferings === "function");
assert(typeof paginateDescribeRouteServerEndpoints === "function");
assert(typeof paginateDescribeRouteServerPeers === "function");
assert(typeof paginateDescribeRouteServers === "function");
assert(typeof paginateDescribeRouteTables === "function");
assert(typeof paginateDescribeScheduledInstanceAvailability === "function");
assert(typeof paginateDescribeScheduledInstances === "function");
assert(typeof paginateDescribeSecurityGroupRules === "function");
assert(typeof paginateDescribeSecurityGroupVpcAssociations === "function");
assert(typeof paginateDescribeSecurityGroups === "function");
assert(typeof paginateDescribeSnapshotTierStatus === "function");
assert(typeof paginateDescribeSnapshots === "function");
assert(typeof paginateDescribeSpotFleetRequests === "function");
assert(typeof paginateDescribeSpotInstanceRequests === "function");
assert(typeof paginateDescribeSpotPriceHistory === "function");
assert(typeof paginateDescribeStaleSecurityGroups === "function");
assert(typeof paginateDescribeStoreImageTasks === "function");
assert(typeof paginateDescribeSubnets === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateDescribeTrafficMirrorFilters === "function");
assert(typeof paginateDescribeTrafficMirrorSessions === "function");
assert(typeof paginateDescribeTrafficMirrorTargets === "function");
assert(typeof paginateDescribeTransitGatewayAttachments === "function");
assert(typeof paginateDescribeTransitGatewayConnectPeers === "function");
assert(typeof paginateDescribeTransitGatewayConnects === "function");
assert(typeof paginateDescribeTransitGatewayMulticastDomains === "function");
assert(typeof paginateDescribeTransitGatewayPeeringAttachments === "function");
assert(typeof paginateDescribeTransitGatewayPolicyTables === "function");
assert(typeof paginateDescribeTransitGatewayRouteTableAnnouncements === "function");
assert(typeof paginateDescribeTransitGatewayRouteTables === "function");
assert(typeof paginateDescribeTransitGatewayVpcAttachments === "function");
assert(typeof paginateDescribeTransitGateways === "function");
assert(typeof paginateDescribeTrunkInterfaceAssociations === "function");
assert(typeof paginateDescribeVerifiedAccessEndpoints === "function");
assert(typeof paginateDescribeVerifiedAccessGroups === "function");
assert(typeof paginateDescribeVerifiedAccessInstanceLoggingConfigurations === "function");
assert(typeof paginateDescribeVerifiedAccessInstances === "function");
assert(typeof paginateDescribeVerifiedAccessTrustProviders === "function");
assert(typeof paginateDescribeVolumeStatus === "function");
assert(typeof paginateDescribeVolumes === "function");
assert(typeof paginateDescribeVolumesModifications === "function");
assert(typeof paginateDescribeVpcClassicLinkDnsSupport === "function");
assert(typeof paginateDescribeVpcEndpointConnectionNotifications === "function");
assert(typeof paginateDescribeVpcEndpointConnections === "function");
assert(typeof paginateDescribeVpcEndpointServiceConfigurations === "function");
assert(typeof paginateDescribeVpcEndpointServicePermissions === "function");
assert(typeof paginateDescribeVpcEndpoints === "function");
assert(typeof paginateDescribeVpcPeeringConnections === "function");
assert(typeof paginateDescribeVpcs === "function");
assert(typeof paginateDescribeVpnConcentrators === "function");
assert(typeof paginateGetAssociatedIpv6PoolCidrs === "function");
assert(typeof paginateGetAwsNetworkPerformanceData === "function");
assert(typeof paginateGetCapacityManagerMetricData === "function");
assert(typeof paginateGetCapacityManagerMetricDimensions === "function");
assert(typeof paginateGetGroupsForCapacityReservation === "function");
assert(typeof paginateGetInstanceTypesFromInstanceRequirements === "function");
assert(typeof paginateGetIpamAddressHistory === "function");
assert(typeof paginateGetIpamDiscoveredAccounts === "function");
assert(typeof paginateGetIpamDiscoveredResourceCidrs === "function");
assert(typeof paginateGetIpamPoolAllocations === "function");
assert(typeof paginateGetIpamPoolCidrs === "function");
assert(typeof paginateGetIpamPrefixListResolverRules === "function");
assert(typeof paginateGetIpamPrefixListResolverVersionEntries === "function");
assert(typeof paginateGetIpamPrefixListResolverVersions === "function");
assert(typeof paginateGetIpamResourceCidrs === "function");
assert(typeof paginateGetManagedPrefixListAssociations === "function");
assert(typeof paginateGetManagedPrefixListEntries === "function");
assert(typeof paginateGetNetworkInsightsAccessScopeAnalysisFindings === "function");
assert(typeof paginateGetSecurityGroupsForVpc === "function");
assert(typeof paginateGetSpotPlacementScores === "function");
assert(typeof paginateGetTransitGatewayAttachmentPropagations === "function");
assert(typeof paginateGetTransitGatewayMulticastDomainAssociations === "function");
assert(typeof paginateGetTransitGatewayPolicyTableAssociations === "function");
assert(typeof paginateGetTransitGatewayPrefixListReferences === "function");
assert(typeof paginateGetTransitGatewayRouteTableAssociations === "function");
assert(typeof paginateGetTransitGatewayRouteTablePropagations === "function");
assert(typeof paginateGetVpnConnectionDeviceTypes === "function");
assert(typeof paginateListImagesInRecycleBin === "function");
assert(typeof paginateListSnapshotsInRecycleBin === "function");
assert(typeof paginateSearchLocalGatewayRoutes === "function");
assert(typeof paginateSearchTransitGatewayMulticastGroups === "function");
console.log(`EC2 index test passed.`);
