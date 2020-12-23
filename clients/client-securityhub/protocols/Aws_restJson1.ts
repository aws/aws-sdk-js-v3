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
  ActionTarget,
  AdminAccount,
  AvailabilityZone,
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
  AwsEc2NetworkInterfaceAttachment,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2NetworkInterfaceSecurityGroup,
  AwsEc2SecurityGroupDetails,
  AwsEc2SecurityGroupIpPermission,
  AwsEc2SecurityGroupIpRange,
  AwsEc2SecurityGroupIpv6Range,
  AwsEc2SecurityGroupPrefixListId,
  AwsEc2SecurityGroupUserIdGroupPair,
  AwsEc2VolumeAttachment,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsElasticsearchDomainDetails,
  AwsElasticsearchDomainDomainEndpointOptions,
  AwsElasticsearchDomainEncryptionAtRestOptions,
  AwsElasticsearchDomainNodeToNodeEncryptionOptions,
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
  AwsS3BucketDetails,
  AwsS3BucketServerSideEncryptionByDefault,
  AwsS3BucketServerSideEncryptionConfiguration,
  AwsS3BucketServerSideEncryptionRule,
  AwsS3ObjectDetails,
  AwsSecretsManagerSecretDetails,
  AwsSecretsManagerSecretRotationRules,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSecurityFindingIdentifier,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  AwsWafWebAclDetails,
  AwsWafWebAclRule,
  BatchUpdateFindingsUnprocessedFinding,
  CidrBlockAssociation,
  Compliance,
  ContainerDetails,
  Cvss,
  DateFilter,
  DateRange,
  ImportFindingsError,
  IntegrationType,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  IpFilter,
  Ipv6CidrBlockAssociation,
  KeywordFilter,
  LimitExceededException,
  LoadBalancerState,
  Malware,
  MapFilter,
  Network,
  NetworkHeader,
  NetworkPathComponent,
  NetworkPathComponentDetails,
  Note,
  NoteUpdate,
  NumberFilter,
  PatchSummary,
  PortRange,
  ProcessDetails,
  Product,
  Recommendation,
  RelatedFinding,
  Remediation,
  Resource,
  ResourceConflictException,
  ResourceDetails,
  ResourceNotFoundException,
  Result,
  Severity,
  SeverityUpdate,
  SoftwarePackage,
  SortCriterion,
  Standard,
  StandardsControl,
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StatusReason,
  StringFilter,
  ThreatIntelIndicator,
  Vulnerability,
  VulnerabilityVendor,
  WafAction,
  WafExcludedRule,
  WafOverrideAction,
  Workflow,
  WorkflowUpdate,
} from "../models/models_0";
import { Insight, InsightResultValue, InsightResults, Invitation, Member } from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/master";
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId }),
    ...(input.MasterId !== undefined && input.MasterId !== null && { MasterId: input.MasterId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/standards/deregister";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/standards/register";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/findings/import";
  let body: any;
  body = JSON.stringify({
    ...(input.Findings !== undefined &&
      input.Findings !== null && { Findings: serializeAws_restJson1AwsSecurityFindingList(input.Findings, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/findings/batchupdate";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/actionTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.GroupByAttribute !== undefined &&
      input.GroupByAttribute !== null && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails !== undefined &&
      input.AccountDetails !== null && {
        AccountDetails: serializeAws_restJson1AccountDetailsList(input.AccountDetails, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/insights/{InsightArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/invitations/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/members/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/actionTargets/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ActionTargetArns !== undefined &&
      input.ActionTargetArns !== null && {
        ActionTargetArns: serializeAws_restJson1ArnList(input.ActionTargetArns, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts";
  const query: any = {
    ...(input.HubArn !== undefined && { HubArn: input.HubArn }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/organization/configuration";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/products";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/standards";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/standards/controls/{StandardsSubscriptionArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/productSubscriptions/{ProductSubscriptionArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/organization/admin/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/master/disassociate";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/members/disassociate";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/productSubscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/organization/admin/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.EnableDefaultStandards !== undefined &&
      input.EnableDefaultStandards !== null && { EnableDefaultStandards: input.EnableDefaultStandards }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/standards/get";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/insights/results/{InsightArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/insights/get";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightArns !== undefined &&
      input.InsightArns !== null && { InsightArns: serializeAws_restJson1ArnList(input.InsightArns, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/invitations/count";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/master";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/members/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/members/invite";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/productSubscriptions";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/invitations";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/members";
  const query: any = {
    ...(input.OnlyAssociated !== undefined && { OnlyAssociated: input.OnlyAssociated.toString() }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/organization/admin";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
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
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.Note !== undefined &&
      input.Note !== null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/insights/{InsightArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/organization/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { AutoEnable: input.AutoEnable }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnableControls !== undefined &&
      input.AutoEnableControls !== null && { AutoEnableControls: input.AutoEnableControls }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/standards/control/{StandardsControlArn+}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.FailedCount !== undefined && data.FailedCount !== null) {
    contents.FailedCount = data.FailedCount;
  }
  if (data.FailedFindings !== undefined && data.FailedFindings !== null) {
    contents.FailedFindings = deserializeAws_restJson1ImportFindingsErrorList(data.FailedFindings, context);
  }
  if (data.SuccessCount !== undefined && data.SuccessCount !== null) {
    contents.SuccessCount = data.SuccessCount;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
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
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
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
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargets !== undefined && data.ActionTargets !== null) {
    contents.ActionTargets = deserializeAws_restJson1ActionTargetList(data.ActionTargets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.AutoEnableControls !== undefined && data.AutoEnableControls !== null) {
    contents.AutoEnableControls = data.AutoEnableControls;
  }
  if (data.HubArn !== undefined && data.HubArn !== null) {
    contents.HubArn = data.HubArn;
  }
  if (data.SubscribedAt !== undefined && data.SubscribedAt !== null) {
    contents.SubscribedAt = data.SubscribedAt;
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
  const data: any = await parseBody(output.body, context);
  if (data.AutoEnable !== undefined && data.AutoEnable !== null) {
    contents.AutoEnable = data.AutoEnable;
  }
  if (data.MemberAccountLimitReached !== undefined && data.MemberAccountLimitReached !== null) {
    contents.MemberAccountLimitReached = data.MemberAccountLimitReached;
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
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.Controls !== undefined && data.Controls !== null) {
    contents.Controls = deserializeAws_restJson1StandardsControls(data.Controls, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.ProductSubscriptionArn !== undefined && data.ProductSubscriptionArn !== null) {
    contents.ProductSubscriptionArn = data.ProductSubscriptionArn;
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
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.Findings !== undefined && data.Findings !== null) {
    contents.Findings = deserializeAws_restJson1AwsSecurityFindingList(data.Findings, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.Insights !== undefined && data.Insights !== null) {
    contents.Insights = deserializeAws_restJson1InsightList(data.Insights, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.InvitationsCount !== undefined && data.InvitationsCount !== null) {
    contents.InvitationsCount = data.InvitationsCount;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.AdminAccounts !== undefined && data.AdminAccounts !== null) {
    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.AdminAccounts, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
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
  const data: any = await parseBody(output.body, context);
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
      input.PercentTraffic !== null && { PercentTraffic: input.PercentTraffic }),
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
      input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: input.ThrottlingRateLimit }),
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
      input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: input.ThrottlingRateLimit }),
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
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
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
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(input.SecurityGroups, context),
      }),
    ...(input.SourceDestCheck !== undefined &&
      input.SourceDestCheck !== null && { SourceDestCheck: input.SourceDestCheck }),
  };
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
    ...(input.NodeToNodeEncryptionOptions !== undefined &&
      input.NodeToNodeEncryptionOptions !== null && {
        NodeToNodeEncryptionOptions: serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
          input.NodeToNodeEncryptionOptions,
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

const serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  input: AwsElasticsearchDomainEncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
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
    ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeyManager !== undefined && input.KeyManager !== null && { KeyManager: input.KeyManager }),
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
        CurrentRestoreRateInMegaBytesPerSecond: input.CurrentRestoreRateInMegaBytesPerSecond,
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

const serializeAws_restJson1AwsS3BucketDetails = (input: AwsS3BucketDetails, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.OwnerName !== undefined && input.OwnerName !== null && { OwnerName: input.OwnerName }),
    ...(input.ServerSideEncryptionConfiguration !== undefined &&
      input.ServerSideEncryptionConfiguration !== null && {
        ServerSideEncryptionConfiguration: serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
          input.ServerSideEncryptionConfiguration,
          context
        ),
      }),
  };
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
    ...(input.AwsAccountId !== undefined && input.AwsAccountId !== null && { AwsAccountId: input.AwsAccountId }),
    ...(input.Compliance !== undefined &&
      input.Compliance !== null && { Compliance: serializeAws_restJson1Compliance(input.Compliance, context) }),
    ...(input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence }),
    ...(input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt }),
    ...(input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
    ...(input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState }),
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

const serializeAws_restJson1AwsSecurityFindingList = (input: AwsSecurityFinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsSecurityFinding(entry, context);
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

const serializeAws_restJson1Cvss = (input: Cvss, context: __SerdeContext): any => {
  return {
    ...(input.BaseScore !== undefined && input.BaseScore !== null && { BaseScore: input.BaseScore }),
    ...(input.BaseVector !== undefined && input.BaseVector !== null && { BaseVector: input.BaseVector }),
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

const serializeAws_restJson1FieldMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
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
    ...(input.Eq !== undefined && input.Eq !== null && { Eq: input.Eq }),
    ...(input.Gte !== undefined && input.Gte !== null && { Gte: input.Gte }),
    ...(input.Lte !== undefined && input.Lte !== null && { Lte: input.Lte }),
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

const serializeAws_restJson1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin !== undefined && input.Begin !== null && { Begin: input.Begin }),
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
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

const serializeAws_restJson1Recommendation = (input: Recommendation, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
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
    ...(input.AwsEc2Volume !== undefined &&
      input.AwsEc2Volume !== null && {
        AwsEc2Volume: serializeAws_restJson1AwsEc2VolumeDetails(input.AwsEc2Volume, context),
      }),
    ...(input.AwsEc2Vpc !== undefined &&
      input.AwsEc2Vpc !== null && { AwsEc2Vpc: serializeAws_restJson1AwsEc2VpcDetails(input.AwsEc2Vpc, context) }),
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
    ...(input.AwsRedshiftCluster !== undefined &&
      input.AwsRedshiftCluster !== null && {
        AwsRedshiftCluster: serializeAws_restJson1AwsRedshiftClusterDetails(input.AwsRedshiftCluster, context),
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

const serializeAws_restJson1Severity = (input: Severity, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    ...(input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized }),
    ...(input.Original !== undefined && input.Original !== null && { Original: input.Original }),
    ...(input.Product !== undefined && input.Product !== null && { Product: input.Product }),
  };
};

const serializeAws_restJson1SeverityUpdate = (input: SeverityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
    ...(input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized }),
    ...(input.Product !== undefined && input.Product !== null && { Product: input.Product }),
  };
};

const serializeAws_restJson1SoftwarePackage = (input: SoftwarePackage, context: __SerdeContext): any => {
  return {
    ...(input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture }),
    ...(input.Epoch !== undefined && input.Epoch !== null && { Epoch: input.Epoch }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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

const deserializeAws_restJson1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    ActionTargetArn:
      output.ActionTargetArn !== undefined && output.ActionTargetArn !== null ? output.ActionTargetArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
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

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    ZoneName: output.ZoneName !== undefined && output.ZoneName !== null ? output.ZoneName : undefined,
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

const deserializeAws_restJson1AwsApiGatewayAccessLogSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayAccessLogSettings => {
  return {
    DestinationArn:
      output.DestinationArn !== undefined && output.DestinationArn !== null ? output.DestinationArn : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayCanarySettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayCanarySettings => {
  return {
    DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
    PercentTraffic:
      output.PercentTraffic !== undefined && output.PercentTraffic !== null ? output.PercentTraffic : undefined,
    StageVariableOverrides:
      output.StageVariableOverrides !== undefined && output.StageVariableOverrides !== null
        ? deserializeAws_restJson1FieldMap(output.StageVariableOverrides, context)
        : undefined,
    UseStageCache:
      output.UseStageCache !== undefined && output.UseStageCache !== null ? output.UseStageCache : undefined,
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
    CacheDataEncrypted:
      output.CacheDataEncrypted !== undefined && output.CacheDataEncrypted !== null
        ? output.CacheDataEncrypted
        : undefined,
    CacheTtlInSeconds:
      output.CacheTtlInSeconds !== undefined && output.CacheTtlInSeconds !== null
        ? output.CacheTtlInSeconds
        : undefined,
    CachingEnabled:
      output.CachingEnabled !== undefined && output.CachingEnabled !== null ? output.CachingEnabled : undefined,
    DataTraceEnabled:
      output.DataTraceEnabled !== undefined && output.DataTraceEnabled !== null ? output.DataTraceEnabled : undefined,
    HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
    LoggingLevel: output.LoggingLevel !== undefined && output.LoggingLevel !== null ? output.LoggingLevel : undefined,
    MetricsEnabled:
      output.MetricsEnabled !== undefined && output.MetricsEnabled !== null ? output.MetricsEnabled : undefined,
    RequireAuthorizationForCacheControl:
      output.RequireAuthorizationForCacheControl !== undefined && output.RequireAuthorizationForCacheControl !== null
        ? output.RequireAuthorizationForCacheControl
        : undefined,
    ResourcePath: output.ResourcePath !== undefined && output.ResourcePath !== null ? output.ResourcePath : undefined,
    ThrottlingBurstLimit:
      output.ThrottlingBurstLimit !== undefined && output.ThrottlingBurstLimit !== null
        ? output.ThrottlingBurstLimit
        : undefined,
    ThrottlingRateLimit:
      output.ThrottlingRateLimit !== undefined && output.ThrottlingRateLimit !== null
        ? output.ThrottlingRateLimit
        : undefined,
    UnauthorizedCacheControlHeaderStrategy:
      output.UnauthorizedCacheControlHeaderStrategy !== undefined &&
      output.UnauthorizedCacheControlHeaderStrategy !== null
        ? output.UnauthorizedCacheControlHeaderStrategy
        : undefined,
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
    ApiKeySource: output.ApiKeySource !== undefined && output.ApiKeySource !== null ? output.ApiKeySource : undefined,
    BinaryMediaTypes:
      output.BinaryMediaTypes !== undefined && output.BinaryMediaTypes !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.BinaryMediaTypes, context)
        : undefined,
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EndpointConfiguration:
      output.EndpointConfiguration !== undefined && output.EndpointConfiguration !== null
        ? deserializeAws_restJson1AwsApiGatewayEndpointConfiguration(output.EndpointConfiguration, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MinimumCompressionSize:
      output.MinimumCompressionSize !== undefined && output.MinimumCompressionSize !== null
        ? output.MinimumCompressionSize
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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
    CacheClusterEnabled:
      output.CacheClusterEnabled !== undefined && output.CacheClusterEnabled !== null
        ? output.CacheClusterEnabled
        : undefined,
    CacheClusterSize:
      output.CacheClusterSize !== undefined && output.CacheClusterSize !== null ? output.CacheClusterSize : undefined,
    CacheClusterStatus:
      output.CacheClusterStatus !== undefined && output.CacheClusterStatus !== null
        ? output.CacheClusterStatus
        : undefined,
    CanarySettings:
      output.CanarySettings !== undefined && output.CanarySettings !== null
        ? deserializeAws_restJson1AwsApiGatewayCanarySettings(output.CanarySettings, context)
        : undefined,
    ClientCertificateId:
      output.ClientCertificateId !== undefined && output.ClientCertificateId !== null
        ? output.ClientCertificateId
        : undefined,
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DocumentationVersion:
      output.DocumentationVersion !== undefined && output.DocumentationVersion !== null
        ? output.DocumentationVersion
        : undefined,
    LastUpdatedDate:
      output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
    MethodSettings:
      output.MethodSettings !== undefined && output.MethodSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayMethodSettingsList(output.MethodSettings, context)
        : undefined,
    StageName: output.StageName !== undefined && output.StageName !== null ? output.StageName : undefined,
    TracingEnabled:
      output.TracingEnabled !== undefined && output.TracingEnabled !== null ? output.TracingEnabled : undefined,
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1FieldMap(output.Variables, context)
        : undefined,
    WebAclArn: output.WebAclArn !== undefined && output.WebAclArn !== null ? output.WebAclArn : undefined,
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2ApiDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2ApiDetails => {
  return {
    ApiEndpoint: output.ApiEndpoint !== undefined && output.ApiEndpoint !== null ? output.ApiEndpoint : undefined,
    ApiId: output.ApiId !== undefined && output.ApiId !== null ? output.ApiId : undefined,
    ApiKeySelectionExpression:
      output.ApiKeySelectionExpression !== undefined && output.ApiKeySelectionExpression !== null
        ? output.ApiKeySelectionExpression
        : undefined,
    CorsConfiguration:
      output.CorsConfiguration !== undefined && output.CorsConfiguration !== null
        ? deserializeAws_restJson1AwsCorsConfiguration(output.CorsConfiguration, context)
        : undefined,
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ProtocolType: output.ProtocolType !== undefined && output.ProtocolType !== null ? output.ProtocolType : undefined,
    RouteSelectionExpression:
      output.RouteSelectionExpression !== undefined && output.RouteSelectionExpression !== null
        ? output.RouteSelectionExpression
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2RouteSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2RouteSettings => {
  return {
    DataTraceEnabled:
      output.DataTraceEnabled !== undefined && output.DataTraceEnabled !== null ? output.DataTraceEnabled : undefined,
    DetailedMetricsEnabled:
      output.DetailedMetricsEnabled !== undefined && output.DetailedMetricsEnabled !== null
        ? output.DetailedMetricsEnabled
        : undefined,
    LoggingLevel: output.LoggingLevel !== undefined && output.LoggingLevel !== null ? output.LoggingLevel : undefined,
    ThrottlingBurstLimit:
      output.ThrottlingBurstLimit !== undefined && output.ThrottlingBurstLimit !== null
        ? output.ThrottlingBurstLimit
        : undefined,
    ThrottlingRateLimit:
      output.ThrottlingRateLimit !== undefined && output.ThrottlingRateLimit !== null
        ? output.ThrottlingRateLimit
        : undefined,
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
    ApiGatewayManaged:
      output.ApiGatewayManaged !== undefined && output.ApiGatewayManaged !== null
        ? output.ApiGatewayManaged
        : undefined,
    AutoDeploy: output.AutoDeploy !== undefined && output.AutoDeploy !== null ? output.AutoDeploy : undefined,
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    DefaultRouteSettings:
      output.DefaultRouteSettings !== undefined && output.DefaultRouteSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.DefaultRouteSettings, context)
        : undefined,
    DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    LastDeploymentStatusMessage:
      output.LastDeploymentStatusMessage !== undefined && output.LastDeploymentStatusMessage !== null
        ? output.LastDeploymentStatusMessage
        : undefined,
    LastUpdatedDate:
      output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
    RouteSettings:
      output.RouteSettings !== undefined && output.RouteSettings !== null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.RouteSettings, context)
        : undefined,
    StageName: output.StageName !== undefined && output.StageName !== null ? output.StageName : undefined,
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
    CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
    HealthCheckGracePeriod:
      output.HealthCheckGracePeriod !== undefined && output.HealthCheckGracePeriod !== null
        ? output.HealthCheckGracePeriod
        : undefined,
    HealthCheckType:
      output.HealthCheckType !== undefined && output.HealthCheckType !== null ? output.HealthCheckType : undefined,
    LaunchConfigurationName:
      output.LaunchConfigurationName !== undefined && output.LaunchConfigurationName !== null
        ? output.LaunchConfigurationName
        : undefined,
    LoadBalancerNames:
      output.LoadBalancerNames !== undefined && output.LoadBalancerNames !== null
        ? deserializeAws_restJson1StringList(output.LoadBalancerNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDetails = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDetails => {
  return {
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
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
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    ImportedAt: output.ImportedAt !== undefined && output.ImportedAt !== null ? output.ImportedAt : undefined,
    InUseBy:
      output.InUseBy !== undefined && output.InUseBy !== null
        ? deserializeAws_restJson1StringList(output.InUseBy, context)
        : undefined,
    IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
    Issuer: output.Issuer !== undefined && output.Issuer !== null ? output.Issuer : undefined,
    KeyAlgorithm: output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null ? output.KeyAlgorithm : undefined,
    KeyUsages:
      output.KeyUsages !== undefined && output.KeyUsages !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(output.KeyUsages, context)
        : undefined,
    NotAfter: output.NotAfter !== undefined && output.NotAfter !== null ? output.NotAfter : undefined,
    NotBefore: output.NotBefore !== undefined && output.NotBefore !== null ? output.NotBefore : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateOptions(output.Options, context)
        : undefined,
    RenewalEligibility:
      output.RenewalEligibility !== undefined && output.RenewalEligibility !== null
        ? output.RenewalEligibility
        : undefined,
    RenewalSummary:
      output.RenewalSummary !== undefined && output.RenewalSummary !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(output.RenewalSummary, context)
        : undefined,
    Serial: output.Serial !== undefined && output.Serial !== null ? output.Serial : undefined,
    SignatureAlgorithm:
      output.SignatureAlgorithm !== undefined && output.SignatureAlgorithm !== null
        ? output.SignatureAlgorithm
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    SubjectAlternativeNames:
      output.SubjectAlternativeNames !== undefined && output.SubjectAlternativeNames !== null
        ? deserializeAws_restJson1StringList(output.SubjectAlternativeNames, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDomainValidationOption => {
  return {
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ResourceRecord:
      output.ResourceRecord !== undefined && output.ResourceRecord !== null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(output.ResourceRecord, context)
        : undefined,
    ValidationDomain:
      output.ValidationDomain !== undefined && output.ValidationDomain !== null ? output.ValidationDomain : undefined,
    ValidationEmails:
      output.ValidationEmails !== undefined && output.ValidationEmails !== null
        ? deserializeAws_restJson1StringList(output.ValidationEmails, context)
        : undefined,
    ValidationMethod:
      output.ValidationMethod !== undefined && output.ValidationMethod !== null ? output.ValidationMethod : undefined,
    ValidationStatus:
      output.ValidationStatus !== undefined && output.ValidationStatus !== null ? output.ValidationStatus : undefined,
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
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OId: output.OId !== undefined && output.OId !== null ? output.OId : undefined,
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
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
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
    CertificateTransparencyLoggingPreference:
      output.CertificateTransparencyLoggingPreference !== undefined &&
      output.CertificateTransparencyLoggingPreference !== null
        ? output.CertificateTransparencyLoggingPreference
        : undefined,
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
    RenewalStatus:
      output.RenewalStatus !== undefined && output.RenewalStatus !== null ? output.RenewalStatus : undefined,
    RenewalStatusReason:
      output.RenewalStatusReason !== undefined && output.RenewalStatusReason !== null
        ? output.RenewalStatusReason
        : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateResourceRecord => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehavior => {
  return {
    ViewerProtocolPolicy:
      output.ViewerProtocolPolicy !== undefined && output.ViewerProtocolPolicy !== null
        ? output.ViewerProtocolPolicy
        : undefined,
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
    ViewerProtocolPolicy:
      output.ViewerProtocolPolicy !== undefined && output.ViewerProtocolPolicy !== null
        ? output.ViewerProtocolPolicy
        : undefined,
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
    DefaultRootObject:
      output.DefaultRootObject !== undefined && output.DefaultRootObject !== null
        ? output.DefaultRootObject
        : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null ? output.LastModifiedTime : undefined,
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
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  return {
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    IncludeCookies:
      output.IncludeCookies !== undefined && output.IncludeCookies !== null ? output.IncludeCookies : undefined,
    Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
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
    Quantity: output.Quantity !== undefined && output.Quantity !== null ? output.Quantity : undefined,
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
      return entry;
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
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    OriginPath: output.OriginPath !== undefined && output.OriginPath !== null ? output.OriginPath : undefined,
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
    OriginAccessIdentity:
      output.OriginAccessIdentity !== undefined && output.OriginAccessIdentity !== null
        ? output.OriginAccessIdentity
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudTrailTrailDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudTrailTrailDetails => {
  return {
    CloudWatchLogsLogGroupArn:
      output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
        ? output.CloudWatchLogsLogGroupArn
        : undefined,
    CloudWatchLogsRoleArn:
      output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
        ? output.CloudWatchLogsRoleArn
        : undefined,
    HasCustomEventSelectors:
      output.HasCustomEventSelectors !== undefined && output.HasCustomEventSelectors !== null
        ? output.HasCustomEventSelectors
        : undefined,
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    IncludeGlobalServiceEvents:
      output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
        ? output.IncludeGlobalServiceEvents
        : undefined,
    IsMultiRegionTrail:
      output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
        ? output.IsMultiRegionTrail
        : undefined,
    IsOrganizationTrail:
      output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
        ? output.IsOrganizationTrail
        : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    LogFileValidationEnabled:
      output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
        ? output.LogFileValidationEnabled
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
    SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
    SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
    TrailArn: output.TrailArn !== undefined && output.TrailArn !== null ? output.TrailArn : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectDetails => {
  return {
    EncryptionKey:
      output.EncryptionKey !== undefined && output.EncryptionKey !== null ? output.EncryptionKey : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironment(output.Environment, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
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
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    ImagePullCredentialsType:
      output.ImagePullCredentialsType !== undefined && output.ImagePullCredentialsType !== null
        ? output.ImagePullCredentialsType
        : undefined,
    RegistryCredential:
      output.RegistryCredential !== undefined && output.RegistryCredential !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(output.RegistryCredential, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentRegistryCredential => {
  return {
    Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
    CredentialProvider:
      output.CredentialProvider !== undefined && output.CredentialProvider !== null
        ? output.CredentialProvider
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectSource = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectSource => {
  return {
    GitCloneDepth:
      output.GitCloneDepth !== undefined && output.GitCloneDepth !== null ? output.GitCloneDepth : undefined,
    InsecureSsl: output.InsecureSsl !== undefined && output.InsecureSsl !== null ? output.InsecureSsl : undefined,
    Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCorsConfiguration = (output: any, context: __SerdeContext): AwsCorsConfiguration => {
  return {
    AllowCredentials:
      output.AllowCredentials !== undefined && output.AllowCredentials !== null ? output.AllowCredentials : undefined,
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
    MaxAge: output.MaxAge !== undefined && output.MaxAge !== null ? output.MaxAge : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableAttributeDefinition => {
  return {
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
    AttributeType:
      output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
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
    BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
    LastUpdateToPayPerRequestDateTime:
      output.LastUpdateToPayPerRequestDateTime !== undefined && output.LastUpdateToPayPerRequestDateTime !== null
        ? output.LastUpdateToPayPerRequestDateTime
        : undefined,
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
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null ? output.CreationDateTime : undefined,
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
        ? deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
        : undefined,
    GlobalTableVersion:
      output.GlobalTableVersion !== undefined && output.GlobalTableVersion !== null
        ? output.GlobalTableVersion
        : undefined,
    ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    LatestStreamArn:
      output.LatestStreamArn !== undefined && output.LatestStreamArn !== null ? output.LatestStreamArn : undefined,
    LatestStreamLabel:
      output.LatestStreamLabel !== undefined && output.LatestStreamLabel !== null
        ? output.LatestStreamLabel
        : undefined,
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
    TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
    TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    TableSizeBytes:
      output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
    TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableGlobalSecondaryIndex => {
  return {
    Backfilling: output.Backfilling !== undefined && output.Backfilling !== null ? output.Backfilling : undefined,
    IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
    IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
    IndexSizeBytes:
      output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
    IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
    ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
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
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
    KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
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
    IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
    IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
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
    ProjectionType:
      output.ProjectionType !== undefined && output.ProjectionType !== null ? output.ProjectionType : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughput => {
  return {
    LastDecreaseDateTime:
      output.LastDecreaseDateTime !== undefined && output.LastDecreaseDateTime !== null
        ? output.LastDecreaseDateTime
        : undefined,
    LastIncreaseDateTime:
      output.LastIncreaseDateTime !== undefined && output.LastIncreaseDateTime !== null
        ? output.LastIncreaseDateTime
        : undefined,
    NumberOfDecreasesToday:
      output.NumberOfDecreasesToday !== undefined && output.NumberOfDecreasesToday !== null
        ? output.NumberOfDecreasesToday
        : undefined,
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
    WriteCapacityUnits:
      output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
        ? output.WriteCapacityUnits
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughputOverride => {
  return {
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
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
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
    RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
    ReplicaStatus:
      output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
    ReplicaStatusDescription:
      output.ReplicaStatusDescription !== undefined && output.ReplicaStatusDescription !== null
        ? output.ReplicaStatusDescription
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplicaGlobalSecondaryIndex => {
  return {
    IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
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
    RestoreDateTime:
      output.RestoreDateTime !== undefined && output.RestoreDateTime !== null ? output.RestoreDateTime : undefined,
    RestoreInProgress:
      output.RestoreInProgress !== undefined && output.RestoreInProgress !== null
        ? output.RestoreInProgress
        : undefined,
    SourceBackupArn:
      output.SourceBackupArn !== undefined && output.SourceBackupArn !== null ? output.SourceBackupArn : undefined,
    SourceTableArn:
      output.SourceTableArn !== undefined && output.SourceTableArn !== null ? output.SourceTableArn : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableSseDescription = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableSseDescription => {
  return {
    InaccessibleEncryptionDateTime:
      output.InaccessibleEncryptionDateTime !== undefined && output.InaccessibleEncryptionDateTime !== null
        ? output.InaccessibleEncryptionDateTime
        : undefined,
    KmsMasterKeyArn:
      output.KmsMasterKeyArn !== undefined && output.KmsMasterKeyArn !== null ? output.KmsMasterKeyArn : undefined,
    SseType: output.SseType !== undefined && output.SseType !== null ? output.SseType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableStreamSpecification = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableStreamSpecification => {
  return {
    StreamEnabled:
      output.StreamEnabled !== undefined && output.StreamEnabled !== null ? output.StreamEnabled : undefined,
    StreamViewType:
      output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2EipDetails = (output: any, context: __SerdeContext): AwsEc2EipDetails => {
  return {
    AllocationId: output.AllocationId !== undefined && output.AllocationId !== null ? output.AllocationId : undefined,
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    NetworkBorderGroup:
      output.NetworkBorderGroup !== undefined && output.NetworkBorderGroup !== null
        ? output.NetworkBorderGroup
        : undefined,
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    NetworkInterfaceOwnerId:
      output.NetworkInterfaceOwnerId !== undefined && output.NetworkInterfaceOwnerId !== null
        ? output.NetworkInterfaceOwnerId
        : undefined,
    PrivateIpAddress:
      output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
    PublicIp: output.PublicIp !== undefined && output.PublicIp !== null ? output.PublicIp : undefined,
    PublicIpv4Pool:
      output.PublicIpv4Pool !== undefined && output.PublicIpv4Pool !== null ? output.PublicIpv4Pool : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    IamInstanceProfileArn:
      output.IamInstanceProfileArn !== undefined && output.IamInstanceProfileArn !== null
        ? output.IamInstanceProfileArn
        : undefined,
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    IpV4Addresses:
      output.IpV4Addresses !== undefined && output.IpV4Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV4Addresses, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV6Addresses, context)
        : undefined,
    KeyName: output.KeyName !== undefined && output.KeyName !== null ? output.KeyName : undefined,
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceAttachment => {
  return {
    AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
    AttachmentId: output.AttachmentId !== undefined && output.AttachmentId !== null ? output.AttachmentId : undefined,
    DeleteOnTermination:
      output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
        ? output.DeleteOnTermination
        : undefined,
    DeviceIndex: output.DeviceIndex !== undefined && output.DeviceIndex !== null ? output.DeviceIndex : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    InstanceOwnerId:
      output.InstanceOwnerId !== undefined && output.InstanceOwnerId !== null ? output.InstanceOwnerId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(output.SecurityGroups, context)
        : undefined,
    SourceDestCheck:
      output.SourceDestCheck !== undefined && output.SourceDestCheck !== null ? output.SourceDestCheck : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup => {
  return {
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
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
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    IpPermissions:
      output.IpPermissions !== undefined && output.IpPermissions !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissions, context)
        : undefined,
    IpPermissionsEgress:
      output.IpPermissionsEgress !== undefined && output.IpPermissionsEgress !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissionsEgress, context)
        : undefined,
    OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission => {
  return {
    FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
    IpProtocol: output.IpProtocol !== undefined && output.IpProtocol !== null ? output.IpProtocol : undefined,
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
    ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
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
    CidrIp: output.CidrIp !== undefined && output.CidrIp !== null ? output.CidrIp : undefined,
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
    CidrIpv6: output.CidrIpv6 !== undefined && output.CidrIpv6 !== null ? output.CidrIpv6 : undefined,
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
    PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
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
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    PeeringStatus:
      output.PeeringStatus !== undefined && output.PeeringStatus !== null ? output.PeeringStatus : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    VpcPeeringConnectionId:
      output.VpcPeeringConnectionId !== undefined && output.VpcPeeringConnectionId !== null
        ? output.VpcPeeringConnectionId
        : undefined,
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

const deserializeAws_restJson1AwsEc2VolumeAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment => {
  return {
    AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
    DeleteOnTermination:
      output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
        ? output.DeleteOnTermination
        : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcDetails = (output: any, context: __SerdeContext): AwsEc2VpcDetails => {
  return {
    CidrBlockAssociationSet:
      output.CidrBlockAssociationSet !== undefined && output.CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1CidrBlockAssociationList(output.CidrBlockAssociationSet, context)
        : undefined,
    DhcpOptionsId:
      output.DhcpOptionsId !== undefined && output.DhcpOptionsId !== null ? output.DhcpOptionsId : undefined,
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDetails => {
  return {
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
        ? output.ElasticsearchVersion
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1FieldMap(output.Endpoints, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
            output.NodeToNodeEncryptionOptions,
            context
          )
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
    EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
    TLSSecurityPolicy:
      output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null
        ? output.TLSSecurityPolicy
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainEncryptionAtRestOptions => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainNodeToNodeEncryptionOptions => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
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
    VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
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
    CookieName: output.CookieName !== undefined && output.CookieName !== null ? output.CookieName : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
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
    CookieExpirationPeriod:
      output.CookieExpirationPeriod !== undefined && output.CookieExpirationPeriod !== null
        ? output.CookieExpirationPeriod
        : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAccessLog = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAccessLog => {
  return {
    EmitInterval: output.EmitInterval !== undefined && output.EmitInterval !== null ? output.EmitInterval : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3BucketPrefix:
      output.S3BucketPrefix !== undefined && output.S3BucketPrefix !== null ? output.S3BucketPrefix : undefined,
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
    InstancePort: output.InstancePort !== undefined && output.InstancePort !== null ? output.InstancePort : undefined,
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
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerConnectionSettings => {
  return {
    IdleTimeout: output.IdleTimeout !== undefined && output.IdleTimeout !== null ? output.IdleTimeout : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerCrossZoneLoadBalancing => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
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
    CanonicalHostedZoneName:
      output.CanonicalHostedZoneName !== undefined && output.CanonicalHostedZoneName !== null
        ? output.CanonicalHostedZoneName
        : undefined,
    CanonicalHostedZoneNameID:
      output.CanonicalHostedZoneNameID !== undefined && output.CanonicalHostedZoneNameID !== null
        ? output.CanonicalHostedZoneNameID
        : undefined,
    CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
    DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
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
    LoadBalancerName:
      output.LoadBalancerName !== undefined && output.LoadBalancerName !== null ? output.LoadBalancerName : undefined,
    Policies:
      output.Policies !== undefined && output.Policies !== null
        ? deserializeAws_restJson1AwsElbLoadBalancerPolicies(output.Policies, context)
        : undefined,
    Scheme: output.Scheme !== undefined && output.Scheme !== null ? output.Scheme : undefined,
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
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerHealthCheck = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerHealthCheck => {
  return {
    HealthyThreshold:
      output.HealthyThreshold !== undefined && output.HealthyThreshold !== null ? output.HealthyThreshold : undefined,
    Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
    Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    UnhealthyThreshold:
      output.UnhealthyThreshold !== undefined && output.UnhealthyThreshold !== null
        ? output.UnhealthyThreshold
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerInstance = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerInstance => {
  return {
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
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
    InstancePort: output.InstancePort !== undefined && output.InstancePort !== null ? output.InstancePort : undefined,
    InstanceProtocol:
      output.InstanceProtocol !== undefined && output.InstanceProtocol !== null ? output.InstanceProtocol : undefined,
    LoadBalancerPort:
      output.LoadBalancerPort !== undefined && output.LoadBalancerPort !== null ? output.LoadBalancerPort : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    SslCertificateId:
      output.SslCertificateId !== undefined && output.SslCertificateId !== null ? output.SslCertificateId : undefined,
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
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    OwnerAlias: output.OwnerAlias !== undefined && output.OwnerAlias !== null ? output.OwnerAlias : undefined,
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
    CanonicalHostedZoneId:
      output.CanonicalHostedZoneId !== undefined && output.CanonicalHostedZoneId !== null
        ? output.CanonicalHostedZoneId
        : undefined,
    CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
    DNSName: output.DNSName !== undefined && output.DNSName !== null ? output.DNSName : undefined,
    IpAddressType:
      output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
    Scheme: output.Scheme !== undefined && output.Scheme !== null ? output.Scheme : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1LoadBalancerState(output.State, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  return {
    AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
    PrincipalName:
      output.PrincipalName !== undefined && output.PrincipalName !== null ? output.PrincipalName : undefined,
    PrincipalType:
      output.PrincipalType !== undefined && output.PrincipalType !== null ? output.PrincipalType : undefined,
    SessionContext:
      output.SessionContext !== undefined && output.SessionContext !== null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContext(output.SessionContext, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
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
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    MfaAuthenticated:
      output.MfaAuthenticated !== undefined && output.MfaAuthenticated !== null ? output.MfaAuthenticated : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContextSessionIssuer => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAttachedManagedPolicy = (
  output: any,
  context: __SerdeContext
): AwsIamAttachedManagedPolicy => {
  return {
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
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
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    GroupPolicyList:
      output.GroupPolicyList !== undefined && output.GroupPolicyList !== null
        ? deserializeAws_restJson1AwsIamGroupPolicyList(output.GroupPolicyList, context)
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamGroupPolicy = (output: any, context: __SerdeContext): AwsIamGroupPolicy => {
  return {
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
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
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    InstanceProfileId:
      output.InstanceProfileId !== undefined && output.InstanceProfileId !== null
        ? output.InstanceProfileId
        : undefined,
    InstanceProfileName:
      output.InstanceProfileName !== undefined && output.InstanceProfileName !== null
        ? output.InstanceProfileName
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
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
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    AssumeRolePolicyDocument:
      output.AssumeRolePolicyDocument !== undefined && output.AssumeRolePolicyDocument !== null
        ? output.AssumeRolePolicyDocument
        : undefined,
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    RoleId: output.RoleId !== undefined && output.RoleId !== null ? output.RoleId : undefined,
    RoleName: output.RoleName !== undefined && output.RoleName !== null ? output.RoleName : undefined,
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
    PermissionsBoundaryArn:
      output.PermissionsBoundaryArn !== undefined && output.PermissionsBoundaryArn !== null
        ? output.PermissionsBoundaryArn
        : undefined,
    PermissionsBoundaryType:
      output.PermissionsBoundaryType !== undefined && output.PermissionsBoundaryType !== null
        ? output.PermissionsBoundaryType
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyDetails = (output: any, context: __SerdeContext): AwsIamPolicyDetails => {
  return {
    AttachmentCount:
      output.AttachmentCount !== undefined && output.AttachmentCount !== null ? output.AttachmentCount : undefined,
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    DefaultVersionId:
      output.DefaultVersionId !== undefined && output.DefaultVersionId !== null ? output.DefaultVersionId : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    IsAttachable: output.IsAttachable !== undefined && output.IsAttachable !== null ? output.IsAttachable : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    PermissionsBoundaryUsageCount:
      output.PermissionsBoundaryUsageCount !== undefined && output.PermissionsBoundaryUsageCount !== null
        ? output.PermissionsBoundaryUsageCount
        : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyVersionList:
      output.PolicyVersionList !== undefined && output.PolicyVersionList !== null
        ? deserializeAws_restJson1AwsIamPolicyVersionList(output.PolicyVersionList, context)
        : undefined,
    UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null ? output.UpdateDate : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyVersion = (output: any, context: __SerdeContext): AwsIamPolicyVersion => {
  return {
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    IsDefaultVersion:
      output.IsDefaultVersion !== undefined && output.IsDefaultVersion !== null ? output.IsDefaultVersion : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
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
    AssumeRolePolicyDocument:
      output.AssumeRolePolicyDocument !== undefined && output.AssumeRolePolicyDocument !== null
        ? output.AssumeRolePolicyDocument
        : undefined,
    AttachedManagedPolicies:
      output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    InstanceProfileList:
      output.InstanceProfileList !== undefined && output.InstanceProfileList !== null
        ? deserializeAws_restJson1AwsIamInstanceProfileList(output.InstanceProfileList, context)
        : undefined,
    MaxSessionDuration:
      output.MaxSessionDuration !== undefined && output.MaxSessionDuration !== null
        ? output.MaxSessionDuration
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    PermissionsBoundary:
      output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    RoleId: output.RoleId !== undefined && output.RoleId !== null ? output.RoleId : undefined,
    RoleName: output.RoleName !== undefined && output.RoleName !== null ? output.RoleName : undefined,
    RolePolicyList:
      output.RolePolicyList !== undefined && output.RolePolicyList !== null
        ? deserializeAws_restJson1AwsIamRolePolicyList(output.RolePolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamRolePolicy = (output: any, context: __SerdeContext): AwsIamRolePolicy => {
  return {
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
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
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    GroupList:
      output.GroupList !== undefined && output.GroupList !== null
        ? deserializeAws_restJson1StringList(output.GroupList, context)
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    PermissionsBoundary:
      output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    UserPolicyList:
      output.UserPolicyList !== undefined && output.UserPolicyList !== null
        ? deserializeAws_restJson1AwsIamUserPolicyList(output.UserPolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamUserPolicy = (output: any, context: __SerdeContext): AwsIamUserPolicy => {
  return {
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
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
    AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyManager: output.KeyManager !== undefined && output.KeyManager !== null ? output.KeyManager : undefined,
    KeyState: output.KeyState !== undefined && output.KeyState !== null ? output.KeyState : undefined,
    Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionCode = (output: any, context: __SerdeContext): AwsLambdaFunctionCode => {
  return {
    S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
    S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
    S3ObjectVersion:
      output.S3ObjectVersion !== undefined && output.S3ObjectVersion !== null ? output.S3ObjectVersion : undefined,
    ZipFile: output.ZipFile !== undefined && output.ZipFile !== null ? output.ZipFile : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  return {
    TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
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
    CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironment(output.Environment, context)
        : undefined,
    FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
    Handler: output.Handler !== undefined && output.Handler !== null ? output.Handler : undefined,
    KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
    LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    Layers:
      output.Layers !== undefined && output.Layers !== null
        ? deserializeAws_restJson1AwsLambdaFunctionLayerList(output.Layers, context)
        : undefined,
    MasterArn: output.MasterArn !== undefined && output.MasterArn !== null ? output.MasterArn : undefined,
    MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
    Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
    Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    TracingConfig:
      output.TracingConfig !== undefined && output.TracingConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionTracingConfig(output.TracingConfig, context)
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
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
    Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
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
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterAssociatedRole => {
  return {
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    ActivityStreamStatus:
      output.ActivityStreamStatus !== undefined && output.ActivityStreamStatus !== null
        ? output.ActivityStreamStatus
        : undefined,
    AllocatedStorage:
      output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
    AssociatedRoles:
      output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
        ? deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    BackupRetentionPeriod:
      output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
        ? output.BackupRetentionPeriod
        : undefined,
    ClusterCreateTime:
      output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
        ? output.ClusterCreateTime
        : undefined,
    CopyTagsToSnapshot:
      output.CopyTagsToSnapshot !== undefined && output.CopyTagsToSnapshot !== null
        ? output.CopyTagsToSnapshot
        : undefined,
    CrossAccountClone:
      output.CrossAccountClone !== undefined && output.CrossAccountClone !== null
        ? output.CrossAccountClone
        : undefined,
    CustomEndpoints:
      output.CustomEndpoints !== undefined && output.CustomEndpoints !== null
        ? deserializeAws_restJson1StringList(output.CustomEndpoints, context)
        : undefined,
    DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
    DbClusterIdentifier:
      output.DbClusterIdentifier !== undefined && output.DbClusterIdentifier !== null
        ? output.DbClusterIdentifier
        : undefined,
    DbClusterMembers:
      output.DbClusterMembers !== undefined && output.DbClusterMembers !== null
        ? deserializeAws_restJson1AwsRdsDbClusterMembers(output.DbClusterMembers, context)
        : undefined,
    DbClusterOptionGroupMemberships:
      output.DbClusterOptionGroupMemberships !== undefined && output.DbClusterOptionGroupMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(output.DbClusterOptionGroupMemberships, context)
        : undefined,
    DbClusterParameterGroup:
      output.DbClusterParameterGroup !== undefined && output.DbClusterParameterGroup !== null
        ? output.DbClusterParameterGroup
        : undefined,
    DbClusterResourceId:
      output.DbClusterResourceId !== undefined && output.DbClusterResourceId !== null
        ? output.DbClusterResourceId
        : undefined,
    DbSubnetGroup:
      output.DbSubnetGroup !== undefined && output.DbSubnetGroup !== null ? output.DbSubnetGroup : undefined,
    DeletionProtection:
      output.DeletionProtection !== undefined && output.DeletionProtection !== null
        ? output.DeletionProtection
        : undefined,
    DomainMemberships:
      output.DomainMemberships !== undefined && output.DomainMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
        : undefined,
    EnabledCloudWatchLogsExports:
      output.EnabledCloudWatchLogsExports !== undefined && output.EnabledCloudWatchLogsExports !== null
        ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
        : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
    EngineMode: output.EngineMode !== undefined && output.EngineMode !== null ? output.EngineMode : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
    HttpEndpointEnabled:
      output.HttpEndpointEnabled !== undefined && output.HttpEndpointEnabled !== null
        ? output.HttpEndpointEnabled
        : undefined,
    IamDatabaseAuthenticationEnabled:
      output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
        ? output.IamDatabaseAuthenticationEnabled
        : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    MasterUsername:
      output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
    MultiAz: output.MultiAz !== undefined && output.MultiAz !== null ? output.MultiAz : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    PreferredBackupWindow:
      output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
        ? output.PreferredBackupWindow
        : undefined,
    PreferredMaintenanceWindow:
      output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
        ? output.PreferredMaintenanceWindow
        : undefined,
    ReadReplicaIdentifiers:
      output.ReadReplicaIdentifiers !== undefined && output.ReadReplicaIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaIdentifiers, context)
        : undefined,
    ReaderEndpoint:
      output.ReaderEndpoint !== undefined && output.ReaderEndpoint !== null ? output.ReaderEndpoint : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StorageEncrypted:
      output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
    VpcSecurityGroups:
      output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterMember = (output: any, context: __SerdeContext): AwsRdsDbClusterMember => {
  return {
    DbClusterParameterGroupStatus:
      output.DbClusterParameterGroupStatus !== undefined && output.DbClusterParameterGroupStatus !== null
        ? output.DbClusterParameterGroupStatus
        : undefined,
    DbInstanceIdentifier:
      output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
        ? output.DbInstanceIdentifier
        : undefined,
    IsClusterWriter:
      output.IsClusterWriter !== undefined && output.IsClusterWriter !== null ? output.IsClusterWriter : undefined,
    PromotionTier:
      output.PromotionTier !== undefined && output.PromotionTier !== null ? output.PromotionTier : undefined,
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
    DbClusterOptionGroupName:
      output.DbClusterOptionGroupName !== undefined && output.DbClusterOptionGroupName !== null
        ? output.DbClusterOptionGroupName
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    AllocatedStorage:
      output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    ClusterCreateTime:
      output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
        ? output.ClusterCreateTime
        : undefined,
    DbClusterIdentifier:
      output.DbClusterIdentifier !== undefined && output.DbClusterIdentifier !== null
        ? output.DbClusterIdentifier
        : undefined,
    DbClusterSnapshotIdentifier:
      output.DbClusterSnapshotIdentifier !== undefined && output.DbClusterSnapshotIdentifier !== null
        ? output.DbClusterSnapshotIdentifier
        : undefined,
    Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    IamDatabaseAuthenticationEnabled:
      output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
        ? output.IamDatabaseAuthenticationEnabled
        : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
    MasterUsername:
      output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
    PercentProgress:
      output.PercentProgress !== undefined && output.PercentProgress !== null ? output.PercentProgress : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    SnapshotCreateTime:
      output.SnapshotCreateTime !== undefined && output.SnapshotCreateTime !== null
        ? output.SnapshotCreateTime
        : undefined,
    SnapshotType: output.SnapshotType !== undefined && output.SnapshotType !== null ? output.SnapshotType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StorageEncrypted:
      output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbDomainMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbDomainMembership => {
  return {
    Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
    Fqdn: output.Fqdn !== undefined && output.Fqdn !== null ? output.Fqdn : undefined,
    IamRoleName: output.IamRoleName !== undefined && output.IamRoleName !== null ? output.IamRoleName : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    FeatureName: output.FeatureName !== undefined && output.FeatureName !== null ? output.FeatureName : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    AllocatedStorage:
      output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
    AssociatedRoles:
      output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AutoMinorVersionUpgrade:
      output.AutoMinorVersionUpgrade !== undefined && output.AutoMinorVersionUpgrade !== null
        ? output.AutoMinorVersionUpgrade
        : undefined,
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    BackupRetentionPeriod:
      output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
        ? output.BackupRetentionPeriod
        : undefined,
    CACertificateIdentifier:
      output.CACertificateIdentifier !== undefined && output.CACertificateIdentifier !== null
        ? output.CACertificateIdentifier
        : undefined,
    CharacterSetName:
      output.CharacterSetName !== undefined && output.CharacterSetName !== null ? output.CharacterSetName : undefined,
    CopyTagsToSnapshot:
      output.CopyTagsToSnapshot !== undefined && output.CopyTagsToSnapshot !== null
        ? output.CopyTagsToSnapshot
        : undefined,
    DBClusterIdentifier:
      output.DBClusterIdentifier !== undefined && output.DBClusterIdentifier !== null
        ? output.DBClusterIdentifier
        : undefined,
    DBInstanceClass:
      output.DBInstanceClass !== undefined && output.DBInstanceClass !== null ? output.DBInstanceClass : undefined,
    DBInstanceIdentifier:
      output.DBInstanceIdentifier !== undefined && output.DBInstanceIdentifier !== null
        ? output.DBInstanceIdentifier
        : undefined,
    DBName: output.DBName !== undefined && output.DBName !== null ? output.DBName : undefined,
    DbInstancePort:
      output.DbInstancePort !== undefined && output.DbInstancePort !== null ? output.DbInstancePort : undefined,
    DbInstanceStatus:
      output.DbInstanceStatus !== undefined && output.DbInstanceStatus !== null ? output.DbInstanceStatus : undefined,
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
    DbiResourceId:
      output.DbiResourceId !== undefined && output.DbiResourceId !== null ? output.DbiResourceId : undefined,
    DeletionProtection:
      output.DeletionProtection !== undefined && output.DeletionProtection !== null
        ? output.DeletionProtection
        : undefined,
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
    Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    EnhancedMonitoringResourceArn:
      output.EnhancedMonitoringResourceArn !== undefined && output.EnhancedMonitoringResourceArn !== null
        ? output.EnhancedMonitoringResourceArn
        : undefined,
    IAMDatabaseAuthenticationEnabled:
      output.IAMDatabaseAuthenticationEnabled !== undefined && output.IAMDatabaseAuthenticationEnabled !== null
        ? output.IAMDatabaseAuthenticationEnabled
        : undefined,
    InstanceCreateTime:
      output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
        ? output.InstanceCreateTime
        : undefined,
    Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    LatestRestorableTime:
      output.LatestRestorableTime !== undefined && output.LatestRestorableTime !== null
        ? output.LatestRestorableTime
        : undefined,
    LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
    ListenerEndpoint:
      output.ListenerEndpoint !== undefined && output.ListenerEndpoint !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.ListenerEndpoint, context)
        : undefined,
    MasterUsername:
      output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
    MaxAllocatedStorage:
      output.MaxAllocatedStorage !== undefined && output.MaxAllocatedStorage !== null
        ? output.MaxAllocatedStorage
        : undefined,
    MonitoringInterval:
      output.MonitoringInterval !== undefined && output.MonitoringInterval !== null
        ? output.MonitoringInterval
        : undefined,
    MonitoringRoleArn:
      output.MonitoringRoleArn !== undefined && output.MonitoringRoleArn !== null
        ? output.MonitoringRoleArn
        : undefined,
    MultiAz: output.MultiAz !== undefined && output.MultiAz !== null ? output.MultiAz : undefined,
    OptionGroupMemberships:
      output.OptionGroupMemberships !== undefined && output.OptionGroupMemberships !== null
        ? deserializeAws_restJson1AwsRdsDbOptionGroupMemberships(output.OptionGroupMemberships, context)
        : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
        ? deserializeAws_restJson1AwsRdsDbPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PerformanceInsightsEnabled:
      output.PerformanceInsightsEnabled !== undefined && output.PerformanceInsightsEnabled !== null
        ? output.PerformanceInsightsEnabled
        : undefined,
    PerformanceInsightsKmsKeyId:
      output.PerformanceInsightsKmsKeyId !== undefined && output.PerformanceInsightsKmsKeyId !== null
        ? output.PerformanceInsightsKmsKeyId
        : undefined,
    PerformanceInsightsRetentionPeriod:
      output.PerformanceInsightsRetentionPeriod !== undefined && output.PerformanceInsightsRetentionPeriod !== null
        ? output.PerformanceInsightsRetentionPeriod
        : undefined,
    PreferredBackupWindow:
      output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
        ? output.PreferredBackupWindow
        : undefined,
    PreferredMaintenanceWindow:
      output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
        ? output.PreferredMaintenanceWindow
        : undefined,
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    PromotionTier:
      output.PromotionTier !== undefined && output.PromotionTier !== null ? output.PromotionTier : undefined,
    PubliclyAccessible:
      output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
        ? output.PubliclyAccessible
        : undefined,
    ReadReplicaDBClusterIdentifiers:
      output.ReadReplicaDBClusterIdentifiers !== undefined && output.ReadReplicaDBClusterIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBClusterIdentifiers, context)
        : undefined,
    ReadReplicaDBInstanceIdentifiers:
      output.ReadReplicaDBInstanceIdentifiers !== undefined && output.ReadReplicaDBInstanceIdentifiers !== null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBInstanceIdentifiers, context)
        : undefined,
    ReadReplicaSourceDBInstanceIdentifier:
      output.ReadReplicaSourceDBInstanceIdentifier !== undefined &&
      output.ReadReplicaSourceDBInstanceIdentifier !== null
        ? output.ReadReplicaSourceDBInstanceIdentifier
        : undefined,
    SecondaryAvailabilityZone:
      output.SecondaryAvailabilityZone !== undefined && output.SecondaryAvailabilityZone !== null
        ? output.SecondaryAvailabilityZone
        : undefined,
    StatusInfos:
      output.StatusInfos !== undefined && output.StatusInfos !== null
        ? deserializeAws_restJson1AwsRdsDbStatusInfos(output.StatusInfos, context)
        : undefined,
    StorageEncrypted:
      output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
    StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    TdeCredentialArn:
      output.TdeCredentialArn !== undefined && output.TdeCredentialArn !== null ? output.TdeCredentialArn : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
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
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup => {
  return {
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VpcSecurityGroupId:
      output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
        ? output.VpcSecurityGroupId
        : undefined,
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
    OptionGroupName:
      output.OptionGroupName !== undefined && output.OptionGroupName !== null ? output.OptionGroupName : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    DbParameterGroupName:
      output.DbParameterGroupName !== undefined && output.DbParameterGroupName !== null
        ? output.DbParameterGroupName
        : undefined,
    ParameterApplyStatus:
      output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
        ? output.ParameterApplyStatus
        : undefined,
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
    AllocatedStorage:
      output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
    BackupRetentionPeriod:
      output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
        ? output.BackupRetentionPeriod
        : undefined,
    CaCertificateIdentifier:
      output.CaCertificateIdentifier !== undefined && output.CaCertificateIdentifier !== null
        ? output.CaCertificateIdentifier
        : undefined,
    DbInstanceClass:
      output.DbInstanceClass !== undefined && output.DbInstanceClass !== null ? output.DbInstanceClass : undefined,
    DbInstanceIdentifier:
      output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
        ? output.DbInstanceIdentifier
        : undefined,
    DbSubnetGroupName:
      output.DbSubnetGroupName !== undefined && output.DbSubnetGroupName !== null
        ? output.DbSubnetGroupName
        : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
    LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
    MasterUserPassword:
      output.MasterUserPassword !== undefined && output.MasterUserPassword !== null
        ? output.MasterUserPassword
        : undefined,
    MultiAZ: output.MultiAZ !== undefined && output.MultiAZ !== null ? output.MultiAZ : undefined,
    PendingCloudWatchLogsExports:
      output.PendingCloudWatchLogsExports !== undefined && output.PendingCloudWatchLogsExports !== null
        ? deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(output.PendingCloudWatchLogsExports, context)
        : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbProcessorFeature = (
  output: any,
  context: __SerdeContext
): AwsRdsDbProcessorFeature => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
    AllocatedStorage:
      output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    DbInstanceIdentifier:
      output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
        ? output.DbInstanceIdentifier
        : undefined,
    DbSnapshotIdentifier:
      output.DbSnapshotIdentifier !== undefined && output.DbSnapshotIdentifier !== null
        ? output.DbSnapshotIdentifier
        : undefined,
    DbiResourceId:
      output.DbiResourceId !== undefined && output.DbiResourceId !== null ? output.DbiResourceId : undefined,
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    IamDatabaseAuthenticationEnabled:
      output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
        ? output.IamDatabaseAuthenticationEnabled
        : undefined,
    InstanceCreateTime:
      output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
        ? output.InstanceCreateTime
        : undefined,
    Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
    MasterUsername:
      output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
    OptionGroupName:
      output.OptionGroupName !== undefined && output.OptionGroupName !== null ? output.OptionGroupName : undefined,
    PercentProgress:
      output.PercentProgress !== undefined && output.PercentProgress !== null ? output.PercentProgress : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    ProcessorFeatures:
      output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    SnapshotCreateTime:
      output.SnapshotCreateTime !== undefined && output.SnapshotCreateTime !== null
        ? output.SnapshotCreateTime
        : undefined,
    SnapshotType: output.SnapshotType !== undefined && output.SnapshotType !== null ? output.SnapshotType : undefined,
    SourceDbSnapshotIdentifier:
      output.SourceDbSnapshotIdentifier !== undefined && output.SourceDbSnapshotIdentifier !== null
        ? output.SourceDbSnapshotIdentifier
        : undefined,
    SourceRegion: output.SourceRegion !== undefined && output.SourceRegion !== null ? output.SourceRegion : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    TdeCredentialArn:
      output.TdeCredentialArn !== undefined && output.TdeCredentialArn !== null ? output.TdeCredentialArn : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbStatusInfo = (output: any, context: __SerdeContext): AwsRdsDbStatusInfo => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Normal: output.Normal !== undefined && output.Normal !== null ? output.Normal : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusType: output.StatusType !== undefined && output.StatusType !== null ? output.StatusType : undefined,
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
    DbSubnetGroupArn:
      output.DbSubnetGroupArn !== undefined && output.DbSubnetGroupArn !== null ? output.DbSubnetGroupArn : undefined,
    DbSubnetGroupDescription:
      output.DbSubnetGroupDescription !== undefined && output.DbSubnetGroupDescription !== null
        ? output.DbSubnetGroupDescription
        : undefined,
    DbSubnetGroupName:
      output.DbSubnetGroupName !== undefined && output.DbSubnetGroupName !== null
        ? output.DbSubnetGroupName
        : undefined,
    SubnetGroupStatus:
      output.SubnetGroupStatus !== undefined && output.SubnetGroupStatus !== null
        ? output.SubnetGroupStatus
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets(output.Subnets, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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
    SubnetIdentifier:
      output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
    SubnetStatus: output.SubnetStatus !== undefined && output.SubnetStatus !== null ? output.SubnetStatus : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnetAvailabilityZone => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
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
    NodeRole: output.NodeRole !== undefined && output.NodeRole !== null ? output.NodeRole : undefined,
    PrivateIpAddress:
      output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
    PublicIpAddress:
      output.PublicIpAddress !== undefined && output.PublicIpAddress !== null ? output.PublicIpAddress : undefined,
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
    ParameterApplyStatus:
      output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
        ? output.ParameterApplyStatus
        : undefined,
    ParameterGroupName:
      output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
        ? output.ParameterGroupName
        : undefined,
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
    ParameterApplyErrorDescription:
      output.ParameterApplyErrorDescription !== undefined && output.ParameterApplyErrorDescription !== null
        ? output.ParameterApplyErrorDescription
        : undefined,
    ParameterApplyStatus:
      output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
        ? output.ParameterApplyStatus
        : undefined,
    ParameterName:
      output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
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
    ClusterSecurityGroupName:
      output.ClusterSecurityGroupName !== undefined && output.ClusterSecurityGroupName !== null
        ? output.ClusterSecurityGroupName
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    DestinationRegion:
      output.DestinationRegion !== undefined && output.DestinationRegion !== null
        ? output.DestinationRegion
        : undefined,
    ManualSnapshotRetentionPeriod:
      output.ManualSnapshotRetentionPeriod !== undefined && output.ManualSnapshotRetentionPeriod !== null
        ? output.ManualSnapshotRetentionPeriod
        : undefined,
    RetentionPeriod:
      output.RetentionPeriod !== undefined && output.RetentionPeriod !== null ? output.RetentionPeriod : undefined,
    SnapshotCopyGrantName:
      output.SnapshotCopyGrantName !== undefined && output.SnapshotCopyGrantName !== null
        ? output.SnapshotCopyGrantName
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDeferredMaintenanceWindow => {
  return {
    DeferMaintenanceEndTime:
      output.DeferMaintenanceEndTime !== undefined && output.DeferMaintenanceEndTime !== null
        ? output.DeferMaintenanceEndTime
        : undefined,
    DeferMaintenanceIdentifier:
      output.DeferMaintenanceIdentifier !== undefined && output.DeferMaintenanceIdentifier !== null
        ? output.DeferMaintenanceIdentifier
        : undefined,
    DeferMaintenanceStartTime:
      output.DeferMaintenanceStartTime !== undefined && output.DeferMaintenanceStartTime !== null
        ? output.DeferMaintenanceStartTime
        : undefined,
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
    AllowVersionUpgrade:
      output.AllowVersionUpgrade !== undefined && output.AllowVersionUpgrade !== null
        ? output.AllowVersionUpgrade
        : undefined,
    AutomatedSnapshotRetentionPeriod:
      output.AutomatedSnapshotRetentionPeriod !== undefined && output.AutomatedSnapshotRetentionPeriod !== null
        ? output.AutomatedSnapshotRetentionPeriod
        : undefined,
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    ClusterAvailabilityStatus:
      output.ClusterAvailabilityStatus !== undefined && output.ClusterAvailabilityStatus !== null
        ? output.ClusterAvailabilityStatus
        : undefined,
    ClusterCreateTime:
      output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
        ? output.ClusterCreateTime
        : undefined,
    ClusterIdentifier:
      output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
        ? output.ClusterIdentifier
        : undefined,
    ClusterNodes:
      output.ClusterNodes !== undefined && output.ClusterNodes !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterNodes(output.ClusterNodes, context)
        : undefined,
    ClusterParameterGroups:
      output.ClusterParameterGroups !== undefined && output.ClusterParameterGroups !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(output.ClusterParameterGroups, context)
        : undefined,
    ClusterPublicKey:
      output.ClusterPublicKey !== undefined && output.ClusterPublicKey !== null ? output.ClusterPublicKey : undefined,
    ClusterRevisionNumber:
      output.ClusterRevisionNumber !== undefined && output.ClusterRevisionNumber !== null
        ? output.ClusterRevisionNumber
        : undefined,
    ClusterSecurityGroups:
      output.ClusterSecurityGroups !== undefined && output.ClusterSecurityGroups !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(output.ClusterSecurityGroups, context)
        : undefined,
    ClusterSnapshotCopyStatus:
      output.ClusterSnapshotCopyStatus !== undefined && output.ClusterSnapshotCopyStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(output.ClusterSnapshotCopyStatus, context)
        : undefined,
    ClusterStatus:
      output.ClusterStatus !== undefined && output.ClusterStatus !== null ? output.ClusterStatus : undefined,
    ClusterSubnetGroupName:
      output.ClusterSubnetGroupName !== undefined && output.ClusterSubnetGroupName !== null
        ? output.ClusterSubnetGroupName
        : undefined,
    ClusterVersion:
      output.ClusterVersion !== undefined && output.ClusterVersion !== null ? output.ClusterVersion : undefined,
    DBName: output.DBName !== undefined && output.DBName !== null ? output.DBName : undefined,
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
    ElasticResizeNumberOfNodeOptions:
      output.ElasticResizeNumberOfNodeOptions !== undefined && output.ElasticResizeNumberOfNodeOptions !== null
        ? output.ElasticResizeNumberOfNodeOptions
        : undefined,
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_restJson1AwsRedshiftClusterEndpoint(output.Endpoint, context)
        : undefined,
    EnhancedVpcRouting:
      output.EnhancedVpcRouting !== undefined && output.EnhancedVpcRouting !== null
        ? output.EnhancedVpcRouting
        : undefined,
    ExpectedNextSnapshotScheduleTime:
      output.ExpectedNextSnapshotScheduleTime !== undefined && output.ExpectedNextSnapshotScheduleTime !== null
        ? output.ExpectedNextSnapshotScheduleTime
        : undefined,
    ExpectedNextSnapshotScheduleTimeStatus:
      output.ExpectedNextSnapshotScheduleTimeStatus !== undefined &&
      output.ExpectedNextSnapshotScheduleTimeStatus !== null
        ? output.ExpectedNextSnapshotScheduleTimeStatus
        : undefined,
    HsmStatus:
      output.HsmStatus !== undefined && output.HsmStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterHsmStatus(output.HsmStatus, context)
        : undefined,
    IamRoles:
      output.IamRoles !== undefined && output.IamRoles !== null
        ? deserializeAws_restJson1AwsRedshiftClusterIamRoles(output.IamRoles, context)
        : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    MaintenanceTrackName:
      output.MaintenanceTrackName !== undefined && output.MaintenanceTrackName !== null
        ? output.MaintenanceTrackName
        : undefined,
    ManualSnapshotRetentionPeriod:
      output.ManualSnapshotRetentionPeriod !== undefined && output.ManualSnapshotRetentionPeriod !== null
        ? output.ManualSnapshotRetentionPeriod
        : undefined,
    MasterUsername:
      output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
    NextMaintenanceWindowStartTime:
      output.NextMaintenanceWindowStartTime !== undefined && output.NextMaintenanceWindowStartTime !== null
        ? output.NextMaintenanceWindowStartTime
        : undefined,
    NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
    NumberOfNodes:
      output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
    PendingActions:
      output.PendingActions !== undefined && output.PendingActions !== null
        ? deserializeAws_restJson1StringList(output.PendingActions, context)
        : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
        ? deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PreferredMaintenanceWindow:
      output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
        ? output.PreferredMaintenanceWindow
        : undefined,
    PubliclyAccessible:
      output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
        ? output.PubliclyAccessible
        : undefined,
    ResizeInfo:
      output.ResizeInfo !== undefined && output.ResizeInfo !== null
        ? deserializeAws_restJson1AwsRedshiftClusterResizeInfo(output.ResizeInfo, context)
        : undefined,
    RestoreStatus:
      output.RestoreStatus !== undefined && output.RestoreStatus !== null
        ? deserializeAws_restJson1AwsRedshiftClusterRestoreStatus(output.RestoreStatus, context)
        : undefined,
    SnapshotScheduleIdentifier:
      output.SnapshotScheduleIdentifier !== undefined && output.SnapshotScheduleIdentifier !== null
        ? output.SnapshotScheduleIdentifier
        : undefined,
    SnapshotScheduleState:
      output.SnapshotScheduleState !== undefined && output.SnapshotScheduleState !== null
        ? output.SnapshotScheduleState
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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
    ElasticIp: output.ElasticIp !== undefined && output.ElasticIp !== null ? output.ElasticIp : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterEndpoint => {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterHsmStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterHsmStatus => {
  return {
    HsmClientCertificateIdentifier:
      output.HsmClientCertificateIdentifier !== undefined && output.HsmClientCertificateIdentifier !== null
        ? output.HsmClientCertificateIdentifier
        : undefined,
    HsmConfigurationIdentifier:
      output.HsmConfigurationIdentifier !== undefined && output.HsmConfigurationIdentifier !== null
        ? output.HsmConfigurationIdentifier
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterIamRole = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterIamRole => {
  return {
    ApplyStatus: output.ApplyStatus !== undefined && output.ApplyStatus !== null ? output.ApplyStatus : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
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
    AutomatedSnapshotRetentionPeriod:
      output.AutomatedSnapshotRetentionPeriod !== undefined && output.AutomatedSnapshotRetentionPeriod !== null
        ? output.AutomatedSnapshotRetentionPeriod
        : undefined,
    ClusterIdentifier:
      output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
        ? output.ClusterIdentifier
        : undefined,
    ClusterType: output.ClusterType !== undefined && output.ClusterType !== null ? output.ClusterType : undefined,
    ClusterVersion:
      output.ClusterVersion !== undefined && output.ClusterVersion !== null ? output.ClusterVersion : undefined,
    EncryptionType:
      output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
    EnhancedVpcRouting:
      output.EnhancedVpcRouting !== undefined && output.EnhancedVpcRouting !== null
        ? output.EnhancedVpcRouting
        : undefined,
    MaintenanceTrackName:
      output.MaintenanceTrackName !== undefined && output.MaintenanceTrackName !== null
        ? output.MaintenanceTrackName
        : undefined,
    MasterUserPassword:
      output.MasterUserPassword !== undefined && output.MasterUserPassword !== null
        ? output.MasterUserPassword
        : undefined,
    NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
    NumberOfNodes:
      output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
    PubliclyAccessible:
      output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
        ? output.PubliclyAccessible
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterResizeInfo = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterResizeInfo => {
  return {
    AllowCancelResize:
      output.AllowCancelResize !== undefined && output.AllowCancelResize !== null
        ? output.AllowCancelResize
        : undefined,
    ResizeType: output.ResizeType !== undefined && output.ResizeType !== null ? output.ResizeType : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterRestoreStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterRestoreStatus => {
  return {
    CurrentRestoreRateInMegaBytesPerSecond:
      output.CurrentRestoreRateInMegaBytesPerSecond !== undefined &&
      output.CurrentRestoreRateInMegaBytesPerSecond !== null
        ? output.CurrentRestoreRateInMegaBytesPerSecond
        : undefined,
    ElapsedTimeInSeconds:
      output.ElapsedTimeInSeconds !== undefined && output.ElapsedTimeInSeconds !== null
        ? output.ElapsedTimeInSeconds
        : undefined,
    EstimatedTimeToCompletionInSeconds:
      output.EstimatedTimeToCompletionInSeconds !== undefined && output.EstimatedTimeToCompletionInSeconds !== null
        ? output.EstimatedTimeToCompletionInSeconds
        : undefined,
    ProgressInMegaBytes:
      output.ProgressInMegaBytes !== undefined && output.ProgressInMegaBytes !== null
        ? output.ProgressInMegaBytes
        : undefined,
    SnapshotSizeInMegaBytes:
      output.SnapshotSizeInMegaBytes !== undefined && output.SnapshotSizeInMegaBytes !== null
        ? output.SnapshotSizeInMegaBytes
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterVpcSecurityGroup => {
  return {
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VpcSecurityGroupId:
      output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
        ? output.VpcSecurityGroupId
        : undefined,
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

const deserializeAws_restJson1AwsS3BucketDetails = (output: any, context: __SerdeContext): AwsS3BucketDetails => {
  return {
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    OwnerName: output.OwnerName !== undefined && output.OwnerName !== null ? output.OwnerName : undefined,
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
            output.ServerSideEncryptionConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionByDefault => {
  return {
    KMSMasterKeyID:
      output.KMSMasterKeyID !== undefined && output.KMSMasterKeyID !== null ? output.KMSMasterKeyID : undefined,
    SSEAlgorithm: output.SSEAlgorithm !== undefined && output.SSEAlgorithm !== null ? output.SSEAlgorithm : undefined,
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

const deserializeAws_restJson1AwsS3ObjectDetails = (output: any, context: __SerdeContext): AwsS3ObjectDetails => {
  return {
    ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
    ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
    LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    SSEKMSKeyId: output.SSEKMSKeyId !== undefined && output.SSEKMSKeyId !== null ? output.SSEKMSKeyId : undefined,
    ServerSideEncryption:
      output.ServerSideEncryption !== undefined && output.ServerSideEncryption !== null
        ? output.ServerSideEncryption
        : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecretsManagerSecretDetails = (
  output: any,
  context: __SerdeContext
): AwsSecretsManagerSecretDetails => {
  return {
    Deleted: output.Deleted !== undefined && output.Deleted !== null ? output.Deleted : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RotationEnabled:
      output.RotationEnabled !== undefined && output.RotationEnabled !== null ? output.RotationEnabled : undefined,
    RotationLambdaArn:
      output.RotationLambdaArn !== undefined && output.RotationLambdaArn !== null
        ? output.RotationLambdaArn
        : undefined,
    RotationOccurredWithinFrequency:
      output.RotationOccurredWithinFrequency !== undefined && output.RotationOccurredWithinFrequency !== null
        ? output.RotationOccurredWithinFrequency
        : undefined,
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
    AutomaticallyAfterDays:
      output.AutomaticallyAfterDays !== undefined && output.AutomaticallyAfterDays !== null
        ? output.AutomaticallyAfterDays
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFinding = (output: any, context: __SerdeContext): AwsSecurityFinding => {
  return {
    AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null ? output.AwsAccountId : undefined,
    Compliance:
      output.Compliance !== undefined && output.Compliance !== null
        ? deserializeAws_restJson1Compliance(output.Compliance, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    Criticality: output.Criticality !== undefined && output.Criticality !== null ? output.Criticality : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null ? output.FirstObservedAt : undefined,
    GeneratorId: output.GeneratorId !== undefined && output.GeneratorId !== null ? output.GeneratorId : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
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
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1FieldMap(output.ProductFields, context)
        : undefined,
    RecordState: output.RecordState !== undefined && output.RecordState !== null ? output.RecordState : undefined,
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
    SchemaVersion:
      output.SchemaVersion !== undefined && output.SchemaVersion !== null ? output.SchemaVersion : undefined,
    Severity:
      output.Severity !== undefined && output.Severity !== null
        ? deserializeAws_restJson1Severity(output.Severity, context)
        : undefined,
    SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
    ThreatIntelIndicators:
      output.ThreatIntelIndicators !== undefined && output.ThreatIntelIndicators !== null
        ? deserializeAws_restJson1ThreatIntelIndicatorList(output.ThreatIntelIndicators, context)
        : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1TypeList(output.Types, context)
        : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
        ? deserializeAws_restJson1FieldMap(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState !== undefined && output.VerificationState !== null
        ? output.VerificationState
        : undefined,
    Vulnerabilities:
      output.Vulnerabilities !== undefined && output.Vulnerabilities !== null
        ? deserializeAws_restJson1VulnerabilityList(output.Vulnerabilities, context)
        : undefined,
    Workflow:
      output.Workflow !== undefined && output.Workflow !== null
        ? deserializeAws_restJson1Workflow(output.Workflow, context)
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null ? output.WorkflowState : undefined,
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
    ResourceAwsIamAccessKeyStatus:
      output.ResourceAwsIamAccessKeyStatus !== undefined && output.ResourceAwsIamAccessKeyStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyStatus, context)
        : undefined,
    ResourceAwsIamAccessKeyUserName:
      output.ResourceAwsIamAccessKeyUserName !== undefined && output.ResourceAwsIamAccessKeyUserName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyUserName, context)
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
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
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
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_restJson1AwsSnsTopicSubscriptionList(output.Subscription, context)
        : undefined,
    TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  return {
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
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
    DeadLetterTargetArn:
      output.DeadLetterTargetArn !== undefined && output.DeadLetterTargetArn !== null
        ? output.DeadLetterTargetArn
        : undefined,
    KmsDataKeyReusePeriodSeconds:
      output.KmsDataKeyReusePeriodSeconds !== undefined && output.KmsDataKeyReusePeriodSeconds !== null
        ? output.KmsDataKeyReusePeriodSeconds
        : undefined,
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
    QueueName: output.QueueName !== undefined && output.QueueName !== null ? output.QueueName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclDetails = (output: any, context: __SerdeContext): AwsWafWebAclDetails => {
  return {
    DefaultAction:
      output.DefaultAction !== undefined && output.DefaultAction !== null ? output.DefaultAction : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsWafWebAclRuleList(output.Rules, context)
        : undefined,
    WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
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
    Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1CidrBlockAssociation = (output: any, context: __SerdeContext): CidrBlockAssociation => {
  return {
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    CidrBlock: output.CidrBlock !== undefined && output.CidrBlock !== null ? output.CidrBlock : undefined,
    CidrBlockState:
      output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
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

const deserializeAws_restJson1Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusReasons:
      output.StatusReasons !== undefined && output.StatusReasons !== null
        ? deserializeAws_restJson1StatusReasonsList(output.StatusReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerDetails = (output: any, context: __SerdeContext): ContainerDetails => {
  return {
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    ImageName: output.ImageName !== undefined && output.ImageName !== null ? output.ImageName : undefined,
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1Cvss = (output: any, context: __SerdeContext): Cvss => {
  return {
    BaseScore: output.BaseScore !== undefined && output.BaseScore !== null ? output.BaseScore : undefined,
    BaseVector: output.BaseVector !== undefined && output.BaseVector !== null ? output.BaseVector : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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

const deserializeAws_restJson1DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return {
    DateRange:
      output.DateRange !== undefined && output.DateRange !== null
        ? deserializeAws_restJson1DateRange(output.DateRange, context)
        : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
    Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
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
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1FieldMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ImportFindingsError = (output: any, context: __SerdeContext): ImportFindingsError => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
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
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
    InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
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
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
    InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
    ResultValues:
      output.ResultValues !== undefined && output.ResultValues !== null
        ? deserializeAws_restJson1InsightResultValueList(output.ResultValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightResultValue = (output: any, context: __SerdeContext): InsightResultValue => {
  return {
    Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
    GroupByAttributeValue:
      output.GroupByAttributeValue !== undefined && output.GroupByAttributeValue !== null
        ? output.GroupByAttributeValue
        : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    InvitationId: output.InvitationId !== undefined && output.InvitationId !== null ? output.InvitationId : undefined,
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
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
    Cidr: output.Cidr !== undefined && output.Cidr !== null ? output.Cidr : undefined,
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

const deserializeAws_restJson1Ipv6CidrBlockAssociation = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation => {
  return {
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    CidrBlockState:
      output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
    Ipv6CidrBlock:
      output.Ipv6CidrBlock !== undefined && output.Ipv6CidrBlock !== null ? output.Ipv6CidrBlock : undefined,
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
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
  } as any;
};

const deserializeAws_restJson1Malware = (output: any, context: __SerdeContext): Malware => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MasterId: output.MasterId !== undefined && output.MasterId !== null ? output.MasterId : undefined,
    MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
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
    DestinationDomain:
      output.DestinationDomain !== undefined && output.DestinationDomain !== null
        ? output.DestinationDomain
        : undefined,
    DestinationIpV4:
      output.DestinationIpV4 !== undefined && output.DestinationIpV4 !== null ? output.DestinationIpV4 : undefined,
    DestinationIpV6:
      output.DestinationIpV6 !== undefined && output.DestinationIpV6 !== null ? output.DestinationIpV6 : undefined,
    DestinationPort:
      output.DestinationPort !== undefined && output.DestinationPort !== null ? output.DestinationPort : undefined,
    Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
    OpenPortRange:
      output.OpenPortRange !== undefined && output.OpenPortRange !== null
        ? deserializeAws_restJson1PortRange(output.OpenPortRange, context)
        : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    SourceDomain: output.SourceDomain !== undefined && output.SourceDomain !== null ? output.SourceDomain : undefined,
    SourceIpV4: output.SourceIpV4 !== undefined && output.SourceIpV4 !== null ? output.SourceIpV4 : undefined,
    SourceIpV6: output.SourceIpV6 !== undefined && output.SourceIpV6 !== null ? output.SourceIpV6 : undefined,
    SourceMac: output.SourceMac !== undefined && output.SourceMac !== null ? output.SourceMac : undefined,
    SourcePort: output.SourcePort !== undefined && output.SourcePort !== null ? output.SourcePort : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkHeader = (output: any, context: __SerdeContext): NetworkHeader => {
  return {
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Destination, context)
        : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Source, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponent = (output: any, context: __SerdeContext): NetworkPathComponent => {
  return {
    ComponentId: output.ComponentId !== undefined && output.ComponentId !== null ? output.ComponentId : undefined,
    ComponentType:
      output.ComponentType !== undefined && output.ComponentType !== null ? output.ComponentType : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1Note = (output: any, context: __SerdeContext): Note => {
  return {
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
    UpdatedBy: output.UpdatedBy !== undefined && output.UpdatedBy !== null ? output.UpdatedBy : undefined,
  } as any;
};

const deserializeAws_restJson1NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    Eq: output.Eq !== undefined && output.Eq !== null ? output.Eq : undefined,
    Gte: output.Gte !== undefined && output.Gte !== null ? output.Gte : undefined,
    Lte: output.Lte !== undefined && output.Lte !== null ? output.Lte : undefined,
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

const deserializeAws_restJson1PatchSummary = (output: any, context: __SerdeContext): PatchSummary => {
  return {
    FailedCount: output.FailedCount !== undefined && output.FailedCount !== null ? output.FailedCount : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstalledCount:
      output.InstalledCount !== undefined && output.InstalledCount !== null ? output.InstalledCount : undefined,
    InstalledOtherCount:
      output.InstalledOtherCount !== undefined && output.InstalledOtherCount !== null
        ? output.InstalledOtherCount
        : undefined,
    InstalledPendingReboot:
      output.InstalledPendingReboot !== undefined && output.InstalledPendingReboot !== null
        ? output.InstalledPendingReboot
        : undefined,
    InstalledRejectedCount:
      output.InstalledRejectedCount !== undefined && output.InstalledRejectedCount !== null
        ? output.InstalledRejectedCount
        : undefined,
    MissingCount: output.MissingCount !== undefined && output.MissingCount !== null ? output.MissingCount : undefined,
    Operation: output.Operation !== undefined && output.Operation !== null ? output.Operation : undefined,
    OperationEndTime:
      output.OperationEndTime !== undefined && output.OperationEndTime !== null ? output.OperationEndTime : undefined,
    OperationStartTime:
      output.OperationStartTime !== undefined && output.OperationStartTime !== null
        ? output.OperationStartTime
        : undefined,
    RebootOption: output.RebootOption !== undefined && output.RebootOption !== null ? output.RebootOption : undefined,
  } as any;
};

const deserializeAws_restJson1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    Begin: output.Begin !== undefined && output.Begin !== null ? output.Begin : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
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
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ParentPid: output.ParentPid !== undefined && output.ParentPid !== null ? output.ParentPid : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    Pid: output.Pid !== undefined && output.Pid !== null ? output.Pid : undefined,
    TerminatedAt: output.TerminatedAt !== undefined && output.TerminatedAt !== null ? output.TerminatedAt : undefined,
  } as any;
};

const deserializeAws_restJson1Product = (output: any, context: __SerdeContext): Product => {
  return {
    ActivationUrl:
      output.ActivationUrl !== undefined && output.ActivationUrl !== null ? output.ActivationUrl : undefined,
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1CategoryList(output.Categories, context)
        : undefined,
    CompanyName: output.CompanyName !== undefined && output.CompanyName !== null ? output.CompanyName : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    IntegrationTypes:
      output.IntegrationTypes !== undefined && output.IntegrationTypes !== null
        ? deserializeAws_restJson1IntegrationTypeList(output.IntegrationTypes, context)
        : undefined,
    MarketplaceUrl:
      output.MarketplaceUrl !== undefined && output.MarketplaceUrl !== null ? output.MarketplaceUrl : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
    ProductSubscriptionResourcePolicy:
      output.ProductSubscriptionResourcePolicy !== undefined && output.ProductSubscriptionResourcePolicy !== null
        ? output.ProductSubscriptionResourcePolicy
        : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1RelatedFinding = (output: any, context: __SerdeContext): RelatedFinding => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
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
      return entry;
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
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1ResourceDetails(output.Details, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Partition: output.Partition !== undefined && output.Partition !== null ? output.Partition : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    ResourceRole: output.ResourceRole !== undefined && output.ResourceRole !== null ? output.ResourceRole : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1FieldMap(output.Tags, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    AwsEc2NetworkInterface:
      output.AwsEc2NetworkInterface !== undefined && output.AwsEc2NetworkInterface !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceDetails(output.AwsEc2NetworkInterface, context)
        : undefined,
    AwsEc2SecurityGroup:
      output.AwsEc2SecurityGroup !== undefined && output.AwsEc2SecurityGroup !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupDetails(output.AwsEc2SecurityGroup, context)
        : undefined,
    AwsEc2Volume:
      output.AwsEc2Volume !== undefined && output.AwsEc2Volume !== null
        ? deserializeAws_restJson1AwsEc2VolumeDetails(output.AwsEc2Volume, context)
        : undefined,
    AwsEc2Vpc:
      output.AwsEc2Vpc !== undefined && output.AwsEc2Vpc !== null
        ? deserializeAws_restJson1AwsEc2VpcDetails(output.AwsEc2Vpc, context)
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
    AwsRedshiftCluster:
      output.AwsRedshiftCluster !== undefined && output.AwsRedshiftCluster !== null
        ? deserializeAws_restJson1AwsRedshiftClusterDetails(output.AwsRedshiftCluster, context)
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
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ProcessingResult:
      output.ProcessingResult !== undefined && output.ProcessingResult !== null ? output.ProcessingResult : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
    Normalized: output.Normalized !== undefined && output.Normalized !== null ? output.Normalized : undefined,
    Original: output.Original !== undefined && output.Original !== null ? output.Original : undefined,
    Product: output.Product !== undefined && output.Product !== null ? output.Product : undefined,
  } as any;
};

const deserializeAws_restJson1SoftwarePackage = (output: any, context: __SerdeContext): SoftwarePackage => {
  return {
    Architecture: output.Architecture !== undefined && output.Architecture !== null ? output.Architecture : undefined,
    Epoch: output.Epoch !== undefined && output.Epoch !== null ? output.Epoch : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Release: output.Release !== undefined && output.Release !== null ? output.Release : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EnabledByDefault:
      output.EnabledByDefault !== undefined && output.EnabledByDefault !== null ? output.EnabledByDefault : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
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
    ControlId: output.ControlId !== undefined && output.ControlId !== null ? output.ControlId : undefined,
    ControlStatus:
      output.ControlStatus !== undefined && output.ControlStatus !== null ? output.ControlStatus : undefined,
    ControlStatusUpdatedAt:
      output.ControlStatusUpdatedAt !== undefined && output.ControlStatusUpdatedAt !== null
        ? new Date(output.ControlStatusUpdatedAt)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisabledReason:
      output.DisabledReason !== undefined && output.DisabledReason !== null ? output.DisabledReason : undefined,
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    RemediationUrl:
      output.RemediationUrl !== undefined && output.RemediationUrl !== null ? output.RemediationUrl : undefined,
    SeverityRating:
      output.SeverityRating !== undefined && output.SeverityRating !== null ? output.SeverityRating : undefined,
    StandardsControlArn:
      output.StandardsControlArn !== undefined && output.StandardsControlArn !== null
        ? output.StandardsControlArn
        : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
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
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1StandardsSubscription = (output: any, context: __SerdeContext): StandardsSubscription => {
  return {
    StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
    StandardsInput:
      output.StandardsInput !== undefined && output.StandardsInput !== null
        ? deserializeAws_restJson1StandardsInputParameterMap(output.StandardsInput, context)
        : undefined,
    StandardsStatus:
      output.StandardsStatus !== undefined && output.StandardsStatus !== null ? output.StandardsStatus : undefined,
    StandardsSubscriptionArn:
      output.StandardsSubscriptionArn !== undefined && output.StandardsSubscriptionArn !== null
        ? output.StandardsSubscriptionArn
        : undefined,
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
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ReasonCode: output.ReasonCode !== undefined && output.ReasonCode !== null ? output.ReasonCode : undefined,
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
    Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ThreatIntelIndicator = (output: any, context: __SerdeContext): ThreatIntelIndicator => {
  return {
    Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
    Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
    SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return {
    Cvss:
      output.Cvss !== undefined && output.Cvss !== null
        ? deserializeAws_restJson1CvssList(output.Cvss, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
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
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    VendorCreatedAt:
      output.VendorCreatedAt !== undefined && output.VendorCreatedAt !== null ? output.VendorCreatedAt : undefined,
    VendorSeverity:
      output.VendorSeverity !== undefined && output.VendorSeverity !== null ? output.VendorSeverity : undefined,
    VendorUpdatedAt:
      output.VendorUpdatedAt !== undefined && output.VendorUpdatedAt !== null ? output.VendorUpdatedAt : undefined,
  } as any;
};

const deserializeAws_restJson1WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1WafExcludedRule = (output: any, context: __SerdeContext): WafExcludedRule => {
  return {
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
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
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
