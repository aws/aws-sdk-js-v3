import {
  AcceptAdministratorInvitation$,
  AcceptAdministratorInvitationCommand,
  AcceptAdministratorInvitationRequest$,
  AcceptAdministratorInvitationResponse$,
  AcceptInvitation$,
  AcceptInvitationCommand,
  AcceptInvitationRequest$,
  AcceptInvitationResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccountDetails$,
  Action$,
  ActionLocalIpDetails$,
  ActionLocalPortDetails$,
  ActionRemoteIpDetails$,
  ActionRemotePortDetails$,
  ActionTarget$,
  Actor$,
  ActorSession$,
  ActorSessionMfaStatus,
  ActorUser$,
  Adjustment$,
  AdminAccount$,
  AdminStatus,
  AggregatorV2$,
  AllowedOperators,
  AssociatedStandard$,
  AssociationFilters$,
  AssociationSetDetails$,
  AssociationStateDetails$,
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  AutomationRulesAction$,
  AutomationRulesActionType,
  AutomationRulesActionTypeObjectV2$,
  AutomationRulesActionTypeV2,
  AutomationRulesActionV2$,
  AutomationRulesConfig$,
  AutomationRulesFindingFieldsUpdate$,
  AutomationRulesFindingFieldsUpdateV2$,
  AutomationRulesFindingFilters$,
  AutomationRulesMetadata$,
  AutomationRulesMetadataV2$,
  AvailabilityZone$,
  AwsAmazonMqBrokerDetails$,
  AwsAmazonMqBrokerEncryptionOptionsDetails$,
  AwsAmazonMqBrokerLdapServerMetadataDetails$,
  AwsAmazonMqBrokerLogsDetails$,
  AwsAmazonMqBrokerLogsPendingDetails$,
  AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails$,
  AwsAmazonMqBrokerUsersDetails$,
  AwsApiCallAction$,
  AwsApiCallActionDomainDetails$,
  AwsApiGatewayAccessLogSettings$,
  AwsApiGatewayCanarySettings$,
  AwsApiGatewayEndpointConfiguration$,
  AwsApiGatewayMethodSettings$,
  AwsApiGatewayRestApiDetails$,
  AwsApiGatewayStageDetails$,
  AwsApiGatewayV2ApiDetails$,
  AwsApiGatewayV2RouteSettings$,
  AwsApiGatewayV2StageDetails$,
  AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails$,
  AwsAppSyncGraphQlApiDetails$,
  AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails$,
  AwsAppSyncGraphQlApiLogConfigDetails$,
  AwsAppSyncGraphQlApiOpenIdConnectConfigDetails$,
  AwsAppSyncGraphQlApiUserPoolConfigDetails$,
  AwsAthenaWorkGroupConfigurationDetails$,
  AwsAthenaWorkGroupConfigurationResultConfigurationDetails$,
  AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails$,
  AwsAthenaWorkGroupDetails$,
  AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails$,
  AwsAutoScalingAutoScalingGroupDetails$,
  AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification$,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails$,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails$,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails$,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification$,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails$,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails$,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails$,
  AwsAutoScalingLaunchConfigurationDetails$,
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails$,
  AwsAutoScalingLaunchConfigurationMetadataOptions$,
  AwsBackupBackupPlanAdvancedBackupSettingsDetails$,
  AwsBackupBackupPlanBackupPlanDetails$,
  AwsBackupBackupPlanDetails$,
  AwsBackupBackupPlanLifecycleDetails$,
  AwsBackupBackupPlanRuleCopyActionsDetails$,
  AwsBackupBackupPlanRuleDetails$,
  AwsBackupBackupVaultDetails$,
  AwsBackupBackupVaultNotificationsDetails$,
  AwsBackupRecoveryPointCalculatedLifecycleDetails$,
  AwsBackupRecoveryPointCreatedByDetails$,
  AwsBackupRecoveryPointDetails$,
  AwsBackupRecoveryPointLifecycleDetails$,
  AwsCertificateManagerCertificateDetails$,
  AwsCertificateManagerCertificateDomainValidationOption$,
  AwsCertificateManagerCertificateExtendedKeyUsage$,
  AwsCertificateManagerCertificateKeyUsage$,
  AwsCertificateManagerCertificateOptions$,
  AwsCertificateManagerCertificateRenewalSummary$,
  AwsCertificateManagerCertificateResourceRecord$,
  AwsCloudFormationStackDetails$,
  AwsCloudFormationStackDriftInformationDetails$,
  AwsCloudFormationStackOutputsDetails$,
  AwsCloudFrontDistributionCacheBehavior$,
  AwsCloudFrontDistributionCacheBehaviors$,
  AwsCloudFrontDistributionDefaultCacheBehavior$,
  AwsCloudFrontDistributionDetails$,
  AwsCloudFrontDistributionLogging$,
  AwsCloudFrontDistributionOriginCustomOriginConfig$,
  AwsCloudFrontDistributionOriginGroup$,
  AwsCloudFrontDistributionOriginGroupFailover$,
  AwsCloudFrontDistributionOriginGroupFailoverStatusCodes$,
  AwsCloudFrontDistributionOriginGroups$,
  AwsCloudFrontDistributionOriginItem$,
  AwsCloudFrontDistributionOriginS3OriginConfig$,
  AwsCloudFrontDistributionOriginSslProtocols$,
  AwsCloudFrontDistributionOrigins$,
  AwsCloudFrontDistributionViewerCertificate$,
  AwsCloudTrailTrailDetails$,
  AwsCloudWatchAlarmDetails$,
  AwsCloudWatchAlarmDimensionsDetails$,
  AwsCodeBuildProjectArtifactsDetails$,
  AwsCodeBuildProjectDetails$,
  AwsCodeBuildProjectEnvironment$,
  AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails$,
  AwsCodeBuildProjectEnvironmentRegistryCredential$,
  AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails$,
  AwsCodeBuildProjectLogsConfigDetails$,
  AwsCodeBuildProjectLogsConfigS3LogsDetails$,
  AwsCodeBuildProjectSource$,
  AwsCodeBuildProjectVpcConfig$,
  AwsCorsConfiguration$,
  AwsDmsEndpointDetails$,
  AwsDmsReplicationInstanceDetails$,
  AwsDmsReplicationInstanceReplicationSubnetGroupDetails$,
  AwsDmsReplicationInstanceVpcSecurityGroupsDetails$,
  AwsDmsReplicationTaskDetails$,
  AwsDynamoDbTableAttributeDefinition$,
  AwsDynamoDbTableBillingModeSummary$,
  AwsDynamoDbTableDetails$,
  AwsDynamoDbTableGlobalSecondaryIndex$,
  AwsDynamoDbTableKeySchema$,
  AwsDynamoDbTableLocalSecondaryIndex$,
  AwsDynamoDbTableProjection$,
  AwsDynamoDbTableProvisionedThroughput$,
  AwsDynamoDbTableProvisionedThroughputOverride$,
  AwsDynamoDbTableReplica$,
  AwsDynamoDbTableReplicaGlobalSecondaryIndex$,
  AwsDynamoDbTableRestoreSummary$,
  AwsDynamoDbTableSseDescription$,
  AwsDynamoDbTableStreamSpecification$,
  AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails$,
  AwsEc2ClientVpnEndpointAuthenticationOptionsDetails$,
  AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails$,
  AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails$,
  AwsEc2ClientVpnEndpointClientConnectOptionsDetails$,
  AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails$,
  AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails$,
  AwsEc2ClientVpnEndpointConnectionLogOptionsDetails$,
  AwsEc2ClientVpnEndpointDetails$,
  AwsEc2EipDetails$,
  AwsEc2InstanceDetails$,
  AwsEc2InstanceMetadataOptions$,
  AwsEc2InstanceMonitoringDetails$,
  AwsEc2InstanceNetworkInterfacesDetails$,
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails$,
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails$,
  AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails$,
  AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails$,
  AwsEc2LaunchTemplateDataCpuOptionsDetails$,
  AwsEc2LaunchTemplateDataCreditSpecificationDetails$,
  AwsEc2LaunchTemplateDataDetails$,
  AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails$,
  AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails$,
  AwsEc2LaunchTemplateDataEnclaveOptionsDetails$,
  AwsEc2LaunchTemplateDataHibernationOptionsDetails$,
  AwsEc2LaunchTemplateDataIamInstanceProfileDetails$,
  AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails$,
  AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails$,
  AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails$,
  AwsEc2LaunchTemplateDataLicenseSetDetails$,
  AwsEc2LaunchTemplateDataMaintenanceOptionsDetails$,
  AwsEc2LaunchTemplateDataMetadataOptionsDetails$,
  AwsEc2LaunchTemplateDataMonitoringDetails$,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails$,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails$,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails$,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails$,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails$,
  AwsEc2LaunchTemplateDataPlacementDetails$,
  AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails$,
  AwsEc2LaunchTemplateDetails$,
  AwsEc2NetworkAclAssociation$,
  AwsEc2NetworkAclDetails$,
  AwsEc2NetworkAclEntry$,
  AwsEc2NetworkInterfaceAttachment$,
  AwsEc2NetworkInterfaceDetails$,
  AwsEc2NetworkInterfaceIpV6AddressDetail$,
  AwsEc2NetworkInterfacePrivateIpAddressDetail$,
  AwsEc2NetworkInterfaceSecurityGroup$,
  AwsEc2RouteTableDetails$,
  AwsEc2SecurityGroupDetails$,
  AwsEc2SecurityGroupIpPermission$,
  AwsEc2SecurityGroupIpRange$,
  AwsEc2SecurityGroupIpv6Range$,
  AwsEc2SecurityGroupPrefixListId$,
  AwsEc2SecurityGroupUserIdGroupPair$,
  AwsEc2SubnetDetails$,
  AwsEc2TransitGatewayDetails$,
  AwsEc2VolumeAttachment$,
  AwsEc2VolumeDetails$,
  AwsEc2VpcDetails$,
  AwsEc2VpcEndpointServiceDetails$,
  AwsEc2VpcEndpointServiceServiceTypeDetails$,
  AwsEc2VpcPeeringConnectionDetails$,
  AwsEc2VpcPeeringConnectionStatusDetails$,
  AwsEc2VpcPeeringConnectionVpcInfoDetails$,
  AwsEc2VpnConnectionDetails$,
  AwsEc2VpnConnectionOptionsDetails$,
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails$,
  AwsEc2VpnConnectionRoutesDetails$,
  AwsEc2VpnConnectionVgwTelemetryDetails$,
  AwsEcrContainerImageDetails$,
  AwsEcrRepositoryDetails$,
  AwsEcrRepositoryImageScanningConfigurationDetails$,
  AwsEcrRepositoryLifecyclePolicyDetails$,
  AwsEcsClusterClusterSettingsDetails$,
  AwsEcsClusterConfigurationDetails$,
  AwsEcsClusterConfigurationExecuteCommandConfigurationDetails$,
  AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails$,
  AwsEcsClusterDefaultCapacityProviderStrategyDetails$,
  AwsEcsClusterDetails$,
  AwsEcsContainerDetails$,
  AwsEcsServiceCapacityProviderStrategyDetails$,
  AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails$,
  AwsEcsServiceDeploymentConfigurationDetails$,
  AwsEcsServiceDeploymentControllerDetails$,
  AwsEcsServiceDetails$,
  AwsEcsServiceLoadBalancersDetails$,
  AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails$,
  AwsEcsServiceNetworkConfigurationDetails$,
  AwsEcsServicePlacementConstraintsDetails$,
  AwsEcsServicePlacementStrategiesDetails$,
  AwsEcsServiceServiceRegistriesDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails$,
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails$,
  AwsEcsTaskDefinitionDetails$,
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails$,
  AwsEcsTaskDefinitionPlacementConstraintsDetails$,
  AwsEcsTaskDefinitionProxyConfigurationDetails$,
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails$,
  AwsEcsTaskDefinitionVolumesDetails$,
  AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails$,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails$,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails$,
  AwsEcsTaskDefinitionVolumesHostDetails$,
  AwsEcsTaskDetails$,
  AwsEcsTaskVolumeDetails$,
  AwsEcsTaskVolumeHostDetails$,
  AwsEfsAccessPointDetails$,
  AwsEfsAccessPointPosixUserDetails$,
  AwsEfsAccessPointRootDirectoryCreationInfoDetails$,
  AwsEfsAccessPointRootDirectoryDetails$,
  AwsEksClusterDetails$,
  AwsEksClusterLoggingClusterLoggingDetails$,
  AwsEksClusterLoggingDetails$,
  AwsEksClusterResourcesVpcConfigDetails$,
  AwsElasticBeanstalkEnvironmentDetails$,
  AwsElasticBeanstalkEnvironmentEnvironmentLink$,
  AwsElasticBeanstalkEnvironmentOptionSetting$,
  AwsElasticBeanstalkEnvironmentTier$,
  AwsElasticsearchDomainDetails$,
  AwsElasticsearchDomainDomainEndpointOptions$,
  AwsElasticsearchDomainElasticsearchClusterConfigDetails$,
  AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails$,
  AwsElasticsearchDomainEncryptionAtRestOptions$,
  AwsElasticsearchDomainLogPublishingOptions$,
  AwsElasticsearchDomainLogPublishingOptionsLogConfig$,
  AwsElasticsearchDomainNodeToNodeEncryptionOptions$,
  AwsElasticsearchDomainServiceSoftwareOptions$,
  AwsElasticsearchDomainVPCOptions$,
  AwsElbAppCookieStickinessPolicy$,
  AwsElbLbCookieStickinessPolicy$,
  AwsElbLoadBalancerAccessLog$,
  AwsElbLoadBalancerAdditionalAttribute$,
  AwsElbLoadBalancerAttributes$,
  AwsElbLoadBalancerBackendServerDescription$,
  AwsElbLoadBalancerConnectionDraining$,
  AwsElbLoadBalancerConnectionSettings$,
  AwsElbLoadBalancerCrossZoneLoadBalancing$,
  AwsElbLoadBalancerDetails$,
  AwsElbLoadBalancerHealthCheck$,
  AwsElbLoadBalancerInstance$,
  AwsElbLoadBalancerListener$,
  AwsElbLoadBalancerListenerDescription$,
  AwsElbLoadBalancerPolicies$,
  AwsElbLoadBalancerSourceSecurityGroup$,
  AwsElbv2LoadBalancerAttribute$,
  AwsElbv2LoadBalancerDetails$,
  AwsEventSchemasRegistryDetails$,
  AwsEventsEndpointDetails$,
  AwsEventsEndpointEventBusesDetails$,
  AwsEventsEndpointReplicationConfigDetails$,
  AwsEventsEndpointRoutingConfigDetails$,
  AwsEventsEndpointRoutingConfigFailoverConfigDetails$,
  AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails$,
  AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails$,
  AwsEventsEventbusDetails$,
  AwsGuardDutyDetectorDataSourcesCloudTrailDetails$,
  AwsGuardDutyDetectorDataSourcesDetails$,
  AwsGuardDutyDetectorDataSourcesDnsLogsDetails$,
  AwsGuardDutyDetectorDataSourcesFlowLogsDetails$,
  AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails$,
  AwsGuardDutyDetectorDataSourcesKubernetesDetails$,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails$,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails$,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails$,
  AwsGuardDutyDetectorDataSourcesS3LogsDetails$,
  AwsGuardDutyDetectorDetails$,
  AwsGuardDutyDetectorFeaturesDetails$,
  AwsIamAccessKeyDetails$,
  AwsIamAccessKeySessionContext$,
  AwsIamAccessKeySessionContextAttributes$,
  AwsIamAccessKeySessionContextSessionIssuer$,
  AwsIamAccessKeyStatus,
  AwsIamAttachedManagedPolicy$,
  AwsIamGroupDetails$,
  AwsIamGroupPolicy$,
  AwsIamInstanceProfile$,
  AwsIamInstanceProfileRole$,
  AwsIamPermissionsBoundary$,
  AwsIamPolicyDetails$,
  AwsIamPolicyVersion$,
  AwsIamRoleDetails$,
  AwsIamRolePolicy$,
  AwsIamUserDetails$,
  AwsIamUserPolicy$,
  AwsKinesisStreamDetails$,
  AwsKinesisStreamStreamEncryptionDetails$,
  AwsKmsKeyDetails$,
  AwsLambdaFunctionCode$,
  AwsLambdaFunctionDeadLetterConfig$,
  AwsLambdaFunctionDetails$,
  AwsLambdaFunctionEnvironment$,
  AwsLambdaFunctionEnvironmentError$,
  AwsLambdaFunctionLayer$,
  AwsLambdaFunctionTracingConfig$,
  AwsLambdaFunctionVpcConfig$,
  AwsLambdaLayerVersionDetails$,
  AwsMountPoint$,
  AwsMskClusterClusterInfoClientAuthenticationDetails$,
  AwsMskClusterClusterInfoClientAuthenticationSaslDetails$,
  AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails$,
  AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails$,
  AwsMskClusterClusterInfoClientAuthenticationTlsDetails$,
  AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails$,
  AwsMskClusterClusterInfoDetails$,
  AwsMskClusterClusterInfoEncryptionInfoDetails$,
  AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails$,
  AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails$,
  AwsMskClusterDetails$,
  AwsNetworkFirewallFirewallDetails$,
  AwsNetworkFirewallFirewallPolicyDetails$,
  AwsNetworkFirewallFirewallSubnetMappingsDetails$,
  AwsNetworkFirewallRuleGroupDetails$,
  AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails$,
  AwsOpenSearchServiceDomainClusterConfigDetails$,
  AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails$,
  AwsOpenSearchServiceDomainDetails$,
  AwsOpenSearchServiceDomainDomainEndpointOptionsDetails$,
  AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails$,
  AwsOpenSearchServiceDomainLogPublishingOption$,
  AwsOpenSearchServiceDomainLogPublishingOptionsDetails$,
  AwsOpenSearchServiceDomainMasterUserOptionsDetails$,
  AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails$,
  AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails$,
  AwsOpenSearchServiceDomainVpcOptionsDetails$,
  AwsRdsDbClusterAssociatedRole$,
  AwsRdsDbClusterDetails$,
  AwsRdsDbClusterMember$,
  AwsRdsDbClusterOptionGroupMembership$,
  AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute$,
  AwsRdsDbClusterSnapshotDetails$,
  AwsRdsDbDomainMembership$,
  AwsRdsDbInstanceAssociatedRole$,
  AwsRdsDbInstanceDetails$,
  AwsRdsDbInstanceEndpoint$,
  AwsRdsDbInstanceVpcSecurityGroup$,
  AwsRdsDbOptionGroupMembership$,
  AwsRdsDbParameterGroup$,
  AwsRdsDbPendingModifiedValues$,
  AwsRdsDbProcessorFeature$,
  AwsRdsDbSecurityGroupDetails$,
  AwsRdsDbSecurityGroupEc2SecurityGroup$,
  AwsRdsDbSecurityGroupIpRange$,
  AwsRdsDbSnapshotDetails$,
  AwsRdsDbStatusInfo$,
  AwsRdsDbSubnetGroup$,
  AwsRdsDbSubnetGroupSubnet$,
  AwsRdsDbSubnetGroupSubnetAvailabilityZone$,
  AwsRdsEventSubscriptionDetails$,
  AwsRdsPendingCloudWatchLogsExports$,
  AwsRedshiftClusterClusterNode$,
  AwsRedshiftClusterClusterParameterGroup$,
  AwsRedshiftClusterClusterParameterStatus$,
  AwsRedshiftClusterClusterSecurityGroup$,
  AwsRedshiftClusterClusterSnapshotCopyStatus$,
  AwsRedshiftClusterDeferredMaintenanceWindow$,
  AwsRedshiftClusterDetails$,
  AwsRedshiftClusterElasticIpStatus$,
  AwsRedshiftClusterEndpoint$,
  AwsRedshiftClusterHsmStatus$,
  AwsRedshiftClusterIamRole$,
  AwsRedshiftClusterLoggingStatus$,
  AwsRedshiftClusterPendingModifiedValues$,
  AwsRedshiftClusterResizeInfo$,
  AwsRedshiftClusterRestoreStatus$,
  AwsRedshiftClusterVpcSecurityGroup$,
  AwsRoute53HostedZoneConfigDetails$,
  AwsRoute53HostedZoneDetails$,
  AwsRoute53HostedZoneObjectDetails$,
  AwsRoute53HostedZoneVpcDetails$,
  AwsRoute53QueryLoggingConfigDetails$,
  AwsS3AccessPointDetails$,
  AwsS3AccessPointVpcConfigurationDetails$,
  AwsS3AccountPublicAccessBlockDetails$,
  AwsS3BucketBucketLifecycleConfigurationDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails$,
  AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails$,
  AwsS3BucketBucketVersioningConfiguration$,
  AwsS3BucketDetails$,
  AwsS3BucketLoggingConfiguration$,
  AwsS3BucketNotificationConfiguration$,
  AwsS3BucketNotificationConfigurationDetail$,
  AwsS3BucketNotificationConfigurationFilter$,
  AwsS3BucketNotificationConfigurationS3KeyFilter$,
  AwsS3BucketNotificationConfigurationS3KeyFilterRule$,
  AwsS3BucketNotificationConfigurationS3KeyFilterRuleName,
  AwsS3BucketObjectLockConfiguration$,
  AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails$,
  AwsS3BucketObjectLockConfigurationRuleDetails$,
  AwsS3BucketServerSideEncryptionByDefault$,
  AwsS3BucketServerSideEncryptionConfiguration$,
  AwsS3BucketServerSideEncryptionRule$,
  AwsS3BucketWebsiteConfiguration$,
  AwsS3BucketWebsiteConfigurationRedirectTo$,
  AwsS3BucketWebsiteConfigurationRoutingRule$,
  AwsS3BucketWebsiteConfigurationRoutingRuleCondition$,
  AwsS3BucketWebsiteConfigurationRoutingRuleRedirect$,
  AwsS3ObjectDetails$,
  AwsSageMakerNotebookInstanceDetails$,
  AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails$,
  AwsSecretsManagerSecretDetails$,
  AwsSecretsManagerSecretRotationRules$,
  AwsSecurityFinding$,
  AwsSecurityFindingFilters$,
  AwsSecurityFindingIdentifier$,
  AwsSnsTopicDetails$,
  AwsSnsTopicSubscription$,
  AwsSqsQueueDetails$,
  AwsSsmComplianceSummary$,
  AwsSsmPatch$,
  AwsSsmPatchComplianceDetails$,
  AwsStepFunctionStateMachineDetails$,
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails$,
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails$,
  AwsStepFunctionStateMachineLoggingConfigurationDetails$,
  AwsStepFunctionStateMachineTracingConfigurationDetails$,
  AwsWafRateBasedRuleDetails$,
  AwsWafRateBasedRuleMatchPredicate$,
  AwsWafRegionalRateBasedRuleDetails$,
  AwsWafRegionalRateBasedRuleMatchPredicate$,
  AwsWafRegionalRuleDetails$,
  AwsWafRegionalRuleGroupDetails$,
  AwsWafRegionalRuleGroupRulesActionDetails$,
  AwsWafRegionalRuleGroupRulesDetails$,
  AwsWafRegionalRulePredicateListDetails$,
  AwsWafRegionalWebAclDetails$,
  AwsWafRegionalWebAclRulesListActionDetails$,
  AwsWafRegionalWebAclRulesListDetails$,
  AwsWafRegionalWebAclRulesListOverrideActionDetails$,
  AwsWafRuleDetails$,
  AwsWafRuleGroupDetails$,
  AwsWafRuleGroupRulesActionDetails$,
  AwsWafRuleGroupRulesDetails$,
  AwsWafRulePredicateListDetails$,
  AwsWafWebAclDetails$,
  AwsWafWebAclRule$,
  AwsWafv2ActionAllowDetails$,
  AwsWafv2ActionBlockDetails$,
  AwsWafv2CustomHttpHeader$,
  AwsWafv2CustomRequestHandlingDetails$,
  AwsWafv2CustomResponseDetails$,
  AwsWafv2RuleGroupDetails$,
  AwsWafv2RulesActionCaptchaDetails$,
  AwsWafv2RulesActionCountDetails$,
  AwsWafv2RulesActionDetails$,
  AwsWafv2RulesDetails$,
  AwsWafv2VisibilityConfigDetails$,
  AwsWafv2WebAclActionDetails$,
  AwsWafv2WebAclCaptchaConfigDetails$,
  AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails$,
  AwsWafv2WebAclDetails$,
  AwsXrayEncryptionConfigDetails$,
  BatchDeleteAutomationRules$,
  BatchDeleteAutomationRulesCommand,
  BatchDeleteAutomationRulesRequest$,
  BatchDeleteAutomationRulesResponse$,
  BatchDisableStandards$,
  BatchDisableStandardsCommand,
  BatchDisableStandardsRequest$,
  BatchDisableStandardsResponse$,
  BatchEnableStandards$,
  BatchEnableStandardsCommand,
  BatchEnableStandardsRequest$,
  BatchEnableStandardsResponse$,
  BatchGetAutomationRules$,
  BatchGetAutomationRulesCommand,
  BatchGetAutomationRulesRequest$,
  BatchGetAutomationRulesResponse$,
  BatchGetConfigurationPolicyAssociations$,
  BatchGetConfigurationPolicyAssociationsCommand,
  BatchGetConfigurationPolicyAssociationsRequest$,
  BatchGetConfigurationPolicyAssociationsResponse$,
  BatchGetSecurityControls$,
  BatchGetSecurityControlsCommand,
  BatchGetSecurityControlsRequest$,
  BatchGetSecurityControlsResponse$,
  BatchGetStandardsControlAssociations$,
  BatchGetStandardsControlAssociationsCommand,
  BatchGetStandardsControlAssociationsRequest$,
  BatchGetStandardsControlAssociationsResponse$,
  BatchImportFindings$,
  BatchImportFindingsCommand,
  BatchImportFindingsRequest$,
  BatchImportFindingsResponse$,
  BatchUpdateAutomationRules$,
  BatchUpdateAutomationRulesCommand,
  BatchUpdateAutomationRulesRequest$,
  BatchUpdateAutomationRulesResponse$,
  BatchUpdateFindings$,
  BatchUpdateFindingsCommand,
  BatchUpdateFindingsRequest$,
  BatchUpdateFindingsResponse$,
  BatchUpdateFindingsUnprocessedFinding$,
  BatchUpdateFindingsV2$,
  BatchUpdateFindingsV2Command,
  BatchUpdateFindingsV2ProcessedFinding$,
  BatchUpdateFindingsV2Request$,
  BatchUpdateFindingsV2Response$,
  BatchUpdateFindingsV2UnprocessedFinding$,
  BatchUpdateFindingsV2UnprocessedFindingErrorCode,
  BatchUpdateStandardsControlAssociations$,
  BatchUpdateStandardsControlAssociationsCommand,
  BatchUpdateStandardsControlAssociationsRequest$,
  BatchUpdateStandardsControlAssociationsResponse$,
  BooleanConfigurationOptions$,
  BooleanFilter$,
  Cell$,
  CidrBlockAssociation$,
  City$,
  ClassificationResult$,
  ClassificationStatus$,
  CloudWatchLogsLogGroupArnConfigDetails$,
  CodeRepositoryDetails$,
  CodeVulnerabilitiesFilePath$,
  Compliance$,
  ComplianceStatus,
  CompositeFilter$,
  ConfigurationOptions$,
  ConfigurationPolicyAssociation$,
  ConfigurationPolicyAssociationStatus,
  ConfigurationPolicyAssociationSummary$,
  ConfigurationPolicySummary$,
  ConflictException,
  ConflictException$,
  ConnectionDirection,
  ConnectorAuthStatus,
  ConnectorProviderName,
  ConnectorStatus,
  ConnectorSummary$,
  ContainerDetails$,
  ControlFindingGenerator,
  ControlStatus,
  Country$,
  CreateActionTarget$,
  CreateActionTargetCommand,
  CreateActionTargetRequest$,
  CreateActionTargetResponse$,
  CreateAggregatorV2$,
  CreateAggregatorV2Command,
  CreateAggregatorV2Request$,
  CreateAggregatorV2Response$,
  CreateAutomationRule$,
  CreateAutomationRuleCommand,
  CreateAutomationRuleRequest$,
  CreateAutomationRuleResponse$,
  CreateAutomationRuleV2$,
  CreateAutomationRuleV2Command,
  CreateAutomationRuleV2Request$,
  CreateAutomationRuleV2Response$,
  CreateConfigurationPolicy$,
  CreateConfigurationPolicyCommand,
  CreateConfigurationPolicyRequest$,
  CreateConfigurationPolicyResponse$,
  CreateConnectorV2$,
  CreateConnectorV2Command,
  CreateConnectorV2Request$,
  CreateConnectorV2Response$,
  CreateFindingAggregator$,
  CreateFindingAggregatorCommand,
  CreateFindingAggregatorRequest$,
  CreateFindingAggregatorResponse$,
  CreateInsight$,
  CreateInsightCommand,
  CreateInsightRequest$,
  CreateInsightResponse$,
  CreateMembers$,
  CreateMembersCommand,
  CreateMembersRequest$,
  CreateMembersResponse$,
  CreateTicketV2$,
  CreateTicketV2Command,
  CreateTicketV2Request$,
  CreateTicketV2Response$,
  Criteria$,
  CustomDataIdentifiersDetections$,
  CustomDataIdentifiersResult$,
  Cvss$,
  DataClassificationDetails$,
  DateFilter$,
  DateRange$,
  DateRangeUnit,
  DeclineInvitations$,
  DeclineInvitationsCommand,
  DeclineInvitationsRequest$,
  DeclineInvitationsResponse$,
  DeleteActionTarget$,
  DeleteActionTargetCommand,
  DeleteActionTargetRequest$,
  DeleteActionTargetResponse$,
  DeleteAggregatorV2$,
  DeleteAggregatorV2Command,
  DeleteAggregatorV2Request$,
  DeleteAggregatorV2Response$,
  DeleteAutomationRuleV2$,
  DeleteAutomationRuleV2Command,
  DeleteAutomationRuleV2Request$,
  DeleteAutomationRuleV2Response$,
  DeleteConfigurationPolicy$,
  DeleteConfigurationPolicyCommand,
  DeleteConfigurationPolicyRequest$,
  DeleteConfigurationPolicyResponse$,
  DeleteConnectorV2$,
  DeleteConnectorV2Command,
  DeleteConnectorV2Request$,
  DeleteConnectorV2Response$,
  DeleteFindingAggregator$,
  DeleteFindingAggregatorCommand,
  DeleteFindingAggregatorRequest$,
  DeleteFindingAggregatorResponse$,
  DeleteInsight$,
  DeleteInsightCommand,
  DeleteInsightRequest$,
  DeleteInsightResponse$,
  DeleteInvitations$,
  DeleteInvitationsCommand,
  DeleteInvitationsRequest$,
  DeleteInvitationsResponse$,
  DeleteMembers$,
  DeleteMembersCommand,
  DeleteMembersRequest$,
  DeleteMembersResponse$,
  DescribeActionTargets$,
  DescribeActionTargetsCommand,
  DescribeActionTargetsRequest$,
  DescribeActionTargetsResponse$,
  DescribeHub$,
  DescribeHubCommand,
  DescribeHubRequest$,
  DescribeHubResponse$,
  DescribeOrganizationConfiguration$,
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationRequest$,
  DescribeOrganizationConfigurationResponse$,
  DescribeProducts$,
  DescribeProductsCommand,
  DescribeProductsRequest$,
  DescribeProductsResponse$,
  DescribeProductsV2$,
  DescribeProductsV2Command,
  DescribeProductsV2Request$,
  DescribeProductsV2Response$,
  DescribeSecurityHubV2$,
  DescribeSecurityHubV2Command,
  DescribeSecurityHubV2Request$,
  DescribeSecurityHubV2Response$,
  DescribeStandards$,
  DescribeStandardsCommand,
  DescribeStandardsControls$,
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsRequest$,
  DescribeStandardsControlsResponse$,
  DescribeStandardsRequest$,
  DescribeStandardsResponse$,
  Detection$,
  DisableImportFindingsForProduct$,
  DisableImportFindingsForProductCommand,
  DisableImportFindingsForProductRequest$,
  DisableImportFindingsForProductResponse$,
  DisableOrganizationAdminAccount$,
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountRequest$,
  DisableOrganizationAdminAccountResponse$,
  DisableSecurityHub$,
  DisableSecurityHubCommand,
  DisableSecurityHubRequest$,
  DisableSecurityHubResponse$,
  DisableSecurityHubV2$,
  DisableSecurityHubV2Command,
  DisableSecurityHubV2Request$,
  DisableSecurityHubV2Response$,
  DisassociateFromAdministratorAccount$,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountRequest$,
  DisassociateFromAdministratorAccountResponse$,
  DisassociateFromMasterAccount$,
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountRequest$,
  DisassociateFromMasterAccountResponse$,
  DisassociateMembers$,
  DisassociateMembersCommand,
  DisassociateMembersRequest$,
  DisassociateMembersResponse$,
  DnsRequestAction$,
  DoubleConfigurationOptions$,
  EnableImportFindingsForProduct$,
  EnableImportFindingsForProductCommand,
  EnableImportFindingsForProductRequest$,
  EnableImportFindingsForProductResponse$,
  EnableOrganizationAdminAccount$,
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountRequest$,
  EnableOrganizationAdminAccountResponse$,
  EnableSecurityHub$,
  EnableSecurityHubCommand,
  EnableSecurityHubRequest$,
  EnableSecurityHubResponse$,
  EnableSecurityHubV2$,
  EnableSecurityHubV2Command,
  EnableSecurityHubV2Request$,
  EnableSecurityHubV2Response$,
  EnumConfigurationOptions$,
  EnumListConfigurationOptions$,
  ExternalIntegrationConfiguration$,
  FilePaths$,
  FindingAggregator$,
  FindingHistoryRecord$,
  FindingHistoryUpdate$,
  FindingHistoryUpdateSource$,
  FindingHistoryUpdateSourceType,
  FindingProviderFields$,
  FindingProviderSeverity$,
  FindingsTrendsCompositeFilter$,
  FindingsTrendsFilters$,
  FindingsTrendsStringField,
  FindingsTrendsStringFilter$,
  FirewallPolicyDetails$,
  FirewallPolicyStatefulRuleGroupReferencesDetails$,
  FirewallPolicyStatelessCustomActionsDetails$,
  FirewallPolicyStatelessRuleGroupReferencesDetails$,
  GeneratorDetails$,
  GeoLocation$,
  GetAdministratorAccount$,
  GetAdministratorAccountCommand,
  GetAdministratorAccountRequest$,
  GetAdministratorAccountResponse$,
  GetAggregatorV2$,
  GetAggregatorV2Command,
  GetAggregatorV2Request$,
  GetAggregatorV2Response$,
  GetAutomationRuleV2$,
  GetAutomationRuleV2Command,
  GetAutomationRuleV2Request$,
  GetAutomationRuleV2Response$,
  GetConfigurationPolicy$,
  GetConfigurationPolicyAssociation$,
  GetConfigurationPolicyAssociationCommand,
  GetConfigurationPolicyAssociationRequest$,
  GetConfigurationPolicyAssociationResponse$,
  GetConfigurationPolicyCommand,
  GetConfigurationPolicyRequest$,
  GetConfigurationPolicyResponse$,
  GetConnectorV2$,
  GetConnectorV2Command,
  GetConnectorV2Request$,
  GetConnectorV2Response$,
  GetEnabledStandards$,
  GetEnabledStandardsCommand,
  GetEnabledStandardsRequest$,
  GetEnabledStandardsResponse$,
  GetFindingAggregator$,
  GetFindingAggregatorCommand,
  GetFindingAggregatorRequest$,
  GetFindingAggregatorResponse$,
  GetFindingHistory$,
  GetFindingHistoryCommand,
  GetFindingHistoryRequest$,
  GetFindingHistoryResponse$,
  GetFindingStatisticsV2$,
  GetFindingStatisticsV2Command,
  GetFindingStatisticsV2Request$,
  GetFindingStatisticsV2Response$,
  GetFindings$,
  GetFindingsCommand,
  GetFindingsRequest$,
  GetFindingsResponse$,
  GetFindingsTrendsV2$,
  GetFindingsTrendsV2Command,
  GetFindingsTrendsV2Request$,
  GetFindingsTrendsV2Response$,
  GetFindingsV2$,
  GetFindingsV2Command,
  GetFindingsV2Request$,
  GetFindingsV2Response$,
  GetInsightResults$,
  GetInsightResultsCommand,
  GetInsightResultsRequest$,
  GetInsightResultsResponse$,
  GetInsights$,
  GetInsightsCommand,
  GetInsightsRequest$,
  GetInsightsResponse$,
  GetInvitationsCount$,
  GetInvitationsCountCommand,
  GetInvitationsCountRequest$,
  GetInvitationsCountResponse$,
  GetMasterAccount$,
  GetMasterAccountCommand,
  GetMasterAccountRequest$,
  GetMasterAccountResponse$,
  GetMembers$,
  GetMembersCommand,
  GetMembersRequest$,
  GetMembersResponse$,
  GetResourcesStatisticsV2$,
  GetResourcesStatisticsV2Command,
  GetResourcesStatisticsV2Request$,
  GetResourcesStatisticsV2Response$,
  GetResourcesTrendsV2$,
  GetResourcesTrendsV2Command,
  GetResourcesTrendsV2Request$,
  GetResourcesTrendsV2Response$,
  GetResourcesV2$,
  GetResourcesV2Command,
  GetResourcesV2Request$,
  GetResourcesV2Response$,
  GetSecurityControlDefinition$,
  GetSecurityControlDefinitionCommand,
  GetSecurityControlDefinitionRequest$,
  GetSecurityControlDefinitionResponse$,
  GranularityField,
  GroupByField,
  GroupByResult$,
  GroupByRule$,
  GroupByValue$,
  HealthCheck$,
  IcmpTypeCode$,
  ImportFindingsError$,
  Indicator$,
  Insight$,
  InsightResultValue$,
  InsightResults$,
  IntegerConfigurationOptions$,
  IntegerListConfigurationOptions$,
  IntegrationType,
  IntegrationV2Type,
  InternalException,
  InternalException$,
  InternalServerException,
  InternalServerException$,
  InvalidAccessException,
  InvalidAccessException$,
  InvalidInputException,
  InvalidInputException$,
  Invitation$,
  InviteMembers$,
  InviteMembersCommand,
  InviteMembersRequest$,
  InviteMembersResponse$,
  IpFilter$,
  IpOrganizationDetails$,
  Ipv6CidrBlockAssociation$,
  JiraCloudDetail$,
  JiraCloudProviderConfiguration$,
  JiraCloudUpdateConfiguration$,
  KeywordFilter$,
  LimitExceededException,
  LimitExceededException$,
  ListAggregatorsV2$,
  ListAggregatorsV2Command,
  ListAggregatorsV2Request$,
  ListAggregatorsV2Response$,
  ListAutomationRules$,
  ListAutomationRulesCommand,
  ListAutomationRulesRequest$,
  ListAutomationRulesResponse$,
  ListAutomationRulesV2$,
  ListAutomationRulesV2Command,
  ListAutomationRulesV2Request$,
  ListAutomationRulesV2Response$,
  ListConfigurationPolicies$,
  ListConfigurationPoliciesCommand,
  ListConfigurationPoliciesRequest$,
  ListConfigurationPoliciesResponse$,
  ListConfigurationPolicyAssociations$,
  ListConfigurationPolicyAssociationsCommand,
  ListConfigurationPolicyAssociationsRequest$,
  ListConfigurationPolicyAssociationsResponse$,
  ListConnectorsV2$,
  ListConnectorsV2Command,
  ListConnectorsV2Request$,
  ListConnectorsV2Response$,
  ListEnabledProductsForImport$,
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportRequest$,
  ListEnabledProductsForImportResponse$,
  ListFindingAggregators$,
  ListFindingAggregatorsCommand,
  ListFindingAggregatorsRequest$,
  ListFindingAggregatorsResponse$,
  ListInvitations$,
  ListInvitationsCommand,
  ListInvitationsRequest$,
  ListInvitationsResponse$,
  ListMembers$,
  ListMembersCommand,
  ListMembersRequest$,
  ListMembersResponse$,
  ListOrganizationAdminAccounts$,
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsRequest$,
  ListOrganizationAdminAccountsResponse$,
  ListSecurityControlDefinitions$,
  ListSecurityControlDefinitionsCommand,
  ListSecurityControlDefinitionsRequest$,
  ListSecurityControlDefinitionsResponse$,
  ListStandardsControlAssociations$,
  ListStandardsControlAssociationsCommand,
  ListStandardsControlAssociationsRequest$,
  ListStandardsControlAssociationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoadBalancerState$,
  Malware$,
  MalwareState,
  MalwareType,
  MapFilter$,
  MapFilterComparison,
  Member$,
  Network$,
  NetworkAutonomousSystem$,
  NetworkConnection$,
  NetworkConnectionAction$,
  NetworkDirection,
  NetworkEndpoint$,
  NetworkGeoLocation$,
  NetworkHeader$,
  NetworkPathComponent$,
  NetworkPathComponentDetails$,
  Note$,
  NoteUpdate$,
  NumberFilter$,
  Occurrences$,
  OcsfBooleanField,
  OcsfBooleanFilter$,
  OcsfDateField,
  OcsfDateFilter$,
  OcsfFindingFilters$,
  OcsfFindingIdentifier$,
  OcsfIpField,
  OcsfIpFilter$,
  OcsfMapField,
  OcsfMapFilter$,
  OcsfNumberField,
  OcsfNumberFilter$,
  OcsfStringField,
  OcsfStringFilter$,
  OrganizationConfiguration$,
  OrganizationConfigurationConfigurationType,
  OrganizationConfigurationStatus,
  Page$,
  ParameterConfiguration$,
  ParameterDefinition$,
  ParameterValue$,
  ParameterValueType,
  Partition,
  PatchSummary$,
  Policy$,
  PortProbeAction$,
  PortProbeDetail$,
  PortRange$,
  PortRangeFromTo$,
  ProcessDetails$,
  Product$,
  ProductV2$,
  PropagatingVgwSetDetails$,
  ProviderConfiguration$,
  ProviderDetail$,
  ProviderSummary$,
  ProviderUpdateConfiguration$,
  Range$,
  Recommendation$,
  RecordState,
  RegionAvailabilityStatus,
  RegisterConnectorV2$,
  RegisterConnectorV2Command,
  RegisterConnectorV2Request$,
  RegisterConnectorV2Response$,
  RelatedFinding$,
  Remediation$,
  Resource$,
  ResourceCategory,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceDetails$,
  ResourceFindingsSummary$,
  ResourceGroupByField,
  ResourceGroupByRule$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceResult$,
  ResourceSeverityBreakdown$,
  ResourceTag$,
  ResourcesCompositeFilter$,
  ResourcesCount$,
  ResourcesDateField,
  ResourcesDateFilter$,
  ResourcesFilters$,
  ResourcesMapField,
  ResourcesMapFilter$,
  ResourcesNumberField,
  ResourcesNumberFilter$,
  ResourcesStringField,
  ResourcesStringFilter$,
  ResourcesTrendsCompositeFilter$,
  ResourcesTrendsFilters$,
  ResourcesTrendsMetricsResult$,
  ResourcesTrendsStringField,
  ResourcesTrendsStringFilter$,
  ResourcesTrendsValues$,
  Result$,
  RouteSetDetails$,
  RuleGroupDetails$,
  RuleGroupSource$,
  RuleGroupSourceCustomActionsDetails$,
  RuleGroupSourceListDetails$,
  RuleGroupSourceStatefulRulesDetails$,
  RuleGroupSourceStatefulRulesHeaderDetails$,
  RuleGroupSourceStatefulRulesOptionsDetails$,
  RuleGroupSourceStatelessRuleDefinition$,
  RuleGroupSourceStatelessRuleMatchAttributes$,
  RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts$,
  RuleGroupSourceStatelessRuleMatchAttributesDestinations$,
  RuleGroupSourceStatelessRuleMatchAttributesSourcePorts$,
  RuleGroupSourceStatelessRuleMatchAttributesSources$,
  RuleGroupSourceStatelessRuleMatchAttributesTcpFlags$,
  RuleGroupSourceStatelessRulesAndCustomActionsDetails$,
  RuleGroupSourceStatelessRulesDetails$,
  RuleGroupVariables$,
  RuleGroupVariablesIpSetsDetails$,
  RuleGroupVariablesPortSetsDetails$,
  RuleStatus,
  RuleStatusV2,
  SecurityControl$,
  SecurityControlCustomParameter$,
  SecurityControlDefinition$,
  SecurityControlParameter$,
  SecurityControlProperty,
  SecurityControlsConfiguration$,
  SecurityHub,
  SecurityHubClient,
  SecurityHubFeature,
  SecurityHubPolicy$,
  SecurityHubServiceException,
  SensitiveDataDetections$,
  SensitiveDataResult$,
  Sequence$,
  ServiceNowDetail$,
  ServiceNowProviderConfiguration$,
  ServiceNowUpdateConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Severity$,
  SeverityLabel,
  SeverityRating,
  SeverityTrendsCount$,
  SeverityUpdate$,
  Signal$,
  SoftwarePackage$,
  SortCriterion$,
  SortOrder,
  Standard$,
  StandardsControl$,
  StandardsControlAssociationDetail$,
  StandardsControlAssociationId$,
  StandardsControlAssociationSummary$,
  StandardsControlAssociationUpdate$,
  StandardsControlsUpdatable,
  StandardsManagedBy$,
  StandardsStatus,
  StandardsStatusReason$,
  StandardsSubscription$,
  StandardsSubscriptionRequest$,
  StartConfigurationPolicyAssociation$,
  StartConfigurationPolicyAssociationCommand,
  StartConfigurationPolicyAssociationRequest$,
  StartConfigurationPolicyAssociationResponse$,
  StartConfigurationPolicyDisassociation$,
  StartConfigurationPolicyDisassociationCommand,
  StartConfigurationPolicyDisassociationRequest$,
  StartConfigurationPolicyDisassociationResponse$,
  StatelessCustomActionDefinition$,
  StatelessCustomPublishMetricAction$,
  StatelessCustomPublishMetricActionDimension$,
  StatusReason$,
  StatusReasonCode,
  StringConfigurationOptions$,
  StringFilter$,
  StringFilterComparison,
  StringListConfigurationOptions$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Target$,
  TargetType,
  Threat$,
  ThreatIntelIndicator$,
  ThreatIntelIndicatorCategory,
  ThreatIntelIndicatorType,
  ThrottlingException,
  ThrottlingException$,
  TicketCreationMode,
  TrendsMetricsResult$,
  TrendsValues$,
  UnprocessedAutomationRule$,
  UnprocessedConfigurationPolicyAssociation$,
  UnprocessedErrorCode,
  UnprocessedSecurityControl$,
  UnprocessedStandardsControlAssociation$,
  UnprocessedStandardsControlAssociationUpdate$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateActionTarget$,
  UpdateActionTargetCommand,
  UpdateActionTargetRequest$,
  UpdateActionTargetResponse$,
  UpdateAggregatorV2$,
  UpdateAggregatorV2Command,
  UpdateAggregatorV2Request$,
  UpdateAggregatorV2Response$,
  UpdateAutomationRuleV2$,
  UpdateAutomationRuleV2Command,
  UpdateAutomationRuleV2Request$,
  UpdateAutomationRuleV2Response$,
  UpdateAutomationRulesRequestItem$,
  UpdateConfigurationPolicy$,
  UpdateConfigurationPolicyCommand,
  UpdateConfigurationPolicyRequest$,
  UpdateConfigurationPolicyResponse$,
  UpdateConnectorV2$,
  UpdateConnectorV2Command,
  UpdateConnectorV2Request$,
  UpdateConnectorV2Response$,
  UpdateFindingAggregator$,
  UpdateFindingAggregatorCommand,
  UpdateFindingAggregatorRequest$,
  UpdateFindingAggregatorResponse$,
  UpdateFindings$,
  UpdateFindingsCommand,
  UpdateFindingsRequest$,
  UpdateFindingsResponse$,
  UpdateInsight$,
  UpdateInsightCommand,
  UpdateInsightRequest$,
  UpdateInsightResponse$,
  UpdateOrganizationConfiguration$,
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationRequest$,
  UpdateOrganizationConfigurationResponse$,
  UpdateSecurityControl$,
  UpdateSecurityControlCommand,
  UpdateSecurityControlRequest$,
  UpdateSecurityControlResponse$,
  UpdateSecurityHubConfiguration$,
  UpdateSecurityHubConfigurationCommand,
  UpdateSecurityHubConfigurationRequest$,
  UpdateSecurityHubConfigurationResponse$,
  UpdateStandardsControl$,
  UpdateStandardsControlCommand,
  UpdateStandardsControlRequest$,
  UpdateStandardsControlResponse$,
  UpdateStatus,
  UserAccount$,
  ValidationException,
  ValidationException$,
  VerificationState,
  VolumeMount$,
  VpcInfoCidrBlockSetDetails$,
  VpcInfoIpv6CidrBlockSetDetails$,
  VpcInfoPeeringOptionsDetails$,
  Vulnerability$,
  VulnerabilityCodeVulnerabilities$,
  VulnerabilityExploitAvailable,
  VulnerabilityFixAvailable,
  VulnerabilityVendor$,
  WafAction$,
  WafExcludedRule$,
  WafOverrideAction$,
  Workflow$,
  WorkflowState,
  WorkflowStatus,
  WorkflowUpdate$,
  _Record$,
  paginateDescribeActionTargets,
  paginateDescribeProducts,
  paginateDescribeProductsV2,
  paginateDescribeStandards,
  paginateDescribeStandardsControls,
  paginateGetEnabledStandards,
  paginateGetFindingHistory,
  paginateGetFindings,
  paginateGetFindingsTrendsV2,
  paginateGetFindingsV2,
  paginateGetInsights,
  paginateGetResourcesTrendsV2,
  paginateGetResourcesV2,
  paginateListAggregatorsV2,
  paginateListConfigurationPolicies,
  paginateListConfigurationPolicyAssociations,
  paginateListEnabledProductsForImport,
  paginateListFindingAggregators,
  paginateListInvitations,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListSecurityControlDefinitions,
  paginateListStandardsControlAssociations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityHubClient === "function");
