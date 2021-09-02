import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "../commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "../commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "../commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "../commands/BatchImportFindingsCommand";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "../commands/BatchUpdateFindingsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "../commands/CreateActionTargetCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "../commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "../commands/DeleteActionTargetCommand";
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
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "../commands/UpdateActionTargetCommand";
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
  ActionTarget,
  Adjustment,
  AdminAccount,
  AvailabilityZone,
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
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCertificateManagerCertificateDomainValidationOption,
  AwsCertificateManagerCertificateExtendedKeyUsage,
  AwsCertificateManagerCertificateKeyUsage,
  AwsCertificateManagerCertificateOptions,
  AwsCertificateManagerCertificateRenewalSummary,
  AwsCertificateManagerCertificateResourceRecord,
  AwsCloudFrontDistributionCacheBehavior,
  AwsCloudFrontDistributionCacheBehaviors,
  AwsCloudFrontDistributionDefaultCacheBehavior,
  AwsCloudFrontDistributionDetails,
  AwsCloudFrontDistributionLogging,
  AwsCloudFrontDistributionOriginGroup,
  AwsCloudFrontDistributionOriginGroupFailover,
  AwsCloudFrontDistributionOriginGroupFailoverStatusCodes,
  AwsCloudFrontDistributionOriginGroups,
  AwsCloudFrontDistributionOriginItem,
  AwsCloudFrontDistributionOriginS3OriginConfig,
  AwsCloudFrontDistributionOrigins,
  AwsCloudTrailTrailDetails,
  AwsCodeBuildProjectDetails,
  AwsCodeBuildProjectEnvironment,
  AwsCodeBuildProjectEnvironmentRegistryCredential,
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
  AwsEc2InstanceNetworkInterfacesDetails,
  AwsEc2NetworkAclAssociation,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkAclEntry,
  AwsEc2NetworkInterfaceAttachment,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2NetworkInterfaceIpV6AddressDetail,
  AwsEc2NetworkInterfacePrivateIpAddressDetail,
  AwsEc2NetworkInterfaceSecurityGroup,
  AwsEc2SecurityGroupDetails,
  AwsEc2SecurityGroupIpPermission,
  AwsEc2SecurityGroupIpRange,
  AwsEc2SecurityGroupIpv6Range,
  AwsEc2SecurityGroupPrefixListId,
  AwsEc2SecurityGroupUserIdGroupPair,
  AwsEc2SubnetDetails,
  AwsEc2VolumeAttachment,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpnConnectionDetails,
  AwsEc2VpnConnectionOptionsDetails,
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails,
  AwsEc2VpnConnectionRoutesDetails,
  AwsEc2VpnConnectionVgwTelemetryDetails,
  AwsEcrContainerImageDetails,
  AwsEcsClusterClusterSettingsDetails,
  AwsEcsClusterConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
  AwsEcsClusterDefaultCapacityProviderStrategyDetails,
  AwsEcsClusterDetails,
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
  AwsElbv2LoadBalancerDetails,
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
  AwsS3BucketDetails,
  AwsS3BucketLoggingConfiguration,
  AwsS3BucketNotificationConfiguration,
  AwsS3BucketNotificationConfigurationDetail,
  AwsS3BucketNotificationConfigurationFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilterRule,
  AwsS3BucketServerSideEncryptionByDefault,
  AwsS3BucketServerSideEncryptionConfiguration,
  AwsS3BucketServerSideEncryptionRule,
  AwsS3BucketWebsiteConfiguration,
  AwsS3BucketWebsiteConfigurationRedirectTo,
  AwsS3BucketWebsiteConfigurationRoutingRule,
  AwsS3BucketWebsiteConfigurationRoutingRuleCondition,
  AwsS3BucketWebsiteConfigurationRoutingRuleRedirect,
  AwsS3ObjectDetails,
  AwsSecretsManagerSecretDetails,
  AwsSecretsManagerSecretRotationRules,
  CidrBlockAssociation,
  City,
  Compliance,
  Country,
  DnsRequestAction,
  FindingProviderFields,
  FindingProviderSeverity,
  GeoLocation,
  IcmpTypeCode,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  IpOrganizationDetails,
  Ipv6CidrBlockAssociation,
  LimitExceededException,
  LoadBalancerState,
  Malware,
  NetworkConnectionAction,
  PortProbeAction,
  PortProbeDetail,
  PortRange,
  PortRangeFromTo,
  RelatedFinding,
  ResourceNotFoundException,
  StatusReason,
} from "../models/models_0";
import {
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSecurityFindingIdentifier,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  AwsSsmComplianceSummary,
  AwsSsmPatch,
  AwsSsmPatchComplianceDetails,
  AwsWafWebAclDetails,
  AwsWafWebAclRule,
  BatchUpdateFindingsUnprocessedFinding,
  Cell,
  ClassificationResult,
  ClassificationStatus,
  ContainerDetails,
  CustomDataIdentifiersDetections,
  CustomDataIdentifiersResult,
  Cvss,
  DataClassificationDetails,
  DateFilter,
  DateRange,
  ImportFindingsError,
  Insight,
  InsightResultValue,
  InsightResults,
  IntegrationType,
  Invitation,
  IpFilter,
  KeywordFilter,
  MapFilter,
  Member,
  Network,
  NetworkHeader,
  NetworkPathComponent,
  NetworkPathComponentDetails,
  Note,
  NoteUpdate,
  NumberFilter,
  Occurrences,
  Page,
  PatchSummary,
  ProcessDetails,
  Product,
  Range,
  Recommendation,
  Remediation,
  Resource,
  ResourceConflictException,
  ResourceDetails,
  Result,
  SensitiveDataDetections,
  SensitiveDataResult,
  Severity,
  SeverityUpdate,
  SoftwarePackage,
  SortCriterion,
  Standard,
  StandardsControl,
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StringFilter,
  ThreatIntelIndicator,
  Vulnerability,
  VulnerabilityVendor,
  WafAction,
  WafExcludedRule,
  WafOverrideAction,
  Workflow,
  WorkflowUpdate,
  _Record,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AcceptAdministratorInvitationCommand = async (
  input: AcceptAdministratorInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
  let body: any;
  body = JSON.stringify({
    ...(input.AdministratorId !== undefined &&
      input.AdministratorId !== null && { AdministratorId: input.AdministratorId }),
    ...(input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId }),
  });
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

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId }),
    ...(input.MasterId !== undefined && input.MasterId !== null && { MasterId: input.MasterId }),
  });
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

export const serializeAws_restJson1BatchDisableStandardsCommand = async (
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/deregister";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionArns !== undefined &&
      input.StandardsSubscriptionArns !== null && {
        StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
          input.StandardsSubscriptionArns,
          context
        ),
      }),
  });
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

export const serializeAws_restJson1BatchEnableStandardsCommand = async (
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/register";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionRequests !== undefined &&
      input.StandardsSubscriptionRequests !== null && {
        StandardsSubscriptionRequests: serializeAws_restJson1StandardsSubscriptionRequests(
          input.StandardsSubscriptionRequests,
          context
        ),
      }),
  });
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

export const serializeAws_restJson1BatchImportFindingsCommand = async (
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/import";
  let body: any;
  body = JSON.stringify({
    ...(input.Findings !== undefined &&
      input.Findings !== null && {
        Findings: serializeAws_restJson1BatchImportFindingsRequestFindingList(input.Findings, context),
      }),
  });
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

export const serializeAws_restJson1BatchUpdateFindingsCommand = async (
  input: BatchUpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/batchupdate";
  let body: any;
  body = JSON.stringify({
    ...(input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence }),
    ...(input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality }),
    ...(input.FindingIdentifiers !== undefined &&
      input.FindingIdentifiers !== null && {
        FindingIdentifiers: serializeAws_restJson1AwsSecurityFindingIdentifierList(input.FindingIdentifiers, context),
      }),
    ...(input.Note !== undefined &&
      input.Note !== null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RelatedFindings !== undefined &&
      input.RelatedFindings !== null && {
        RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
      }),
    ...(input.Severity !== undefined &&
      input.Severity !== null && { Severity: serializeAws_restJson1SeverityUpdate(input.Severity, context) }),
    ...(input.Types !== undefined &&
      input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UserDefinedFields !== undefined &&
      input.UserDefinedFields !== null && {
        UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
      }),
    ...(input.VerificationState !== undefined &&
      input.VerificationState !== null && { VerificationState: input.VerificationState }),
    ...(input.Workflow !== undefined &&
      input.Workflow !== null && { Workflow: serializeAws_restJson1WorkflowUpdate(input.Workflow, context) }),
  });
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

export const serializeAws_restJson1CreateActionTargetCommand = async (
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
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

export const serializeAws_restJson1CreateInsightCommand = async (
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.GroupByAttribute !== undefined &&
      input.GroupByAttribute !== null && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
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

export const serializeAws_restJson1CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails !== undefined &&
      input.AccountDetails !== null && {
        AccountDetails: serializeAws_restJson1AccountDetailsList(input.AccountDetails, context),
      }),
  });
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

export const serializeAws_restJson1DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1DeleteActionTargetCommand = async (
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
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

export const serializeAws_restJson1DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
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

export const serializeAws_restJson1DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1DescribeActionTargetsCommand = async (
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ActionTargetArns !== undefined &&
      input.ActionTargetArns !== null && {
        ActionTargetArns: serializeAws_restJson1ArnList(input.ActionTargetArns, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  const query: any = {
    ...(input.HubArn !== undefined && { HubArn: input.HubArn }),
  };
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

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1DescribeProductsCommand = async (
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/products";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.ProductArn !== undefined && { ProductArn: input.ProductArn }),
  };
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

export const serializeAws_restJson1DescribeStandardsCommand = async (
  input: DescribeStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1DescribeStandardsControlsCommand = async (
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/standards/controls/{StandardsSubscriptionArn+}";
  if (input.StandardsSubscriptionArn !== undefined) {
    const labelValue: string = input.StandardsSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StandardsSubscriptionArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsSubscriptionArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: StandardsSubscriptionArn.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1DisableImportFindingsForProductCommand = async (
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/productSubscriptions/{ProductSubscriptionArn+}";
  if (input.ProductSubscriptionArn !== undefined) {
    const labelValue: string = input.ProductSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProductSubscriptionArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ProductSubscriptionArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProductSubscriptionArn.");
  }
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

export const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId }),
  });
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

export const serializeAws_restJson1DisableSecurityHubCommand = async (
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
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

export const serializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
  input: DisassociateFromAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master/disassociate";
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

export const serializeAws_restJson1DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1EnableImportFindingsForProductCommand = async (
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }),
  });
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

export const serializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  input: EnableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId }),
  });
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

export const serializeAws_restJson1EnableSecurityHubCommand = async (
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.EnableDefaultStandards !== undefined &&
      input.EnableDefaultStandards !== null && { EnableDefaultStandards: input.EnableDefaultStandards }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
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

export const serializeAws_restJson1GetAdministratorAccountCommand = async (
  input: GetAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
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

export const serializeAws_restJson1GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/get";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StandardsSubscriptionArns !== undefined &&
      input.StandardsSubscriptionArns !== null && {
        StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
          input.StandardsSubscriptionArns,
          context
        ),
      }),
  });
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

export const serializeAws_restJson1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
  });
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

export const serializeAws_restJson1GetInsightResultsCommand = async (
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/results/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
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

export const serializeAws_restJson1GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/get";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightArns !== undefined &&
      input.InsightArns !== null && { InsightArns: serializeAws_restJson1ArnList(input.InsightArns, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/count";
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

export const serializeAws_restJson1GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
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

export const serializeAws_restJson1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/invite";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
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

export const serializeAws_restJson1ListEnabledProductsForImportCommand = async (
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  const query: any = {
    ...(input.OnlyAssociated !== undefined && { OnlyAssociated: input.OnlyAssociated.toString() }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  input: ListOrganizationAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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

export const serializeAws_restJson1UpdateActionTargetCommand = async (
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
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

export const serializeAws_restJson1UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.Note !== undefined &&
      input.Note !== null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState }),
  });
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

export const serializeAws_restJson1UpdateInsightCommand = async (
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.GroupByAttribute !== undefined &&
      input.GroupByAttribute !== null && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
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

export const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { AutoEnable: input.AutoEnable }),
  });
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

export const serializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  input: UpdateSecurityHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnableControls !== undefined &&
      input.AutoEnableControls !== null && { AutoEnableControls: input.AutoEnableControls }),
  });
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

export const serializeAws_restJson1UpdateStandardsControlCommand = async (
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/control/{StandardsControlArn+}";
  if (input.StandardsControlArn !== undefined) {
    const labelValue: string = input.StandardsControlArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StandardsControlArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsControlArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: StandardsControlArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ControlStatus !== undefined && input.ControlStatus !== null && { ControlStatus: input.ControlStatus }),
    ...(input.DisabledReason !== undefined &&
      input.DisabledReason !== null && { DisabledReason: input.DisabledReason }),
  });
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

export const deserializeAws_restJson1AcceptAdministratorInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptAdministratorInvitationCommandError(output, context);
  }
  const contents: AcceptAdministratorInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptAdministratorInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchDisableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisableStandardsCommandError(output, context);
  }
  const contents: BatchDisableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    StandardsSubscriptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchEnableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEnableStandardsCommandError(output, context);
  }
  const contents: BatchEnableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    StandardsSubscriptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchEnableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchImportFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchImportFindingsCommandError(output, context);
  }
  const contents: BatchImportFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FailedCount: undefined,
    FailedFindings: undefined,
    SuccessCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FailedCount !== undefined && data.FailedCount !== null) {
    contents.FailedCount = __expectInt32(data.FailedCount);
  }
  if (data.FailedFindings !== undefined && data.FailedFindings !== null) {
    contents.FailedFindings = deserializeAws_restJson1ImportFindingsErrorList(data.FailedFindings, context);
  }
  if (data.SuccessCount !== undefined && data.SuccessCount !== null) {
    contents.SuccessCount = __expectInt32(data.SuccessCount);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchImportFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchUpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateFindingsCommandError(output, context);
  }
  const contents: BatchUpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProcessedFindings: undefined,
    UnprocessedFindings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProcessedFindings !== undefined && data.ProcessedFindings !== null) {
    contents.ProcessedFindings = deserializeAws_restJson1AwsSecurityFindingIdentifierList(
      data.ProcessedFindings,
      context
    );
  }
  if (data.UnprocessedFindings !== undefined && data.UnprocessedFindings !== null) {
    contents.UnprocessedFindings = deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList(
      data.UnprocessedFindings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateActionTargetCommandError(output, context);
  }
  const contents: CreateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActionTargetArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = __expectString(data.ActionTargetArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInsightCommandError(output, context);
  }
  const contents: CreateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    InsightArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = __expectString(data.InsightArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMembersCommandError(output, context);
  }
  const contents: CreateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
  }
  const contents: DeclineInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteActionTargetCommandError(output, context);
  }
  const contents: DeleteActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActionTargetArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = __expectString(data.ActionTargetArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInsightCommandError(output, context);
  }
  const contents: DeleteInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    InsightArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = __expectString(data.InsightArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
  }
  const contents: DeleteInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMembersCommandError(output, context);
  }
  const contents: DeleteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeActionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeActionTargetsCommandError(output, context);
  }
  const contents: DescribeActionTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActionTargets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargets !== undefined && data.ActionTargets !== null) {
    contents.ActionTargets = deserializeAws_restJson1ActionTargetList(data.ActionTargets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeActionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeHubCommandError(output, context);
  }
  const contents: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoEnableControls: undefined,
    HubArn: undefined,
    SubscribedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoEnableControls !== undefined && data.AutoEnableControls !== null) {
    contents.AutoEnableControls = __expectBoolean(data.AutoEnableControls);
  }
  if (data.HubArn !== undefined && data.HubArn !== null) {
    contents.HubArn = __expectString(data.HubArn);
  }
  if (data.SubscribedAt !== undefined && data.SubscribedAt !== null) {
    contents.SubscribedAt = __expectString(data.SubscribedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context);
  }
  const contents: DescribeOrganizationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoEnable: undefined,
    MemberAccountLimitReached: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoEnable !== undefined && data.AutoEnable !== null) {
    contents.AutoEnable = __expectBoolean(data.AutoEnable);
  }
  if (data.MemberAccountLimitReached !== undefined && data.MemberAccountLimitReached !== null) {
    contents.MemberAccountLimitReached = __expectBoolean(data.MemberAccountLimitReached);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProductsCommandError(output, context);
  }
  const contents: DescribeProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Products: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Products !== undefined && data.Products !== null) {
    contents.Products = deserializeAws_restJson1ProductsList(data.Products, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStandardsCommandError(output, context);
  }
  const contents: DescribeStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Standards: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Standards !== undefined && data.Standards !== null) {
    contents.Standards = deserializeAws_restJson1Standards(data.Standards, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeStandardsControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStandardsControlsCommandError(output, context);
  }
  const contents: DescribeStandardsControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Controls: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Controls !== undefined && data.Controls !== null) {
    contents.Controls = deserializeAws_restJson1StandardsControls(data.Controls, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStandardsControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableImportFindingsForProductCommandError(output, context);
  }
  const contents: DisableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: DisableOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableSecurityHubCommandError(output, context);
  }
  const contents: DisableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError(output, context);
  }
  const contents: DisassociateFromAdministratorAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableImportFindingsForProductCommandError(output, context);
  }
  const contents: EnableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProductSubscriptionArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProductSubscriptionArn !== undefined && data.ProductSubscriptionArn !== null) {
    contents.ProductSubscriptionArn = __expectString(data.ProductSubscriptionArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: EnableOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableSecurityHubCommandError(output, context);
  }
  const contents: EnableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAdministratorAccountCommandError(output, context);
  }
  const contents: GetAdministratorAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    Administrator: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Administrator !== undefined && data.Administrator !== null) {
    contents.Administrator = deserializeAws_restJson1Invitation(data.Administrator, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEnabledStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEnabledStandardsCommandError(output, context);
  }
  const contents: GetEnabledStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    StandardsSubscriptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEnabledStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsCommandError(output, context);
  }
  const contents: GetFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Findings: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Findings !== undefined && data.Findings !== null) {
    contents.Findings = deserializeAws_restJson1AwsSecurityFindingList(data.Findings, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightResultsCommandError(output, context);
  }
  const contents: GetInsightResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    InsightResults: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightResults !== undefined && data.InsightResults !== null) {
    contents.InsightResults = deserializeAws_restJson1InsightResults(data.InsightResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightsCommandError(output, context);
  }
  const contents: GetInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Insights: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Insights !== undefined && data.Insights !== null) {
    contents.Insights = deserializeAws_restJson1InsightList(data.Insights, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
  }
  const contents: GetInvitationsCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    InvitationsCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InvitationsCount !== undefined && data.InvitationsCount !== null) {
    contents.InvitationsCount = __expectInt32(data.InvitationsCount);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
  }
  const contents: GetMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    Master: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Master !== undefined && data.Master !== null) {
    contents.Master = deserializeAws_restJson1Invitation(data.Master, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMembersCommandError(output, context);
  }
  const contents: GetMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Members: undefined,
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InviteMembersCommandError(output, context);
  }
  const contents: InviteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListEnabledProductsForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEnabledProductsForImportCommandError(output, context);
  }
  const contents: ListEnabledProductsForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ProductSubscriptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProductSubscriptions !== undefined && data.ProductSubscriptions !== null) {
    contents.ProductSubscriptions = deserializeAws_restJson1ProductSubscriptionArnList(
      data.ProductSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEnabledProductsForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Invitations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Members: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context);
  }
  const contents: ListOrganizationAdminAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdminAccounts: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdminAccounts !== undefined && data.AdminAccounts !== null) {
    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.AdminAccounts, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateActionTargetCommandError(output, context);
  }
  const contents: UpdateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInsightCommandError(output, context);
  }
  const contents: UpdateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context);
  }
  const contents: UpdateOrganizationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError(output, context);
  }
  const contents: UpdateSecurityHubConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateStandardsControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStandardsControlCommandError(output, context);
  }
  const contents: UpdateStandardsControlCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStandardsControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: InvalidAccessException = {
    name: "InvalidAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1AccountDetails = (input: AccountDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
  };
};

const serializeAws_restJson1AccountDetailsList = (input: AccountDetails[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AccountDetails(entry, context);
    });
};

const serializeAws_restJson1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType }),
    ...(input.AwsApiCallAction !== undefined &&
      input.AwsApiCallAction !== null && {
        AwsApiCallAction: serializeAws_restJson1AwsApiCallAction(input.AwsApiCallAction, context),
      }),
    ...(input.DnsRequestAction !== undefined &&
      input.DnsRequestAction !== null && {
        DnsRequestAction: serializeAws_restJson1DnsRequestAction(input.DnsRequestAction, context),
      }),
    ...(input.NetworkConnectionAction !== undefined &&
      input.NetworkConnectionAction !== null && {
        NetworkConnectionAction: serializeAws_restJson1NetworkConnectionAction(input.NetworkConnectionAction, context),
      }),
    ...(input.PortProbeAction !== undefined &&
      input.PortProbeAction !== null && {
        PortProbeAction: serializeAws_restJson1PortProbeAction(input.PortProbeAction, context),
      }),
  };
};

const serializeAws_restJson1ActionLocalIpDetails = (input: ActionLocalIpDetails, context: __SerdeContext): any => {
  return {
    ...(input.IpAddressV4 !== undefined && input.IpAddressV4 !== null && { IpAddressV4: input.IpAddressV4 }),
  };
};

const serializeAws_restJson1ActionLocalPortDetails = (input: ActionLocalPortDetails, context: __SerdeContext): any => {
  return {
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.PortName !== undefined && input.PortName !== null && { PortName: input.PortName }),
  };
};

const serializeAws_restJson1ActionRemoteIpDetails = (input: ActionRemoteIpDetails, context: __SerdeContext): any => {
  return {
    ...(input.City !== undefined && input.City !== null && { City: serializeAws_restJson1City(input.City, context) }),
    ...(input.Country !== undefined &&
      input.Country !== null && { Country: serializeAws_restJson1Country(input.Country, context) }),
    ...(input.GeoLocation !== undefined &&
      input.GeoLocation !== null && { GeoLocation: serializeAws_restJson1GeoLocation(input.GeoLocation, context) }),
    ...(input.IpAddressV4 !== undefined && input.IpAddressV4 !== null && { IpAddressV4: input.IpAddressV4 }),
    ...(input.Organization !== undefined &&
      input.Organization !== null && {
        Organization: serializeAws_restJson1IpOrganizationDetails(input.Organization, context),
      }),
  };
};

const serializeAws_restJson1ActionRemotePortDetails = (
  input: ActionRemotePortDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.PortName !== undefined && input.PortName !== null && { PortName: input.PortName }),
  };
};

const serializeAws_restJson1Adjustment = (input: Adjustment, context: __SerdeContext): any => {
  return {
    ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
    ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1AdjustmentList = (input: Adjustment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Adjustment(entry, context);
    });
};

const serializeAws_restJson1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AvailabilityZone = (input: AvailabilityZone, context: __SerdeContext): any => {
  return {
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    ...(input.ZoneName !== undefined && input.ZoneName !== null && { ZoneName: input.ZoneName }),
  };
};

const serializeAws_restJson1AvailabilityZones = (input: AvailabilityZone[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AvailabilityZone(entry, context);
    });
};

const serializeAws_restJson1AwsApiCallAction = (input: AwsApiCallAction, context: __SerdeContext): any => {
  return {
    ...(input.AffectedResources !== undefined &&
      input.AffectedResources !== null && {
        AffectedResources: serializeAws_restJson1FieldMap(input.AffectedResources, context),
      }),
    ...(input.Api !== undefined && input.Api !== null && { Api: input.Api }),
    ...(input.CallerType !== undefined && input.CallerType !== null && { CallerType: input.CallerType }),
    ...(input.DomainDetails !== undefined &&
      input.DomainDetails !== null && {
        DomainDetails: serializeAws_restJson1AwsApiCallActionDomainDetails(input.DomainDetails, context),
      }),
    ...(input.FirstSeen !== undefined && input.FirstSeen !== null && { FirstSeen: input.FirstSeen }),
    ...(input.LastSeen !== undefined && input.LastSeen !== null && { LastSeen: input.LastSeen }),
    ...(input.RemoteIpDetails !== undefined &&
      input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
      }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
  };
};

const serializeAws_restJson1AwsApiCallActionDomainDetails = (
  input: AwsApiCallActionDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
  };
};

const serializeAws_restJson1AwsApiGatewayAccessLogSettings = (
  input: AwsApiGatewayAccessLogSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationArn !== undefined &&
      input.DestinationArn !== null && { DestinationArn: input.DestinationArn }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
  };
};

const serializeAws_restJson1AwsApiGatewayCanarySettings = (
  input: AwsApiGatewayCanarySettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId }),
    ...(input.PercentTraffic !== undefined &&
      input.PercentTraffic !== null && { PercentTraffic: __serializeFloat(input.PercentTraffic) }),
    ...(input.StageVariableOverrides !== undefined &&
      input.StageVariableOverrides !== null && {
        StageVariableOverrides: serializeAws_restJson1FieldMap(input.StageVariableOverrides, context),
      }),
    ...(input.UseStageCache !== undefined && input.UseStageCache !== null && { UseStageCache: input.UseStageCache }),
  };
};

const serializeAws_restJson1AwsApiGatewayEndpointConfiguration = (
  input: AwsApiGatewayEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Types !== undefined &&
      input.Types !== null && { Types: serializeAws_restJson1NonEmptyStringList(input.Types, context) }),
  };
};

const serializeAws_restJson1AwsApiGatewayMethodSettings = (
  input: AwsApiGatewayMethodSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CacheDataEncrypted !== undefined &&
      input.CacheDataEncrypted !== null && { CacheDataEncrypted: input.CacheDataEncrypted }),
    ...(input.CacheTtlInSeconds !== undefined &&
      input.CacheTtlInSeconds !== null && { CacheTtlInSeconds: input.CacheTtlInSeconds }),
    ...(input.CachingEnabled !== undefined &&
      input.CachingEnabled !== null && { CachingEnabled: input.CachingEnabled }),
    ...(input.DataTraceEnabled !== undefined &&
      input.DataTraceEnabled !== null && { DataTraceEnabled: input.DataTraceEnabled }),
    ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
    ...(input.LoggingLevel !== undefined && input.LoggingLevel !== null && { LoggingLevel: input.LoggingLevel }),
    ...(input.MetricsEnabled !== undefined &&
      input.MetricsEnabled !== null && { MetricsEnabled: input.MetricsEnabled }),
    ...(input.RequireAuthorizationForCacheControl !== undefined &&
      input.RequireAuthorizationForCacheControl !== null && {
        RequireAuthorizationForCacheControl: input.RequireAuthorizationForCacheControl,
      }),
    ...(input.ResourcePath !== undefined && input.ResourcePath !== null && { ResourcePath: input.ResourcePath }),
    ...(input.ThrottlingBurstLimit !== undefined &&
      input.ThrottlingBurstLimit !== null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit !== undefined &&
      input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: __serializeFloat(input.ThrottlingRateLimit) }),
    ...(input.UnauthorizedCacheControlHeaderStrategy !== undefined &&
      input.UnauthorizedCacheControlHeaderStrategy !== null && {
        UnauthorizedCacheControlHeaderStrategy: input.UnauthorizedCacheControlHeaderStrategy,
      }),
  };
};

const serializeAws_restJson1AwsApiGatewayMethodSettingsList = (
  input: AwsApiGatewayMethodSettings[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
};

const serializeAws_restJson1AwsApiGatewayRestApiDetails = (
  input: AwsApiGatewayRestApiDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeySource !== undefined && input.ApiKeySource !== null && { ApiKeySource: input.ApiKeySource }),
    ...(input.BinaryMediaTypes !== undefined &&
      input.BinaryMediaTypes !== null && {
        BinaryMediaTypes: serializeAws_restJson1NonEmptyStringList(input.BinaryMediaTypes, context),
      }),
    ...(input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EndpointConfiguration !== undefined &&
      input.EndpointConfiguration !== null && {
        EndpointConfiguration: serializeAws_restJson1AwsApiGatewayEndpointConfiguration(
          input.EndpointConfiguration,
          context
        ),
      }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.MinimumCompressionSize !== undefined &&
      input.MinimumCompressionSize !== null && { MinimumCompressionSize: input.MinimumCompressionSize }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsApiGatewayStageDetails = (
  input: AwsApiGatewayStageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.CacheClusterEnabled !== undefined &&
      input.CacheClusterEnabled !== null && { CacheClusterEnabled: input.CacheClusterEnabled }),
    ...(input.CacheClusterSize !== undefined &&
      input.CacheClusterSize !== null && { CacheClusterSize: input.CacheClusterSize }),
    ...(input.CacheClusterStatus !== undefined &&
      input.CacheClusterStatus !== null && { CacheClusterStatus: input.CacheClusterStatus }),
    ...(input.CanarySettings !== undefined &&
      input.CanarySettings !== null && {
        CanarySettings: serializeAws_restJson1AwsApiGatewayCanarySettings(input.CanarySettings, context),
      }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { ClientCertificateId: input.ClientCertificateId }),
    ...(input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DocumentationVersion !== undefined &&
      input.DocumentationVersion !== null && { DocumentationVersion: input.DocumentationVersion }),
    ...(input.LastUpdatedDate !== undefined &&
      input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.MethodSettings !== undefined &&
      input.MethodSettings !== null && {
        MethodSettings: serializeAws_restJson1AwsApiGatewayMethodSettingsList(input.MethodSettings, context),
      }),
    ...(input.StageName !== undefined && input.StageName !== null && { StageName: input.StageName }),
    ...(input.TracingEnabled !== undefined &&
      input.TracingEnabled !== null && { TracingEnabled: input.TracingEnabled }),
    ...(input.Variables !== undefined &&
      input.Variables !== null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }),
    ...(input.WebAclArn !== undefined && input.WebAclArn !== null && { WebAclArn: input.WebAclArn }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2ApiDetails = (
  input: AwsApiGatewayV2ApiDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiEndpoint !== undefined && input.ApiEndpoint !== null && { ApiEndpoint: input.ApiEndpoint }),
    ...(input.ApiId !== undefined && input.ApiId !== null && { ApiId: input.ApiId }),
    ...(input.ApiKeySelectionExpression !== undefined &&
      input.ApiKeySelectionExpression !== null && { ApiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration !== undefined &&
      input.CorsConfiguration !== null && {
        CorsConfiguration: serializeAws_restJson1AwsCorsConfiguration(input.CorsConfiguration, context),
      }),
    ...(input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ProtocolType !== undefined && input.ProtocolType !== null && { ProtocolType: input.ProtocolType }),
    ...(input.RouteSelectionExpression !== undefined &&
      input.RouteSelectionExpression !== null && { RouteSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2RouteSettings = (
  input: AwsApiGatewayV2RouteSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataTraceEnabled !== undefined &&
      input.DataTraceEnabled !== null && { DataTraceEnabled: input.DataTraceEnabled }),
    ...(input.DetailedMetricsEnabled !== undefined &&
      input.DetailedMetricsEnabled !== null && { DetailedMetricsEnabled: input.DetailedMetricsEnabled }),
    ...(input.LoggingLevel !== undefined && input.LoggingLevel !== null && { LoggingLevel: input.LoggingLevel }),
    ...(input.ThrottlingBurstLimit !== undefined &&
      input.ThrottlingBurstLimit !== null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit !== undefined &&
      input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: __serializeFloat(input.ThrottlingRateLimit) }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2StageDetails = (
  input: AwsApiGatewayV2StageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.ApiGatewayManaged !== undefined &&
      input.ApiGatewayManaged !== null && { ApiGatewayManaged: input.ApiGatewayManaged }),
    ...(input.AutoDeploy !== undefined && input.AutoDeploy !== null && { AutoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { ClientCertificateId: input.ClientCertificateId }),
    ...(input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate }),
    ...(input.DefaultRouteSettings !== undefined &&
      input.DefaultRouteSettings !== null && {
        DefaultRouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.DefaultRouteSettings, context),
      }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LastDeploymentStatusMessage !== undefined &&
      input.LastDeploymentStatusMessage !== null && { LastDeploymentStatusMessage: input.LastDeploymentStatusMessage }),
    ...(input.LastUpdatedDate !== undefined &&
      input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.RouteSettings !== undefined &&
      input.RouteSettings !== null && {
        RouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.RouteSettings, context),
      }),
    ...(input.StageName !== undefined && input.StageName !== null && { StageName: input.StageName }),
    ...(input.StageVariables !== undefined &&
      input.StageVariables !== null && {
        StageVariables: serializeAws_restJson1FieldMap(input.StageVariables, context),
      }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  input: AwsAutoScalingAutoScalingGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime }),
    ...(input.HealthCheckGracePeriod !== undefined &&
      input.HealthCheckGracePeriod !== null && { HealthCheckGracePeriod: input.HealthCheckGracePeriod }),
    ...(input.HealthCheckType !== undefined &&
      input.HealthCheckType !== null && { HealthCheckType: input.HealthCheckType }),
    ...(input.LaunchConfigurationName !== undefined &&
      input.LaunchConfigurationName !== null && { LaunchConfigurationName: input.LaunchConfigurationName }),
    ...(input.LoadBalancerNames !== undefined &&
      input.LoadBalancerNames !== null && {
        LoadBalancerNames: serializeAws_restJson1StringList(input.LoadBalancerNames, context),
      }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
    ...(input.Ebs !== undefined &&
      input.Ebs !== null && {
        Ebs: serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails(input.Ebs, context),
      }),
    ...(input.NoDevice !== undefined && input.NoDevice !== null && { NoDevice: input.NoDevice }),
    ...(input.VirtualName !== undefined && input.VirtualName !== null && { VirtualName: input.VirtualName }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteOnTermination !== undefined &&
      input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails = (
  input: AwsAutoScalingLaunchConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociatePublicIpAddress !== undefined &&
      input.AssociatePublicIpAddress !== null && { AssociatePublicIpAddress: input.AssociatePublicIpAddress }),
    ...(input.BlockDeviceMappings !== undefined &&
      input.BlockDeviceMappings !== null && {
        BlockDeviceMappings: serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList(
          input.BlockDeviceMappings,
          context
        ),
      }),
    ...(input.ClassicLinkVpcId !== undefined &&
      input.ClassicLinkVpcId !== null && { ClassicLinkVpcId: input.ClassicLinkVpcId }),
    ...(input.ClassicLinkVpcSecurityGroups !== undefined &&
      input.ClassicLinkVpcSecurityGroups !== null && {
        ClassicLinkVpcSecurityGroups: serializeAws_restJson1NonEmptyStringList(
          input.ClassicLinkVpcSecurityGroups,
          context
        ),
      }),
    ...(input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime }),
    ...(input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }),
    ...(input.IamInstanceProfile !== undefined &&
      input.IamInstanceProfile !== null && { IamInstanceProfile: input.IamInstanceProfile }),
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    ...(input.InstanceMonitoring !== undefined &&
      input.InstanceMonitoring !== null && {
        InstanceMonitoring: serializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails(
          input.InstanceMonitoring,
          context
        ),
      }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.KernelId !== undefined && input.KernelId !== null && { KernelId: input.KernelId }),
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.LaunchConfigurationName !== undefined &&
      input.LaunchConfigurationName !== null && { LaunchConfigurationName: input.LaunchConfigurationName }),
    ...(input.PlacementTenancy !== undefined &&
      input.PlacementTenancy !== null && { PlacementTenancy: input.PlacementTenancy }),
    ...(input.RamdiskId !== undefined && input.RamdiskId !== null && { RamdiskId: input.RamdiskId }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1NonEmptyStringList(input.SecurityGroups, context),
      }),
    ...(input.SpotPrice !== undefined && input.SpotPrice !== null && { SpotPrice: input.SpotPrice }),
    ...(input.UserData !== undefined && input.UserData !== null && { UserData: input.UserData }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = (
  input: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDetails = (
  input: AwsCertificateManagerCertificateDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions !== undefined &&
      input.DomainValidationOptions !== null && {
        DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
          input.DomainValidationOptions,
          context
        ),
      }),
    ...(input.ExtendedKeyUsages !== undefined &&
      input.ExtendedKeyUsages !== null && {
        ExtendedKeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(
          input.ExtendedKeyUsages,
          context
        ),
      }),
    ...(input.FailureReason !== undefined && input.FailureReason !== null && { FailureReason: input.FailureReason }),
    ...(input.ImportedAt !== undefined && input.ImportedAt !== null && { ImportedAt: input.ImportedAt }),
    ...(input.InUseBy !== undefined &&
      input.InUseBy !== null && { InUseBy: serializeAws_restJson1StringList(input.InUseBy, context) }),
    ...(input.IssuedAt !== undefined && input.IssuedAt !== null && { IssuedAt: input.IssuedAt }),
    ...(input.Issuer !== undefined && input.Issuer !== null && { Issuer: input.Issuer }),
    ...(input.KeyAlgorithm !== undefined && input.KeyAlgorithm !== null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.KeyUsages !== undefined &&
      input.KeyUsages !== null && {
        KeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(input.KeyUsages, context),
      }),
    ...(input.NotAfter !== undefined && input.NotAfter !== null && { NotAfter: input.NotAfter }),
    ...(input.NotBefore !== undefined && input.NotBefore !== null && { NotBefore: input.NotBefore }),
    ...(input.Options !== undefined &&
      input.Options !== null && {
        Options: serializeAws_restJson1AwsCertificateManagerCertificateOptions(input.Options, context),
      }),
    ...(input.RenewalEligibility !== undefined &&
      input.RenewalEligibility !== null && { RenewalEligibility: input.RenewalEligibility }),
    ...(input.RenewalSummary !== undefined &&
      input.RenewalSummary !== null && {
        RenewalSummary: serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(
          input.RenewalSummary,
          context
        ),
      }),
    ...(input.Serial !== undefined && input.Serial !== null && { Serial: input.Serial }),
    ...(input.SignatureAlgorithm !== undefined &&
      input.SignatureAlgorithm !== null && { SignatureAlgorithm: input.SignatureAlgorithm }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
    ...(input.SubjectAlternativeNames !== undefined &&
      input.SubjectAlternativeNames !== null && {
        SubjectAlternativeNames: serializeAws_restJson1StringList(input.SubjectAlternativeNames, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = (
  input: AwsCertificateManagerCertificateDomainValidationOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ResourceRecord !== undefined &&
      input.ResourceRecord !== null && {
        ResourceRecord: serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(
          input.ResourceRecord,
          context
        ),
      }),
    ...(input.ValidationDomain !== undefined &&
      input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain }),
    ...(input.ValidationEmails !== undefined &&
      input.ValidationEmails !== null && {
        ValidationEmails: serializeAws_restJson1StringList(input.ValidationEmails, context),
      }),
    ...(input.ValidationMethod !== undefined &&
      input.ValidationMethod !== null && { ValidationMethod: input.ValidationMethod }),
    ...(input.ValidationStatus !== undefined &&
      input.ValidationStatus !== null && { ValidationStatus: input.ValidationStatus }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = (
  input: AwsCertificateManagerCertificateDomainValidationOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = (
  input: AwsCertificateManagerCertificateExtendedKeyUsage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OId !== undefined && input.OId !== null && { OId: input.OId }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = (
  input: AwsCertificateManagerCertificateExtendedKeyUsage[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = (
  input: AwsCertificateManagerCertificateKeyUsage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = (
  input: AwsCertificateManagerCertificateKeyUsage[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateOptions = (
  input: AwsCertificateManagerCertificateOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateTransparencyLoggingPreference !== undefined &&
      input.CertificateTransparencyLoggingPreference !== null && {
        CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
      }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = (
  input: AwsCertificateManagerCertificateRenewalSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainValidationOptions !== undefined &&
      input.DomainValidationOptions !== null && {
        DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
          input.DomainValidationOptions,
          context
        ),
      }),
    ...(input.RenewalStatus !== undefined && input.RenewalStatus !== null && { RenewalStatus: input.RenewalStatus }),
    ...(input.RenewalStatusReason !== undefined &&
      input.RenewalStatusReason !== null && { RenewalStatusReason: input.RenewalStatusReason }),
    ...(input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = (
  input: AwsCertificateManagerCertificateResourceRecord,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = (
  input: AwsCloudFrontDistributionCacheBehavior,
  context: __SerdeContext
): any => {
  return {
    ...(input.ViewerProtocolPolicy !== undefined &&
      input.ViewerProtocolPolicy !== null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = (
  input: AwsCloudFrontDistributionCacheBehaviors,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items !== undefined &&
      input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(input.Items, context),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = (
  input: AwsCloudFrontDistributionCacheBehavior[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = (
  input: AwsCloudFrontDistributionDefaultCacheBehavior,
  context: __SerdeContext
): any => {
  return {
    ...(input.ViewerProtocolPolicy !== undefined &&
      input.ViewerProtocolPolicy !== null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionDetails = (
  input: AwsCloudFrontDistributionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CacheBehaviors !== undefined &&
      input.CacheBehaviors !== null && {
        CacheBehaviors: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(input.CacheBehaviors, context),
      }),
    ...(input.DefaultCacheBehavior !== undefined &&
      input.DefaultCacheBehavior !== null && {
        DefaultCacheBehavior: serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(
          input.DefaultCacheBehavior,
          context
        ),
      }),
    ...(input.DefaultRootObject !== undefined &&
      input.DefaultRootObject !== null && { DefaultRootObject: input.DefaultRootObject }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag }),
    ...(input.LastModifiedTime !== undefined &&
      input.LastModifiedTime !== null && { LastModifiedTime: input.LastModifiedTime }),
    ...(input.Logging !== undefined &&
      input.Logging !== null && {
        Logging: serializeAws_restJson1AwsCloudFrontDistributionLogging(input.Logging, context),
      }),
    ...(input.OriginGroups !== undefined &&
      input.OriginGroups !== null && {
        OriginGroups: serializeAws_restJson1AwsCloudFrontDistributionOriginGroups(input.OriginGroups, context),
      }),
    ...(input.Origins !== undefined &&
      input.Origins !== null && {
        Origins: serializeAws_restJson1AwsCloudFrontDistributionOrigins(input.Origins, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionLogging = (
  input: AwsCloudFrontDistributionLogging,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.IncludeCookies !== undefined &&
      input.IncludeCookies !== null && { IncludeCookies: input.IncludeCookies }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroup = (
  input: AwsCloudFrontDistributionOriginGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.FailoverCriteria !== undefined &&
      input.FailoverCriteria !== null && {
        FailoverCriteria: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(
          input.FailoverCriteria,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = (
  input: AwsCloudFrontDistributionOriginGroupFailover,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatusCodes !== undefined &&
      input.StatusCodes !== null && {
        StatusCodes: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(
          input.StatusCodes,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = (
  input: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items !== undefined &&
      input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(
          input.Items,
          context
        ),
      }),
    ...(input.Quantity !== undefined && input.Quantity !== null && { Quantity: input.Quantity }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = (
  input: number[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroups = (
  input: AwsCloudFrontDistributionOriginGroups,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items !== undefined &&
      input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(input.Items, context),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = (
  input: AwsCloudFrontDistributionOriginGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  input: AwsCloudFrontDistributionOriginItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.OriginPath !== undefined && input.OriginPath !== null && { OriginPath: input.OriginPath }),
    ...(input.S3OriginConfig !== undefined &&
      input.S3OriginConfig !== null && {
        S3OriginConfig: serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(
          input.S3OriginConfig,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  input: AwsCloudFrontDistributionOriginItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  input: AwsCloudFrontDistributionOrigins,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items !== undefined &&
      input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginItemList(input.Items, context),
      }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = (
  input: AwsCloudFrontDistributionOriginS3OriginConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OriginAccessIdentity !== undefined &&
      input.OriginAccessIdentity !== null && { OriginAccessIdentity: input.OriginAccessIdentity }),
  };
};

const serializeAws_restJson1AwsCloudTrailTrailDetails = (
  input: AwsCloudTrailTrailDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined &&
      input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn !== undefined &&
      input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.HasCustomEventSelectors !== undefined &&
      input.HasCustomEventSelectors !== null && { HasCustomEventSelectors: input.HasCustomEventSelectors }),
    ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
    ...(input.IncludeGlobalServiceEvents !== undefined &&
      input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail !== undefined &&
      input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail !== undefined &&
      input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LogFileValidationEnabled !== undefined &&
      input.LogFileValidationEnabled !== null && { LogFileValidationEnabled: input.LogFileValidationEnabled }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }),
    ...(input.TrailArn !== undefined && input.TrailArn !== null && { TrailArn: input.TrailArn }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectDetails = (
  input: AwsCodeBuildProjectDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionKey !== undefined && input.EncryptionKey !== null && { EncryptionKey: input.EncryptionKey }),
    ...(input.Environment !== undefined &&
      input.Environment !== null && {
        Environment: serializeAws_restJson1AwsCodeBuildProjectEnvironment(input.Environment, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
    ...(input.Source !== undefined &&
      input.Source !== null && { Source: serializeAws_restJson1AwsCodeBuildProjectSource(input.Source, context) }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && {
        VpcConfig: serializeAws_restJson1AwsCodeBuildProjectVpcConfig(input.VpcConfig, context),
      }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  input: AwsCodeBuildProjectEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.ImagePullCredentialsType !== undefined &&
      input.ImagePullCredentialsType !== null && { ImagePullCredentialsType: input.ImagePullCredentialsType }),
    ...(input.RegistryCredential !== undefined &&
      input.RegistryCredential !== null && {
        RegistryCredential: serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(
          input.RegistryCredential,
          context
        ),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  input: AwsCodeBuildProjectEnvironmentRegistryCredential,
  context: __SerdeContext
): any => {
  return {
    ...(input.Credential !== undefined && input.Credential !== null && { Credential: input.Credential }),
    ...(input.CredentialProvider !== undefined &&
      input.CredentialProvider !== null && { CredentialProvider: input.CredentialProvider }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectSource = (
  input: AwsCodeBuildProjectSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.GitCloneDepth !== undefined && input.GitCloneDepth !== null && { GitCloneDepth: input.GitCloneDepth }),
    ...(input.InsecureSsl !== undefined && input.InsecureSsl !== null && { InsecureSsl: input.InsecureSsl }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  input: AwsCodeBuildProjectVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
      }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsCorsConfiguration = (input: AwsCorsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials !== undefined &&
      input.AllowCredentials !== null && { AllowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders !== undefined &&
      input.AllowHeaders !== null && {
        AllowHeaders: serializeAws_restJson1NonEmptyStringList(input.AllowHeaders, context),
      }),
    ...(input.AllowMethods !== undefined &&
      input.AllowMethods !== null && {
        AllowMethods: serializeAws_restJson1NonEmptyStringList(input.AllowMethods, context),
      }),
    ...(input.AllowOrigins !== undefined &&
      input.AllowOrigins !== null && {
        AllowOrigins: serializeAws_restJson1NonEmptyStringList(input.AllowOrigins, context),
      }),
    ...(input.ExposeHeaders !== undefined &&
      input.ExposeHeaders !== null && {
        ExposeHeaders: serializeAws_restJson1NonEmptyStringList(input.ExposeHeaders, context),
      }),
    ...(input.MaxAge !== undefined && input.MaxAge !== null && { MaxAge: input.MaxAge }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableAttributeDefinition = (
  input: AwsDynamoDbTableAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = (
  input: AwsDynamoDbTableAttributeDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableBillingModeSummary = (
  input: AwsDynamoDbTableBillingModeSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode }),
    ...(input.LastUpdateToPayPerRequestDateTime !== undefined &&
      input.LastUpdateToPayPerRequestDateTime !== null && {
        LastUpdateToPayPerRequestDateTime: input.LastUpdateToPayPerRequestDateTime,
      }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableDetails = (
  input: AwsDynamoDbTableDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeDefinitions !== undefined &&
      input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(
          input.AttributeDefinitions,
          context
        ),
      }),
    ...(input.BillingModeSummary !== undefined &&
      input.BillingModeSummary !== null && {
        BillingModeSummary: serializeAws_restJson1AwsDynamoDbTableBillingModeSummary(input.BillingModeSummary, context),
      }),
    ...(input.CreationDateTime !== undefined &&
      input.CreationDateTime !== null && { CreationDateTime: input.CreationDateTime }),
    ...(input.GlobalSecondaryIndexes !== undefined &&
      input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(
          input.GlobalSecondaryIndexes,
          context
        ),
      }),
    ...(input.GlobalTableVersion !== undefined &&
      input.GlobalTableVersion !== null && { GlobalTableVersion: input.GlobalTableVersion }),
    ...(input.ItemCount !== undefined && input.ItemCount !== null && { ItemCount: input.ItemCount }),
    ...(input.KeySchema !== undefined &&
      input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
      }),
    ...(input.LatestStreamArn !== undefined &&
      input.LatestStreamArn !== null && { LatestStreamArn: input.LatestStreamArn }),
    ...(input.LatestStreamLabel !== undefined &&
      input.LatestStreamLabel !== null && { LatestStreamLabel: input.LatestStreamLabel }),
    ...(input.LocalSecondaryIndexes !== undefined &&
      input.LocalSecondaryIndexes !== null && {
        LocalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(
          input.LocalSecondaryIndexes,
          context
        ),
      }),
    ...(input.ProvisionedThroughput !== undefined &&
      input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(
          input.ProvisionedThroughput,
          context
        ),
      }),
    ...(input.Replicas !== undefined &&
      input.Replicas !== null && {
        Replicas: serializeAws_restJson1AwsDynamoDbTableReplicaList(input.Replicas, context),
      }),
    ...(input.RestoreSummary !== undefined &&
      input.RestoreSummary !== null && {
        RestoreSummary: serializeAws_restJson1AwsDynamoDbTableRestoreSummary(input.RestoreSummary, context),
      }),
    ...(input.SseDescription !== undefined &&
      input.SseDescription !== null && {
        SseDescription: serializeAws_restJson1AwsDynamoDbTableSseDescription(input.SseDescription, context),
      }),
    ...(input.StreamSpecification !== undefined &&
      input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_restJson1AwsDynamoDbTableStreamSpecification(
          input.StreamSpecification,
          context
        ),
      }),
    ...(input.TableId !== undefined && input.TableId !== null && { TableId: input.TableId }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TableSizeBytes !== undefined &&
      input.TableSizeBytes !== null && { TableSizeBytes: input.TableSizeBytes }),
    ...(input.TableStatus !== undefined && input.TableStatus !== null && { TableStatus: input.TableStatus }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = (
  input: AwsDynamoDbTableGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.Backfilling !== undefined && input.Backfilling !== null && { Backfilling: input.Backfilling }),
    ...(input.IndexArn !== undefined && input.IndexArn !== null && { IndexArn: input.IndexArn }),
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.IndexSizeBytes !== undefined &&
      input.IndexSizeBytes !== null && { IndexSizeBytes: input.IndexSizeBytes }),
    ...(input.IndexStatus !== undefined && input.IndexStatus !== null && { IndexStatus: input.IndexStatus }),
    ...(input.ItemCount !== undefined && input.ItemCount !== null && { ItemCount: input.ItemCount }),
    ...(input.KeySchema !== undefined &&
      input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
      }),
    ...(input.Projection !== undefined &&
      input.Projection !== null && {
        Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
      }),
    ...(input.ProvisionedThroughput !== undefined &&
      input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(
          input.ProvisionedThroughput,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = (
  input: AwsDynamoDbTableGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableKeySchema = (
  input: AwsDynamoDbTableKeySchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.KeyType !== undefined && input.KeyType !== null && { KeyType: input.KeyType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableKeySchemaList = (
  input: AwsDynamoDbTableKeySchema[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = (
  input: AwsDynamoDbTableLocalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexArn !== undefined && input.IndexArn !== null && { IndexArn: input.IndexArn }),
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.KeySchema !== undefined &&
      input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
      }),
    ...(input.Projection !== undefined &&
      input.Projection !== null && {
        Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
      }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = (
  input: AwsDynamoDbTableLocalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableProjection = (
  input: AwsDynamoDbTableProjection,
  context: __SerdeContext
): any => {
  return {
    ...(input.NonKeyAttributes !== undefined &&
      input.NonKeyAttributes !== null && {
        NonKeyAttributes: serializeAws_restJson1StringList(input.NonKeyAttributes, context),
      }),
    ...(input.ProjectionType !== undefined &&
      input.ProjectionType !== null && { ProjectionType: input.ProjectionType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = (
  input: AwsDynamoDbTableProvisionedThroughput,
  context: __SerdeContext
): any => {
  return {
    ...(input.LastDecreaseDateTime !== undefined &&
      input.LastDecreaseDateTime !== null && { LastDecreaseDateTime: input.LastDecreaseDateTime }),
    ...(input.LastIncreaseDateTime !== undefined &&
      input.LastIncreaseDateTime !== null && { LastIncreaseDateTime: input.LastIncreaseDateTime }),
    ...(input.NumberOfDecreasesToday !== undefined &&
      input.NumberOfDecreasesToday !== null && { NumberOfDecreasesToday: input.NumberOfDecreasesToday }),
    ...(input.ReadCapacityUnits !== undefined &&
      input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }),
    ...(input.WriteCapacityUnits !== undefined &&
      input.WriteCapacityUnits !== null && { WriteCapacityUnits: input.WriteCapacityUnits }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = (
  input: AwsDynamoDbTableProvisionedThroughputOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadCapacityUnits !== undefined &&
      input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplica = (
  input: AwsDynamoDbTableReplica,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes !== undefined &&
      input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(
          input.GlobalSecondaryIndexes,
          context
        ),
      }),
    ...(input.KmsMasterKeyId !== undefined &&
      input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.ProvisionedThroughputOverride !== undefined &&
      input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
          input.ProvisionedThroughputOverride,
          context
        ),
      }),
    ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    ...(input.ReplicaStatus !== undefined && input.ReplicaStatus !== null && { ReplicaStatus: input.ReplicaStatus }),
    ...(input.ReplicaStatusDescription !== undefined &&
      input.ReplicaStatusDescription !== null && { ReplicaStatusDescription: input.ReplicaStatusDescription }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = (
  input: AwsDynamoDbTableReplicaGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughputOverride !== undefined &&
      input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
          input.ProvisionedThroughputOverride,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = (
  input: AwsDynamoDbTableReplicaGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableReplicaList = (
  input: AwsDynamoDbTableReplica[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableRestoreSummary = (
  input: AwsDynamoDbTableRestoreSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.RestoreDateTime !== undefined &&
      input.RestoreDateTime !== null && { RestoreDateTime: input.RestoreDateTime }),
    ...(input.RestoreInProgress !== undefined &&
      input.RestoreInProgress !== null && { RestoreInProgress: input.RestoreInProgress }),
    ...(input.SourceBackupArn !== undefined &&
      input.SourceBackupArn !== null && { SourceBackupArn: input.SourceBackupArn }),
    ...(input.SourceTableArn !== undefined &&
      input.SourceTableArn !== null && { SourceTableArn: input.SourceTableArn }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableSseDescription = (
  input: AwsDynamoDbTableSseDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.InaccessibleEncryptionDateTime !== undefined &&
      input.InaccessibleEncryptionDateTime !== null && {
        InaccessibleEncryptionDateTime: input.InaccessibleEncryptionDateTime,
      }),
    ...(input.KmsMasterKeyArn !== undefined &&
      input.KmsMasterKeyArn !== null && { KmsMasterKeyArn: input.KmsMasterKeyArn }),
    ...(input.SseType !== undefined && input.SseType !== null && { SseType: input.SseType }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableStreamSpecification = (
  input: AwsDynamoDbTableStreamSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamEnabled !== undefined && input.StreamEnabled !== null && { StreamEnabled: input.StreamEnabled }),
    ...(input.StreamViewType !== undefined &&
      input.StreamViewType !== null && { StreamViewType: input.StreamViewType }),
  };
};

const serializeAws_restJson1AwsEc2EipDetails = (input: AwsEc2EipDetails, context: __SerdeContext): any => {
  return {
    ...(input.AllocationId !== undefined && input.AllocationId !== null && { AllocationId: input.AllocationId }),
    ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.NetworkBorderGroup !== undefined &&
      input.NetworkBorderGroup !== null && { NetworkBorderGroup: input.NetworkBorderGroup }),
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.NetworkInterfaceOwnerId !== undefined &&
      input.NetworkInterfaceOwnerId !== null && { NetworkInterfaceOwnerId: input.NetworkInterfaceOwnerId }),
    ...(input.PrivateIpAddress !== undefined &&
      input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress }),
    ...(input.PublicIp !== undefined && input.PublicIp !== null && { PublicIp: input.PublicIp }),
    ...(input.PublicIpv4Pool !== undefined &&
      input.PublicIpv4Pool !== null && { PublicIpv4Pool: input.PublicIpv4Pool }),
  };
};

const serializeAws_restJson1AwsEc2InstanceDetails = (input: AwsEc2InstanceDetails, context: __SerdeContext): any => {
  return {
    ...(input.IamInstanceProfileArn !== undefined &&
      input.IamInstanceProfileArn !== null && { IamInstanceProfileArn: input.IamInstanceProfileArn }),
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    ...(input.IpV4Addresses !== undefined &&
      input.IpV4Addresses !== null && {
        IpV4Addresses: serializeAws_restJson1StringList(input.IpV4Addresses, context),
      }),
    ...(input.IpV6Addresses !== undefined &&
      input.IpV6Addresses !== null && {
        IpV6Addresses: serializeAws_restJson1StringList(input.IpV6Addresses, context),
      }),
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt }),
    ...(input.NetworkInterfaces !== undefined &&
      input.NetworkInterfaces !== null && {
        NetworkInterfaces: serializeAws_restJson1AwsEc2InstanceNetworkInterfacesList(input.NetworkInterfaces, context),
      }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails = (
  input: AwsEc2InstanceNetworkInterfacesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
  };
};

const serializeAws_restJson1AwsEc2InstanceNetworkInterfacesList = (
  input: AwsEc2InstanceNetworkInterfacesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkAclAssociation = (
  input: AwsEc2NetworkAclAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkAclAssociationId !== undefined &&
      input.NetworkAclAssociationId !== null && { NetworkAclAssociationId: input.NetworkAclAssociationId }),
    ...(input.NetworkAclId !== undefined && input.NetworkAclId !== null && { NetworkAclId: input.NetworkAclId }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclAssociationList = (
  input: AwsEc2NetworkAclAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkAclDetails = (
  input: AwsEc2NetworkAclDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Associations !== undefined &&
      input.Associations !== null && {
        Associations: serializeAws_restJson1AwsEc2NetworkAclAssociationList(input.Associations, context),
      }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && { Entries: serializeAws_restJson1AwsEc2NetworkAclEntryList(input.Entries, context) }),
    ...(input.IsDefault !== undefined && input.IsDefault !== null && { IsDefault: input.IsDefault }),
    ...(input.NetworkAclId !== undefined && input.NetworkAclId !== null && { NetworkAclId: input.NetworkAclId }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclEntry = (input: AwsEc2NetworkAclEntry, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock }),
    ...(input.Egress !== undefined && input.Egress !== null && { Egress: input.Egress }),
    ...(input.IcmpTypeCode !== undefined &&
      input.IcmpTypeCode !== null && { IcmpTypeCode: serializeAws_restJson1IcmpTypeCode(input.IcmpTypeCode, context) }),
    ...(input.Ipv6CidrBlock !== undefined && input.Ipv6CidrBlock !== null && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
    ...(input.PortRange !== undefined &&
      input.PortRange !== null && { PortRange: serializeAws_restJson1PortRangeFromTo(input.PortRange, context) }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.RuleAction !== undefined && input.RuleAction !== null && { RuleAction: input.RuleAction }),
    ...(input.RuleNumber !== undefined && input.RuleNumber !== null && { RuleNumber: input.RuleNumber }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclEntryList = (
  input: AwsEc2NetworkAclEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  input: AwsEc2NetworkInterfaceAttachment,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachTime !== undefined && input.AttachTime !== null && { AttachTime: input.AttachTime }),
    ...(input.AttachmentId !== undefined && input.AttachmentId !== null && { AttachmentId: input.AttachmentId }),
    ...(input.DeleteOnTermination !== undefined &&
      input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.DeviceIndex !== undefined && input.DeviceIndex !== null && { DeviceIndex: input.DeviceIndex }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.InstanceOwnerId !== undefined &&
      input.InstanceOwnerId !== null && { InstanceOwnerId: input.InstanceOwnerId }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  input: AwsEc2NetworkInterfaceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attachment !== undefined &&
      input.Attachment !== null && {
        Attachment: serializeAws_restJson1AwsEc2NetworkInterfaceAttachment(input.Attachment, context),
      }),
    ...(input.IpV6Addresses !== undefined &&
      input.IpV6Addresses !== null && {
        IpV6Addresses: serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(input.IpV6Addresses, context),
      }),
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.PrivateIpAddresses !== undefined &&
      input.PrivateIpAddresses !== null && {
        PrivateIpAddresses: serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(
          input.PrivateIpAddresses,
          context
        ),
      }),
    ...(input.PublicDnsName !== undefined && input.PublicDnsName !== null && { PublicDnsName: input.PublicDnsName }),
    ...(input.PublicIp !== undefined && input.PublicIp !== null && { PublicIp: input.PublicIp }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(input.SecurityGroups, context),
      }),
    ...(input.SourceDestCheck !== undefined &&
      input.SourceDestCheck !== null && { SourceDestCheck: input.SourceDestCheck }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = (
  input: AwsEc2NetworkInterfaceIpV6AddressDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpV6Address !== undefined && input.IpV6Address !== null && { IpV6Address: input.IpV6Address }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = (
  input: AwsEc2NetworkInterfaceIpV6AddressDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = (
  input: AwsEc2NetworkInterfacePrivateIpAddressDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrivateDnsName !== undefined &&
      input.PrivateDnsName !== null && { PrivateDnsName: input.PrivateDnsName }),
    ...(input.PrivateIpAddress !== undefined &&
      input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = (
  input: AwsEc2NetworkInterfacePrivateIpAddressDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  input: AwsEc2NetworkInterfaceSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  input: AwsEc2NetworkInterfaceSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupDetails = (
  input: AwsEc2SecurityGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.IpPermissions !== undefined &&
      input.IpPermissions !== null && {
        IpPermissions: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(input.IpPermissions, context),
      }),
    ...(input.IpPermissionsEgress !== undefined &&
      input.IpPermissionsEgress !== null && {
        IpPermissionsEgress: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(
          input.IpPermissionsEgress,
          context
        ),
      }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  input: AwsEc2SecurityGroupIpPermission,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
    ...(input.IpProtocol !== undefined && input.IpProtocol !== null && { IpProtocol: input.IpProtocol }),
    ...(input.IpRanges !== undefined &&
      input.IpRanges !== null && {
        IpRanges: serializeAws_restJson1AwsEc2SecurityGroupIpRangeList(input.IpRanges, context),
      }),
    ...(input.Ipv6Ranges !== undefined &&
      input.Ipv6Ranges !== null && {
        Ipv6Ranges: serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(input.Ipv6Ranges, context),
      }),
    ...(input.PrefixListIds !== undefined &&
      input.PrefixListIds !== null && {
        PrefixListIds: serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(input.PrefixListIds, context),
      }),
    ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
    ...(input.UserIdGroupPairs !== undefined &&
      input.UserIdGroupPairs !== null && {
        UserIdGroupPairs: serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(input.UserIdGroupPairs, context),
      }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  input: AwsEc2SecurityGroupIpPermission[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  input: AwsEc2SecurityGroupIpRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIp !== undefined && input.CidrIp !== null && { CidrIp: input.CidrIp }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  input: AwsEc2SecurityGroupIpRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  input: AwsEc2SecurityGroupIpv6Range,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIpv6 !== undefined && input.CidrIpv6 !== null && { CidrIpv6: input.CidrIpv6 }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  input: AwsEc2SecurityGroupIpv6Range[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  input: AwsEc2SecurityGroupPrefixListId,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrefixListId !== undefined && input.PrefixListId !== null && { PrefixListId: input.PrefixListId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  input: AwsEc2SecurityGroupPrefixListId[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  input: AwsEc2SecurityGroupUserIdGroupPair,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.PeeringStatus !== undefined && input.PeeringStatus !== null && { PeeringStatus: input.PeeringStatus }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    ...(input.VpcPeeringConnectionId !== undefined &&
      input.VpcPeeringConnectionId !== null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  input: AwsEc2SecurityGroupUserIdGroupPair[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SubnetDetails = (input: AwsEc2SubnetDetails, context: __SerdeContext): any => {
  return {
    ...(input.AssignIpv6AddressOnCreation !== undefined &&
      input.AssignIpv6AddressOnCreation !== null && { AssignIpv6AddressOnCreation: input.AssignIpv6AddressOnCreation }),
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZoneId !== undefined &&
      input.AvailabilityZoneId !== null && { AvailabilityZoneId: input.AvailabilityZoneId }),
    ...(input.AvailableIpAddressCount !== undefined &&
      input.AvailableIpAddressCount !== null && { AvailableIpAddressCount: input.AvailableIpAddressCount }),
    ...(input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock }),
    ...(input.DefaultForAz !== undefined && input.DefaultForAz !== null && { DefaultForAz: input.DefaultForAz }),
    ...(input.Ipv6CidrBlockAssociationSet !== undefined &&
      input.Ipv6CidrBlockAssociationSet !== null && {
        Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(
          input.Ipv6CidrBlockAssociationSet,
          context
        ),
      }),
    ...(input.MapPublicIpOnLaunch !== undefined &&
      input.MapPublicIpOnLaunch !== null && { MapPublicIpOnLaunch: input.MapPublicIpOnLaunch }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.SubnetArn !== undefined && input.SubnetArn !== null && { SubnetArn: input.SubnetArn }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2VolumeAttachment = (input: AwsEc2VolumeAttachment, context: __SerdeContext): any => {
  return {
    ...(input.AttachTime !== undefined && input.AttachTime !== null && { AttachTime: input.AttachTime }),
    ...(input.DeleteOnTermination !== undefined &&
      input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2VolumeAttachmentList = (
  input: AwsEc2VolumeAttachment[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VolumeDetails = (input: AwsEc2VolumeDetails, context: __SerdeContext): any => {
  return {
    ...(input.Attachments !== undefined &&
      input.Attachments !== null && {
        Attachments: serializeAws_restJson1AwsEc2VolumeAttachmentList(input.Attachments, context),
      }),
    ...(input.CreateTime !== undefined && input.CreateTime !== null && { CreateTime: input.CreateTime }),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2VpcDetails = (input: AwsEc2VpcDetails, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlockAssociationSet !== undefined &&
      input.CidrBlockAssociationSet !== null && {
        CidrBlockAssociationSet: serializeAws_restJson1CidrBlockAssociationList(input.CidrBlockAssociationSet, context),
      }),
    ...(input.DhcpOptionsId !== undefined && input.DhcpOptionsId !== null && { DhcpOptionsId: input.DhcpOptionsId }),
    ...(input.Ipv6CidrBlockAssociationSet !== undefined &&
      input.Ipv6CidrBlockAssociationSet !== null && {
        Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(
          input.Ipv6CidrBlockAssociationSet,
          context
        ),
      }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionDetails = (
  input: AwsEc2VpnConnectionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
    ...(input.CustomerGatewayConfiguration !== undefined &&
      input.CustomerGatewayConfiguration !== null && {
        CustomerGatewayConfiguration: input.CustomerGatewayConfiguration,
      }),
    ...(input.CustomerGatewayId !== undefined &&
      input.CustomerGatewayId !== null && { CustomerGatewayId: input.CustomerGatewayId }),
    ...(input.Options !== undefined &&
      input.Options !== null && {
        Options: serializeAws_restJson1AwsEc2VpnConnectionOptionsDetails(input.Options, context),
      }),
    ...(input.Routes !== undefined &&
      input.Routes !== null && { Routes: serializeAws_restJson1AwsEc2VpnConnectionRoutesList(input.Routes, context) }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.TransitGatewayId !== undefined &&
      input.TransitGatewayId !== null && { TransitGatewayId: input.TransitGatewayId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VgwTelemetry !== undefined &&
      input.VgwTelemetry !== null && {
        VgwTelemetry: serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList(input.VgwTelemetry, context),
      }),
    ...(input.VpnConnectionId !== undefined &&
      input.VpnConnectionId !== null && { VpnConnectionId: input.VpnConnectionId }),
    ...(input.VpnGatewayId !== undefined && input.VpnGatewayId !== null && { VpnGatewayId: input.VpnGatewayId }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsDetails = (
  input: AwsEc2VpnConnectionOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.StaticRoutesOnly !== undefined &&
      input.StaticRoutesOnly !== null && { StaticRoutesOnly: input.StaticRoutesOnly }),
    ...(input.TunnelOptions !== undefined &&
      input.TunnelOptions !== null && {
        TunnelOptions: serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList(input.TunnelOptions, context),
      }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails = (
  input: AwsEc2VpnConnectionOptionsTunnelOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DpdTimeoutSeconds !== undefined &&
      input.DpdTimeoutSeconds !== null && { DpdTimeoutSeconds: input.DpdTimeoutSeconds }),
    ...(input.IkeVersions !== undefined &&
      input.IkeVersions !== null && {
        IkeVersions: serializeAws_restJson1NonEmptyStringList(input.IkeVersions, context),
      }),
    ...(input.OutsideIpAddress !== undefined &&
      input.OutsideIpAddress !== null && { OutsideIpAddress: input.OutsideIpAddress }),
    ...(input.Phase1DhGroupNumbers !== undefined &&
      input.Phase1DhGroupNumbers !== null && {
        Phase1DhGroupNumbers: serializeAws_restJson1IntegerList(input.Phase1DhGroupNumbers, context),
      }),
    ...(input.Phase1EncryptionAlgorithms !== undefined &&
      input.Phase1EncryptionAlgorithms !== null && {
        Phase1EncryptionAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase1EncryptionAlgorithms, context),
      }),
    ...(input.Phase1IntegrityAlgorithms !== undefined &&
      input.Phase1IntegrityAlgorithms !== null && {
        Phase1IntegrityAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase1IntegrityAlgorithms, context),
      }),
    ...(input.Phase1LifetimeSeconds !== undefined &&
      input.Phase1LifetimeSeconds !== null && { Phase1LifetimeSeconds: input.Phase1LifetimeSeconds }),
    ...(input.Phase2DhGroupNumbers !== undefined &&
      input.Phase2DhGroupNumbers !== null && {
        Phase2DhGroupNumbers: serializeAws_restJson1IntegerList(input.Phase2DhGroupNumbers, context),
      }),
    ...(input.Phase2EncryptionAlgorithms !== undefined &&
      input.Phase2EncryptionAlgorithms !== null && {
        Phase2EncryptionAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase2EncryptionAlgorithms, context),
      }),
    ...(input.Phase2IntegrityAlgorithms !== undefined &&
      input.Phase2IntegrityAlgorithms !== null && {
        Phase2IntegrityAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase2IntegrityAlgorithms, context),
      }),
    ...(input.Phase2LifetimeSeconds !== undefined &&
      input.Phase2LifetimeSeconds !== null && { Phase2LifetimeSeconds: input.Phase2LifetimeSeconds }),
    ...(input.PreSharedKey !== undefined && input.PreSharedKey !== null && { PreSharedKey: input.PreSharedKey }),
    ...(input.RekeyFuzzPercentage !== undefined &&
      input.RekeyFuzzPercentage !== null && { RekeyFuzzPercentage: input.RekeyFuzzPercentage }),
    ...(input.RekeyMarginTimeSeconds !== undefined &&
      input.RekeyMarginTimeSeconds !== null && { RekeyMarginTimeSeconds: input.RekeyMarginTimeSeconds }),
    ...(input.ReplayWindowSize !== undefined &&
      input.ReplayWindowSize !== null && { ReplayWindowSize: input.ReplayWindowSize }),
    ...(input.TunnelInsideCidr !== undefined &&
      input.TunnelInsideCidr !== null && { TunnelInsideCidr: input.TunnelInsideCidr }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList = (
  input: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VpnConnectionRoutesDetails = (
  input: AwsEc2VpnConnectionRoutesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationCidrBlock !== undefined &&
      input.DestinationCidrBlock !== null && { DestinationCidrBlock: input.DestinationCidrBlock }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionRoutesList = (
  input: AwsEc2VpnConnectionRoutesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2VpnConnectionRoutesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails = (
  input: AwsEc2VpnConnectionVgwTelemetryDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptedRouteCount !== undefined &&
      input.AcceptedRouteCount !== null && { AcceptedRouteCount: input.AcceptedRouteCount }),
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.LastStatusChange !== undefined &&
      input.LastStatusChange !== null && { LastStatusChange: input.LastStatusChange }),
    ...(input.OutsideIpAddress !== undefined &&
      input.OutsideIpAddress !== null && { OutsideIpAddress: input.OutsideIpAddress }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StatusMessage !== undefined && input.StatusMessage !== null && { StatusMessage: input.StatusMessage }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList = (
  input: AwsEc2VpnConnectionVgwTelemetryDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcrContainerImageDetails = (
  input: AwsEcrContainerImageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture }),
    ...(input.ImageDigest !== undefined && input.ImageDigest !== null && { ImageDigest: input.ImageDigest }),
    ...(input.ImagePublishedAt !== undefined &&
      input.ImagePublishedAt !== null && { ImagePublishedAt: input.ImagePublishedAt }),
    ...(input.ImageTags !== undefined &&
      input.ImageTags !== null && { ImageTags: serializeAws_restJson1NonEmptyStringList(input.ImageTags, context) }),
    ...(input.RegistryId !== undefined && input.RegistryId !== null && { RegistryId: input.RegistryId }),
    ...(input.RepositoryName !== undefined &&
      input.RepositoryName !== null && { RepositoryName: input.RepositoryName }),
  };
};

const serializeAws_restJson1AwsEcsClusterClusterSettingsDetails = (
  input: AwsEcsClusterClusterSettingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsClusterClusterSettingsList = (
  input: AwsEcsClusterClusterSettingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsClusterClusterSettingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsClusterConfigurationDetails = (
  input: AwsEcsClusterConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecuteCommandConfiguration !== undefined &&
      input.ExecuteCommandConfiguration !== null && {
        ExecuteCommandConfiguration: serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails(
          input.ExecuteCommandConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = (
  input: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LogConfiguration !== undefined &&
      input.LogConfiguration !== null && {
        LogConfiguration:
          serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(
            input.LogConfiguration,
            context
          ),
      }),
    ...(input.Logging !== undefined && input.Logging !== null && { Logging: input.Logging }),
  };
};

const serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails = (
  input: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchEncryptionEnabled !== undefined &&
      input.CloudWatchEncryptionEnabled !== null && { CloudWatchEncryptionEnabled: input.CloudWatchEncryptionEnabled }),
    ...(input.CloudWatchLogGroupName !== undefined &&
      input.CloudWatchLogGroupName !== null && { CloudWatchLogGroupName: input.CloudWatchLogGroupName }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3EncryptionEnabled !== undefined &&
      input.S3EncryptionEnabled !== null && { S3EncryptionEnabled: input.S3EncryptionEnabled }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails = (
  input: AwsEcsClusterDefaultCapacityProviderStrategyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Base !== undefined && input.Base !== null && { Base: input.Base }),
    ...(input.CapacityProvider !== undefined &&
      input.CapacityProvider !== null && { CapacityProvider: input.CapacityProvider }),
    ...(input.Weight !== undefined && input.Weight !== null && { Weight: input.Weight }),
  };
};

const serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList = (
  input: AwsEcsClusterDefaultCapacityProviderStrategyDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsClusterDetails = (input: AwsEcsClusterDetails, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviders !== undefined &&
      input.CapacityProviders !== null && {
        CapacityProviders: serializeAws_restJson1NonEmptyStringList(input.CapacityProviders, context),
      }),
    ...(input.ClusterSettings !== undefined &&
      input.ClusterSettings !== null && {
        ClusterSettings: serializeAws_restJson1AwsEcsClusterClusterSettingsList(input.ClusterSettings, context),
      }),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1AwsEcsClusterConfigurationDetails(input.Configuration, context),
      }),
    ...(input.DefaultCapacityProviderStrategy !== undefined &&
      input.DefaultCapacityProviderStrategy !== null && {
        DefaultCapacityProviderStrategy: serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList(
          input.DefaultCapacityProviderStrategy,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails = (
  input: AwsEcsServiceCapacityProviderStrategyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Base !== undefined && input.Base !== null && { Base: input.Base }),
    ...(input.CapacityProvider !== undefined &&
      input.CapacityProvider !== null && { CapacityProvider: input.CapacityProvider }),
    ...(input.Weight !== undefined && input.Weight !== null && { Weight: input.Weight }),
  };
};

const serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList = (
  input: AwsEcsServiceCapacityProviderStrategyDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = (
  input: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enable !== undefined && input.Enable !== null && { Enable: input.Enable }),
    ...(input.Rollback !== undefined && input.Rollback !== null && { Rollback: input.Rollback }),
  };
};

const serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails = (
  input: AwsEcsServiceDeploymentConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentCircuitBreaker !== undefined &&
      input.DeploymentCircuitBreaker !== null && {
        DeploymentCircuitBreaker:
          serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(
            input.DeploymentCircuitBreaker,
            context
          ),
      }),
    ...(input.MaximumPercent !== undefined &&
      input.MaximumPercent !== null && { MaximumPercent: input.MaximumPercent }),
    ...(input.MinimumHealthyPercent !== undefined &&
      input.MinimumHealthyPercent !== null && { MinimumHealthyPercent: input.MinimumHealthyPercent }),
  };
};

const serializeAws_restJson1AwsEcsServiceDeploymentControllerDetails = (
  input: AwsEcsServiceDeploymentControllerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServiceDetails = (input: AwsEcsServiceDetails, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy !== undefined &&
      input.CapacityProviderStrategy !== null && {
        CapacityProviderStrategy: serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList(
          input.CapacityProviderStrategy,
          context
        ),
      }),
    ...(input.Cluster !== undefined && input.Cluster !== null && { Cluster: input.Cluster }),
    ...(input.DeploymentConfiguration !== undefined &&
      input.DeploymentConfiguration !== null && {
        DeploymentConfiguration: serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails(
          input.DeploymentConfiguration,
          context
        ),
      }),
    ...(input.DeploymentController !== undefined &&
      input.DeploymentController !== null && {
        DeploymentController: serializeAws_restJson1AwsEcsServiceDeploymentControllerDetails(
          input.DeploymentController,
          context
        ),
      }),
    ...(input.DesiredCount !== undefined && input.DesiredCount !== null && { DesiredCount: input.DesiredCount }),
    ...(input.EnableEcsManagedTags !== undefined &&
      input.EnableEcsManagedTags !== null && { EnableEcsManagedTags: input.EnableEcsManagedTags }),
    ...(input.EnableExecuteCommand !== undefined &&
      input.EnableExecuteCommand !== null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.HealthCheckGracePeriodSeconds !== undefined &&
      input.HealthCheckGracePeriodSeconds !== null && {
        HealthCheckGracePeriodSeconds: input.HealthCheckGracePeriodSeconds,
      }),
    ...(input.LaunchType !== undefined && input.LaunchType !== null && { LaunchType: input.LaunchType }),
    ...(input.LoadBalancers !== undefined &&
      input.LoadBalancers !== null && {
        LoadBalancers: serializeAws_restJson1AwsEcsServiceLoadBalancersList(input.LoadBalancers, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NetworkConfiguration !== undefined &&
      input.NetworkConfiguration !== null && {
        NetworkConfiguration: serializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails(
          input.NetworkConfiguration,
          context
        ),
      }),
    ...(input.PlacementConstraints !== undefined &&
      input.PlacementConstraints !== null && {
        PlacementConstraints: serializeAws_restJson1AwsEcsServicePlacementConstraintsList(
          input.PlacementConstraints,
          context
        ),
      }),
    ...(input.PlacementStrategies !== undefined &&
      input.PlacementStrategies !== null && {
        PlacementStrategies: serializeAws_restJson1AwsEcsServicePlacementStrategiesList(
          input.PlacementStrategies,
          context
        ),
      }),
    ...(input.PlatformVersion !== undefined &&
      input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags !== undefined && input.PropagateTags !== null && { PropagateTags: input.PropagateTags }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.SchedulingStrategy !== undefined &&
      input.SchedulingStrategy !== null && { SchedulingStrategy: input.SchedulingStrategy }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.ServiceRegistries !== undefined &&
      input.ServiceRegistries !== null && {
        ServiceRegistries: serializeAws_restJson1AwsEcsServiceServiceRegistriesList(input.ServiceRegistries, context),
      }),
    ...(input.TaskDefinition !== undefined &&
      input.TaskDefinition !== null && { TaskDefinition: input.TaskDefinition }),
  };
};

const serializeAws_restJson1AwsEcsServiceLoadBalancersDetails = (
  input: AwsEcsServiceLoadBalancersDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.ContainerPort !== undefined && input.ContainerPort !== null && { ContainerPort: input.ContainerPort }),
    ...(input.LoadBalancerName !== undefined &&
      input.LoadBalancerName !== null && { LoadBalancerName: input.LoadBalancerName }),
    ...(input.TargetGroupArn !== undefined &&
      input.TargetGroupArn !== null && { TargetGroupArn: input.TargetGroupArn }),
  };
};

const serializeAws_restJson1AwsEcsServiceLoadBalancersList = (
  input: AwsEcsServiceLoadBalancersDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsServiceLoadBalancersDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = (
  input: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignPublicIp !== undefined &&
      input.AssignPublicIp !== null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1NonEmptyStringList(input.SecurityGroups, context),
      }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) }),
  };
};

const serializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails = (
  input: AwsEcsServiceNetworkConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsVpcConfiguration !== undefined &&
      input.AwsVpcConfiguration !== null && {
        AwsVpcConfiguration: serializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(
          input.AwsVpcConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementConstraintsDetails = (
  input: AwsEcsServicePlacementConstraintsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementConstraintsList = (
  input: AwsEcsServicePlacementConstraintsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsServicePlacementConstraintsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServicePlacementStrategiesDetails = (
  input: AwsEcsServicePlacementStrategiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementStrategiesList = (
  input: AwsEcsServicePlacementStrategiesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsServicePlacementStrategiesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceServiceRegistriesDetails = (
  input: AwsEcsServiceServiceRegistriesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.ContainerPort !== undefined && input.ContainerPort !== null && { ContainerPort: input.ContainerPort }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.RegistryArn !== undefined && input.RegistryArn !== null && { RegistryArn: input.RegistryArn }),
  };
};

const serializeAws_restJson1AwsEcsServiceServiceRegistriesList = (
  input: AwsEcsServiceServiceRegistriesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsServiceServiceRegistriesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Command !== undefined &&
      input.Command !== null && { Command: serializeAws_restJson1NonEmptyStringList(input.Command, context) }),
    ...(input.Cpu !== undefined && input.Cpu !== null && { Cpu: input.Cpu }),
    ...(input.DependsOn !== undefined &&
      input.DependsOn !== null && {
        DependsOn: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList(
          input.DependsOn,
          context
        ),
      }),
    ...(input.DisableNetworking !== undefined &&
      input.DisableNetworking !== null && { DisableNetworking: input.DisableNetworking }),
    ...(input.DnsSearchDomains !== undefined &&
      input.DnsSearchDomains !== null && {
        DnsSearchDomains: serializeAws_restJson1NonEmptyStringList(input.DnsSearchDomains, context),
      }),
    ...(input.DnsServers !== undefined &&
      input.DnsServers !== null && { DnsServers: serializeAws_restJson1NonEmptyStringList(input.DnsServers, context) }),
    ...(input.DockerLabels !== undefined &&
      input.DockerLabels !== null && { DockerLabels: serializeAws_restJson1FieldMap(input.DockerLabels, context) }),
    ...(input.DockerSecurityOptions !== undefined &&
      input.DockerSecurityOptions !== null && {
        DockerSecurityOptions: serializeAws_restJson1NonEmptyStringList(input.DockerSecurityOptions, context),
      }),
    ...(input.EntryPoint !== undefined &&
      input.EntryPoint !== null && { EntryPoint: serializeAws_restJson1NonEmptyStringList(input.EntryPoint, context) }),
    ...(input.Environment !== undefined &&
      input.Environment !== null && {
        Environment: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList(
          input.Environment,
          context
        ),
      }),
    ...(input.EnvironmentFiles !== undefined &&
      input.EnvironmentFiles !== null && {
        EnvironmentFiles: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(
          input.EnvironmentFiles,
          context
        ),
      }),
    ...(input.Essential !== undefined && input.Essential !== null && { Essential: input.Essential }),
    ...(input.ExtraHosts !== undefined &&
      input.ExtraHosts !== null && {
        ExtraHosts: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList(
          input.ExtraHosts,
          context
        ),
      }),
    ...(input.FirelensConfiguration !== undefined &&
      input.FirelensConfiguration !== null && {
        FirelensConfiguration:
          serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(
            input.FirelensConfiguration,
            context
          ),
      }),
    ...(input.HealthCheck !== undefined &&
      input.HealthCheck !== null && {
        HealthCheck: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(
          input.HealthCheck,
          context
        ),
      }),
    ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
    ...(input.Image !== undefined && input.Image !== null && { Image: input.Image }),
    ...(input.Interactive !== undefined && input.Interactive !== null && { Interactive: input.Interactive }),
    ...(input.Links !== undefined &&
      input.Links !== null && { Links: serializeAws_restJson1NonEmptyStringList(input.Links, context) }),
    ...(input.LinuxParameters !== undefined &&
      input.LinuxParameters !== null && {
        LinuxParameters: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(
          input.LinuxParameters,
          context
        ),
      }),
    ...(input.LogConfiguration !== undefined &&
      input.LogConfiguration !== null && {
        LogConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(
          input.LogConfiguration,
          context
        ),
      }),
    ...(input.Memory !== undefined && input.Memory !== null && { Memory: input.Memory }),
    ...(input.MemoryReservation !== undefined &&
      input.MemoryReservation !== null && { MemoryReservation: input.MemoryReservation }),
    ...(input.MountPoints !== undefined &&
      input.MountPoints !== null && {
        MountPoints: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList(
          input.MountPoints,
          context
        ),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PortMappings !== undefined &&
      input.PortMappings !== null && {
        PortMappings: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList(
          input.PortMappings,
          context
        ),
      }),
    ...(input.Privileged !== undefined && input.Privileged !== null && { Privileged: input.Privileged }),
    ...(input.PseudoTerminal !== undefined &&
      input.PseudoTerminal !== null && { PseudoTerminal: input.PseudoTerminal }),
    ...(input.ReadonlyRootFilesystem !== undefined &&
      input.ReadonlyRootFilesystem !== null && { ReadonlyRootFilesystem: input.ReadonlyRootFilesystem }),
    ...(input.RepositoryCredentials !== undefined &&
      input.RepositoryCredentials !== null && {
        RepositoryCredentials:
          serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(
            input.RepositoryCredentials,
            context
          ),
      }),
    ...(input.ResourceRequirements !== undefined &&
      input.ResourceRequirements !== null && {
        ResourceRequirements: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(
          input.ResourceRequirements,
          context
        ),
      }),
    ...(input.Secrets !== undefined &&
      input.Secrets !== null && {
        Secrets: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList(input.Secrets, context),
      }),
    ...(input.StartTimeout !== undefined && input.StartTimeout !== null && { StartTimeout: input.StartTimeout }),
    ...(input.StopTimeout !== undefined && input.StopTimeout !== null && { StopTimeout: input.StopTimeout }),
    ...(input.SystemControls !== undefined &&
      input.SystemControls !== null && {
        SystemControls: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList(
          input.SystemControls,
          context
        ),
      }),
    ...(input.Ulimits !== undefined &&
      input.Ulimits !== null && {
        Ulimits: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList(input.Ulimits, context),
      }),
    ...(input.User !== undefined && input.User !== null && { User: input.User }),
    ...(input.VolumesFrom !== undefined &&
      input.VolumesFrom !== null && {
        VolumesFrom: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList(
          input.VolumesFrom,
          context
        ),
      }),
    ...(input.WorkingDirectory !== undefined &&
      input.WorkingDirectory !== null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_restJson1FieldMap(input.Options, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Command !== undefined &&
      input.Command !== null && { Command: serializeAws_restJson1NonEmptyStringList(input.Command, context) }),
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
    ...(input.Retries !== undefined && input.Retries !== null && { Retries: input.Retries }),
    ...(input.StartPeriod !== undefined && input.StartPeriod !== null && { StartPeriod: input.StartPeriod }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Add !== undefined &&
      input.Add !== null && { Add: serializeAws_restJson1NonEmptyStringList(input.Add, context) }),
    ...(input.Drop !== undefined &&
      input.Drop !== null && { Drop: serializeAws_restJson1NonEmptyStringList(input.Drop, context) }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Capabilities !== undefined &&
      input.Capabilities !== null && {
        Capabilities: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(
          input.Capabilities,
          context
        ),
      }),
    ...(input.Devices !== undefined &&
      input.Devices !== null && {
        Devices: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(
          input.Devices,
          context
        ),
      }),
    ...(input.InitProcessEnabled !== undefined &&
      input.InitProcessEnabled !== null && { InitProcessEnabled: input.InitProcessEnabled }),
    ...(input.MaxSwap !== undefined && input.MaxSwap !== null && { MaxSwap: input.MaxSwap }),
    ...(input.SharedMemorySize !== undefined &&
      input.SharedMemorySize !== null && { SharedMemorySize: input.SharedMemorySize }),
    ...(input.Swappiness !== undefined && input.Swappiness !== null && { Swappiness: input.Swappiness }),
    ...(input.Tmpfs !== undefined &&
      input.Tmpfs !== null && {
        Tmpfs: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(
          input.Tmpfs,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath !== undefined && input.ContainerPath !== null && { ContainerPath: input.ContainerPath }),
    ...(input.HostPath !== undefined && input.HostPath !== null && { HostPath: input.HostPath }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1NonEmptyStringList(input.Permissions, context),
      }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath !== undefined && input.ContainerPath !== null && { ContainerPath: input.ContainerPath }),
    ...(input.MountOptions !== undefined &&
      input.MountOptions !== null && {
        MountOptions: serializeAws_restJson1NonEmptyStringList(input.MountOptions, context),
      }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogDriver !== undefined && input.LogDriver !== null && { LogDriver: input.LogDriver }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_restJson1FieldMap(input.Options, context) }),
    ...(input.SecretOptions !== undefined &&
      input.SecretOptions !== null && {
        SecretOptions: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(
          input.SecretOptions,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ValueFrom !== undefined && input.ValueFrom !== null && { ValueFrom: input.ValueFrom }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath !== undefined && input.ContainerPath !== null && { ContainerPath: input.ContainerPath }),
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.SourceVolume !== undefined && input.SourceVolume !== null && { SourceVolume: input.SourceVolume }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPort !== undefined && input.ContainerPort !== null && { ContainerPort: input.ContainerPort }),
    ...(input.HostPort !== undefined && input.HostPort !== null && { HostPort: input.HostPort }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CredentialsParameter !== undefined &&
      input.CredentialsParameter !== null && { CredentialsParameter: input.CredentialsParameter }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ValueFrom !== undefined && input.ValueFrom !== null && { ValueFrom: input.ValueFrom }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.HardLimit !== undefined && input.HardLimit !== null && { HardLimit: input.HardLimit }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SoftLimit !== undefined && input.SoftLimit !== null && { SoftLimit: input.SoftLimit }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.SourceContainer !== undefined &&
      input.SourceContainer !== null && { SourceContainer: input.SourceContainer }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionDetails = (
  input: AwsEcsTaskDefinitionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerDefinitions !== undefined &&
      input.ContainerDefinitions !== null && {
        ContainerDefinitions: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList(
          input.ContainerDefinitions,
          context
        ),
      }),
    ...(input.Cpu !== undefined && input.Cpu !== null && { Cpu: input.Cpu }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.Family !== undefined && input.Family !== null && { Family: input.Family }),
    ...(input.InferenceAccelerators !== undefined &&
      input.InferenceAccelerators !== null && {
        InferenceAccelerators: serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList(
          input.InferenceAccelerators,
          context
        ),
      }),
    ...(input.IpcMode !== undefined && input.IpcMode !== null && { IpcMode: input.IpcMode }),
    ...(input.Memory !== undefined && input.Memory !== null && { Memory: input.Memory }),
    ...(input.NetworkMode !== undefined && input.NetworkMode !== null && { NetworkMode: input.NetworkMode }),
    ...(input.PidMode !== undefined && input.PidMode !== null && { PidMode: input.PidMode }),
    ...(input.PlacementConstraints !== undefined &&
      input.PlacementConstraints !== null && {
        PlacementConstraints: serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList(
          input.PlacementConstraints,
          context
        ),
      }),
    ...(input.ProxyConfiguration !== undefined &&
      input.ProxyConfiguration !== null && {
        ProxyConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails(
          input.ProxyConfiguration,
          context
        ),
      }),
    ...(input.RequiresCompatibilities !== undefined &&
      input.RequiresCompatibilities !== null && {
        RequiresCompatibilities: serializeAws_restJson1NonEmptyStringList(input.RequiresCompatibilities, context),
      }),
    ...(input.TaskRoleArn !== undefined && input.TaskRoleArn !== null && { TaskRoleArn: input.TaskRoleArn }),
    ...(input.Volumes !== undefined &&
      input.Volumes !== null && {
        Volumes: serializeAws_restJson1AwsEcsTaskDefinitionVolumesList(input.Volumes, context),
      }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails = (
  input: AwsEcsTaskDefinitionInferenceAcceleratorsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
    ...(input.DeviceType !== undefined && input.DeviceType !== null && { DeviceType: input.DeviceType }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList = (
  input: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails = (
  input: AwsEcsTaskDefinitionPlacementConstraintsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList = (
  input: AwsEcsTaskDefinitionPlacementConstraintsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails = (
  input: AwsEcsTaskDefinitionProxyConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.ProxyConfigurationProperties !== undefined &&
      input.ProxyConfigurationProperties !== null && {
        ProxyConfigurationProperties:
          serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(
            input.ProxyConfigurationProperties,
            context
          ),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails = (
  input: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = (
  input: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails = (
  input: AwsEcsTaskDefinitionVolumesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DockerVolumeConfiguration !== undefined &&
      input.DockerVolumeConfiguration !== null && {
        DockerVolumeConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(
          input.DockerVolumeConfiguration,
          context
        ),
      }),
    ...(input.EfsVolumeConfiguration !== undefined &&
      input.EfsVolumeConfiguration !== null && {
        EfsVolumeConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(
          input.EfsVolumeConfiguration,
          context
        ),
      }),
    ...(input.Host !== undefined &&
      input.Host !== null && {
        Host: serializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails(input.Host, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = (
  input: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Autoprovision !== undefined && input.Autoprovision !== null && { Autoprovision: input.Autoprovision }),
    ...(input.Driver !== undefined && input.Driver !== null && { Driver: input.Driver }),
    ...(input.DriverOpts !== undefined &&
      input.DriverOpts !== null && { DriverOpts: serializeAws_restJson1FieldMap(input.DriverOpts, context) }),
    ...(input.Labels !== undefined &&
      input.Labels !== null && { Labels: serializeAws_restJson1FieldMap(input.Labels, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails = (
  input: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPointId !== undefined && input.AccessPointId !== null && { AccessPointId: input.AccessPointId }),
    ...(input.Iam !== undefined && input.Iam !== null && { Iam: input.Iam }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = (
  input: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationConfig !== undefined &&
      input.AuthorizationConfig !== null && {
        AuthorizationConfig:
          serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(
            input.AuthorizationConfig,
            context
          ),
      }),
    ...(input.FilesystemId !== undefined && input.FilesystemId !== null && { FilesystemId: input.FilesystemId }),
    ...(input.RootDirectory !== undefined && input.RootDirectory !== null && { RootDirectory: input.RootDirectory }),
    ...(input.TransitEncryption !== undefined &&
      input.TransitEncryption !== null && { TransitEncryption: input.TransitEncryption }),
    ...(input.TransitEncryptionPort !== undefined &&
      input.TransitEncryptionPort !== null && { TransitEncryptionPort: input.TransitEncryptionPort }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails = (
  input: AwsEcsTaskDefinitionVolumesHostDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SourcePath !== undefined && input.SourcePath !== null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesList = (
  input: AwsEcsTaskDefinitionVolumesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = (
  input: AwsElasticBeanstalkEnvironmentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.Cname !== undefined && input.Cname !== null && { Cname: input.Cname }),
    ...(input.DateCreated !== undefined && input.DateCreated !== null && { DateCreated: input.DateCreated }),
    ...(input.DateUpdated !== undefined && input.DateUpdated !== null && { DateUpdated: input.DateUpdated }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EndpointUrl !== undefined && input.EndpointUrl !== null && { EndpointUrl: input.EndpointUrl }),
    ...(input.EnvironmentArn !== undefined &&
      input.EnvironmentArn !== null && { EnvironmentArn: input.EnvironmentArn }),
    ...(input.EnvironmentId !== undefined && input.EnvironmentId !== null && { EnvironmentId: input.EnvironmentId }),
    ...(input.EnvironmentLinks !== undefined &&
      input.EnvironmentLinks !== null && {
        EnvironmentLinks: serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(
          input.EnvironmentLinks,
          context
        ),
      }),
    ...(input.EnvironmentName !== undefined &&
      input.EnvironmentName !== null && { EnvironmentName: input.EnvironmentName }),
    ...(input.OptionSettings !== undefined &&
      input.OptionSettings !== null && {
        OptionSettings: serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(
          input.OptionSettings,
          context
        ),
      }),
    ...(input.PlatformArn !== undefined && input.PlatformArn !== null && { PlatformArn: input.PlatformArn }),
    ...(input.SolutionStackName !== undefined &&
      input.SolutionStackName !== null && { SolutionStackName: input.SolutionStackName }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.Tier !== undefined &&
      input.Tier !== null && { Tier: serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(input.Tier, context) }),
    ...(input.VersionLabel !== undefined && input.VersionLabel !== null && { VersionLabel: input.VersionLabel }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = (
  input: AwsElasticBeanstalkEnvironmentEnvironmentLink,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnvironmentName !== undefined &&
      input.EnvironmentName !== null && { EnvironmentName: input.EnvironmentName }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = (
  input: AwsElasticBeanstalkEnvironmentEnvironmentLink[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = (
  input: AwsElasticBeanstalkEnvironmentOptionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.OptionName !== undefined && input.OptionName !== null && { OptionName: input.OptionName }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = (
  input: AwsElasticBeanstalkEnvironmentOptionSetting[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = (
  input: AwsElasticBeanstalkEnvironmentTier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDetails = (
  input: AwsElasticsearchDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPolicies !== undefined &&
      input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies }),
    ...(input.DomainEndpointOptions !== undefined &&
      input.DomainEndpointOptions !== null && {
        DomainEndpointOptions: serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(
          input.DomainEndpointOptions,
          context
        ),
      }),
    ...(input.DomainId !== undefined && input.DomainId !== null && { DomainId: input.DomainId }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ElasticsearchClusterConfig !== undefined &&
      input.ElasticsearchClusterConfig !== null && {
        ElasticsearchClusterConfig: serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails(
          input.ElasticsearchClusterConfig,
          context
        ),
      }),
    ...(input.ElasticsearchVersion !== undefined &&
      input.ElasticsearchVersion !== null && { ElasticsearchVersion: input.ElasticsearchVersion }),
    ...(input.EncryptionAtRestOptions !== undefined &&
      input.EncryptionAtRestOptions !== null && {
        EncryptionAtRestOptions: serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(
          input.EncryptionAtRestOptions,
          context
        ),
      }),
    ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
    ...(input.Endpoints !== undefined &&
      input.Endpoints !== null && { Endpoints: serializeAws_restJson1FieldMap(input.Endpoints, context) }),
    ...(input.LogPublishingOptions !== undefined &&
      input.LogPublishingOptions !== null && {
        LogPublishingOptions: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions(
          input.LogPublishingOptions,
          context
        ),
      }),
    ...(input.NodeToNodeEncryptionOptions !== undefined &&
      input.NodeToNodeEncryptionOptions !== null && {
        NodeToNodeEncryptionOptions: serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
          input.NodeToNodeEncryptionOptions,
          context
        ),
      }),
    ...(input.ServiceSoftwareOptions !== undefined &&
      input.ServiceSoftwareOptions !== null && {
        ServiceSoftwareOptions: serializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions(
          input.ServiceSoftwareOptions,
          context
        ),
      }),
    ...(input.VPCOptions !== undefined &&
      input.VPCOptions !== null && {
        VPCOptions: serializeAws_restJson1AwsElasticsearchDomainVPCOptions(input.VPCOptions, context),
      }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  input: AwsElasticsearchDomainDomainEndpointOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy !== undefined &&
      input.TLSSecurityPolicy !== null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails = (
  input: AwsElasticsearchDomainElasticsearchClusterConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DedicatedMasterCount !== undefined &&
      input.DedicatedMasterCount !== null && { DedicatedMasterCount: input.DedicatedMasterCount }),
    ...(input.DedicatedMasterEnabled !== undefined &&
      input.DedicatedMasterEnabled !== null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
    ...(input.DedicatedMasterType !== undefined &&
      input.DedicatedMasterType !== null && { DedicatedMasterType: input.DedicatedMasterType }),
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.ZoneAwarenessConfig !== undefined &&
      input.ZoneAwarenessConfig !== null && {
        ZoneAwarenessConfig:
          serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(
            input.ZoneAwarenessConfig,
            context
          ),
      }),
    ...(input.ZoneAwarenessEnabled !== undefined &&
      input.ZoneAwarenessEnabled !== null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails = (
  input: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZoneCount !== undefined &&
      input.AvailabilityZoneCount !== null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  input: AwsElasticsearchDomainEncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions = (
  input: AwsElasticsearchDomainLogPublishingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs !== undefined &&
      input.AuditLogs !== null && {
        AuditLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(input.AuditLogs, context),
      }),
    ...(input.IndexSlowLogs !== undefined &&
      input.IndexSlowLogs !== null && {
        IndexSlowLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(
          input.IndexSlowLogs,
          context
        ),
      }),
    ...(input.SearchSlowLogs !== undefined &&
      input.SearchSlowLogs !== null && {
        SearchSlowLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(
          input.SearchSlowLogs,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig = (
  input: AwsElasticsearchDomainLogPublishingOptionsLogConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined &&
      input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  input: AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions = (
  input: AwsElasticsearchDomainServiceSoftwareOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedUpdateDate !== undefined &&
      input.AutomatedUpdateDate !== null && { AutomatedUpdateDate: input.AutomatedUpdateDate }),
    ...(input.Cancellable !== undefined && input.Cancellable !== null && { Cancellable: input.Cancellable }),
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { CurrentVersion: input.CurrentVersion }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.NewVersion !== undefined && input.NewVersion !== null && { NewVersion: input.NewVersion }),
    ...(input.UpdateAvailable !== undefined &&
      input.UpdateAvailable !== null && { UpdateAvailable: input.UpdateAvailable }),
    ...(input.UpdateStatus !== undefined && input.UpdateStatus !== null && { UpdateStatus: input.UpdateStatus }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  input: AwsElasticsearchDomainVPCOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1NonEmptyStringList(input.AvailabilityZones, context),
      }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
    ...(input.VPCId !== undefined && input.VPCId !== null && { VPCId: input.VPCId }),
  };
};

const serializeAws_restJson1AwsElbAppCookieStickinessPolicies = (
  input: AwsElbAppCookieStickinessPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsElbAppCookieStickinessPolicy = (
  input: AwsElbAppCookieStickinessPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.CookieName !== undefined && input.CookieName !== null && { CookieName: input.CookieName }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsElbLbCookieStickinessPolicies = (
  input: AwsElbLbCookieStickinessPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsElbLbCookieStickinessPolicy = (
  input: AwsElbLbCookieStickinessPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.CookieExpirationPeriod !== undefined &&
      input.CookieExpirationPeriod !== null && { CookieExpirationPeriod: input.CookieExpirationPeriod }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerAccessLog = (
  input: AwsElbLoadBalancerAccessLog,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmitInterval !== undefined && input.EmitInterval !== null && { EmitInterval: input.EmitInterval }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3BucketPrefix !== undefined &&
      input.S3BucketPrefix !== null && { S3BucketPrefix: input.S3BucketPrefix }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerAttributes = (
  input: AwsElbLoadBalancerAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLog !== undefined &&
      input.AccessLog !== null && {
        AccessLog: serializeAws_restJson1AwsElbLoadBalancerAccessLog(input.AccessLog, context),
      }),
    ...(input.ConnectionDraining !== undefined &&
      input.ConnectionDraining !== null && {
        ConnectionDraining: serializeAws_restJson1AwsElbLoadBalancerConnectionDraining(
          input.ConnectionDraining,
          context
        ),
      }),
    ...(input.ConnectionSettings !== undefined &&
      input.ConnectionSettings !== null && {
        ConnectionSettings: serializeAws_restJson1AwsElbLoadBalancerConnectionSettings(
          input.ConnectionSettings,
          context
        ),
      }),
    ...(input.CrossZoneLoadBalancing !== undefined &&
      input.CrossZoneLoadBalancing !== null && {
        CrossZoneLoadBalancing: serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(
          input.CrossZoneLoadBalancing,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = (
  input: AwsElbLoadBalancerBackendServerDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstancePort !== undefined && input.InstancePort !== null && { InstancePort: input.InstancePort }),
    ...(input.PolicyNames !== undefined &&
      input.PolicyNames !== null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = (
  input: AwsElbLoadBalancerBackendServerDescription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerConnectionDraining = (
  input: AwsElbLoadBalancerConnectionDraining,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerConnectionSettings = (
  input: AwsElbLoadBalancerConnectionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdleTimeout !== undefined && input.IdleTimeout !== null && { IdleTimeout: input.IdleTimeout }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = (
  input: AwsElbLoadBalancerCrossZoneLoadBalancing,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerDetails = (
  input: AwsElbLoadBalancerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
      }),
    ...(input.BackendServerDescriptions !== undefined &&
      input.BackendServerDescriptions !== null && {
        BackendServerDescriptions: serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(
          input.BackendServerDescriptions,
          context
        ),
      }),
    ...(input.CanonicalHostedZoneName !== undefined &&
      input.CanonicalHostedZoneName !== null && { CanonicalHostedZoneName: input.CanonicalHostedZoneName }),
    ...(input.CanonicalHostedZoneNameID !== undefined &&
      input.CanonicalHostedZoneNameID !== null && { CanonicalHostedZoneNameID: input.CanonicalHostedZoneNameID }),
    ...(input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime }),
    ...(input.DnsName !== undefined && input.DnsName !== null && { DnsName: input.DnsName }),
    ...(input.HealthCheck !== undefined &&
      input.HealthCheck !== null && {
        HealthCheck: serializeAws_restJson1AwsElbLoadBalancerHealthCheck(input.HealthCheck, context),
      }),
    ...(input.Instances !== undefined &&
      input.Instances !== null && {
        Instances: serializeAws_restJson1AwsElbLoadBalancerInstances(input.Instances, context),
      }),
    ...(input.ListenerDescriptions !== undefined &&
      input.ListenerDescriptions !== null && {
        ListenerDescriptions: serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(
          input.ListenerDescriptions,
          context
        ),
      }),
    ...(input.LoadBalancerAttributes !== undefined &&
      input.LoadBalancerAttributes !== null && {
        LoadBalancerAttributes: serializeAws_restJson1AwsElbLoadBalancerAttributes(
          input.LoadBalancerAttributes,
          context
        ),
      }),
    ...(input.LoadBalancerName !== undefined &&
      input.LoadBalancerName !== null && { LoadBalancerName: input.LoadBalancerName }),
    ...(input.Policies !== undefined &&
      input.Policies !== null && {
        Policies: serializeAws_restJson1AwsElbLoadBalancerPolicies(input.Policies, context),
      }),
    ...(input.Scheme !== undefined && input.Scheme !== null && { Scheme: input.Scheme }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1StringList(input.SecurityGroups, context),
      }),
    ...(input.SourceSecurityGroup !== undefined &&
      input.SourceSecurityGroup !== null && {
        SourceSecurityGroup: serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(
          input.SourceSecurityGroup,
          context
        ),
      }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_restJson1StringList(input.Subnets, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerHealthCheck = (
  input: AwsElbLoadBalancerHealthCheck,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthyThreshold !== undefined &&
      input.HealthyThreshold !== null && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
    ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold !== undefined &&
      input.UnhealthyThreshold !== null && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerInstance = (
  input: AwsElbLoadBalancerInstance,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerInstances = (
  input: AwsElbLoadBalancerInstance[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerListener = (
  input: AwsElbLoadBalancerListener,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstancePort !== undefined && input.InstancePort !== null && { InstancePort: input.InstancePort }),
    ...(input.InstanceProtocol !== undefined &&
      input.InstanceProtocol !== null && { InstanceProtocol: input.InstanceProtocol }),
    ...(input.LoadBalancerPort !== undefined &&
      input.LoadBalancerPort !== null && { LoadBalancerPort: input.LoadBalancerPort }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.SslCertificateId !== undefined &&
      input.SslCertificateId !== null && { SslCertificateId: input.SslCertificateId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerListenerDescription = (
  input: AwsElbLoadBalancerListenerDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.Listener !== undefined &&
      input.Listener !== null && {
        Listener: serializeAws_restJson1AwsElbLoadBalancerListener(input.Listener, context),
      }),
    ...(input.PolicyNames !== undefined &&
      input.PolicyNames !== null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = (
  input: AwsElbLoadBalancerListenerDescription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerPolicies = (
  input: AwsElbLoadBalancerPolicies,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppCookieStickinessPolicies !== undefined &&
      input.AppCookieStickinessPolicies !== null && {
        AppCookieStickinessPolicies: serializeAws_restJson1AwsElbAppCookieStickinessPolicies(
          input.AppCookieStickinessPolicies,
          context
        ),
      }),
    ...(input.LbCookieStickinessPolicies !== undefined &&
      input.LbCookieStickinessPolicies !== null && {
        LbCookieStickinessPolicies: serializeAws_restJson1AwsElbLbCookieStickinessPolicies(
          input.LbCookieStickinessPolicies,
          context
        ),
      }),
    ...(input.OtherPolicies !== undefined &&
      input.OtherPolicies !== null && {
        OtherPolicies: serializeAws_restJson1StringList(input.OtherPolicies, context),
      }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = (
  input: AwsElbLoadBalancerSourceSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.OwnerAlias !== undefined && input.OwnerAlias !== null && { OwnerAlias: input.OwnerAlias }),
  };
};

const serializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  input: AwsElbv2LoadBalancerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1AvailabilityZones(input.AvailabilityZones, context),
      }),
    ...(input.CanonicalHostedZoneId !== undefined &&
      input.CanonicalHostedZoneId !== null && { CanonicalHostedZoneId: input.CanonicalHostedZoneId }),
    ...(input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime }),
    ...(input.DNSName !== undefined && input.DNSName !== null && { DNSName: input.DNSName }),
    ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
    ...(input.Scheme !== undefined && input.Scheme !== null && { Scheme: input.Scheme }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
      }),
    ...(input.State !== undefined &&
      input.State !== null && { State: serializeAws_restJson1LoadBalancerState(input.State, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsIamAccessKeyDetails = (input: AwsIamAccessKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccessKeyId !== undefined && input.AccessKeyId !== null && { AccessKeyId: input.AccessKeyId }),
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.PrincipalId !== undefined && input.PrincipalId !== null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalName !== undefined && input.PrincipalName !== null && { PrincipalName: input.PrincipalName }),
    ...(input.PrincipalType !== undefined && input.PrincipalType !== null && { PrincipalType: input.PrincipalType }),
    ...(input.SessionContext !== undefined &&
      input.SessionContext !== null && {
        SessionContext: serializeAws_restJson1AwsIamAccessKeySessionContext(input.SessionContext, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContext = (
  input: AwsIamAccessKeySessionContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1AwsIamAccessKeySessionContextAttributes(input.Attributes, context),
      }),
    ...(input.SessionIssuer !== undefined &&
      input.SessionIssuer !== null && {
        SessionIssuer: serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(input.SessionIssuer, context),
      }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContextAttributes = (
  input: AwsIamAccessKeySessionContextAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
    ...(input.MfaAuthenticated !== undefined &&
      input.MfaAuthenticated !== null && { MfaAuthenticated: input.MfaAuthenticated }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = (
  input: AwsIamAccessKeySessionContextSessionIssuer,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.PrincipalId !== undefined && input.PrincipalId !== null && { PrincipalId: input.PrincipalId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_restJson1AwsIamAttachedManagedPolicy = (
  input: AwsIamAttachedManagedPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamAttachedManagedPolicyList = (
  input: AwsIamAttachedManagedPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamGroupDetails = (input: AwsIamGroupDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachedManagedPolicies !== undefined &&
      input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
          input.AttachedManagedPolicies,
          context
        ),
      }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.GroupPolicyList !== undefined &&
      input.GroupPolicyList !== null && {
        GroupPolicyList: serializeAws_restJson1AwsIamGroupPolicyList(input.GroupPolicyList, context),
      }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
  };
};

const serializeAws_restJson1AwsIamGroupPolicy = (input: AwsIamGroupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamGroupPolicyList = (input: AwsIamGroupPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamInstanceProfile = (input: AwsIamInstanceProfile, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.InstanceProfileId !== undefined &&
      input.InstanceProfileId !== null && { InstanceProfileId: input.InstanceProfileId }),
    ...(input.InstanceProfileName !== undefined &&
      input.InstanceProfileName !== null && { InstanceProfileName: input.InstanceProfileName }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Roles !== undefined &&
      input.Roles !== null && { Roles: serializeAws_restJson1AwsIamInstanceProfileRoles(input.Roles, context) }),
  };
};

const serializeAws_restJson1AwsIamInstanceProfileList = (
  input: AwsIamInstanceProfile[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
};

const serializeAws_restJson1AwsIamInstanceProfileRole = (
  input: AwsIamInstanceProfileRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.AssumeRolePolicyDocument !== undefined &&
      input.AssumeRolePolicyDocument !== null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.RoleId !== undefined && input.RoleId !== null && { RoleId: input.RoleId }),
    ...(input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName }),
  };
};

const serializeAws_restJson1AwsIamInstanceProfileRoles = (
  input: AwsIamInstanceProfileRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
};

const serializeAws_restJson1AwsIamPermissionsBoundary = (
  input: AwsIamPermissionsBoundary,
  context: __SerdeContext
): any => {
  return {
    ...(input.PermissionsBoundaryArn !== undefined &&
      input.PermissionsBoundaryArn !== null && { PermissionsBoundaryArn: input.PermissionsBoundaryArn }),
    ...(input.PermissionsBoundaryType !== undefined &&
      input.PermissionsBoundaryType !== null && { PermissionsBoundaryType: input.PermissionsBoundaryType }),
  };
};

const serializeAws_restJson1AwsIamPolicyDetails = (input: AwsIamPolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentCount !== undefined &&
      input.AttachmentCount !== null && { AttachmentCount: input.AttachmentCount }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.DefaultVersionId !== undefined &&
      input.DefaultVersionId !== null && { DefaultVersionId: input.DefaultVersionId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IsAttachable !== undefined && input.IsAttachable !== null && { IsAttachable: input.IsAttachable }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.PermissionsBoundaryUsageCount !== undefined &&
      input.PermissionsBoundaryUsageCount !== null && {
        PermissionsBoundaryUsageCount: input.PermissionsBoundaryUsageCount,
      }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.PolicyVersionList !== undefined &&
      input.PolicyVersionList !== null && {
        PolicyVersionList: serializeAws_restJson1AwsIamPolicyVersionList(input.PolicyVersionList, context),
      }),
    ...(input.UpdateDate !== undefined && input.UpdateDate !== null && { UpdateDate: input.UpdateDate }),
  };
};

const serializeAws_restJson1AwsIamPolicyVersion = (input: AwsIamPolicyVersion, context: __SerdeContext): any => {
  return {
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.IsDefaultVersion !== undefined &&
      input.IsDefaultVersion !== null && { IsDefaultVersion: input.IsDefaultVersion }),
    ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsIamPolicyVersionList = (input: AwsIamPolicyVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
};

const serializeAws_restJson1AwsIamRoleDetails = (input: AwsIamRoleDetails, context: __SerdeContext): any => {
  return {
    ...(input.AssumeRolePolicyDocument !== undefined &&
      input.AssumeRolePolicyDocument !== null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument }),
    ...(input.AttachedManagedPolicies !== undefined &&
      input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
          input.AttachedManagedPolicies,
          context
        ),
      }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.InstanceProfileList !== undefined &&
      input.InstanceProfileList !== null && {
        InstanceProfileList: serializeAws_restJson1AwsIamInstanceProfileList(input.InstanceProfileList, context),
      }),
    ...(input.MaxSessionDuration !== undefined &&
      input.MaxSessionDuration !== null && { MaxSessionDuration: input.MaxSessionDuration }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.PermissionsBoundary !== undefined &&
      input.PermissionsBoundary !== null && {
        PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
      }),
    ...(input.RoleId !== undefined && input.RoleId !== null && { RoleId: input.RoleId }),
    ...(input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName }),
    ...(input.RolePolicyList !== undefined &&
      input.RolePolicyList !== null && {
        RolePolicyList: serializeAws_restJson1AwsIamRolePolicyList(input.RolePolicyList, context),
      }),
  };
};

const serializeAws_restJson1AwsIamRolePolicy = (input: AwsIamRolePolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamRolePolicyList = (input: AwsIamRolePolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamUserDetails = (input: AwsIamUserDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachedManagedPolicies !== undefined &&
      input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
          input.AttachedManagedPolicies,
          context
        ),
      }),
    ...(input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate }),
    ...(input.GroupList !== undefined &&
      input.GroupList !== null && { GroupList: serializeAws_restJson1StringList(input.GroupList, context) }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.PermissionsBoundary !== undefined &&
      input.PermissionsBoundary !== null && {
        PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
      }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    ...(input.UserPolicyList !== undefined &&
      input.UserPolicyList !== null && {
        UserPolicyList: serializeAws_restJson1AwsIamUserPolicyList(input.UserPolicyList, context),
      }),
  };
};

const serializeAws_restJson1AwsIamUserPolicy = (input: AwsIamUserPolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamUserPolicyList = (input: AwsIamUserPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsKmsKeyDetails = (input: AwsKmsKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AWSAccountId !== undefined && input.AWSAccountId !== null && { AWSAccountId: input.AWSAccountId }),
    ...(input.CreationDate !== undefined &&
      input.CreationDate !== null && { CreationDate: __serializeFloat(input.CreationDate) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeyManager !== undefined && input.KeyManager !== null && { KeyManager: input.KeyManager }),
    ...(input.KeyRotationStatus !== undefined &&
      input.KeyRotationStatus !== null && { KeyRotationStatus: input.KeyRotationStatus }),
    ...(input.KeyState !== undefined && input.KeyState !== null && { KeyState: input.KeyState }),
    ...(input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionCode = (input: AwsLambdaFunctionCode, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion !== undefined &&
      input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: input.ZipFile }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  input: AwsLambdaFunctionDeadLetterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDetails = (
  input: AwsLambdaFunctionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Code !== undefined &&
      input.Code !== null && { Code: serializeAws_restJson1AwsLambdaFunctionCode(input.Code, context) }),
    ...(input.CodeSha256 !== undefined && input.CodeSha256 !== null && { CodeSha256: input.CodeSha256 }),
    ...(input.DeadLetterConfig !== undefined &&
      input.DeadLetterConfig !== null && {
        DeadLetterConfig: serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(input.DeadLetterConfig, context),
      }),
    ...(input.Environment !== undefined &&
      input.Environment !== null && {
        Environment: serializeAws_restJson1AwsLambdaFunctionEnvironment(input.Environment, context),
      }),
    ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
    ...(input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.LastModified !== undefined && input.LastModified !== null && { LastModified: input.LastModified }),
    ...(input.Layers !== undefined &&
      input.Layers !== null && { Layers: serializeAws_restJson1AwsLambdaFunctionLayerList(input.Layers, context) }),
    ...(input.MasterArn !== undefined && input.MasterArn !== null && { MasterArn: input.MasterArn }),
    ...(input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.TracingConfig !== undefined &&
      input.TracingConfig !== null && {
        TracingConfig: serializeAws_restJson1AwsLambdaFunctionTracingConfig(input.TracingConfig, context),
      }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && {
        VpcConfig: serializeAws_restJson1AwsLambdaFunctionVpcConfig(input.VpcConfig, context),
      }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironment = (
  input: AwsLambdaFunctionEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Error !== undefined &&
      input.Error !== null && { Error: serializeAws_restJson1AwsLambdaFunctionEnvironmentError(input.Error, context) }),
    ...(input.Variables !== undefined &&
      input.Variables !== null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  input: AwsLambdaFunctionEnvironmentError,
  context: __SerdeContext
): any => {
  return {
    ...(input.ErrorCode !== undefined && input.ErrorCode !== null && { ErrorCode: input.ErrorCode }),
    ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayer = (input: AwsLambdaFunctionLayer, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.CodeSize !== undefined && input.CodeSize !== null && { CodeSize: input.CodeSize }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayerList = (
  input: AwsLambdaFunctionLayer[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
};

const serializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  input: AwsLambdaFunctionTracingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  input: AwsLambdaFunctionVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsLambdaLayerVersionDetails = (
  input: AwsLambdaLayerVersionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompatibleRuntimes !== undefined &&
      input.CompatibleRuntimes !== null && {
        CompatibleRuntimes: serializeAws_restJson1NonEmptyStringList(input.CompatibleRuntimes, context),
      }),
    ...(input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterAssociatedRole = (
  input: AwsRdsDbClusterAssociatedRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterAssociatedRoles = (
  input: AwsRdsDbClusterAssociatedRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterDetails = (input: AwsRdsDbClusterDetails, context: __SerdeContext): any => {
  return {
    ...(input.ActivityStreamStatus !== undefined &&
      input.ActivityStreamStatus !== null && { ActivityStreamStatus: input.ActivityStreamStatus }),
    ...(input.AllocatedStorage !== undefined &&
      input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AssociatedRoles !== undefined &&
      input.AssociatedRoles !== null && {
        AssociatedRoles: serializeAws_restJson1AwsRdsDbClusterAssociatedRoles(input.AssociatedRoles, context),
      }),
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
      }),
    ...(input.BackupRetentionPeriod !== undefined &&
      input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.ClusterCreateTime !== undefined &&
      input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.CopyTagsToSnapshot !== undefined &&
      input.CopyTagsToSnapshot !== null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot }),
    ...(input.CrossAccountClone !== undefined &&
      input.CrossAccountClone !== null && { CrossAccountClone: input.CrossAccountClone }),
    ...(input.CustomEndpoints !== undefined &&
      input.CustomEndpoints !== null && {
        CustomEndpoints: serializeAws_restJson1StringList(input.CustomEndpoints, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.DbClusterIdentifier !== undefined &&
      input.DbClusterIdentifier !== null && { DbClusterIdentifier: input.DbClusterIdentifier }),
    ...(input.DbClusterMembers !== undefined &&
      input.DbClusterMembers !== null && {
        DbClusterMembers: serializeAws_restJson1AwsRdsDbClusterMembers(input.DbClusterMembers, context),
      }),
    ...(input.DbClusterOptionGroupMemberships !== undefined &&
      input.DbClusterOptionGroupMemberships !== null && {
        DbClusterOptionGroupMemberships: serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(
          input.DbClusterOptionGroupMemberships,
          context
        ),
      }),
    ...(input.DbClusterParameterGroup !== undefined &&
      input.DbClusterParameterGroup !== null && { DbClusterParameterGroup: input.DbClusterParameterGroup }),
    ...(input.DbClusterResourceId !== undefined &&
      input.DbClusterResourceId !== null && { DbClusterResourceId: input.DbClusterResourceId }),
    ...(input.DbSubnetGroup !== undefined && input.DbSubnetGroup !== null && { DbSubnetGroup: input.DbSubnetGroup }),
    ...(input.DeletionProtection !== undefined &&
      input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DomainMemberships !== undefined &&
      input.DomainMemberships !== null && {
        DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
      }),
    ...(input.EnabledCloudWatchLogsExports !== undefined &&
      input.EnabledCloudWatchLogsExports !== null && {
        EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
      }),
    ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.EngineMode !== undefined && input.EngineMode !== null && { EngineMode: input.EngineMode }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.HostedZoneId !== undefined && input.HostedZoneId !== null && { HostedZoneId: input.HostedZoneId }),
    ...(input.HttpEndpointEnabled !== undefined &&
      input.HttpEndpointEnabled !== null && { HttpEndpointEnabled: input.HttpEndpointEnabled }),
    ...(input.IamDatabaseAuthenticationEnabled !== undefined &&
      input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
      }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MasterUsername !== undefined &&
      input.MasterUsername !== null && { MasterUsername: input.MasterUsername }),
    ...(input.MultiAz !== undefined && input.MultiAz !== null && { MultiAz: input.MultiAz }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.PreferredBackupWindow !== undefined &&
      input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow !== undefined &&
      input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ReadReplicaIdentifiers !== undefined &&
      input.ReadReplicaIdentifiers !== null && {
        ReadReplicaIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaIdentifiers, context),
      }),
    ...(input.ReaderEndpoint !== undefined &&
      input.ReaderEndpoint !== null && { ReaderEndpoint: input.ReaderEndpoint }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StorageEncrypted !== undefined &&
      input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.VpcSecurityGroups !== undefined &&
      input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
      }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterMember = (input: AwsRdsDbClusterMember, context: __SerdeContext): any => {
  return {
    ...(input.DbClusterParameterGroupStatus !== undefined &&
      input.DbClusterParameterGroupStatus !== null && {
        DbClusterParameterGroupStatus: input.DbClusterParameterGroupStatus,
      }),
    ...(input.DbInstanceIdentifier !== undefined &&
      input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.IsClusterWriter !== undefined &&
      input.IsClusterWriter !== null && { IsClusterWriter: input.IsClusterWriter }),
    ...(input.PromotionTier !== undefined && input.PromotionTier !== null && { PromotionTier: input.PromotionTier }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterMembers = (input: AwsRdsDbClusterMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = (
  input: AwsRdsDbClusterOptionGroupMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.DbClusterOptionGroupName !== undefined &&
      input.DbClusterOptionGroupName !== null && { DbClusterOptionGroupName: input.DbClusterOptionGroupName }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = (
  input: AwsRdsDbClusterOptionGroupMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterSnapshotDetails = (
  input: AwsRdsDbClusterSnapshotDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage !== undefined &&
      input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
      }),
    ...(input.ClusterCreateTime !== undefined &&
      input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.DbClusterIdentifier !== undefined &&
      input.DbClusterIdentifier !== null && { DbClusterIdentifier: input.DbClusterIdentifier }),
    ...(input.DbClusterSnapshotIdentifier !== undefined &&
      input.DbClusterSnapshotIdentifier !== null && { DbClusterSnapshotIdentifier: input.DbClusterSnapshotIdentifier }),
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.IamDatabaseAuthenticationEnabled !== undefined &&
      input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
      }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUsername !== undefined &&
      input.MasterUsername !== null && { MasterUsername: input.MasterUsername }),
    ...(input.PercentProgress !== undefined &&
      input.PercentProgress !== null && { PercentProgress: input.PercentProgress }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.SnapshotCreateTime !== undefined &&
      input.SnapshotCreateTime !== null && { SnapshotCreateTime: input.SnapshotCreateTime }),
    ...(input.SnapshotType !== undefined && input.SnapshotType !== null && { SnapshotType: input.SnapshotType }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StorageEncrypted !== undefined &&
      input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbDomainMembership = (
  input: AwsRdsDbDomainMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.Fqdn !== undefined && input.Fqdn !== null && { Fqdn: input.Fqdn }),
    ...(input.IamRoleName !== undefined && input.IamRoleName !== null && { IamRoleName: input.IamRoleName }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbDomainMemberships = (
  input: AwsRdsDbDomainMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  input: AwsRdsDbInstanceAssociatedRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeatureName !== undefined && input.FeatureName !== null && { FeatureName: input.FeatureName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  input: AwsRdsDbInstanceAssociatedRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbInstanceDetails = (
  input: AwsRdsDbInstanceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage !== undefined &&
      input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AssociatedRoles !== undefined &&
      input.AssociatedRoles !== null && {
        AssociatedRoles: serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(input.AssociatedRoles, context),
      }),
    ...(input.AutoMinorVersionUpgrade !== undefined &&
      input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.BackupRetentionPeriod !== undefined &&
      input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.CACertificateIdentifier !== undefined &&
      input.CACertificateIdentifier !== null && { CACertificateIdentifier: input.CACertificateIdentifier }),
    ...(input.CharacterSetName !== undefined &&
      input.CharacterSetName !== null && { CharacterSetName: input.CharacterSetName }),
    ...(input.CopyTagsToSnapshot !== undefined &&
      input.CopyTagsToSnapshot !== null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot }),
    ...(input.DBClusterIdentifier !== undefined &&
      input.DBClusterIdentifier !== null && { DBClusterIdentifier: input.DBClusterIdentifier }),
    ...(input.DBInstanceClass !== undefined &&
      input.DBInstanceClass !== null && { DBInstanceClass: input.DBInstanceClass }),
    ...(input.DBInstanceIdentifier !== undefined &&
      input.DBInstanceIdentifier !== null && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
    ...(input.DBName !== undefined && input.DBName !== null && { DBName: input.DBName }),
    ...(input.DbInstancePort !== undefined &&
      input.DbInstancePort !== null && { DbInstancePort: input.DbInstancePort }),
    ...(input.DbInstanceStatus !== undefined &&
      input.DbInstanceStatus !== null && { DbInstanceStatus: input.DbInstanceStatus }),
    ...(input.DbParameterGroups !== undefined &&
      input.DbParameterGroups !== null && {
        DbParameterGroups: serializeAws_restJson1AwsRdsDbParameterGroups(input.DbParameterGroups, context),
      }),
    ...(input.DbSecurityGroups !== undefined &&
      input.DbSecurityGroups !== null && {
        DbSecurityGroups: serializeAws_restJson1StringList(input.DbSecurityGroups, context),
      }),
    ...(input.DbSubnetGroup !== undefined &&
      input.DbSubnetGroup !== null && {
        DbSubnetGroup: serializeAws_restJson1AwsRdsDbSubnetGroup(input.DbSubnetGroup, context),
      }),
    ...(input.DbiResourceId !== undefined && input.DbiResourceId !== null && { DbiResourceId: input.DbiResourceId }),
    ...(input.DeletionProtection !== undefined &&
      input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DomainMemberships !== undefined &&
      input.DomainMemberships !== null && {
        DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
      }),
    ...(input.EnabledCloudWatchLogsExports !== undefined &&
      input.EnabledCloudWatchLogsExports !== null && {
        EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
      }),
    ...(input.Endpoint !== undefined &&
      input.Endpoint !== null && { Endpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.Endpoint, context) }),
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.EnhancedMonitoringResourceArn !== undefined &&
      input.EnhancedMonitoringResourceArn !== null && {
        EnhancedMonitoringResourceArn: input.EnhancedMonitoringResourceArn,
      }),
    ...(input.IAMDatabaseAuthenticationEnabled !== undefined &&
      input.IAMDatabaseAuthenticationEnabled !== null && {
        IAMDatabaseAuthenticationEnabled: input.IAMDatabaseAuthenticationEnabled,
      }),
    ...(input.InstanceCreateTime !== undefined &&
      input.InstanceCreateTime !== null && { InstanceCreateTime: input.InstanceCreateTime }),
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LatestRestorableTime !== undefined &&
      input.LatestRestorableTime !== null && { LatestRestorableTime: input.LatestRestorableTime }),
    ...(input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel }),
    ...(input.ListenerEndpoint !== undefined &&
      input.ListenerEndpoint !== null && {
        ListenerEndpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.ListenerEndpoint, context),
      }),
    ...(input.MasterUsername !== undefined &&
      input.MasterUsername !== null && { MasterUsername: input.MasterUsername }),
    ...(input.MaxAllocatedStorage !== undefined &&
      input.MaxAllocatedStorage !== null && { MaxAllocatedStorage: input.MaxAllocatedStorage }),
    ...(input.MonitoringInterval !== undefined &&
      input.MonitoringInterval !== null && { MonitoringInterval: input.MonitoringInterval }),
    ...(input.MonitoringRoleArn !== undefined &&
      input.MonitoringRoleArn !== null && { MonitoringRoleArn: input.MonitoringRoleArn }),
    ...(input.MultiAz !== undefined && input.MultiAz !== null && { MultiAz: input.MultiAz }),
    ...(input.OptionGroupMemberships !== undefined &&
      input.OptionGroupMemberships !== null && {
        OptionGroupMemberships: serializeAws_restJson1AwsRdsDbOptionGroupMemberships(
          input.OptionGroupMemberships,
          context
        ),
      }),
    ...(input.PendingModifiedValues !== undefined &&
      input.PendingModifiedValues !== null && {
        PendingModifiedValues: serializeAws_restJson1AwsRdsDbPendingModifiedValues(
          input.PendingModifiedValues,
          context
        ),
      }),
    ...(input.PerformanceInsightsEnabled !== undefined &&
      input.PerformanceInsightsEnabled !== null && { PerformanceInsightsEnabled: input.PerformanceInsightsEnabled }),
    ...(input.PerformanceInsightsKmsKeyId !== undefined &&
      input.PerformanceInsightsKmsKeyId !== null && { PerformanceInsightsKmsKeyId: input.PerformanceInsightsKmsKeyId }),
    ...(input.PerformanceInsightsRetentionPeriod !== undefined &&
      input.PerformanceInsightsRetentionPeriod !== null && {
        PerformanceInsightsRetentionPeriod: input.PerformanceInsightsRetentionPeriod,
      }),
    ...(input.PreferredBackupWindow !== undefined &&
      input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow !== undefined &&
      input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ProcessorFeatures !== undefined &&
      input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
      }),
    ...(input.PromotionTier !== undefined && input.PromotionTier !== null && { PromotionTier: input.PromotionTier }),
    ...(input.PubliclyAccessible !== undefined &&
      input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.ReadReplicaDBClusterIdentifiers !== undefined &&
      input.ReadReplicaDBClusterIdentifiers !== null && {
        ReadReplicaDBClusterIdentifiers: serializeAws_restJson1StringList(
          input.ReadReplicaDBClusterIdentifiers,
          context
        ),
      }),
    ...(input.ReadReplicaDBInstanceIdentifiers !== undefined &&
      input.ReadReplicaDBInstanceIdentifiers !== null && {
        ReadReplicaDBInstanceIdentifiers: serializeAws_restJson1StringList(
          input.ReadReplicaDBInstanceIdentifiers,
          context
        ),
      }),
    ...(input.ReadReplicaSourceDBInstanceIdentifier !== undefined &&
      input.ReadReplicaSourceDBInstanceIdentifier !== null && {
        ReadReplicaSourceDBInstanceIdentifier: input.ReadReplicaSourceDBInstanceIdentifier,
      }),
    ...(input.SecondaryAvailabilityZone !== undefined &&
      input.SecondaryAvailabilityZone !== null && { SecondaryAvailabilityZone: input.SecondaryAvailabilityZone }),
    ...(input.StatusInfos !== undefined &&
      input.StatusInfos !== null && {
        StatusInfos: serializeAws_restJson1AwsRdsDbStatusInfos(input.StatusInfos, context),
      }),
    ...(input.StorageEncrypted !== undefined &&
      input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    ...(input.TdeCredentialArn !== undefined &&
      input.TdeCredentialArn !== null && { TdeCredentialArn: input.TdeCredentialArn }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.VpcSecurityGroups !== undefined &&
      input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
      }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  input: AwsRdsDbInstanceEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.HostedZoneId !== undefined && input.HostedZoneId !== null && { HostedZoneId: input.HostedZoneId }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  input: AwsRdsDbInstanceVpcSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.VpcSecurityGroupId !== undefined &&
      input.VpcSecurityGroupId !== null && { VpcSecurityGroupId: input.VpcSecurityGroupId }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  input: AwsRdsDbInstanceVpcSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbOptionGroupMembership = (
  input: AwsRdsDbOptionGroupMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptionGroupName !== undefined &&
      input.OptionGroupName !== null && { OptionGroupName: input.OptionGroupName }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbOptionGroupMemberships = (
  input: AwsRdsDbOptionGroupMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbParameterGroup = (input: AwsRdsDbParameterGroup, context: __SerdeContext): any => {
  return {
    ...(input.DbParameterGroupName !== undefined &&
      input.DbParameterGroupName !== null && { DbParameterGroupName: input.DbParameterGroupName }),
    ...(input.ParameterApplyStatus !== undefined &&
      input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus }),
  };
};

const serializeAws_restJson1AwsRdsDbParameterGroups = (
  input: AwsRdsDbParameterGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbPendingModifiedValues = (
  input: AwsRdsDbPendingModifiedValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage !== undefined &&
      input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.BackupRetentionPeriod !== undefined &&
      input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.CaCertificateIdentifier !== undefined &&
      input.CaCertificateIdentifier !== null && { CaCertificateIdentifier: input.CaCertificateIdentifier }),
    ...(input.DbInstanceClass !== undefined &&
      input.DbInstanceClass !== null && { DbInstanceClass: input.DbInstanceClass }),
    ...(input.DbInstanceIdentifier !== undefined &&
      input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.DbSubnetGroupName !== undefined &&
      input.DbSubnetGroupName !== null && { DbSubnetGroupName: input.DbSubnetGroupName }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUserPassword !== undefined &&
      input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword }),
    ...(input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ }),
    ...(input.PendingCloudWatchLogsExports !== undefined &&
      input.PendingCloudWatchLogsExports !== null && {
        PendingCloudWatchLogsExports: serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(
          input.PendingCloudWatchLogsExports,
          context
        ),
      }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.ProcessorFeatures !== undefined &&
      input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
      }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
  };
};

const serializeAws_restJson1AwsRdsDbProcessorFeature = (
  input: AwsRdsDbProcessorFeature,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsRdsDbProcessorFeatures = (
  input: AwsRdsDbProcessorFeature[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSnapshotDetails = (
  input: AwsRdsDbSnapshotDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage !== undefined &&
      input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.DbInstanceIdentifier !== undefined &&
      input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.DbSnapshotIdentifier !== undefined &&
      input.DbSnapshotIdentifier !== null && { DbSnapshotIdentifier: input.DbSnapshotIdentifier }),
    ...(input.DbiResourceId !== undefined && input.DbiResourceId !== null && { DbiResourceId: input.DbiResourceId }),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.IamDatabaseAuthenticationEnabled !== undefined &&
      input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
      }),
    ...(input.InstanceCreateTime !== undefined &&
      input.InstanceCreateTime !== null && { InstanceCreateTime: input.InstanceCreateTime }),
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUsername !== undefined &&
      input.MasterUsername !== null && { MasterUsername: input.MasterUsername }),
    ...(input.OptionGroupName !== undefined &&
      input.OptionGroupName !== null && { OptionGroupName: input.OptionGroupName }),
    ...(input.PercentProgress !== undefined &&
      input.PercentProgress !== null && { PercentProgress: input.PercentProgress }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.ProcessorFeatures !== undefined &&
      input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
      }),
    ...(input.SnapshotCreateTime !== undefined &&
      input.SnapshotCreateTime !== null && { SnapshotCreateTime: input.SnapshotCreateTime }),
    ...(input.SnapshotType !== undefined && input.SnapshotType !== null && { SnapshotType: input.SnapshotType }),
    ...(input.SourceDbSnapshotIdentifier !== undefined &&
      input.SourceDbSnapshotIdentifier !== null && { SourceDbSnapshotIdentifier: input.SourceDbSnapshotIdentifier }),
    ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    ...(input.TdeCredentialArn !== undefined &&
      input.TdeCredentialArn !== null && { TdeCredentialArn: input.TdeCredentialArn }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbStatusInfo = (input: AwsRdsDbStatusInfo, context: __SerdeContext): any => {
  return {
    ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
    ...(input.Normal !== undefined && input.Normal !== null && { Normal: input.Normal }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StatusType !== undefined && input.StatusType !== null && { StatusType: input.StatusType }),
  };
};

const serializeAws_restJson1AwsRdsDbStatusInfos = (input: AwsRdsDbStatusInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSubnetGroup = (input: AwsRdsDbSubnetGroup, context: __SerdeContext): any => {
  return {
    ...(input.DbSubnetGroupArn !== undefined &&
      input.DbSubnetGroupArn !== null && { DbSubnetGroupArn: input.DbSubnetGroupArn }),
    ...(input.DbSubnetGroupDescription !== undefined &&
      input.DbSubnetGroupDescription !== null && { DbSubnetGroupDescription: input.DbSubnetGroupDescription }),
    ...(input.DbSubnetGroupName !== undefined &&
      input.DbSubnetGroupName !== null && { DbSubnetGroupName: input.DbSubnetGroupName }),
    ...(input.SubnetGroupStatus !== undefined &&
      input.SubnetGroupStatus !== null && { SubnetGroupStatus: input.SubnetGroupStatus }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_restJson1AwsRdsDbSubnetGroupSubnets(input.Subnets, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnet = (
  input: AwsRdsDbSubnetGroupSubnet,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetAvailabilityZone !== undefined &&
      input.SubnetAvailabilityZone !== null && {
        SubnetAvailabilityZone: serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(
          input.SubnetAvailabilityZone,
          context
        ),
      }),
    ...(input.SubnetIdentifier !== undefined &&
      input.SubnetIdentifier !== null && { SubnetIdentifier: input.SubnetIdentifier }),
    ...(input.SubnetStatus !== undefined && input.SubnetStatus !== null && { SubnetStatus: input.SubnetStatus }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = (
  input: AwsRdsDbSubnetGroupSubnetAvailabilityZone,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnets = (
  input: AwsRdsDbSubnetGroupSubnet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
};

const serializeAws_restJson1AwsRdsEventSubscriptionDetails = (
  input: AwsRdsEventSubscriptionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustSubscriptionId !== undefined &&
      input.CustSubscriptionId !== null && { CustSubscriptionId: input.CustSubscriptionId }),
    ...(input.CustomerAwsId !== undefined && input.CustomerAwsId !== null && { CustomerAwsId: input.CustomerAwsId }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.EventCategoriesList !== undefined &&
      input.EventCategoriesList !== null && {
        EventCategoriesList: serializeAws_restJson1NonEmptyStringList(input.EventCategoriesList, context),
      }),
    ...(input.EventSubscriptionArn !== undefined &&
      input.EventSubscriptionArn !== null && { EventSubscriptionArn: input.EventSubscriptionArn }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceIdsList !== undefined &&
      input.SourceIdsList !== null && {
        SourceIdsList: serializeAws_restJson1NonEmptyStringList(input.SourceIdsList, context),
      }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.SubscriptionCreationTime !== undefined &&
      input.SubscriptionCreationTime !== null && { SubscriptionCreationTime: input.SubscriptionCreationTime }),
  };
};

const serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = (
  input: AwsRdsPendingCloudWatchLogsExports,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogTypesToDisable !== undefined &&
      input.LogTypesToDisable !== null && {
        LogTypesToDisable: serializeAws_restJson1StringList(input.LogTypesToDisable, context),
      }),
    ...(input.LogTypesToEnable !== undefined &&
      input.LogTypesToEnable !== null && {
        LogTypesToEnable: serializeAws_restJson1StringList(input.LogTypesToEnable, context),
      }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterNode = (
  input: AwsRedshiftClusterClusterNode,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeRole !== undefined && input.NodeRole !== null && { NodeRole: input.NodeRole }),
    ...(input.PrivateIpAddress !== undefined &&
      input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress }),
    ...(input.PublicIpAddress !== undefined &&
      input.PublicIpAddress !== null && { PublicIpAddress: input.PublicIpAddress }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterNodes = (
  input: AwsRedshiftClusterClusterNode[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = (
  input: AwsRedshiftClusterClusterParameterGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterParameterStatusList !== undefined &&
      input.ClusterParameterStatusList !== null && {
        ClusterParameterStatusList: serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(
          input.ClusterParameterStatusList,
          context
        ),
      }),
    ...(input.ParameterApplyStatus !== undefined &&
      input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus }),
    ...(input.ParameterGroupName !== undefined &&
      input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = (
  input: AwsRedshiftClusterClusterParameterGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = (
  input: AwsRedshiftClusterClusterParameterStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterApplyErrorDescription !== undefined &&
      input.ParameterApplyErrorDescription !== null && {
        ParameterApplyErrorDescription: input.ParameterApplyErrorDescription,
      }),
    ...(input.ParameterApplyStatus !== undefined &&
      input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus }),
    ...(input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = (
  input: AwsRedshiftClusterClusterParameterStatus[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = (
  input: AwsRedshiftClusterClusterSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterSecurityGroupName !== undefined &&
      input.ClusterSecurityGroupName !== null && { ClusterSecurityGroupName: input.ClusterSecurityGroupName }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = (
  input: AwsRedshiftClusterClusterSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = (
  input: AwsRedshiftClusterClusterSnapshotCopyStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationRegion !== undefined &&
      input.DestinationRegion !== null && { DestinationRegion: input.DestinationRegion }),
    ...(input.ManualSnapshotRetentionPeriod !== undefined &&
      input.ManualSnapshotRetentionPeriod !== null && {
        ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
      }),
    ...(input.RetentionPeriod !== undefined &&
      input.RetentionPeriod !== null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.SnapshotCopyGrantName !== undefined &&
      input.SnapshotCopyGrantName !== null && { SnapshotCopyGrantName: input.SnapshotCopyGrantName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = (
  input: AwsRedshiftClusterDeferredMaintenanceWindow,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeferMaintenanceEndTime !== undefined &&
      input.DeferMaintenanceEndTime !== null && { DeferMaintenanceEndTime: input.DeferMaintenanceEndTime }),
    ...(input.DeferMaintenanceIdentifier !== undefined &&
      input.DeferMaintenanceIdentifier !== null && { DeferMaintenanceIdentifier: input.DeferMaintenanceIdentifier }),
    ...(input.DeferMaintenanceStartTime !== undefined &&
      input.DeferMaintenanceStartTime !== null && { DeferMaintenanceStartTime: input.DeferMaintenanceStartTime }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = (
  input: AwsRedshiftClusterDeferredMaintenanceWindow[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterDetails = (
  input: AwsRedshiftClusterDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowVersionUpgrade !== undefined &&
      input.AllowVersionUpgrade !== null && { AllowVersionUpgrade: input.AllowVersionUpgrade }),
    ...(input.AutomatedSnapshotRetentionPeriod !== undefined &&
      input.AutomatedSnapshotRetentionPeriod !== null && {
        AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
      }),
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.ClusterAvailabilityStatus !== undefined &&
      input.ClusterAvailabilityStatus !== null && { ClusterAvailabilityStatus: input.ClusterAvailabilityStatus }),
    ...(input.ClusterCreateTime !== undefined &&
      input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.ClusterIdentifier !== undefined &&
      input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ClusterNodes !== undefined &&
      input.ClusterNodes !== null && {
        ClusterNodes: serializeAws_restJson1AwsRedshiftClusterClusterNodes(input.ClusterNodes, context),
      }),
    ...(input.ClusterParameterGroups !== undefined &&
      input.ClusterParameterGroups !== null && {
        ClusterParameterGroups: serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(
          input.ClusterParameterGroups,
          context
        ),
      }),
    ...(input.ClusterPublicKey !== undefined &&
      input.ClusterPublicKey !== null && { ClusterPublicKey: input.ClusterPublicKey }),
    ...(input.ClusterRevisionNumber !== undefined &&
      input.ClusterRevisionNumber !== null && { ClusterRevisionNumber: input.ClusterRevisionNumber }),
    ...(input.ClusterSecurityGroups !== undefined &&
      input.ClusterSecurityGroups !== null && {
        ClusterSecurityGroups: serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(
          input.ClusterSecurityGroups,
          context
        ),
      }),
    ...(input.ClusterSnapshotCopyStatus !== undefined &&
      input.ClusterSnapshotCopyStatus !== null && {
        ClusterSnapshotCopyStatus: serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(
          input.ClusterSnapshotCopyStatus,
          context
        ),
      }),
    ...(input.ClusterStatus !== undefined && input.ClusterStatus !== null && { ClusterStatus: input.ClusterStatus }),
    ...(input.ClusterSubnetGroupName !== undefined &&
      input.ClusterSubnetGroupName !== null && { ClusterSubnetGroupName: input.ClusterSubnetGroupName }),
    ...(input.ClusterVersion !== undefined &&
      input.ClusterVersion !== null && { ClusterVersion: input.ClusterVersion }),
    ...(input.DBName !== undefined && input.DBName !== null && { DBName: input.DBName }),
    ...(input.DeferredMaintenanceWindows !== undefined &&
      input.DeferredMaintenanceWindows !== null && {
        DeferredMaintenanceWindows: serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(
          input.DeferredMaintenanceWindows,
          context
        ),
      }),
    ...(input.ElasticIpStatus !== undefined &&
      input.ElasticIpStatus !== null && {
        ElasticIpStatus: serializeAws_restJson1AwsRedshiftClusterElasticIpStatus(input.ElasticIpStatus, context),
      }),
    ...(input.ElasticResizeNumberOfNodeOptions !== undefined &&
      input.ElasticResizeNumberOfNodeOptions !== null && {
        ElasticResizeNumberOfNodeOptions: input.ElasticResizeNumberOfNodeOptions,
      }),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.Endpoint !== undefined &&
      input.Endpoint !== null && {
        Endpoint: serializeAws_restJson1AwsRedshiftClusterEndpoint(input.Endpoint, context),
      }),
    ...(input.EnhancedVpcRouting !== undefined &&
      input.EnhancedVpcRouting !== null && { EnhancedVpcRouting: input.EnhancedVpcRouting }),
    ...(input.ExpectedNextSnapshotScheduleTime !== undefined &&
      input.ExpectedNextSnapshotScheduleTime !== null && {
        ExpectedNextSnapshotScheduleTime: input.ExpectedNextSnapshotScheduleTime,
      }),
    ...(input.ExpectedNextSnapshotScheduleTimeStatus !== undefined &&
      input.ExpectedNextSnapshotScheduleTimeStatus !== null && {
        ExpectedNextSnapshotScheduleTimeStatus: input.ExpectedNextSnapshotScheduleTimeStatus,
      }),
    ...(input.HsmStatus !== undefined &&
      input.HsmStatus !== null && {
        HsmStatus: serializeAws_restJson1AwsRedshiftClusterHsmStatus(input.HsmStatus, context),
      }),
    ...(input.IamRoles !== undefined &&
      input.IamRoles !== null && {
        IamRoles: serializeAws_restJson1AwsRedshiftClusterIamRoles(input.IamRoles, context),
      }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MaintenanceTrackName !== undefined &&
      input.MaintenanceTrackName !== null && { MaintenanceTrackName: input.MaintenanceTrackName }),
    ...(input.ManualSnapshotRetentionPeriod !== undefined &&
      input.ManualSnapshotRetentionPeriod !== null && {
        ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
      }),
    ...(input.MasterUsername !== undefined &&
      input.MasterUsername !== null && { MasterUsername: input.MasterUsername }),
    ...(input.NextMaintenanceWindowStartTime !== undefined &&
      input.NextMaintenanceWindowStartTime !== null && {
        NextMaintenanceWindowStartTime: input.NextMaintenanceWindowStartTime,
      }),
    ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
    ...(input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.PendingActions !== undefined &&
      input.PendingActions !== null && {
        PendingActions: serializeAws_restJson1StringList(input.PendingActions, context),
      }),
    ...(input.PendingModifiedValues !== undefined &&
      input.PendingModifiedValues !== null && {
        PendingModifiedValues: serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(
          input.PendingModifiedValues,
          context
        ),
      }),
    ...(input.PreferredMaintenanceWindow !== undefined &&
      input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.PubliclyAccessible !== undefined &&
      input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.ResizeInfo !== undefined &&
      input.ResizeInfo !== null && {
        ResizeInfo: serializeAws_restJson1AwsRedshiftClusterResizeInfo(input.ResizeInfo, context),
      }),
    ...(input.RestoreStatus !== undefined &&
      input.RestoreStatus !== null && {
        RestoreStatus: serializeAws_restJson1AwsRedshiftClusterRestoreStatus(input.RestoreStatus, context),
      }),
    ...(input.SnapshotScheduleIdentifier !== undefined &&
      input.SnapshotScheduleIdentifier !== null && { SnapshotScheduleIdentifier: input.SnapshotScheduleIdentifier }),
    ...(input.SnapshotScheduleState !== undefined &&
      input.SnapshotScheduleState !== null && { SnapshotScheduleState: input.SnapshotScheduleState }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    ...(input.VpcSecurityGroups !== undefined &&
      input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(input.VpcSecurityGroups, context),
      }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterElasticIpStatus = (
  input: AwsRedshiftClusterElasticIpStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterEndpoint = (
  input: AwsRedshiftClusterEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterHsmStatus = (
  input: AwsRedshiftClusterHsmStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.HsmClientCertificateIdentifier !== undefined &&
      input.HsmClientCertificateIdentifier !== null && {
        HsmClientCertificateIdentifier: input.HsmClientCertificateIdentifier,
      }),
    ...(input.HsmConfigurationIdentifier !== undefined &&
      input.HsmConfigurationIdentifier !== null && { HsmConfigurationIdentifier: input.HsmConfigurationIdentifier }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterIamRole = (
  input: AwsRedshiftClusterIamRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyStatus !== undefined && input.ApplyStatus !== null && { ApplyStatus: input.ApplyStatus }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterIamRoles = (
  input: AwsRedshiftClusterIamRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = (
  input: AwsRedshiftClusterPendingModifiedValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedSnapshotRetentionPeriod !== undefined &&
      input.AutomatedSnapshotRetentionPeriod !== null && {
        AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
      }),
    ...(input.ClusterIdentifier !== undefined &&
      input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ClusterType !== undefined && input.ClusterType !== null && { ClusterType: input.ClusterType }),
    ...(input.ClusterVersion !== undefined &&
      input.ClusterVersion !== null && { ClusterVersion: input.ClusterVersion }),
    ...(input.EncryptionType !== undefined &&
      input.EncryptionType !== null && { EncryptionType: input.EncryptionType }),
    ...(input.EnhancedVpcRouting !== undefined &&
      input.EnhancedVpcRouting !== null && { EnhancedVpcRouting: input.EnhancedVpcRouting }),
    ...(input.MaintenanceTrackName !== undefined &&
      input.MaintenanceTrackName !== null && { MaintenanceTrackName: input.MaintenanceTrackName }),
    ...(input.MasterUserPassword !== undefined &&
      input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword }),
    ...(input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType }),
    ...(input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.PubliclyAccessible !== undefined &&
      input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterResizeInfo = (
  input: AwsRedshiftClusterResizeInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCancelResize !== undefined &&
      input.AllowCancelResize !== null && { AllowCancelResize: input.AllowCancelResize }),
    ...(input.ResizeType !== undefined && input.ResizeType !== null && { ResizeType: input.ResizeType }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterRestoreStatus = (
  input: AwsRedshiftClusterRestoreStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.CurrentRestoreRateInMegaBytesPerSecond !== undefined &&
      input.CurrentRestoreRateInMegaBytesPerSecond !== null && {
        CurrentRestoreRateInMegaBytesPerSecond: __serializeFloat(input.CurrentRestoreRateInMegaBytesPerSecond),
      }),
    ...(input.ElapsedTimeInSeconds !== undefined &&
      input.ElapsedTimeInSeconds !== null && { ElapsedTimeInSeconds: input.ElapsedTimeInSeconds }),
    ...(input.EstimatedTimeToCompletionInSeconds !== undefined &&
      input.EstimatedTimeToCompletionInSeconds !== null && {
        EstimatedTimeToCompletionInSeconds: input.EstimatedTimeToCompletionInSeconds,
      }),
    ...(input.ProgressInMegaBytes !== undefined &&
      input.ProgressInMegaBytes !== null && { ProgressInMegaBytes: input.ProgressInMegaBytes }),
    ...(input.SnapshotSizeInMegaBytes !== undefined &&
      input.SnapshotSizeInMegaBytes !== null && { SnapshotSizeInMegaBytes: input.SnapshotSizeInMegaBytes }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = (
  input: AwsRedshiftClusterVpcSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.VpcSecurityGroupId !== undefined &&
      input.VpcSecurityGroupId !== null && { VpcSecurityGroupId: input.VpcSecurityGroupId }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = (
  input: AwsRedshiftClusterVpcSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = (
  input: AwsS3AccountPublicAccessBlockDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAcls !== undefined &&
      input.BlockPublicAcls !== null && { BlockPublicAcls: input.BlockPublicAcls }),
    ...(input.BlockPublicPolicy !== undefined &&
      input.BlockPublicPolicy !== null && { BlockPublicPolicy: input.BlockPublicPolicy }),
    ...(input.IgnorePublicAcls !== undefined &&
      input.IgnorePublicAcls !== null && { IgnorePublicAcls: input.IgnorePublicAcls }),
    ...(input.RestrictPublicBuckets !== undefined &&
      input.RestrictPublicBuckets !== null && { RestrictPublicBuckets: input.RestrictPublicBuckets }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules !== undefined &&
      input.Rules !== null && {
        Rules: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList(input.Rules, context),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DaysAfterInitiation !== undefined &&
      input.DaysAfterInitiation !== null && { DaysAfterInitiation: input.DaysAfterInitiation }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbortIncompleteMultipartUpload !== undefined &&
      input.AbortIncompleteMultipartUpload !== null && {
        AbortIncompleteMultipartUpload:
          serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(
            input.AbortIncompleteMultipartUpload,
            context
          ),
      }),
    ...(input.ExpirationDate !== undefined &&
      input.ExpirationDate !== null && { ExpirationDate: input.ExpirationDate }),
    ...(input.ExpirationInDays !== undefined &&
      input.ExpirationInDays !== null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.ExpiredObjectDeleteMarker !== undefined &&
      input.ExpiredObjectDeleteMarker !== null && { ExpiredObjectDeleteMarker: input.ExpiredObjectDeleteMarker }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && {
        Filter: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(input.Filter, context),
      }),
    ...(input.ID !== undefined && input.ID !== null && { ID: input.ID }),
    ...(input.NoncurrentVersionExpirationInDays !== undefined &&
      input.NoncurrentVersionExpirationInDays !== null && {
        NoncurrentVersionExpirationInDays: input.NoncurrentVersionExpirationInDays,
      }),
    ...(input.NoncurrentVersionTransitions !== undefined &&
      input.NoncurrentVersionTransitions !== null && {
        NoncurrentVersionTransitions:
          serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(
            input.NoncurrentVersionTransitions,
            context
          ),
      }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.Transitions !== undefined &&
      input.Transitions !== null && {
        Transitions: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList(
          input.Transitions,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Predicate !== undefined &&
      input.Predicate !== null && {
        Predicate: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(
          input.Predicate,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Operands !== undefined &&
      input.Operands !== null && {
        Operands: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList(
          input.Operands,
          context
        ),
      }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    ...(input.Tag !== undefined &&
      input.Tag !== null && {
        Tag: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(
          input.Tag,
          context
        ),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    ...(input.Tag !== undefined &&
      input.Tag !== null && {
        Tag: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(
          input.Tag,
          context
        ),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Days !== undefined && input.Days !== null && { Days: input.Days }),
    ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Date !== undefined && input.Date !== null && { Date: input.Date }),
    ...(input.Days !== undefined && input.Days !== null && { Days: input.Days }),
    ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketDetails = (input: AwsS3BucketDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList !== undefined &&
      input.AccessControlList !== null && { AccessControlList: input.AccessControlList }),
    ...(input.BucketLifecycleConfiguration !== undefined &&
      input.BucketLifecycleConfiguration !== null && {
        BucketLifecycleConfiguration: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails(
          input.BucketLifecycleConfiguration,
          context
        ),
      }),
    ...(input.BucketLoggingConfiguration !== undefined &&
      input.BucketLoggingConfiguration !== null && {
        BucketLoggingConfiguration: serializeAws_restJson1AwsS3BucketLoggingConfiguration(
          input.BucketLoggingConfiguration,
          context
        ),
      }),
    ...(input.BucketNotificationConfiguration !== undefined &&
      input.BucketNotificationConfiguration !== null && {
        BucketNotificationConfiguration: serializeAws_restJson1AwsS3BucketNotificationConfiguration(
          input.BucketNotificationConfiguration,
          context
        ),
      }),
    ...(input.BucketWebsiteConfiguration !== undefined &&
      input.BucketWebsiteConfiguration !== null && {
        BucketWebsiteConfiguration: serializeAws_restJson1AwsS3BucketWebsiteConfiguration(
          input.BucketWebsiteConfiguration,
          context
        ),
      }),
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.OwnerName !== undefined && input.OwnerName !== null && { OwnerName: input.OwnerName }),
    ...(input.PublicAccessBlockConfiguration !== undefined &&
      input.PublicAccessBlockConfiguration !== null && {
        PublicAccessBlockConfiguration: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(
          input.PublicAccessBlockConfiguration,
          context
        ),
      }),
    ...(input.ServerSideEncryptionConfiguration !== undefined &&
      input.ServerSideEncryptionConfiguration !== null && {
        ServerSideEncryptionConfiguration: serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
          input.ServerSideEncryptionConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketLoggingConfiguration = (
  input: AwsS3BucketLoggingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationBucketName !== undefined &&
      input.DestinationBucketName !== null && { DestinationBucketName: input.DestinationBucketName }),
    ...(input.LogFilePrefix !== undefined && input.LogFilePrefix !== null && { LogFilePrefix: input.LogFilePrefix }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfiguration = (
  input: AwsS3BucketNotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_restJson1AwsS3BucketNotificationConfigurationDetails(
          input.Configurations,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationDetail = (
  input: AwsS3BucketNotificationConfigurationDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }),
    ...(input.Events !== undefined &&
      input.Events !== null && {
        Events: serializeAws_restJson1AwsS3BucketNotificationConfigurationEvents(input.Events, context),
      }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && {
        Filter: serializeAws_restJson1AwsS3BucketNotificationConfigurationFilter(input.Filter, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationDetails = (
  input: AwsS3BucketNotificationConfigurationDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketNotificationConfigurationDetail(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationEvents = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationFilter = (
  input: AwsS3BucketNotificationConfigurationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3KeyFilter !== undefined &&
      input.S3KeyFilter !== null && {
        S3KeyFilter: serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter(input.S3KeyFilter, context),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterRules !== undefined &&
      input.FilterRules !== null && {
        FilterRules: serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules(
          input.FilterRules,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilterRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilterRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  input: AwsS3BucketServerSideEncryptionByDefault,
  context: __SerdeContext
): any => {
  return {
    ...(input.KMSMasterKeyID !== undefined &&
      input.KMSMasterKeyID !== null && { KMSMasterKeyID: input.KMSMasterKeyID }),
    ...(input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null && { SSEAlgorithm: input.SSEAlgorithm }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  input: AwsS3BucketServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules !== undefined &&
      input.Rules !== null && {
        Rules: serializeAws_restJson1AwsS3BucketServerSideEncryptionRules(input.Rules, context),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  input: AwsS3BucketServerSideEncryptionRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyServerSideEncryptionByDefault !== undefined &&
      input.ApplyServerSideEncryptionByDefault !== null && {
        ApplyServerSideEncryptionByDefault: serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
          input.ApplyServerSideEncryptionByDefault,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  input: AwsS3BucketServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketWebsiteConfiguration = (
  input: AwsS3BucketWebsiteConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ErrorDocument !== undefined && input.ErrorDocument !== null && { ErrorDocument: input.ErrorDocument }),
    ...(input.IndexDocumentSuffix !== undefined &&
      input.IndexDocumentSuffix !== null && { IndexDocumentSuffix: input.IndexDocumentSuffix }),
    ...(input.RedirectAllRequestsTo !== undefined &&
      input.RedirectAllRequestsTo !== null && {
        RedirectAllRequestsTo: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo(
          input.RedirectAllRequestsTo,
          context
        ),
      }),
    ...(input.RoutingRules !== undefined &&
      input.RoutingRules !== null && {
        RoutingRules: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules(input.RoutingRules, context),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo = (
  input: AwsS3BucketWebsiteConfigurationRedirectTo,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule = (
  input: AwsS3BucketWebsiteConfigurationRoutingRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined &&
      input.Condition !== null && {
        Condition: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition(input.Condition, context),
      }),
    ...(input.Redirect !== undefined &&
      input.Redirect !== null && {
        Redirect: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect(input.Redirect, context),
      }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition = (
  input: AwsS3BucketWebsiteConfigurationRoutingRuleCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpErrorCodeReturnedEquals !== undefined &&
      input.HttpErrorCodeReturnedEquals !== null && { HttpErrorCodeReturnedEquals: input.HttpErrorCodeReturnedEquals }),
    ...(input.KeyPrefixEquals !== undefined &&
      input.KeyPrefixEquals !== null && { KeyPrefixEquals: input.KeyPrefixEquals }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = (
  input: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
    ...(input.HttpRedirectCode !== undefined &&
      input.HttpRedirectCode !== null && { HttpRedirectCode: input.HttpRedirectCode }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.ReplaceKeyPrefixWith !== undefined &&
      input.ReplaceKeyPrefixWith !== null && { ReplaceKeyPrefixWith: input.ReplaceKeyPrefixWith }),
    ...(input.ReplaceKeyWith !== undefined &&
      input.ReplaceKeyWith !== null && { ReplaceKeyWith: input.ReplaceKeyWith }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules = (
  input: AwsS3BucketWebsiteConfigurationRoutingRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3ObjectDetails = (input: AwsS3ObjectDetails, context: __SerdeContext): any => {
  return {
    ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    ...(input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag }),
    ...(input.LastModified !== undefined && input.LastModified !== null && { LastModified: input.LastModified }),
    ...(input.SSEKMSKeyId !== undefined && input.SSEKMSKeyId !== null && { SSEKMSKeyId: input.SSEKMSKeyId }),
    ...(input.ServerSideEncryption !== undefined &&
      input.ServerSideEncryption !== null && { ServerSideEncryption: input.ServerSideEncryption }),
    ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsSecretsManagerSecretDetails = (
  input: AwsSecretsManagerSecretDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Deleted !== undefined && input.Deleted !== null && { Deleted: input.Deleted }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RotationEnabled !== undefined &&
      input.RotationEnabled !== null && { RotationEnabled: input.RotationEnabled }),
    ...(input.RotationLambdaArn !== undefined &&
      input.RotationLambdaArn !== null && { RotationLambdaArn: input.RotationLambdaArn }),
    ...(input.RotationOccurredWithinFrequency !== undefined &&
      input.RotationOccurredWithinFrequency !== null && {
        RotationOccurredWithinFrequency: input.RotationOccurredWithinFrequency,
      }),
    ...(input.RotationRules !== undefined &&
      input.RotationRules !== null && {
        RotationRules: serializeAws_restJson1AwsSecretsManagerSecretRotationRules(input.RotationRules, context),
      }),
  };
};

const serializeAws_restJson1AwsSecretsManagerSecretRotationRules = (
  input: AwsSecretsManagerSecretRotationRules,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticallyAfterDays !== undefined &&
      input.AutomaticallyAfterDays !== null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }),
  };
};

const serializeAws_restJson1AwsSecurityFinding = (input: AwsSecurityFinding, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_restJson1Action(input.Action, context) }),
    ...(input.AwsAccountId !== undefined && input.AwsAccountId !== null && { AwsAccountId: input.AwsAccountId }),
    ...(input.CompanyName !== undefined && input.CompanyName !== null && { CompanyName: input.CompanyName }),
    ...(input.Compliance !== undefined &&
      input.Compliance !== null && { Compliance: serializeAws_restJson1Compliance(input.Compliance, context) }),
    ...(input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence }),
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FindingProviderFields !== undefined &&
      input.FindingProviderFields !== null && {
        FindingProviderFields: serializeAws_restJson1FindingProviderFields(input.FindingProviderFields, context),
      }),
    ...(input.FirstObservedAt !== undefined &&
      input.FirstObservedAt !== null && { FirstObservedAt: input.FirstObservedAt }),
    ...(input.GeneratorId !== undefined && input.GeneratorId !== null && { GeneratorId: input.GeneratorId }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LastObservedAt !== undefined &&
      input.LastObservedAt !== null && { LastObservedAt: input.LastObservedAt }),
    ...(input.Malware !== undefined &&
      input.Malware !== null && { Malware: serializeAws_restJson1MalwareList(input.Malware, context) }),
    ...(input.Network !== undefined &&
      input.Network !== null && { Network: serializeAws_restJson1Network(input.Network, context) }),
    ...(input.NetworkPath !== undefined &&
      input.NetworkPath !== null && { NetworkPath: serializeAws_restJson1NetworkPathList(input.NetworkPath, context) }),
    ...(input.Note !== undefined && input.Note !== null && { Note: serializeAws_restJson1Note(input.Note, context) }),
    ...(input.PatchSummary !== undefined &&
      input.PatchSummary !== null && { PatchSummary: serializeAws_restJson1PatchSummary(input.PatchSummary, context) }),
    ...(input.Process !== undefined &&
      input.Process !== null && { Process: serializeAws_restJson1ProcessDetails(input.Process, context) }),
    ...(input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }),
    ...(input.ProductFields !== undefined &&
      input.ProductFields !== null && { ProductFields: serializeAws_restJson1FieldMap(input.ProductFields, context) }),
    ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
    ...(input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    ...(input.RelatedFindings !== undefined &&
      input.RelatedFindings !== null && {
        RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
      }),
    ...(input.Remediation !== undefined &&
      input.Remediation !== null && { Remediation: serializeAws_restJson1Remediation(input.Remediation, context) }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
    ...(input.SchemaVersion !== undefined && input.SchemaVersion !== null && { SchemaVersion: input.SchemaVersion }),
    ...(input.Severity !== undefined &&
      input.Severity !== null && { Severity: serializeAws_restJson1Severity(input.Severity, context) }),
    ...(input.SourceUrl !== undefined && input.SourceUrl !== null && { SourceUrl: input.SourceUrl }),
    ...(input.ThreatIntelIndicators !== undefined &&
      input.ThreatIntelIndicators !== null && {
        ThreatIntelIndicators: serializeAws_restJson1ThreatIntelIndicatorList(input.ThreatIntelIndicators, context),
      }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    ...(input.Types !== undefined &&
      input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt }),
    ...(input.UserDefinedFields !== undefined &&
      input.UserDefinedFields !== null && {
        UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
      }),
    ...(input.VerificationState !== undefined &&
      input.VerificationState !== null && { VerificationState: input.VerificationState }),
    ...(input.Vulnerabilities !== undefined &&
      input.Vulnerabilities !== null && {
        Vulnerabilities: serializeAws_restJson1VulnerabilityList(input.Vulnerabilities, context),
      }),
    ...(input.Workflow !== undefined &&
      input.Workflow !== null && { Workflow: serializeAws_restJson1Workflow(input.Workflow, context) }),
    ...(input.WorkflowState !== undefined && input.WorkflowState !== null && { WorkflowState: input.WorkflowState }),
  };
};

const serializeAws_restJson1AwsSecurityFindingFilters = (
  input: AwsSecurityFindingFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsAccountId !== undefined &&
      input.AwsAccountId !== null && {
        AwsAccountId: serializeAws_restJson1StringFilterList(input.AwsAccountId, context),
      }),
    ...(input.CompanyName !== undefined &&
      input.CompanyName !== null && {
        CompanyName: serializeAws_restJson1StringFilterList(input.CompanyName, context),
      }),
    ...(input.ComplianceStatus !== undefined &&
      input.ComplianceStatus !== null && {
        ComplianceStatus: serializeAws_restJson1StringFilterList(input.ComplianceStatus, context),
      }),
    ...(input.Confidence !== undefined &&
      input.Confidence !== null && { Confidence: serializeAws_restJson1NumberFilterList(input.Confidence, context) }),
    ...(input.CreatedAt !== undefined &&
      input.CreatedAt !== null && { CreatedAt: serializeAws_restJson1DateFilterList(input.CreatedAt, context) }),
    ...(input.Criticality !== undefined &&
      input.Criticality !== null && {
        Criticality: serializeAws_restJson1NumberFilterList(input.Criticality, context),
      }),
    ...(input.Description !== undefined &&
      input.Description !== null && {
        Description: serializeAws_restJson1StringFilterList(input.Description, context),
      }),
    ...(input.FindingProviderFieldsConfidence !== undefined &&
      input.FindingProviderFieldsConfidence !== null && {
        FindingProviderFieldsConfidence: serializeAws_restJson1NumberFilterList(
          input.FindingProviderFieldsConfidence,
          context
        ),
      }),
    ...(input.FindingProviderFieldsCriticality !== undefined &&
      input.FindingProviderFieldsCriticality !== null && {
        FindingProviderFieldsCriticality: serializeAws_restJson1NumberFilterList(
          input.FindingProviderFieldsCriticality,
          context
        ),
      }),
    ...(input.FindingProviderFieldsRelatedFindingsId !== undefined &&
      input.FindingProviderFieldsRelatedFindingsId !== null && {
        FindingProviderFieldsRelatedFindingsId: serializeAws_restJson1StringFilterList(
          input.FindingProviderFieldsRelatedFindingsId,
          context
        ),
      }),
    ...(input.FindingProviderFieldsRelatedFindingsProductArn !== undefined &&
      input.FindingProviderFieldsRelatedFindingsProductArn !== null && {
        FindingProviderFieldsRelatedFindingsProductArn: serializeAws_restJson1StringFilterList(
          input.FindingProviderFieldsRelatedFindingsProductArn,
          context
        ),
      }),
    ...(input.FindingProviderFieldsSeverityLabel !== undefined &&
      input.FindingProviderFieldsSeverityLabel !== null && {
        FindingProviderFieldsSeverityLabel: serializeAws_restJson1StringFilterList(
          input.FindingProviderFieldsSeverityLabel,
          context
        ),
      }),
    ...(input.FindingProviderFieldsSeverityOriginal !== undefined &&
      input.FindingProviderFieldsSeverityOriginal !== null && {
        FindingProviderFieldsSeverityOriginal: serializeAws_restJson1StringFilterList(
          input.FindingProviderFieldsSeverityOriginal,
          context
        ),
      }),
    ...(input.FindingProviderFieldsTypes !== undefined &&
      input.FindingProviderFieldsTypes !== null && {
        FindingProviderFieldsTypes: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsTypes, context),
      }),
    ...(input.FirstObservedAt !== undefined &&
      input.FirstObservedAt !== null && {
        FirstObservedAt: serializeAws_restJson1DateFilterList(input.FirstObservedAt, context),
      }),
    ...(input.GeneratorId !== undefined &&
      input.GeneratorId !== null && {
        GeneratorId: serializeAws_restJson1StringFilterList(input.GeneratorId, context),
      }),
    ...(input.Id !== undefined &&
      input.Id !== null && { Id: serializeAws_restJson1StringFilterList(input.Id, context) }),
    ...(input.Keyword !== undefined &&
      input.Keyword !== null && { Keyword: serializeAws_restJson1KeywordFilterList(input.Keyword, context) }),
    ...(input.LastObservedAt !== undefined &&
      input.LastObservedAt !== null && {
        LastObservedAt: serializeAws_restJson1DateFilterList(input.LastObservedAt, context),
      }),
    ...(input.MalwareName !== undefined &&
      input.MalwareName !== null && {
        MalwareName: serializeAws_restJson1StringFilterList(input.MalwareName, context),
      }),
    ...(input.MalwarePath !== undefined &&
      input.MalwarePath !== null && {
        MalwarePath: serializeAws_restJson1StringFilterList(input.MalwarePath, context),
      }),
    ...(input.MalwareState !== undefined &&
      input.MalwareState !== null && {
        MalwareState: serializeAws_restJson1StringFilterList(input.MalwareState, context),
      }),
    ...(input.MalwareType !== undefined &&
      input.MalwareType !== null && {
        MalwareType: serializeAws_restJson1StringFilterList(input.MalwareType, context),
      }),
    ...(input.NetworkDestinationDomain !== undefined &&
      input.NetworkDestinationDomain !== null && {
        NetworkDestinationDomain: serializeAws_restJson1StringFilterList(input.NetworkDestinationDomain, context),
      }),
    ...(input.NetworkDestinationIpV4 !== undefined &&
      input.NetworkDestinationIpV4 !== null && {
        NetworkDestinationIpV4: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV4, context),
      }),
    ...(input.NetworkDestinationIpV6 !== undefined &&
      input.NetworkDestinationIpV6 !== null && {
        NetworkDestinationIpV6: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV6, context),
      }),
    ...(input.NetworkDestinationPort !== undefined &&
      input.NetworkDestinationPort !== null && {
        NetworkDestinationPort: serializeAws_restJson1NumberFilterList(input.NetworkDestinationPort, context),
      }),
    ...(input.NetworkDirection !== undefined &&
      input.NetworkDirection !== null && {
        NetworkDirection: serializeAws_restJson1StringFilterList(input.NetworkDirection, context),
      }),
    ...(input.NetworkProtocol !== undefined &&
      input.NetworkProtocol !== null && {
        NetworkProtocol: serializeAws_restJson1StringFilterList(input.NetworkProtocol, context),
      }),
    ...(input.NetworkSourceDomain !== undefined &&
      input.NetworkSourceDomain !== null && {
        NetworkSourceDomain: serializeAws_restJson1StringFilterList(input.NetworkSourceDomain, context),
      }),
    ...(input.NetworkSourceIpV4 !== undefined &&
      input.NetworkSourceIpV4 !== null && {
        NetworkSourceIpV4: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV4, context),
      }),
    ...(input.NetworkSourceIpV6 !== undefined &&
      input.NetworkSourceIpV6 !== null && {
        NetworkSourceIpV6: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV6, context),
      }),
    ...(input.NetworkSourceMac !== undefined &&
      input.NetworkSourceMac !== null && {
        NetworkSourceMac: serializeAws_restJson1StringFilterList(input.NetworkSourceMac, context),
      }),
    ...(input.NetworkSourcePort !== undefined &&
      input.NetworkSourcePort !== null && {
        NetworkSourcePort: serializeAws_restJson1NumberFilterList(input.NetworkSourcePort, context),
      }),
    ...(input.NoteText !== undefined &&
      input.NoteText !== null && { NoteText: serializeAws_restJson1StringFilterList(input.NoteText, context) }),
    ...(input.NoteUpdatedAt !== undefined &&
      input.NoteUpdatedAt !== null && {
        NoteUpdatedAt: serializeAws_restJson1DateFilterList(input.NoteUpdatedAt, context),
      }),
    ...(input.NoteUpdatedBy !== undefined &&
      input.NoteUpdatedBy !== null && {
        NoteUpdatedBy: serializeAws_restJson1StringFilterList(input.NoteUpdatedBy, context),
      }),
    ...(input.ProcessLaunchedAt !== undefined &&
      input.ProcessLaunchedAt !== null && {
        ProcessLaunchedAt: serializeAws_restJson1DateFilterList(input.ProcessLaunchedAt, context),
      }),
    ...(input.ProcessName !== undefined &&
      input.ProcessName !== null && {
        ProcessName: serializeAws_restJson1StringFilterList(input.ProcessName, context),
      }),
    ...(input.ProcessParentPid !== undefined &&
      input.ProcessParentPid !== null && {
        ProcessParentPid: serializeAws_restJson1NumberFilterList(input.ProcessParentPid, context),
      }),
    ...(input.ProcessPath !== undefined &&
      input.ProcessPath !== null && {
        ProcessPath: serializeAws_restJson1StringFilterList(input.ProcessPath, context),
      }),
    ...(input.ProcessPid !== undefined &&
      input.ProcessPid !== null && { ProcessPid: serializeAws_restJson1NumberFilterList(input.ProcessPid, context) }),
    ...(input.ProcessTerminatedAt !== undefined &&
      input.ProcessTerminatedAt !== null && {
        ProcessTerminatedAt: serializeAws_restJson1DateFilterList(input.ProcessTerminatedAt, context),
      }),
    ...(input.ProductArn !== undefined &&
      input.ProductArn !== null && { ProductArn: serializeAws_restJson1StringFilterList(input.ProductArn, context) }),
    ...(input.ProductFields !== undefined &&
      input.ProductFields !== null && {
        ProductFields: serializeAws_restJson1MapFilterList(input.ProductFields, context),
      }),
    ...(input.ProductName !== undefined &&
      input.ProductName !== null && {
        ProductName: serializeAws_restJson1StringFilterList(input.ProductName, context),
      }),
    ...(input.RecommendationText !== undefined &&
      input.RecommendationText !== null && {
        RecommendationText: serializeAws_restJson1StringFilterList(input.RecommendationText, context),
      }),
    ...(input.RecordState !== undefined &&
      input.RecordState !== null && {
        RecordState: serializeAws_restJson1StringFilterList(input.RecordState, context),
      }),
    ...(input.Region !== undefined &&
      input.Region !== null && { Region: serializeAws_restJson1StringFilterList(input.Region, context) }),
    ...(input.RelatedFindingsId !== undefined &&
      input.RelatedFindingsId !== null && {
        RelatedFindingsId: serializeAws_restJson1StringFilterList(input.RelatedFindingsId, context),
      }),
    ...(input.RelatedFindingsProductArn !== undefined &&
      input.RelatedFindingsProductArn !== null && {
        RelatedFindingsProductArn: serializeAws_restJson1StringFilterList(input.RelatedFindingsProductArn, context),
      }),
    ...(input.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
      input.ResourceAwsEc2InstanceIamInstanceProfileArn !== null && {
        ResourceAwsEc2InstanceIamInstanceProfileArn: serializeAws_restJson1StringFilterList(
          input.ResourceAwsEc2InstanceIamInstanceProfileArn,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceImageId !== undefined &&
      input.ResourceAwsEc2InstanceImageId !== null && {
        ResourceAwsEc2InstanceImageId: serializeAws_restJson1StringFilterList(
          input.ResourceAwsEc2InstanceImageId,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceIpV4Addresses !== undefined &&
      input.ResourceAwsEc2InstanceIpV4Addresses !== null && {
        ResourceAwsEc2InstanceIpV4Addresses: serializeAws_restJson1IpFilterList(
          input.ResourceAwsEc2InstanceIpV4Addresses,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceIpV6Addresses !== undefined &&
      input.ResourceAwsEc2InstanceIpV6Addresses !== null && {
        ResourceAwsEc2InstanceIpV6Addresses: serializeAws_restJson1IpFilterList(
          input.ResourceAwsEc2InstanceIpV6Addresses,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceKeyName !== undefined &&
      input.ResourceAwsEc2InstanceKeyName !== null && {
        ResourceAwsEc2InstanceKeyName: serializeAws_restJson1StringFilterList(
          input.ResourceAwsEc2InstanceKeyName,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceLaunchedAt !== undefined &&
      input.ResourceAwsEc2InstanceLaunchedAt !== null && {
        ResourceAwsEc2InstanceLaunchedAt: serializeAws_restJson1DateFilterList(
          input.ResourceAwsEc2InstanceLaunchedAt,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceSubnetId !== undefined &&
      input.ResourceAwsEc2InstanceSubnetId !== null && {
        ResourceAwsEc2InstanceSubnetId: serializeAws_restJson1StringFilterList(
          input.ResourceAwsEc2InstanceSubnetId,
          context
        ),
      }),
    ...(input.ResourceAwsEc2InstanceType !== undefined &&
      input.ResourceAwsEc2InstanceType !== null && {
        ResourceAwsEc2InstanceType: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceType, context),
      }),
    ...(input.ResourceAwsEc2InstanceVpcId !== undefined &&
      input.ResourceAwsEc2InstanceVpcId !== null && {
        ResourceAwsEc2InstanceVpcId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceVpcId, context),
      }),
    ...(input.ResourceAwsIamAccessKeyCreatedAt !== undefined &&
      input.ResourceAwsIamAccessKeyCreatedAt !== null && {
        ResourceAwsIamAccessKeyCreatedAt: serializeAws_restJson1DateFilterList(
          input.ResourceAwsIamAccessKeyCreatedAt,
          context
        ),
      }),
    ...(input.ResourceAwsIamAccessKeyPrincipalName !== undefined &&
      input.ResourceAwsIamAccessKeyPrincipalName !== null && {
        ResourceAwsIamAccessKeyPrincipalName: serializeAws_restJson1StringFilterList(
          input.ResourceAwsIamAccessKeyPrincipalName,
          context
        ),
      }),
    ...(input.ResourceAwsIamAccessKeyStatus !== undefined &&
      input.ResourceAwsIamAccessKeyStatus !== null && {
        ResourceAwsIamAccessKeyStatus: serializeAws_restJson1StringFilterList(
          input.ResourceAwsIamAccessKeyStatus,
          context
        ),
      }),
    ...(input.ResourceAwsIamAccessKeyUserName !== undefined &&
      input.ResourceAwsIamAccessKeyUserName !== null && {
        ResourceAwsIamAccessKeyUserName: serializeAws_restJson1StringFilterList(
          input.ResourceAwsIamAccessKeyUserName,
          context
        ),
      }),
    ...(input.ResourceAwsIamUserUserName !== undefined &&
      input.ResourceAwsIamUserUserName !== null && {
        ResourceAwsIamUserUserName: serializeAws_restJson1StringFilterList(input.ResourceAwsIamUserUserName, context),
      }),
    ...(input.ResourceAwsS3BucketOwnerId !== undefined &&
      input.ResourceAwsS3BucketOwnerId !== null && {
        ResourceAwsS3BucketOwnerId: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerId, context),
      }),
    ...(input.ResourceAwsS3BucketOwnerName !== undefined &&
      input.ResourceAwsS3BucketOwnerName !== null && {
        ResourceAwsS3BucketOwnerName: serializeAws_restJson1StringFilterList(
          input.ResourceAwsS3BucketOwnerName,
          context
        ),
      }),
    ...(input.ResourceContainerImageId !== undefined &&
      input.ResourceContainerImageId !== null && {
        ResourceContainerImageId: serializeAws_restJson1StringFilterList(input.ResourceContainerImageId, context),
      }),
    ...(input.ResourceContainerImageName !== undefined &&
      input.ResourceContainerImageName !== null && {
        ResourceContainerImageName: serializeAws_restJson1StringFilterList(input.ResourceContainerImageName, context),
      }),
    ...(input.ResourceContainerLaunchedAt !== undefined &&
      input.ResourceContainerLaunchedAt !== null && {
        ResourceContainerLaunchedAt: serializeAws_restJson1DateFilterList(input.ResourceContainerLaunchedAt, context),
      }),
    ...(input.ResourceContainerName !== undefined &&
      input.ResourceContainerName !== null && {
        ResourceContainerName: serializeAws_restJson1StringFilterList(input.ResourceContainerName, context),
      }),
    ...(input.ResourceDetailsOther !== undefined &&
      input.ResourceDetailsOther !== null && {
        ResourceDetailsOther: serializeAws_restJson1MapFilterList(input.ResourceDetailsOther, context),
      }),
    ...(input.ResourceId !== undefined &&
      input.ResourceId !== null && { ResourceId: serializeAws_restJson1StringFilterList(input.ResourceId, context) }),
    ...(input.ResourcePartition !== undefined &&
      input.ResourcePartition !== null && {
        ResourcePartition: serializeAws_restJson1StringFilterList(input.ResourcePartition, context),
      }),
    ...(input.ResourceRegion !== undefined &&
      input.ResourceRegion !== null && {
        ResourceRegion: serializeAws_restJson1StringFilterList(input.ResourceRegion, context),
      }),
    ...(input.ResourceTags !== undefined &&
      input.ResourceTags !== null && {
        ResourceTags: serializeAws_restJson1MapFilterList(input.ResourceTags, context),
      }),
    ...(input.ResourceType !== undefined &&
      input.ResourceType !== null && {
        ResourceType: serializeAws_restJson1StringFilterList(input.ResourceType, context),
      }),
    ...(input.SeverityLabel !== undefined &&
      input.SeverityLabel !== null && {
        SeverityLabel: serializeAws_restJson1StringFilterList(input.SeverityLabel, context),
      }),
    ...(input.SeverityNormalized !== undefined &&
      input.SeverityNormalized !== null && {
        SeverityNormalized: serializeAws_restJson1NumberFilterList(input.SeverityNormalized, context),
      }),
    ...(input.SeverityProduct !== undefined &&
      input.SeverityProduct !== null && {
        SeverityProduct: serializeAws_restJson1NumberFilterList(input.SeverityProduct, context),
      }),
    ...(input.SourceUrl !== undefined &&
      input.SourceUrl !== null && { SourceUrl: serializeAws_restJson1StringFilterList(input.SourceUrl, context) }),
    ...(input.ThreatIntelIndicatorCategory !== undefined &&
      input.ThreatIntelIndicatorCategory !== null && {
        ThreatIntelIndicatorCategory: serializeAws_restJson1StringFilterList(
          input.ThreatIntelIndicatorCategory,
          context
        ),
      }),
    ...(input.ThreatIntelIndicatorLastObservedAt !== undefined &&
      input.ThreatIntelIndicatorLastObservedAt !== null && {
        ThreatIntelIndicatorLastObservedAt: serializeAws_restJson1DateFilterList(
          input.ThreatIntelIndicatorLastObservedAt,
          context
        ),
      }),
    ...(input.ThreatIntelIndicatorSource !== undefined &&
      input.ThreatIntelIndicatorSource !== null && {
        ThreatIntelIndicatorSource: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorSource, context),
      }),
    ...(input.ThreatIntelIndicatorSourceUrl !== undefined &&
      input.ThreatIntelIndicatorSourceUrl !== null && {
        ThreatIntelIndicatorSourceUrl: serializeAws_restJson1StringFilterList(
          input.ThreatIntelIndicatorSourceUrl,
          context
        ),
      }),
    ...(input.ThreatIntelIndicatorType !== undefined &&
      input.ThreatIntelIndicatorType !== null && {
        ThreatIntelIndicatorType: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorType, context),
      }),
    ...(input.ThreatIntelIndicatorValue !== undefined &&
      input.ThreatIntelIndicatorValue !== null && {
        ThreatIntelIndicatorValue: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorValue, context),
      }),
    ...(input.Title !== undefined &&
      input.Title !== null && { Title: serializeAws_restJson1StringFilterList(input.Title, context) }),
    ...(input.Type !== undefined &&
      input.Type !== null && { Type: serializeAws_restJson1StringFilterList(input.Type, context) }),
    ...(input.UpdatedAt !== undefined &&
      input.UpdatedAt !== null && { UpdatedAt: serializeAws_restJson1DateFilterList(input.UpdatedAt, context) }),
    ...(input.UserDefinedFields !== undefined &&
      input.UserDefinedFields !== null && {
        UserDefinedFields: serializeAws_restJson1MapFilterList(input.UserDefinedFields, context),
      }),
    ...(input.VerificationState !== undefined &&
      input.VerificationState !== null && {
        VerificationState: serializeAws_restJson1StringFilterList(input.VerificationState, context),
      }),
    ...(input.WorkflowState !== undefined &&
      input.WorkflowState !== null && {
        WorkflowState: serializeAws_restJson1StringFilterList(input.WorkflowState, context),
      }),
    ...(input.WorkflowStatus !== undefined &&
      input.WorkflowStatus !== null && {
        WorkflowStatus: serializeAws_restJson1StringFilterList(input.WorkflowStatus, context),
      }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifier = (
  input: AwsSecurityFindingIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifierList = (
  input: AwsSecurityFindingIdentifier[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
};

const serializeAws_restJson1AwsSnsTopicDetails = (input: AwsSnsTopicDetails, context: __SerdeContext): any => {
  return {
    ...(input.KmsMasterKeyId !== undefined &&
      input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
    ...(input.Subscription !== undefined &&
      input.Subscription !== null && {
        Subscription: serializeAws_restJson1AwsSnsTopicSubscriptionList(input.Subscription, context),
      }),
    ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscription = (
  input: AwsSnsTopicSubscription,
  context: __SerdeContext
): any => {
  return {
    ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscriptionList = (
  input: AwsSnsTopicSubscription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
};

const serializeAws_restJson1AwsSqsQueueDetails = (input: AwsSqsQueueDetails, context: __SerdeContext): any => {
  return {
    ...(input.DeadLetterTargetArn !== undefined &&
      input.DeadLetterTargetArn !== null && { DeadLetterTargetArn: input.DeadLetterTargetArn }),
    ...(input.KmsDataKeyReusePeriodSeconds !== undefined &&
      input.KmsDataKeyReusePeriodSeconds !== null && {
        KmsDataKeyReusePeriodSeconds: input.KmsDataKeyReusePeriodSeconds,
      }),
    ...(input.KmsMasterKeyId !== undefined &&
      input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.QueueName !== undefined && input.QueueName !== null && { QueueName: input.QueueName }),
  };
};

const serializeAws_restJson1AwsSsmComplianceSummary = (
  input: AwsSsmComplianceSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceType !== undefined &&
      input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
    ...(input.CompliantCriticalCount !== undefined &&
      input.CompliantCriticalCount !== null && { CompliantCriticalCount: input.CompliantCriticalCount }),
    ...(input.CompliantHighCount !== undefined &&
      input.CompliantHighCount !== null && { CompliantHighCount: input.CompliantHighCount }),
    ...(input.CompliantInformationalCount !== undefined &&
      input.CompliantInformationalCount !== null && { CompliantInformationalCount: input.CompliantInformationalCount }),
    ...(input.CompliantLowCount !== undefined &&
      input.CompliantLowCount !== null && { CompliantLowCount: input.CompliantLowCount }),
    ...(input.CompliantMediumCount !== undefined &&
      input.CompliantMediumCount !== null && { CompliantMediumCount: input.CompliantMediumCount }),
    ...(input.CompliantUnspecifiedCount !== undefined &&
      input.CompliantUnspecifiedCount !== null && { CompliantUnspecifiedCount: input.CompliantUnspecifiedCount }),
    ...(input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType }),
    ...(input.NonCompliantCriticalCount !== undefined &&
      input.NonCompliantCriticalCount !== null && { NonCompliantCriticalCount: input.NonCompliantCriticalCount }),
    ...(input.NonCompliantHighCount !== undefined &&
      input.NonCompliantHighCount !== null && { NonCompliantHighCount: input.NonCompliantHighCount }),
    ...(input.NonCompliantInformationalCount !== undefined &&
      input.NonCompliantInformationalCount !== null && {
        NonCompliantInformationalCount: input.NonCompliantInformationalCount,
      }),
    ...(input.NonCompliantLowCount !== undefined &&
      input.NonCompliantLowCount !== null && { NonCompliantLowCount: input.NonCompliantLowCount }),
    ...(input.NonCompliantMediumCount !== undefined &&
      input.NonCompliantMediumCount !== null && { NonCompliantMediumCount: input.NonCompliantMediumCount }),
    ...(input.NonCompliantUnspecifiedCount !== undefined &&
      input.NonCompliantUnspecifiedCount !== null && {
        NonCompliantUnspecifiedCount: input.NonCompliantUnspecifiedCount,
      }),
    ...(input.OverallSeverity !== undefined &&
      input.OverallSeverity !== null && { OverallSeverity: input.OverallSeverity }),
    ...(input.PatchBaselineId !== undefined &&
      input.PatchBaselineId !== null && { PatchBaselineId: input.PatchBaselineId }),
    ...(input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsSsmPatch = (input: AwsSsmPatch, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceSummary !== undefined &&
      input.ComplianceSummary !== null && {
        ComplianceSummary: serializeAws_restJson1AwsSsmComplianceSummary(input.ComplianceSummary, context),
      }),
  };
};

const serializeAws_restJson1AwsSsmPatchComplianceDetails = (
  input: AwsSsmPatchComplianceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Patch !== undefined &&
      input.Patch !== null && { Patch: serializeAws_restJson1AwsSsmPatch(input.Patch, context) }),
  };
};

const serializeAws_restJson1AwsWafWebAclDetails = (input: AwsWafWebAclDetails, context: __SerdeContext): any => {
  return {
    ...(input.DefaultAction !== undefined && input.DefaultAction !== null && { DefaultAction: input.DefaultAction }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1AwsWafWebAclRuleList(input.Rules, context) }),
    ...(input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsWafWebAclRule = (input: AwsWafWebAclRule, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_restJson1WafAction(input.Action, context) }),
    ...(input.ExcludedRules !== undefined &&
      input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_restJson1WafExcludedRuleList(input.ExcludedRules, context),
      }),
    ...(input.OverrideAction !== undefined &&
      input.OverrideAction !== null && {
        OverrideAction: serializeAws_restJson1WafOverrideAction(input.OverrideAction, context),
      }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafWebAclRuleList = (input: AwsWafWebAclRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
};

const serializeAws_restJson1BatchImportFindingsRequestFindingList = (
  input: AwsSecurityFinding[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsSecurityFinding(entry, context);
    });
};

const serializeAws_restJson1Cell = (input: Cell, context: __SerdeContext): any => {
  return {
    ...(input.CellReference !== undefined && input.CellReference !== null && { CellReference: input.CellReference }),
    ...(input.Column !== undefined && input.Column !== null && { Column: input.Column }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.Row !== undefined && input.Row !== null && { Row: input.Row }),
  };
};

const serializeAws_restJson1Cells = (input: Cell[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Cell(entry, context);
    });
};

const serializeAws_restJson1CidrBlockAssociation = (input: CidrBlockAssociation, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
    ...(input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock }),
    ...(input.CidrBlockState !== undefined &&
      input.CidrBlockState !== null && { CidrBlockState: input.CidrBlockState }),
  };
};

const serializeAws_restJson1CidrBlockAssociationList = (
  input: CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CidrBlockAssociation(entry, context);
    });
};

const serializeAws_restJson1City = (input: City, context: __SerdeContext): any => {
  return {
    ...(input.CityName !== undefined && input.CityName !== null && { CityName: input.CityName }),
  };
};

const serializeAws_restJson1ClassificationResult = (input: ClassificationResult, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOccurrences !== undefined &&
      input.AdditionalOccurrences !== null && { AdditionalOccurrences: input.AdditionalOccurrences }),
    ...(input.CustomDataIdentifiers !== undefined &&
      input.CustomDataIdentifiers !== null && {
        CustomDataIdentifiers: serializeAws_restJson1CustomDataIdentifiersResult(input.CustomDataIdentifiers, context),
      }),
    ...(input.MimeType !== undefined && input.MimeType !== null && { MimeType: input.MimeType }),
    ...(input.SensitiveData !== undefined &&
      input.SensitiveData !== null && {
        SensitiveData: serializeAws_restJson1SensitiveDataResultList(input.SensitiveData, context),
      }),
    ...(input.SizeClassified !== undefined &&
      input.SizeClassified !== null && { SizeClassified: input.SizeClassified }),
    ...(input.Status !== undefined &&
      input.Status !== null && { Status: serializeAws_restJson1ClassificationStatus(input.Status, context) }),
  };
};

const serializeAws_restJson1ClassificationStatus = (input: ClassificationStatus, context: __SerdeContext): any => {
  return {
    ...(input.Code !== undefined && input.Code !== null && { Code: input.Code }),
    ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1Compliance = (input: Compliance, context: __SerdeContext): any => {
  return {
    ...(input.RelatedRequirements !== undefined &&
      input.RelatedRequirements !== null && {
        RelatedRequirements: serializeAws_restJson1RelatedRequirementsList(input.RelatedRequirements, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.StatusReasons !== undefined &&
      input.StatusReasons !== null && {
        StatusReasons: serializeAws_restJson1StatusReasonsList(input.StatusReasons, context),
      }),
  };
};

const serializeAws_restJson1ContainerDetails = (input: ContainerDetails, context: __SerdeContext): any => {
  return {
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
    ...(input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1Country = (input: Country, context: __SerdeContext): any => {
  return {
    ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
    ...(input.CountryName !== undefined && input.CountryName !== null && { CountryName: input.CountryName }),
  };
};

const serializeAws_restJson1CustomDataIdentifiersDetections = (
  input: CustomDataIdentifiersDetections,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Occurrences !== undefined &&
      input.Occurrences !== null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) }),
  };
};

const serializeAws_restJson1CustomDataIdentifiersDetectionsList = (
  input: CustomDataIdentifiersDetections[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
};

const serializeAws_restJson1CustomDataIdentifiersResult = (
  input: CustomDataIdentifiersResult,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detections !== undefined &&
      input.Detections !== null && {
        Detections: serializeAws_restJson1CustomDataIdentifiersDetectionsList(input.Detections, context),
      }),
    ...(input.TotalCount !== undefined && input.TotalCount !== null && { TotalCount: input.TotalCount }),
  };
};

const serializeAws_restJson1Cvss = (input: Cvss, context: __SerdeContext): any => {
  return {
    ...(input.Adjustments !== undefined &&
      input.Adjustments !== null && { Adjustments: serializeAws_restJson1AdjustmentList(input.Adjustments, context) }),
    ...(input.BaseScore !== undefined && input.BaseScore !== null && { BaseScore: __serializeFloat(input.BaseScore) }),
    ...(input.BaseVector !== undefined && input.BaseVector !== null && { BaseVector: input.BaseVector }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1CvssList = (input: Cvss[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Cvss(entry, context);
    });
};

const serializeAws_restJson1DataClassificationDetails = (
  input: DataClassificationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DetailedResultsLocation !== undefined &&
      input.DetailedResultsLocation !== null && { DetailedResultsLocation: input.DetailedResultsLocation }),
    ...(input.Result !== undefined &&
      input.Result !== null && { Result: serializeAws_restJson1ClassificationResult(input.Result, context) }),
  };
};

const serializeAws_restJson1DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return {
    ...(input.DateRange !== undefined &&
      input.DateRange !== null && { DateRange: serializeAws_restJson1DateRange(input.DateRange, context) }),
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
    ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
  };
};

const serializeAws_restJson1DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DateFilter(entry, context);
    });
};

const serializeAws_restJson1DateRange = (input: DateRange, context: __SerdeContext): any => {
  return {
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DnsRequestAction = (input: DnsRequestAction, context: __SerdeContext): any => {
  return {
    ...(input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1FieldMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1FindingProviderFields = (input: FindingProviderFields, context: __SerdeContext): any => {
  return {
    ...(input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence }),
    ...(input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality }),
    ...(input.RelatedFindings !== undefined &&
      input.RelatedFindings !== null && {
        RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
      }),
    ...(input.Severity !== undefined &&
      input.Severity !== null && { Severity: serializeAws_restJson1FindingProviderSeverity(input.Severity, context) }),
    ...(input.Types !== undefined &&
      input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
  };
};

const serializeAws_restJson1FindingProviderSeverity = (
  input: FindingProviderSeverity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    ...(input.Original !== undefined && input.Original !== null && { Original: input.Original }),
  };
};

const serializeAws_restJson1GeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
  return {
    ...(input.Lat !== undefined && input.Lat !== null && { Lat: __serializeFloat(input.Lat) }),
    ...(input.Lon !== undefined && input.Lon !== null && { Lon: __serializeFloat(input.Lon) }),
  };
};

const serializeAws_restJson1IcmpTypeCode = (input: IcmpTypeCode, context: __SerdeContext): any => {
  return {
    ...(input.Code !== undefined && input.Code !== null && { Code: input.Code }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1IpFilter = (input: IpFilter, context: __SerdeContext): any => {
  return {
    ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
  };
};

const serializeAws_restJson1IpFilterList = (input: IpFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1IpFilter(entry, context);
    });
};

const serializeAws_restJson1IpOrganizationDetails = (input: IpOrganizationDetails, context: __SerdeContext): any => {
  return {
    ...(input.Asn !== undefined && input.Asn !== null && { Asn: input.Asn }),
    ...(input.AsnOrg !== undefined && input.AsnOrg !== null && { AsnOrg: input.AsnOrg }),
    ...(input.Isp !== undefined && input.Isp !== null && { Isp: input.Isp }),
    ...(input.Org !== undefined && input.Org !== null && { Org: input.Org }),
  };
};

const serializeAws_restJson1Ipv6CidrBlockAssociation = (
  input: Ipv6CidrBlockAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId }),
    ...(input.CidrBlockState !== undefined &&
      input.CidrBlockState !== null && { CidrBlockState: input.CidrBlockState }),
    ...(input.Ipv6CidrBlock !== undefined && input.Ipv6CidrBlock !== null && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
  };
};

const serializeAws_restJson1Ipv6CidrBlockAssociationList = (
  input: Ipv6CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
};

const serializeAws_restJson1KeywordFilter = (input: KeywordFilter, context: __SerdeContext): any => {
  return {
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1KeywordFilterList = (input: KeywordFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1KeywordFilter(entry, context);
    });
};

const serializeAws_restJson1LoadBalancerState = (input: LoadBalancerState, context: __SerdeContext): any => {
  return {
    ...(input.Code !== undefined && input.Code !== null && { Code: input.Code }),
    ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1Malware = (input: Malware, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1MalwareList = (input: Malware[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Malware(entry, context);
    });
};

const serializeAws_restJson1MapFilter = (input: MapFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1MapFilterList = (input: MapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MapFilter(entry, context);
    });
};

const serializeAws_restJson1Network = (input: Network, context: __SerdeContext): any => {
  return {
    ...(input.DestinationDomain !== undefined &&
      input.DestinationDomain !== null && { DestinationDomain: input.DestinationDomain }),
    ...(input.DestinationIpV4 !== undefined &&
      input.DestinationIpV4 !== null && { DestinationIpV4: input.DestinationIpV4 }),
    ...(input.DestinationIpV6 !== undefined &&
      input.DestinationIpV6 !== null && { DestinationIpV6: input.DestinationIpV6 }),
    ...(input.DestinationPort !== undefined &&
      input.DestinationPort !== null && { DestinationPort: input.DestinationPort }),
    ...(input.Direction !== undefined && input.Direction !== null && { Direction: input.Direction }),
    ...(input.OpenPortRange !== undefined &&
      input.OpenPortRange !== null && { OpenPortRange: serializeAws_restJson1PortRange(input.OpenPortRange, context) }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.SourceDomain !== undefined && input.SourceDomain !== null && { SourceDomain: input.SourceDomain }),
    ...(input.SourceIpV4 !== undefined && input.SourceIpV4 !== null && { SourceIpV4: input.SourceIpV4 }),
    ...(input.SourceIpV6 !== undefined && input.SourceIpV6 !== null && { SourceIpV6: input.SourceIpV6 }),
    ...(input.SourceMac !== undefined && input.SourceMac !== null && { SourceMac: input.SourceMac }),
    ...(input.SourcePort !== undefined && input.SourcePort !== null && { SourcePort: input.SourcePort }),
  };
};

const serializeAws_restJson1NetworkConnectionAction = (
  input: NetworkConnectionAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked }),
    ...(input.ConnectionDirection !== undefined &&
      input.ConnectionDirection !== null && { ConnectionDirection: input.ConnectionDirection }),
    ...(input.LocalPortDetails !== undefined &&
      input.LocalPortDetails !== null && {
        LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
      }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.RemoteIpDetails !== undefined &&
      input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
      }),
    ...(input.RemotePortDetails !== undefined &&
      input.RemotePortDetails !== null && {
        RemotePortDetails: serializeAws_restJson1ActionRemotePortDetails(input.RemotePortDetails, context),
      }),
  };
};

const serializeAws_restJson1NetworkHeader = (input: NetworkHeader, context: __SerdeContext): any => {
  return {
    ...(input.Destination !== undefined &&
      input.Destination !== null && {
        Destination: serializeAws_restJson1NetworkPathComponentDetails(input.Destination, context),
      }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.Source !== undefined &&
      input.Source !== null && { Source: serializeAws_restJson1NetworkPathComponentDetails(input.Source, context) }),
  };
};

const serializeAws_restJson1NetworkPathComponent = (input: NetworkPathComponent, context: __SerdeContext): any => {
  return {
    ...(input.ComponentId !== undefined && input.ComponentId !== null && { ComponentId: input.ComponentId }),
    ...(input.ComponentType !== undefined && input.ComponentType !== null && { ComponentType: input.ComponentType }),
    ...(input.Egress !== undefined &&
      input.Egress !== null && { Egress: serializeAws_restJson1NetworkHeader(input.Egress, context) }),
    ...(input.Ingress !== undefined &&
      input.Ingress !== null && { Ingress: serializeAws_restJson1NetworkHeader(input.Ingress, context) }),
  };
};

const serializeAws_restJson1NetworkPathComponentDetails = (
  input: NetworkPathComponentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined &&
      input.Address !== null && { Address: serializeAws_restJson1StringList(input.Address, context) }),
    ...(input.PortRanges !== undefined &&
      input.PortRanges !== null && { PortRanges: serializeAws_restJson1PortRangeList(input.PortRanges, context) }),
  };
};

const serializeAws_restJson1NetworkPathList = (input: NetworkPathComponent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NetworkPathComponent(entry, context);
    });
};

const serializeAws_restJson1NonEmptyStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Note = (input: Note, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt }),
    ...(input.UpdatedBy !== undefined && input.UpdatedBy !== null && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NoteUpdate = (input: NoteUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.UpdatedBy !== undefined && input.UpdatedBy !== null && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.Eq !== undefined && input.Eq !== null && { Eq: __serializeFloat(input.Eq) }),
    ...(input.Gte !== undefined && input.Gte !== null && { Gte: __serializeFloat(input.Gte) }),
    ...(input.Lte !== undefined && input.Lte !== null && { Lte: __serializeFloat(input.Lte) }),
  };
};

const serializeAws_restJson1NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NumberFilter(entry, context);
    });
};

const serializeAws_restJson1Occurrences = (input: Occurrences, context: __SerdeContext): any => {
  return {
    ...(input.Cells !== undefined &&
      input.Cells !== null && { Cells: serializeAws_restJson1Cells(input.Cells, context) }),
    ...(input.LineRanges !== undefined &&
      input.LineRanges !== null && { LineRanges: serializeAws_restJson1Ranges(input.LineRanges, context) }),
    ...(input.OffsetRanges !== undefined &&
      input.OffsetRanges !== null && { OffsetRanges: serializeAws_restJson1Ranges(input.OffsetRanges, context) }),
    ...(input.Pages !== undefined &&
      input.Pages !== null && { Pages: serializeAws_restJson1Pages(input.Pages, context) }),
    ...(input.Records !== undefined &&
      input.Records !== null && { Records: serializeAws_restJson1Records(input.Records, context) }),
  };
};

const serializeAws_restJson1Page = (input: Page, context: __SerdeContext): any => {
  return {
    ...(input.LineRange !== undefined &&
      input.LineRange !== null && { LineRange: serializeAws_restJson1Range(input.LineRange, context) }),
    ...(input.OffsetRange !== undefined &&
      input.OffsetRange !== null && { OffsetRange: serializeAws_restJson1Range(input.OffsetRange, context) }),
    ...(input.PageNumber !== undefined && input.PageNumber !== null && { PageNumber: input.PageNumber }),
  };
};

const serializeAws_restJson1Pages = (input: Page[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Page(entry, context);
    });
};

const serializeAws_restJson1PatchSummary = (input: PatchSummary, context: __SerdeContext): any => {
  return {
    ...(input.FailedCount !== undefined && input.FailedCount !== null && { FailedCount: input.FailedCount }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.InstalledCount !== undefined &&
      input.InstalledCount !== null && { InstalledCount: input.InstalledCount }),
    ...(input.InstalledOtherCount !== undefined &&
      input.InstalledOtherCount !== null && { InstalledOtherCount: input.InstalledOtherCount }),
    ...(input.InstalledPendingReboot !== undefined &&
      input.InstalledPendingReboot !== null && { InstalledPendingReboot: input.InstalledPendingReboot }),
    ...(input.InstalledRejectedCount !== undefined &&
      input.InstalledRejectedCount !== null && { InstalledRejectedCount: input.InstalledRejectedCount }),
    ...(input.MissingCount !== undefined && input.MissingCount !== null && { MissingCount: input.MissingCount }),
    ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
    ...(input.OperationEndTime !== undefined &&
      input.OperationEndTime !== null && { OperationEndTime: input.OperationEndTime }),
    ...(input.OperationStartTime !== undefined &&
      input.OperationStartTime !== null && { OperationStartTime: input.OperationStartTime }),
    ...(input.RebootOption !== undefined && input.RebootOption !== null && { RebootOption: input.RebootOption }),
  };
};

const serializeAws_restJson1PortProbeAction = (input: PortProbeAction, context: __SerdeContext): any => {
  return {
    ...(input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked }),
    ...(input.PortProbeDetails !== undefined &&
      input.PortProbeDetails !== null && {
        PortProbeDetails: serializeAws_restJson1PortProbeDetailList(input.PortProbeDetails, context),
      }),
  };
};

const serializeAws_restJson1PortProbeDetail = (input: PortProbeDetail, context: __SerdeContext): any => {
  return {
    ...(input.LocalIpDetails !== undefined &&
      input.LocalIpDetails !== null && {
        LocalIpDetails: serializeAws_restJson1ActionLocalIpDetails(input.LocalIpDetails, context),
      }),
    ...(input.LocalPortDetails !== undefined &&
      input.LocalPortDetails !== null && {
        LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
      }),
    ...(input.RemoteIpDetails !== undefined &&
      input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
      }),
  };
};

const serializeAws_restJson1PortProbeDetailList = (input: PortProbeDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PortProbeDetail(entry, context);
    });
};

const serializeAws_restJson1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin !== undefined && input.Begin !== null && { Begin: input.Begin }),
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
  };
};

const serializeAws_restJson1PortRangeFromTo = (input: PortRangeFromTo, context: __SerdeContext): any => {
  return {
    ...(input.From !== undefined && input.From !== null && { From: input.From }),
    ...(input.To !== undefined && input.To !== null && { To: input.To }),
  };
};

const serializeAws_restJson1PortRangeList = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PortRange(entry, context);
    });
};

const serializeAws_restJson1ProcessDetails = (input: ProcessDetails, context: __SerdeContext): any => {
  return {
    ...(input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ParentPid !== undefined && input.ParentPid !== null && { ParentPid: input.ParentPid }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Pid !== undefined && input.Pid !== null && { Pid: input.Pid }),
    ...(input.TerminatedAt !== undefined && input.TerminatedAt !== null && { TerminatedAt: input.TerminatedAt }),
  };
};

const serializeAws_restJson1Range = (input: Range, context: __SerdeContext): any => {
  return {
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
    ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
    ...(input.StartColumn !== undefined && input.StartColumn !== null && { StartColumn: input.StartColumn }),
  };
};

const serializeAws_restJson1Ranges = (input: Range[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Range(entry, context);
    });
};

const serializeAws_restJson1Recommendation = (input: Recommendation, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_restJson1_Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath }),
    ...(input.RecordIndex !== undefined && input.RecordIndex !== null && { RecordIndex: input.RecordIndex }),
  };
};

const serializeAws_restJson1Records = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1_Record(entry, context);
    });
};

const serializeAws_restJson1RelatedFinding = (input: RelatedFinding, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1RelatedFindingList = (input: RelatedFinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RelatedFinding(entry, context);
    });
};

const serializeAws_restJson1RelatedRequirementsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Remediation = (input: Remediation, context: __SerdeContext): any => {
  return {
    ...(input.Recommendation !== undefined &&
      input.Recommendation !== null && {
        Recommendation: serializeAws_restJson1Recommendation(input.Recommendation, context),
      }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.DataClassification !== undefined &&
      input.DataClassification !== null && {
        DataClassification: serializeAws_restJson1DataClassificationDetails(input.DataClassification, context),
      }),
    ...(input.Details !== undefined &&
      input.Details !== null && { Details: serializeAws_restJson1ResourceDetails(input.Details, context) }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Partition !== undefined && input.Partition !== null && { Partition: input.Partition }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    ...(input.ResourceRole !== undefined && input.ResourceRole !== null && { ResourceRole: input.ResourceRole }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1FieldMap(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return {
    ...(input.AwsApiGatewayRestApi !== undefined &&
      input.AwsApiGatewayRestApi !== null && {
        AwsApiGatewayRestApi: serializeAws_restJson1AwsApiGatewayRestApiDetails(input.AwsApiGatewayRestApi, context),
      }),
    ...(input.AwsApiGatewayStage !== undefined &&
      input.AwsApiGatewayStage !== null && {
        AwsApiGatewayStage: serializeAws_restJson1AwsApiGatewayStageDetails(input.AwsApiGatewayStage, context),
      }),
    ...(input.AwsApiGatewayV2Api !== undefined &&
      input.AwsApiGatewayV2Api !== null && {
        AwsApiGatewayV2Api: serializeAws_restJson1AwsApiGatewayV2ApiDetails(input.AwsApiGatewayV2Api, context),
      }),
    ...(input.AwsApiGatewayV2Stage !== undefined &&
      input.AwsApiGatewayV2Stage !== null && {
        AwsApiGatewayV2Stage: serializeAws_restJson1AwsApiGatewayV2StageDetails(input.AwsApiGatewayV2Stage, context),
      }),
    ...(input.AwsAutoScalingAutoScalingGroup !== undefined &&
      input.AwsAutoScalingAutoScalingGroup !== null && {
        AwsAutoScalingAutoScalingGroup: serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(
          input.AwsAutoScalingAutoScalingGroup,
          context
        ),
      }),
    ...(input.AwsAutoScalingLaunchConfiguration !== undefined &&
      input.AwsAutoScalingLaunchConfiguration !== null && {
        AwsAutoScalingLaunchConfiguration: serializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails(
          input.AwsAutoScalingLaunchConfiguration,
          context
        ),
      }),
    ...(input.AwsCertificateManagerCertificate !== undefined &&
      input.AwsCertificateManagerCertificate !== null && {
        AwsCertificateManagerCertificate: serializeAws_restJson1AwsCertificateManagerCertificateDetails(
          input.AwsCertificateManagerCertificate,
          context
        ),
      }),
    ...(input.AwsCloudFrontDistribution !== undefined &&
      input.AwsCloudFrontDistribution !== null && {
        AwsCloudFrontDistribution: serializeAws_restJson1AwsCloudFrontDistributionDetails(
          input.AwsCloudFrontDistribution,
          context
        ),
      }),
    ...(input.AwsCloudTrailTrail !== undefined &&
      input.AwsCloudTrailTrail !== null && {
        AwsCloudTrailTrail: serializeAws_restJson1AwsCloudTrailTrailDetails(input.AwsCloudTrailTrail, context),
      }),
    ...(input.AwsCodeBuildProject !== undefined &&
      input.AwsCodeBuildProject !== null && {
        AwsCodeBuildProject: serializeAws_restJson1AwsCodeBuildProjectDetails(input.AwsCodeBuildProject, context),
      }),
    ...(input.AwsDynamoDbTable !== undefined &&
      input.AwsDynamoDbTable !== null && {
        AwsDynamoDbTable: serializeAws_restJson1AwsDynamoDbTableDetails(input.AwsDynamoDbTable, context),
      }),
    ...(input.AwsEc2Eip !== undefined &&
      input.AwsEc2Eip !== null && { AwsEc2Eip: serializeAws_restJson1AwsEc2EipDetails(input.AwsEc2Eip, context) }),
    ...(input.AwsEc2Instance !== undefined &&
      input.AwsEc2Instance !== null && {
        AwsEc2Instance: serializeAws_restJson1AwsEc2InstanceDetails(input.AwsEc2Instance, context),
      }),
    ...(input.AwsEc2NetworkAcl !== undefined &&
      input.AwsEc2NetworkAcl !== null && {
        AwsEc2NetworkAcl: serializeAws_restJson1AwsEc2NetworkAclDetails(input.AwsEc2NetworkAcl, context),
      }),
    ...(input.AwsEc2NetworkInterface !== undefined &&
      input.AwsEc2NetworkInterface !== null && {
        AwsEc2NetworkInterface: serializeAws_restJson1AwsEc2NetworkInterfaceDetails(
          input.AwsEc2NetworkInterface,
          context
        ),
      }),
    ...(input.AwsEc2SecurityGroup !== undefined &&
      input.AwsEc2SecurityGroup !== null && {
        AwsEc2SecurityGroup: serializeAws_restJson1AwsEc2SecurityGroupDetails(input.AwsEc2SecurityGroup, context),
      }),
    ...(input.AwsEc2Subnet !== undefined &&
      input.AwsEc2Subnet !== null && {
        AwsEc2Subnet: serializeAws_restJson1AwsEc2SubnetDetails(input.AwsEc2Subnet, context),
      }),
    ...(input.AwsEc2Volume !== undefined &&
      input.AwsEc2Volume !== null && {
        AwsEc2Volume: serializeAws_restJson1AwsEc2VolumeDetails(input.AwsEc2Volume, context),
      }),
    ...(input.AwsEc2Vpc !== undefined &&
      input.AwsEc2Vpc !== null && { AwsEc2Vpc: serializeAws_restJson1AwsEc2VpcDetails(input.AwsEc2Vpc, context) }),
    ...(input.AwsEc2VpnConnection !== undefined &&
      input.AwsEc2VpnConnection !== null && {
        AwsEc2VpnConnection: serializeAws_restJson1AwsEc2VpnConnectionDetails(input.AwsEc2VpnConnection, context),
      }),
    ...(input.AwsEcrContainerImage !== undefined &&
      input.AwsEcrContainerImage !== null && {
        AwsEcrContainerImage: serializeAws_restJson1AwsEcrContainerImageDetails(input.AwsEcrContainerImage, context),
      }),
    ...(input.AwsEcsCluster !== undefined &&
      input.AwsEcsCluster !== null && {
        AwsEcsCluster: serializeAws_restJson1AwsEcsClusterDetails(input.AwsEcsCluster, context),
      }),
    ...(input.AwsEcsService !== undefined &&
      input.AwsEcsService !== null && {
        AwsEcsService: serializeAws_restJson1AwsEcsServiceDetails(input.AwsEcsService, context),
      }),
    ...(input.AwsEcsTaskDefinition !== undefined &&
      input.AwsEcsTaskDefinition !== null && {
        AwsEcsTaskDefinition: serializeAws_restJson1AwsEcsTaskDefinitionDetails(input.AwsEcsTaskDefinition, context),
      }),
    ...(input.AwsElasticBeanstalkEnvironment !== undefined &&
      input.AwsElasticBeanstalkEnvironment !== null && {
        AwsElasticBeanstalkEnvironment: serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(
          input.AwsElasticBeanstalkEnvironment,
          context
        ),
      }),
    ...(input.AwsElasticsearchDomain !== undefined &&
      input.AwsElasticsearchDomain !== null && {
        AwsElasticsearchDomain: serializeAws_restJson1AwsElasticsearchDomainDetails(
          input.AwsElasticsearchDomain,
          context
        ),
      }),
    ...(input.AwsElbLoadBalancer !== undefined &&
      input.AwsElbLoadBalancer !== null && {
        AwsElbLoadBalancer: serializeAws_restJson1AwsElbLoadBalancerDetails(input.AwsElbLoadBalancer, context),
      }),
    ...(input.AwsElbv2LoadBalancer !== undefined &&
      input.AwsElbv2LoadBalancer !== null && {
        AwsElbv2LoadBalancer: serializeAws_restJson1AwsElbv2LoadBalancerDetails(input.AwsElbv2LoadBalancer, context),
      }),
    ...(input.AwsIamAccessKey !== undefined &&
      input.AwsIamAccessKey !== null && {
        AwsIamAccessKey: serializeAws_restJson1AwsIamAccessKeyDetails(input.AwsIamAccessKey, context),
      }),
    ...(input.AwsIamGroup !== undefined &&
      input.AwsIamGroup !== null && {
        AwsIamGroup: serializeAws_restJson1AwsIamGroupDetails(input.AwsIamGroup, context),
      }),
    ...(input.AwsIamPolicy !== undefined &&
      input.AwsIamPolicy !== null && {
        AwsIamPolicy: serializeAws_restJson1AwsIamPolicyDetails(input.AwsIamPolicy, context),
      }),
    ...(input.AwsIamRole !== undefined &&
      input.AwsIamRole !== null && { AwsIamRole: serializeAws_restJson1AwsIamRoleDetails(input.AwsIamRole, context) }),
    ...(input.AwsIamUser !== undefined &&
      input.AwsIamUser !== null && { AwsIamUser: serializeAws_restJson1AwsIamUserDetails(input.AwsIamUser, context) }),
    ...(input.AwsKmsKey !== undefined &&
      input.AwsKmsKey !== null && { AwsKmsKey: serializeAws_restJson1AwsKmsKeyDetails(input.AwsKmsKey, context) }),
    ...(input.AwsLambdaFunction !== undefined &&
      input.AwsLambdaFunction !== null && {
        AwsLambdaFunction: serializeAws_restJson1AwsLambdaFunctionDetails(input.AwsLambdaFunction, context),
      }),
    ...(input.AwsLambdaLayerVersion !== undefined &&
      input.AwsLambdaLayerVersion !== null && {
        AwsLambdaLayerVersion: serializeAws_restJson1AwsLambdaLayerVersionDetails(input.AwsLambdaLayerVersion, context),
      }),
    ...(input.AwsRdsDbCluster !== undefined &&
      input.AwsRdsDbCluster !== null && {
        AwsRdsDbCluster: serializeAws_restJson1AwsRdsDbClusterDetails(input.AwsRdsDbCluster, context),
      }),
    ...(input.AwsRdsDbClusterSnapshot !== undefined &&
      input.AwsRdsDbClusterSnapshot !== null && {
        AwsRdsDbClusterSnapshot: serializeAws_restJson1AwsRdsDbClusterSnapshotDetails(
          input.AwsRdsDbClusterSnapshot,
          context
        ),
      }),
    ...(input.AwsRdsDbInstance !== undefined &&
      input.AwsRdsDbInstance !== null && {
        AwsRdsDbInstance: serializeAws_restJson1AwsRdsDbInstanceDetails(input.AwsRdsDbInstance, context),
      }),
    ...(input.AwsRdsDbSnapshot !== undefined &&
      input.AwsRdsDbSnapshot !== null && {
        AwsRdsDbSnapshot: serializeAws_restJson1AwsRdsDbSnapshotDetails(input.AwsRdsDbSnapshot, context),
      }),
    ...(input.AwsRdsEventSubscription !== undefined &&
      input.AwsRdsEventSubscription !== null && {
        AwsRdsEventSubscription: serializeAws_restJson1AwsRdsEventSubscriptionDetails(
          input.AwsRdsEventSubscription,
          context
        ),
      }),
    ...(input.AwsRedshiftCluster !== undefined &&
      input.AwsRedshiftCluster !== null && {
        AwsRedshiftCluster: serializeAws_restJson1AwsRedshiftClusterDetails(input.AwsRedshiftCluster, context),
      }),
    ...(input.AwsS3AccountPublicAccessBlock !== undefined &&
      input.AwsS3AccountPublicAccessBlock !== null && {
        AwsS3AccountPublicAccessBlock: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(
          input.AwsS3AccountPublicAccessBlock,
          context
        ),
      }),
    ...(input.AwsS3Bucket !== undefined &&
      input.AwsS3Bucket !== null && {
        AwsS3Bucket: serializeAws_restJson1AwsS3BucketDetails(input.AwsS3Bucket, context),
      }),
    ...(input.AwsS3Object !== undefined &&
      input.AwsS3Object !== null && {
        AwsS3Object: serializeAws_restJson1AwsS3ObjectDetails(input.AwsS3Object, context),
      }),
    ...(input.AwsSecretsManagerSecret !== undefined &&
      input.AwsSecretsManagerSecret !== null && {
        AwsSecretsManagerSecret: serializeAws_restJson1AwsSecretsManagerSecretDetails(
          input.AwsSecretsManagerSecret,
          context
        ),
      }),
    ...(input.AwsSnsTopic !== undefined &&
      input.AwsSnsTopic !== null && {
        AwsSnsTopic: serializeAws_restJson1AwsSnsTopicDetails(input.AwsSnsTopic, context),
      }),
    ...(input.AwsSqsQueue !== undefined &&
      input.AwsSqsQueue !== null && {
        AwsSqsQueue: serializeAws_restJson1AwsSqsQueueDetails(input.AwsSqsQueue, context),
      }),
    ...(input.AwsSsmPatchCompliance !== undefined &&
      input.AwsSsmPatchCompliance !== null && {
        AwsSsmPatchCompliance: serializeAws_restJson1AwsSsmPatchComplianceDetails(input.AwsSsmPatchCompliance, context),
      }),
    ...(input.AwsWafWebAcl !== undefined &&
      input.AwsWafWebAcl !== null && {
        AwsWafWebAcl: serializeAws_restJson1AwsWafWebAclDetails(input.AwsWafWebAcl, context),
      }),
    ...(input.Container !== undefined &&
      input.Container !== null && { Container: serializeAws_restJson1ContainerDetails(input.Container, context) }),
    ...(input.Other !== undefined &&
      input.Other !== null && { Other: serializeAws_restJson1FieldMap(input.Other, context) }),
  };
};

const serializeAws_restJson1ResourceList = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Resource(entry, context);
    });
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SensitiveDataDetections = (
  input: SensitiveDataDetections,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
    ...(input.Occurrences !== undefined &&
      input.Occurrences !== null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SensitiveDataDetectionsList = (
  input: SensitiveDataDetections[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SensitiveDataDetections(entry, context);
    });
};

const serializeAws_restJson1SensitiveDataResult = (input: SensitiveDataResult, context: __SerdeContext): any => {
  return {
    ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
    ...(input.Detections !== undefined &&
      input.Detections !== null && {
        Detections: serializeAws_restJson1SensitiveDataDetectionsList(input.Detections, context),
      }),
    ...(input.TotalCount !== undefined && input.TotalCount !== null && { TotalCount: input.TotalCount }),
  };
};

const serializeAws_restJson1SensitiveDataResultList = (input: SensitiveDataResult[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SensitiveDataResult(entry, context);
    });
};

const serializeAws_restJson1Severity = (input: Severity, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    ...(input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized }),
    ...(input.Original !== undefined && input.Original !== null && { Original: input.Original }),
    ...(input.Product !== undefined && input.Product !== null && { Product: __serializeFloat(input.Product) }),
  };
};

const serializeAws_restJson1SeverityUpdate = (input: SeverityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    ...(input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized }),
    ...(input.Product !== undefined && input.Product !== null && { Product: __serializeFloat(input.Product) }),
  };
};

const serializeAws_restJson1SoftwarePackage = (input: SoftwarePackage, context: __SerdeContext): any => {
  return {
    ...(input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture }),
    ...(input.Epoch !== undefined && input.Epoch !== null && { Epoch: input.Epoch }),
    ...(input.FilePath !== undefined && input.FilePath !== null && { FilePath: input.FilePath }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PackageManager !== undefined &&
      input.PackageManager !== null && { PackageManager: input.PackageManager }),
    ...(input.Release !== undefined && input.Release !== null && { Release: input.Release }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1SoftwarePackageList = (input: SoftwarePackage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SoftwarePackage(entry, context);
    });
};

const serializeAws_restJson1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SortCriterion(entry, context);
    });
};

const serializeAws_restJson1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return {
    ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
    ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_restJson1StandardsInputParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StandardsSubscriptionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StandardsSubscriptionRequest = (
  input: StandardsSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StandardsArn !== undefined && input.StandardsArn !== null && { StandardsArn: input.StandardsArn }),
    ...(input.StandardsInput !== undefined &&
      input.StandardsInput !== null && {
        StandardsInput: serializeAws_restJson1StandardsInputParameterMap(input.StandardsInput, context),
      }),
  };
};

const serializeAws_restJson1StandardsSubscriptionRequests = (
  input: StandardsSubscriptionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StandardsSubscriptionRequest(entry, context);
    });
};

const serializeAws_restJson1StatusReason = (input: StatusReason, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ReasonCode !== undefined && input.ReasonCode !== null && { ReasonCode: input.ReasonCode }),
  };
};

const serializeAws_restJson1StatusReasonsList = (input: StatusReason[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StatusReason(entry, context);
    });
};

const serializeAws_restJson1StringFilter = (input: StringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1StringFilterList = (input: StringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StringFilter(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ThreatIntelIndicator = (input: ThreatIntelIndicator, context: __SerdeContext): any => {
  return {
    ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
    ...(input.LastObservedAt !== undefined &&
      input.LastObservedAt !== null && { LastObservedAt: input.LastObservedAt }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.SourceUrl !== undefined && input.SourceUrl !== null && { SourceUrl: input.SourceUrl }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1ThreatIntelIndicatorList = (
  input: ThreatIntelIndicator[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
};

const serializeAws_restJson1TypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Vulnerability = (input: Vulnerability, context: __SerdeContext): any => {
  return {
    ...(input.Cvss !== undefined &&
      input.Cvss !== null && { Cvss: serializeAws_restJson1CvssList(input.Cvss, context) }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.ReferenceUrls !== undefined &&
      input.ReferenceUrls !== null && {
        ReferenceUrls: serializeAws_restJson1StringList(input.ReferenceUrls, context),
      }),
    ...(input.RelatedVulnerabilities !== undefined &&
      input.RelatedVulnerabilities !== null && {
        RelatedVulnerabilities: serializeAws_restJson1StringList(input.RelatedVulnerabilities, context),
      }),
    ...(input.Vendor !== undefined &&
      input.Vendor !== null && { Vendor: serializeAws_restJson1VulnerabilityVendor(input.Vendor, context) }),
    ...(input.VulnerablePackages !== undefined &&
      input.VulnerablePackages !== null && {
        VulnerablePackages: serializeAws_restJson1SoftwarePackageList(input.VulnerablePackages, context),
      }),
  };
};

const serializeAws_restJson1VulnerabilityList = (input: Vulnerability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Vulnerability(entry, context);
    });
};

const serializeAws_restJson1VulnerabilityVendor = (input: VulnerabilityVendor, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    ...(input.VendorCreatedAt !== undefined &&
      input.VendorCreatedAt !== null && { VendorCreatedAt: input.VendorCreatedAt }),
    ...(input.VendorSeverity !== undefined &&
      input.VendorSeverity !== null && { VendorSeverity: input.VendorSeverity }),
    ...(input.VendorUpdatedAt !== undefined &&
      input.VendorUpdatedAt !== null && { VendorUpdatedAt: input.VendorUpdatedAt }),
  };
};

const serializeAws_restJson1WafAction = (input: WafAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1WafExcludedRule = (input: WafExcludedRule, context: __SerdeContext): any => {
  return {
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1WafExcludedRuleList = (input: WafExcludedRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1WafExcludedRule(entry, context);
    });
};

const serializeAws_restJson1WafOverrideAction = (input: WafOverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1Workflow = (input: Workflow, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1WorkflowUpdate = (input: WorkflowUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionType: __expectString(output.ActionType),
    AwsApiCallAction:
      output.AwsApiCallAction !== undefined && output.AwsApiCallAction !== null
        ? deserializeAws_restJson1AwsApiCallAction(output.AwsApiCallAction, context)
        : undefined,
    DnsRequestAction:
      output.DnsRequestAction !== undefined && output.DnsRequestAction !== null
        ? deserializeAws_restJson1DnsRequestAction(output.DnsRequestAction, context)
        : undefined,
    NetworkConnectionAction:
      output.NetworkConnectionAction !== undefined && output.NetworkConnectionAction !== null
        ? deserializeAws_restJson1NetworkConnectionAction(output.NetworkConnectionAction, context)
        : undefined,
    PortProbeAction:
      output.PortProbeAction !== undefined && output.PortProbeAction !== null
        ? deserializeAws_restJson1PortProbeAction(output.PortProbeAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActionLocalIpDetails = (output: any, context: __SerdeContext): ActionLocalIpDetails => {
  return {
    IpAddressV4: __expectString(output.IpAddressV4),
  } as any;
};

const deserializeAws_restJson1ActionLocalPortDetails = (
  output: any,
  context: __SerdeContext
): ActionLocalPortDetails => {
  return {
    Port: __expectInt32(output.Port),
    PortName: __expectString(output.PortName),
  } as any;
};

const deserializeAws_restJson1ActionRemoteIpDetails = (output: any, context: __SerdeContext): ActionRemoteIpDetails => {
  return {
    City:
      output.City !== undefined && output.City !== null
        ? deserializeAws_restJson1City(output.City, context)
        : undefined,
    Country:
      output.Country !== undefined && output.Country !== null
        ? deserializeAws_restJson1Country(output.Country, context)
        : undefined,
    GeoLocation:
      output.GeoLocation !== undefined && output.GeoLocation !== null
        ? deserializeAws_restJson1GeoLocation(output.GeoLocation, context)
        : undefined,
    IpAddressV4: __expectString(output.IpAddressV4),
    Organization:
      output.Organization !== undefined && output.Organization !== null
        ? deserializeAws_restJson1IpOrganizationDetails(output.Organization, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActionRemotePortDetails = (
  output: any,
  context: __SerdeContext
): ActionRemotePortDetails => {
  return {
    Port: __expectInt32(output.Port),
    PortName: __expectString(output.PortName),
  } as any;
};

const deserializeAws_restJson1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    ActionTargetArn: __expectString(output.ActionTargetArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ActionTargetList = (output: any, context: __SerdeContext): ActionTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActionTarget(entry, context);
    });
};

const deserializeAws_restJson1Adjustment = (output: any, context: __SerdeContext): Adjustment => {
  return {
    Metric: __expectString(output.Metric),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1AdjustmentList = (output: any, context: __SerdeContext): Adjustment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Adjustment(entry, context);
    });
};

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AccountId: __expectString(output.AccountId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdminAccount(entry, context);
    });
};

const deserializeAws_restJson1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    SubnetId: __expectString(output.SubnetId),
    ZoneName: __expectString(output.ZoneName),
  } as any;
};

const deserializeAws_restJson1AvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailabilityZone(entry, context);
    });
};

const deserializeAws_restJson1AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return {
    AffectedResources:
      output.AffectedResources !== undefined && output.AffectedResources !== null
        ? deserializeAws_restJson1FieldMap(output.AffectedResources, context)
        : undefined,
    Api: __expectString(output.Api),
    CallerType: __expectString(output.CallerType),
    DomainDetails:
      output.DomainDetails !== undefined && output.DomainDetails !== null
        ? deserializeAws_restJson1AwsApiCallActionDomainDetails(output.DomainDetails, context)
        : undefined,
    FirstSeen: __expectString(output.FirstSeen),
    LastSeen: __expectString(output.LastSeen),
    RemoteIpDetails:
      output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

const deserializeAws_restJson1AwsApiCallActionDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsApiCallActionDomainDetails => {
  return {
    Domain: __expectString(output.Domain),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayAccessLogSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayAccessLogSettings => {
  return {
    DestinationArn: __expectString(output.DestinationArn),
    Format: __expectString(output.Format),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayCanarySettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayCanarySettings => {
  return {
    DeploymentId: __expectString(output.DeploymentId),
    PercentTraffic: __limitedParseDouble(output.PercentTraffic),
    StageVariableOverrides:
      output.StageVariableOverrides !== undefined && output.StageVariableOverrides !== null
        ? deserializeAws_restJson1FieldMap(output.StageVariableOverrides, context)
        : undefined,
    UseStageCache: __expectBoolean(output.UseStageCache),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayEndpointConfiguration = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayEndpointConfiguration => {
  return {
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Types, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayMethodSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayMethodSettings => {
  return {
    CacheDataEncrypted: __expectBoolean(output.CacheDataEncrypted),
    CacheTtlInSeconds: __expectInt32(output.CacheTtlInSeconds),
    CachingEnabled: __expectBoolean(output.CachingEnabled),
    DataTraceEnabled: __expectBoolean(output.DataTraceEnabled),
    HttpMethod: __expectString(output.HttpMethod),
    LoggingLevel: __expectString(output.LoggingLevel),
    MetricsEnabled: __expectBoolean(output.MetricsEnabled),
    RequireAuthorizationForCacheControl: __expectBoolean(output.RequireAuthorizationForCacheControl),
    ResourcePath: __expectString(output.ResourcePath),
    ThrottlingBurstLimit: __expectInt32(output.ThrottlingBurstLimit),
    ThrottlingRateLimit: __limitedParseDouble(output.ThrottlingRateLimit),
    UnauthorizedCacheControlHeaderStrategy: __expectString(output.UnauthorizedCacheControlHeaderStrategy),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayMethodSettingsList = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayMethodSettings[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
};

const deserializeAws_restJson1AwsApiGatewayRestApiDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayRestApiDetails => {
  return {
    ApiKeySource: __expectString(output.ApiKeySource),
    BinaryMediaTypes:
      output.BinaryMediaTypes !== undefined && output.BinaryMediaTypes !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.BinaryMediaTypes, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    EndpointConfiguration:
      output.EndpointConfiguration !== undefined && output.EndpointConfiguration !== null
        ? deserializeAws_restJson1AwsApiGatewayEndpointConfiguration(output.EndpointConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
    MinimumCompressionSize: __expectInt32(output.MinimumCompressionSize),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayStageDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayStageDetails => {
  return {
    AccessLogSettings:
      output.AccessLogSettings !== undefined && output.AccessLogSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
        : undefined,
    CacheClusterEnabled: __expectBoolean(output.CacheClusterEnabled),
    CacheClusterSize: __expectString(output.CacheClusterSize),
    CacheClusterStatus: __expectString(output.CacheClusterStatus),
    CanarySettings:
      output.CanarySettings !== undefined && output.CanarySettings !== null
        ? deserializeAws_restJson1AwsApiGatewayCanarySettings(output.CanarySettings, context)
        : undefined,
    ClientCertificateId: __expectString(output.ClientCertificateId),
    CreatedDate: __expectString(output.CreatedDate),
    DeploymentId: __expectString(output.DeploymentId),
    Description: __expectString(output.Description),
    DocumentationVersion: __expectString(output.DocumentationVersion),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    MethodSettings:
      output.MethodSettings !== undefined && output.MethodSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayMethodSettingsList(output.MethodSettings, context)
        : undefined,
    StageName: __expectString(output.StageName),
    TracingEnabled: __expectBoolean(output.TracingEnabled),
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1FieldMap(output.Variables, context)
        : undefined,
    WebAclArn: __expectString(output.WebAclArn),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2ApiDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2ApiDetails => {
  return {
    ApiEndpoint: __expectString(output.ApiEndpoint),
    ApiId: __expectString(output.ApiId),
    ApiKeySelectionExpression: __expectString(output.ApiKeySelectionExpression),
    CorsConfiguration:
      output.CorsConfiguration !== undefined && output.CorsConfiguration !== null
        ? deserializeAws_restJson1AwsCorsConfiguration(output.CorsConfiguration, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    ProtocolType: __expectString(output.ProtocolType),
    RouteSelectionExpression: __expectString(output.RouteSelectionExpression),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2RouteSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2RouteSettings => {
  return {
    DataTraceEnabled: __expectBoolean(output.DataTraceEnabled),
    DetailedMetricsEnabled: __expectBoolean(output.DetailedMetricsEnabled),
    LoggingLevel: __expectString(output.LoggingLevel),
    ThrottlingBurstLimit: __expectInt32(output.ThrottlingBurstLimit),
    ThrottlingRateLimit: __limitedParseDouble(output.ThrottlingRateLimit),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2StageDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2StageDetails => {
  return {
    AccessLogSettings:
      output.AccessLogSettings !== undefined && output.AccessLogSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
        : undefined,
    ApiGatewayManaged: __expectBoolean(output.ApiGatewayManaged),
    AutoDeploy: __expectBoolean(output.AutoDeploy),
    ClientCertificateId: __expectString(output.ClientCertificateId),
    CreatedDate: __expectString(output.CreatedDate),
    DefaultRouteSettings:
      output.DefaultRouteSettings !== undefined && output.DefaultRouteSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.DefaultRouteSettings, context)
        : undefined,
    DeploymentId: __expectString(output.DeploymentId),
    Description: __expectString(output.Description),
    LastDeploymentStatusMessage: __expectString(output.LastDeploymentStatusMessage),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    RouteSettings:
      output.RouteSettings !== undefined && output.RouteSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.RouteSettings, context)
        : undefined,
    StageName: __expectString(output.StageName),
    StageVariables:
      output.StageVariables !== undefined && output.StageVariables !== null
        ? deserializeAws_restJson1FieldMap(output.StageVariables, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupDetails => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    HealthCheckGracePeriod: __expectInt32(output.HealthCheckGracePeriod),
    HealthCheckType: __expectString(output.HealthCheckType),
    LaunchConfigurationName: __expectString(output.LaunchConfigurationName),
    LoadBalancerNames:
      output.LoadBalancerNames !== undefined && output.LoadBalancerNames !== null
        ? deserializeAws_restJson1StringList(output.LoadBalancerNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails => {
  return {
    DeviceName: __expectString(output.DeviceName),
    Ebs:
      output.Ebs !== undefined && output.Ebs !== null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails(output.Ebs, context)
        : undefined,
    NoDevice: __expectBoolean(output.NoDevice),
    VirtualName: __expectString(output.VirtualName),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails => {
  return {
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    Encrypted: __expectBoolean(output.Encrypted),
    Iops: __expectInt32(output.Iops),
    SnapshotId: __expectString(output.SnapshotId),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationDetails => {
  return {
    AssociatePublicIpAddress: __expectBoolean(output.AssociatePublicIpAddress),
    BlockDeviceMappings:
      output.BlockDeviceMappings !== undefined && output.BlockDeviceMappings !== null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList(
            output.BlockDeviceMappings,
            context
          )
        : undefined,
    ClassicLinkVpcId: __expectString(output.ClassicLinkVpcId),
    ClassicLinkVpcSecurityGroups:
      output.ClassicLinkVpcSecurityGroups !== undefined && output.ClassicLinkVpcSecurityGroups !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.ClassicLinkVpcSecurityGroups, context)
        : undefined,
    CreatedTime: __expectString(output.CreatedTime),
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    IamInstanceProfile: __expectString(output.IamInstanceProfile),
    ImageId: __expectString(output.ImageId),
    InstanceMonitoring:
      output.InstanceMonitoring !== undefined && output.InstanceMonitoring !== null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails(
            output.InstanceMonitoring,
            context
          )
        : undefined,
    InstanceType: __expectString(output.InstanceType),
    KernelId: __expectString(output.KernelId),
    KeyName: __expectString(output.KeyName),
    LaunchConfigurationName: __expectString(output.LaunchConfigurationName),
    PlacementTenancy: __expectString(output.PlacementTenancy),
    RamdiskId: __expectString(output.RamdiskId),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroups, context)
        : undefined,
    SpotPrice: __expectString(output.SpotPrice),
    UserData: __expectString(output.UserData),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDetails = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDetails => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt: __expectString(output.CreatedAt),
    DomainName: __expectString(output.DomainName),
    DomainValidationOptions:
      output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
            output.DomainValidationOptions,
            context
          )
        : undefined,
    ExtendedKeyUsages:
      output.ExtendedKeyUsages !== undefined && output.ExtendedKeyUsages !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(output.ExtendedKeyUsages, context)
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    ImportedAt: __expectString(output.ImportedAt),
    InUseBy:
      output.InUseBy !== undefined && output.InUseBy !== null
        ? deserializeAws_restJson1StringList(output.InUseBy, context)
        : undefined,
    IssuedAt: __expectString(output.IssuedAt),
    Issuer: __expectString(output.Issuer),
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages:
      output.KeyUsages !== undefined && output.KeyUsages !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(output.KeyUsages, context)
        : undefined,
    NotAfter: __expectString(output.NotAfter),
    NotBefore: __expectString(output.NotBefore),
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateOptions(output.Options, context)
        : undefined,
    RenewalEligibility: __expectString(output.RenewalEligibility),
    RenewalSummary:
      output.RenewalSummary !== undefined && output.RenewalSummary !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(output.RenewalSummary, context)
        : undefined,
    Serial: __expectString(output.Serial),
    SignatureAlgorithm: __expectString(output.SignatureAlgorithm),
    Status: __expectString(output.Status),
    Subject: __expectString(output.Subject),
    SubjectAlternativeNames:
      output.SubjectAlternativeNames !== undefined && output.SubjectAlternativeNames !== null
        ? deserializeAws_restJson1StringList(output.SubjectAlternativeNames, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDomainValidationOption => {
  return {
    DomainName: __expectString(output.DomainName),
    ResourceRecord:
      output.ResourceRecord !== undefined && output.ResourceRecord !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(output.ResourceRecord, context)
        : undefined,
    ValidationDomain: __expectString(output.ValidationDomain),
    ValidationEmails:
      output.ValidationEmails !== undefined && output.ValidationEmails !== null
        ? deserializeAws_restJson1StringList(output.ValidationEmails, context)
        : undefined,
    ValidationMethod: __expectString(output.ValidationMethod),
    ValidationStatus: __expectString(output.ValidationStatus),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDomainValidationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
};

const deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateExtendedKeyUsage => {
  return {
    Name: __expectString(output.Name),
    OId: __expectString(output.OId),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateExtendedKeyUsage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
};

const deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateKeyUsage => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateKeyUsage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
};

const deserializeAws_restJson1AwsCertificateManagerCertificateOptions = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateOptions => {
  return {
    CertificateTransparencyLoggingPreference: __expectString(output.CertificateTransparencyLoggingPreference),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateRenewalSummary => {
  return {
    DomainValidationOptions:
      output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
            output.DomainValidationOptions,
            context
          )
        : undefined,
    RenewalStatus: __expectString(output.RenewalStatus),
    RenewalStatusReason: __expectString(output.RenewalStatusReason),
    UpdatedAt: __expectString(output.UpdatedAt),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateResourceRecord => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehavior => {
  return {
    ViewerProtocolPolicy: __expectString(output.ViewerProtocolPolicy),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehaviors => {
  return {
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehavior[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
};

const deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDefaultCacheBehavior => {
  return {
    ViewerProtocolPolicy: __expectString(output.ViewerProtocolPolicy),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDetails => {
  return {
    CacheBehaviors:
      output.CacheBehaviors !== undefined && output.CacheBehaviors !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(output.CacheBehaviors, context)
        : undefined,
    DefaultCacheBehavior:
      output.DefaultCacheBehavior !== undefined && output.DefaultCacheBehavior !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(output.DefaultCacheBehavior, context)
        : undefined,
    DefaultRootObject: __expectString(output.DefaultRootObject),
    DomainName: __expectString(output.DomainName),
    ETag: __expectString(output.ETag),
    LastModifiedTime: __expectString(output.LastModifiedTime),
    Logging:
      output.Logging !== undefined && output.Logging !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionLogging(output.Logging, context)
        : undefined,
    OriginGroups:
      output.OriginGroups !== undefined && output.OriginGroups !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups(output.OriginGroups, context)
        : undefined,
    Origins:
      output.Origins !== undefined && output.Origins !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOrigins(output.Origins, context)
        : undefined,
    Status: __expectString(output.Status),
    WebAclId: __expectString(output.WebAclId),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  return {
    Bucket: __expectString(output.Bucket),
    Enabled: __expectBoolean(output.Enabled),
    IncludeCookies: __expectBoolean(output.IncludeCookies),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroup => {
  return {
    FailoverCriteria:
      output.FailoverCriteria !== undefined && output.FailoverCriteria !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(output.FailoverCriteria, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroupFailover => {
  return {
    StatusCodes:
      output.StatusCodes !== undefined && output.StatusCodes !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(output.StatusCodes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroupFailoverStatusCodes => {
  return {
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(output.Items, context)
        : undefined,
    Quantity: __expectInt32(output.Quantity),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroups => {
  return {
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem => {
  return {
    DomainName: __expectString(output.DomainName),
    Id: __expectString(output.Id),
    OriginPath: __expectString(output.OriginPath),
    S3OriginConfig:
      output.S3OriginConfig !== undefined && output.S3OriginConfig !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(output.S3OriginConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
};

const deserializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOrigins => {
  return {
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginS3OriginConfig => {
  return {
    OriginAccessIdentity: __expectString(output.OriginAccessIdentity),
  } as any;
};

const deserializeAws_restJson1AwsCloudTrailTrailDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudTrailTrailDetails => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    HasCustomEventSelectors: __expectBoolean(output.HasCustomEventSelectors),
    HomeRegion: __expectString(output.HomeRegion),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailArn: __expectString(output.TrailArn),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectDetails => {
  return {
    EncryptionKey: __expectString(output.EncryptionKey),
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironment(output.Environment, context)
        : undefined,
    Name: __expectString(output.Name),
    ServiceRole: __expectString(output.ServiceRole),
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectSource(output.Source, context)
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironment => {
  return {
    Certificate: __expectString(output.Certificate),
    ImagePullCredentialsType: __expectString(output.ImagePullCredentialsType),
    RegistryCredential:
      output.RegistryCredential !== undefined && output.RegistryCredential !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(output.RegistryCredential, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentRegistryCredential => {
  return {
    Credential: __expectString(output.Credential),
    CredentialProvider: __expectString(output.CredentialProvider),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectSource = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectSource => {
  return {
    GitCloneDepth: __expectInt32(output.GitCloneDepth),
    InsecureSsl: __expectBoolean(output.InsecureSsl),
    Location: __expectString(output.Location),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectVpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsCorsConfiguration = (output: any, context: __SerdeContext): AwsCorsConfiguration => {
  return {
    AllowCredentials: __expectBoolean(output.AllowCredentials),
    AllowHeaders:
      output.AllowHeaders !== undefined && output.AllowHeaders !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowHeaders, context)
        : undefined,
    AllowMethods:
      output.AllowMethods !== undefined && output.AllowMethods !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowMethods, context)
        : undefined,
    AllowOrigins:
      output.AllowOrigins !== undefined && output.AllowOrigins !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowOrigins, context)
        : undefined,
    ExposeHeaders:
      output.ExposeHeaders !== undefined && output.ExposeHeaders !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.ExposeHeaders, context)
        : undefined,
    MaxAge: __expectInt32(output.MaxAge),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableAttributeDefinition => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableAttributeDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableBillingModeSummary => {
  return {
    BillingMode: __expectString(output.BillingMode),
    LastUpdateToPayPerRequestDateTime: __expectString(output.LastUpdateToPayPerRequestDateTime),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableDetails = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableDetails => {
  return {
    AttributeDefinitions:
      output.AttributeDefinitions !== undefined && output.AttributeDefinitions !== null
        ? deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(output.AttributeDefinitions, context)
        : undefined,
    BillingModeSummary:
      output.BillingModeSummary !== undefined && output.BillingModeSummary !== null
        ? deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary(output.BillingModeSummary, context)
        : undefined,
    CreationDateTime: __expectString(output.CreationDateTime),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
        ? deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
        : undefined,
    GlobalTableVersion: __expectString(output.GlobalTableVersion),
    ItemCount: __expectInt32(output.ItemCount),
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    LatestStreamArn: __expectString(output.LatestStreamArn),
    LatestStreamLabel: __expectString(output.LatestStreamLabel),
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
        ? deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(output.LocalSecondaryIndexes, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
    Replicas:
      output.Replicas !== undefined && output.Replicas !== null
        ? deserializeAws_restJson1AwsDynamoDbTableReplicaList(output.Replicas, context)
        : undefined,
    RestoreSummary:
      output.RestoreSummary !== undefined && output.RestoreSummary !== null
        ? deserializeAws_restJson1AwsDynamoDbTableRestoreSummary(output.RestoreSummary, context)
        : undefined,
    SseDescription:
      output.SseDescription !== undefined && output.SseDescription !== null
        ? deserializeAws_restJson1AwsDynamoDbTableSseDescription(output.SseDescription, context)
        : undefined,
    StreamSpecification:
      output.StreamSpecification !== undefined && output.StreamSpecification !== null
        ? deserializeAws_restJson1AwsDynamoDbTableStreamSpecification(output.StreamSpecification, context)
        : undefined,
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
    TableSizeBytes: __expectLong(output.TableSizeBytes),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableGlobalSecondaryIndex => {
  return {
    Backfilling: __expectBoolean(output.Backfilling),
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    IndexStatus: __expectString(output.IndexStatus),
    ItemCount: __expectInt32(output.ItemCount),
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableGlobalSecondaryIndex[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableKeySchema = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableKeySchema => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableKeySchemaList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableKeySchema[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableLocalSecondaryIndex => {
  return {
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableLocalSecondaryIndex[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableProjection = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProjection => {
  return {
    NonKeyAttributes:
      output.NonKeyAttributes !== undefined && output.NonKeyAttributes !== null
        ? deserializeAws_restJson1StringList(output.NonKeyAttributes, context)
        : undefined,
    ProjectionType: __expectString(output.ProjectionType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughput => {
  return {
    LastDecreaseDateTime: __expectString(output.LastDecreaseDateTime),
    LastIncreaseDateTime: __expectString(output.LastIncreaseDateTime),
    NumberOfDecreasesToday: __expectInt32(output.NumberOfDecreasesToday),
    ReadCapacityUnits: __expectInt32(output.ReadCapacityUnits),
    WriteCapacityUnits: __expectInt32(output.WriteCapacityUnits),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughputOverride => {
  return {
    ReadCapacityUnits: __expectInt32(output.ReadCapacityUnits),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplica = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplica => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
        ? deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
    RegionName: __expectString(output.RegionName),
    ReplicaStatus: __expectString(output.ReplicaStatus),
    ReplicaStatusDescription: __expectString(output.ReplicaStatusDescription),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplicaGlobalSecondaryIndex => {
  return {
    IndexName: __expectString(output.IndexName),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplicaGlobalSecondaryIndex[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplica[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
};

const deserializeAws_restJson1AwsDynamoDbTableRestoreSummary = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableRestoreSummary => {
  return {
    RestoreDateTime: __expectString(output.RestoreDateTime),
    RestoreInProgress: __expectBoolean(output.RestoreInProgress),
    SourceBackupArn: __expectString(output.SourceBackupArn),
    SourceTableArn: __expectString(output.SourceTableArn),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableSseDescription = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableSseDescription => {
  return {
    InaccessibleEncryptionDateTime: __expectString(output.InaccessibleEncryptionDateTime),
    KmsMasterKeyArn: __expectString(output.KmsMasterKeyArn),
    SseType: __expectString(output.SseType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableStreamSpecification = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableStreamSpecification => {
  return {
    StreamEnabled: __expectBoolean(output.StreamEnabled),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

const deserializeAws_restJson1AwsEc2EipDetails = (output: any, context: __SerdeContext): AwsEc2EipDetails => {
  return {
    AllocationId: __expectString(output.AllocationId),
    AssociationId: __expectString(output.AssociationId),
    Domain: __expectString(output.Domain),
    InstanceId: __expectString(output.InstanceId),
    NetworkBorderGroup: __expectString(output.NetworkBorderGroup),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfaceOwnerId: __expectString(output.NetworkInterfaceOwnerId),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
    PublicIp: __expectString(output.PublicIp),
    PublicIpv4Pool: __expectString(output.PublicIpv4Pool),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    IamInstanceProfileArn: __expectString(output.IamInstanceProfileArn),
    ImageId: __expectString(output.ImageId),
    IpV4Addresses:
      output.IpV4Addresses !== undefined && output.IpV4Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV4Addresses, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV6Addresses, context)
        : undefined,
    KeyName: __expectString(output.KeyName),
    LaunchedAt: __expectString(output.LaunchedAt),
    NetworkInterfaces:
      output.NetworkInterfaces !== undefined && output.NetworkInterfaces !== null
        ? deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesList(output.NetworkInterfaces, context)
        : undefined,
    SubnetId: __expectString(output.SubnetId),
    Type: __expectString(output.Type),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceNetworkInterfacesDetails => {
  return {
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesList = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceNetworkInterfacesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2NetworkAclAssociation = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclAssociation => {
  return {
    NetworkAclAssociationId: __expectString(output.NetworkAclAssociationId),
    NetworkAclId: __expectString(output.NetworkAclId),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclAssociationList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2NetworkAclDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclDetails => {
  return {
    Associations:
      output.Associations !== undefined && output.Associations !== null
        ? deserializeAws_restJson1AwsEc2NetworkAclAssociationList(output.Associations, context)
        : undefined,
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_restJson1AwsEc2NetworkAclEntryList(output.Entries, context)
        : undefined,
    IsDefault: __expectBoolean(output.IsDefault),
    NetworkAclId: __expectString(output.NetworkAclId),
    OwnerId: __expectString(output.OwnerId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclEntry = (output: any, context: __SerdeContext): AwsEc2NetworkAclEntry => {
  return {
    CidrBlock: __expectString(output.CidrBlock),
    Egress: __expectBoolean(output.Egress),
    IcmpTypeCode:
      output.IcmpTypeCode !== undefined && output.IcmpTypeCode !== null
        ? deserializeAws_restJson1IcmpTypeCode(output.IcmpTypeCode, context)
        : undefined,
    Ipv6CidrBlock: __expectString(output.Ipv6CidrBlock),
    PortRange:
      output.PortRange !== undefined && output.PortRange !== null
        ? deserializeAws_restJson1PortRangeFromTo(output.PortRange, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    RuleAction: __expectString(output.RuleAction),
    RuleNumber: __expectInt32(output.RuleNumber),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclEntryList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceAttachment => {
  return {
    AttachTime: __expectString(output.AttachTime),
    AttachmentId: __expectString(output.AttachmentId),
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    DeviceIndex: __expectInt32(output.DeviceIndex),
    InstanceId: __expectString(output.InstanceId),
    InstanceOwnerId: __expectString(output.InstanceOwnerId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceDetails => {
  return {
    Attachment:
      output.Attachment !== undefined && output.Attachment !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment(output.Attachment, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(output.IpV6Addresses, context)
        : undefined,
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    PrivateIpAddresses:
      output.PrivateIpAddresses !== undefined && output.PrivateIpAddresses !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(output.PrivateIpAddresses, context)
        : undefined,
    PublicDnsName: __expectString(output.PublicDnsName),
    PublicIp: __expectString(output.PublicIp),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(output.SecurityGroups, context)
        : undefined,
    SourceDestCheck: __expectBoolean(output.SourceDestCheck),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceIpV6AddressDetail => {
  return {
    IpV6Address: __expectString(output.IpV6Address),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceIpV6AddressDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfacePrivateIpAddressDetail => {
  return {
    PrivateDnsName: __expectString(output.PrivateDnsName),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfacePrivateIpAddressDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SecurityGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupDetails => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    IpPermissions:
      output.IpPermissions !== undefined && output.IpPermissions !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissions, context)
        : undefined,
    IpPermissionsEgress:
      output.IpPermissionsEgress !== undefined && output.IpPermissionsEgress !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissionsEgress, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission => {
  return {
    FromPort: __expectInt32(output.FromPort),
    IpProtocol: __expectString(output.IpProtocol),
    IpRanges:
      output.IpRanges !== undefined && output.IpRanges !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList(output.IpRanges, context)
        : undefined,
    Ipv6Ranges:
      output.Ipv6Ranges !== undefined && output.Ipv6Ranges !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(output.Ipv6Ranges, context)
        : undefined,
    PrefixListIds:
      output.PrefixListIds !== undefined && output.PrefixListIds !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(output.PrefixListIds, context)
        : undefined,
    ToPort: __expectInt32(output.ToPort),
    UserIdGroupPairs:
      output.UserIdGroupPairs !== undefined && output.UserIdGroupPairs !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(output.UserIdGroupPairs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange => {
  return {
    CidrIp: __expectString(output.CidrIp),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range => {
  return {
    CidrIpv6: __expectString(output.CidrIpv6),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId => {
  return {
    PrefixListId: __expectString(output.PrefixListId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    PeeringStatus: __expectString(output.PeeringStatus),
    UserId: __expectString(output.UserId),
    VpcId: __expectString(output.VpcId),
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2SubnetDetails = (output: any, context: __SerdeContext): AwsEc2SubnetDetails => {
  return {
    AssignIpv6AddressOnCreation: __expectBoolean(output.AssignIpv6AddressOnCreation),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailableIpAddressCount: __expectInt32(output.AvailableIpAddressCount),
    CidrBlock: __expectString(output.CidrBlock),
    DefaultForAz: __expectBoolean(output.DefaultForAz),
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    MapPublicIpOnLaunch: __expectBoolean(output.MapPublicIpOnLaunch),
    OwnerId: __expectString(output.OwnerId),
    State: __expectString(output.State),
    SubnetArn: __expectString(output.SubnetArn),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2VolumeAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment => {
  return {
    AttachTime: __expectString(output.AttachTime),
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    InstanceId: __expectString(output.InstanceId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEc2VolumeAttachmentList = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2VolumeDetails = (output: any, context: __SerdeContext): AwsEc2VolumeDetails => {
  return {
    Attachments:
      output.Attachments !== undefined && output.Attachments !== null
        ? deserializeAws_restJson1AwsEc2VolumeAttachmentList(output.Attachments, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    Encrypted: __expectBoolean(output.Encrypted),
    KmsKeyId: __expectString(output.KmsKeyId),
    Size: __expectInt32(output.Size),
    SnapshotId: __expectString(output.SnapshotId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcDetails = (output: any, context: __SerdeContext): AwsEc2VpcDetails => {
  return {
    CidrBlockAssociationSet:
      output.CidrBlockAssociationSet !== undefined && output.CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1CidrBlockAssociationList(output.CidrBlockAssociationSet, context)
        : undefined,
    DhcpOptionsId: __expectString(output.DhcpOptionsId),
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionDetails => {
  return {
    Category: __expectString(output.Category),
    CustomerGatewayConfiguration: __expectString(output.CustomerGatewayConfiguration),
    CustomerGatewayId: __expectString(output.CustomerGatewayId),
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AwsEc2VpnConnectionOptionsDetails(output.Options, context)
        : undefined,
    Routes:
      output.Routes !== undefined && output.Routes !== null
        ? deserializeAws_restJson1AwsEc2VpnConnectionRoutesList(output.Routes, context)
        : undefined,
    State: __expectString(output.State),
    TransitGatewayId: __expectString(output.TransitGatewayId),
    Type: __expectString(output.Type),
    VgwTelemetry:
      output.VgwTelemetry !== undefined && output.VgwTelemetry !== null
        ? deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList(output.VgwTelemetry, context)
        : undefined,
    VpnConnectionId: __expectString(output.VpnConnectionId),
    VpnGatewayId: __expectString(output.VpnGatewayId),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsDetails => {
  return {
    StaticRoutesOnly: __expectBoolean(output.StaticRoutesOnly),
    TunnelOptions:
      output.TunnelOptions !== undefined && output.TunnelOptions !== null
        ? deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList(output.TunnelOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsTunnelOptionsDetails => {
  return {
    DpdTimeoutSeconds: __expectInt32(output.DpdTimeoutSeconds),
    IkeVersions:
      output.IkeVersions !== undefined && output.IkeVersions !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.IkeVersions, context)
        : undefined,
    OutsideIpAddress: __expectString(output.OutsideIpAddress),
    Phase1DhGroupNumbers:
      output.Phase1DhGroupNumbers !== undefined && output.Phase1DhGroupNumbers !== null
        ? deserializeAws_restJson1IntegerList(output.Phase1DhGroupNumbers, context)
        : undefined,
    Phase1EncryptionAlgorithms:
      output.Phase1EncryptionAlgorithms !== undefined && output.Phase1EncryptionAlgorithms !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase1EncryptionAlgorithms, context)
        : undefined,
    Phase1IntegrityAlgorithms:
      output.Phase1IntegrityAlgorithms !== undefined && output.Phase1IntegrityAlgorithms !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase1IntegrityAlgorithms, context)
        : undefined,
    Phase1LifetimeSeconds: __expectInt32(output.Phase1LifetimeSeconds),
    Phase2DhGroupNumbers:
      output.Phase2DhGroupNumbers !== undefined && output.Phase2DhGroupNumbers !== null
        ? deserializeAws_restJson1IntegerList(output.Phase2DhGroupNumbers, context)
        : undefined,
    Phase2EncryptionAlgorithms:
      output.Phase2EncryptionAlgorithms !== undefined && output.Phase2EncryptionAlgorithms !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase2EncryptionAlgorithms, context)
        : undefined,
    Phase2IntegrityAlgorithms:
      output.Phase2IntegrityAlgorithms !== undefined && output.Phase2IntegrityAlgorithms !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase2IntegrityAlgorithms, context)
        : undefined,
    Phase2LifetimeSeconds: __expectInt32(output.Phase2LifetimeSeconds),
    PreSharedKey: __expectString(output.PreSharedKey),
    RekeyFuzzPercentage: __expectInt32(output.RekeyFuzzPercentage),
    RekeyMarginTimeSeconds: __expectInt32(output.RekeyMarginTimeSeconds),
    ReplayWindowSize: __expectInt32(output.ReplayWindowSize),
    TunnelInsideCidr: __expectString(output.TunnelInsideCidr),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2VpnConnectionRoutesDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionRoutesDetails => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionRoutesList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionRoutesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionRoutesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionVgwTelemetryDetails => {
  return {
    AcceptedRouteCount: __expectInt32(output.AcceptedRouteCount),
    CertificateArn: __expectString(output.CertificateArn),
    LastStatusChange: __expectString(output.LastStatusChange),
    OutsideIpAddress: __expectString(output.OutsideIpAddress),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionVgwTelemetryDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcrContainerImageDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerImageDetails => {
  return {
    Architecture: __expectString(output.Architecture),
    ImageDigest: __expectString(output.ImageDigest),
    ImagePublishedAt: __expectString(output.ImagePublishedAt),
    ImageTags:
      output.ImageTags !== undefined && output.ImageTags !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.ImageTags, context)
        : undefined,
    RegistryId: __expectString(output.RegistryId),
    RepositoryName: __expectString(output.RepositoryName),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterClusterSettingsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterClusterSettingsDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterClusterSettingsList = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterClusterSettingsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsClusterClusterSettingsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsClusterConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationDetails => {
  return {
    ExecuteCommandConfiguration:
      output.ExecuteCommandConfiguration !== undefined && output.ExecuteCommandConfiguration !== null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails(
            output.ExecuteCommandConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationExecuteCommandConfigurationDetails => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    LogConfiguration:
      output.LogConfiguration !== undefined && output.LogConfiguration !== null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(
            output.LogConfiguration,
            context
          )
        : undefined,
    Logging: __expectString(output.Logging),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails => {
  return {
    CloudWatchEncryptionEnabled: __expectBoolean(output.CloudWatchEncryptionEnabled),
    CloudWatchLogGroupName: __expectString(output.CloudWatchLogGroupName),
    S3BucketName: __expectString(output.S3BucketName),
    S3EncryptionEnabled: __expectBoolean(output.S3EncryptionEnabled),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterDefaultCapacityProviderStrategyDetails => {
  return {
    Base: __expectInt32(output.Base),
    CapacityProvider: __expectString(output.CapacityProvider),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterDefaultCapacityProviderStrategyDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsClusterDetails = (output: any, context: __SerdeContext): AwsEcsClusterDetails => {
  return {
    CapacityProviders:
      output.CapacityProviders !== undefined && output.CapacityProviders !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.CapacityProviders, context)
        : undefined,
    ClusterSettings:
      output.ClusterSettings !== undefined && output.ClusterSettings !== null
        ? deserializeAws_restJson1AwsEcsClusterClusterSettingsList(output.ClusterSettings, context)
        : undefined,
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationDetails(output.Configuration, context)
        : undefined,
    DefaultCapacityProviderStrategy:
      output.DefaultCapacityProviderStrategy !== undefined && output.DefaultCapacityProviderStrategy !== null
        ? deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList(
            output.DefaultCapacityProviderStrategy,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceCapacityProviderStrategyDetails => {
  return {
    Base: __expectInt32(output.Base),
    CapacityProvider: __expectString(output.CapacityProvider),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceCapacityProviderStrategyDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails => {
  return {
    Enable: __expectBoolean(output.Enable),
    Rollback: __expectBoolean(output.Rollback),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentConfigurationDetails => {
  return {
    DeploymentCircuitBreaker:
      output.DeploymentCircuitBreaker !== undefined && output.DeploymentCircuitBreaker !== null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(
            output.DeploymentCircuitBreaker,
            context
          )
        : undefined,
    MaximumPercent: __expectInt32(output.MaximumPercent),
    MinimumHealthyPercent: __expectInt32(output.MinimumHealthyPercent),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDeploymentControllerDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentControllerDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDetails = (output: any, context: __SerdeContext): AwsEcsServiceDetails => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy !== undefined && output.CapacityProviderStrategy !== null
        ? deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList(output.CapacityProviderStrategy, context)
        : undefined,
    Cluster: __expectString(output.Cluster),
    DeploymentConfiguration:
      output.DeploymentConfiguration !== undefined && output.DeploymentConfiguration !== null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails(output.DeploymentConfiguration, context)
        : undefined,
    DeploymentController:
      output.DeploymentController !== undefined && output.DeploymentController !== null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentControllerDetails(output.DeploymentController, context)
        : undefined,
    DesiredCount: __expectInt32(output.DesiredCount),
    EnableEcsManagedTags: __expectBoolean(output.EnableEcsManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    HealthCheckGracePeriodSeconds: __expectInt32(output.HealthCheckGracePeriodSeconds),
    LaunchType: __expectString(output.LaunchType),
    LoadBalancers:
      output.LoadBalancers !== undefined && output.LoadBalancers !== null
        ? deserializeAws_restJson1AwsEcsServiceLoadBalancersList(output.LoadBalancers, context)
        : undefined,
    Name: __expectString(output.Name),
    NetworkConfiguration:
      output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
        ? deserializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails(output.NetworkConfiguration, context)
        : undefined,
    PlacementConstraints:
      output.PlacementConstraints !== undefined && output.PlacementConstraints !== null
        ? deserializeAws_restJson1AwsEcsServicePlacementConstraintsList(output.PlacementConstraints, context)
        : undefined,
    PlacementStrategies:
      output.PlacementStrategies !== undefined && output.PlacementStrategies !== null
        ? deserializeAws_restJson1AwsEcsServicePlacementStrategiesList(output.PlacementStrategies, context)
        : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    Role: __expectString(output.Role),
    SchedulingStrategy: __expectString(output.SchedulingStrategy),
    ServiceArn: __expectString(output.ServiceArn),
    ServiceName: __expectString(output.ServiceName),
    ServiceRegistries:
      output.ServiceRegistries !== undefined && output.ServiceRegistries !== null
        ? deserializeAws_restJson1AwsEcsServiceServiceRegistriesList(output.ServiceRegistries, context)
        : undefined,
    TaskDefinition: __expectString(output.TaskDefinition),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceLoadBalancersDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceLoadBalancersDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ContainerPort: __expectInt32(output.ContainerPort),
    LoadBalancerName: __expectString(output.LoadBalancerName),
    TargetGroupArn: __expectString(output.TargetGroupArn),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceLoadBalancersList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceLoadBalancersDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceLoadBalancersDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroups, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceNetworkConfigurationDetails => {
  return {
    AwsVpcConfiguration:
      output.AwsVpcConfiguration !== undefined && output.AwsVpcConfiguration !== null
        ? deserializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(
            output.AwsVpcConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementConstraintsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementConstraintsDetails => {
  return {
    Expression: __expectString(output.Expression),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementConstraintsList = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementConstraintsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServicePlacementConstraintsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsServicePlacementStrategiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementStrategiesDetails => {
  return {
    Field: __expectString(output.Field),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementStrategiesList = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementStrategiesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServicePlacementStrategiesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsServiceServiceRegistriesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceServiceRegistriesDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ContainerPort: __expectInt32(output.ContainerPort),
    Port: __expectInt32(output.Port),
    RegistryArn: __expectString(output.RegistryArn),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceServiceRegistriesList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceServiceRegistriesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceServiceRegistriesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails => {
  return {
    Condition: __expectString(output.Condition),
    ContainerName: __expectString(output.ContainerName),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDetails => {
  return {
    Command:
      output.Command !== undefined && output.Command !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Command, context)
        : undefined,
    Cpu: __expectInt32(output.Cpu),
    DependsOn:
      output.DependsOn !== undefined && output.DependsOn !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList(output.DependsOn, context)
        : undefined,
    DisableNetworking: __expectBoolean(output.DisableNetworking),
    DnsSearchDomains:
      output.DnsSearchDomains !== undefined && output.DnsSearchDomains !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.DnsSearchDomains, context)
        : undefined,
    DnsServers:
      output.DnsServers !== undefined && output.DnsServers !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.DnsServers, context)
        : undefined,
    DockerLabels:
      output.DockerLabels !== undefined && output.DockerLabels !== null
        ? deserializeAws_restJson1FieldMap(output.DockerLabels, context)
        : undefined,
    DockerSecurityOptions:
      output.DockerSecurityOptions !== undefined && output.DockerSecurityOptions !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.DockerSecurityOptions, context)
        : undefined,
    EntryPoint:
      output.EntryPoint !== undefined && output.EntryPoint !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.EntryPoint, context)
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList(output.Environment, context)
        : undefined,
    EnvironmentFiles:
      output.EnvironmentFiles !== undefined && output.EnvironmentFiles !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(
            output.EnvironmentFiles,
            context
          )
        : undefined,
    Essential: __expectBoolean(output.Essential),
    ExtraHosts:
      output.ExtraHosts !== undefined && output.ExtraHosts !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList(output.ExtraHosts, context)
        : undefined,
    FirelensConfiguration:
      output.FirelensConfiguration !== undefined && output.FirelensConfiguration !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(
            output.FirelensConfiguration,
            context
          )
        : undefined,
    HealthCheck:
      output.HealthCheck !== undefined && output.HealthCheck !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(
            output.HealthCheck,
            context
          )
        : undefined,
    Hostname: __expectString(output.Hostname),
    Image: __expectString(output.Image),
    Interactive: __expectBoolean(output.Interactive),
    Links:
      output.Links !== undefined && output.Links !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Links, context)
        : undefined,
    LinuxParameters:
      output.LinuxParameters !== undefined && output.LinuxParameters !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(
            output.LinuxParameters,
            context
          )
        : undefined,
    LogConfiguration:
      output.LogConfiguration !== undefined && output.LogConfiguration !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(
            output.LogConfiguration,
            context
          )
        : undefined,
    Memory: __expectInt32(output.Memory),
    MemoryReservation: __expectInt32(output.MemoryReservation),
    MountPoints:
      output.MountPoints !== undefined && output.MountPoints !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList(output.MountPoints, context)
        : undefined,
    Name: __expectString(output.Name),
    PortMappings:
      output.PortMappings !== undefined && output.PortMappings !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList(output.PortMappings, context)
        : undefined,
    Privileged: __expectBoolean(output.Privileged),
    PseudoTerminal: __expectBoolean(output.PseudoTerminal),
    ReadonlyRootFilesystem: __expectBoolean(output.ReadonlyRootFilesystem),
    RepositoryCredentials:
      output.RepositoryCredentials !== undefined && output.RepositoryCredentials !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(
            output.RepositoryCredentials,
            context
          )
        : undefined,
    ResourceRequirements:
      output.ResourceRequirements !== undefined && output.ResourceRequirements !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(
            output.ResourceRequirements,
            context
          )
        : undefined,
    Secrets:
      output.Secrets !== undefined && output.Secrets !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList(output.Secrets, context)
        : undefined,
    StartTimeout: __expectInt32(output.StartTimeout),
    StopTimeout: __expectInt32(output.StopTimeout),
    SystemControls:
      output.SystemControls !== undefined && output.SystemControls !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList(
            output.SystemControls,
            context
          )
        : undefined,
    Ulimits:
      output.Ulimits !== undefined && output.Ulimits !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList(output.Ulimits, context)
        : undefined,
    User: __expectString(output.User),
    VolumesFrom:
      output.VolumesFrom !== undefined && output.VolumesFrom !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList(output.VolumesFrom, context)
        : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails => {
  return {
    Hostname: __expectString(output.Hostname),
    IpAddress: __expectString(output.IpAddress),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1FieldMap(output.Options, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails => {
  return {
    Command:
      output.Command !== undefined && output.Command !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Command, context)
        : undefined,
    Interval: __expectInt32(output.Interval),
    Retries: __expectInt32(output.Retries),
    StartPeriod: __expectInt32(output.StartPeriod),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails => {
  return {
    Add:
      output.Add !== undefined && output.Add !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Add, context)
        : undefined,
    Drop:
      output.Drop !== undefined && output.Drop !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Drop, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails => {
  return {
    Capabilities:
      output.Capabilities !== undefined && output.Capabilities !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(
            output.Capabilities,
            context
          )
        : undefined,
    Devices:
      output.Devices !== undefined && output.Devices !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(
            output.Devices,
            context
          )
        : undefined,
    InitProcessEnabled: __expectBoolean(output.InitProcessEnabled),
    MaxSwap: __expectInt32(output.MaxSwap),
    SharedMemorySize: __expectInt32(output.SharedMemorySize),
    Swappiness: __expectInt32(output.Swappiness),
    Tmpfs:
      output.Tmpfs !== undefined && output.Tmpfs !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(
            output.Tmpfs,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    HostPath: __expectString(output.HostPath),
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    MountOptions:
      output.MountOptions !== undefined && output.MountOptions !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.MountOptions, context)
        : undefined,
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails => {
  return {
    LogDriver: __expectString(output.LogDriver),
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1FieldMap(output.Options, context)
        : undefined,
    SecretOptions:
      output.SecretOptions !== undefined && output.SecretOptions !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(
            output.SecretOptions,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails => {
  return {
    Name: __expectString(output.Name),
    ValueFrom: __expectString(output.ValueFrom),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    ReadOnly: __expectBoolean(output.ReadOnly),
    SourceVolume: __expectString(output.SourceVolume),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails => {
  return {
    ContainerPort: __expectInt32(output.ContainerPort),
    HostPort: __expectInt32(output.HostPort),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails => {
  return {
    CredentialsParameter: __expectString(output.CredentialsParameter),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails => {
  return {
    Name: __expectString(output.Name),
    ValueFrom: __expectString(output.ValueFrom),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails => {
  return {
    Namespace: __expectString(output.Namespace),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails => {
  return {
    HardLimit: __expectInt32(output.HardLimit),
    Name: __expectString(output.Name),
    SoftLimit: __expectInt32(output.SoftLimit),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails => {
  return {
    ReadOnly: __expectBoolean(output.ReadOnly),
    SourceContainer: __expectString(output.SourceContainer),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionDetails => {
  return {
    ContainerDefinitions:
      output.ContainerDefinitions !== undefined && output.ContainerDefinitions !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList(output.ContainerDefinitions, context)
        : undefined,
    Cpu: __expectString(output.Cpu),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    Family: __expectString(output.Family),
    InferenceAccelerators:
      output.InferenceAccelerators !== undefined && output.InferenceAccelerators !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList(output.InferenceAccelerators, context)
        : undefined,
    IpcMode: __expectString(output.IpcMode),
    Memory: __expectString(output.Memory),
    NetworkMode: __expectString(output.NetworkMode),
    PidMode: __expectString(output.PidMode),
    PlacementConstraints:
      output.PlacementConstraints !== undefined && output.PlacementConstraints !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList(output.PlacementConstraints, context)
        : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration !== undefined && output.ProxyConfiguration !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails(output.ProxyConfiguration, context)
        : undefined,
    RequiresCompatibilities:
      output.RequiresCompatibilities !== undefined && output.RequiresCompatibilities !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.RequiresCompatibilities, context)
        : undefined,
    TaskRoleArn: __expectString(output.TaskRoleArn),
    Volumes:
      output.Volumes !== undefined && output.Volumes !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesList(output.Volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionInferenceAcceleratorsDetails => {
  return {
    DeviceName: __expectString(output.DeviceName),
    DeviceType: __expectString(output.DeviceType),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionInferenceAcceleratorsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionPlacementConstraintsDetails => {
  return {
    Expression: __expectString(output.Expression),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionPlacementConstraintsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ProxyConfigurationProperties:
      output.ProxyConfigurationProperties !== undefined && output.ProxyConfigurationProperties !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(
            output.ProxyConfigurationProperties,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDetails => {
  return {
    DockerVolumeConfiguration:
      output.DockerVolumeConfiguration !== undefined && output.DockerVolumeConfiguration !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(
            output.DockerVolumeConfiguration,
            context
          )
        : undefined,
    EfsVolumeConfiguration:
      output.EfsVolumeConfiguration !== undefined && output.EfsVolumeConfiguration !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(
            output.EfsVolumeConfiguration,
            context
          )
        : undefined,
    Host:
      output.Host !== undefined && output.Host !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails(output.Host, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails => {
  return {
    Autoprovision: __expectBoolean(output.Autoprovision),
    Driver: __expectString(output.Driver),
    DriverOpts:
      output.DriverOpts !== undefined && output.DriverOpts !== null
        ? deserializeAws_restJson1FieldMap(output.DriverOpts, context)
        : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_restJson1FieldMap(output.Labels, context)
        : undefined,
    Scope: __expectString(output.Scope),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails => {
  return {
    AccessPointId: __expectString(output.AccessPointId),
    Iam: __expectString(output.Iam),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails => {
  return {
    AuthorizationConfig:
      output.AuthorizationConfig !== undefined && output.AuthorizationConfig !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(
            output.AuthorizationConfig,
            context
          )
        : undefined,
    FilesystemId: __expectString(output.FilesystemId),
    RootDirectory: __expectString(output.RootDirectory),
    TransitEncryption: __expectString(output.TransitEncryption),
    TransitEncryptionPort: __expectInt32(output.TransitEncryptionPort),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesHostDetails => {
  return {
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentDetails => {
  return {
    ApplicationName: __expectString(output.ApplicationName),
    Cname: __expectString(output.Cname),
    DateCreated: __expectString(output.DateCreated),
    DateUpdated: __expectString(output.DateUpdated),
    Description: __expectString(output.Description),
    EndpointUrl: __expectString(output.EndpointUrl),
    EnvironmentArn: __expectString(output.EnvironmentArn),
    EnvironmentId: __expectString(output.EnvironmentId),
    EnvironmentLinks:
      output.EnvironmentLinks !== undefined && output.EnvironmentLinks !== null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(output.EnvironmentLinks, context)
        : undefined,
    EnvironmentName: __expectString(output.EnvironmentName),
    OptionSettings:
      output.OptionSettings !== undefined && output.OptionSettings !== null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(output.OptionSettings, context)
        : undefined,
    PlatformArn: __expectString(output.PlatformArn),
    SolutionStackName: __expectString(output.SolutionStackName),
    Status: __expectString(output.Status),
    Tier:
      output.Tier !== undefined && output.Tier !== null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(output.Tier, context)
        : undefined,
    VersionLabel: __expectString(output.VersionLabel),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentEnvironmentLink => {
  return {
    EnvironmentName: __expectString(output.EnvironmentName),
    LinkName: __expectString(output.LinkName),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentEnvironmentLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentOptionSetting => {
  return {
    Namespace: __expectString(output.Namespace),
    OptionName: __expectString(output.OptionName),
    ResourceName: __expectString(output.ResourceName),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentOptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentTier => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDetails => {
  return {
    AccessPolicies: __expectString(output.AccessPolicies),
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    DomainName: __expectString(output.DomainName),
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails(
            output.ElasticsearchClusterConfig,
            context
          )
        : undefined,
    ElasticsearchVersion: __expectString(output.ElasticsearchVersion),
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1FieldMap(output.Endpoints, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions !== undefined && output.ServiceSoftwareOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainVPCOptions(output.VPCOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDomainEndpointOptions => {
  return {
    EnforceHTTPS: __expectBoolean(output.EnforceHTTPS),
    TLSSecurityPolicy: __expectString(output.TLSSecurityPolicy),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainElasticsearchClusterConfigDetails => {
  return {
    DedicatedMasterCount: __expectInt32(output.DedicatedMasterCount),
    DedicatedMasterEnabled: __expectBoolean(output.DedicatedMasterEnabled),
    DedicatedMasterType: __expectString(output.DedicatedMasterType),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig !== undefined && output.ZoneAwarenessConfig !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(
            output.ZoneAwarenessConfig,
            context
          )
        : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails => {
  return {
    AvailabilityZoneCount: __expectInt32(output.AvailabilityZoneCount),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainEncryptionAtRestOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainLogPublishingOptions => {
  return {
    AuditLogs:
      output.AuditLogs !== undefined && output.AuditLogs !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.AuditLogs, context)
        : undefined,
    IndexSlowLogs:
      output.IndexSlowLogs !== undefined && output.IndexSlowLogs !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.IndexSlowLogs, context)
        : undefined,
    SearchSlowLogs:
      output.SearchSlowLogs !== undefined && output.SearchSlowLogs !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.SearchSlowLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainLogPublishingOptionsLogConfig => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainNodeToNodeEncryptionOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainServiceSoftwareOptions => {
  return {
    AutomatedUpdateDate: __expectString(output.AutomatedUpdateDate),
    Cancellable: __expectBoolean(output.Cancellable),
    CurrentVersion: __expectString(output.CurrentVersion),
    Description: __expectString(output.Description),
    NewVersion: __expectString(output.NewVersion),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainVPCOptions => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
        : undefined,
    VPCId: __expectString(output.VPCId),
  } as any;
};

const deserializeAws_restJson1AwsElbAppCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbAppCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsElbAppCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AwsElbAppCookieStickinessPolicy => {
  return {
    CookieName: __expectString(output.CookieName),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsElbLbCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbLbCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsElbLbCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AwsElbLbCookieStickinessPolicy => {
  return {
    CookieExpirationPeriod: __expectLong(output.CookieExpirationPeriod),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAccessLog = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAccessLog => {
  return {
    EmitInterval: __expectInt32(output.EmitInterval),
    Enabled: __expectBoolean(output.Enabled),
    S3BucketName: __expectString(output.S3BucketName),
    S3BucketPrefix: __expectString(output.S3BucketPrefix),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAttributes = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAttributes => {
  return {
    AccessLog:
      output.AccessLog !== undefined && output.AccessLog !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerAccessLog(output.AccessLog, context)
        : undefined,
    ConnectionDraining:
      output.ConnectionDraining !== undefined && output.ConnectionDraining !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining(output.ConnectionDraining, context)
        : undefined,
    ConnectionSettings:
      output.ConnectionSettings !== undefined && output.ConnectionSettings !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings(output.ConnectionSettings, context)
        : undefined,
    CrossZoneLoadBalancing:
      output.CrossZoneLoadBalancing !== undefined && output.CrossZoneLoadBalancing !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(output.CrossZoneLoadBalancing, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerBackendServerDescription => {
  return {
    InstancePort: __expectInt32(output.InstancePort),
    PolicyNames:
      output.PolicyNames !== undefined && output.PolicyNames !== null
        ? deserializeAws_restJson1StringList(output.PolicyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerBackendServerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
};

const deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerConnectionDraining => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerConnectionSettings => {
  return {
    IdleTimeout: __expectInt32(output.IdleTimeout),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerCrossZoneLoadBalancing => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerDetails => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    BackendServerDescriptions:
      output.BackendServerDescriptions !== undefined && output.BackendServerDescriptions !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(output.BackendServerDescriptions, context)
        : undefined,
    CanonicalHostedZoneName: __expectString(output.CanonicalHostedZoneName),
    CanonicalHostedZoneNameID: __expectString(output.CanonicalHostedZoneNameID),
    CreatedTime: __expectString(output.CreatedTime),
    DnsName: __expectString(output.DnsName),
    HealthCheck:
      output.HealthCheck !== undefined && output.HealthCheck !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerHealthCheck(output.HealthCheck, context)
        : undefined,
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerInstances(output.Instances, context)
        : undefined,
    ListenerDescriptions:
      output.ListenerDescriptions !== undefined && output.ListenerDescriptions !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(output.ListenerDescriptions, context)
        : undefined,
    LoadBalancerAttributes:
      output.LoadBalancerAttributes !== undefined && output.LoadBalancerAttributes !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerAttributes(output.LoadBalancerAttributes, context)
        : undefined,
    LoadBalancerName: __expectString(output.LoadBalancerName),
    Policies:
      output.Policies !== undefined && output.Policies !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerPolicies(output.Policies, context)
        : undefined,
    Scheme: __expectString(output.Scheme),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1StringList(output.SecurityGroups, context)
        : undefined,
    SourceSecurityGroup:
      output.SourceSecurityGroup !== undefined && output.SourceSecurityGroup !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(output.SourceSecurityGroup, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1StringList(output.Subnets, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerHealthCheck = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerHealthCheck => {
  return {
    HealthyThreshold: __expectInt32(output.HealthyThreshold),
    Interval: __expectInt32(output.Interval),
    Target: __expectString(output.Target),
    Timeout: __expectInt32(output.Timeout),
    UnhealthyThreshold: __expectInt32(output.UnhealthyThreshold),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerInstance = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerInstance => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerInstances = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
};

const deserializeAws_restJson1AwsElbLoadBalancerListener = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListener => {
  return {
    InstancePort: __expectInt32(output.InstancePort),
    InstanceProtocol: __expectString(output.InstanceProtocol),
    LoadBalancerPort: __expectInt32(output.LoadBalancerPort),
    Protocol: __expectString(output.Protocol),
    SslCertificateId: __expectString(output.SslCertificateId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerListenerDescription = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListenerDescription => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerListener(output.Listener, context)
        : undefined,
    PolicyNames:
      output.PolicyNames !== undefined && output.PolicyNames !== null
        ? deserializeAws_restJson1StringList(output.PolicyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListenerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
};

const deserializeAws_restJson1AwsElbLoadBalancerPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerPolicies => {
  return {
    AppCookieStickinessPolicies:
      output.AppCookieStickinessPolicies !== undefined && output.AppCookieStickinessPolicies !== null
        ? deserializeAws_restJson1AwsElbAppCookieStickinessPolicies(output.AppCookieStickinessPolicies, context)
        : undefined,
    LbCookieStickinessPolicies:
      output.LbCookieStickinessPolicies !== undefined && output.LbCookieStickinessPolicies !== null
        ? deserializeAws_restJson1AwsElbLbCookieStickinessPolicies(output.LbCookieStickinessPolicies, context)
        : undefined,
    OtherPolicies:
      output.OtherPolicies !== undefined && output.OtherPolicies !== null
        ? deserializeAws_restJson1StringList(output.OtherPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerSourceSecurityGroup => {
  return {
    GroupName: __expectString(output.GroupName),
    OwnerAlias: __expectString(output.OwnerAlias),
  } as any;
};

const deserializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerDetails => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    CanonicalHostedZoneId: __expectString(output.CanonicalHostedZoneId),
    CreatedTime: __expectString(output.CreatedTime),
    DNSName: __expectString(output.DNSName),
    IpAddressType: __expectString(output.IpAddressType),
    Scheme: __expectString(output.Scheme),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1LoadBalancerState(output.State, context)
        : undefined,
    Type: __expectString(output.Type),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    AccountId: __expectString(output.AccountId),
    CreatedAt: __expectString(output.CreatedAt),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalName: __expectString(output.PrincipalName),
    PrincipalType: __expectString(output.PrincipalType),
    SessionContext:
      output.SessionContext !== undefined && output.SessionContext !== null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContext(output.SessionContext, context)
        : undefined,
    Status: __expectString(output.Status),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContext = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContext => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes(output.Attributes, context)
        : undefined,
    SessionIssuer:
      output.SessionIssuer !== undefined && output.SessionIssuer !== null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(output.SessionIssuer, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContextAttributes => {
  return {
    CreationDate: __expectString(output.CreationDate),
    MfaAuthenticated: __expectBoolean(output.MfaAuthenticated),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContextSessionIssuer => {
  return {
    AccountId: __expectString(output.AccountId),
    Arn: __expectString(output.Arn),
    PrincipalId: __expectString(output.PrincipalId),
    Type: __expectString(output.Type),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1AwsIamAttachedManagedPolicy = (
  output: any,
  context: __SerdeContext
): AwsIamAttachedManagedPolicy => {
  return {
    PolicyArn: __expectString(output.PolicyArn),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamAttachedManagedPolicyList = (
  output: any,
  context: __SerdeContext
): AwsIamAttachedManagedPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsIamGroupDetails = (output: any, context: __SerdeContext): AwsIamGroupDetails => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    GroupPolicyList:
      output.GroupPolicyList !== undefined && output.GroupPolicyList !== null
        ? deserializeAws_restJson1AwsIamGroupPolicyList(output.GroupPolicyList, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1AwsIamGroupPolicy = (output: any, context: __SerdeContext): AwsIamGroupPolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamGroupPolicyList = (output: any, context: __SerdeContext): AwsIamGroupPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsIamInstanceProfile = (output: any, context: __SerdeContext): AwsIamInstanceProfile => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate: __expectString(output.CreateDate),
    InstanceProfileId: __expectString(output.InstanceProfileId),
    InstanceProfileName: __expectString(output.InstanceProfileName),
    Path: __expectString(output.Path),
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_restJson1AwsIamInstanceProfileRoles(output.Roles, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamInstanceProfileList = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
};

const deserializeAws_restJson1AwsIamInstanceProfileRole = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfileRole => {
  return {
    Arn: __expectString(output.Arn),
    AssumeRolePolicyDocument: __expectString(output.AssumeRolePolicyDocument),
    CreateDate: __expectString(output.CreateDate),
    Path: __expectString(output.Path),
    RoleId: __expectString(output.RoleId),
    RoleName: __expectString(output.RoleName),
  } as any;
};

const deserializeAws_restJson1AwsIamInstanceProfileRoles = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfileRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
};

const deserializeAws_restJson1AwsIamPermissionsBoundary = (
  output: any,
  context: __SerdeContext
): AwsIamPermissionsBoundary => {
  return {
    PermissionsBoundaryArn: __expectString(output.PermissionsBoundaryArn),
    PermissionsBoundaryType: __expectString(output.PermissionsBoundaryType),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyDetails = (output: any, context: __SerdeContext): AwsIamPolicyDetails => {
  return {
    AttachmentCount: __expectInt32(output.AttachmentCount),
    CreateDate: __expectString(output.CreateDate),
    DefaultVersionId: __expectString(output.DefaultVersionId),
    Description: __expectString(output.Description),
    IsAttachable: __expectBoolean(output.IsAttachable),
    Path: __expectString(output.Path),
    PermissionsBoundaryUsageCount: __expectInt32(output.PermissionsBoundaryUsageCount),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyVersionList:
      output.PolicyVersionList !== undefined && output.PolicyVersionList !== null
        ? deserializeAws_restJson1AwsIamPolicyVersionList(output.PolicyVersionList, context)
        : undefined,
    UpdateDate: __expectString(output.UpdateDate),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyVersion = (output: any, context: __SerdeContext): AwsIamPolicyVersion => {
  return {
    CreateDate: __expectString(output.CreateDate),
    IsDefaultVersion: __expectBoolean(output.IsDefaultVersion),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyVersionList = (
  output: any,
  context: __SerdeContext
): AwsIamPolicyVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
};

const deserializeAws_restJson1AwsIamRoleDetails = (output: any, context: __SerdeContext): AwsIamRoleDetails => {
  return {
    AssumeRolePolicyDocument: __expectString(output.AssumeRolePolicyDocument),
    AttachedManagedPolicies:
      output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    InstanceProfileList:
      output.InstanceProfileList !== undefined && output.InstanceProfileList !== null
        ? deserializeAws_restJson1AwsIamInstanceProfileList(output.InstanceProfileList, context)
        : undefined,
    MaxSessionDuration: __expectInt32(output.MaxSessionDuration),
    Path: __expectString(output.Path),
    PermissionsBoundary:
      output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    RoleId: __expectString(output.RoleId),
    RoleName: __expectString(output.RoleName),
    RolePolicyList:
      output.RolePolicyList !== undefined && output.RolePolicyList !== null
        ? deserializeAws_restJson1AwsIamRolePolicyList(output.RolePolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamRolePolicy = (output: any, context: __SerdeContext): AwsIamRolePolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamRolePolicyList = (output: any, context: __SerdeContext): AwsIamRolePolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsIamUserDetails = (output: any, context: __SerdeContext): AwsIamUserDetails => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    GroupList:
      output.GroupList !== undefined && output.GroupList !== null
        ? deserializeAws_restJson1StringList(output.GroupList, context)
        : undefined,
    Path: __expectString(output.Path),
    PermissionsBoundary:
      output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserPolicyList:
      output.UserPolicyList !== undefined && output.UserPolicyList !== null
        ? deserializeAws_restJson1AwsIamUserPolicyList(output.UserPolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamUserPolicy = (output: any, context: __SerdeContext): AwsIamUserPolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamUserPolicyList = (output: any, context: __SerdeContext): AwsIamUserPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
};

const deserializeAws_restJson1AwsKmsKeyDetails = (output: any, context: __SerdeContext): AwsKmsKeyDetails => {
  return {
    AWSAccountId: __expectString(output.AWSAccountId),
    CreationDate: __limitedParseDouble(output.CreationDate),
    Description: __expectString(output.Description),
    KeyId: __expectString(output.KeyId),
    KeyManager: __expectString(output.KeyManager),
    KeyRotationStatus: __expectBoolean(output.KeyRotationStatus),
    KeyState: __expectString(output.KeyState),
    Origin: __expectString(output.Origin),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionCode = (output: any, context: __SerdeContext): AwsLambdaFunctionCode => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
    S3ObjectVersion: __expectString(output.S3ObjectVersion),
    ZipFile: __expectString(output.ZipFile),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  return {
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  return {
    Code:
      output.Code !== undefined && output.Code !== null
        ? deserializeAws_restJson1AwsLambdaFunctionCode(output.Code, context)
        : undefined,
    CodeSha256: __expectString(output.CodeSha256),
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironment(output.Environment, context)
        : undefined,
    FunctionName: __expectString(output.FunctionName),
    Handler: __expectString(output.Handler),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LastModified: __expectString(output.LastModified),
    Layers:
      output.Layers !== undefined && output.Layers !== null
        ? deserializeAws_restJson1AwsLambdaFunctionLayerList(output.Layers, context)
        : undefined,
    MasterArn: __expectString(output.MasterArn),
    MemorySize: __expectInt32(output.MemorySize),
    RevisionId: __expectString(output.RevisionId),
    Role: __expectString(output.Role),
    Runtime: __expectString(output.Runtime),
    Timeout: __expectInt32(output.Timeout),
    TracingConfig:
      output.TracingConfig !== undefined && output.TracingConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionTracingConfig(output.TracingConfig, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironment = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironment => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironmentError(output.Error, context)
        : undefined,
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1FieldMap(output.Variables, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironmentError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  return {
    Arn: __expectString(output.Arn),
    CodeSize: __expectInt32(output.CodeSize),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayerList = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
};

const deserializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionTracingConfig => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionVpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsLambdaLayerVersionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaLayerVersionDetails => {
  return {
    CompatibleRuntimes:
      output.CompatibleRuntimes !== undefined && output.CompatibleRuntimes !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.CompatibleRuntimes, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterAssociatedRole => {
  return {
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterAssociatedRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbClusterDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterDetails => {
  return {
    ActivityStreamStatus: __expectString(output.ActivityStreamStatus),
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AssociatedRoles:
      output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
        ? deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    CopyTagsToSnapshot: __expectBoolean(output.CopyTagsToSnapshot),
    CrossAccountClone: __expectBoolean(output.CrossAccountClone),
    CustomEndpoints:
      output.CustomEndpoints !== undefined && output.CustomEndpoints !== null
        ? deserializeAws_restJson1StringList(output.CustomEndpoints, context)
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    DbClusterIdentifier: __expectString(output.DbClusterIdentifier),
    DbClusterMembers:
      output.DbClusterMembers !== undefined && output.DbClusterMembers !== null
        ? deserializeAws_restJson1AwsRdsDbClusterMembers(output.DbClusterMembers, context)
        : undefined,
    DbClusterOptionGroupMemberships:
      output.DbClusterOptionGroupMemberships !== undefined && output.DbClusterOptionGroupMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(output.DbClusterOptionGroupMemberships, context)
        : undefined,
    DbClusterParameterGroup: __expectString(output.DbClusterParameterGroup),
    DbClusterResourceId: __expectString(output.DbClusterResourceId),
    DbSubnetGroup: __expectString(output.DbSubnetGroup),
    DeletionProtection: __expectBoolean(output.DeletionProtection),
    DomainMemberships:
      output.DomainMemberships !== undefined && output.DomainMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
        : undefined,
    EnabledCloudWatchLogsExports:
      output.EnabledCloudWatchLogsExports !== undefined && output.EnabledCloudWatchLogsExports !== null
        ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Engine: __expectString(output.Engine),
    EngineMode: __expectString(output.EngineMode),
    EngineVersion: __expectString(output.EngineVersion),
    HostedZoneId: __expectString(output.HostedZoneId),
    HttpEndpointEnabled: __expectBoolean(output.HttpEndpointEnabled),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    KmsKeyId: __expectString(output.KmsKeyId),
    MasterUsername: __expectString(output.MasterUsername),
    MultiAz: __expectBoolean(output.MultiAz),
    Port: __expectInt32(output.Port),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    ReadReplicaIdentifiers:
      output.ReadReplicaIdentifiers !== undefined && output.ReadReplicaIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaIdentifiers, context)
        : undefined,
    ReaderEndpoint: __expectString(output.ReaderEndpoint),
    Status: __expectString(output.Status),
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    VpcSecurityGroups:
      output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterMember = (output: any, context: __SerdeContext): AwsRdsDbClusterMember => {
  return {
    DbClusterParameterGroupStatus: __expectString(output.DbClusterParameterGroupStatus),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    IsClusterWriter: __expectBoolean(output.IsClusterWriter),
    PromotionTier: __expectInt32(output.PromotionTier),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterMembers = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterOptionGroupMembership => {
  return {
    DbClusterOptionGroupName: __expectString(output.DbClusterOptionGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterOptionGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterSnapshotDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    DbClusterIdentifier: __expectString(output.DbClusterIdentifier),
    DbClusterSnapshotIdentifier: __expectString(output.DbClusterSnapshotIdentifier),
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    KmsKeyId: __expectString(output.KmsKeyId),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUsername: __expectString(output.MasterUsername),
    PercentProgress: __expectInt32(output.PercentProgress),
    Port: __expectInt32(output.Port),
    SnapshotCreateTime: __expectString(output.SnapshotCreateTime),
    SnapshotType: __expectString(output.SnapshotType),
    Status: __expectString(output.Status),
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbDomainMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbDomainMembership => {
  return {
    Domain: __expectString(output.Domain),
    Fqdn: __expectString(output.Fqdn),
    IamRoleName: __expectString(output.IamRoleName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbDomainMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbDomainMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole => {
  return {
    FeatureName: __expectString(output.FeatureName),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbInstanceDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AssociatedRoles:
      output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AutoMinorVersionUpgrade: __expectBoolean(output.AutoMinorVersionUpgrade),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    CACertificateIdentifier: __expectString(output.CACertificateIdentifier),
    CharacterSetName: __expectString(output.CharacterSetName),
    CopyTagsToSnapshot: __expectBoolean(output.CopyTagsToSnapshot),
    DBClusterIdentifier: __expectString(output.DBClusterIdentifier),
    DBInstanceClass: __expectString(output.DBInstanceClass),
    DBInstanceIdentifier: __expectString(output.DBInstanceIdentifier),
    DBName: __expectString(output.DBName),
    DbInstancePort: __expectInt32(output.DbInstancePort),
    DbInstanceStatus: __expectString(output.DbInstanceStatus),
    DbParameterGroups:
      output.DbParameterGroups !== undefined && output.DbParameterGroups !== null
        ? deserializeAws_restJson1AwsRdsDbParameterGroups(output.DbParameterGroups, context)
        : undefined,
    DbSecurityGroups:
      output.DbSecurityGroups !== undefined && output.DbSecurityGroups !== null
        ? deserializeAws_restJson1StringList(output.DbSecurityGroups, context)
        : undefined,
    DbSubnetGroup:
      output.DbSubnetGroup !== undefined && output.DbSubnetGroup !== null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroup(output.DbSubnetGroup, context)
        : undefined,
    DbiResourceId: __expectString(output.DbiResourceId),
    DeletionProtection: __expectBoolean(output.DeletionProtection),
    DomainMemberships:
      output.DomainMemberships !== undefined && output.DomainMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
        : undefined,
    EnabledCloudWatchLogsExports:
      output.EnabledCloudWatchLogsExports !== undefined && output.EnabledCloudWatchLogsExports !== null
        ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
        : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.Endpoint, context)
        : undefined,
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    EnhancedMonitoringResourceArn: __expectString(output.EnhancedMonitoringResourceArn),
    IAMDatabaseAuthenticationEnabled: __expectBoolean(output.IAMDatabaseAuthenticationEnabled),
    InstanceCreateTime: __expectString(output.InstanceCreateTime),
    Iops: __expectInt32(output.Iops),
    KmsKeyId: __expectString(output.KmsKeyId),
    LatestRestorableTime: __expectString(output.LatestRestorableTime),
    LicenseModel: __expectString(output.LicenseModel),
    ListenerEndpoint:
      output.ListenerEndpoint !== undefined && output.ListenerEndpoint !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.ListenerEndpoint, context)
        : undefined,
    MasterUsername: __expectString(output.MasterUsername),
    MaxAllocatedStorage: __expectInt32(output.MaxAllocatedStorage),
    MonitoringInterval: __expectInt32(output.MonitoringInterval),
    MonitoringRoleArn: __expectString(output.MonitoringRoleArn),
    MultiAz: __expectBoolean(output.MultiAz),
    OptionGroupMemberships:
      output.OptionGroupMemberships !== undefined && output.OptionGroupMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbOptionGroupMemberships(output.OptionGroupMemberships, context)
        : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
        ? deserializeAws_restJson1AwsRdsDbPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PerformanceInsightsEnabled: __expectBoolean(output.PerformanceInsightsEnabled),
    PerformanceInsightsKmsKeyId: __expectString(output.PerformanceInsightsKmsKeyId),
    PerformanceInsightsRetentionPeriod: __expectInt32(output.PerformanceInsightsRetentionPeriod),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    PromotionTier: __expectInt32(output.PromotionTier),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ReadReplicaDBClusterIdentifiers:
      output.ReadReplicaDBClusterIdentifiers !== undefined && output.ReadReplicaDBClusterIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBClusterIdentifiers, context)
        : undefined,
    ReadReplicaDBInstanceIdentifiers:
      output.ReadReplicaDBInstanceIdentifiers !== undefined && output.ReadReplicaDBInstanceIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBInstanceIdentifiers, context)
        : undefined,
    ReadReplicaSourceDBInstanceIdentifier: __expectString(output.ReadReplicaSourceDBInstanceIdentifier),
    SecondaryAvailabilityZone: __expectString(output.SecondaryAvailabilityZone),
    StatusInfos:
      output.StatusInfos !== undefined && output.StatusInfos !== null
        ? deserializeAws_restJson1AwsRdsDbStatusInfos(output.StatusInfos, context)
        : undefined,
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    StorageType: __expectString(output.StorageType),
    TdeCredentialArn: __expectString(output.TdeCredentialArn),
    Timezone: __expectString(output.Timezone),
    VpcSecurityGroups:
      output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceEndpoint => {
  return {
    Address: __expectString(output.Address),
    HostedZoneId: __expectString(output.HostedZoneId),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbOptionGroupMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbOptionGroupMembership => {
  return {
    OptionGroupName: __expectString(output.OptionGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbOptionGroupMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbOptionGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbParameterGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbParameterGroup => {
  return {
    DbParameterGroupName: __expectString(output.DbParameterGroupName),
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbParameterGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): AwsRdsDbPendingModifiedValues => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    CaCertificateIdentifier: __expectString(output.CaCertificateIdentifier),
    DbInstanceClass: __expectString(output.DbInstanceClass),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbSubnetGroupName: __expectString(output.DbSubnetGroupName),
    EngineVersion: __expectString(output.EngineVersion),
    Iops: __expectInt32(output.Iops),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUserPassword: __expectString(output.MasterUserPassword),
    MultiAZ: __expectBoolean(output.MultiAZ),
    PendingCloudWatchLogsExports:
      output.PendingCloudWatchLogsExports !== undefined && output.PendingCloudWatchLogsExports !== null
        ? deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(output.PendingCloudWatchLogsExports, context)
        : undefined,
    Port: __expectInt32(output.Port),
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    StorageType: __expectString(output.StorageType),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbProcessorFeature = (
  output: any,
  context: __SerdeContext
): AwsRdsDbProcessorFeature => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbProcessorFeatures = (
  output: any,
  context: __SerdeContext
): AwsRdsDbProcessorFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbSnapshotDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSnapshotDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbSnapshotIdentifier: __expectString(output.DbSnapshotIdentifier),
    DbiResourceId: __expectString(output.DbiResourceId),
    Encrypted: __expectBoolean(output.Encrypted),
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    InstanceCreateTime: __expectString(output.InstanceCreateTime),
    Iops: __expectInt32(output.Iops),
    KmsKeyId: __expectString(output.KmsKeyId),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUsername: __expectString(output.MasterUsername),
    OptionGroupName: __expectString(output.OptionGroupName),
    PercentProgress: __expectInt32(output.PercentProgress),
    Port: __expectInt32(output.Port),
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    SnapshotCreateTime: __expectString(output.SnapshotCreateTime),
    SnapshotType: __expectString(output.SnapshotType),
    SourceDbSnapshotIdentifier: __expectString(output.SourceDbSnapshotIdentifier),
    SourceRegion: __expectString(output.SourceRegion),
    Status: __expectString(output.Status),
    StorageType: __expectString(output.StorageType),
    TdeCredentialArn: __expectString(output.TdeCredentialArn),
    Timezone: __expectString(output.Timezone),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbStatusInfo = (output: any, context: __SerdeContext): AwsRdsDbStatusInfo => {
  return {
    Message: __expectString(output.Message),
    Normal: __expectBoolean(output.Normal),
    Status: __expectString(output.Status),
    StatusType: __expectString(output.StatusType),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbStatusInfos = (output: any, context: __SerdeContext): AwsRdsDbStatusInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsDbSubnetGroup = (output: any, context: __SerdeContext): AwsRdsDbSubnetGroup => {
  return {
    DbSubnetGroupArn: __expectString(output.DbSubnetGroupArn),
    DbSubnetGroupDescription: __expectString(output.DbSubnetGroupDescription),
    DbSubnetGroupName: __expectString(output.DbSubnetGroupName),
    SubnetGroupStatus: __expectString(output.SubnetGroupStatus),
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets(output.Subnets, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnet => {
  return {
    SubnetAvailabilityZone:
      output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(output.SubnetAvailabilityZone, context)
        : undefined,
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
    SubnetStatus: __expectString(output.SubnetStatus),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnetAvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
};

const deserializeAws_restJson1AwsRdsEventSubscriptionDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsEventSubscriptionDetails => {
  return {
    CustSubscriptionId: __expectString(output.CustSubscriptionId),
    CustomerAwsId: __expectString(output.CustomerAwsId),
    Enabled: __expectBoolean(output.Enabled),
    EventCategoriesList:
      output.EventCategoriesList !== undefined && output.EventCategoriesList !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.EventCategoriesList, context)
        : undefined,
    EventSubscriptionArn: __expectString(output.EventSubscriptionArn),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SourceIdsList:
      output.SourceIdsList !== undefined && output.SourceIdsList !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SourceIdsList, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    SubscriptionCreationTime: __expectString(output.SubscriptionCreationTime),
  } as any;
};

const deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = (
  output: any,
  context: __SerdeContext
): AwsRdsPendingCloudWatchLogsExports => {
  return {
    LogTypesToDisable:
      output.LogTypesToDisable !== undefined && output.LogTypesToDisable !== null
        ? deserializeAws_restJson1StringList(output.LogTypesToDisable, context)
        : undefined,
    LogTypesToEnable:
      output.LogTypesToEnable !== undefined && output.LogTypesToEnable !== null
        ? deserializeAws_restJson1StringList(output.LogTypesToEnable, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterNode = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterNode => {
  return {
    NodeRole: __expectString(output.NodeRole),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
    PublicIpAddress: __expectString(output.PublicIpAddress),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterNodes = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterGroup => {
  return {
    ClusterParameterStatusList:
      output.ClusterParameterStatusList !== undefined && output.ClusterParameterStatusList !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(
            output.ClusterParameterStatusList,
            context
          )
        : undefined,
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterStatus => {
  return {
    ParameterApplyErrorDescription: __expectString(output.ParameterApplyErrorDescription),
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterName: __expectString(output.ParameterName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSecurityGroup => {
  return {
    ClusterSecurityGroupName: __expectString(output.ClusterSecurityGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSnapshotCopyStatus => {
  return {
    DestinationRegion: __expectString(output.DestinationRegion),
    ManualSnapshotRetentionPeriod: __expectInt32(output.ManualSnapshotRetentionPeriod),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    SnapshotCopyGrantName: __expectString(output.SnapshotCopyGrantName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDeferredMaintenanceWindow => {
  return {
    DeferMaintenanceEndTime: __expectString(output.DeferMaintenanceEndTime),
    DeferMaintenanceIdentifier: __expectString(output.DeferMaintenanceIdentifier),
    DeferMaintenanceStartTime: __expectString(output.DeferMaintenanceStartTime),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDeferredMaintenanceWindow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterDetails = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDetails => {
  return {
    AllowVersionUpgrade: __expectBoolean(output.AllowVersionUpgrade),
    AutomatedSnapshotRetentionPeriod: __expectInt32(output.AutomatedSnapshotRetentionPeriod),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    ClusterAvailabilityStatus: __expectString(output.ClusterAvailabilityStatus),
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    ClusterNodes:
      output.ClusterNodes !== undefined && output.ClusterNodes !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterNodes(output.ClusterNodes, context)
        : undefined,
    ClusterParameterGroups:
      output.ClusterParameterGroups !== undefined && output.ClusterParameterGroups !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(output.ClusterParameterGroups, context)
        : undefined,
    ClusterPublicKey: __expectString(output.ClusterPublicKey),
    ClusterRevisionNumber: __expectString(output.ClusterRevisionNumber),
    ClusterSecurityGroups:
      output.ClusterSecurityGroups !== undefined && output.ClusterSecurityGroups !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(output.ClusterSecurityGroups, context)
        : undefined,
    ClusterSnapshotCopyStatus:
      output.ClusterSnapshotCopyStatus !== undefined && output.ClusterSnapshotCopyStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(output.ClusterSnapshotCopyStatus, context)
        : undefined,
    ClusterStatus: __expectString(output.ClusterStatus),
    ClusterSubnetGroupName: __expectString(output.ClusterSubnetGroupName),
    ClusterVersion: __expectString(output.ClusterVersion),
    DBName: __expectString(output.DBName),
    DeferredMaintenanceWindows:
      output.DeferredMaintenanceWindows !== undefined && output.DeferredMaintenanceWindows !== null
        ? deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(
            output.DeferredMaintenanceWindows,
            context
          )
        : undefined,
    ElasticIpStatus:
      output.ElasticIpStatus !== undefined && output.ElasticIpStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus(output.ElasticIpStatus, context)
        : undefined,
    ElasticResizeNumberOfNodeOptions: __expectString(output.ElasticResizeNumberOfNodeOptions),
    Encrypted: __expectBoolean(output.Encrypted),
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_restJson1AwsRedshiftClusterEndpoint(output.Endpoint, context)
        : undefined,
    EnhancedVpcRouting: __expectBoolean(output.EnhancedVpcRouting),
    ExpectedNextSnapshotScheduleTime: __expectString(output.ExpectedNextSnapshotScheduleTime),
    ExpectedNextSnapshotScheduleTimeStatus: __expectString(output.ExpectedNextSnapshotScheduleTimeStatus),
    HsmStatus:
      output.HsmStatus !== undefined && output.HsmStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterHsmStatus(output.HsmStatus, context)
        : undefined,
    IamRoles:
      output.IamRoles !== undefined && output.IamRoles !== null
        ? deserializeAws_restJson1AwsRedshiftClusterIamRoles(output.IamRoles, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    MaintenanceTrackName: __expectString(output.MaintenanceTrackName),
    ManualSnapshotRetentionPeriod: __expectInt32(output.ManualSnapshotRetentionPeriod),
    MasterUsername: __expectString(output.MasterUsername),
    NextMaintenanceWindowStartTime: __expectString(output.NextMaintenanceWindowStartTime),
    NodeType: __expectString(output.NodeType),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    PendingActions:
      output.PendingActions !== undefined && output.PendingActions !== null
        ? deserializeAws_restJson1StringList(output.PendingActions, context)
        : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
        ? deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ResizeInfo:
      output.ResizeInfo !== undefined && output.ResizeInfo !== null
        ? deserializeAws_restJson1AwsRedshiftClusterResizeInfo(output.ResizeInfo, context)
        : undefined,
    RestoreStatus:
      output.RestoreStatus !== undefined && output.RestoreStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterRestoreStatus(output.RestoreStatus, context)
        : undefined,
    SnapshotScheduleIdentifier: __expectString(output.SnapshotScheduleIdentifier),
    SnapshotScheduleState: __expectString(output.SnapshotScheduleState),
    VpcId: __expectString(output.VpcId),
    VpcSecurityGroups:
      output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
        ? deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterElasticIpStatus => {
  return {
    ElasticIp: __expectString(output.ElasticIp),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterEndpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterHsmStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterHsmStatus => {
  return {
    HsmClientCertificateIdentifier: __expectString(output.HsmClientCertificateIdentifier),
    HsmConfigurationIdentifier: __expectString(output.HsmConfigurationIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterIamRole = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterIamRole => {
  return {
    ApplyStatus: __expectString(output.ApplyStatus),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterIamRoles = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterIamRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
};

const deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterPendingModifiedValues => {
  return {
    AutomatedSnapshotRetentionPeriod: __expectInt32(output.AutomatedSnapshotRetentionPeriod),
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    ClusterType: __expectString(output.ClusterType),
    ClusterVersion: __expectString(output.ClusterVersion),
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedVpcRouting: __expectBoolean(output.EnhancedVpcRouting),
    MaintenanceTrackName: __expectString(output.MaintenanceTrackName),
    MasterUserPassword: __expectString(output.MasterUserPassword),
    NodeType: __expectString(output.NodeType),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterResizeInfo = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterResizeInfo => {
  return {
    AllowCancelResize: __expectBoolean(output.AllowCancelResize),
    ResizeType: __expectString(output.ResizeType),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterRestoreStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterRestoreStatus => {
  return {
    CurrentRestoreRateInMegaBytesPerSecond: __limitedParseDouble(output.CurrentRestoreRateInMegaBytesPerSecond),
    ElapsedTimeInSeconds: __expectLong(output.ElapsedTimeInSeconds),
    EstimatedTimeToCompletionInSeconds: __expectLong(output.EstimatedTimeToCompletionInSeconds),
    ProgressInMegaBytes: __expectLong(output.ProgressInMegaBytes),
    SnapshotSizeInMegaBytes: __expectLong(output.SnapshotSizeInMegaBytes),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterVpcSecurityGroup => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterVpcSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
};

const deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = (
  output: any,
  context: __SerdeContext
): AwsS3AccountPublicAccessBlockDetails => {
  return {
    BlockPublicAcls: __expectBoolean(output.BlockPublicAcls),
    BlockPublicPolicy: __expectBoolean(output.BlockPublicPolicy),
    IgnorePublicAcls: __expectBoolean(output.IgnorePublicAcls),
    RestrictPublicBuckets: __expectBoolean(output.RestrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationDetails => {
  return {
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails => {
  return {
    DaysAfterInitiation: __expectInt32(output.DaysAfterInitiation),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesDetails => {
  return {
    AbortIncompleteMultipartUpload:
      output.AbortIncompleteMultipartUpload !== undefined && output.AbortIncompleteMultipartUpload !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(
            output.AbortIncompleteMultipartUpload,
            context
          )
        : undefined,
    ExpirationDate: __expectString(output.ExpirationDate),
    ExpirationInDays: __expectInt32(output.ExpirationInDays),
    ExpiredObjectDeleteMarker: __expectBoolean(output.ExpiredObjectDeleteMarker),
    Filter:
      output.Filter !== undefined && output.Filter !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(output.Filter, context)
        : undefined,
    ID: __expectString(output.ID),
    NoncurrentVersionExpirationInDays: __expectInt32(output.NoncurrentVersionExpirationInDays),
    NoncurrentVersionTransitions:
      output.NoncurrentVersionTransitions !== undefined && output.NoncurrentVersionTransitions !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(
            output.NoncurrentVersionTransitions,
            context
          )
        : undefined,
    Prefix: __expectString(output.Prefix),
    Status: __expectString(output.Status),
    Transitions:
      output.Transitions !== undefined && output.Transitions !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList(
            output.Transitions,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails => {
  return {
    Predicate:
      output.Predicate !== undefined && output.Predicate !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(
            output.Predicate,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails => {
  return {
    Operands:
      output.Operands !== undefined && output.Operands !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList(
            output.Operands,
            context
          )
        : undefined,
    Prefix: __expectString(output.Prefix),
    Tag:
      output.Tag !== undefined && output.Tag !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(
            output.Tag,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails => {
  return {
    Prefix: __expectString(output.Prefix),
    Tag:
      output.Tag !== undefined && output.Tag !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(
            output.Tag,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails => {
  return {
    Days: __expectInt32(output.Days),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(
        entry,
        context
      );
    });
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails => {
  return {
    Date: __expectString(output.Date),
    Days: __expectInt32(output.Days),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(entry, context);
    });
};

const deserializeAws_restJson1AwsS3BucketDetails = (output: any, context: __SerdeContext): AwsS3BucketDetails => {
  return {
    AccessControlList: __expectString(output.AccessControlList),
    BucketLifecycleConfiguration:
      output.BucketLifecycleConfiguration !== undefined && output.BucketLifecycleConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails(
            output.BucketLifecycleConfiguration,
            context
          )
        : undefined,
    BucketLoggingConfiguration:
      output.BucketLoggingConfiguration !== undefined && output.BucketLoggingConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketLoggingConfiguration(output.BucketLoggingConfiguration, context)
        : undefined,
    BucketNotificationConfiguration:
      output.BucketNotificationConfiguration !== undefined && output.BucketNotificationConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfiguration(output.BucketNotificationConfiguration, context)
        : undefined,
    BucketWebsiteConfiguration:
      output.BucketWebsiteConfiguration !== undefined && output.BucketWebsiteConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfiguration(output.BucketWebsiteConfiguration, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    OwnerId: __expectString(output.OwnerId),
    OwnerName: __expectString(output.OwnerName),
    PublicAccessBlockConfiguration:
      output.PublicAccessBlockConfiguration !== undefined && output.PublicAccessBlockConfiguration !== null
        ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.PublicAccessBlockConfiguration, context)
        : undefined,
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
            output.ServerSideEncryptionConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketLoggingConfiguration => {
  return {
    DestinationBucketName: __expectString(output.DestinationBucketName),
    LogFilePrefix: __expectString(output.LogFilePrefix),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfiguration => {
  return {
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetails(output.Configurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetail = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationDetail => {
  return {
    Destination: __expectString(output.Destination),
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationEvents(output.Events, context)
        : undefined,
    Filter:
      output.Filter !== undefined && output.Filter !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationFilter(output.Filter, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetail(entry, context);
    });
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationEvents = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationFilter = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationFilter => {
  return {
    S3KeyFilter:
      output.S3KeyFilter !== undefined && output.S3KeyFilter !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter(output.S3KeyFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilter => {
  return {
    FilterRules:
      output.FilterRules !== undefined && output.FilterRules !== null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules(output.FilterRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilterRule => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilterRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule(entry, context);
    });
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionByDefault => {
  return {
    KMSMasterKeyID: __expectString(output.KMSMasterKeyID),
    SSEAlgorithm: __expectString(output.SSEAlgorithm),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionConfiguration => {
  return {
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule => {
  return {
    ApplyServerSideEncryptionByDefault:
      output.ApplyServerSideEncryptionByDefault !== undefined && output.ApplyServerSideEncryptionByDefault !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
            output.ApplyServerSideEncryptionByDefault,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfiguration => {
  return {
    ErrorDocument: __expectString(output.ErrorDocument),
    IndexDocumentSuffix: __expectString(output.IndexDocumentSuffix),
    RedirectAllRequestsTo:
      output.RedirectAllRequestsTo !== undefined && output.RedirectAllRequestsTo !== null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo(output.RedirectAllRequestsTo, context)
        : undefined,
    RoutingRules:
      output.RoutingRules !== undefined && output.RoutingRules !== null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules(output.RoutingRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRedirectTo => {
  return {
    Hostname: __expectString(output.Hostname),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRule => {
  return {
    Condition:
      output.Condition !== undefined && output.Condition !== null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition(output.Condition, context)
        : undefined,
    Redirect:
      output.Redirect !== undefined && output.Redirect !== null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect(output.Redirect, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRuleCondition => {
  return {
    HttpErrorCodeReturnedEquals: __expectString(output.HttpErrorCodeReturnedEquals),
    KeyPrefixEquals: __expectString(output.KeyPrefixEquals),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRuleRedirect => {
  return {
    Hostname: __expectString(output.Hostname),
    HttpRedirectCode: __expectString(output.HttpRedirectCode),
    Protocol: __expectString(output.Protocol),
    ReplaceKeyPrefixWith: __expectString(output.ReplaceKeyPrefixWith),
    ReplaceKeyWith: __expectString(output.ReplaceKeyWith),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule(entry, context);
    });
};

const deserializeAws_restJson1AwsS3ObjectDetails = (output: any, context: __SerdeContext): AwsS3ObjectDetails => {
  return {
    ContentType: __expectString(output.ContentType),
    ETag: __expectString(output.ETag),
    LastModified: __expectString(output.LastModified),
    SSEKMSKeyId: __expectString(output.SSEKMSKeyId),
    ServerSideEncryption: __expectString(output.ServerSideEncryption),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1AwsSecretsManagerSecretDetails = (
  output: any,
  context: __SerdeContext
): AwsSecretsManagerSecretDetails => {
  return {
    Deleted: __expectBoolean(output.Deleted),
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    Name: __expectString(output.Name),
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaArn: __expectString(output.RotationLambdaArn),
    RotationOccurredWithinFrequency: __expectBoolean(output.RotationOccurredWithinFrequency),
    RotationRules:
      output.RotationRules !== undefined && output.RotationRules !== null
        ? deserializeAws_restJson1AwsSecretsManagerSecretRotationRules(output.RotationRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecretsManagerSecretRotationRules = (
  output: any,
  context: __SerdeContext
): AwsSecretsManagerSecretRotationRules => {
  return {
    AutomaticallyAfterDays: __expectInt32(output.AutomaticallyAfterDays),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFinding = (output: any, context: __SerdeContext): AwsSecurityFinding => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_restJson1Action(output.Action, context)
        : undefined,
    AwsAccountId: __expectString(output.AwsAccountId),
    CompanyName: __expectString(output.CompanyName),
    Compliance:
      output.Compliance !== undefined && output.Compliance !== null
        ? deserializeAws_restJson1Compliance(output.Compliance, context)
        : undefined,
    Confidence: __expectInt32(output.Confidence),
    CreatedAt: __expectString(output.CreatedAt),
    Criticality: __expectInt32(output.Criticality),
    Description: __expectString(output.Description),
    FindingProviderFields:
      output.FindingProviderFields !== undefined && output.FindingProviderFields !== null
        ? deserializeAws_restJson1FindingProviderFields(output.FindingProviderFields, context)
        : undefined,
    FirstObservedAt: __expectString(output.FirstObservedAt),
    GeneratorId: __expectString(output.GeneratorId),
    Id: __expectString(output.Id),
    LastObservedAt: __expectString(output.LastObservedAt),
    Malware:
      output.Malware !== undefined && output.Malware !== null
        ? deserializeAws_restJson1MalwareList(output.Malware, context)
        : undefined,
    Network:
      output.Network !== undefined && output.Network !== null
        ? deserializeAws_restJson1Network(output.Network, context)
        : undefined,
    NetworkPath:
      output.NetworkPath !== undefined && output.NetworkPath !== null
        ? deserializeAws_restJson1NetworkPathList(output.NetworkPath, context)
        : undefined,
    Note:
      output.Note !== undefined && output.Note !== null
        ? deserializeAws_restJson1Note(output.Note, context)
        : undefined,
    PatchSummary:
      output.PatchSummary !== undefined && output.PatchSummary !== null
        ? deserializeAws_restJson1PatchSummary(output.PatchSummary, context)
        : undefined,
    Process:
      output.Process !== undefined && output.Process !== null
        ? deserializeAws_restJson1ProcessDetails(output.Process, context)
        : undefined,
    ProductArn: __expectString(output.ProductArn),
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1FieldMap(output.ProductFields, context)
        : undefined,
    ProductName: __expectString(output.ProductName),
    RecordState: __expectString(output.RecordState),
    Region: __expectString(output.Region),
    RelatedFindings:
      output.RelatedFindings !== undefined && output.RelatedFindings !== null
        ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
        : undefined,
    Remediation:
      output.Remediation !== undefined && output.Remediation !== null
        ? deserializeAws_restJson1Remediation(output.Remediation, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1ResourceList(output.Resources, context)
        : undefined,
    SchemaVersion: __expectString(output.SchemaVersion),
    Severity:
      output.Severity !== undefined && output.Severity !== null
        ? deserializeAws_restJson1Severity(output.Severity, context)
        : undefined,
    SourceUrl: __expectString(output.SourceUrl),
    ThreatIntelIndicators:
      output.ThreatIntelIndicators !== undefined && output.ThreatIntelIndicators !== null
        ? deserializeAws_restJson1ThreatIntelIndicatorList(output.ThreatIntelIndicators, context)
        : undefined,
    Title: __expectString(output.Title),
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1TypeList(output.Types, context)
        : undefined,
    UpdatedAt: __expectString(output.UpdatedAt),
    UserDefinedFields:
      output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
        ? deserializeAws_restJson1FieldMap(output.UserDefinedFields, context)
        : undefined,
    VerificationState: __expectString(output.VerificationState),
    Vulnerabilities:
      output.Vulnerabilities !== undefined && output.Vulnerabilities !== null
        ? deserializeAws_restJson1VulnerabilityList(output.Vulnerabilities, context)
        : undefined,
    Workflow:
      output.Workflow !== undefined && output.Workflow !== null
        ? deserializeAws_restJson1Workflow(output.Workflow, context)
        : undefined,
    WorkflowState: __expectString(output.WorkflowState),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingFilters = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingFilters => {
  return {
    AwsAccountId:
      output.AwsAccountId !== undefined && output.AwsAccountId !== null
        ? deserializeAws_restJson1StringFilterList(output.AwsAccountId, context)
        : undefined,
    CompanyName:
      output.CompanyName !== undefined && output.CompanyName !== null
        ? deserializeAws_restJson1StringFilterList(output.CompanyName, context)
        : undefined,
    ComplianceStatus:
      output.ComplianceStatus !== undefined && output.ComplianceStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.ComplianceStatus, context)
        : undefined,
    Confidence:
      output.Confidence !== undefined && output.Confidence !== null
        ? deserializeAws_restJson1NumberFilterList(output.Confidence, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.CreatedAt, context)
        : undefined,
    Criticality:
      output.Criticality !== undefined && output.Criticality !== null
        ? deserializeAws_restJson1NumberFilterList(output.Criticality, context)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? deserializeAws_restJson1StringFilterList(output.Description, context)
        : undefined,
    FindingProviderFieldsConfidence:
      output.FindingProviderFieldsConfidence !== undefined && output.FindingProviderFieldsConfidence !== null
        ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsConfidence, context)
        : undefined,
    FindingProviderFieldsCriticality:
      output.FindingProviderFieldsCriticality !== undefined && output.FindingProviderFieldsCriticality !== null
        ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsCriticality, context)
        : undefined,
    FindingProviderFieldsRelatedFindingsId:
      output.FindingProviderFieldsRelatedFindingsId !== undefined &&
      output.FindingProviderFieldsRelatedFindingsId !== null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsId, context)
        : undefined,
    FindingProviderFieldsRelatedFindingsProductArn:
      output.FindingProviderFieldsRelatedFindingsProductArn !== undefined &&
      output.FindingProviderFieldsRelatedFindingsProductArn !== null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsProductArn, context)
        : undefined,
    FindingProviderFieldsSeverityLabel:
      output.FindingProviderFieldsSeverityLabel !== undefined && output.FindingProviderFieldsSeverityLabel !== null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityLabel, context)
        : undefined,
    FindingProviderFieldsSeverityOriginal:
      output.FindingProviderFieldsSeverityOriginal !== undefined &&
      output.FindingProviderFieldsSeverityOriginal !== null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityOriginal, context)
        : undefined,
    FindingProviderFieldsTypes:
      output.FindingProviderFieldsTypes !== undefined && output.FindingProviderFieldsTypes !== null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsTypes, context)
        : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.FirstObservedAt, context)
        : undefined,
    GeneratorId:
      output.GeneratorId !== undefined && output.GeneratorId !== null
        ? deserializeAws_restJson1StringFilterList(output.GeneratorId, context)
        : undefined,
    Id:
      output.Id !== undefined && output.Id !== null
        ? deserializeAws_restJson1StringFilterList(output.Id, context)
        : undefined,
    Keyword:
      output.Keyword !== undefined && output.Keyword !== null
        ? deserializeAws_restJson1KeywordFilterList(output.Keyword, context)
        : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.LastObservedAt, context)
        : undefined,
    MalwareName:
      output.MalwareName !== undefined && output.MalwareName !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareName, context)
        : undefined,
    MalwarePath:
      output.MalwarePath !== undefined && output.MalwarePath !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwarePath, context)
        : undefined,
    MalwareState:
      output.MalwareState !== undefined && output.MalwareState !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareState, context)
        : undefined,
    MalwareType:
      output.MalwareType !== undefined && output.MalwareType !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareType, context)
        : undefined,
    NetworkDestinationDomain:
      output.NetworkDestinationDomain !== undefined && output.NetworkDestinationDomain !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDestinationDomain, context)
        : undefined,
    NetworkDestinationIpV4:
      output.NetworkDestinationIpV4 !== undefined && output.NetworkDestinationIpV4 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV4, context)
        : undefined,
    NetworkDestinationIpV6:
      output.NetworkDestinationIpV6 !== undefined && output.NetworkDestinationIpV6 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV6, context)
        : undefined,
    NetworkDestinationPort:
      output.NetworkDestinationPort !== undefined && output.NetworkDestinationPort !== null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkDestinationPort, context)
        : undefined,
    NetworkDirection:
      output.NetworkDirection !== undefined && output.NetworkDirection !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDirection, context)
        : undefined,
    NetworkProtocol:
      output.NetworkProtocol !== undefined && output.NetworkProtocol !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkProtocol, context)
        : undefined,
    NetworkSourceDomain:
      output.NetworkSourceDomain !== undefined && output.NetworkSourceDomain !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceDomain, context)
        : undefined,
    NetworkSourceIpV4:
      output.NetworkSourceIpV4 !== undefined && output.NetworkSourceIpV4 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV4, context)
        : undefined,
    NetworkSourceIpV6:
      output.NetworkSourceIpV6 !== undefined && output.NetworkSourceIpV6 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV6, context)
        : undefined,
    NetworkSourceMac:
      output.NetworkSourceMac !== undefined && output.NetworkSourceMac !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceMac, context)
        : undefined,
    NetworkSourcePort:
      output.NetworkSourcePort !== undefined && output.NetworkSourcePort !== null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkSourcePort, context)
        : undefined,
    NoteText:
      output.NoteText !== undefined && output.NoteText !== null
        ? deserializeAws_restJson1StringFilterList(output.NoteText, context)
        : undefined,
    NoteUpdatedAt:
      output.NoteUpdatedAt !== undefined && output.NoteUpdatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.NoteUpdatedAt, context)
        : undefined,
    NoteUpdatedBy:
      output.NoteUpdatedBy !== undefined && output.NoteUpdatedBy !== null
        ? deserializeAws_restJson1StringFilterList(output.NoteUpdatedBy, context)
        : undefined,
    ProcessLaunchedAt:
      output.ProcessLaunchedAt !== undefined && output.ProcessLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ProcessLaunchedAt, context)
        : undefined,
    ProcessName:
      output.ProcessName !== undefined && output.ProcessName !== null
        ? deserializeAws_restJson1StringFilterList(output.ProcessName, context)
        : undefined,
    ProcessParentPid:
      output.ProcessParentPid !== undefined && output.ProcessParentPid !== null
        ? deserializeAws_restJson1NumberFilterList(output.ProcessParentPid, context)
        : undefined,
    ProcessPath:
      output.ProcessPath !== undefined && output.ProcessPath !== null
        ? deserializeAws_restJson1StringFilterList(output.ProcessPath, context)
        : undefined,
    ProcessPid:
      output.ProcessPid !== undefined && output.ProcessPid !== null
        ? deserializeAws_restJson1NumberFilterList(output.ProcessPid, context)
        : undefined,
    ProcessTerminatedAt:
      output.ProcessTerminatedAt !== undefined && output.ProcessTerminatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ProcessTerminatedAt, context)
        : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? deserializeAws_restJson1StringFilterList(output.ProductArn, context)
        : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1MapFilterList(output.ProductFields, context)
        : undefined,
    ProductName:
      output.ProductName !== undefined && output.ProductName !== null
        ? deserializeAws_restJson1StringFilterList(output.ProductName, context)
        : undefined,
    RecommendationText:
      output.RecommendationText !== undefined && output.RecommendationText !== null
        ? deserializeAws_restJson1StringFilterList(output.RecommendationText, context)
        : undefined,
    RecordState:
      output.RecordState !== undefined && output.RecordState !== null
        ? deserializeAws_restJson1StringFilterList(output.RecordState, context)
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? deserializeAws_restJson1StringFilterList(output.Region, context)
        : undefined,
    RelatedFindingsId:
      output.RelatedFindingsId !== undefined && output.RelatedFindingsId !== null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsId, context)
        : undefined,
    RelatedFindingsProductArn:
      output.RelatedFindingsProductArn !== undefined && output.RelatedFindingsProductArn !== null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsProductArn, context)
        : undefined,
    ResourceAwsEc2InstanceIamInstanceProfileArn:
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceIamInstanceProfileArn, context)
        : undefined,
    ResourceAwsEc2InstanceImageId:
      output.ResourceAwsEc2InstanceImageId !== undefined && output.ResourceAwsEc2InstanceImageId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceImageId, context)
        : undefined,
    ResourceAwsEc2InstanceIpV4Addresses:
      output.ResourceAwsEc2InstanceIpV4Addresses !== undefined && output.ResourceAwsEc2InstanceIpV4Addresses !== null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV4Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceIpV6Addresses:
      output.ResourceAwsEc2InstanceIpV6Addresses !== undefined && output.ResourceAwsEc2InstanceIpV6Addresses !== null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV6Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceKeyName:
      output.ResourceAwsEc2InstanceKeyName !== undefined && output.ResourceAwsEc2InstanceKeyName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceKeyName, context)
        : undefined,
    ResourceAwsEc2InstanceLaunchedAt:
      output.ResourceAwsEc2InstanceLaunchedAt !== undefined && output.ResourceAwsEc2InstanceLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsEc2InstanceLaunchedAt, context)
        : undefined,
    ResourceAwsEc2InstanceSubnetId:
      output.ResourceAwsEc2InstanceSubnetId !== undefined && output.ResourceAwsEc2InstanceSubnetId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceSubnetId, context)
        : undefined,
    ResourceAwsEc2InstanceType:
      output.ResourceAwsEc2InstanceType !== undefined && output.ResourceAwsEc2InstanceType !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceType, context)
        : undefined,
    ResourceAwsEc2InstanceVpcId:
      output.ResourceAwsEc2InstanceVpcId !== undefined && output.ResourceAwsEc2InstanceVpcId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceVpcId, context)
        : undefined,
    ResourceAwsIamAccessKeyCreatedAt:
      output.ResourceAwsIamAccessKeyCreatedAt !== undefined && output.ResourceAwsIamAccessKeyCreatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsIamAccessKeyCreatedAt, context)
        : undefined,
    ResourceAwsIamAccessKeyPrincipalName:
      output.ResourceAwsIamAccessKeyPrincipalName !== undefined && output.ResourceAwsIamAccessKeyPrincipalName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyPrincipalName, context)
        : undefined,
    ResourceAwsIamAccessKeyStatus:
      output.ResourceAwsIamAccessKeyStatus !== undefined && output.ResourceAwsIamAccessKeyStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyStatus, context)
        : undefined,
    ResourceAwsIamAccessKeyUserName:
      output.ResourceAwsIamAccessKeyUserName !== undefined && output.ResourceAwsIamAccessKeyUserName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyUserName, context)
        : undefined,
    ResourceAwsIamUserUserName:
      output.ResourceAwsIamUserUserName !== undefined && output.ResourceAwsIamUserUserName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamUserUserName, context)
        : undefined,
    ResourceAwsS3BucketOwnerId:
      output.ResourceAwsS3BucketOwnerId !== undefined && output.ResourceAwsS3BucketOwnerId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerId, context)
        : undefined,
    ResourceAwsS3BucketOwnerName:
      output.ResourceAwsS3BucketOwnerName !== undefined && output.ResourceAwsS3BucketOwnerName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerName, context)
        : undefined,
    ResourceContainerImageId:
      output.ResourceContainerImageId !== undefined && output.ResourceContainerImageId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageId, context)
        : undefined,
    ResourceContainerImageName:
      output.ResourceContainerImageName !== undefined && output.ResourceContainerImageName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageName, context)
        : undefined,
    ResourceContainerLaunchedAt:
      output.ResourceContainerLaunchedAt !== undefined && output.ResourceContainerLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceContainerLaunchedAt, context)
        : undefined,
    ResourceContainerName:
      output.ResourceContainerName !== undefined && output.ResourceContainerName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerName, context)
        : undefined,
    ResourceDetailsOther:
      output.ResourceDetailsOther !== undefined && output.ResourceDetailsOther !== null
        ? deserializeAws_restJson1MapFilterList(output.ResourceDetailsOther, context)
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceId, context)
        : undefined,
    ResourcePartition:
      output.ResourcePartition !== undefined && output.ResourcePartition !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourcePartition, context)
        : undefined,
    ResourceRegion:
      output.ResourceRegion !== undefined && output.ResourceRegion !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceRegion, context)
        : undefined,
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_restJson1MapFilterList(output.ResourceTags, context)
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceType, context)
        : undefined,
    SeverityLabel:
      output.SeverityLabel !== undefined && output.SeverityLabel !== null
        ? deserializeAws_restJson1StringFilterList(output.SeverityLabel, context)
        : undefined,
    SeverityNormalized:
      output.SeverityNormalized !== undefined && output.SeverityNormalized !== null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityNormalized, context)
        : undefined,
    SeverityProduct:
      output.SeverityProduct !== undefined && output.SeverityProduct !== null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityProduct, context)
        : undefined,
    SourceUrl:
      output.SourceUrl !== undefined && output.SourceUrl !== null
        ? deserializeAws_restJson1StringFilterList(output.SourceUrl, context)
        : undefined,
    ThreatIntelIndicatorCategory:
      output.ThreatIntelIndicatorCategory !== undefined && output.ThreatIntelIndicatorCategory !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorCategory, context)
        : undefined,
    ThreatIntelIndicatorLastObservedAt:
      output.ThreatIntelIndicatorLastObservedAt !== undefined && output.ThreatIntelIndicatorLastObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ThreatIntelIndicatorLastObservedAt, context)
        : undefined,
    ThreatIntelIndicatorSource:
      output.ThreatIntelIndicatorSource !== undefined && output.ThreatIntelIndicatorSource !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSource, context)
        : undefined,
    ThreatIntelIndicatorSourceUrl:
      output.ThreatIntelIndicatorSourceUrl !== undefined && output.ThreatIntelIndicatorSourceUrl !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSourceUrl, context)
        : undefined,
    ThreatIntelIndicatorType:
      output.ThreatIntelIndicatorType !== undefined && output.ThreatIntelIndicatorType !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorType, context)
        : undefined,
    ThreatIntelIndicatorValue:
      output.ThreatIntelIndicatorValue !== undefined && output.ThreatIntelIndicatorValue !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorValue, context)
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? deserializeAws_restJson1StringFilterList(output.Title, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? deserializeAws_restJson1StringFilterList(output.Type, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.UpdatedAt, context)
        : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
        ? deserializeAws_restJson1MapFilterList(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState !== undefined && output.VerificationState !== null
        ? deserializeAws_restJson1StringFilterList(output.VerificationState, context)
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowState, context)
        : undefined,
    WorkflowStatus:
      output.WorkflowStatus !== undefined && output.WorkflowStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifier = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier => {
  return {
    Id: __expectString(output.Id),
    ProductArn: __expectString(output.ProductArn),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifierList = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
};

const deserializeAws_restJson1AwsSecurityFindingList = (output: any, context: __SerdeContext): AwsSecurityFinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSecurityFinding(entry, context);
    });
};

const deserializeAws_restJson1AwsSnsTopicDetails = (output: any, context: __SerdeContext): AwsSnsTopicDetails => {
  return {
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    Owner: __expectString(output.Owner),
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_restJson1AwsSnsTopicSubscriptionList(output.Subscription, context)
        : undefined,
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  return {
    Endpoint: __expectString(output.Endpoint),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscriptionList = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
};

const deserializeAws_restJson1AwsSqsQueueDetails = (output: any, context: __SerdeContext): AwsSqsQueueDetails => {
  return {
    DeadLetterTargetArn: __expectString(output.DeadLetterTargetArn),
    KmsDataKeyReusePeriodSeconds: __expectInt32(output.KmsDataKeyReusePeriodSeconds),
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    QueueName: __expectString(output.QueueName),
  } as any;
};

const deserializeAws_restJson1AwsSsmComplianceSummary = (
  output: any,
  context: __SerdeContext
): AwsSsmComplianceSummary => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantCriticalCount: __expectInt32(output.CompliantCriticalCount),
    CompliantHighCount: __expectInt32(output.CompliantHighCount),
    CompliantInformationalCount: __expectInt32(output.CompliantInformationalCount),
    CompliantLowCount: __expectInt32(output.CompliantLowCount),
    CompliantMediumCount: __expectInt32(output.CompliantMediumCount),
    CompliantUnspecifiedCount: __expectInt32(output.CompliantUnspecifiedCount),
    ExecutionType: __expectString(output.ExecutionType),
    NonCompliantCriticalCount: __expectInt32(output.NonCompliantCriticalCount),
    NonCompliantHighCount: __expectInt32(output.NonCompliantHighCount),
    NonCompliantInformationalCount: __expectInt32(output.NonCompliantInformationalCount),
    NonCompliantLowCount: __expectInt32(output.NonCompliantLowCount),
    NonCompliantMediumCount: __expectInt32(output.NonCompliantMediumCount),
    NonCompliantUnspecifiedCount: __expectInt32(output.NonCompliantUnspecifiedCount),
    OverallSeverity: __expectString(output.OverallSeverity),
    PatchBaselineId: __expectString(output.PatchBaselineId),
    PatchGroup: __expectString(output.PatchGroup),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsSsmPatch = (output: any, context: __SerdeContext): AwsSsmPatch => {
  return {
    ComplianceSummary:
      output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
        ? deserializeAws_restJson1AwsSsmComplianceSummary(output.ComplianceSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSsmPatchComplianceDetails = (
  output: any,
  context: __SerdeContext
): AwsSsmPatchComplianceDetails => {
  return {
    Patch:
      output.Patch !== undefined && output.Patch !== null
        ? deserializeAws_restJson1AwsSsmPatch(output.Patch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclDetails = (output: any, context: __SerdeContext): AwsWafWebAclDetails => {
  return {
    DefaultAction: __expectString(output.DefaultAction),
    Name: __expectString(output.Name),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsWafWebAclRuleList(output.Rules, context)
        : undefined,
    WebAclId: __expectString(output.WebAclId),
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRule = (output: any, context: __SerdeContext): AwsWafWebAclRule => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_restJson1WafAction(output.Action, context)
        : undefined,
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_restJson1WafExcludedRuleList(output.ExcludedRules, context)
        : undefined,
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_restJson1WafOverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRuleList = (output: any, context: __SerdeContext): AwsWafWebAclRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    FindingIdentifier:
      output.FindingIdentifier !== undefined && output.FindingIdentifier !== null
        ? deserializeAws_restJson1AwsSecurityFindingIdentifier(output.FindingIdentifier, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding(entry, context);
    });
};

const deserializeAws_restJson1CategoryList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    CellReference: __expectString(output.CellReference),
    Column: __expectLong(output.Column),
    ColumnName: __expectString(output.ColumnName),
    Row: __expectLong(output.Row),
  } as any;
};

const deserializeAws_restJson1Cells = (output: any, context: __SerdeContext): Cell[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cell(entry, context);
    });
};

const deserializeAws_restJson1CidrBlockAssociation = (output: any, context: __SerdeContext): CidrBlockAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CidrBlock: __expectString(output.CidrBlock),
    CidrBlockState: __expectString(output.CidrBlockState),
  } as any;
};

const deserializeAws_restJson1CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): CidrBlockAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CidrBlockAssociation(entry, context);
    });
};

const deserializeAws_restJson1City = (output: any, context: __SerdeContext): City => {
  return {
    CityName: __expectString(output.CityName),
  } as any;
};

const deserializeAws_restJson1ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return {
    AdditionalOccurrences: __expectBoolean(output.AdditionalOccurrences),
    CustomDataIdentifiers:
      output.CustomDataIdentifiers !== undefined && output.CustomDataIdentifiers !== null
        ? deserializeAws_restJson1CustomDataIdentifiersResult(output.CustomDataIdentifiers, context)
        : undefined,
    MimeType: __expectString(output.MimeType),
    SensitiveData:
      output.SensitiveData !== undefined && output.SensitiveData !== null
        ? deserializeAws_restJson1SensitiveDataResultList(output.SensitiveData, context)
        : undefined,
    SizeClassified: __expectLong(output.SizeClassified),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1ClassificationStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationStatus = (output: any, context: __SerdeContext): ClassificationStatus => {
  return {
    Code: __expectString(output.Code),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusReasons:
      output.StatusReasons !== undefined && output.StatusReasons !== null
        ? deserializeAws_restJson1StatusReasonsList(output.StatusReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerDetails = (output: any, context: __SerdeContext): ContainerDetails => {
  return {
    ImageId: __expectString(output.ImageId),
    ImageName: __expectString(output.ImageName),
    LaunchedAt: __expectString(output.LaunchedAt),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Country = (output: any, context: __SerdeContext): Country => {
  return {
    CountryCode: __expectString(output.CountryCode),
    CountryName: __expectString(output.CountryName),
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiersDetections = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersDetections => {
  return {
    Arn: __expectString(output.Arn),
    Count: __expectLong(output.Count),
    Name: __expectString(output.Name),
    Occurrences:
      output.Occurrences !== undefined && output.Occurrences !== null
        ? deserializeAws_restJson1Occurrences(output.Occurrences, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiersDetectionsList = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersDetections[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
};

const deserializeAws_restJson1CustomDataIdentifiersResult = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersResult => {
  return {
    Detections:
      output.Detections !== undefined && output.Detections !== null
        ? deserializeAws_restJson1CustomDataIdentifiersDetectionsList(output.Detections, context)
        : undefined,
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1Cvss = (output: any, context: __SerdeContext): Cvss => {
  return {
    Adjustments:
      output.Adjustments !== undefined && output.Adjustments !== null
        ? deserializeAws_restJson1AdjustmentList(output.Adjustments, context)
        : undefined,
    BaseScore: __limitedParseDouble(output.BaseScore),
    BaseVector: __expectString(output.BaseVector),
    Source: __expectString(output.Source),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1CvssList = (output: any, context: __SerdeContext): Cvss[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cvss(entry, context);
    });
};

const deserializeAws_restJson1DataClassificationDetails = (
  output: any,
  context: __SerdeContext
): DataClassificationDetails => {
  return {
    DetailedResultsLocation: __expectString(output.DetailedResultsLocation),
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_restJson1ClassificationResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return {
    DateRange:
      output.DateRange !== undefined && output.DateRange !== null
        ? deserializeAws_restJson1DateRange(output.DateRange, context)
        : undefined,
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

const deserializeAws_restJson1DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DateFilter(entry, context);
    });
};

const deserializeAws_restJson1DateRange = (output: any, context: __SerdeContext): DateRange => {
  return {
    Unit: __expectString(output.Unit),
    Value: __expectInt32(output.Value),
  } as any;
};

const deserializeAws_restJson1DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    Domain: __expectString(output.Domain),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1FieldMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1FindingProviderFields = (output: any, context: __SerdeContext): FindingProviderFields => {
  return {
    Confidence: __expectInt32(output.Confidence),
    Criticality: __expectInt32(output.Criticality),
    RelatedFindings:
      output.RelatedFindings !== undefined && output.RelatedFindings !== null
        ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
        : undefined,
    Severity:
      output.Severity !== undefined && output.Severity !== null
        ? deserializeAws_restJson1FindingProviderSeverity(output.Severity, context)
        : undefined,
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1TypeList(output.Types, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingProviderSeverity = (
  output: any,
  context: __SerdeContext
): FindingProviderSeverity => {
  return {
    Label: __expectString(output.Label),
    Original: __expectString(output.Original),
  } as any;
};

const deserializeAws_restJson1GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return {
    Lat: __limitedParseDouble(output.Lat),
    Lon: __limitedParseDouble(output.Lon),
  } as any;
};

const deserializeAws_restJson1IcmpTypeCode = (output: any, context: __SerdeContext): IcmpTypeCode => {
  return {
    Code: __expectInt32(output.Code),
    Type: __expectInt32(output.Type),
  } as any;
};

const deserializeAws_restJson1ImportFindingsError = (output: any, context: __SerdeContext): ImportFindingsError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1ImportFindingsErrorList = (
  output: any,
  context: __SerdeContext
): ImportFindingsError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportFindingsError(entry, context);
    });
};

const deserializeAws_restJson1Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    Filters:
      output.Filters !== undefined && output.Filters !== null
        ? deserializeAws_restJson1AwsSecurityFindingFilters(output.Filters, context)
        : undefined,
    GroupByAttribute: __expectString(output.GroupByAttribute),
    InsightArn: __expectString(output.InsightArn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1InsightList = (output: any, context: __SerdeContext): Insight[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Insight(entry, context);
    });
};

const deserializeAws_restJson1InsightResults = (output: any, context: __SerdeContext): InsightResults => {
  return {
    GroupByAttribute: __expectString(output.GroupByAttribute),
    InsightArn: __expectString(output.InsightArn),
    ResultValues:
      output.ResultValues !== undefined && output.ResultValues !== null
        ? deserializeAws_restJson1InsightResultValueList(output.ResultValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightResultValue = (output: any, context: __SerdeContext): InsightResultValue => {
  return {
    Count: __expectInt32(output.Count),
    GroupByAttributeValue: __expectString(output.GroupByAttributeValue),
  } as any;
};

const deserializeAws_restJson1InsightResultValueList = (output: any, context: __SerdeContext): InsightResultValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightResultValue(entry, context);
    });
};

const deserializeAws_restJson1IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1IntegrationTypeList = (
  output: any,
  context: __SerdeContext
): (IntegrationType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: __expectString(output.AccountId),
    InvitationId: __expectString(output.InvitationId),
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MemberStatus: __expectString(output.MemberStatus),
  } as any;
};

const deserializeAws_restJson1InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
};

const deserializeAws_restJson1IpFilter = (output: any, context: __SerdeContext): IpFilter => {
  return {
    Cidr: __expectString(output.Cidr),
  } as any;
};

const deserializeAws_restJson1IpFilterList = (output: any, context: __SerdeContext): IpFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IpFilter(entry, context);
    });
};

const deserializeAws_restJson1IpOrganizationDetails = (output: any, context: __SerdeContext): IpOrganizationDetails => {
  return {
    Asn: __expectInt32(output.Asn),
    AsnOrg: __expectString(output.AsnOrg),
    Isp: __expectString(output.Isp),
    Org: __expectString(output.Org),
  } as any;
};

const deserializeAws_restJson1Ipv6CidrBlockAssociation = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CidrBlockState: __expectString(output.CidrBlockState),
    Ipv6CidrBlock: __expectString(output.Ipv6CidrBlock),
  } as any;
};

const deserializeAws_restJson1Ipv6CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
};

const deserializeAws_restJson1KeywordFilter = (output: any, context: __SerdeContext): KeywordFilter => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1KeywordFilterList = (output: any, context: __SerdeContext): KeywordFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeywordFilter(entry, context);
    });
};

const deserializeAws_restJson1LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  return {
    Code: __expectString(output.Code),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1Malware = (output: any, context: __SerdeContext): Malware => {
  return {
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MalwareList = (output: any, context: __SerdeContext): Malware[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Malware(entry, context);
    });
};

const deserializeAws_restJson1MapFilter = (output: any, context: __SerdeContext): MapFilter => {
  return {
    Comparison: __expectString(output.Comparison),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1MapFilterList = (output: any, context: __SerdeContext): MapFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MapFilter(entry, context);
    });
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    AccountId: __expectString(output.AccountId),
    AdministratorId: __expectString(output.AdministratorId),
    Email: __expectString(output.Email),
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MasterId: __expectString(output.MasterId),
    MemberStatus: __expectString(output.MemberStatus),
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberList = (output: any, context: __SerdeContext): Member[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Member(entry, context);
    });
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    DestinationDomain: __expectString(output.DestinationDomain),
    DestinationIpV4: __expectString(output.DestinationIpV4),
    DestinationIpV6: __expectString(output.DestinationIpV6),
    DestinationPort: __expectInt32(output.DestinationPort),
    Direction: __expectString(output.Direction),
    OpenPortRange:
      output.OpenPortRange !== undefined && output.OpenPortRange !== null
        ? deserializeAws_restJson1PortRange(output.OpenPortRange, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    SourceDomain: __expectString(output.SourceDomain),
    SourceIpV4: __expectString(output.SourceIpV4),
    SourceIpV6: __expectString(output.SourceIpV6),
    SourceMac: __expectString(output.SourceMac),
    SourcePort: __expectInt32(output.SourcePort),
  } as any;
};

const deserializeAws_restJson1NetworkConnectionAction = (
  output: any,
  context: __SerdeContext
): NetworkConnectionAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    ConnectionDirection: __expectString(output.ConnectionDirection),
    LocalPortDetails:
      output.LocalPortDetails !== undefined && output.LocalPortDetails !== null
        ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    RemoteIpDetails:
      output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
    RemotePortDetails:
      output.RemotePortDetails !== undefined && output.RemotePortDetails !== null
        ? deserializeAws_restJson1ActionRemotePortDetails(output.RemotePortDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkHeader = (output: any, context: __SerdeContext): NetworkHeader => {
  return {
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Destination, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Source, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponent = (output: any, context: __SerdeContext): NetworkPathComponent => {
  return {
    ComponentId: __expectString(output.ComponentId),
    ComponentType: __expectString(output.ComponentType),
    Egress:
      output.Egress !== undefined && output.Egress !== null
        ? deserializeAws_restJson1NetworkHeader(output.Egress, context)
        : undefined,
    Ingress:
      output.Ingress !== undefined && output.Ingress !== null
        ? deserializeAws_restJson1NetworkHeader(output.Ingress, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponentDetails = (
  output: any,
  context: __SerdeContext
): NetworkPathComponentDetails => {
  return {
    Address:
      output.Address !== undefined && output.Address !== null
        ? deserializeAws_restJson1StringList(output.Address, context)
        : undefined,
    PortRanges:
      output.PortRanges !== undefined && output.PortRanges !== null
        ? deserializeAws_restJson1PortRangeList(output.PortRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathList = (output: any, context: __SerdeContext): NetworkPathComponent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkPathComponent(entry, context);
    });
};

const deserializeAws_restJson1NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Note = (output: any, context: __SerdeContext): Note => {
  return {
    Text: __expectString(output.Text),
    UpdatedAt: __expectString(output.UpdatedAt),
    UpdatedBy: __expectString(output.UpdatedBy),
  } as any;
};

const deserializeAws_restJson1NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    Eq: __limitedParseDouble(output.Eq),
    Gte: __limitedParseDouble(output.Gte),
    Lte: __limitedParseDouble(output.Lte),
  } as any;
};

const deserializeAws_restJson1NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NumberFilter(entry, context);
    });
};

const deserializeAws_restJson1Occurrences = (output: any, context: __SerdeContext): Occurrences => {
  return {
    Cells:
      output.Cells !== undefined && output.Cells !== null
        ? deserializeAws_restJson1Cells(output.Cells, context)
        : undefined,
    LineRanges:
      output.LineRanges !== undefined && output.LineRanges !== null
        ? deserializeAws_restJson1Ranges(output.LineRanges, context)
        : undefined,
    OffsetRanges:
      output.OffsetRanges !== undefined && output.OffsetRanges !== null
        ? deserializeAws_restJson1Ranges(output.OffsetRanges, context)
        : undefined,
    Pages:
      output.Pages !== undefined && output.Pages !== null
        ? deserializeAws_restJson1Pages(output.Pages, context)
        : undefined,
    Records:
      output.Records !== undefined && output.Records !== null
        ? deserializeAws_restJson1Records(output.Records, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Page = (output: any, context: __SerdeContext): Page => {
  return {
    LineRange:
      output.LineRange !== undefined && output.LineRange !== null
        ? deserializeAws_restJson1Range(output.LineRange, context)
        : undefined,
    OffsetRange:
      output.OffsetRange !== undefined && output.OffsetRange !== null
        ? deserializeAws_restJson1Range(output.OffsetRange, context)
        : undefined,
    PageNumber: __expectLong(output.PageNumber),
  } as any;
};

const deserializeAws_restJson1Pages = (output: any, context: __SerdeContext): Page[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Page(entry, context);
    });
};

const deserializeAws_restJson1PatchSummary = (output: any, context: __SerdeContext): PatchSummary => {
  return {
    FailedCount: __expectInt32(output.FailedCount),
    Id: __expectString(output.Id),
    InstalledCount: __expectInt32(output.InstalledCount),
    InstalledOtherCount: __expectInt32(output.InstalledOtherCount),
    InstalledPendingReboot: __expectInt32(output.InstalledPendingReboot),
    InstalledRejectedCount: __expectInt32(output.InstalledRejectedCount),
    MissingCount: __expectInt32(output.MissingCount),
    Operation: __expectString(output.Operation),
    OperationEndTime: __expectString(output.OperationEndTime),
    OperationStartTime: __expectString(output.OperationStartTime),
    RebootOption: __expectString(output.RebootOption),
  } as any;
};

const deserializeAws_restJson1PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    PortProbeDetails:
      output.PortProbeDetails !== undefined && output.PortProbeDetails !== null
        ? deserializeAws_restJson1PortProbeDetailList(output.PortProbeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return {
    LocalIpDetails:
      output.LocalIpDetails !== undefined && output.LocalIpDetails !== null
        ? deserializeAws_restJson1ActionLocalIpDetails(output.LocalIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.LocalPortDetails !== undefined && output.LocalPortDetails !== null
        ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
        : undefined,
    RemoteIpDetails:
      output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetailList = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
};

const deserializeAws_restJson1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    Begin: __expectInt32(output.Begin),
    End: __expectInt32(output.End),
  } as any;
};

const deserializeAws_restJson1PortRangeFromTo = (output: any, context: __SerdeContext): PortRangeFromTo => {
  return {
    From: __expectInt32(output.From),
    To: __expectInt32(output.To),
  } as any;
};

const deserializeAws_restJson1PortRangeList = (output: any, context: __SerdeContext): PortRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortRange(entry, context);
    });
};

const deserializeAws_restJson1ProcessDetails = (output: any, context: __SerdeContext): ProcessDetails => {
  return {
    LaunchedAt: __expectString(output.LaunchedAt),
    Name: __expectString(output.Name),
    ParentPid: __expectInt32(output.ParentPid),
    Path: __expectString(output.Path),
    Pid: __expectInt32(output.Pid),
    TerminatedAt: __expectString(output.TerminatedAt),
  } as any;
};

const deserializeAws_restJson1Product = (output: any, context: __SerdeContext): Product => {
  return {
    ActivationUrl: __expectString(output.ActivationUrl),
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1CategoryList(output.Categories, context)
        : undefined,
    CompanyName: __expectString(output.CompanyName),
    Description: __expectString(output.Description),
    IntegrationTypes:
      output.IntegrationTypes !== undefined && output.IntegrationTypes !== null
        ? deserializeAws_restJson1IntegrationTypeList(output.IntegrationTypes, context)
        : undefined,
    MarketplaceUrl: __expectString(output.MarketplaceUrl),
    ProductArn: __expectString(output.ProductArn),
    ProductName: __expectString(output.ProductName),
    ProductSubscriptionResourcePolicy: __expectString(output.ProductSubscriptionResourcePolicy),
  } as any;
};

const deserializeAws_restJson1ProductsList = (output: any, context: __SerdeContext): Product[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Product(entry, context);
    });
};

const deserializeAws_restJson1ProductSubscriptionArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Range = (output: any, context: __SerdeContext): Range => {
  return {
    End: __expectLong(output.End),
    Start: __expectLong(output.Start),
    StartColumn: __expectLong(output.StartColumn),
  } as any;
};

const deserializeAws_restJson1Ranges = (output: any, context: __SerdeContext): Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Range(entry, context);
    });
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Text: __expectString(output.Text),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    JsonPath: __expectString(output.JsonPath),
    RecordIndex: __expectLong(output.RecordIndex),
  } as any;
};

const deserializeAws_restJson1Records = (output: any, context: __SerdeContext): _Record[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
    });
};

const deserializeAws_restJson1RelatedFinding = (output: any, context: __SerdeContext): RelatedFinding => {
  return {
    Id: __expectString(output.Id),
    ProductArn: __expectString(output.ProductArn),
  } as any;
};

const deserializeAws_restJson1RelatedFindingList = (output: any, context: __SerdeContext): RelatedFinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RelatedFinding(entry, context);
    });
};

const deserializeAws_restJson1RelatedRequirementsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    Recommendation:
      output.Recommendation !== undefined && output.Recommendation !== null
        ? deserializeAws_restJson1Recommendation(output.Recommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    DataClassification:
      output.DataClassification !== undefined && output.DataClassification !== null
        ? deserializeAws_restJson1DataClassificationDetails(output.DataClassification, context)
        : undefined,
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1ResourceDetails(output.Details, context)
        : undefined,
    Id: __expectString(output.Id),
    Partition: __expectString(output.Partition),
    Region: __expectString(output.Region),
    ResourceRole: __expectString(output.ResourceRole),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1FieldMap(output.Tags, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    AwsApiGatewayRestApi:
      output.AwsApiGatewayRestApi !== undefined && output.AwsApiGatewayRestApi !== null
        ? deserializeAws_restJson1AwsApiGatewayRestApiDetails(output.AwsApiGatewayRestApi, context)
        : undefined,
    AwsApiGatewayStage:
      output.AwsApiGatewayStage !== undefined && output.AwsApiGatewayStage !== null
        ? deserializeAws_restJson1AwsApiGatewayStageDetails(output.AwsApiGatewayStage, context)
        : undefined,
    AwsApiGatewayV2Api:
      output.AwsApiGatewayV2Api !== undefined && output.AwsApiGatewayV2Api !== null
        ? deserializeAws_restJson1AwsApiGatewayV2ApiDetails(output.AwsApiGatewayV2Api, context)
        : undefined,
    AwsApiGatewayV2Stage:
      output.AwsApiGatewayV2Stage !== undefined && output.AwsApiGatewayV2Stage !== null
        ? deserializeAws_restJson1AwsApiGatewayV2StageDetails(output.AwsApiGatewayV2Stage, context)
        : undefined,
    AwsAutoScalingAutoScalingGroup:
      output.AwsAutoScalingAutoScalingGroup !== undefined && output.AwsAutoScalingAutoScalingGroup !== null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(output.AwsAutoScalingAutoScalingGroup, context)
        : undefined,
    AwsAutoScalingLaunchConfiguration:
      output.AwsAutoScalingLaunchConfiguration !== undefined && output.AwsAutoScalingLaunchConfiguration !== null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails(
            output.AwsAutoScalingLaunchConfiguration,
            context
          )
        : undefined,
    AwsCertificateManagerCertificate:
      output.AwsCertificateManagerCertificate !== undefined && output.AwsCertificateManagerCertificate !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDetails(
            output.AwsCertificateManagerCertificate,
            context
          )
        : undefined,
    AwsCloudFrontDistribution:
      output.AwsCloudFrontDistribution !== undefined && output.AwsCloudFrontDistribution !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionDetails(output.AwsCloudFrontDistribution, context)
        : undefined,
    AwsCloudTrailTrail:
      output.AwsCloudTrailTrail !== undefined && output.AwsCloudTrailTrail !== null
        ? deserializeAws_restJson1AwsCloudTrailTrailDetails(output.AwsCloudTrailTrail, context)
        : undefined,
    AwsCodeBuildProject:
      output.AwsCodeBuildProject !== undefined && output.AwsCodeBuildProject !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectDetails(output.AwsCodeBuildProject, context)
        : undefined,
    AwsDynamoDbTable:
      output.AwsDynamoDbTable !== undefined && output.AwsDynamoDbTable !== null
        ? deserializeAws_restJson1AwsDynamoDbTableDetails(output.AwsDynamoDbTable, context)
        : undefined,
    AwsEc2Eip:
      output.AwsEc2Eip !== undefined && output.AwsEc2Eip !== null
        ? deserializeAws_restJson1AwsEc2EipDetails(output.AwsEc2Eip, context)
        : undefined,
    AwsEc2Instance:
      output.AwsEc2Instance !== undefined && output.AwsEc2Instance !== null
        ? deserializeAws_restJson1AwsEc2InstanceDetails(output.AwsEc2Instance, context)
        : undefined,
    AwsEc2NetworkAcl:
      output.AwsEc2NetworkAcl !== undefined && output.AwsEc2NetworkAcl !== null
        ? deserializeAws_restJson1AwsEc2NetworkAclDetails(output.AwsEc2NetworkAcl, context)
        : undefined,
    AwsEc2NetworkInterface:
      output.AwsEc2NetworkInterface !== undefined && output.AwsEc2NetworkInterface !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceDetails(output.AwsEc2NetworkInterface, context)
        : undefined,
    AwsEc2SecurityGroup:
      output.AwsEc2SecurityGroup !== undefined && output.AwsEc2SecurityGroup !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupDetails(output.AwsEc2SecurityGroup, context)
        : undefined,
    AwsEc2Subnet:
      output.AwsEc2Subnet !== undefined && output.AwsEc2Subnet !== null
        ? deserializeAws_restJson1AwsEc2SubnetDetails(output.AwsEc2Subnet, context)
        : undefined,
    AwsEc2Volume:
      output.AwsEc2Volume !== undefined && output.AwsEc2Volume !== null
        ? deserializeAws_restJson1AwsEc2VolumeDetails(output.AwsEc2Volume, context)
        : undefined,
    AwsEc2Vpc:
      output.AwsEc2Vpc !== undefined && output.AwsEc2Vpc !== null
        ? deserializeAws_restJson1AwsEc2VpcDetails(output.AwsEc2Vpc, context)
        : undefined,
    AwsEc2VpnConnection:
      output.AwsEc2VpnConnection !== undefined && output.AwsEc2VpnConnection !== null
        ? deserializeAws_restJson1AwsEc2VpnConnectionDetails(output.AwsEc2VpnConnection, context)
        : undefined,
    AwsEcrContainerImage:
      output.AwsEcrContainerImage !== undefined && output.AwsEcrContainerImage !== null
        ? deserializeAws_restJson1AwsEcrContainerImageDetails(output.AwsEcrContainerImage, context)
        : undefined,
    AwsEcsCluster:
      output.AwsEcsCluster !== undefined && output.AwsEcsCluster !== null
        ? deserializeAws_restJson1AwsEcsClusterDetails(output.AwsEcsCluster, context)
        : undefined,
    AwsEcsService:
      output.AwsEcsService !== undefined && output.AwsEcsService !== null
        ? deserializeAws_restJson1AwsEcsServiceDetails(output.AwsEcsService, context)
        : undefined,
    AwsEcsTaskDefinition:
      output.AwsEcsTaskDefinition !== undefined && output.AwsEcsTaskDefinition !== null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionDetails(output.AwsEcsTaskDefinition, context)
        : undefined,
    AwsElasticBeanstalkEnvironment:
      output.AwsElasticBeanstalkEnvironment !== undefined && output.AwsElasticBeanstalkEnvironment !== null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(output.AwsElasticBeanstalkEnvironment, context)
        : undefined,
    AwsElasticsearchDomain:
      output.AwsElasticsearchDomain !== undefined && output.AwsElasticsearchDomain !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainDetails(output.AwsElasticsearchDomain, context)
        : undefined,
    AwsElbLoadBalancer:
      output.AwsElbLoadBalancer !== undefined && output.AwsElbLoadBalancer !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerDetails(output.AwsElbLoadBalancer, context)
        : undefined,
    AwsElbv2LoadBalancer:
      output.AwsElbv2LoadBalancer !== undefined && output.AwsElbv2LoadBalancer !== null
        ? deserializeAws_restJson1AwsElbv2LoadBalancerDetails(output.AwsElbv2LoadBalancer, context)
        : undefined,
    AwsIamAccessKey:
      output.AwsIamAccessKey !== undefined && output.AwsIamAccessKey !== null
        ? deserializeAws_restJson1AwsIamAccessKeyDetails(output.AwsIamAccessKey, context)
        : undefined,
    AwsIamGroup:
      output.AwsIamGroup !== undefined && output.AwsIamGroup !== null
        ? deserializeAws_restJson1AwsIamGroupDetails(output.AwsIamGroup, context)
        : undefined,
    AwsIamPolicy:
      output.AwsIamPolicy !== undefined && output.AwsIamPolicy !== null
        ? deserializeAws_restJson1AwsIamPolicyDetails(output.AwsIamPolicy, context)
        : undefined,
    AwsIamRole:
      output.AwsIamRole !== undefined && output.AwsIamRole !== null
        ? deserializeAws_restJson1AwsIamRoleDetails(output.AwsIamRole, context)
        : undefined,
    AwsIamUser:
      output.AwsIamUser !== undefined && output.AwsIamUser !== null
        ? deserializeAws_restJson1AwsIamUserDetails(output.AwsIamUser, context)
        : undefined,
    AwsKmsKey:
      output.AwsKmsKey !== undefined && output.AwsKmsKey !== null
        ? deserializeAws_restJson1AwsKmsKeyDetails(output.AwsKmsKey, context)
        : undefined,
    AwsLambdaFunction:
      output.AwsLambdaFunction !== undefined && output.AwsLambdaFunction !== null
        ? deserializeAws_restJson1AwsLambdaFunctionDetails(output.AwsLambdaFunction, context)
        : undefined,
    AwsLambdaLayerVersion:
      output.AwsLambdaLayerVersion !== undefined && output.AwsLambdaLayerVersion !== null
        ? deserializeAws_restJson1AwsLambdaLayerVersionDetails(output.AwsLambdaLayerVersion, context)
        : undefined,
    AwsRdsDbCluster:
      output.AwsRdsDbCluster !== undefined && output.AwsRdsDbCluster !== null
        ? deserializeAws_restJson1AwsRdsDbClusterDetails(output.AwsRdsDbCluster, context)
        : undefined,
    AwsRdsDbClusterSnapshot:
      output.AwsRdsDbClusterSnapshot !== undefined && output.AwsRdsDbClusterSnapshot !== null
        ? deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails(output.AwsRdsDbClusterSnapshot, context)
        : undefined,
    AwsRdsDbInstance:
      output.AwsRdsDbInstance !== undefined && output.AwsRdsDbInstance !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceDetails(output.AwsRdsDbInstance, context)
        : undefined,
    AwsRdsDbSnapshot:
      output.AwsRdsDbSnapshot !== undefined && output.AwsRdsDbSnapshot !== null
        ? deserializeAws_restJson1AwsRdsDbSnapshotDetails(output.AwsRdsDbSnapshot, context)
        : undefined,
    AwsRdsEventSubscription:
      output.AwsRdsEventSubscription !== undefined && output.AwsRdsEventSubscription !== null
        ? deserializeAws_restJson1AwsRdsEventSubscriptionDetails(output.AwsRdsEventSubscription, context)
        : undefined,
    AwsRedshiftCluster:
      output.AwsRedshiftCluster !== undefined && output.AwsRedshiftCluster !== null
        ? deserializeAws_restJson1AwsRedshiftClusterDetails(output.AwsRedshiftCluster, context)
        : undefined,
    AwsS3AccountPublicAccessBlock:
      output.AwsS3AccountPublicAccessBlock !== undefined && output.AwsS3AccountPublicAccessBlock !== null
        ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.AwsS3AccountPublicAccessBlock, context)
        : undefined,
    AwsS3Bucket:
      output.AwsS3Bucket !== undefined && output.AwsS3Bucket !== null
        ? deserializeAws_restJson1AwsS3BucketDetails(output.AwsS3Bucket, context)
        : undefined,
    AwsS3Object:
      output.AwsS3Object !== undefined && output.AwsS3Object !== null
        ? deserializeAws_restJson1AwsS3ObjectDetails(output.AwsS3Object, context)
        : undefined,
    AwsSecretsManagerSecret:
      output.AwsSecretsManagerSecret !== undefined && output.AwsSecretsManagerSecret !== null
        ? deserializeAws_restJson1AwsSecretsManagerSecretDetails(output.AwsSecretsManagerSecret, context)
        : undefined,
    AwsSnsTopic:
      output.AwsSnsTopic !== undefined && output.AwsSnsTopic !== null
        ? deserializeAws_restJson1AwsSnsTopicDetails(output.AwsSnsTopic, context)
        : undefined,
    AwsSqsQueue:
      output.AwsSqsQueue !== undefined && output.AwsSqsQueue !== null
        ? deserializeAws_restJson1AwsSqsQueueDetails(output.AwsSqsQueue, context)
        : undefined,
    AwsSsmPatchCompliance:
      output.AwsSsmPatchCompliance !== undefined && output.AwsSsmPatchCompliance !== null
        ? deserializeAws_restJson1AwsSsmPatchComplianceDetails(output.AwsSsmPatchCompliance, context)
        : undefined,
    AwsWafWebAcl:
      output.AwsWafWebAcl !== undefined && output.AwsWafWebAcl !== null
        ? deserializeAws_restJson1AwsWafWebAclDetails(output.AwsWafWebAcl, context)
        : undefined,
    Container:
      output.Container !== undefined && output.Container !== null
        ? deserializeAws_restJson1ContainerDetails(output.Container, context)
        : undefined,
    Other:
      output.Other !== undefined && output.Other !== null
        ? deserializeAws_restJson1FieldMap(output.Other, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    AccountId: __expectString(output.AccountId),
    ProcessingResult: __expectString(output.ProcessingResult),
  } as any;
};

const deserializeAws_restJson1ResultList = (output: any, context: __SerdeContext): Result[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Result(entry, context);
    });
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SensitiveDataDetections = (
  output: any,
  context: __SerdeContext
): SensitiveDataDetections => {
  return {
    Count: __expectLong(output.Count),
    Occurrences:
      output.Occurrences !== undefined && output.Occurrences !== null
        ? deserializeAws_restJson1Occurrences(output.Occurrences, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1SensitiveDataDetectionsList = (
  output: any,
  context: __SerdeContext
): SensitiveDataDetections[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataDetections(entry, context);
    });
};

const deserializeAws_restJson1SensitiveDataResult = (output: any, context: __SerdeContext): SensitiveDataResult => {
  return {
    Category: __expectString(output.Category),
    Detections:
      output.Detections !== undefined && output.Detections !== null
        ? deserializeAws_restJson1SensitiveDataDetectionsList(output.Detections, context)
        : undefined,
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1SensitiveDataResultList = (
  output: any,
  context: __SerdeContext
): SensitiveDataResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataResult(entry, context);
    });
};

const deserializeAws_restJson1Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    Label: __expectString(output.Label),
    Normalized: __expectInt32(output.Normalized),
    Original: __expectString(output.Original),
    Product: __limitedParseDouble(output.Product),
  } as any;
};

const deserializeAws_restJson1SoftwarePackage = (output: any, context: __SerdeContext): SoftwarePackage => {
  return {
    Architecture: __expectString(output.Architecture),
    Epoch: __expectString(output.Epoch),
    FilePath: __expectString(output.FilePath),
    Name: __expectString(output.Name),
    PackageManager: __expectString(output.PackageManager),
    Release: __expectString(output.Release),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1SoftwarePackageList = (output: any, context: __SerdeContext): SoftwarePackage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SoftwarePackage(entry, context);
    });
};

const deserializeAws_restJson1Standard = (output: any, context: __SerdeContext): Standard => {
  return {
    Description: __expectString(output.Description),
    EnabledByDefault: __expectBoolean(output.EnabledByDefault),
    Name: __expectString(output.Name),
    StandardsArn: __expectString(output.StandardsArn),
  } as any;
};

const deserializeAws_restJson1Standards = (output: any, context: __SerdeContext): Standard[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Standard(entry, context);
    });
};

const deserializeAws_restJson1StandardsControl = (output: any, context: __SerdeContext): StandardsControl => {
  return {
    ControlId: __expectString(output.ControlId),
    ControlStatus: __expectString(output.ControlStatus),
    ControlStatusUpdatedAt:
      output.ControlStatusUpdatedAt !== undefined && output.ControlStatusUpdatedAt !== null
        ? new Date(output.ControlStatusUpdatedAt)
        : undefined,
    Description: __expectString(output.Description),
    DisabledReason: __expectString(output.DisabledReason),
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    RemediationUrl: __expectString(output.RemediationUrl),
    SeverityRating: __expectString(output.SeverityRating),
    StandardsControlArn: __expectString(output.StandardsControlArn),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_restJson1StandardsControls = (output: any, context: __SerdeContext): StandardsControl[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StandardsControl(entry, context);
    });
};

const deserializeAws_restJson1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1StandardsSubscription = (output: any, context: __SerdeContext): StandardsSubscription => {
  return {
    StandardsArn: __expectString(output.StandardsArn),
    StandardsInput:
      output.StandardsInput !== undefined && output.StandardsInput !== null
        ? deserializeAws_restJson1StandardsInputParameterMap(output.StandardsInput, context)
        : undefined,
    StandardsStatus: __expectString(output.StandardsStatus),
    StandardsSubscriptionArn: __expectString(output.StandardsSubscriptionArn),
  } as any;
};

const deserializeAws_restJson1StandardsSubscriptions = (
  output: any,
  context: __SerdeContext
): StandardsSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StandardsSubscription(entry, context);
    });
};

const deserializeAws_restJson1StatusReason = (output: any, context: __SerdeContext): StatusReason => {
  return {
    Description: __expectString(output.Description),
    ReasonCode: __expectString(output.ReasonCode),
  } as any;
};

const deserializeAws_restJson1StatusReasonsList = (output: any, context: __SerdeContext): StatusReason[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StatusReason(entry, context);
    });
};

const deserializeAws_restJson1StringFilter = (output: any, context: __SerdeContext): StringFilter => {
  return {
    Comparison: __expectString(output.Comparison),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1StringFilterList = (output: any, context: __SerdeContext): StringFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StringFilter(entry, context);
    });
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ThreatIntelIndicator = (output: any, context: __SerdeContext): ThreatIntelIndicator => {
  return {
    Category: __expectString(output.Category),
    LastObservedAt: __expectString(output.LastObservedAt),
    Source: __expectString(output.Source),
    SourceUrl: __expectString(output.SourceUrl),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ThreatIntelIndicatorList = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
};

const deserializeAws_restJson1TypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return {
    Cvss:
      output.Cvss !== undefined && output.Cvss !== null
        ? deserializeAws_restJson1CvssList(output.Cvss, context)
        : undefined,
    Id: __expectString(output.Id),
    ReferenceUrls:
      output.ReferenceUrls !== undefined && output.ReferenceUrls !== null
        ? deserializeAws_restJson1StringList(output.ReferenceUrls, context)
        : undefined,
    RelatedVulnerabilities:
      output.RelatedVulnerabilities !== undefined && output.RelatedVulnerabilities !== null
        ? deserializeAws_restJson1StringList(output.RelatedVulnerabilities, context)
        : undefined,
    Vendor:
      output.Vendor !== undefined && output.Vendor !== null
        ? deserializeAws_restJson1VulnerabilityVendor(output.Vendor, context)
        : undefined,
    VulnerablePackages:
      output.VulnerablePackages !== undefined && output.VulnerablePackages !== null
        ? deserializeAws_restJson1SoftwarePackageList(output.VulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VulnerabilityList = (output: any, context: __SerdeContext): Vulnerability[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Vulnerability(entry, context);
    });
};

const deserializeAws_restJson1VulnerabilityVendor = (output: any, context: __SerdeContext): VulnerabilityVendor => {
  return {
    Name: __expectString(output.Name),
    Url: __expectString(output.Url),
    VendorCreatedAt: __expectString(output.VendorCreatedAt),
    VendorSeverity: __expectString(output.VendorSeverity),
    VendorUpdatedAt: __expectString(output.VendorUpdatedAt),
  } as any;
};

const deserializeAws_restJson1WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1WafExcludedRule = (output: any, context: __SerdeContext): WafExcludedRule => {
  return {
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1WafExcludedRuleList = (output: any, context: __SerdeContext): WafExcludedRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WafExcludedRule(entry, context);
    });
};

const deserializeAws_restJson1WafOverrideAction = (output: any, context: __SerdeContext): WafOverrideAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
