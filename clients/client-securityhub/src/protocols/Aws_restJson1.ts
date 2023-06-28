// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "../commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchDeleteAutomationRulesCommandInput,
  BatchDeleteAutomationRulesCommandOutput,
} from "../commands/BatchDeleteAutomationRulesCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "../commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "../commands/BatchEnableStandardsCommand";
import {
  BatchGetAutomationRulesCommandInput,
  BatchGetAutomationRulesCommandOutput,
} from "../commands/BatchGetAutomationRulesCommand";
import {
  BatchGetSecurityControlsCommandInput,
  BatchGetSecurityControlsCommandOutput,
} from "../commands/BatchGetSecurityControlsCommand";
import {
  BatchGetStandardsControlAssociationsCommandInput,
  BatchGetStandardsControlAssociationsCommandOutput,
} from "../commands/BatchGetStandardsControlAssociationsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "../commands/BatchImportFindingsCommand";
import {
  BatchUpdateAutomationRulesCommandInput,
  BatchUpdateAutomationRulesCommandOutput,
} from "../commands/BatchUpdateAutomationRulesCommand";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "../commands/BatchUpdateFindingsCommand";
import {
  BatchUpdateStandardsControlAssociationsCommandInput,
  BatchUpdateStandardsControlAssociationsCommandOutput,
} from "../commands/BatchUpdateStandardsControlAssociationsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "../commands/CreateActionTargetCommand";
import {
  CreateAutomationRuleCommandInput,
  CreateAutomationRuleCommandOutput,
} from "../commands/CreateAutomationRuleCommand";
import {
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "../commands/CreateFindingAggregatorCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "../commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "../commands/DeleteActionTargetCommand";
import {
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
} from "../commands/DeleteFindingAggregatorCommand";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "../commands/DeleteInsightCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "../commands/DescribeHubCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "../commands/DescribeProductsCommand";
import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "../commands/DescribeStandardsCommand";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "../commands/DisableImportFindingsForProductCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "../commands/DisableOrganizationAdminAccountCommand";
import { DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput } from "../commands/DisableSecurityHubCommand";
import {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "../commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "../commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "../commands/EnableImportFindingsForProductCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import { EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput } from "../commands/EnableSecurityHubCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "../commands/GetAdministratorAccountCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "../commands/GetFindingAggregatorCommand";
import { GetFindingHistoryCommandInput, GetFindingHistoryCommandOutput } from "../commands/GetFindingHistoryCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "../commands/GetInsightResultsCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "../commands/InviteMembersCommand";
import {
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
} from "../commands/ListAutomationRulesCommand";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import {
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "../commands/ListFindingAggregatorsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
} from "../commands/ListSecurityControlDefinitionsCommand";
import {
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
} from "../commands/ListStandardsControlAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "../commands/UpdateActionTargetCommand";
import {
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
} from "../commands/UpdateFindingAggregatorCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand";
import { UpdateInsightCommandInput, UpdateInsightCommandOutput } from "../commands/UpdateInsightCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "../commands/UpdateSecurityHubConfigurationCommand";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "../commands/UpdateStandardsControlCommand";
import {
  AccessDeniedException,
  AccountDetails,
  Action,
  ActionLocalIpDetails,
  ActionLocalPortDetails,
  ActionRemoteIpDetails,
  ActionRemotePortDetails,
  Adjustment,
  AssociatedStandard,
  AssociationSetDetails,
  AssociationStateDetails,
  AutomationRulesAction,
  AutomationRulesConfig,
  AutomationRulesFindingFieldsUpdate,
  AutomationRulesFindingFilters,
  AutomationRulesMetadata,
  AvailabilityZone,
  AwsAmazonMqBrokerDetails,
  AwsAmazonMqBrokerEncryptionOptionsDetails,
  AwsAmazonMqBrokerLdapServerMetadataDetails,
  AwsAmazonMqBrokerLogsDetails,
  AwsAmazonMqBrokerLogsPendingDetails,
  AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails,
  AwsAmazonMqBrokerUsersDetails,
  AwsApiCallAction,
  AwsApiCallActionDomainDetails,
  AwsApiGatewayAccessLogSettings,
  AwsApiGatewayCanarySettings,
  AwsApiGatewayEndpointConfiguration,
  AwsApiGatewayMethodSettings,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2RouteSettings,
  AwsApiGatewayV2StageDetails,
  AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails,
  AwsAppSyncGraphQlApiDetails,
  AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails,
  AwsAppSyncGraphQlApiLogConfigDetails,
  AwsAppSyncGraphQlApiOpenIdConnectConfigDetails,
  AwsAppSyncGraphQlApiUserPoolConfigDetails,
  AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
  AwsAutoScalingLaunchConfigurationMetadataOptions,
  AwsBackupBackupPlanAdvancedBackupSettingsDetails,
  AwsBackupBackupPlanBackupPlanDetails,
  AwsBackupBackupPlanDetails,
  AwsBackupBackupPlanLifecycleDetails,
  AwsBackupBackupPlanRuleCopyActionsDetails,
  AwsBackupBackupPlanRuleDetails,
  AwsBackupBackupVaultDetails,
  AwsBackupBackupVaultNotificationsDetails,
  AwsBackupRecoveryPointCalculatedLifecycleDetails,
  AwsBackupRecoveryPointCreatedByDetails,
  AwsBackupRecoveryPointDetails,
  AwsBackupRecoveryPointLifecycleDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCertificateManagerCertificateDomainValidationOption,
  AwsCertificateManagerCertificateExtendedKeyUsage,
  AwsCertificateManagerCertificateKeyUsage,
  AwsCertificateManagerCertificateOptions,
  AwsCertificateManagerCertificateRenewalSummary,
  AwsCertificateManagerCertificateResourceRecord,
  AwsCloudFormationStackDetails,
  AwsCloudFormationStackDriftInformationDetails,
  AwsCloudFormationStackOutputsDetails,
  AwsCloudFrontDistributionCacheBehavior,
  AwsCloudFrontDistributionCacheBehaviors,
  AwsCloudFrontDistributionDefaultCacheBehavior,
  AwsCloudFrontDistributionDetails,
  AwsCloudFrontDistributionLogging,
  AwsCloudFrontDistributionOriginCustomOriginConfig,
  AwsCloudFrontDistributionOriginGroup,
  AwsCloudFrontDistributionOriginGroupFailover,
  AwsCloudFrontDistributionOriginGroupFailoverStatusCodes,
  AwsCloudFrontDistributionOriginGroups,
  AwsCloudFrontDistributionOriginItem,
  AwsCloudFrontDistributionOrigins,
  AwsCloudFrontDistributionOriginS3OriginConfig,
  AwsCloudFrontDistributionOriginSslProtocols,
  AwsCloudFrontDistributionViewerCertificate,
  AwsCloudTrailTrailDetails,
  AwsCloudWatchAlarmDetails,
  AwsCloudWatchAlarmDimensionsDetails,
  AwsCodeBuildProjectArtifactsDetails,
  AwsCodeBuildProjectDetails,
  AwsCodeBuildProjectEnvironment,
  AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails,
  AwsCodeBuildProjectEnvironmentRegistryCredential,
  AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails,
  AwsCodeBuildProjectLogsConfigDetails,
  AwsCodeBuildProjectLogsConfigS3LogsDetails,
  AwsCodeBuildProjectSource,
  AwsCodeBuildProjectVpcConfig,
  AwsCorsConfiguration,
  AwsDynamoDbTableAttributeDefinition,
  AwsDynamoDbTableBillingModeSummary,
  AwsDynamoDbTableDetails,
  AwsDynamoDbTableGlobalSecondaryIndex,
  AwsDynamoDbTableKeySchema,
  AwsDynamoDbTableLocalSecondaryIndex,
  AwsDynamoDbTableProjection,
  AwsDynamoDbTableProvisionedThroughput,
  AwsDynamoDbTableProvisionedThroughputOverride,
  AwsDynamoDbTableReplica,
  AwsDynamoDbTableReplicaGlobalSecondaryIndex,
  AwsDynamoDbTableRestoreSummary,
  AwsDynamoDbTableSseDescription,
  AwsDynamoDbTableStreamSpecification,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2InstanceMetadataOptions,
  AwsEc2InstanceMonitoringDetails,
  AwsEc2InstanceNetworkInterfacesDetails,
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails,
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails,
  AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails,
  AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails,
  AwsEc2LaunchTemplateDataCpuOptionsDetails,
  AwsEc2LaunchTemplateDataCreditSpecificationDetails,
  AwsEc2LaunchTemplateDataDetails,
  AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails,
  AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails,
  AwsEc2LaunchTemplateDataEnclaveOptionsDetails,
  AwsEc2LaunchTemplateDataHibernationOptionsDetails,
  AwsEc2LaunchTemplateDataIamInstanceProfileDetails,
  AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails,
  AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails,
  AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails,
  AwsEc2LaunchTemplateDataLicenseSetDetails,
  AwsEc2LaunchTemplateDataMaintenanceOptionsDetails,
  AwsEc2LaunchTemplateDataMetadataOptionsDetails,
  AwsEc2LaunchTemplateDataMonitoringDetails,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails,
  AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails,
  AwsEc2LaunchTemplateDataPlacementDetails,
  AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails,
  AwsEc2LaunchTemplateDetails,
  AwsEc2NetworkAclAssociation,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkAclEntry,
  AwsEc2NetworkInterfaceAttachment,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2NetworkInterfaceIpV6AddressDetail,
  AwsEc2NetworkInterfacePrivateIpAddressDetail,
  AwsEc2NetworkInterfaceSecurityGroup,
  AwsEc2RouteTableDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SecurityGroupIpPermission,
  AwsEc2SecurityGroupIpRange,
  AwsEc2SecurityGroupIpv6Range,
  AwsEc2SecurityGroupPrefixListId,
  AwsEc2SecurityGroupUserIdGroupPair,
  AwsEc2SubnetDetails,
  AwsEc2TransitGatewayDetails,
  AwsEc2VolumeAttachment,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpcEndpointServiceServiceTypeDetails,
  AwsEc2VpcPeeringConnectionDetails,
  AwsEc2VpcPeeringConnectionStatusDetails,
  AwsEc2VpcPeeringConnectionVpcInfoDetails,
  AwsEc2VpnConnectionDetails,
  AwsEc2VpnConnectionOptionsDetails,
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails,
  AwsEc2VpnConnectionRoutesDetails,
  AwsEc2VpnConnectionVgwTelemetryDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcrRepositoryImageScanningConfigurationDetails,
  AwsEcrRepositoryLifecyclePolicyDetails,
  AwsEcsClusterClusterSettingsDetails,
  AwsEcsClusterConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
  AwsEcsClusterDefaultCapacityProviderStrategyDetails,
  AwsEcsClusterDetails,
  AwsEcsContainerDetails,
  AwsEcsServiceCapacityProviderStrategyDetails,
  AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails,
  AwsEcsServiceDeploymentConfigurationDetails,
  AwsEcsServiceDeploymentControllerDetails,
  AwsEcsServiceDetails,
  AwsEcsServiceLoadBalancersDetails,
  AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails,
  AwsEcsServiceNetworkConfigurationDetails,
  AwsEcsServicePlacementConstraintsDetails,
  AwsEcsServicePlacementStrategiesDetails,
  AwsEcsServiceServiceRegistriesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails,
  AwsEcsTaskDefinitionDetails,
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails,
  AwsEcsTaskDefinitionPlacementConstraintsDetails,
  AwsEcsTaskDefinitionProxyConfigurationDetails,
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails,
  AwsEcsTaskDefinitionVolumesDetails,
  AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
  AwsEcsTaskDefinitionVolumesHostDetails,
  AwsEcsTaskDetails,
  AwsEcsTaskVolumeDetails,
  AwsEcsTaskVolumeHostDetails,
  AwsEfsAccessPointDetails,
  AwsEfsAccessPointPosixUserDetails,
  AwsEfsAccessPointRootDirectoryCreationInfoDetails,
  AwsEfsAccessPointRootDirectoryDetails,
  AwsEksClusterLoggingClusterLoggingDetails,
  AwsEksClusterLoggingDetails,
  AwsMountPoint,
  CidrBlockAssociation,
  City,
  Country,
  DateFilter,
  DateRange,
  DnsRequestAction,
  GeoLocation,
  IcmpTypeCode,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  IpOrganizationDetails,
  Ipv6CidrBlockAssociation,
  LimitExceededException,
  MapFilter,
  NetworkConnectionAction,
  NoteUpdate,
  NumberFilter,
  PortProbeAction,
  PortProbeDetail,
  PortRangeFromTo,
  PropagatingVgwSetDetails,
  RelatedFinding,
  ResourceNotFoundException,
  RouteSetDetails,
  SeverityUpdate,
  StringFilter,
  VpcInfoCidrBlockSetDetails,
  VpcInfoIpv6CidrBlockSetDetails,
  VpcInfoPeeringOptionsDetails,
  WorkflowUpdate,
} from "../models/models_0";
import {
  _Record,
  AwsEksClusterDetails,
  AwsEksClusterResourcesVpcConfigDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticBeanstalkEnvironmentEnvironmentLink,
  AwsElasticBeanstalkEnvironmentOptionSetting,
  AwsElasticBeanstalkEnvironmentTier,
  AwsElasticsearchDomainDetails,
  AwsElasticsearchDomainDomainEndpointOptions,
  AwsElasticsearchDomainElasticsearchClusterConfigDetails,
  AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails,
  AwsElasticsearchDomainEncryptionAtRestOptions,
  AwsElasticsearchDomainLogPublishingOptions,
  AwsElasticsearchDomainLogPublishingOptionsLogConfig,
  AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  AwsElasticsearchDomainServiceSoftwareOptions,
  AwsElasticsearchDomainVPCOptions,
  AwsElbAppCookieStickinessPolicy,
  AwsElbLbCookieStickinessPolicy,
  AwsElbLoadBalancerAccessLog,
  AwsElbLoadBalancerAdditionalAttribute,
  AwsElbLoadBalancerAttributes,
  AwsElbLoadBalancerBackendServerDescription,
  AwsElbLoadBalancerConnectionDraining,
  AwsElbLoadBalancerConnectionSettings,
  AwsElbLoadBalancerCrossZoneLoadBalancing,
  AwsElbLoadBalancerDetails,
  AwsElbLoadBalancerHealthCheck,
  AwsElbLoadBalancerInstance,
  AwsElbLoadBalancerListener,
  AwsElbLoadBalancerListenerDescription,
  AwsElbLoadBalancerPolicies,
  AwsElbLoadBalancerSourceSecurityGroup,
  AwsElbv2LoadBalancerAttribute,
  AwsElbv2LoadBalancerDetails,
  AwsEventSchemasRegistryDetails,
  AwsGuardDutyDetectorDataSourcesCloudTrailDetails,
  AwsGuardDutyDetectorDataSourcesDetails,
  AwsGuardDutyDetectorDataSourcesDnsLogsDetails,
  AwsGuardDutyDetectorDataSourcesFlowLogsDetails,
  AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails,
  AwsGuardDutyDetectorDataSourcesKubernetesDetails,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails,
  AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails,
  AwsGuardDutyDetectorDataSourcesS3LogsDetails,
  AwsGuardDutyDetectorDetails,
  AwsGuardDutyDetectorFeaturesDetails,
  AwsIamAccessKeyDetails,
  AwsIamAccessKeySessionContext,
  AwsIamAccessKeySessionContextAttributes,
  AwsIamAccessKeySessionContextSessionIssuer,
  AwsIamAttachedManagedPolicy,
  AwsIamGroupDetails,
  AwsIamGroupPolicy,
  AwsIamInstanceProfile,
  AwsIamInstanceProfileRole,
  AwsIamPermissionsBoundary,
  AwsIamPolicyDetails,
  AwsIamPolicyVersion,
  AwsIamRoleDetails,
  AwsIamRolePolicy,
  AwsIamUserDetails,
  AwsIamUserPolicy,
  AwsKinesisStreamDetails,
  AwsKinesisStreamStreamEncryptionDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionCode,
  AwsLambdaFunctionDeadLetterConfig,
  AwsLambdaFunctionDetails,
  AwsLambdaFunctionEnvironment,
  AwsLambdaFunctionEnvironmentError,
  AwsLambdaFunctionLayer,
  AwsLambdaFunctionTracingConfig,
  AwsLambdaFunctionVpcConfig,
  AwsLambdaLayerVersionDetails,
  AwsNetworkFirewallFirewallDetails,
  AwsNetworkFirewallFirewallPolicyDetails,
  AwsNetworkFirewallFirewallSubnetMappingsDetails,
  AwsNetworkFirewallRuleGroupDetails,
  AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails,
  AwsOpenSearchServiceDomainClusterConfigDetails,
  AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails,
  AwsOpenSearchServiceDomainDetails,
  AwsOpenSearchServiceDomainDomainEndpointOptionsDetails,
  AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails,
  AwsOpenSearchServiceDomainLogPublishingOption,
  AwsOpenSearchServiceDomainLogPublishingOptionsDetails,
  AwsOpenSearchServiceDomainMasterUserOptionsDetails,
  AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails,
  AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails,
  AwsOpenSearchServiceDomainVpcOptionsDetails,
  AwsRdsDbClusterAssociatedRole,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterMember,
  AwsRdsDbClusterOptionGroupMembership,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbDomainMembership,
  AwsRdsDbInstanceAssociatedRole,
  AwsRdsDbInstanceDetails,
  AwsRdsDbInstanceEndpoint,
  AwsRdsDbInstanceVpcSecurityGroup,
  AwsRdsDbOptionGroupMembership,
  AwsRdsDbParameterGroup,
  AwsRdsDbPendingModifiedValues,
  AwsRdsDbProcessorFeature,
  AwsRdsDbSecurityGroupDetails,
  AwsRdsDbSecurityGroupEc2SecurityGroup,
  AwsRdsDbSecurityGroupIpRange,
  AwsRdsDbSnapshotDetails,
  AwsRdsDbStatusInfo,
  AwsRdsDbSubnetGroup,
  AwsRdsDbSubnetGroupSubnet,
  AwsRdsDbSubnetGroupSubnetAvailabilityZone,
  AwsRdsEventSubscriptionDetails,
  AwsRdsPendingCloudWatchLogsExports,
  AwsRedshiftClusterClusterNode,
  AwsRedshiftClusterClusterParameterGroup,
  AwsRedshiftClusterClusterParameterStatus,
  AwsRedshiftClusterClusterSecurityGroup,
  AwsRedshiftClusterClusterSnapshotCopyStatus,
  AwsRedshiftClusterDeferredMaintenanceWindow,
  AwsRedshiftClusterDetails,
  AwsRedshiftClusterElasticIpStatus,
  AwsRedshiftClusterEndpoint,
  AwsRedshiftClusterHsmStatus,
  AwsRedshiftClusterIamRole,
  AwsRedshiftClusterLoggingStatus,
  AwsRedshiftClusterPendingModifiedValues,
  AwsRedshiftClusterResizeInfo,
  AwsRedshiftClusterRestoreStatus,
  AwsRedshiftClusterVpcSecurityGroup,
  AwsS3AccountPublicAccessBlockDetails,
  AwsS3BucketBucketLifecycleConfigurationDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails,
  AwsS3BucketBucketVersioningConfiguration,
  AwsS3BucketDetails,
  AwsS3BucketLoggingConfiguration,
  AwsS3BucketNotificationConfiguration,
  AwsS3BucketNotificationConfigurationDetail,
  AwsS3BucketNotificationConfigurationFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilterRule,
  AwsS3BucketObjectLockConfiguration,
  AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails,
  AwsS3BucketObjectLockConfigurationRuleDetails,
  AwsS3BucketServerSideEncryptionByDefault,
  AwsS3BucketServerSideEncryptionConfiguration,
  AwsS3BucketServerSideEncryptionRule,
  AwsS3BucketWebsiteConfiguration,
  AwsS3BucketWebsiteConfigurationRedirectTo,
  AwsS3BucketWebsiteConfigurationRoutingRule,
  AwsS3BucketWebsiteConfigurationRoutingRuleCondition,
  AwsS3BucketWebsiteConfigurationRoutingRuleRedirect,
  AwsS3ObjectDetails,
  AwsSageMakerNotebookInstanceDetails,
  AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails,
  AwsSecretsManagerSecretDetails,
  AwsSecretsManagerSecretRotationRules,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  AwsSsmComplianceSummary,
  AwsSsmPatch,
  AwsSsmPatchComplianceDetails,
  AwsStepFunctionStateMachineDetails,
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails,
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails,
  AwsStepFunctionStateMachineLoggingConfigurationDetails,
  AwsStepFunctionStateMachineTracingConfigurationDetails,
  AwsWafRateBasedRuleDetails,
  AwsWafRateBasedRuleMatchPredicate,
  AwsWafRegionalRateBasedRuleDetails,
  AwsWafRegionalRateBasedRuleMatchPredicate,
  AwsWafRegionalRuleDetails,
  AwsWafRegionalRuleGroupDetails,
  AwsWafRegionalRuleGroupRulesActionDetails,
  AwsWafRegionalRuleGroupRulesDetails,
  AwsWafRegionalRulePredicateListDetails,
  AwsWafRegionalWebAclDetails,
  AwsWafRegionalWebAclRulesListActionDetails,
  AwsWafRegionalWebAclRulesListDetails,
  AwsWafRegionalWebAclRulesListOverrideActionDetails,
  AwsWafRuleDetails,
  AwsWafRuleGroupDetails,
  AwsWafRuleGroupRulesActionDetails,
  AwsWafRuleGroupRulesDetails,
  AwsWafRulePredicateListDetails,
  AwsWafv2ActionAllowDetails,
  AwsWafv2ActionBlockDetails,
  AwsWafv2CustomHttpHeader,
  AwsWafv2CustomRequestHandlingDetails,
  AwsWafv2CustomResponseDetails,
  AwsWafv2RuleGroupDetails,
  AwsWafv2RulesActionCaptchaDetails,
  AwsWafv2RulesActionCountDetails,
  AwsWafv2RulesActionDetails,
  AwsWafv2RulesDetails,
  AwsWafv2VisibilityConfigDetails,
  AwsWafv2WebAclActionDetails,
  AwsWafv2WebAclCaptchaConfigDetails,
  AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails,
  AwsWafv2WebAclDetails,
  AwsWafWebAclDetails,
  AwsWafWebAclRule,
  AwsXrayEncryptionConfigDetails,
  BooleanFilter,
  Cell,
  ClassificationResult,
  ClassificationStatus,
  Compliance,
  ContainerDetails,
  CustomDataIdentifiersDetections,
  CustomDataIdentifiersResult,
  Cvss,
  DataClassificationDetails,
  FilePaths,
  FindingProviderFields,
  FindingProviderSeverity,
  FirewallPolicyDetails,
  FirewallPolicyStatefulRuleGroupReferencesDetails,
  FirewallPolicyStatelessCustomActionsDetails,
  FirewallPolicyStatelessRuleGroupReferencesDetails,
  IpFilter,
  KeywordFilter,
  LoadBalancerState,
  Malware,
  Network,
  NetworkHeader,
  NetworkPathComponent,
  NetworkPathComponentDetails,
  Note,
  Occurrences,
  Page,
  PatchSummary,
  PortRange,
  ProcessDetails,
  Range,
  Recommendation,
  Remediation,
  Resource,
  ResourceDetails,
  RuleGroupDetails,
  RuleGroupSource,
  RuleGroupSourceCustomActionsDetails,
  RuleGroupSourceListDetails,
  RuleGroupSourceStatefulRulesDetails,
  RuleGroupSourceStatefulRulesHeaderDetails,
  RuleGroupSourceStatefulRulesOptionsDetails,
  RuleGroupSourceStatelessRuleDefinition,
  RuleGroupSourceStatelessRuleMatchAttributes,
  RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts,
  RuleGroupSourceStatelessRuleMatchAttributesDestinations,
  RuleGroupSourceStatelessRuleMatchAttributesSourcePorts,
  RuleGroupSourceStatelessRuleMatchAttributesSources,
  RuleGroupSourceStatelessRuleMatchAttributesTcpFlags,
  RuleGroupSourceStatelessRulesAndCustomActionsDetails,
  RuleGroupSourceStatelessRulesDetails,
  RuleGroupVariables,
  RuleGroupVariablesIpSetsDetails,
  RuleGroupVariablesPortSetsDetails,
  SensitiveDataDetections,
  SensitiveDataResult,
  Severity,
  SoftwarePackage,
  StatelessCustomActionDefinition,
  StatelessCustomPublishMetricAction,
  StatelessCustomPublishMetricActionDimension,
  StatusReason,
  Threat,
  ThreatIntelIndicator,
  VolumeMount,
  Vulnerability,
  VulnerabilityVendor,
  WafAction,
  WafExcludedRule,
  WafOverrideAction,
  Workflow,
} from "../models/models_1";
import {
  AwsSecurityFindingIdentifier,
  FindingHistoryRecord,
  Insight,
  Invitation,
  Member,
  ResourceConflictException,
  SortCriterion,
  StandardsControl,
  StandardsControlAssociationDetail,
  StandardsControlAssociationId,
  StandardsControlAssociationSummary,
  StandardsControlAssociationUpdate,
  StandardsSubscriptionRequest,
  UpdateAutomationRulesRequestItem,
} from "../models/models_2";
import { SecurityHubServiceException as __BaseException } from "../models/SecurityHubServiceException";

/**
 * serializeAws_restJson1AcceptAdministratorInvitationCommand
 */
export const se_AcceptAdministratorInvitationCommand = async (
  input: AcceptAdministratorInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdministratorId: [],
      InvitationId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AcceptInvitationCommand
 */
export const se_AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
  let body: any;
  body = JSON.stringify(
    take(input, {
      InvitationId: [],
      MasterId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteAutomationRulesCommand
 */
export const se_BatchDeleteAutomationRulesCommand = async (
  input: BatchDeleteAutomationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automationrules/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutomationRulesArns: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDisableStandardsCommand
 */
export const se_BatchDisableStandardsCommand = async (
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/deregister";
  let body: any;
  body = JSON.stringify(
    take(input, {
      StandardsSubscriptionArns: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchEnableStandardsCommand
 */
export const se_BatchEnableStandardsCommand = async (
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/register";
  let body: any;
  body = JSON.stringify(
    take(input, {
      StandardsSubscriptionRequests: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchGetAutomationRulesCommand
 */
export const se_BatchGetAutomationRulesCommand = async (
  input: BatchGetAutomationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automationrules/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutomationRulesArns: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchGetSecurityControlsCommand
 */
export const se_BatchGetSecurityControlsCommand = async (
  input: BatchGetSecurityControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/securityControls/batchGet";
  let body: any;
  body = JSON.stringify(
    take(input, {
      SecurityControlIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchGetStandardsControlAssociationsCommand
 */
export const se_BatchGetStandardsControlAssociationsCommand = async (
  input: BatchGetStandardsControlAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations/batchGet";
  let body: any;
  body = JSON.stringify(
    take(input, {
      StandardsControlAssociationIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchImportFindingsCommand
 */
export const se_BatchImportFindingsCommand = async (
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/import";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Findings: (_) => se_BatchImportFindingsRequestFindingList(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateAutomationRulesCommand
 */
export const se_BatchUpdateAutomationRulesCommand = async (
  input: BatchUpdateAutomationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automationrules/update";
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdateAutomationRulesRequestItems: (_) => se_UpdateAutomationRulesRequestItemsList(_, context),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateFindingsCommand
 */
export const se_BatchUpdateFindingsCommand = async (
  input: BatchUpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/batchupdate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Confidence: [],
      Criticality: [],
      FindingIdentifiers: (_) => _json(_),
      Note: (_) => _json(_),
      RelatedFindings: (_) => _json(_),
      Severity: (_) => se_SeverityUpdate(_, context),
      Types: (_) => _json(_),
      UserDefinedFields: (_) => _json(_),
      VerificationState: [],
      Workflow: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand
 */
export const se_BatchUpdateStandardsControlAssociationsCommand = async (
  input: BatchUpdateStandardsControlAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      StandardsControlAssociationUpdates: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateActionTargetCommand
 */
export const se_CreateActionTargetCommand = async (
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Id: [],
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAutomationRuleCommand
 */
export const se_CreateAutomationRuleCommand = async (
  input: CreateAutomationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automationrules/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => se_ActionList(_, context),
      Criteria: (_) => se_AutomationRulesFindingFilters(_, context),
      Description: [],
      IsTerminal: [],
      RuleName: [],
      RuleOrder: [],
      RuleStatus: [],
      Tags: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFindingAggregatorCommand
 */
export const se_CreateFindingAggregatorCommand = async (
  input: CreateFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/create";
  let body: any;
  body = JSON.stringify(
    take(input, {
      RegionLinkingMode: [],
      Regions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateInsightCommand
 */
export const se_CreateInsightCommand = async (
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => se_AwsSecurityFindingFilters(_, context),
      GroupByAttribute: [],
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMembersCommand
 */
export const se_CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountDetails: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeclineInvitationsCommand
 */
export const se_DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteActionTargetCommand
 */
export const se_DeleteActionTargetCommand = async (
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ActionTargetArn",
    () => input.ActionTargetArn!,
    "{ActionTargetArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFindingAggregatorCommand
 */
export const se_DeleteFindingAggregatorCommand = async (
  input: DeleteFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/findingAggregator/delete/{FindingAggregatorArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FindingAggregatorArn",
    () => input.FindingAggregatorArn!,
    "{FindingAggregatorArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInsightCommand
 */
export const se_DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInvitationsCommand
 */
export const se_DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteMembersCommand
 */
export const se_DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/delete";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeActionTargetsCommand
 */
export const se_DescribeActionTargetsCommand = async (
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ActionTargetArns: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeHubCommand
 */
export const se_DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  const query: any = map({
    HubArn: [, input.HubArn!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const se_DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/configuration";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeProductsCommand
 */
export const se_DescribeProductsCommand = async (
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/products";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    ProductArn: [, input.ProductArn!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeStandardsCommand
 */
export const se_DescribeStandardsCommand = async (
  input: DescribeStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeStandardsControlsCommand
 */
export const se_DescribeStandardsControlsCommand = async (
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/standards/controls/{StandardsSubscriptionArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StandardsSubscriptionArn",
    () => input.StandardsSubscriptionArn!,
    "{StandardsSubscriptionArn+}",
    true
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DisableImportFindingsForProductCommand
 */
export const se_DisableImportFindingsForProductCommand = async (
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/productSubscriptions/{ProductSubscriptionArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ProductSubscriptionArn",
    () => input.ProductSubscriptionArn!,
    "{ProductSubscriptionArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisableOrganizationAdminAccountCommand
 */
export const se_DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/disable";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdminAccountId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisableSecurityHubCommand
 */
export const se_DisableSecurityHubCommand = async (
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateFromAdministratorAccountCommand
 */
export const se_DisassociateFromAdministratorAccountCommand = async (
  input: DisassociateFromAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator/disassociate";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateFromMasterAccountCommand
 */
export const se_DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master/disassociate";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateMembersCommand
 */
export const se_DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EnableImportFindingsForProductCommand
 */
export const se_EnableImportFindingsForProductCommand = async (
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProductArn: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EnableOrganizationAdminAccountCommand
 */
export const se_EnableOrganizationAdminAccountCommand = async (
  input: EnableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/enable";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdminAccountId: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EnableSecurityHubCommand
 */
export const se_EnableSecurityHubCommand = async (
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ControlFindingGenerator: [],
      EnableDefaultStandards: [],
      Tags: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAdministratorAccountCommand
 */
export const se_GetAdministratorAccountCommand = async (
  input: GetAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEnabledStandardsCommand
 */
export const se_GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      StandardsSubscriptionArns: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFindingAggregatorCommand
 */
export const se_GetFindingAggregatorCommand = async (
  input: GetFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/findingAggregator/get/{FindingAggregatorArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FindingAggregatorArn",
    () => input.FindingAggregatorArn!,
    "{FindingAggregatorArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFindingHistoryCommand
 */
export const se_GetFindingHistoryCommand = async (
  input: GetFindingHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingHistory/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.toISOString().split(".")[0] + "Z",
      FindingIdentifier: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      StartTime: (_) => _.toISOString().split(".")[0] + "Z",
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFindingsCommand
 */
export const se_GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => se_AwsSecurityFindingFilters(_, context),
      MaxResults: [],
      NextToken: [],
      SortCriteria: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetInsightResultsCommand
 */
export const se_GetInsightResultsCommand = async (
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/results/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetInsightsCommand
 */
export const se_GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      InsightArns: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetInvitationsCountCommand
 */
export const se_GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/count";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetMasterAccountCommand
 */
export const se_GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetMembersCommand
 */
export const se_GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/get";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1InviteMembersCommand
 */
export const se_InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/invite";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAutomationRulesCommand
 */
export const se_ListAutomationRulesCommand = async (
  input: ListAutomationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automationrules/list";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListEnabledProductsForImportCommand
 */
export const se_ListEnabledProductsForImportCommand = async (
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFindingAggregatorsCommand
 */
export const se_ListFindingAggregatorsCommand = async (
  input: ListFindingAggregatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/list";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListInvitationsCommand
 */
export const se_ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  const query: any = map({
    OnlyAssociated: [() => input.OnlyAssociated !== void 0, () => input.OnlyAssociated!.toString()],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListOrganizationAdminAccountsCommand
 */
export const se_ListOrganizationAdminAccountsCommand = async (
  input: ListOrganizationAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSecurityControlDefinitionsCommand
 */
export const se_ListSecurityControlDefinitionsCommand = async (
  input: ListSecurityControlDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/securityControls/definitions";
  const query: any = map({
    StandardsArn: [, input.StandardsArn!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListStandardsControlAssociationsCommand
 */
export const se_ListStandardsControlAssociationsCommand = async (
  input: ListStandardsControlAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associations";
  const query: any = map({
    SecurityControlId: [, __expectNonNull(input.SecurityControlId!, `SecurityControlId`)],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateActionTargetCommand
 */
export const se_UpdateActionTargetCommand = async (
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ActionTargetArn",
    () => input.ActionTargetArn!,
    "{ActionTargetArn+}",
    true
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFindingAggregatorCommand
 */
export const se_UpdateFindingAggregatorCommand = async (
  input: UpdateFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/update";
  let body: any;
  body = JSON.stringify(
    take(input, {
      FindingAggregatorArn: [],
      RegionLinkingMode: [],
      Regions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFindingsCommand
 */
export const se_UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => se_AwsSecurityFindingFilters(_, context),
      Note: (_) => _json(_),
      RecordState: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateInsightCommand
 */
export const se_UpdateInsightCommand = async (
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => se_AwsSecurityFindingFilters(_, context),
      GroupByAttribute: [],
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const se_UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/configuration";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoEnable: [],
      AutoEnableStandards: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSecurityHubConfigurationCommand
 */
export const se_UpdateSecurityHubConfigurationCommand = async (
  input: UpdateSecurityHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoEnableControls: [],
      ControlFindingGenerator: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateStandardsControlCommand
 */
export const se_UpdateStandardsControlCommand = async (
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/control/{StandardsControlArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StandardsControlArn",
    () => input.StandardsControlArn!,
    "{StandardsControlArn+}",
    true
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ControlStatus: [],
      DisabledReason: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AcceptAdministratorInvitationCommand
 */
export const de_AcceptAdministratorInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptAdministratorInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptAdministratorInvitationCommandError
 */
const de_AcceptAdministratorInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AcceptInvitationCommand
 */
export const de_AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptInvitationCommandError
 */
const de_AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchDeleteAutomationRulesCommand
 */
export const de_BatchDeleteAutomationRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteAutomationRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteAutomationRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProcessedAutomationRules: _json,
    UnprocessedAutomationRules: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteAutomationRulesCommandError
 */
const de_BatchDeleteAutomationRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteAutomationRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchDisableStandardsCommand
 */
export const de_BatchDisableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDisableStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StandardsSubscriptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisableStandardsCommandError
 */
const de_BatchDisableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchEnableStandardsCommand
 */
export const de_BatchEnableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchEnableStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StandardsSubscriptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchEnableStandardsCommandError
 */
const de_BatchEnableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetAutomationRulesCommand
 */
export const de_BatchGetAutomationRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAutomationRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetAutomationRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Rules: (_) => de_AutomationRulesConfigList(_, context),
    UnprocessedAutomationRules: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAutomationRulesCommandError
 */
const de_BatchGetAutomationRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAutomationRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetSecurityControlsCommand
 */
export const de_BatchGetSecurityControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSecurityControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetSecurityControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SecurityControls: _json,
    UnprocessedIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetSecurityControlsCommandError
 */
const de_BatchGetSecurityControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSecurityControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetStandardsControlAssociationsCommand
 */
export const de_BatchGetStandardsControlAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetStandardsControlAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetStandardsControlAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StandardsControlAssociationDetails: (_) => de_StandardsControlAssociationDetails(_, context),
    UnprocessedAssociations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetStandardsControlAssociationsCommandError
 */
const de_BatchGetStandardsControlAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetStandardsControlAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchImportFindingsCommand
 */
export const de_BatchImportFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchImportFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailedCount: __expectInt32,
    FailedFindings: _json,
    SuccessCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchImportFindingsCommandError
 */
const de_BatchImportFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchUpdateAutomationRulesCommand
 */
export const de_BatchUpdateAutomationRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateAutomationRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateAutomationRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProcessedAutomationRules: _json,
    UnprocessedAutomationRules: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateAutomationRulesCommandError
 */
const de_BatchUpdateAutomationRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateAutomationRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchUpdateFindingsCommand
 */
export const de_BatchUpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProcessedFindings: _json,
    UnprocessedFindings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateFindingsCommandError
 */
const de_BatchUpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchUpdateStandardsControlAssociationsCommand
 */
export const de_BatchUpdateStandardsControlAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateStandardsControlAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateStandardsControlAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAssociationUpdates: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateStandardsControlAssociationsCommandError
 */
const de_BatchUpdateStandardsControlAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateStandardsControlAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateActionTargetCommand
 */
export const de_CreateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActionTargetArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateActionTargetCommandError
 */
const de_CreateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAutomationRuleCommand
 */
export const de_CreateAutomationRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutomationRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAutomationRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAutomationRuleCommandError
 */
const de_CreateAutomationRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutomationRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFindingAggregatorCommand
 */
export const de_CreateFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FindingAggregationRegion: __expectString,
    FindingAggregatorArn: __expectString,
    RegionLinkingMode: __expectString,
    Regions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFindingAggregatorCommandError
 */
const de_CreateFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateInsightCommand
 */
export const de_CreateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InsightArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInsightCommandError
 */
const de_CreateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMembersCommand
 */
export const de_CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMembersCommandError
 */
const de_CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeclineInvitationsCommand
 */
export const de_DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeclineInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeclineInvitationsCommandError
 */
const de_DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteActionTargetCommand
 */
export const de_DeleteActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActionTargetArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteActionTargetCommandError
 */
const de_DeleteActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFindingAggregatorCommand
 */
export const de_DeleteFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFindingAggregatorCommandError
 */
const de_DeleteFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInsightCommand
 */
export const de_DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InsightArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInsightCommandError
 */
const de_DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInvitationsCommand
 */
export const de_DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInvitationsCommandError
 */
const de_DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMembersCommand
 */
export const de_DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMembersCommandError
 */
const de_DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeActionTargetsCommand
 */
export const de_DescribeActionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeActionTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActionTargets: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeActionTargetsCommandError
 */
const de_DescribeActionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeHubCommand
 */
export const de_DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoEnableControls: __expectBoolean,
    ControlFindingGenerator: __expectString,
    HubArn: __expectString,
    SubscribedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeHubCommandError
 */
const de_DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const de_DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoEnable: __expectBoolean,
    AutoEnableStandards: __expectString,
    MemberAccountLimitReached: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationConfigurationCommandError
 */
const de_DescribeOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeProductsCommand
 */
export const de_DescribeProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProductsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Products: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProductsCommandError
 */
const de_DescribeProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeStandardsCommand
 */
export const de_DescribeStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Standards: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStandardsCommandError
 */
const de_DescribeStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeStandardsControlsCommand
 */
export const de_DescribeStandardsControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeStandardsControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Controls: (_) => de_StandardsControls(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStandardsControlsCommandError
 */
const de_DescribeStandardsControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisableImportFindingsForProductCommand
 */
export const de_DisableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableImportFindingsForProductCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisableImportFindingsForProductCommandError
 */
const de_DisableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisableOrganizationAdminAccountCommand
 */
export const de_DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisableOrganizationAdminAccountCommandError
 */
const de_DisableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisableSecurityHubCommand
 */
export const de_DisableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableSecurityHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisableSecurityHubCommandError
 */
const de_DisableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateFromAdministratorAccountCommand
 */
export const de_DisassociateFromAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateFromAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError
 */
const de_DisassociateFromAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateFromMasterAccountCommand
 */
export const de_DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateFromMasterAccountCommandError
 */
const de_DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateMembersCommand
 */
export const de_DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMembersCommandError
 */
const de_DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EnableImportFindingsForProductCommand
 */
export const de_EnableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableImportFindingsForProductCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProductSubscriptionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableImportFindingsForProductCommandError
 */
const de_EnableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EnableOrganizationAdminAccountCommand
 */
export const de_EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EnableOrganizationAdminAccountCommandError
 */
const de_EnableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EnableSecurityHubCommand
 */
export const de_EnableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableSecurityHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EnableSecurityHubCommandError
 */
const de_EnableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAdministratorAccountCommand
 */
export const de_GetAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Administrator: (_) => de_Invitation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAdministratorAccountCommandError
 */
const de_GetAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEnabledStandardsCommand
 */
export const de_GetEnabledStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEnabledStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    StandardsSubscriptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnabledStandardsCommandError
 */
const de_GetEnabledStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFindingAggregatorCommand
 */
export const de_GetFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FindingAggregationRegion: __expectString,
    FindingAggregatorArn: __expectString,
    RegionLinkingMode: __expectString,
    Regions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingAggregatorCommandError
 */
const de_GetFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFindingHistoryCommand
 */
export const de_GetFindingHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Records: (_) => de_FindingHistoryRecordList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingHistoryCommandError
 */
const de_GetFindingHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFindingsCommand
 */
export const de_GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Findings: (_) => de_AwsSecurityFindingList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsCommandError
 */
const de_GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInsightResultsCommand
 */
export const de_GetInsightResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InsightResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightResultsCommandError
 */
const de_GetInsightResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInsightsCommand
 */
export const de_GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Insights: (_) => de_InsightList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightsCommandError
 */
const de_GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInvitationsCountCommand
 */
export const de_GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInvitationsCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InvitationsCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInvitationsCountCommandError
 */
const de_GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMasterAccountCommand
 */
export const de_GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Master: (_) => de_Invitation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMasterAccountCommandError
 */
const de_GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMembersCommand
 */
export const de_GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Members: (_) => de_MemberList(_, context),
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMembersCommandError
 */
const de_GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1InviteMembersCommand
 */
export const de_InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InviteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InviteMembersCommandError
 */
const de_InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAutomationRulesCommand
 */
export const de_ListAutomationRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomationRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAutomationRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutomationRulesMetadata: (_) => de_AutomationRulesMetadataList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAutomationRulesCommandError
 */
const de_ListAutomationRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomationRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListEnabledProductsForImportCommand
 */
export const de_ListEnabledProductsForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEnabledProductsForImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProductSubscriptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnabledProductsForImportCommandError
 */
const de_ListEnabledProductsForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFindingAggregatorsCommand
 */
export const de_ListFindingAggregatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFindingAggregatorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FindingAggregators: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingAggregatorsCommandError
 */
const de_ListFindingAggregatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInvitationsCommand
 */
export const de_ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Invitations: (_) => de_InvitationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvitationsCommandError
 */
const de_ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Members: (_) => de_MemberList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommandError
 */
const de_ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListOrganizationAdminAccountsCommand
 */
export const de_ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOrganizationAdminAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdminAccounts: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationAdminAccountsCommandError
 */
const de_ListOrganizationAdminAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSecurityControlDefinitionsCommand
 */
export const de_ListSecurityControlDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityControlDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSecurityControlDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SecurityControlDefinitions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityControlDefinitionsCommandError
 */
const de_ListSecurityControlDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityControlDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListStandardsControlAssociationsCommand
 */
export const de_ListStandardsControlAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStandardsControlAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStandardsControlAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    StandardsControlAssociationSummaries: (_) => de_StandardsControlAssociationSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStandardsControlAssociationsCommandError
 */
const de_ListStandardsControlAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStandardsControlAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateActionTargetCommand
 */
export const de_UpdateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateActionTargetCommandError
 */
const de_UpdateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFindingAggregatorCommand
 */
export const de_UpdateFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FindingAggregationRegion: __expectString,
    FindingAggregatorArn: __expectString,
    RegionLinkingMode: __expectString,
    Regions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFindingAggregatorCommandError
 */
const de_UpdateFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFindingsCommand
 */
export const de_UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFindingsCommandError
 */
const de_UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInsightCommand
 */
export const de_UpdateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInsightCommandError
 */
const de_UpdateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const de_UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOrganizationConfigurationCommandError
 */
const de_UpdateOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSecurityHubConfigurationCommand
 */
export const de_UpdateSecurityHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSecurityHubConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError
 */
const de_UpdateSecurityHubConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateStandardsControlCommand
 */
export const de_UpdateStandardsControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStandardsControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStandardsControlCommandError
 */
const de_UpdateStandardsControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await de_InvalidAccessExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidAccessExceptionRes
 */
const de_InvalidAccessExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountDetails omitted.

// se_AccountDetailsList omitted.

// se_AccountIdList omitted.

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return take(input, {
    ActionType: [],
    AwsApiCallAction: (_) => se_AwsApiCallAction(_, context),
    DnsRequestAction: _json,
    NetworkConnectionAction: (_) => se_NetworkConnectionAction(_, context),
    PortProbeAction: (_) => se_PortProbeAction(_, context),
  });
};

/**
 * serializeAws_restJson1ActionList
 */
const se_ActionList = (input: AutomationRulesAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AutomationRulesAction(entry, context);
    });
};

// se_ActionLocalIpDetails omitted.

// se_ActionLocalPortDetails omitted.

/**
 * serializeAws_restJson1ActionRemoteIpDetails
 */
const se_ActionRemoteIpDetails = (input: ActionRemoteIpDetails, context: __SerdeContext): any => {
  return take(input, {
    City: _json,
    Country: _json,
    GeoLocation: (_) => se_GeoLocation(_, context),
    IpAddressV4: [],
    Organization: _json,
  });
};

// se_ActionRemotePortDetails omitted.

// se_Adjustment omitted.

// se_AdjustmentList omitted.

// se_ArnList omitted.

// se_AssociatedStandard omitted.

// se_AssociatedStandardsList omitted.

// se_AssociationSetDetails omitted.

// se_AssociationSetList omitted.

// se_AssociationStateDetails omitted.

/**
 * serializeAws_restJson1AutomationRulesAction
 */
const se_AutomationRulesAction = (input: AutomationRulesAction, context: __SerdeContext): any => {
  return take(input, {
    FindingFieldsUpdate: (_) => se_AutomationRulesFindingFieldsUpdate(_, context),
    Type: [],
  });
};

// se_AutomationRulesArnsList omitted.

/**
 * serializeAws_restJson1AutomationRulesFindingFieldsUpdate
 */
const se_AutomationRulesFindingFieldsUpdate = (
  input: AutomationRulesFindingFieldsUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    Confidence: [],
    Criticality: [],
    Note: _json,
    RelatedFindings: _json,
    Severity: (_) => se_SeverityUpdate(_, context),
    Types: _json,
    UserDefinedFields: _json,
    VerificationState: [],
    Workflow: _json,
  });
};

/**
 * serializeAws_restJson1AutomationRulesFindingFilters
 */
const se_AutomationRulesFindingFilters = (input: AutomationRulesFindingFilters, context: __SerdeContext): any => {
  return take(input, {
    AwsAccountId: _json,
    CompanyName: _json,
    ComplianceAssociatedStandardsId: _json,
    ComplianceSecurityControlId: _json,
    ComplianceStatus: _json,
    Confidence: (_) => se_NumberFilterList(_, context),
    CreatedAt: _json,
    Criticality: (_) => se_NumberFilterList(_, context),
    Description: _json,
    FirstObservedAt: _json,
    GeneratorId: _json,
    Id: _json,
    LastObservedAt: _json,
    NoteText: _json,
    NoteUpdatedAt: _json,
    NoteUpdatedBy: _json,
    ProductArn: _json,
    ProductName: _json,
    RecordState: _json,
    RelatedFindingsId: _json,
    RelatedFindingsProductArn: _json,
    ResourceDetailsOther: _json,
    ResourceId: _json,
    ResourcePartition: _json,
    ResourceRegion: _json,
    ResourceTags: _json,
    ResourceType: _json,
    SeverityLabel: _json,
    SourceUrl: _json,
    Title: _json,
    Type: _json,
    UpdatedAt: _json,
    UserDefinedFields: _json,
    VerificationState: _json,
    WorkflowStatus: _json,
  });
};

// se_AvailabilityZone omitted.

// se_AvailabilityZones omitted.

// se_AwsAmazonMqBrokerDetails omitted.

// se_AwsAmazonMqBrokerEncryptionOptionsDetails omitted.

// se_AwsAmazonMqBrokerLdapServerMetadataDetails omitted.

// se_AwsAmazonMqBrokerLogsDetails omitted.

// se_AwsAmazonMqBrokerLogsPendingDetails omitted.

// se_AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails omitted.

// se_AwsAmazonMqBrokerUsersDetails omitted.

// se_AwsAmazonMqBrokerUsersList omitted.

/**
 * serializeAws_restJson1AwsApiCallAction
 */
const se_AwsApiCallAction = (input: AwsApiCallAction, context: __SerdeContext): any => {
  return take(input, {
    AffectedResources: _json,
    Api: [],
    CallerType: [],
    DomainDetails: _json,
    FirstSeen: [],
    LastSeen: [],
    RemoteIpDetails: (_) => se_ActionRemoteIpDetails(_, context),
    ServiceName: [],
  });
};

// se_AwsApiCallActionDomainDetails omitted.

// se_AwsApiGatewayAccessLogSettings omitted.

/**
 * serializeAws_restJson1AwsApiGatewayCanarySettings
 */
const se_AwsApiGatewayCanarySettings = (input: AwsApiGatewayCanarySettings, context: __SerdeContext): any => {
  return take(input, {
    DeploymentId: [],
    PercentTraffic: __serializeFloat,
    StageVariableOverrides: _json,
    UseStageCache: [],
  });
};

// se_AwsApiGatewayEndpointConfiguration omitted.

/**
 * serializeAws_restJson1AwsApiGatewayMethodSettings
 */
const se_AwsApiGatewayMethodSettings = (input: AwsApiGatewayMethodSettings, context: __SerdeContext): any => {
  return take(input, {
    CacheDataEncrypted: [],
    CacheTtlInSeconds: [],
    CachingEnabled: [],
    DataTraceEnabled: [],
    HttpMethod: [],
    LoggingLevel: [],
    MetricsEnabled: [],
    RequireAuthorizationForCacheControl: [],
    ResourcePath: [],
    ThrottlingBurstLimit: [],
    ThrottlingRateLimit: __serializeFloat,
    UnauthorizedCacheControlHeaderStrategy: [],
  });
};

/**
 * serializeAws_restJson1AwsApiGatewayMethodSettingsList
 */
const se_AwsApiGatewayMethodSettingsList = (input: AwsApiGatewayMethodSettings[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AwsApiGatewayMethodSettings(entry, context);
    });
};

// se_AwsApiGatewayRestApiDetails omitted.

/**
 * serializeAws_restJson1AwsApiGatewayStageDetails
 */
const se_AwsApiGatewayStageDetails = (input: AwsApiGatewayStageDetails, context: __SerdeContext): any => {
  return take(input, {
    AccessLogSettings: _json,
    CacheClusterEnabled: [],
    CacheClusterSize: [],
    CacheClusterStatus: [],
    CanarySettings: (_) => se_AwsApiGatewayCanarySettings(_, context),
    ClientCertificateId: [],
    CreatedDate: [],
    DeploymentId: [],
    Description: [],
    DocumentationVersion: [],
    LastUpdatedDate: [],
    MethodSettings: (_) => se_AwsApiGatewayMethodSettingsList(_, context),
    StageName: [],
    TracingEnabled: [],
    Variables: _json,
    WebAclArn: [],
  });
};

// se_AwsApiGatewayV2ApiDetails omitted.

/**
 * serializeAws_restJson1AwsApiGatewayV2RouteSettings
 */
const se_AwsApiGatewayV2RouteSettings = (input: AwsApiGatewayV2RouteSettings, context: __SerdeContext): any => {
  return take(input, {
    DataTraceEnabled: [],
    DetailedMetricsEnabled: [],
    LoggingLevel: [],
    ThrottlingBurstLimit: [],
    ThrottlingRateLimit: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AwsApiGatewayV2StageDetails
 */
const se_AwsApiGatewayV2StageDetails = (input: AwsApiGatewayV2StageDetails, context: __SerdeContext): any => {
  return take(input, {
    AccessLogSettings: _json,
    ApiGatewayManaged: [],
    AutoDeploy: [],
    ClientCertificateId: [],
    CreatedDate: [],
    DefaultRouteSettings: (_) => se_AwsApiGatewayV2RouteSettings(_, context),
    DeploymentId: [],
    Description: [],
    LastDeploymentStatusMessage: [],
    LastUpdatedDate: [],
    RouteSettings: (_) => se_AwsApiGatewayV2RouteSettings(_, context),
    StageName: [],
    StageVariables: _json,
  });
};

// se_AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails omitted.

// se_AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList omitted.

// se_AwsAppSyncGraphQlApiDetails omitted.

// se_AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails omitted.

// se_AwsAppSyncGraphQlApiLogConfigDetails omitted.

// se_AwsAppSyncGraphQlApiOpenIdConnectConfigDetails omitted.

// se_AwsAppSyncGraphQlApiUserPoolConfigDetails omitted.

// se_AwsAutoScalingAutoScalingGroupAvailabilityZonesList omitted.

// se_AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails omitted.

// se_AwsAutoScalingAutoScalingGroupDetails omitted.

// se_AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList omitted.

// se_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails omitted.

// se_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails omitted.

// se_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails omitted.

// se_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList omitted.

// se_AwsAutoScalingLaunchConfigurationDetails omitted.

// se_AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails omitted.

// se_AwsAutoScalingLaunchConfigurationMetadataOptions omitted.

// se_AwsBackupBackupPlanAdvancedBackupSettingsDetails omitted.

// se_AwsBackupBackupPlanAdvancedBackupSettingsList omitted.

// se_AwsBackupBackupPlanBackupPlanDetails omitted.

// se_AwsBackupBackupPlanDetails omitted.

// se_AwsBackupBackupPlanLifecycleDetails omitted.

// se_AwsBackupBackupPlanRuleCopyActionsDetails omitted.

// se_AwsBackupBackupPlanRuleCopyActionsList omitted.

// se_AwsBackupBackupPlanRuleDetails omitted.

// se_AwsBackupBackupPlanRuleList omitted.

// se_AwsBackupBackupVaultDetails omitted.

// se_AwsBackupBackupVaultNotificationsDetails omitted.

// se_AwsBackupRecoveryPointCalculatedLifecycleDetails omitted.

// se_AwsBackupRecoveryPointCreatedByDetails omitted.

// se_AwsBackupRecoveryPointDetails omitted.

// se_AwsBackupRecoveryPointLifecycleDetails omitted.

// se_AwsCertificateManagerCertificateDetails omitted.

// se_AwsCertificateManagerCertificateDomainValidationOption omitted.

// se_AwsCertificateManagerCertificateDomainValidationOptions omitted.

// se_AwsCertificateManagerCertificateExtendedKeyUsage omitted.

// se_AwsCertificateManagerCertificateExtendedKeyUsages omitted.

// se_AwsCertificateManagerCertificateKeyUsage omitted.

// se_AwsCertificateManagerCertificateKeyUsages omitted.

// se_AwsCertificateManagerCertificateOptions omitted.

// se_AwsCertificateManagerCertificateRenewalSummary omitted.

// se_AwsCertificateManagerCertificateResourceRecord omitted.

// se_AwsCloudFormationStackDetails omitted.

// se_AwsCloudFormationStackDriftInformationDetails omitted.

// se_AwsCloudFormationStackOutputsDetails omitted.

// se_AwsCloudFormationStackOutputsList omitted.

// se_AwsCloudFrontDistributionCacheBehavior omitted.

// se_AwsCloudFrontDistributionCacheBehaviors omitted.

// se_AwsCloudFrontDistributionCacheBehaviorsItemList omitted.

// se_AwsCloudFrontDistributionDefaultCacheBehavior omitted.

// se_AwsCloudFrontDistributionDetails omitted.

// se_AwsCloudFrontDistributionLogging omitted.

// se_AwsCloudFrontDistributionOriginCustomOriginConfig omitted.

// se_AwsCloudFrontDistributionOriginGroup omitted.

// se_AwsCloudFrontDistributionOriginGroupFailover omitted.

// se_AwsCloudFrontDistributionOriginGroupFailoverStatusCodes omitted.

// se_AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList omitted.

// se_AwsCloudFrontDistributionOriginGroups omitted.

// se_AwsCloudFrontDistributionOriginGroupsItemList omitted.

// se_AwsCloudFrontDistributionOriginItem omitted.

// se_AwsCloudFrontDistributionOriginItemList omitted.

// se_AwsCloudFrontDistributionOrigins omitted.

// se_AwsCloudFrontDistributionOriginS3OriginConfig omitted.

// se_AwsCloudFrontDistributionOriginSslProtocols omitted.

// se_AwsCloudFrontDistributionViewerCertificate omitted.

// se_AwsCloudTrailTrailDetails omitted.

/**
 * serializeAws_restJson1AwsCloudWatchAlarmDetails
 */
const se_AwsCloudWatchAlarmDetails = (input: AwsCloudWatchAlarmDetails, context: __SerdeContext): any => {
  return take(input, {
    ActionsEnabled: [],
    AlarmActions: _json,
    AlarmArn: [],
    AlarmConfigurationUpdatedTimestamp: [],
    AlarmDescription: [],
    AlarmName: [],
    ComparisonOperator: [],
    DatapointsToAlarm: [],
    Dimensions: _json,
    EvaluateLowSampleCountPercentile: [],
    EvaluationPeriods: [],
    ExtendedStatistic: [],
    InsufficientDataActions: _json,
    MetricName: [],
    Namespace: [],
    OkActions: _json,
    Period: [],
    Statistic: [],
    Threshold: __serializeFloat,
    ThresholdMetricId: [],
    TreatMissingData: [],
    Unit: [],
  });
};

// se_AwsCloudWatchAlarmDimensionsDetails omitted.

// se_AwsCloudWatchAlarmDimensionsList omitted.

// se_AwsCodeBuildProjectArtifactsDetails omitted.

// se_AwsCodeBuildProjectArtifactsList omitted.

// se_AwsCodeBuildProjectDetails omitted.

// se_AwsCodeBuildProjectEnvironment omitted.

// se_AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails omitted.

// se_AwsCodeBuildProjectEnvironmentEnvironmentVariablesList omitted.

// se_AwsCodeBuildProjectEnvironmentRegistryCredential omitted.

// se_AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails omitted.

// se_AwsCodeBuildProjectLogsConfigDetails omitted.

// se_AwsCodeBuildProjectLogsConfigS3LogsDetails omitted.

// se_AwsCodeBuildProjectSource omitted.

// se_AwsCodeBuildProjectVpcConfig omitted.

// se_AwsCorsConfiguration omitted.

// se_AwsDynamoDbTableAttributeDefinition omitted.

// se_AwsDynamoDbTableAttributeDefinitionList omitted.

// se_AwsDynamoDbTableBillingModeSummary omitted.

// se_AwsDynamoDbTableDetails omitted.

// se_AwsDynamoDbTableGlobalSecondaryIndex omitted.

// se_AwsDynamoDbTableGlobalSecondaryIndexList omitted.

// se_AwsDynamoDbTableKeySchema omitted.

// se_AwsDynamoDbTableKeySchemaList omitted.

// se_AwsDynamoDbTableLocalSecondaryIndex omitted.

// se_AwsDynamoDbTableLocalSecondaryIndexList omitted.

// se_AwsDynamoDbTableProjection omitted.

// se_AwsDynamoDbTableProvisionedThroughput omitted.

// se_AwsDynamoDbTableProvisionedThroughputOverride omitted.

// se_AwsDynamoDbTableReplica omitted.

// se_AwsDynamoDbTableReplicaGlobalSecondaryIndex omitted.

// se_AwsDynamoDbTableReplicaGlobalSecondaryIndexList omitted.

// se_AwsDynamoDbTableReplicaList omitted.

// se_AwsDynamoDbTableRestoreSummary omitted.

// se_AwsDynamoDbTableSseDescription omitted.

// se_AwsDynamoDbTableStreamSpecification omitted.

// se_AwsEc2EipDetails omitted.

// se_AwsEc2InstanceDetails omitted.

// se_AwsEc2InstanceMetadataOptions omitted.

// se_AwsEc2InstanceMonitoringDetails omitted.

// se_AwsEc2InstanceNetworkInterfacesDetails omitted.

// se_AwsEc2InstanceNetworkInterfacesList omitted.

// se_AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails omitted.

// se_AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails omitted.

// se_AwsEc2LaunchTemplateDataBlockDeviceMappingSetList omitted.

// se_AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails omitted.

// se_AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails omitted.

// se_AwsEc2LaunchTemplateDataCpuOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataCreditSpecificationDetails omitted.

/**
 * serializeAws_restJson1AwsEc2LaunchTemplateDataDetails
 */
const se_AwsEc2LaunchTemplateDataDetails = (input: AwsEc2LaunchTemplateDataDetails, context: __SerdeContext): any => {
  return take(input, {
    BlockDeviceMappingSet: _json,
    CapacityReservationSpecification: _json,
    CpuOptions: _json,
    CreditSpecification: _json,
    DisableApiStop: [],
    DisableApiTermination: [],
    EbsOptimized: [],
    ElasticGpuSpecificationSet: _json,
    ElasticInferenceAcceleratorSet: _json,
    EnclaveOptions: _json,
    HibernationOptions: _json,
    IamInstanceProfile: _json,
    ImageId: [],
    InstanceInitiatedShutdownBehavior: [],
    InstanceMarketOptions: _json,
    InstanceRequirements: (_) => se_AwsEc2LaunchTemplateDataInstanceRequirementsDetails(_, context),
    InstanceType: [],
    KernelId: [],
    KeyName: [],
    LicenseSet: _json,
    MaintenanceOptions: _json,
    MetadataOptions: _json,
    Monitoring: _json,
    NetworkInterfaceSet: _json,
    Placement: _json,
    PrivateDnsNameOptions: _json,
    RamDiskId: [],
    SecurityGroupIdSet: _json,
    SecurityGroupSet: _json,
    UserData: [],
  });
};

// se_AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails omitted.

// se_AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList omitted.

// se_AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails omitted.

// se_AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList omitted.

// se_AwsEc2LaunchTemplateDataEnclaveOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataHibernationOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataIamInstanceProfileDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails omitted.

/**
 * serializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsDetails
 */
const se_AwsEc2LaunchTemplateDataInstanceRequirementsDetails = (
  input: AwsEc2LaunchTemplateDataInstanceRequirementsDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceleratorCount: _json,
    AcceleratorManufacturers: _json,
    AcceleratorNames: _json,
    AcceleratorTotalMemoryMiB: _json,
    AcceleratorTypes: _json,
    BareMetal: [],
    BaselineEbsBandwidthMbps: _json,
    BurstablePerformance: [],
    CpuManufacturers: _json,
    ExcludedInstanceTypes: _json,
    InstanceGenerations: _json,
    LocalStorage: [],
    LocalStorageTypes: _json,
    MemoryGiBPerVCpu: (_) => se_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails(_, context),
    MemoryMiB: _json,
    NetworkInterfaceCount: _json,
    OnDemandMaxPricePercentageOverLowestPrice: [],
    RequireHibernateSupport: [],
    SpotMaxPricePercentageOverLowestPrice: [],
    TotalLocalStorageGB: (_) => se_AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails(_, context),
    VCpuCount: _json,
  });
};

/**
 * serializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails
 */
const se_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails = (
  input: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    Max: __serializeFloat,
    Min: __serializeFloat,
  });
};

// se_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails omitted.

// se_AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails omitted.

/**
 * serializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails
 */
const se_AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails = (
  input: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    Max: __serializeFloat,
    Min: __serializeFloat,
  });
};

// se_AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails omitted.

// se_AwsEc2LaunchTemplateDataLicenseSetDetails omitted.

// se_AwsEc2LaunchTemplateDataLicenseSetList omitted.

// se_AwsEc2LaunchTemplateDataMaintenanceOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataMetadataOptionsDetails omitted.

// se_AwsEc2LaunchTemplateDataMonitoringDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetList omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails omitted.

// se_AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList omitted.

// se_AwsEc2LaunchTemplateDataPlacementDetails omitted.

// se_AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails omitted.

/**
 * serializeAws_restJson1AwsEc2LaunchTemplateDetails
 */
const se_AwsEc2LaunchTemplateDetails = (input: AwsEc2LaunchTemplateDetails, context: __SerdeContext): any => {
  return take(input, {
    DefaultVersionNumber: [],
    Id: [],
    LatestVersionNumber: [],
    LaunchTemplateData: (_) => se_AwsEc2LaunchTemplateDataDetails(_, context),
    LaunchTemplateName: [],
  });
};

// se_AwsEc2NetworkAclAssociation omitted.

// se_AwsEc2NetworkAclAssociationList omitted.

// se_AwsEc2NetworkAclDetails omitted.

// se_AwsEc2NetworkAclEntry omitted.

// se_AwsEc2NetworkAclEntryList omitted.

// se_AwsEc2NetworkInterfaceAttachment omitted.

// se_AwsEc2NetworkInterfaceDetails omitted.

// se_AwsEc2NetworkInterfaceIpV6AddressDetail omitted.

// se_AwsEc2NetworkInterfaceIpV6AddressList omitted.

// se_AwsEc2NetworkInterfacePrivateIpAddressDetail omitted.

// se_AwsEc2NetworkInterfacePrivateIpAddressList omitted.

// se_AwsEc2NetworkInterfaceSecurityGroup omitted.

// se_AwsEc2NetworkInterfaceSecurityGroupList omitted.

// se_AwsEc2RouteTableDetails omitted.

// se_AwsEc2SecurityGroupDetails omitted.

// se_AwsEc2SecurityGroupIpPermission omitted.

// se_AwsEc2SecurityGroupIpPermissionList omitted.

// se_AwsEc2SecurityGroupIpRange omitted.

// se_AwsEc2SecurityGroupIpRangeList omitted.

// se_AwsEc2SecurityGroupIpv6Range omitted.

// se_AwsEc2SecurityGroupIpv6RangeList omitted.

// se_AwsEc2SecurityGroupPrefixListId omitted.

// se_AwsEc2SecurityGroupPrefixListIdList omitted.

// se_AwsEc2SecurityGroupUserIdGroupPair omitted.

// se_AwsEc2SecurityGroupUserIdGroupPairList omitted.

// se_AwsEc2SubnetDetails omitted.

// se_AwsEc2TransitGatewayDetails omitted.

// se_AwsEc2VolumeAttachment omitted.

// se_AwsEc2VolumeAttachmentList omitted.

// se_AwsEc2VolumeDetails omitted.

// se_AwsEc2VpcDetails omitted.

// se_AwsEc2VpcEndpointServiceDetails omitted.

// se_AwsEc2VpcEndpointServiceServiceTypeDetails omitted.

// se_AwsEc2VpcEndpointServiceServiceTypeList omitted.

// se_AwsEc2VpcPeeringConnectionDetails omitted.

// se_AwsEc2VpcPeeringConnectionStatusDetails omitted.

// se_AwsEc2VpcPeeringConnectionVpcInfoDetails omitted.

// se_AwsEc2VpnConnectionDetails omitted.

// se_AwsEc2VpnConnectionOptionsDetails omitted.

// se_AwsEc2VpnConnectionOptionsTunnelOptionsDetails omitted.

// se_AwsEc2VpnConnectionOptionsTunnelOptionsList omitted.

// se_AwsEc2VpnConnectionRoutesDetails omitted.

// se_AwsEc2VpnConnectionRoutesList omitted.

// se_AwsEc2VpnConnectionVgwTelemetryDetails omitted.

// se_AwsEc2VpnConnectionVgwTelemetryList omitted.

// se_AwsEcrContainerImageDetails omitted.

// se_AwsEcrRepositoryDetails omitted.

// se_AwsEcrRepositoryImageScanningConfigurationDetails omitted.

// se_AwsEcrRepositoryLifecyclePolicyDetails omitted.

// se_AwsEcsClusterClusterSettingsDetails omitted.

// se_AwsEcsClusterClusterSettingsList omitted.

// se_AwsEcsClusterConfigurationDetails omitted.

// se_AwsEcsClusterConfigurationExecuteCommandConfigurationDetails omitted.

// se_AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails omitted.

// se_AwsEcsClusterDefaultCapacityProviderStrategyDetails omitted.

// se_AwsEcsClusterDefaultCapacityProviderStrategyList omitted.

// se_AwsEcsClusterDetails omitted.

// se_AwsEcsContainerDetails omitted.

// se_AwsEcsContainerDetailsList omitted.

// se_AwsEcsServiceCapacityProviderStrategyDetails omitted.

// se_AwsEcsServiceCapacityProviderStrategyList omitted.

// se_AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails omitted.

// se_AwsEcsServiceDeploymentConfigurationDetails omitted.

// se_AwsEcsServiceDeploymentControllerDetails omitted.

// se_AwsEcsServiceDetails omitted.

// se_AwsEcsServiceLoadBalancersDetails omitted.

// se_AwsEcsServiceLoadBalancersList omitted.

// se_AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails omitted.

// se_AwsEcsServiceNetworkConfigurationDetails omitted.

// se_AwsEcsServicePlacementConstraintsDetails omitted.

// se_AwsEcsServicePlacementConstraintsList omitted.

// se_AwsEcsServicePlacementStrategiesDetails omitted.

// se_AwsEcsServicePlacementStrategiesList omitted.

// se_AwsEcsServiceServiceRegistriesDetails omitted.

// se_AwsEcsServiceServiceRegistriesList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsDependsOnList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsMountPointsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsSecretsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsUlimitsList omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails omitted.

// se_AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList omitted.

// se_AwsEcsTaskDefinitionDetails omitted.

// se_AwsEcsTaskDefinitionInferenceAcceleratorsDetails omitted.

// se_AwsEcsTaskDefinitionInferenceAcceleratorsList omitted.

// se_AwsEcsTaskDefinitionPlacementConstraintsDetails omitted.

// se_AwsEcsTaskDefinitionPlacementConstraintsList omitted.

// se_AwsEcsTaskDefinitionProxyConfigurationDetails omitted.

// se_AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails omitted.

// se_AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList omitted.

// se_AwsEcsTaskDefinitionVolumesDetails omitted.

// se_AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails omitted.

// se_AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails omitted.

// se_AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails omitted.

// se_AwsEcsTaskDefinitionVolumesHostDetails omitted.

// se_AwsEcsTaskDefinitionVolumesList omitted.

// se_AwsEcsTaskDetails omitted.

// se_AwsEcsTaskVolumeDetails omitted.

// se_AwsEcsTaskVolumeDetailsList omitted.

// se_AwsEcsTaskVolumeHostDetails omitted.

// se_AwsEfsAccessPointDetails omitted.

// se_AwsEfsAccessPointPosixUserDetails omitted.

// se_AwsEfsAccessPointRootDirectoryCreationInfoDetails omitted.

// se_AwsEfsAccessPointRootDirectoryDetails omitted.

// se_AwsEksClusterDetails omitted.

// se_AwsEksClusterLoggingClusterLoggingDetails omitted.

// se_AwsEksClusterLoggingClusterLoggingList omitted.

// se_AwsEksClusterLoggingDetails omitted.

// se_AwsEksClusterResourcesVpcConfigDetails omitted.

// se_AwsElasticBeanstalkEnvironmentDetails omitted.

// se_AwsElasticBeanstalkEnvironmentEnvironmentLink omitted.

// se_AwsElasticBeanstalkEnvironmentEnvironmentLinks omitted.

// se_AwsElasticBeanstalkEnvironmentOptionSetting omitted.

// se_AwsElasticBeanstalkEnvironmentOptionSettings omitted.

// se_AwsElasticBeanstalkEnvironmentTier omitted.

// se_AwsElasticsearchDomainDetails omitted.

// se_AwsElasticsearchDomainDomainEndpointOptions omitted.

// se_AwsElasticsearchDomainElasticsearchClusterConfigDetails omitted.

// se_AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails omitted.

// se_AwsElasticsearchDomainEncryptionAtRestOptions omitted.

// se_AwsElasticsearchDomainLogPublishingOptions omitted.

// se_AwsElasticsearchDomainLogPublishingOptionsLogConfig omitted.

// se_AwsElasticsearchDomainNodeToNodeEncryptionOptions omitted.

// se_AwsElasticsearchDomainServiceSoftwareOptions omitted.

// se_AwsElasticsearchDomainVPCOptions omitted.

// se_AwsElbAppCookieStickinessPolicies omitted.

// se_AwsElbAppCookieStickinessPolicy omitted.

// se_AwsElbLbCookieStickinessPolicies omitted.

// se_AwsElbLbCookieStickinessPolicy omitted.

// se_AwsElbLoadBalancerAccessLog omitted.

// se_AwsElbLoadBalancerAdditionalAttribute omitted.

// se_AwsElbLoadBalancerAdditionalAttributeList omitted.

// se_AwsElbLoadBalancerAttributes omitted.

// se_AwsElbLoadBalancerBackendServerDescription omitted.

// se_AwsElbLoadBalancerBackendServerDescriptions omitted.

// se_AwsElbLoadBalancerConnectionDraining omitted.

// se_AwsElbLoadBalancerConnectionSettings omitted.

// se_AwsElbLoadBalancerCrossZoneLoadBalancing omitted.

// se_AwsElbLoadBalancerDetails omitted.

// se_AwsElbLoadBalancerHealthCheck omitted.

// se_AwsElbLoadBalancerInstance omitted.

// se_AwsElbLoadBalancerInstances omitted.

// se_AwsElbLoadBalancerListener omitted.

// se_AwsElbLoadBalancerListenerDescription omitted.

// se_AwsElbLoadBalancerListenerDescriptions omitted.

// se_AwsElbLoadBalancerPolicies omitted.

// se_AwsElbLoadBalancerSourceSecurityGroup omitted.

// se_AwsElbv2LoadBalancerAttribute omitted.

// se_AwsElbv2LoadBalancerAttributes omitted.

// se_AwsElbv2LoadBalancerDetails omitted.

// se_AwsEventSchemasRegistryDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesCloudTrailDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesDnsLogsDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesFlowLogsDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesKubernetesDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails omitted.

// se_AwsGuardDutyDetectorDataSourcesS3LogsDetails omitted.

// se_AwsGuardDutyDetectorDetails omitted.

// se_AwsGuardDutyDetectorFeaturesDetails omitted.

// se_AwsGuardDutyDetectorFeaturesList omitted.

// se_AwsIamAccessKeyDetails omitted.

// se_AwsIamAccessKeySessionContext omitted.

// se_AwsIamAccessKeySessionContextAttributes omitted.

// se_AwsIamAccessKeySessionContextSessionIssuer omitted.

// se_AwsIamAttachedManagedPolicy omitted.

// se_AwsIamAttachedManagedPolicyList omitted.

// se_AwsIamGroupDetails omitted.

// se_AwsIamGroupPolicy omitted.

// se_AwsIamGroupPolicyList omitted.

// se_AwsIamInstanceProfile omitted.

// se_AwsIamInstanceProfileList omitted.

// se_AwsIamInstanceProfileRole omitted.

// se_AwsIamInstanceProfileRoles omitted.

// se_AwsIamPermissionsBoundary omitted.

// se_AwsIamPolicyDetails omitted.

// se_AwsIamPolicyVersion omitted.

// se_AwsIamPolicyVersionList omitted.

// se_AwsIamRoleDetails omitted.

// se_AwsIamRolePolicy omitted.

// se_AwsIamRolePolicyList omitted.

// se_AwsIamUserDetails omitted.

// se_AwsIamUserPolicy omitted.

// se_AwsIamUserPolicyList omitted.

// se_AwsKinesisStreamDetails omitted.

// se_AwsKinesisStreamStreamEncryptionDetails omitted.

/**
 * serializeAws_restJson1AwsKmsKeyDetails
 */
const se_AwsKmsKeyDetails = (input: AwsKmsKeyDetails, context: __SerdeContext): any => {
  return take(input, {
    AWSAccountId: [],
    CreationDate: __serializeFloat,
    Description: [],
    KeyId: [],
    KeyManager: [],
    KeyRotationStatus: [],
    KeyState: [],
    Origin: [],
  });
};

// se_AwsLambdaFunctionCode omitted.

// se_AwsLambdaFunctionDeadLetterConfig omitted.

// se_AwsLambdaFunctionDetails omitted.

// se_AwsLambdaFunctionEnvironment omitted.

// se_AwsLambdaFunctionEnvironmentError omitted.

// se_AwsLambdaFunctionLayer omitted.

// se_AwsLambdaFunctionLayerList omitted.

// se_AwsLambdaFunctionTracingConfig omitted.

// se_AwsLambdaFunctionVpcConfig omitted.

// se_AwsLambdaLayerVersionDetails omitted.

// se_AwsMountPoint omitted.

// se_AwsMountPointList omitted.

// se_AwsNetworkFirewallFirewallDetails omitted.

// se_AwsNetworkFirewallFirewallPolicyDetails omitted.

// se_AwsNetworkFirewallFirewallSubnetMappingsDetails omitted.

// se_AwsNetworkFirewallFirewallSubnetMappingsList omitted.

/**
 * serializeAws_restJson1AwsNetworkFirewallRuleGroupDetails
 */
const se_AwsNetworkFirewallRuleGroupDetails = (
  input: AwsNetworkFirewallRuleGroupDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    Capacity: [],
    Description: [],
    RuleGroup: _json,
    RuleGroupArn: [],
    RuleGroupId: [],
    RuleGroupName: [],
    Type: [],
  });
};

// se_AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainClusterConfigDetails omitted.

// se_AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails omitted.

// se_AwsOpenSearchServiceDomainDetails omitted.

// se_AwsOpenSearchServiceDomainDomainEndpointOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainLogPublishingOption omitted.

// se_AwsOpenSearchServiceDomainLogPublishingOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainMasterUserOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails omitted.

// se_AwsOpenSearchServiceDomainVpcOptionsDetails omitted.

// se_AwsRdsDbClusterAssociatedRole omitted.

// se_AwsRdsDbClusterAssociatedRoles omitted.

// se_AwsRdsDbClusterDetails omitted.

// se_AwsRdsDbClusterMember omitted.

// se_AwsRdsDbClusterMembers omitted.

// se_AwsRdsDbClusterOptionGroupMembership omitted.

// se_AwsRdsDbClusterOptionGroupMemberships omitted.

// se_AwsRdsDbClusterSnapshotDetails omitted.

// se_AwsRdsDbDomainMembership omitted.

// se_AwsRdsDbDomainMemberships omitted.

// se_AwsRdsDbInstanceAssociatedRole omitted.

// se_AwsRdsDbInstanceAssociatedRoles omitted.

// se_AwsRdsDbInstanceDetails omitted.

// se_AwsRdsDbInstanceEndpoint omitted.

// se_AwsRdsDbInstanceVpcSecurityGroup omitted.

// se_AwsRdsDbInstanceVpcSecurityGroups omitted.

// se_AwsRdsDbOptionGroupMembership omitted.

// se_AwsRdsDbOptionGroupMemberships omitted.

// se_AwsRdsDbParameterGroup omitted.

// se_AwsRdsDbParameterGroups omitted.

// se_AwsRdsDbPendingModifiedValues omitted.

// se_AwsRdsDbProcessorFeature omitted.

// se_AwsRdsDbProcessorFeatures omitted.

// se_AwsRdsDbSecurityGroupDetails omitted.

// se_AwsRdsDbSecurityGroupEc2SecurityGroup omitted.

// se_AwsRdsDbSecurityGroupEc2SecurityGroups omitted.

// se_AwsRdsDbSecurityGroupIpRange omitted.

// se_AwsRdsDbSecurityGroupIpRanges omitted.

// se_AwsRdsDbSnapshotDetails omitted.

// se_AwsRdsDbStatusInfo omitted.

// se_AwsRdsDbStatusInfos omitted.

// se_AwsRdsDbSubnetGroup omitted.

// se_AwsRdsDbSubnetGroupSubnet omitted.

// se_AwsRdsDbSubnetGroupSubnetAvailabilityZone omitted.

// se_AwsRdsDbSubnetGroupSubnets omitted.

// se_AwsRdsEventSubscriptionDetails omitted.

// se_AwsRdsPendingCloudWatchLogsExports omitted.

// se_AwsRedshiftClusterClusterNode omitted.

// se_AwsRedshiftClusterClusterNodes omitted.

// se_AwsRedshiftClusterClusterParameterGroup omitted.

// se_AwsRedshiftClusterClusterParameterGroups omitted.

// se_AwsRedshiftClusterClusterParameterStatus omitted.

// se_AwsRedshiftClusterClusterParameterStatusList omitted.

// se_AwsRedshiftClusterClusterSecurityGroup omitted.

// se_AwsRedshiftClusterClusterSecurityGroups omitted.

// se_AwsRedshiftClusterClusterSnapshotCopyStatus omitted.

// se_AwsRedshiftClusterDeferredMaintenanceWindow omitted.

// se_AwsRedshiftClusterDeferredMaintenanceWindows omitted.

/**
 * serializeAws_restJson1AwsRedshiftClusterDetails
 */
const se_AwsRedshiftClusterDetails = (input: AwsRedshiftClusterDetails, context: __SerdeContext): any => {
  return take(input, {
    AllowVersionUpgrade: [],
    AutomatedSnapshotRetentionPeriod: [],
    AvailabilityZone: [],
    ClusterAvailabilityStatus: [],
    ClusterCreateTime: [],
    ClusterIdentifier: [],
    ClusterNodes: _json,
    ClusterParameterGroups: _json,
    ClusterPublicKey: [],
    ClusterRevisionNumber: [],
    ClusterSecurityGroups: _json,
    ClusterSnapshotCopyStatus: _json,
    ClusterStatus: [],
    ClusterSubnetGroupName: [],
    ClusterVersion: [],
    DBName: [],
    DeferredMaintenanceWindows: _json,
    ElasticIpStatus: _json,
    ElasticResizeNumberOfNodeOptions: [],
    Encrypted: [],
    Endpoint: _json,
    EnhancedVpcRouting: [],
    ExpectedNextSnapshotScheduleTime: [],
    ExpectedNextSnapshotScheduleTimeStatus: [],
    HsmStatus: _json,
    IamRoles: _json,
    KmsKeyId: [],
    LoggingStatus: _json,
    MaintenanceTrackName: [],
    ManualSnapshotRetentionPeriod: [],
    MasterUsername: [],
    NextMaintenanceWindowStartTime: [],
    NodeType: [],
    NumberOfNodes: [],
    PendingActions: _json,
    PendingModifiedValues: _json,
    PreferredMaintenanceWindow: [],
    PubliclyAccessible: [],
    ResizeInfo: _json,
    RestoreStatus: (_) => se_AwsRedshiftClusterRestoreStatus(_, context),
    SnapshotScheduleIdentifier: [],
    SnapshotScheduleState: [],
    VpcId: [],
    VpcSecurityGroups: _json,
  });
};

// se_AwsRedshiftClusterElasticIpStatus omitted.

// se_AwsRedshiftClusterEndpoint omitted.

// se_AwsRedshiftClusterHsmStatus omitted.

// se_AwsRedshiftClusterIamRole omitted.

// se_AwsRedshiftClusterIamRoles omitted.

// se_AwsRedshiftClusterLoggingStatus omitted.

// se_AwsRedshiftClusterPendingModifiedValues omitted.

// se_AwsRedshiftClusterResizeInfo omitted.

/**
 * serializeAws_restJson1AwsRedshiftClusterRestoreStatus
 */
const se_AwsRedshiftClusterRestoreStatus = (input: AwsRedshiftClusterRestoreStatus, context: __SerdeContext): any => {
  return take(input, {
    CurrentRestoreRateInMegaBytesPerSecond: __serializeFloat,
    ElapsedTimeInSeconds: [],
    EstimatedTimeToCompletionInSeconds: [],
    ProgressInMegaBytes: [],
    SnapshotSizeInMegaBytes: [],
    Status: [],
  });
};

// se_AwsRedshiftClusterVpcSecurityGroup omitted.

// se_AwsRedshiftClusterVpcSecurityGroups omitted.

// se_AwsS3AccountPublicAccessBlockDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesList omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails omitted.

// se_AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList omitted.

// se_AwsS3BucketBucketVersioningConfiguration omitted.

// se_AwsS3BucketDetails omitted.

// se_AwsS3BucketLoggingConfiguration omitted.

// se_AwsS3BucketNotificationConfiguration omitted.

// se_AwsS3BucketNotificationConfigurationDetail omitted.

// se_AwsS3BucketNotificationConfigurationDetails omitted.

// se_AwsS3BucketNotificationConfigurationEvents omitted.

// se_AwsS3BucketNotificationConfigurationFilter omitted.

// se_AwsS3BucketNotificationConfigurationS3KeyFilter omitted.

// se_AwsS3BucketNotificationConfigurationS3KeyFilterRule omitted.

// se_AwsS3BucketNotificationConfigurationS3KeyFilterRules omitted.

// se_AwsS3BucketObjectLockConfiguration omitted.

// se_AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails omitted.

// se_AwsS3BucketObjectLockConfigurationRuleDetails omitted.

// se_AwsS3BucketServerSideEncryptionByDefault omitted.

// se_AwsS3BucketServerSideEncryptionConfiguration omitted.

// se_AwsS3BucketServerSideEncryptionRule omitted.

// se_AwsS3BucketServerSideEncryptionRules omitted.

// se_AwsS3BucketWebsiteConfiguration omitted.

// se_AwsS3BucketWebsiteConfigurationRedirectTo omitted.

// se_AwsS3BucketWebsiteConfigurationRoutingRule omitted.

// se_AwsS3BucketWebsiteConfigurationRoutingRuleCondition omitted.

// se_AwsS3BucketWebsiteConfigurationRoutingRuleRedirect omitted.

// se_AwsS3BucketWebsiteConfigurationRoutingRules omitted.

// se_AwsS3ObjectDetails omitted.

// se_AwsSageMakerNotebookInstanceDetails omitted.

// se_AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails omitted.

// se_AwsSecretsManagerSecretDetails omitted.

// se_AwsSecretsManagerSecretRotationRules omitted.

/**
 * serializeAws_restJson1AwsSecurityFinding
 */
const se_AwsSecurityFinding = (input: AwsSecurityFinding, context: __SerdeContext): any => {
  return take(input, {
    Action: (_) => se_Action(_, context),
    AwsAccountId: [],
    CompanyName: [],
    Compliance: _json,
    Confidence: [],
    CreatedAt: [],
    Criticality: [],
    Description: [],
    FindingProviderFields: _json,
    FirstObservedAt: [],
    GeneratorId: [],
    Id: [],
    LastObservedAt: [],
    Malware: _json,
    Network: _json,
    NetworkPath: _json,
    Note: _json,
    PatchSummary: _json,
    Process: _json,
    ProductArn: [],
    ProductFields: _json,
    ProductName: [],
    RecordState: [],
    Region: [],
    RelatedFindings: _json,
    Remediation: _json,
    Resources: (_) => se_ResourceList(_, context),
    Sample: [],
    SchemaVersion: [],
    Severity: (_) => se_Severity(_, context),
    SourceUrl: [],
    ThreatIntelIndicators: _json,
    Threats: _json,
    Title: [],
    Types: _json,
    UpdatedAt: [],
    UserDefinedFields: _json,
    VerificationState: [],
    Vulnerabilities: (_) => se_VulnerabilityList(_, context),
    Workflow: _json,
    WorkflowState: [],
  });
};

/**
 * serializeAws_restJson1AwsSecurityFindingFilters
 */
const se_AwsSecurityFindingFilters = (input: AwsSecurityFindingFilters, context: __SerdeContext): any => {
  return take(input, {
    AwsAccountId: _json,
    CompanyName: _json,
    ComplianceAssociatedStandardsId: _json,
    ComplianceSecurityControlId: _json,
    ComplianceStatus: _json,
    Confidence: (_) => se_NumberFilterList(_, context),
    CreatedAt: _json,
    Criticality: (_) => se_NumberFilterList(_, context),
    Description: _json,
    FindingProviderFieldsConfidence: (_) => se_NumberFilterList(_, context),
    FindingProviderFieldsCriticality: (_) => se_NumberFilterList(_, context),
    FindingProviderFieldsRelatedFindingsId: _json,
    FindingProviderFieldsRelatedFindingsProductArn: _json,
    FindingProviderFieldsSeverityLabel: _json,
    FindingProviderFieldsSeverityOriginal: _json,
    FindingProviderFieldsTypes: _json,
    FirstObservedAt: _json,
    GeneratorId: _json,
    Id: _json,
    Keyword: _json,
    LastObservedAt: _json,
    MalwareName: _json,
    MalwarePath: _json,
    MalwareState: _json,
    MalwareType: _json,
    NetworkDestinationDomain: _json,
    NetworkDestinationIpV4: _json,
    NetworkDestinationIpV6: _json,
    NetworkDestinationPort: (_) => se_NumberFilterList(_, context),
    NetworkDirection: _json,
    NetworkProtocol: _json,
    NetworkSourceDomain: _json,
    NetworkSourceIpV4: _json,
    NetworkSourceIpV6: _json,
    NetworkSourceMac: _json,
    NetworkSourcePort: (_) => se_NumberFilterList(_, context),
    NoteText: _json,
    NoteUpdatedAt: _json,
    NoteUpdatedBy: _json,
    ProcessLaunchedAt: _json,
    ProcessName: _json,
    ProcessParentPid: (_) => se_NumberFilterList(_, context),
    ProcessPath: _json,
    ProcessPid: (_) => se_NumberFilterList(_, context),
    ProcessTerminatedAt: _json,
    ProductArn: _json,
    ProductFields: _json,
    ProductName: _json,
    RecommendationText: _json,
    RecordState: _json,
    Region: _json,
    RelatedFindingsId: _json,
    RelatedFindingsProductArn: _json,
    ResourceAwsEc2InstanceIamInstanceProfileArn: _json,
    ResourceAwsEc2InstanceImageId: _json,
    ResourceAwsEc2InstanceIpV4Addresses: _json,
    ResourceAwsEc2InstanceIpV6Addresses: _json,
    ResourceAwsEc2InstanceKeyName: _json,
    ResourceAwsEc2InstanceLaunchedAt: _json,
    ResourceAwsEc2InstanceSubnetId: _json,
    ResourceAwsEc2InstanceType: _json,
    ResourceAwsEc2InstanceVpcId: _json,
    ResourceAwsIamAccessKeyCreatedAt: _json,
    ResourceAwsIamAccessKeyPrincipalName: _json,
    ResourceAwsIamAccessKeyStatus: _json,
    ResourceAwsIamAccessKeyUserName: _json,
    ResourceAwsIamUserUserName: _json,
    ResourceAwsS3BucketOwnerId: _json,
    ResourceAwsS3BucketOwnerName: _json,
    ResourceContainerImageId: _json,
    ResourceContainerImageName: _json,
    ResourceContainerLaunchedAt: _json,
    ResourceContainerName: _json,
    ResourceDetailsOther: _json,
    ResourceId: _json,
    ResourcePartition: _json,
    ResourceRegion: _json,
    ResourceTags: _json,
    ResourceType: _json,
    Sample: _json,
    SeverityLabel: _json,
    SeverityNormalized: (_) => se_NumberFilterList(_, context),
    SeverityProduct: (_) => se_NumberFilterList(_, context),
    SourceUrl: _json,
    ThreatIntelIndicatorCategory: _json,
    ThreatIntelIndicatorLastObservedAt: _json,
    ThreatIntelIndicatorSource: _json,
    ThreatIntelIndicatorSourceUrl: _json,
    ThreatIntelIndicatorType: _json,
    ThreatIntelIndicatorValue: _json,
    Title: _json,
    Type: _json,
    UpdatedAt: _json,
    UserDefinedFields: _json,
    VerificationState: _json,
    WorkflowState: _json,
    WorkflowStatus: _json,
  });
};

// se_AwsSecurityFindingIdentifier omitted.

// se_AwsSecurityFindingIdentifierList omitted.

// se_AwsSnsTopicDetails omitted.

// se_AwsSnsTopicSubscription omitted.

// se_AwsSnsTopicSubscriptionList omitted.

// se_AwsSqsQueueDetails omitted.

// se_AwsSsmComplianceSummary omitted.

// se_AwsSsmPatch omitted.

// se_AwsSsmPatchComplianceDetails omitted.

// se_AwsStepFunctionStateMachineDetails omitted.

// se_AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails omitted.

// se_AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails omitted.

// se_AwsStepFunctionStateMachineLoggingConfigurationDestinationsList omitted.

// se_AwsStepFunctionStateMachineLoggingConfigurationDetails omitted.

// se_AwsStepFunctionStateMachineTracingConfigurationDetails omitted.

// se_AwsWafRateBasedRuleDetails omitted.

// se_AwsWafRateBasedRuleMatchPredicate omitted.

// se_AwsWafRateBasedRuleMatchPredicateList omitted.

// se_AwsWafRegionalRateBasedRuleDetails omitted.

// se_AwsWafRegionalRateBasedRuleMatchPredicate omitted.

// se_AwsWafRegionalRateBasedRuleMatchPredicateList omitted.

// se_AwsWafRegionalRuleDetails omitted.

// se_AwsWafRegionalRuleGroupDetails omitted.

// se_AwsWafRegionalRuleGroupRulesActionDetails omitted.

// se_AwsWafRegionalRuleGroupRulesDetails omitted.

// se_AwsWafRegionalRuleGroupRulesList omitted.

// se_AwsWafRegionalRulePredicateList omitted.

// se_AwsWafRegionalRulePredicateListDetails omitted.

// se_AwsWafRegionalWebAclDetails omitted.

// se_AwsWafRegionalWebAclRulesList omitted.

// se_AwsWafRegionalWebAclRulesListActionDetails omitted.

// se_AwsWafRegionalWebAclRulesListDetails omitted.

// se_AwsWafRegionalWebAclRulesListOverrideActionDetails omitted.

// se_AwsWafRuleDetails omitted.

// se_AwsWafRuleGroupDetails omitted.

// se_AwsWafRuleGroupRulesActionDetails omitted.

// se_AwsWafRuleGroupRulesDetails omitted.

// se_AwsWafRuleGroupRulesList omitted.

// se_AwsWafRulePredicateList omitted.

// se_AwsWafRulePredicateListDetails omitted.

// se_AwsWafv2ActionAllowDetails omitted.

// se_AwsWafv2ActionBlockDetails omitted.

// se_AwsWafv2CustomHttpHeader omitted.

// se_AwsWafv2CustomRequestHandlingDetails omitted.

// se_AwsWafv2CustomResponseDetails omitted.

// se_AwsWafv2InsertHeadersList omitted.

// se_AwsWafv2RuleGroupDetails omitted.

// se_AwsWafv2RulesActionCaptchaDetails omitted.

// se_AwsWafv2RulesActionCountDetails omitted.

// se_AwsWafv2RulesActionDetails omitted.

// se_AwsWafv2RulesDetails omitted.

// se_AwsWafv2RulesList omitted.

// se_AwsWafv2VisibilityConfigDetails omitted.

// se_AwsWafv2WebAclActionDetails omitted.

// se_AwsWafv2WebAclCaptchaConfigDetails omitted.

// se_AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails omitted.

// se_AwsWafv2WebAclDetails omitted.

// se_AwsWafWebAclDetails omitted.

// se_AwsWafWebAclRule omitted.

// se_AwsWafWebAclRuleList omitted.

// se_AwsXrayEncryptionConfigDetails omitted.

/**
 * serializeAws_restJson1BatchImportFindingsRequestFindingList
 */
const se_BatchImportFindingsRequestFindingList = (input: AwsSecurityFinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AwsSecurityFinding(entry, context);
    });
};

// se_BooleanFilter omitted.

// se_BooleanFilterList omitted.

// se_Cell omitted.

// se_Cells omitted.

// se_CidrBlockAssociation omitted.

// se_CidrBlockAssociationList omitted.

// se_City omitted.

// se_ClassificationResult omitted.

// se_ClassificationStatus omitted.

// se_Compliance omitted.

// se_ContainerDetails omitted.

// se_Country omitted.

// se_CustomDataIdentifiersDetections omitted.

// se_CustomDataIdentifiersDetectionsList omitted.

// se_CustomDataIdentifiersResult omitted.

/**
 * serializeAws_restJson1Cvss
 */
const se_Cvss = (input: Cvss, context: __SerdeContext): any => {
  return take(input, {
    Adjustments: _json,
    BaseScore: __serializeFloat,
    BaseVector: [],
    Source: [],
    Version: [],
  });
};

/**
 * serializeAws_restJson1CvssList
 */
const se_CvssList = (input: Cvss[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Cvss(entry, context);
    });
};

// se_DataClassificationDetails omitted.

// se_DateFilter omitted.

// se_DateFilterList omitted.

// se_DateRange omitted.

// se_DnsRequestAction omitted.

// se_FieldMap omitted.

// se_FilePathList omitted.

// se_FilePaths omitted.

// se_FindingProviderFields omitted.

// se_FindingProviderSeverity omitted.

// se_FirewallPolicyDetails omitted.

// se_FirewallPolicyStatefulRuleGroupReferencesDetails omitted.

// se_FirewallPolicyStatefulRuleGroupReferencesList omitted.

// se_FirewallPolicyStatelessCustomActionsDetails omitted.

// se_FirewallPolicyStatelessCustomActionsList omitted.

// se_FirewallPolicyStatelessRuleGroupReferencesDetails omitted.

// se_FirewallPolicyStatelessRuleGroupReferencesList omitted.

/**
 * serializeAws_restJson1GeoLocation
 */
const se_GeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
  return take(input, {
    Lat: __serializeFloat,
    Lon: __serializeFloat,
  });
};

// se_IcmpTypeCode omitted.

// se_IntegerList omitted.

// se_IpFilter omitted.

// se_IpFilterList omitted.

// se_IpOrganizationDetails omitted.

// se_Ipv6CidrBlockAssociation omitted.

// se_Ipv6CidrBlockAssociationList omitted.

// se_KeywordFilter omitted.

// se_KeywordFilterList omitted.

// se_LoadBalancerState omitted.

// se_Malware omitted.

// se_MalwareList omitted.

// se_MapFilter omitted.

// se_MapFilterList omitted.

// se_Network omitted.

/**
 * serializeAws_restJson1NetworkConnectionAction
 */
const se_NetworkConnectionAction = (input: NetworkConnectionAction, context: __SerdeContext): any => {
  return take(input, {
    Blocked: [],
    ConnectionDirection: [],
    LocalPortDetails: _json,
    Protocol: [],
    RemoteIpDetails: (_) => se_ActionRemoteIpDetails(_, context),
    RemotePortDetails: _json,
  });
};

// se_NetworkHeader omitted.

// se_NetworkPathComponent omitted.

// se_NetworkPathComponentDetails omitted.

// se_NetworkPathList omitted.

// se_NonEmptyStringList omitted.

// se_Note omitted.

// se_NoteUpdate omitted.

/**
 * serializeAws_restJson1NumberFilter
 */
const se_NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return take(input, {
    Eq: __serializeFloat,
    Gte: __serializeFloat,
    Lte: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1NumberFilterList
 */
const se_NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NumberFilter(entry, context);
    });
};

// se_Occurrences omitted.

// se_Page omitted.

// se_Pages omitted.

// se_PatchSummary omitted.

/**
 * serializeAws_restJson1PortProbeAction
 */
const se_PortProbeAction = (input: PortProbeAction, context: __SerdeContext): any => {
  return take(input, {
    Blocked: [],
    PortProbeDetails: (_) => se_PortProbeDetailList(_, context),
  });
};

/**
 * serializeAws_restJson1PortProbeDetail
 */
const se_PortProbeDetail = (input: PortProbeDetail, context: __SerdeContext): any => {
  return take(input, {
    LocalIpDetails: _json,
    LocalPortDetails: _json,
    RemoteIpDetails: (_) => se_ActionRemoteIpDetails(_, context),
  });
};

/**
 * serializeAws_restJson1PortProbeDetailList
 */
const se_PortProbeDetailList = (input: PortProbeDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortProbeDetail(entry, context);
    });
};

// se_PortRange omitted.

// se_PortRangeFromTo omitted.

// se_PortRangeList omitted.

// se_ProcessDetails omitted.

// se_PropagatingVgwSetDetails omitted.

// se_PropagatingVgwSetList omitted.

// se_Range omitted.

// se_Ranges omitted.

// se_Recommendation omitted.

// se__Record omitted.

// se_Records omitted.

// se_RelatedFinding omitted.

// se_RelatedFindingList omitted.

// se_RelatedRequirementsList omitted.

// se_Remediation omitted.

/**
 * serializeAws_restJson1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return take(input, {
    DataClassification: _json,
    Details: (_) => se_ResourceDetails(_, context),
    Id: [],
    Partition: [],
    Region: [],
    ResourceRole: [],
    Tags: _json,
    Type: [],
  });
};

/**
 * serializeAws_restJson1ResourceDetails
 */
const se_ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return take(input, {
    AwsAmazonMqBroker: _json,
    AwsApiGatewayRestApi: _json,
    AwsApiGatewayStage: (_) => se_AwsApiGatewayStageDetails(_, context),
    AwsApiGatewayV2Api: _json,
    AwsApiGatewayV2Stage: (_) => se_AwsApiGatewayV2StageDetails(_, context),
    AwsAppSyncGraphQlApi: _json,
    AwsAutoScalingAutoScalingGroup: _json,
    AwsAutoScalingLaunchConfiguration: _json,
    AwsBackupBackupPlan: _json,
    AwsBackupBackupVault: _json,
    AwsBackupRecoveryPoint: _json,
    AwsCertificateManagerCertificate: _json,
    AwsCloudFormationStack: _json,
    AwsCloudFrontDistribution: _json,
    AwsCloudTrailTrail: _json,
    AwsCloudWatchAlarm: (_) => se_AwsCloudWatchAlarmDetails(_, context),
    AwsCodeBuildProject: _json,
    AwsDynamoDbTable: _json,
    AwsEc2Eip: _json,
    AwsEc2Instance: _json,
    AwsEc2LaunchTemplate: (_) => se_AwsEc2LaunchTemplateDetails(_, context),
    AwsEc2NetworkAcl: _json,
    AwsEc2NetworkInterface: _json,
    AwsEc2RouteTable: _json,
    AwsEc2SecurityGroup: _json,
    AwsEc2Subnet: _json,
    AwsEc2TransitGateway: _json,
    AwsEc2Volume: _json,
    AwsEc2Vpc: _json,
    AwsEc2VpcEndpointService: _json,
    AwsEc2VpcPeeringConnection: _json,
    AwsEc2VpnConnection: _json,
    AwsEcrContainerImage: _json,
    AwsEcrRepository: _json,
    AwsEcsCluster: _json,
    AwsEcsContainer: _json,
    AwsEcsService: _json,
    AwsEcsTask: _json,
    AwsEcsTaskDefinition: _json,
    AwsEfsAccessPoint: _json,
    AwsEksCluster: _json,
    AwsElasticBeanstalkEnvironment: _json,
    AwsElasticsearchDomain: _json,
    AwsElbLoadBalancer: _json,
    AwsElbv2LoadBalancer: _json,
    AwsEventSchemasRegistry: _json,
    AwsGuardDutyDetector: _json,
    AwsIamAccessKey: _json,
    AwsIamGroup: _json,
    AwsIamPolicy: _json,
    AwsIamRole: _json,
    AwsIamUser: _json,
    AwsKinesisStream: _json,
    AwsKmsKey: (_) => se_AwsKmsKeyDetails(_, context),
    AwsLambdaFunction: _json,
    AwsLambdaLayerVersion: _json,
    AwsNetworkFirewallFirewall: _json,
    AwsNetworkFirewallFirewallPolicy: _json,
    AwsNetworkFirewallRuleGroup: (_) => se_AwsNetworkFirewallRuleGroupDetails(_, context),
    AwsOpenSearchServiceDomain: _json,
    AwsRdsDbCluster: _json,
    AwsRdsDbClusterSnapshot: _json,
    AwsRdsDbInstance: _json,
    AwsRdsDbSecurityGroup: _json,
    AwsRdsDbSnapshot: _json,
    AwsRdsEventSubscription: _json,
    AwsRedshiftCluster: (_) => se_AwsRedshiftClusterDetails(_, context),
    AwsS3AccountPublicAccessBlock: _json,
    AwsS3Bucket: _json,
    AwsS3Object: _json,
    AwsSageMakerNotebookInstance: _json,
    AwsSecretsManagerSecret: _json,
    AwsSnsTopic: _json,
    AwsSqsQueue: _json,
    AwsSsmPatchCompliance: _json,
    AwsStepFunctionStateMachine: _json,
    AwsWafRateBasedRule: _json,
    AwsWafRegionalRateBasedRule: _json,
    AwsWafRegionalRule: _json,
    AwsWafRegionalRuleGroup: _json,
    AwsWafRegionalWebAcl: _json,
    AwsWafRule: _json,
    AwsWafRuleGroup: _json,
    AwsWafWebAcl: _json,
    AwsWafv2RuleGroup: _json,
    AwsWafv2WebAcl: _json,
    AwsXrayEncryptionConfig: _json,
    Container: _json,
    Other: _json,
  });
};

/**
 * serializeAws_restJson1ResourceList
 */
const se_ResourceList = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Resource(entry, context);
    });
};

// se_RouteSetDetails omitted.

// se_RouteSetList omitted.

// se_RuleGroupDetails omitted.

// se_RuleGroupSource omitted.

// se_RuleGroupSourceCustomActionsDetails omitted.

// se_RuleGroupSourceCustomActionsList omitted.

// se_RuleGroupSourceListDetails omitted.

// se_RuleGroupSourceStatefulRulesDetails omitted.

// se_RuleGroupSourceStatefulRulesHeaderDetails omitted.

// se_RuleGroupSourceStatefulRulesList omitted.

// se_RuleGroupSourceStatefulRulesOptionsDetails omitted.

// se_RuleGroupSourceStatefulRulesOptionsList omitted.

// se_RuleGroupSourceStatefulRulesRuleOptionsSettingsList omitted.

// se_RuleGroupSourceStatelessRuleDefinition omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributes omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesDestinations omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesDestinationsList omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesProtocolsList omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesSourcePorts omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesSources omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesSourcesList omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesTcpFlags omitted.

// se_RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList omitted.

// se_RuleGroupSourceStatelessRulesAndCustomActionsDetails omitted.

// se_RuleGroupSourceStatelessRulesDetails omitted.

// se_RuleGroupSourceStatelessRulesList omitted.

// se_RuleGroupVariables omitted.

// se_RuleGroupVariablesIpSetsDetails omitted.

// se_RuleGroupVariablesPortSetsDetails omitted.

// se_SecurityGroups omitted.

// se_SensitiveDataDetections omitted.

// se_SensitiveDataDetectionsList omitted.

// se_SensitiveDataResult omitted.

// se_SensitiveDataResultList omitted.

/**
 * serializeAws_restJson1Severity
 */
const se_Severity = (input: Severity, context: __SerdeContext): any => {
  return take(input, {
    Label: [],
    Normalized: [],
    Original: [],
    Product: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1SeverityUpdate
 */
const se_SeverityUpdate = (input: SeverityUpdate, context: __SerdeContext): any => {
  return take(input, {
    Label: [],
    Normalized: [],
    Product: __serializeFloat,
  });
};

// se_SoftwarePackage omitted.

// se_SoftwarePackageList omitted.

// se_SortCriteria omitted.

// se_SortCriterion omitted.

// se_StandardsControlAssociationId omitted.

// se_StandardsControlAssociationIds omitted.

// se_StandardsControlAssociationUpdate omitted.

// se_StandardsControlAssociationUpdates omitted.

// se_StandardsInputParameterMap omitted.

// se_StandardsSubscriptionArns omitted.

// se_StandardsSubscriptionRequest omitted.

// se_StandardsSubscriptionRequests omitted.

// se_StatelessCustomActionDefinition omitted.

// se_StatelessCustomPublishMetricAction omitted.

// se_StatelessCustomPublishMetricActionDimension omitted.

// se_StatelessCustomPublishMetricActionDimensionsList omitted.

// se_StatusReason omitted.

// se_StatusReasonsList omitted.

// se_StringFilter omitted.

// se_StringFilterList omitted.

// se_StringList omitted.

// se_TagMap omitted.

// se_Threat omitted.

// se_ThreatIntelIndicator omitted.

// se_ThreatIntelIndicatorList omitted.

// se_ThreatList omitted.

// se_TypeList omitted.

/**
 * serializeAws_restJson1UpdateAutomationRulesRequestItem
 */
const se_UpdateAutomationRulesRequestItem = (input: UpdateAutomationRulesRequestItem, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_ActionList(_, context),
    Criteria: (_) => se_AutomationRulesFindingFilters(_, context),
    Description: [],
    IsTerminal: [],
    RuleArn: [],
    RuleName: [],
    RuleOrder: [],
    RuleStatus: [],
  });
};

/**
 * serializeAws_restJson1UpdateAutomationRulesRequestItemsList
 */
const se_UpdateAutomationRulesRequestItemsList = (
  input: UpdateAutomationRulesRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateAutomationRulesRequestItem(entry, context);
    });
};

// se_VolumeMount omitted.

// se_VolumeMountList omitted.

// se_VpcInfoCidrBlockSetDetails omitted.

// se_VpcInfoCidrBlockSetList omitted.

// se_VpcInfoIpv6CidrBlockSetDetails omitted.

// se_VpcInfoIpv6CidrBlockSetList omitted.

// se_VpcInfoPeeringOptionsDetails omitted.

/**
 * serializeAws_restJson1Vulnerability
 */
const se_Vulnerability = (input: Vulnerability, context: __SerdeContext): any => {
  return take(input, {
    Cvss: (_) => se_CvssList(_, context),
    FixAvailable: [],
    Id: [],
    ReferenceUrls: _json,
    RelatedVulnerabilities: _json,
    Vendor: _json,
    VulnerablePackages: _json,
  });
};

/**
 * serializeAws_restJson1VulnerabilityList
 */
const se_VulnerabilityList = (input: Vulnerability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Vulnerability(entry, context);
    });
};

// se_VulnerabilityVendor omitted.

// se_WafAction omitted.

// se_WafExcludedRule omitted.

// se_WafExcludedRuleList omitted.

// se_WafOverrideAction omitted.

// se_Workflow omitted.

// se_WorkflowUpdate omitted.

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return take(output, {
    ActionType: __expectString,
    AwsApiCallAction: (_: any) => de_AwsApiCallAction(_, context),
    DnsRequestAction: _json,
    NetworkConnectionAction: (_: any) => de_NetworkConnectionAction(_, context),
    PortProbeAction: (_: any) => de_PortProbeAction(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): AutomationRulesAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutomationRulesAction(entry, context);
    });
  return retVal;
};

// de_ActionLocalIpDetails omitted.

// de_ActionLocalPortDetails omitted.

/**
 * deserializeAws_restJson1ActionRemoteIpDetails
 */
const de_ActionRemoteIpDetails = (output: any, context: __SerdeContext): ActionRemoteIpDetails => {
  return take(output, {
    City: _json,
    Country: _json,
    GeoLocation: (_: any) => de_GeoLocation(_, context),
    IpAddressV4: __expectString,
    Organization: _json,
  }) as any;
};

// de_ActionRemotePortDetails omitted.

// de_ActionTarget omitted.

// de_ActionTargetList omitted.

// de_Adjustment omitted.

// de_AdjustmentList omitted.

// de_AdminAccount omitted.

// de_AdminAccounts omitted.

// de_AssociatedStandard omitted.

// de_AssociatedStandardsList omitted.

// de_AssociationSetDetails omitted.

// de_AssociationSetList omitted.

// de_AssociationStateDetails omitted.

/**
 * deserializeAws_restJson1AutomationRulesAction
 */
const de_AutomationRulesAction = (output: any, context: __SerdeContext): AutomationRulesAction => {
  return take(output, {
    FindingFieldsUpdate: (_: any) => de_AutomationRulesFindingFieldsUpdate(_, context),
    Type: __expectString,
  }) as any;
};

// de_AutomationRulesArnsList omitted.

/**
 * deserializeAws_restJson1AutomationRulesConfig
 */
const de_AutomationRulesConfig = (output: any, context: __SerdeContext): AutomationRulesConfig => {
  return take(output, {
    Actions: (_: any) => de_ActionList(_, context),
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    CreatedBy: __expectString,
    Criteria: (_: any) => de_AutomationRulesFindingFilters(_, context),
    Description: __expectString,
    IsTerminal: __expectBoolean,
    RuleArn: __expectString,
    RuleName: __expectString,
    RuleOrder: __expectInt32,
    RuleStatus: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AutomationRulesConfigList
 */
const de_AutomationRulesConfigList = (output: any, context: __SerdeContext): AutomationRulesConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutomationRulesConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutomationRulesFindingFieldsUpdate
 */
const de_AutomationRulesFindingFieldsUpdate = (
  output: any,
  context: __SerdeContext
): AutomationRulesFindingFieldsUpdate => {
  return take(output, {
    Confidence: __expectInt32,
    Criticality: __expectInt32,
    Note: _json,
    RelatedFindings: _json,
    Severity: (_: any) => de_SeverityUpdate(_, context),
    Types: _json,
    UserDefinedFields: _json,
    VerificationState: __expectString,
    Workflow: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AutomationRulesFindingFilters
 */
const de_AutomationRulesFindingFilters = (output: any, context: __SerdeContext): AutomationRulesFindingFilters => {
  return take(output, {
    AwsAccountId: _json,
    CompanyName: _json,
    ComplianceAssociatedStandardsId: _json,
    ComplianceSecurityControlId: _json,
    ComplianceStatus: _json,
    Confidence: (_: any) => de_NumberFilterList(_, context),
    CreatedAt: _json,
    Criticality: (_: any) => de_NumberFilterList(_, context),
    Description: _json,
    FirstObservedAt: _json,
    GeneratorId: _json,
    Id: _json,
    LastObservedAt: _json,
    NoteText: _json,
    NoteUpdatedAt: _json,
    NoteUpdatedBy: _json,
    ProductArn: _json,
    ProductName: _json,
    RecordState: _json,
    RelatedFindingsId: _json,
    RelatedFindingsProductArn: _json,
    ResourceDetailsOther: _json,
    ResourceId: _json,
    ResourcePartition: _json,
    ResourceRegion: _json,
    ResourceTags: _json,
    ResourceType: _json,
    SeverityLabel: _json,
    SourceUrl: _json,
    Title: _json,
    Type: _json,
    UpdatedAt: _json,
    UserDefinedFields: _json,
    VerificationState: _json,
    WorkflowStatus: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AutomationRulesMetadata
 */
const de_AutomationRulesMetadata = (output: any, context: __SerdeContext): AutomationRulesMetadata => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    CreatedBy: __expectString,
    Description: __expectString,
    IsTerminal: __expectBoolean,
    RuleArn: __expectString,
    RuleName: __expectString,
    RuleOrder: __expectInt32,
    RuleStatus: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AutomationRulesMetadataList
 */
const de_AutomationRulesMetadataList = (output: any, context: __SerdeContext): AutomationRulesMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutomationRulesMetadata(entry, context);
    });
  return retVal;
};

// de_AvailabilityZone omitted.

// de_AvailabilityZones omitted.

// de_AwsAmazonMqBrokerDetails omitted.

// de_AwsAmazonMqBrokerEncryptionOptionsDetails omitted.

// de_AwsAmazonMqBrokerLdapServerMetadataDetails omitted.

// de_AwsAmazonMqBrokerLogsDetails omitted.

// de_AwsAmazonMqBrokerLogsPendingDetails omitted.

// de_AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails omitted.

// de_AwsAmazonMqBrokerUsersDetails omitted.

// de_AwsAmazonMqBrokerUsersList omitted.

/**
 * deserializeAws_restJson1AwsApiCallAction
 */
const de_AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return take(output, {
    AffectedResources: _json,
    Api: __expectString,
    CallerType: __expectString,
    DomainDetails: _json,
    FirstSeen: __expectString,
    LastSeen: __expectString,
    RemoteIpDetails: (_: any) => de_ActionRemoteIpDetails(_, context),
    ServiceName: __expectString,
  }) as any;
};

// de_AwsApiCallActionDomainDetails omitted.

// de_AwsApiGatewayAccessLogSettings omitted.

/**
 * deserializeAws_restJson1AwsApiGatewayCanarySettings
 */
const de_AwsApiGatewayCanarySettings = (output: any, context: __SerdeContext): AwsApiGatewayCanarySettings => {
  return take(output, {
    DeploymentId: __expectString,
    PercentTraffic: __limitedParseDouble,
    StageVariableOverrides: _json,
    UseStageCache: __expectBoolean,
  }) as any;
};

// de_AwsApiGatewayEndpointConfiguration omitted.

/**
 * deserializeAws_restJson1AwsApiGatewayMethodSettings
 */
const de_AwsApiGatewayMethodSettings = (output: any, context: __SerdeContext): AwsApiGatewayMethodSettings => {
  return take(output, {
    CacheDataEncrypted: __expectBoolean,
    CacheTtlInSeconds: __expectInt32,
    CachingEnabled: __expectBoolean,
    DataTraceEnabled: __expectBoolean,
    HttpMethod: __expectString,
    LoggingLevel: __expectString,
    MetricsEnabled: __expectBoolean,
    RequireAuthorizationForCacheControl: __expectBoolean,
    ResourcePath: __expectString,
    ThrottlingBurstLimit: __expectInt32,
    ThrottlingRateLimit: __limitedParseDouble,
    UnauthorizedCacheControlHeaderStrategy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsApiGatewayMethodSettingsList
 */
const de_AwsApiGatewayMethodSettingsList = (output: any, context: __SerdeContext): AwsApiGatewayMethodSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AwsApiGatewayMethodSettings(entry, context);
    });
  return retVal;
};

// de_AwsApiGatewayRestApiDetails omitted.

/**
 * deserializeAws_restJson1AwsApiGatewayStageDetails
 */
const de_AwsApiGatewayStageDetails = (output: any, context: __SerdeContext): AwsApiGatewayStageDetails => {
  return take(output, {
    AccessLogSettings: _json,
    CacheClusterEnabled: __expectBoolean,
    CacheClusterSize: __expectString,
    CacheClusterStatus: __expectString,
    CanarySettings: (_: any) => de_AwsApiGatewayCanarySettings(_, context),
    ClientCertificateId: __expectString,
    CreatedDate: __expectString,
    DeploymentId: __expectString,
    Description: __expectString,
    DocumentationVersion: __expectString,
    LastUpdatedDate: __expectString,
    MethodSettings: (_: any) => de_AwsApiGatewayMethodSettingsList(_, context),
    StageName: __expectString,
    TracingEnabled: __expectBoolean,
    Variables: _json,
    WebAclArn: __expectString,
  }) as any;
};

// de_AwsApiGatewayV2ApiDetails omitted.

/**
 * deserializeAws_restJson1AwsApiGatewayV2RouteSettings
 */
const de_AwsApiGatewayV2RouteSettings = (output: any, context: __SerdeContext): AwsApiGatewayV2RouteSettings => {
  return take(output, {
    DataTraceEnabled: __expectBoolean,
    DetailedMetricsEnabled: __expectBoolean,
    LoggingLevel: __expectString,
    ThrottlingBurstLimit: __expectInt32,
    ThrottlingRateLimit: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsApiGatewayV2StageDetails
 */
const de_AwsApiGatewayV2StageDetails = (output: any, context: __SerdeContext): AwsApiGatewayV2StageDetails => {
  return take(output, {
    AccessLogSettings: _json,
    ApiGatewayManaged: __expectBoolean,
    AutoDeploy: __expectBoolean,
    ClientCertificateId: __expectString,
    CreatedDate: __expectString,
    DefaultRouteSettings: (_: any) => de_AwsApiGatewayV2RouteSettings(_, context),
    DeploymentId: __expectString,
    Description: __expectString,
    LastDeploymentStatusMessage: __expectString,
    LastUpdatedDate: __expectString,
    RouteSettings: (_: any) => de_AwsApiGatewayV2RouteSettings(_, context),
    StageName: __expectString,
    StageVariables: _json,
  }) as any;
};

// de_AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails omitted.

// de_AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList omitted.

// de_AwsAppSyncGraphQlApiDetails omitted.

// de_AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails omitted.

// de_AwsAppSyncGraphQlApiLogConfigDetails omitted.

// de_AwsAppSyncGraphQlApiOpenIdConnectConfigDetails omitted.

// de_AwsAppSyncGraphQlApiUserPoolConfigDetails omitted.

// de_AwsAutoScalingAutoScalingGroupAvailabilityZonesList omitted.

// de_AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails omitted.

// de_AwsAutoScalingAutoScalingGroupDetails omitted.

// de_AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList omitted.

// de_AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails omitted.

// de_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails omitted.

// de_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails omitted.

// de_AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList omitted.

// de_AwsAutoScalingLaunchConfigurationDetails omitted.

// de_AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails omitted.

// de_AwsAutoScalingLaunchConfigurationMetadataOptions omitted.

// de_AwsBackupBackupPlanAdvancedBackupSettingsDetails omitted.

// de_AwsBackupBackupPlanAdvancedBackupSettingsList omitted.

// de_AwsBackupBackupPlanBackupPlanDetails omitted.

// de_AwsBackupBackupPlanDetails omitted.

// de_AwsBackupBackupPlanLifecycleDetails omitted.

// de_AwsBackupBackupPlanRuleCopyActionsDetails omitted.

// de_AwsBackupBackupPlanRuleCopyActionsList omitted.

// de_AwsBackupBackupPlanRuleDetails omitted.

// de_AwsBackupBackupPlanRuleList omitted.

// de_AwsBackupBackupVaultDetails omitted.

// de_AwsBackupBackupVaultNotificationsDetails omitted.

// de_AwsBackupRecoveryPointCalculatedLifecycleDetails omitted.

// de_AwsBackupRecoveryPointCreatedByDetails omitted.

// de_AwsBackupRecoveryPointDetails omitted.

// de_AwsBackupRecoveryPointLifecycleDetails omitted.

// de_AwsCertificateManagerCertificateDetails omitted.

// de_AwsCertificateManagerCertificateDomainValidationOption omitted.

// de_AwsCertificateManagerCertificateDomainValidationOptions omitted.

// de_AwsCertificateManagerCertificateExtendedKeyUsage omitted.

// de_AwsCertificateManagerCertificateExtendedKeyUsages omitted.

// de_AwsCertificateManagerCertificateKeyUsage omitted.

// de_AwsCertificateManagerCertificateKeyUsages omitted.

// de_AwsCertificateManagerCertificateOptions omitted.

// de_AwsCertificateManagerCertificateRenewalSummary omitted.

// de_AwsCertificateManagerCertificateResourceRecord omitted.

// de_AwsCloudFormationStackDetails omitted.

// de_AwsCloudFormationStackDriftInformationDetails omitted.

// de_AwsCloudFormationStackOutputsDetails omitted.

// de_AwsCloudFormationStackOutputsList omitted.

// de_AwsCloudFrontDistributionCacheBehavior omitted.

// de_AwsCloudFrontDistributionCacheBehaviors omitted.

// de_AwsCloudFrontDistributionCacheBehaviorsItemList omitted.

// de_AwsCloudFrontDistributionDefaultCacheBehavior omitted.

// de_AwsCloudFrontDistributionDetails omitted.

// de_AwsCloudFrontDistributionLogging omitted.

// de_AwsCloudFrontDistributionOriginCustomOriginConfig omitted.

// de_AwsCloudFrontDistributionOriginGroup omitted.

// de_AwsCloudFrontDistributionOriginGroupFailover omitted.

// de_AwsCloudFrontDistributionOriginGroupFailoverStatusCodes omitted.

// de_AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList omitted.

// de_AwsCloudFrontDistributionOriginGroups omitted.

// de_AwsCloudFrontDistributionOriginGroupsItemList omitted.

// de_AwsCloudFrontDistributionOriginItem omitted.

// de_AwsCloudFrontDistributionOriginItemList omitted.

// de_AwsCloudFrontDistributionOrigins omitted.

// de_AwsCloudFrontDistributionOriginS3OriginConfig omitted.

// de_AwsCloudFrontDistributionOriginSslProtocols omitted.

// de_AwsCloudFrontDistributionViewerCertificate omitted.

// de_AwsCloudTrailTrailDetails omitted.

/**
 * deserializeAws_restJson1AwsCloudWatchAlarmDetails
 */
const de_AwsCloudWatchAlarmDetails = (output: any, context: __SerdeContext): AwsCloudWatchAlarmDetails => {
  return take(output, {
    ActionsEnabled: __expectBoolean,
    AlarmActions: _json,
    AlarmArn: __expectString,
    AlarmConfigurationUpdatedTimestamp: __expectString,
    AlarmDescription: __expectString,
    AlarmName: __expectString,
    ComparisonOperator: __expectString,
    DatapointsToAlarm: __expectInt32,
    Dimensions: _json,
    EvaluateLowSampleCountPercentile: __expectString,
    EvaluationPeriods: __expectInt32,
    ExtendedStatistic: __expectString,
    InsufficientDataActions: _json,
    MetricName: __expectString,
    Namespace: __expectString,
    OkActions: _json,
    Period: __expectInt32,
    Statistic: __expectString,
    Threshold: __limitedParseDouble,
    ThresholdMetricId: __expectString,
    TreatMissingData: __expectString,
    Unit: __expectString,
  }) as any;
};

// de_AwsCloudWatchAlarmDimensionsDetails omitted.

// de_AwsCloudWatchAlarmDimensionsList omitted.

// de_AwsCodeBuildProjectArtifactsDetails omitted.

// de_AwsCodeBuildProjectArtifactsList omitted.

// de_AwsCodeBuildProjectDetails omitted.

// de_AwsCodeBuildProjectEnvironment omitted.

// de_AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails omitted.

// de_AwsCodeBuildProjectEnvironmentEnvironmentVariablesList omitted.

// de_AwsCodeBuildProjectEnvironmentRegistryCredential omitted.

// de_AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails omitted.

// de_AwsCodeBuildProjectLogsConfigDetails omitted.

// de_AwsCodeBuildProjectLogsConfigS3LogsDetails omitted.

// de_AwsCodeBuildProjectSource omitted.

// de_AwsCodeBuildProjectVpcConfig omitted.

// de_AwsCorsConfiguration omitted.

// de_AwsDynamoDbTableAttributeDefinition omitted.

// de_AwsDynamoDbTableAttributeDefinitionList omitted.

// de_AwsDynamoDbTableBillingModeSummary omitted.

// de_AwsDynamoDbTableDetails omitted.

// de_AwsDynamoDbTableGlobalSecondaryIndex omitted.

// de_AwsDynamoDbTableGlobalSecondaryIndexList omitted.

// de_AwsDynamoDbTableKeySchema omitted.

// de_AwsDynamoDbTableKeySchemaList omitted.

// de_AwsDynamoDbTableLocalSecondaryIndex omitted.

// de_AwsDynamoDbTableLocalSecondaryIndexList omitted.

// de_AwsDynamoDbTableProjection omitted.

// de_AwsDynamoDbTableProvisionedThroughput omitted.

// de_AwsDynamoDbTableProvisionedThroughputOverride omitted.

// de_AwsDynamoDbTableReplica omitted.

// de_AwsDynamoDbTableReplicaGlobalSecondaryIndex omitted.

// de_AwsDynamoDbTableReplicaGlobalSecondaryIndexList omitted.

// de_AwsDynamoDbTableReplicaList omitted.

// de_AwsDynamoDbTableRestoreSummary omitted.

// de_AwsDynamoDbTableSseDescription omitted.

// de_AwsDynamoDbTableStreamSpecification omitted.

// de_AwsEc2EipDetails omitted.

// de_AwsEc2InstanceDetails omitted.

// de_AwsEc2InstanceMetadataOptions omitted.

// de_AwsEc2InstanceMonitoringDetails omitted.

// de_AwsEc2InstanceNetworkInterfacesDetails omitted.

// de_AwsEc2InstanceNetworkInterfacesList omitted.

// de_AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails omitted.

// de_AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails omitted.

// de_AwsEc2LaunchTemplateDataBlockDeviceMappingSetList omitted.

// de_AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails omitted.

// de_AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails omitted.

// de_AwsEc2LaunchTemplateDataCpuOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataCreditSpecificationDetails omitted.

/**
 * deserializeAws_restJson1AwsEc2LaunchTemplateDataDetails
 */
const de_AwsEc2LaunchTemplateDataDetails = (output: any, context: __SerdeContext): AwsEc2LaunchTemplateDataDetails => {
  return take(output, {
    BlockDeviceMappingSet: _json,
    CapacityReservationSpecification: _json,
    CpuOptions: _json,
    CreditSpecification: _json,
    DisableApiStop: __expectBoolean,
    DisableApiTermination: __expectBoolean,
    EbsOptimized: __expectBoolean,
    ElasticGpuSpecificationSet: _json,
    ElasticInferenceAcceleratorSet: _json,
    EnclaveOptions: _json,
    HibernationOptions: _json,
    IamInstanceProfile: _json,
    ImageId: __expectString,
    InstanceInitiatedShutdownBehavior: __expectString,
    InstanceMarketOptions: _json,
    InstanceRequirements: (_: any) => de_AwsEc2LaunchTemplateDataInstanceRequirementsDetails(_, context),
    InstanceType: __expectString,
    KernelId: __expectString,
    KeyName: __expectString,
    LicenseSet: _json,
    MaintenanceOptions: _json,
    MetadataOptions: _json,
    Monitoring: _json,
    NetworkInterfaceSet: _json,
    Placement: _json,
    PrivateDnsNameOptions: _json,
    RamDiskId: __expectString,
    SecurityGroupIdSet: _json,
    SecurityGroupSet: _json,
    UserData: __expectString,
  }) as any;
};

// de_AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails omitted.

// de_AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList omitted.

// de_AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails omitted.

// de_AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList omitted.

// de_AwsEc2LaunchTemplateDataEnclaveOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataHibernationOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataIamInstanceProfileDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails omitted.

/**
 * deserializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsDetails
 */
const de_AwsEc2LaunchTemplateDataInstanceRequirementsDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2LaunchTemplateDataInstanceRequirementsDetails => {
  return take(output, {
    AcceleratorCount: _json,
    AcceleratorManufacturers: _json,
    AcceleratorNames: _json,
    AcceleratorTotalMemoryMiB: _json,
    AcceleratorTypes: _json,
    BareMetal: __expectString,
    BaselineEbsBandwidthMbps: _json,
    BurstablePerformance: __expectString,
    CpuManufacturers: _json,
    ExcludedInstanceTypes: _json,
    InstanceGenerations: _json,
    LocalStorage: __expectString,
    LocalStorageTypes: _json,
    MemoryGiBPerVCpu: (_: any) => de_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails(_, context),
    MemoryMiB: _json,
    NetworkInterfaceCount: _json,
    OnDemandMaxPricePercentageOverLowestPrice: __expectInt32,
    RequireHibernateSupport: __expectBoolean,
    SpotMaxPricePercentageOverLowestPrice: __expectInt32,
    TotalLocalStorageGB: (_: any) =>
      de_AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails(_, context),
    VCpuCount: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails
 */
const de_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails => {
  return take(output, {
    Max: __limitedParseDouble,
    Min: __limitedParseDouble,
  }) as any;
};

// de_AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails omitted.

// de_AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails omitted.

/**
 * deserializeAws_restJson1AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails
 */
const de_AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails => {
  return take(output, {
    Max: __limitedParseDouble,
    Min: __limitedParseDouble,
  }) as any;
};

// de_AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails omitted.

// de_AwsEc2LaunchTemplateDataLicenseSetDetails omitted.

// de_AwsEc2LaunchTemplateDataLicenseSetList omitted.

// de_AwsEc2LaunchTemplateDataMaintenanceOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataMetadataOptionsDetails omitted.

// de_AwsEc2LaunchTemplateDataMonitoringDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetList omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails omitted.

// de_AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList omitted.

// de_AwsEc2LaunchTemplateDataPlacementDetails omitted.

// de_AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails omitted.

/**
 * deserializeAws_restJson1AwsEc2LaunchTemplateDetails
 */
const de_AwsEc2LaunchTemplateDetails = (output: any, context: __SerdeContext): AwsEc2LaunchTemplateDetails => {
  return take(output, {
    DefaultVersionNumber: __expectLong,
    Id: __expectString,
    LatestVersionNumber: __expectLong,
    LaunchTemplateData: (_: any) => de_AwsEc2LaunchTemplateDataDetails(_, context),
    LaunchTemplateName: __expectString,
  }) as any;
};

// de_AwsEc2NetworkAclAssociation omitted.

// de_AwsEc2NetworkAclAssociationList omitted.

// de_AwsEc2NetworkAclDetails omitted.

// de_AwsEc2NetworkAclEntry omitted.

// de_AwsEc2NetworkAclEntryList omitted.

// de_AwsEc2NetworkInterfaceAttachment omitted.

// de_AwsEc2NetworkInterfaceDetails omitted.

// de_AwsEc2NetworkInterfaceIpV6AddressDetail omitted.

// de_AwsEc2NetworkInterfaceIpV6AddressList omitted.

// de_AwsEc2NetworkInterfacePrivateIpAddressDetail omitted.

// de_AwsEc2NetworkInterfacePrivateIpAddressList omitted.

// de_AwsEc2NetworkInterfaceSecurityGroup omitted.

// de_AwsEc2NetworkInterfaceSecurityGroupList omitted.

// de_AwsEc2RouteTableDetails omitted.

// de_AwsEc2SecurityGroupDetails omitted.

// de_AwsEc2SecurityGroupIpPermission omitted.

// de_AwsEc2SecurityGroupIpPermissionList omitted.

// de_AwsEc2SecurityGroupIpRange omitted.

// de_AwsEc2SecurityGroupIpRangeList omitted.

// de_AwsEc2SecurityGroupIpv6Range omitted.

// de_AwsEc2SecurityGroupIpv6RangeList omitted.

// de_AwsEc2SecurityGroupPrefixListId omitted.

// de_AwsEc2SecurityGroupPrefixListIdList omitted.

// de_AwsEc2SecurityGroupUserIdGroupPair omitted.

// de_AwsEc2SecurityGroupUserIdGroupPairList omitted.

// de_AwsEc2SubnetDetails omitted.

// de_AwsEc2TransitGatewayDetails omitted.

// de_AwsEc2VolumeAttachment omitted.

// de_AwsEc2VolumeAttachmentList omitted.

// de_AwsEc2VolumeDetails omitted.

// de_AwsEc2VpcDetails omitted.

// de_AwsEc2VpcEndpointServiceDetails omitted.

// de_AwsEc2VpcEndpointServiceServiceTypeDetails omitted.

// de_AwsEc2VpcEndpointServiceServiceTypeList omitted.

// de_AwsEc2VpcPeeringConnectionDetails omitted.

// de_AwsEc2VpcPeeringConnectionStatusDetails omitted.

// de_AwsEc2VpcPeeringConnectionVpcInfoDetails omitted.

// de_AwsEc2VpnConnectionDetails omitted.

// de_AwsEc2VpnConnectionOptionsDetails omitted.

// de_AwsEc2VpnConnectionOptionsTunnelOptionsDetails omitted.

// de_AwsEc2VpnConnectionOptionsTunnelOptionsList omitted.

// de_AwsEc2VpnConnectionRoutesDetails omitted.

// de_AwsEc2VpnConnectionRoutesList omitted.

// de_AwsEc2VpnConnectionVgwTelemetryDetails omitted.

// de_AwsEc2VpnConnectionVgwTelemetryList omitted.

// de_AwsEcrContainerImageDetails omitted.

// de_AwsEcrRepositoryDetails omitted.

// de_AwsEcrRepositoryImageScanningConfigurationDetails omitted.

// de_AwsEcrRepositoryLifecyclePolicyDetails omitted.

// de_AwsEcsClusterClusterSettingsDetails omitted.

// de_AwsEcsClusterClusterSettingsList omitted.

// de_AwsEcsClusterConfigurationDetails omitted.

// de_AwsEcsClusterConfigurationExecuteCommandConfigurationDetails omitted.

// de_AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails omitted.

// de_AwsEcsClusterDefaultCapacityProviderStrategyDetails omitted.

// de_AwsEcsClusterDefaultCapacityProviderStrategyList omitted.

// de_AwsEcsClusterDetails omitted.

// de_AwsEcsContainerDetails omitted.

// de_AwsEcsContainerDetailsList omitted.

// de_AwsEcsServiceCapacityProviderStrategyDetails omitted.

// de_AwsEcsServiceCapacityProviderStrategyList omitted.

// de_AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails omitted.

// de_AwsEcsServiceDeploymentConfigurationDetails omitted.

// de_AwsEcsServiceDeploymentControllerDetails omitted.

// de_AwsEcsServiceDetails omitted.

// de_AwsEcsServiceLoadBalancersDetails omitted.

// de_AwsEcsServiceLoadBalancersList omitted.

// de_AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails omitted.

// de_AwsEcsServiceNetworkConfigurationDetails omitted.

// de_AwsEcsServicePlacementConstraintsDetails omitted.

// de_AwsEcsServicePlacementConstraintsList omitted.

// de_AwsEcsServicePlacementStrategiesDetails omitted.

// de_AwsEcsServicePlacementStrategiesList omitted.

// de_AwsEcsServiceServiceRegistriesDetails omitted.

// de_AwsEcsServiceServiceRegistriesList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsDependsOnList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsMountPointsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsSecretsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsUlimitsList omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails omitted.

// de_AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList omitted.

// de_AwsEcsTaskDefinitionDetails omitted.

// de_AwsEcsTaskDefinitionInferenceAcceleratorsDetails omitted.

// de_AwsEcsTaskDefinitionInferenceAcceleratorsList omitted.

// de_AwsEcsTaskDefinitionPlacementConstraintsDetails omitted.

// de_AwsEcsTaskDefinitionPlacementConstraintsList omitted.

// de_AwsEcsTaskDefinitionProxyConfigurationDetails omitted.

// de_AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails omitted.

// de_AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList omitted.

// de_AwsEcsTaskDefinitionVolumesDetails omitted.

// de_AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails omitted.

// de_AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails omitted.

// de_AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails omitted.

// de_AwsEcsTaskDefinitionVolumesHostDetails omitted.

// de_AwsEcsTaskDefinitionVolumesList omitted.

// de_AwsEcsTaskDetails omitted.

// de_AwsEcsTaskVolumeDetails omitted.

// de_AwsEcsTaskVolumeDetailsList omitted.

// de_AwsEcsTaskVolumeHostDetails omitted.

// de_AwsEfsAccessPointDetails omitted.

// de_AwsEfsAccessPointPosixUserDetails omitted.

// de_AwsEfsAccessPointRootDirectoryCreationInfoDetails omitted.

// de_AwsEfsAccessPointRootDirectoryDetails omitted.

// de_AwsEksClusterDetails omitted.

// de_AwsEksClusterLoggingClusterLoggingDetails omitted.

// de_AwsEksClusterLoggingClusterLoggingList omitted.

// de_AwsEksClusterLoggingDetails omitted.

// de_AwsEksClusterResourcesVpcConfigDetails omitted.

// de_AwsElasticBeanstalkEnvironmentDetails omitted.

// de_AwsElasticBeanstalkEnvironmentEnvironmentLink omitted.

// de_AwsElasticBeanstalkEnvironmentEnvironmentLinks omitted.

// de_AwsElasticBeanstalkEnvironmentOptionSetting omitted.

// de_AwsElasticBeanstalkEnvironmentOptionSettings omitted.

// de_AwsElasticBeanstalkEnvironmentTier omitted.

// de_AwsElasticsearchDomainDetails omitted.

// de_AwsElasticsearchDomainDomainEndpointOptions omitted.

// de_AwsElasticsearchDomainElasticsearchClusterConfigDetails omitted.

// de_AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails omitted.

// de_AwsElasticsearchDomainEncryptionAtRestOptions omitted.

// de_AwsElasticsearchDomainLogPublishingOptions omitted.

// de_AwsElasticsearchDomainLogPublishingOptionsLogConfig omitted.

// de_AwsElasticsearchDomainNodeToNodeEncryptionOptions omitted.

// de_AwsElasticsearchDomainServiceSoftwareOptions omitted.

// de_AwsElasticsearchDomainVPCOptions omitted.

// de_AwsElbAppCookieStickinessPolicies omitted.

// de_AwsElbAppCookieStickinessPolicy omitted.

// de_AwsElbLbCookieStickinessPolicies omitted.

// de_AwsElbLbCookieStickinessPolicy omitted.

// de_AwsElbLoadBalancerAccessLog omitted.

// de_AwsElbLoadBalancerAdditionalAttribute omitted.

// de_AwsElbLoadBalancerAdditionalAttributeList omitted.

// de_AwsElbLoadBalancerAttributes omitted.

// de_AwsElbLoadBalancerBackendServerDescription omitted.

// de_AwsElbLoadBalancerBackendServerDescriptions omitted.

// de_AwsElbLoadBalancerConnectionDraining omitted.

// de_AwsElbLoadBalancerConnectionSettings omitted.

// de_AwsElbLoadBalancerCrossZoneLoadBalancing omitted.

// de_AwsElbLoadBalancerDetails omitted.

// de_AwsElbLoadBalancerHealthCheck omitted.

// de_AwsElbLoadBalancerInstance omitted.

// de_AwsElbLoadBalancerInstances omitted.

// de_AwsElbLoadBalancerListener omitted.

// de_AwsElbLoadBalancerListenerDescription omitted.

// de_AwsElbLoadBalancerListenerDescriptions omitted.

// de_AwsElbLoadBalancerPolicies omitted.

// de_AwsElbLoadBalancerSourceSecurityGroup omitted.

// de_AwsElbv2LoadBalancerAttribute omitted.

// de_AwsElbv2LoadBalancerAttributes omitted.

// de_AwsElbv2LoadBalancerDetails omitted.

// de_AwsEventSchemasRegistryDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesCloudTrailDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesDnsLogsDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesFlowLogsDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesKubernetesDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails omitted.

// de_AwsGuardDutyDetectorDataSourcesS3LogsDetails omitted.

// de_AwsGuardDutyDetectorDetails omitted.

// de_AwsGuardDutyDetectorFeaturesDetails omitted.

// de_AwsGuardDutyDetectorFeaturesList omitted.

// de_AwsIamAccessKeyDetails omitted.

// de_AwsIamAccessKeySessionContext omitted.

// de_AwsIamAccessKeySessionContextAttributes omitted.

// de_AwsIamAccessKeySessionContextSessionIssuer omitted.

// de_AwsIamAttachedManagedPolicy omitted.

// de_AwsIamAttachedManagedPolicyList omitted.

// de_AwsIamGroupDetails omitted.

// de_AwsIamGroupPolicy omitted.

// de_AwsIamGroupPolicyList omitted.

// de_AwsIamInstanceProfile omitted.

// de_AwsIamInstanceProfileList omitted.

// de_AwsIamInstanceProfileRole omitted.

// de_AwsIamInstanceProfileRoles omitted.

// de_AwsIamPermissionsBoundary omitted.

// de_AwsIamPolicyDetails omitted.

// de_AwsIamPolicyVersion omitted.

// de_AwsIamPolicyVersionList omitted.

// de_AwsIamRoleDetails omitted.

// de_AwsIamRolePolicy omitted.

// de_AwsIamRolePolicyList omitted.

// de_AwsIamUserDetails omitted.

// de_AwsIamUserPolicy omitted.

// de_AwsIamUserPolicyList omitted.

// de_AwsKinesisStreamDetails omitted.

// de_AwsKinesisStreamStreamEncryptionDetails omitted.

/**
 * deserializeAws_restJson1AwsKmsKeyDetails
 */
const de_AwsKmsKeyDetails = (output: any, context: __SerdeContext): AwsKmsKeyDetails => {
  return take(output, {
    AWSAccountId: __expectString,
    CreationDate: __limitedParseDouble,
    Description: __expectString,
    KeyId: __expectString,
    KeyManager: __expectString,
    KeyRotationStatus: __expectBoolean,
    KeyState: __expectString,
    Origin: __expectString,
  }) as any;
};

// de_AwsLambdaFunctionCode omitted.

// de_AwsLambdaFunctionDeadLetterConfig omitted.

// de_AwsLambdaFunctionDetails omitted.

// de_AwsLambdaFunctionEnvironment omitted.

// de_AwsLambdaFunctionEnvironmentError omitted.

// de_AwsLambdaFunctionLayer omitted.

// de_AwsLambdaFunctionLayerList omitted.

// de_AwsLambdaFunctionTracingConfig omitted.

// de_AwsLambdaFunctionVpcConfig omitted.

// de_AwsLambdaLayerVersionDetails omitted.

// de_AwsMountPoint omitted.

// de_AwsMountPointList omitted.

// de_AwsNetworkFirewallFirewallDetails omitted.

// de_AwsNetworkFirewallFirewallPolicyDetails omitted.

// de_AwsNetworkFirewallFirewallSubnetMappingsDetails omitted.

// de_AwsNetworkFirewallFirewallSubnetMappingsList omitted.

/**
 * deserializeAws_restJson1AwsNetworkFirewallRuleGroupDetails
 */
const de_AwsNetworkFirewallRuleGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallRuleGroupDetails => {
  return take(output, {
    Capacity: __expectInt32,
    Description: __expectString,
    RuleGroup: _json,
    RuleGroupArn: __expectString,
    RuleGroupId: __expectString,
    RuleGroupName: __expectString,
    Type: __expectString,
  }) as any;
};

// de_AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainClusterConfigDetails omitted.

// de_AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails omitted.

// de_AwsOpenSearchServiceDomainDetails omitted.

// de_AwsOpenSearchServiceDomainDomainEndpointOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainLogPublishingOption omitted.

// de_AwsOpenSearchServiceDomainLogPublishingOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainMasterUserOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails omitted.

// de_AwsOpenSearchServiceDomainVpcOptionsDetails omitted.

// de_AwsRdsDbClusterAssociatedRole omitted.

// de_AwsRdsDbClusterAssociatedRoles omitted.

// de_AwsRdsDbClusterDetails omitted.

// de_AwsRdsDbClusterMember omitted.

// de_AwsRdsDbClusterMembers omitted.

// de_AwsRdsDbClusterOptionGroupMembership omitted.

// de_AwsRdsDbClusterOptionGroupMemberships omitted.

// de_AwsRdsDbClusterSnapshotDetails omitted.

// de_AwsRdsDbDomainMembership omitted.

// de_AwsRdsDbDomainMemberships omitted.

// de_AwsRdsDbInstanceAssociatedRole omitted.

// de_AwsRdsDbInstanceAssociatedRoles omitted.

// de_AwsRdsDbInstanceDetails omitted.

// de_AwsRdsDbInstanceEndpoint omitted.

// de_AwsRdsDbInstanceVpcSecurityGroup omitted.

// de_AwsRdsDbInstanceVpcSecurityGroups omitted.

// de_AwsRdsDbOptionGroupMembership omitted.

// de_AwsRdsDbOptionGroupMemberships omitted.

// de_AwsRdsDbParameterGroup omitted.

// de_AwsRdsDbParameterGroups omitted.

// de_AwsRdsDbPendingModifiedValues omitted.

// de_AwsRdsDbProcessorFeature omitted.

// de_AwsRdsDbProcessorFeatures omitted.

// de_AwsRdsDbSecurityGroupDetails omitted.

// de_AwsRdsDbSecurityGroupEc2SecurityGroup omitted.

// de_AwsRdsDbSecurityGroupEc2SecurityGroups omitted.

// de_AwsRdsDbSecurityGroupIpRange omitted.

// de_AwsRdsDbSecurityGroupIpRanges omitted.

// de_AwsRdsDbSnapshotDetails omitted.

// de_AwsRdsDbStatusInfo omitted.

// de_AwsRdsDbStatusInfos omitted.

// de_AwsRdsDbSubnetGroup omitted.

// de_AwsRdsDbSubnetGroupSubnet omitted.

// de_AwsRdsDbSubnetGroupSubnetAvailabilityZone omitted.

// de_AwsRdsDbSubnetGroupSubnets omitted.

// de_AwsRdsEventSubscriptionDetails omitted.

// de_AwsRdsPendingCloudWatchLogsExports omitted.

// de_AwsRedshiftClusterClusterNode omitted.

// de_AwsRedshiftClusterClusterNodes omitted.

// de_AwsRedshiftClusterClusterParameterGroup omitted.

// de_AwsRedshiftClusterClusterParameterGroups omitted.

// de_AwsRedshiftClusterClusterParameterStatus omitted.

// de_AwsRedshiftClusterClusterParameterStatusList omitted.

// de_AwsRedshiftClusterClusterSecurityGroup omitted.

// de_AwsRedshiftClusterClusterSecurityGroups omitted.

// de_AwsRedshiftClusterClusterSnapshotCopyStatus omitted.

// de_AwsRedshiftClusterDeferredMaintenanceWindow omitted.

// de_AwsRedshiftClusterDeferredMaintenanceWindows omitted.

/**
 * deserializeAws_restJson1AwsRedshiftClusterDetails
 */
const de_AwsRedshiftClusterDetails = (output: any, context: __SerdeContext): AwsRedshiftClusterDetails => {
  return take(output, {
    AllowVersionUpgrade: __expectBoolean,
    AutomatedSnapshotRetentionPeriod: __expectInt32,
    AvailabilityZone: __expectString,
    ClusterAvailabilityStatus: __expectString,
    ClusterCreateTime: __expectString,
    ClusterIdentifier: __expectString,
    ClusterNodes: _json,
    ClusterParameterGroups: _json,
    ClusterPublicKey: __expectString,
    ClusterRevisionNumber: __expectString,
    ClusterSecurityGroups: _json,
    ClusterSnapshotCopyStatus: _json,
    ClusterStatus: __expectString,
    ClusterSubnetGroupName: __expectString,
    ClusterVersion: __expectString,
    DBName: __expectString,
    DeferredMaintenanceWindows: _json,
    ElasticIpStatus: _json,
    ElasticResizeNumberOfNodeOptions: __expectString,
    Encrypted: __expectBoolean,
    Endpoint: _json,
    EnhancedVpcRouting: __expectBoolean,
    ExpectedNextSnapshotScheduleTime: __expectString,
    ExpectedNextSnapshotScheduleTimeStatus: __expectString,
    HsmStatus: _json,
    IamRoles: _json,
    KmsKeyId: __expectString,
    LoggingStatus: _json,
    MaintenanceTrackName: __expectString,
    ManualSnapshotRetentionPeriod: __expectInt32,
    MasterUsername: __expectString,
    NextMaintenanceWindowStartTime: __expectString,
    NodeType: __expectString,
    NumberOfNodes: __expectInt32,
    PendingActions: _json,
    PendingModifiedValues: _json,
    PreferredMaintenanceWindow: __expectString,
    PubliclyAccessible: __expectBoolean,
    ResizeInfo: _json,
    RestoreStatus: (_: any) => de_AwsRedshiftClusterRestoreStatus(_, context),
    SnapshotScheduleIdentifier: __expectString,
    SnapshotScheduleState: __expectString,
    VpcId: __expectString,
    VpcSecurityGroups: _json,
  }) as any;
};

// de_AwsRedshiftClusterElasticIpStatus omitted.

// de_AwsRedshiftClusterEndpoint omitted.

// de_AwsRedshiftClusterHsmStatus omitted.

// de_AwsRedshiftClusterIamRole omitted.

// de_AwsRedshiftClusterIamRoles omitted.

// de_AwsRedshiftClusterLoggingStatus omitted.

// de_AwsRedshiftClusterPendingModifiedValues omitted.

// de_AwsRedshiftClusterResizeInfo omitted.

/**
 * deserializeAws_restJson1AwsRedshiftClusterRestoreStatus
 */
const de_AwsRedshiftClusterRestoreStatus = (output: any, context: __SerdeContext): AwsRedshiftClusterRestoreStatus => {
  return take(output, {
    CurrentRestoreRateInMegaBytesPerSecond: __limitedParseDouble,
    ElapsedTimeInSeconds: __expectLong,
    EstimatedTimeToCompletionInSeconds: __expectLong,
    ProgressInMegaBytes: __expectLong,
    SnapshotSizeInMegaBytes: __expectLong,
    Status: __expectString,
  }) as any;
};

// de_AwsRedshiftClusterVpcSecurityGroup omitted.

// de_AwsRedshiftClusterVpcSecurityGroups omitted.

// de_AwsS3AccountPublicAccessBlockDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesList omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails omitted.

// de_AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList omitted.

// de_AwsS3BucketBucketVersioningConfiguration omitted.

// de_AwsS3BucketDetails omitted.

// de_AwsS3BucketLoggingConfiguration omitted.

// de_AwsS3BucketNotificationConfiguration omitted.

// de_AwsS3BucketNotificationConfigurationDetail omitted.

// de_AwsS3BucketNotificationConfigurationDetails omitted.

// de_AwsS3BucketNotificationConfigurationEvents omitted.

// de_AwsS3BucketNotificationConfigurationFilter omitted.

// de_AwsS3BucketNotificationConfigurationS3KeyFilter omitted.

// de_AwsS3BucketNotificationConfigurationS3KeyFilterRule omitted.

// de_AwsS3BucketNotificationConfigurationS3KeyFilterRules omitted.

// de_AwsS3BucketObjectLockConfiguration omitted.

// de_AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails omitted.

// de_AwsS3BucketObjectLockConfigurationRuleDetails omitted.

// de_AwsS3BucketServerSideEncryptionByDefault omitted.

// de_AwsS3BucketServerSideEncryptionConfiguration omitted.

// de_AwsS3BucketServerSideEncryptionRule omitted.

// de_AwsS3BucketServerSideEncryptionRules omitted.

// de_AwsS3BucketWebsiteConfiguration omitted.

// de_AwsS3BucketWebsiteConfigurationRedirectTo omitted.

// de_AwsS3BucketWebsiteConfigurationRoutingRule omitted.

// de_AwsS3BucketWebsiteConfigurationRoutingRuleCondition omitted.

// de_AwsS3BucketWebsiteConfigurationRoutingRuleRedirect omitted.

// de_AwsS3BucketWebsiteConfigurationRoutingRules omitted.

// de_AwsS3ObjectDetails omitted.

// de_AwsSageMakerNotebookInstanceDetails omitted.

// de_AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails omitted.

// de_AwsSecretsManagerSecretDetails omitted.

// de_AwsSecretsManagerSecretRotationRules omitted.

/**
 * deserializeAws_restJson1AwsSecurityFinding
 */
const de_AwsSecurityFinding = (output: any, context: __SerdeContext): AwsSecurityFinding => {
  return take(output, {
    Action: (_: any) => de_Action(_, context),
    AwsAccountId: __expectString,
    CompanyName: __expectString,
    Compliance: _json,
    Confidence: __expectInt32,
    CreatedAt: __expectString,
    Criticality: __expectInt32,
    Description: __expectString,
    FindingProviderFields: _json,
    FirstObservedAt: __expectString,
    GeneratorId: __expectString,
    Id: __expectString,
    LastObservedAt: __expectString,
    Malware: _json,
    Network: _json,
    NetworkPath: _json,
    Note: _json,
    PatchSummary: _json,
    Process: _json,
    ProductArn: __expectString,
    ProductFields: _json,
    ProductName: __expectString,
    RecordState: __expectString,
    Region: __expectString,
    RelatedFindings: _json,
    Remediation: _json,
    Resources: (_: any) => de_ResourceList(_, context),
    Sample: __expectBoolean,
    SchemaVersion: __expectString,
    Severity: (_: any) => de_Severity(_, context),
    SourceUrl: __expectString,
    ThreatIntelIndicators: _json,
    Threats: _json,
    Title: __expectString,
    Types: _json,
    UpdatedAt: __expectString,
    UserDefinedFields: _json,
    VerificationState: __expectString,
    Vulnerabilities: (_: any) => de_VulnerabilityList(_, context),
    Workflow: _json,
    WorkflowState: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsSecurityFindingFilters
 */
const de_AwsSecurityFindingFilters = (output: any, context: __SerdeContext): AwsSecurityFindingFilters => {
  return take(output, {
    AwsAccountId: _json,
    CompanyName: _json,
    ComplianceAssociatedStandardsId: _json,
    ComplianceSecurityControlId: _json,
    ComplianceStatus: _json,
    Confidence: (_: any) => de_NumberFilterList(_, context),
    CreatedAt: _json,
    Criticality: (_: any) => de_NumberFilterList(_, context),
    Description: _json,
    FindingProviderFieldsConfidence: (_: any) => de_NumberFilterList(_, context),
    FindingProviderFieldsCriticality: (_: any) => de_NumberFilterList(_, context),
    FindingProviderFieldsRelatedFindingsId: _json,
    FindingProviderFieldsRelatedFindingsProductArn: _json,
    FindingProviderFieldsSeverityLabel: _json,
    FindingProviderFieldsSeverityOriginal: _json,
    FindingProviderFieldsTypes: _json,
    FirstObservedAt: _json,
    GeneratorId: _json,
    Id: _json,
    Keyword: _json,
    LastObservedAt: _json,
    MalwareName: _json,
    MalwarePath: _json,
    MalwareState: _json,
    MalwareType: _json,
    NetworkDestinationDomain: _json,
    NetworkDestinationIpV4: _json,
    NetworkDestinationIpV6: _json,
    NetworkDestinationPort: (_: any) => de_NumberFilterList(_, context),
    NetworkDirection: _json,
    NetworkProtocol: _json,
    NetworkSourceDomain: _json,
    NetworkSourceIpV4: _json,
    NetworkSourceIpV6: _json,
    NetworkSourceMac: _json,
    NetworkSourcePort: (_: any) => de_NumberFilterList(_, context),
    NoteText: _json,
    NoteUpdatedAt: _json,
    NoteUpdatedBy: _json,
    ProcessLaunchedAt: _json,
    ProcessName: _json,
    ProcessParentPid: (_: any) => de_NumberFilterList(_, context),
    ProcessPath: _json,
    ProcessPid: (_: any) => de_NumberFilterList(_, context),
    ProcessTerminatedAt: _json,
    ProductArn: _json,
    ProductFields: _json,
    ProductName: _json,
    RecommendationText: _json,
    RecordState: _json,
    Region: _json,
    RelatedFindingsId: _json,
    RelatedFindingsProductArn: _json,
    ResourceAwsEc2InstanceIamInstanceProfileArn: _json,
    ResourceAwsEc2InstanceImageId: _json,
    ResourceAwsEc2InstanceIpV4Addresses: _json,
    ResourceAwsEc2InstanceIpV6Addresses: _json,
    ResourceAwsEc2InstanceKeyName: _json,
    ResourceAwsEc2InstanceLaunchedAt: _json,
    ResourceAwsEc2InstanceSubnetId: _json,
    ResourceAwsEc2InstanceType: _json,
    ResourceAwsEc2InstanceVpcId: _json,
    ResourceAwsIamAccessKeyCreatedAt: _json,
    ResourceAwsIamAccessKeyPrincipalName: _json,
    ResourceAwsIamAccessKeyStatus: _json,
    ResourceAwsIamAccessKeyUserName: _json,
    ResourceAwsIamUserUserName: _json,
    ResourceAwsS3BucketOwnerId: _json,
    ResourceAwsS3BucketOwnerName: _json,
    ResourceContainerImageId: _json,
    ResourceContainerImageName: _json,
    ResourceContainerLaunchedAt: _json,
    ResourceContainerName: _json,
    ResourceDetailsOther: _json,
    ResourceId: _json,
    ResourcePartition: _json,
    ResourceRegion: _json,
    ResourceTags: _json,
    ResourceType: _json,
    Sample: _json,
    SeverityLabel: _json,
    SeverityNormalized: (_: any) => de_NumberFilterList(_, context),
    SeverityProduct: (_: any) => de_NumberFilterList(_, context),
    SourceUrl: _json,
    ThreatIntelIndicatorCategory: _json,
    ThreatIntelIndicatorLastObservedAt: _json,
    ThreatIntelIndicatorSource: _json,
    ThreatIntelIndicatorSourceUrl: _json,
    ThreatIntelIndicatorType: _json,
    ThreatIntelIndicatorValue: _json,
    Title: _json,
    Type: _json,
    UpdatedAt: _json,
    UserDefinedFields: _json,
    VerificationState: _json,
    WorkflowState: _json,
    WorkflowStatus: _json,
  }) as any;
};

// de_AwsSecurityFindingIdentifier omitted.

// de_AwsSecurityFindingIdentifierList omitted.

/**
 * deserializeAws_restJson1AwsSecurityFindingList
 */
const de_AwsSecurityFindingList = (output: any, context: __SerdeContext): AwsSecurityFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AwsSecurityFinding(entry, context);
    });
  return retVal;
};

// de_AwsSnsTopicDetails omitted.

// de_AwsSnsTopicSubscription omitted.

// de_AwsSnsTopicSubscriptionList omitted.

// de_AwsSqsQueueDetails omitted.

// de_AwsSsmComplianceSummary omitted.

// de_AwsSsmPatch omitted.

// de_AwsSsmPatchComplianceDetails omitted.

// de_AwsStepFunctionStateMachineDetails omitted.

// de_AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails omitted.

// de_AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails omitted.

// de_AwsStepFunctionStateMachineLoggingConfigurationDestinationsList omitted.

// de_AwsStepFunctionStateMachineLoggingConfigurationDetails omitted.

// de_AwsStepFunctionStateMachineTracingConfigurationDetails omitted.

// de_AwsWafRateBasedRuleDetails omitted.

// de_AwsWafRateBasedRuleMatchPredicate omitted.

// de_AwsWafRateBasedRuleMatchPredicateList omitted.

// de_AwsWafRegionalRateBasedRuleDetails omitted.

// de_AwsWafRegionalRateBasedRuleMatchPredicate omitted.

// de_AwsWafRegionalRateBasedRuleMatchPredicateList omitted.

// de_AwsWafRegionalRuleDetails omitted.

// de_AwsWafRegionalRuleGroupDetails omitted.

// de_AwsWafRegionalRuleGroupRulesActionDetails omitted.

// de_AwsWafRegionalRuleGroupRulesDetails omitted.

// de_AwsWafRegionalRuleGroupRulesList omitted.

// de_AwsWafRegionalRulePredicateList omitted.

// de_AwsWafRegionalRulePredicateListDetails omitted.

// de_AwsWafRegionalWebAclDetails omitted.

// de_AwsWafRegionalWebAclRulesList omitted.

// de_AwsWafRegionalWebAclRulesListActionDetails omitted.

// de_AwsWafRegionalWebAclRulesListDetails omitted.

// de_AwsWafRegionalWebAclRulesListOverrideActionDetails omitted.

// de_AwsWafRuleDetails omitted.

// de_AwsWafRuleGroupDetails omitted.

// de_AwsWafRuleGroupRulesActionDetails omitted.

// de_AwsWafRuleGroupRulesDetails omitted.

// de_AwsWafRuleGroupRulesList omitted.

// de_AwsWafRulePredicateList omitted.

// de_AwsWafRulePredicateListDetails omitted.

// de_AwsWafv2ActionAllowDetails omitted.

// de_AwsWafv2ActionBlockDetails omitted.

// de_AwsWafv2CustomHttpHeader omitted.

// de_AwsWafv2CustomRequestHandlingDetails omitted.

// de_AwsWafv2CustomResponseDetails omitted.

// de_AwsWafv2InsertHeadersList omitted.

// de_AwsWafv2RuleGroupDetails omitted.

// de_AwsWafv2RulesActionCaptchaDetails omitted.

// de_AwsWafv2RulesActionCountDetails omitted.

// de_AwsWafv2RulesActionDetails omitted.

// de_AwsWafv2RulesDetails omitted.

// de_AwsWafv2RulesList omitted.

// de_AwsWafv2VisibilityConfigDetails omitted.

// de_AwsWafv2WebAclActionDetails omitted.

// de_AwsWafv2WebAclCaptchaConfigDetails omitted.

// de_AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails omitted.

// de_AwsWafv2WebAclDetails omitted.

// de_AwsWafWebAclDetails omitted.

// de_AwsWafWebAclRule omitted.

// de_AwsWafWebAclRuleList omitted.

// de_AwsXrayEncryptionConfigDetails omitted.

// de_BatchUpdateFindingsUnprocessedFinding omitted.

// de_BatchUpdateFindingsUnprocessedFindingsList omitted.

// de_BooleanFilter omitted.

// de_BooleanFilterList omitted.

// de_CategoryList omitted.

// de_Cell omitted.

// de_Cells omitted.

// de_CidrBlockAssociation omitted.

// de_CidrBlockAssociationList omitted.

// de_City omitted.

// de_ClassificationResult omitted.

// de_ClassificationStatus omitted.

// de_Compliance omitted.

// de_ContainerDetails omitted.

// de_Country omitted.

// de_CustomDataIdentifiersDetections omitted.

// de_CustomDataIdentifiersDetectionsList omitted.

// de_CustomDataIdentifiersResult omitted.

/**
 * deserializeAws_restJson1Cvss
 */
const de_Cvss = (output: any, context: __SerdeContext): Cvss => {
  return take(output, {
    Adjustments: _json,
    BaseScore: __limitedParseDouble,
    BaseVector: __expectString,
    Source: __expectString,
    Version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CvssList
 */
const de_CvssList = (output: any, context: __SerdeContext): Cvss[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cvss(entry, context);
    });
  return retVal;
};

// de_DataClassificationDetails omitted.

// de_DateFilter omitted.

// de_DateFilterList omitted.

// de_DateRange omitted.

// de_DnsRequestAction omitted.

// de_FieldMap omitted.

// de_FilePathList omitted.

// de_FilePaths omitted.

// de_FindingAggregator omitted.

// de_FindingAggregatorList omitted.

/**
 * deserializeAws_restJson1FindingHistoryRecord
 */
const de_FindingHistoryRecord = (output: any, context: __SerdeContext): FindingHistoryRecord => {
  return take(output, {
    FindingCreated: __expectBoolean,
    FindingIdentifier: _json,
    NextToken: __expectString,
    UpdateSource: _json,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Updates: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FindingHistoryRecordList
 */
const de_FindingHistoryRecordList = (output: any, context: __SerdeContext): FindingHistoryRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingHistoryRecord(entry, context);
    });
  return retVal;
};

// de_FindingHistoryUpdate omitted.

// de_FindingHistoryUpdatesList omitted.

// de_FindingHistoryUpdateSource omitted.

// de_FindingProviderFields omitted.

// de_FindingProviderSeverity omitted.

// de_FirewallPolicyDetails omitted.

// de_FirewallPolicyStatefulRuleGroupReferencesDetails omitted.

// de_FirewallPolicyStatefulRuleGroupReferencesList omitted.

// de_FirewallPolicyStatelessCustomActionsDetails omitted.

// de_FirewallPolicyStatelessCustomActionsList omitted.

// de_FirewallPolicyStatelessRuleGroupReferencesDetails omitted.

// de_FirewallPolicyStatelessRuleGroupReferencesList omitted.

/**
 * deserializeAws_restJson1GeoLocation
 */
const de_GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return take(output, {
    Lat: __limitedParseDouble,
    Lon: __limitedParseDouble,
  }) as any;
};

// de_IcmpTypeCode omitted.

// de_ImportFindingsError omitted.

// de_ImportFindingsErrorList omitted.

/**
 * deserializeAws_restJson1Insight
 */
const de_Insight = (output: any, context: __SerdeContext): Insight => {
  return take(output, {
    Filters: (_: any) => de_AwsSecurityFindingFilters(_, context),
    GroupByAttribute: __expectString,
    InsightArn: __expectString,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightList
 */
const de_InsightList = (output: any, context: __SerdeContext): Insight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Insight(entry, context);
    });
  return retVal;
};

// de_InsightResults omitted.

// de_InsightResultValue omitted.

// de_InsightResultValueList omitted.

// de_IntegerList omitted.

// de_IntegrationTypeList omitted.

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return take(output, {
    AccountId: __expectString,
    InvitationId: __expectString,
    InvitedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MemberStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InvitationList
 */
const de_InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Invitation(entry, context);
    });
  return retVal;
};

// de_IpFilter omitted.

// de_IpFilterList omitted.

// de_IpOrganizationDetails omitted.

// de_Ipv6CidrBlockAssociation omitted.

// de_Ipv6CidrBlockAssociationList omitted.

// de_KeywordFilter omitted.

// de_KeywordFilterList omitted.

// de_LoadBalancerState omitted.

// de_Malware omitted.

// de_MalwareList omitted.

// de_MapFilter omitted.

// de_MapFilterList omitted.

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    AccountId: __expectString,
    AdministratorId: __expectString,
    Email: __expectString,
    InvitedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MasterId: __expectString,
    MemberStatus: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MemberList
 */
const de_MemberList = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Member(entry, context);
    });
  return retVal;
};

// de_Network omitted.

/**
 * deserializeAws_restJson1NetworkConnectionAction
 */
const de_NetworkConnectionAction = (output: any, context: __SerdeContext): NetworkConnectionAction => {
  return take(output, {
    Blocked: __expectBoolean,
    ConnectionDirection: __expectString,
    LocalPortDetails: _json,
    Protocol: __expectString,
    RemoteIpDetails: (_: any) => de_ActionRemoteIpDetails(_, context),
    RemotePortDetails: _json,
  }) as any;
};

// de_NetworkHeader omitted.

// de_NetworkPathComponent omitted.

// de_NetworkPathComponentDetails omitted.

// de_NetworkPathList omitted.

// de_NonEmptyStringList omitted.

// de_Note omitted.

// de_NoteUpdate omitted.

/**
 * deserializeAws_restJson1NumberFilter
 */
const de_NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return take(output, {
    Eq: __limitedParseDouble,
    Gte: __limitedParseDouble,
    Lte: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1NumberFilterList
 */
const de_NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NumberFilter(entry, context);
    });
  return retVal;
};

// de_Occurrences omitted.

// de_Page omitted.

// de_Pages omitted.

// de_PatchSummary omitted.

/**
 * deserializeAws_restJson1PortProbeAction
 */
const de_PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return take(output, {
    Blocked: __expectBoolean,
    PortProbeDetails: (_: any) => de_PortProbeDetailList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PortProbeDetail
 */
const de_PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return take(output, {
    LocalIpDetails: _json,
    LocalPortDetails: _json,
    RemoteIpDetails: (_: any) => de_ActionRemoteIpDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PortProbeDetailList
 */
const de_PortProbeDetailList = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PortProbeDetail(entry, context);
    });
  return retVal;
};

// de_PortRange omitted.

// de_PortRangeFromTo omitted.

// de_PortRangeList omitted.

// de_ProcessDetails omitted.

// de_Product omitted.

// de_ProductsList omitted.

// de_ProductSubscriptionArnList omitted.

// de_PropagatingVgwSetDetails omitted.

// de_PropagatingVgwSetList omitted.

// de_Range omitted.

// de_Ranges omitted.

// de_Recommendation omitted.

// de__Record omitted.

// de_Records omitted.

// de_RelatedFinding omitted.

// de_RelatedFindingList omitted.

// de_RelatedRequirementsList omitted.

// de_Remediation omitted.

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    DataClassification: _json,
    Details: (_: any) => de_ResourceDetails(_, context),
    Id: __expectString,
    Partition: __expectString,
    Region: __expectString,
    ResourceRole: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return take(output, {
    AwsAmazonMqBroker: _json,
    AwsApiGatewayRestApi: _json,
    AwsApiGatewayStage: (_: any) => de_AwsApiGatewayStageDetails(_, context),
    AwsApiGatewayV2Api: _json,
    AwsApiGatewayV2Stage: (_: any) => de_AwsApiGatewayV2StageDetails(_, context),
    AwsAppSyncGraphQlApi: _json,
    AwsAutoScalingAutoScalingGroup: _json,
    AwsAutoScalingLaunchConfiguration: _json,
    AwsBackupBackupPlan: _json,
    AwsBackupBackupVault: _json,
    AwsBackupRecoveryPoint: _json,
    AwsCertificateManagerCertificate: _json,
    AwsCloudFormationStack: _json,
    AwsCloudFrontDistribution: _json,
    AwsCloudTrailTrail: _json,
    AwsCloudWatchAlarm: (_: any) => de_AwsCloudWatchAlarmDetails(_, context),
    AwsCodeBuildProject: _json,
    AwsDynamoDbTable: _json,
    AwsEc2Eip: _json,
    AwsEc2Instance: _json,
    AwsEc2LaunchTemplate: (_: any) => de_AwsEc2LaunchTemplateDetails(_, context),
    AwsEc2NetworkAcl: _json,
    AwsEc2NetworkInterface: _json,
    AwsEc2RouteTable: _json,
    AwsEc2SecurityGroup: _json,
    AwsEc2Subnet: _json,
    AwsEc2TransitGateway: _json,
    AwsEc2Volume: _json,
    AwsEc2Vpc: _json,
    AwsEc2VpcEndpointService: _json,
    AwsEc2VpcPeeringConnection: _json,
    AwsEc2VpnConnection: _json,
    AwsEcrContainerImage: _json,
    AwsEcrRepository: _json,
    AwsEcsCluster: _json,
    AwsEcsContainer: _json,
    AwsEcsService: _json,
    AwsEcsTask: _json,
    AwsEcsTaskDefinition: _json,
    AwsEfsAccessPoint: _json,
    AwsEksCluster: _json,
    AwsElasticBeanstalkEnvironment: _json,
    AwsElasticsearchDomain: _json,
    AwsElbLoadBalancer: _json,
    AwsElbv2LoadBalancer: _json,
    AwsEventSchemasRegistry: _json,
    AwsGuardDutyDetector: _json,
    AwsIamAccessKey: _json,
    AwsIamGroup: _json,
    AwsIamPolicy: _json,
    AwsIamRole: _json,
    AwsIamUser: _json,
    AwsKinesisStream: _json,
    AwsKmsKey: (_: any) => de_AwsKmsKeyDetails(_, context),
    AwsLambdaFunction: _json,
    AwsLambdaLayerVersion: _json,
    AwsNetworkFirewallFirewall: _json,
    AwsNetworkFirewallFirewallPolicy: _json,
    AwsNetworkFirewallRuleGroup: (_: any) => de_AwsNetworkFirewallRuleGroupDetails(_, context),
    AwsOpenSearchServiceDomain: _json,
    AwsRdsDbCluster: _json,
    AwsRdsDbClusterSnapshot: _json,
    AwsRdsDbInstance: _json,
    AwsRdsDbSecurityGroup: _json,
    AwsRdsDbSnapshot: _json,
    AwsRdsEventSubscription: _json,
    AwsRedshiftCluster: (_: any) => de_AwsRedshiftClusterDetails(_, context),
    AwsS3AccountPublicAccessBlock: _json,
    AwsS3Bucket: _json,
    AwsS3Object: _json,
    AwsSageMakerNotebookInstance: _json,
    AwsSecretsManagerSecret: _json,
    AwsSnsTopic: _json,
    AwsSqsQueue: _json,
    AwsSsmPatchCompliance: _json,
    AwsStepFunctionStateMachine: _json,
    AwsWafRateBasedRule: _json,
    AwsWafRegionalRateBasedRule: _json,
    AwsWafRegionalRule: _json,
    AwsWafRegionalRuleGroup: _json,
    AwsWafRegionalWebAcl: _json,
    AwsWafRule: _json,
    AwsWafRuleGroup: _json,
    AwsWafWebAcl: _json,
    AwsWafv2RuleGroup: _json,
    AwsWafv2WebAcl: _json,
    AwsXrayEncryptionConfig: _json,
    Container: _json,
    Other: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

// de_Result omitted.

// de_ResultList omitted.

// de_RouteSetDetails omitted.

// de_RouteSetList omitted.

// de_RuleGroupDetails omitted.

// de_RuleGroupSource omitted.

// de_RuleGroupSourceCustomActionsDetails omitted.

// de_RuleGroupSourceCustomActionsList omitted.

// de_RuleGroupSourceListDetails omitted.

// de_RuleGroupSourceStatefulRulesDetails omitted.

// de_RuleGroupSourceStatefulRulesHeaderDetails omitted.

// de_RuleGroupSourceStatefulRulesList omitted.

// de_RuleGroupSourceStatefulRulesOptionsDetails omitted.

// de_RuleGroupSourceStatefulRulesOptionsList omitted.

// de_RuleGroupSourceStatefulRulesRuleOptionsSettingsList omitted.

// de_RuleGroupSourceStatelessRuleDefinition omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributes omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesDestinations omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesDestinationsList omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesProtocolsList omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesSourcePorts omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesSources omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesSourcesList omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesTcpFlags omitted.

// de_RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList omitted.

// de_RuleGroupSourceStatelessRulesAndCustomActionsDetails omitted.

// de_RuleGroupSourceStatelessRulesDetails omitted.

// de_RuleGroupSourceStatelessRulesList omitted.

// de_RuleGroupVariables omitted.

// de_RuleGroupVariablesIpSetsDetails omitted.

// de_RuleGroupVariablesPortSetsDetails omitted.

// de_SecurityControl omitted.

// de_SecurityControlDefinition omitted.

// de_SecurityControlDefinitions omitted.

// de_SecurityControls omitted.

// de_SecurityGroups omitted.

// de_SensitiveDataDetections omitted.

// de_SensitiveDataDetectionsList omitted.

// de_SensitiveDataResult omitted.

// de_SensitiveDataResultList omitted.

/**
 * deserializeAws_restJson1Severity
 */
const de_Severity = (output: any, context: __SerdeContext): Severity => {
  return take(output, {
    Label: __expectString,
    Normalized: __expectInt32,
    Original: __expectString,
    Product: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1SeverityUpdate
 */
const de_SeverityUpdate = (output: any, context: __SerdeContext): SeverityUpdate => {
  return take(output, {
    Label: __expectString,
    Normalized: __expectInt32,
    Product: __limitedParseDouble,
  }) as any;
};

// de_SoftwarePackage omitted.

// de_SoftwarePackageList omitted.

// de_Standard omitted.

// de_Standards omitted.

/**
 * deserializeAws_restJson1StandardsControl
 */
const de_StandardsControl = (output: any, context: __SerdeContext): StandardsControl => {
  return take(output, {
    ControlId: __expectString,
    ControlStatus: __expectString,
    ControlStatusUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    DisabledReason: __expectString,
    RelatedRequirements: _json,
    RemediationUrl: __expectString,
    SeverityRating: __expectString,
    StandardsControlArn: __expectString,
    Title: __expectString,
  }) as any;
};

// de_StandardsControlArnList omitted.

/**
 * deserializeAws_restJson1StandardsControlAssociationDetail
 */
const de_StandardsControlAssociationDetail = (
  output: any,
  context: __SerdeContext
): StandardsControlAssociationDetail => {
  return take(output, {
    AssociationStatus: __expectString,
    RelatedRequirements: _json,
    SecurityControlArn: __expectString,
    SecurityControlId: __expectString,
    StandardsArn: __expectString,
    StandardsControlArns: _json,
    StandardsControlDescription: __expectString,
    StandardsControlTitle: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UpdatedReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StandardsControlAssociationDetails
 */
const de_StandardsControlAssociationDetails = (
  output: any,
  context: __SerdeContext
): StandardsControlAssociationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StandardsControlAssociationDetail(entry, context);
    });
  return retVal;
};

// de_StandardsControlAssociationId omitted.

/**
 * deserializeAws_restJson1StandardsControlAssociationSummaries
 */
const de_StandardsControlAssociationSummaries = (
  output: any,
  context: __SerdeContext
): StandardsControlAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StandardsControlAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StandardsControlAssociationSummary
 */
const de_StandardsControlAssociationSummary = (
  output: any,
  context: __SerdeContext
): StandardsControlAssociationSummary => {
  return take(output, {
    AssociationStatus: __expectString,
    RelatedRequirements: _json,
    SecurityControlArn: __expectString,
    SecurityControlId: __expectString,
    StandardsArn: __expectString,
    StandardsControlDescription: __expectString,
    StandardsControlTitle: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UpdatedReason: __expectString,
  }) as any;
};

// de_StandardsControlAssociationUpdate omitted.

/**
 * deserializeAws_restJson1StandardsControls
 */
const de_StandardsControls = (output: any, context: __SerdeContext): StandardsControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StandardsControl(entry, context);
    });
  return retVal;
};

// de_StandardsInputParameterMap omitted.

// de_StandardsManagedBy omitted.

// de_StandardsStatusReason omitted.

// de_StandardsSubscription omitted.

// de_StandardsSubscriptions omitted.

// de_StatelessCustomActionDefinition omitted.

// de_StatelessCustomPublishMetricAction omitted.

// de_StatelessCustomPublishMetricActionDimension omitted.

// de_StatelessCustomPublishMetricActionDimensionsList omitted.

// de_StatusReason omitted.

// de_StatusReasonsList omitted.

// de_StringFilter omitted.

// de_StringFilterList omitted.

// de_StringList omitted.

// de_TagMap omitted.

// de_Threat omitted.

// de_ThreatIntelIndicator omitted.

// de_ThreatIntelIndicatorList omitted.

// de_ThreatList omitted.

// de_TypeList omitted.

// de_UnprocessedAutomationRule omitted.

// de_UnprocessedAutomationRulesList omitted.

// de_UnprocessedSecurityControl omitted.

// de_UnprocessedSecurityControls omitted.

// de_UnprocessedStandardsControlAssociation omitted.

// de_UnprocessedStandardsControlAssociations omitted.

// de_UnprocessedStandardsControlAssociationUpdate omitted.

// de_UnprocessedStandardsControlAssociationUpdates omitted.

// de_VolumeMount omitted.

// de_VolumeMountList omitted.

// de_VpcInfoCidrBlockSetDetails omitted.

// de_VpcInfoCidrBlockSetList omitted.

// de_VpcInfoIpv6CidrBlockSetDetails omitted.

// de_VpcInfoIpv6CidrBlockSetList omitted.

// de_VpcInfoPeeringOptionsDetails omitted.

/**
 * deserializeAws_restJson1Vulnerability
 */
const de_Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return take(output, {
    Cvss: (_: any) => de_CvssList(_, context),
    FixAvailable: __expectString,
    Id: __expectString,
    ReferenceUrls: _json,
    RelatedVulnerabilities: _json,
    Vendor: _json,
    VulnerablePackages: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VulnerabilityList
 */
const de_VulnerabilityList = (output: any, context: __SerdeContext): Vulnerability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Vulnerability(entry, context);
    });
  return retVal;
};

// de_VulnerabilityVendor omitted.

// de_WafAction omitted.

// de_WafExcludedRule omitted.

// de_WafExcludedRuleList omitted.

// de_WafOverrideAction omitted.

// de_Workflow omitted.

// de_WorkflowUpdate omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