assert(typeof SecurityHub === "function");
// commands
assert(typeof AcceptAdministratorInvitationCommand === "function");
assert(typeof AcceptAdministratorInvitation$ === "object");
assert(typeof AcceptInvitationCommand === "function");
assert(typeof AcceptInvitation$ === "object");
assert(typeof BatchDeleteAutomationRulesCommand === "function");
assert(typeof BatchDeleteAutomationRules$ === "object");
assert(typeof BatchDisableStandardsCommand === "function");
assert(typeof BatchDisableStandards$ === "object");
assert(typeof BatchEnableStandardsCommand === "function");
assert(typeof BatchEnableStandards$ === "object");
assert(typeof BatchGetAutomationRulesCommand === "function");
assert(typeof BatchGetAutomationRules$ === "object");
assert(typeof BatchGetConfigurationPolicyAssociationsCommand === "function");
assert(typeof BatchGetConfigurationPolicyAssociations$ === "object");
assert(typeof BatchGetSecurityControlsCommand === "function");
assert(typeof BatchGetSecurityControls$ === "object");
assert(typeof BatchGetStandardsControlAssociationsCommand === "function");
assert(typeof BatchGetStandardsControlAssociations$ === "object");
assert(typeof BatchImportFindingsCommand === "function");
assert(typeof BatchImportFindings$ === "object");
assert(typeof BatchUpdateAutomationRulesCommand === "function");
assert(typeof BatchUpdateAutomationRules$ === "object");
assert(typeof BatchUpdateFindingsCommand === "function");
assert(typeof BatchUpdateFindings$ === "object");
assert(typeof BatchUpdateFindingsV2Command === "function");
assert(typeof BatchUpdateFindingsV2$ === "object");
assert(typeof BatchUpdateStandardsControlAssociationsCommand === "function");
assert(typeof BatchUpdateStandardsControlAssociations$ === "object");
assert(typeof CreateActionTargetCommand === "function");
assert(typeof CreateActionTarget$ === "object");
assert(typeof CreateAggregatorV2Command === "function");
assert(typeof CreateAggregatorV2$ === "object");
assert(typeof CreateAutomationRuleCommand === "function");
assert(typeof CreateAutomationRule$ === "object");
assert(typeof CreateAutomationRuleV2Command === "function");
assert(typeof CreateAutomationRuleV2$ === "object");
assert(typeof CreateConfigurationPolicyCommand === "function");
assert(typeof CreateConfigurationPolicy$ === "object");
assert(typeof CreateConnectorV2Command === "function");
assert(typeof CreateConnectorV2$ === "object");
assert(typeof CreateFindingAggregatorCommand === "function");
assert(typeof CreateFindingAggregator$ === "object");
assert(typeof CreateInsightCommand === "function");
assert(typeof CreateInsight$ === "object");
assert(typeof CreateMembersCommand === "function");
assert(typeof CreateMembers$ === "object");
assert(typeof CreateTicketV2Command === "function");
assert(typeof CreateTicketV2$ === "object");
assert(typeof DeclineInvitationsCommand === "function");
assert(typeof DeclineInvitations$ === "object");
assert(typeof DeleteActionTargetCommand === "function");
assert(typeof DeleteActionTarget$ === "object");
assert(typeof DeleteAggregatorV2Command === "function");
assert(typeof DeleteAggregatorV2$ === "object");
assert(typeof DeleteAutomationRuleV2Command === "function");
assert(typeof DeleteAutomationRuleV2$ === "object");
assert(typeof DeleteConfigurationPolicyCommand === "function");
assert(typeof DeleteConfigurationPolicy$ === "object");
assert(typeof DeleteConnectorV2Command === "function");
assert(typeof DeleteConnectorV2$ === "object");
assert(typeof DeleteFindingAggregatorCommand === "function");
assert(typeof DeleteFindingAggregator$ === "object");
assert(typeof DeleteInsightCommand === "function");
assert(typeof DeleteInsight$ === "object");
assert(typeof DeleteInvitationsCommand === "function");
assert(typeof DeleteInvitations$ === "object");
assert(typeof DeleteMembersCommand === "function");
assert(typeof DeleteMembers$ === "object");
assert(typeof DescribeActionTargetsCommand === "function");
assert(typeof DescribeActionTargets$ === "object");
assert(typeof DescribeHubCommand === "function");
assert(typeof DescribeHub$ === "object");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DescribeOrganizationConfiguration$ === "object");
assert(typeof DescribeProductsCommand === "function");
assert(typeof DescribeProducts$ === "object");
assert(typeof DescribeProductsV2Command === "function");
assert(typeof DescribeProductsV2$ === "object");
assert(typeof DescribeSecurityHubV2Command === "function");
assert(typeof DescribeSecurityHubV2$ === "object");
assert(typeof DescribeStandardsCommand === "function");
assert(typeof DescribeStandards$ === "object");
assert(typeof DescribeStandardsControlsCommand === "function");
assert(typeof DescribeStandardsControls$ === "object");
assert(typeof DisableImportFindingsForProductCommand === "function");
assert(typeof DisableImportFindingsForProduct$ === "object");
assert(typeof DisableOrganizationAdminAccountCommand === "function");
assert(typeof DisableOrganizationAdminAccount$ === "object");
assert(typeof DisableSecurityHubCommand === "function");
assert(typeof DisableSecurityHub$ === "object");
assert(typeof DisableSecurityHubV2Command === "function");
assert(typeof DisableSecurityHubV2$ === "object");
assert(typeof DisassociateFromAdministratorAccountCommand === "function");
assert(typeof DisassociateFromAdministratorAccount$ === "object");
assert(typeof DisassociateFromMasterAccountCommand === "function");
assert(typeof DisassociateFromMasterAccount$ === "object");
assert(typeof DisassociateMembersCommand === "function");
assert(typeof DisassociateMembers$ === "object");
assert(typeof EnableImportFindingsForProductCommand === "function");
assert(typeof EnableImportFindingsForProduct$ === "object");
assert(typeof EnableOrganizationAdminAccountCommand === "function");
assert(typeof EnableOrganizationAdminAccount$ === "object");
assert(typeof EnableSecurityHubCommand === "function");
assert(typeof EnableSecurityHub$ === "object");
assert(typeof EnableSecurityHubV2Command === "function");
assert(typeof EnableSecurityHubV2$ === "object");
assert(typeof GetAdministratorAccountCommand === "function");
assert(typeof GetAdministratorAccount$ === "object");
assert(typeof GetAggregatorV2Command === "function");
assert(typeof GetAggregatorV2$ === "object");
assert(typeof GetAutomationRuleV2Command === "function");
assert(typeof GetAutomationRuleV2$ === "object");
assert(typeof GetConfigurationPolicyCommand === "function");
assert(typeof GetConfigurationPolicy$ === "object");
assert(typeof GetConfigurationPolicyAssociationCommand === "function");
assert(typeof GetConfigurationPolicyAssociation$ === "object");
assert(typeof GetConnectorV2Command === "function");
assert(typeof GetConnectorV2$ === "object");
assert(typeof GetEnabledStandardsCommand === "function");
assert(typeof GetEnabledStandards$ === "object");
assert(typeof GetFindingAggregatorCommand === "function");
assert(typeof GetFindingAggregator$ === "object");
assert(typeof GetFindingHistoryCommand === "function");
assert(typeof GetFindingHistory$ === "object");
assert(typeof GetFindingsCommand === "function");
assert(typeof GetFindings$ === "object");
assert(typeof GetFindingStatisticsV2Command === "function");
assert(typeof GetFindingStatisticsV2$ === "object");
assert(typeof GetFindingsTrendsV2Command === "function");
assert(typeof GetFindingsTrendsV2$ === "object");
assert(typeof GetFindingsV2Command === "function");
assert(typeof GetFindingsV2$ === "object");
assert(typeof GetInsightResultsCommand === "function");
assert(typeof GetInsightResults$ === "object");
assert(typeof GetInsightsCommand === "function");
assert(typeof GetInsights$ === "object");
assert(typeof GetInvitationsCountCommand === "function");
assert(typeof GetInvitationsCount$ === "object");
assert(typeof GetMasterAccountCommand === "function");
assert(typeof GetMasterAccount$ === "object");
assert(typeof GetMembersCommand === "function");
assert(typeof GetMembers$ === "object");
assert(typeof GetResourcesStatisticsV2Command === "function");
assert(typeof GetResourcesStatisticsV2$ === "object");
assert(typeof GetResourcesTrendsV2Command === "function");
assert(typeof GetResourcesTrendsV2$ === "object");
assert(typeof GetResourcesV2Command === "function");
assert(typeof GetResourcesV2$ === "object");
assert(typeof GetSecurityControlDefinitionCommand === "function");
assert(typeof GetSecurityControlDefinition$ === "object");
assert(typeof InviteMembersCommand === "function");
assert(typeof InviteMembers$ === "object");
assert(typeof ListAggregatorsV2Command === "function");
assert(typeof ListAggregatorsV2$ === "object");
assert(typeof ListAutomationRulesCommand === "function");
assert(typeof ListAutomationRules$ === "object");
assert(typeof ListAutomationRulesV2Command === "function");
assert(typeof ListAutomationRulesV2$ === "object");
assert(typeof ListConfigurationPoliciesCommand === "function");
assert(typeof ListConfigurationPolicies$ === "object");
assert(typeof ListConfigurationPolicyAssociationsCommand === "function");
assert(typeof ListConfigurationPolicyAssociations$ === "object");
assert(typeof ListConnectorsV2Command === "function");
assert(typeof ListConnectorsV2$ === "object");
assert(typeof ListEnabledProductsForImportCommand === "function");
assert(typeof ListEnabledProductsForImport$ === "object");
assert(typeof ListFindingAggregatorsCommand === "function");
assert(typeof ListFindingAggregators$ === "object");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListInvitations$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListOrganizationAdminAccountsCommand === "function");
assert(typeof ListOrganizationAdminAccounts$ === "object");
assert(typeof ListSecurityControlDefinitionsCommand === "function");
assert(typeof ListSecurityControlDefinitions$ === "object");
assert(typeof ListStandardsControlAssociationsCommand === "function");
assert(typeof ListStandardsControlAssociations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterConnectorV2Command === "function");
assert(typeof RegisterConnectorV2$ === "object");
assert(typeof StartConfigurationPolicyAssociationCommand === "function");
assert(typeof StartConfigurationPolicyAssociation$ === "object");
assert(typeof StartConfigurationPolicyDisassociationCommand === "function");
assert(typeof StartConfigurationPolicyDisassociation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateActionTargetCommand === "function");
assert(typeof UpdateActionTarget$ === "object");
assert(typeof UpdateAggregatorV2Command === "function");
assert(typeof UpdateAggregatorV2$ === "object");
assert(typeof UpdateAutomationRuleV2Command === "function");
assert(typeof UpdateAutomationRuleV2$ === "object");
assert(typeof UpdateConfigurationPolicyCommand === "function");
assert(typeof UpdateConfigurationPolicy$ === "object");
assert(typeof UpdateConnectorV2Command === "function");
assert(typeof UpdateConnectorV2$ === "object");
assert(typeof UpdateFindingAggregatorCommand === "function");
assert(typeof UpdateFindingAggregator$ === "object");
assert(typeof UpdateFindingsCommand === "function");
assert(typeof UpdateFindings$ === "object");
assert(typeof UpdateInsightCommand === "function");
assert(typeof UpdateInsight$ === "object");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateOrganizationConfiguration$ === "object");
assert(typeof UpdateSecurityControlCommand === "function");
assert(typeof UpdateSecurityControl$ === "object");
assert(typeof UpdateSecurityHubConfigurationCommand === "function");
assert(typeof UpdateSecurityHubConfiguration$ === "object");
assert(typeof UpdateStandardsControlCommand === "function");
assert(typeof UpdateStandardsControl$ === "object");
// structural schemas
assert(typeof AcceptAdministratorInvitationRequest$ === "object");
assert(typeof AcceptAdministratorInvitationResponse$ === "object");
assert(typeof AcceptInvitationRequest$ === "object");
assert(typeof AcceptInvitationResponse$ === "object");
assert(typeof AccountDetails$ === "object");
assert(typeof Action$ === "object");
assert(typeof ActionLocalIpDetails$ === "object");
assert(typeof ActionLocalPortDetails$ === "object");
assert(typeof ActionRemoteIpDetails$ === "object");
assert(typeof ActionRemotePortDetails$ === "object");
assert(typeof ActionTarget$ === "object");
assert(typeof Actor$ === "object");
assert(typeof ActorSession$ === "object");
assert(typeof ActorUser$ === "object");
assert(typeof Adjustment$ === "object");
assert(typeof AdminAccount$ === "object");
assert(typeof AggregatorV2$ === "object");
assert(typeof AssociatedStandard$ === "object");
assert(typeof AssociationFilters$ === "object");
assert(typeof AssociationSetDetails$ === "object");
assert(typeof AssociationStateDetails$ === "object");
assert(typeof AutomationRulesAction$ === "object");
assert(typeof AutomationRulesActionTypeObjectV2$ === "object");
assert(typeof AutomationRulesActionV2$ === "object");
assert(typeof AutomationRulesConfig$ === "object");
assert(typeof AutomationRulesFindingFieldsUpdate$ === "object");
assert(typeof AutomationRulesFindingFieldsUpdateV2$ === "object");
assert(typeof AutomationRulesFindingFilters$ === "object");
assert(typeof AutomationRulesMetadata$ === "object");
assert(typeof AutomationRulesMetadataV2$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof AwsAmazonMqBrokerDetails$ === "object");
assert(typeof AwsAmazonMqBrokerEncryptionOptionsDetails$ === "object");
assert(typeof AwsAmazonMqBrokerLdapServerMetadataDetails$ === "object");
assert(typeof AwsAmazonMqBrokerLogsDetails$ === "object");
assert(typeof AwsAmazonMqBrokerLogsPendingDetails$ === "object");
assert(typeof AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails$ === "object");
assert(typeof AwsAmazonMqBrokerUsersDetails$ === "object");
assert(typeof AwsApiCallAction$ === "object");
assert(typeof AwsApiCallActionDomainDetails$ === "object");
assert(typeof AwsApiGatewayAccessLogSettings$ === "object");
assert(typeof AwsApiGatewayCanarySettings$ === "object");
assert(typeof AwsApiGatewayEndpointConfiguration$ === "object");
assert(typeof AwsApiGatewayMethodSettings$ === "object");
assert(typeof AwsApiGatewayRestApiDetails$ === "object");
assert(typeof AwsApiGatewayStageDetails$ === "object");
assert(typeof AwsApiGatewayV2ApiDetails$ === "object");
assert(typeof AwsApiGatewayV2RouteSettings$ === "object");
assert(typeof AwsApiGatewayV2StageDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiLogConfigDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiOpenIdConnectConfigDetails$ === "object");
assert(typeof AwsAppSyncGraphQlApiUserPoolConfigDetails$ === "object");
assert(typeof AwsAthenaWorkGroupConfigurationDetails$ === "object");
assert(typeof AwsAthenaWorkGroupConfigurationResultConfigurationDetails$ === "object");
assert(typeof AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails$ === "object");
assert(typeof AwsAthenaWorkGroupDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification$ === "object");
assert(typeof AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails$ === "object");
assert(typeof AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails$ === "object");
assert(typeof AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails$ === "object");
assert(typeof AwsAutoScalingLaunchConfigurationDetails$ === "object");
assert(typeof AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails$ === "object");
assert(typeof AwsAutoScalingLaunchConfigurationMetadataOptions$ === "object");
assert(typeof AwsBackupBackupPlanAdvancedBackupSettingsDetails$ === "object");
assert(typeof AwsBackupBackupPlanBackupPlanDetails$ === "object");
assert(typeof AwsBackupBackupPlanDetails$ === "object");
assert(typeof AwsBackupBackupPlanLifecycleDetails$ === "object");
assert(typeof AwsBackupBackupPlanRuleCopyActionsDetails$ === "object");
assert(typeof AwsBackupBackupPlanRuleDetails$ === "object");
assert(typeof AwsBackupBackupVaultDetails$ === "object");
assert(typeof AwsBackupBackupVaultNotificationsDetails$ === "object");
assert(typeof AwsBackupRecoveryPointCalculatedLifecycleDetails$ === "object");
assert(typeof AwsBackupRecoveryPointCreatedByDetails$ === "object");
assert(typeof AwsBackupRecoveryPointDetails$ === "object");
assert(typeof AwsBackupRecoveryPointLifecycleDetails$ === "object");
assert(typeof AwsCertificateManagerCertificateDetails$ === "object");
assert(typeof AwsCertificateManagerCertificateDomainValidationOption$ === "object");
assert(typeof AwsCertificateManagerCertificateExtendedKeyUsage$ === "object");
assert(typeof AwsCertificateManagerCertificateKeyUsage$ === "object");
assert(typeof AwsCertificateManagerCertificateOptions$ === "object");
assert(typeof AwsCertificateManagerCertificateRenewalSummary$ === "object");
assert(typeof AwsCertificateManagerCertificateResourceRecord$ === "object");
assert(typeof AwsCloudFormationStackDetails$ === "object");
assert(typeof AwsCloudFormationStackDriftInformationDetails$ === "object");
assert(typeof AwsCloudFormationStackOutputsDetails$ === "object");
assert(typeof AwsCloudFrontDistributionCacheBehavior$ === "object");
assert(typeof AwsCloudFrontDistributionCacheBehaviors$ === "object");
assert(typeof AwsCloudFrontDistributionDefaultCacheBehavior$ === "object");
assert(typeof AwsCloudFrontDistributionDetails$ === "object");
assert(typeof AwsCloudFrontDistributionLogging$ === "object");
assert(typeof AwsCloudFrontDistributionOriginCustomOriginConfig$ === "object");
assert(typeof AwsCloudFrontDistributionOriginGroup$ === "object");
assert(typeof AwsCloudFrontDistributionOriginGroupFailover$ === "object");
assert(typeof AwsCloudFrontDistributionOriginGroupFailoverStatusCodes$ === "object");
assert(typeof AwsCloudFrontDistributionOriginGroups$ === "object");
assert(typeof AwsCloudFrontDistributionOriginItem$ === "object");
assert(typeof AwsCloudFrontDistributionOrigins$ === "object");
assert(typeof AwsCloudFrontDistributionOriginS3OriginConfig$ === "object");
assert(typeof AwsCloudFrontDistributionOriginSslProtocols$ === "object");
assert(typeof AwsCloudFrontDistributionViewerCertificate$ === "object");
assert(typeof AwsCloudTrailTrailDetails$ === "object");
assert(typeof AwsCloudWatchAlarmDetails$ === "object");
assert(typeof AwsCloudWatchAlarmDimensionsDetails$ === "object");
assert(typeof AwsCodeBuildProjectArtifactsDetails$ === "object");
assert(typeof AwsCodeBuildProjectDetails$ === "object");
assert(typeof AwsCodeBuildProjectEnvironment$ === "object");
assert(typeof AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails$ === "object");
assert(typeof AwsCodeBuildProjectEnvironmentRegistryCredential$ === "object");
assert(typeof AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails$ === "object");
assert(typeof AwsCodeBuildProjectLogsConfigDetails$ === "object");
assert(typeof AwsCodeBuildProjectLogsConfigS3LogsDetails$ === "object");
assert(typeof AwsCodeBuildProjectSource$ === "object");
assert(typeof AwsCodeBuildProjectVpcConfig$ === "object");
assert(typeof AwsCorsConfiguration$ === "object");
assert(typeof AwsDmsEndpointDetails$ === "object");
assert(typeof AwsDmsReplicationInstanceDetails$ === "object");
assert(typeof AwsDmsReplicationInstanceReplicationSubnetGroupDetails$ === "object");
assert(typeof AwsDmsReplicationInstanceVpcSecurityGroupsDetails$ === "object");
assert(typeof AwsDmsReplicationTaskDetails$ === "object");
assert(typeof AwsDynamoDbTableAttributeDefinition$ === "object");
assert(typeof AwsDynamoDbTableBillingModeSummary$ === "object");
assert(typeof AwsDynamoDbTableDetails$ === "object");
assert(typeof AwsDynamoDbTableGlobalSecondaryIndex$ === "object");
assert(typeof AwsDynamoDbTableKeySchema$ === "object");
assert(typeof AwsDynamoDbTableLocalSecondaryIndex$ === "object");
assert(typeof AwsDynamoDbTableProjection$ === "object");
assert(typeof AwsDynamoDbTableProvisionedThroughput$ === "object");
assert(typeof AwsDynamoDbTableProvisionedThroughputOverride$ === "object");
assert(typeof AwsDynamoDbTableReplica$ === "object");
assert(typeof AwsDynamoDbTableReplicaGlobalSecondaryIndex$ === "object");
assert(typeof AwsDynamoDbTableRestoreSummary$ === "object");
assert(typeof AwsDynamoDbTableSseDescription$ === "object");
assert(typeof AwsDynamoDbTableStreamSpecification$ === "object");
assert(typeof AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointAuthenticationOptionsDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointClientConnectOptionsDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointConnectionLogOptionsDetails$ === "object");
assert(typeof AwsEc2ClientVpnEndpointDetails$ === "object");
assert(typeof AwsEc2EipDetails$ === "object");
assert(typeof AwsEc2InstanceDetails$ === "object");
assert(typeof AwsEc2InstanceMetadataOptions$ === "object");
assert(typeof AwsEc2InstanceMonitoringDetails$ === "object");
assert(typeof AwsEc2InstanceNetworkInterfacesDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataCpuOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataCreditSpecificationDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataEnclaveOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataHibernationOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataIamInstanceProfileDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataLicenseSetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataMaintenanceOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataMetadataOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataMonitoringDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataPlacementDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails$ === "object");
assert(typeof AwsEc2LaunchTemplateDetails$ === "object");
assert(typeof AwsEc2NetworkAclAssociation$ === "object");
assert(typeof AwsEc2NetworkAclDetails$ === "object");
assert(typeof AwsEc2NetworkAclEntry$ === "object");
assert(typeof AwsEc2NetworkInterfaceAttachment$ === "object");
assert(typeof AwsEc2NetworkInterfaceDetails$ === "object");
assert(typeof AwsEc2NetworkInterfaceIpV6AddressDetail$ === "object");
assert(typeof AwsEc2NetworkInterfacePrivateIpAddressDetail$ === "object");
assert(typeof AwsEc2NetworkInterfaceSecurityGroup$ === "object");
assert(typeof AwsEc2RouteTableDetails$ === "object");
assert(typeof AwsEc2SecurityGroupDetails$ === "object");
assert(typeof AwsEc2SecurityGroupIpPermission$ === "object");
assert(typeof AwsEc2SecurityGroupIpRange$ === "object");
assert(typeof AwsEc2SecurityGroupIpv6Range$ === "object");
assert(typeof AwsEc2SecurityGroupPrefixListId$ === "object");
assert(typeof AwsEc2SecurityGroupUserIdGroupPair$ === "object");
assert(typeof AwsEc2SubnetDetails$ === "object");
assert(typeof AwsEc2TransitGatewayDetails$ === "object");
assert(typeof AwsEc2VolumeAttachment$ === "object");
assert(typeof AwsEc2VolumeDetails$ === "object");
assert(typeof AwsEc2VpcDetails$ === "object");
assert(typeof AwsEc2VpcEndpointServiceDetails$ === "object");
assert(typeof AwsEc2VpcEndpointServiceServiceTypeDetails$ === "object");
assert(typeof AwsEc2VpcPeeringConnectionDetails$ === "object");
assert(typeof AwsEc2VpcPeeringConnectionStatusDetails$ === "object");
assert(typeof AwsEc2VpcPeeringConnectionVpcInfoDetails$ === "object");
assert(typeof AwsEc2VpnConnectionDetails$ === "object");
assert(typeof AwsEc2VpnConnectionOptionsDetails$ === "object");
assert(typeof AwsEc2VpnConnectionOptionsTunnelOptionsDetails$ === "object");
assert(typeof AwsEc2VpnConnectionRoutesDetails$ === "object");
assert(typeof AwsEc2VpnConnectionVgwTelemetryDetails$ === "object");
assert(typeof AwsEcrContainerImageDetails$ === "object");
assert(typeof AwsEcrRepositoryDetails$ === "object");
assert(typeof AwsEcrRepositoryImageScanningConfigurationDetails$ === "object");
assert(typeof AwsEcrRepositoryLifecyclePolicyDetails$ === "object");
assert(typeof AwsEcsClusterClusterSettingsDetails$ === "object");
assert(typeof AwsEcsClusterConfigurationDetails$ === "object");
assert(typeof AwsEcsClusterConfigurationExecuteCommandConfigurationDetails$ === "object");
assert(typeof AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails$ === "object");
assert(typeof AwsEcsClusterDefaultCapacityProviderStrategyDetails$ === "object");
assert(typeof AwsEcsClusterDetails$ === "object");
assert(typeof AwsEcsContainerDetails$ === "object");
assert(typeof AwsEcsServiceCapacityProviderStrategyDetails$ === "object");
assert(typeof AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails$ === "object");
assert(typeof AwsEcsServiceDeploymentConfigurationDetails$ === "object");
assert(typeof AwsEcsServiceDeploymentControllerDetails$ === "object");
assert(typeof AwsEcsServiceDetails$ === "object");
assert(typeof AwsEcsServiceLoadBalancersDetails$ === "object");
assert(typeof AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails$ === "object");
assert(typeof AwsEcsServiceNetworkConfigurationDetails$ === "object");
assert(typeof AwsEcsServicePlacementConstraintsDetails$ === "object");
assert(typeof AwsEcsServicePlacementStrategiesDetails$ === "object");
assert(typeof AwsEcsServiceServiceRegistriesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionInferenceAcceleratorsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionPlacementConstraintsDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionProxyConfigurationDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionVolumesDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails$ === "object");
assert(typeof AwsEcsTaskDefinitionVolumesHostDetails$ === "object");
assert(typeof AwsEcsTaskDetails$ === "object");
assert(typeof AwsEcsTaskVolumeDetails$ === "object");
assert(typeof AwsEcsTaskVolumeHostDetails$ === "object");
assert(typeof AwsEfsAccessPointDetails$ === "object");
assert(typeof AwsEfsAccessPointPosixUserDetails$ === "object");
assert(typeof AwsEfsAccessPointRootDirectoryCreationInfoDetails$ === "object");
assert(typeof AwsEfsAccessPointRootDirectoryDetails$ === "object");
assert(typeof AwsEksClusterDetails$ === "object");
assert(typeof AwsEksClusterLoggingClusterLoggingDetails$ === "object");
assert(typeof AwsEksClusterLoggingDetails$ === "object");
assert(typeof AwsEksClusterResourcesVpcConfigDetails$ === "object");
assert(typeof AwsElasticBeanstalkEnvironmentDetails$ === "object");
assert(typeof AwsElasticBeanstalkEnvironmentEnvironmentLink$ === "object");
assert(typeof AwsElasticBeanstalkEnvironmentOptionSetting$ === "object");
assert(typeof AwsElasticBeanstalkEnvironmentTier$ === "object");
assert(typeof AwsElasticsearchDomainDetails$ === "object");
assert(typeof AwsElasticsearchDomainDomainEndpointOptions$ === "object");
assert(typeof AwsElasticsearchDomainElasticsearchClusterConfigDetails$ === "object");
assert(typeof AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails$ === "object");
assert(typeof AwsElasticsearchDomainEncryptionAtRestOptions$ === "object");
assert(typeof AwsElasticsearchDomainLogPublishingOptions$ === "object");
assert(typeof AwsElasticsearchDomainLogPublishingOptionsLogConfig$ === "object");
assert(typeof AwsElasticsearchDomainNodeToNodeEncryptionOptions$ === "object");
assert(typeof AwsElasticsearchDomainServiceSoftwareOptions$ === "object");
assert(typeof AwsElasticsearchDomainVPCOptions$ === "object");
assert(typeof AwsElbAppCookieStickinessPolicy$ === "object");
assert(typeof AwsElbLbCookieStickinessPolicy$ === "object");
assert(typeof AwsElbLoadBalancerAccessLog$ === "object");
assert(typeof AwsElbLoadBalancerAdditionalAttribute$ === "object");
assert(typeof AwsElbLoadBalancerAttributes$ === "object");
assert(typeof AwsElbLoadBalancerBackendServerDescription$ === "object");
assert(typeof AwsElbLoadBalancerConnectionDraining$ === "object");
assert(typeof AwsElbLoadBalancerConnectionSettings$ === "object");
assert(typeof AwsElbLoadBalancerCrossZoneLoadBalancing$ === "object");
assert(typeof AwsElbLoadBalancerDetails$ === "object");
assert(typeof AwsElbLoadBalancerHealthCheck$ === "object");
assert(typeof AwsElbLoadBalancerInstance$ === "object");
assert(typeof AwsElbLoadBalancerListener$ === "object");
assert(typeof AwsElbLoadBalancerListenerDescription$ === "object");
assert(typeof AwsElbLoadBalancerPolicies$ === "object");
assert(typeof AwsElbLoadBalancerSourceSecurityGroup$ === "object");
assert(typeof AwsElbv2LoadBalancerAttribute$ === "object");
assert(typeof AwsElbv2LoadBalancerDetails$ === "object");
assert(typeof AwsEventSchemasRegistryDetails$ === "object");
assert(typeof AwsEventsEndpointDetails$ === "object");
assert(typeof AwsEventsEndpointEventBusesDetails$ === "object");
assert(typeof AwsEventsEndpointReplicationConfigDetails$ === "object");
assert(typeof AwsEventsEndpointRoutingConfigDetails$ === "object");
assert(typeof AwsEventsEndpointRoutingConfigFailoverConfigDetails$ === "object");
assert(typeof AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails$ === "object");
assert(typeof AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails$ === "object");
assert(typeof AwsEventsEventbusDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesCloudTrailDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesDnsLogsDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesFlowLogsDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesKubernetesDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDataSourcesS3LogsDetails$ === "object");
assert(typeof AwsGuardDutyDetectorDetails$ === "object");
assert(typeof AwsGuardDutyDetectorFeaturesDetails$ === "object");
assert(typeof AwsIamAccessKeyDetails$ === "object");
assert(typeof AwsIamAccessKeySessionContext$ === "object");
assert(typeof AwsIamAccessKeySessionContextAttributes$ === "object");
assert(typeof AwsIamAccessKeySessionContextSessionIssuer$ === "object");
assert(typeof AwsIamAttachedManagedPolicy$ === "object");
assert(typeof AwsIamGroupDetails$ === "object");
assert(typeof AwsIamGroupPolicy$ === "object");
assert(typeof AwsIamInstanceProfile$ === "object");
assert(typeof AwsIamInstanceProfileRole$ === "object");
assert(typeof AwsIamPermissionsBoundary$ === "object");
assert(typeof AwsIamPolicyDetails$ === "object");
assert(typeof AwsIamPolicyVersion$ === "object");
assert(typeof AwsIamRoleDetails$ === "object");
assert(typeof AwsIamRolePolicy$ === "object");
assert(typeof AwsIamUserDetails$ === "object");
assert(typeof AwsIamUserPolicy$ === "object");
assert(typeof AwsKinesisStreamDetails$ === "object");
assert(typeof AwsKinesisStreamStreamEncryptionDetails$ === "object");
assert(typeof AwsKmsKeyDetails$ === "object");
assert(typeof AwsLambdaFunctionCode$ === "object");
assert(typeof AwsLambdaFunctionDeadLetterConfig$ === "object");
assert(typeof AwsLambdaFunctionDetails$ === "object");
assert(typeof AwsLambdaFunctionEnvironment$ === "object");
assert(typeof AwsLambdaFunctionEnvironmentError$ === "object");
assert(typeof AwsLambdaFunctionLayer$ === "object");
assert(typeof AwsLambdaFunctionTracingConfig$ === "object");
assert(typeof AwsLambdaFunctionVpcConfig$ === "object");
assert(typeof AwsLambdaLayerVersionDetails$ === "object");
assert(typeof AwsMountPoint$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationSaslDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationTlsDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoEncryptionInfoDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails$ === "object");
assert(typeof AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails$ === "object");
assert(typeof AwsMskClusterDetails$ === "object");
assert(typeof AwsNetworkFirewallFirewallDetails$ === "object");
assert(typeof AwsNetworkFirewallFirewallPolicyDetails$ === "object");
assert(typeof AwsNetworkFirewallFirewallSubnetMappingsDetails$ === "object");
assert(typeof AwsNetworkFirewallRuleGroupDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainClusterConfigDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainDomainEndpointOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainLogPublishingOption$ === "object");
assert(typeof AwsOpenSearchServiceDomainLogPublishingOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainMasterUserOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails$ === "object");
assert(typeof AwsOpenSearchServiceDomainVpcOptionsDetails$ === "object");
assert(typeof AwsRdsDbClusterAssociatedRole$ === "object");
assert(typeof AwsRdsDbClusterDetails$ === "object");
assert(typeof AwsRdsDbClusterMember$ === "object");
assert(typeof AwsRdsDbClusterOptionGroupMembership$ === "object");
assert(typeof AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute$ === "object");
assert(typeof AwsRdsDbClusterSnapshotDetails$ === "object");
assert(typeof AwsRdsDbDomainMembership$ === "object");
assert(typeof AwsRdsDbInstanceAssociatedRole$ === "object");
assert(typeof AwsRdsDbInstanceDetails$ === "object");
assert(typeof AwsRdsDbInstanceEndpoint$ === "object");
assert(typeof AwsRdsDbInstanceVpcSecurityGroup$ === "object");
assert(typeof AwsRdsDbOptionGroupMembership$ === "object");
assert(typeof AwsRdsDbParameterGroup$ === "object");
assert(typeof AwsRdsDbPendingModifiedValues$ === "object");
assert(typeof AwsRdsDbProcessorFeature$ === "object");
assert(typeof AwsRdsDbSecurityGroupDetails$ === "object");
assert(typeof AwsRdsDbSecurityGroupEc2SecurityGroup$ === "object");
assert(typeof AwsRdsDbSecurityGroupIpRange$ === "object");
assert(typeof AwsRdsDbSnapshotDetails$ === "object");
assert(typeof AwsRdsDbStatusInfo$ === "object");
assert(typeof AwsRdsDbSubnetGroup$ === "object");
assert(typeof AwsRdsDbSubnetGroupSubnet$ === "object");
assert(typeof AwsRdsDbSubnetGroupSubnetAvailabilityZone$ === "object");
assert(typeof AwsRdsEventSubscriptionDetails$ === "object");
assert(typeof AwsRdsPendingCloudWatchLogsExports$ === "object");
assert(typeof AwsRedshiftClusterClusterNode$ === "object");
assert(typeof AwsRedshiftClusterClusterParameterGroup$ === "object");
assert(typeof AwsRedshiftClusterClusterParameterStatus$ === "object");
assert(typeof AwsRedshiftClusterClusterSecurityGroup$ === "object");
assert(typeof AwsRedshiftClusterClusterSnapshotCopyStatus$ === "object");
assert(typeof AwsRedshiftClusterDeferredMaintenanceWindow$ === "object");
assert(typeof AwsRedshiftClusterDetails$ === "object");
assert(typeof AwsRedshiftClusterElasticIpStatus$ === "object");
assert(typeof AwsRedshiftClusterEndpoint$ === "object");
assert(typeof AwsRedshiftClusterHsmStatus$ === "object");
assert(typeof AwsRedshiftClusterIamRole$ === "object");
assert(typeof AwsRedshiftClusterLoggingStatus$ === "object");
assert(typeof AwsRedshiftClusterPendingModifiedValues$ === "object");
assert(typeof AwsRedshiftClusterResizeInfo$ === "object");
assert(typeof AwsRedshiftClusterRestoreStatus$ === "object");
assert(typeof AwsRedshiftClusterVpcSecurityGroup$ === "object");
assert(typeof AwsRoute53HostedZoneConfigDetails$ === "object");
assert(typeof AwsRoute53HostedZoneDetails$ === "object");
assert(typeof AwsRoute53HostedZoneObjectDetails$ === "object");
assert(typeof AwsRoute53HostedZoneVpcDetails$ === "object");
assert(typeof AwsRoute53QueryLoggingConfigDetails$ === "object");
assert(typeof AwsS3AccessPointDetails$ === "object");
assert(typeof AwsS3AccessPointVpcConfigurationDetails$ === "object");
assert(typeof AwsS3AccountPublicAccessBlockDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails$ === "object");
assert(typeof AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails$ === "object");
assert(typeof AwsS3BucketBucketVersioningConfiguration$ === "object");
assert(typeof AwsS3BucketDetails$ === "object");
assert(typeof AwsS3BucketLoggingConfiguration$ === "object");
assert(typeof AwsS3BucketNotificationConfiguration$ === "object");
assert(typeof AwsS3BucketNotificationConfigurationDetail$ === "object");
assert(typeof AwsS3BucketNotificationConfigurationFilter$ === "object");
assert(typeof AwsS3BucketNotificationConfigurationS3KeyFilter$ === "object");
assert(typeof AwsS3BucketNotificationConfigurationS3KeyFilterRule$ === "object");
assert(typeof AwsS3BucketObjectLockConfiguration$ === "object");
assert(typeof AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails$ === "object");
assert(typeof AwsS3BucketObjectLockConfigurationRuleDetails$ === "object");
assert(typeof AwsS3BucketServerSideEncryptionByDefault$ === "object");
assert(typeof AwsS3BucketServerSideEncryptionConfiguration$ === "object");
assert(typeof AwsS3BucketServerSideEncryptionRule$ === "object");
assert(typeof AwsS3BucketWebsiteConfiguration$ === "object");
assert(typeof AwsS3BucketWebsiteConfigurationRedirectTo$ === "object");
assert(typeof AwsS3BucketWebsiteConfigurationRoutingRule$ === "object");
assert(typeof AwsS3BucketWebsiteConfigurationRoutingRuleCondition$ === "object");
assert(typeof AwsS3BucketWebsiteConfigurationRoutingRuleRedirect$ === "object");
assert(typeof AwsS3ObjectDetails$ === "object");
assert(typeof AwsSageMakerNotebookInstanceDetails$ === "object");
assert(typeof AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails$ === "object");
assert(typeof AwsSecretsManagerSecretDetails$ === "object");
assert(typeof AwsSecretsManagerSecretRotationRules$ === "object");
assert(typeof AwsSecurityFinding$ === "object");
assert(typeof AwsSecurityFindingFilters$ === "object");
assert(typeof AwsSecurityFindingIdentifier$ === "object");
assert(typeof AwsSnsTopicDetails$ === "object");
assert(typeof AwsSnsTopicSubscription$ === "object");
assert(typeof AwsSqsQueueDetails$ === "object");
assert(typeof AwsSsmComplianceSummary$ === "object");
assert(typeof AwsSsmPatch$ === "object");
assert(typeof AwsSsmPatchComplianceDetails$ === "object");
assert(typeof AwsStepFunctionStateMachineDetails$ === "object");
assert(typeof AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails$ === "object");
assert(typeof AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails$ === "object");
assert(typeof AwsStepFunctionStateMachineLoggingConfigurationDetails$ === "object");
assert(typeof AwsStepFunctionStateMachineTracingConfigurationDetails$ === "object");
assert(typeof AwsWafRateBasedRuleDetails$ === "object");
assert(typeof AwsWafRateBasedRuleMatchPredicate$ === "object");
assert(typeof AwsWafRegionalRateBasedRuleDetails$ === "object");
assert(typeof AwsWafRegionalRateBasedRuleMatchPredicate$ === "object");
assert(typeof AwsWafRegionalRuleDetails$ === "object");
assert(typeof AwsWafRegionalRuleGroupDetails$ === "object");
assert(typeof AwsWafRegionalRuleGroupRulesActionDetails$ === "object");
assert(typeof AwsWafRegionalRuleGroupRulesDetails$ === "object");
assert(typeof AwsWafRegionalRulePredicateListDetails$ === "object");
assert(typeof AwsWafRegionalWebAclDetails$ === "object");
assert(typeof AwsWafRegionalWebAclRulesListActionDetails$ === "object");
assert(typeof AwsWafRegionalWebAclRulesListDetails$ === "object");
assert(typeof AwsWafRegionalWebAclRulesListOverrideActionDetails$ === "object");
assert(typeof AwsWafRuleDetails$ === "object");
assert(typeof AwsWafRuleGroupDetails$ === "object");
assert(typeof AwsWafRuleGroupRulesActionDetails$ === "object");
assert(typeof AwsWafRuleGroupRulesDetails$ === "object");
assert(typeof AwsWafRulePredicateListDetails$ === "object");
assert(typeof AwsWafv2ActionAllowDetails$ === "object");
assert(typeof AwsWafv2ActionBlockDetails$ === "object");
assert(typeof AwsWafv2CustomHttpHeader$ === "object");
assert(typeof AwsWafv2CustomRequestHandlingDetails$ === "object");
assert(typeof AwsWafv2CustomResponseDetails$ === "object");
assert(typeof AwsWafv2RuleGroupDetails$ === "object");
assert(typeof AwsWafv2RulesActionCaptchaDetails$ === "object");
assert(typeof AwsWafv2RulesActionCountDetails$ === "object");
assert(typeof AwsWafv2RulesActionDetails$ === "object");
assert(typeof AwsWafv2RulesDetails$ === "object");
assert(typeof AwsWafv2VisibilityConfigDetails$ === "object");
assert(typeof AwsWafv2WebAclActionDetails$ === "object");
assert(typeof AwsWafv2WebAclCaptchaConfigDetails$ === "object");
assert(typeof AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails$ === "object");
assert(typeof AwsWafv2WebAclDetails$ === "object");
assert(typeof AwsWafWebAclDetails$ === "object");
assert(typeof AwsWafWebAclRule$ === "object");
assert(typeof AwsXrayEncryptionConfigDetails$ === "object");
assert(typeof BatchDeleteAutomationRulesRequest$ === "object");
assert(typeof BatchDeleteAutomationRulesResponse$ === "object");
assert(typeof BatchDisableStandardsRequest$ === "object");
assert(typeof BatchDisableStandardsResponse$ === "object");
assert(typeof BatchEnableStandardsRequest$ === "object");
assert(typeof BatchEnableStandardsResponse$ === "object");
assert(typeof BatchGetAutomationRulesRequest$ === "object");
assert(typeof BatchGetAutomationRulesResponse$ === "object");
assert(typeof BatchGetConfigurationPolicyAssociationsRequest$ === "object");
assert(typeof BatchGetConfigurationPolicyAssociationsResponse$ === "object");
assert(typeof BatchGetSecurityControlsRequest$ === "object");
assert(typeof BatchGetSecurityControlsResponse$ === "object");
assert(typeof BatchGetStandardsControlAssociationsRequest$ === "object");
assert(typeof BatchGetStandardsControlAssociationsResponse$ === "object");
assert(typeof BatchImportFindingsRequest$ === "object");
assert(typeof BatchImportFindingsResponse$ === "object");
assert(typeof BatchUpdateAutomationRulesRequest$ === "object");
assert(typeof BatchUpdateAutomationRulesResponse$ === "object");
assert(typeof BatchUpdateFindingsRequest$ === "object");
assert(typeof BatchUpdateFindingsResponse$ === "object");
assert(typeof BatchUpdateFindingsUnprocessedFinding$ === "object");
assert(typeof BatchUpdateFindingsV2ProcessedFinding$ === "object");
assert(typeof BatchUpdateFindingsV2Request$ === "object");
assert(typeof BatchUpdateFindingsV2Response$ === "object");
assert(typeof BatchUpdateFindingsV2UnprocessedFinding$ === "object");
assert(typeof BatchUpdateStandardsControlAssociationsRequest$ === "object");
assert(typeof BatchUpdateStandardsControlAssociationsResponse$ === "object");
assert(typeof BooleanConfigurationOptions$ === "object");
assert(typeof BooleanFilter$ === "object");
assert(typeof Cell$ === "object");
assert(typeof CidrBlockAssociation$ === "object");
assert(typeof City$ === "object");
assert(typeof ClassificationResult$ === "object");
assert(typeof ClassificationStatus$ === "object");
assert(typeof CloudWatchLogsLogGroupArnConfigDetails$ === "object");
assert(typeof CodeRepositoryDetails$ === "object");
assert(typeof CodeVulnerabilitiesFilePath$ === "object");
assert(typeof Compliance$ === "object");
assert(typeof CompositeFilter$ === "object");
assert(typeof ConfigurationOptions$ === "object");
assert(typeof ConfigurationPolicyAssociation$ === "object");
assert(typeof ConfigurationPolicyAssociationSummary$ === "object");
assert(typeof ConfigurationPolicySummary$ === "object");
assert(typeof ConnectorSummary$ === "object");
assert(typeof ContainerDetails$ === "object");
assert(typeof Country$ === "object");
assert(typeof CreateActionTargetRequest$ === "object");
assert(typeof CreateActionTargetResponse$ === "object");
assert(typeof CreateAggregatorV2Request$ === "object");
assert(typeof CreateAggregatorV2Response$ === "object");
assert(typeof CreateAutomationRuleRequest$ === "object");
assert(typeof CreateAutomationRuleResponse$ === "object");
assert(typeof CreateAutomationRuleV2Request$ === "object");
assert(typeof CreateAutomationRuleV2Response$ === "object");
assert(typeof CreateConfigurationPolicyRequest$ === "object");
assert(typeof CreateConfigurationPolicyResponse$ === "object");
assert(typeof CreateConnectorV2Request$ === "object");
assert(typeof CreateConnectorV2Response$ === "object");
assert(typeof CreateFindingAggregatorRequest$ === "object");
assert(typeof CreateFindingAggregatorResponse$ === "object");
assert(typeof CreateInsightRequest$ === "object");
assert(typeof CreateInsightResponse$ === "object");
assert(typeof CreateMembersRequest$ === "object");
assert(typeof CreateMembersResponse$ === "object");
assert(typeof CreateTicketV2Request$ === "object");
assert(typeof CreateTicketV2Response$ === "object");
assert(typeof Criteria$ === "object");
assert(typeof CustomDataIdentifiersDetections$ === "object");
assert(typeof CustomDataIdentifiersResult$ === "object");
assert(typeof Cvss$ === "object");
assert(typeof DataClassificationDetails$ === "object");
assert(typeof DateFilter$ === "object");
assert(typeof DateRange$ === "object");
assert(typeof DeclineInvitationsRequest$ === "object");
assert(typeof DeclineInvitationsResponse$ === "object");
assert(typeof DeleteActionTargetRequest$ === "object");
assert(typeof DeleteActionTargetResponse$ === "object");
assert(typeof DeleteAggregatorV2Request$ === "object");
assert(typeof DeleteAggregatorV2Response$ === "object");
assert(typeof DeleteAutomationRuleV2Request$ === "object");
assert(typeof DeleteAutomationRuleV2Response$ === "object");
assert(typeof DeleteConfigurationPolicyRequest$ === "object");
assert(typeof DeleteConfigurationPolicyResponse$ === "object");
assert(typeof DeleteConnectorV2Request$ === "object");
assert(typeof DeleteConnectorV2Response$ === "object");
assert(typeof DeleteFindingAggregatorRequest$ === "object");
assert(typeof DeleteFindingAggregatorResponse$ === "object");
assert(typeof DeleteInsightRequest$ === "object");
assert(typeof DeleteInsightResponse$ === "object");
assert(typeof DeleteInvitationsRequest$ === "object");
assert(typeof DeleteInvitationsResponse$ === "object");
assert(typeof DeleteMembersRequest$ === "object");
assert(typeof DeleteMembersResponse$ === "object");
assert(typeof DescribeActionTargetsRequest$ === "object");
assert(typeof DescribeActionTargetsResponse$ === "object");
assert(typeof DescribeHubRequest$ === "object");
assert(typeof DescribeHubResponse$ === "object");
assert(typeof DescribeOrganizationConfigurationRequest$ === "object");
assert(typeof DescribeOrganizationConfigurationResponse$ === "object");
assert(typeof DescribeProductsRequest$ === "object");
assert(typeof DescribeProductsResponse$ === "object");
assert(typeof DescribeProductsV2Request$ === "object");
assert(typeof DescribeProductsV2Response$ === "object");
assert(typeof DescribeSecurityHubV2Request$ === "object");
assert(typeof DescribeSecurityHubV2Response$ === "object");
assert(typeof DescribeStandardsControlsRequest$ === "object");
assert(typeof DescribeStandardsControlsResponse$ === "object");
assert(typeof DescribeStandardsRequest$ === "object");
assert(typeof DescribeStandardsResponse$ === "object");
assert(typeof Detection$ === "object");
assert(typeof DisableImportFindingsForProductRequest$ === "object");
assert(typeof DisableImportFindingsForProductResponse$ === "object");
assert(typeof DisableOrganizationAdminAccountRequest$ === "object");
assert(typeof DisableOrganizationAdminAccountResponse$ === "object");
assert(typeof DisableSecurityHubRequest$ === "object");
assert(typeof DisableSecurityHubResponse$ === "object");
assert(typeof DisableSecurityHubV2Request$ === "object");
assert(typeof DisableSecurityHubV2Response$ === "object");
assert(typeof DisassociateFromAdministratorAccountRequest$ === "object");
assert(typeof DisassociateFromAdministratorAccountResponse$ === "object");
assert(typeof DisassociateFromMasterAccountRequest$ === "object");
assert(typeof DisassociateFromMasterAccountResponse$ === "object");
assert(typeof DisassociateMembersRequest$ === "object");
assert(typeof DisassociateMembersResponse$ === "object");
assert(typeof DnsRequestAction$ === "object");
assert(typeof DoubleConfigurationOptions$ === "object");
assert(typeof EnableImportFindingsForProductRequest$ === "object");
assert(typeof EnableImportFindingsForProductResponse$ === "object");
assert(typeof EnableOrganizationAdminAccountRequest$ === "object");
assert(typeof EnableOrganizationAdminAccountResponse$ === "object");
assert(typeof EnableSecurityHubRequest$ === "object");
assert(typeof EnableSecurityHubResponse$ === "object");
assert(typeof EnableSecurityHubV2Request$ === "object");
assert(typeof EnableSecurityHubV2Response$ === "object");
assert(typeof EnumConfigurationOptions$ === "object");
assert(typeof EnumListConfigurationOptions$ === "object");
assert(typeof ExternalIntegrationConfiguration$ === "object");
assert(typeof FilePaths$ === "object");
assert(typeof FindingAggregator$ === "object");
assert(typeof FindingHistoryRecord$ === "object");
assert(typeof FindingHistoryUpdate$ === "object");
assert(typeof FindingHistoryUpdateSource$ === "object");
assert(typeof FindingProviderFields$ === "object");
assert(typeof FindingProviderSeverity$ === "object");
assert(typeof FindingsTrendsCompositeFilter$ === "object");
assert(typeof FindingsTrendsFilters$ === "object");
assert(typeof FindingsTrendsStringFilter$ === "object");
assert(typeof FirewallPolicyDetails$ === "object");
assert(typeof FirewallPolicyStatefulRuleGroupReferencesDetails$ === "object");
assert(typeof FirewallPolicyStatelessCustomActionsDetails$ === "object");
assert(typeof FirewallPolicyStatelessRuleGroupReferencesDetails$ === "object");
assert(typeof GeneratorDetails$ === "object");
assert(typeof GeoLocation$ === "object");
assert(typeof GetAdministratorAccountRequest$ === "object");
assert(typeof GetAdministratorAccountResponse$ === "object");
assert(typeof GetAggregatorV2Request$ === "object");
assert(typeof GetAggregatorV2Response$ === "object");
assert(typeof GetAutomationRuleV2Request$ === "object");
assert(typeof GetAutomationRuleV2Response$ === "object");
assert(typeof GetConfigurationPolicyAssociationRequest$ === "object");
assert(typeof GetConfigurationPolicyAssociationResponse$ === "object");
assert(typeof GetConfigurationPolicyRequest$ === "object");
assert(typeof GetConfigurationPolicyResponse$ === "object");
assert(typeof GetConnectorV2Request$ === "object");
assert(typeof GetConnectorV2Response$ === "object");
assert(typeof GetEnabledStandardsRequest$ === "object");
assert(typeof GetEnabledStandardsResponse$ === "object");
assert(typeof GetFindingAggregatorRequest$ === "object");
assert(typeof GetFindingAggregatorResponse$ === "object");
assert(typeof GetFindingHistoryRequest$ === "object");
assert(typeof GetFindingHistoryResponse$ === "object");
assert(typeof GetFindingsRequest$ === "object");
assert(typeof GetFindingsResponse$ === "object");
assert(typeof GetFindingStatisticsV2Request$ === "object");
assert(typeof GetFindingStatisticsV2Response$ === "object");
assert(typeof GetFindingsTrendsV2Request$ === "object");
assert(typeof GetFindingsTrendsV2Response$ === "object");
assert(typeof GetFindingsV2Request$ === "object");
assert(typeof GetFindingsV2Response$ === "object");
assert(typeof GetInsightResultsRequest$ === "object");
assert(typeof GetInsightResultsResponse$ === "object");
assert(typeof GetInsightsRequest$ === "object");
assert(typeof GetInsightsResponse$ === "object");
assert(typeof GetInvitationsCountRequest$ === "object");
assert(typeof GetInvitationsCountResponse$ === "object");
assert(typeof GetMasterAccountRequest$ === "object");
assert(typeof GetMasterAccountResponse$ === "object");
assert(typeof GetMembersRequest$ === "object");
assert(typeof GetMembersResponse$ === "object");
assert(typeof GetResourcesStatisticsV2Request$ === "object");
assert(typeof GetResourcesStatisticsV2Response$ === "object");
assert(typeof GetResourcesTrendsV2Request$ === "object");
assert(typeof GetResourcesTrendsV2Response$ === "object");
assert(typeof GetResourcesV2Request$ === "object");
assert(typeof GetResourcesV2Response$ === "object");
assert(typeof GetSecurityControlDefinitionRequest$ === "object");
assert(typeof GetSecurityControlDefinitionResponse$ === "object");
assert(typeof GroupByResult$ === "object");
assert(typeof GroupByRule$ === "object");
assert(typeof GroupByValue$ === "object");
assert(typeof HealthCheck$ === "object");
assert(typeof IcmpTypeCode$ === "object");
assert(typeof ImportFindingsError$ === "object");
assert(typeof Indicator$ === "object");
assert(typeof Insight$ === "object");
assert(typeof InsightResults$ === "object");
assert(typeof InsightResultValue$ === "object");
assert(typeof IntegerConfigurationOptions$ === "object");
assert(typeof IntegerListConfigurationOptions$ === "object");
assert(typeof Invitation$ === "object");
assert(typeof InviteMembersRequest$ === "object");
assert(typeof InviteMembersResponse$ === "object");
assert(typeof IpFilter$ === "object");
assert(typeof IpOrganizationDetails$ === "object");
assert(typeof Ipv6CidrBlockAssociation$ === "object");
assert(typeof JiraCloudDetail$ === "object");
assert(typeof JiraCloudProviderConfiguration$ === "object");
assert(typeof JiraCloudUpdateConfiguration$ === "object");
assert(typeof KeywordFilter$ === "object");
assert(typeof ListAggregatorsV2Request$ === "object");
assert(typeof ListAggregatorsV2Response$ === "object");
assert(typeof ListAutomationRulesRequest$ === "object");
assert(typeof ListAutomationRulesResponse$ === "object");
assert(typeof ListAutomationRulesV2Request$ === "object");
assert(typeof ListAutomationRulesV2Response$ === "object");
assert(typeof ListConfigurationPoliciesRequest$ === "object");
assert(typeof ListConfigurationPoliciesResponse$ === "object");
assert(typeof ListConfigurationPolicyAssociationsRequest$ === "object");
assert(typeof ListConfigurationPolicyAssociationsResponse$ === "object");
assert(typeof ListConnectorsV2Request$ === "object");
assert(typeof ListConnectorsV2Response$ === "object");
assert(typeof ListEnabledProductsForImportRequest$ === "object");
assert(typeof ListEnabledProductsForImportResponse$ === "object");
assert(typeof ListFindingAggregatorsRequest$ === "object");
assert(typeof ListFindingAggregatorsResponse$ === "object");
assert(typeof ListInvitationsRequest$ === "object");
assert(typeof ListInvitationsResponse$ === "object");
assert(typeof ListMembersRequest$ === "object");
assert(typeof ListMembersResponse$ === "object");
assert(typeof ListOrganizationAdminAccountsRequest$ === "object");
assert(typeof ListOrganizationAdminAccountsResponse$ === "object");
assert(typeof ListSecurityControlDefinitionsRequest$ === "object");
assert(typeof ListSecurityControlDefinitionsResponse$ === "object");
assert(typeof ListStandardsControlAssociationsRequest$ === "object");
assert(typeof ListStandardsControlAssociationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoadBalancerState$ === "object");
assert(typeof Malware$ === "object");
assert(typeof MapFilter$ === "object");
assert(typeof Member$ === "object");
assert(typeof Network$ === "object");
assert(typeof NetworkAutonomousSystem$ === "object");
assert(typeof NetworkConnection$ === "object");
assert(typeof NetworkConnectionAction$ === "object");
assert(typeof NetworkEndpoint$ === "object");
assert(typeof NetworkGeoLocation$ === "object");
assert(typeof NetworkHeader$ === "object");
assert(typeof NetworkPathComponent$ === "object");
assert(typeof NetworkPathComponentDetails$ === "object");
assert(typeof Note$ === "object");
assert(typeof NoteUpdate$ === "object");
assert(typeof NumberFilter$ === "object");
assert(typeof Occurrences$ === "object");
assert(typeof OcsfBooleanFilter$ === "object");
assert(typeof OcsfDateFilter$ === "object");
assert(typeof OcsfFindingFilters$ === "object");
assert(typeof OcsfFindingIdentifier$ === "object");
assert(typeof OcsfIpFilter$ === "object");
assert(typeof OcsfMapFilter$ === "object");
assert(typeof OcsfNumberFilter$ === "object");
assert(typeof OcsfStringFilter$ === "object");
assert(typeof OrganizationConfiguration$ === "object");
assert(typeof Page$ === "object");
assert(typeof ParameterConfiguration$ === "object");
assert(typeof ParameterDefinition$ === "object");
assert(typeof ParameterValue$ === "object");
assert(typeof PatchSummary$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PortProbeAction$ === "object");
assert(typeof PortProbeDetail$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PortRangeFromTo$ === "object");
assert(typeof ProcessDetails$ === "object");
assert(typeof Product$ === "object");
assert(typeof ProductV2$ === "object");
assert(typeof PropagatingVgwSetDetails$ === "object");
assert(typeof ProviderConfiguration$ === "object");
assert(typeof ProviderDetail$ === "object");
assert(typeof ProviderSummary$ === "object");
assert(typeof ProviderUpdateConfiguration$ === "object");
assert(typeof Range$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RegisterConnectorV2Request$ === "object");
assert(typeof RegisterConnectorV2Response$ === "object");
assert(typeof RelatedFinding$ === "object");
assert(typeof Remediation$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceFindingsSummary$ === "object");
assert(typeof ResourceGroupByRule$ === "object");
assert(typeof ResourceResult$ === "object");
assert(typeof ResourcesCompositeFilter$ === "object");
assert(typeof ResourcesCount$ === "object");
assert(typeof ResourcesDateFilter$ === "object");
assert(typeof ResourceSeverityBreakdown$ === "object");
assert(typeof ResourcesFilters$ === "object");
assert(typeof ResourcesMapFilter$ === "object");
assert(typeof ResourcesNumberFilter$ === "object");
assert(typeof ResourcesStringFilter$ === "object");
assert(typeof ResourcesTrendsCompositeFilter$ === "object");
assert(typeof ResourcesTrendsFilters$ === "object");
assert(typeof ResourcesTrendsMetricsResult$ === "object");
assert(typeof ResourcesTrendsStringFilter$ === "object");
assert(typeof ResourcesTrendsValues$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof Result$ === "object");
assert(typeof RouteSetDetails$ === "object");
assert(typeof RuleGroupDetails$ === "object");
assert(typeof RuleGroupSource$ === "object");
assert(typeof RuleGroupSourceCustomActionsDetails$ === "object");
assert(typeof RuleGroupSourceListDetails$ === "object");
assert(typeof RuleGroupSourceStatefulRulesDetails$ === "object");
assert(typeof RuleGroupSourceStatefulRulesHeaderDetails$ === "object");
assert(typeof RuleGroupSourceStatefulRulesOptionsDetails$ === "object");
assert(typeof RuleGroupSourceStatelessRuleDefinition$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributes$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributesDestinations$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributesSourcePorts$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributesSources$ === "object");
assert(typeof RuleGroupSourceStatelessRuleMatchAttributesTcpFlags$ === "object");
assert(typeof RuleGroupSourceStatelessRulesAndCustomActionsDetails$ === "object");
assert(typeof RuleGroupSourceStatelessRulesDetails$ === "object");
assert(typeof RuleGroupVariables$ === "object");
assert(typeof RuleGroupVariablesIpSetsDetails$ === "object");
assert(typeof RuleGroupVariablesPortSetsDetails$ === "object");
assert(typeof SecurityControl$ === "object");
assert(typeof SecurityControlCustomParameter$ === "object");
assert(typeof SecurityControlDefinition$ === "object");
assert(typeof SecurityControlParameter$ === "object");
assert(typeof SecurityControlsConfiguration$ === "object");
assert(typeof SecurityHubPolicy$ === "object");
assert(typeof SensitiveDataDetections$ === "object");
assert(typeof SensitiveDataResult$ === "object");
assert(typeof Sequence$ === "object");
assert(typeof ServiceNowDetail$ === "object");
assert(typeof ServiceNowProviderConfiguration$ === "object");
assert(typeof ServiceNowUpdateConfiguration$ === "object");
assert(typeof Severity$ === "object");
assert(typeof SeverityTrendsCount$ === "object");
assert(typeof SeverityUpdate$ === "object");
assert(typeof Signal$ === "object");
assert(typeof SoftwarePackage$ === "object");
assert(typeof SortCriterion$ === "object");
assert(typeof Standard$ === "object");
assert(typeof StandardsControl$ === "object");
assert(typeof StandardsControlAssociationDetail$ === "object");
assert(typeof StandardsControlAssociationId$ === "object");
assert(typeof StandardsControlAssociationSummary$ === "object");
assert(typeof StandardsControlAssociationUpdate$ === "object");
assert(typeof StandardsManagedBy$ === "object");
assert(typeof StandardsStatusReason$ === "object");
assert(typeof StandardsSubscription$ === "object");
assert(typeof StandardsSubscriptionRequest$ === "object");
assert(typeof StartConfigurationPolicyAssociationRequest$ === "object");
assert(typeof StartConfigurationPolicyAssociationResponse$ === "object");
assert(typeof StartConfigurationPolicyDisassociationRequest$ === "object");
assert(typeof StartConfigurationPolicyDisassociationResponse$ === "object");
assert(typeof StatelessCustomActionDefinition$ === "object");
assert(typeof StatelessCustomPublishMetricAction$ === "object");
assert(typeof StatelessCustomPublishMetricActionDimension$ === "object");
assert(typeof StatusReason$ === "object");
assert(typeof StringConfigurationOptions$ === "object");
assert(typeof StringFilter$ === "object");
assert(typeof StringListConfigurationOptions$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Target$ === "object");
assert(typeof Threat$ === "object");
assert(typeof ThreatIntelIndicator$ === "object");
assert(typeof TrendsMetricsResult$ === "object");
assert(typeof TrendsValues$ === "object");
assert(typeof UnprocessedAutomationRule$ === "object");
assert(typeof UnprocessedConfigurationPolicyAssociation$ === "object");
assert(typeof UnprocessedSecurityControl$ === "object");
assert(typeof UnprocessedStandardsControlAssociation$ === "object");
assert(typeof UnprocessedStandardsControlAssociationUpdate$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateActionTargetRequest$ === "object");
assert(typeof UpdateActionTargetResponse$ === "object");
assert(typeof UpdateAggregatorV2Request$ === "object");
assert(typeof UpdateAggregatorV2Response$ === "object");
assert(typeof UpdateAutomationRulesRequestItem$ === "object");
assert(typeof UpdateAutomationRuleV2Request$ === "object");
assert(typeof UpdateAutomationRuleV2Response$ === "object");
assert(typeof UpdateConfigurationPolicyRequest$ === "object");
assert(typeof UpdateConfigurationPolicyResponse$ === "object");
assert(typeof UpdateConnectorV2Request$ === "object");
assert(typeof UpdateConnectorV2Response$ === "object");
assert(typeof UpdateFindingAggregatorRequest$ === "object");
assert(typeof UpdateFindingAggregatorResponse$ === "object");
assert(typeof UpdateFindingsRequest$ === "object");
assert(typeof UpdateFindingsResponse$ === "object");
assert(typeof UpdateInsightRequest$ === "object");
assert(typeof UpdateInsightResponse$ === "object");
assert(typeof UpdateOrganizationConfigurationRequest$ === "object");
assert(typeof UpdateOrganizationConfigurationResponse$ === "object");
assert(typeof UpdateSecurityControlRequest$ === "object");
assert(typeof UpdateSecurityControlResponse$ === "object");
assert(typeof UpdateSecurityHubConfigurationRequest$ === "object");
assert(typeof UpdateSecurityHubConfigurationResponse$ === "object");
assert(typeof UpdateStandardsControlRequest$ === "object");
assert(typeof UpdateStandardsControlResponse$ === "object");
assert(typeof UserAccount$ === "object");
assert(typeof VolumeMount$ === "object");
assert(typeof VpcInfoCidrBlockSetDetails$ === "object");
assert(typeof VpcInfoIpv6CidrBlockSetDetails$ === "object");
assert(typeof VpcInfoPeeringOptionsDetails$ === "object");
assert(typeof Vulnerability$ === "object");
assert(typeof VulnerabilityCodeVulnerabilities$ === "object");
assert(typeof VulnerabilityVendor$ === "object");
assert(typeof WafAction$ === "object");
assert(typeof WafExcludedRule$ === "object");
assert(typeof WafOverrideAction$ === "object");
assert(typeof Workflow$ === "object");
assert(typeof WorkflowUpdate$ === "object");
// enums
assert(typeof ActorSessionMfaStatus === "object");
assert(typeof AdminStatus === "object");
assert(typeof AllowedOperators === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AssociationType === "object");
assert(typeof AutoEnableStandards === "object");
assert(typeof AutomationRulesActionType === "object");
assert(typeof AutomationRulesActionTypeV2 === "object");
assert(typeof AwsIamAccessKeyStatus === "object");
assert(typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName === "object");
assert(typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode === "object");
assert(typeof ComplianceStatus === "object");
assert(typeof ConfigurationPolicyAssociationStatus === "object");
assert(typeof ConnectionDirection === "object");
assert(typeof ConnectorAuthStatus === "object");
assert(typeof ConnectorProviderName === "object");
assert(typeof ConnectorStatus === "object");
assert(typeof ControlFindingGenerator === "object");
assert(typeof ControlStatus === "object");
assert(typeof DateRangeUnit === "object");
assert(typeof FindingHistoryUpdateSourceType === "object");
assert(typeof FindingsTrendsStringField === "object");
assert(typeof GranularityField === "object");
assert(typeof GroupByField === "object");
assert(typeof IntegrationType === "object");
assert(typeof IntegrationV2Type === "object");
assert(typeof MalwareState === "object");
assert(typeof MalwareType === "object");
assert(typeof MapFilterComparison === "object");
assert(typeof NetworkDirection === "object");
assert(typeof OcsfBooleanField === "object");
assert(typeof OcsfDateField === "object");
assert(typeof OcsfIpField === "object");
assert(typeof OcsfMapField === "object");
assert(typeof OcsfNumberField === "object");
assert(typeof OcsfStringField === "object");
assert(typeof OrganizationConfigurationConfigurationType === "object");
assert(typeof OrganizationConfigurationStatus === "object");
assert(typeof ParameterValueType === "object");
assert(typeof Partition === "object");
assert(typeof RecordState === "object");
assert(typeof RegionAvailabilityStatus === "object");
assert(typeof ResourceCategory === "object");
assert(typeof ResourceGroupByField === "object");
assert(typeof ResourcesDateField === "object");
assert(typeof ResourcesMapField === "object");
assert(typeof ResourcesNumberField === "object");
assert(typeof ResourcesStringField === "object");
assert(typeof ResourcesTrendsStringField === "object");
assert(typeof RuleStatus === "object");
assert(typeof RuleStatusV2 === "object");
assert(typeof SecurityControlProperty === "object");
assert(typeof SecurityHubFeature === "object");
assert(typeof SeverityLabel === "object");
assert(typeof SeverityRating === "object");
assert(typeof SortOrder === "object");
assert(typeof StandardsControlsUpdatable === "object");
assert(typeof StandardsStatus === "object");
assert(typeof StatusReasonCode === "object");
assert(typeof StringFilterComparison === "object");
assert(typeof TargetType === "object");
assert(typeof ThreatIntelIndicatorCategory === "object");
assert(typeof ThreatIntelIndicatorType === "object");
assert(typeof TicketCreationMode === "object");
assert(typeof UnprocessedErrorCode === "object");
assert(typeof UpdateStatus === "object");
assert(typeof VerificationState === "object");
assert(typeof VulnerabilityExploitAvailable === "object");
assert(typeof VulnerabilityFixAvailable === "object");
assert(typeof WorkflowState === "object");
assert(typeof WorkflowStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityHubServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SecurityHubServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalException.prototype instanceof SecurityHubServiceException);
assert(typeof InternalException$ === "object");
assert(InternalServerException.prototype instanceof SecurityHubServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidAccessException.prototype instanceof SecurityHubServiceException);
assert(typeof InvalidAccessException$ === "object");
assert(InvalidInputException.prototype instanceof SecurityHubServiceException);
assert(typeof InvalidInputException$ === "object");
assert(LimitExceededException.prototype instanceof SecurityHubServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceConflictException.prototype instanceof SecurityHubServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceInUseException.prototype instanceof SecurityHubServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecurityHubServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SecurityHubServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SecurityHubServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SecurityHubServiceException);
assert(typeof ValidationException$ === "object");
assert(SecurityHubServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeActionTargets === "function");
assert(typeof paginateDescribeProducts === "function");
assert(typeof paginateDescribeProductsV2 === "function");
assert(typeof paginateDescribeStandards === "function");
assert(typeof paginateDescribeStandardsControls === "function");
assert(typeof paginateGetEnabledStandards === "function");
assert(typeof paginateGetFindingHistory === "function");
assert(typeof paginateGetFindings === "function");
assert(typeof paginateGetFindingsTrendsV2 === "function");
assert(typeof paginateGetFindingsV2 === "function");
assert(typeof paginateGetInsights === "function");
assert(typeof paginateGetResourcesTrendsV2 === "function");
assert(typeof paginateGetResourcesV2 === "function");
assert(typeof paginateListAggregatorsV2 === "function");
assert(typeof paginateListConfigurationPolicies === "function");
assert(typeof paginateListConfigurationPolicyAssociations === "function");
assert(typeof paginateListEnabledProductsForImport === "function");
assert(typeof paginateListFindingAggregators === "function");
assert(typeof paginateListInvitations === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListOrganizationAdminAccounts === "function");
assert(typeof paginateListSecurityControlDefinitions === "function");
assert(typeof paginateListStandardsControlAssociations === "function");
console.log(`SecurityHub index test passed.`);
