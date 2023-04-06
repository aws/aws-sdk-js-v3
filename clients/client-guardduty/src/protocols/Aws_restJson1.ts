// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "../commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "../commands/ArchiveFindingsCommand";
import { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "../commands/CreateDetectorCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "../commands/CreateFilterCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "../commands/CreateIPSetCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "../commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "../commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "../commands/CreateThreatIntelSetCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "../commands/DeleteDetectorCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "../commands/DeleteFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "../commands/DeleteIPSetCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "../commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "../commands/DeleteThreatIntelSetCommand";
import {
  DescribeMalwareScansCommandInput,
  DescribeMalwareScansCommandOutput,
} from "../commands/DescribeMalwareScansCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "../commands/DescribePublishingDestinationCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "../commands/DisableOrganizationAdminAccountCommand";
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
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "../commands/GetAdministratorAccountCommand";
import {
  GetCoverageStatisticsCommandInput,
  GetCoverageStatisticsCommandOutput,
} from "../commands/GetCoverageStatisticsCommand";
import { GetDetectorCommandInput, GetDetectorCommandOutput } from "../commands/GetDetectorCommand";
import { GetFilterCommandInput, GetFilterCommandOutput } from "../commands/GetFilterCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "../commands/GetFindingsStatisticsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "../commands/GetIPSetCommand";
import {
  GetMalwareScanSettingsCommandInput,
  GetMalwareScanSettingsCommandOutput,
} from "../commands/GetMalwareScanSettingsCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput } from "../commands/GetMemberDetectorsCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand";
import {
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
} from "../commands/GetRemainingFreeTrialDaysCommand";
import { GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput } from "../commands/GetThreatIntelSetCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "../commands/InviteMembersCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "../commands/ListCoverageCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "../commands/ListDetectorsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "../commands/ListThreatIntelSetsCommand";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "../commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "../commands/StopMonitoringMembersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput } from "../commands/UnarchiveFindingsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "../commands/UpdateDetectorCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "../commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "../commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "../commands/UpdateIPSetCommand";
import {
  UpdateMalwareScanSettingsCommandInput,
  UpdateMalwareScanSettingsCommandOutput,
} from "../commands/UpdateMalwareScanSettingsCommand";
import {
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "../commands/UpdateMemberDetectorsCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "../commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "../commands/UpdateThreatIntelSetCommand";
import { GuardDutyServiceException as __BaseException } from "../models/GuardDutyServiceException";
import {
  AccessControlList,
  AccessKeyDetails,
  AccountDetail,
  AccountFreeTrialInfo,
  AccountLevelPermissions,
  Action,
  AddonDetails,
  AdminAccount,
  Administrator,
  AwsApiCallAction,
  BadRequestException,
  BlockPublicAccess,
  BucketLevelPermissions,
  BucketPolicy,
  City,
  CloudTrailConfigurationResult,
  Condition,
  Container,
  Country,
  CoverageEksClusterDetails,
  CoverageFilterCondition,
  CoverageFilterCriteria,
  CoverageFilterCriterion,
  CoverageResource,
  CoverageResourceDetails,
  CoverageSortCriteria,
  CoverageStatistics,
  CoverageStatisticsType,
  CoverageStatus,
  DataSource,
  DataSourceConfigurations,
  DataSourceConfigurationsResult,
  DataSourceFreeTrial,
  DataSourcesFreeTrial,
  DefaultServerSideEncryption,
  Destination,
  DestinationProperties,
  DetectorAdditionalConfiguration,
  DetectorAdditionalConfigurationResult,
  DetectorFeatureConfiguration,
  DetectorFeatureConfigurationResult,
  DNSLogsConfigurationResult,
  DnsRequestAction,
  DomainDetails,
  EbsVolumeDetails,
  EbsVolumeScanDetails,
  EbsVolumesResult,
  EcsClusterDetails,
  EcsTaskDetails,
  EksClusterDetails,
  Evidence,
  FilterCondition,
  FilterCriteria,
  FilterCriterion,
  Finding,
  FindingCriteria,
  FindingStatistics,
  FindingStatisticType,
  FlowLogsConfigurationResult,
  FreeTrialFeatureConfigurationResult,
  GeoLocation,
  HighestSeverityThreatDetails,
  HostPath,
  IamInstanceProfile,
  InstanceDetails,
  InternalServerErrorException,
  Invitation,
  KubernetesApiCallAction,
  KubernetesAuditLogsConfiguration,
  KubernetesAuditLogsConfigurationResult,
  KubernetesConfiguration,
  KubernetesConfigurationResult,
  KubernetesDataSourceFreeTrial,
  KubernetesDetails,
  KubernetesUserDetails,
  KubernetesWorkloadDetails,
  LineageObject,
  LocalIpDetails,
  LocalPortDetails,
  LoginAttribute,
  MalwareProtectionConfiguration,
  MalwareProtectionConfigurationResult,
  MalwareProtectionDataSourceFreeTrial,
  Master,
  Member,
  MemberAdditionalConfigurationResult,
  MemberDataSourceConfiguration,
  MemberFeaturesConfigurationResult,
  NetworkConnectionAction,
  NetworkInterface,
  Organization,
  OrganizationAdditionalConfigurationResult,
  OrganizationDataSourceConfigurationsResult,
  OrganizationEbsVolumesResult,
  OrganizationFeatureConfigurationResult,
  OrganizationKubernetesAuditLogsConfigurationResult,
  OrganizationKubernetesConfigurationResult,
  OrganizationMalwareProtectionConfigurationResult,
  OrganizationS3LogsConfigurationResult,
  OrganizationScanEc2InstanceWithFindingsResult,
  Owner,
  PermissionConfiguration,
  PortProbeAction,
  PortProbeDetail,
  PrivateIpAddressDetails,
  ProcessDetails,
  ProductCode,
  PublicAccess,
  RdsDbInstanceDetails,
  RdsDbUserDetails,
  RdsLoginAttemptAction,
  RemoteAccountDetails,
  RemoteIpDetails,
  RemotePortDetails,
  Resource,
  ResourceDetails,
  ResourceType,
  RuntimeContext,
  RuntimeDetails,
  S3BucketDetail,
  S3LogsConfiguration,
  S3LogsConfigurationResult,
  Scan,
  ScanCondition,
  ScanConditionPair,
  ScanCriterionKey,
  ScanDetections,
  ScanEc2InstanceWithFindings,
  ScanEc2InstanceWithFindingsResult,
  ScanFilePath,
  ScannedItemCount,
  ScanResourceCriteria,
  ScanResultDetails,
  ScanThreatName,
  SecurityContext,
  SecurityGroup,
  Service,
  ServiceAdditionalInfo,
  SortCriteria,
  Tag,
  ThreatDetectedByName,
  ThreatIntelligenceDetail,
  ThreatsDetectedItemCount,
  Total,
  TriggerDetails,
  UnprocessedAccount,
  UnprocessedDataSourcesResult,
  UsageAccountResult,
  UsageCriteria,
  UsageDataSourceResult,
  UsageFeature,
  UsageFeatureResult,
  UsageResourceResult,
  UsageStatistics,
  Volume,
  VolumeDetail,
  VolumeMount,
} from "../models/models_0";
import {
  MemberAdditionalConfiguration,
  MemberFeaturesConfiguration,
  OrganizationAdditionalConfiguration,
  OrganizationDataSourceConfigurations,
  OrganizationEbsVolumes,
  OrganizationFeatureConfiguration,
  OrganizationKubernetesAuditLogsConfiguration,
  OrganizationKubernetesConfiguration,
  OrganizationMalwareProtectionConfiguration,
  OrganizationS3LogsConfiguration,
  OrganizationScanEc2InstanceWithFindings,
} from "../models/models_1";

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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/administrator";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AdministratorId != null && { administratorId: input.AdministratorId }),
    ...(input.InvitationId != null && { invitationId: input.InvitationId }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/master";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId != null && { invitationId: input.InvitationId }),
    ...(input.MasterId != null && { masterId: input.MasterId }),
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

/**
 * serializeAws_restJson1ArchiveFindingsCommand
 */
export const se_ArchiveFindingsCommand = async (
  input: ArchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/archive";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds != null && { findingIds: se_FindingIds(input.FindingIds, context) }),
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

/**
 * serializeAws_restJson1CreateDetectorCommand
 */
export const se_CreateDetectorCommand = async (
  input: CreateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector";
  let body: any;
  body = JSON.stringify({
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataSources != null && { dataSources: se_DataSourceConfigurations(input.DataSources, context) }),
    ...(input.Enable != null && { enable: input.Enable }),
    ...(input.Features != null && { features: se_DetectorFeatureConfigurations(input.Features, context) }),
    ...(input.FindingPublishingFrequency != null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateFilterCommand
 */
export const se_CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/filter";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { action: input.Action }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { description: input.Description }),
    ...(input.FindingCriteria != null && { findingCriteria: se_FindingCriteria(input.FindingCriteria, context) }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Rank != null && { rank: input.Rank }),
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateIPSetCommand
 */
export const se_CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Activate != null && { activate: input.Activate }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Format != null && { format: input.Format }),
    ...(input.Location != null && { location: input.Location }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails != null && { accountDetails: se_AccountDetails(input.AccountDetails, context) }),
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

/**
 * serializeAws_restJson1CreatePublishingDestinationCommand
 */
export const se_CreatePublishingDestinationCommand = async (
  input: CreatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DestinationProperties != null && {
      destinationProperties: se_DestinationProperties(input.DestinationProperties, context),
    }),
    ...(input.DestinationType != null && { destinationType: input.DestinationType }),
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

/**
 * serializeAws_restJson1CreateSampleFindingsCommand
 */
export const se_CreateSampleFindingsCommand = async (
  input: CreateSampleFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/create";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingTypes != null && { findingTypes: se_FindingTypes(input.FindingTypes, context) }),
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

/**
 * serializeAws_restJson1CreateThreatIntelSetCommand
 */
export const se_CreateThreatIntelSetCommand = async (
  input: CreateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/threatintelset";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Activate != null && { activate: input.Activate }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Format != null && { format: input.Format }),
    ...(input.Location != null && { location: input.Location }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1DeleteDetectorCommand
 */
export const se_DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
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
 * serializeAws_restJson1DeleteFilterCommand
 */
export const se_DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "FilterName", () => input.FilterName!, "{FilterName}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1DeleteIPSetCommand
 */
export const se_DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IpSetId", () => input.IpSetId!, "{IpSetId}", false);
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1DeletePublishingDestinationCommand
 */
export const se_DeletePublishingDestinationCommand = async (
  input: DeletePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DestinationId",
    () => input.DestinationId!,
    "{DestinationId}",
    false
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
 * serializeAws_restJson1DeleteThreatIntelSetCommand
 */
export const se_DeleteThreatIntelSetCommand = async (
  input: DeleteThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ThreatIntelSetId",
    () => input.ThreatIntelSetId!,
    "{ThreatIntelSetId}",
    false
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
 * serializeAws_restJson1DescribeMalwareScansCommand
 */
export const se_DescribeMalwareScansCommand = async (
  input: DescribeMalwareScansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/malware-scans";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FilterCriteria != null && { filterCriteria: se_FilterCriteria(input.FilterCriteria, context) }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.SortCriteria != null && { sortCriteria: se_SortCriteria(input.SortCriteria, context) }),
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

/**
 * serializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const se_DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/admin";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1DescribePublishingDestinationCommand
 */
export const se_DescribePublishingDestinationCommand = async (
  input: DescribePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DestinationId",
    () => input.DestinationId!,
    "{DestinationId}",
    false
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId != null && { adminAccountId: input.AdminAccountId }),
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

/**
 * serializeAws_restJson1DisassociateFromAdministratorAccountCommand
 */
export const se_DisassociateFromAdministratorAccountCommand = async (
  input: DisassociateFromAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/administrator/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
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
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/master/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId != null && { adminAccountId: input.AdminAccountId }),
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

/**
 * serializeAws_restJson1GetAdministratorAccountCommand
 */
export const se_GetAdministratorAccountCommand = async (
  input: GetAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/administrator";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
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
 * serializeAws_restJson1GetCoverageStatisticsCommand
 */
export const se_GetCoverageStatisticsCommand = async (
  input: GetCoverageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/coverage/statistics";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FilterCriteria != null && { filterCriteria: se_CoverageFilterCriteria(input.FilterCriteria, context) }),
    ...(input.StatisticsType != null && {
      statisticsType: se_CoverageStatisticsTypeList(input.StatisticsType, context),
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

/**
 * serializeAws_restJson1GetDetectorCommand
 */
export const se_GetDetectorCommand = async (
  input: GetDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
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
 * serializeAws_restJson1GetFilterCommand
 */
export const se_GetFilterCommand = async (
  input: GetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "FilterName", () => input.FilterName!, "{FilterName}", false);
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/get";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds != null && { findingIds: se_FindingIds(input.FindingIds, context) }),
    ...(input.SortCriteria != null && { sortCriteria: se_SortCriteria(input.SortCriteria, context) }),
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

/**
 * serializeAws_restJson1GetFindingsStatisticsCommand
 */
export const se_GetFindingsStatisticsCommand = async (
  input: GetFindingsStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/findings/statistics";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingCriteria != null && { findingCriteria: se_FindingCriteria(input.FindingCriteria, context) }),
    ...(input.FindingStatisticTypes != null && {
      findingStatisticTypes: se_FindingStatisticTypes(input.FindingStatisticTypes, context),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/count";
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
 * serializeAws_restJson1GetIPSetCommand
 */
export const se_GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IpSetId", () => input.IpSetId!, "{IpSetId}", false);
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
 * serializeAws_restJson1GetMalwareScanSettingsCommand
 */
export const se_GetMalwareScanSettingsCommand = async (
  input: GetMalwareScanSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/malware-scan-settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
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
 * serializeAws_restJson1GetMasterAccountCommand
 */
export const se_GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/master";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
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
 * serializeAws_restJson1GetMemberDetectorsCommand
 */
export const se_GetMemberDetectorsCommand = async (
  input: GetMemberDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/detector/get";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/get";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1GetRemainingFreeTrialDaysCommand
 */
export const se_GetRemainingFreeTrialDaysCommand = async (
  input: GetRemainingFreeTrialDaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/freeTrial/daysRemaining";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1GetThreatIntelSetCommand
 */
export const se_GetThreatIntelSetCommand = async (
  input: GetThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ThreatIntelSetId",
    () => input.ThreatIntelSetId!,
    "{ThreatIntelSetId}",
    false
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
 * serializeAws_restJson1GetUsageStatisticsCommand
 */
export const se_GetUsageStatisticsCommand = async (
  input: GetUsageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/usage/statistics";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.Unit != null && { unit: input.Unit }),
    ...(input.UsageCriteria != null && { usageCriteria: se_UsageCriteria(input.UsageCriteria, context) }),
    ...(input.UsageStatisticType != null && { usageStatisticsType: input.UsageStatisticType }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/invite";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
    ...(input.DisableEmailNotification != null && { disableEmailNotification: input.DisableEmailNotification }),
    ...(input.Message != null && { message: input.Message }),
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

/**
 * serializeAws_restJson1ListCoverageCommand
 */
export const se_ListCoverageCommand = async (
  input: ListCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/coverage";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FilterCriteria != null && { filterCriteria: se_CoverageFilterCriteria(input.FilterCriteria, context) }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.SortCriteria != null && { sortCriteria: se_CoverageSortCriteria(input.SortCriteria, context) }),
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

/**
 * serializeAws_restJson1ListDetectorsCommand
 */
export const se_ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListFiltersCommand
 */
export const se_ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/filter";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListFindingsCommand
 */
export const se_ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingCriteria != null && { findingCriteria: se_FindingCriteria(input.FindingCriteria, context) }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.SortCriteria != null && { sortCriteria: se_SortCriteria(input.SortCriteria, context) }),
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

/**
 * serializeAws_restJson1ListInvitationsCommand
 */
export const se_ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListIPSetsCommand
 */
export const se_ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    onlyAssociated: [, input.OnlyAssociated!],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListPublishingDestinationsCommand
 */
export const se_ListPublishingDestinationsCommand = async (
  input: ListPublishingDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListThreatIntelSetsCommand
 */
export const se_ListThreatIntelSetsCommand = async (
  input: ListThreatIntelSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/threatintelset";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1StartMonitoringMembersCommand
 */
export const se_StartMonitoringMembersCommand = async (
  input: StartMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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

/**
 * serializeAws_restJson1StopMonitoringMembersCommand
 */
export const se_StopMonitoringMembersCommand = async (
  input: StopMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
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
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1UnarchiveFindingsCommand
 */
export const se_UnarchiveFindingsCommand = async (
  input: UnarchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/unarchive";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds != null && { findingIds: se_FindingIds(input.FindingIds, context) }),
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
 * serializeAws_restJson1UpdateDetectorCommand
 */
export const se_UpdateDetectorCommand = async (
  input: UpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DataSources != null && { dataSources: se_DataSourceConfigurations(input.DataSources, context) }),
    ...(input.Enable != null && { enable: input.Enable }),
    ...(input.Features != null && { features: se_DetectorFeatureConfigurations(input.Features, context) }),
    ...(input.FindingPublishingFrequency != null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
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

/**
 * serializeAws_restJson1UpdateFilterCommand
 */
export const se_UpdateFilterCommand = async (
  input: UpdateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "FilterName", () => input.FilterName!, "{FilterName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { action: input.Action }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.FindingCriteria != null && { findingCriteria: se_FindingCriteria(input.FindingCriteria, context) }),
    ...(input.Rank != null && { rank: input.Rank }),
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

/**
 * serializeAws_restJson1UpdateFindingsFeedbackCommand
 */
export const se_UpdateFindingsFeedbackCommand = async (
  input: UpdateFindingsFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/feedback";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Comments != null && { comments: input.Comments }),
    ...(input.Feedback != null && { feedback: input.Feedback }),
    ...(input.FindingIds != null && { findingIds: se_FindingIds(input.FindingIds, context) }),
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

/**
 * serializeAws_restJson1UpdateIPSetCommand
 */
export const se_UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IpSetId", () => input.IpSetId!, "{IpSetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Activate != null && { activate: input.Activate }),
    ...(input.Location != null && { location: input.Location }),
    ...(input.Name != null && { name: input.Name }),
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

/**
 * serializeAws_restJson1UpdateMalwareScanSettingsCommand
 */
export const se_UpdateMalwareScanSettingsCommand = async (
  input: UpdateMalwareScanSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/malware-scan-settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EbsSnapshotPreservation != null && { ebsSnapshotPreservation: input.EbsSnapshotPreservation }),
    ...(input.ScanResourceCriteria != null && {
      scanResourceCriteria: se_ScanResourceCriteria(input.ScanResourceCriteria, context),
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

/**
 * serializeAws_restJson1UpdateMemberDetectorsCommand
 */
export const se_UpdateMemberDetectorsCommand = async (
  input: UpdateMemberDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/detector/update";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
    ...(input.DataSources != null && { dataSources: se_DataSourceConfigurations(input.DataSources, context) }),
    ...(input.Features != null && { features: se_MemberFeaturesConfigurations(input.Features, context) }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/admin";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
    ...(input.AutoEnableOrganizationMembers != null && {
      autoEnableOrganizationMembers: input.AutoEnableOrganizationMembers,
    }),
    ...(input.DataSources != null && {
      dataSources: se_OrganizationDataSourceConfigurations(input.DataSources, context),
    }),
    ...(input.Features != null && { features: se_OrganizationFeaturesConfigurations(input.Features, context) }),
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

/**
 * serializeAws_restJson1UpdatePublishingDestinationCommand
 */
export const se_UpdatePublishingDestinationCommand = async (
  input: UpdatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DestinationId",
    () => input.DestinationId!,
    "{DestinationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationProperties != null && {
      destinationProperties: se_DestinationProperties(input.DestinationProperties, context),
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

/**
 * serializeAws_restJson1UpdateThreatIntelSetCommand
 */
export const se_UpdateThreatIntelSetCommand = async (
  input: UpdateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ThreatIntelSetId",
    () => input.ThreatIntelSetId!,
    "{ThreatIntelSetId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Activate != null && { activate: input.Activate }),
    ...(input.Location != null && { location: input.Location }),
    ...(input.Name != null && { name: input.Name }),
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ArchiveFindingsCommand
 */
export const de_ArchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ArchiveFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ArchiveFindingsCommandError
 */
const de_ArchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDetectorCommand
 */
export const de_CreateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorId != null) {
    contents.DetectorId = __expectString(data.detectorId);
  }
  if (data.unprocessedDataSources != null) {
    contents.UnprocessedDataSources = de_UnprocessedDataSourcesResult(data.unprocessedDataSources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDetectorCommandError
 */
const de_CreateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFilterCommand
 */
export const de_CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFilterCommandError
 */
const de_CreateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateIPSetCommand
 */
export const de_CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ipSetId != null) {
    contents.IpSetId = __expectString(data.ipSetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateIPSetCommandError
 */
const de_CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreatePublishingDestinationCommand
 */
export const de_CreatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinationId != null) {
    contents.DestinationId = __expectString(data.destinationId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePublishingDestinationCommandError
 */
const de_CreatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSampleFindingsCommand
 */
export const de_CreateSampleFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSampleFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSampleFindingsCommandError
 */
const de_CreateSampleFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateThreatIntelSetCommand
 */
export const de_CreateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.threatIntelSetId != null) {
    contents.ThreatIntelSetId = __expectString(data.threatIntelSetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateThreatIntelSetCommandError
 */
const de_CreateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDetectorCommand
 */
export const de_DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDetectorCommandError
 */
const de_DeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFilterCommand
 */
export const de_DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFilterCommandError
 */
const de_DeleteFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteIPSetCommand
 */
export const de_DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIPSetCommandError
 */
const de_DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePublishingDestinationCommand
 */
export const de_DeletePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePublishingDestinationCommandError
 */
const de_DeletePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteThreatIntelSetCommand
 */
export const de_DeleteThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThreatIntelSetCommandError
 */
const de_DeleteThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeMalwareScansCommand
 */
export const de_DescribeMalwareScansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMalwareScansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMalwareScansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.scans != null) {
    contents.Scans = de_Scans(data.scans, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMalwareScansCommandError
 */
const de_DescribeMalwareScansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMalwareScansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.autoEnable != null) {
    contents.AutoEnable = __expectBoolean(data.autoEnable);
  }
  if (data.autoEnableOrganizationMembers != null) {
    contents.AutoEnableOrganizationMembers = __expectString(data.autoEnableOrganizationMembers);
  }
  if (data.dataSources != null) {
    contents.DataSources = de_OrganizationDataSourceConfigurationsResult(data.dataSources, context);
  }
  if (data.features != null) {
    contents.Features = de_OrganizationFeaturesConfigurationsResults(data.features, context);
  }
  if (data.memberAccountLimitReached != null) {
    contents.MemberAccountLimitReached = __expectBoolean(data.memberAccountLimitReached);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribePublishingDestinationCommand
 */
export const de_DescribePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinationId != null) {
    contents.DestinationId = __expectString(data.destinationId);
  }
  if (data.destinationProperties != null) {
    contents.DestinationProperties = de_DestinationProperties(data.destinationProperties, context);
  }
  if (data.destinationType != null) {
    contents.DestinationType = __expectString(data.destinationType);
  }
  if (data.publishingFailureStartTimestamp != null) {
    contents.PublishingFailureStartTimestamp = __expectLong(data.publishingFailureStartTimestamp);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePublishingDestinationCommandError
 */
const de_DescribePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.administrator != null) {
    contents.Administrator = de_Administrator(data.administrator, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCoverageStatisticsCommand
 */
export const de_GetCoverageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoverageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoverageStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.coverageStatistics != null) {
    contents.CoverageStatistics = de_CoverageStatistics(data.coverageStatistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoverageStatisticsCommandError
 */
const de_GetCoverageStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoverageStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDetectorCommand
 */
export const de_GetDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dataSources != null) {
    contents.DataSources = de_DataSourceConfigurationsResult(data.dataSources, context);
  }
  if (data.features != null) {
    contents.Features = de_DetectorFeatureConfigurationsResults(data.features, context);
  }
  if (data.findingPublishingFrequency != null) {
    contents.FindingPublishingFrequency = __expectString(data.findingPublishingFrequency);
  }
  if (data.serviceRole != null) {
    contents.ServiceRole = __expectString(data.serviceRole);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.Tags = de_TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.UpdatedAt = __expectString(data.updatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDetectorCommandError
 */
const de_GetDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFilterCommand
 */
export const de_GetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.Action = __expectString(data.action);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.findingCriteria != null) {
    contents.FindingCriteria = de_FindingCriteria(data.findingCriteria, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.rank != null) {
    contents.Rank = __expectInt32(data.rank);
  }
  if (data.tags != null) {
    contents.Tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFilterCommandError
 */
const de_GetFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.findings != null) {
    contents.Findings = de_Findings(data.findings, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFindingsStatisticsCommand
 */
export const de_GetFindingsStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingStatistics != null) {
    contents.FindingStatistics = de_FindingStatistics(data.findingStatistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsStatisticsCommandError
 */
const de_GetFindingsStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.invitationsCount != null) {
    contents.InvitationsCount = __expectInt32(data.invitationsCount);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIPSetCommand
 */
export const de_GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.format != null) {
    contents.Format = __expectString(data.format);
  }
  if (data.location != null) {
    contents.Location = __expectString(data.location);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.Tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetIPSetCommandError
 */
const de_GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMalwareScanSettingsCommand
 */
export const de_GetMalwareScanSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMalwareScanSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMalwareScanSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ebsSnapshotPreservation != null) {
    contents.EbsSnapshotPreservation = __expectString(data.ebsSnapshotPreservation);
  }
  if (data.scanResourceCriteria != null) {
    contents.ScanResourceCriteria = de_ScanResourceCriteria(data.scanResourceCriteria, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMalwareScanSettingsCommandError
 */
const de_GetMalwareScanSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMalwareScanSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.master != null) {
    contents.Master = de_Master(data.master, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMemberDetectorsCommand
 */
export const de_GetMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMemberDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.MemberDataSourceConfigurations = de_MemberDataSourceConfigurations(data.members, context);
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMemberDetectorsCommandError
 */
const de_GetMemberDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.members != null) {
    contents.Members = de_Members(data.members, context);
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRemainingFreeTrialDaysCommand
 */
export const de_GetRemainingFreeTrialDaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemainingFreeTrialDaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRemainingFreeTrialDaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.Accounts = de_AccountFreeTrialInfos(data.accounts, context);
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRemainingFreeTrialDaysCommandError
 */
const de_GetRemainingFreeTrialDaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemainingFreeTrialDaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetThreatIntelSetCommand
 */
export const de_GetThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.format != null) {
    contents.Format = __expectString(data.format);
  }
  if (data.location != null) {
    contents.Location = __expectString(data.location);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.Tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetThreatIntelSetCommandError
 */
const de_GetThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetUsageStatisticsCommand
 */
export const de_GetUsageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUsageStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.usageStatistics != null) {
    contents.UsageStatistics = de_UsageStatistics(data.usageStatistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUsageStatisticsCommandError
 */
const de_GetUsageStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCoverageCommand
 */
export const de_ListCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoverageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.Resources = de_CoverageResources(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoverageCommandError
 */
const de_ListCoverageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDetectorsCommand
 */
export const de_ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorIds != null) {
    contents.DetectorIds = de_DetectorIds(data.detectorIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorsCommandError
 */
const de_ListDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFiltersCommand
 */
export const de_ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFiltersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.filterNames != null) {
    contents.FilterNames = de_FilterNames(data.filterNames, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFiltersCommandError
 */
const de_ListFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFindingsCommand
 */
export const de_ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingIds != null) {
    contents.FindingIds = de_FindingIds(data.findingIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsCommandError
 */
const de_ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.invitations != null) {
    contents.Invitations = de_Invitations(data.invitations, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListIPSetsCommand
 */
export const de_ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIPSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ipSetIds != null) {
    contents.IpSetIds = de_IpSetIds(data.ipSetIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIPSetsCommandError
 */
const de_ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.members != null) {
    contents.Members = de_Members(data.members, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.adminAccounts != null) {
    contents.AdminAccounts = de_AdminAccounts(data.adminAccounts, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPublishingDestinationsCommand
 */
export const de_ListPublishingDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPublishingDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinations != null) {
    contents.Destinations = de_Destinations(data.destinations, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPublishingDestinationsCommandError
 */
const de_ListPublishingDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.tags != null) {
    contents.Tags = de_TagMap(data.tags, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListThreatIntelSetsCommand
 */
export const de_ListThreatIntelSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListThreatIntelSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.threatIntelSetIds != null) {
    contents.ThreatIntelSetIds = de_ThreatIntelSetIds(data.threatIntelSetIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListThreatIntelSetsCommandError
 */
const de_ListThreatIntelSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartMonitoringMembersCommand
 */
export const de_StartMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartMonitoringMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartMonitoringMembersCommandError
 */
const de_StartMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopMonitoringMembersCommand
 */
export const de_StopMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopMonitoringMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopMonitoringMembersCommandError
 */
const de_StopMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UnarchiveFindingsCommand
 */
export const de_UnarchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnarchiveFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UnarchiveFindingsCommandError
 */
const de_UnarchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDetectorCommand
 */
export const de_UpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDetectorCommandError
 */
const de_UpdateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFilterCommand
 */
export const de_UpdateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFilterCommandError
 */
const de_UpdateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFindingsFeedbackCommand
 */
export const de_UpdateFindingsFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFindingsFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFindingsFeedbackCommandError
 */
const de_UpdateFindingsFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateIPSetCommand
 */
export const de_UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIPSetCommandError
 */
const de_UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMalwareScanSettingsCommand
 */
export const de_UpdateMalwareScanSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMalwareScanSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMalwareScanSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMalwareScanSettingsCommandError
 */
const de_UpdateMalwareScanSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMalwareScanSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMemberDetectorsCommand
 */
export const de_UpdateMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMemberDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = de_UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMemberDetectorsCommandError
 */
const de_UpdateMemberDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePublishingDestinationCommand
 */
export const de_UpdatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePublishingDestinationCommandError
 */
const de_UpdatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateThreatIntelSetCommand
 */
export const de_UpdateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThreatIntelSetCommandError
 */
const de_UpdateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.__type != null) {
    contents.Type = __expectString(data.__type);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.__type != null) {
    contents.Type = __expectString(data.__type);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccountDetail
 */
const se_AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { accountId: input.AccountId }),
    ...(input.Email != null && { email: input.Email }),
  };
};

/**
 * serializeAws_restJson1AccountDetails
 */
const se_AccountDetails = (input: AccountDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AccountDetail(entry, context);
    });
};

/**
 * serializeAws_restJson1AccountIds
 */
const se_AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Eq != null && { eq: se_Eq(input.Eq, context) }),
    ...(input.Equals != null && { equals: se_Equals(input.Equals, context) }),
    ...(input.GreaterThan != null && { greaterThan: input.GreaterThan }),
    ...(input.GreaterThanOrEqual != null && { greaterThanOrEqual: input.GreaterThanOrEqual }),
    ...(input.Gt != null && { gt: input.Gt }),
    ...(input.Gte != null && { gte: input.Gte }),
    ...(input.LessThan != null && { lessThan: input.LessThan }),
    ...(input.LessThanOrEqual != null && { lessThanOrEqual: input.LessThanOrEqual }),
    ...(input.Lt != null && { lt: input.Lt }),
    ...(input.Lte != null && { lte: input.Lte }),
    ...(input.Neq != null && { neq: se_Neq(input.Neq, context) }),
    ...(input.NotEquals != null && { notEquals: se_NotEquals(input.NotEquals, context) }),
  };
};

/**
 * serializeAws_restJson1CoverageFilterCondition
 */
const se_CoverageFilterCondition = (input: CoverageFilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.Equals != null && { equals: se_Equals(input.Equals, context) }),
    ...(input.NotEquals != null && { notEquals: se_NotEquals(input.NotEquals, context) }),
  };
};

/**
 * serializeAws_restJson1CoverageFilterCriteria
 */
const se_CoverageFilterCriteria = (input: CoverageFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.FilterCriterion != null && {
      filterCriterion: se_CoverageFilterCriterionList(input.FilterCriterion, context),
    }),
  };
};

/**
 * serializeAws_restJson1CoverageFilterCriterion
 */
const se_CoverageFilterCriterion = (input: CoverageFilterCriterion, context: __SerdeContext): any => {
  return {
    ...(input.CriterionKey != null && { criterionKey: input.CriterionKey }),
    ...(input.FilterCondition != null && {
      filterCondition: se_CoverageFilterCondition(input.FilterCondition, context),
    }),
  };
};

/**
 * serializeAws_restJson1CoverageFilterCriterionList
 */
const se_CoverageFilterCriterionList = (input: CoverageFilterCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CoverageFilterCriterion(entry, context);
    });
};

/**
 * serializeAws_restJson1CoverageSortCriteria
 */
const se_CoverageSortCriteria = (input: CoverageSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { attributeName: input.AttributeName }),
    ...(input.OrderBy != null && { orderBy: input.OrderBy }),
  };
};

/**
 * serializeAws_restJson1CoverageStatisticsTypeList
 */
const se_CoverageStatisticsTypeList = (input: (CoverageStatisticsType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Criterion
 */
const se_Criterion = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DataSourceConfigurations
 */
const se_DataSourceConfigurations = (input: DataSourceConfigurations, context: __SerdeContext): any => {
  return {
    ...(input.Kubernetes != null && { kubernetes: se_KubernetesConfiguration(input.Kubernetes, context) }),
    ...(input.MalwareProtection != null && {
      malwareProtection: se_MalwareProtectionConfiguration(input.MalwareProtection, context),
    }),
    ...(input.S3Logs != null && { s3Logs: se_S3LogsConfiguration(input.S3Logs, context) }),
  };
};

/**
 * serializeAws_restJson1DataSourceList
 */
const se_DataSourceList = (input: (DataSource | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DestinationProperties
 */
const se_DestinationProperties = (input: DestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn != null && { destinationArn: input.DestinationArn }),
    ...(input.KmsKeyArn != null && { kmsKeyArn: input.KmsKeyArn }),
  };
};

/**
 * serializeAws_restJson1DetectorAdditionalConfiguration
 */
const se_DetectorAdditionalConfiguration = (input: DetectorAdditionalConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.Status != null && { status: input.Status }),
  };
};

/**
 * serializeAws_restJson1DetectorAdditionalConfigurations
 */
const se_DetectorAdditionalConfigurations = (
  input: DetectorAdditionalConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DetectorAdditionalConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1DetectorFeatureConfiguration
 */
const se_DetectorFeatureConfiguration = (input: DetectorFeatureConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && {
      additionalConfiguration: se_DetectorAdditionalConfigurations(input.AdditionalConfiguration, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Status != null && { status: input.Status }),
  };
};

/**
 * serializeAws_restJson1DetectorFeatureConfigurations
 */
const se_DetectorFeatureConfigurations = (input: DetectorFeatureConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DetectorFeatureConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1Eq
 */
const se_Eq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Equals
 */
const se_Equals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FilterCondition
 */
const se_FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.EqualsValue != null && { equalsValue: input.EqualsValue }),
    ...(input.GreaterThan != null && { greaterThan: input.GreaterThan }),
    ...(input.LessThan != null && { lessThan: input.LessThan }),
  };
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.FilterCriterion != null && { filterCriterion: se_FilterCriterionList(input.FilterCriterion, context) }),
  };
};

/**
 * serializeAws_restJson1FilterCriterion
 */
const se_FilterCriterion = (input: FilterCriterion, context: __SerdeContext): any => {
  return {
    ...(input.CriterionKey != null && { criterionKey: input.CriterionKey }),
    ...(input.FilterCondition != null && { filterCondition: se_FilterCondition(input.FilterCondition, context) }),
  };
};

/**
 * serializeAws_restJson1FilterCriterionList
 */
const se_FilterCriterionList = (input: FilterCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterCriterion(entry, context);
    });
};

/**
 * serializeAws_restJson1FindingCriteria
 */
const se_FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Criterion != null && { criterion: se_Criterion(input.Criterion, context) }),
  };
};

/**
 * serializeAws_restJson1FindingIds
 */
const se_FindingIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FindingStatisticTypes
 */
const se_FindingStatisticTypes = (input: (FindingStatisticType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FindingTypes
 */
const se_FindingTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KubernetesAuditLogsConfiguration
 */
const se_KubernetesAuditLogsConfiguration = (input: KubernetesAuditLogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enable != null && { enable: input.Enable }),
  };
};

/**
 * serializeAws_restJson1KubernetesConfiguration
 */
const se_KubernetesConfiguration = (input: KubernetesConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuditLogs != null && { auditLogs: se_KubernetesAuditLogsConfiguration(input.AuditLogs, context) }),
  };
};

/**
 * serializeAws_restJson1MalwareProtectionConfiguration
 */
const se_MalwareProtectionConfiguration = (input: MalwareProtectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ScanEc2InstanceWithFindings != null && {
      scanEc2InstanceWithFindings: se_ScanEc2InstanceWithFindings(input.ScanEc2InstanceWithFindings, context),
    }),
  };
};

/**
 * serializeAws_restJson1MapEquals
 */
const se_MapEquals = (input: ScanConditionPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScanConditionPair(entry, context);
    });
};

/**
 * serializeAws_restJson1MemberAdditionalConfiguration
 */
const se_MemberAdditionalConfiguration = (input: MemberAdditionalConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.Status != null && { status: input.Status }),
  };
};

/**
 * serializeAws_restJson1MemberAdditionalConfigurations
 */
const se_MemberAdditionalConfigurations = (input: MemberAdditionalConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MemberAdditionalConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1MemberFeaturesConfiguration
 */
const se_MemberFeaturesConfiguration = (input: MemberFeaturesConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && {
      additionalConfiguration: se_MemberAdditionalConfigurations(input.AdditionalConfiguration, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Status != null && { status: input.Status }),
  };
};

/**
 * serializeAws_restJson1MemberFeaturesConfigurations
 */
const se_MemberFeaturesConfigurations = (input: MemberFeaturesConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MemberFeaturesConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1Neq
 */
const se_Neq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1NotEquals
 */
const se_NotEquals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OrganizationAdditionalConfiguration
 */
const se_OrganizationAdditionalConfiguration = (
  input: OrganizationAdditionalConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1OrganizationAdditionalConfigurations
 */
const se_OrganizationAdditionalConfigurations = (
  input: OrganizationAdditionalConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OrganizationAdditionalConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1OrganizationDataSourceConfigurations
 */
const se_OrganizationDataSourceConfigurations = (
  input: OrganizationDataSourceConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.Kubernetes != null && { kubernetes: se_OrganizationKubernetesConfiguration(input.Kubernetes, context) }),
    ...(input.MalwareProtection != null && {
      malwareProtection: se_OrganizationMalwareProtectionConfiguration(input.MalwareProtection, context),
    }),
    ...(input.S3Logs != null && { s3Logs: se_OrganizationS3LogsConfiguration(input.S3Logs, context) }),
  };
};

/**
 * serializeAws_restJson1OrganizationEbsVolumes
 */
const se_OrganizationEbsVolumes = (input: OrganizationEbsVolumes, context: __SerdeContext): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

/**
 * serializeAws_restJson1OrganizationFeatureConfiguration
 */
const se_OrganizationFeatureConfiguration = (input: OrganizationFeatureConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && {
      additionalConfiguration: se_OrganizationAdditionalConfigurations(input.AdditionalConfiguration, context),
    }),
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1OrganizationFeaturesConfigurations
 */
const se_OrganizationFeaturesConfigurations = (
  input: OrganizationFeatureConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OrganizationFeatureConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1OrganizationKubernetesAuditLogsConfiguration
 */
const se_OrganizationKubernetesAuditLogsConfiguration = (
  input: OrganizationKubernetesAuditLogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

/**
 * serializeAws_restJson1OrganizationKubernetesConfiguration
 */
const se_OrganizationKubernetesConfiguration = (
  input: OrganizationKubernetesConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs != null && {
      auditLogs: se_OrganizationKubernetesAuditLogsConfiguration(input.AuditLogs, context),
    }),
  };
};

/**
 * serializeAws_restJson1OrganizationMalwareProtectionConfiguration
 */
const se_OrganizationMalwareProtectionConfiguration = (
  input: OrganizationMalwareProtectionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScanEc2InstanceWithFindings != null && {
      scanEc2InstanceWithFindings: se_OrganizationScanEc2InstanceWithFindings(
        input.ScanEc2InstanceWithFindings,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1OrganizationS3LogsConfiguration
 */
const se_OrganizationS3LogsConfiguration = (input: OrganizationS3LogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

/**
 * serializeAws_restJson1OrganizationScanEc2InstanceWithFindings
 */
const se_OrganizationScanEc2InstanceWithFindings = (
  input: OrganizationScanEc2InstanceWithFindings,
  context: __SerdeContext
): any => {
  return {
    ...(input.EbsVolumes != null && { ebsVolumes: se_OrganizationEbsVolumes(input.EbsVolumes, context) }),
  };
};

/**
 * serializeAws_restJson1ResourceList
 */
const se_ResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3LogsConfiguration
 */
const se_S3LogsConfiguration = (input: S3LogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enable != null && { enable: input.Enable }),
  };
};

/**
 * serializeAws_restJson1ScanCondition
 */
const se_ScanCondition = (input: ScanCondition, context: __SerdeContext): any => {
  return {
    ...(input.MapEquals != null && { mapEquals: se_MapEquals(input.MapEquals, context) }),
  };
};

/**
 * serializeAws_restJson1ScanConditionPair
 */
const se_ScanConditionPair = (input: ScanConditionPair, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { key: input.Key }),
    ...(input.Value != null && { value: input.Value }),
  };
};

/**
 * serializeAws_restJson1ScanCriterion
 */
const se_ScanCriterion = (input: Record<string, ScanCondition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ScanCriterionKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ScanCondition(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ScanEc2InstanceWithFindings
 */
const se_ScanEc2InstanceWithFindings = (input: ScanEc2InstanceWithFindings, context: __SerdeContext): any => {
  return {
    ...(input.EbsVolumes != null && { ebsVolumes: input.EbsVolumes }),
  };
};

/**
 * serializeAws_restJson1ScanResourceCriteria
 */
const se_ScanResourceCriteria = (input: ScanResourceCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Exclude != null && { exclude: se_ScanCriterion(input.Exclude, context) }),
    ...(input.Include != null && { include: se_ScanCriterion(input.Include, context) }),
  };
};

/**
 * serializeAws_restJson1SortCriteria
 */
const se_SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { attributeName: input.AttributeName }),
    ...(input.OrderBy != null && { orderBy: input.OrderBy }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UsageCriteria
 */
const se_UsageCriteria = (input: UsageCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AccountIds != null && { accountIds: se_AccountIds(input.AccountIds, context) }),
    ...(input.DataSources != null && { dataSources: se_DataSourceList(input.DataSources, context) }),
    ...(input.Features != null && { features: se_UsageFeatureList(input.Features, context) }),
    ...(input.Resources != null && { resources: se_ResourceList(input.Resources, context) }),
  };
};

/**
 * serializeAws_restJson1UsageFeatureList
 */
const se_UsageFeatureList = (input: (UsageFeature | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AccessControlList
 */
const de_AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

/**
 * deserializeAws_restJson1AccessKeyDetails
 */
const de_AccessKeyDetails = (output: any, context: __SerdeContext): AccessKeyDetails => {
  return {
    AccessKeyId: __expectString(output.accessKeyId),
    PrincipalId: __expectString(output.principalId),
    UserName: __expectString(output.userName),
    UserType: __expectString(output.userType),
  } as any;
};

/**
 * deserializeAws_restJson1AccountFreeTrialInfo
 */
const de_AccountFreeTrialInfo = (output: any, context: __SerdeContext): AccountFreeTrialInfo => {
  return {
    AccountId: __expectString(output.accountId),
    DataSources: output.dataSources != null ? de_DataSourcesFreeTrial(output.dataSources, context) : undefined,
    Features: output.features != null ? de_FreeTrialFeatureConfigurationsResults(output.features, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccountFreeTrialInfos
 */
const de_AccountFreeTrialInfos = (output: any, context: __SerdeContext): AccountFreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountFreeTrialInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccountLevelPermissions
 */
const de_AccountLevelPermissions = (output: any, context: __SerdeContext): AccountLevelPermissions => {
  return {
    BlockPublicAccess:
      output.blockPublicAccess != null ? de_BlockPublicAccess(output.blockPublicAccess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionType: __expectString(output.actionType),
    AwsApiCallAction:
      output.awsApiCallAction != null ? de_AwsApiCallAction(output.awsApiCallAction, context) : undefined,
    DnsRequestAction:
      output.dnsRequestAction != null ? de_DnsRequestAction(output.dnsRequestAction, context) : undefined,
    KubernetesApiCallAction:
      output.kubernetesApiCallAction != null
        ? de_KubernetesApiCallAction(output.kubernetesApiCallAction, context)
        : undefined,
    NetworkConnectionAction:
      output.networkConnectionAction != null
        ? de_NetworkConnectionAction(output.networkConnectionAction, context)
        : undefined,
    PortProbeAction: output.portProbeAction != null ? de_PortProbeAction(output.portProbeAction, context) : undefined,
    RdsLoginAttemptAction:
      output.rdsLoginAttemptAction != null
        ? de_RdsLoginAttemptAction(output.rdsLoginAttemptAction, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AddonDetails
 */
const de_AddonDetails = (output: any, context: __SerdeContext): AddonDetails => {
  return {
    AddonStatus: __expectString(output.addonStatus),
    AddonVersion: __expectString(output.addonVersion),
  } as any;
};

/**
 * deserializeAws_restJson1AdminAccount
 */
const de_AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AdminAccountId: __expectString(output.adminAccountId),
    AdminStatus: __expectString(output.adminStatus),
  } as any;
};

/**
 * deserializeAws_restJson1AdminAccounts
 */
const de_AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdminAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Administrator
 */
const de_Administrator = (output: any, context: __SerdeContext): Administrator => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

/**
 * deserializeAws_restJson1AffectedResources
 */
const de_AffectedResources = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AwsApiCallAction
 */
const de_AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return {
    AffectedResources:
      output.affectedResources != null ? de_AffectedResources(output.affectedResources, context) : undefined,
    Api: __expectString(output.api),
    CallerType: __expectString(output.callerType),
    DomainDetails: output.domainDetails != null ? de_DomainDetails(output.domainDetails, context) : undefined,
    ErrorCode: __expectString(output.errorCode),
    RemoteAccountDetails:
      output.remoteAccountDetails != null ? de_RemoteAccountDetails(output.remoteAccountDetails, context) : undefined,
    RemoteIpDetails: output.remoteIpDetails != null ? de_RemoteIpDetails(output.remoteIpDetails, context) : undefined,
    ServiceName: __expectString(output.serviceName),
    UserAgent: __expectString(output.userAgent),
  } as any;
};

/**
 * deserializeAws_restJson1BlockPublicAccess
 */
const de_BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return {
    BlockPublicAcls: __expectBoolean(output.blockPublicAcls),
    BlockPublicPolicy: __expectBoolean(output.blockPublicPolicy),
    IgnorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    RestrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

/**
 * deserializeAws_restJson1BucketLevelPermissions
 */
const de_BucketLevelPermissions = (output: any, context: __SerdeContext): BucketLevelPermissions => {
  return {
    AccessControlList:
      output.accessControlList != null ? de_AccessControlList(output.accessControlList, context) : undefined,
    BlockPublicAccess:
      output.blockPublicAccess != null ? de_BlockPublicAccess(output.blockPublicAccess, context) : undefined,
    BucketPolicy: output.bucketPolicy != null ? de_BucketPolicy(output.bucketPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BucketPolicy
 */
const de_BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

/**
 * deserializeAws_restJson1City
 */
const de_City = (output: any, context: __SerdeContext): City => {
  return {
    CityName: __expectString(output.cityName),
  } as any;
};

/**
 * deserializeAws_restJson1CloudTrailConfigurationResult
 */
const de_CloudTrailConfigurationResult = (output: any, context: __SerdeContext): CloudTrailConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Eq: output.eq != null ? de_Eq(output.eq, context) : undefined,
    Equals: output.equals != null ? de_Equals(output.equals, context) : undefined,
    GreaterThan: __expectLong(output.greaterThan),
    GreaterThanOrEqual: __expectLong(output.greaterThanOrEqual),
    Gt: __expectInt32(output.gt),
    Gte: __expectInt32(output.gte),
    LessThan: __expectLong(output.lessThan),
    LessThanOrEqual: __expectLong(output.lessThanOrEqual),
    Lt: __expectInt32(output.lt),
    Lte: __expectInt32(output.lte),
    Neq: output.neq != null ? de_Neq(output.neq, context) : undefined,
    NotEquals: output.notEquals != null ? de_NotEquals(output.notEquals, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return {
    ContainerRuntime: __expectString(output.containerRuntime),
    Id: __expectString(output.id),
    Image: __expectString(output.image),
    ImagePrefix: __expectString(output.imagePrefix),
    Name: __expectString(output.name),
    SecurityContext: output.securityContext != null ? de_SecurityContext(output.securityContext, context) : undefined,
    VolumeMounts: output.volumeMounts != null ? de_VolumeMounts(output.volumeMounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Containers
 */
const de_Containers = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Container(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CountByCoverageStatus
 */
const de_CountByCoverageStatus = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [CoverageStatus | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1CountByResourceType
 */
const de_CountByResourceType = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [ResourceType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1CountBySeverity
 */
const de_CountBySeverity = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Country
 */
const de_Country = (output: any, context: __SerdeContext): Country => {
  return {
    CountryCode: __expectString(output.countryCode),
    CountryName: __expectString(output.countryName),
  } as any;
};

/**
 * deserializeAws_restJson1CoverageEksClusterDetails
 */
const de_CoverageEksClusterDetails = (output: any, context: __SerdeContext): CoverageEksClusterDetails => {
  return {
    AddonDetails: output.addonDetails != null ? de_AddonDetails(output.addonDetails, context) : undefined,
    ClusterName: __expectString(output.clusterName),
    CompatibleNodes: __expectLong(output.compatibleNodes),
    CoveredNodes: __expectLong(output.coveredNodes),
  } as any;
};

/**
 * deserializeAws_restJson1CoverageResource
 */
const de_CoverageResource = (output: any, context: __SerdeContext): CoverageResource => {
  return {
    AccountId: __expectString(output.accountId),
    CoverageStatus: __expectString(output.coverageStatus),
    DetectorId: __expectString(output.detectorId),
    Issue: __expectString(output.issue),
    ResourceDetails:
      output.resourceDetails != null ? de_CoverageResourceDetails(output.resourceDetails, context) : undefined,
    ResourceId: __expectString(output.resourceId),
    UpdatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoverageResourceDetails
 */
const de_CoverageResourceDetails = (output: any, context: __SerdeContext): CoverageResourceDetails => {
  return {
    EksClusterDetails:
      output.eksClusterDetails != null ? de_CoverageEksClusterDetails(output.eksClusterDetails, context) : undefined,
    ResourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1CoverageResources
 */
const de_CoverageResources = (output: any, context: __SerdeContext): CoverageResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoverageResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoverageStatistics
 */
const de_CoverageStatistics = (output: any, context: __SerdeContext): CoverageStatistics => {
  return {
    CountByCoverageStatus:
      output.countByCoverageStatus != null
        ? de_CountByCoverageStatus(output.countByCoverageStatus, context)
        : undefined,
    CountByResourceType:
      output.countByResourceType != null ? de_CountByResourceType(output.countByResourceType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Criterion
 */
const de_Criterion = (output: any, context: __SerdeContext): Record<string, Condition> => {
  return Object.entries(output).reduce((acc: Record<string, Condition>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Condition(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DataSourceConfigurationsResult
 */
const de_DataSourceConfigurationsResult = (output: any, context: __SerdeContext): DataSourceConfigurationsResult => {
  return {
    CloudTrail: output.cloudTrail != null ? de_CloudTrailConfigurationResult(output.cloudTrail, context) : undefined,
    DNSLogs: output.dnsLogs != null ? de_DNSLogsConfigurationResult(output.dnsLogs, context) : undefined,
    FlowLogs: output.flowLogs != null ? de_FlowLogsConfigurationResult(output.flowLogs, context) : undefined,
    Kubernetes: output.kubernetes != null ? de_KubernetesConfigurationResult(output.kubernetes, context) : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? de_MalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
    S3Logs: output.s3Logs != null ? de_S3LogsConfigurationResult(output.s3Logs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataSourceFreeTrial
 */
const de_DataSourceFreeTrial = (output: any, context: __SerdeContext): DataSourceFreeTrial => {
  return {
    FreeTrialDaysRemaining: __expectInt32(output.freeTrialDaysRemaining),
  } as any;
};

/**
 * deserializeAws_restJson1DataSourcesFreeTrial
 */
const de_DataSourcesFreeTrial = (output: any, context: __SerdeContext): DataSourcesFreeTrial => {
  return {
    CloudTrail: output.cloudTrail != null ? de_DataSourceFreeTrial(output.cloudTrail, context) : undefined,
    DnsLogs: output.dnsLogs != null ? de_DataSourceFreeTrial(output.dnsLogs, context) : undefined,
    FlowLogs: output.flowLogs != null ? de_DataSourceFreeTrial(output.flowLogs, context) : undefined,
    Kubernetes: output.kubernetes != null ? de_KubernetesDataSourceFreeTrial(output.kubernetes, context) : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? de_MalwareProtectionDataSourceFreeTrial(output.malwareProtection, context)
        : undefined,
    S3Logs: output.s3Logs != null ? de_DataSourceFreeTrial(output.s3Logs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DefaultServerSideEncryption
 */
const de_DefaultServerSideEncryption = (output: any, context: __SerdeContext): DefaultServerSideEncryption => {
  return {
    EncryptionType: __expectString(output.encryptionType),
    KmsMasterKeyArn: __expectString(output.kmsMasterKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    DestinationId: __expectString(output.destinationId),
    DestinationType: __expectString(output.destinationType),
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DestinationProperties
 */
const de_DestinationProperties = (output: any, context: __SerdeContext): DestinationProperties => {
  return {
    DestinationArn: __expectString(output.destinationArn),
    KmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1Destinations
 */
const de_Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Destination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorAdditionalConfigurationResult
 */
const de_DetectorAdditionalConfigurationResult = (
  output: any,
  context: __SerdeContext
): DetectorAdditionalConfigurationResult => {
  return {
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    UpdatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorAdditionalConfigurationResults
 */
const de_DetectorAdditionalConfigurationResults = (
  output: any,
  context: __SerdeContext
): DetectorAdditionalConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorAdditionalConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorFeatureConfigurationResult
 */
const de_DetectorFeatureConfigurationResult = (
  output: any,
  context: __SerdeContext
): DetectorFeatureConfigurationResult => {
  return {
    AdditionalConfiguration:
      output.additionalConfiguration != null
        ? de_DetectorAdditionalConfigurationResults(output.additionalConfiguration, context)
        : undefined,
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    UpdatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorFeatureConfigurationsResults
 */
const de_DetectorFeatureConfigurationsResults = (
  output: any,
  context: __SerdeContext
): DetectorFeatureConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorFeatureConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorIds
 */
const de_DetectorIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DNSLogsConfigurationResult
 */
const de_DNSLogsConfigurationResult = (output: any, context: __SerdeContext): DNSLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DnsRequestAction
 */
const de_DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    Domain: __expectString(output.domain),
    Protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_restJson1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return {
    Domain: __expectString(output.domain),
  } as any;
};

/**
 * deserializeAws_restJson1EbsVolumeDetails
 */
const de_EbsVolumeDetails = (output: any, context: __SerdeContext): EbsVolumeDetails => {
  return {
    ScannedVolumeDetails:
      output.scannedVolumeDetails != null ? de_VolumeDetails(output.scannedVolumeDetails, context) : undefined,
    SkippedVolumeDetails:
      output.skippedVolumeDetails != null ? de_VolumeDetails(output.skippedVolumeDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EbsVolumeScanDetails
 */
const de_EbsVolumeScanDetails = (output: any, context: __SerdeContext): EbsVolumeScanDetails => {
  return {
    ScanCompletedAt:
      output.scanCompletedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanCompletedAt)))
        : undefined,
    ScanDetections: output.scanDetections != null ? de_ScanDetections(output.scanDetections, context) : undefined,
    ScanId: __expectString(output.scanId),
    ScanStartedAt:
      output.scanStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanStartedAt)))
        : undefined,
    Sources: output.sources != null ? de_Sources(output.sources, context) : undefined,
    TriggerFindingId: __expectString(output.triggerFindingId),
  } as any;
};

/**
 * deserializeAws_restJson1EbsVolumesResult
 */
const de_EbsVolumesResult = (output: any, context: __SerdeContext): EbsVolumesResult => {
  return {
    Reason: __expectString(output.reason),
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1EcsClusterDetails
 */
const de_EcsClusterDetails = (output: any, context: __SerdeContext): EcsClusterDetails => {
  return {
    ActiveServicesCount: __expectInt32(output.activeServicesCount),
    Arn: __expectString(output.arn),
    Name: __expectString(output.name),
    RegisteredContainerInstancesCount: __expectInt32(output.registeredContainerInstancesCount),
    RunningTasksCount: __expectInt32(output.runningTasksCount),
    Status: __expectString(output.status),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    TaskDetails: output.taskDetails != null ? de_EcsTaskDetails(output.taskDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EcsTaskDetails
 */
const de_EcsTaskDetails = (output: any, context: __SerdeContext): EcsTaskDetails => {
  return {
    Arn: __expectString(output.arn),
    Containers: output.containers != null ? de_Containers(output.containers, context) : undefined,
    DefinitionArn: __expectString(output.definitionArn),
    Group: __expectString(output.group),
    StartedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    StartedBy: __expectString(output.startedBy),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    TaskCreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    Version: __expectString(output.version),
    Volumes: output.volumes != null ? de_Volumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksClusterDetails
 */
const de_EksClusterDetails = (output: any, context: __SerdeContext): EksClusterDetails => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    VpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1Eq
 */
const de_Eq = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Equals
 */
const de_Equals = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Evidence
 */
const de_Evidence = (output: any, context: __SerdeContext): Evidence => {
  return {
    ThreatIntelligenceDetails:
      output.threatIntelligenceDetails != null
        ? de_ThreatIntelligenceDetails(output.threatIntelligenceDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilePaths
 */
const de_FilePaths = (output: any, context: __SerdeContext): ScanFilePath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScanFilePath(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FilterNames
 */
const de_FilterNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    AccountId: __expectString(output.accountId),
    Arn: __expectString(output.arn),
    Confidence: __limitedParseDouble(output.confidence),
    CreatedAt: __expectString(output.createdAt),
    Description: __expectString(output.description),
    Id: __expectString(output.id),
    Partition: __expectString(output.partition),
    Region: __expectString(output.region),
    Resource: output.resource != null ? de_Resource(output.resource, context) : undefined,
    SchemaVersion: __expectString(output.schemaVersion),
    Service: output.service != null ? de_Service(output.service, context) : undefined,
    Severity: __limitedParseDouble(output.severity),
    Title: __expectString(output.title),
    Type: __expectString(output.type),
    UpdatedAt: __expectString(output.updatedAt),
  } as any;
};

/**
 * deserializeAws_restJson1FindingCriteria
 */
const de_FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    Criterion: output.criterion != null ? de_Criterion(output.criterion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingIds
 */
const de_FindingIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Findings
 */
const de_Findings = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Finding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingStatistics
 */
const de_FindingStatistics = (output: any, context: __SerdeContext): FindingStatistics => {
  return {
    CountBySeverity: output.countBySeverity != null ? de_CountBySeverity(output.countBySeverity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FlagsList
 */
const de_FlagsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowLogsConfigurationResult
 */
const de_FlowLogsConfigurationResult = (output: any, context: __SerdeContext): FlowLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialFeatureConfigurationResult
 */
const de_FreeTrialFeatureConfigurationResult = (
  output: any,
  context: __SerdeContext
): FreeTrialFeatureConfigurationResult => {
  return {
    FreeTrialDaysRemaining: __expectInt32(output.freeTrialDaysRemaining),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialFeatureConfigurationsResults
 */
const de_FreeTrialFeatureConfigurationsResults = (
  output: any,
  context: __SerdeContext
): FreeTrialFeatureConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FreeTrialFeatureConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeoLocation
 */
const de_GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return {
    Lat: __limitedParseDouble(output.lat),
    Lon: __limitedParseDouble(output.lon),
  } as any;
};

/**
 * deserializeAws_restJson1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HighestSeverityThreatDetails
 */
const de_HighestSeverityThreatDetails = (output: any, context: __SerdeContext): HighestSeverityThreatDetails => {
  return {
    Count: __expectInt32(output.count),
    Severity: __expectString(output.severity),
    ThreatName: __expectString(output.threatName),
  } as any;
};

/**
 * deserializeAws_restJson1HostPath
 */
const de_HostPath = (output: any, context: __SerdeContext): HostPath => {
  return {
    Path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_restJson1IamInstanceProfile
 */
const de_IamInstanceProfile = (output: any, context: __SerdeContext): IamInstanceProfile => {
  return {
    Arn: __expectString(output.arn),
    Id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceDetails
 */
const de_InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    IamInstanceProfile:
      output.iamInstanceProfile != null ? de_IamInstanceProfile(output.iamInstanceProfile, context) : undefined,
    ImageDescription: __expectString(output.imageDescription),
    ImageId: __expectString(output.imageId),
    InstanceId: __expectString(output.instanceId),
    InstanceState: __expectString(output.instanceState),
    InstanceType: __expectString(output.instanceType),
    LaunchTime: __expectString(output.launchTime),
    NetworkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    OutpostArn: __expectString(output.outpostArn),
    Platform: __expectString(output.platform),
    ProductCodes: output.productCodes != null ? de_ProductCodes(output.productCodes, context) : undefined,
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

/**
 * deserializeAws_restJson1Invitations
 */
const de_Invitations = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Invitation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IpSetIds
 */
const de_IpSetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Ipv6Addresses
 */
const de_Ipv6Addresses = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KubernetesApiCallAction
 */
const de_KubernetesApiCallAction = (output: any, context: __SerdeContext): KubernetesApiCallAction => {
  return {
    Parameters: __expectString(output.parameters),
    RemoteIpDetails: output.remoteIpDetails != null ? de_RemoteIpDetails(output.remoteIpDetails, context) : undefined,
    RequestUri: __expectString(output.requestUri),
    SourceIps: output.sourceIps != null ? de_SourceIps(output.sourceIps, context) : undefined,
    StatusCode: __expectInt32(output.statusCode),
    UserAgent: __expectString(output.userAgent),
    Verb: __expectString(output.verb),
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesAuditLogsConfigurationResult
 */
const de_KubernetesAuditLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): KubernetesAuditLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesConfigurationResult
 */
const de_KubernetesConfigurationResult = (output: any, context: __SerdeContext): KubernetesConfigurationResult => {
  return {
    AuditLogs:
      output.auditLogs != null ? de_KubernetesAuditLogsConfigurationResult(output.auditLogs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesDataSourceFreeTrial
 */
const de_KubernetesDataSourceFreeTrial = (output: any, context: __SerdeContext): KubernetesDataSourceFreeTrial => {
  return {
    AuditLogs: output.auditLogs != null ? de_DataSourceFreeTrial(output.auditLogs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesDetails
 */
const de_KubernetesDetails = (output: any, context: __SerdeContext): KubernetesDetails => {
  return {
    KubernetesUserDetails:
      output.kubernetesUserDetails != null
        ? de_KubernetesUserDetails(output.kubernetesUserDetails, context)
        : undefined,
    KubernetesWorkloadDetails:
      output.kubernetesWorkloadDetails != null
        ? de_KubernetesWorkloadDetails(output.kubernetesWorkloadDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesUserDetails
 */
const de_KubernetesUserDetails = (output: any, context: __SerdeContext): KubernetesUserDetails => {
  return {
    Groups: output.groups != null ? de_Groups(output.groups, context) : undefined,
    Uid: __expectString(output.uid),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1KubernetesWorkloadDetails
 */
const de_KubernetesWorkloadDetails = (output: any, context: __SerdeContext): KubernetesWorkloadDetails => {
  return {
    Containers: output.containers != null ? de_Containers(output.containers, context) : undefined,
    HostNetwork: __expectBoolean(output.hostNetwork),
    Name: __expectString(output.name),
    Namespace: __expectString(output.namespace),
    Type: __expectString(output.type),
    Uid: __expectString(output.uid),
    Volumes: output.volumes != null ? de_Volumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Lineage
 */
const de_Lineage = (output: any, context: __SerdeContext): LineageObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LineageObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineageObject
 */
const de_LineageObject = (output: any, context: __SerdeContext): LineageObject => {
  return {
    Euid: __expectInt32(output.euid),
    ExecutablePath: __expectString(output.executablePath),
    Name: __expectString(output.name),
    NamespacePid: __expectInt32(output.namespacePid),
    ParentUuid: __expectString(output.parentUuid),
    Pid: __expectInt32(output.pid),
    StartTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    UserId: __expectInt32(output.userId),
    Uuid: __expectString(output.uuid),
  } as any;
};

/**
 * deserializeAws_restJson1LocalIpDetails
 */
const de_LocalIpDetails = (output: any, context: __SerdeContext): LocalIpDetails => {
  return {
    IpAddressV4: __expectString(output.ipAddressV4),
  } as any;
};

/**
 * deserializeAws_restJson1LocalPortDetails
 */
const de_LocalPortDetails = (output: any, context: __SerdeContext): LocalPortDetails => {
  return {
    Port: __expectInt32(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

/**
 * deserializeAws_restJson1LoginAttribute
 */
const de_LoginAttribute = (output: any, context: __SerdeContext): LoginAttribute => {
  return {
    Application: __expectString(output.application),
    FailedLoginAttempts: __expectInt32(output.failedLoginAttempts),
    SuccessfulLoginAttempts: __expectInt32(output.successfulLoginAttempts),
    User: __expectString(output.user),
  } as any;
};

/**
 * deserializeAws_restJson1LoginAttributes
 */
const de_LoginAttributes = (output: any, context: __SerdeContext): LoginAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoginAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MalwareProtectionConfigurationResult
 */
const de_MalwareProtectionConfigurationResult = (
  output: any,
  context: __SerdeContext
): MalwareProtectionConfigurationResult => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? de_ScanEc2InstanceWithFindingsResult(output.scanEc2InstanceWithFindings, context)
        : undefined,
    ServiceRole: __expectString(output.serviceRole),
  } as any;
};

/**
 * deserializeAws_restJson1MalwareProtectionDataSourceFreeTrial
 */
const de_MalwareProtectionDataSourceFreeTrial = (
  output: any,
  context: __SerdeContext
): MalwareProtectionDataSourceFreeTrial => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? de_DataSourceFreeTrial(output.scanEc2InstanceWithFindings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MapEquals
 */
const de_MapEquals = (output: any, context: __SerdeContext): ScanConditionPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScanConditionPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Master
 */
const de_Master = (output: any, context: __SerdeContext): Master => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return {
    AccountId: __expectString(output.accountId),
    AdministratorId: __expectString(output.administratorId),
    DetectorId: __expectString(output.detectorId),
    Email: __expectString(output.email),
    InvitedAt: __expectString(output.invitedAt),
    MasterId: __expectString(output.masterId),
    RelationshipStatus: __expectString(output.relationshipStatus),
    UpdatedAt: __expectString(output.updatedAt),
  } as any;
};

/**
 * deserializeAws_restJson1MemberAdditionalConfigurationResult
 */
const de_MemberAdditionalConfigurationResult = (
  output: any,
  context: __SerdeContext
): MemberAdditionalConfigurationResult => {
  return {
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    UpdatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MemberAdditionalConfigurationResults
 */
const de_MemberAdditionalConfigurationResults = (
  output: any,
  context: __SerdeContext
): MemberAdditionalConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberAdditionalConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemberDataSourceConfiguration
 */
const de_MemberDataSourceConfiguration = (output: any, context: __SerdeContext): MemberDataSourceConfiguration => {
  return {
    AccountId: __expectString(output.accountId),
    DataSources:
      output.dataSources != null ? de_DataSourceConfigurationsResult(output.dataSources, context) : undefined,
    Features: output.features != null ? de_MemberFeaturesConfigurationsResults(output.features, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MemberDataSourceConfigurations
 */
const de_MemberDataSourceConfigurations = (output: any, context: __SerdeContext): MemberDataSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberDataSourceConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemberFeaturesConfigurationResult
 */
const de_MemberFeaturesConfigurationResult = (
  output: any,
  context: __SerdeContext
): MemberFeaturesConfigurationResult => {
  return {
    AdditionalConfiguration:
      output.additionalConfiguration != null
        ? de_MemberAdditionalConfigurationResults(output.additionalConfiguration, context)
        : undefined,
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    UpdatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MemberFeaturesConfigurationsResults
 */
const de_MemberFeaturesConfigurationsResults = (
  output: any,
  context: __SerdeContext
): MemberFeaturesConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberFeaturesConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Members
 */
const de_Members = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Member(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemoryRegionsList
 */
const de_MemoryRegionsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Neq
 */
const de_Neq = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkConnectionAction
 */
const de_NetworkConnectionAction = (output: any, context: __SerdeContext): NetworkConnectionAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    ConnectionDirection: __expectString(output.connectionDirection),
    LocalIpDetails: output.localIpDetails != null ? de_LocalIpDetails(output.localIpDetails, context) : undefined,
    LocalPortDetails:
      output.localPortDetails != null ? de_LocalPortDetails(output.localPortDetails, context) : undefined,
    Protocol: __expectString(output.protocol),
    RemoteIpDetails: output.remoteIpDetails != null ? de_RemoteIpDetails(output.remoteIpDetails, context) : undefined,
    RemotePortDetails:
      output.remotePortDetails != null ? de_RemotePortDetails(output.remotePortDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    Ipv6Addresses: output.ipv6Addresses != null ? de_Ipv6Addresses(output.ipv6Addresses, context) : undefined,
    NetworkInterfaceId: __expectString(output.networkInterfaceId),
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
    PrivateIpAddresses:
      output.privateIpAddresses != null ? de_PrivateIpAddresses(output.privateIpAddresses, context) : undefined,
    PublicDnsName: __expectString(output.publicDnsName),
    PublicIp: __expectString(output.publicIp),
    SecurityGroups: output.securityGroups != null ? de_SecurityGroups(output.securityGroups, context) : undefined,
    SubnetId: __expectString(output.subnetId),
    VpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotEquals
 */
const de_NotEquals = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Organization
 */
const de_Organization = (output: any, context: __SerdeContext): Organization => {
  return {
    Asn: __expectString(output.asn),
    AsnOrg: __expectString(output.asnOrg),
    Isp: __expectString(output.isp),
    Org: __expectString(output.org),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationAdditionalConfigurationResult
 */
const de_OrganizationAdditionalConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationAdditionalConfigurationResult => {
  return {
    AutoEnable: __expectString(output.autoEnable),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationAdditionalConfigurationResults
 */
const de_OrganizationAdditionalConfigurationResults = (
  output: any,
  context: __SerdeContext
): OrganizationAdditionalConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationAdditionalConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationDataSourceConfigurationsResult
 */
const de_OrganizationDataSourceConfigurationsResult = (
  output: any,
  context: __SerdeContext
): OrganizationDataSourceConfigurationsResult => {
  return {
    Kubernetes:
      output.kubernetes != null ? de_OrganizationKubernetesConfigurationResult(output.kubernetes, context) : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? de_OrganizationMalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
    S3Logs: output.s3Logs != null ? de_OrganizationS3LogsConfigurationResult(output.s3Logs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationEbsVolumesResult
 */
const de_OrganizationEbsVolumesResult = (output: any, context: __SerdeContext): OrganizationEbsVolumesResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationFeatureConfigurationResult
 */
const de_OrganizationFeatureConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationFeatureConfigurationResult => {
  return {
    AdditionalConfiguration:
      output.additionalConfiguration != null
        ? de_OrganizationAdditionalConfigurationResults(output.additionalConfiguration, context)
        : undefined,
    AutoEnable: __expectString(output.autoEnable),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationFeaturesConfigurationsResults
 */
const de_OrganizationFeaturesConfigurationsResults = (
  output: any,
  context: __SerdeContext
): OrganizationFeatureConfigurationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationFeatureConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationKubernetesAuditLogsConfigurationResult
 */
const de_OrganizationKubernetesAuditLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationKubernetesAuditLogsConfigurationResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationKubernetesConfigurationResult
 */
const de_OrganizationKubernetesConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationKubernetesConfigurationResult => {
  return {
    AuditLogs:
      output.auditLogs != null
        ? de_OrganizationKubernetesAuditLogsConfigurationResult(output.auditLogs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationMalwareProtectionConfigurationResult
 */
const de_OrganizationMalwareProtectionConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationMalwareProtectionConfigurationResult => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? de_OrganizationScanEc2InstanceWithFindingsResult(output.scanEc2InstanceWithFindings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationS3LogsConfigurationResult
 */
const de_OrganizationS3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationS3LogsConfigurationResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

/**
 * deserializeAws_restJson1OrganizationScanEc2InstanceWithFindingsResult
 */
const de_OrganizationScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): OrganizationScanEc2InstanceWithFindingsResult => {
  return {
    EbsVolumes: output.ebsVolumes != null ? de_OrganizationEbsVolumesResult(output.ebsVolumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Owner
 */
const de_Owner = (output: any, context: __SerdeContext): Owner => {
  return {
    Id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1PermissionConfiguration
 */
const de_PermissionConfiguration = (output: any, context: __SerdeContext): PermissionConfiguration => {
  return {
    AccountLevelPermissions:
      output.accountLevelPermissions != null
        ? de_AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    BucketLevelPermissions:
      output.bucketLevelPermissions != null
        ? de_BucketLevelPermissions(output.bucketLevelPermissions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PortProbeAction
 */
const de_PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    PortProbeDetails:
      output.portProbeDetails != null ? de_PortProbeDetails(output.portProbeDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PortProbeDetail
 */
const de_PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return {
    LocalIpDetails: output.localIpDetails != null ? de_LocalIpDetails(output.localIpDetails, context) : undefined,
    LocalPortDetails:
      output.localPortDetails != null ? de_LocalPortDetails(output.localPortDetails, context) : undefined,
    RemoteIpDetails: output.remoteIpDetails != null ? de_RemoteIpDetails(output.remoteIpDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PortProbeDetails
 */
const de_PortProbeDetails = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortProbeDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrivateIpAddressDetails
 */
const de_PrivateIpAddressDetails = (output: any, context: __SerdeContext): PrivateIpAddressDetails => {
  return {
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
  } as any;
};

/**
 * deserializeAws_restJson1PrivateIpAddresses
 */
const de_PrivateIpAddresses = (output: any, context: __SerdeContext): PrivateIpAddressDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PrivateIpAddressDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProcessDetails
 */
const de_ProcessDetails = (output: any, context: __SerdeContext): ProcessDetails => {
  return {
    Euid: __expectInt32(output.euid),
    ExecutablePath: __expectString(output.executablePath),
    ExecutableSha256: __expectString(output.executableSha256),
    Lineage: output.lineage != null ? de_Lineage(output.lineage, context) : undefined,
    Name: __expectString(output.name),
    NamespacePid: __expectInt32(output.namespacePid),
    ParentUuid: __expectString(output.parentUuid),
    Pid: __expectInt32(output.pid),
    Pwd: __expectString(output.pwd),
    StartTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    User: __expectString(output.user),
    UserId: __expectInt32(output.userId),
    Uuid: __expectString(output.uuid),
  } as any;
};

/**
 * deserializeAws_restJson1ProductCode
 */
const de_ProductCode = (output: any, context: __SerdeContext): ProductCode => {
  return {
    Code: __expectString(output.productCodeId),
    ProductType: __expectString(output.productCodeType),
  } as any;
};

/**
 * deserializeAws_restJson1ProductCodes
 */
const de_ProductCodes = (output: any, context: __SerdeContext): ProductCode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductCode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PublicAccess
 */
const de_PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return {
    EffectivePermission: __expectString(output.effectivePermission),
    PermissionConfiguration:
      output.permissionConfiguration != null
        ? de_PermissionConfiguration(output.permissionConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RdsDbInstanceDetails
 */
const de_RdsDbInstanceDetails = (output: any, context: __SerdeContext): RdsDbInstanceDetails => {
  return {
    DbClusterIdentifier: __expectString(output.dbClusterIdentifier),
    DbInstanceArn: __expectString(output.dbInstanceArn),
    DbInstanceIdentifier: __expectString(output.dbInstanceIdentifier),
    Engine: __expectString(output.engine),
    EngineVersion: __expectString(output.engineVersion),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RdsDbUserDetails
 */
const de_RdsDbUserDetails = (output: any, context: __SerdeContext): RdsDbUserDetails => {
  return {
    Application: __expectString(output.application),
    AuthMethod: __expectString(output.authMethod),
    Database: __expectString(output.database),
    Ssl: __expectString(output.ssl),
    User: __expectString(output.user),
  } as any;
};

/**
 * deserializeAws_restJson1RdsLoginAttemptAction
 */
const de_RdsLoginAttemptAction = (output: any, context: __SerdeContext): RdsLoginAttemptAction => {
  return {
    LoginAttributes: output.LoginAttributes != null ? de_LoginAttributes(output.LoginAttributes, context) : undefined,
    RemoteIpDetails: output.remoteIpDetails != null ? de_RemoteIpDetails(output.remoteIpDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RemoteAccountDetails
 */
const de_RemoteAccountDetails = (output: any, context: __SerdeContext): RemoteAccountDetails => {
  return {
    AccountId: __expectString(output.accountId),
    Affiliated: __expectBoolean(output.affiliated),
  } as any;
};

/**
 * deserializeAws_restJson1RemoteIpDetails
 */
const de_RemoteIpDetails = (output: any, context: __SerdeContext): RemoteIpDetails => {
  return {
    City: output.city != null ? de_City(output.city, context) : undefined,
    Country: output.country != null ? de_Country(output.country, context) : undefined,
    GeoLocation: output.geoLocation != null ? de_GeoLocation(output.geoLocation, context) : undefined,
    IpAddressV4: __expectString(output.ipAddressV4),
    Organization: output.organization != null ? de_Organization(output.organization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RemotePortDetails
 */
const de_RemotePortDetails = (output: any, context: __SerdeContext): RemotePortDetails => {
  return {
    Port: __expectInt32(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    AccessKeyDetails:
      output.accessKeyDetails != null ? de_AccessKeyDetails(output.accessKeyDetails, context) : undefined,
    ContainerDetails: output.containerDetails != null ? de_Container(output.containerDetails, context) : undefined,
    EbsVolumeDetails:
      output.ebsVolumeDetails != null ? de_EbsVolumeDetails(output.ebsVolumeDetails, context) : undefined,
    EcsClusterDetails:
      output.ecsClusterDetails != null ? de_EcsClusterDetails(output.ecsClusterDetails, context) : undefined,
    EksClusterDetails:
      output.eksClusterDetails != null ? de_EksClusterDetails(output.eksClusterDetails, context) : undefined,
    InstanceDetails: output.instanceDetails != null ? de_InstanceDetails(output.instanceDetails, context) : undefined,
    KubernetesDetails:
      output.kubernetesDetails != null ? de_KubernetesDetails(output.kubernetesDetails, context) : undefined,
    RdsDbInstanceDetails:
      output.rdsDbInstanceDetails != null ? de_RdsDbInstanceDetails(output.rdsDbInstanceDetails, context) : undefined,
    RdsDbUserDetails:
      output.rdsDbUserDetails != null ? de_RdsDbUserDetails(output.rdsDbUserDetails, context) : undefined,
    ResourceType: __expectString(output.resourceType),
    S3BucketDetails: output.s3BucketDetails != null ? de_S3BucketDetails(output.s3BucketDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    InstanceArn: __expectString(output.instanceArn),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeContext
 */
const de_RuntimeContext = (output: any, context: __SerdeContext): RuntimeContext => {
  return {
    AddressFamily: __expectString(output.addressFamily),
    FileSystemType: __expectString(output.fileSystemType),
    Flags: output.flags != null ? de_FlagsList(output.flags, context) : undefined,
    IanaProtocolNumber: __expectInt32(output.ianaProtocolNumber),
    LdPreloadValue: __expectString(output.ldPreloadValue),
    LibraryPath: __expectString(output.libraryPath),
    MemoryRegions: output.memoryRegions != null ? de_MemoryRegionsList(output.memoryRegions, context) : undefined,
    ModifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt))) : undefined,
    ModifyingProcess: output.modifyingProcess != null ? de_ProcessDetails(output.modifyingProcess, context) : undefined,
    ModuleFilePath: __expectString(output.moduleFilePath),
    ModuleName: __expectString(output.moduleName),
    ModuleSha256: __expectString(output.moduleSha256),
    MountSource: __expectString(output.mountSource),
    MountTarget: __expectString(output.mountTarget),
    ReleaseAgentPath: __expectString(output.releaseAgentPath),
    RuncBinaryPath: __expectString(output.runcBinaryPath),
    ScriptPath: __expectString(output.scriptPath),
    ShellHistoryFilePath: __expectString(output.shellHistoryFilePath),
    SocketPath: __expectString(output.socketPath),
    TargetProcess: output.targetProcess != null ? de_ProcessDetails(output.targetProcess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeDetails
 */
const de_RuntimeDetails = (output: any, context: __SerdeContext): RuntimeDetails => {
  return {
    Context: output.context != null ? de_RuntimeContext(output.context, context) : undefined,
    Process: output.process != null ? de_ProcessDetails(output.process, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketDetail
 */
const de_S3BucketDetail = (output: any, context: __SerdeContext): S3BucketDetail => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    DefaultServerSideEncryption:
      output.defaultServerSideEncryption != null
        ? de_DefaultServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    Name: __expectString(output.name),
    Owner: output.owner != null ? de_Owner(output.owner, context) : undefined,
    PublicAccess: output.publicAccess != null ? de_PublicAccess(output.publicAccess, context) : undefined,
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    Type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketDetails
 */
const de_S3BucketDetails = (output: any, context: __SerdeContext): S3BucketDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3BucketDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3LogsConfigurationResult
 */
const de_S3LogsConfigurationResult = (output: any, context: __SerdeContext): S3LogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1Scan
 */
const de_Scan = (output: any, context: __SerdeContext): Scan => {
  return {
    AccountId: __expectString(output.accountId),
    AdminDetectorId: __expectString(output.adminDetectorId),
    AttachedVolumes: output.attachedVolumes != null ? de_VolumeDetails(output.attachedVolumes, context) : undefined,
    DetectorId: __expectString(output.detectorId),
    FailureReason: __expectString(output.failureReason),
    FileCount: __expectLong(output.fileCount),
    ResourceDetails: output.resourceDetails != null ? de_ResourceDetails(output.resourceDetails, context) : undefined,
    ScanEndTime:
      output.scanEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanEndTime)))
        : undefined,
    ScanId: __expectString(output.scanId),
    ScanResultDetails:
      output.scanResultDetails != null ? de_ScanResultDetails(output.scanResultDetails, context) : undefined,
    ScanStartTime:
      output.scanStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanStartTime)))
        : undefined,
    ScanStatus: __expectString(output.scanStatus),
    TotalBytes: __expectLong(output.totalBytes),
    TriggerDetails: output.triggerDetails != null ? de_TriggerDetails(output.triggerDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScanCondition
 */
const de_ScanCondition = (output: any, context: __SerdeContext): ScanCondition => {
  return {
    MapEquals: output.mapEquals != null ? de_MapEquals(output.mapEquals, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScanConditionPair
 */
const de_ScanConditionPair = (output: any, context: __SerdeContext): ScanConditionPair => {
  return {
    Key: __expectString(output.key),
    Value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ScanCriterion
 */
const de_ScanCriterion = (output: any, context: __SerdeContext): Record<string, ScanCondition> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ScanCondition>, [key, value]: [ScanCriterionKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ScanCondition(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ScanDetections
 */
const de_ScanDetections = (output: any, context: __SerdeContext): ScanDetections => {
  return {
    HighestSeverityThreatDetails:
      output.highestSeverityThreatDetails != null
        ? de_HighestSeverityThreatDetails(output.highestSeverityThreatDetails, context)
        : undefined,
    ScannedItemCount:
      output.scannedItemCount != null ? de_ScannedItemCount(output.scannedItemCount, context) : undefined,
    ThreatDetectedByName:
      output.threatDetectedByName != null ? de_ThreatDetectedByName(output.threatDetectedByName, context) : undefined,
    ThreatsDetectedItemCount:
      output.threatsDetectedItemCount != null
        ? de_ThreatsDetectedItemCount(output.threatsDetectedItemCount, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScanEc2InstanceWithFindingsResult
 */
const de_ScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): ScanEc2InstanceWithFindingsResult => {
  return {
    EbsVolumes: output.ebsVolumes != null ? de_EbsVolumesResult(output.ebsVolumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScanFilePath
 */
const de_ScanFilePath = (output: any, context: __SerdeContext): ScanFilePath => {
  return {
    FileName: __expectString(output.fileName),
    FilePath: __expectString(output.filePath),
    Hash: __expectString(output.hash),
    VolumeArn: __expectString(output.volumeArn),
  } as any;
};

/**
 * deserializeAws_restJson1ScannedItemCount
 */
const de_ScannedItemCount = (output: any, context: __SerdeContext): ScannedItemCount => {
  return {
    Files: __expectInt32(output.files),
    TotalGb: __expectInt32(output.totalGb),
    Volumes: __expectInt32(output.volumes),
  } as any;
};

/**
 * deserializeAws_restJson1ScanResourceCriteria
 */
const de_ScanResourceCriteria = (output: any, context: __SerdeContext): ScanResourceCriteria => {
  return {
    Exclude: output.exclude != null ? de_ScanCriterion(output.exclude, context) : undefined,
    Include: output.include != null ? de_ScanCriterion(output.include, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScanResultDetails
 */
const de_ScanResultDetails = (output: any, context: __SerdeContext): ScanResultDetails => {
  return {
    ScanResult: __expectString(output.scanResult),
  } as any;
};

/**
 * deserializeAws_restJson1Scans
 */
const de_Scans = (output: any, context: __SerdeContext): Scan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Scan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScanThreatName
 */
const de_ScanThreatName = (output: any, context: __SerdeContext): ScanThreatName => {
  return {
    FilePaths: output.filePaths != null ? de_FilePaths(output.filePaths, context) : undefined,
    ItemCount: __expectInt32(output.itemCount),
    Name: __expectString(output.name),
    Severity: __expectString(output.severity),
  } as any;
};

/**
 * deserializeAws_restJson1ScanThreatNames
 */
const de_ScanThreatNames = (output: any, context: __SerdeContext): ScanThreatName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScanThreatName(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityContext
 */
const de_SecurityContext = (output: any, context: __SerdeContext): SecurityContext => {
  return {
    Privileged: __expectBoolean(output.privileged),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroup
 */
const de_SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return {
    GroupId: __expectString(output.groupId),
    GroupName: __expectString(output.groupName),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    Action: output.action != null ? de_Action(output.action, context) : undefined,
    AdditionalInfo:
      output.additionalInfo != null ? de_ServiceAdditionalInfo(output.additionalInfo, context) : undefined,
    Archived: __expectBoolean(output.archived),
    Count: __expectInt32(output.count),
    DetectorId: __expectString(output.detectorId),
    EbsVolumeScanDetails:
      output.ebsVolumeScanDetails != null ? de_EbsVolumeScanDetails(output.ebsVolumeScanDetails, context) : undefined,
    EventFirstSeen: __expectString(output.eventFirstSeen),
    EventLastSeen: __expectString(output.eventLastSeen),
    Evidence: output.evidence != null ? de_Evidence(output.evidence, context) : undefined,
    FeatureName: __expectString(output.featureName),
    ResourceRole: __expectString(output.resourceRole),
    RuntimeDetails: output.runtimeDetails != null ? de_RuntimeDetails(output.runtimeDetails, context) : undefined,
    ServiceName: __expectString(output.serviceName),
    UserFeedback: __expectString(output.userFeedback),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceAdditionalInfo
 */
const de_ServiceAdditionalInfo = (output: any, context: __SerdeContext): ServiceAdditionalInfo => {
  return {
    Type: __expectString(output.type),
    Value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SourceIps
 */
const de_SourceIps = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Sources
 */
const de_Sources = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.key),
    Value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreatDetectedByName
 */
const de_ThreatDetectedByName = (output: any, context: __SerdeContext): ThreatDetectedByName => {
  return {
    ItemCount: __expectInt32(output.itemCount),
    Shortened: __expectBoolean(output.shortened),
    ThreatNames: output.threatNames != null ? de_ScanThreatNames(output.threatNames, context) : undefined,
    UniqueThreatNameCount: __expectInt32(output.uniqueThreatNameCount),
  } as any;
};

/**
 * deserializeAws_restJson1ThreatIntelligenceDetail
 */
const de_ThreatIntelligenceDetail = (output: any, context: __SerdeContext): ThreatIntelligenceDetail => {
  return {
    ThreatListName: __expectString(output.threatListName),
    ThreatNames: output.threatNames != null ? de_ThreatNames(output.threatNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ThreatIntelligenceDetails
 */
const de_ThreatIntelligenceDetails = (output: any, context: __SerdeContext): ThreatIntelligenceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThreatIntelligenceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreatIntelSetIds
 */
const de_ThreatIntelSetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreatNames
 */
const de_ThreatNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreatsDetectedItemCount
 */
const de_ThreatsDetectedItemCount = (output: any, context: __SerdeContext): ThreatsDetectedItemCount => {
  return {
    Files: __expectInt32(output.files),
  } as any;
};

/**
 * deserializeAws_restJson1Total
 */
const de_Total = (output: any, context: __SerdeContext): Total => {
  return {
    Amount: __expectString(output.amount),
    Unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1TriggerDetails
 */
const de_TriggerDetails = (output: any, context: __SerdeContext): TriggerDetails => {
  return {
    Description: __expectString(output.description),
    GuardDutyFindingId: __expectString(output.guardDutyFindingId),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccount
 */
const de_UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return {
    AccountId: __expectString(output.accountId),
    Result: __expectString(output.result),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccounts
 */
const de_UnprocessedAccounts = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnprocessedDataSourcesResult
 */
const de_UnprocessedDataSourcesResult = (output: any, context: __SerdeContext): UnprocessedDataSourcesResult => {
  return {
    MalwareProtection:
      output.malwareProtection != null
        ? de_MalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageAccountResult
 */
const de_UsageAccountResult = (output: any, context: __SerdeContext): UsageAccountResult => {
  return {
    AccountId: __expectString(output.accountId),
    Total: output.total != null ? de_Total(output.total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageAccountResultList
 */
const de_UsageAccountResultList = (output: any, context: __SerdeContext): UsageAccountResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageAccountResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageDataSourceResult
 */
const de_UsageDataSourceResult = (output: any, context: __SerdeContext): UsageDataSourceResult => {
  return {
    DataSource: __expectString(output.dataSource),
    Total: output.total != null ? de_Total(output.total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageDataSourceResultList
 */
const de_UsageDataSourceResultList = (output: any, context: __SerdeContext): UsageDataSourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageDataSourceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageFeatureResult
 */
const de_UsageFeatureResult = (output: any, context: __SerdeContext): UsageFeatureResult => {
  return {
    Feature: __expectString(output.feature),
    Total: output.total != null ? de_Total(output.total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageFeatureResultList
 */
const de_UsageFeatureResultList = (output: any, context: __SerdeContext): UsageFeatureResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageFeatureResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageResourceResult
 */
const de_UsageResourceResult = (output: any, context: __SerdeContext): UsageResourceResult => {
  return {
    Resource: __expectString(output.resource),
    Total: output.total != null ? de_Total(output.total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageResourceResultList
 */
const de_UsageResourceResultList = (output: any, context: __SerdeContext): UsageResourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageResourceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageStatistics
 */
const de_UsageStatistics = (output: any, context: __SerdeContext): UsageStatistics => {
  return {
    SumByAccount: output.sumByAccount != null ? de_UsageAccountResultList(output.sumByAccount, context) : undefined,
    SumByDataSource:
      output.sumByDataSource != null ? de_UsageDataSourceResultList(output.sumByDataSource, context) : undefined,
    SumByFeature: output.sumByFeature != null ? de_UsageFeatureResultList(output.sumByFeature, context) : undefined,
    SumByResource: output.sumByResource != null ? de_UsageResourceResultList(output.sumByResource, context) : undefined,
    TopResources: output.topResources != null ? de_UsageResourceResultList(output.topResources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    HostPath: output.hostPath != null ? de_HostPath(output.hostPath, context) : undefined,
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1VolumeDetail
 */
const de_VolumeDetail = (output: any, context: __SerdeContext): VolumeDetail => {
  return {
    DeviceName: __expectString(output.deviceName),
    EncryptionType: __expectString(output.encryptionType),
    KmsKeyArn: __expectString(output.kmsKeyArn),
    SnapshotArn: __expectString(output.snapshotArn),
    VolumeArn: __expectString(output.volumeArn),
    VolumeSizeInGB: __expectInt32(output.volumeSizeInGB),
    VolumeType: __expectString(output.volumeType),
  } as any;
};

/**
 * deserializeAws_restJson1VolumeDetails
 */
const de_VolumeDetails = (output: any, context: __SerdeContext): VolumeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VolumeMount
 */
const de_VolumeMount = (output: any, context: __SerdeContext): VolumeMount => {
  return {
    MountPath: __expectString(output.mountPath),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1VolumeMounts
 */
const de_VolumeMounts = (output: any, context: __SerdeContext): VolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeMount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Volumes
 */
const de_Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Volume(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
