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
  DataSource,
  DataSourceConfigurations,
  DataSourceConfigurationsResult,
  DataSourceFreeTrial,
  DataSourcesFreeTrial,
  DefaultServerSideEncryption,
  Destination,
  DestinationProperties,
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
  LocalIpDetails,
  LocalPortDetails,
  MalwareProtectionConfiguration,
  MalwareProtectionConfigurationResult,
  MalwareProtectionDataSourceFreeTrial,
  Master,
  Member,
  MemberDataSourceConfiguration,
  NetworkConnectionAction,
  NetworkInterface,
  Organization,
  OrganizationDataSourceConfigurations,
  OrganizationDataSourceConfigurationsResult,
  OrganizationEbsVolumes,
  OrganizationEbsVolumesResult,
  OrganizationKubernetesAuditLogsConfiguration,
  OrganizationKubernetesAuditLogsConfigurationResult,
  OrganizationKubernetesConfiguration,
  OrganizationKubernetesConfigurationResult,
  OrganizationMalwareProtectionConfiguration,
  OrganizationMalwareProtectionConfigurationResult,
  OrganizationS3LogsConfiguration,
  OrganizationS3LogsConfigurationResult,
  OrganizationScanEc2InstanceWithFindings,
  OrganizationScanEc2InstanceWithFindingsResult,
  Owner,
  PermissionConfiguration,
  PortProbeAction,
  PortProbeDetail,
  PrivateIpAddressDetails,
  ProductCode,
  PublicAccess,
  RemoteAccountDetails,
  RemoteIpDetails,
  RemotePortDetails,
  Resource,
  ResourceDetails,
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
  UsageResourceResult,
  UsageStatistics,
  Volume,
  VolumeDetail,
  VolumeMount,
} from "../models/models_0";

