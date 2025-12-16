import {
  AcceleratorCount$,
  AcceleratorCountRequest$,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiB$,
  AcceleratorTotalMemoryMiBRequest$,
  AcceleratorType,
  AcceptAddressTransfer$,
  AcceptAddressTransferCommand,
  AcceptAddressTransferRequest$,
  AcceptAddressTransferResult$,
  AcceptCapacityReservationBillingOwnership$,
  AcceptCapacityReservationBillingOwnershipCommand,
  AcceptCapacityReservationBillingOwnershipRequest$,
  AcceptCapacityReservationBillingOwnershipResult$,
  AcceptReservedInstancesExchangeQuote$,
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptReservedInstancesExchangeQuoteRequest$,
  AcceptReservedInstancesExchangeQuoteResult$,
  AcceptTransitGatewayMulticastDomainAssociations$,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayMulticastDomainAssociationsRequest$,
  AcceptTransitGatewayMulticastDomainAssociationsResult$,
  AcceptTransitGatewayPeeringAttachment$,
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayPeeringAttachmentRequest$,
  AcceptTransitGatewayPeeringAttachmentResult$,
  AcceptTransitGatewayVpcAttachment$,
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentRequest$,
  AcceptTransitGatewayVpcAttachmentResult$,
  AcceptVpcEndpointConnections$,
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcEndpointConnectionsRequest$,
  AcceptVpcEndpointConnectionsResult$,
  AcceptVpcPeeringConnection$,
  AcceptVpcPeeringConnectionCommand,
  AcceptVpcPeeringConnectionRequest$,
  AcceptVpcPeeringConnectionResult$,
  AccessScopeAnalysisFinding$,
  AccessScopePath$,
  AccessScopePathRequest$,
  AccountAttribute$,
  AccountAttributeName,
  AccountAttributeValue$,
  ActiveInstance$,
  ActiveVpnTunnelStatus$,
  ActivityStatus,
  AddIpamOperatingRegion$,
  AddIpamOrganizationalUnitExclusion$,
  AddPrefixListEntry$,
  AddedPrincipal$,
  AdditionalDetail$,
  Address$,
  AddressAttribute$,
  AddressAttributeName,
  AddressFamily,
  AddressTransfer$,
  AddressTransferStatus,
  AdvertiseByoipCidr$,
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrRequest$,
  AdvertiseByoipCidrResult$,
  Affinity,
  AllocateAddress$,
  AllocateAddressCommand,
  AllocateAddressRequest$,
  AllocateAddressResult$,
  AllocateHosts$,
  AllocateHostsCommand,
  AllocateHostsRequest$,
  AllocateHostsResult$,
  AllocateIpamPoolCidr$,
  AllocateIpamPoolCidrCommand,
  AllocateIpamPoolCidrRequest$,
  AllocateIpamPoolCidrResult$,
  AllocationState,
  AllocationStrategy,
  AllocationType,
  AllowedImagesSettingsDisabledState,
  AllowedImagesSettingsEnabledState,
  AllowedPrincipal$,
  AllowsMultipleInstanceTypes,
  AlternatePathHint$,
  AmdSevSnpSpecification,
  AnalysisAclRule$,
  AnalysisComponent$,
  AnalysisLoadBalancerListener$,
  AnalysisLoadBalancerTarget$,
  AnalysisPacketHeader$,
  AnalysisRouteTableRoute$,
  AnalysisSecurityGroupRule$,
  AnalysisStatus,
  ApplianceModeSupportValue,
  ApplySecurityGroupsToClientVpnTargetNetwork$,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  ApplySecurityGroupsToClientVpnTargetNetworkRequest$,
  ApplySecurityGroupsToClientVpnTargetNetworkResult$,
  ArchitectureType,
  ArchitectureValues,
  AsnAssociation$,
  AsnAssociationState,
  AsnAuthorizationContext$,
  AsnState,
  AssignIpv6Addresses$,
  AssignIpv6AddressesCommand,
  AssignIpv6AddressesRequest$,
  AssignIpv6AddressesResult$,
  AssignPrivateIpAddresses$,
  AssignPrivateIpAddressesCommand,
  AssignPrivateIpAddressesRequest$,
  AssignPrivateIpAddressesResult$,
  AssignPrivateNatGatewayAddress$,
  AssignPrivateNatGatewayAddressCommand,
  AssignPrivateNatGatewayAddressRequest$,
  AssignPrivateNatGatewayAddressResult$,
  AssignedPrivateIpAddress$,
  AssociateAddress$,
  AssociateAddressCommand,
  AssociateAddressRequest$,
  AssociateAddressResult$,
  AssociateCapacityReservationBillingOwner$,
  AssociateCapacityReservationBillingOwnerCommand,
  AssociateCapacityReservationBillingOwnerRequest$,
  AssociateCapacityReservationBillingOwnerResult$,
  AssociateClientVpnTargetNetwork$,
  AssociateClientVpnTargetNetworkCommand,
  AssociateClientVpnTargetNetworkRequest$,
  AssociateClientVpnTargetNetworkResult$,
  AssociateDhcpOptions$,
  AssociateDhcpOptionsCommand,
  AssociateDhcpOptionsRequest$,
  AssociateEnclaveCertificateIamRole$,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateEnclaveCertificateIamRoleRequest$,
  AssociateEnclaveCertificateIamRoleResult$,
  AssociateIamInstanceProfile$,
  AssociateIamInstanceProfileCommand,
  AssociateIamInstanceProfileRequest$,
  AssociateIamInstanceProfileResult$,
  AssociateInstanceEventWindow$,
  AssociateInstanceEventWindowCommand,
  AssociateInstanceEventWindowRequest$,
  AssociateInstanceEventWindowResult$,
  AssociateIpamByoasn$,
  AssociateIpamByoasnCommand,
  AssociateIpamByoasnRequest$,
  AssociateIpamByoasnResult$,
  AssociateIpamResourceDiscovery$,
  AssociateIpamResourceDiscoveryCommand,
  AssociateIpamResourceDiscoveryRequest$,
  AssociateIpamResourceDiscoveryResult$,
  AssociateNatGatewayAddress$,
  AssociateNatGatewayAddressCommand,
  AssociateNatGatewayAddressRequest$,
  AssociateNatGatewayAddressResult$,
  AssociateRouteServer$,
  AssociateRouteServerCommand,
  AssociateRouteServerRequest$,
  AssociateRouteServerResult$,
  AssociateRouteTable$,
  AssociateRouteTableCommand,
  AssociateRouteTableRequest$,
  AssociateRouteTableResult$,
  AssociateSecurityGroupVpc$,
  AssociateSecurityGroupVpcCommand,
  AssociateSecurityGroupVpcRequest$,
  AssociateSecurityGroupVpcResult$,
  AssociateSubnetCidrBlock$,
  AssociateSubnetCidrBlockCommand,
  AssociateSubnetCidrBlockRequest$,
  AssociateSubnetCidrBlockResult$,
  AssociateTransitGatewayMulticastDomain$,
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayMulticastDomainRequest$,
  AssociateTransitGatewayMulticastDomainResult$,
  AssociateTransitGatewayPolicyTable$,
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayPolicyTableRequest$,
  AssociateTransitGatewayPolicyTableResult$,
  AssociateTransitGatewayRouteTable$,
  AssociateTransitGatewayRouteTableCommand,
  AssociateTransitGatewayRouteTableRequest$,
  AssociateTransitGatewayRouteTableResult$,
  AssociateTrunkInterface$,
  AssociateTrunkInterfaceCommand,
  AssociateTrunkInterfaceRequest$,
  AssociateTrunkInterfaceResult$,
  AssociateVpcCidrBlock$,
  AssociateVpcCidrBlockCommand,
  AssociateVpcCidrBlockRequest$,
  AssociateVpcCidrBlockResult$,
  AssociatedNetworkType,
  AssociatedRole$,
  AssociatedTargetNetwork$,
  AssociationStatus$,
  AssociationStatusCode,
  AthenaIntegration$,
  AttachClassicLinkVpc$,
  AttachClassicLinkVpcCommand,
  AttachClassicLinkVpcRequest$,
  AttachClassicLinkVpcResult$,
  AttachInternetGateway$,
  AttachInternetGatewayCommand,
  AttachInternetGatewayRequest$,
  AttachNetworkInterface$,
  AttachNetworkInterfaceCommand,
  AttachNetworkInterfaceRequest$,
  AttachNetworkInterfaceResult$,
  AttachVerifiedAccessTrustProvider$,
  AttachVerifiedAccessTrustProviderCommand,
  AttachVerifiedAccessTrustProviderRequest$,
  AttachVerifiedAccessTrustProviderResult$,
  AttachVolume$,
  AttachVolumeCommand,
  AttachVolumeRequest$,
  AttachVpnGateway$,
  AttachVpnGatewayCommand,
  AttachVpnGatewayRequest$,
  AttachVpnGatewayResult$,
  AttachmentEnaSrdSpecification$,
  AttachmentEnaSrdUdpSpecification$,
  AttachmentLimitType,
  AttachmentStatus,
  AttributeBooleanValue$,
  AttributeSummary$,
  AttributeValue$,
  AuthorizationRule$,
  AuthorizeClientVpnIngress$,
  AuthorizeClientVpnIngressCommand,
  AuthorizeClientVpnIngressRequest$,
  AuthorizeClientVpnIngressResult$,
  AuthorizeSecurityGroupEgress$,
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupEgressRequest$,
  AuthorizeSecurityGroupEgressResult$,
  AuthorizeSecurityGroupIngress$,
  AuthorizeSecurityGroupIngressCommand,
  AuthorizeSecurityGroupIngressRequest$,
  AuthorizeSecurityGroupIngressResult$,
  AutoAcceptSharedAssociationsValue,
  AutoAcceptSharedAttachmentsValue,
  AutoPlacement,
  AutoProvisionZonesState,
  AutoScalingIpsState,
  AvailabilityMode,
  AvailabilityZone$,
  AvailabilityZoneAddress$,
  AvailabilityZoneMessage$,
  AvailabilityZoneOptInStatus,
  AvailabilityZoneState,
  AvailableCapacity$,
  BandwidthWeightingType,
  BareMetal,
  BaselineEbsBandwidthMbps$,
  BaselineEbsBandwidthMbpsRequest$,
  BaselinePerformanceFactors$,
  BaselinePerformanceFactorsRequest$,
  BatchState,
  BgpStatus,
  BlobAttributeValue$,
  BlockDeviceMapping$,
  BlockDeviceMappingResponse$,
  BlockPublicAccessMode,
  BlockPublicAccessStates$,
  BootModeType,
  BootModeValues,
  BundleInstance$,
  BundleInstanceCommand,
  BundleInstanceRequest$,
  BundleInstanceResult$,
  BundleTask$,
  BundleTaskError$,
  BundleTaskState,
  BurstablePerformance,
  Byoasn$,
  ByoipCidr$,
  ByoipCidrState,
  CallerRole,
  CancelBatchErrorCode,
  CancelBundleTask$,
  CancelBundleTaskCommand,
  CancelBundleTaskRequest$,
  CancelBundleTaskResult$,
  CancelCapacityReservation$,
  CancelCapacityReservationCommand,
  CancelCapacityReservationFleetError$,
  CancelCapacityReservationFleets$,
  CancelCapacityReservationFleetsCommand,
  CancelCapacityReservationFleetsRequest$,
  CancelCapacityReservationFleetsResult$,
  CancelCapacityReservationRequest$,
  CancelCapacityReservationResult$,
  CancelConversionRequest$,
  CancelConversionTask$,
  CancelConversionTaskCommand,
  CancelDeclarativePoliciesReport$,
  CancelDeclarativePoliciesReportCommand,
  CancelDeclarativePoliciesReportRequest$,
  CancelDeclarativePoliciesReportResult$,
  CancelExportTask$,
  CancelExportTaskCommand,
  CancelExportTaskRequest$,
  CancelImageLaunchPermission$,
  CancelImageLaunchPermissionCommand,
  CancelImageLaunchPermissionRequest$,
  CancelImageLaunchPermissionResult$,
  CancelImportTask$,
  CancelImportTaskCommand,
  CancelImportTaskRequest$,
  CancelImportTaskResult$,
  CancelReservedInstancesListing$,
  CancelReservedInstancesListingCommand,
  CancelReservedInstancesListingRequest$,
  CancelReservedInstancesListingResult$,
  CancelSpotFleetRequests$,
  CancelSpotFleetRequestsCommand,
  CancelSpotFleetRequestsError$,
  CancelSpotFleetRequestsErrorItem$,
  CancelSpotFleetRequestsRequest$,
  CancelSpotFleetRequestsResponse$,
  CancelSpotFleetRequestsSuccessItem$,
  CancelSpotInstanceRequestState,
  CancelSpotInstanceRequests$,
  CancelSpotInstanceRequestsCommand,
  CancelSpotInstanceRequestsRequest$,
  CancelSpotInstanceRequestsResult$,
  CancelledSpotInstanceRequest$,
  CapacityAllocation$,
  CapacityBlock$,
  CapacityBlockExtension$,
  CapacityBlockExtensionOffering$,
  CapacityBlockExtensionStatus,
  CapacityBlockInterconnectStatus,
  CapacityBlockOffering$,
  CapacityBlockResourceState,
  CapacityBlockStatus$,
  CapacityManagerCondition$,
  CapacityManagerDataExportResponse$,
  CapacityManagerDataExportStatus,
  CapacityManagerDimension$,
  CapacityManagerStatus,
  CapacityReservation$,
  CapacityReservationBillingRequest$,
  CapacityReservationBillingRequestStatus,
  CapacityReservationCommitmentInfo$,
  CapacityReservationDeliveryPreference,
  CapacityReservationFleet$,
  CapacityReservationFleetCancellationState$,
  CapacityReservationFleetState,
  CapacityReservationGroup$,
  CapacityReservationInfo$,
  CapacityReservationInstancePlatform,
  CapacityReservationOptions$,
  CapacityReservationOptionsRequest$,
  CapacityReservationPreference,
  CapacityReservationSpecification$,
  CapacityReservationSpecificationResponse$,
  CapacityReservationState,
  CapacityReservationStatus$,
  CapacityReservationTarget$,
  CapacityReservationTargetResponse$,
  CapacityReservationTenancy,
  CapacityReservationTopology$,
  CapacityReservationType,
  CapacityTenancy,
  CarrierGateway$,
  CarrierGatewayState,
  CertificateAuthentication$,
  CertificateAuthenticationRequest$,
  CidrAuthorizationContext$,
  CidrBlock$,
  ClassicLinkDnsSupport$,
  ClassicLinkInstance$,
  ClassicLoadBalancer$,
  ClassicLoadBalancersConfig$,
  ClientCertificateRevocationListStatus$,
  ClientCertificateRevocationListStatusCode,
  ClientConnectOptions$,
  ClientConnectResponseOptions$,
  ClientData$,
  ClientLoginBannerOptions$,
  ClientLoginBannerResponseOptions$,
  ClientRouteEnforcementOptions$,
  ClientRouteEnforcementResponseOptions$,
  ClientVpnAuthentication$,
  ClientVpnAuthenticationRequest$,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatus$,
  ClientVpnAuthorizationRuleStatusCode,
  ClientVpnConnection$,
  ClientVpnConnectionStatus$,
  ClientVpnConnectionStatusCode,
  ClientVpnEndpoint$,
  ClientVpnEndpointAttributeStatus$,
  ClientVpnEndpointAttributeStatusCode,
  ClientVpnEndpointStatus$,
  ClientVpnEndpointStatusCode,
  ClientVpnRoute$,
  ClientVpnRouteStatus$,
  ClientVpnRouteStatusCode,
  CloudWatchLogOptions$,
  CloudWatchLogOptionsSpecification$,
  CoipAddressUsage$,
  CoipCidr$,
  CoipPool$,
  Comparison,
  ConfirmProductInstance$,
  ConfirmProductInstanceCommand,
  ConfirmProductInstanceRequest$,
  ConfirmProductInstanceResult$,
  ConnectionLogOptions$,
  ConnectionLogResponseOptions$,
  ConnectionNotification$,
  ConnectionNotificationState,
  ConnectionNotificationType,
  ConnectionTrackingConfiguration$,
  ConnectionTrackingSpecification$,
  ConnectionTrackingSpecificationRequest$,
  ConnectionTrackingSpecificationResponse$,
  ConnectivityType,
  ContainerFormat,
  ConversionTask$,
  ConversionTaskState,
  CopyFpgaImage$,
  CopyFpgaImageCommand,
  CopyFpgaImageRequest$,
  CopyFpgaImageResult$,
  CopyImage$,
  CopyImageCommand,
  CopyImageRequest$,
  CopyImageResult$,
  CopySnapshot$,
  CopySnapshotCommand,
  CopySnapshotRequest$,
  CopySnapshotResult$,
  CopyTagsFromSource,
  CopyVolumes$,
  CopyVolumesCommand,
  CopyVolumesRequest$,
  CopyVolumesResult$,
  CpuManufacturer,
  CpuOptions$,
  CpuOptionsRequest$,
  CpuPerformanceFactor$,
  CpuPerformanceFactorRequest$,
  CreateCapacityManagerDataExport$,
  CreateCapacityManagerDataExportCommand,
  CreateCapacityManagerDataExportRequest$,
  CreateCapacityManagerDataExportResult$,
  CreateCapacityReservation$,
  CreateCapacityReservationBySplitting$,
  CreateCapacityReservationBySplittingCommand,
  CreateCapacityReservationBySplittingRequest$,
  CreateCapacityReservationBySplittingResult$,
  CreateCapacityReservationCommand,
  CreateCapacityReservationFleet$,
  CreateCapacityReservationFleetCommand,
  CreateCapacityReservationFleetRequest$,
  CreateCapacityReservationFleetResult$,
  CreateCapacityReservationRequest$,
  CreateCapacityReservationResult$,
  CreateCarrierGateway$,
  CreateCarrierGatewayCommand,
  CreateCarrierGatewayRequest$,
  CreateCarrierGatewayResult$,
  CreateClientVpnEndpoint$,
  CreateClientVpnEndpointCommand,
  CreateClientVpnEndpointRequest$,
  CreateClientVpnEndpointResult$,
  CreateClientVpnRoute$,
  CreateClientVpnRouteCommand,
  CreateClientVpnRouteRequest$,
  CreateClientVpnRouteResult$,
  CreateCoipCidr$,
  CreateCoipCidrCommand,
  CreateCoipCidrRequest$,
  CreateCoipCidrResult$,
  CreateCoipPool$,
  CreateCoipPoolCommand,
  CreateCoipPoolRequest$,
  CreateCoipPoolResult$,
  CreateCustomerGateway$,
  CreateCustomerGatewayCommand,
  CreateCustomerGatewayRequest$,
  CreateCustomerGatewayResult$,
  CreateDefaultSubnet$,
  CreateDefaultSubnetCommand,
  CreateDefaultSubnetRequest$,
  CreateDefaultSubnetResult$,
  CreateDefaultVpc$,
  CreateDefaultVpcCommand,
  CreateDefaultVpcRequest$,
  CreateDefaultVpcResult$,
  CreateDelegateMacVolumeOwnershipTask$,
  CreateDelegateMacVolumeOwnershipTaskCommand,
  CreateDelegateMacVolumeOwnershipTaskRequest$,
  CreateDelegateMacVolumeOwnershipTaskResult$,
  CreateDhcpOptions$,
  CreateDhcpOptionsCommand,
  CreateDhcpOptionsRequest$,
  CreateDhcpOptionsResult$,
  CreateEgressOnlyInternetGateway$,
  CreateEgressOnlyInternetGatewayCommand,
  CreateEgressOnlyInternetGatewayRequest$,
  CreateEgressOnlyInternetGatewayResult$,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetError$,
  CreateFleetInstance$,
  CreateFleetRequest$,
  CreateFleetResult$,
  CreateFlowLogs$,
  CreateFlowLogsCommand,
  CreateFlowLogsRequest$,
  CreateFlowLogsResult$,
  CreateFpgaImage$,
  CreateFpgaImageCommand,
  CreateFpgaImageRequest$,
  CreateFpgaImageResult$,
  CreateImage$,
  CreateImageCommand,
  CreateImageRequest$,
  CreateImageResult$,
  CreateImageUsageReport$,
  CreateImageUsageReportCommand,
  CreateImageUsageReportRequest$,
  CreateImageUsageReportResult$,
  CreateInstanceConnectEndpoint$,
  CreateInstanceConnectEndpointCommand,
  CreateInstanceConnectEndpointRequest$,
  CreateInstanceConnectEndpointResult$,
  CreateInstanceEventWindow$,
  CreateInstanceEventWindowCommand,
  CreateInstanceEventWindowRequest$,
  CreateInstanceEventWindowResult$,
  CreateInstanceExportTask$,
  CreateInstanceExportTaskCommand,
  CreateInstanceExportTaskRequest$,
  CreateInstanceExportTaskResult$,
  CreateInternetGateway$,
  CreateInternetGatewayCommand,
  CreateInternetGatewayRequest$,
  CreateInternetGatewayResult$,
  CreateInterruptibleCapacityReservationAllocation$,
  CreateInterruptibleCapacityReservationAllocationCommand,
  CreateInterruptibleCapacityReservationAllocationRequest$,
  CreateInterruptibleCapacityReservationAllocationResult$,
  CreateIpam$,
  CreateIpamCommand,
  CreateIpamExternalResourceVerificationToken$,
  CreateIpamExternalResourceVerificationTokenCommand,
  CreateIpamExternalResourceVerificationTokenRequest$,
  CreateIpamExternalResourceVerificationTokenResult$,
  CreateIpamPolicy$,
  CreateIpamPolicyCommand,
  CreateIpamPolicyRequest$,
  CreateIpamPolicyResult$,
  CreateIpamPool$,
  CreateIpamPoolCommand,
  CreateIpamPoolRequest$,
  CreateIpamPoolResult$,
  CreateIpamPrefixListResolver$,
  CreateIpamPrefixListResolverCommand,
  CreateIpamPrefixListResolverRequest$,
  CreateIpamPrefixListResolverResult$,
  CreateIpamPrefixListResolverTarget$,
  CreateIpamPrefixListResolverTargetCommand,
  CreateIpamPrefixListResolverTargetRequest$,
  CreateIpamPrefixListResolverTargetResult$,
  CreateIpamRequest$,
  CreateIpamResourceDiscovery$,
  CreateIpamResourceDiscoveryCommand,
  CreateIpamResourceDiscoveryRequest$,
  CreateIpamResourceDiscoveryResult$,
  CreateIpamResult$,
  CreateIpamScope$,
  CreateIpamScopeCommand,
  CreateIpamScopeRequest$,
  CreateIpamScopeResult$,
  CreateKeyPair$,
  CreateKeyPairCommand,
  CreateKeyPairRequest$,
  CreateLaunchTemplate$,
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateRequest$,
  CreateLaunchTemplateResult$,
  CreateLaunchTemplateVersion$,
  CreateLaunchTemplateVersionCommand,
  CreateLaunchTemplateVersionRequest$,
  CreateLaunchTemplateVersionResult$,
  CreateLocalGatewayRoute$,
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteRequest$,
  CreateLocalGatewayRouteResult$,
  CreateLocalGatewayRouteTable$,
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableRequest$,
  CreateLocalGatewayRouteTableResult$,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation$,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest$,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult$,
  CreateLocalGatewayRouteTableVpcAssociation$,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationRequest$,
  CreateLocalGatewayRouteTableVpcAssociationResult$,
  CreateLocalGatewayVirtualInterface$,
  CreateLocalGatewayVirtualInterfaceCommand,
  CreateLocalGatewayVirtualInterfaceGroup$,
  CreateLocalGatewayVirtualInterfaceGroupCommand,
  CreateLocalGatewayVirtualInterfaceGroupRequest$,
  CreateLocalGatewayVirtualInterfaceGroupResult$,
  CreateLocalGatewayVirtualInterfaceRequest$,
  CreateLocalGatewayVirtualInterfaceResult$,
  CreateMacSystemIntegrityProtectionModificationTask$,
  CreateMacSystemIntegrityProtectionModificationTaskCommand,
  CreateMacSystemIntegrityProtectionModificationTaskRequest$,
  CreateMacSystemIntegrityProtectionModificationTaskResult$,
  CreateManagedPrefixList$,
  CreateManagedPrefixListCommand,
  CreateManagedPrefixListRequest$,
  CreateManagedPrefixListResult$,
  CreateNatGateway$,
  CreateNatGatewayCommand,
  CreateNatGatewayRequest$,
  CreateNatGatewayResult$,
  CreateNetworkAcl$,
  CreateNetworkAclCommand,
  CreateNetworkAclEntry$,
  CreateNetworkAclEntryCommand,
  CreateNetworkAclEntryRequest$,
  CreateNetworkAclRequest$,
  CreateNetworkAclResult$,
  CreateNetworkInsightsAccessScope$,
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsAccessScopeRequest$,
  CreateNetworkInsightsAccessScopeResult$,
  CreateNetworkInsightsPath$,
  CreateNetworkInsightsPathCommand,
  CreateNetworkInsightsPathRequest$,
  CreateNetworkInsightsPathResult$,
  CreateNetworkInterface$,
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfacePermission$,
  CreateNetworkInterfacePermissionCommand,
  CreateNetworkInterfacePermissionRequest$,
  CreateNetworkInterfacePermissionResult$,
  CreateNetworkInterfaceRequest$,
  CreateNetworkInterfaceResult$,
  CreatePlacementGroup$,
  CreatePlacementGroupCommand,
  CreatePlacementGroupRequest$,
  CreatePlacementGroupResult$,
  CreatePublicIpv4Pool$,
  CreatePublicIpv4PoolCommand,
  CreatePublicIpv4PoolRequest$,
  CreatePublicIpv4PoolResult$,
  CreateReplaceRootVolumeTask$,
  CreateReplaceRootVolumeTaskCommand,
  CreateReplaceRootVolumeTaskRequest$,
  CreateReplaceRootVolumeTaskResult$,
  CreateReservedInstancesListing$,
  CreateReservedInstancesListingCommand,
  CreateReservedInstancesListingRequest$,
  CreateReservedInstancesListingResult$,
  CreateRestoreImageTask$,
  CreateRestoreImageTaskCommand,
  CreateRestoreImageTaskRequest$,
  CreateRestoreImageTaskResult$,
  CreateRoute$,
  CreateRouteCommand,
  CreateRouteRequest$,
  CreateRouteResult$,
  CreateRouteServer$,
  CreateRouteServerCommand,
  CreateRouteServerEndpoint$,
  CreateRouteServerEndpointCommand,
  CreateRouteServerEndpointRequest$,
  CreateRouteServerEndpointResult$,
  CreateRouteServerPeer$,
  CreateRouteServerPeerCommand,
  CreateRouteServerPeerRequest$,
  CreateRouteServerPeerResult$,
  CreateRouteServerRequest$,
  CreateRouteServerResult$,
  CreateRouteTable$,
  CreateRouteTableCommand,
  CreateRouteTableRequest$,
  CreateRouteTableResult$,
  CreateSecurityGroup$,
  CreateSecurityGroupCommand,
  CreateSecurityGroupRequest$,
  CreateSecurityGroupResult$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotRequest$,
  CreateSnapshots$,
  CreateSnapshotsCommand,
  CreateSnapshotsRequest$,
  CreateSnapshotsResult$,
  CreateSpotDatafeedSubscription$,
  CreateSpotDatafeedSubscriptionCommand,
  CreateSpotDatafeedSubscriptionRequest$,
  CreateSpotDatafeedSubscriptionResult$,
  CreateStoreImageTask$,
  CreateStoreImageTaskCommand,
  CreateStoreImageTaskRequest$,
  CreateStoreImageTaskResult$,
  CreateSubnet$,
  CreateSubnetCidrReservation$,
  CreateSubnetCidrReservationCommand,
  CreateSubnetCidrReservationRequest$,
  CreateSubnetCidrReservationResult$,
  CreateSubnetCommand,
  CreateSubnetRequest$,
  CreateSubnetResult$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  CreateTrafficMirrorFilter$,
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterRequest$,
  CreateTrafficMirrorFilterResult$,
  CreateTrafficMirrorFilterRule$,
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorFilterRuleRequest$,
  CreateTrafficMirrorFilterRuleResult$,
  CreateTrafficMirrorSession$,
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorSessionRequest$,
  CreateTrafficMirrorSessionResult$,
  CreateTrafficMirrorTarget$,
  CreateTrafficMirrorTargetCommand,
  CreateTrafficMirrorTargetRequest$,
  CreateTrafficMirrorTargetResult$,
  CreateTransitGateway$,
  CreateTransitGatewayCommand,
  CreateTransitGatewayConnect$,
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectPeer$,
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayConnectPeerRequest$,
  CreateTransitGatewayConnectPeerResult$,
  CreateTransitGatewayConnectRequest$,
  CreateTransitGatewayConnectRequestOptions$,
  CreateTransitGatewayConnectResult$,
  CreateTransitGatewayMeteringPolicy$,
  CreateTransitGatewayMeteringPolicyCommand,
  CreateTransitGatewayMeteringPolicyEntry$,
  CreateTransitGatewayMeteringPolicyEntryCommand,
  CreateTransitGatewayMeteringPolicyEntryRequest$,
  CreateTransitGatewayMeteringPolicyEntryResult$,
  CreateTransitGatewayMeteringPolicyRequest$,
  CreateTransitGatewayMeteringPolicyResult$,
  CreateTransitGatewayMulticastDomain$,
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayMulticastDomainRequest$,
  CreateTransitGatewayMulticastDomainRequestOptions$,
  CreateTransitGatewayMulticastDomainResult$,
  CreateTransitGatewayPeeringAttachment$,
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPeeringAttachmentRequest$,
  CreateTransitGatewayPeeringAttachmentRequestOptions$,
  CreateTransitGatewayPeeringAttachmentResult$,
  CreateTransitGatewayPolicyTable$,
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPolicyTableRequest$,
  CreateTransitGatewayPolicyTableResult$,
  CreateTransitGatewayPrefixListReference$,
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayPrefixListReferenceRequest$,
  CreateTransitGatewayPrefixListReferenceResult$,
  CreateTransitGatewayRequest$,
  CreateTransitGatewayResult$,
  CreateTransitGatewayRoute$,
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteRequest$,
  CreateTransitGatewayRouteResult$,
  CreateTransitGatewayRouteTable$,
  CreateTransitGatewayRouteTableAnnouncement$,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayRouteTableAnnouncementRequest$,
  CreateTransitGatewayRouteTableAnnouncementResult$,
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayRouteTableRequest$,
  CreateTransitGatewayRouteTableResult$,
  CreateTransitGatewayVpcAttachment$,
  CreateTransitGatewayVpcAttachmentCommand,
  CreateTransitGatewayVpcAttachmentRequest$,
  CreateTransitGatewayVpcAttachmentRequestOptions$,
  CreateTransitGatewayVpcAttachmentResult$,
  CreateVerifiedAccessEndpoint$,
  CreateVerifiedAccessEndpointCidrOptions$,
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessEndpointEniOptions$,
  CreateVerifiedAccessEndpointLoadBalancerOptions$,
  CreateVerifiedAccessEndpointPortRange$,
  CreateVerifiedAccessEndpointRdsOptions$,
  CreateVerifiedAccessEndpointRequest$,
  CreateVerifiedAccessEndpointResult$,
  CreateVerifiedAccessGroup$,
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessGroupRequest$,
  CreateVerifiedAccessGroupResult$,
  CreateVerifiedAccessInstance$,
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessInstanceRequest$,
  CreateVerifiedAccessInstanceResult$,
  CreateVerifiedAccessNativeApplicationOidcOptions$,
  CreateVerifiedAccessTrustProvider$,
  CreateVerifiedAccessTrustProviderCommand,
  CreateVerifiedAccessTrustProviderDeviceOptions$,
  CreateVerifiedAccessTrustProviderOidcOptions$,
  CreateVerifiedAccessTrustProviderRequest$,
  CreateVerifiedAccessTrustProviderResult$,
  CreateVolume$,
  CreateVolumeCommand,
  CreateVolumePermission$,
  CreateVolumePermissionModifications$,
  CreateVolumeRequest$,
  CreateVpc$,
  CreateVpcBlockPublicAccessExclusion$,
  CreateVpcBlockPublicAccessExclusionCommand,
  CreateVpcBlockPublicAccessExclusionRequest$,
  CreateVpcBlockPublicAccessExclusionResult$,
  CreateVpcCommand,
  CreateVpcEncryptionControl$,
  CreateVpcEncryptionControlCommand,
  CreateVpcEncryptionControlRequest$,
  CreateVpcEncryptionControlResult$,
  CreateVpcEndpoint$,
  CreateVpcEndpointCommand,
  CreateVpcEndpointConnectionNotification$,
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointConnectionNotificationRequest$,
  CreateVpcEndpointConnectionNotificationResult$,
  CreateVpcEndpointRequest$,
  CreateVpcEndpointResult$,
  CreateVpcEndpointServiceConfiguration$,
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcEndpointServiceConfigurationRequest$,
  CreateVpcEndpointServiceConfigurationResult$,
  CreateVpcPeeringConnection$,
  CreateVpcPeeringConnectionCommand,
  CreateVpcPeeringConnectionRequest$,
  CreateVpcPeeringConnectionResult$,
  CreateVpcRequest$,
  CreateVpcResult$,
  CreateVpnConcentrator$,
  CreateVpnConcentratorCommand,
  CreateVpnConcentratorRequest$,
  CreateVpnConcentratorResult$,
  CreateVpnConnection$,
  CreateVpnConnectionCommand,
  CreateVpnConnectionRequest$,
  CreateVpnConnectionResult$,
  CreateVpnConnectionRoute$,
  CreateVpnConnectionRouteCommand,
  CreateVpnConnectionRouteRequest$,
  CreateVpnGateway$,
  CreateVpnGatewayCommand,
  CreateVpnGatewayRequest$,
  CreateVpnGatewayResult$,
  CreationDateCondition$,
  CreationDateConditionRequest$,
  CreditSpecification$,
  CreditSpecificationRequest$,
  CurrencyCodeValues,
  CustomerGateway$,
  DataQuery$,
  DataResponse$,
  DatafeedSubscriptionState,
  DeclarativePoliciesReport$,
  DefaultInstanceMetadataEndpointState,
  DefaultInstanceMetadataTagsState,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DefaultTargetCapacityType,
  DeleteCapacityManagerDataExport$,
  DeleteCapacityManagerDataExportCommand,
  DeleteCapacityManagerDataExportRequest$,
  DeleteCapacityManagerDataExportResult$,
  DeleteCarrierGateway$,
  DeleteCarrierGatewayCommand,
  DeleteCarrierGatewayRequest$,
  DeleteCarrierGatewayResult$,
  DeleteClientVpnEndpoint$,
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnEndpointRequest$,
  DeleteClientVpnEndpointResult$,
  DeleteClientVpnRoute$,
  DeleteClientVpnRouteCommand,
  DeleteClientVpnRouteRequest$,
  DeleteClientVpnRouteResult$,
  DeleteCoipCidr$,
  DeleteCoipCidrCommand,
  DeleteCoipCidrRequest$,
  DeleteCoipCidrResult$,
  DeleteCoipPool$,
  DeleteCoipPoolCommand,
  DeleteCoipPoolRequest$,
  DeleteCoipPoolResult$,
  DeleteCustomerGateway$,
  DeleteCustomerGatewayCommand,
  DeleteCustomerGatewayRequest$,
  DeleteDhcpOptions$,
  DeleteDhcpOptionsCommand,
  DeleteDhcpOptionsRequest$,
  DeleteEgressOnlyInternetGateway$,
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteEgressOnlyInternetGatewayRequest$,
  DeleteEgressOnlyInternetGatewayResult$,
  DeleteFleetError$,
  DeleteFleetErrorCode,
  DeleteFleetErrorItem$,
  DeleteFleetSuccessItem$,
  DeleteFleets$,
  DeleteFleetsCommand,
  DeleteFleetsRequest$,
  DeleteFleetsResult$,
  DeleteFlowLogs$,
  DeleteFlowLogsCommand,
  DeleteFlowLogsRequest$,
  DeleteFlowLogsResult$,
  DeleteFpgaImage$,
  DeleteFpgaImageCommand,
  DeleteFpgaImageRequest$,
  DeleteFpgaImageResult$,
  DeleteImageUsageReport$,
  DeleteImageUsageReportCommand,
  DeleteImageUsageReportRequest$,
  DeleteImageUsageReportResult$,
  DeleteInstanceConnectEndpoint$,
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceConnectEndpointRequest$,
  DeleteInstanceConnectEndpointResult$,
  DeleteInstanceEventWindow$,
  DeleteInstanceEventWindowCommand,
  DeleteInstanceEventWindowRequest$,
  DeleteInstanceEventWindowResult$,
  DeleteInternetGateway$,
  DeleteInternetGatewayCommand,
  DeleteInternetGatewayRequest$,
  DeleteIpam$,
  DeleteIpamCommand,
  DeleteIpamExternalResourceVerificationToken$,
  DeleteIpamExternalResourceVerificationTokenCommand,
  DeleteIpamExternalResourceVerificationTokenRequest$,
  DeleteIpamExternalResourceVerificationTokenResult$,
  DeleteIpamPolicy$,
  DeleteIpamPolicyCommand,
  DeleteIpamPolicyRequest$,
  DeleteIpamPolicyResult$,
  DeleteIpamPool$,
  DeleteIpamPoolCommand,
  DeleteIpamPoolRequest$,
  DeleteIpamPoolResult$,
  DeleteIpamPrefixListResolver$,
  DeleteIpamPrefixListResolverCommand,
  DeleteIpamPrefixListResolverRequest$,
  DeleteIpamPrefixListResolverResult$,
  DeleteIpamPrefixListResolverTarget$,
  DeleteIpamPrefixListResolverTargetCommand,
  DeleteIpamPrefixListResolverTargetRequest$,
  DeleteIpamPrefixListResolverTargetResult$,
  DeleteIpamRequest$,
  DeleteIpamResourceDiscovery$,
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamResourceDiscoveryRequest$,
  DeleteIpamResourceDiscoveryResult$,
  DeleteIpamResult$,
  DeleteIpamScope$,
  DeleteIpamScopeCommand,
  DeleteIpamScopeRequest$,
  DeleteIpamScopeResult$,
  DeleteKeyPair$,
  DeleteKeyPairCommand,
  DeleteKeyPairRequest$,
  DeleteKeyPairResult$,
  DeleteLaunchTemplate$,
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateRequest$,
  DeleteLaunchTemplateResult$,
  DeleteLaunchTemplateVersions$,
  DeleteLaunchTemplateVersionsCommand,
  DeleteLaunchTemplateVersionsRequest$,
  DeleteLaunchTemplateVersionsResponseErrorItem$,
  DeleteLaunchTemplateVersionsResponseSuccessItem$,
  DeleteLaunchTemplateVersionsResult$,
  DeleteLocalGatewayRoute$,
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteRequest$,
  DeleteLocalGatewayRouteResult$,
  DeleteLocalGatewayRouteTable$,
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableRequest$,
  DeleteLocalGatewayRouteTableResult$,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation$,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest$,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult$,
  DeleteLocalGatewayRouteTableVpcAssociation$,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationRequest$,
  DeleteLocalGatewayRouteTableVpcAssociationResult$,
  DeleteLocalGatewayVirtualInterface$,
  DeleteLocalGatewayVirtualInterfaceCommand,
  DeleteLocalGatewayVirtualInterfaceGroup$,
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
  DeleteLocalGatewayVirtualInterfaceGroupRequest$,
  DeleteLocalGatewayVirtualInterfaceGroupResult$,
  DeleteLocalGatewayVirtualInterfaceRequest$,
  DeleteLocalGatewayVirtualInterfaceResult$,
  DeleteManagedPrefixList$,
  DeleteManagedPrefixListCommand,
  DeleteManagedPrefixListRequest$,
  DeleteManagedPrefixListResult$,
  DeleteNatGateway$,
  DeleteNatGatewayCommand,
  DeleteNatGatewayRequest$,
  DeleteNatGatewayResult$,
  DeleteNetworkAcl$,
  DeleteNetworkAclCommand,
  DeleteNetworkAclEntry$,
  DeleteNetworkAclEntryCommand,
  DeleteNetworkAclEntryRequest$,
  DeleteNetworkAclRequest$,
  DeleteNetworkInsightsAccessScope$,
  DeleteNetworkInsightsAccessScopeAnalysis$,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAccessScopeAnalysisRequest$,
  DeleteNetworkInsightsAccessScopeAnalysisResult$,
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAccessScopeRequest$,
  DeleteNetworkInsightsAccessScopeResult$,
  DeleteNetworkInsightsAnalysis$,
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsAnalysisRequest$,
  DeleteNetworkInsightsAnalysisResult$,
  DeleteNetworkInsightsPath$,
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInsightsPathRequest$,
  DeleteNetworkInsightsPathResult$,
  DeleteNetworkInterface$,
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfacePermission$,
  DeleteNetworkInterfacePermissionCommand,
  DeleteNetworkInterfacePermissionRequest$,
  DeleteNetworkInterfacePermissionResult$,
  DeleteNetworkInterfaceRequest$,
  DeletePlacementGroup$,
  DeletePlacementGroupCommand,
  DeletePlacementGroupRequest$,
  DeletePublicIpv4Pool$,
  DeletePublicIpv4PoolCommand,
  DeletePublicIpv4PoolRequest$,
  DeletePublicIpv4PoolResult$,
  DeleteQueuedReservedInstances$,
  DeleteQueuedReservedInstancesCommand,
  DeleteQueuedReservedInstancesError$,
  DeleteQueuedReservedInstancesErrorCode,
  DeleteQueuedReservedInstancesRequest$,
  DeleteQueuedReservedInstancesResult$,
  DeleteRoute$,
  DeleteRouteCommand,
  DeleteRouteRequest$,
  DeleteRouteServer$,
  DeleteRouteServerCommand,
  DeleteRouteServerEndpoint$,
  DeleteRouteServerEndpointCommand,
  DeleteRouteServerEndpointRequest$,
  DeleteRouteServerEndpointResult$,
  DeleteRouteServerPeer$,
  DeleteRouteServerPeerCommand,
  DeleteRouteServerPeerRequest$,
  DeleteRouteServerPeerResult$,
  DeleteRouteServerRequest$,
  DeleteRouteServerResult$,
  DeleteRouteTable$,
  DeleteRouteTableCommand,
  DeleteRouteTableRequest$,
  DeleteSecurityGroup$,
  DeleteSecurityGroupCommand,
  DeleteSecurityGroupRequest$,
  DeleteSecurityGroupResult$,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotRequest$,
  DeleteSnapshotReturnCode$,
  DeleteSpotDatafeedSubscription$,
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSpotDatafeedSubscriptionRequest$,
  DeleteSubnet$,
  DeleteSubnetCidrReservation$,
  DeleteSubnetCidrReservationCommand,
  DeleteSubnetCidrReservationRequest$,
  DeleteSubnetCidrReservationResult$,
  DeleteSubnetCommand,
  DeleteSubnetRequest$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DeleteTrafficMirrorFilter$,
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterRequest$,
  DeleteTrafficMirrorFilterResult$,
  DeleteTrafficMirrorFilterRule$,
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorFilterRuleRequest$,
  DeleteTrafficMirrorFilterRuleResult$,
  DeleteTrafficMirrorSession$,
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorSessionRequest$,
  DeleteTrafficMirrorSessionResult$,
  DeleteTrafficMirrorTarget$,
  DeleteTrafficMirrorTargetCommand,
  DeleteTrafficMirrorTargetRequest$,
  DeleteTrafficMirrorTargetResult$,
  DeleteTransitGateway$,
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayConnect$,
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectPeer$,
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayConnectPeerRequest$,
  DeleteTransitGatewayConnectPeerResult$,
  DeleteTransitGatewayConnectRequest$,
  DeleteTransitGatewayConnectResult$,
  DeleteTransitGatewayMeteringPolicy$,
  DeleteTransitGatewayMeteringPolicyCommand,
  DeleteTransitGatewayMeteringPolicyEntry$,
  DeleteTransitGatewayMeteringPolicyEntryCommand,
  DeleteTransitGatewayMeteringPolicyEntryRequest$,
  DeleteTransitGatewayMeteringPolicyEntryResult$,
  DeleteTransitGatewayMeteringPolicyRequest$,
  DeleteTransitGatewayMeteringPolicyResult$,
  DeleteTransitGatewayMulticastDomain$,
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayMulticastDomainRequest$,
  DeleteTransitGatewayMulticastDomainResult$,
  DeleteTransitGatewayPeeringAttachment$,
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPeeringAttachmentRequest$,
  DeleteTransitGatewayPeeringAttachmentResult$,
  DeleteTransitGatewayPolicyTable$,
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPolicyTableRequest$,
  DeleteTransitGatewayPolicyTableResult$,
  DeleteTransitGatewayPrefixListReference$,
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayPrefixListReferenceRequest$,
  DeleteTransitGatewayPrefixListReferenceResult$,
  DeleteTransitGatewayRequest$,
  DeleteTransitGatewayResult$,
  DeleteTransitGatewayRoute$,
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteRequest$,
  DeleteTransitGatewayRouteResult$,
  DeleteTransitGatewayRouteTable$,
  DeleteTransitGatewayRouteTableAnnouncement$,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayRouteTableAnnouncementRequest$,
  DeleteTransitGatewayRouteTableAnnouncementResult$,
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayRouteTableRequest$,
  DeleteTransitGatewayRouteTableResult$,
  DeleteTransitGatewayVpcAttachment$,
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteTransitGatewayVpcAttachmentRequest$,
  DeleteTransitGatewayVpcAttachmentResult$,
  DeleteVerifiedAccessEndpoint$,
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessEndpointRequest$,
  DeleteVerifiedAccessEndpointResult$,
  DeleteVerifiedAccessGroup$,
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessGroupRequest$,
  DeleteVerifiedAccessGroupResult$,
  DeleteVerifiedAccessInstance$,
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessInstanceRequest$,
  DeleteVerifiedAccessInstanceResult$,
  DeleteVerifiedAccessTrustProvider$,
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVerifiedAccessTrustProviderRequest$,
  DeleteVerifiedAccessTrustProviderResult$,
  DeleteVolume$,
  DeleteVolumeCommand,
  DeleteVolumeRequest$,
  DeleteVpc$,
  DeleteVpcBlockPublicAccessExclusion$,
  DeleteVpcBlockPublicAccessExclusionCommand,
  DeleteVpcBlockPublicAccessExclusionRequest$,
  DeleteVpcBlockPublicAccessExclusionResult$,
  DeleteVpcCommand,
  DeleteVpcEncryptionControl$,
  DeleteVpcEncryptionControlCommand,
  DeleteVpcEncryptionControlRequest$,
  DeleteVpcEncryptionControlResult$,
  DeleteVpcEndpointConnectionNotifications$,
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointConnectionNotificationsRequest$,
  DeleteVpcEndpointConnectionNotificationsResult$,
  DeleteVpcEndpointServiceConfigurations$,
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointServiceConfigurationsRequest$,
  DeleteVpcEndpointServiceConfigurationsResult$,
  DeleteVpcEndpoints$,
  DeleteVpcEndpointsCommand,
  DeleteVpcEndpointsRequest$,
  DeleteVpcEndpointsResult$,
  DeleteVpcPeeringConnection$,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpcPeeringConnectionRequest$,
  DeleteVpcPeeringConnectionResult$,
  DeleteVpcRequest$,
  DeleteVpnConcentrator$,
  DeleteVpnConcentratorCommand,
  DeleteVpnConcentratorRequest$,
  DeleteVpnConcentratorResult$,
  DeleteVpnConnection$,
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionRequest$,
  DeleteVpnConnectionRoute$,
  DeleteVpnConnectionRouteCommand,
  DeleteVpnConnectionRouteRequest$,
  DeleteVpnGateway$,
  DeleteVpnGatewayCommand,
  DeleteVpnGatewayRequest$,
  DeprecationTimeCondition$,
  DeprecationTimeConditionRequest$,
  DeprovisionByoipCidr$,
  DeprovisionByoipCidrCommand,
  DeprovisionByoipCidrRequest$,
  DeprovisionByoipCidrResult$,
  DeprovisionIpamByoasn$,
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamByoasnRequest$,
  DeprovisionIpamByoasnResult$,
  DeprovisionIpamPoolCidr$,
  DeprovisionIpamPoolCidrCommand,
  DeprovisionIpamPoolCidrRequest$,
  DeprovisionIpamPoolCidrResult$,
  DeprovisionPublicIpv4PoolCidr$,
  DeprovisionPublicIpv4PoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrRequest$,
  DeprovisionPublicIpv4PoolCidrResult$,
  DeregisterImage$,
  DeregisterImageCommand,
  DeregisterImageRequest$,
  DeregisterImageResult$,
  DeregisterInstanceEventNotificationAttributes$,
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterInstanceEventNotificationAttributesRequest$,
  DeregisterInstanceEventNotificationAttributesResult$,
  DeregisterInstanceTagAttributeRequest$,
  DeregisterTransitGatewayMulticastGroupMembers$,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupMembersRequest$,
  DeregisterTransitGatewayMulticastGroupMembersResult$,
  DeregisterTransitGatewayMulticastGroupSources$,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DeregisterTransitGatewayMulticastGroupSourcesRequest$,
  DeregisterTransitGatewayMulticastGroupSourcesResult$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesRequest$,
  DescribeAccountAttributesResult$,
  DescribeAddressTransfers$,
  DescribeAddressTransfersCommand,
  DescribeAddressTransfersRequest$,
  DescribeAddressTransfersResult$,
  DescribeAddresses$,
  DescribeAddressesAttribute$,
  DescribeAddressesAttributeCommand,
  DescribeAddressesAttributeRequest$,
  DescribeAddressesAttributeResult$,
  DescribeAddressesCommand,
  DescribeAddressesRequest$,
  DescribeAddressesResult$,
  DescribeAggregateIdFormat$,
  DescribeAggregateIdFormatCommand,
  DescribeAggregateIdFormatRequest$,
  DescribeAggregateIdFormatResult$,
  DescribeAvailabilityZones$,
  DescribeAvailabilityZonesCommand,
  DescribeAvailabilityZonesRequest$,
  DescribeAvailabilityZonesResult$,
  DescribeAwsNetworkPerformanceMetricSubscriptions$,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsRequest$,
  DescribeAwsNetworkPerformanceMetricSubscriptionsResult$,
  DescribeBundleTasks$,
  DescribeBundleTasksCommand,
  DescribeBundleTasksRequest$,
  DescribeBundleTasksResult$,
  DescribeByoipCidrs$,
  DescribeByoipCidrsCommand,
  DescribeByoipCidrsRequest$,
  DescribeByoipCidrsResult$,
  DescribeCapacityBlockExtensionHistory$,
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionHistoryRequest$,
  DescribeCapacityBlockExtensionHistoryResult$,
  DescribeCapacityBlockExtensionOfferings$,
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockExtensionOfferingsRequest$,
  DescribeCapacityBlockExtensionOfferingsResult$,
  DescribeCapacityBlockOfferings$,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityBlockOfferingsRequest$,
  DescribeCapacityBlockOfferingsResult$,
  DescribeCapacityBlockStatus$,
  DescribeCapacityBlockStatusCommand,
  DescribeCapacityBlockStatusRequest$,
  DescribeCapacityBlockStatusResult$,
  DescribeCapacityBlocks$,
  DescribeCapacityBlocksCommand,
  DescribeCapacityBlocksRequest$,
  DescribeCapacityBlocksResult$,
  DescribeCapacityManagerDataExports$,
  DescribeCapacityManagerDataExportsCommand,
  DescribeCapacityManagerDataExportsRequest$,
  DescribeCapacityManagerDataExportsResult$,
  DescribeCapacityReservationBillingRequests$,
  DescribeCapacityReservationBillingRequestsCommand,
  DescribeCapacityReservationBillingRequestsRequest$,
  DescribeCapacityReservationBillingRequestsResult$,
  DescribeCapacityReservationFleets$,
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationFleetsRequest$,
  DescribeCapacityReservationFleetsResult$,
  DescribeCapacityReservationTopology$,
  DescribeCapacityReservationTopologyCommand,
  DescribeCapacityReservationTopologyRequest$,
  DescribeCapacityReservationTopologyResult$,
  DescribeCapacityReservations$,
  DescribeCapacityReservationsCommand,
  DescribeCapacityReservationsRequest$,
  DescribeCapacityReservationsResult$,
  DescribeCarrierGateways$,
  DescribeCarrierGatewaysCommand,
  DescribeCarrierGatewaysRequest$,
  DescribeCarrierGatewaysResult$,
  DescribeClassicLinkInstances$,
  DescribeClassicLinkInstancesCommand,
  DescribeClassicLinkInstancesRequest$,
  DescribeClassicLinkInstancesResult$,
  DescribeClientVpnAuthorizationRules$,
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnAuthorizationRulesRequest$,
  DescribeClientVpnAuthorizationRulesResult$,
  DescribeClientVpnConnections$,
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnConnectionsRequest$,
  DescribeClientVpnConnectionsResult$,
  DescribeClientVpnEndpoints$,
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnEndpointsRequest$,
  DescribeClientVpnEndpointsResult$,
  DescribeClientVpnRoutes$,
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnRoutesRequest$,
  DescribeClientVpnRoutesResult$,
  DescribeClientVpnTargetNetworks$,
  DescribeClientVpnTargetNetworksCommand,
  DescribeClientVpnTargetNetworksRequest$,
  DescribeClientVpnTargetNetworksResult$,
  DescribeCoipPools$,
  DescribeCoipPoolsCommand,
  DescribeCoipPoolsRequest$,
  DescribeCoipPoolsResult$,
  DescribeConversionTasks$,
  DescribeConversionTasksCommand,
  DescribeConversionTasksRequest$,
  DescribeConversionTasksResult$,
  DescribeCustomerGateways$,
  DescribeCustomerGatewaysCommand,
  DescribeCustomerGatewaysRequest$,
  DescribeCustomerGatewaysResult$,
  DescribeDeclarativePoliciesReports$,
  DescribeDeclarativePoliciesReportsCommand,
  DescribeDeclarativePoliciesReportsRequest$,
  DescribeDeclarativePoliciesReportsResult$,
  DescribeDhcpOptions$,
  DescribeDhcpOptionsCommand,
  DescribeDhcpOptionsRequest$,
  DescribeDhcpOptionsResult$,
  DescribeEgressOnlyInternetGateways$,
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeEgressOnlyInternetGatewaysRequest$,
  DescribeEgressOnlyInternetGatewaysResult$,
  DescribeElasticGpus$,
  DescribeElasticGpusCommand,
  DescribeElasticGpusRequest$,
  DescribeElasticGpusResult$,
  DescribeExportImageTasks$,
  DescribeExportImageTasksCommand,
  DescribeExportImageTasksRequest$,
  DescribeExportImageTasksResult$,
  DescribeExportTasks$,
  DescribeExportTasksCommand,
  DescribeExportTasksRequest$,
  DescribeExportTasksResult$,
  DescribeFastLaunchImages$,
  DescribeFastLaunchImagesCommand,
  DescribeFastLaunchImagesRequest$,
  DescribeFastLaunchImagesResult$,
  DescribeFastLaunchImagesSuccessItem$,
  DescribeFastSnapshotRestoreSuccessItem$,
  DescribeFastSnapshotRestores$,
  DescribeFastSnapshotRestoresCommand,
  DescribeFastSnapshotRestoresRequest$,
  DescribeFastSnapshotRestoresResult$,
  DescribeFleetError$,
  DescribeFleetHistory$,
  DescribeFleetHistoryCommand,
  DescribeFleetHistoryRequest$,
  DescribeFleetHistoryResult$,
  DescribeFleetInstances$,
  DescribeFleetInstancesCommand,
  DescribeFleetInstancesRequest$,
  DescribeFleetInstancesResult$,
  DescribeFleets$,
  DescribeFleetsCommand,
  DescribeFleetsInstances$,
  DescribeFleetsRequest$,
  DescribeFleetsResult$,
  DescribeFlowLogs$,
  DescribeFlowLogsCommand,
  DescribeFlowLogsRequest$,
  DescribeFlowLogsResult$,
  DescribeFpgaImageAttribute$,
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImageAttributeRequest$,
  DescribeFpgaImageAttributeResult$,
  DescribeFpgaImages$,
  DescribeFpgaImagesCommand,
  DescribeFpgaImagesRequest$,
  DescribeFpgaImagesResult$,
  DescribeHostReservationOfferings$,
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationOfferingsRequest$,
  DescribeHostReservationOfferingsResult$,
  DescribeHostReservations$,
  DescribeHostReservationsCommand,
  DescribeHostReservationsRequest$,
  DescribeHostReservationsResult$,
  DescribeHosts$,
  DescribeHostsCommand,
  DescribeHostsRequest$,
  DescribeHostsResult$,
  DescribeIamInstanceProfileAssociations$,
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIamInstanceProfileAssociationsRequest$,
  DescribeIamInstanceProfileAssociationsResult$,
  DescribeIdFormat$,
  DescribeIdFormatCommand,
  DescribeIdFormatRequest$,
  DescribeIdFormatResult$,
  DescribeIdentityIdFormat$,
  DescribeIdentityIdFormatCommand,
  DescribeIdentityIdFormatRequest$,
  DescribeIdentityIdFormatResult$,
  DescribeImageAttribute$,
  DescribeImageAttributeCommand,
  DescribeImageAttributeRequest$,
  DescribeImageReferences$,
  DescribeImageReferencesCommand,
  DescribeImageReferencesRequest$,
  DescribeImageReferencesResult$,
  DescribeImageUsageReportEntries$,
  DescribeImageUsageReportEntriesCommand,
  DescribeImageUsageReportEntriesRequest$,
  DescribeImageUsageReportEntriesResult$,
  DescribeImageUsageReports$,
  DescribeImageUsageReportsCommand,
  DescribeImageUsageReportsRequest$,
  DescribeImageUsageReportsResult$,
  DescribeImages$,
  DescribeImagesCommand,
  DescribeImagesRequest$,
  DescribeImagesResult$,
  DescribeImportImageTasks$,
  DescribeImportImageTasksCommand,
  DescribeImportImageTasksRequest$,
  DescribeImportImageTasksResult$,
  DescribeImportSnapshotTasks$,
  DescribeImportSnapshotTasksCommand,
  DescribeImportSnapshotTasksRequest$,
  DescribeImportSnapshotTasksResult$,
  DescribeInstanceAttribute$,
  DescribeInstanceAttributeCommand,
  DescribeInstanceAttributeRequest$,
  DescribeInstanceConnectEndpoints$,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceConnectEndpointsRequest$,
  DescribeInstanceConnectEndpointsResult$,
  DescribeInstanceCreditSpecifications$,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceCreditSpecificationsRequest$,
  DescribeInstanceCreditSpecificationsResult$,
  DescribeInstanceEventNotificationAttributes$,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventNotificationAttributesRequest$,
  DescribeInstanceEventNotificationAttributesResult$,
  DescribeInstanceEventWindows$,
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceEventWindowsRequest$,
  DescribeInstanceEventWindowsResult$,
  DescribeInstanceImageMetadata$,
  DescribeInstanceImageMetadataCommand,
  DescribeInstanceImageMetadataRequest$,
  DescribeInstanceImageMetadataResult$,
  DescribeInstanceSqlHaHistoryStates$,
  DescribeInstanceSqlHaHistoryStatesCommand,
  DescribeInstanceSqlHaHistoryStatesRequest$,
  DescribeInstanceSqlHaHistoryStatesResult$,
  DescribeInstanceSqlHaStates$,
  DescribeInstanceSqlHaStatesCommand,
  DescribeInstanceSqlHaStatesRequest$,
  DescribeInstanceSqlHaStatesResult$,
  DescribeInstanceStatus$,
  DescribeInstanceStatusCommand,
  DescribeInstanceStatusRequest$,
  DescribeInstanceStatusResult$,
  DescribeInstanceTopology$,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTopologyRequest$,
  DescribeInstanceTopologyResult$,
  DescribeInstanceTypeOfferings$,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypeOfferingsRequest$,
  DescribeInstanceTypeOfferingsResult$,
  DescribeInstanceTypes$,
  DescribeInstanceTypesCommand,
  DescribeInstanceTypesRequest$,
  DescribeInstanceTypesResult$,
  DescribeInstances$,
  DescribeInstancesCommand,
  DescribeInstancesRequest$,
  DescribeInstancesResult$,
  DescribeInternetGateways$,
  DescribeInternetGatewaysCommand,
  DescribeInternetGatewaysRequest$,
  DescribeInternetGatewaysResult$,
  DescribeIpamByoasn$,
  DescribeIpamByoasnCommand,
  DescribeIpamByoasnRequest$,
  DescribeIpamByoasnResult$,
  DescribeIpamExternalResourceVerificationTokens$,
  DescribeIpamExternalResourceVerificationTokensCommand,
  DescribeIpamExternalResourceVerificationTokensRequest$,
  DescribeIpamExternalResourceVerificationTokensResult$,
  DescribeIpamPolicies$,
  DescribeIpamPoliciesCommand,
  DescribeIpamPoliciesRequest$,
  DescribeIpamPoliciesResult$,
  DescribeIpamPools$,
  DescribeIpamPoolsCommand,
  DescribeIpamPoolsRequest$,
  DescribeIpamPoolsResult$,
  DescribeIpamPrefixListResolverTargets$,
  DescribeIpamPrefixListResolverTargetsCommand,
  DescribeIpamPrefixListResolverTargetsRequest$,
  DescribeIpamPrefixListResolverTargetsResult$,
  DescribeIpamPrefixListResolvers$,
  DescribeIpamPrefixListResolversCommand,
  DescribeIpamPrefixListResolversRequest$,
  DescribeIpamPrefixListResolversResult$,
  DescribeIpamResourceDiscoveries$,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveriesRequest$,
  DescribeIpamResourceDiscoveriesResult$,
  DescribeIpamResourceDiscoveryAssociations$,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamResourceDiscoveryAssociationsRequest$,
  DescribeIpamResourceDiscoveryAssociationsResult$,
  DescribeIpamScopes$,
  DescribeIpamScopesCommand,
  DescribeIpamScopesRequest$,
  DescribeIpamScopesResult$,
  DescribeIpams$,
  DescribeIpamsCommand,
  DescribeIpamsRequest$,
  DescribeIpamsResult$,
  DescribeIpv6Pools$,
  DescribeIpv6PoolsCommand,
  DescribeIpv6PoolsRequest$,
  DescribeIpv6PoolsResult$,
  DescribeKeyPairs$,
  DescribeKeyPairsCommand,
  DescribeKeyPairsRequest$,
  DescribeKeyPairsResult$,
  DescribeLaunchTemplateVersions$,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplateVersionsRequest$,
  DescribeLaunchTemplateVersionsResult$,
  DescribeLaunchTemplates$,
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplatesRequest$,
  DescribeLaunchTemplatesResult$,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations$,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest$,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult$,
  DescribeLocalGatewayRouteTableVpcAssociations$,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsRequest$,
  DescribeLocalGatewayRouteTableVpcAssociationsResult$,
  DescribeLocalGatewayRouteTables$,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTablesRequest$,
  DescribeLocalGatewayRouteTablesResult$,
  DescribeLocalGatewayVirtualInterfaceGroups$,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsRequest$,
  DescribeLocalGatewayVirtualInterfaceGroupsResult$,
  DescribeLocalGatewayVirtualInterfaces$,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewayVirtualInterfacesRequest$,
  DescribeLocalGatewayVirtualInterfacesResult$,
  DescribeLocalGateways$,
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewaysRequest$,
  DescribeLocalGatewaysResult$,
  DescribeLockedSnapshots$,
  DescribeLockedSnapshotsCommand,
  DescribeLockedSnapshotsRequest$,
  DescribeLockedSnapshotsResult$,
  DescribeMacHosts$,
  DescribeMacHostsCommand,
  DescribeMacHostsRequest$,
  DescribeMacHostsResult$,
  DescribeMacModificationTasks$,
  DescribeMacModificationTasksCommand,
  DescribeMacModificationTasksRequest$,
  DescribeMacModificationTasksResult$,
  DescribeManagedPrefixLists$,
  DescribeManagedPrefixListsCommand,
  DescribeManagedPrefixListsRequest$,
  DescribeManagedPrefixListsResult$,
  DescribeMovingAddresses$,
  DescribeMovingAddressesCommand,
  DescribeMovingAddressesRequest$,
  DescribeMovingAddressesResult$,
  DescribeNatGateways$,
  DescribeNatGatewaysCommand,
  DescribeNatGatewaysRequest$,
  DescribeNatGatewaysResult$,
  DescribeNetworkAcls$,
  DescribeNetworkAclsCommand,
  DescribeNetworkAclsRequest$,
  DescribeNetworkAclsResult$,
  DescribeNetworkInsightsAccessScopeAnalyses$,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopeAnalysesRequest$,
  DescribeNetworkInsightsAccessScopeAnalysesResult$,
  DescribeNetworkInsightsAccessScopes$,
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAccessScopesRequest$,
  DescribeNetworkInsightsAccessScopesResult$,
  DescribeNetworkInsightsAnalyses$,
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsAnalysesRequest$,
  DescribeNetworkInsightsAnalysesResult$,
  DescribeNetworkInsightsPaths$,
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInsightsPathsRequest$,
  DescribeNetworkInsightsPathsResult$,
  DescribeNetworkInterfaceAttribute$,
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfaceAttributeRequest$,
  DescribeNetworkInterfaceAttributeResult$,
  DescribeNetworkInterfacePermissions$,
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacePermissionsRequest$,
  DescribeNetworkInterfacePermissionsResult$,
  DescribeNetworkInterfaces$,
  DescribeNetworkInterfacesCommand,
  DescribeNetworkInterfacesRequest$,
  DescribeNetworkInterfacesResult$,
  DescribeOutpostLags$,
  DescribeOutpostLagsCommand,
  DescribeOutpostLagsRequest$,
  DescribeOutpostLagsResult$,
  DescribePlacementGroups$,
  DescribePlacementGroupsCommand,
  DescribePlacementGroupsRequest$,
  DescribePlacementGroupsResult$,
  DescribePrefixLists$,
  DescribePrefixListsCommand,
  DescribePrefixListsRequest$,
  DescribePrefixListsResult$,
  DescribePrincipalIdFormat$,
  DescribePrincipalIdFormatCommand,
  DescribePrincipalIdFormatRequest$,
  DescribePrincipalIdFormatResult$,
  DescribePublicIpv4Pools$,
  DescribePublicIpv4PoolsCommand,
  DescribePublicIpv4PoolsRequest$,
  DescribePublicIpv4PoolsResult$,
  DescribeRegions$,
  DescribeRegionsCommand,
  DescribeRegionsRequest$,
  DescribeRegionsResult$,
  DescribeReplaceRootVolumeTasks$,
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReplaceRootVolumeTasksRequest$,
  DescribeReplaceRootVolumeTasksResult$,
  DescribeReservedInstances$,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesListings$,
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesListingsRequest$,
  DescribeReservedInstancesListingsResult$,
  DescribeReservedInstancesModifications$,
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesModificationsRequest$,
  DescribeReservedInstancesModificationsResult$,
  DescribeReservedInstancesOfferings$,
  DescribeReservedInstancesOfferingsCommand,
  DescribeReservedInstancesOfferingsRequest$,
  DescribeReservedInstancesOfferingsResult$,
  DescribeReservedInstancesRequest$,
  DescribeReservedInstancesResult$,
  DescribeRouteServerEndpoints$,
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerEndpointsRequest$,
  DescribeRouteServerEndpointsResult$,
  DescribeRouteServerPeers$,
  DescribeRouteServerPeersCommand,
  DescribeRouteServerPeersRequest$,
  DescribeRouteServerPeersResult$,
  DescribeRouteServers$,
  DescribeRouteServersCommand,
  DescribeRouteServersRequest$,
  DescribeRouteServersResult$,
  DescribeRouteTables$,
  DescribeRouteTablesCommand,
  DescribeRouteTablesRequest$,
  DescribeRouteTablesResult$,
  DescribeScheduledInstanceAvailability$,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstanceAvailabilityRequest$,
  DescribeScheduledInstanceAvailabilityResult$,
  DescribeScheduledInstances$,
  DescribeScheduledInstancesCommand,
  DescribeScheduledInstancesRequest$,
  DescribeScheduledInstancesResult$,
  DescribeSecurityGroupReferences$,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupReferencesRequest$,
  DescribeSecurityGroupReferencesResult$,
  DescribeSecurityGroupRules$,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupRulesRequest$,
  DescribeSecurityGroupRulesResult$,
  DescribeSecurityGroupVpcAssociations$,
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeSecurityGroupVpcAssociationsRequest$,
  DescribeSecurityGroupVpcAssociationsResult$,
  DescribeSecurityGroups$,
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupsRequest$,
  DescribeSecurityGroupsResult$,
  DescribeServiceLinkVirtualInterfaces$,
  DescribeServiceLinkVirtualInterfacesCommand,
  DescribeServiceLinkVirtualInterfacesRequest$,
  DescribeServiceLinkVirtualInterfacesResult$,
  DescribeSnapshotAttribute$,
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotAttributeRequest$,
  DescribeSnapshotAttributeResult$,
  DescribeSnapshotTierStatus$,
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotTierStatusRequest$,
  DescribeSnapshotTierStatusResult$,
  DescribeSnapshots$,
  DescribeSnapshotsCommand,
  DescribeSnapshotsRequest$,
  DescribeSnapshotsResult$,
  DescribeSpotDatafeedSubscription$,
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotDatafeedSubscriptionRequest$,
  DescribeSpotDatafeedSubscriptionResult$,
  DescribeSpotFleetInstances$,
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetInstancesRequest$,
  DescribeSpotFleetInstancesResponse$,
  DescribeSpotFleetRequestHistory$,
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestHistoryRequest$,
  DescribeSpotFleetRequestHistoryResponse$,
  DescribeSpotFleetRequests$,
  DescribeSpotFleetRequestsCommand,
  DescribeSpotFleetRequestsRequest$,
  DescribeSpotFleetRequestsResponse$,
  DescribeSpotInstanceRequests$,
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotInstanceRequestsRequest$,
  DescribeSpotInstanceRequestsResult$,
  DescribeSpotPriceHistory$,
  DescribeSpotPriceHistoryCommand,
  DescribeSpotPriceHistoryRequest$,
  DescribeSpotPriceHistoryResult$,
  DescribeStaleSecurityGroups$,
  DescribeStaleSecurityGroupsCommand,
  DescribeStaleSecurityGroupsRequest$,
  DescribeStaleSecurityGroupsResult$,
  DescribeStoreImageTasks$,
  DescribeStoreImageTasksCommand,
  DescribeStoreImageTasksRequest$,
  DescribeStoreImageTasksResult$,
  DescribeSubnets$,
  DescribeSubnetsCommand,
  DescribeSubnetsRequest$,
  DescribeSubnetsResult$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsRequest$,
  DescribeTagsResult$,
  DescribeTrafficMirrorFilterRules$,
  DescribeTrafficMirrorFilterRulesCommand,
  DescribeTrafficMirrorFilterRulesRequest$,
  DescribeTrafficMirrorFilterRulesResult$,
  DescribeTrafficMirrorFilters$,
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorFiltersRequest$,
  DescribeTrafficMirrorFiltersResult$,
  DescribeTrafficMirrorSessions$,
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorSessionsRequest$,
  DescribeTrafficMirrorSessionsResult$,
  DescribeTrafficMirrorTargets$,
  DescribeTrafficMirrorTargetsCommand,
  DescribeTrafficMirrorTargetsRequest$,
  DescribeTrafficMirrorTargetsResult$,
  DescribeTransitGatewayAttachments$,
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayAttachmentsRequest$,
  DescribeTransitGatewayAttachmentsResult$,
  DescribeTransitGatewayConnectPeers$,
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectPeersRequest$,
  DescribeTransitGatewayConnectPeersResult$,
  DescribeTransitGatewayConnects$,
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayConnectsRequest$,
  DescribeTransitGatewayConnectsResult$,
  DescribeTransitGatewayMeteringPolicies$,
  DescribeTransitGatewayMeteringPoliciesCommand,
  DescribeTransitGatewayMeteringPoliciesRequest$,
  DescribeTransitGatewayMeteringPoliciesResult$,
  DescribeTransitGatewayMulticastDomains$,
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayMulticastDomainsRequest$,
  DescribeTransitGatewayMulticastDomainsResult$,
  DescribeTransitGatewayPeeringAttachments$,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPeeringAttachmentsRequest$,
  DescribeTransitGatewayPeeringAttachmentsResult$,
  DescribeTransitGatewayPolicyTables$,
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayPolicyTablesRequest$,
  DescribeTransitGatewayPolicyTablesResult$,
  DescribeTransitGatewayRouteTableAnnouncements$,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTableAnnouncementsRequest$,
  DescribeTransitGatewayRouteTableAnnouncementsResult$,
  DescribeTransitGatewayRouteTables$,
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayRouteTablesRequest$,
  DescribeTransitGatewayRouteTablesResult$,
  DescribeTransitGatewayVpcAttachments$,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewayVpcAttachmentsRequest$,
  DescribeTransitGatewayVpcAttachmentsResult$,
  DescribeTransitGateways$,
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewaysRequest$,
  DescribeTransitGatewaysResult$,
  DescribeTrunkInterfaceAssociations$,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeTrunkInterfaceAssociationsRequest$,
  DescribeTrunkInterfaceAssociationsResult$,
  DescribeVerifiedAccessEndpoints$,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessEndpointsRequest$,
  DescribeVerifiedAccessEndpointsResult$,
  DescribeVerifiedAccessGroups$,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessGroupsRequest$,
  DescribeVerifiedAccessGroupsResult$,
  DescribeVerifiedAccessInstanceLoggingConfigurations$,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsRequest$,
  DescribeVerifiedAccessInstanceLoggingConfigurationsResult$,
  DescribeVerifiedAccessInstances$,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessInstancesRequest$,
  DescribeVerifiedAccessInstancesResult$,
  DescribeVerifiedAccessTrustProviders$,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVerifiedAccessTrustProvidersRequest$,
  DescribeVerifiedAccessTrustProvidersResult$,
  DescribeVolumeAttribute$,
  DescribeVolumeAttributeCommand,
  DescribeVolumeAttributeRequest$,
  DescribeVolumeAttributeResult$,
  DescribeVolumeStatus$,
  DescribeVolumeStatusCommand,
  DescribeVolumeStatusRequest$,
  DescribeVolumeStatusResult$,
  DescribeVolumes$,
  DescribeVolumesCommand,
  DescribeVolumesModifications$,
  DescribeVolumesModificationsCommand,
  DescribeVolumesModificationsRequest$,
  DescribeVolumesModificationsResult$,
  DescribeVolumesRequest$,
  DescribeVolumesResult$,
  DescribeVpcAttribute$,
  DescribeVpcAttributeCommand,
  DescribeVpcAttributeRequest$,
  DescribeVpcAttributeResult$,
  DescribeVpcBlockPublicAccessExclusions$,
  DescribeVpcBlockPublicAccessExclusionsCommand,
  DescribeVpcBlockPublicAccessExclusionsRequest$,
  DescribeVpcBlockPublicAccessExclusionsResult$,
  DescribeVpcBlockPublicAccessOptions$,
  DescribeVpcBlockPublicAccessOptionsCommand,
  DescribeVpcBlockPublicAccessOptionsRequest$,
  DescribeVpcBlockPublicAccessOptionsResult$,
  DescribeVpcClassicLink$,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupport$,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcClassicLinkDnsSupportRequest$,
  DescribeVpcClassicLinkDnsSupportResult$,
  DescribeVpcClassicLinkRequest$,
  DescribeVpcClassicLinkResult$,
  DescribeVpcEncryptionControls$,
  DescribeVpcEncryptionControlsCommand,
  DescribeVpcEncryptionControlsRequest$,
  DescribeVpcEncryptionControlsResult$,
  DescribeVpcEndpointAssociations$,
  DescribeVpcEndpointAssociationsCommand,
  DescribeVpcEndpointAssociationsRequest$,
  DescribeVpcEndpointAssociationsResult$,
  DescribeVpcEndpointConnectionNotifications$,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionNotificationsRequest$,
  DescribeVpcEndpointConnectionNotificationsResult$,
  DescribeVpcEndpointConnections$,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointConnectionsRequest$,
  DescribeVpcEndpointConnectionsResult$,
  DescribeVpcEndpointServiceConfigurations$,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServiceConfigurationsRequest$,
  DescribeVpcEndpointServiceConfigurationsResult$,
  DescribeVpcEndpointServicePermissions$,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicePermissionsRequest$,
  DescribeVpcEndpointServicePermissionsResult$,
  DescribeVpcEndpointServices$,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcEndpointServicesRequest$,
  DescribeVpcEndpointServicesResult$,
  DescribeVpcEndpoints$,
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsRequest$,
  DescribeVpcEndpointsResult$,
  DescribeVpcPeeringConnections$,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsRequest$,
  DescribeVpcPeeringConnectionsResult$,
  DescribeVpcs$,
  DescribeVpcsCommand,
  DescribeVpcsRequest$,
  DescribeVpcsResult$,
  DescribeVpnConcentrators$,
  DescribeVpnConcentratorsCommand,
  DescribeVpnConcentratorsRequest$,
  DescribeVpnConcentratorsResult$,
  DescribeVpnConnections$,
  DescribeVpnConnectionsCommand,
  DescribeVpnConnectionsRequest$,
  DescribeVpnConnectionsResult$,
  DescribeVpnGateways$,
  DescribeVpnGatewaysCommand,
  DescribeVpnGatewaysRequest$,
  DescribeVpnGatewaysResult$,
  DestinationFileFormat,
  DestinationOptionsRequest$,
  DestinationOptionsResponse$,
  DetachClassicLinkVpc$,
  DetachClassicLinkVpcCommand,
  DetachClassicLinkVpcRequest$,
  DetachClassicLinkVpcResult$,
  DetachInternetGateway$,
  DetachInternetGatewayCommand,
  DetachInternetGatewayRequest$,
  DetachNetworkInterface$,
  DetachNetworkInterfaceCommand,
  DetachNetworkInterfaceRequest$,
  DetachVerifiedAccessTrustProvider$,
  DetachVerifiedAccessTrustProviderCommand,
  DetachVerifiedAccessTrustProviderRequest$,
  DetachVerifiedAccessTrustProviderResult$,
  DetachVolume$,
  DetachVolumeCommand,
  DetachVolumeRequest$,
  DetachVpnGateway$,
  DetachVpnGatewayCommand,
  DetachVpnGatewayRequest$,
  DeviceOptions$,
  DeviceTrustProviderType,
  DeviceType,
  DhcpConfiguration$,
  DhcpOptions$,
  DimensionCondition$,
  DirectoryServiceAuthentication$,
  DirectoryServiceAuthenticationRequest$,
  DisableAddressTransfer$,
  DisableAddressTransferCommand,
  DisableAddressTransferRequest$,
  DisableAddressTransferResult$,
  DisableAllowedImagesSettings$,
  DisableAllowedImagesSettingsCommand,
  DisableAllowedImagesSettingsRequest$,
  DisableAllowedImagesSettingsResult$,
  DisableAwsNetworkPerformanceMetricSubscription$,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionRequest$,
  DisableAwsNetworkPerformanceMetricSubscriptionResult$,
  DisableCapacityManager$,
  DisableCapacityManagerCommand,
  DisableCapacityManagerRequest$,
  DisableCapacityManagerResult$,
  DisableEbsEncryptionByDefault$,
  DisableEbsEncryptionByDefaultCommand,
  DisableEbsEncryptionByDefaultRequest$,
  DisableEbsEncryptionByDefaultResult$,
  DisableFastLaunch$,
  DisableFastLaunchCommand,
  DisableFastLaunchRequest$,
  DisableFastLaunchResult$,
  DisableFastSnapshotRestoreErrorItem$,
  DisableFastSnapshotRestoreStateError$,
  DisableFastSnapshotRestoreStateErrorItem$,
  DisableFastSnapshotRestoreSuccessItem$,
  DisableFastSnapshotRestores$,
  DisableFastSnapshotRestoresCommand,
  DisableFastSnapshotRestoresRequest$,
  DisableFastSnapshotRestoresResult$,
  DisableImage$,
  DisableImageBlockPublicAccess$,
  DisableImageBlockPublicAccessCommand,
  DisableImageBlockPublicAccessRequest$,
  DisableImageBlockPublicAccessResult$,
  DisableImageCommand,
  DisableImageDeprecation$,
  DisableImageDeprecationCommand,
  DisableImageDeprecationRequest$,
  DisableImageDeprecationResult$,
  DisableImageDeregistrationProtection$,
  DisableImageDeregistrationProtectionCommand,
  DisableImageDeregistrationProtectionRequest$,
  DisableImageDeregistrationProtectionResult$,
  DisableImageRequest$,
  DisableImageResult$,
  DisableInstanceSqlHaStandbyDetections$,
  DisableInstanceSqlHaStandbyDetectionsCommand,
  DisableInstanceSqlHaStandbyDetectionsRequest$,
  DisableInstanceSqlHaStandbyDetectionsResult$,
  DisableIpamOrganizationAdminAccount$,
  DisableIpamOrganizationAdminAccountCommand,
  DisableIpamOrganizationAdminAccountRequest$,
  DisableIpamOrganizationAdminAccountResult$,
  DisableIpamPolicy$,
  DisableIpamPolicyCommand,
  DisableIpamPolicyRequest$,
  DisableIpamPolicyResult$,
  DisableRouteServerPropagation$,
  DisableRouteServerPropagationCommand,
  DisableRouteServerPropagationRequest$,
  DisableRouteServerPropagationResult$,
  DisableSerialConsoleAccess$,
  DisableSerialConsoleAccessCommand,
  DisableSerialConsoleAccessRequest$,
  DisableSerialConsoleAccessResult$,
  DisableSnapshotBlockPublicAccess$,
  DisableSnapshotBlockPublicAccessCommand,
  DisableSnapshotBlockPublicAccessRequest$,
  DisableSnapshotBlockPublicAccessResult$,
  DisableTransitGatewayRouteTablePropagation$,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableTransitGatewayRouteTablePropagationRequest$,
  DisableTransitGatewayRouteTablePropagationResult$,
  DisableVgwRoutePropagation$,
  DisableVgwRoutePropagationCommand,
  DisableVgwRoutePropagationRequest$,
  DisableVpcClassicLink$,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupport$,
  DisableVpcClassicLinkDnsSupportCommand,
  DisableVpcClassicLinkDnsSupportRequest$,
  DisableVpcClassicLinkDnsSupportResult$,
  DisableVpcClassicLinkRequest$,
  DisableVpcClassicLinkResult$,
  DisassociateAddress$,
  DisassociateAddressCommand,
  DisassociateAddressRequest$,
  DisassociateCapacityReservationBillingOwner$,
  DisassociateCapacityReservationBillingOwnerCommand,
  DisassociateCapacityReservationBillingOwnerRequest$,
  DisassociateCapacityReservationBillingOwnerResult$,
  DisassociateClientVpnTargetNetwork$,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateClientVpnTargetNetworkRequest$,
  DisassociateClientVpnTargetNetworkResult$,
  DisassociateEnclaveCertificateIamRole$,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateEnclaveCertificateIamRoleRequest$,
  DisassociateEnclaveCertificateIamRoleResult$,
  DisassociateIamInstanceProfile$,
  DisassociateIamInstanceProfileCommand,
  DisassociateIamInstanceProfileRequest$,
  DisassociateIamInstanceProfileResult$,
  DisassociateInstanceEventWindow$,
  DisassociateInstanceEventWindowCommand,
  DisassociateInstanceEventWindowRequest$,
  DisassociateInstanceEventWindowResult$,
  DisassociateIpamByoasn$,
  DisassociateIpamByoasnCommand,
  DisassociateIpamByoasnRequest$,
  DisassociateIpamByoasnResult$,
  DisassociateIpamResourceDiscovery$,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateIpamResourceDiscoveryRequest$,
  DisassociateIpamResourceDiscoveryResult$,
  DisassociateNatGatewayAddress$,
  DisassociateNatGatewayAddressCommand,
  DisassociateNatGatewayAddressRequest$,
  DisassociateNatGatewayAddressResult$,
  DisassociateRouteServer$,
  DisassociateRouteServerCommand,
  DisassociateRouteServerRequest$,
  DisassociateRouteServerResult$,
  DisassociateRouteTable$,
  DisassociateRouteTableCommand,
  DisassociateRouteTableRequest$,
  DisassociateSecurityGroupVpc$,
  DisassociateSecurityGroupVpcCommand,
  DisassociateSecurityGroupVpcRequest$,
  DisassociateSecurityGroupVpcResult$,
  DisassociateSubnetCidrBlock$,
  DisassociateSubnetCidrBlockCommand,
  DisassociateSubnetCidrBlockRequest$,
  DisassociateSubnetCidrBlockResult$,
  DisassociateTransitGatewayMulticastDomain$,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayMulticastDomainRequest$,
  DisassociateTransitGatewayMulticastDomainResult$,
  DisassociateTransitGatewayPolicyTable$,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayPolicyTableRequest$,
  DisassociateTransitGatewayPolicyTableResult$,
  DisassociateTransitGatewayRouteTable$,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTransitGatewayRouteTableRequest$,
  DisassociateTransitGatewayRouteTableResult$,
  DisassociateTrunkInterface$,
  DisassociateTrunkInterfaceCommand,
  DisassociateTrunkInterfaceRequest$,
  DisassociateTrunkInterfaceResult$,
  DisassociateVpcCidrBlock$,
  DisassociateVpcCidrBlockCommand,
  DisassociateVpcCidrBlockRequest$,
  DisassociateVpcCidrBlockResult$,
  DiskImage$,
  DiskImageDescription$,
  DiskImageDetail$,
  DiskImageFormat,
  DiskImageVolumeDescription$,
  DiskInfo$,
  DiskType,
  DnsEntry$,
  DnsNameState,
  DnsOptions$,
  DnsOptionsSpecification$,
  DnsRecordIpType,
  DnsServersOptionsModifyStructure$,
  DnsSupportValue,
  DomainType,
  DynamicRoutingValue,
  EC2,
  EC2Client,
  EC2ServiceException,
  EbsBlockDevice$,
  EbsBlockDeviceResponse$,
  EbsEncryptionSupport,
  EbsInfo$,
  EbsInstanceBlockDevice$,
  EbsInstanceBlockDeviceSpecification$,
  EbsNvmeSupport,
  EbsOptimizedInfo$,
  EbsOptimizedSupport,
  EbsStatusDetails$,
  EbsStatusSummary$,
  Ec2InstanceConnectEndpoint$,
  Ec2InstanceConnectEndpointState,
  EfaInfo$,
  EgressOnlyInternetGateway$,
  EkPubKeyFormat,
  EkPubKeyType,
  ElasticGpuAssociation$,
  ElasticGpuHealth$,
  ElasticGpuSpecification$,
  ElasticGpuSpecificationResponse$,
  ElasticGpuState,
  ElasticGpuStatus,
  ElasticGpus$,
  ElasticInferenceAccelerator$,
  ElasticInferenceAcceleratorAssociation$,
  EnaSrdSpecification$,
  EnaSrdSpecificationRequest$,
  EnaSrdUdpSpecification$,
  EnaSrdUdpSpecificationRequest$,
  EnaSupport,
  EnableAddressTransfer$,
  EnableAddressTransferCommand,
  EnableAddressTransferRequest$,
  EnableAddressTransferResult$,
  EnableAllowedImagesSettings$,
  EnableAllowedImagesSettingsCommand,
  EnableAllowedImagesSettingsRequest$,
  EnableAllowedImagesSettingsResult$,
  EnableAwsNetworkPerformanceMetricSubscription$,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionRequest$,
  EnableAwsNetworkPerformanceMetricSubscriptionResult$,
  EnableCapacityManager$,
  EnableCapacityManagerCommand,
  EnableCapacityManagerRequest$,
  EnableCapacityManagerResult$,
  EnableEbsEncryptionByDefault$,
  EnableEbsEncryptionByDefaultCommand,
  EnableEbsEncryptionByDefaultRequest$,
  EnableEbsEncryptionByDefaultResult$,
  EnableFastLaunch$,
  EnableFastLaunchCommand,
  EnableFastLaunchRequest$,
  EnableFastLaunchResult$,
  EnableFastSnapshotRestoreErrorItem$,
  EnableFastSnapshotRestoreStateError$,
  EnableFastSnapshotRestoreStateErrorItem$,
  EnableFastSnapshotRestoreSuccessItem$,
  EnableFastSnapshotRestores$,
  EnableFastSnapshotRestoresCommand,
  EnableFastSnapshotRestoresRequest$,
  EnableFastSnapshotRestoresResult$,
  EnableImage$,
  EnableImageBlockPublicAccess$,
  EnableImageBlockPublicAccessCommand,
  EnableImageBlockPublicAccessRequest$,
  EnableImageBlockPublicAccessResult$,
  EnableImageCommand,
  EnableImageDeprecation$,
  EnableImageDeprecationCommand,
  EnableImageDeprecationRequest$,
  EnableImageDeprecationResult$,
  EnableImageDeregistrationProtection$,
  EnableImageDeregistrationProtectionCommand,
  EnableImageDeregistrationProtectionRequest$,
  EnableImageDeregistrationProtectionResult$,
  EnableImageRequest$,
  EnableImageResult$,
  EnableInstanceSqlHaStandbyDetections$,
  EnableInstanceSqlHaStandbyDetectionsCommand,
  EnableInstanceSqlHaStandbyDetectionsRequest$,
  EnableInstanceSqlHaStandbyDetectionsResult$,
  EnableIpamOrganizationAdminAccount$,
  EnableIpamOrganizationAdminAccountCommand,
  EnableIpamOrganizationAdminAccountRequest$,
  EnableIpamOrganizationAdminAccountResult$,
  EnableIpamPolicy$,
  EnableIpamPolicyCommand,
  EnableIpamPolicyRequest$,
  EnableIpamPolicyResult$,
  EnableReachabilityAnalyzerOrganizationSharing$,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableReachabilityAnalyzerOrganizationSharingRequest$,
  EnableReachabilityAnalyzerOrganizationSharingResult$,
  EnableRouteServerPropagation$,
  EnableRouteServerPropagationCommand,
  EnableRouteServerPropagationRequest$,
  EnableRouteServerPropagationResult$,
  EnableSerialConsoleAccess$,
  EnableSerialConsoleAccessCommand,
  EnableSerialConsoleAccessRequest$,
  EnableSerialConsoleAccessResult$,
  EnableSnapshotBlockPublicAccess$,
  EnableSnapshotBlockPublicAccessCommand,
  EnableSnapshotBlockPublicAccessRequest$,
  EnableSnapshotBlockPublicAccessResult$,
  EnableTransitGatewayRouteTablePropagation$,
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableTransitGatewayRouteTablePropagationRequest$,
  EnableTransitGatewayRouteTablePropagationResult$,
  EnableVgwRoutePropagation$,
  EnableVgwRoutePropagationCommand,
  EnableVgwRoutePropagationRequest$,
  EnableVolumeIO$,
  EnableVolumeIOCommand,
  EnableVolumeIORequest$,
  EnableVpcClassicLink$,
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkDnsSupport$,
  EnableVpcClassicLinkDnsSupportCommand,
  EnableVpcClassicLinkDnsSupportRequest$,
  EnableVpcClassicLinkDnsSupportResult$,
  EnableVpcClassicLinkRequest$,
  EnableVpcClassicLinkResult$,
  EnclaveOptions$,
  EnclaveOptionsRequest$,
  EncryptionStateValue,
  EncryptionSupport$,
  EncryptionSupportOptionValue,
  EndDateType,
  EndpointIpAddressType,
  EphemeralNvmeSupport,
  EventCode,
  EventInformation$,
  EventType,
  ExcessCapacityTerminationPolicy,
  Explanation$,
  ExportClientVpnClientCertificateRevocationList$,
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientCertificateRevocationListRequest$,
  ExportClientVpnClientCertificateRevocationListResult$,
  ExportClientVpnClientConfiguration$,
  ExportClientVpnClientConfigurationCommand,
  ExportClientVpnClientConfigurationRequest$,
  ExportClientVpnClientConfigurationResult$,
  ExportEnvironment,
  ExportImage$,
  ExportImageCommand,
  ExportImageRequest$,
  ExportImageResult$,
  ExportImageTask$,
  ExportTask$,
  ExportTaskS3Location$,
  ExportTaskS3LocationRequest$,
  ExportTaskState,
  ExportToS3Task$,
  ExportToS3TaskSpecification$,
  ExportTransitGatewayRoutes$,
  ExportTransitGatewayRoutesCommand,
  ExportTransitGatewayRoutesRequest$,
  ExportTransitGatewayRoutesResult$,
  ExportVerifiedAccessInstanceClientConfiguration$,
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  ExportVerifiedAccessInstanceClientConfigurationRequest$,
  ExportVerifiedAccessInstanceClientConfigurationResult$,
  ExternalAuthorityConfiguration$,
  FailedCapacityReservationFleetCancellationResult$,
  FailedQueuedPurchaseDeletion$,
  FastLaunchLaunchTemplateSpecificationRequest$,
  FastLaunchLaunchTemplateSpecificationResponse$,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationRequest$,
  FastLaunchSnapshotConfigurationResponse$,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FederatedAuthentication$,
  FederatedAuthenticationRequest$,
  Filter$,
  FilterByDimension,
  FilterPortRange$,
  FindingsFound,
  FirewallStatefulRule$,
  FirewallStatelessRule$,
  FleetActivityStatus,
  FleetBlockDeviceMappingRequest$,
  FleetCapacityReservation$,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetData$,
  FleetEbsBlockDeviceRequest$,
  FleetEventType,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetLaunchTemplateConfig$,
  FleetLaunchTemplateConfigRequest$,
  FleetLaunchTemplateOverrides$,
  FleetLaunchTemplateOverridesRequest$,
  FleetLaunchTemplateSpecification$,
  FleetLaunchTemplateSpecificationRequest$,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetSpotCapacityRebalance$,
  FleetSpotCapacityRebalanceRequest$,
  FleetSpotMaintenanceStrategies$,
  FleetSpotMaintenanceStrategiesRequest$,
  FleetStateCode,
  FleetType,
  FlexibleEnaQueuesSupport,
  FlowLog$,
  FlowLogsResourceType,
  FpgaDeviceInfo$,
  FpgaDeviceMemoryInfo$,
  FpgaImage$,
  FpgaImageAttribute$,
  FpgaImageAttributeName,
  FpgaImageState$,
  FpgaImageStateCode,
  FpgaInfo$,
  GatewayAssociationState,
  GatewayType,
  GetActiveVpnTunnelStatus$,
  GetActiveVpnTunnelStatusCommand,
  GetActiveVpnTunnelStatusRequest$,
  GetActiveVpnTunnelStatusResult$,
  GetAllowedImagesSettings$,
  GetAllowedImagesSettingsCommand,
  GetAllowedImagesSettingsRequest$,
  GetAllowedImagesSettingsResult$,
  GetAssociatedEnclaveCertificateIamRoles$,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedEnclaveCertificateIamRolesRequest$,
  GetAssociatedEnclaveCertificateIamRolesResult$,
  GetAssociatedIpv6PoolCidrs$,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAssociatedIpv6PoolCidrsRequest$,
  GetAssociatedIpv6PoolCidrsResult$,
  GetAwsNetworkPerformanceData$,
  GetAwsNetworkPerformanceDataCommand,
  GetAwsNetworkPerformanceDataRequest$,
  GetAwsNetworkPerformanceDataResult$,
  GetCapacityManagerAttributes$,
  GetCapacityManagerAttributesCommand,
  GetCapacityManagerAttributesRequest$,
  GetCapacityManagerAttributesResult$,
  GetCapacityManagerMetricData$,
  GetCapacityManagerMetricDataCommand,
  GetCapacityManagerMetricDataRequest$,
  GetCapacityManagerMetricDataResult$,
  GetCapacityManagerMetricDimensions$,
  GetCapacityManagerMetricDimensionsCommand,
  GetCapacityManagerMetricDimensionsRequest$,
  GetCapacityManagerMetricDimensionsResult$,
  GetCapacityReservationUsage$,
  GetCapacityReservationUsageCommand,
  GetCapacityReservationUsageRequest$,
  GetCapacityReservationUsageResult$,
  GetCoipPoolUsage$,
  GetCoipPoolUsageCommand,
  GetCoipPoolUsageRequest$,
  GetCoipPoolUsageResult$,
  GetConsoleOutput$,
  GetConsoleOutputCommand,
  GetConsoleOutputRequest$,
  GetConsoleOutputResult$,
  GetConsoleScreenshot$,
  GetConsoleScreenshotCommand,
  GetConsoleScreenshotRequest$,
  GetConsoleScreenshotResult$,
  GetDeclarativePoliciesReportSummary$,
  GetDeclarativePoliciesReportSummaryCommand,
  GetDeclarativePoliciesReportSummaryRequest$,
  GetDeclarativePoliciesReportSummaryResult$,
  GetDefaultCreditSpecification$,
  GetDefaultCreditSpecificationCommand,
  GetDefaultCreditSpecificationRequest$,
  GetDefaultCreditSpecificationResult$,
  GetEbsDefaultKmsKeyId$,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsDefaultKmsKeyIdRequest$,
  GetEbsDefaultKmsKeyIdResult$,
  GetEbsEncryptionByDefault$,
  GetEbsEncryptionByDefaultCommand,
  GetEbsEncryptionByDefaultRequest$,
  GetEbsEncryptionByDefaultResult$,
  GetEnabledIpamPolicy$,
  GetEnabledIpamPolicyCommand,
  GetEnabledIpamPolicyRequest$,
  GetEnabledIpamPolicyResult$,
  GetFlowLogsIntegrationTemplate$,
  GetFlowLogsIntegrationTemplateCommand,
  GetFlowLogsIntegrationTemplateRequest$,
  GetFlowLogsIntegrationTemplateResult$,
  GetGroupsForCapacityReservation$,
  GetGroupsForCapacityReservationCommand,
  GetGroupsForCapacityReservationRequest$,
  GetGroupsForCapacityReservationResult$,
  GetHostReservationPurchasePreview$,
  GetHostReservationPurchasePreviewCommand,
  GetHostReservationPurchasePreviewRequest$,
  GetHostReservationPurchasePreviewResult$,
  GetImageAncestry$,
  GetImageAncestryCommand,
  GetImageAncestryRequest$,
  GetImageAncestryResult$,
  GetImageBlockPublicAccessState$,
  GetImageBlockPublicAccessStateCommand,
  GetImageBlockPublicAccessStateRequest$,
  GetImageBlockPublicAccessStateResult$,
  GetInstanceMetadataDefaults$,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceMetadataDefaultsRequest$,
  GetInstanceMetadataDefaultsResult$,
  GetInstanceTpmEkPub$,
  GetInstanceTpmEkPubCommand,
  GetInstanceTpmEkPubRequest$,
  GetInstanceTpmEkPubResult$,
  GetInstanceTypesFromInstanceRequirements$,
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceTypesFromInstanceRequirementsRequest$,
  GetInstanceTypesFromInstanceRequirementsResult$,
  GetInstanceUefiData$,
  GetInstanceUefiDataCommand,
  GetInstanceUefiDataRequest$,
  GetInstanceUefiDataResult$,
  GetIpamAddressHistory$,
  GetIpamAddressHistoryCommand,
  GetIpamAddressHistoryRequest$,
  GetIpamAddressHistoryResult$,
  GetIpamDiscoveredAccounts$,
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredAccountsRequest$,
  GetIpamDiscoveredAccountsResult$,
  GetIpamDiscoveredPublicAddresses$,
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredPublicAddressesRequest$,
  GetIpamDiscoveredPublicAddressesResult$,
  GetIpamDiscoveredResourceCidrs$,
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamDiscoveredResourceCidrsRequest$,
  GetIpamDiscoveredResourceCidrsResult$,
  GetIpamPolicyAllocationRules$,
  GetIpamPolicyAllocationRulesCommand,
  GetIpamPolicyAllocationRulesRequest$,
  GetIpamPolicyAllocationRulesResult$,
  GetIpamPolicyOrganizationTargets$,
  GetIpamPolicyOrganizationTargetsCommand,
  GetIpamPolicyOrganizationTargetsRequest$,
  GetIpamPolicyOrganizationTargetsResult$,
  GetIpamPoolAllocations$,
  GetIpamPoolAllocationsCommand,
  GetIpamPoolAllocationsRequest$,
  GetIpamPoolAllocationsResult$,
  GetIpamPoolCidrs$,
  GetIpamPoolCidrsCommand,
  GetIpamPoolCidrsRequest$,
  GetIpamPoolCidrsResult$,
  GetIpamPrefixListResolverRules$,
  GetIpamPrefixListResolverRulesCommand,
  GetIpamPrefixListResolverRulesRequest$,
  GetIpamPrefixListResolverRulesResult$,
  GetIpamPrefixListResolverVersionEntries$,
  GetIpamPrefixListResolverVersionEntriesCommand,
  GetIpamPrefixListResolverVersionEntriesRequest$,
  GetIpamPrefixListResolverVersionEntriesResult$,
  GetIpamPrefixListResolverVersions$,
  GetIpamPrefixListResolverVersionsCommand,
  GetIpamPrefixListResolverVersionsRequest$,
  GetIpamPrefixListResolverVersionsResult$,
  GetIpamResourceCidrs$,
  GetIpamResourceCidrsCommand,
  GetIpamResourceCidrsRequest$,
  GetIpamResourceCidrsResult$,
  GetLaunchTemplateData$,
  GetLaunchTemplateDataCommand,
  GetLaunchTemplateDataRequest$,
  GetLaunchTemplateDataResult$,
  GetManagedPrefixListAssociations$,
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListAssociationsRequest$,
  GetManagedPrefixListAssociationsResult$,
  GetManagedPrefixListEntries$,
  GetManagedPrefixListEntriesCommand,
  GetManagedPrefixListEntriesRequest$,
  GetManagedPrefixListEntriesResult$,
  GetNetworkInsightsAccessScopeAnalysisFindings$,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsRequest$,
  GetNetworkInsightsAccessScopeAnalysisFindingsResult$,
  GetNetworkInsightsAccessScopeContent$,
  GetNetworkInsightsAccessScopeContentCommand,
  GetNetworkInsightsAccessScopeContentRequest$,
  GetNetworkInsightsAccessScopeContentResult$,
  GetPasswordData$,
  GetPasswordDataCommand,
  GetPasswordDataRequest$,
  GetPasswordDataResult$,
  GetReservedInstancesExchangeQuote$,
  GetReservedInstancesExchangeQuoteCommand,
  GetReservedInstancesExchangeQuoteRequest$,
  GetReservedInstancesExchangeQuoteResult$,
  GetRouteServerAssociations$,
  GetRouteServerAssociationsCommand,
  GetRouteServerAssociationsRequest$,
  GetRouteServerAssociationsResult$,
  GetRouteServerPropagations$,
  GetRouteServerPropagationsCommand,
  GetRouteServerPropagationsRequest$,
  GetRouteServerPropagationsResult$,
  GetRouteServerRoutingDatabase$,
  GetRouteServerRoutingDatabaseCommand,
  GetRouteServerRoutingDatabaseRequest$,
  GetRouteServerRoutingDatabaseResult$,
  GetSecurityGroupsForVpc$,
  GetSecurityGroupsForVpcCommand,
  GetSecurityGroupsForVpcRequest$,
  GetSecurityGroupsForVpcResult$,
  GetSerialConsoleAccessStatus$,
  GetSerialConsoleAccessStatusCommand,
  GetSerialConsoleAccessStatusRequest$,
  GetSerialConsoleAccessStatusResult$,
  GetSnapshotBlockPublicAccessState$,
  GetSnapshotBlockPublicAccessStateCommand,
  GetSnapshotBlockPublicAccessStateRequest$,
  GetSnapshotBlockPublicAccessStateResult$,
  GetSpotPlacementScores$,
  GetSpotPlacementScoresCommand,
  GetSpotPlacementScoresRequest$,
  GetSpotPlacementScoresResult$,
  GetSubnetCidrReservations$,
  GetSubnetCidrReservationsCommand,
  GetSubnetCidrReservationsRequest$,
  GetSubnetCidrReservationsResult$,
  GetTransitGatewayAttachmentPropagations$,
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayAttachmentPropagationsRequest$,
  GetTransitGatewayAttachmentPropagationsResult$,
  GetTransitGatewayMeteringPolicyEntries$,
  GetTransitGatewayMeteringPolicyEntriesCommand,
  GetTransitGatewayMeteringPolicyEntriesRequest$,
  GetTransitGatewayMeteringPolicyEntriesResult$,
  GetTransitGatewayMulticastDomainAssociations$,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayMulticastDomainAssociationsRequest$,
  GetTransitGatewayMulticastDomainAssociationsResult$,
  GetTransitGatewayPolicyTableAssociations$,
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsRequest$,
  GetTransitGatewayPolicyTableAssociationsResult$,
  GetTransitGatewayPolicyTableEntries$,
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPolicyTableEntriesRequest$,
  GetTransitGatewayPolicyTableEntriesResult$,
  GetTransitGatewayPrefixListReferences$,
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayPrefixListReferencesRequest$,
  GetTransitGatewayPrefixListReferencesResult$,
  GetTransitGatewayRouteTableAssociations$,
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTableAssociationsRequest$,
  GetTransitGatewayRouteTableAssociationsResult$,
  GetTransitGatewayRouteTablePropagations$,
  GetTransitGatewayRouteTablePropagationsCommand,
  GetTransitGatewayRouteTablePropagationsRequest$,
  GetTransitGatewayRouteTablePropagationsResult$,
  GetVerifiedAccessEndpointPolicy$,
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessEndpointPolicyRequest$,
  GetVerifiedAccessEndpointPolicyResult$,
  GetVerifiedAccessEndpointTargets$,
  GetVerifiedAccessEndpointTargetsCommand,
  GetVerifiedAccessEndpointTargetsRequest$,
  GetVerifiedAccessEndpointTargetsResult$,
  GetVerifiedAccessGroupPolicy$,
  GetVerifiedAccessGroupPolicyCommand,
  GetVerifiedAccessGroupPolicyRequest$,
  GetVerifiedAccessGroupPolicyResult$,
  GetVpcResourcesBlockingEncryptionEnforcement$,
  GetVpcResourcesBlockingEncryptionEnforcementCommand,
  GetVpcResourcesBlockingEncryptionEnforcementRequest$,
  GetVpcResourcesBlockingEncryptionEnforcementResult$,
  GetVpnConnectionDeviceSampleConfiguration$,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceSampleConfigurationRequest$,
  GetVpnConnectionDeviceSampleConfigurationResult$,
  GetVpnConnectionDeviceTypes$,
  GetVpnConnectionDeviceTypesCommand,
  GetVpnConnectionDeviceTypesRequest$,
  GetVpnConnectionDeviceTypesResult$,
  GetVpnTunnelReplacementStatus$,
  GetVpnTunnelReplacementStatusCommand,
  GetVpnTunnelReplacementStatusRequest$,
  GetVpnTunnelReplacementStatusResult$,
  GpuDeviceInfo$,
  GpuDeviceMemoryInfo$,
  GpuInfo$,
  GroupBy,
  GroupIdentifier$,
  HaStatus,
  HibernationOptions$,
  HibernationOptionsRequest$,
  HistoryRecord$,
  HistoryRecordEntry$,
  Host$,
  HostInstance$,
  HostMaintenance,
  HostOffering$,
  HostProperties$,
  HostRecovery,
  HostReservation$,
  HostTenancy,
  HostnameType,
  HttpTokensState,
  HypervisorType,
  IKEVersionsListValue$,
  IKEVersionsRequestListValue$,
  IamInstanceProfile$,
  IamInstanceProfileAssociation$,
  IamInstanceProfileAssociationState,
  IamInstanceProfileSpecification$,
  IcmpTypeCode$,
  IdFormat$,
  Igmpv2SupportValue,
  Image$,
  ImageAncestryEntry$,
  ImageAttribute$,
  ImageAttributeName,
  ImageBlockPublicAccessDisabledState,
  ImageBlockPublicAccessEnabledState,
  ImageCriterion$,
  ImageCriterionRequest$,
  ImageDiskContainer$,
  ImageMetadata$,
  ImageRecycleBinInfo$,
  ImageReference$,
  ImageReferenceOptionName,
  ImageReferenceResourceType,
  ImageState,
  ImageTypeValues,
  ImageUsageReport$,
  ImageUsageReportEntry$,
  ImageUsageResourceType$,
  ImageUsageResourceTypeOption$,
  ImageUsageResourceTypeOptionRequest$,
  ImageUsageResourceTypeRequest$,
  ImdsSupportValues,
  ImportClientVpnClientCertificateRevocationList$,
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportClientVpnClientCertificateRevocationListRequest$,
  ImportClientVpnClientCertificateRevocationListResult$,
  ImportImage$,
  ImportImageCommand,
  ImportImageLicenseConfigurationRequest$,
  ImportImageLicenseConfigurationResponse$,
  ImportImageRequest$,
  ImportImageResult$,
  ImportImageTask$,
  ImportInstance$,
  ImportInstanceCommand,
  ImportInstanceLaunchSpecification$,
  ImportInstanceRequest$,
  ImportInstanceResult$,
  ImportInstanceTaskDetails$,
  ImportInstanceVolumeDetailItem$,
  ImportKeyPair$,
  ImportKeyPairCommand,
  ImportKeyPairRequest$,
  ImportKeyPairResult$,
  ImportSnapshot$,
  ImportSnapshotCommand,
  ImportSnapshotRequest$,
  ImportSnapshotResult$,
  ImportSnapshotTask$,
  ImportVolume$,
  ImportVolumeCommand,
  ImportVolumeRequest$,
  ImportVolumeResult$,
  ImportVolumeTaskDetails$,
  InferenceAcceleratorInfo$,
  InferenceDeviceInfo$,
  InferenceDeviceMemoryInfo$,
  IngestionStatus,
  InitializationStatusDetails$,
  InitializationType,
  Instance$,
  InstanceAttachmentEnaSrdSpecification$,
  InstanceAttachmentEnaSrdUdpSpecification$,
  InstanceAttribute$,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceBandwidthWeighting,
  InstanceBlockDeviceMapping$,
  InstanceBlockDeviceMappingSpecification$,
  InstanceBootModeValues,
  InstanceCapacity$,
  InstanceConnectEndpointDnsNames$,
  InstanceConnectEndpointPublicDnsNames$,
  InstanceCount$,
  InstanceCreditSpecification$,
  InstanceCreditSpecificationRequest$,
  InstanceEventWindow$,
  InstanceEventWindowAssociationRequest$,
  InstanceEventWindowAssociationTarget$,
  InstanceEventWindowDisassociationRequest$,
  InstanceEventWindowState,
  InstanceEventWindowStateChange$,
  InstanceEventWindowTimeRange$,
  InstanceEventWindowTimeRangeRequest$,
  InstanceExportDetails$,
  InstanceFamilyCreditSpecification$,
  InstanceGeneration,
  InstanceHealthStatus,
  InstanceImageMetadata$,
  InstanceInterruptionBehavior,
  InstanceIpv4Prefix$,
  InstanceIpv6Address$,
  InstanceIpv6AddressRequest$,
  InstanceIpv6Prefix$,
  InstanceLifecycle,
  InstanceLifecycleType,
  InstanceMaintenanceOptions$,
  InstanceMaintenanceOptionsRequest$,
  InstanceMarketOptionsRequest$,
  InstanceMatchCriteria,
  InstanceMetadataDefaultsResponse$,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsRequest$,
  InstanceMetadataOptionsResponse$,
  InstanceMetadataOptionsState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceMonitoring$,
  InstanceNetworkInterface$,
  InstanceNetworkInterfaceAssociation$,
  InstanceNetworkInterfaceAttachment$,
  InstanceNetworkInterfaceSpecification$,
  InstanceNetworkPerformanceOptions$,
  InstanceNetworkPerformanceOptionsRequest$,
  InstancePrivateIpAddress$,
  InstanceRebootMigrationState,
  InstanceRequirements$,
  InstanceRequirementsRequest$,
  InstanceRequirementsWithMetadataRequest$,
  InstanceSpecification$,
  InstanceState$,
  InstanceStateChange$,
  InstanceStateName,
  InstanceStatus$,
  InstanceStatusDetails$,
  InstanceStatusEvent$,
  InstanceStatusSummary$,
  InstanceStorageEncryptionSupport,
  InstanceStorageInfo$,
  InstanceTagNotificationAttribute$,
  InstanceTopology$,
  InstanceTypeHypervisor,
  InstanceTypeInfo$,
  InstanceTypeInfoFromInstanceRequirements$,
  InstanceTypeOffering$,
  InstanceUsage$,
  IntegrateServices$,
  InterfacePermissionType,
  InterfaceProtocolType,
  InternetGateway$,
  InternetGatewayAttachment$,
  InternetGatewayBlockMode,
  InternetGatewayExclusionMode,
  InterruptibleCapacityAllocation$,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionInfo$,
  InterruptionType,
  IpAddressType,
  IpPermission$,
  IpRange$,
  IpSource,
  Ipam$,
  IpamAddressHistoryRecord$,
  IpamAddressHistoryResourceType,
  IpamAssociatedResourceDiscoveryStatus,
  IpamCidrAuthorizationContext$,
  IpamComplianceStatus,
  IpamDiscoveredAccount$,
  IpamDiscoveredPublicAddress$,
  IpamDiscoveredResourceCidr$,
  IpamDiscoveryFailureCode,
  IpamDiscoveryFailureReason$,
  IpamExternalResourceVerificationToken$,
  IpamExternalResourceVerificationTokenState,
  IpamManagementState,
  IpamMeteredAccount,
  IpamNetworkInterfaceAttachmentStatus,
  IpamOperatingRegion$,
  IpamOrganizationalUnitExclusion$,
  IpamOverlapStatus,
  IpamPolicy$,
  IpamPolicyAllocationRule$,
  IpamPolicyAllocationRuleRequest$,
  IpamPolicyDocument$,
  IpamPolicyManagedBy,
  IpamPolicyOrganizationTarget$,
  IpamPolicyResourceType,
  IpamPolicyState,
  IpamPool$,
  IpamPoolAllocation$,
  IpamPoolAllocationResourceType,
  IpamPoolAwsService,
  IpamPoolCidr$,
  IpamPoolCidrFailureCode,
  IpamPoolCidrFailureReason$,
  IpamPoolCidrState,
  IpamPoolPublicIpSource,
  IpamPoolSourceResource$,
  IpamPoolSourceResourceRequest$,
  IpamPoolSourceResourceType,
  IpamPoolState,
  IpamPrefixListResolver$,
  IpamPrefixListResolverRule$,
  IpamPrefixListResolverRuleCondition$,
  IpamPrefixListResolverRuleConditionOperation,
  IpamPrefixListResolverRuleConditionRequest$,
  IpamPrefixListResolverRuleRequest$,
  IpamPrefixListResolverRuleType,
  IpamPrefixListResolverState,
  IpamPrefixListResolverTarget$,
  IpamPrefixListResolverTargetState,
  IpamPrefixListResolverVersion$,
  IpamPrefixListResolverVersionCreationStatus,
  IpamPrefixListResolverVersionEntry$,
  IpamPublicAddressAssociationStatus,
  IpamPublicAddressAwsService,
  IpamPublicAddressSecurityGroup$,
  IpamPublicAddressTag$,
  IpamPublicAddressTags$,
  IpamPublicAddressType,
  IpamResourceCidr$,
  IpamResourceCidrIpSource,
  IpamResourceDiscovery$,
  IpamResourceDiscoveryAssociation$,
  IpamResourceDiscoveryAssociationState,
  IpamResourceDiscoveryState,
  IpamResourceTag$,
  IpamResourceType,
  IpamScope$,
  IpamScopeExternalAuthorityConfiguration$,
  IpamScopeExternalAuthorityType,
  IpamScopeState,
  IpamScopeType,
  IpamState,
  IpamTier,
  Ipv4PrefixSpecification$,
  Ipv4PrefixSpecificationRequest$,
  Ipv4PrefixSpecificationResponse$,
  Ipv6AddressAttribute,
  Ipv6CidrAssociation$,
  Ipv6CidrBlock$,
  Ipv6Pool$,
  Ipv6PrefixSpecification$,
  Ipv6PrefixSpecificationRequest$,
  Ipv6PrefixSpecificationResponse$,
  Ipv6Range$,
  Ipv6SupportValue,
  KeyFormat,
  KeyPair$,
  KeyPairInfo$,
  KeyType,
  LastError$,
  LaunchPermission$,
  LaunchPermissionModifications$,
  LaunchSpecification$,
  LaunchTemplate$,
  LaunchTemplateAndOverridesResponse$,
  LaunchTemplateAutoRecoveryState,
  LaunchTemplateBlockDeviceMapping$,
  LaunchTemplateBlockDeviceMappingRequest$,
  LaunchTemplateCapacityReservationSpecificationRequest$,
  LaunchTemplateCapacityReservationSpecificationResponse$,
  LaunchTemplateConfig$,
  LaunchTemplateCpuOptions$,
  LaunchTemplateCpuOptionsRequest$,
  LaunchTemplateEbsBlockDevice$,
  LaunchTemplateEbsBlockDeviceRequest$,
  LaunchTemplateElasticInferenceAccelerator$,
  LaunchTemplateElasticInferenceAcceleratorResponse$,
  LaunchTemplateEnaSrdSpecification$,
  LaunchTemplateEnaSrdUdpSpecification$,
  LaunchTemplateEnclaveOptions$,
  LaunchTemplateEnclaveOptionsRequest$,
  LaunchTemplateErrorCode,
  LaunchTemplateHibernationOptions$,
  LaunchTemplateHibernationOptionsRequest$,
  LaunchTemplateHttpTokensState,
  LaunchTemplateIamInstanceProfileSpecification$,
  LaunchTemplateIamInstanceProfileSpecificationRequest$,
  LaunchTemplateInstanceMaintenanceOptions$,
  LaunchTemplateInstanceMaintenanceOptionsRequest$,
  LaunchTemplateInstanceMarketOptions$,
  LaunchTemplateInstanceMarketOptionsRequest$,
  LaunchTemplateInstanceMetadataEndpointState,
  LaunchTemplateInstanceMetadataOptions$,
  LaunchTemplateInstanceMetadataOptionsRequest$,
  LaunchTemplateInstanceMetadataOptionsState,
  LaunchTemplateInstanceMetadataProtocolIpv6,
  LaunchTemplateInstanceMetadataTagsState,
  LaunchTemplateInstanceNetworkInterfaceSpecification$,
  LaunchTemplateInstanceNetworkInterfaceSpecificationRequest$,
  LaunchTemplateLicenseConfiguration$,
  LaunchTemplateLicenseConfigurationRequest$,
  LaunchTemplateNetworkPerformanceOptions$,
  LaunchTemplateNetworkPerformanceOptionsRequest$,
  LaunchTemplateOverrides$,
  LaunchTemplatePlacement$,
  LaunchTemplatePlacementRequest$,
  LaunchTemplatePrivateDnsNameOptions$,
  LaunchTemplatePrivateDnsNameOptionsRequest$,
  LaunchTemplateSpecification$,
  LaunchTemplateSpotMarketOptions$,
  LaunchTemplateSpotMarketOptionsRequest$,
  LaunchTemplateTagSpecification$,
  LaunchTemplateTagSpecificationRequest$,
  LaunchTemplateVersion$,
  LaunchTemplatesMonitoring$,
  LaunchTemplatesMonitoringRequest$,
  LicenseConfiguration$,
  LicenseConfigurationRequest$,
  ListImagesInRecycleBin$,
  ListImagesInRecycleBinCommand,
  ListImagesInRecycleBinRequest$,
  ListImagesInRecycleBinResult$,
  ListSnapshotsInRecycleBin$,
  ListSnapshotsInRecycleBinCommand,
  ListSnapshotsInRecycleBinRequest$,
  ListSnapshotsInRecycleBinResult$,
  ListVolumesInRecycleBin$,
  ListVolumesInRecycleBinCommand,
  ListVolumesInRecycleBinRequest$,
  ListVolumesInRecycleBinResult$,
  ListingState,
  ListingStatus,
  LoadBalancersConfig$,
  LoadPermission$,
  LoadPermissionModifications$,
  LoadPermissionRequest$,
  LocalGateway$,
  LocalGatewayRoute$,
  LocalGatewayRouteState,
  LocalGatewayRouteTable$,
  LocalGatewayRouteTableMode,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation$,
  LocalGatewayRouteTableVpcAssociation$,
  LocalGatewayRouteType,
  LocalGatewayVirtualInterface$,
  LocalGatewayVirtualInterfaceConfigurationState,
  LocalGatewayVirtualInterfaceGroup$,
  LocalGatewayVirtualInterfaceGroupConfigurationState,
  LocalStorage,
  LocalStorageType,
  LocationType,
  LockMode,
  LockSnapshot$,
  LockSnapshotCommand,
  LockSnapshotRequest$,
  LockSnapshotResult$,
  LockState,
  LockedSnapshotsInfo$,
  LogDestinationType,
  MacHost$,
  MacModificationTask$,
  MacModificationTaskState,
  MacModificationTaskType,
  MacSystemIntegrityProtectionConfiguration$,
  MacSystemIntegrityProtectionConfigurationRequest$,
  MacSystemIntegrityProtectionSettingStatus,
  MaintenanceDetails$,
  ManagedBy,
  ManagedPrefixList$,
  MarketType,
  MediaAcceleratorInfo$,
  MediaDeviceInfo$,
  MediaDeviceMemoryInfo$,
  MembershipType,
  MemoryGiBPerVCpu$,
  MemoryGiBPerVCpuRequest$,
  MemoryInfo$,
  MemoryMiB$,
  MemoryMiBRequest$,
  MetadataDefaultHttpTokensState,
  Metric,
  MetricDataResult$,
  MetricPoint$,
  MetricType,
  MetricValue$,
  ModifyAddressAttribute$,
  ModifyAddressAttributeCommand,
  ModifyAddressAttributeRequest$,
  ModifyAddressAttributeResult$,
  ModifyAvailabilityZoneGroup$,
  ModifyAvailabilityZoneGroupCommand,
  ModifyAvailabilityZoneGroupRequest$,
  ModifyAvailabilityZoneGroupResult$,
  ModifyAvailabilityZoneOptInStatus,
  ModifyCapacityReservation$,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationFleet$,
  ModifyCapacityReservationFleetCommand,
  ModifyCapacityReservationFleetRequest$,
  ModifyCapacityReservationFleetResult$,
  ModifyCapacityReservationRequest$,
  ModifyCapacityReservationResult$,
  ModifyClientVpnEndpoint$,
  ModifyClientVpnEndpointCommand,
  ModifyClientVpnEndpointRequest$,
  ModifyClientVpnEndpointResult$,
  ModifyDefaultCreditSpecification$,
  ModifyDefaultCreditSpecificationCommand,
  ModifyDefaultCreditSpecificationRequest$,
  ModifyDefaultCreditSpecificationResult$,
  ModifyEbsDefaultKmsKeyId$,
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyEbsDefaultKmsKeyIdRequest$,
  ModifyEbsDefaultKmsKeyIdResult$,
  ModifyFleet$,
  ModifyFleetCommand,
  ModifyFleetRequest$,
  ModifyFleetResult$,
  ModifyFpgaImageAttribute$,
  ModifyFpgaImageAttributeCommand,
  ModifyFpgaImageAttributeRequest$,
  ModifyFpgaImageAttributeResult$,
  ModifyHosts$,
  ModifyHostsCommand,
  ModifyHostsRequest$,
  ModifyHostsResult$,
  ModifyIdFormat$,
  ModifyIdFormatCommand,
  ModifyIdFormatRequest$,
  ModifyIdentityIdFormat$,
  ModifyIdentityIdFormatCommand,
  ModifyIdentityIdFormatRequest$,
  ModifyImageAttribute$,
  ModifyImageAttributeCommand,
  ModifyImageAttributeRequest$,
  ModifyInstanceAttribute$,
  ModifyInstanceAttributeCommand,
  ModifyInstanceAttributeRequest$,
  ModifyInstanceCapacityReservationAttributes$,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCapacityReservationAttributesRequest$,
  ModifyInstanceCapacityReservationAttributesResult$,
  ModifyInstanceConnectEndpoint$,
  ModifyInstanceConnectEndpointCommand,
  ModifyInstanceConnectEndpointRequest$,
  ModifyInstanceConnectEndpointResult$,
  ModifyInstanceCpuOptions$,
  ModifyInstanceCpuOptionsCommand,
  ModifyInstanceCpuOptionsRequest$,
  ModifyInstanceCpuOptionsResult$,
  ModifyInstanceCreditSpecification$,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceCreditSpecificationRequest$,
  ModifyInstanceCreditSpecificationResult$,
  ModifyInstanceEventStartTime$,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventStartTimeRequest$,
  ModifyInstanceEventStartTimeResult$,
  ModifyInstanceEventWindow$,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceEventWindowRequest$,
  ModifyInstanceEventWindowResult$,
  ModifyInstanceMaintenanceOptions$,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMaintenanceOptionsRequest$,
  ModifyInstanceMaintenanceOptionsResult$,
  ModifyInstanceMetadataDefaults$,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataDefaultsRequest$,
  ModifyInstanceMetadataDefaultsResult$,
  ModifyInstanceMetadataOptions$,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceMetadataOptionsRequest$,
  ModifyInstanceMetadataOptionsResult$,
  ModifyInstanceNetworkPerformanceOptions$,
  ModifyInstanceNetworkPerformanceOptionsCommand,
  ModifyInstanceNetworkPerformanceRequest$,
  ModifyInstanceNetworkPerformanceResult$,
  ModifyInstancePlacement$,
  ModifyInstancePlacementCommand,
  ModifyInstancePlacementRequest$,
  ModifyInstancePlacementResult$,
  ModifyIpam$,
  ModifyIpamCommand,
  ModifyIpamPolicyAllocationRules$,
  ModifyIpamPolicyAllocationRulesCommand,
  ModifyIpamPolicyAllocationRulesRequest$,
  ModifyIpamPolicyAllocationRulesResult$,
  ModifyIpamPool$,
  ModifyIpamPoolCommand,
  ModifyIpamPoolRequest$,
  ModifyIpamPoolResult$,
  ModifyIpamPrefixListResolver$,
  ModifyIpamPrefixListResolverCommand,
  ModifyIpamPrefixListResolverRequest$,
  ModifyIpamPrefixListResolverResult$,
  ModifyIpamPrefixListResolverTarget$,
  ModifyIpamPrefixListResolverTargetCommand,
  ModifyIpamPrefixListResolverTargetRequest$,
  ModifyIpamPrefixListResolverTargetResult$,
  ModifyIpamRequest$,
  ModifyIpamResourceCidr$,
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceCidrRequest$,
  ModifyIpamResourceCidrResult$,
  ModifyIpamResourceDiscovery$,
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamResourceDiscoveryRequest$,
  ModifyIpamResourceDiscoveryResult$,
  ModifyIpamResult$,
  ModifyIpamScope$,
  ModifyIpamScopeCommand,
  ModifyIpamScopeRequest$,
  ModifyIpamScopeResult$,
  ModifyLaunchTemplate$,
  ModifyLaunchTemplateCommand,
  ModifyLaunchTemplateRequest$,
  ModifyLaunchTemplateResult$,
  ModifyLocalGatewayRoute$,
  ModifyLocalGatewayRouteCommand,
  ModifyLocalGatewayRouteRequest$,
  ModifyLocalGatewayRouteResult$,
  ModifyManagedPrefixList$,
  ModifyManagedPrefixListCommand,
  ModifyManagedPrefixListRequest$,
  ModifyManagedPrefixListResult$,
  ModifyNetworkInterfaceAttribute$,
  ModifyNetworkInterfaceAttributeCommand,
  ModifyNetworkInterfaceAttributeRequest$,
  ModifyPrivateDnsNameOptions$,
  ModifyPrivateDnsNameOptionsCommand,
  ModifyPrivateDnsNameOptionsRequest$,
  ModifyPrivateDnsNameOptionsResult$,
  ModifyPublicIpDnsNameOptions$,
  ModifyPublicIpDnsNameOptionsCommand,
  ModifyPublicIpDnsNameOptionsRequest$,
  ModifyPublicIpDnsNameOptionsResult$,
  ModifyReservedInstances$,
  ModifyReservedInstancesCommand,
  ModifyReservedInstancesRequest$,
  ModifyReservedInstancesResult$,
  ModifyRouteServer$,
  ModifyRouteServerCommand,
  ModifyRouteServerRequest$,
  ModifyRouteServerResult$,
  ModifySecurityGroupRules$,
  ModifySecurityGroupRulesCommand,
  ModifySecurityGroupRulesRequest$,
  ModifySecurityGroupRulesResult$,
  ModifySnapshotAttribute$,
  ModifySnapshotAttributeCommand,
  ModifySnapshotAttributeRequest$,
  ModifySnapshotTier$,
  ModifySnapshotTierCommand,
  ModifySnapshotTierRequest$,
  ModifySnapshotTierResult$,
  ModifySpotFleetRequest$,
  ModifySpotFleetRequestCommand,
  ModifySpotFleetRequestRequest$,
  ModifySpotFleetRequestResponse$,
  ModifySubnetAttribute$,
  ModifySubnetAttributeCommand,
  ModifySubnetAttributeRequest$,
  ModifyTrafficMirrorFilterNetworkServices$,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterNetworkServicesRequest$,
  ModifyTrafficMirrorFilterNetworkServicesResult$,
  ModifyTrafficMirrorFilterRule$,
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorFilterRuleRequest$,
  ModifyTrafficMirrorFilterRuleResult$,
  ModifyTrafficMirrorSession$,
  ModifyTrafficMirrorSessionCommand,
  ModifyTrafficMirrorSessionRequest$,
  ModifyTrafficMirrorSessionResult$,
  ModifyTransitGateway$,
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayMeteringPolicy$,
  ModifyTransitGatewayMeteringPolicyCommand,
  ModifyTransitGatewayMeteringPolicyRequest$,
  ModifyTransitGatewayMeteringPolicyResult$,
  ModifyTransitGatewayOptions$,
  ModifyTransitGatewayPrefixListReference$,
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayPrefixListReferenceRequest$,
  ModifyTransitGatewayPrefixListReferenceResult$,
  ModifyTransitGatewayRequest$,
  ModifyTransitGatewayResult$,
  ModifyTransitGatewayVpcAttachment$,
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyTransitGatewayVpcAttachmentRequest$,
  ModifyTransitGatewayVpcAttachmentRequestOptions$,
  ModifyTransitGatewayVpcAttachmentResult$,
  ModifyVerifiedAccessEndpoint$,
  ModifyVerifiedAccessEndpointCidrOptions$,
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointEniOptions$,
  ModifyVerifiedAccessEndpointLoadBalancerOptions$,
  ModifyVerifiedAccessEndpointPolicy$,
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessEndpointPolicyRequest$,
  ModifyVerifiedAccessEndpointPolicyResult$,
  ModifyVerifiedAccessEndpointPortRange$,
  ModifyVerifiedAccessEndpointRdsOptions$,
  ModifyVerifiedAccessEndpointRequest$,
  ModifyVerifiedAccessEndpointResult$,
  ModifyVerifiedAccessGroup$,
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupPolicy$,
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessGroupPolicyRequest$,
  ModifyVerifiedAccessGroupPolicyResult$,
  ModifyVerifiedAccessGroupRequest$,
  ModifyVerifiedAccessGroupResult$,
  ModifyVerifiedAccessInstance$,
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceLoggingConfiguration$,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationRequest$,
  ModifyVerifiedAccessInstanceLoggingConfigurationResult$,
  ModifyVerifiedAccessInstanceRequest$,
  ModifyVerifiedAccessInstanceResult$,
  ModifyVerifiedAccessNativeApplicationOidcOptions$,
  ModifyVerifiedAccessTrustProvider$,
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVerifiedAccessTrustProviderDeviceOptions$,
  ModifyVerifiedAccessTrustProviderOidcOptions$,
  ModifyVerifiedAccessTrustProviderRequest$,
  ModifyVerifiedAccessTrustProviderResult$,
  ModifyVolume$,
  ModifyVolumeAttribute$,
  ModifyVolumeAttributeCommand,
  ModifyVolumeAttributeRequest$,
  ModifyVolumeCommand,
  ModifyVolumeRequest$,
  ModifyVolumeResult$,
  ModifyVpcAttribute$,
  ModifyVpcAttributeCommand,
  ModifyVpcAttributeRequest$,
  ModifyVpcBlockPublicAccessExclusion$,
  ModifyVpcBlockPublicAccessExclusionCommand,
  ModifyVpcBlockPublicAccessExclusionRequest$,
  ModifyVpcBlockPublicAccessExclusionResult$,
  ModifyVpcBlockPublicAccessOptions$,
  ModifyVpcBlockPublicAccessOptionsCommand,
  ModifyVpcBlockPublicAccessOptionsRequest$,
  ModifyVpcBlockPublicAccessOptionsResult$,
  ModifyVpcEncryptionControl$,
  ModifyVpcEncryptionControlCommand,
  ModifyVpcEncryptionControlRequest$,
  ModifyVpcEncryptionControlResult$,
  ModifyVpcEndpoint$,
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointConnectionNotification$,
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointConnectionNotificationRequest$,
  ModifyVpcEndpointConnectionNotificationResult$,
  ModifyVpcEndpointRequest$,
  ModifyVpcEndpointResult$,
  ModifyVpcEndpointServiceConfiguration$,
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServiceConfigurationRequest$,
  ModifyVpcEndpointServiceConfigurationResult$,
  ModifyVpcEndpointServicePayerResponsibility$,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePayerResponsibilityRequest$,
  ModifyVpcEndpointServicePayerResponsibilityResult$,
  ModifyVpcEndpointServicePermissions$,
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcEndpointServicePermissionsRequest$,
  ModifyVpcEndpointServicePermissionsResult$,
  ModifyVpcPeeringConnectionOptions$,
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcPeeringConnectionOptionsRequest$,
  ModifyVpcPeeringConnectionOptionsResult$,
  ModifyVpcTenancy$,
  ModifyVpcTenancyCommand,
  ModifyVpcTenancyRequest$,
  ModifyVpcTenancyResult$,
  ModifyVpnConnection$,
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionOptions$,
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnConnectionOptionsRequest$,
  ModifyVpnConnectionOptionsResult$,
  ModifyVpnConnectionRequest$,
  ModifyVpnConnectionResult$,
  ModifyVpnTunnelCertificate$,
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelCertificateRequest$,
  ModifyVpnTunnelCertificateResult$,
  ModifyVpnTunnelOptions$,
  ModifyVpnTunnelOptionsCommand,
  ModifyVpnTunnelOptionsRequest$,
  ModifyVpnTunnelOptionsResult$,
  ModifyVpnTunnelOptionsSpecification$,
  MonitorInstances$,
  MonitorInstancesCommand,
  MonitorInstancesRequest$,
  MonitorInstancesResult$,
  Monitoring$,
  MonitoringState,
  MoveAddressToVpc$,
  MoveAddressToVpcCommand,
  MoveAddressToVpcRequest$,
  MoveAddressToVpcResult$,
  MoveByoipCidrToIpam$,
  MoveByoipCidrToIpamCommand,
  MoveByoipCidrToIpamRequest$,
  MoveByoipCidrToIpamResult$,
  MoveCapacityReservationInstances$,
  MoveCapacityReservationInstancesCommand,
  MoveCapacityReservationInstancesRequest$,
  MoveCapacityReservationInstancesResult$,
  MoveStatus,
  MovingAddressStatus$,
  MulticastSupportValue,
  NatGateway$,
  NatGatewayAddress$,
  NatGatewayAddressStatus,
  NatGatewayApplianceModifyState,
  NatGatewayApplianceState,
  NatGatewayApplianceType,
  NatGatewayAttachedAppliance$,
  NatGatewayState,
  NativeApplicationOidcOptions$,
  NetworkAcl$,
  NetworkAclAssociation$,
  NetworkAclEntry$,
  NetworkBandwidthGbps$,
  NetworkBandwidthGbpsRequest$,
  NetworkCardInfo$,
  NetworkInfo$,
  NetworkInsightsAccessScope$,
  NetworkInsightsAccessScopeAnalysis$,
  NetworkInsightsAccessScopeContent$,
  NetworkInsightsAnalysis$,
  NetworkInsightsPath$,
  NetworkInterface$,
  NetworkInterfaceAssociation$,
  NetworkInterfaceAttachment$,
  NetworkInterfaceAttachmentChanges$,
  NetworkInterfaceAttribute,
  NetworkInterfaceCount$,
  NetworkInterfaceCountRequest$,
  NetworkInterfaceCreationType,
  NetworkInterfaceIpv6Address$,
  NetworkInterfacePermission$,
  NetworkInterfacePermissionState$,
  NetworkInterfacePermissionStateCode,
  NetworkInterfacePrivateIpAddress$,
  NetworkInterfaceStatus,
  NetworkInterfaceType,
  NeuronDeviceCoreInfo$,
  NeuronDeviceInfo$,
  NeuronDeviceMemoryInfo$,
  NeuronInfo$,
  NewDhcpConfiguration$,
  NitroEnclavesSupport,
  NitroTpmInfo$,
  NitroTpmSupport,
  OfferingClassType,
  OfferingTypeValues,
  OidcOptions$,
  OnDemandAllocationStrategy,
  OnDemandOptions$,
  OnDemandOptionsRequest$,
  OperationType,
  OperatorRequest$,
  OperatorResponse$,
  OutpostLag$,
  OutputFormat,
  PacketHeaderStatement$,
  PacketHeaderStatementRequest$,
  PartitionLoadFrequency,
  PathComponent$,
  PathFilter$,
  PathRequestFilter$,
  PathStatement$,
  PathStatementRequest$,
  PayerResponsibility,
  PaymentOption,
  PciId$,
  PeeringAttachmentStatus$,
  PeeringConnectionOptions$,
  PeeringConnectionOptionsRequest$,
  PeeringTgwInfo$,
  PerformanceFactorReference$,
  PerformanceFactorReferenceRequest$,
  PeriodType,
  PermissionGroup,
  Phase1DHGroupNumbersListValue$,
  Phase1DHGroupNumbersRequestListValue$,
  Phase1EncryptionAlgorithmsListValue$,
  Phase1EncryptionAlgorithmsRequestListValue$,
  Phase1IntegrityAlgorithmsListValue$,
  Phase1IntegrityAlgorithmsRequestListValue$,
  Phase2DHGroupNumbersListValue$,
  Phase2DHGroupNumbersRequestListValue$,
  Phase2EncryptionAlgorithmsListValue$,
  Phase2EncryptionAlgorithmsRequestListValue$,
  Phase2IntegrityAlgorithmsListValue$,
  Phase2IntegrityAlgorithmsRequestListValue$,
  PhcSupport,
  Placement$,
  PlacementGroup$,
  PlacementGroupInfo$,
  PlacementGroupState,
  PlacementGroupStrategy,
  PlacementResponse$,
  PlacementStrategy,
  PlatformValues,
  PoolCidrBlock$,
  PortRange$,
  PrefixList$,
  PrefixListAssociation$,
  PrefixListEntry$,
  PrefixListId$,
  PrefixListState,
  PriceSchedule$,
  PriceScheduleSpecification$,
  PricingDetail$,
  PrincipalIdFormat$,
  PrincipalType,
  PrivateDnsDetails$,
  PrivateDnsNameConfiguration$,
  PrivateDnsNameOptionsOnLaunch$,
  PrivateDnsNameOptionsRequest$,
  PrivateDnsNameOptionsResponse$,
  PrivateIpAddressSpecification$,
  ProcessorInfo$,
  ProductCode$,
  ProductCodeValues,
  PropagatingVgw$,
  Protocol,
  ProtocolValue,
  ProvisionByoipCidr$,
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrRequest$,
  ProvisionByoipCidrResult$,
  ProvisionIpamByoasn$,
  ProvisionIpamByoasnCommand,
  ProvisionIpamByoasnRequest$,
  ProvisionIpamByoasnResult$,
  ProvisionIpamPoolCidr$,
  ProvisionIpamPoolCidrCommand,
  ProvisionIpamPoolCidrRequest$,
  ProvisionIpamPoolCidrResult$,
  ProvisionPublicIpv4PoolCidr$,
  ProvisionPublicIpv4PoolCidrCommand,
  ProvisionPublicIpv4PoolCidrRequest$,
  ProvisionPublicIpv4PoolCidrResult$,
  ProvisionedBandwidth$,
  PtrUpdateStatus$,
  PublicIpDnsNameOptions$,
  PublicIpDnsOption,
  PublicIpv4Pool$,
  PublicIpv4PoolRange$,
  Purchase$,
  PurchaseCapacityBlock$,
  PurchaseCapacityBlockCommand,
  PurchaseCapacityBlockExtension$,
  PurchaseCapacityBlockExtensionCommand,
  PurchaseCapacityBlockExtensionRequest$,
  PurchaseCapacityBlockExtensionResult$,
  PurchaseCapacityBlockRequest$,
  PurchaseCapacityBlockResult$,
  PurchaseHostReservation$,
  PurchaseHostReservationCommand,
  PurchaseHostReservationRequest$,
  PurchaseHostReservationResult$,
  PurchaseRequest$,
  PurchaseReservedInstancesOffering$,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseReservedInstancesOfferingRequest$,
  PurchaseReservedInstancesOfferingResult$,
  PurchaseScheduledInstances$,
  PurchaseScheduledInstancesCommand,
  PurchaseScheduledInstancesRequest$,
  PurchaseScheduledInstancesResult$,
  RIProductDescription,
  RebootInstances$,
  RebootInstancesCommand,
  RebootInstancesRequest$,
  RebootMigrationSupport,
  RecurringCharge$,
  RecurringChargeFrequency,
  ReferencedSecurityGroup$,
  Region$,
  RegionalSummary$,
  RegisterImage$,
  RegisterImageCommand,
  RegisterImageRequest$,
  RegisterImageResult$,
  RegisterInstanceEventNotificationAttributes$,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterInstanceEventNotificationAttributesRequest$,
  RegisterInstanceEventNotificationAttributesResult$,
  RegisterInstanceTagAttributeRequest$,
  RegisterTransitGatewayMulticastGroupMembers$,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupMembersRequest$,
  RegisterTransitGatewayMulticastGroupMembersResult$,
  RegisterTransitGatewayMulticastGroupSources$,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RegisterTransitGatewayMulticastGroupSourcesRequest$,
  RegisterTransitGatewayMulticastGroupSourcesResult$,
  RegisteredInstance$,
  RejectCapacityReservationBillingOwnership$,
  RejectCapacityReservationBillingOwnershipCommand,
  RejectCapacityReservationBillingOwnershipRequest$,
  RejectCapacityReservationBillingOwnershipResult$,
  RejectTransitGatewayMulticastDomainAssociations$,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayMulticastDomainAssociationsRequest$,
  RejectTransitGatewayMulticastDomainAssociationsResult$,
  RejectTransitGatewayPeeringAttachment$,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayPeeringAttachmentRequest$,
  RejectTransitGatewayPeeringAttachmentResult$,
  RejectTransitGatewayVpcAttachment$,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectTransitGatewayVpcAttachmentRequest$,
  RejectTransitGatewayVpcAttachmentResult$,
  RejectVpcEndpointConnections$,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcEndpointConnectionsRequest$,
  RejectVpcEndpointConnectionsResult$,
  RejectVpcPeeringConnection$,
  RejectVpcPeeringConnectionCommand,
  RejectVpcPeeringConnectionRequest$,
  RejectVpcPeeringConnectionResult$,
  ReleaseAddress$,
  ReleaseAddressCommand,
  ReleaseAddressRequest$,
  ReleaseHosts$,
  ReleaseHostsCommand,
  ReleaseHostsRequest$,
  ReleaseHostsResult$,
  ReleaseIpamPoolAllocation$,
  ReleaseIpamPoolAllocationCommand,
  ReleaseIpamPoolAllocationRequest$,
  ReleaseIpamPoolAllocationResult$,
  RemoveIpamOperatingRegion$,
  RemoveIpamOrganizationalUnitExclusion$,
  RemovePrefixListEntry$,
  ReplaceIamInstanceProfileAssociation$,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceIamInstanceProfileAssociationRequest$,
  ReplaceIamInstanceProfileAssociationResult$,
  ReplaceImageCriteriaInAllowedImagesSettings$,
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  ReplaceImageCriteriaInAllowedImagesSettingsRequest$,
  ReplaceImageCriteriaInAllowedImagesSettingsResult$,
  ReplaceNetworkAclAssociation$,
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclAssociationRequest$,
  ReplaceNetworkAclAssociationResult$,
  ReplaceNetworkAclEntry$,
  ReplaceNetworkAclEntryCommand,
  ReplaceNetworkAclEntryRequest$,
  ReplaceRootVolumeTask$,
  ReplaceRootVolumeTaskState,
  ReplaceRoute$,
  ReplaceRouteCommand,
  ReplaceRouteRequest$,
  ReplaceRouteTableAssociation$,
  ReplaceRouteTableAssociationCommand,
  ReplaceRouteTableAssociationRequest$,
  ReplaceRouteTableAssociationResult$,
  ReplaceTransitGatewayRoute$,
  ReplaceTransitGatewayRouteCommand,
  ReplaceTransitGatewayRouteRequest$,
  ReplaceTransitGatewayRouteResult$,
  ReplaceVpnTunnel$,
  ReplaceVpnTunnelCommand,
  ReplaceVpnTunnelRequest$,
  ReplaceVpnTunnelResult$,
  ReplacementStrategy,
  ReportInstanceReasonCodes,
  ReportInstanceStatus$,
  ReportInstanceStatusCommand,
  ReportInstanceStatusRequest$,
  ReportState,
  ReportStatusType,
  RequestFilterPortRange$,
  RequestIpamResourceTag$,
  RequestLaunchTemplateData$,
  RequestSpotFleet$,
  RequestSpotFleetCommand,
  RequestSpotFleetRequest$,
  RequestSpotFleetResponse$,
  RequestSpotInstances$,
  RequestSpotInstancesCommand,
  RequestSpotInstancesRequest$,
  RequestSpotInstancesResult$,
  RequestSpotLaunchSpecification$,
  Reservation$,
  ReservationEndDateType,
  ReservationFleetInstanceSpecification$,
  ReservationState,
  ReservationType,
  ReservationValue$,
  ReservedInstanceLimitPrice$,
  ReservedInstanceReservationValue$,
  ReservedInstanceState,
  ReservedInstances$,
  ReservedInstancesConfiguration$,
  ReservedInstancesId$,
  ReservedInstancesListing$,
  ReservedInstancesModification$,
  ReservedInstancesModificationResult$,
  ReservedInstancesOffering$,
  ResetAddressAttribute$,
  ResetAddressAttributeCommand,
  ResetAddressAttributeRequest$,
  ResetAddressAttributeResult$,
  ResetEbsDefaultKmsKeyId$,
  ResetEbsDefaultKmsKeyIdCommand,
  ResetEbsDefaultKmsKeyIdRequest$,
  ResetEbsDefaultKmsKeyIdResult$,
  ResetFpgaImageAttribute$,
  ResetFpgaImageAttributeCommand,
  ResetFpgaImageAttributeName,
  ResetFpgaImageAttributeRequest$,
  ResetFpgaImageAttributeResult$,
  ResetImageAttribute$,
  ResetImageAttributeCommand,
  ResetImageAttributeName,
  ResetImageAttributeRequest$,
  ResetInstanceAttribute$,
  ResetInstanceAttributeCommand,
  ResetInstanceAttributeRequest$,
  ResetNetworkInterfaceAttribute$,
  ResetNetworkInterfaceAttributeCommand,
  ResetNetworkInterfaceAttributeRequest$,
  ResetSnapshotAttribute$,
  ResetSnapshotAttributeCommand,
  ResetSnapshotAttributeRequest$,
  ResourceStatement$,
  ResourceStatementRequest$,
  ResourceType,
  ResourceTypeOption$,
  ResourceTypeRequest$,
  ResponseError$,
  ResponseLaunchTemplateData$,
  RestoreAddressToClassic$,
  RestoreAddressToClassicCommand,
  RestoreAddressToClassicRequest$,
  RestoreAddressToClassicResult$,
  RestoreImageFromRecycleBin$,
  RestoreImageFromRecycleBinCommand,
  RestoreImageFromRecycleBinRequest$,
  RestoreImageFromRecycleBinResult$,
  RestoreManagedPrefixListVersion$,
  RestoreManagedPrefixListVersionCommand,
  RestoreManagedPrefixListVersionRequest$,
  RestoreManagedPrefixListVersionResult$,
  RestoreSnapshotFromRecycleBin$,
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotFromRecycleBinRequest$,
  RestoreSnapshotFromRecycleBinResult$,
  RestoreSnapshotTier$,
  RestoreSnapshotTierCommand,
  RestoreSnapshotTierRequest$,
  RestoreSnapshotTierResult$,
  RestoreVolumeFromRecycleBin$,
  RestoreVolumeFromRecycleBinCommand,
  RestoreVolumeFromRecycleBinRequest$,
  RestoreVolumeFromRecycleBinResult$,
  RevokeClientVpnIngress$,
  RevokeClientVpnIngressCommand,
  RevokeClientVpnIngressRequest$,
  RevokeClientVpnIngressResult$,
  RevokeSecurityGroupEgress$,
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupEgressRequest$,
  RevokeSecurityGroupEgressResult$,
  RevokeSecurityGroupIngress$,
  RevokeSecurityGroupIngressCommand,
  RevokeSecurityGroupIngressRequest$,
  RevokeSecurityGroupIngressResult$,
  RevokedSecurityGroupRule$,
  RootDeviceType,
  Route$,
  RouteOrigin,
  RouteServer$,
  RouteServerAssociation$,
  RouteServerAssociationState,
  RouteServerBfdState,
  RouteServerBfdStatus$,
  RouteServerBgpOptions$,
  RouteServerBgpOptionsRequest$,
  RouteServerBgpState,
  RouteServerBgpStatus$,
  RouteServerEndpoint$,
  RouteServerEndpointState,
  RouteServerPeer$,
  RouteServerPeerLivenessMode,
  RouteServerPeerState,
  RouteServerPersistRoutesAction,
  RouteServerPersistRoutesState,
  RouteServerPropagation$,
  RouteServerPropagationState,
  RouteServerRoute$,
  RouteServerRouteInstallationDetail$,
  RouteServerRouteInstallationStatus,
  RouteServerRouteStatus,
  RouteServerState,
  RouteState,
  RouteTable$,
  RouteTableAssociation$,
  RouteTableAssociationState$,
  RouteTableAssociationStateCode,
  RuleAction,
  RuleGroupRuleOptionsPair$,
  RuleGroupTypePair$,
  RuleOption$,
  RunInstances$,
  RunInstancesCommand,
  RunInstancesMonitoringEnabled$,
  RunInstancesRequest$,
  RunScheduledInstances$,
  RunScheduledInstancesCommand,
  RunScheduledInstancesRequest$,
  RunScheduledInstancesResult$,
  S3ObjectTag$,
  S3Storage$,
  SSEType,
  Schedule,
  ScheduledInstance$,
  ScheduledInstanceAvailability$,
  ScheduledInstanceRecurrence$,
  ScheduledInstanceRecurrenceRequest$,
  ScheduledInstancesBlockDeviceMapping$,
  ScheduledInstancesEbs$,
  ScheduledInstancesIamInstanceProfile$,
  ScheduledInstancesIpv6Address$,
  ScheduledInstancesLaunchSpecification$,
  ScheduledInstancesMonitoring$,
  ScheduledInstancesNetworkInterface$,
  ScheduledInstancesPlacement$,
  ScheduledInstancesPrivateIpAddressConfig$,
  Scope,
  SearchLocalGatewayRoutes$,
  SearchLocalGatewayRoutesCommand,
  SearchLocalGatewayRoutesRequest$,
  SearchLocalGatewayRoutesResult$,
  SearchTransitGatewayMulticastGroups$,
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayMulticastGroupsRequest$,
  SearchTransitGatewayMulticastGroupsResult$,
  SearchTransitGatewayRoutes$,
  SearchTransitGatewayRoutesCommand,
  SearchTransitGatewayRoutesRequest$,
  SearchTransitGatewayRoutesResult$,
  SecurityGroup$,
  SecurityGroupForVpc$,
  SecurityGroupIdentifier$,
  SecurityGroupReference$,
  SecurityGroupReferencingSupportValue,
  SecurityGroupRule$,
  SecurityGroupRuleDescription$,
  SecurityGroupRuleRequest$,
  SecurityGroupRuleUpdate$,
  SecurityGroupVpcAssociation$,
  SecurityGroupVpcAssociationState,
  SelfServicePortal,
  SendDiagnosticInterrupt$,
  SendDiagnosticInterruptCommand,
  SendDiagnosticInterruptRequest$,
  ServiceConfiguration$,
  ServiceConnectivityType,
  ServiceDetail$,
  ServiceLinkVirtualInterface$,
  ServiceLinkVirtualInterfaceConfigurationState,
  ServiceManaged,
  ServiceState,
  ServiceType,
  ServiceTypeDetail$,
  ShutdownBehavior,
  SlotDateTimeRangeRequest$,
  SlotStartTimeRangeRequest$,
  Snapshot$,
  SnapshotAttributeName,
  SnapshotBlockPublicAccessState,
  SnapshotDetail$,
  SnapshotDiskContainer$,
  SnapshotInfo$,
  SnapshotLocationEnum,
  SnapshotRecycleBinInfo$,
  SnapshotReturnCodes,
  SnapshotState,
  SnapshotTaskDetail$,
  SnapshotTierStatus$,
  SpotAllocationStrategy,
  SpotCapacityRebalance$,
  SpotDatafeedSubscription$,
  SpotFleetLaunchSpecification$,
  SpotFleetMonitoring$,
  SpotFleetRequestConfig$,
  SpotFleetRequestConfigData$,
  SpotFleetTagSpecification$,
  SpotInstanceInterruptionBehavior,
  SpotInstanceRequest$,
  SpotInstanceState,
  SpotInstanceStateFault$,
  SpotInstanceStatus$,
  SpotInstanceType,
  SpotMaintenanceStrategies$,
  SpotMarketOptions$,
  SpotOptions$,
  SpotOptionsRequest$,
  SpotPlacement$,
  SpotPlacementScore$,
  SpotPrice$,
  SpreadLevel,
  SqlServerLicenseUsage,
  StaleIpPermission$,
  StaleSecurityGroup$,
  StartDeclarativePoliciesReport$,
  StartDeclarativePoliciesReportCommand,
  StartDeclarativePoliciesReportRequest$,
  StartDeclarativePoliciesReportResult$,
  StartInstances$,
  StartInstancesCommand,
  StartInstancesRequest$,
  StartInstancesResult$,
  StartNetworkInsightsAccessScopeAnalysis$,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAccessScopeAnalysisRequest$,
  StartNetworkInsightsAccessScopeAnalysisResult$,
  StartNetworkInsightsAnalysis$,
  StartNetworkInsightsAnalysisCommand,
  StartNetworkInsightsAnalysisRequest$,
  StartNetworkInsightsAnalysisResult$,
  StartVpcEndpointServicePrivateDnsVerification$,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  StartVpcEndpointServicePrivateDnsVerificationRequest$,
  StartVpcEndpointServicePrivateDnsVerificationResult$,
  State,
  StateReason$,
  StaticSourcesSupportValue,
  StatisticType,
  Status,
  StatusName,
  StatusType,
  StopInstances$,
  StopInstancesCommand,
  StopInstancesRequest$,
  StopInstancesResult$,
  Storage$,
  StorageLocation$,
  StorageTier,
  StoreImageTaskResult$,
  Subnet$,
  SubnetAssociation$,
  SubnetCidrBlockState$,
  SubnetCidrBlockStateCode,
  SubnetCidrReservation$,
  SubnetCidrReservationType,
  SubnetConfiguration$,
  SubnetIpPrefixes$,
  SubnetIpv6CidrBlockAssociation$,
  SubnetState,
  Subscription$,
  SuccessfulInstanceCreditSpecificationItem$,
  SuccessfulQueuedPurchaseDeletion$,
  SummaryStatus,
  SupportedAdditionalProcessorFeature,
  SupportedRegionDetail$,
  Tag$,
  TagDescription$,
  TagSpecification$,
  TargetCapacitySpecification$,
  TargetCapacitySpecificationRequest$,
  TargetCapacityUnitType,
  TargetConfiguration$,
  TargetConfigurationRequest$,
  TargetGroup$,
  TargetGroupsConfig$,
  TargetNetwork$,
  TargetReservationValue$,
  TargetStorageTier,
  TelemetryStatus,
  Tenancy,
  TerminateClientVpnConnections$,
  TerminateClientVpnConnectionsCommand,
  TerminateClientVpnConnectionsRequest$,
  TerminateClientVpnConnectionsResult$,
  TerminateConnectionStatus$,
  TerminateInstances$,
  TerminateInstancesCommand,
  TerminateInstancesRequest$,
  TerminateInstancesResult$,
  ThroughResourcesStatement$,
  ThroughResourcesStatementRequest$,
  TieringOperationStatus,
  TokenState,
  TotalLocalStorageGB$,
  TotalLocalStorageGBRequest$,
  TpmSupportValues,
  TrafficDirection,
  TrafficIpAddressType,
  TrafficMirrorFilter$,
  TrafficMirrorFilterRule$,
  TrafficMirrorFilterRuleField,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRange$,
  TrafficMirrorPortRangeRequest$,
  TrafficMirrorRuleAction,
  TrafficMirrorSession$,
  TrafficMirrorSessionField,
  TrafficMirrorTarget$,
  TrafficMirrorTargetType,
  TrafficType,
  TransferType,
  TransitGateway$,
  TransitGatewayAssociation$,
  TransitGatewayAssociationState,
  TransitGatewayAttachment$,
  TransitGatewayAttachmentAssociation$,
  TransitGatewayAttachmentBgpConfiguration$,
  TransitGatewayAttachmentPropagation$,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayConnect$,
  TransitGatewayConnectOptions$,
  TransitGatewayConnectPeer$,
  TransitGatewayConnectPeerConfiguration$,
  TransitGatewayConnectPeerState,
  TransitGatewayConnectRequestBgpOptions$,
  TransitGatewayMeteringPayerType,
  TransitGatewayMeteringPolicy$,
  TransitGatewayMeteringPolicyEntry$,
  TransitGatewayMeteringPolicyEntryState,
  TransitGatewayMeteringPolicyRule$,
  TransitGatewayMeteringPolicyState,
  TransitGatewayMulitcastDomainAssociationState,
  TransitGatewayMulticastDeregisteredGroupMembers$,
  TransitGatewayMulticastDeregisteredGroupSources$,
  TransitGatewayMulticastDomain$,
  TransitGatewayMulticastDomainAssociation$,
  TransitGatewayMulticastDomainAssociations$,
  TransitGatewayMulticastDomainOptions$,
  TransitGatewayMulticastDomainState,
  TransitGatewayMulticastGroup$,
  TransitGatewayMulticastRegisteredGroupMembers$,
  TransitGatewayMulticastRegisteredGroupSources$,
  TransitGatewayOptions$,
  TransitGatewayPeeringAttachment$,
  TransitGatewayPeeringAttachmentOptions$,
  TransitGatewayPolicyRule$,
  TransitGatewayPolicyRuleMetaData$,
  TransitGatewayPolicyTable$,
  TransitGatewayPolicyTableAssociation$,
  TransitGatewayPolicyTableEntry$,
  TransitGatewayPolicyTableState,
  TransitGatewayPrefixListAttachment$,
  TransitGatewayPrefixListReference$,
  TransitGatewayPrefixListReferenceState,
  TransitGatewayPropagation$,
  TransitGatewayPropagationState,
  TransitGatewayRequestOptions$,
  TransitGatewayRoute$,
  TransitGatewayRouteAttachment$,
  TransitGatewayRouteState,
  TransitGatewayRouteTable$,
  TransitGatewayRouteTableAnnouncement$,
  TransitGatewayRouteTableAnnouncementDirection,
  TransitGatewayRouteTableAnnouncementState,
  TransitGatewayRouteTableAssociation$,
  TransitGatewayRouteTablePropagation$,
  TransitGatewayRouteTableRoute$,
  TransitGatewayRouteTableState,
  TransitGatewayRouteType,
  TransitGatewayState,
  TransitGatewayVpcAttachment$,
  TransitGatewayVpcAttachmentOptions$,
  TransportProtocol,
  TrunkInterfaceAssociation$,
  TrustProviderType,
  TunnelInsideIpVersion,
  TunnelOption$,
  UnassignIpv6Addresses$,
  UnassignIpv6AddressesCommand,
  UnassignIpv6AddressesRequest$,
  UnassignIpv6AddressesResult$,
  UnassignPrivateIpAddresses$,
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateIpAddressesRequest$,
  UnassignPrivateNatGatewayAddress$,
  UnassignPrivateNatGatewayAddressCommand,
  UnassignPrivateNatGatewayAddressRequest$,
  UnassignPrivateNatGatewayAddressResult$,
  UnlimitedSupportedInstanceFamily,
  UnlockSnapshot$,
  UnlockSnapshotCommand,
  UnlockSnapshotRequest$,
  UnlockSnapshotResult$,
  UnmonitorInstances$,
  UnmonitorInstancesCommand,
  UnmonitorInstancesRequest$,
  UnmonitorInstancesResult$,
  UnsuccessfulInstanceCreditSpecificationErrorCode,
  UnsuccessfulInstanceCreditSpecificationItem$,
  UnsuccessfulInstanceCreditSpecificationItemError$,
  UnsuccessfulItem$,
  UnsuccessfulItemError$,
  UpdateCapacityManagerOrganizationsAccess$,
  UpdateCapacityManagerOrganizationsAccessCommand,
  UpdateCapacityManagerOrganizationsAccessRequest$,
  UpdateCapacityManagerOrganizationsAccessResult$,
  UpdateInterruptibleCapacityReservationAllocation$,
  UpdateInterruptibleCapacityReservationAllocationCommand,
  UpdateInterruptibleCapacityReservationAllocationRequest$,
  UpdateInterruptibleCapacityReservationAllocationResult$,
  UpdateSecurityGroupRuleDescriptionsEgress$,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsEgressRequest$,
  UpdateSecurityGroupRuleDescriptionsEgressResult$,
  UpdateSecurityGroupRuleDescriptionsIngress$,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressRequest$,
  UpdateSecurityGroupRuleDescriptionsIngressResult$,
  UsageClassType,
  UserBucket$,
  UserBucketDetails$,
  UserData$,
  UserIdGroupPair$,
  UserTrustProviderType,
  VCpuCountRange$,
  VCpuCountRangeRequest$,
  VCpuInfo$,
  ValidationError$,
  ValidationWarning$,
  VerificationMethod,
  VerifiedAccessEndpoint$,
  VerifiedAccessEndpointAttachmentType,
  VerifiedAccessEndpointCidrOptions$,
  VerifiedAccessEndpointEniOptions$,
  VerifiedAccessEndpointLoadBalancerOptions$,
  VerifiedAccessEndpointPortRange$,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessEndpointRdsOptions$,
  VerifiedAccessEndpointStatus$,
  VerifiedAccessEndpointStatusCode,
  VerifiedAccessEndpointTarget$,
  VerifiedAccessEndpointType,
  VerifiedAccessGroup$,
  VerifiedAccessInstance$,
  VerifiedAccessInstanceCustomSubDomain$,
  VerifiedAccessInstanceLoggingConfiguration$,
  VerifiedAccessInstanceOpenVpnClientConfiguration$,
  VerifiedAccessInstanceOpenVpnClientConfigurationRoute$,
  VerifiedAccessInstanceUserTrustProviderClientConfiguration$,
  VerifiedAccessLogCloudWatchLogsDestination$,
  VerifiedAccessLogCloudWatchLogsDestinationOptions$,
  VerifiedAccessLogDeliveryStatus$,
  VerifiedAccessLogDeliveryStatusCode,
  VerifiedAccessLogKinesisDataFirehoseDestination$,
  VerifiedAccessLogKinesisDataFirehoseDestinationOptions$,
  VerifiedAccessLogOptions$,
  VerifiedAccessLogS3Destination$,
  VerifiedAccessLogS3DestinationOptions$,
  VerifiedAccessLogs$,
  VerifiedAccessSseSpecificationRequest$,
  VerifiedAccessSseSpecificationResponse$,
  VerifiedAccessTrustProvider$,
  VerifiedAccessTrustProviderCondensed$,
  VgwTelemetry$,
  VirtualizationType,
  Volume$,
  VolumeAttachment$,
  VolumeAttachmentState,
  VolumeAttributeName,
  VolumeDetail$,
  VolumeModification$,
  VolumeModificationState,
  VolumeRecycleBinInfo$,
  VolumeState,
  VolumeStatusAction$,
  VolumeStatusAttachmentStatus$,
  VolumeStatusDetails$,
  VolumeStatusEvent$,
  VolumeStatusInfo$,
  VolumeStatusInfoStatus,
  VolumeStatusItem$,
  VolumeStatusName,
  VolumeType,
  Vpc$,
  VpcAttachment$,
  VpcAttributeName,
  VpcBlockPublicAccessExclusion$,
  VpcBlockPublicAccessExclusionState,
  VpcBlockPublicAccessExclusionsAllowed,
  VpcBlockPublicAccessOptions$,
  VpcBlockPublicAccessState,
  VpcCidrBlockAssociation$,
  VpcCidrBlockState$,
  VpcCidrBlockStateCode,
  VpcClassicLink$,
  VpcEncryptionControl$,
  VpcEncryptionControlConfiguration$,
  VpcEncryptionControlExclusion$,
  VpcEncryptionControlExclusionState,
  VpcEncryptionControlExclusionStateInput,
  VpcEncryptionControlExclusions$,
  VpcEncryptionControlMode,
  VpcEncryptionControlState,
  VpcEncryptionNonCompliantResource$,
  VpcEndpoint$,
  VpcEndpointAssociation$,
  VpcEndpointConnection$,
  VpcEndpointType,
  VpcIpv6CidrBlockAssociation$,
  VpcPeeringConnection$,
  VpcPeeringConnectionOptionsDescription$,
  VpcPeeringConnectionStateReason$,
  VpcPeeringConnectionStateReasonCode,
  VpcPeeringConnectionVpcInfo$,
  VpcState,
  VpcTenancy,
  VpnConcentrator$,
  VpnConcentratorType,
  VpnConnection$,
  VpnConnectionDeviceType$,
  VpnConnectionOptions$,
  VpnConnectionOptionsSpecification$,
  VpnEcmpSupportValue,
  VpnGateway$,
  VpnProtocol,
  VpnState,
  VpnStaticRoute$,
  VpnStaticRouteSource,
  VpnTunnelBandwidth,
  VpnTunnelLogOptions$,
  VpnTunnelLogOptionsSpecification$,
  VpnTunnelOptionsSpecification$,
  VpnTunnelProvisioningStatus,
  WeekDay,
  WithdrawByoipCidr$,
  WithdrawByoipCidrCommand,
  WithdrawByoipCidrRequest$,
  WithdrawByoipCidrResult$,
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
assert(typeof AcceptAddressTransfer$ === "object");
assert(typeof AcceptCapacityReservationBillingOwnershipCommand === "function");
assert(typeof AcceptCapacityReservationBillingOwnership$ === "object");
assert(typeof AcceptReservedInstancesExchangeQuoteCommand === "function");
assert(typeof AcceptReservedInstancesExchangeQuote$ === "object");
assert(typeof AcceptTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof AcceptTransitGatewayMulticastDomainAssociations$ === "object");
assert(typeof AcceptTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof AcceptTransitGatewayPeeringAttachment$ === "object");
assert(typeof AcceptTransitGatewayVpcAttachmentCommand === "function");
assert(typeof AcceptTransitGatewayVpcAttachment$ === "object");
assert(typeof AcceptVpcEndpointConnectionsCommand === "function");
assert(typeof AcceptVpcEndpointConnections$ === "object");
assert(typeof AcceptVpcPeeringConnectionCommand === "function");
assert(typeof AcceptVpcPeeringConnection$ === "object");
assert(typeof AdvertiseByoipCidrCommand === "function");
assert(typeof AdvertiseByoipCidr$ === "object");
assert(typeof AllocateAddressCommand === "function");
assert(typeof AllocateAddress$ === "object");
assert(typeof AllocateHostsCommand === "function");
assert(typeof AllocateHosts$ === "object");
assert(typeof AllocateIpamPoolCidrCommand === "function");
assert(typeof AllocateIpamPoolCidr$ === "object");
assert(typeof ApplySecurityGroupsToClientVpnTargetNetworkCommand === "function");
assert(typeof ApplySecurityGroupsToClientVpnTargetNetwork$ === "object");
assert(typeof AssignIpv6AddressesCommand === "function");
assert(typeof AssignIpv6Addresses$ === "object");
assert(typeof AssignPrivateIpAddressesCommand === "function");
assert(typeof AssignPrivateIpAddresses$ === "object");
assert(typeof AssignPrivateNatGatewayAddressCommand === "function");
assert(typeof AssignPrivateNatGatewayAddress$ === "object");
assert(typeof AssociateAddressCommand === "function");
assert(typeof AssociateAddress$ === "object");
assert(typeof AssociateCapacityReservationBillingOwnerCommand === "function");
assert(typeof AssociateCapacityReservationBillingOwner$ === "object");
assert(typeof AssociateClientVpnTargetNetworkCommand === "function");
assert(typeof AssociateClientVpnTargetNetwork$ === "object");
assert(typeof AssociateDhcpOptionsCommand === "function");
assert(typeof AssociateDhcpOptions$ === "object");
assert(typeof AssociateEnclaveCertificateIamRoleCommand === "function");
assert(typeof AssociateEnclaveCertificateIamRole$ === "object");
assert(typeof AssociateIamInstanceProfileCommand === "function");
assert(typeof AssociateIamInstanceProfile$ === "object");
assert(typeof AssociateInstanceEventWindowCommand === "function");
assert(typeof AssociateInstanceEventWindow$ === "object");
assert(typeof AssociateIpamByoasnCommand === "function");
assert(typeof AssociateIpamByoasn$ === "object");
assert(typeof AssociateIpamResourceDiscoveryCommand === "function");
assert(typeof AssociateIpamResourceDiscovery$ === "object");
assert(typeof AssociateNatGatewayAddressCommand === "function");
assert(typeof AssociateNatGatewayAddress$ === "object");
assert(typeof AssociateRouteServerCommand === "function");
assert(typeof AssociateRouteServer$ === "object");
assert(typeof AssociateRouteTableCommand === "function");
assert(typeof AssociateRouteTable$ === "object");
assert(typeof AssociateSecurityGroupVpcCommand === "function");
assert(typeof AssociateSecurityGroupVpc$ === "object");
assert(typeof AssociateSubnetCidrBlockCommand === "function");
assert(typeof AssociateSubnetCidrBlock$ === "object");
assert(typeof AssociateTransitGatewayMulticastDomainCommand === "function");
assert(typeof AssociateTransitGatewayMulticastDomain$ === "object");
assert(typeof AssociateTransitGatewayPolicyTableCommand === "function");
assert(typeof AssociateTransitGatewayPolicyTable$ === "object");
assert(typeof AssociateTransitGatewayRouteTableCommand === "function");
assert(typeof AssociateTransitGatewayRouteTable$ === "object");
assert(typeof AssociateTrunkInterfaceCommand === "function");
assert(typeof AssociateTrunkInterface$ === "object");
assert(typeof AssociateVpcCidrBlockCommand === "function");
assert(typeof AssociateVpcCidrBlock$ === "object");
assert(typeof AttachClassicLinkVpcCommand === "function");
assert(typeof AttachClassicLinkVpc$ === "object");
assert(typeof AttachInternetGatewayCommand === "function");
assert(typeof AttachInternetGateway$ === "object");
assert(typeof AttachNetworkInterfaceCommand === "function");
assert(typeof AttachNetworkInterface$ === "object");
assert(typeof AttachVerifiedAccessTrustProviderCommand === "function");
assert(typeof AttachVerifiedAccessTrustProvider$ === "object");
assert(typeof AttachVolumeCommand === "function");
assert(typeof AttachVolume$ === "object");
assert(typeof AttachVpnGatewayCommand === "function");
assert(typeof AttachVpnGateway$ === "object");
assert(typeof AuthorizeClientVpnIngressCommand === "function");
assert(typeof AuthorizeClientVpnIngress$ === "object");
assert(typeof AuthorizeSecurityGroupEgressCommand === "function");
assert(typeof AuthorizeSecurityGroupEgress$ === "object");
assert(typeof AuthorizeSecurityGroupIngressCommand === "function");
assert(typeof AuthorizeSecurityGroupIngress$ === "object");
assert(typeof BundleInstanceCommand === "function");
assert(typeof BundleInstance$ === "object");
assert(typeof CancelBundleTaskCommand === "function");
assert(typeof CancelBundleTask$ === "object");
assert(typeof CancelCapacityReservationCommand === "function");
assert(typeof CancelCapacityReservation$ === "object");
assert(typeof CancelCapacityReservationFleetsCommand === "function");
assert(typeof CancelCapacityReservationFleets$ === "object");
assert(typeof CancelConversionTaskCommand === "function");
assert(typeof CancelConversionTask$ === "object");
assert(typeof CancelDeclarativePoliciesReportCommand === "function");
assert(typeof CancelDeclarativePoliciesReport$ === "object");
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CancelExportTask$ === "object");
assert(typeof CancelImageLaunchPermissionCommand === "function");
assert(typeof CancelImageLaunchPermission$ === "object");
assert(typeof CancelImportTaskCommand === "function");
assert(typeof CancelImportTask$ === "object");
assert(typeof CancelReservedInstancesListingCommand === "function");
assert(typeof CancelReservedInstancesListing$ === "object");
assert(typeof CancelSpotFleetRequestsCommand === "function");
assert(typeof CancelSpotFleetRequests$ === "object");
assert(typeof CancelSpotInstanceRequestsCommand === "function");
assert(typeof CancelSpotInstanceRequests$ === "object");
assert(typeof ConfirmProductInstanceCommand === "function");
assert(typeof ConfirmProductInstance$ === "object");
assert(typeof CopyFpgaImageCommand === "function");
assert(typeof CopyFpgaImage$ === "object");
assert(typeof CopyImageCommand === "function");
assert(typeof CopyImage$ === "object");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CopySnapshot$ === "object");
assert(typeof CopyVolumesCommand === "function");
assert(typeof CopyVolumes$ === "object");
assert(typeof CreateCapacityManagerDataExportCommand === "function");
assert(typeof CreateCapacityManagerDataExport$ === "object");
assert(typeof CreateCapacityReservationCommand === "function");
assert(typeof CreateCapacityReservation$ === "object");
assert(typeof CreateCapacityReservationBySplittingCommand === "function");
assert(typeof CreateCapacityReservationBySplitting$ === "object");
assert(typeof CreateCapacityReservationFleetCommand === "function");
assert(typeof CreateCapacityReservationFleet$ === "object");
assert(typeof CreateCarrierGatewayCommand === "function");
assert(typeof CreateCarrierGateway$ === "object");
assert(typeof CreateClientVpnEndpointCommand === "function");
assert(typeof CreateClientVpnEndpoint$ === "object");
assert(typeof CreateClientVpnRouteCommand === "function");
assert(typeof CreateClientVpnRoute$ === "object");
assert(typeof CreateCoipCidrCommand === "function");
assert(typeof CreateCoipCidr$ === "object");
assert(typeof CreateCoipPoolCommand === "function");
assert(typeof CreateCoipPool$ === "object");
assert(typeof CreateCustomerGatewayCommand === "function");
assert(typeof CreateCustomerGateway$ === "object");
assert(typeof CreateDefaultSubnetCommand === "function");
assert(typeof CreateDefaultSubnet$ === "object");
assert(typeof CreateDefaultVpcCommand === "function");
assert(typeof CreateDefaultVpc$ === "object");
assert(typeof CreateDelegateMacVolumeOwnershipTaskCommand === "function");
assert(typeof CreateDelegateMacVolumeOwnershipTask$ === "object");
assert(typeof CreateDhcpOptionsCommand === "function");
assert(typeof CreateDhcpOptions$ === "object");
assert(typeof CreateEgressOnlyInternetGatewayCommand === "function");
assert(typeof CreateEgressOnlyInternetGateway$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateFlowLogsCommand === "function");
assert(typeof CreateFlowLogs$ === "object");
assert(typeof CreateFpgaImageCommand === "function");
assert(typeof CreateFpgaImage$ === "object");
assert(typeof CreateImageCommand === "function");
assert(typeof CreateImage$ === "object");
assert(typeof CreateImageUsageReportCommand === "function");
assert(typeof CreateImageUsageReport$ === "object");
assert(typeof CreateInstanceConnectEndpointCommand === "function");
assert(typeof CreateInstanceConnectEndpoint$ === "object");
assert(typeof CreateInstanceEventWindowCommand === "function");
assert(typeof CreateInstanceEventWindow$ === "object");
assert(typeof CreateInstanceExportTaskCommand === "function");
assert(typeof CreateInstanceExportTask$ === "object");
assert(typeof CreateInternetGatewayCommand === "function");
assert(typeof CreateInternetGateway$ === "object");
assert(typeof CreateInterruptibleCapacityReservationAllocationCommand === "function");
assert(typeof CreateInterruptibleCapacityReservationAllocation$ === "object");
assert(typeof CreateIpamCommand === "function");
assert(typeof CreateIpam$ === "object");
assert(typeof CreateIpamExternalResourceVerificationTokenCommand === "function");
assert(typeof CreateIpamExternalResourceVerificationToken$ === "object");
assert(typeof CreateIpamPolicyCommand === "function");
assert(typeof CreateIpamPolicy$ === "object");
assert(typeof CreateIpamPoolCommand === "function");
assert(typeof CreateIpamPool$ === "object");
assert(typeof CreateIpamPrefixListResolverCommand === "function");
assert(typeof CreateIpamPrefixListResolver$ === "object");
assert(typeof CreateIpamPrefixListResolverTargetCommand === "function");
assert(typeof CreateIpamPrefixListResolverTarget$ === "object");
assert(typeof CreateIpamResourceDiscoveryCommand === "function");
assert(typeof CreateIpamResourceDiscovery$ === "object");
assert(typeof CreateIpamScopeCommand === "function");
assert(typeof CreateIpamScope$ === "object");
assert(typeof CreateKeyPairCommand === "function");
assert(typeof CreateKeyPair$ === "object");
assert(typeof CreateLaunchTemplateCommand === "function");
assert(typeof CreateLaunchTemplate$ === "object");
assert(typeof CreateLaunchTemplateVersionCommand === "function");
assert(typeof CreateLaunchTemplateVersion$ === "object");
assert(typeof CreateLocalGatewayRouteCommand === "function");
assert(typeof CreateLocalGatewayRoute$ === "object");
assert(typeof CreateLocalGatewayRouteTableCommand === "function");
assert(typeof CreateLocalGatewayRouteTable$ === "object");
assert(typeof CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand === "function");
assert(typeof CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation$ === "object");
assert(typeof CreateLocalGatewayRouteTableVpcAssociationCommand === "function");
assert(typeof CreateLocalGatewayRouteTableVpcAssociation$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceCommand === "function");
assert(typeof CreateLocalGatewayVirtualInterface$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceGroupCommand === "function");
assert(typeof CreateLocalGatewayVirtualInterfaceGroup$ === "object");
assert(typeof CreateMacSystemIntegrityProtectionModificationTaskCommand === "function");
assert(typeof CreateMacSystemIntegrityProtectionModificationTask$ === "object");
assert(typeof CreateManagedPrefixListCommand === "function");
assert(typeof CreateManagedPrefixList$ === "object");
assert(typeof CreateNatGatewayCommand === "function");
assert(typeof CreateNatGateway$ === "object");
assert(typeof CreateNetworkAclCommand === "function");
assert(typeof CreateNetworkAcl$ === "object");
assert(typeof CreateNetworkAclEntryCommand === "function");
assert(typeof CreateNetworkAclEntry$ === "object");
assert(typeof CreateNetworkInsightsAccessScopeCommand === "function");
assert(typeof CreateNetworkInsightsAccessScope$ === "object");
assert(typeof CreateNetworkInsightsPathCommand === "function");
assert(typeof CreateNetworkInsightsPath$ === "object");
assert(typeof CreateNetworkInterfaceCommand === "function");
assert(typeof CreateNetworkInterface$ === "object");
assert(typeof CreateNetworkInterfacePermissionCommand === "function");
assert(typeof CreateNetworkInterfacePermission$ === "object");
assert(typeof CreatePlacementGroupCommand === "function");
assert(typeof CreatePlacementGroup$ === "object");
assert(typeof CreatePublicIpv4PoolCommand === "function");
assert(typeof CreatePublicIpv4Pool$ === "object");
assert(typeof CreateReplaceRootVolumeTaskCommand === "function");
assert(typeof CreateReplaceRootVolumeTask$ === "object");
assert(typeof CreateReservedInstancesListingCommand === "function");
assert(typeof CreateReservedInstancesListing$ === "object");
assert(typeof CreateRestoreImageTaskCommand === "function");
assert(typeof CreateRestoreImageTask$ === "object");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRoute$ === "object");
assert(typeof CreateRouteServerCommand === "function");
assert(typeof CreateRouteServer$ === "object");
assert(typeof CreateRouteServerEndpointCommand === "function");
assert(typeof CreateRouteServerEndpoint$ === "object");
assert(typeof CreateRouteServerPeerCommand === "function");
assert(typeof CreateRouteServerPeer$ === "object");
assert(typeof CreateRouteTableCommand === "function");
assert(typeof CreateRouteTable$ === "object");
assert(typeof CreateSecurityGroupCommand === "function");
assert(typeof CreateSecurityGroup$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateSnapshotsCommand === "function");
assert(typeof CreateSnapshots$ === "object");
assert(typeof CreateSpotDatafeedSubscriptionCommand === "function");
assert(typeof CreateSpotDatafeedSubscription$ === "object");
assert(typeof CreateStoreImageTaskCommand === "function");
assert(typeof CreateStoreImageTask$ === "object");
assert(typeof CreateSubnetCommand === "function");
assert(typeof CreateSubnet$ === "object");
assert(typeof CreateSubnetCidrReservationCommand === "function");
assert(typeof CreateSubnetCidrReservation$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof CreateTrafficMirrorFilterCommand === "function");
assert(typeof CreateTrafficMirrorFilter$ === "object");
assert(typeof CreateTrafficMirrorFilterRuleCommand === "function");
assert(typeof CreateTrafficMirrorFilterRule$ === "object");
assert(typeof CreateTrafficMirrorSessionCommand === "function");
assert(typeof CreateTrafficMirrorSession$ === "object");
assert(typeof CreateTrafficMirrorTargetCommand === "function");
assert(typeof CreateTrafficMirrorTarget$ === "object");
assert(typeof CreateTransitGatewayCommand === "function");
assert(typeof CreateTransitGateway$ === "object");
assert(typeof CreateTransitGatewayConnectCommand === "function");
assert(typeof CreateTransitGatewayConnect$ === "object");
assert(typeof CreateTransitGatewayConnectPeerCommand === "function");
assert(typeof CreateTransitGatewayConnectPeer$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyCommand === "function");
assert(typeof CreateTransitGatewayMeteringPolicy$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyEntryCommand === "function");
assert(typeof CreateTransitGatewayMeteringPolicyEntry$ === "object");
assert(typeof CreateTransitGatewayMulticastDomainCommand === "function");
assert(typeof CreateTransitGatewayMulticastDomain$ === "object");
assert(typeof CreateTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof CreateTransitGatewayPeeringAttachment$ === "object");
assert(typeof CreateTransitGatewayPolicyTableCommand === "function");
assert(typeof CreateTransitGatewayPolicyTable$ === "object");
assert(typeof CreateTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof CreateTransitGatewayPrefixListReference$ === "object");
assert(typeof CreateTransitGatewayRouteCommand === "function");
assert(typeof CreateTransitGatewayRoute$ === "object");
assert(typeof CreateTransitGatewayRouteTableCommand === "function");
assert(typeof CreateTransitGatewayRouteTable$ === "object");
assert(typeof CreateTransitGatewayRouteTableAnnouncementCommand === "function");
assert(typeof CreateTransitGatewayRouteTableAnnouncement$ === "object");
assert(typeof CreateTransitGatewayVpcAttachmentCommand === "function");
assert(typeof CreateTransitGatewayVpcAttachment$ === "object");
assert(typeof CreateVerifiedAccessEndpointCommand === "function");
assert(typeof CreateVerifiedAccessEndpoint$ === "object");
assert(typeof CreateVerifiedAccessGroupCommand === "function");
assert(typeof CreateVerifiedAccessGroup$ === "object");
assert(typeof CreateVerifiedAccessInstanceCommand === "function");
assert(typeof CreateVerifiedAccessInstance$ === "object");
assert(typeof CreateVerifiedAccessTrustProviderCommand === "function");
assert(typeof CreateVerifiedAccessTrustProvider$ === "object");
assert(typeof CreateVolumeCommand === "function");
assert(typeof CreateVolume$ === "object");
assert(typeof CreateVpcCommand === "function");
assert(typeof CreateVpc$ === "object");
assert(typeof CreateVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof CreateVpcBlockPublicAccessExclusion$ === "object");
assert(typeof CreateVpcEncryptionControlCommand === "function");
assert(typeof CreateVpcEncryptionControl$ === "object");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof CreateVpcEndpoint$ === "object");
assert(typeof CreateVpcEndpointConnectionNotificationCommand === "function");
assert(typeof CreateVpcEndpointConnectionNotification$ === "object");
assert(typeof CreateVpcEndpointServiceConfigurationCommand === "function");
assert(typeof CreateVpcEndpointServiceConfiguration$ === "object");
assert(typeof CreateVpcPeeringConnectionCommand === "function");
assert(typeof CreateVpcPeeringConnection$ === "object");
assert(typeof CreateVpnConcentratorCommand === "function");
assert(typeof CreateVpnConcentrator$ === "object");
assert(typeof CreateVpnConnectionCommand === "function");
assert(typeof CreateVpnConnection$ === "object");
assert(typeof CreateVpnConnectionRouteCommand === "function");
assert(typeof CreateVpnConnectionRoute$ === "object");
assert(typeof CreateVpnGatewayCommand === "function");
assert(typeof CreateVpnGateway$ === "object");
assert(typeof DeleteCapacityManagerDataExportCommand === "function");
assert(typeof DeleteCapacityManagerDataExport$ === "object");
assert(typeof DeleteCarrierGatewayCommand === "function");
assert(typeof DeleteCarrierGateway$ === "object");
assert(typeof DeleteClientVpnEndpointCommand === "function");
assert(typeof DeleteClientVpnEndpoint$ === "object");
assert(typeof DeleteClientVpnRouteCommand === "function");
assert(typeof DeleteClientVpnRoute$ === "object");
assert(typeof DeleteCoipCidrCommand === "function");
assert(typeof DeleteCoipCidr$ === "object");
assert(typeof DeleteCoipPoolCommand === "function");
assert(typeof DeleteCoipPool$ === "object");
assert(typeof DeleteCustomerGatewayCommand === "function");
assert(typeof DeleteCustomerGateway$ === "object");
assert(typeof DeleteDhcpOptionsCommand === "function");
assert(typeof DeleteDhcpOptions$ === "object");
assert(typeof DeleteEgressOnlyInternetGatewayCommand === "function");
assert(typeof DeleteEgressOnlyInternetGateway$ === "object");
assert(typeof DeleteFleetsCommand === "function");
assert(typeof DeleteFleets$ === "object");
assert(typeof DeleteFlowLogsCommand === "function");
assert(typeof DeleteFlowLogs$ === "object");
assert(typeof DeleteFpgaImageCommand === "function");
assert(typeof DeleteFpgaImage$ === "object");
assert(typeof DeleteImageUsageReportCommand === "function");
assert(typeof DeleteImageUsageReport$ === "object");
assert(typeof DeleteInstanceConnectEndpointCommand === "function");
assert(typeof DeleteInstanceConnectEndpoint$ === "object");
assert(typeof DeleteInstanceEventWindowCommand === "function");
assert(typeof DeleteInstanceEventWindow$ === "object");
assert(typeof DeleteInternetGatewayCommand === "function");
assert(typeof DeleteInternetGateway$ === "object");
assert(typeof DeleteIpamCommand === "function");
assert(typeof DeleteIpam$ === "object");
assert(typeof DeleteIpamExternalResourceVerificationTokenCommand === "function");
assert(typeof DeleteIpamExternalResourceVerificationToken$ === "object");
assert(typeof DeleteIpamPolicyCommand === "function");
assert(typeof DeleteIpamPolicy$ === "object");
assert(typeof DeleteIpamPoolCommand === "function");
assert(typeof DeleteIpamPool$ === "object");
assert(typeof DeleteIpamPrefixListResolverCommand === "function");
assert(typeof DeleteIpamPrefixListResolver$ === "object");
assert(typeof DeleteIpamPrefixListResolverTargetCommand === "function");
assert(typeof DeleteIpamPrefixListResolverTarget$ === "object");
assert(typeof DeleteIpamResourceDiscoveryCommand === "function");
assert(typeof DeleteIpamResourceDiscovery$ === "object");
assert(typeof DeleteIpamScopeCommand === "function");
assert(typeof DeleteIpamScope$ === "object");
assert(typeof DeleteKeyPairCommand === "function");
assert(typeof DeleteKeyPair$ === "object");
assert(typeof DeleteLaunchTemplateCommand === "function");
assert(typeof DeleteLaunchTemplate$ === "object");
assert(typeof DeleteLaunchTemplateVersionsCommand === "function");
assert(typeof DeleteLaunchTemplateVersions$ === "object");
assert(typeof DeleteLocalGatewayRouteCommand === "function");
assert(typeof DeleteLocalGatewayRoute$ === "object");
assert(typeof DeleteLocalGatewayRouteTableCommand === "function");
assert(typeof DeleteLocalGatewayRouteTable$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand === "function");
assert(typeof DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVpcAssociationCommand === "function");
assert(typeof DeleteLocalGatewayRouteTableVpcAssociation$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceCommand === "function");
assert(typeof DeleteLocalGatewayVirtualInterface$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceGroupCommand === "function");
assert(typeof DeleteLocalGatewayVirtualInterfaceGroup$ === "object");
assert(typeof DeleteManagedPrefixListCommand === "function");
assert(typeof DeleteManagedPrefixList$ === "object");
assert(typeof DeleteNatGatewayCommand === "function");
assert(typeof DeleteNatGateway$ === "object");
assert(typeof DeleteNetworkAclCommand === "function");
assert(typeof DeleteNetworkAcl$ === "object");
assert(typeof DeleteNetworkAclEntryCommand === "function");
assert(typeof DeleteNetworkAclEntry$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeCommand === "function");
assert(typeof DeleteNetworkInsightsAccessScope$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeAnalysisCommand === "function");
assert(typeof DeleteNetworkInsightsAccessScopeAnalysis$ === "object");
assert(typeof DeleteNetworkInsightsAnalysisCommand === "function");
assert(typeof DeleteNetworkInsightsAnalysis$ === "object");
assert(typeof DeleteNetworkInsightsPathCommand === "function");
assert(typeof DeleteNetworkInsightsPath$ === "object");
assert(typeof DeleteNetworkInterfaceCommand === "function");
assert(typeof DeleteNetworkInterface$ === "object");
assert(typeof DeleteNetworkInterfacePermissionCommand === "function");
assert(typeof DeleteNetworkInterfacePermission$ === "object");
assert(typeof DeletePlacementGroupCommand === "function");
assert(typeof DeletePlacementGroup$ === "object");
assert(typeof DeletePublicIpv4PoolCommand === "function");
assert(typeof DeletePublicIpv4Pool$ === "object");
assert(typeof DeleteQueuedReservedInstancesCommand === "function");
assert(typeof DeleteQueuedReservedInstances$ === "object");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRoute$ === "object");
assert(typeof DeleteRouteServerCommand === "function");
assert(typeof DeleteRouteServer$ === "object");
assert(typeof DeleteRouteServerEndpointCommand === "function");
assert(typeof DeleteRouteServerEndpoint$ === "object");
assert(typeof DeleteRouteServerPeerCommand === "function");
assert(typeof DeleteRouteServerPeer$ === "object");
assert(typeof DeleteRouteTableCommand === "function");
assert(typeof DeleteRouteTable$ === "object");
assert(typeof DeleteSecurityGroupCommand === "function");
assert(typeof DeleteSecurityGroup$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteSpotDatafeedSubscriptionCommand === "function");
assert(typeof DeleteSpotDatafeedSubscription$ === "object");
assert(typeof DeleteSubnetCommand === "function");
assert(typeof DeleteSubnet$ === "object");
assert(typeof DeleteSubnetCidrReservationCommand === "function");
assert(typeof DeleteSubnetCidrReservation$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteTrafficMirrorFilterCommand === "function");
assert(typeof DeleteTrafficMirrorFilter$ === "object");
assert(typeof DeleteTrafficMirrorFilterRuleCommand === "function");
assert(typeof DeleteTrafficMirrorFilterRule$ === "object");
assert(typeof DeleteTrafficMirrorSessionCommand === "function");
assert(typeof DeleteTrafficMirrorSession$ === "object");
assert(typeof DeleteTrafficMirrorTargetCommand === "function");
assert(typeof DeleteTrafficMirrorTarget$ === "object");
assert(typeof DeleteTransitGatewayCommand === "function");
assert(typeof DeleteTransitGateway$ === "object");
assert(typeof DeleteTransitGatewayConnectCommand === "function");
assert(typeof DeleteTransitGatewayConnect$ === "object");
assert(typeof DeleteTransitGatewayConnectPeerCommand === "function");
assert(typeof DeleteTransitGatewayConnectPeer$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyCommand === "function");
assert(typeof DeleteTransitGatewayMeteringPolicy$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyEntryCommand === "function");
assert(typeof DeleteTransitGatewayMeteringPolicyEntry$ === "object");
assert(typeof DeleteTransitGatewayMulticastDomainCommand === "function");
assert(typeof DeleteTransitGatewayMulticastDomain$ === "object");
assert(typeof DeleteTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof DeleteTransitGatewayPeeringAttachment$ === "object");
assert(typeof DeleteTransitGatewayPolicyTableCommand === "function");
assert(typeof DeleteTransitGatewayPolicyTable$ === "object");
assert(typeof DeleteTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof DeleteTransitGatewayPrefixListReference$ === "object");
assert(typeof DeleteTransitGatewayRouteCommand === "function");
assert(typeof DeleteTransitGatewayRoute$ === "object");
assert(typeof DeleteTransitGatewayRouteTableCommand === "function");
assert(typeof DeleteTransitGatewayRouteTable$ === "object");
assert(typeof DeleteTransitGatewayRouteTableAnnouncementCommand === "function");
assert(typeof DeleteTransitGatewayRouteTableAnnouncement$ === "object");
assert(typeof DeleteTransitGatewayVpcAttachmentCommand === "function");
assert(typeof DeleteTransitGatewayVpcAttachment$ === "object");
assert(typeof DeleteVerifiedAccessEndpointCommand === "function");
assert(typeof DeleteVerifiedAccessEndpoint$ === "object");
assert(typeof DeleteVerifiedAccessGroupCommand === "function");
assert(typeof DeleteVerifiedAccessGroup$ === "object");
assert(typeof DeleteVerifiedAccessInstanceCommand === "function");
assert(typeof DeleteVerifiedAccessInstance$ === "object");
assert(typeof DeleteVerifiedAccessTrustProviderCommand === "function");
assert(typeof DeleteVerifiedAccessTrustProvider$ === "object");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DeleteVolume$ === "object");
assert(typeof DeleteVpcCommand === "function");
assert(typeof DeleteVpc$ === "object");
assert(typeof DeleteVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof DeleteVpcBlockPublicAccessExclusion$ === "object");
assert(typeof DeleteVpcEncryptionControlCommand === "function");
assert(typeof DeleteVpcEncryptionControl$ === "object");
assert(typeof DeleteVpcEndpointConnectionNotificationsCommand === "function");
assert(typeof DeleteVpcEndpointConnectionNotifications$ === "object");
assert(typeof DeleteVpcEndpointsCommand === "function");
assert(typeof DeleteVpcEndpoints$ === "object");
assert(typeof DeleteVpcEndpointServiceConfigurationsCommand === "function");
assert(typeof DeleteVpcEndpointServiceConfigurations$ === "object");
assert(typeof DeleteVpcPeeringConnectionCommand === "function");
assert(typeof DeleteVpcPeeringConnection$ === "object");
assert(typeof DeleteVpnConcentratorCommand === "function");
assert(typeof DeleteVpnConcentrator$ === "object");
assert(typeof DeleteVpnConnectionCommand === "function");
assert(typeof DeleteVpnConnection$ === "object");
assert(typeof DeleteVpnConnectionRouteCommand === "function");
assert(typeof DeleteVpnConnectionRoute$ === "object");
assert(typeof DeleteVpnGatewayCommand === "function");
assert(typeof DeleteVpnGateway$ === "object");
assert(typeof DeprovisionByoipCidrCommand === "function");
assert(typeof DeprovisionByoipCidr$ === "object");
assert(typeof DeprovisionIpamByoasnCommand === "function");
assert(typeof DeprovisionIpamByoasn$ === "object");
assert(typeof DeprovisionIpamPoolCidrCommand === "function");
assert(typeof DeprovisionIpamPoolCidr$ === "object");
assert(typeof DeprovisionPublicIpv4PoolCidrCommand === "function");
assert(typeof DeprovisionPublicIpv4PoolCidr$ === "object");
assert(typeof DeregisterImageCommand === "function");
assert(typeof DeregisterImage$ === "object");
assert(typeof DeregisterInstanceEventNotificationAttributesCommand === "function");
assert(typeof DeregisterInstanceEventNotificationAttributes$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupMembersCommand === "function");
assert(typeof DeregisterTransitGatewayMulticastGroupMembers$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupSourcesCommand === "function");
assert(typeof DeregisterTransitGatewayMulticastGroupSources$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeAddressesCommand === "function");
assert(typeof DescribeAddresses$ === "object");
assert(typeof DescribeAddressesAttributeCommand === "function");
assert(typeof DescribeAddressesAttribute$ === "object");
assert(typeof DescribeAddressTransfersCommand === "function");
assert(typeof DescribeAddressTransfers$ === "object");
assert(typeof DescribeAggregateIdFormatCommand === "function");
assert(typeof DescribeAggregateIdFormat$ === "object");
assert(typeof DescribeAvailabilityZonesCommand === "function");
assert(typeof DescribeAvailabilityZones$ === "object");
assert(typeof DescribeAwsNetworkPerformanceMetricSubscriptionsCommand === "function");
assert(typeof DescribeAwsNetworkPerformanceMetricSubscriptions$ === "object");
assert(typeof DescribeBundleTasksCommand === "function");
assert(typeof DescribeBundleTasks$ === "object");
assert(typeof DescribeByoipCidrsCommand === "function");
assert(typeof DescribeByoipCidrs$ === "object");
assert(typeof DescribeCapacityBlockExtensionHistoryCommand === "function");
assert(typeof DescribeCapacityBlockExtensionHistory$ === "object");
assert(typeof DescribeCapacityBlockExtensionOfferingsCommand === "function");
assert(typeof DescribeCapacityBlockExtensionOfferings$ === "object");
assert(typeof DescribeCapacityBlockOfferingsCommand === "function");
assert(typeof DescribeCapacityBlockOfferings$ === "object");
assert(typeof DescribeCapacityBlocksCommand === "function");
assert(typeof DescribeCapacityBlocks$ === "object");
assert(typeof DescribeCapacityBlockStatusCommand === "function");
assert(typeof DescribeCapacityBlockStatus$ === "object");
assert(typeof DescribeCapacityManagerDataExportsCommand === "function");
assert(typeof DescribeCapacityManagerDataExports$ === "object");
assert(typeof DescribeCapacityReservationBillingRequestsCommand === "function");
assert(typeof DescribeCapacityReservationBillingRequests$ === "object");
assert(typeof DescribeCapacityReservationFleetsCommand === "function");
assert(typeof DescribeCapacityReservationFleets$ === "object");
assert(typeof DescribeCapacityReservationsCommand === "function");
assert(typeof DescribeCapacityReservations$ === "object");
assert(typeof DescribeCapacityReservationTopologyCommand === "function");
assert(typeof DescribeCapacityReservationTopology$ === "object");
assert(typeof DescribeCarrierGatewaysCommand === "function");
assert(typeof DescribeCarrierGateways$ === "object");
assert(typeof DescribeClassicLinkInstancesCommand === "function");
assert(typeof DescribeClassicLinkInstances$ === "object");
assert(typeof DescribeClientVpnAuthorizationRulesCommand === "function");
assert(typeof DescribeClientVpnAuthorizationRules$ === "object");
assert(typeof DescribeClientVpnConnectionsCommand === "function");
assert(typeof DescribeClientVpnConnections$ === "object");
assert(typeof DescribeClientVpnEndpointsCommand === "function");
assert(typeof DescribeClientVpnEndpoints$ === "object");
assert(typeof DescribeClientVpnRoutesCommand === "function");
assert(typeof DescribeClientVpnRoutes$ === "object");
assert(typeof DescribeClientVpnTargetNetworksCommand === "function");
assert(typeof DescribeClientVpnTargetNetworks$ === "object");
assert(typeof DescribeCoipPoolsCommand === "function");
assert(typeof DescribeCoipPools$ === "object");
assert(typeof DescribeConversionTasksCommand === "function");
assert(typeof DescribeConversionTasks$ === "object");
assert(typeof DescribeCustomerGatewaysCommand === "function");
assert(typeof DescribeCustomerGateways$ === "object");
assert(typeof DescribeDeclarativePoliciesReportsCommand === "function");
assert(typeof DescribeDeclarativePoliciesReports$ === "object");
assert(typeof DescribeDhcpOptionsCommand === "function");
assert(typeof DescribeDhcpOptions$ === "object");
assert(typeof DescribeEgressOnlyInternetGatewaysCommand === "function");
assert(typeof DescribeEgressOnlyInternetGateways$ === "object");
assert(typeof DescribeElasticGpusCommand === "function");
assert(typeof DescribeElasticGpus$ === "object");
assert(typeof DescribeExportImageTasksCommand === "function");
assert(typeof DescribeExportImageTasks$ === "object");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeExportTasks$ === "object");
assert(typeof DescribeFastLaunchImagesCommand === "function");
assert(typeof DescribeFastLaunchImages$ === "object");
assert(typeof DescribeFastSnapshotRestoresCommand === "function");
assert(typeof DescribeFastSnapshotRestores$ === "object");
assert(typeof DescribeFleetHistoryCommand === "function");
assert(typeof DescribeFleetHistory$ === "object");
assert(typeof DescribeFleetInstancesCommand === "function");
assert(typeof DescribeFleetInstances$ === "object");
assert(typeof DescribeFleetsCommand === "function");
assert(typeof DescribeFleets$ === "object");
assert(typeof DescribeFlowLogsCommand === "function");
assert(typeof DescribeFlowLogs$ === "object");
assert(typeof DescribeFpgaImageAttributeCommand === "function");
assert(typeof DescribeFpgaImageAttribute$ === "object");
assert(typeof DescribeFpgaImagesCommand === "function");
assert(typeof DescribeFpgaImages$ === "object");
assert(typeof DescribeHostReservationOfferingsCommand === "function");
assert(typeof DescribeHostReservationOfferings$ === "object");
assert(typeof DescribeHostReservationsCommand === "function");
assert(typeof DescribeHostReservations$ === "object");
assert(typeof DescribeHostsCommand === "function");
assert(typeof DescribeHosts$ === "object");
assert(typeof DescribeIamInstanceProfileAssociationsCommand === "function");
assert(typeof DescribeIamInstanceProfileAssociations$ === "object");
assert(typeof DescribeIdentityIdFormatCommand === "function");
assert(typeof DescribeIdentityIdFormat$ === "object");
assert(typeof DescribeIdFormatCommand === "function");
assert(typeof DescribeIdFormat$ === "object");
assert(typeof DescribeImageAttributeCommand === "function");
assert(typeof DescribeImageAttribute$ === "object");
assert(typeof DescribeImageReferencesCommand === "function");
assert(typeof DescribeImageReferences$ === "object");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImages$ === "object");
assert(typeof DescribeImageUsageReportEntriesCommand === "function");
assert(typeof DescribeImageUsageReportEntries$ === "object");
assert(typeof DescribeImageUsageReportsCommand === "function");
assert(typeof DescribeImageUsageReports$ === "object");
assert(typeof DescribeImportImageTasksCommand === "function");
assert(typeof DescribeImportImageTasks$ === "object");
assert(typeof DescribeImportSnapshotTasksCommand === "function");
assert(typeof DescribeImportSnapshotTasks$ === "object");
assert(typeof DescribeInstanceAttributeCommand === "function");
assert(typeof DescribeInstanceAttribute$ === "object");
assert(typeof DescribeInstanceConnectEndpointsCommand === "function");
assert(typeof DescribeInstanceConnectEndpoints$ === "object");
assert(typeof DescribeInstanceCreditSpecificationsCommand === "function");
assert(typeof DescribeInstanceCreditSpecifications$ === "object");
assert(typeof DescribeInstanceEventNotificationAttributesCommand === "function");
assert(typeof DescribeInstanceEventNotificationAttributes$ === "object");
assert(typeof DescribeInstanceEventWindowsCommand === "function");
assert(typeof DescribeInstanceEventWindows$ === "object");
assert(typeof DescribeInstanceImageMetadataCommand === "function");
assert(typeof DescribeInstanceImageMetadata$ === "object");
assert(typeof DescribeInstancesCommand === "function");
assert(typeof DescribeInstances$ === "object");
assert(typeof DescribeInstanceSqlHaHistoryStatesCommand === "function");
assert(typeof DescribeInstanceSqlHaHistoryStates$ === "object");
assert(typeof DescribeInstanceSqlHaStatesCommand === "function");
assert(typeof DescribeInstanceSqlHaStates$ === "object");
assert(typeof DescribeInstanceStatusCommand === "function");
assert(typeof DescribeInstanceStatus$ === "object");
assert(typeof DescribeInstanceTopologyCommand === "function");
assert(typeof DescribeInstanceTopology$ === "object");
assert(typeof DescribeInstanceTypeOfferingsCommand === "function");
assert(typeof DescribeInstanceTypeOfferings$ === "object");
assert(typeof DescribeInstanceTypesCommand === "function");
assert(typeof DescribeInstanceTypes$ === "object");
assert(typeof DescribeInternetGatewaysCommand === "function");
assert(typeof DescribeInternetGateways$ === "object");
assert(typeof DescribeIpamByoasnCommand === "function");
assert(typeof DescribeIpamByoasn$ === "object");
assert(typeof DescribeIpamExternalResourceVerificationTokensCommand === "function");
assert(typeof DescribeIpamExternalResourceVerificationTokens$ === "object");
assert(typeof DescribeIpamPoliciesCommand === "function");
assert(typeof DescribeIpamPolicies$ === "object");
assert(typeof DescribeIpamPoolsCommand === "function");
assert(typeof DescribeIpamPools$ === "object");
assert(typeof DescribeIpamPrefixListResolversCommand === "function");
assert(typeof DescribeIpamPrefixListResolvers$ === "object");
assert(typeof DescribeIpamPrefixListResolverTargetsCommand === "function");
assert(typeof DescribeIpamPrefixListResolverTargets$ === "object");
assert(typeof DescribeIpamResourceDiscoveriesCommand === "function");
assert(typeof DescribeIpamResourceDiscoveries$ === "object");
assert(typeof DescribeIpamResourceDiscoveryAssociationsCommand === "function");
assert(typeof DescribeIpamResourceDiscoveryAssociations$ === "object");
assert(typeof DescribeIpamsCommand === "function");
assert(typeof DescribeIpams$ === "object");
assert(typeof DescribeIpamScopesCommand === "function");
assert(typeof DescribeIpamScopes$ === "object");
assert(typeof DescribeIpv6PoolsCommand === "function");
assert(typeof DescribeIpv6Pools$ === "object");
assert(typeof DescribeKeyPairsCommand === "function");
assert(typeof DescribeKeyPairs$ === "object");
assert(typeof DescribeLaunchTemplatesCommand === "function");
assert(typeof DescribeLaunchTemplates$ === "object");
assert(typeof DescribeLaunchTemplateVersionsCommand === "function");
assert(typeof DescribeLaunchTemplateVersions$ === "object");
assert(typeof DescribeLocalGatewayRouteTablesCommand === "function");
assert(typeof DescribeLocalGatewayRouteTables$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand === "function");
assert(typeof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVpcAssociationsCommand === "function");
assert(typeof DescribeLocalGatewayRouteTableVpcAssociations$ === "object");
assert(typeof DescribeLocalGatewaysCommand === "function");
assert(typeof DescribeLocalGateways$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfaceGroupsCommand === "function");
assert(typeof DescribeLocalGatewayVirtualInterfaceGroups$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfacesCommand === "function");
assert(typeof DescribeLocalGatewayVirtualInterfaces$ === "object");
assert(typeof DescribeLockedSnapshotsCommand === "function");
assert(typeof DescribeLockedSnapshots$ === "object");
assert(typeof DescribeMacHostsCommand === "function");
assert(typeof DescribeMacHosts$ === "object");
assert(typeof DescribeMacModificationTasksCommand === "function");
assert(typeof DescribeMacModificationTasks$ === "object");
assert(typeof DescribeManagedPrefixListsCommand === "function");
assert(typeof DescribeManagedPrefixLists$ === "object");
assert(typeof DescribeMovingAddressesCommand === "function");
assert(typeof DescribeMovingAddresses$ === "object");
assert(typeof DescribeNatGatewaysCommand === "function");
assert(typeof DescribeNatGateways$ === "object");
assert(typeof DescribeNetworkAclsCommand === "function");
assert(typeof DescribeNetworkAcls$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopeAnalysesCommand === "function");
assert(typeof DescribeNetworkInsightsAccessScopeAnalyses$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopesCommand === "function");
assert(typeof DescribeNetworkInsightsAccessScopes$ === "object");
assert(typeof DescribeNetworkInsightsAnalysesCommand === "function");
assert(typeof DescribeNetworkInsightsAnalyses$ === "object");
assert(typeof DescribeNetworkInsightsPathsCommand === "function");
assert(typeof DescribeNetworkInsightsPaths$ === "object");
assert(typeof DescribeNetworkInterfaceAttributeCommand === "function");
assert(typeof DescribeNetworkInterfaceAttribute$ === "object");
assert(typeof DescribeNetworkInterfacePermissionsCommand === "function");
assert(typeof DescribeNetworkInterfacePermissions$ === "object");
assert(typeof DescribeNetworkInterfacesCommand === "function");
assert(typeof DescribeNetworkInterfaces$ === "object");
assert(typeof DescribeOutpostLagsCommand === "function");
assert(typeof DescribeOutpostLags$ === "object");
assert(typeof DescribePlacementGroupsCommand === "function");
assert(typeof DescribePlacementGroups$ === "object");
assert(typeof DescribePrefixListsCommand === "function");
assert(typeof DescribePrefixLists$ === "object");
assert(typeof DescribePrincipalIdFormatCommand === "function");
assert(typeof DescribePrincipalIdFormat$ === "object");
assert(typeof DescribePublicIpv4PoolsCommand === "function");
assert(typeof DescribePublicIpv4Pools$ === "object");
assert(typeof DescribeRegionsCommand === "function");
assert(typeof DescribeRegions$ === "object");
assert(typeof DescribeReplaceRootVolumeTasksCommand === "function");
assert(typeof DescribeReplaceRootVolumeTasks$ === "object");
assert(typeof DescribeReservedInstancesCommand === "function");
assert(typeof DescribeReservedInstances$ === "object");
assert(typeof DescribeReservedInstancesListingsCommand === "function");
assert(typeof DescribeReservedInstancesListings$ === "object");
assert(typeof DescribeReservedInstancesModificationsCommand === "function");
assert(typeof DescribeReservedInstancesModifications$ === "object");
assert(typeof DescribeReservedInstancesOfferingsCommand === "function");
assert(typeof DescribeReservedInstancesOfferings$ === "object");
assert(typeof DescribeRouteServerEndpointsCommand === "function");
assert(typeof DescribeRouteServerEndpoints$ === "object");
assert(typeof DescribeRouteServerPeersCommand === "function");
assert(typeof DescribeRouteServerPeers$ === "object");
assert(typeof DescribeRouteServersCommand === "function");
assert(typeof DescribeRouteServers$ === "object");
assert(typeof DescribeRouteTablesCommand === "function");
assert(typeof DescribeRouteTables$ === "object");
assert(typeof DescribeScheduledInstanceAvailabilityCommand === "function");
assert(typeof DescribeScheduledInstanceAvailability$ === "object");
assert(typeof DescribeScheduledInstancesCommand === "function");
assert(typeof DescribeScheduledInstances$ === "object");
assert(typeof DescribeSecurityGroupReferencesCommand === "function");
assert(typeof DescribeSecurityGroupReferences$ === "object");
assert(typeof DescribeSecurityGroupRulesCommand === "function");
assert(typeof DescribeSecurityGroupRules$ === "object");
assert(typeof DescribeSecurityGroupsCommand === "function");
assert(typeof DescribeSecurityGroups$ === "object");
assert(typeof DescribeSecurityGroupVpcAssociationsCommand === "function");
assert(typeof DescribeSecurityGroupVpcAssociations$ === "object");
assert(typeof DescribeServiceLinkVirtualInterfacesCommand === "function");
assert(typeof DescribeServiceLinkVirtualInterfaces$ === "object");
assert(typeof DescribeSnapshotAttributeCommand === "function");
assert(typeof DescribeSnapshotAttribute$ === "object");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshots$ === "object");
assert(typeof DescribeSnapshotTierStatusCommand === "function");
assert(typeof DescribeSnapshotTierStatus$ === "object");
assert(typeof DescribeSpotDatafeedSubscriptionCommand === "function");
assert(typeof DescribeSpotDatafeedSubscription$ === "object");
assert(typeof DescribeSpotFleetInstancesCommand === "function");
assert(typeof DescribeSpotFleetInstances$ === "object");
assert(typeof DescribeSpotFleetRequestHistoryCommand === "function");
assert(typeof DescribeSpotFleetRequestHistory$ === "object");
assert(typeof DescribeSpotFleetRequestsCommand === "function");
assert(typeof DescribeSpotFleetRequests$ === "object");
assert(typeof DescribeSpotInstanceRequestsCommand === "function");
assert(typeof DescribeSpotInstanceRequests$ === "object");
assert(typeof DescribeSpotPriceHistoryCommand === "function");
assert(typeof DescribeSpotPriceHistory$ === "object");
assert(typeof DescribeStaleSecurityGroupsCommand === "function");
assert(typeof DescribeStaleSecurityGroups$ === "object");
assert(typeof DescribeStoreImageTasksCommand === "function");
assert(typeof DescribeStoreImageTasks$ === "object");
assert(typeof DescribeSubnetsCommand === "function");
assert(typeof DescribeSubnets$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeTrafficMirrorFilterRulesCommand === "function");
assert(typeof DescribeTrafficMirrorFilterRules$ === "object");
assert(typeof DescribeTrafficMirrorFiltersCommand === "function");
assert(typeof DescribeTrafficMirrorFilters$ === "object");
assert(typeof DescribeTrafficMirrorSessionsCommand === "function");
assert(typeof DescribeTrafficMirrorSessions$ === "object");
assert(typeof DescribeTrafficMirrorTargetsCommand === "function");
assert(typeof DescribeTrafficMirrorTargets$ === "object");
assert(typeof DescribeTransitGatewayAttachmentsCommand === "function");
assert(typeof DescribeTransitGatewayAttachments$ === "object");
assert(typeof DescribeTransitGatewayConnectPeersCommand === "function");
assert(typeof DescribeTransitGatewayConnectPeers$ === "object");
assert(typeof DescribeTransitGatewayConnectsCommand === "function");
assert(typeof DescribeTransitGatewayConnects$ === "object");
assert(typeof DescribeTransitGatewayMeteringPoliciesCommand === "function");
assert(typeof DescribeTransitGatewayMeteringPolicies$ === "object");
assert(typeof DescribeTransitGatewayMulticastDomainsCommand === "function");
assert(typeof DescribeTransitGatewayMulticastDomains$ === "object");
assert(typeof DescribeTransitGatewayPeeringAttachmentsCommand === "function");
assert(typeof DescribeTransitGatewayPeeringAttachments$ === "object");
assert(typeof DescribeTransitGatewayPolicyTablesCommand === "function");
assert(typeof DescribeTransitGatewayPolicyTables$ === "object");
assert(typeof DescribeTransitGatewayRouteTableAnnouncementsCommand === "function");
assert(typeof DescribeTransitGatewayRouteTableAnnouncements$ === "object");
assert(typeof DescribeTransitGatewayRouteTablesCommand === "function");
assert(typeof DescribeTransitGatewayRouteTables$ === "object");
assert(typeof DescribeTransitGatewaysCommand === "function");
assert(typeof DescribeTransitGateways$ === "object");
assert(typeof DescribeTransitGatewayVpcAttachmentsCommand === "function");
assert(typeof DescribeTransitGatewayVpcAttachments$ === "object");
assert(typeof DescribeTrunkInterfaceAssociationsCommand === "function");
assert(typeof DescribeTrunkInterfaceAssociations$ === "object");
assert(typeof DescribeVerifiedAccessEndpointsCommand === "function");
assert(typeof DescribeVerifiedAccessEndpoints$ === "object");
assert(typeof DescribeVerifiedAccessGroupsCommand === "function");
assert(typeof DescribeVerifiedAccessGroups$ === "object");
assert(typeof DescribeVerifiedAccessInstanceLoggingConfigurationsCommand === "function");
assert(typeof DescribeVerifiedAccessInstanceLoggingConfigurations$ === "object");
assert(typeof DescribeVerifiedAccessInstancesCommand === "function");
assert(typeof DescribeVerifiedAccessInstances$ === "object");
assert(typeof DescribeVerifiedAccessTrustProvidersCommand === "function");
assert(typeof DescribeVerifiedAccessTrustProviders$ === "object");
assert(typeof DescribeVolumeAttributeCommand === "function");
assert(typeof DescribeVolumeAttribute$ === "object");
assert(typeof DescribeVolumesCommand === "function");
assert(typeof DescribeVolumes$ === "object");
assert(typeof DescribeVolumesModificationsCommand === "function");
assert(typeof DescribeVolumesModifications$ === "object");
assert(typeof DescribeVolumeStatusCommand === "function");
assert(typeof DescribeVolumeStatus$ === "object");
assert(typeof DescribeVpcAttributeCommand === "function");
assert(typeof DescribeVpcAttribute$ === "object");
assert(typeof DescribeVpcBlockPublicAccessExclusionsCommand === "function");
assert(typeof DescribeVpcBlockPublicAccessExclusions$ === "object");
assert(typeof DescribeVpcBlockPublicAccessOptionsCommand === "function");
assert(typeof DescribeVpcBlockPublicAccessOptions$ === "object");
assert(typeof DescribeVpcClassicLinkCommand === "function");
assert(typeof DescribeVpcClassicLink$ === "object");
assert(typeof DescribeVpcClassicLinkDnsSupportCommand === "function");
assert(typeof DescribeVpcClassicLinkDnsSupport$ === "object");
assert(typeof DescribeVpcEncryptionControlsCommand === "function");
assert(typeof DescribeVpcEncryptionControls$ === "object");
assert(typeof DescribeVpcEndpointAssociationsCommand === "function");
assert(typeof DescribeVpcEndpointAssociations$ === "object");
assert(typeof DescribeVpcEndpointConnectionNotificationsCommand === "function");
assert(typeof DescribeVpcEndpointConnectionNotifications$ === "object");
assert(typeof DescribeVpcEndpointConnectionsCommand === "function");
assert(typeof DescribeVpcEndpointConnections$ === "object");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DescribeVpcEndpoints$ === "object");
assert(typeof DescribeVpcEndpointServiceConfigurationsCommand === "function");
assert(typeof DescribeVpcEndpointServiceConfigurations$ === "object");
assert(typeof DescribeVpcEndpointServicePermissionsCommand === "function");
assert(typeof DescribeVpcEndpointServicePermissions$ === "object");
assert(typeof DescribeVpcEndpointServicesCommand === "function");
assert(typeof DescribeVpcEndpointServices$ === "object");
assert(typeof DescribeVpcPeeringConnectionsCommand === "function");
assert(typeof DescribeVpcPeeringConnections$ === "object");
assert(typeof DescribeVpcsCommand === "function");
assert(typeof DescribeVpcs$ === "object");
assert(typeof DescribeVpnConcentratorsCommand === "function");
assert(typeof DescribeVpnConcentrators$ === "object");
assert(typeof DescribeVpnConnectionsCommand === "function");
assert(typeof DescribeVpnConnections$ === "object");
assert(typeof DescribeVpnGatewaysCommand === "function");
assert(typeof DescribeVpnGateways$ === "object");
assert(typeof DetachClassicLinkVpcCommand === "function");
assert(typeof DetachClassicLinkVpc$ === "object");
assert(typeof DetachInternetGatewayCommand === "function");
assert(typeof DetachInternetGateway$ === "object");
assert(typeof DetachNetworkInterfaceCommand === "function");
assert(typeof DetachNetworkInterface$ === "object");
assert(typeof DetachVerifiedAccessTrustProviderCommand === "function");
assert(typeof DetachVerifiedAccessTrustProvider$ === "object");
assert(typeof DetachVolumeCommand === "function");
assert(typeof DetachVolume$ === "object");
assert(typeof DetachVpnGatewayCommand === "function");
assert(typeof DetachVpnGateway$ === "object");
assert(typeof DisableAddressTransferCommand === "function");
assert(typeof DisableAddressTransfer$ === "object");
assert(typeof DisableAllowedImagesSettingsCommand === "function");
assert(typeof DisableAllowedImagesSettings$ === "object");
assert(typeof DisableAwsNetworkPerformanceMetricSubscriptionCommand === "function");
assert(typeof DisableAwsNetworkPerformanceMetricSubscription$ === "object");
assert(typeof DisableCapacityManagerCommand === "function");
assert(typeof DisableCapacityManager$ === "object");
assert(typeof DisableEbsEncryptionByDefaultCommand === "function");
assert(typeof DisableEbsEncryptionByDefault$ === "object");
assert(typeof DisableFastLaunchCommand === "function");
assert(typeof DisableFastLaunch$ === "object");
assert(typeof DisableFastSnapshotRestoresCommand === "function");
assert(typeof DisableFastSnapshotRestores$ === "object");
assert(typeof DisableImageCommand === "function");
assert(typeof DisableImage$ === "object");
assert(typeof DisableImageBlockPublicAccessCommand === "function");
assert(typeof DisableImageBlockPublicAccess$ === "object");
assert(typeof DisableImageDeprecationCommand === "function");
assert(typeof DisableImageDeprecation$ === "object");
assert(typeof DisableImageDeregistrationProtectionCommand === "function");
assert(typeof DisableImageDeregistrationProtection$ === "object");
assert(typeof DisableInstanceSqlHaStandbyDetectionsCommand === "function");
assert(typeof DisableInstanceSqlHaStandbyDetections$ === "object");
assert(typeof DisableIpamOrganizationAdminAccountCommand === "function");
assert(typeof DisableIpamOrganizationAdminAccount$ === "object");
assert(typeof DisableIpamPolicyCommand === "function");
assert(typeof DisableIpamPolicy$ === "object");
assert(typeof DisableRouteServerPropagationCommand === "function");
assert(typeof DisableRouteServerPropagation$ === "object");
assert(typeof DisableSerialConsoleAccessCommand === "function");
assert(typeof DisableSerialConsoleAccess$ === "object");
assert(typeof DisableSnapshotBlockPublicAccessCommand === "function");
assert(typeof DisableSnapshotBlockPublicAccess$ === "object");
assert(typeof DisableTransitGatewayRouteTablePropagationCommand === "function");
assert(typeof DisableTransitGatewayRouteTablePropagation$ === "object");
assert(typeof DisableVgwRoutePropagationCommand === "function");
assert(typeof DisableVgwRoutePropagation$ === "object");
assert(typeof DisableVpcClassicLinkCommand === "function");
assert(typeof DisableVpcClassicLink$ === "object");
assert(typeof DisableVpcClassicLinkDnsSupportCommand === "function");
assert(typeof DisableVpcClassicLinkDnsSupport$ === "object");
assert(typeof DisassociateAddressCommand === "function");
assert(typeof DisassociateAddress$ === "object");
assert(typeof DisassociateCapacityReservationBillingOwnerCommand === "function");
assert(typeof DisassociateCapacityReservationBillingOwner$ === "object");
assert(typeof DisassociateClientVpnTargetNetworkCommand === "function");
assert(typeof DisassociateClientVpnTargetNetwork$ === "object");
assert(typeof DisassociateEnclaveCertificateIamRoleCommand === "function");
assert(typeof DisassociateEnclaveCertificateIamRole$ === "object");
assert(typeof DisassociateIamInstanceProfileCommand === "function");
assert(typeof DisassociateIamInstanceProfile$ === "object");
assert(typeof DisassociateInstanceEventWindowCommand === "function");
assert(typeof DisassociateInstanceEventWindow$ === "object");
assert(typeof DisassociateIpamByoasnCommand === "function");
assert(typeof DisassociateIpamByoasn$ === "object");
assert(typeof DisassociateIpamResourceDiscoveryCommand === "function");
assert(typeof DisassociateIpamResourceDiscovery$ === "object");
assert(typeof DisassociateNatGatewayAddressCommand === "function");
assert(typeof DisassociateNatGatewayAddress$ === "object");
assert(typeof DisassociateRouteServerCommand === "function");
assert(typeof DisassociateRouteServer$ === "object");
assert(typeof DisassociateRouteTableCommand === "function");
assert(typeof DisassociateRouteTable$ === "object");
assert(typeof DisassociateSecurityGroupVpcCommand === "function");
assert(typeof DisassociateSecurityGroupVpc$ === "object");
assert(typeof DisassociateSubnetCidrBlockCommand === "function");
assert(typeof DisassociateSubnetCidrBlock$ === "object");
assert(typeof DisassociateTransitGatewayMulticastDomainCommand === "function");
assert(typeof DisassociateTransitGatewayMulticastDomain$ === "object");
assert(typeof DisassociateTransitGatewayPolicyTableCommand === "function");
assert(typeof DisassociateTransitGatewayPolicyTable$ === "object");
assert(typeof DisassociateTransitGatewayRouteTableCommand === "function");
assert(typeof DisassociateTransitGatewayRouteTable$ === "object");
assert(typeof DisassociateTrunkInterfaceCommand === "function");
assert(typeof DisassociateTrunkInterface$ === "object");
assert(typeof DisassociateVpcCidrBlockCommand === "function");
assert(typeof DisassociateVpcCidrBlock$ === "object");
assert(typeof EnableAddressTransferCommand === "function");
assert(typeof EnableAddressTransfer$ === "object");
assert(typeof EnableAllowedImagesSettingsCommand === "function");
assert(typeof EnableAllowedImagesSettings$ === "object");
assert(typeof EnableAwsNetworkPerformanceMetricSubscriptionCommand === "function");
assert(typeof EnableAwsNetworkPerformanceMetricSubscription$ === "object");
assert(typeof EnableCapacityManagerCommand === "function");
assert(typeof EnableCapacityManager$ === "object");
assert(typeof EnableEbsEncryptionByDefaultCommand === "function");
assert(typeof EnableEbsEncryptionByDefault$ === "object");
assert(typeof EnableFastLaunchCommand === "function");
assert(typeof EnableFastLaunch$ === "object");
assert(typeof EnableFastSnapshotRestoresCommand === "function");
assert(typeof EnableFastSnapshotRestores$ === "object");
assert(typeof EnableImageCommand === "function");
assert(typeof EnableImage$ === "object");
assert(typeof EnableImageBlockPublicAccessCommand === "function");
assert(typeof EnableImageBlockPublicAccess$ === "object");
assert(typeof EnableImageDeprecationCommand === "function");
assert(typeof EnableImageDeprecation$ === "object");
assert(typeof EnableImageDeregistrationProtectionCommand === "function");
assert(typeof EnableImageDeregistrationProtection$ === "object");
assert(typeof EnableInstanceSqlHaStandbyDetectionsCommand === "function");
assert(typeof EnableInstanceSqlHaStandbyDetections$ === "object");
assert(typeof EnableIpamOrganizationAdminAccountCommand === "function");
assert(typeof EnableIpamOrganizationAdminAccount$ === "object");
assert(typeof EnableIpamPolicyCommand === "function");
assert(typeof EnableIpamPolicy$ === "object");
assert(typeof EnableReachabilityAnalyzerOrganizationSharingCommand === "function");
assert(typeof EnableReachabilityAnalyzerOrganizationSharing$ === "object");
assert(typeof EnableRouteServerPropagationCommand === "function");
assert(typeof EnableRouteServerPropagation$ === "object");
assert(typeof EnableSerialConsoleAccessCommand === "function");
assert(typeof EnableSerialConsoleAccess$ === "object");
assert(typeof EnableSnapshotBlockPublicAccessCommand === "function");
assert(typeof EnableSnapshotBlockPublicAccess$ === "object");
assert(typeof EnableTransitGatewayRouteTablePropagationCommand === "function");
assert(typeof EnableTransitGatewayRouteTablePropagation$ === "object");
assert(typeof EnableVgwRoutePropagationCommand === "function");
assert(typeof EnableVgwRoutePropagation$ === "object");
assert(typeof EnableVolumeIOCommand === "function");
assert(typeof EnableVolumeIO$ === "object");
assert(typeof EnableVpcClassicLinkCommand === "function");
assert(typeof EnableVpcClassicLink$ === "object");
assert(typeof EnableVpcClassicLinkDnsSupportCommand === "function");
assert(typeof EnableVpcClassicLinkDnsSupport$ === "object");
assert(typeof ExportClientVpnClientCertificateRevocationListCommand === "function");
assert(typeof ExportClientVpnClientCertificateRevocationList$ === "object");
assert(typeof ExportClientVpnClientConfigurationCommand === "function");
assert(typeof ExportClientVpnClientConfiguration$ === "object");
assert(typeof ExportImageCommand === "function");
assert(typeof ExportImage$ === "object");
assert(typeof ExportTransitGatewayRoutesCommand === "function");
assert(typeof ExportTransitGatewayRoutes$ === "object");
assert(typeof ExportVerifiedAccessInstanceClientConfigurationCommand === "function");
assert(typeof ExportVerifiedAccessInstanceClientConfiguration$ === "object");
assert(typeof GetActiveVpnTunnelStatusCommand === "function");
assert(typeof GetActiveVpnTunnelStatus$ === "object");
assert(typeof GetAllowedImagesSettingsCommand === "function");
assert(typeof GetAllowedImagesSettings$ === "object");
assert(typeof GetAssociatedEnclaveCertificateIamRolesCommand === "function");
assert(typeof GetAssociatedEnclaveCertificateIamRoles$ === "object");
assert(typeof GetAssociatedIpv6PoolCidrsCommand === "function");
assert(typeof GetAssociatedIpv6PoolCidrs$ === "object");
assert(typeof GetAwsNetworkPerformanceDataCommand === "function");
assert(typeof GetAwsNetworkPerformanceData$ === "object");
assert(typeof GetCapacityManagerAttributesCommand === "function");
assert(typeof GetCapacityManagerAttributes$ === "object");
assert(typeof GetCapacityManagerMetricDataCommand === "function");
assert(typeof GetCapacityManagerMetricData$ === "object");
assert(typeof GetCapacityManagerMetricDimensionsCommand === "function");
assert(typeof GetCapacityManagerMetricDimensions$ === "object");
assert(typeof GetCapacityReservationUsageCommand === "function");
assert(typeof GetCapacityReservationUsage$ === "object");
assert(typeof GetCoipPoolUsageCommand === "function");
assert(typeof GetCoipPoolUsage$ === "object");
assert(typeof GetConsoleOutputCommand === "function");
assert(typeof GetConsoleOutput$ === "object");
assert(typeof GetConsoleScreenshotCommand === "function");
assert(typeof GetConsoleScreenshot$ === "object");
assert(typeof GetDeclarativePoliciesReportSummaryCommand === "function");
assert(typeof GetDeclarativePoliciesReportSummary$ === "object");
assert(typeof GetDefaultCreditSpecificationCommand === "function");
assert(typeof GetDefaultCreditSpecification$ === "object");
assert(typeof GetEbsDefaultKmsKeyIdCommand === "function");
assert(typeof GetEbsDefaultKmsKeyId$ === "object");
assert(typeof GetEbsEncryptionByDefaultCommand === "function");
assert(typeof GetEbsEncryptionByDefault$ === "object");
assert(typeof GetEnabledIpamPolicyCommand === "function");
assert(typeof GetEnabledIpamPolicy$ === "object");
assert(typeof GetFlowLogsIntegrationTemplateCommand === "function");
assert(typeof GetFlowLogsIntegrationTemplate$ === "object");
assert(typeof GetGroupsForCapacityReservationCommand === "function");
assert(typeof GetGroupsForCapacityReservation$ === "object");
assert(typeof GetHostReservationPurchasePreviewCommand === "function");
assert(typeof GetHostReservationPurchasePreview$ === "object");
assert(typeof GetImageAncestryCommand === "function");
assert(typeof GetImageAncestry$ === "object");
assert(typeof GetImageBlockPublicAccessStateCommand === "function");
assert(typeof GetImageBlockPublicAccessState$ === "object");
assert(typeof GetInstanceMetadataDefaultsCommand === "function");
assert(typeof GetInstanceMetadataDefaults$ === "object");
assert(typeof GetInstanceTpmEkPubCommand === "function");
assert(typeof GetInstanceTpmEkPub$ === "object");
assert(typeof GetInstanceTypesFromInstanceRequirementsCommand === "function");
assert(typeof GetInstanceTypesFromInstanceRequirements$ === "object");
assert(typeof GetInstanceUefiDataCommand === "function");
assert(typeof GetInstanceUefiData$ === "object");
assert(typeof GetIpamAddressHistoryCommand === "function");
assert(typeof GetIpamAddressHistory$ === "object");
assert(typeof GetIpamDiscoveredAccountsCommand === "function");
assert(typeof GetIpamDiscoveredAccounts$ === "object");
assert(typeof GetIpamDiscoveredPublicAddressesCommand === "function");
assert(typeof GetIpamDiscoveredPublicAddresses$ === "object");
assert(typeof GetIpamDiscoveredResourceCidrsCommand === "function");
assert(typeof GetIpamDiscoveredResourceCidrs$ === "object");
assert(typeof GetIpamPolicyAllocationRulesCommand === "function");
assert(typeof GetIpamPolicyAllocationRules$ === "object");
assert(typeof GetIpamPolicyOrganizationTargetsCommand === "function");
assert(typeof GetIpamPolicyOrganizationTargets$ === "object");
assert(typeof GetIpamPoolAllocationsCommand === "function");
assert(typeof GetIpamPoolAllocations$ === "object");
assert(typeof GetIpamPoolCidrsCommand === "function");
assert(typeof GetIpamPoolCidrs$ === "object");
assert(typeof GetIpamPrefixListResolverRulesCommand === "function");
assert(typeof GetIpamPrefixListResolverRules$ === "object");
assert(typeof GetIpamPrefixListResolverVersionEntriesCommand === "function");
assert(typeof GetIpamPrefixListResolverVersionEntries$ === "object");
assert(typeof GetIpamPrefixListResolverVersionsCommand === "function");
assert(typeof GetIpamPrefixListResolverVersions$ === "object");
assert(typeof GetIpamResourceCidrsCommand === "function");
assert(typeof GetIpamResourceCidrs$ === "object");
assert(typeof GetLaunchTemplateDataCommand === "function");
assert(typeof GetLaunchTemplateData$ === "object");
assert(typeof GetManagedPrefixListAssociationsCommand === "function");
assert(typeof GetManagedPrefixListAssociations$ === "object");
assert(typeof GetManagedPrefixListEntriesCommand === "function");
assert(typeof GetManagedPrefixListEntries$ === "object");
assert(typeof GetNetworkInsightsAccessScopeAnalysisFindingsCommand === "function");
assert(typeof GetNetworkInsightsAccessScopeAnalysisFindings$ === "object");
assert(typeof GetNetworkInsightsAccessScopeContentCommand === "function");
assert(typeof GetNetworkInsightsAccessScopeContent$ === "object");
assert(typeof GetPasswordDataCommand === "function");
assert(typeof GetPasswordData$ === "object");
assert(typeof GetReservedInstancesExchangeQuoteCommand === "function");
assert(typeof GetReservedInstancesExchangeQuote$ === "object");
assert(typeof GetRouteServerAssociationsCommand === "function");
assert(typeof GetRouteServerAssociations$ === "object");
assert(typeof GetRouteServerPropagationsCommand === "function");
assert(typeof GetRouteServerPropagations$ === "object");
assert(typeof GetRouteServerRoutingDatabaseCommand === "function");
assert(typeof GetRouteServerRoutingDatabase$ === "object");
assert(typeof GetSecurityGroupsForVpcCommand === "function");
assert(typeof GetSecurityGroupsForVpc$ === "object");
assert(typeof GetSerialConsoleAccessStatusCommand === "function");
assert(typeof GetSerialConsoleAccessStatus$ === "object");
assert(typeof GetSnapshotBlockPublicAccessStateCommand === "function");
assert(typeof GetSnapshotBlockPublicAccessState$ === "object");
assert(typeof GetSpotPlacementScoresCommand === "function");
assert(typeof GetSpotPlacementScores$ === "object");
assert(typeof GetSubnetCidrReservationsCommand === "function");
assert(typeof GetSubnetCidrReservations$ === "object");
assert(typeof GetTransitGatewayAttachmentPropagationsCommand === "function");
assert(typeof GetTransitGatewayAttachmentPropagations$ === "object");
assert(typeof GetTransitGatewayMeteringPolicyEntriesCommand === "function");
assert(typeof GetTransitGatewayMeteringPolicyEntries$ === "object");
assert(typeof GetTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof GetTransitGatewayMulticastDomainAssociations$ === "object");
assert(typeof GetTransitGatewayPolicyTableAssociationsCommand === "function");
assert(typeof GetTransitGatewayPolicyTableAssociations$ === "object");
assert(typeof GetTransitGatewayPolicyTableEntriesCommand === "function");
assert(typeof GetTransitGatewayPolicyTableEntries$ === "object");
assert(typeof GetTransitGatewayPrefixListReferencesCommand === "function");
assert(typeof GetTransitGatewayPrefixListReferences$ === "object");
assert(typeof GetTransitGatewayRouteTableAssociationsCommand === "function");
assert(typeof GetTransitGatewayRouteTableAssociations$ === "object");
assert(typeof GetTransitGatewayRouteTablePropagationsCommand === "function");
assert(typeof GetTransitGatewayRouteTablePropagations$ === "object");
assert(typeof GetVerifiedAccessEndpointPolicyCommand === "function");
assert(typeof GetVerifiedAccessEndpointPolicy$ === "object");
assert(typeof GetVerifiedAccessEndpointTargetsCommand === "function");
assert(typeof GetVerifiedAccessEndpointTargets$ === "object");
assert(typeof GetVerifiedAccessGroupPolicyCommand === "function");
assert(typeof GetVerifiedAccessGroupPolicy$ === "object");
assert(typeof GetVpcResourcesBlockingEncryptionEnforcementCommand === "function");
assert(typeof GetVpcResourcesBlockingEncryptionEnforcement$ === "object");
assert(typeof GetVpnConnectionDeviceSampleConfigurationCommand === "function");
assert(typeof GetVpnConnectionDeviceSampleConfiguration$ === "object");
assert(typeof GetVpnConnectionDeviceTypesCommand === "function");
assert(typeof GetVpnConnectionDeviceTypes$ === "object");
assert(typeof GetVpnTunnelReplacementStatusCommand === "function");
assert(typeof GetVpnTunnelReplacementStatus$ === "object");
assert(typeof ImportClientVpnClientCertificateRevocationListCommand === "function");
assert(typeof ImportClientVpnClientCertificateRevocationList$ === "object");
assert(typeof ImportImageCommand === "function");
assert(typeof ImportImage$ === "object");
assert(typeof ImportInstanceCommand === "function");
assert(typeof ImportInstance$ === "object");
assert(typeof ImportKeyPairCommand === "function");
assert(typeof ImportKeyPair$ === "object");
assert(typeof ImportSnapshotCommand === "function");
assert(typeof ImportSnapshot$ === "object");
assert(typeof ImportVolumeCommand === "function");
assert(typeof ImportVolume$ === "object");
assert(typeof ListImagesInRecycleBinCommand === "function");
assert(typeof ListImagesInRecycleBin$ === "object");
assert(typeof ListSnapshotsInRecycleBinCommand === "function");
assert(typeof ListSnapshotsInRecycleBin$ === "object");
assert(typeof ListVolumesInRecycleBinCommand === "function");
assert(typeof ListVolumesInRecycleBin$ === "object");
assert(typeof LockSnapshotCommand === "function");
assert(typeof LockSnapshot$ === "object");
assert(typeof ModifyAddressAttributeCommand === "function");
assert(typeof ModifyAddressAttribute$ === "object");
assert(typeof ModifyAvailabilityZoneGroupCommand === "function");
assert(typeof ModifyAvailabilityZoneGroup$ === "object");
assert(typeof ModifyCapacityReservationCommand === "function");
assert(typeof ModifyCapacityReservation$ === "object");
assert(typeof ModifyCapacityReservationFleetCommand === "function");
assert(typeof ModifyCapacityReservationFleet$ === "object");
assert(typeof ModifyClientVpnEndpointCommand === "function");
assert(typeof ModifyClientVpnEndpoint$ === "object");
assert(typeof ModifyDefaultCreditSpecificationCommand === "function");
assert(typeof ModifyDefaultCreditSpecification$ === "object");
assert(typeof ModifyEbsDefaultKmsKeyIdCommand === "function");
assert(typeof ModifyEbsDefaultKmsKeyId$ === "object");
assert(typeof ModifyFleetCommand === "function");
assert(typeof ModifyFleet$ === "object");
assert(typeof ModifyFpgaImageAttributeCommand === "function");
assert(typeof ModifyFpgaImageAttribute$ === "object");
assert(typeof ModifyHostsCommand === "function");
assert(typeof ModifyHosts$ === "object");
assert(typeof ModifyIdentityIdFormatCommand === "function");
assert(typeof ModifyIdentityIdFormat$ === "object");
assert(typeof ModifyIdFormatCommand === "function");
assert(typeof ModifyIdFormat$ === "object");
assert(typeof ModifyImageAttributeCommand === "function");
assert(typeof ModifyImageAttribute$ === "object");
assert(typeof ModifyInstanceAttributeCommand === "function");
assert(typeof ModifyInstanceAttribute$ === "object");
assert(typeof ModifyInstanceCapacityReservationAttributesCommand === "function");
assert(typeof ModifyInstanceCapacityReservationAttributes$ === "object");
assert(typeof ModifyInstanceConnectEndpointCommand === "function");
assert(typeof ModifyInstanceConnectEndpoint$ === "object");
assert(typeof ModifyInstanceCpuOptionsCommand === "function");
assert(typeof ModifyInstanceCpuOptions$ === "object");
assert(typeof ModifyInstanceCreditSpecificationCommand === "function");
assert(typeof ModifyInstanceCreditSpecification$ === "object");
assert(typeof ModifyInstanceEventStartTimeCommand === "function");
assert(typeof ModifyInstanceEventStartTime$ === "object");
assert(typeof ModifyInstanceEventWindowCommand === "function");
assert(typeof ModifyInstanceEventWindow$ === "object");
assert(typeof ModifyInstanceMaintenanceOptionsCommand === "function");
assert(typeof ModifyInstanceMaintenanceOptions$ === "object");
assert(typeof ModifyInstanceMetadataDefaultsCommand === "function");
assert(typeof ModifyInstanceMetadataDefaults$ === "object");
assert(typeof ModifyInstanceMetadataOptionsCommand === "function");
assert(typeof ModifyInstanceMetadataOptions$ === "object");
assert(typeof ModifyInstanceNetworkPerformanceOptionsCommand === "function");
assert(typeof ModifyInstanceNetworkPerformanceOptions$ === "object");
assert(typeof ModifyInstancePlacementCommand === "function");
assert(typeof ModifyInstancePlacement$ === "object");
assert(typeof ModifyIpamCommand === "function");
assert(typeof ModifyIpam$ === "object");
assert(typeof ModifyIpamPolicyAllocationRulesCommand === "function");
assert(typeof ModifyIpamPolicyAllocationRules$ === "object");
assert(typeof ModifyIpamPoolCommand === "function");
assert(typeof ModifyIpamPool$ === "object");
assert(typeof ModifyIpamPrefixListResolverCommand === "function");
assert(typeof ModifyIpamPrefixListResolver$ === "object");
assert(typeof ModifyIpamPrefixListResolverTargetCommand === "function");
assert(typeof ModifyIpamPrefixListResolverTarget$ === "object");
assert(typeof ModifyIpamResourceCidrCommand === "function");
assert(typeof ModifyIpamResourceCidr$ === "object");
assert(typeof ModifyIpamResourceDiscoveryCommand === "function");
assert(typeof ModifyIpamResourceDiscovery$ === "object");
assert(typeof ModifyIpamScopeCommand === "function");
assert(typeof ModifyIpamScope$ === "object");
assert(typeof ModifyLaunchTemplateCommand === "function");
assert(typeof ModifyLaunchTemplate$ === "object");
assert(typeof ModifyLocalGatewayRouteCommand === "function");
assert(typeof ModifyLocalGatewayRoute$ === "object");
assert(typeof ModifyManagedPrefixListCommand === "function");
assert(typeof ModifyManagedPrefixList$ === "object");
assert(typeof ModifyNetworkInterfaceAttributeCommand === "function");
assert(typeof ModifyNetworkInterfaceAttribute$ === "object");
assert(typeof ModifyPrivateDnsNameOptionsCommand === "function");
assert(typeof ModifyPrivateDnsNameOptions$ === "object");
assert(typeof ModifyPublicIpDnsNameOptionsCommand === "function");
assert(typeof ModifyPublicIpDnsNameOptions$ === "object");
assert(typeof ModifyReservedInstancesCommand === "function");
assert(typeof ModifyReservedInstances$ === "object");
assert(typeof ModifyRouteServerCommand === "function");
assert(typeof ModifyRouteServer$ === "object");
assert(typeof ModifySecurityGroupRulesCommand === "function");
assert(typeof ModifySecurityGroupRules$ === "object");
assert(typeof ModifySnapshotAttributeCommand === "function");
assert(typeof ModifySnapshotAttribute$ === "object");
assert(typeof ModifySnapshotTierCommand === "function");
assert(typeof ModifySnapshotTier$ === "object");
assert(typeof ModifySpotFleetRequestCommand === "function");
assert(typeof ModifySpotFleetRequest$ === "object");
assert(typeof ModifySubnetAttributeCommand === "function");
assert(typeof ModifySubnetAttribute$ === "object");
assert(typeof ModifyTrafficMirrorFilterNetworkServicesCommand === "function");
assert(typeof ModifyTrafficMirrorFilterNetworkServices$ === "object");
assert(typeof ModifyTrafficMirrorFilterRuleCommand === "function");
assert(typeof ModifyTrafficMirrorFilterRule$ === "object");
assert(typeof ModifyTrafficMirrorSessionCommand === "function");
assert(typeof ModifyTrafficMirrorSession$ === "object");
assert(typeof ModifyTransitGatewayCommand === "function");
assert(typeof ModifyTransitGateway$ === "object");
assert(typeof ModifyTransitGatewayMeteringPolicyCommand === "function");
assert(typeof ModifyTransitGatewayMeteringPolicy$ === "object");
assert(typeof ModifyTransitGatewayPrefixListReferenceCommand === "function");
assert(typeof ModifyTransitGatewayPrefixListReference$ === "object");
assert(typeof ModifyTransitGatewayVpcAttachmentCommand === "function");
assert(typeof ModifyTransitGatewayVpcAttachment$ === "object");
assert(typeof ModifyVerifiedAccessEndpointCommand === "function");
assert(typeof ModifyVerifiedAccessEndpoint$ === "object");
assert(typeof ModifyVerifiedAccessEndpointPolicyCommand === "function");
assert(typeof ModifyVerifiedAccessEndpointPolicy$ === "object");
assert(typeof ModifyVerifiedAccessGroupCommand === "function");
assert(typeof ModifyVerifiedAccessGroup$ === "object");
assert(typeof ModifyVerifiedAccessGroupPolicyCommand === "function");
assert(typeof ModifyVerifiedAccessGroupPolicy$ === "object");
assert(typeof ModifyVerifiedAccessInstanceCommand === "function");
assert(typeof ModifyVerifiedAccessInstance$ === "object");
assert(typeof ModifyVerifiedAccessInstanceLoggingConfigurationCommand === "function");
assert(typeof ModifyVerifiedAccessInstanceLoggingConfiguration$ === "object");
assert(typeof ModifyVerifiedAccessTrustProviderCommand === "function");
assert(typeof ModifyVerifiedAccessTrustProvider$ === "object");
assert(typeof ModifyVolumeCommand === "function");
assert(typeof ModifyVolume$ === "object");
assert(typeof ModifyVolumeAttributeCommand === "function");
assert(typeof ModifyVolumeAttribute$ === "object");
assert(typeof ModifyVpcAttributeCommand === "function");
assert(typeof ModifyVpcAttribute$ === "object");
assert(typeof ModifyVpcBlockPublicAccessExclusionCommand === "function");
assert(typeof ModifyVpcBlockPublicAccessExclusion$ === "object");
assert(typeof ModifyVpcBlockPublicAccessOptionsCommand === "function");
assert(typeof ModifyVpcBlockPublicAccessOptions$ === "object");
assert(typeof ModifyVpcEncryptionControlCommand === "function");
assert(typeof ModifyVpcEncryptionControl$ === "object");
assert(typeof ModifyVpcEndpointCommand === "function");
assert(typeof ModifyVpcEndpoint$ === "object");
assert(typeof ModifyVpcEndpointConnectionNotificationCommand === "function");
assert(typeof ModifyVpcEndpointConnectionNotification$ === "object");
assert(typeof ModifyVpcEndpointServiceConfigurationCommand === "function");
assert(typeof ModifyVpcEndpointServiceConfiguration$ === "object");
assert(typeof ModifyVpcEndpointServicePayerResponsibilityCommand === "function");
assert(typeof ModifyVpcEndpointServicePayerResponsibility$ === "object");
assert(typeof ModifyVpcEndpointServicePermissionsCommand === "function");
assert(typeof ModifyVpcEndpointServicePermissions$ === "object");
assert(typeof ModifyVpcPeeringConnectionOptionsCommand === "function");
assert(typeof ModifyVpcPeeringConnectionOptions$ === "object");
assert(typeof ModifyVpcTenancyCommand === "function");
assert(typeof ModifyVpcTenancy$ === "object");
assert(typeof ModifyVpnConnectionCommand === "function");
assert(typeof ModifyVpnConnection$ === "object");
assert(typeof ModifyVpnConnectionOptionsCommand === "function");
assert(typeof ModifyVpnConnectionOptions$ === "object");
assert(typeof ModifyVpnTunnelCertificateCommand === "function");
assert(typeof ModifyVpnTunnelCertificate$ === "object");
assert(typeof ModifyVpnTunnelOptionsCommand === "function");
assert(typeof ModifyVpnTunnelOptions$ === "object");
assert(typeof MonitorInstancesCommand === "function");
assert(typeof MonitorInstances$ === "object");
assert(typeof MoveAddressToVpcCommand === "function");
assert(typeof MoveAddressToVpc$ === "object");
assert(typeof MoveByoipCidrToIpamCommand === "function");
assert(typeof MoveByoipCidrToIpam$ === "object");
assert(typeof MoveCapacityReservationInstancesCommand === "function");
assert(typeof MoveCapacityReservationInstances$ === "object");
assert(typeof ProvisionByoipCidrCommand === "function");
assert(typeof ProvisionByoipCidr$ === "object");
assert(typeof ProvisionIpamByoasnCommand === "function");
assert(typeof ProvisionIpamByoasn$ === "object");
assert(typeof ProvisionIpamPoolCidrCommand === "function");
assert(typeof ProvisionIpamPoolCidr$ === "object");
assert(typeof ProvisionPublicIpv4PoolCidrCommand === "function");
assert(typeof ProvisionPublicIpv4PoolCidr$ === "object");
assert(typeof PurchaseCapacityBlockCommand === "function");
assert(typeof PurchaseCapacityBlock$ === "object");
assert(typeof PurchaseCapacityBlockExtensionCommand === "function");
assert(typeof PurchaseCapacityBlockExtension$ === "object");
assert(typeof PurchaseHostReservationCommand === "function");
assert(typeof PurchaseHostReservation$ === "object");
assert(typeof PurchaseReservedInstancesOfferingCommand === "function");
assert(typeof PurchaseReservedInstancesOffering$ === "object");
assert(typeof PurchaseScheduledInstancesCommand === "function");
assert(typeof PurchaseScheduledInstances$ === "object");
assert(typeof RebootInstancesCommand === "function");
assert(typeof RebootInstances$ === "object");
assert(typeof RegisterImageCommand === "function");
assert(typeof RegisterImage$ === "object");
assert(typeof RegisterInstanceEventNotificationAttributesCommand === "function");
assert(typeof RegisterInstanceEventNotificationAttributes$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupMembersCommand === "function");
assert(typeof RegisterTransitGatewayMulticastGroupMembers$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupSourcesCommand === "function");
assert(typeof RegisterTransitGatewayMulticastGroupSources$ === "object");
assert(typeof RejectCapacityReservationBillingOwnershipCommand === "function");
assert(typeof RejectCapacityReservationBillingOwnership$ === "object");
assert(typeof RejectTransitGatewayMulticastDomainAssociationsCommand === "function");
assert(typeof RejectTransitGatewayMulticastDomainAssociations$ === "object");
assert(typeof RejectTransitGatewayPeeringAttachmentCommand === "function");
assert(typeof RejectTransitGatewayPeeringAttachment$ === "object");
assert(typeof RejectTransitGatewayVpcAttachmentCommand === "function");
assert(typeof RejectTransitGatewayVpcAttachment$ === "object");
assert(typeof RejectVpcEndpointConnectionsCommand === "function");
assert(typeof RejectVpcEndpointConnections$ === "object");
assert(typeof RejectVpcPeeringConnectionCommand === "function");
assert(typeof RejectVpcPeeringConnection$ === "object");
assert(typeof ReleaseAddressCommand === "function");
assert(typeof ReleaseAddress$ === "object");
assert(typeof ReleaseHostsCommand === "function");
assert(typeof ReleaseHosts$ === "object");
assert(typeof ReleaseIpamPoolAllocationCommand === "function");
assert(typeof ReleaseIpamPoolAllocation$ === "object");
assert(typeof ReplaceIamInstanceProfileAssociationCommand === "function");
assert(typeof ReplaceIamInstanceProfileAssociation$ === "object");
assert(typeof ReplaceImageCriteriaInAllowedImagesSettingsCommand === "function");
assert(typeof ReplaceImageCriteriaInAllowedImagesSettings$ === "object");
assert(typeof ReplaceNetworkAclAssociationCommand === "function");
assert(typeof ReplaceNetworkAclAssociation$ === "object");
assert(typeof ReplaceNetworkAclEntryCommand === "function");
assert(typeof ReplaceNetworkAclEntry$ === "object");
assert(typeof ReplaceRouteCommand === "function");
assert(typeof ReplaceRoute$ === "object");
assert(typeof ReplaceRouteTableAssociationCommand === "function");
assert(typeof ReplaceRouteTableAssociation$ === "object");
assert(typeof ReplaceTransitGatewayRouteCommand === "function");
assert(typeof ReplaceTransitGatewayRoute$ === "object");
assert(typeof ReplaceVpnTunnelCommand === "function");
assert(typeof ReplaceVpnTunnel$ === "object");
assert(typeof ReportInstanceStatusCommand === "function");
assert(typeof ReportInstanceStatus$ === "object");
assert(typeof RequestSpotFleetCommand === "function");
assert(typeof RequestSpotFleet$ === "object");
assert(typeof RequestSpotInstancesCommand === "function");
assert(typeof RequestSpotInstances$ === "object");
assert(typeof ResetAddressAttributeCommand === "function");
assert(typeof ResetAddressAttribute$ === "object");
assert(typeof ResetEbsDefaultKmsKeyIdCommand === "function");
assert(typeof ResetEbsDefaultKmsKeyId$ === "object");
assert(typeof ResetFpgaImageAttributeCommand === "function");
assert(typeof ResetFpgaImageAttribute$ === "object");
assert(typeof ResetImageAttributeCommand === "function");
assert(typeof ResetImageAttribute$ === "object");
assert(typeof ResetInstanceAttributeCommand === "function");
assert(typeof ResetInstanceAttribute$ === "object");
assert(typeof ResetNetworkInterfaceAttributeCommand === "function");
assert(typeof ResetNetworkInterfaceAttribute$ === "object");
assert(typeof ResetSnapshotAttributeCommand === "function");
assert(typeof ResetSnapshotAttribute$ === "object");
assert(typeof RestoreAddressToClassicCommand === "function");
assert(typeof RestoreAddressToClassic$ === "object");
assert(typeof RestoreImageFromRecycleBinCommand === "function");
assert(typeof RestoreImageFromRecycleBin$ === "object");
assert(typeof RestoreManagedPrefixListVersionCommand === "function");
assert(typeof RestoreManagedPrefixListVersion$ === "object");
assert(typeof RestoreSnapshotFromRecycleBinCommand === "function");
assert(typeof RestoreSnapshotFromRecycleBin$ === "object");
assert(typeof RestoreSnapshotTierCommand === "function");
assert(typeof RestoreSnapshotTier$ === "object");
assert(typeof RestoreVolumeFromRecycleBinCommand === "function");
assert(typeof RestoreVolumeFromRecycleBin$ === "object");
assert(typeof RevokeClientVpnIngressCommand === "function");
assert(typeof RevokeClientVpnIngress$ === "object");
assert(typeof RevokeSecurityGroupEgressCommand === "function");
assert(typeof RevokeSecurityGroupEgress$ === "object");
assert(typeof RevokeSecurityGroupIngressCommand === "function");
assert(typeof RevokeSecurityGroupIngress$ === "object");
assert(typeof RunInstancesCommand === "function");
assert(typeof RunInstances$ === "object");
assert(typeof RunScheduledInstancesCommand === "function");
assert(typeof RunScheduledInstances$ === "object");
assert(typeof SearchLocalGatewayRoutesCommand === "function");
assert(typeof SearchLocalGatewayRoutes$ === "object");
assert(typeof SearchTransitGatewayMulticastGroupsCommand === "function");
assert(typeof SearchTransitGatewayMulticastGroups$ === "object");
assert(typeof SearchTransitGatewayRoutesCommand === "function");
assert(typeof SearchTransitGatewayRoutes$ === "object");
assert(typeof SendDiagnosticInterruptCommand === "function");
assert(typeof SendDiagnosticInterrupt$ === "object");
assert(typeof StartDeclarativePoliciesReportCommand === "function");
assert(typeof StartDeclarativePoliciesReport$ === "object");
assert(typeof StartInstancesCommand === "function");
assert(typeof StartInstances$ === "object");
assert(typeof StartNetworkInsightsAccessScopeAnalysisCommand === "function");
assert(typeof StartNetworkInsightsAccessScopeAnalysis$ === "object");
assert(typeof StartNetworkInsightsAnalysisCommand === "function");
assert(typeof StartNetworkInsightsAnalysis$ === "object");
assert(typeof StartVpcEndpointServicePrivateDnsVerificationCommand === "function");
assert(typeof StartVpcEndpointServicePrivateDnsVerification$ === "object");
assert(typeof StopInstancesCommand === "function");
assert(typeof StopInstances$ === "object");
assert(typeof TerminateClientVpnConnectionsCommand === "function");
assert(typeof TerminateClientVpnConnections$ === "object");
assert(typeof TerminateInstancesCommand === "function");
assert(typeof TerminateInstances$ === "object");
assert(typeof UnassignIpv6AddressesCommand === "function");
assert(typeof UnassignIpv6Addresses$ === "object");
assert(typeof UnassignPrivateIpAddressesCommand === "function");
assert(typeof UnassignPrivateIpAddresses$ === "object");
assert(typeof UnassignPrivateNatGatewayAddressCommand === "function");
assert(typeof UnassignPrivateNatGatewayAddress$ === "object");
assert(typeof UnlockSnapshotCommand === "function");
assert(typeof UnlockSnapshot$ === "object");
assert(typeof UnmonitorInstancesCommand === "function");
assert(typeof UnmonitorInstances$ === "object");
assert(typeof UpdateCapacityManagerOrganizationsAccessCommand === "function");
assert(typeof UpdateCapacityManagerOrganizationsAccess$ === "object");
assert(typeof UpdateInterruptibleCapacityReservationAllocationCommand === "function");
assert(typeof UpdateInterruptibleCapacityReservationAllocation$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsEgressCommand === "function");
assert(typeof UpdateSecurityGroupRuleDescriptionsEgress$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsIngressCommand === "function");
assert(typeof UpdateSecurityGroupRuleDescriptionsIngress$ === "object");
assert(typeof WithdrawByoipCidrCommand === "function");
assert(typeof WithdrawByoipCidr$ === "object");
// structural schemas
assert(typeof AcceleratorCount$ === "object");
assert(typeof AcceleratorCountRequest$ === "object");
assert(typeof AcceleratorTotalMemoryMiB$ === "object");
assert(typeof AcceleratorTotalMemoryMiBRequest$ === "object");
assert(typeof AcceptAddressTransferRequest$ === "object");
assert(typeof AcceptAddressTransferResult$ === "object");
assert(typeof AcceptCapacityReservationBillingOwnershipRequest$ === "object");
assert(typeof AcceptCapacityReservationBillingOwnershipResult$ === "object");
assert(typeof AcceptReservedInstancesExchangeQuoteRequest$ === "object");
assert(typeof AcceptReservedInstancesExchangeQuoteResult$ === "object");
assert(typeof AcceptTransitGatewayMulticastDomainAssociationsRequest$ === "object");
assert(typeof AcceptTransitGatewayMulticastDomainAssociationsResult$ === "object");
assert(typeof AcceptTransitGatewayPeeringAttachmentRequest$ === "object");
assert(typeof AcceptTransitGatewayPeeringAttachmentResult$ === "object");
assert(typeof AcceptTransitGatewayVpcAttachmentRequest$ === "object");
assert(typeof AcceptTransitGatewayVpcAttachmentResult$ === "object");
assert(typeof AcceptVpcEndpointConnectionsRequest$ === "object");
assert(typeof AcceptVpcEndpointConnectionsResult$ === "object");
assert(typeof AcceptVpcPeeringConnectionRequest$ === "object");
assert(typeof AcceptVpcPeeringConnectionResult$ === "object");
assert(typeof AccessScopeAnalysisFinding$ === "object");
assert(typeof AccessScopePath$ === "object");
assert(typeof AccessScopePathRequest$ === "object");
assert(typeof AccountAttribute$ === "object");
assert(typeof AccountAttributeValue$ === "object");
assert(typeof ActiveInstance$ === "object");
assert(typeof ActiveVpnTunnelStatus$ === "object");
assert(typeof AddedPrincipal$ === "object");
assert(typeof AddIpamOperatingRegion$ === "object");
assert(typeof AddIpamOrganizationalUnitExclusion$ === "object");
assert(typeof AdditionalDetail$ === "object");
assert(typeof AddPrefixListEntry$ === "object");
assert(typeof Address$ === "object");
assert(typeof AddressAttribute$ === "object");
assert(typeof AddressTransfer$ === "object");
assert(typeof AdvertiseByoipCidrRequest$ === "object");
assert(typeof AdvertiseByoipCidrResult$ === "object");
assert(typeof AllocateAddressRequest$ === "object");
assert(typeof AllocateAddressResult$ === "object");
assert(typeof AllocateHostsRequest$ === "object");
assert(typeof AllocateHostsResult$ === "object");
assert(typeof AllocateIpamPoolCidrRequest$ === "object");
assert(typeof AllocateIpamPoolCidrResult$ === "object");
assert(typeof AllowedPrincipal$ === "object");
assert(typeof AlternatePathHint$ === "object");
assert(typeof AnalysisAclRule$ === "object");
assert(typeof AnalysisComponent$ === "object");
assert(typeof AnalysisLoadBalancerListener$ === "object");
assert(typeof AnalysisLoadBalancerTarget$ === "object");
assert(typeof AnalysisPacketHeader$ === "object");
assert(typeof AnalysisRouteTableRoute$ === "object");
assert(typeof AnalysisSecurityGroupRule$ === "object");
assert(typeof ApplySecurityGroupsToClientVpnTargetNetworkRequest$ === "object");
assert(typeof ApplySecurityGroupsToClientVpnTargetNetworkResult$ === "object");
assert(typeof AsnAssociation$ === "object");
assert(typeof AsnAuthorizationContext$ === "object");
assert(typeof AssignedPrivateIpAddress$ === "object");
assert(typeof AssignIpv6AddressesRequest$ === "object");
assert(typeof AssignIpv6AddressesResult$ === "object");
assert(typeof AssignPrivateIpAddressesRequest$ === "object");
assert(typeof AssignPrivateIpAddressesResult$ === "object");
assert(typeof AssignPrivateNatGatewayAddressRequest$ === "object");
assert(typeof AssignPrivateNatGatewayAddressResult$ === "object");
assert(typeof AssociateAddressRequest$ === "object");
assert(typeof AssociateAddressResult$ === "object");
assert(typeof AssociateCapacityReservationBillingOwnerRequest$ === "object");
assert(typeof AssociateCapacityReservationBillingOwnerResult$ === "object");
assert(typeof AssociateClientVpnTargetNetworkRequest$ === "object");
assert(typeof AssociateClientVpnTargetNetworkResult$ === "object");
assert(typeof AssociateDhcpOptionsRequest$ === "object");
assert(typeof AssociatedRole$ === "object");
assert(typeof AssociatedTargetNetwork$ === "object");
assert(typeof AssociateEnclaveCertificateIamRoleRequest$ === "object");
assert(typeof AssociateEnclaveCertificateIamRoleResult$ === "object");
assert(typeof AssociateIamInstanceProfileRequest$ === "object");
assert(typeof AssociateIamInstanceProfileResult$ === "object");
assert(typeof AssociateInstanceEventWindowRequest$ === "object");
assert(typeof AssociateInstanceEventWindowResult$ === "object");
assert(typeof AssociateIpamByoasnRequest$ === "object");
assert(typeof AssociateIpamByoasnResult$ === "object");
assert(typeof AssociateIpamResourceDiscoveryRequest$ === "object");
assert(typeof AssociateIpamResourceDiscoveryResult$ === "object");
assert(typeof AssociateNatGatewayAddressRequest$ === "object");
assert(typeof AssociateNatGatewayAddressResult$ === "object");
assert(typeof AssociateRouteServerRequest$ === "object");
assert(typeof AssociateRouteServerResult$ === "object");
assert(typeof AssociateRouteTableRequest$ === "object");
assert(typeof AssociateRouteTableResult$ === "object");
assert(typeof AssociateSecurityGroupVpcRequest$ === "object");
assert(typeof AssociateSecurityGroupVpcResult$ === "object");
assert(typeof AssociateSubnetCidrBlockRequest$ === "object");
assert(typeof AssociateSubnetCidrBlockResult$ === "object");
assert(typeof AssociateTransitGatewayMulticastDomainRequest$ === "object");
assert(typeof AssociateTransitGatewayMulticastDomainResult$ === "object");
assert(typeof AssociateTransitGatewayPolicyTableRequest$ === "object");
assert(typeof AssociateTransitGatewayPolicyTableResult$ === "object");
assert(typeof AssociateTransitGatewayRouteTableRequest$ === "object");
assert(typeof AssociateTransitGatewayRouteTableResult$ === "object");
assert(typeof AssociateTrunkInterfaceRequest$ === "object");
assert(typeof AssociateTrunkInterfaceResult$ === "object");
assert(typeof AssociateVpcCidrBlockRequest$ === "object");
assert(typeof AssociateVpcCidrBlockResult$ === "object");
assert(typeof AssociationStatus$ === "object");
assert(typeof AthenaIntegration$ === "object");
assert(typeof AttachClassicLinkVpcRequest$ === "object");
assert(typeof AttachClassicLinkVpcResult$ === "object");
assert(typeof AttachInternetGatewayRequest$ === "object");
assert(typeof AttachmentEnaSrdSpecification$ === "object");
assert(typeof AttachmentEnaSrdUdpSpecification$ === "object");
assert(typeof AttachNetworkInterfaceRequest$ === "object");
assert(typeof AttachNetworkInterfaceResult$ === "object");
assert(typeof AttachVerifiedAccessTrustProviderRequest$ === "object");
assert(typeof AttachVerifiedAccessTrustProviderResult$ === "object");
assert(typeof AttachVolumeRequest$ === "object");
assert(typeof AttachVpnGatewayRequest$ === "object");
assert(typeof AttachVpnGatewayResult$ === "object");
assert(typeof AttributeBooleanValue$ === "object");
assert(typeof AttributeSummary$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof AuthorizationRule$ === "object");
assert(typeof AuthorizeClientVpnIngressRequest$ === "object");
assert(typeof AuthorizeClientVpnIngressResult$ === "object");
assert(typeof AuthorizeSecurityGroupEgressRequest$ === "object");
assert(typeof AuthorizeSecurityGroupEgressResult$ === "object");
assert(typeof AuthorizeSecurityGroupIngressRequest$ === "object");
assert(typeof AuthorizeSecurityGroupIngressResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof AvailabilityZoneAddress$ === "object");
assert(typeof AvailabilityZoneMessage$ === "object");
assert(typeof AvailableCapacity$ === "object");
assert(typeof BaselineEbsBandwidthMbps$ === "object");
assert(typeof BaselineEbsBandwidthMbpsRequest$ === "object");
assert(typeof BaselinePerformanceFactors$ === "object");
assert(typeof BaselinePerformanceFactorsRequest$ === "object");
assert(typeof BlobAttributeValue$ === "object");
assert(typeof BlockDeviceMapping$ === "object");
assert(typeof BlockDeviceMappingResponse$ === "object");
assert(typeof BlockPublicAccessStates$ === "object");
assert(typeof BundleInstanceRequest$ === "object");
assert(typeof BundleInstanceResult$ === "object");
assert(typeof BundleTask$ === "object");
assert(typeof BundleTaskError$ === "object");
assert(typeof Byoasn$ === "object");
assert(typeof ByoipCidr$ === "object");
assert(typeof CancelBundleTaskRequest$ === "object");
assert(typeof CancelBundleTaskResult$ === "object");
assert(typeof CancelCapacityReservationFleetError$ === "object");
assert(typeof CancelCapacityReservationFleetsRequest$ === "object");
assert(typeof CancelCapacityReservationFleetsResult$ === "object");
assert(typeof CancelCapacityReservationRequest$ === "object");
assert(typeof CancelCapacityReservationResult$ === "object");
assert(typeof CancelConversionRequest$ === "object");
assert(typeof CancelDeclarativePoliciesReportRequest$ === "object");
assert(typeof CancelDeclarativePoliciesReportResult$ === "object");
assert(typeof CancelExportTaskRequest$ === "object");
assert(typeof CancelImageLaunchPermissionRequest$ === "object");
assert(typeof CancelImageLaunchPermissionResult$ === "object");
assert(typeof CancelImportTaskRequest$ === "object");
assert(typeof CancelImportTaskResult$ === "object");
assert(typeof CancelledSpotInstanceRequest$ === "object");
assert(typeof CancelReservedInstancesListingRequest$ === "object");
assert(typeof CancelReservedInstancesListingResult$ === "object");
assert(typeof CancelSpotFleetRequestsError$ === "object");
assert(typeof CancelSpotFleetRequestsErrorItem$ === "object");
assert(typeof CancelSpotFleetRequestsRequest$ === "object");
assert(typeof CancelSpotFleetRequestsResponse$ === "object");
assert(typeof CancelSpotFleetRequestsSuccessItem$ === "object");
assert(typeof CancelSpotInstanceRequestsRequest$ === "object");
assert(typeof CancelSpotInstanceRequestsResult$ === "object");
assert(typeof CapacityAllocation$ === "object");
assert(typeof CapacityBlock$ === "object");
assert(typeof CapacityBlockExtension$ === "object");
assert(typeof CapacityBlockExtensionOffering$ === "object");
assert(typeof CapacityBlockOffering$ === "object");
assert(typeof CapacityBlockStatus$ === "object");
assert(typeof CapacityManagerCondition$ === "object");
assert(typeof CapacityManagerDataExportResponse$ === "object");
assert(typeof CapacityManagerDimension$ === "object");
assert(typeof CapacityReservation$ === "object");
assert(typeof CapacityReservationBillingRequest$ === "object");
assert(typeof CapacityReservationCommitmentInfo$ === "object");
assert(typeof CapacityReservationFleet$ === "object");
assert(typeof CapacityReservationFleetCancellationState$ === "object");
assert(typeof CapacityReservationGroup$ === "object");
assert(typeof CapacityReservationInfo$ === "object");
assert(typeof CapacityReservationOptions$ === "object");
assert(typeof CapacityReservationOptionsRequest$ === "object");
assert(typeof CapacityReservationSpecification$ === "object");
assert(typeof CapacityReservationSpecificationResponse$ === "object");
assert(typeof CapacityReservationStatus$ === "object");
assert(typeof CapacityReservationTarget$ === "object");
assert(typeof CapacityReservationTargetResponse$ === "object");
assert(typeof CapacityReservationTopology$ === "object");
assert(typeof CarrierGateway$ === "object");
assert(typeof CertificateAuthentication$ === "object");
assert(typeof CertificateAuthenticationRequest$ === "object");
assert(typeof CidrAuthorizationContext$ === "object");
assert(typeof CidrBlock$ === "object");
assert(typeof ClassicLinkDnsSupport$ === "object");
assert(typeof ClassicLinkInstance$ === "object");
assert(typeof ClassicLoadBalancer$ === "object");
assert(typeof ClassicLoadBalancersConfig$ === "object");
assert(typeof ClientCertificateRevocationListStatus$ === "object");
assert(typeof ClientConnectOptions$ === "object");
assert(typeof ClientConnectResponseOptions$ === "object");
assert(typeof ClientData$ === "object");
assert(typeof ClientLoginBannerOptions$ === "object");
assert(typeof ClientLoginBannerResponseOptions$ === "object");
assert(typeof ClientRouteEnforcementOptions$ === "object");
assert(typeof ClientRouteEnforcementResponseOptions$ === "object");
assert(typeof ClientVpnAuthentication$ === "object");
assert(typeof ClientVpnAuthenticationRequest$ === "object");
assert(typeof ClientVpnAuthorizationRuleStatus$ === "object");
assert(typeof ClientVpnConnection$ === "object");
assert(typeof ClientVpnConnectionStatus$ === "object");
assert(typeof ClientVpnEndpoint$ === "object");
assert(typeof ClientVpnEndpointAttributeStatus$ === "object");
assert(typeof ClientVpnEndpointStatus$ === "object");
assert(typeof ClientVpnRoute$ === "object");
assert(typeof ClientVpnRouteStatus$ === "object");
assert(typeof CloudWatchLogOptions$ === "object");
assert(typeof CloudWatchLogOptionsSpecification$ === "object");
assert(typeof CoipAddressUsage$ === "object");
assert(typeof CoipCidr$ === "object");
assert(typeof CoipPool$ === "object");
assert(typeof ConfirmProductInstanceRequest$ === "object");
assert(typeof ConfirmProductInstanceResult$ === "object");
assert(typeof ConnectionLogOptions$ === "object");
assert(typeof ConnectionLogResponseOptions$ === "object");
assert(typeof ConnectionNotification$ === "object");
assert(typeof ConnectionTrackingConfiguration$ === "object");
assert(typeof ConnectionTrackingSpecification$ === "object");
assert(typeof ConnectionTrackingSpecificationRequest$ === "object");
assert(typeof ConnectionTrackingSpecificationResponse$ === "object");
assert(typeof ConversionTask$ === "object");
assert(typeof CopyFpgaImageRequest$ === "object");
assert(typeof CopyFpgaImageResult$ === "object");
assert(typeof CopyImageRequest$ === "object");
assert(typeof CopyImageResult$ === "object");
assert(typeof CopySnapshotRequest$ === "object");
assert(typeof CopySnapshotResult$ === "object");
assert(typeof CopyVolumesRequest$ === "object");
assert(typeof CopyVolumesResult$ === "object");
assert(typeof CpuOptions$ === "object");
assert(typeof CpuOptionsRequest$ === "object");
assert(typeof CpuPerformanceFactor$ === "object");
assert(typeof CpuPerformanceFactorRequest$ === "object");
assert(typeof CreateCapacityManagerDataExportRequest$ === "object");
assert(typeof CreateCapacityManagerDataExportResult$ === "object");
assert(typeof CreateCapacityReservationBySplittingRequest$ === "object");
assert(typeof CreateCapacityReservationBySplittingResult$ === "object");
assert(typeof CreateCapacityReservationFleetRequest$ === "object");
assert(typeof CreateCapacityReservationFleetResult$ === "object");
assert(typeof CreateCapacityReservationRequest$ === "object");
assert(typeof CreateCapacityReservationResult$ === "object");
assert(typeof CreateCarrierGatewayRequest$ === "object");
assert(typeof CreateCarrierGatewayResult$ === "object");
assert(typeof CreateClientVpnEndpointRequest$ === "object");
assert(typeof CreateClientVpnEndpointResult$ === "object");
assert(typeof CreateClientVpnRouteRequest$ === "object");
assert(typeof CreateClientVpnRouteResult$ === "object");
assert(typeof CreateCoipCidrRequest$ === "object");
assert(typeof CreateCoipCidrResult$ === "object");
assert(typeof CreateCoipPoolRequest$ === "object");
assert(typeof CreateCoipPoolResult$ === "object");
assert(typeof CreateCustomerGatewayRequest$ === "object");
assert(typeof CreateCustomerGatewayResult$ === "object");
assert(typeof CreateDefaultSubnetRequest$ === "object");
assert(typeof CreateDefaultSubnetResult$ === "object");
assert(typeof CreateDefaultVpcRequest$ === "object");
assert(typeof CreateDefaultVpcResult$ === "object");
assert(typeof CreateDelegateMacVolumeOwnershipTaskRequest$ === "object");
assert(typeof CreateDelegateMacVolumeOwnershipTaskResult$ === "object");
assert(typeof CreateDhcpOptionsRequest$ === "object");
assert(typeof CreateDhcpOptionsResult$ === "object");
assert(typeof CreateEgressOnlyInternetGatewayRequest$ === "object");
assert(typeof CreateEgressOnlyInternetGatewayResult$ === "object");
assert(typeof CreateFleetError$ === "object");
assert(typeof CreateFleetInstance$ === "object");
assert(typeof CreateFleetRequest$ === "object");
assert(typeof CreateFleetResult$ === "object");
assert(typeof CreateFlowLogsRequest$ === "object");
assert(typeof CreateFlowLogsResult$ === "object");
assert(typeof CreateFpgaImageRequest$ === "object");
assert(typeof CreateFpgaImageResult$ === "object");
assert(typeof CreateImageRequest$ === "object");
assert(typeof CreateImageResult$ === "object");
assert(typeof CreateImageUsageReportRequest$ === "object");
assert(typeof CreateImageUsageReportResult$ === "object");
assert(typeof CreateInstanceConnectEndpointRequest$ === "object");
assert(typeof CreateInstanceConnectEndpointResult$ === "object");
assert(typeof CreateInstanceEventWindowRequest$ === "object");
assert(typeof CreateInstanceEventWindowResult$ === "object");
assert(typeof CreateInstanceExportTaskRequest$ === "object");
assert(typeof CreateInstanceExportTaskResult$ === "object");
assert(typeof CreateInternetGatewayRequest$ === "object");
assert(typeof CreateInternetGatewayResult$ === "object");
assert(typeof CreateInterruptibleCapacityReservationAllocationRequest$ === "object");
assert(typeof CreateInterruptibleCapacityReservationAllocationResult$ === "object");
assert(typeof CreateIpamExternalResourceVerificationTokenRequest$ === "object");
assert(typeof CreateIpamExternalResourceVerificationTokenResult$ === "object");
assert(typeof CreateIpamPolicyRequest$ === "object");
assert(typeof CreateIpamPolicyResult$ === "object");
assert(typeof CreateIpamPoolRequest$ === "object");
assert(typeof CreateIpamPoolResult$ === "object");
assert(typeof CreateIpamPrefixListResolverRequest$ === "object");
assert(typeof CreateIpamPrefixListResolverResult$ === "object");
assert(typeof CreateIpamPrefixListResolverTargetRequest$ === "object");
assert(typeof CreateIpamPrefixListResolverTargetResult$ === "object");
assert(typeof CreateIpamRequest$ === "object");
assert(typeof CreateIpamResourceDiscoveryRequest$ === "object");
assert(typeof CreateIpamResourceDiscoveryResult$ === "object");
assert(typeof CreateIpamResult$ === "object");
assert(typeof CreateIpamScopeRequest$ === "object");
assert(typeof CreateIpamScopeResult$ === "object");
assert(typeof CreateKeyPairRequest$ === "object");
assert(typeof CreateLaunchTemplateRequest$ === "object");
assert(typeof CreateLaunchTemplateResult$ === "object");
assert(typeof CreateLaunchTemplateVersionRequest$ === "object");
assert(typeof CreateLaunchTemplateVersionResult$ === "object");
assert(typeof CreateLocalGatewayRouteRequest$ === "object");
assert(typeof CreateLocalGatewayRouteResult$ === "object");
assert(typeof CreateLocalGatewayRouteTableRequest$ === "object");
assert(typeof CreateLocalGatewayRouteTableResult$ === "object");
assert(typeof CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest$ === "object");
assert(typeof CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult$ === "object");
assert(typeof CreateLocalGatewayRouteTableVpcAssociationRequest$ === "object");
assert(typeof CreateLocalGatewayRouteTableVpcAssociationResult$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceGroupRequest$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceGroupResult$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceRequest$ === "object");
assert(typeof CreateLocalGatewayVirtualInterfaceResult$ === "object");
assert(typeof CreateMacSystemIntegrityProtectionModificationTaskRequest$ === "object");
assert(typeof CreateMacSystemIntegrityProtectionModificationTaskResult$ === "object");
assert(typeof CreateManagedPrefixListRequest$ === "object");
assert(typeof CreateManagedPrefixListResult$ === "object");
assert(typeof CreateNatGatewayRequest$ === "object");
assert(typeof CreateNatGatewayResult$ === "object");
assert(typeof CreateNetworkAclEntryRequest$ === "object");
assert(typeof CreateNetworkAclRequest$ === "object");
assert(typeof CreateNetworkAclResult$ === "object");
assert(typeof CreateNetworkInsightsAccessScopeRequest$ === "object");
assert(typeof CreateNetworkInsightsAccessScopeResult$ === "object");
assert(typeof CreateNetworkInsightsPathRequest$ === "object");
assert(typeof CreateNetworkInsightsPathResult$ === "object");
assert(typeof CreateNetworkInterfacePermissionRequest$ === "object");
assert(typeof CreateNetworkInterfacePermissionResult$ === "object");
assert(typeof CreateNetworkInterfaceRequest$ === "object");
assert(typeof CreateNetworkInterfaceResult$ === "object");
assert(typeof CreatePlacementGroupRequest$ === "object");
assert(typeof CreatePlacementGroupResult$ === "object");
assert(typeof CreatePublicIpv4PoolRequest$ === "object");
assert(typeof CreatePublicIpv4PoolResult$ === "object");
assert(typeof CreateReplaceRootVolumeTaskRequest$ === "object");
assert(typeof CreateReplaceRootVolumeTaskResult$ === "object");
assert(typeof CreateReservedInstancesListingRequest$ === "object");
assert(typeof CreateReservedInstancesListingResult$ === "object");
assert(typeof CreateRestoreImageTaskRequest$ === "object");
assert(typeof CreateRestoreImageTaskResult$ === "object");
assert(typeof CreateRouteRequest$ === "object");
assert(typeof CreateRouteResult$ === "object");
assert(typeof CreateRouteServerEndpointRequest$ === "object");
assert(typeof CreateRouteServerEndpointResult$ === "object");
assert(typeof CreateRouteServerPeerRequest$ === "object");
assert(typeof CreateRouteServerPeerResult$ === "object");
assert(typeof CreateRouteServerRequest$ === "object");
assert(typeof CreateRouteServerResult$ === "object");
assert(typeof CreateRouteTableRequest$ === "object");
assert(typeof CreateRouteTableResult$ === "object");
assert(typeof CreateSecurityGroupRequest$ === "object");
assert(typeof CreateSecurityGroupResult$ === "object");
assert(typeof CreateSnapshotRequest$ === "object");
assert(typeof CreateSnapshotsRequest$ === "object");
assert(typeof CreateSnapshotsResult$ === "object");
assert(typeof CreateSpotDatafeedSubscriptionRequest$ === "object");
assert(typeof CreateSpotDatafeedSubscriptionResult$ === "object");
assert(typeof CreateStoreImageTaskRequest$ === "object");
assert(typeof CreateStoreImageTaskResult$ === "object");
assert(typeof CreateSubnetCidrReservationRequest$ === "object");
assert(typeof CreateSubnetCidrReservationResult$ === "object");
assert(typeof CreateSubnetRequest$ === "object");
assert(typeof CreateSubnetResult$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof CreateTrafficMirrorFilterRequest$ === "object");
assert(typeof CreateTrafficMirrorFilterResult$ === "object");
assert(typeof CreateTrafficMirrorFilterRuleRequest$ === "object");
assert(typeof CreateTrafficMirrorFilterRuleResult$ === "object");
assert(typeof CreateTrafficMirrorSessionRequest$ === "object");
assert(typeof CreateTrafficMirrorSessionResult$ === "object");
assert(typeof CreateTrafficMirrorTargetRequest$ === "object");
assert(typeof CreateTrafficMirrorTargetResult$ === "object");
assert(typeof CreateTransitGatewayConnectPeerRequest$ === "object");
assert(typeof CreateTransitGatewayConnectPeerResult$ === "object");
assert(typeof CreateTransitGatewayConnectRequest$ === "object");
assert(typeof CreateTransitGatewayConnectRequestOptions$ === "object");
assert(typeof CreateTransitGatewayConnectResult$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyEntryRequest$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyEntryResult$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyRequest$ === "object");
assert(typeof CreateTransitGatewayMeteringPolicyResult$ === "object");
assert(typeof CreateTransitGatewayMulticastDomainRequest$ === "object");
assert(typeof CreateTransitGatewayMulticastDomainRequestOptions$ === "object");
assert(typeof CreateTransitGatewayMulticastDomainResult$ === "object");
assert(typeof CreateTransitGatewayPeeringAttachmentRequest$ === "object");
assert(typeof CreateTransitGatewayPeeringAttachmentRequestOptions$ === "object");
assert(typeof CreateTransitGatewayPeeringAttachmentResult$ === "object");
assert(typeof CreateTransitGatewayPolicyTableRequest$ === "object");
assert(typeof CreateTransitGatewayPolicyTableResult$ === "object");
assert(typeof CreateTransitGatewayPrefixListReferenceRequest$ === "object");
assert(typeof CreateTransitGatewayPrefixListReferenceResult$ === "object");
assert(typeof CreateTransitGatewayRequest$ === "object");
assert(typeof CreateTransitGatewayResult$ === "object");
assert(typeof CreateTransitGatewayRouteRequest$ === "object");
assert(typeof CreateTransitGatewayRouteResult$ === "object");
assert(typeof CreateTransitGatewayRouteTableAnnouncementRequest$ === "object");
assert(typeof CreateTransitGatewayRouteTableAnnouncementResult$ === "object");
assert(typeof CreateTransitGatewayRouteTableRequest$ === "object");
assert(typeof CreateTransitGatewayRouteTableResult$ === "object");
assert(typeof CreateTransitGatewayVpcAttachmentRequest$ === "object");
assert(typeof CreateTransitGatewayVpcAttachmentRequestOptions$ === "object");
assert(typeof CreateTransitGatewayVpcAttachmentResult$ === "object");
assert(typeof CreateVerifiedAccessEndpointCidrOptions$ === "object");
assert(typeof CreateVerifiedAccessEndpointEniOptions$ === "object");
assert(typeof CreateVerifiedAccessEndpointLoadBalancerOptions$ === "object");
assert(typeof CreateVerifiedAccessEndpointPortRange$ === "object");
assert(typeof CreateVerifiedAccessEndpointRdsOptions$ === "object");
assert(typeof CreateVerifiedAccessEndpointRequest$ === "object");
assert(typeof CreateVerifiedAccessEndpointResult$ === "object");
assert(typeof CreateVerifiedAccessGroupRequest$ === "object");
assert(typeof CreateVerifiedAccessGroupResult$ === "object");
assert(typeof CreateVerifiedAccessInstanceRequest$ === "object");
assert(typeof CreateVerifiedAccessInstanceResult$ === "object");
assert(typeof CreateVerifiedAccessNativeApplicationOidcOptions$ === "object");
assert(typeof CreateVerifiedAccessTrustProviderDeviceOptions$ === "object");
assert(typeof CreateVerifiedAccessTrustProviderOidcOptions$ === "object");
assert(typeof CreateVerifiedAccessTrustProviderRequest$ === "object");
assert(typeof CreateVerifiedAccessTrustProviderResult$ === "object");
assert(typeof CreateVolumePermission$ === "object");
assert(typeof CreateVolumePermissionModifications$ === "object");
assert(typeof CreateVolumeRequest$ === "object");
assert(typeof CreateVpcBlockPublicAccessExclusionRequest$ === "object");
assert(typeof CreateVpcBlockPublicAccessExclusionResult$ === "object");
assert(typeof CreateVpcEncryptionControlRequest$ === "object");
assert(typeof CreateVpcEncryptionControlResult$ === "object");
assert(typeof CreateVpcEndpointConnectionNotificationRequest$ === "object");
assert(typeof CreateVpcEndpointConnectionNotificationResult$ === "object");
assert(typeof CreateVpcEndpointRequest$ === "object");
assert(typeof CreateVpcEndpointResult$ === "object");
assert(typeof CreateVpcEndpointServiceConfigurationRequest$ === "object");
assert(typeof CreateVpcEndpointServiceConfigurationResult$ === "object");
assert(typeof CreateVpcPeeringConnectionRequest$ === "object");
assert(typeof CreateVpcPeeringConnectionResult$ === "object");
assert(typeof CreateVpcRequest$ === "object");
assert(typeof CreateVpcResult$ === "object");
assert(typeof CreateVpnConcentratorRequest$ === "object");
assert(typeof CreateVpnConcentratorResult$ === "object");
assert(typeof CreateVpnConnectionRequest$ === "object");
assert(typeof CreateVpnConnectionResult$ === "object");
assert(typeof CreateVpnConnectionRouteRequest$ === "object");
assert(typeof CreateVpnGatewayRequest$ === "object");
assert(typeof CreateVpnGatewayResult$ === "object");
assert(typeof CreationDateCondition$ === "object");
assert(typeof CreationDateConditionRequest$ === "object");
assert(typeof CreditSpecification$ === "object");
assert(typeof CreditSpecificationRequest$ === "object");
assert(typeof CustomerGateway$ === "object");
assert(typeof DataQuery$ === "object");
assert(typeof DataResponse$ === "object");
assert(typeof DeclarativePoliciesReport$ === "object");
assert(typeof DeleteCapacityManagerDataExportRequest$ === "object");
assert(typeof DeleteCapacityManagerDataExportResult$ === "object");
assert(typeof DeleteCarrierGatewayRequest$ === "object");
assert(typeof DeleteCarrierGatewayResult$ === "object");
assert(typeof DeleteClientVpnEndpointRequest$ === "object");
assert(typeof DeleteClientVpnEndpointResult$ === "object");
assert(typeof DeleteClientVpnRouteRequest$ === "object");
assert(typeof DeleteClientVpnRouteResult$ === "object");
assert(typeof DeleteCoipCidrRequest$ === "object");
assert(typeof DeleteCoipCidrResult$ === "object");
assert(typeof DeleteCoipPoolRequest$ === "object");
assert(typeof DeleteCoipPoolResult$ === "object");
assert(typeof DeleteCustomerGatewayRequest$ === "object");
assert(typeof DeleteDhcpOptionsRequest$ === "object");
assert(typeof DeleteEgressOnlyInternetGatewayRequest$ === "object");
assert(typeof DeleteEgressOnlyInternetGatewayResult$ === "object");
assert(typeof DeleteFleetError$ === "object");
assert(typeof DeleteFleetErrorItem$ === "object");
assert(typeof DeleteFleetsRequest$ === "object");
assert(typeof DeleteFleetsResult$ === "object");
assert(typeof DeleteFleetSuccessItem$ === "object");
assert(typeof DeleteFlowLogsRequest$ === "object");
assert(typeof DeleteFlowLogsResult$ === "object");
assert(typeof DeleteFpgaImageRequest$ === "object");
assert(typeof DeleteFpgaImageResult$ === "object");
assert(typeof DeleteImageUsageReportRequest$ === "object");
assert(typeof DeleteImageUsageReportResult$ === "object");
assert(typeof DeleteInstanceConnectEndpointRequest$ === "object");
assert(typeof DeleteInstanceConnectEndpointResult$ === "object");
assert(typeof DeleteInstanceEventWindowRequest$ === "object");
assert(typeof DeleteInstanceEventWindowResult$ === "object");
assert(typeof DeleteInternetGatewayRequest$ === "object");
assert(typeof DeleteIpamExternalResourceVerificationTokenRequest$ === "object");
assert(typeof DeleteIpamExternalResourceVerificationTokenResult$ === "object");
assert(typeof DeleteIpamPolicyRequest$ === "object");
assert(typeof DeleteIpamPolicyResult$ === "object");
assert(typeof DeleteIpamPoolRequest$ === "object");
assert(typeof DeleteIpamPoolResult$ === "object");
assert(typeof DeleteIpamPrefixListResolverRequest$ === "object");
assert(typeof DeleteIpamPrefixListResolverResult$ === "object");
assert(typeof DeleteIpamPrefixListResolverTargetRequest$ === "object");
assert(typeof DeleteIpamPrefixListResolverTargetResult$ === "object");
assert(typeof DeleteIpamRequest$ === "object");
assert(typeof DeleteIpamResourceDiscoveryRequest$ === "object");
assert(typeof DeleteIpamResourceDiscoveryResult$ === "object");
assert(typeof DeleteIpamResult$ === "object");
assert(typeof DeleteIpamScopeRequest$ === "object");
assert(typeof DeleteIpamScopeResult$ === "object");
assert(typeof DeleteKeyPairRequest$ === "object");
assert(typeof DeleteKeyPairResult$ === "object");
assert(typeof DeleteLaunchTemplateRequest$ === "object");
assert(typeof DeleteLaunchTemplateResult$ === "object");
assert(typeof DeleteLaunchTemplateVersionsRequest$ === "object");
assert(typeof DeleteLaunchTemplateVersionsResponseErrorItem$ === "object");
assert(typeof DeleteLaunchTemplateVersionsResponseSuccessItem$ === "object");
assert(typeof DeleteLaunchTemplateVersionsResult$ === "object");
assert(typeof DeleteLocalGatewayRouteRequest$ === "object");
assert(typeof DeleteLocalGatewayRouteResult$ === "object");
assert(typeof DeleteLocalGatewayRouteTableRequest$ === "object");
assert(typeof DeleteLocalGatewayRouteTableResult$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVpcAssociationRequest$ === "object");
assert(typeof DeleteLocalGatewayRouteTableVpcAssociationResult$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceGroupRequest$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceGroupResult$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceRequest$ === "object");
assert(typeof DeleteLocalGatewayVirtualInterfaceResult$ === "object");
assert(typeof DeleteManagedPrefixListRequest$ === "object");
assert(typeof DeleteManagedPrefixListResult$ === "object");
assert(typeof DeleteNatGatewayRequest$ === "object");
assert(typeof DeleteNatGatewayResult$ === "object");
assert(typeof DeleteNetworkAclEntryRequest$ === "object");
assert(typeof DeleteNetworkAclRequest$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeAnalysisRequest$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeAnalysisResult$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeRequest$ === "object");
assert(typeof DeleteNetworkInsightsAccessScopeResult$ === "object");
assert(typeof DeleteNetworkInsightsAnalysisRequest$ === "object");
assert(typeof DeleteNetworkInsightsAnalysisResult$ === "object");
assert(typeof DeleteNetworkInsightsPathRequest$ === "object");
assert(typeof DeleteNetworkInsightsPathResult$ === "object");
assert(typeof DeleteNetworkInterfacePermissionRequest$ === "object");
assert(typeof DeleteNetworkInterfacePermissionResult$ === "object");
assert(typeof DeleteNetworkInterfaceRequest$ === "object");
assert(typeof DeletePlacementGroupRequest$ === "object");
assert(typeof DeletePublicIpv4PoolRequest$ === "object");
assert(typeof DeletePublicIpv4PoolResult$ === "object");
assert(typeof DeleteQueuedReservedInstancesError$ === "object");
assert(typeof DeleteQueuedReservedInstancesRequest$ === "object");
assert(typeof DeleteQueuedReservedInstancesResult$ === "object");
assert(typeof DeleteRouteRequest$ === "object");
assert(typeof DeleteRouteServerEndpointRequest$ === "object");
assert(typeof DeleteRouteServerEndpointResult$ === "object");
assert(typeof DeleteRouteServerPeerRequest$ === "object");
assert(typeof DeleteRouteServerPeerResult$ === "object");
assert(typeof DeleteRouteServerRequest$ === "object");
assert(typeof DeleteRouteServerResult$ === "object");
assert(typeof DeleteRouteTableRequest$ === "object");
assert(typeof DeleteSecurityGroupRequest$ === "object");
assert(typeof DeleteSecurityGroupResult$ === "object");
assert(typeof DeleteSnapshotRequest$ === "object");
assert(typeof DeleteSnapshotReturnCode$ === "object");
assert(typeof DeleteSpotDatafeedSubscriptionRequest$ === "object");
assert(typeof DeleteSubnetCidrReservationRequest$ === "object");
assert(typeof DeleteSubnetCidrReservationResult$ === "object");
assert(typeof DeleteSubnetRequest$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DeleteTrafficMirrorFilterRequest$ === "object");
assert(typeof DeleteTrafficMirrorFilterResult$ === "object");
assert(typeof DeleteTrafficMirrorFilterRuleRequest$ === "object");
assert(typeof DeleteTrafficMirrorFilterRuleResult$ === "object");
assert(typeof DeleteTrafficMirrorSessionRequest$ === "object");
assert(typeof DeleteTrafficMirrorSessionResult$ === "object");
assert(typeof DeleteTrafficMirrorTargetRequest$ === "object");
assert(typeof DeleteTrafficMirrorTargetResult$ === "object");
assert(typeof DeleteTransitGatewayConnectPeerRequest$ === "object");
assert(typeof DeleteTransitGatewayConnectPeerResult$ === "object");
assert(typeof DeleteTransitGatewayConnectRequest$ === "object");
assert(typeof DeleteTransitGatewayConnectResult$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyEntryRequest$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyEntryResult$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyRequest$ === "object");
assert(typeof DeleteTransitGatewayMeteringPolicyResult$ === "object");
assert(typeof DeleteTransitGatewayMulticastDomainRequest$ === "object");
assert(typeof DeleteTransitGatewayMulticastDomainResult$ === "object");
assert(typeof DeleteTransitGatewayPeeringAttachmentRequest$ === "object");
assert(typeof DeleteTransitGatewayPeeringAttachmentResult$ === "object");
assert(typeof DeleteTransitGatewayPolicyTableRequest$ === "object");
assert(typeof DeleteTransitGatewayPolicyTableResult$ === "object");
assert(typeof DeleteTransitGatewayPrefixListReferenceRequest$ === "object");
assert(typeof DeleteTransitGatewayPrefixListReferenceResult$ === "object");
assert(typeof DeleteTransitGatewayRequest$ === "object");
assert(typeof DeleteTransitGatewayResult$ === "object");
assert(typeof DeleteTransitGatewayRouteRequest$ === "object");
assert(typeof DeleteTransitGatewayRouteResult$ === "object");
assert(typeof DeleteTransitGatewayRouteTableAnnouncementRequest$ === "object");
assert(typeof DeleteTransitGatewayRouteTableAnnouncementResult$ === "object");
assert(typeof DeleteTransitGatewayRouteTableRequest$ === "object");
assert(typeof DeleteTransitGatewayRouteTableResult$ === "object");
assert(typeof DeleteTransitGatewayVpcAttachmentRequest$ === "object");
assert(typeof DeleteTransitGatewayVpcAttachmentResult$ === "object");
assert(typeof DeleteVerifiedAccessEndpointRequest$ === "object");
assert(typeof DeleteVerifiedAccessEndpointResult$ === "object");
assert(typeof DeleteVerifiedAccessGroupRequest$ === "object");
assert(typeof DeleteVerifiedAccessGroupResult$ === "object");
assert(typeof DeleteVerifiedAccessInstanceRequest$ === "object");
assert(typeof DeleteVerifiedAccessInstanceResult$ === "object");
assert(typeof DeleteVerifiedAccessTrustProviderRequest$ === "object");
assert(typeof DeleteVerifiedAccessTrustProviderResult$ === "object");
assert(typeof DeleteVolumeRequest$ === "object");
assert(typeof DeleteVpcBlockPublicAccessExclusionRequest$ === "object");
assert(typeof DeleteVpcBlockPublicAccessExclusionResult$ === "object");
assert(typeof DeleteVpcEncryptionControlRequest$ === "object");
assert(typeof DeleteVpcEncryptionControlResult$ === "object");
assert(typeof DeleteVpcEndpointConnectionNotificationsRequest$ === "object");
assert(typeof DeleteVpcEndpointConnectionNotificationsResult$ === "object");
assert(typeof DeleteVpcEndpointServiceConfigurationsRequest$ === "object");
assert(typeof DeleteVpcEndpointServiceConfigurationsResult$ === "object");
assert(typeof DeleteVpcEndpointsRequest$ === "object");
assert(typeof DeleteVpcEndpointsResult$ === "object");
assert(typeof DeleteVpcPeeringConnectionRequest$ === "object");
assert(typeof DeleteVpcPeeringConnectionResult$ === "object");
assert(typeof DeleteVpcRequest$ === "object");
assert(typeof DeleteVpnConcentratorRequest$ === "object");
assert(typeof DeleteVpnConcentratorResult$ === "object");
assert(typeof DeleteVpnConnectionRequest$ === "object");
assert(typeof DeleteVpnConnectionRouteRequest$ === "object");
assert(typeof DeleteVpnGatewayRequest$ === "object");
assert(typeof DeprecationTimeCondition$ === "object");
assert(typeof DeprecationTimeConditionRequest$ === "object");
assert(typeof DeprovisionByoipCidrRequest$ === "object");
assert(typeof DeprovisionByoipCidrResult$ === "object");
assert(typeof DeprovisionIpamByoasnRequest$ === "object");
assert(typeof DeprovisionIpamByoasnResult$ === "object");
assert(typeof DeprovisionIpamPoolCidrRequest$ === "object");
assert(typeof DeprovisionIpamPoolCidrResult$ === "object");
assert(typeof DeprovisionPublicIpv4PoolCidrRequest$ === "object");
assert(typeof DeprovisionPublicIpv4PoolCidrResult$ === "object");
assert(typeof DeregisterImageRequest$ === "object");
assert(typeof DeregisterImageResult$ === "object");
assert(typeof DeregisterInstanceEventNotificationAttributesRequest$ === "object");
assert(typeof DeregisterInstanceEventNotificationAttributesResult$ === "object");
assert(typeof DeregisterInstanceTagAttributeRequest$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupMembersRequest$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupMembersResult$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupSourcesRequest$ === "object");
assert(typeof DeregisterTransitGatewayMulticastGroupSourcesResult$ === "object");
assert(typeof DescribeAccountAttributesRequest$ === "object");
assert(typeof DescribeAccountAttributesResult$ === "object");
assert(typeof DescribeAddressesAttributeRequest$ === "object");
assert(typeof DescribeAddressesAttributeResult$ === "object");
assert(typeof DescribeAddressesRequest$ === "object");
assert(typeof DescribeAddressesResult$ === "object");
assert(typeof DescribeAddressTransfersRequest$ === "object");
assert(typeof DescribeAddressTransfersResult$ === "object");
assert(typeof DescribeAggregateIdFormatRequest$ === "object");
assert(typeof DescribeAggregateIdFormatResult$ === "object");
assert(typeof DescribeAvailabilityZonesRequest$ === "object");
assert(typeof DescribeAvailabilityZonesResult$ === "object");
assert(typeof DescribeAwsNetworkPerformanceMetricSubscriptionsRequest$ === "object");
assert(typeof DescribeAwsNetworkPerformanceMetricSubscriptionsResult$ === "object");
assert(typeof DescribeBundleTasksRequest$ === "object");
assert(typeof DescribeBundleTasksResult$ === "object");
assert(typeof DescribeByoipCidrsRequest$ === "object");
assert(typeof DescribeByoipCidrsResult$ === "object");
assert(typeof DescribeCapacityBlockExtensionHistoryRequest$ === "object");
assert(typeof DescribeCapacityBlockExtensionHistoryResult$ === "object");
assert(typeof DescribeCapacityBlockExtensionOfferingsRequest$ === "object");
assert(typeof DescribeCapacityBlockExtensionOfferingsResult$ === "object");
assert(typeof DescribeCapacityBlockOfferingsRequest$ === "object");
assert(typeof DescribeCapacityBlockOfferingsResult$ === "object");
assert(typeof DescribeCapacityBlocksRequest$ === "object");
assert(typeof DescribeCapacityBlocksResult$ === "object");
assert(typeof DescribeCapacityBlockStatusRequest$ === "object");
assert(typeof DescribeCapacityBlockStatusResult$ === "object");
assert(typeof DescribeCapacityManagerDataExportsRequest$ === "object");
assert(typeof DescribeCapacityManagerDataExportsResult$ === "object");
assert(typeof DescribeCapacityReservationBillingRequestsRequest$ === "object");
assert(typeof DescribeCapacityReservationBillingRequestsResult$ === "object");
assert(typeof DescribeCapacityReservationFleetsRequest$ === "object");
assert(typeof DescribeCapacityReservationFleetsResult$ === "object");
assert(typeof DescribeCapacityReservationsRequest$ === "object");
assert(typeof DescribeCapacityReservationsResult$ === "object");
assert(typeof DescribeCapacityReservationTopologyRequest$ === "object");
assert(typeof DescribeCapacityReservationTopologyResult$ === "object");
assert(typeof DescribeCarrierGatewaysRequest$ === "object");
assert(typeof DescribeCarrierGatewaysResult$ === "object");
assert(typeof DescribeClassicLinkInstancesRequest$ === "object");
assert(typeof DescribeClassicLinkInstancesResult$ === "object");
assert(typeof DescribeClientVpnAuthorizationRulesRequest$ === "object");
assert(typeof DescribeClientVpnAuthorizationRulesResult$ === "object");
assert(typeof DescribeClientVpnConnectionsRequest$ === "object");
assert(typeof DescribeClientVpnConnectionsResult$ === "object");
assert(typeof DescribeClientVpnEndpointsRequest$ === "object");
assert(typeof DescribeClientVpnEndpointsResult$ === "object");
assert(typeof DescribeClientVpnRoutesRequest$ === "object");
assert(typeof DescribeClientVpnRoutesResult$ === "object");
assert(typeof DescribeClientVpnTargetNetworksRequest$ === "object");
assert(typeof DescribeClientVpnTargetNetworksResult$ === "object");
assert(typeof DescribeCoipPoolsRequest$ === "object");
assert(typeof DescribeCoipPoolsResult$ === "object");
assert(typeof DescribeConversionTasksRequest$ === "object");
assert(typeof DescribeConversionTasksResult$ === "object");
assert(typeof DescribeCustomerGatewaysRequest$ === "object");
assert(typeof DescribeCustomerGatewaysResult$ === "object");
assert(typeof DescribeDeclarativePoliciesReportsRequest$ === "object");
assert(typeof DescribeDeclarativePoliciesReportsResult$ === "object");
assert(typeof DescribeDhcpOptionsRequest$ === "object");
assert(typeof DescribeDhcpOptionsResult$ === "object");
assert(typeof DescribeEgressOnlyInternetGatewaysRequest$ === "object");
assert(typeof DescribeEgressOnlyInternetGatewaysResult$ === "object");
assert(typeof DescribeElasticGpusRequest$ === "object");
assert(typeof DescribeElasticGpusResult$ === "object");
assert(typeof DescribeExportImageTasksRequest$ === "object");
assert(typeof DescribeExportImageTasksResult$ === "object");
assert(typeof DescribeExportTasksRequest$ === "object");
assert(typeof DescribeExportTasksResult$ === "object");
assert(typeof DescribeFastLaunchImagesRequest$ === "object");
assert(typeof DescribeFastLaunchImagesResult$ === "object");
assert(typeof DescribeFastLaunchImagesSuccessItem$ === "object");
assert(typeof DescribeFastSnapshotRestoresRequest$ === "object");
assert(typeof DescribeFastSnapshotRestoresResult$ === "object");
assert(typeof DescribeFastSnapshotRestoreSuccessItem$ === "object");
assert(typeof DescribeFleetError$ === "object");
assert(typeof DescribeFleetHistoryRequest$ === "object");
assert(typeof DescribeFleetHistoryResult$ === "object");
assert(typeof DescribeFleetInstancesRequest$ === "object");
assert(typeof DescribeFleetInstancesResult$ === "object");
assert(typeof DescribeFleetsInstances$ === "object");
assert(typeof DescribeFleetsRequest$ === "object");
assert(typeof DescribeFleetsResult$ === "object");
assert(typeof DescribeFlowLogsRequest$ === "object");
assert(typeof DescribeFlowLogsResult$ === "object");
assert(typeof DescribeFpgaImageAttributeRequest$ === "object");
assert(typeof DescribeFpgaImageAttributeResult$ === "object");
assert(typeof DescribeFpgaImagesRequest$ === "object");
assert(typeof DescribeFpgaImagesResult$ === "object");
assert(typeof DescribeHostReservationOfferingsRequest$ === "object");
assert(typeof DescribeHostReservationOfferingsResult$ === "object");
assert(typeof DescribeHostReservationsRequest$ === "object");
assert(typeof DescribeHostReservationsResult$ === "object");
assert(typeof DescribeHostsRequest$ === "object");
assert(typeof DescribeHostsResult$ === "object");
assert(typeof DescribeIamInstanceProfileAssociationsRequest$ === "object");
assert(typeof DescribeIamInstanceProfileAssociationsResult$ === "object");
assert(typeof DescribeIdentityIdFormatRequest$ === "object");
assert(typeof DescribeIdentityIdFormatResult$ === "object");
assert(typeof DescribeIdFormatRequest$ === "object");
assert(typeof DescribeIdFormatResult$ === "object");
assert(typeof DescribeImageAttributeRequest$ === "object");
assert(typeof DescribeImageReferencesRequest$ === "object");
assert(typeof DescribeImageReferencesResult$ === "object");
assert(typeof DescribeImagesRequest$ === "object");
assert(typeof DescribeImagesResult$ === "object");
assert(typeof DescribeImageUsageReportEntriesRequest$ === "object");
assert(typeof DescribeImageUsageReportEntriesResult$ === "object");
assert(typeof DescribeImageUsageReportsRequest$ === "object");
assert(typeof DescribeImageUsageReportsResult$ === "object");
assert(typeof DescribeImportImageTasksRequest$ === "object");
assert(typeof DescribeImportImageTasksResult$ === "object");
assert(typeof DescribeImportSnapshotTasksRequest$ === "object");
assert(typeof DescribeImportSnapshotTasksResult$ === "object");
assert(typeof DescribeInstanceAttributeRequest$ === "object");
assert(typeof DescribeInstanceConnectEndpointsRequest$ === "object");
assert(typeof DescribeInstanceConnectEndpointsResult$ === "object");
assert(typeof DescribeInstanceCreditSpecificationsRequest$ === "object");
assert(typeof DescribeInstanceCreditSpecificationsResult$ === "object");
assert(typeof DescribeInstanceEventNotificationAttributesRequest$ === "object");
assert(typeof DescribeInstanceEventNotificationAttributesResult$ === "object");
assert(typeof DescribeInstanceEventWindowsRequest$ === "object");
assert(typeof DescribeInstanceEventWindowsResult$ === "object");
assert(typeof DescribeInstanceImageMetadataRequest$ === "object");
assert(typeof DescribeInstanceImageMetadataResult$ === "object");
assert(typeof DescribeInstanceSqlHaHistoryStatesRequest$ === "object");
assert(typeof DescribeInstanceSqlHaHistoryStatesResult$ === "object");
assert(typeof DescribeInstanceSqlHaStatesRequest$ === "object");
assert(typeof DescribeInstanceSqlHaStatesResult$ === "object");
assert(typeof DescribeInstancesRequest$ === "object");
assert(typeof DescribeInstancesResult$ === "object");
assert(typeof DescribeInstanceStatusRequest$ === "object");
assert(typeof DescribeInstanceStatusResult$ === "object");
assert(typeof DescribeInstanceTopologyRequest$ === "object");
assert(typeof DescribeInstanceTopologyResult$ === "object");
assert(typeof DescribeInstanceTypeOfferingsRequest$ === "object");
assert(typeof DescribeInstanceTypeOfferingsResult$ === "object");
assert(typeof DescribeInstanceTypesRequest$ === "object");
assert(typeof DescribeInstanceTypesResult$ === "object");
assert(typeof DescribeInternetGatewaysRequest$ === "object");
assert(typeof DescribeInternetGatewaysResult$ === "object");
assert(typeof DescribeIpamByoasnRequest$ === "object");
assert(typeof DescribeIpamByoasnResult$ === "object");
assert(typeof DescribeIpamExternalResourceVerificationTokensRequest$ === "object");
assert(typeof DescribeIpamExternalResourceVerificationTokensResult$ === "object");
assert(typeof DescribeIpamPoliciesRequest$ === "object");
assert(typeof DescribeIpamPoliciesResult$ === "object");
assert(typeof DescribeIpamPoolsRequest$ === "object");
assert(typeof DescribeIpamPoolsResult$ === "object");
assert(typeof DescribeIpamPrefixListResolversRequest$ === "object");
assert(typeof DescribeIpamPrefixListResolversResult$ === "object");
assert(typeof DescribeIpamPrefixListResolverTargetsRequest$ === "object");
assert(typeof DescribeIpamPrefixListResolverTargetsResult$ === "object");
assert(typeof DescribeIpamResourceDiscoveriesRequest$ === "object");
assert(typeof DescribeIpamResourceDiscoveriesResult$ === "object");
assert(typeof DescribeIpamResourceDiscoveryAssociationsRequest$ === "object");
assert(typeof DescribeIpamResourceDiscoveryAssociationsResult$ === "object");
assert(typeof DescribeIpamScopesRequest$ === "object");
assert(typeof DescribeIpamScopesResult$ === "object");
assert(typeof DescribeIpamsRequest$ === "object");
assert(typeof DescribeIpamsResult$ === "object");
assert(typeof DescribeIpv6PoolsRequest$ === "object");
assert(typeof DescribeIpv6PoolsResult$ === "object");
assert(typeof DescribeKeyPairsRequest$ === "object");
assert(typeof DescribeKeyPairsResult$ === "object");
assert(typeof DescribeLaunchTemplatesRequest$ === "object");
assert(typeof DescribeLaunchTemplatesResult$ === "object");
assert(typeof DescribeLaunchTemplateVersionsRequest$ === "object");
assert(typeof DescribeLaunchTemplateVersionsResult$ === "object");
assert(typeof DescribeLocalGatewayRouteTablesRequest$ === "object");
assert(typeof DescribeLocalGatewayRouteTablesResult$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVpcAssociationsRequest$ === "object");
assert(typeof DescribeLocalGatewayRouteTableVpcAssociationsResult$ === "object");
assert(typeof DescribeLocalGatewaysRequest$ === "object");
assert(typeof DescribeLocalGatewaysResult$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfaceGroupsRequest$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfaceGroupsResult$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfacesRequest$ === "object");
assert(typeof DescribeLocalGatewayVirtualInterfacesResult$ === "object");
assert(typeof DescribeLockedSnapshotsRequest$ === "object");
assert(typeof DescribeLockedSnapshotsResult$ === "object");
assert(typeof DescribeMacHostsRequest$ === "object");
assert(typeof DescribeMacHostsResult$ === "object");
assert(typeof DescribeMacModificationTasksRequest$ === "object");
assert(typeof DescribeMacModificationTasksResult$ === "object");
assert(typeof DescribeManagedPrefixListsRequest$ === "object");
assert(typeof DescribeManagedPrefixListsResult$ === "object");
assert(typeof DescribeMovingAddressesRequest$ === "object");
assert(typeof DescribeMovingAddressesResult$ === "object");
assert(typeof DescribeNatGatewaysRequest$ === "object");
assert(typeof DescribeNatGatewaysResult$ === "object");
assert(typeof DescribeNetworkAclsRequest$ === "object");
assert(typeof DescribeNetworkAclsResult$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopeAnalysesRequest$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopeAnalysesResult$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopesRequest$ === "object");
assert(typeof DescribeNetworkInsightsAccessScopesResult$ === "object");
assert(typeof DescribeNetworkInsightsAnalysesRequest$ === "object");
assert(typeof DescribeNetworkInsightsAnalysesResult$ === "object");
assert(typeof DescribeNetworkInsightsPathsRequest$ === "object");
assert(typeof DescribeNetworkInsightsPathsResult$ === "object");
assert(typeof DescribeNetworkInterfaceAttributeRequest$ === "object");
assert(typeof DescribeNetworkInterfaceAttributeResult$ === "object");
assert(typeof DescribeNetworkInterfacePermissionsRequest$ === "object");
assert(typeof DescribeNetworkInterfacePermissionsResult$ === "object");
assert(typeof DescribeNetworkInterfacesRequest$ === "object");
assert(typeof DescribeNetworkInterfacesResult$ === "object");
assert(typeof DescribeOutpostLagsRequest$ === "object");
assert(typeof DescribeOutpostLagsResult$ === "object");
assert(typeof DescribePlacementGroupsRequest$ === "object");
assert(typeof DescribePlacementGroupsResult$ === "object");
assert(typeof DescribePrefixListsRequest$ === "object");
assert(typeof DescribePrefixListsResult$ === "object");
assert(typeof DescribePrincipalIdFormatRequest$ === "object");
assert(typeof DescribePrincipalIdFormatResult$ === "object");
assert(typeof DescribePublicIpv4PoolsRequest$ === "object");
assert(typeof DescribePublicIpv4PoolsResult$ === "object");
assert(typeof DescribeRegionsRequest$ === "object");
assert(typeof DescribeRegionsResult$ === "object");
assert(typeof DescribeReplaceRootVolumeTasksRequest$ === "object");
assert(typeof DescribeReplaceRootVolumeTasksResult$ === "object");
assert(typeof DescribeReservedInstancesListingsRequest$ === "object");
assert(typeof DescribeReservedInstancesListingsResult$ === "object");
assert(typeof DescribeReservedInstancesModificationsRequest$ === "object");
assert(typeof DescribeReservedInstancesModificationsResult$ === "object");
assert(typeof DescribeReservedInstancesOfferingsRequest$ === "object");
assert(typeof DescribeReservedInstancesOfferingsResult$ === "object");
assert(typeof DescribeReservedInstancesRequest$ === "object");
assert(typeof DescribeReservedInstancesResult$ === "object");
assert(typeof DescribeRouteServerEndpointsRequest$ === "object");
assert(typeof DescribeRouteServerEndpointsResult$ === "object");
assert(typeof DescribeRouteServerPeersRequest$ === "object");
assert(typeof DescribeRouteServerPeersResult$ === "object");
assert(typeof DescribeRouteServersRequest$ === "object");
assert(typeof DescribeRouteServersResult$ === "object");
assert(typeof DescribeRouteTablesRequest$ === "object");
assert(typeof DescribeRouteTablesResult$ === "object");
assert(typeof DescribeScheduledInstanceAvailabilityRequest$ === "object");
assert(typeof DescribeScheduledInstanceAvailabilityResult$ === "object");
assert(typeof DescribeScheduledInstancesRequest$ === "object");
assert(typeof DescribeScheduledInstancesResult$ === "object");
assert(typeof DescribeSecurityGroupReferencesRequest$ === "object");
assert(typeof DescribeSecurityGroupReferencesResult$ === "object");
assert(typeof DescribeSecurityGroupRulesRequest$ === "object");
assert(typeof DescribeSecurityGroupRulesResult$ === "object");
assert(typeof DescribeSecurityGroupsRequest$ === "object");
assert(typeof DescribeSecurityGroupsResult$ === "object");
assert(typeof DescribeSecurityGroupVpcAssociationsRequest$ === "object");
assert(typeof DescribeSecurityGroupVpcAssociationsResult$ === "object");
assert(typeof DescribeServiceLinkVirtualInterfacesRequest$ === "object");
assert(typeof DescribeServiceLinkVirtualInterfacesResult$ === "object");
assert(typeof DescribeSnapshotAttributeRequest$ === "object");
assert(typeof DescribeSnapshotAttributeResult$ === "object");
assert(typeof DescribeSnapshotsRequest$ === "object");
assert(typeof DescribeSnapshotsResult$ === "object");
assert(typeof DescribeSnapshotTierStatusRequest$ === "object");
assert(typeof DescribeSnapshotTierStatusResult$ === "object");
assert(typeof DescribeSpotDatafeedSubscriptionRequest$ === "object");
assert(typeof DescribeSpotDatafeedSubscriptionResult$ === "object");
assert(typeof DescribeSpotFleetInstancesRequest$ === "object");
assert(typeof DescribeSpotFleetInstancesResponse$ === "object");
assert(typeof DescribeSpotFleetRequestHistoryRequest$ === "object");
assert(typeof DescribeSpotFleetRequestHistoryResponse$ === "object");
assert(typeof DescribeSpotFleetRequestsRequest$ === "object");
assert(typeof DescribeSpotFleetRequestsResponse$ === "object");
assert(typeof DescribeSpotInstanceRequestsRequest$ === "object");
assert(typeof DescribeSpotInstanceRequestsResult$ === "object");
assert(typeof DescribeSpotPriceHistoryRequest$ === "object");
assert(typeof DescribeSpotPriceHistoryResult$ === "object");
assert(typeof DescribeStaleSecurityGroupsRequest$ === "object");
assert(typeof DescribeStaleSecurityGroupsResult$ === "object");
assert(typeof DescribeStoreImageTasksRequest$ === "object");
assert(typeof DescribeStoreImageTasksResult$ === "object");
assert(typeof DescribeSubnetsRequest$ === "object");
assert(typeof DescribeSubnetsResult$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResult$ === "object");
assert(typeof DescribeTrafficMirrorFilterRulesRequest$ === "object");
assert(typeof DescribeTrafficMirrorFilterRulesResult$ === "object");
assert(typeof DescribeTrafficMirrorFiltersRequest$ === "object");
assert(typeof DescribeTrafficMirrorFiltersResult$ === "object");
assert(typeof DescribeTrafficMirrorSessionsRequest$ === "object");
assert(typeof DescribeTrafficMirrorSessionsResult$ === "object");
assert(typeof DescribeTrafficMirrorTargetsRequest$ === "object");
assert(typeof DescribeTrafficMirrorTargetsResult$ === "object");
assert(typeof DescribeTransitGatewayAttachmentsRequest$ === "object");
assert(typeof DescribeTransitGatewayAttachmentsResult$ === "object");
assert(typeof DescribeTransitGatewayConnectPeersRequest$ === "object");
assert(typeof DescribeTransitGatewayConnectPeersResult$ === "object");
assert(typeof DescribeTransitGatewayConnectsRequest$ === "object");
assert(typeof DescribeTransitGatewayConnectsResult$ === "object");
assert(typeof DescribeTransitGatewayMeteringPoliciesRequest$ === "object");
assert(typeof DescribeTransitGatewayMeteringPoliciesResult$ === "object");
assert(typeof DescribeTransitGatewayMulticastDomainsRequest$ === "object");
assert(typeof DescribeTransitGatewayMulticastDomainsResult$ === "object");
assert(typeof DescribeTransitGatewayPeeringAttachmentsRequest$ === "object");
assert(typeof DescribeTransitGatewayPeeringAttachmentsResult$ === "object");
assert(typeof DescribeTransitGatewayPolicyTablesRequest$ === "object");
assert(typeof DescribeTransitGatewayPolicyTablesResult$ === "object");
assert(typeof DescribeTransitGatewayRouteTableAnnouncementsRequest$ === "object");
assert(typeof DescribeTransitGatewayRouteTableAnnouncementsResult$ === "object");
assert(typeof DescribeTransitGatewayRouteTablesRequest$ === "object");
assert(typeof DescribeTransitGatewayRouteTablesResult$ === "object");
assert(typeof DescribeTransitGatewaysRequest$ === "object");
assert(typeof DescribeTransitGatewaysResult$ === "object");
assert(typeof DescribeTransitGatewayVpcAttachmentsRequest$ === "object");
assert(typeof DescribeTransitGatewayVpcAttachmentsResult$ === "object");
assert(typeof DescribeTrunkInterfaceAssociationsRequest$ === "object");
assert(typeof DescribeTrunkInterfaceAssociationsResult$ === "object");
assert(typeof DescribeVerifiedAccessEndpointsRequest$ === "object");
assert(typeof DescribeVerifiedAccessEndpointsResult$ === "object");
assert(typeof DescribeVerifiedAccessGroupsRequest$ === "object");
assert(typeof DescribeVerifiedAccessGroupsResult$ === "object");
assert(typeof DescribeVerifiedAccessInstanceLoggingConfigurationsRequest$ === "object");
assert(typeof DescribeVerifiedAccessInstanceLoggingConfigurationsResult$ === "object");
assert(typeof DescribeVerifiedAccessInstancesRequest$ === "object");
assert(typeof DescribeVerifiedAccessInstancesResult$ === "object");
assert(typeof DescribeVerifiedAccessTrustProvidersRequest$ === "object");
assert(typeof DescribeVerifiedAccessTrustProvidersResult$ === "object");
assert(typeof DescribeVolumeAttributeRequest$ === "object");
assert(typeof DescribeVolumeAttributeResult$ === "object");
assert(typeof DescribeVolumesModificationsRequest$ === "object");
assert(typeof DescribeVolumesModificationsResult$ === "object");
assert(typeof DescribeVolumesRequest$ === "object");
assert(typeof DescribeVolumesResult$ === "object");
assert(typeof DescribeVolumeStatusRequest$ === "object");
assert(typeof DescribeVolumeStatusResult$ === "object");
assert(typeof DescribeVpcAttributeRequest$ === "object");
assert(typeof DescribeVpcAttributeResult$ === "object");
assert(typeof DescribeVpcBlockPublicAccessExclusionsRequest$ === "object");
assert(typeof DescribeVpcBlockPublicAccessExclusionsResult$ === "object");
assert(typeof DescribeVpcBlockPublicAccessOptionsRequest$ === "object");
assert(typeof DescribeVpcBlockPublicAccessOptionsResult$ === "object");
assert(typeof DescribeVpcClassicLinkDnsSupportRequest$ === "object");
assert(typeof DescribeVpcClassicLinkDnsSupportResult$ === "object");
assert(typeof DescribeVpcClassicLinkRequest$ === "object");
assert(typeof DescribeVpcClassicLinkResult$ === "object");
assert(typeof DescribeVpcEncryptionControlsRequest$ === "object");
assert(typeof DescribeVpcEncryptionControlsResult$ === "object");
assert(typeof DescribeVpcEndpointAssociationsRequest$ === "object");
assert(typeof DescribeVpcEndpointAssociationsResult$ === "object");
assert(typeof DescribeVpcEndpointConnectionNotificationsRequest$ === "object");
assert(typeof DescribeVpcEndpointConnectionNotificationsResult$ === "object");
assert(typeof DescribeVpcEndpointConnectionsRequest$ === "object");
assert(typeof DescribeVpcEndpointConnectionsResult$ === "object");
assert(typeof DescribeVpcEndpointServiceConfigurationsRequest$ === "object");
assert(typeof DescribeVpcEndpointServiceConfigurationsResult$ === "object");
assert(typeof DescribeVpcEndpointServicePermissionsRequest$ === "object");
assert(typeof DescribeVpcEndpointServicePermissionsResult$ === "object");
assert(typeof DescribeVpcEndpointServicesRequest$ === "object");
assert(typeof DescribeVpcEndpointServicesResult$ === "object");
assert(typeof DescribeVpcEndpointsRequest$ === "object");
assert(typeof DescribeVpcEndpointsResult$ === "object");
assert(typeof DescribeVpcPeeringConnectionsRequest$ === "object");
assert(typeof DescribeVpcPeeringConnectionsResult$ === "object");
assert(typeof DescribeVpcsRequest$ === "object");
assert(typeof DescribeVpcsResult$ === "object");
assert(typeof DescribeVpnConcentratorsRequest$ === "object");
assert(typeof DescribeVpnConcentratorsResult$ === "object");
assert(typeof DescribeVpnConnectionsRequest$ === "object");
assert(typeof DescribeVpnConnectionsResult$ === "object");
assert(typeof DescribeVpnGatewaysRequest$ === "object");
assert(typeof DescribeVpnGatewaysResult$ === "object");
assert(typeof DestinationOptionsRequest$ === "object");
assert(typeof DestinationOptionsResponse$ === "object");
assert(typeof DetachClassicLinkVpcRequest$ === "object");
assert(typeof DetachClassicLinkVpcResult$ === "object");
assert(typeof DetachInternetGatewayRequest$ === "object");
assert(typeof DetachNetworkInterfaceRequest$ === "object");
assert(typeof DetachVerifiedAccessTrustProviderRequest$ === "object");
assert(typeof DetachVerifiedAccessTrustProviderResult$ === "object");
assert(typeof DetachVolumeRequest$ === "object");
assert(typeof DetachVpnGatewayRequest$ === "object");
assert(typeof DeviceOptions$ === "object");
assert(typeof DhcpConfiguration$ === "object");
assert(typeof DhcpOptions$ === "object");
assert(typeof DimensionCondition$ === "object");
assert(typeof DirectoryServiceAuthentication$ === "object");
assert(typeof DirectoryServiceAuthenticationRequest$ === "object");
assert(typeof DisableAddressTransferRequest$ === "object");
assert(typeof DisableAddressTransferResult$ === "object");
assert(typeof DisableAllowedImagesSettingsRequest$ === "object");
assert(typeof DisableAllowedImagesSettingsResult$ === "object");
assert(typeof DisableAwsNetworkPerformanceMetricSubscriptionRequest$ === "object");
assert(typeof DisableAwsNetworkPerformanceMetricSubscriptionResult$ === "object");
assert(typeof DisableCapacityManagerRequest$ === "object");
assert(typeof DisableCapacityManagerResult$ === "object");
assert(typeof DisableEbsEncryptionByDefaultRequest$ === "object");
assert(typeof DisableEbsEncryptionByDefaultResult$ === "object");
assert(typeof DisableFastLaunchRequest$ === "object");
assert(typeof DisableFastLaunchResult$ === "object");
assert(typeof DisableFastSnapshotRestoreErrorItem$ === "object");
assert(typeof DisableFastSnapshotRestoresRequest$ === "object");
assert(typeof DisableFastSnapshotRestoresResult$ === "object");
assert(typeof DisableFastSnapshotRestoreStateError$ === "object");
assert(typeof DisableFastSnapshotRestoreStateErrorItem$ === "object");
assert(typeof DisableFastSnapshotRestoreSuccessItem$ === "object");
assert(typeof DisableImageBlockPublicAccessRequest$ === "object");
assert(typeof DisableImageBlockPublicAccessResult$ === "object");
assert(typeof DisableImageDeprecationRequest$ === "object");
assert(typeof DisableImageDeprecationResult$ === "object");
assert(typeof DisableImageDeregistrationProtectionRequest$ === "object");
assert(typeof DisableImageDeregistrationProtectionResult$ === "object");
assert(typeof DisableImageRequest$ === "object");
assert(typeof DisableImageResult$ === "object");
assert(typeof DisableInstanceSqlHaStandbyDetectionsRequest$ === "object");
assert(typeof DisableInstanceSqlHaStandbyDetectionsResult$ === "object");
assert(typeof DisableIpamOrganizationAdminAccountRequest$ === "object");
assert(typeof DisableIpamOrganizationAdminAccountResult$ === "object");
assert(typeof DisableIpamPolicyRequest$ === "object");
assert(typeof DisableIpamPolicyResult$ === "object");
assert(typeof DisableRouteServerPropagationRequest$ === "object");
assert(typeof DisableRouteServerPropagationResult$ === "object");
assert(typeof DisableSerialConsoleAccessRequest$ === "object");
assert(typeof DisableSerialConsoleAccessResult$ === "object");
assert(typeof DisableSnapshotBlockPublicAccessRequest$ === "object");
assert(typeof DisableSnapshotBlockPublicAccessResult$ === "object");
assert(typeof DisableTransitGatewayRouteTablePropagationRequest$ === "object");
assert(typeof DisableTransitGatewayRouteTablePropagationResult$ === "object");
assert(typeof DisableVgwRoutePropagationRequest$ === "object");
assert(typeof DisableVpcClassicLinkDnsSupportRequest$ === "object");
assert(typeof DisableVpcClassicLinkDnsSupportResult$ === "object");
assert(typeof DisableVpcClassicLinkRequest$ === "object");
assert(typeof DisableVpcClassicLinkResult$ === "object");
assert(typeof DisassociateAddressRequest$ === "object");
assert(typeof DisassociateCapacityReservationBillingOwnerRequest$ === "object");
assert(typeof DisassociateCapacityReservationBillingOwnerResult$ === "object");
assert(typeof DisassociateClientVpnTargetNetworkRequest$ === "object");
assert(typeof DisassociateClientVpnTargetNetworkResult$ === "object");
assert(typeof DisassociateEnclaveCertificateIamRoleRequest$ === "object");
assert(typeof DisassociateEnclaveCertificateIamRoleResult$ === "object");
assert(typeof DisassociateIamInstanceProfileRequest$ === "object");
assert(typeof DisassociateIamInstanceProfileResult$ === "object");
assert(typeof DisassociateInstanceEventWindowRequest$ === "object");
assert(typeof DisassociateInstanceEventWindowResult$ === "object");
assert(typeof DisassociateIpamByoasnRequest$ === "object");
assert(typeof DisassociateIpamByoasnResult$ === "object");
assert(typeof DisassociateIpamResourceDiscoveryRequest$ === "object");
assert(typeof DisassociateIpamResourceDiscoveryResult$ === "object");
assert(typeof DisassociateNatGatewayAddressRequest$ === "object");
assert(typeof DisassociateNatGatewayAddressResult$ === "object");
assert(typeof DisassociateRouteServerRequest$ === "object");
assert(typeof DisassociateRouteServerResult$ === "object");
assert(typeof DisassociateRouteTableRequest$ === "object");
assert(typeof DisassociateSecurityGroupVpcRequest$ === "object");
assert(typeof DisassociateSecurityGroupVpcResult$ === "object");
assert(typeof DisassociateSubnetCidrBlockRequest$ === "object");
assert(typeof DisassociateSubnetCidrBlockResult$ === "object");
assert(typeof DisassociateTransitGatewayMulticastDomainRequest$ === "object");
assert(typeof DisassociateTransitGatewayMulticastDomainResult$ === "object");
assert(typeof DisassociateTransitGatewayPolicyTableRequest$ === "object");
assert(typeof DisassociateTransitGatewayPolicyTableResult$ === "object");
assert(typeof DisassociateTransitGatewayRouteTableRequest$ === "object");
assert(typeof DisassociateTransitGatewayRouteTableResult$ === "object");
assert(typeof DisassociateTrunkInterfaceRequest$ === "object");
assert(typeof DisassociateTrunkInterfaceResult$ === "object");
assert(typeof DisassociateVpcCidrBlockRequest$ === "object");
assert(typeof DisassociateVpcCidrBlockResult$ === "object");
assert(typeof DiskImage$ === "object");
assert(typeof DiskImageDescription$ === "object");
assert(typeof DiskImageDetail$ === "object");
assert(typeof DiskImageVolumeDescription$ === "object");
assert(typeof DiskInfo$ === "object");
assert(typeof DnsEntry$ === "object");
assert(typeof DnsOptions$ === "object");
assert(typeof DnsOptionsSpecification$ === "object");
assert(typeof DnsServersOptionsModifyStructure$ === "object");
assert(typeof EbsBlockDevice$ === "object");
assert(typeof EbsBlockDeviceResponse$ === "object");
assert(typeof EbsInfo$ === "object");
assert(typeof EbsInstanceBlockDevice$ === "object");
assert(typeof EbsInstanceBlockDeviceSpecification$ === "object");
assert(typeof EbsOptimizedInfo$ === "object");
assert(typeof EbsStatusDetails$ === "object");
assert(typeof EbsStatusSummary$ === "object");
assert(typeof Ec2InstanceConnectEndpoint$ === "object");
assert(typeof EfaInfo$ === "object");
assert(typeof EgressOnlyInternetGateway$ === "object");
assert(typeof ElasticGpuAssociation$ === "object");
assert(typeof ElasticGpuHealth$ === "object");
assert(typeof ElasticGpus$ === "object");
assert(typeof ElasticGpuSpecification$ === "object");
assert(typeof ElasticGpuSpecificationResponse$ === "object");
assert(typeof ElasticInferenceAccelerator$ === "object");
assert(typeof ElasticInferenceAcceleratorAssociation$ === "object");
assert(typeof EnableAddressTransferRequest$ === "object");
assert(typeof EnableAddressTransferResult$ === "object");
assert(typeof EnableAllowedImagesSettingsRequest$ === "object");
assert(typeof EnableAllowedImagesSettingsResult$ === "object");
assert(typeof EnableAwsNetworkPerformanceMetricSubscriptionRequest$ === "object");
assert(typeof EnableAwsNetworkPerformanceMetricSubscriptionResult$ === "object");
assert(typeof EnableCapacityManagerRequest$ === "object");
assert(typeof EnableCapacityManagerResult$ === "object");
assert(typeof EnableEbsEncryptionByDefaultRequest$ === "object");
assert(typeof EnableEbsEncryptionByDefaultResult$ === "object");
assert(typeof EnableFastLaunchRequest$ === "object");
assert(typeof EnableFastLaunchResult$ === "object");
assert(typeof EnableFastSnapshotRestoreErrorItem$ === "object");
assert(typeof EnableFastSnapshotRestoresRequest$ === "object");
assert(typeof EnableFastSnapshotRestoresResult$ === "object");
assert(typeof EnableFastSnapshotRestoreStateError$ === "object");
assert(typeof EnableFastSnapshotRestoreStateErrorItem$ === "object");
assert(typeof EnableFastSnapshotRestoreSuccessItem$ === "object");
assert(typeof EnableImageBlockPublicAccessRequest$ === "object");
assert(typeof EnableImageBlockPublicAccessResult$ === "object");
assert(typeof EnableImageDeprecationRequest$ === "object");
assert(typeof EnableImageDeprecationResult$ === "object");
assert(typeof EnableImageDeregistrationProtectionRequest$ === "object");
assert(typeof EnableImageDeregistrationProtectionResult$ === "object");
assert(typeof EnableImageRequest$ === "object");
assert(typeof EnableImageResult$ === "object");
assert(typeof EnableInstanceSqlHaStandbyDetectionsRequest$ === "object");
assert(typeof EnableInstanceSqlHaStandbyDetectionsResult$ === "object");
assert(typeof EnableIpamOrganizationAdminAccountRequest$ === "object");
assert(typeof EnableIpamOrganizationAdminAccountResult$ === "object");
assert(typeof EnableIpamPolicyRequest$ === "object");
assert(typeof EnableIpamPolicyResult$ === "object");
assert(typeof EnableReachabilityAnalyzerOrganizationSharingRequest$ === "object");
assert(typeof EnableReachabilityAnalyzerOrganizationSharingResult$ === "object");
assert(typeof EnableRouteServerPropagationRequest$ === "object");
assert(typeof EnableRouteServerPropagationResult$ === "object");
assert(typeof EnableSerialConsoleAccessRequest$ === "object");
assert(typeof EnableSerialConsoleAccessResult$ === "object");
assert(typeof EnableSnapshotBlockPublicAccessRequest$ === "object");
assert(typeof EnableSnapshotBlockPublicAccessResult$ === "object");
assert(typeof EnableTransitGatewayRouteTablePropagationRequest$ === "object");
assert(typeof EnableTransitGatewayRouteTablePropagationResult$ === "object");
assert(typeof EnableVgwRoutePropagationRequest$ === "object");
assert(typeof EnableVolumeIORequest$ === "object");
assert(typeof EnableVpcClassicLinkDnsSupportRequest$ === "object");
assert(typeof EnableVpcClassicLinkDnsSupportResult$ === "object");
assert(typeof EnableVpcClassicLinkRequest$ === "object");
assert(typeof EnableVpcClassicLinkResult$ === "object");
assert(typeof EnaSrdSpecification$ === "object");
assert(typeof EnaSrdSpecificationRequest$ === "object");
assert(typeof EnaSrdUdpSpecification$ === "object");
assert(typeof EnaSrdUdpSpecificationRequest$ === "object");
assert(typeof EnclaveOptions$ === "object");
assert(typeof EnclaveOptionsRequest$ === "object");
assert(typeof EncryptionSupport$ === "object");
assert(typeof EventInformation$ === "object");
assert(typeof Explanation$ === "object");
assert(typeof ExportClientVpnClientCertificateRevocationListRequest$ === "object");
assert(typeof ExportClientVpnClientCertificateRevocationListResult$ === "object");
assert(typeof ExportClientVpnClientConfigurationRequest$ === "object");
assert(typeof ExportClientVpnClientConfigurationResult$ === "object");
assert(typeof ExportImageRequest$ === "object");
assert(typeof ExportImageResult$ === "object");
assert(typeof ExportImageTask$ === "object");
assert(typeof ExportTask$ === "object");
assert(typeof ExportTaskS3Location$ === "object");
assert(typeof ExportTaskS3LocationRequest$ === "object");
assert(typeof ExportToS3Task$ === "object");
assert(typeof ExportToS3TaskSpecification$ === "object");
assert(typeof ExportTransitGatewayRoutesRequest$ === "object");
assert(typeof ExportTransitGatewayRoutesResult$ === "object");
assert(typeof ExportVerifiedAccessInstanceClientConfigurationRequest$ === "object");
assert(typeof ExportVerifiedAccessInstanceClientConfigurationResult$ === "object");
assert(typeof ExternalAuthorityConfiguration$ === "object");
assert(typeof FailedCapacityReservationFleetCancellationResult$ === "object");
assert(typeof FailedQueuedPurchaseDeletion$ === "object");
assert(typeof FastLaunchLaunchTemplateSpecificationRequest$ === "object");
assert(typeof FastLaunchLaunchTemplateSpecificationResponse$ === "object");
assert(typeof FastLaunchSnapshotConfigurationRequest$ === "object");
assert(typeof FastLaunchSnapshotConfigurationResponse$ === "object");
assert(typeof FederatedAuthentication$ === "object");
assert(typeof FederatedAuthenticationRequest$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterPortRange$ === "object");
assert(typeof FirewallStatefulRule$ === "object");
assert(typeof FirewallStatelessRule$ === "object");
assert(typeof FleetBlockDeviceMappingRequest$ === "object");
assert(typeof FleetCapacityReservation$ === "object");
assert(typeof FleetData$ === "object");
assert(typeof FleetEbsBlockDeviceRequest$ === "object");
assert(typeof FleetLaunchTemplateConfig$ === "object");
assert(typeof FleetLaunchTemplateConfigRequest$ === "object");
assert(typeof FleetLaunchTemplateOverrides$ === "object");
assert(typeof FleetLaunchTemplateOverridesRequest$ === "object");
assert(typeof FleetLaunchTemplateSpecification$ === "object");
assert(typeof FleetLaunchTemplateSpecificationRequest$ === "object");
assert(typeof FleetSpotCapacityRebalance$ === "object");
assert(typeof FleetSpotCapacityRebalanceRequest$ === "object");
assert(typeof FleetSpotMaintenanceStrategies$ === "object");
assert(typeof FleetSpotMaintenanceStrategiesRequest$ === "object");
assert(typeof FlowLog$ === "object");
assert(typeof FpgaDeviceInfo$ === "object");
assert(typeof FpgaDeviceMemoryInfo$ === "object");
assert(typeof FpgaImage$ === "object");
assert(typeof FpgaImageAttribute$ === "object");
assert(typeof FpgaImageState$ === "object");
assert(typeof FpgaInfo$ === "object");
assert(typeof GetActiveVpnTunnelStatusRequest$ === "object");
assert(typeof GetActiveVpnTunnelStatusResult$ === "object");
assert(typeof GetAllowedImagesSettingsRequest$ === "object");
assert(typeof GetAllowedImagesSettingsResult$ === "object");
assert(typeof GetAssociatedEnclaveCertificateIamRolesRequest$ === "object");
assert(typeof GetAssociatedEnclaveCertificateIamRolesResult$ === "object");
assert(typeof GetAssociatedIpv6PoolCidrsRequest$ === "object");
assert(typeof GetAssociatedIpv6PoolCidrsResult$ === "object");
assert(typeof GetAwsNetworkPerformanceDataRequest$ === "object");
assert(typeof GetAwsNetworkPerformanceDataResult$ === "object");
assert(typeof GetCapacityManagerAttributesRequest$ === "object");
assert(typeof GetCapacityManagerAttributesResult$ === "object");
assert(typeof GetCapacityManagerMetricDataRequest$ === "object");
assert(typeof GetCapacityManagerMetricDataResult$ === "object");
assert(typeof GetCapacityManagerMetricDimensionsRequest$ === "object");
assert(typeof GetCapacityManagerMetricDimensionsResult$ === "object");
assert(typeof GetCapacityReservationUsageRequest$ === "object");
assert(typeof GetCapacityReservationUsageResult$ === "object");
assert(typeof GetCoipPoolUsageRequest$ === "object");
assert(typeof GetCoipPoolUsageResult$ === "object");
assert(typeof GetConsoleOutputRequest$ === "object");
assert(typeof GetConsoleOutputResult$ === "object");
assert(typeof GetConsoleScreenshotRequest$ === "object");
assert(typeof GetConsoleScreenshotResult$ === "object");
assert(typeof GetDeclarativePoliciesReportSummaryRequest$ === "object");
assert(typeof GetDeclarativePoliciesReportSummaryResult$ === "object");
assert(typeof GetDefaultCreditSpecificationRequest$ === "object");
assert(typeof GetDefaultCreditSpecificationResult$ === "object");
assert(typeof GetEbsDefaultKmsKeyIdRequest$ === "object");
assert(typeof GetEbsDefaultKmsKeyIdResult$ === "object");
assert(typeof GetEbsEncryptionByDefaultRequest$ === "object");
assert(typeof GetEbsEncryptionByDefaultResult$ === "object");
assert(typeof GetEnabledIpamPolicyRequest$ === "object");
assert(typeof GetEnabledIpamPolicyResult$ === "object");
assert(typeof GetFlowLogsIntegrationTemplateRequest$ === "object");
assert(typeof GetFlowLogsIntegrationTemplateResult$ === "object");
assert(typeof GetGroupsForCapacityReservationRequest$ === "object");
assert(typeof GetGroupsForCapacityReservationResult$ === "object");
assert(typeof GetHostReservationPurchasePreviewRequest$ === "object");
assert(typeof GetHostReservationPurchasePreviewResult$ === "object");
assert(typeof GetImageAncestryRequest$ === "object");
assert(typeof GetImageAncestryResult$ === "object");
assert(typeof GetImageBlockPublicAccessStateRequest$ === "object");
assert(typeof GetImageBlockPublicAccessStateResult$ === "object");
assert(typeof GetInstanceMetadataDefaultsRequest$ === "object");
assert(typeof GetInstanceMetadataDefaultsResult$ === "object");
assert(typeof GetInstanceTpmEkPubRequest$ === "object");
assert(typeof GetInstanceTpmEkPubResult$ === "object");
assert(typeof GetInstanceTypesFromInstanceRequirementsRequest$ === "object");
assert(typeof GetInstanceTypesFromInstanceRequirementsResult$ === "object");
assert(typeof GetInstanceUefiDataRequest$ === "object");
assert(typeof GetInstanceUefiDataResult$ === "object");
assert(typeof GetIpamAddressHistoryRequest$ === "object");
assert(typeof GetIpamAddressHistoryResult$ === "object");
assert(typeof GetIpamDiscoveredAccountsRequest$ === "object");
assert(typeof GetIpamDiscoveredAccountsResult$ === "object");
assert(typeof GetIpamDiscoveredPublicAddressesRequest$ === "object");
assert(typeof GetIpamDiscoveredPublicAddressesResult$ === "object");
assert(typeof GetIpamDiscoveredResourceCidrsRequest$ === "object");
assert(typeof GetIpamDiscoveredResourceCidrsResult$ === "object");
assert(typeof GetIpamPolicyAllocationRulesRequest$ === "object");
assert(typeof GetIpamPolicyAllocationRulesResult$ === "object");
assert(typeof GetIpamPolicyOrganizationTargetsRequest$ === "object");
assert(typeof GetIpamPolicyOrganizationTargetsResult$ === "object");
assert(typeof GetIpamPoolAllocationsRequest$ === "object");
assert(typeof GetIpamPoolAllocationsResult$ === "object");
assert(typeof GetIpamPoolCidrsRequest$ === "object");
assert(typeof GetIpamPoolCidrsResult$ === "object");
assert(typeof GetIpamPrefixListResolverRulesRequest$ === "object");
assert(typeof GetIpamPrefixListResolverRulesResult$ === "object");
assert(typeof GetIpamPrefixListResolverVersionEntriesRequest$ === "object");
assert(typeof GetIpamPrefixListResolverVersionEntriesResult$ === "object");
assert(typeof GetIpamPrefixListResolverVersionsRequest$ === "object");
assert(typeof GetIpamPrefixListResolverVersionsResult$ === "object");
assert(typeof GetIpamResourceCidrsRequest$ === "object");
assert(typeof GetIpamResourceCidrsResult$ === "object");
assert(typeof GetLaunchTemplateDataRequest$ === "object");
assert(typeof GetLaunchTemplateDataResult$ === "object");
assert(typeof GetManagedPrefixListAssociationsRequest$ === "object");
assert(typeof GetManagedPrefixListAssociationsResult$ === "object");
assert(typeof GetManagedPrefixListEntriesRequest$ === "object");
assert(typeof GetManagedPrefixListEntriesResult$ === "object");
assert(typeof GetNetworkInsightsAccessScopeAnalysisFindingsRequest$ === "object");
assert(typeof GetNetworkInsightsAccessScopeAnalysisFindingsResult$ === "object");
assert(typeof GetNetworkInsightsAccessScopeContentRequest$ === "object");
assert(typeof GetNetworkInsightsAccessScopeContentResult$ === "object");
assert(typeof GetPasswordDataRequest$ === "object");
assert(typeof GetPasswordDataResult$ === "object");
assert(typeof GetReservedInstancesExchangeQuoteRequest$ === "object");
assert(typeof GetReservedInstancesExchangeQuoteResult$ === "object");
assert(typeof GetRouteServerAssociationsRequest$ === "object");
assert(typeof GetRouteServerAssociationsResult$ === "object");
assert(typeof GetRouteServerPropagationsRequest$ === "object");
assert(typeof GetRouteServerPropagationsResult$ === "object");
assert(typeof GetRouteServerRoutingDatabaseRequest$ === "object");
assert(typeof GetRouteServerRoutingDatabaseResult$ === "object");
assert(typeof GetSecurityGroupsForVpcRequest$ === "object");
assert(typeof GetSecurityGroupsForVpcResult$ === "object");
assert(typeof GetSerialConsoleAccessStatusRequest$ === "object");
assert(typeof GetSerialConsoleAccessStatusResult$ === "object");
assert(typeof GetSnapshotBlockPublicAccessStateRequest$ === "object");
assert(typeof GetSnapshotBlockPublicAccessStateResult$ === "object");
assert(typeof GetSpotPlacementScoresRequest$ === "object");
assert(typeof GetSpotPlacementScoresResult$ === "object");
assert(typeof GetSubnetCidrReservationsRequest$ === "object");
assert(typeof GetSubnetCidrReservationsResult$ === "object");
assert(typeof GetTransitGatewayAttachmentPropagationsRequest$ === "object");
assert(typeof GetTransitGatewayAttachmentPropagationsResult$ === "object");
assert(typeof GetTransitGatewayMeteringPolicyEntriesRequest$ === "object");
assert(typeof GetTransitGatewayMeteringPolicyEntriesResult$ === "object");
assert(typeof GetTransitGatewayMulticastDomainAssociationsRequest$ === "object");
assert(typeof GetTransitGatewayMulticastDomainAssociationsResult$ === "object");
assert(typeof GetTransitGatewayPolicyTableAssociationsRequest$ === "object");
assert(typeof GetTransitGatewayPolicyTableAssociationsResult$ === "object");
assert(typeof GetTransitGatewayPolicyTableEntriesRequest$ === "object");
assert(typeof GetTransitGatewayPolicyTableEntriesResult$ === "object");
assert(typeof GetTransitGatewayPrefixListReferencesRequest$ === "object");
assert(typeof GetTransitGatewayPrefixListReferencesResult$ === "object");
assert(typeof GetTransitGatewayRouteTableAssociationsRequest$ === "object");
assert(typeof GetTransitGatewayRouteTableAssociationsResult$ === "object");
assert(typeof GetTransitGatewayRouteTablePropagationsRequest$ === "object");
assert(typeof GetTransitGatewayRouteTablePropagationsResult$ === "object");
assert(typeof GetVerifiedAccessEndpointPolicyRequest$ === "object");
assert(typeof GetVerifiedAccessEndpointPolicyResult$ === "object");
assert(typeof GetVerifiedAccessEndpointTargetsRequest$ === "object");
assert(typeof GetVerifiedAccessEndpointTargetsResult$ === "object");
assert(typeof GetVerifiedAccessGroupPolicyRequest$ === "object");
assert(typeof GetVerifiedAccessGroupPolicyResult$ === "object");
assert(typeof GetVpcResourcesBlockingEncryptionEnforcementRequest$ === "object");
assert(typeof GetVpcResourcesBlockingEncryptionEnforcementResult$ === "object");
assert(typeof GetVpnConnectionDeviceSampleConfigurationRequest$ === "object");
assert(typeof GetVpnConnectionDeviceSampleConfigurationResult$ === "object");
assert(typeof GetVpnConnectionDeviceTypesRequest$ === "object");
assert(typeof GetVpnConnectionDeviceTypesResult$ === "object");
assert(typeof GetVpnTunnelReplacementStatusRequest$ === "object");
assert(typeof GetVpnTunnelReplacementStatusResult$ === "object");
assert(typeof GpuDeviceInfo$ === "object");
assert(typeof GpuDeviceMemoryInfo$ === "object");
assert(typeof GpuInfo$ === "object");
assert(typeof GroupIdentifier$ === "object");
assert(typeof HibernationOptions$ === "object");
assert(typeof HibernationOptionsRequest$ === "object");
assert(typeof HistoryRecord$ === "object");
assert(typeof HistoryRecordEntry$ === "object");
assert(typeof Host$ === "object");
assert(typeof HostInstance$ === "object");
assert(typeof HostOffering$ === "object");
assert(typeof HostProperties$ === "object");
assert(typeof HostReservation$ === "object");
assert(typeof IamInstanceProfile$ === "object");
assert(typeof IamInstanceProfileAssociation$ === "object");
assert(typeof IamInstanceProfileSpecification$ === "object");
assert(typeof IcmpTypeCode$ === "object");
assert(typeof IdFormat$ === "object");
assert(typeof IKEVersionsListValue$ === "object");
assert(typeof IKEVersionsRequestListValue$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageAncestryEntry$ === "object");
assert(typeof ImageAttribute$ === "object");
assert(typeof ImageCriterion$ === "object");
assert(typeof ImageCriterionRequest$ === "object");
assert(typeof ImageDiskContainer$ === "object");
assert(typeof ImageMetadata$ === "object");
assert(typeof ImageRecycleBinInfo$ === "object");
assert(typeof ImageReference$ === "object");
assert(typeof ImageUsageReport$ === "object");
assert(typeof ImageUsageReportEntry$ === "object");
assert(typeof ImageUsageResourceType$ === "object");
assert(typeof ImageUsageResourceTypeOption$ === "object");
assert(typeof ImageUsageResourceTypeOptionRequest$ === "object");
assert(typeof ImageUsageResourceTypeRequest$ === "object");
assert(typeof ImportClientVpnClientCertificateRevocationListRequest$ === "object");
assert(typeof ImportClientVpnClientCertificateRevocationListResult$ === "object");
assert(typeof ImportImageLicenseConfigurationRequest$ === "object");
assert(typeof ImportImageLicenseConfigurationResponse$ === "object");
assert(typeof ImportImageRequest$ === "object");
assert(typeof ImportImageResult$ === "object");
assert(typeof ImportImageTask$ === "object");
assert(typeof ImportInstanceLaunchSpecification$ === "object");
assert(typeof ImportInstanceRequest$ === "object");
assert(typeof ImportInstanceResult$ === "object");
assert(typeof ImportInstanceTaskDetails$ === "object");
assert(typeof ImportInstanceVolumeDetailItem$ === "object");
assert(typeof ImportKeyPairRequest$ === "object");
assert(typeof ImportKeyPairResult$ === "object");
assert(typeof ImportSnapshotRequest$ === "object");
assert(typeof ImportSnapshotResult$ === "object");
assert(typeof ImportSnapshotTask$ === "object");
assert(typeof ImportVolumeRequest$ === "object");
assert(typeof ImportVolumeResult$ === "object");
assert(typeof ImportVolumeTaskDetails$ === "object");
assert(typeof InferenceAcceleratorInfo$ === "object");
assert(typeof InferenceDeviceInfo$ === "object");
assert(typeof InferenceDeviceMemoryInfo$ === "object");
assert(typeof InitializationStatusDetails$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceAttachmentEnaSrdSpecification$ === "object");
assert(typeof InstanceAttachmentEnaSrdUdpSpecification$ === "object");
assert(typeof InstanceAttribute$ === "object");
assert(typeof InstanceBlockDeviceMapping$ === "object");
assert(typeof InstanceBlockDeviceMappingSpecification$ === "object");
assert(typeof InstanceCapacity$ === "object");
assert(typeof InstanceConnectEndpointDnsNames$ === "object");
assert(typeof InstanceConnectEndpointPublicDnsNames$ === "object");
assert(typeof InstanceCount$ === "object");
assert(typeof InstanceCreditSpecification$ === "object");
assert(typeof InstanceCreditSpecificationRequest$ === "object");
assert(typeof InstanceEventWindow$ === "object");
assert(typeof InstanceEventWindowAssociationRequest$ === "object");
assert(typeof InstanceEventWindowAssociationTarget$ === "object");
assert(typeof InstanceEventWindowDisassociationRequest$ === "object");
assert(typeof InstanceEventWindowStateChange$ === "object");
assert(typeof InstanceEventWindowTimeRange$ === "object");
assert(typeof InstanceEventWindowTimeRangeRequest$ === "object");
assert(typeof InstanceExportDetails$ === "object");
assert(typeof InstanceFamilyCreditSpecification$ === "object");
assert(typeof InstanceImageMetadata$ === "object");
assert(typeof InstanceIpv4Prefix$ === "object");
assert(typeof InstanceIpv6Address$ === "object");
assert(typeof InstanceIpv6AddressRequest$ === "object");
assert(typeof InstanceIpv6Prefix$ === "object");
assert(typeof InstanceMaintenanceOptions$ === "object");
assert(typeof InstanceMaintenanceOptionsRequest$ === "object");
assert(typeof InstanceMarketOptionsRequest$ === "object");
assert(typeof InstanceMetadataDefaultsResponse$ === "object");
assert(typeof InstanceMetadataOptionsRequest$ === "object");
assert(typeof InstanceMetadataOptionsResponse$ === "object");
assert(typeof InstanceMonitoring$ === "object");
assert(typeof InstanceNetworkInterface$ === "object");
assert(typeof InstanceNetworkInterfaceAssociation$ === "object");
assert(typeof InstanceNetworkInterfaceAttachment$ === "object");
assert(typeof InstanceNetworkInterfaceSpecification$ === "object");
assert(typeof InstanceNetworkPerformanceOptions$ === "object");
assert(typeof InstanceNetworkPerformanceOptionsRequest$ === "object");
assert(typeof InstancePrivateIpAddress$ === "object");
assert(typeof InstanceRequirements$ === "object");
assert(typeof InstanceRequirementsRequest$ === "object");
assert(typeof InstanceRequirementsWithMetadataRequest$ === "object");
assert(typeof InstanceSpecification$ === "object");
assert(typeof InstanceState$ === "object");
assert(typeof InstanceStateChange$ === "object");
assert(typeof InstanceStatus$ === "object");
assert(typeof InstanceStatusDetails$ === "object");
assert(typeof InstanceStatusEvent$ === "object");
assert(typeof InstanceStatusSummary$ === "object");
assert(typeof InstanceStorageInfo$ === "object");
assert(typeof InstanceTagNotificationAttribute$ === "object");
assert(typeof InstanceTopology$ === "object");
assert(typeof InstanceTypeInfo$ === "object");
assert(typeof InstanceTypeInfoFromInstanceRequirements$ === "object");
assert(typeof InstanceTypeOffering$ === "object");
assert(typeof InstanceUsage$ === "object");
assert(typeof IntegrateServices$ === "object");
assert(typeof InternetGateway$ === "object");
assert(typeof InternetGatewayAttachment$ === "object");
assert(typeof InterruptibleCapacityAllocation$ === "object");
assert(typeof InterruptionInfo$ === "object");
assert(typeof Ipam$ === "object");
assert(typeof IpamAddressHistoryRecord$ === "object");
assert(typeof IpamCidrAuthorizationContext$ === "object");
assert(typeof IpamDiscoveredAccount$ === "object");
assert(typeof IpamDiscoveredPublicAddress$ === "object");
assert(typeof IpamDiscoveredResourceCidr$ === "object");
assert(typeof IpamDiscoveryFailureReason$ === "object");
assert(typeof IpamExternalResourceVerificationToken$ === "object");
assert(typeof IpamOperatingRegion$ === "object");
assert(typeof IpamOrganizationalUnitExclusion$ === "object");
assert(typeof IpamPolicy$ === "object");
assert(typeof IpamPolicyAllocationRule$ === "object");
assert(typeof IpamPolicyAllocationRuleRequest$ === "object");
assert(typeof IpamPolicyDocument$ === "object");
assert(typeof IpamPolicyOrganizationTarget$ === "object");
assert(typeof IpamPool$ === "object");
assert(typeof IpamPoolAllocation$ === "object");
assert(typeof IpamPoolCidr$ === "object");
assert(typeof IpamPoolCidrFailureReason$ === "object");
assert(typeof IpamPoolSourceResource$ === "object");
assert(typeof IpamPoolSourceResourceRequest$ === "object");
assert(typeof IpamPrefixListResolver$ === "object");
assert(typeof IpamPrefixListResolverRule$ === "object");
assert(typeof IpamPrefixListResolverRuleCondition$ === "object");
assert(typeof IpamPrefixListResolverRuleConditionRequest$ === "object");
assert(typeof IpamPrefixListResolverRuleRequest$ === "object");
assert(typeof IpamPrefixListResolverTarget$ === "object");
assert(typeof IpamPrefixListResolverVersion$ === "object");
assert(typeof IpamPrefixListResolverVersionEntry$ === "object");
assert(typeof IpamPublicAddressSecurityGroup$ === "object");
assert(typeof IpamPublicAddressTag$ === "object");
assert(typeof IpamPublicAddressTags$ === "object");
assert(typeof IpamResourceCidr$ === "object");
assert(typeof IpamResourceDiscovery$ === "object");
assert(typeof IpamResourceDiscoveryAssociation$ === "object");
assert(typeof IpamResourceTag$ === "object");
assert(typeof IpamScope$ === "object");
assert(typeof IpamScopeExternalAuthorityConfiguration$ === "object");
assert(typeof IpPermission$ === "object");
assert(typeof IpRange$ === "object");
assert(typeof Ipv4PrefixSpecification$ === "object");
assert(typeof Ipv4PrefixSpecificationRequest$ === "object");
assert(typeof Ipv4PrefixSpecificationResponse$ === "object");
assert(typeof Ipv6CidrAssociation$ === "object");
assert(typeof Ipv6CidrBlock$ === "object");
assert(typeof Ipv6Pool$ === "object");
assert(typeof Ipv6PrefixSpecification$ === "object");
assert(typeof Ipv6PrefixSpecificationRequest$ === "object");
assert(typeof Ipv6PrefixSpecificationResponse$ === "object");
assert(typeof Ipv6Range$ === "object");
assert(typeof KeyPair$ === "object");
assert(typeof KeyPairInfo$ === "object");
assert(typeof LastError$ === "object");
assert(typeof LaunchPermission$ === "object");
assert(typeof LaunchPermissionModifications$ === "object");
assert(typeof LaunchSpecification$ === "object");
assert(typeof LaunchTemplate$ === "object");
assert(typeof LaunchTemplateAndOverridesResponse$ === "object");
assert(typeof LaunchTemplateBlockDeviceMapping$ === "object");
assert(typeof LaunchTemplateBlockDeviceMappingRequest$ === "object");
assert(typeof LaunchTemplateCapacityReservationSpecificationRequest$ === "object");
assert(typeof LaunchTemplateCapacityReservationSpecificationResponse$ === "object");
assert(typeof LaunchTemplateConfig$ === "object");
assert(typeof LaunchTemplateCpuOptions$ === "object");
assert(typeof LaunchTemplateCpuOptionsRequest$ === "object");
assert(typeof LaunchTemplateEbsBlockDevice$ === "object");
assert(typeof LaunchTemplateEbsBlockDeviceRequest$ === "object");
assert(typeof LaunchTemplateElasticInferenceAccelerator$ === "object");
assert(typeof LaunchTemplateElasticInferenceAcceleratorResponse$ === "object");
assert(typeof LaunchTemplateEnaSrdSpecification$ === "object");
assert(typeof LaunchTemplateEnaSrdUdpSpecification$ === "object");
assert(typeof LaunchTemplateEnclaveOptions$ === "object");
assert(typeof LaunchTemplateEnclaveOptionsRequest$ === "object");
assert(typeof LaunchTemplateHibernationOptions$ === "object");
assert(typeof LaunchTemplateHibernationOptionsRequest$ === "object");
assert(typeof LaunchTemplateIamInstanceProfileSpecification$ === "object");
assert(typeof LaunchTemplateIamInstanceProfileSpecificationRequest$ === "object");
assert(typeof LaunchTemplateInstanceMaintenanceOptions$ === "object");
assert(typeof LaunchTemplateInstanceMaintenanceOptionsRequest$ === "object");
assert(typeof LaunchTemplateInstanceMarketOptions$ === "object");
assert(typeof LaunchTemplateInstanceMarketOptionsRequest$ === "object");
assert(typeof LaunchTemplateInstanceMetadataOptions$ === "object");
assert(typeof LaunchTemplateInstanceMetadataOptionsRequest$ === "object");
assert(typeof LaunchTemplateInstanceNetworkInterfaceSpecification$ === "object");
assert(typeof LaunchTemplateInstanceNetworkInterfaceSpecificationRequest$ === "object");
assert(typeof LaunchTemplateLicenseConfiguration$ === "object");
assert(typeof LaunchTemplateLicenseConfigurationRequest$ === "object");
assert(typeof LaunchTemplateNetworkPerformanceOptions$ === "object");
assert(typeof LaunchTemplateNetworkPerformanceOptionsRequest$ === "object");
assert(typeof LaunchTemplateOverrides$ === "object");
assert(typeof LaunchTemplatePlacement$ === "object");
assert(typeof LaunchTemplatePlacementRequest$ === "object");
assert(typeof LaunchTemplatePrivateDnsNameOptions$ === "object");
assert(typeof LaunchTemplatePrivateDnsNameOptionsRequest$ === "object");
assert(typeof LaunchTemplatesMonitoring$ === "object");
assert(typeof LaunchTemplatesMonitoringRequest$ === "object");
assert(typeof LaunchTemplateSpecification$ === "object");
assert(typeof LaunchTemplateSpotMarketOptions$ === "object");
assert(typeof LaunchTemplateSpotMarketOptionsRequest$ === "object");
assert(typeof LaunchTemplateTagSpecification$ === "object");
assert(typeof LaunchTemplateTagSpecificationRequest$ === "object");
assert(typeof LaunchTemplateVersion$ === "object");
assert(typeof LicenseConfiguration$ === "object");
assert(typeof LicenseConfigurationRequest$ === "object");
assert(typeof ListImagesInRecycleBinRequest$ === "object");
assert(typeof ListImagesInRecycleBinResult$ === "object");
assert(typeof ListSnapshotsInRecycleBinRequest$ === "object");
assert(typeof ListSnapshotsInRecycleBinResult$ === "object");
assert(typeof ListVolumesInRecycleBinRequest$ === "object");
assert(typeof ListVolumesInRecycleBinResult$ === "object");
assert(typeof LoadBalancersConfig$ === "object");
assert(typeof LoadPermission$ === "object");
assert(typeof LoadPermissionModifications$ === "object");
assert(typeof LoadPermissionRequest$ === "object");
assert(typeof LocalGateway$ === "object");
assert(typeof LocalGatewayRoute$ === "object");
assert(typeof LocalGatewayRouteTable$ === "object");
assert(typeof LocalGatewayRouteTableVirtualInterfaceGroupAssociation$ === "object");
assert(typeof LocalGatewayRouteTableVpcAssociation$ === "object");
assert(typeof LocalGatewayVirtualInterface$ === "object");
assert(typeof LocalGatewayVirtualInterfaceGroup$ === "object");
assert(typeof LockedSnapshotsInfo$ === "object");
assert(typeof LockSnapshotRequest$ === "object");
assert(typeof LockSnapshotResult$ === "object");
assert(typeof MacHost$ === "object");
assert(typeof MacModificationTask$ === "object");
assert(typeof MacSystemIntegrityProtectionConfiguration$ === "object");
assert(typeof MacSystemIntegrityProtectionConfigurationRequest$ === "object");
assert(typeof MaintenanceDetails$ === "object");
assert(typeof ManagedPrefixList$ === "object");
assert(typeof MediaAcceleratorInfo$ === "object");
assert(typeof MediaDeviceInfo$ === "object");
assert(typeof MediaDeviceMemoryInfo$ === "object");
assert(typeof MemoryGiBPerVCpu$ === "object");
assert(typeof MemoryGiBPerVCpuRequest$ === "object");
assert(typeof MemoryInfo$ === "object");
assert(typeof MemoryMiB$ === "object");
assert(typeof MemoryMiBRequest$ === "object");
assert(typeof MetricDataResult$ === "object");
assert(typeof MetricPoint$ === "object");
assert(typeof MetricValue$ === "object");
assert(typeof ModifyAddressAttributeRequest$ === "object");
assert(typeof ModifyAddressAttributeResult$ === "object");
assert(typeof ModifyAvailabilityZoneGroupRequest$ === "object");
assert(typeof ModifyAvailabilityZoneGroupResult$ === "object");
assert(typeof ModifyCapacityReservationFleetRequest$ === "object");
assert(typeof ModifyCapacityReservationFleetResult$ === "object");
assert(typeof ModifyCapacityReservationRequest$ === "object");
assert(typeof ModifyCapacityReservationResult$ === "object");
assert(typeof ModifyClientVpnEndpointRequest$ === "object");
assert(typeof ModifyClientVpnEndpointResult$ === "object");
assert(typeof ModifyDefaultCreditSpecificationRequest$ === "object");
assert(typeof ModifyDefaultCreditSpecificationResult$ === "object");
assert(typeof ModifyEbsDefaultKmsKeyIdRequest$ === "object");
assert(typeof ModifyEbsDefaultKmsKeyIdResult$ === "object");
assert(typeof ModifyFleetRequest$ === "object");
assert(typeof ModifyFleetResult$ === "object");
assert(typeof ModifyFpgaImageAttributeRequest$ === "object");
assert(typeof ModifyFpgaImageAttributeResult$ === "object");
assert(typeof ModifyHostsRequest$ === "object");
assert(typeof ModifyHostsResult$ === "object");
assert(typeof ModifyIdentityIdFormatRequest$ === "object");
assert(typeof ModifyIdFormatRequest$ === "object");
assert(typeof ModifyImageAttributeRequest$ === "object");
assert(typeof ModifyInstanceAttributeRequest$ === "object");
assert(typeof ModifyInstanceCapacityReservationAttributesRequest$ === "object");
assert(typeof ModifyInstanceCapacityReservationAttributesResult$ === "object");
assert(typeof ModifyInstanceConnectEndpointRequest$ === "object");
assert(typeof ModifyInstanceConnectEndpointResult$ === "object");
assert(typeof ModifyInstanceCpuOptionsRequest$ === "object");
assert(typeof ModifyInstanceCpuOptionsResult$ === "object");
assert(typeof ModifyInstanceCreditSpecificationRequest$ === "object");
assert(typeof ModifyInstanceCreditSpecificationResult$ === "object");
assert(typeof ModifyInstanceEventStartTimeRequest$ === "object");
assert(typeof ModifyInstanceEventStartTimeResult$ === "object");
assert(typeof ModifyInstanceEventWindowRequest$ === "object");
assert(typeof ModifyInstanceEventWindowResult$ === "object");
assert(typeof ModifyInstanceMaintenanceOptionsRequest$ === "object");
assert(typeof ModifyInstanceMaintenanceOptionsResult$ === "object");
assert(typeof ModifyInstanceMetadataDefaultsRequest$ === "object");
assert(typeof ModifyInstanceMetadataDefaultsResult$ === "object");
assert(typeof ModifyInstanceMetadataOptionsRequest$ === "object");
assert(typeof ModifyInstanceMetadataOptionsResult$ === "object");
assert(typeof ModifyInstanceNetworkPerformanceRequest$ === "object");
assert(typeof ModifyInstanceNetworkPerformanceResult$ === "object");
assert(typeof ModifyInstancePlacementRequest$ === "object");
assert(typeof ModifyInstancePlacementResult$ === "object");
assert(typeof ModifyIpamPolicyAllocationRulesRequest$ === "object");
assert(typeof ModifyIpamPolicyAllocationRulesResult$ === "object");
assert(typeof ModifyIpamPoolRequest$ === "object");
assert(typeof ModifyIpamPoolResult$ === "object");
assert(typeof ModifyIpamPrefixListResolverRequest$ === "object");
assert(typeof ModifyIpamPrefixListResolverResult$ === "object");
assert(typeof ModifyIpamPrefixListResolverTargetRequest$ === "object");
assert(typeof ModifyIpamPrefixListResolverTargetResult$ === "object");
assert(typeof ModifyIpamRequest$ === "object");
assert(typeof ModifyIpamResourceCidrRequest$ === "object");
assert(typeof ModifyIpamResourceCidrResult$ === "object");
assert(typeof ModifyIpamResourceDiscoveryRequest$ === "object");
assert(typeof ModifyIpamResourceDiscoveryResult$ === "object");
assert(typeof ModifyIpamResult$ === "object");
assert(typeof ModifyIpamScopeRequest$ === "object");
assert(typeof ModifyIpamScopeResult$ === "object");
assert(typeof ModifyLaunchTemplateRequest$ === "object");
assert(typeof ModifyLaunchTemplateResult$ === "object");
assert(typeof ModifyLocalGatewayRouteRequest$ === "object");
assert(typeof ModifyLocalGatewayRouteResult$ === "object");
assert(typeof ModifyManagedPrefixListRequest$ === "object");
assert(typeof ModifyManagedPrefixListResult$ === "object");
assert(typeof ModifyNetworkInterfaceAttributeRequest$ === "object");
assert(typeof ModifyPrivateDnsNameOptionsRequest$ === "object");
assert(typeof ModifyPrivateDnsNameOptionsResult$ === "object");
assert(typeof ModifyPublicIpDnsNameOptionsRequest$ === "object");
assert(typeof ModifyPublicIpDnsNameOptionsResult$ === "object");
assert(typeof ModifyReservedInstancesRequest$ === "object");
assert(typeof ModifyReservedInstancesResult$ === "object");
assert(typeof ModifyRouteServerRequest$ === "object");
assert(typeof ModifyRouteServerResult$ === "object");
assert(typeof ModifySecurityGroupRulesRequest$ === "object");
assert(typeof ModifySecurityGroupRulesResult$ === "object");
assert(typeof ModifySnapshotAttributeRequest$ === "object");
assert(typeof ModifySnapshotTierRequest$ === "object");
assert(typeof ModifySnapshotTierResult$ === "object");
assert(typeof ModifySpotFleetRequestRequest$ === "object");
assert(typeof ModifySpotFleetRequestResponse$ === "object");
assert(typeof ModifySubnetAttributeRequest$ === "object");
assert(typeof ModifyTrafficMirrorFilterNetworkServicesRequest$ === "object");
assert(typeof ModifyTrafficMirrorFilterNetworkServicesResult$ === "object");
assert(typeof ModifyTrafficMirrorFilterRuleRequest$ === "object");
assert(typeof ModifyTrafficMirrorFilterRuleResult$ === "object");
assert(typeof ModifyTrafficMirrorSessionRequest$ === "object");
assert(typeof ModifyTrafficMirrorSessionResult$ === "object");
assert(typeof ModifyTransitGatewayMeteringPolicyRequest$ === "object");
assert(typeof ModifyTransitGatewayMeteringPolicyResult$ === "object");
assert(typeof ModifyTransitGatewayOptions$ === "object");
assert(typeof ModifyTransitGatewayPrefixListReferenceRequest$ === "object");
assert(typeof ModifyTransitGatewayPrefixListReferenceResult$ === "object");
assert(typeof ModifyTransitGatewayRequest$ === "object");
assert(typeof ModifyTransitGatewayResult$ === "object");
assert(typeof ModifyTransitGatewayVpcAttachmentRequest$ === "object");
assert(typeof ModifyTransitGatewayVpcAttachmentRequestOptions$ === "object");
assert(typeof ModifyTransitGatewayVpcAttachmentResult$ === "object");
assert(typeof ModifyVerifiedAccessEndpointCidrOptions$ === "object");
assert(typeof ModifyVerifiedAccessEndpointEniOptions$ === "object");
assert(typeof ModifyVerifiedAccessEndpointLoadBalancerOptions$ === "object");
assert(typeof ModifyVerifiedAccessEndpointPolicyRequest$ === "object");
assert(typeof ModifyVerifiedAccessEndpointPolicyResult$ === "object");
assert(typeof ModifyVerifiedAccessEndpointPortRange$ === "object");
assert(typeof ModifyVerifiedAccessEndpointRdsOptions$ === "object");
assert(typeof ModifyVerifiedAccessEndpointRequest$ === "object");
assert(typeof ModifyVerifiedAccessEndpointResult$ === "object");
assert(typeof ModifyVerifiedAccessGroupPolicyRequest$ === "object");
assert(typeof ModifyVerifiedAccessGroupPolicyResult$ === "object");
assert(typeof ModifyVerifiedAccessGroupRequest$ === "object");
assert(typeof ModifyVerifiedAccessGroupResult$ === "object");
assert(typeof ModifyVerifiedAccessInstanceLoggingConfigurationRequest$ === "object");
assert(typeof ModifyVerifiedAccessInstanceLoggingConfigurationResult$ === "object");
assert(typeof ModifyVerifiedAccessInstanceRequest$ === "object");
assert(typeof ModifyVerifiedAccessInstanceResult$ === "object");
assert(typeof ModifyVerifiedAccessNativeApplicationOidcOptions$ === "object");
assert(typeof ModifyVerifiedAccessTrustProviderDeviceOptions$ === "object");
assert(typeof ModifyVerifiedAccessTrustProviderOidcOptions$ === "object");
assert(typeof ModifyVerifiedAccessTrustProviderRequest$ === "object");
assert(typeof ModifyVerifiedAccessTrustProviderResult$ === "object");
assert(typeof ModifyVolumeAttributeRequest$ === "object");
assert(typeof ModifyVolumeRequest$ === "object");
assert(typeof ModifyVolumeResult$ === "object");
assert(typeof ModifyVpcAttributeRequest$ === "object");
assert(typeof ModifyVpcBlockPublicAccessExclusionRequest$ === "object");
assert(typeof ModifyVpcBlockPublicAccessExclusionResult$ === "object");
assert(typeof ModifyVpcBlockPublicAccessOptionsRequest$ === "object");
assert(typeof ModifyVpcBlockPublicAccessOptionsResult$ === "object");
assert(typeof ModifyVpcEncryptionControlRequest$ === "object");
assert(typeof ModifyVpcEncryptionControlResult$ === "object");
assert(typeof ModifyVpcEndpointConnectionNotificationRequest$ === "object");
assert(typeof ModifyVpcEndpointConnectionNotificationResult$ === "object");
assert(typeof ModifyVpcEndpointRequest$ === "object");
assert(typeof ModifyVpcEndpointResult$ === "object");
assert(typeof ModifyVpcEndpointServiceConfigurationRequest$ === "object");
assert(typeof ModifyVpcEndpointServiceConfigurationResult$ === "object");
assert(typeof ModifyVpcEndpointServicePayerResponsibilityRequest$ === "object");
assert(typeof ModifyVpcEndpointServicePayerResponsibilityResult$ === "object");
assert(typeof ModifyVpcEndpointServicePermissionsRequest$ === "object");
assert(typeof ModifyVpcEndpointServicePermissionsResult$ === "object");
assert(typeof ModifyVpcPeeringConnectionOptionsRequest$ === "object");
assert(typeof ModifyVpcPeeringConnectionOptionsResult$ === "object");
assert(typeof ModifyVpcTenancyRequest$ === "object");
assert(typeof ModifyVpcTenancyResult$ === "object");
assert(typeof ModifyVpnConnectionOptionsRequest$ === "object");
assert(typeof ModifyVpnConnectionOptionsResult$ === "object");
assert(typeof ModifyVpnConnectionRequest$ === "object");
assert(typeof ModifyVpnConnectionResult$ === "object");
assert(typeof ModifyVpnTunnelCertificateRequest$ === "object");
assert(typeof ModifyVpnTunnelCertificateResult$ === "object");
assert(typeof ModifyVpnTunnelOptionsRequest$ === "object");
assert(typeof ModifyVpnTunnelOptionsResult$ === "object");
assert(typeof ModifyVpnTunnelOptionsSpecification$ === "object");
assert(typeof Monitoring$ === "object");
assert(typeof MonitorInstancesRequest$ === "object");
assert(typeof MonitorInstancesResult$ === "object");
assert(typeof MoveAddressToVpcRequest$ === "object");
assert(typeof MoveAddressToVpcResult$ === "object");
assert(typeof MoveByoipCidrToIpamRequest$ === "object");
assert(typeof MoveByoipCidrToIpamResult$ === "object");
assert(typeof MoveCapacityReservationInstancesRequest$ === "object");
assert(typeof MoveCapacityReservationInstancesResult$ === "object");
assert(typeof MovingAddressStatus$ === "object");
assert(typeof NatGateway$ === "object");
assert(typeof NatGatewayAddress$ === "object");
assert(typeof NatGatewayAttachedAppliance$ === "object");
assert(typeof NativeApplicationOidcOptions$ === "object");
assert(typeof NetworkAcl$ === "object");
assert(typeof NetworkAclAssociation$ === "object");
assert(typeof NetworkAclEntry$ === "object");
assert(typeof NetworkBandwidthGbps$ === "object");
assert(typeof NetworkBandwidthGbpsRequest$ === "object");
assert(typeof NetworkCardInfo$ === "object");
assert(typeof NetworkInfo$ === "object");
assert(typeof NetworkInsightsAccessScope$ === "object");
assert(typeof NetworkInsightsAccessScopeAnalysis$ === "object");
assert(typeof NetworkInsightsAccessScopeContent$ === "object");
assert(typeof NetworkInsightsAnalysis$ === "object");
assert(typeof NetworkInsightsPath$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof NetworkInterfaceAssociation$ === "object");
assert(typeof NetworkInterfaceAttachment$ === "object");
assert(typeof NetworkInterfaceAttachmentChanges$ === "object");
assert(typeof NetworkInterfaceCount$ === "object");
assert(typeof NetworkInterfaceCountRequest$ === "object");
assert(typeof NetworkInterfaceIpv6Address$ === "object");
assert(typeof NetworkInterfacePermission$ === "object");
assert(typeof NetworkInterfacePermissionState$ === "object");
assert(typeof NetworkInterfacePrivateIpAddress$ === "object");
assert(typeof NeuronDeviceCoreInfo$ === "object");
assert(typeof NeuronDeviceInfo$ === "object");
assert(typeof NeuronDeviceMemoryInfo$ === "object");
assert(typeof NeuronInfo$ === "object");
assert(typeof NewDhcpConfiguration$ === "object");
assert(typeof NitroTpmInfo$ === "object");
assert(typeof OidcOptions$ === "object");
assert(typeof OnDemandOptions$ === "object");
assert(typeof OnDemandOptionsRequest$ === "object");
assert(typeof OperatorRequest$ === "object");
assert(typeof OperatorResponse$ === "object");
assert(typeof OutpostLag$ === "object");
assert(typeof PacketHeaderStatement$ === "object");
assert(typeof PacketHeaderStatementRequest$ === "object");
assert(typeof PathComponent$ === "object");
assert(typeof PathFilter$ === "object");
assert(typeof PathRequestFilter$ === "object");
assert(typeof PathStatement$ === "object");
assert(typeof PathStatementRequest$ === "object");
assert(typeof PciId$ === "object");
assert(typeof PeeringAttachmentStatus$ === "object");
assert(typeof PeeringConnectionOptions$ === "object");
assert(typeof PeeringConnectionOptionsRequest$ === "object");
assert(typeof PeeringTgwInfo$ === "object");
assert(typeof PerformanceFactorReference$ === "object");
assert(typeof PerformanceFactorReferenceRequest$ === "object");
assert(typeof Phase1DHGroupNumbersListValue$ === "object");
assert(typeof Phase1DHGroupNumbersRequestListValue$ === "object");
assert(typeof Phase1EncryptionAlgorithmsListValue$ === "object");
assert(typeof Phase1EncryptionAlgorithmsRequestListValue$ === "object");
assert(typeof Phase1IntegrityAlgorithmsListValue$ === "object");
assert(typeof Phase1IntegrityAlgorithmsRequestListValue$ === "object");
assert(typeof Phase2DHGroupNumbersListValue$ === "object");
assert(typeof Phase2DHGroupNumbersRequestListValue$ === "object");
assert(typeof Phase2EncryptionAlgorithmsListValue$ === "object");
assert(typeof Phase2EncryptionAlgorithmsRequestListValue$ === "object");
assert(typeof Phase2IntegrityAlgorithmsListValue$ === "object");
assert(typeof Phase2IntegrityAlgorithmsRequestListValue$ === "object");
assert(typeof Placement$ === "object");
assert(typeof PlacementGroup$ === "object");
assert(typeof PlacementGroupInfo$ === "object");
assert(typeof PlacementResponse$ === "object");
assert(typeof PoolCidrBlock$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PrefixList$ === "object");
assert(typeof PrefixListAssociation$ === "object");
assert(typeof PrefixListEntry$ === "object");
assert(typeof PrefixListId$ === "object");
assert(typeof PriceSchedule$ === "object");
assert(typeof PriceScheduleSpecification$ === "object");
assert(typeof PricingDetail$ === "object");
assert(typeof PrincipalIdFormat$ === "object");
assert(typeof PrivateDnsDetails$ === "object");
assert(typeof PrivateDnsNameConfiguration$ === "object");
assert(typeof PrivateDnsNameOptionsOnLaunch$ === "object");
assert(typeof PrivateDnsNameOptionsRequest$ === "object");
assert(typeof PrivateDnsNameOptionsResponse$ === "object");
assert(typeof PrivateIpAddressSpecification$ === "object");
assert(typeof ProcessorInfo$ === "object");
assert(typeof ProductCode$ === "object");
assert(typeof PropagatingVgw$ === "object");
assert(typeof ProvisionByoipCidrRequest$ === "object");
assert(typeof ProvisionByoipCidrResult$ === "object");
assert(typeof ProvisionedBandwidth$ === "object");
assert(typeof ProvisionIpamByoasnRequest$ === "object");
assert(typeof ProvisionIpamByoasnResult$ === "object");
assert(typeof ProvisionIpamPoolCidrRequest$ === "object");
assert(typeof ProvisionIpamPoolCidrResult$ === "object");
assert(typeof ProvisionPublicIpv4PoolCidrRequest$ === "object");
assert(typeof ProvisionPublicIpv4PoolCidrResult$ === "object");
assert(typeof PtrUpdateStatus$ === "object");
assert(typeof PublicIpDnsNameOptions$ === "object");
assert(typeof PublicIpv4Pool$ === "object");
assert(typeof PublicIpv4PoolRange$ === "object");
assert(typeof Purchase$ === "object");
assert(typeof PurchaseCapacityBlockExtensionRequest$ === "object");
assert(typeof PurchaseCapacityBlockExtensionResult$ === "object");
assert(typeof PurchaseCapacityBlockRequest$ === "object");
assert(typeof PurchaseCapacityBlockResult$ === "object");
assert(typeof PurchaseHostReservationRequest$ === "object");
assert(typeof PurchaseHostReservationResult$ === "object");
assert(typeof PurchaseRequest$ === "object");
assert(typeof PurchaseReservedInstancesOfferingRequest$ === "object");
assert(typeof PurchaseReservedInstancesOfferingResult$ === "object");
assert(typeof PurchaseScheduledInstancesRequest$ === "object");
assert(typeof PurchaseScheduledInstancesResult$ === "object");
assert(typeof RebootInstancesRequest$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof ReferencedSecurityGroup$ === "object");
assert(typeof Region$ === "object");
assert(typeof RegionalSummary$ === "object");
assert(typeof RegisteredInstance$ === "object");
assert(typeof RegisterImageRequest$ === "object");
assert(typeof RegisterImageResult$ === "object");
assert(typeof RegisterInstanceEventNotificationAttributesRequest$ === "object");
assert(typeof RegisterInstanceEventNotificationAttributesResult$ === "object");
assert(typeof RegisterInstanceTagAttributeRequest$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupMembersRequest$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupMembersResult$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupSourcesRequest$ === "object");
assert(typeof RegisterTransitGatewayMulticastGroupSourcesResult$ === "object");
assert(typeof RejectCapacityReservationBillingOwnershipRequest$ === "object");
assert(typeof RejectCapacityReservationBillingOwnershipResult$ === "object");
assert(typeof RejectTransitGatewayMulticastDomainAssociationsRequest$ === "object");
assert(typeof RejectTransitGatewayMulticastDomainAssociationsResult$ === "object");
assert(typeof RejectTransitGatewayPeeringAttachmentRequest$ === "object");
assert(typeof RejectTransitGatewayPeeringAttachmentResult$ === "object");
assert(typeof RejectTransitGatewayVpcAttachmentRequest$ === "object");
assert(typeof RejectTransitGatewayVpcAttachmentResult$ === "object");
assert(typeof RejectVpcEndpointConnectionsRequest$ === "object");
assert(typeof RejectVpcEndpointConnectionsResult$ === "object");
assert(typeof RejectVpcPeeringConnectionRequest$ === "object");
assert(typeof RejectVpcPeeringConnectionResult$ === "object");
assert(typeof ReleaseAddressRequest$ === "object");
assert(typeof ReleaseHostsRequest$ === "object");
assert(typeof ReleaseHostsResult$ === "object");
assert(typeof ReleaseIpamPoolAllocationRequest$ === "object");
assert(typeof ReleaseIpamPoolAllocationResult$ === "object");
assert(typeof RemoveIpamOperatingRegion$ === "object");
assert(typeof RemoveIpamOrganizationalUnitExclusion$ === "object");
assert(typeof RemovePrefixListEntry$ === "object");
assert(typeof ReplaceIamInstanceProfileAssociationRequest$ === "object");
assert(typeof ReplaceIamInstanceProfileAssociationResult$ === "object");
assert(typeof ReplaceImageCriteriaInAllowedImagesSettingsRequest$ === "object");
assert(typeof ReplaceImageCriteriaInAllowedImagesSettingsResult$ === "object");
assert(typeof ReplaceNetworkAclAssociationRequest$ === "object");
assert(typeof ReplaceNetworkAclAssociationResult$ === "object");
assert(typeof ReplaceNetworkAclEntryRequest$ === "object");
assert(typeof ReplaceRootVolumeTask$ === "object");
assert(typeof ReplaceRouteRequest$ === "object");
assert(typeof ReplaceRouteTableAssociationRequest$ === "object");
assert(typeof ReplaceRouteTableAssociationResult$ === "object");
assert(typeof ReplaceTransitGatewayRouteRequest$ === "object");
assert(typeof ReplaceTransitGatewayRouteResult$ === "object");
assert(typeof ReplaceVpnTunnelRequest$ === "object");
assert(typeof ReplaceVpnTunnelResult$ === "object");
assert(typeof ReportInstanceStatusRequest$ === "object");
assert(typeof RequestFilterPortRange$ === "object");
assert(typeof RequestIpamResourceTag$ === "object");
assert(typeof RequestLaunchTemplateData$ === "object");
assert(typeof RequestSpotFleetRequest$ === "object");
assert(typeof RequestSpotFleetResponse$ === "object");
assert(typeof RequestSpotInstancesRequest$ === "object");
assert(typeof RequestSpotInstancesResult$ === "object");
assert(typeof RequestSpotLaunchSpecification$ === "object");
assert(typeof Reservation$ === "object");
assert(typeof ReservationFleetInstanceSpecification$ === "object");
assert(typeof ReservationValue$ === "object");
assert(typeof ReservedInstanceLimitPrice$ === "object");
assert(typeof ReservedInstanceReservationValue$ === "object");
assert(typeof ReservedInstances$ === "object");
assert(typeof ReservedInstancesConfiguration$ === "object");
assert(typeof ReservedInstancesId$ === "object");
assert(typeof ReservedInstancesListing$ === "object");
assert(typeof ReservedInstancesModification$ === "object");
assert(typeof ReservedInstancesModificationResult$ === "object");
assert(typeof ReservedInstancesOffering$ === "object");
assert(typeof ResetAddressAttributeRequest$ === "object");
assert(typeof ResetAddressAttributeResult$ === "object");
assert(typeof ResetEbsDefaultKmsKeyIdRequest$ === "object");
assert(typeof ResetEbsDefaultKmsKeyIdResult$ === "object");
assert(typeof ResetFpgaImageAttributeRequest$ === "object");
assert(typeof ResetFpgaImageAttributeResult$ === "object");
assert(typeof ResetImageAttributeRequest$ === "object");
assert(typeof ResetInstanceAttributeRequest$ === "object");
assert(typeof ResetNetworkInterfaceAttributeRequest$ === "object");
assert(typeof ResetSnapshotAttributeRequest$ === "object");
assert(typeof ResourceStatement$ === "object");
assert(typeof ResourceStatementRequest$ === "object");
assert(typeof ResourceTypeOption$ === "object");
assert(typeof ResourceTypeRequest$ === "object");
assert(typeof ResponseError$ === "object");
assert(typeof ResponseLaunchTemplateData$ === "object");
assert(typeof RestoreAddressToClassicRequest$ === "object");
assert(typeof RestoreAddressToClassicResult$ === "object");
assert(typeof RestoreImageFromRecycleBinRequest$ === "object");
assert(typeof RestoreImageFromRecycleBinResult$ === "object");
assert(typeof RestoreManagedPrefixListVersionRequest$ === "object");
assert(typeof RestoreManagedPrefixListVersionResult$ === "object");
assert(typeof RestoreSnapshotFromRecycleBinRequest$ === "object");
assert(typeof RestoreSnapshotFromRecycleBinResult$ === "object");
assert(typeof RestoreSnapshotTierRequest$ === "object");
assert(typeof RestoreSnapshotTierResult$ === "object");
assert(typeof RestoreVolumeFromRecycleBinRequest$ === "object");
assert(typeof RestoreVolumeFromRecycleBinResult$ === "object");
assert(typeof RevokeClientVpnIngressRequest$ === "object");
assert(typeof RevokeClientVpnIngressResult$ === "object");
assert(typeof RevokedSecurityGroupRule$ === "object");
assert(typeof RevokeSecurityGroupEgressRequest$ === "object");
assert(typeof RevokeSecurityGroupEgressResult$ === "object");
assert(typeof RevokeSecurityGroupIngressRequest$ === "object");
assert(typeof RevokeSecurityGroupIngressResult$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteServer$ === "object");
assert(typeof RouteServerAssociation$ === "object");
assert(typeof RouteServerBfdStatus$ === "object");
assert(typeof RouteServerBgpOptions$ === "object");
assert(typeof RouteServerBgpOptionsRequest$ === "object");
assert(typeof RouteServerBgpStatus$ === "object");
assert(typeof RouteServerEndpoint$ === "object");
assert(typeof RouteServerPeer$ === "object");
assert(typeof RouteServerPropagation$ === "object");
assert(typeof RouteServerRoute$ === "object");
assert(typeof RouteServerRouteInstallationDetail$ === "object");
assert(typeof RouteTable$ === "object");
assert(typeof RouteTableAssociation$ === "object");
assert(typeof RouteTableAssociationState$ === "object");
assert(typeof RuleGroupRuleOptionsPair$ === "object");
assert(typeof RuleGroupTypePair$ === "object");
assert(typeof RuleOption$ === "object");
assert(typeof RunInstancesMonitoringEnabled$ === "object");
assert(typeof RunInstancesRequest$ === "object");
assert(typeof RunScheduledInstancesRequest$ === "object");
assert(typeof RunScheduledInstancesResult$ === "object");
assert(typeof S3ObjectTag$ === "object");
assert(typeof S3Storage$ === "object");
assert(typeof ScheduledInstance$ === "object");
assert(typeof ScheduledInstanceAvailability$ === "object");
assert(typeof ScheduledInstanceRecurrence$ === "object");
assert(typeof ScheduledInstanceRecurrenceRequest$ === "object");
assert(typeof ScheduledInstancesBlockDeviceMapping$ === "object");
assert(typeof ScheduledInstancesEbs$ === "object");
assert(typeof ScheduledInstancesIamInstanceProfile$ === "object");
assert(typeof ScheduledInstancesIpv6Address$ === "object");
assert(typeof ScheduledInstancesLaunchSpecification$ === "object");
assert(typeof ScheduledInstancesMonitoring$ === "object");
assert(typeof ScheduledInstancesNetworkInterface$ === "object");
assert(typeof ScheduledInstancesPlacement$ === "object");
assert(typeof ScheduledInstancesPrivateIpAddressConfig$ === "object");
assert(typeof SearchLocalGatewayRoutesRequest$ === "object");
assert(typeof SearchLocalGatewayRoutesResult$ === "object");
assert(typeof SearchTransitGatewayMulticastGroupsRequest$ === "object");
assert(typeof SearchTransitGatewayMulticastGroupsResult$ === "object");
assert(typeof SearchTransitGatewayRoutesRequest$ === "object");
assert(typeof SearchTransitGatewayRoutesResult$ === "object");
assert(typeof SecurityGroup$ === "object");
assert(typeof SecurityGroupForVpc$ === "object");
assert(typeof SecurityGroupIdentifier$ === "object");
assert(typeof SecurityGroupReference$ === "object");
assert(typeof SecurityGroupRule$ === "object");
assert(typeof SecurityGroupRuleDescription$ === "object");
assert(typeof SecurityGroupRuleRequest$ === "object");
assert(typeof SecurityGroupRuleUpdate$ === "object");
assert(typeof SecurityGroupVpcAssociation$ === "object");
assert(typeof SendDiagnosticInterruptRequest$ === "object");
assert(typeof ServiceConfiguration$ === "object");
assert(typeof ServiceDetail$ === "object");
assert(typeof ServiceLinkVirtualInterface$ === "object");
assert(typeof ServiceTypeDetail$ === "object");
assert(typeof SlotDateTimeRangeRequest$ === "object");
assert(typeof SlotStartTimeRangeRequest$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof SnapshotDetail$ === "object");
assert(typeof SnapshotDiskContainer$ === "object");
assert(typeof SnapshotInfo$ === "object");
assert(typeof SnapshotRecycleBinInfo$ === "object");
assert(typeof SnapshotTaskDetail$ === "object");
assert(typeof SnapshotTierStatus$ === "object");
assert(typeof SpotCapacityRebalance$ === "object");
assert(typeof SpotDatafeedSubscription$ === "object");
assert(typeof SpotFleetLaunchSpecification$ === "object");
assert(typeof SpotFleetMonitoring$ === "object");
assert(typeof SpotFleetRequestConfig$ === "object");
assert(typeof SpotFleetRequestConfigData$ === "object");
assert(typeof SpotFleetTagSpecification$ === "object");
assert(typeof SpotInstanceRequest$ === "object");
assert(typeof SpotInstanceStateFault$ === "object");
assert(typeof SpotInstanceStatus$ === "object");
assert(typeof SpotMaintenanceStrategies$ === "object");
assert(typeof SpotMarketOptions$ === "object");
assert(typeof SpotOptions$ === "object");
assert(typeof SpotOptionsRequest$ === "object");
assert(typeof SpotPlacement$ === "object");
assert(typeof SpotPlacementScore$ === "object");
assert(typeof SpotPrice$ === "object");
assert(typeof StaleIpPermission$ === "object");
assert(typeof StaleSecurityGroup$ === "object");
assert(typeof StartDeclarativePoliciesReportRequest$ === "object");
assert(typeof StartDeclarativePoliciesReportResult$ === "object");
assert(typeof StartInstancesRequest$ === "object");
assert(typeof StartInstancesResult$ === "object");
assert(typeof StartNetworkInsightsAccessScopeAnalysisRequest$ === "object");
assert(typeof StartNetworkInsightsAccessScopeAnalysisResult$ === "object");
assert(typeof StartNetworkInsightsAnalysisRequest$ === "object");
assert(typeof StartNetworkInsightsAnalysisResult$ === "object");
assert(typeof StartVpcEndpointServicePrivateDnsVerificationRequest$ === "object");
assert(typeof StartVpcEndpointServicePrivateDnsVerificationResult$ === "object");
assert(typeof StateReason$ === "object");
assert(typeof StopInstancesRequest$ === "object");
assert(typeof StopInstancesResult$ === "object");
assert(typeof Storage$ === "object");
assert(typeof StorageLocation$ === "object");
assert(typeof StoreImageTaskResult$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SubnetAssociation$ === "object");
assert(typeof SubnetCidrBlockState$ === "object");
assert(typeof SubnetCidrReservation$ === "object");
assert(typeof SubnetConfiguration$ === "object");
assert(typeof SubnetIpPrefixes$ === "object");
assert(typeof SubnetIpv6CidrBlockAssociation$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof SuccessfulInstanceCreditSpecificationItem$ === "object");
assert(typeof SuccessfulQueuedPurchaseDeletion$ === "object");
assert(typeof SupportedRegionDetail$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagDescription$ === "object");
assert(typeof TagSpecification$ === "object");
assert(typeof TargetCapacitySpecification$ === "object");
assert(typeof TargetCapacitySpecificationRequest$ === "object");
assert(typeof TargetConfiguration$ === "object");
assert(typeof TargetConfigurationRequest$ === "object");
assert(typeof TargetGroup$ === "object");
assert(typeof TargetGroupsConfig$ === "object");
assert(typeof TargetNetwork$ === "object");
assert(typeof TargetReservationValue$ === "object");
assert(typeof TerminateClientVpnConnectionsRequest$ === "object");
assert(typeof TerminateClientVpnConnectionsResult$ === "object");
assert(typeof TerminateConnectionStatus$ === "object");
assert(typeof TerminateInstancesRequest$ === "object");
assert(typeof TerminateInstancesResult$ === "object");
assert(typeof ThroughResourcesStatement$ === "object");
assert(typeof ThroughResourcesStatementRequest$ === "object");
assert(typeof TotalLocalStorageGB$ === "object");
assert(typeof TotalLocalStorageGBRequest$ === "object");
assert(typeof TrafficMirrorFilter$ === "object");
assert(typeof TrafficMirrorFilterRule$ === "object");
assert(typeof TrafficMirrorPortRange$ === "object");
assert(typeof TrafficMirrorPortRangeRequest$ === "object");
assert(typeof TrafficMirrorSession$ === "object");
assert(typeof TrafficMirrorTarget$ === "object");
assert(typeof TransitGateway$ === "object");
assert(typeof TransitGatewayAssociation$ === "object");
assert(typeof TransitGatewayAttachment$ === "object");
assert(typeof TransitGatewayAttachmentAssociation$ === "object");
assert(typeof TransitGatewayAttachmentBgpConfiguration$ === "object");
assert(typeof TransitGatewayAttachmentPropagation$ === "object");
assert(typeof TransitGatewayConnect$ === "object");
assert(typeof TransitGatewayConnectOptions$ === "object");
assert(typeof TransitGatewayConnectPeer$ === "object");
assert(typeof TransitGatewayConnectPeerConfiguration$ === "object");
assert(typeof TransitGatewayConnectRequestBgpOptions$ === "object");
assert(typeof TransitGatewayMeteringPolicy$ === "object");
assert(typeof TransitGatewayMeteringPolicyEntry$ === "object");
assert(typeof TransitGatewayMeteringPolicyRule$ === "object");
assert(typeof TransitGatewayMulticastDeregisteredGroupMembers$ === "object");
assert(typeof TransitGatewayMulticastDeregisteredGroupSources$ === "object");
assert(typeof TransitGatewayMulticastDomain$ === "object");
assert(typeof TransitGatewayMulticastDomainAssociation$ === "object");
assert(typeof TransitGatewayMulticastDomainAssociations$ === "object");
assert(typeof TransitGatewayMulticastDomainOptions$ === "object");
assert(typeof TransitGatewayMulticastGroup$ === "object");
assert(typeof TransitGatewayMulticastRegisteredGroupMembers$ === "object");
assert(typeof TransitGatewayMulticastRegisteredGroupSources$ === "object");
assert(typeof TransitGatewayOptions$ === "object");
assert(typeof TransitGatewayPeeringAttachment$ === "object");
assert(typeof TransitGatewayPeeringAttachmentOptions$ === "object");
assert(typeof TransitGatewayPolicyRule$ === "object");
assert(typeof TransitGatewayPolicyRuleMetaData$ === "object");
assert(typeof TransitGatewayPolicyTable$ === "object");
assert(typeof TransitGatewayPolicyTableAssociation$ === "object");
assert(typeof TransitGatewayPolicyTableEntry$ === "object");
assert(typeof TransitGatewayPrefixListAttachment$ === "object");
assert(typeof TransitGatewayPrefixListReference$ === "object");
assert(typeof TransitGatewayPropagation$ === "object");
assert(typeof TransitGatewayRequestOptions$ === "object");
assert(typeof TransitGatewayRoute$ === "object");
assert(typeof TransitGatewayRouteAttachment$ === "object");
assert(typeof TransitGatewayRouteTable$ === "object");
assert(typeof TransitGatewayRouteTableAnnouncement$ === "object");
assert(typeof TransitGatewayRouteTableAssociation$ === "object");
assert(typeof TransitGatewayRouteTablePropagation$ === "object");
assert(typeof TransitGatewayRouteTableRoute$ === "object");
assert(typeof TransitGatewayVpcAttachment$ === "object");
assert(typeof TransitGatewayVpcAttachmentOptions$ === "object");
assert(typeof TrunkInterfaceAssociation$ === "object");
assert(typeof TunnelOption$ === "object");
assert(typeof UnassignIpv6AddressesRequest$ === "object");
assert(typeof UnassignIpv6AddressesResult$ === "object");
assert(typeof UnassignPrivateIpAddressesRequest$ === "object");
assert(typeof UnassignPrivateNatGatewayAddressRequest$ === "object");
assert(typeof UnassignPrivateNatGatewayAddressResult$ === "object");
assert(typeof UnlockSnapshotRequest$ === "object");
assert(typeof UnlockSnapshotResult$ === "object");
assert(typeof UnmonitorInstancesRequest$ === "object");
assert(typeof UnmonitorInstancesResult$ === "object");
assert(typeof UnsuccessfulInstanceCreditSpecificationItem$ === "object");
assert(typeof UnsuccessfulInstanceCreditSpecificationItemError$ === "object");
assert(typeof UnsuccessfulItem$ === "object");
assert(typeof UnsuccessfulItemError$ === "object");
assert(typeof UpdateCapacityManagerOrganizationsAccessRequest$ === "object");
assert(typeof UpdateCapacityManagerOrganizationsAccessResult$ === "object");
assert(typeof UpdateInterruptibleCapacityReservationAllocationRequest$ === "object");
assert(typeof UpdateInterruptibleCapacityReservationAllocationResult$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsEgressRequest$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsEgressResult$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsIngressRequest$ === "object");
assert(typeof UpdateSecurityGroupRuleDescriptionsIngressResult$ === "object");
assert(typeof UserBucket$ === "object");
assert(typeof UserBucketDetails$ === "object");
assert(typeof UserData$ === "object");
assert(typeof UserIdGroupPair$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof ValidationWarning$ === "object");
assert(typeof VCpuCountRange$ === "object");
assert(typeof VCpuCountRangeRequest$ === "object");
assert(typeof VCpuInfo$ === "object");
assert(typeof VerifiedAccessEndpoint$ === "object");
assert(typeof VerifiedAccessEndpointCidrOptions$ === "object");
assert(typeof VerifiedAccessEndpointEniOptions$ === "object");
assert(typeof VerifiedAccessEndpointLoadBalancerOptions$ === "object");
assert(typeof VerifiedAccessEndpointPortRange$ === "object");
assert(typeof VerifiedAccessEndpointRdsOptions$ === "object");
assert(typeof VerifiedAccessEndpointStatus$ === "object");
assert(typeof VerifiedAccessEndpointTarget$ === "object");
assert(typeof VerifiedAccessGroup$ === "object");
assert(typeof VerifiedAccessInstance$ === "object");
assert(typeof VerifiedAccessInstanceCustomSubDomain$ === "object");
assert(typeof VerifiedAccessInstanceLoggingConfiguration$ === "object");
assert(typeof VerifiedAccessInstanceOpenVpnClientConfiguration$ === "object");
assert(typeof VerifiedAccessInstanceOpenVpnClientConfigurationRoute$ === "object");
assert(typeof VerifiedAccessInstanceUserTrustProviderClientConfiguration$ === "object");
assert(typeof VerifiedAccessLogCloudWatchLogsDestination$ === "object");
assert(typeof VerifiedAccessLogCloudWatchLogsDestinationOptions$ === "object");
assert(typeof VerifiedAccessLogDeliveryStatus$ === "object");
assert(typeof VerifiedAccessLogKinesisDataFirehoseDestination$ === "object");
assert(typeof VerifiedAccessLogKinesisDataFirehoseDestinationOptions$ === "object");
assert(typeof VerifiedAccessLogOptions$ === "object");
assert(typeof VerifiedAccessLogs$ === "object");
assert(typeof VerifiedAccessLogS3Destination$ === "object");
assert(typeof VerifiedAccessLogS3DestinationOptions$ === "object");
assert(typeof VerifiedAccessSseSpecificationRequest$ === "object");
assert(typeof VerifiedAccessSseSpecificationResponse$ === "object");
assert(typeof VerifiedAccessTrustProvider$ === "object");
assert(typeof VerifiedAccessTrustProviderCondensed$ === "object");
assert(typeof VgwTelemetry$ === "object");
assert(typeof Volume$ === "object");
assert(typeof VolumeAttachment$ === "object");
assert(typeof VolumeDetail$ === "object");
assert(typeof VolumeModification$ === "object");
assert(typeof VolumeRecycleBinInfo$ === "object");
assert(typeof VolumeStatusAction$ === "object");
assert(typeof VolumeStatusAttachmentStatus$ === "object");
assert(typeof VolumeStatusDetails$ === "object");
assert(typeof VolumeStatusEvent$ === "object");
assert(typeof VolumeStatusInfo$ === "object");
assert(typeof VolumeStatusItem$ === "object");
assert(typeof Vpc$ === "object");
assert(typeof VpcAttachment$ === "object");
assert(typeof VpcBlockPublicAccessExclusion$ === "object");
assert(typeof VpcBlockPublicAccessOptions$ === "object");
assert(typeof VpcCidrBlockAssociation$ === "object");
assert(typeof VpcCidrBlockState$ === "object");
assert(typeof VpcClassicLink$ === "object");
assert(typeof VpcEncryptionControl$ === "object");
assert(typeof VpcEncryptionControlConfiguration$ === "object");
assert(typeof VpcEncryptionControlExclusion$ === "object");
assert(typeof VpcEncryptionControlExclusions$ === "object");
assert(typeof VpcEncryptionNonCompliantResource$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcEndpointAssociation$ === "object");
assert(typeof VpcEndpointConnection$ === "object");
assert(typeof VpcIpv6CidrBlockAssociation$ === "object");
assert(typeof VpcPeeringConnection$ === "object");
assert(typeof VpcPeeringConnectionOptionsDescription$ === "object");
assert(typeof VpcPeeringConnectionStateReason$ === "object");
assert(typeof VpcPeeringConnectionVpcInfo$ === "object");
assert(typeof VpnConcentrator$ === "object");
assert(typeof VpnConnection$ === "object");
assert(typeof VpnConnectionDeviceType$ === "object");
assert(typeof VpnConnectionOptions$ === "object");
assert(typeof VpnConnectionOptionsSpecification$ === "object");
assert(typeof VpnGateway$ === "object");
assert(typeof VpnStaticRoute$ === "object");
assert(typeof VpnTunnelLogOptions$ === "object");
assert(typeof VpnTunnelLogOptionsSpecification$ === "object");
assert(typeof VpnTunnelOptionsSpecification$ === "object");
assert(typeof WithdrawByoipCidrRequest$ === "object");
assert(typeof WithdrawByoipCidrResult$ === "object");
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