export const serializeAws_restJson1AcceptAdministratorInvitationCommand = async (
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

export const serializeAws_restJson1AcceptInvitationCommand = async (
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

export const serializeAws_restJson1ArchiveFindingsCommand = async (
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
    ...(input.FindingIds != null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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

export const serializeAws_restJson1CreateDetectorCommand = async (
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
    ...(input.DataSources != null && {
      dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
    }),
    ...(input.Enable != null && { enable: input.Enable }),
    ...(input.FindingPublishingFrequency != null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
    ...(input.Tags != null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateFilterCommand = async (
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
    ...(input.FindingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Rank != null && { rank: input.Rank }),
    ...(input.Tags != null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateIPSetCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails != null && {
      accountDetails: serializeAws_restJson1AccountDetails(input.AccountDetails, context),
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

export const serializeAws_restJson1CreatePublishingDestinationCommand = async (
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
      destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
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

export const serializeAws_restJson1CreateSampleFindingsCommand = async (
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
    ...(input.FindingTypes != null && {
      findingTypes: serializeAws_restJson1FindingTypes(input.FindingTypes, context),
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

export const serializeAws_restJson1CreateThreatIntelSetCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1DeleteDetectorCommand = async (
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

export const serializeAws_restJson1DeleteFilterCommand = async (
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

export const serializeAws_restJson1DeleteInvitationsCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1DeleteIPSetCommand = async (
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

export const serializeAws_restJson1DeleteMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1DeletePublishingDestinationCommand = async (
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

export const serializeAws_restJson1DeleteThreatIntelSetCommand = async (
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

export const serializeAws_restJson1DescribeMalwareScansCommand = async (
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
    ...(input.FilterCriteria != null && {
      filterCriteria: serializeAws_restJson1FilterCriteria(input.FilterCriteria, context),
    }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.SortCriteria != null && {
      sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context),
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

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/admin";
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

export const serializeAws_restJson1DescribePublishingDestinationCommand = async (
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

export const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
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

export const serializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
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

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
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

export const serializeAws_restJson1DisassociateMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1GetAdministratorAccountCommand = async (
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

export const serializeAws_restJson1GetDetectorCommand = async (
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

export const serializeAws_restJson1GetFilterCommand = async (
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

export const serializeAws_restJson1GetFindingsCommand = async (
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
    ...(input.FindingIds != null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
    ...(input.SortCriteria != null && {
      sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context),
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

export const serializeAws_restJson1GetFindingsStatisticsCommand = async (
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
    ...(input.FindingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
    }),
    ...(input.FindingStatisticTypes != null && {
      findingStatisticTypes: serializeAws_restJson1FindingStatisticTypes(input.FindingStatisticTypes, context),
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

export const serializeAws_restJson1GetInvitationsCountCommand = async (
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

export const serializeAws_restJson1GetIPSetCommand = async (
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

export const serializeAws_restJson1GetMalwareScanSettingsCommand = async (
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

export const serializeAws_restJson1GetMasterAccountCommand = async (
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

export const serializeAws_restJson1GetMemberDetectorsCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1GetMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1GetRemainingFreeTrialDaysCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1GetThreatIntelSetCommand = async (
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

export const serializeAws_restJson1GetUsageStatisticsCommand = async (
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
    ...(input.UsageCriteria != null && {
      usageCriteria: serializeAws_restJson1UsageCriteria(input.UsageCriteria, context),
    }),
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

export const serializeAws_restJson1InviteMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1ListDetectorsCommand = async (
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

export const serializeAws_restJson1ListFiltersCommand = async (
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

export const serializeAws_restJson1ListFindingsCommand = async (
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
    ...(input.FindingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
    }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.SortCriteria != null && {
      sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context),
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

export const serializeAws_restJson1ListInvitationsCommand = async (
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

export const serializeAws_restJson1ListIPSetsCommand = async (
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

export const serializeAws_restJson1ListMembersCommand = async (
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

export const serializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
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

export const serializeAws_restJson1ListPublishingDestinationsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListThreatIntelSetsCommand = async (
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

export const serializeAws_restJson1StartMonitoringMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1StopMonitoringMembersCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UnarchiveFindingsCommand = async (
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
    ...(input.FindingIds != null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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

export const serializeAws_restJson1UpdateDetectorCommand = async (
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
    ...(input.DataSources != null && {
      dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
    }),
    ...(input.Enable != null && { enable: input.Enable }),
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

export const serializeAws_restJson1UpdateFilterCommand = async (
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
    ...(input.FindingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
    }),
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

export const serializeAws_restJson1UpdateFindingsFeedbackCommand = async (
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
    ...(input.FindingIds != null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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

export const serializeAws_restJson1UpdateIPSetCommand = async (
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

export const serializeAws_restJson1UpdateMalwareScanSettingsCommand = async (
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
      scanResourceCriteria: serializeAws_restJson1ScanResourceCriteria(input.ScanResourceCriteria, context),
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

export const serializeAws_restJson1UpdateMemberDetectorsCommand = async (
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
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
    ...(input.DataSources != null && {
      dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
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

export const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
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
    ...(input.DataSources != null && {
      dataSources: serializeAws_restJson1OrganizationDataSourceConfigurations(input.DataSources, context),
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

export const serializeAws_restJson1UpdatePublishingDestinationCommand = async (
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
      destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
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

export const serializeAws_restJson1UpdateThreatIntelSetCommand = async (
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

export const deserializeAws_restJson1AcceptAdministratorInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptAdministratorInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AcceptAdministratorInvitationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AcceptInvitationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ArchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ArchiveFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ArchiveFindingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorId != null) {
    contents.DetectorId = __expectString(data.detectorId);
  }
  if (data.unprocessedDataSources != null) {
    contents.UnprocessedDataSources = deserializeAws_restJson1UnprocessedDataSourcesResult(
      data.unprocessedDataSources,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateDetectorCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFilterCommandError(output, context);
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

const deserializeAws_restJson1CreateFilterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIPSetCommandError(output, context);
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

const deserializeAws_restJson1CreateIPSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePublishingDestinationCommandError(output, context);
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

const deserializeAws_restJson1CreatePublishingDestinationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSampleFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSampleFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateSampleFindingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThreatIntelSetCommandError(output, context);
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

const deserializeAws_restJson1CreateThreatIntelSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeclineInvitationsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDetectorCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFilterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteInvitationsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIPSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePublishingDestinationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteThreatIntelSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeMalwareScansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMalwareScansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMalwareScansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.scans != null) {
    contents.Scans = deserializeAws_restJson1Scans(data.scans, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeMalwareScansCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.autoEnable != null) {
    contents.AutoEnable = __expectBoolean(data.autoEnable);
  }
  if (data.dataSources != null) {
    contents.DataSources = deserializeAws_restJson1OrganizationDataSourceConfigurationsResult(
      data.dataSources,
      context
    );
  }
  if (data.memberAccountLimitReached != null) {
    contents.MemberAccountLimitReached = __expectBoolean(data.memberAccountLimitReached);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinationId != null) {
    contents.DestinationId = __expectString(data.destinationId);
  }
  if (data.destinationProperties != null) {
    contents.DestinationProperties = deserializeAws_restJson1DestinationProperties(data.destinationProperties, context);
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

const deserializeAws_restJson1DescribePublishingDestinationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.administrator != null) {
    contents.Administrator = deserializeAws_restJson1Administrator(data.administrator, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAdministratorAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dataSources != null) {
    contents.DataSources = deserializeAws_restJson1DataSourceConfigurationsResult(data.dataSources, context);
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
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.UpdatedAt = __expectString(data.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1GetDetectorCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFilterCommandError(output, context);
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
    contents.FindingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.rank != null) {
    contents.Rank = __expectInt32(data.rank);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFilterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.Findings = deserializeAws_restJson1Findings(data.findings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFindingsStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingStatistics != null) {
    contents.FindingStatistics = deserializeAws_restJson1FindingStatistics(data.findingStatistics, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
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

const deserializeAws_restJson1GetInvitationsCountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIPSetCommandError(output, context);
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
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetIPSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMalwareScanSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMalwareScanSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMalwareScanSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ebsSnapshotPreservation != null) {
    contents.EbsSnapshotPreservation = __expectString(data.ebsSnapshotPreservation);
  }
  if (data.scanResourceCriteria != null) {
    contents.ScanResourceCriteria = deserializeAws_restJson1ScanResourceCriteria(data.scanResourceCriteria, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMalwareScanSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.master != null) {
    contents.Master = deserializeAws_restJson1Master(data.master, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMasterAccountCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.MemberDataSourceConfigurations = deserializeAws_restJson1MemberDataSourceConfigurations(
      data.members,
      context
    );
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMemberDetectorsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.Members = deserializeAws_restJson1Members(data.members, context);
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRemainingFreeTrialDaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemainingFreeTrialDaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRemainingFreeTrialDaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.Accounts = deserializeAws_restJson1AccountFreeTrialInfos(data.accounts, context);
  }
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRemainingFreeTrialDaysCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetThreatIntelSetCommandError(output, context);
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
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetThreatIntelSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUsageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.usageStatistics != null) {
    contents.UsageStatistics = deserializeAws_restJson1UsageStatistics(data.usageStatistics, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUsageStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InviteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1InviteMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorIds != null) {
    contents.DetectorIds = deserializeAws_restJson1DetectorIds(data.detectorIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDetectorsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFiltersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.filterNames != null) {
    contents.FilterNames = deserializeAws_restJson1FilterNames(data.filterNames, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFiltersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingIds != null) {
    contents.FindingIds = deserializeAws_restJson1FindingIds(data.findingIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFindingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.invitations != null) {
    contents.Invitations = deserializeAws_restJson1Invitations(data.invitations, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIPSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ipSetIds != null) {
    contents.IpSetIds = deserializeAws_restJson1IpSetIds(data.ipSetIds, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIPSetsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.Members = deserializeAws_restJson1Members(data.members, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccounts != null) {
    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.adminAccounts, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPublishingDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPublishingDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destinations != null) {
    contents.Destinations = deserializeAws_restJson1Destinations(data.destinations, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPublishingDestinationsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListThreatIntelSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThreatIntelSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.threatIntelSetIds != null) {
    contents.ThreatIntelSetIds = deserializeAws_restJson1ThreatIntelSetIds(data.threatIntelSetIds, context);
  }
  return contents;
};

const deserializeAws_restJson1ListThreatIntelSetsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMonitoringMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1StartMonitoringMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopMonitoringMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1StopMonitoringMembersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UnarchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnarchiveFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UnarchiveFindingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDetectorCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFilterCommandError(output, context);
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

const deserializeAws_restJson1UpdateFilterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFindingsFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFindingsFeedbackCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIPSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateIPSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMalwareScanSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMalwareScanSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMalwareScanSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMalwareScanSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateMemberDetectorsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePublishingDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdatePublishingDestinationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThreatIntelSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateThreatIntelSetCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
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

const serializeAws_restJson1AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { accountId: input.AccountId }),
    ...(input.Email != null && { email: input.Email }),
  };
};

const serializeAws_restJson1AccountDetails = (input: AccountDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AccountDetail(entry, context);
    });
};

const serializeAws_restJson1AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Eq != null && { eq: serializeAws_restJson1Eq(input.Eq, context) }),
    ...(input.Equals != null && { equals: serializeAws_restJson1Equals(input.Equals, context) }),
    ...(input.GreaterThan != null && { greaterThan: input.GreaterThan }),
    ...(input.GreaterThanOrEqual != null && { greaterThanOrEqual: input.GreaterThanOrEqual }),
    ...(input.Gt != null && { gt: input.Gt }),
    ...(input.Gte != null && { gte: input.Gte }),
    ...(input.LessThan != null && { lessThan: input.LessThan }),
    ...(input.LessThanOrEqual != null && { lessThanOrEqual: input.LessThanOrEqual }),
    ...(input.Lt != null && { lt: input.Lt }),
    ...(input.Lte != null && { lte: input.Lte }),
    ...(input.Neq != null && { neq: serializeAws_restJson1Neq(input.Neq, context) }),
    ...(input.NotEquals != null && { notEquals: serializeAws_restJson1NotEquals(input.NotEquals, context) }),
  };
};

const serializeAws_restJson1Criterion = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Condition(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1DataSourceConfigurations = (
  input: DataSourceConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.Kubernetes != null && {
      kubernetes: serializeAws_restJson1KubernetesConfiguration(input.Kubernetes, context),
    }),
    ...(input.MalwareProtection != null && {
      malwareProtection: serializeAws_restJson1MalwareProtectionConfiguration(input.MalwareProtection, context),
    }),
    ...(input.S3Logs != null && { s3Logs: serializeAws_restJson1S3LogsConfiguration(input.S3Logs, context) }),
  };
};

const serializeAws_restJson1DataSourceList = (input: (DataSource | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DestinationProperties = (input: DestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn != null && { destinationArn: input.DestinationArn }),
    ...(input.KmsKeyArn != null && { kmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_restJson1Eq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Equals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.EqualsValue != null && { equalsValue: input.EqualsValue }),
    ...(input.GreaterThan != null && { greaterThan: input.GreaterThan }),
    ...(input.LessThan != null && { lessThan: input.LessThan }),
  };
};

const serializeAws_restJson1FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.FilterCriterion != null && {
      filterCriterion: serializeAws_restJson1FilterCriterionList(input.FilterCriterion, context),
    }),
  };
};

const serializeAws_restJson1FilterCriterion = (input: FilterCriterion, context: __SerdeContext): any => {
  return {
    ...(input.CriterionKey != null && { criterionKey: input.CriterionKey }),
    ...(input.FilterCondition != null && {
      filterCondition: serializeAws_restJson1FilterCondition(input.FilterCondition, context),
    }),
  };
};

const serializeAws_restJson1FilterCriterionList = (input: FilterCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FilterCriterion(entry, context);
    });
};

const serializeAws_restJson1FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Criterion != null && { criterion: serializeAws_restJson1Criterion(input.Criterion, context) }),
  };
};

const serializeAws_restJson1FindingIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FindingStatisticTypes = (
  input: (FindingStatisticType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FindingTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1KubernetesAuditLogsConfiguration = (
  input: KubernetesAuditLogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enable != null && { enable: input.Enable }),
  };
};

const serializeAws_restJson1KubernetesConfiguration = (
  input: KubernetesConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs != null && {
      auditLogs: serializeAws_restJson1KubernetesAuditLogsConfiguration(input.AuditLogs, context),
    }),
  };
};

const serializeAws_restJson1MalwareProtectionConfiguration = (
  input: MalwareProtectionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScanEc2InstanceWithFindings != null && {
      scanEc2InstanceWithFindings: serializeAws_restJson1ScanEc2InstanceWithFindings(
        input.ScanEc2InstanceWithFindings,
        context
      ),
    }),
  };
};

const serializeAws_restJson1MapEquals = (input: ScanConditionPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ScanConditionPair(entry, context);
    });
};

const serializeAws_restJson1Neq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NotEquals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OrganizationDataSourceConfigurations = (
  input: OrganizationDataSourceConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.Kubernetes != null && {
      kubernetes: serializeAws_restJson1OrganizationKubernetesConfiguration(input.Kubernetes, context),
    }),
    ...(input.MalwareProtection != null && {
      malwareProtection: serializeAws_restJson1OrganizationMalwareProtectionConfiguration(
        input.MalwareProtection,
        context
      ),
    }),
    ...(input.S3Logs != null && {
      s3Logs: serializeAws_restJson1OrganizationS3LogsConfiguration(input.S3Logs, context),
    }),
  };
};

const serializeAws_restJson1OrganizationEbsVolumes = (input: OrganizationEbsVolumes, context: __SerdeContext): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

const serializeAws_restJson1OrganizationKubernetesAuditLogsConfiguration = (
  input: OrganizationKubernetesAuditLogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

const serializeAws_restJson1OrganizationKubernetesConfiguration = (
  input: OrganizationKubernetesConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs != null && {
      auditLogs: serializeAws_restJson1OrganizationKubernetesAuditLogsConfiguration(input.AuditLogs, context),
    }),
  };
};

const serializeAws_restJson1OrganizationMalwareProtectionConfiguration = (
  input: OrganizationMalwareProtectionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScanEc2InstanceWithFindings != null && {
      scanEc2InstanceWithFindings: serializeAws_restJson1OrganizationScanEc2InstanceWithFindings(
        input.ScanEc2InstanceWithFindings,
        context
      ),
    }),
  };
};

const serializeAws_restJson1OrganizationS3LogsConfiguration = (
  input: OrganizationS3LogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoEnable != null && { autoEnable: input.AutoEnable }),
  };
};

const serializeAws_restJson1OrganizationScanEc2InstanceWithFindings = (
  input: OrganizationScanEc2InstanceWithFindings,
  context: __SerdeContext
): any => {
  return {
    ...(input.EbsVolumes != null && {
      ebsVolumes: serializeAws_restJson1OrganizationEbsVolumes(input.EbsVolumes, context),
    }),
  };
};

const serializeAws_restJson1ResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1S3LogsConfiguration = (input: S3LogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enable != null && { enable: input.Enable }),
  };
};

const serializeAws_restJson1ScanCondition = (input: ScanCondition, context: __SerdeContext): any => {
  return {
    ...(input.MapEquals != null && { mapEquals: serializeAws_restJson1MapEquals(input.MapEquals, context) }),
  };
};

const serializeAws_restJson1ScanConditionPair = (input: ScanConditionPair, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { key: input.Key }),
    ...(input.Value != null && { value: input.Value }),
  };
};

const serializeAws_restJson1ScanCriterion = (input: Record<string, ScanCondition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ScanCriterionKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ScanCondition(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ScanEc2InstanceWithFindings = (
  input: ScanEc2InstanceWithFindings,
  context: __SerdeContext
): any => {
  return {
    ...(input.EbsVolumes != null && { ebsVolumes: input.EbsVolumes }),
  };
};

const serializeAws_restJson1ScanResourceCriteria = (input: ScanResourceCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Exclude != null && { exclude: serializeAws_restJson1ScanCriterion(input.Exclude, context) }),
    ...(input.Include != null && { include: serializeAws_restJson1ScanCriterion(input.Include, context) }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { attributeName: input.AttributeName }),
    ...(input.OrderBy != null && { orderBy: input.OrderBy }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UsageCriteria = (input: UsageCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AccountIds != null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
    ...(input.DataSources != null && { dataSources: serializeAws_restJson1DataSourceList(input.DataSources, context) }),
    ...(input.Resources != null && { resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
  };
};

const deserializeAws_restJson1AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1AccessKeyDetails = (output: any, context: __SerdeContext): AccessKeyDetails => {
  return {
    AccessKeyId: __expectString(output.accessKeyId),
    PrincipalId: __expectString(output.principalId),
    UserName: __expectString(output.userName),
    UserType: __expectString(output.userType),
  } as any;
};

const deserializeAws_restJson1AccountFreeTrialInfo = (output: any, context: __SerdeContext): AccountFreeTrialInfo => {
  return {
    AccountId: __expectString(output.accountId),
    DataSources:
      output.dataSources != null
        ? deserializeAws_restJson1DataSourcesFreeTrial(output.dataSources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccountFreeTrialInfos = (
  output: any,
  context: __SerdeContext
): AccountFreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountFreeTrialInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccountLevelPermissions = (
  output: any,
  context: __SerdeContext
): AccountLevelPermissions => {
  return {
    BlockPublicAccess:
      output.blockPublicAccess != null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionType: __expectString(output.actionType),
    AwsApiCallAction:
      output.awsApiCallAction != null
        ? deserializeAws_restJson1AwsApiCallAction(output.awsApiCallAction, context)
        : undefined,
    DnsRequestAction:
      output.dnsRequestAction != null
        ? deserializeAws_restJson1DnsRequestAction(output.dnsRequestAction, context)
        : undefined,
    KubernetesApiCallAction:
      output.kubernetesApiCallAction != null
        ? deserializeAws_restJson1KubernetesApiCallAction(output.kubernetesApiCallAction, context)
        : undefined,
    NetworkConnectionAction:
      output.networkConnectionAction != null
        ? deserializeAws_restJson1NetworkConnectionAction(output.networkConnectionAction, context)
        : undefined,
    PortProbeAction:
      output.portProbeAction != null
        ? deserializeAws_restJson1PortProbeAction(output.portProbeAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AdminAccountId: __expectString(output.adminAccountId),
    AdminStatus: __expectString(output.adminStatus),
  } as any;
};

const deserializeAws_restJson1AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdminAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Administrator = (output: any, context: __SerdeContext): Administrator => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1AffectedResources = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return {
    AffectedResources:
      output.affectedResources != null
        ? deserializeAws_restJson1AffectedResources(output.affectedResources, context)
        : undefined,
    Api: __expectString(output.api),
    CallerType: __expectString(output.callerType),
    DomainDetails:
      output.domainDetails != null ? deserializeAws_restJson1DomainDetails(output.domainDetails, context) : undefined,
    ErrorCode: __expectString(output.errorCode),
    RemoteAccountDetails:
      output.remoteAccountDetails != null
        ? deserializeAws_restJson1RemoteAccountDetails(output.remoteAccountDetails, context)
        : undefined,
    RemoteIpDetails:
      output.remoteIpDetails != null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
    ServiceName: __expectString(output.serviceName),
    UserAgent: __expectString(output.userAgent),
  } as any;
};

const deserializeAws_restJson1BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return {
    BlockPublicAcls: __expectBoolean(output.blockPublicAcls),
    BlockPublicPolicy: __expectBoolean(output.blockPublicPolicy),
    IgnorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    RestrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1BucketLevelPermissions = (
  output: any,
  context: __SerdeContext
): BucketLevelPermissions => {
  return {
    AccessControlList:
      output.accessControlList != null
        ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
        : undefined,
    BlockPublicAccess:
      output.blockPublicAccess != null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
    BucketPolicy:
      output.bucketPolicy != null ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1City = (output: any, context: __SerdeContext): City => {
  return {
    CityName: __expectString(output.cityName),
  } as any;
};

const deserializeAws_restJson1CloudTrailConfigurationResult = (
  output: any,
  context: __SerdeContext
): CloudTrailConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Eq: output.eq != null ? deserializeAws_restJson1Eq(output.eq, context) : undefined,
    Equals: output.equals != null ? deserializeAws_restJson1Equals(output.equals, context) : undefined,
    GreaterThan: __expectLong(output.greaterThan),
    GreaterThanOrEqual: __expectLong(output.greaterThanOrEqual),
    Gt: __expectInt32(output.gt),
    Gte: __expectInt32(output.gte),
    LessThan: __expectLong(output.lessThan),
    LessThanOrEqual: __expectLong(output.lessThanOrEqual),
    Lt: __expectInt32(output.lt),
    Lte: __expectInt32(output.lte),
    Neq: output.neq != null ? deserializeAws_restJson1Neq(output.neq, context) : undefined,
    NotEquals: output.notEquals != null ? deserializeAws_restJson1NotEquals(output.notEquals, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Container = (output: any, context: __SerdeContext): Container => {
  return {
    ContainerRuntime: __expectString(output.containerRuntime),
    Id: __expectString(output.id),
    Image: __expectString(output.image),
    ImagePrefix: __expectString(output.imagePrefix),
    Name: __expectString(output.name),
    SecurityContext:
      output.securityContext != null
        ? deserializeAws_restJson1SecurityContext(output.securityContext, context)
        : undefined,
    VolumeMounts:
      output.volumeMounts != null ? deserializeAws_restJson1VolumeMounts(output.volumeMounts, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Containers = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Container(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CountBySeverity = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Country = (output: any, context: __SerdeContext): Country => {
  return {
    CountryCode: __expectString(output.countryCode),
    CountryName: __expectString(output.countryName),
  } as any;
};

const deserializeAws_restJson1Criterion = (output: any, context: __SerdeContext): Record<string, Condition> => {
  return Object.entries(output).reduce((acc: Record<string, Condition>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Condition(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1DataSourceConfigurationsResult = (
  output: any,
  context: __SerdeContext
): DataSourceConfigurationsResult => {
  return {
    CloudTrail:
      output.cloudTrail != null
        ? deserializeAws_restJson1CloudTrailConfigurationResult(output.cloudTrail, context)
        : undefined,
    DNSLogs:
      output.dnsLogs != null ? deserializeAws_restJson1DNSLogsConfigurationResult(output.dnsLogs, context) : undefined,
    FlowLogs:
      output.flowLogs != null
        ? deserializeAws_restJson1FlowLogsConfigurationResult(output.flowLogs, context)
        : undefined,
    Kubernetes:
      output.kubernetes != null
        ? deserializeAws_restJson1KubernetesConfigurationResult(output.kubernetes, context)
        : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? deserializeAws_restJson1MalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
    S3Logs:
      output.s3Logs != null ? deserializeAws_restJson1S3LogsConfigurationResult(output.s3Logs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceFreeTrial = (output: any, context: __SerdeContext): DataSourceFreeTrial => {
  return {
    FreeTrialDaysRemaining: __expectInt32(output.freeTrialDaysRemaining),
  } as any;
};

const deserializeAws_restJson1DataSourcesFreeTrial = (output: any, context: __SerdeContext): DataSourcesFreeTrial => {
  return {
    CloudTrail:
      output.cloudTrail != null ? deserializeAws_restJson1DataSourceFreeTrial(output.cloudTrail, context) : undefined,
    DnsLogs: output.dnsLogs != null ? deserializeAws_restJson1DataSourceFreeTrial(output.dnsLogs, context) : undefined,
    FlowLogs:
      output.flowLogs != null ? deserializeAws_restJson1DataSourceFreeTrial(output.flowLogs, context) : undefined,
    Kubernetes:
      output.kubernetes != null
        ? deserializeAws_restJson1KubernetesDataSourceFreeTrial(output.kubernetes, context)
        : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? deserializeAws_restJson1MalwareProtectionDataSourceFreeTrial(output.malwareProtection, context)
        : undefined,
    S3Logs: output.s3Logs != null ? deserializeAws_restJson1DataSourceFreeTrial(output.s3Logs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DefaultServerSideEncryption = (
  output: any,
  context: __SerdeContext
): DefaultServerSideEncryption => {
  return {
    EncryptionType: __expectString(output.encryptionType),
    KmsMasterKeyArn: __expectString(output.kmsMasterKeyArn),
  } as any;
};

const deserializeAws_restJson1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    DestinationId: __expectString(output.destinationId),
    DestinationType: __expectString(output.destinationType),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DestinationProperties = (output: any, context: __SerdeContext): DestinationProperties => {
  return {
    DestinationArn: __expectString(output.destinationArn),
    KmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Destination(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectorIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1DNSLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): DNSLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    Domain: __expectString(output.domain),
    Protocol: __expectString(output.protocol),
  } as any;
};

const deserializeAws_restJson1DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return {
    Domain: __expectString(output.domain),
  } as any;
};

const deserializeAws_restJson1EbsVolumeDetails = (output: any, context: __SerdeContext): EbsVolumeDetails => {
  return {
    ScannedVolumeDetails:
      output.scannedVolumeDetails != null
        ? deserializeAws_restJson1VolumeDetails(output.scannedVolumeDetails, context)
        : undefined,
    SkippedVolumeDetails:
      output.skippedVolumeDetails != null
        ? deserializeAws_restJson1VolumeDetails(output.skippedVolumeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EbsVolumeScanDetails = (output: any, context: __SerdeContext): EbsVolumeScanDetails => {
  return {
    ScanCompletedAt:
      output.scanCompletedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanCompletedAt)))
        : undefined,
    ScanDetections:
      output.scanDetections != null
        ? deserializeAws_restJson1ScanDetections(output.scanDetections, context)
        : undefined,
    ScanId: __expectString(output.scanId),
    ScanStartedAt:
      output.scanStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanStartedAt)))
        : undefined,
    Sources: output.sources != null ? deserializeAws_restJson1Sources(output.sources, context) : undefined,
    TriggerFindingId: __expectString(output.triggerFindingId),
  } as any;
};

const deserializeAws_restJson1EbsVolumesResult = (output: any, context: __SerdeContext): EbsVolumesResult => {
  return {
    Reason: __expectString(output.reason),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1EcsClusterDetails = (output: any, context: __SerdeContext): EcsClusterDetails => {
  return {
    ActiveServicesCount: __expectInt32(output.activeServicesCount),
    Arn: __expectString(output.arn),
    Name: __expectString(output.name),
    RegisteredContainerInstancesCount: __expectInt32(output.registeredContainerInstancesCount),
    RunningTasksCount: __expectInt32(output.runningTasksCount),
    Status: __expectString(output.status),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    TaskDetails:
      output.taskDetails != null ? deserializeAws_restJson1EcsTaskDetails(output.taskDetails, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EcsTaskDetails = (output: any, context: __SerdeContext): EcsTaskDetails => {
  return {
    Arn: __expectString(output.arn),
    Containers: output.containers != null ? deserializeAws_restJson1Containers(output.containers, context) : undefined,
    DefinitionArn: __expectString(output.definitionArn),
    Group: __expectString(output.group),
    StartedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    StartedBy: __expectString(output.startedBy),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    TaskCreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    Version: __expectString(output.version),
    Volumes: output.volumes != null ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EksClusterDetails = (output: any, context: __SerdeContext): EksClusterDetails => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    Name: __expectString(output.name),
    Status: __expectString(output.status),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    VpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1Eq = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Equals = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Evidence = (output: any, context: __SerdeContext): Evidence => {
  return {
    ThreatIntelligenceDetails:
      output.threatIntelligenceDetails != null
        ? deserializeAws_restJson1ThreatIntelligenceDetails(output.threatIntelligenceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilePaths = (output: any, context: __SerdeContext): ScanFilePath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScanFilePath(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FilterNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    AccountId: __expectString(output.accountId),
    Arn: __expectString(output.arn),
    Confidence: __limitedParseDouble(output.confidence),
    CreatedAt: __expectString(output.createdAt),
    Description: __expectString(output.description),
    Id: __expectString(output.id),
    Partition: __expectString(output.partition),
    Region: __expectString(output.region),
    Resource: output.resource != null ? deserializeAws_restJson1Resource(output.resource, context) : undefined,
    SchemaVersion: __expectString(output.schemaVersion),
    Service: output.service != null ? deserializeAws_restJson1Service(output.service, context) : undefined,
    Severity: __limitedParseDouble(output.severity),
    Title: __expectString(output.title),
    Type: __expectString(output.type),
    UpdatedAt: __expectString(output.updatedAt),
  } as any;
};

const deserializeAws_restJson1FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    Criterion: output.criterion != null ? deserializeAws_restJson1Criterion(output.criterion, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Findings = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Finding(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FindingStatistics = (output: any, context: __SerdeContext): FindingStatistics => {
  return {
    CountBySeverity:
      output.countBySeverity != null
        ? deserializeAws_restJson1CountBySeverity(output.countBySeverity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FlowLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): FlowLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return {
    Lat: __limitedParseDouble(output.lat),
    Lon: __limitedParseDouble(output.lon),
  } as any;
};

const deserializeAws_restJson1Groups = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1HighestSeverityThreatDetails = (
  output: any,
  context: __SerdeContext
): HighestSeverityThreatDetails => {
  return {
    Count: __expectInt32(output.count),
    Severity: __expectString(output.severity),
    ThreatName: __expectString(output.threatName),
  } as any;
};

const deserializeAws_restJson1HostPath = (output: any, context: __SerdeContext): HostPath => {
  return {
    Path: __expectString(output.path),
  } as any;
};

const deserializeAws_restJson1IamInstanceProfile = (output: any, context: __SerdeContext): IamInstanceProfile => {
  return {
    Arn: __expectString(output.arn),
    Id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    IamInstanceProfile:
      output.iamInstanceProfile != null
        ? deserializeAws_restJson1IamInstanceProfile(output.iamInstanceProfile, context)
        : undefined,
    ImageDescription: __expectString(output.imageDescription),
    ImageId: __expectString(output.imageId),
    InstanceId: __expectString(output.instanceId),
    InstanceState: __expectString(output.instanceState),
    InstanceType: __expectString(output.instanceType),
    LaunchTime: __expectString(output.launchTime),
    NetworkInterfaces:
      output.networkInterfaces != null
        ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    OutpostArn: __expectString(output.outpostArn),
    Platform: __expectString(output.platform),
    ProductCodes:
      output.productCodes != null ? deserializeAws_restJson1ProductCodes(output.productCodes, context) : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1Invitations = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IpSetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Ipv6Addresses = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1KubernetesApiCallAction = (
  output: any,
  context: __SerdeContext
): KubernetesApiCallAction => {
  return {
    Parameters: __expectString(output.parameters),
    RemoteIpDetails:
      output.remoteIpDetails != null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
    RequestUri: __expectString(output.requestUri),
    SourceIps: output.sourceIps != null ? deserializeAws_restJson1SourceIps(output.sourceIps, context) : undefined,
    StatusCode: __expectInt32(output.statusCode),
    UserAgent: __expectString(output.userAgent),
    Verb: __expectString(output.verb),
  } as any;
};

const deserializeAws_restJson1KubernetesAuditLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): KubernetesAuditLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1KubernetesConfigurationResult = (
  output: any,
  context: __SerdeContext
): KubernetesConfigurationResult => {
  return {
    AuditLogs:
      output.auditLogs != null
        ? deserializeAws_restJson1KubernetesAuditLogsConfigurationResult(output.auditLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KubernetesDataSourceFreeTrial = (
  output: any,
  context: __SerdeContext
): KubernetesDataSourceFreeTrial => {
  return {
    AuditLogs:
      output.auditLogs != null ? deserializeAws_restJson1DataSourceFreeTrial(output.auditLogs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1KubernetesDetails = (output: any, context: __SerdeContext): KubernetesDetails => {
  return {
    KubernetesUserDetails:
      output.kubernetesUserDetails != null
        ? deserializeAws_restJson1KubernetesUserDetails(output.kubernetesUserDetails, context)
        : undefined,
    KubernetesWorkloadDetails:
      output.kubernetesWorkloadDetails != null
        ? deserializeAws_restJson1KubernetesWorkloadDetails(output.kubernetesWorkloadDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KubernetesUserDetails = (output: any, context: __SerdeContext): KubernetesUserDetails => {
  return {
    Groups: output.groups != null ? deserializeAws_restJson1Groups(output.groups, context) : undefined,
    Uid: __expectString(output.uid),
    Username: __expectString(output.username),
  } as any;
};

const deserializeAws_restJson1KubernetesWorkloadDetails = (
  output: any,
  context: __SerdeContext
): KubernetesWorkloadDetails => {
  return {
    Containers: output.containers != null ? deserializeAws_restJson1Containers(output.containers, context) : undefined,
    HostNetwork: __expectBoolean(output.hostNetwork),
    Name: __expectString(output.name),
    Namespace: __expectString(output.namespace),
    Type: __expectString(output.type),
    Uid: __expectString(output.uid),
    Volumes: output.volumes != null ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LocalIpDetails = (output: any, context: __SerdeContext): LocalIpDetails => {
  return {
    IpAddressV4: __expectString(output.ipAddressV4),
  } as any;
};

const deserializeAws_restJson1LocalPortDetails = (output: any, context: __SerdeContext): LocalPortDetails => {
  return {
    Port: __expectInt32(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

const deserializeAws_restJson1MalwareProtectionConfigurationResult = (
  output: any,
  context: __SerdeContext
): MalwareProtectionConfigurationResult => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? deserializeAws_restJson1ScanEc2InstanceWithFindingsResult(output.scanEc2InstanceWithFindings, context)
        : undefined,
    ServiceRole: __expectString(output.serviceRole),
  } as any;
};

const deserializeAws_restJson1MalwareProtectionDataSourceFreeTrial = (
  output: any,
  context: __SerdeContext
): MalwareProtectionDataSourceFreeTrial => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? deserializeAws_restJson1DataSourceFreeTrial(output.scanEc2InstanceWithFindings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MapEquals = (output: any, context: __SerdeContext): ScanConditionPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScanConditionPair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Master = (output: any, context: __SerdeContext): Master => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
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

const deserializeAws_restJson1MemberDataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MemberDataSourceConfiguration => {
  return {
    AccountId: __expectString(output.accountId),
    DataSources:
      output.dataSources != null
        ? deserializeAws_restJson1DataSourceConfigurationsResult(output.dataSources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberDataSourceConfigurations = (
  output: any,
  context: __SerdeContext
): MemberDataSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberDataSourceConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Members = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Member(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Neq = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1NetworkConnectionAction = (
  output: any,
  context: __SerdeContext
): NetworkConnectionAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    ConnectionDirection: __expectString(output.connectionDirection),
    LocalIpDetails:
      output.localIpDetails != null
        ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.localPortDetails != null
        ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
        : undefined,
    Protocol: __expectString(output.protocol),
    RemoteIpDetails:
      output.remoteIpDetails != null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
    RemotePortDetails:
      output.remotePortDetails != null
        ? deserializeAws_restJson1RemotePortDetails(output.remotePortDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    Ipv6Addresses:
      output.ipv6Addresses != null ? deserializeAws_restJson1Ipv6Addresses(output.ipv6Addresses, context) : undefined,
    NetworkInterfaceId: __expectString(output.networkInterfaceId),
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
    PrivateIpAddresses:
      output.privateIpAddresses != null
        ? deserializeAws_restJson1PrivateIpAddresses(output.privateIpAddresses, context)
        : undefined,
    PublicDnsName: __expectString(output.publicDnsName),
    PublicIp: __expectString(output.publicIp),
    SecurityGroups:
      output.securityGroups != null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    SubnetId: __expectString(output.subnetId),
    VpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NotEquals = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Organization = (output: any, context: __SerdeContext): Organization => {
  return {
    Asn: __expectString(output.asn),
    AsnOrg: __expectString(output.asnOrg),
    Isp: __expectString(output.isp),
    Org: __expectString(output.org),
  } as any;
};

const deserializeAws_restJson1OrganizationDataSourceConfigurationsResult = (
  output: any,
  context: __SerdeContext
): OrganizationDataSourceConfigurationsResult => {
  return {
    Kubernetes:
      output.kubernetes != null
        ? deserializeAws_restJson1OrganizationKubernetesConfigurationResult(output.kubernetes, context)
        : undefined,
    MalwareProtection:
      output.malwareProtection != null
        ? deserializeAws_restJson1OrganizationMalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
    S3Logs:
      output.s3Logs != null
        ? deserializeAws_restJson1OrganizationS3LogsConfigurationResult(output.s3Logs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrganizationEbsVolumesResult = (
  output: any,
  context: __SerdeContext
): OrganizationEbsVolumesResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

const deserializeAws_restJson1OrganizationKubernetesAuditLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationKubernetesAuditLogsConfigurationResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

const deserializeAws_restJson1OrganizationKubernetesConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationKubernetesConfigurationResult => {
  return {
    AuditLogs:
      output.auditLogs != null
        ? deserializeAws_restJson1OrganizationKubernetesAuditLogsConfigurationResult(output.auditLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrganizationMalwareProtectionConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationMalwareProtectionConfigurationResult => {
  return {
    ScanEc2InstanceWithFindings:
      output.scanEc2InstanceWithFindings != null
        ? deserializeAws_restJson1OrganizationScanEc2InstanceWithFindingsResult(
            output.scanEc2InstanceWithFindings,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrganizationS3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationS3LogsConfigurationResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

const deserializeAws_restJson1OrganizationScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): OrganizationScanEc2InstanceWithFindingsResult => {
  return {
    EbsVolumes:
      output.ebsVolumes != null
        ? deserializeAws_restJson1OrganizationEbsVolumesResult(output.ebsVolumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Owner = (output: any, context: __SerdeContext): Owner => {
  return {
    Id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1PermissionConfiguration = (
  output: any,
  context: __SerdeContext
): PermissionConfiguration => {
  return {
    AccountLevelPermissions:
      output.accountLevelPermissions != null
        ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    BucketLevelPermissions:
      output.bucketLevelPermissions != null
        ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    PortProbeDetails:
      output.portProbeDetails != null
        ? deserializeAws_restJson1PortProbeDetails(output.portProbeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return {
    LocalIpDetails:
      output.localIpDetails != null
        ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.localPortDetails != null
        ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
        : undefined,
    RemoteIpDetails:
      output.remoteIpDetails != null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetails = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PrivateIpAddressDetails = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails => {
  return {
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
  } as any;
};

const deserializeAws_restJson1PrivateIpAddresses = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PrivateIpAddressDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProductCode = (output: any, context: __SerdeContext): ProductCode => {
  return {
    Code: __expectString(output.productCodeId),
    ProductType: __expectString(output.productCodeType),
  } as any;
};

const deserializeAws_restJson1ProductCodes = (output: any, context: __SerdeContext): ProductCode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProductCode(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return {
    EffectivePermission: __expectString(output.effectivePermission),
    PermissionConfiguration:
      output.permissionConfiguration != null
        ? deserializeAws_restJson1PermissionConfiguration(output.permissionConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RemoteAccountDetails = (output: any, context: __SerdeContext): RemoteAccountDetails => {
  return {
    AccountId: __expectString(output.accountId),
    Affiliated: __expectBoolean(output.affiliated),
  } as any;
};

const deserializeAws_restJson1RemoteIpDetails = (output: any, context: __SerdeContext): RemoteIpDetails => {
  return {
    City: output.city != null ? deserializeAws_restJson1City(output.city, context) : undefined,
    Country: output.country != null ? deserializeAws_restJson1Country(output.country, context) : undefined,
    GeoLocation:
      output.geoLocation != null ? deserializeAws_restJson1GeoLocation(output.geoLocation, context) : undefined,
    IpAddressV4: __expectString(output.ipAddressV4),
    Organization:
      output.organization != null ? deserializeAws_restJson1Organization(output.organization, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RemotePortDetails = (output: any, context: __SerdeContext): RemotePortDetails => {
  return {
    Port: __expectInt32(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    AccessKeyDetails:
      output.accessKeyDetails != null
        ? deserializeAws_restJson1AccessKeyDetails(output.accessKeyDetails, context)
        : undefined,
    ContainerDetails:
      output.containerDetails != null ? deserializeAws_restJson1Container(output.containerDetails, context) : undefined,
    EbsVolumeDetails:
      output.ebsVolumeDetails != null
        ? deserializeAws_restJson1EbsVolumeDetails(output.ebsVolumeDetails, context)
        : undefined,
    EcsClusterDetails:
      output.ecsClusterDetails != null
        ? deserializeAws_restJson1EcsClusterDetails(output.ecsClusterDetails, context)
        : undefined,
    EksClusterDetails:
      output.eksClusterDetails != null
        ? deserializeAws_restJson1EksClusterDetails(output.eksClusterDetails, context)
        : undefined,
    InstanceDetails:
      output.instanceDetails != null
        ? deserializeAws_restJson1InstanceDetails(output.instanceDetails, context)
        : undefined,
    KubernetesDetails:
      output.kubernetesDetails != null
        ? deserializeAws_restJson1KubernetesDetails(output.kubernetesDetails, context)
        : undefined,
    ResourceType: __expectString(output.resourceType),
    S3BucketDetails:
      output.s3BucketDetails != null
        ? deserializeAws_restJson1S3BucketDetails(output.s3BucketDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    InstanceArn: __expectString(output.instanceArn),
  } as any;
};

const deserializeAws_restJson1S3BucketDetail = (output: any, context: __SerdeContext): S3BucketDetail => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    DefaultServerSideEncryption:
      output.defaultServerSideEncryption != null
        ? deserializeAws_restJson1DefaultServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    Name: __expectString(output.name),
    Owner: output.owner != null ? deserializeAws_restJson1Owner(output.owner, context) : undefined,
    PublicAccess:
      output.publicAccess != null ? deserializeAws_restJson1PublicAccess(output.publicAccess, context) : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1S3BucketDetails = (output: any, context: __SerdeContext): S3BucketDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): S3LogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1Scan = (output: any, context: __SerdeContext): Scan => {
  return {
    AccountId: __expectString(output.accountId),
    AdminDetectorId: __expectString(output.adminDetectorId),
    AttachedVolumes:
      output.attachedVolumes != null
        ? deserializeAws_restJson1VolumeDetails(output.attachedVolumes, context)
        : undefined,
    DetectorId: __expectString(output.detectorId),
    FailureReason: __expectString(output.failureReason),
    FileCount: __expectLong(output.fileCount),
    ResourceDetails:
      output.resourceDetails != null
        ? deserializeAws_restJson1ResourceDetails(output.resourceDetails, context)
        : undefined,
    ScanEndTime:
      output.scanEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanEndTime)))
        : undefined,
    ScanId: __expectString(output.scanId),
    ScanResultDetails:
      output.scanResultDetails != null
        ? deserializeAws_restJson1ScanResultDetails(output.scanResultDetails, context)
        : undefined,
    ScanStartTime:
      output.scanStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scanStartTime)))
        : undefined,
    ScanStatus: __expectString(output.scanStatus),
    TotalBytes: __expectLong(output.totalBytes),
    TriggerDetails:
      output.triggerDetails != null
        ? deserializeAws_restJson1TriggerDetails(output.triggerDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ScanCondition = (output: any, context: __SerdeContext): ScanCondition => {
  return {
    MapEquals: output.mapEquals != null ? deserializeAws_restJson1MapEquals(output.mapEquals, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScanConditionPair = (output: any, context: __SerdeContext): ScanConditionPair => {
  return {
    Key: __expectString(output.key),
    Value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ScanCriterion = (output: any, context: __SerdeContext): Record<string, ScanCondition> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ScanCondition>, [key, value]: [ScanCriterionKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1ScanCondition(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1ScanDetections = (output: any, context: __SerdeContext): ScanDetections => {
  return {
    HighestSeverityThreatDetails:
      output.highestSeverityThreatDetails != null
        ? deserializeAws_restJson1HighestSeverityThreatDetails(output.highestSeverityThreatDetails, context)
        : undefined,
    ScannedItemCount:
      output.scannedItemCount != null
        ? deserializeAws_restJson1ScannedItemCount(output.scannedItemCount, context)
        : undefined,
    ThreatDetectedByName:
      output.threatDetectedByName != null
        ? deserializeAws_restJson1ThreatDetectedByName(output.threatDetectedByName, context)
        : undefined,
    ThreatsDetectedItemCount:
      output.threatsDetectedItemCount != null
        ? deserializeAws_restJson1ThreatsDetectedItemCount(output.threatsDetectedItemCount, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): ScanEc2InstanceWithFindingsResult => {
  return {
    EbsVolumes:
      output.ebsVolumes != null ? deserializeAws_restJson1EbsVolumesResult(output.ebsVolumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScanFilePath = (output: any, context: __SerdeContext): ScanFilePath => {
  return {
    FileName: __expectString(output.fileName),
    FilePath: __expectString(output.filePath),
    Hash: __expectString(output.hash),
    VolumeArn: __expectString(output.volumeArn),
  } as any;
};

const deserializeAws_restJson1ScannedItemCount = (output: any, context: __SerdeContext): ScannedItemCount => {
  return {
    Files: __expectInt32(output.files),
    TotalGb: __expectInt32(output.totalGb),
    Volumes: __expectInt32(output.volumes),
  } as any;
};

const deserializeAws_restJson1ScanResourceCriteria = (output: any, context: __SerdeContext): ScanResourceCriteria => {
  return {
    Exclude: output.exclude != null ? deserializeAws_restJson1ScanCriterion(output.exclude, context) : undefined,
    Include: output.include != null ? deserializeAws_restJson1ScanCriterion(output.include, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScanResultDetails = (output: any, context: __SerdeContext): ScanResultDetails => {
  return {
    ScanResult: __expectString(output.scanResult),
  } as any;
};

const deserializeAws_restJson1Scans = (output: any, context: __SerdeContext): Scan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Scan(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ScanThreatName = (output: any, context: __SerdeContext): ScanThreatName => {
  return {
    FilePaths: output.filePaths != null ? deserializeAws_restJson1FilePaths(output.filePaths, context) : undefined,
    ItemCount: __expectInt32(output.itemCount),
    Name: __expectString(output.name),
    Severity: __expectString(output.severity),
  } as any;
};

const deserializeAws_restJson1ScanThreatNames = (output: any, context: __SerdeContext): ScanThreatName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScanThreatName(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityContext = (output: any, context: __SerdeContext): SecurityContext => {
  return {
    Privileged: __expectBoolean(output.privileged),
  } as any;
};

const deserializeAws_restJson1SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return {
    GroupId: __expectString(output.groupId),
    GroupName: __expectString(output.groupName),
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Service = (output: any, context: __SerdeContext): Service => {
  return {
    Action: output.action != null ? deserializeAws_restJson1Action(output.action, context) : undefined,
    AdditionalInfo:
      output.additionalInfo != null
        ? deserializeAws_restJson1ServiceAdditionalInfo(output.additionalInfo, context)
        : undefined,
    Archived: __expectBoolean(output.archived),
    Count: __expectInt32(output.count),
    DetectorId: __expectString(output.detectorId),
    EbsVolumeScanDetails:
      output.ebsVolumeScanDetails != null
        ? deserializeAws_restJson1EbsVolumeScanDetails(output.ebsVolumeScanDetails, context)
        : undefined,
    EventFirstSeen: __expectString(output.eventFirstSeen),
    EventLastSeen: __expectString(output.eventLastSeen),
    Evidence: output.evidence != null ? deserializeAws_restJson1Evidence(output.evidence, context) : undefined,
    FeatureName: __expectString(output.featureName),
    ResourceRole: __expectString(output.resourceRole),
    ServiceName: __expectString(output.serviceName),
    UserFeedback: __expectString(output.userFeedback),
  } as any;
};

const deserializeAws_restJson1ServiceAdditionalInfo = (output: any, context: __SerdeContext): ServiceAdditionalInfo => {
  return {
    Type: __expectString(output.type),
    Value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1SourceIps = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Sources = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.key),
    Value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThreatDetectedByName = (output: any, context: __SerdeContext): ThreatDetectedByName => {
  return {
    ItemCount: __expectInt32(output.itemCount),
    Shortened: __expectBoolean(output.shortened),
    ThreatNames:
      output.threatNames != null ? deserializeAws_restJson1ScanThreatNames(output.threatNames, context) : undefined,
    UniqueThreatNameCount: __expectInt32(output.uniqueThreatNameCount),
  } as any;
};

const deserializeAws_restJson1ThreatIntelligenceDetail = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail => {
  return {
    ThreatListName: __expectString(output.threatListName),
    ThreatNames:
      output.threatNames != null ? deserializeAws_restJson1ThreatNames(output.threatNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ThreatIntelligenceDetails = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThreatIntelligenceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThreatIntelSetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ThreatNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ThreatsDetectedItemCount = (
  output: any,
  context: __SerdeContext
): ThreatsDetectedItemCount => {
  return {
    Files: __expectInt32(output.files),
  } as any;
};

const deserializeAws_restJson1Total = (output: any, context: __SerdeContext): Total => {
  return {
    Amount: __expectString(output.amount),
    Unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_restJson1TriggerDetails = (output: any, context: __SerdeContext): TriggerDetails => {
  return {
    Description: __expectString(output.description),
    GuardDutyFindingId: __expectString(output.guardDutyFindingId),
  } as any;
};

const deserializeAws_restJson1UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return {
    AccountId: __expectString(output.accountId),
    Result: __expectString(output.result),
  } as any;
};

const deserializeAws_restJson1UnprocessedAccounts = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UnprocessedDataSourcesResult = (
  output: any,
  context: __SerdeContext
): UnprocessedDataSourcesResult => {
  return {
    MalwareProtection:
      output.malwareProtection != null
        ? deserializeAws_restJson1MalwareProtectionConfigurationResult(output.malwareProtection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UsageAccountResult = (output: any, context: __SerdeContext): UsageAccountResult => {
  return {
    AccountId: __expectString(output.accountId),
    Total: output.total != null ? deserializeAws_restJson1Total(output.total, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UsageAccountResultList = (output: any, context: __SerdeContext): UsageAccountResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageAccountResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UsageDataSourceResult = (output: any, context: __SerdeContext): UsageDataSourceResult => {
  return {
    DataSource: __expectString(output.dataSource),
    Total: output.total != null ? deserializeAws_restJson1Total(output.total, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UsageDataSourceResultList = (
  output: any,
  context: __SerdeContext
): UsageDataSourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageDataSourceResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UsageResourceResult = (output: any, context: __SerdeContext): UsageResourceResult => {
  return {
    Resource: __expectString(output.resource),
    Total: output.total != null ? deserializeAws_restJson1Total(output.total, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UsageResourceResultList = (
  output: any,
  context: __SerdeContext
): UsageResourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageResourceResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UsageStatistics = (output: any, context: __SerdeContext): UsageStatistics => {
  return {
    SumByAccount:
      output.sumByAccount != null
        ? deserializeAws_restJson1UsageAccountResultList(output.sumByAccount, context)
        : undefined,
    SumByDataSource:
      output.sumByDataSource != null
        ? deserializeAws_restJson1UsageDataSourceResultList(output.sumByDataSource, context)
        : undefined,
    SumByResource:
      output.sumByResource != null
        ? deserializeAws_restJson1UsageResourceResultList(output.sumByResource, context)
        : undefined,
    TopResources:
      output.topResources != null
        ? deserializeAws_restJson1UsageResourceResultList(output.topResources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    HostPath: output.hostPath != null ? deserializeAws_restJson1HostPath(output.hostPath, context) : undefined,
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1VolumeDetail = (output: any, context: __SerdeContext): VolumeDetail => {
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

const deserializeAws_restJson1VolumeDetails = (output: any, context: __SerdeContext): VolumeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VolumeDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VolumeMount = (output: any, context: __SerdeContext): VolumeMount => {
  return {
    MountPath: __expectString(output.mountPath),
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1VolumeMounts = (output: any, context: __SerdeContext): VolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VolumeMount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Volume(entry, context);
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
