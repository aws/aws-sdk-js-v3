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
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import { StartMalwareScanCommandInput, StartMalwareScanCommandOutput } from "../commands/StartMalwareScanCommand";
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
  AccessDeniedException,
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
  ConflictException,
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
  LambdaDetails,
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
  VpcConfig,
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
  body = JSON.stringify(
    take(input, {
      administratorId: [, , `AdministratorId`],
      invitationId: [, , `InvitationId`],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/master";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      invitationId: [, , `InvitationId`],
      masterId: [, , `MasterId`],
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
  body = JSON.stringify(
    take(input, {
      findingIds: [, (_) => _json(_), `FindingIds`],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientToken`],
      dataSources: [, (_) => se_DataSourceConfigurations(_, context), `DataSources`],
      enable: [, , `Enable`],
      features: [, (_) => se_DetectorFeatureConfigurations(_, context), `Features`],
      findingPublishingFrequency: [, , `FindingPublishingFrequency`],
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      action: [, , `Action`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientToken`],
      description: [, , `Description`],
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `FindingCriteria`],
      name: [, , `Name`],
      rank: [, , `Rank`],
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      activate: [, , `Activate`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientToken`],
      format: [, , `Format`],
      location: [, , `Location`],
      name: [, , `Name`],
      tags: [, (_) => _json(_), `Tags`],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountDetails: [, (_) => se_AccountDetails(_, context), `AccountDetails`],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientToken`],
      destinationProperties: [, (_) => se_DestinationProperties(_, context), `DestinationProperties`],
      destinationType: [, , `DestinationType`],
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
  body = JSON.stringify(
    take(input, {
      findingTypes: [, (_) => _json(_), `FindingTypes`],
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
  body = JSON.stringify(
    take(input, {
      activate: [, , `Activate`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientToken`],
      format: [, , `Format`],
      location: [, , `Location`],
      name: [, , `Name`],
      tags: [, (_) => _json(_), `Tags`],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/decline";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      filterCriteria: [, (_) => se_FilterCriteria(_, context), `FilterCriteria`],
      maxResults: [, , `MaxResults`],
      nextToken: [, , `NextToken`],
      sortCriteria: [, (_) => se_SortCriteria(_, context), `SortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      adminAccountId: [, , `AdminAccountId`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/enable";
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminAccountId: [, , `AdminAccountId`],
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
  body = JSON.stringify(
    take(input, {
      filterCriteria: [, (_) => se_CoverageFilterCriteria(_, context), `FilterCriteria`],
      statisticsType: [, (_) => _json(_), `StatisticsType`],
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
  body = JSON.stringify(
    take(input, {
      findingIds: [, (_) => _json(_), `FindingIds`],
      sortCriteria: [, (_) => se_SortCriteria(_, context), `SortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `FindingCriteria`],
      findingStatisticTypes: [, (_) => _json(_), `FindingStatisticTypes`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      maxResults: [, , `MaxResults`],
      nextToken: [, , `NextToken`],
      unit: [, , `Unit`],
      usageCriteria: [, (_) => se_UsageCriteria(_, context), `UsageCriteria`],
      usageStatisticsType: [, , `UsageStatisticType`],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/invite";
  resolvedPath = __resolvedPath(resolvedPath, input, "DetectorId", () => input.DetectorId!, "{DetectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
      disableEmailNotification: [, , `DisableEmailNotification`],
      message: [, , `Message`],
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
  body = JSON.stringify(
    take(input, {
      filterCriteria: [, (_) => se_CoverageFilterCriteria(_, context), `FilterCriteria`],
      maxResults: [, , `MaxResults`],
      nextToken: [, , `NextToken`],
      sortCriteria: [, (_) => se_CoverageSortCriteria(_, context), `SortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `FindingCriteria`],
      maxResults: [, , `MaxResults`],
      nextToken: [, , `NextToken`],
      sortCriteria: [, (_) => se_SortCriteria(_, context), `SortCriteria`],
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
 * serializeAws_restJson1StartMalwareScanCommand
 */
export const se_StartMalwareScanCommand = async (
  input: StartMalwareScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/malware-scan/start";
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [, , `ResourceArn`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
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
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      findingIds: [, (_) => _json(_), `FindingIds`],
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
  body = JSON.stringify(
    take(input, {
      dataSources: [, (_) => se_DataSourceConfigurations(_, context), `DataSources`],
      enable: [, , `Enable`],
      features: [, (_) => se_DetectorFeatureConfigurations(_, context), `Features`],
      findingPublishingFrequency: [, , `FindingPublishingFrequency`],
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
  body = JSON.stringify(
    take(input, {
      action: [, , `Action`],
      description: [, , `Description`],
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `FindingCriteria`],
      rank: [, , `Rank`],
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
  body = JSON.stringify(
    take(input, {
      comments: [, , `Comments`],
      feedback: [, , `Feedback`],
      findingIds: [, (_) => _json(_), `FindingIds`],
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
  body = JSON.stringify(
    take(input, {
      activate: [, , `Activate`],
      location: [, , `Location`],
      name: [, , `Name`],
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
  body = JSON.stringify(
    take(input, {
      ebsSnapshotPreservation: [, , `EbsSnapshotPreservation`],
      scanResourceCriteria: [, (_) => se_ScanResourceCriteria(_, context), `ScanResourceCriteria`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `AccountIds`],
      dataSources: [, (_) => se_DataSourceConfigurations(_, context), `DataSources`],
      features: [, (_) => se_MemberFeaturesConfigurations(_, context), `Features`],
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
  body = JSON.stringify(
    take(input, {
      autoEnable: [, , `AutoEnable`],
      autoEnableOrganizationMembers: [, , `AutoEnableOrganizationMembers`],
      dataSources: [, (_) => se_OrganizationDataSourceConfigurations(_, context), `DataSources`],
      features: [, (_) => se_OrganizationFeaturesConfigurations(_, context), `Features`],
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
  body = JSON.stringify(
    take(input, {
      destinationProperties: [, (_) => se_DestinationProperties(_, context), `DestinationProperties`],
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
  body = JSON.stringify(
    take(input, {
      activate: [, , `Activate`],
      location: [, , `Location`],
      name: [, , `Name`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DetectorId: [, __expectString, `detectorId`],
    UnprocessedDataSources: [, (_) => de_UnprocessedDataSourcesResult(_, context), `unprocessedDataSources`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    IpSetId: [, __expectString, `ipSetId`],
  });
  Object.assign(contents, doc);
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
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    DestinationId: [, __expectString, `destinationId`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ThreatIntelSetId: [, __expectString, `threatIntelSetId`],
  });
  Object.assign(contents, doc);
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
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Scans: [, (_) => de_Scans(_, context), `scans`],
  });
  Object.assign(contents, doc);
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
    AutoEnable: [, __expectBoolean, `autoEnable`],
    AutoEnableOrganizationMembers: [, __expectString, `autoEnableOrganizationMembers`],
    DataSources: [, (_) => de_OrganizationDataSourceConfigurationsResult(_, context), `dataSources`],
    Features: [, (_) => de_OrganizationFeaturesConfigurationsResults(_, context), `features`],
    MemberAccountLimitReached: [, __expectBoolean, `memberAccountLimitReached`],
    NextToken: [, __expectString, `nextToken`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    DestinationId: [, __expectString, `destinationId`],
    DestinationProperties: [, (_) => de_DestinationProperties(_, context), `destinationProperties`],
    DestinationType: [, __expectString, `destinationType`],
    PublishingFailureStartTimestamp: [, __expectLong, `publishingFailureStartTimestamp`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    Administrator: [, (_) => de_Administrator(_, context), `administrator`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    CoverageStatistics: [, (_) => de_CoverageStatistics(_, context), `coverageStatistics`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CreatedAt: [, __expectString, `createdAt`],
    DataSources: [, (_) => de_DataSourceConfigurationsResult(_, context), `dataSources`],
    Features: [, (_) => de_DetectorFeatureConfigurationsResults(_, context), `features`],
    FindingPublishingFrequency: [, __expectString, `findingPublishingFrequency`],
    ServiceRole: [, __expectString, `serviceRole`],
    Status: [, __expectString, `status`],
    Tags: [, _json, `tags`],
    UpdatedAt: [, __expectString, `updatedAt`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Action: [, __expectString, `action`],
    Description: [, __expectString, `description`],
    FindingCriteria: [, (_) => de_FindingCriteria(_, context), `findingCriteria`],
    Name: [, __expectString, `name`],
    Rank: [, __expectInt32, `rank`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
    Findings: [, (_) => de_Findings(_, context), `findings`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    FindingStatistics: [, (_) => de_FindingStatistics(_, context), `findingStatistics`],
  });
  Object.assign(contents, doc);
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
    InvitationsCount: [, __expectInt32, `invitationsCount`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    Format: [, __expectString, `format`],
    Location: [, __expectString, `location`],
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EbsSnapshotPreservation: [, __expectString, `ebsSnapshotPreservation`],
    ScanResourceCriteria: [, (_) => de_ScanResourceCriteria(_, context), `scanResourceCriteria`],
  });
  Object.assign(contents, doc);
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
    Master: [, (_) => de_Master(_, context), `master`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    MemberDataSourceConfigurations: [, (_) => de_MemberDataSourceConfigurations(_, context), `members`],
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
    Members: [, (_) => de_Members(_, context), `members`],
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    Accounts: [, (_) => de_AccountFreeTrialInfos(_, context), `accounts`],
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Format: [, __expectString, `format`],
    Location: [, __expectString, `location`],
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    UsageStatistics: [, (_) => de_UsageStatistics(_, context), `usageStatistics`],
  });
  Object.assign(contents, doc);
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
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Resources: [, (_) => de_CoverageResources(_, context), `resources`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DetectorIds: [, _json, `detectorIds`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FilterNames: [, _json, `filterNames`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FindingIds: [, _json, `findingIds`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
    Invitations: [, (_) => de_Invitations(_, context), `invitations`],
    NextToken: [, __expectString, `nextToken`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    IpSetIds: [, _json, `ipSetIds`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
    Members: [, (_) => de_Members(_, context), `members`],
    NextToken: [, __expectString, `nextToken`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    AdminAccounts: [, (_) => de_AdminAccounts(_, context), `adminAccounts`],
    NextToken: [, __expectString, `nextToken`],
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    Destinations: [, (_) => de_Destinations(_, context), `destinations`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
    Tags: [, _json, `tags`],
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
    case "AccessDeniedException":
    case "com.amazonaws.guardduty#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    ThreatIntelSetIds: [, _json, `threatIntelSetIds`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartMalwareScanCommand
 */
export const de_StartMalwareScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMalwareScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartMalwareScanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ScanId: [, __expectString, `scanId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMalwareScanCommandError
 */
const de_StartMalwareScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMalwareScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.guardduty#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
    case "AccessDeniedException":
    case "com.amazonaws.guardduty#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.guardduty#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    UnprocessedAccounts: [, (_) => de_UnprocessedAccounts(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
    Message: [, __expectString, `message`],
    Type: [, __expectString, `__type`],
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
    Type: [, __expectString, `__type`],
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
    Type: [, __expectString, `__type`],
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
    Type: [, __expectString, `__type`],
  });
  Object.assign(contents, doc);
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
  return take(input, {
    accountId: [, , `AccountId`],
    email: [, , `Email`],
  });
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

// se_AccountIds omitted.

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return take(input, {
    eq: [, _json, `Eq`],
    equals: [, _json, `Equals`],
    greaterThan: [, , `GreaterThan`],
    greaterThanOrEqual: [, , `GreaterThanOrEqual`],
    gt: [, , `Gt`],
    gte: [, , `Gte`],
    lessThan: [, , `LessThan`],
    lessThanOrEqual: [, , `LessThanOrEqual`],
    lt: [, , `Lt`],
    lte: [, , `Lte`],
    neq: [, _json, `Neq`],
    notEquals: [, _json, `NotEquals`],
  });
};

/**
 * serializeAws_restJson1CoverageFilterCondition
 */
const se_CoverageFilterCondition = (input: CoverageFilterCondition, context: __SerdeContext): any => {
  return take(input, {
    equals: [, _json, `Equals`],
    notEquals: [, _json, `NotEquals`],
  });
};

/**
 * serializeAws_restJson1CoverageFilterCriteria
 */
const se_CoverageFilterCriteria = (input: CoverageFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    filterCriterion: [, (_) => se_CoverageFilterCriterionList(_, context), `FilterCriterion`],
  });
};

/**
 * serializeAws_restJson1CoverageFilterCriterion
 */
const se_CoverageFilterCriterion = (input: CoverageFilterCriterion, context: __SerdeContext): any => {
  return take(input, {
    criterionKey: [, , `CriterionKey`],
    filterCondition: [, (_) => se_CoverageFilterCondition(_, context), `FilterCondition`],
  });
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
  return take(input, {
    attributeName: [, , `AttributeName`],
    orderBy: [, , `OrderBy`],
  });
};

// se_CoverageStatisticsTypeList omitted.

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
  return take(input, {
    kubernetes: [, (_) => se_KubernetesConfiguration(_, context), `Kubernetes`],
    malwareProtection: [, (_) => se_MalwareProtectionConfiguration(_, context), `MalwareProtection`],
    s3Logs: [, (_) => se_S3LogsConfiguration(_, context), `S3Logs`],
  });
};

// se_DataSourceList omitted.

/**
 * serializeAws_restJson1DestinationProperties
 */
const se_DestinationProperties = (input: DestinationProperties, context: __SerdeContext): any => {
  return take(input, {
    destinationArn: [, , `DestinationArn`],
    kmsKeyArn: [, , `KmsKeyArn`],
  });
};

/**
 * serializeAws_restJson1DetectorAdditionalConfiguration
 */
const se_DetectorAdditionalConfiguration = (input: DetectorAdditionalConfiguration, context: __SerdeContext): any => {
  return take(input, {
    name: [, , `Name`],
    status: [, , `Status`],
  });
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
  return take(input, {
    additionalConfiguration: [, (_) => se_DetectorAdditionalConfigurations(_, context), `AdditionalConfiguration`],
    name: [, , `Name`],
    status: [, , `Status`],
  });
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

// se_Eq omitted.

// se_Equals omitted.

/**
 * serializeAws_restJson1FilterCondition
 */
const se_FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return take(input, {
    equalsValue: [, , `EqualsValue`],
    greaterThan: [, , `GreaterThan`],
    lessThan: [, , `LessThan`],
  });
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    filterCriterion: [, (_) => se_FilterCriterionList(_, context), `FilterCriterion`],
  });
};

/**
 * serializeAws_restJson1FilterCriterion
 */
const se_FilterCriterion = (input: FilterCriterion, context: __SerdeContext): any => {
  return take(input, {
    criterionKey: [, , `CriterionKey`],
    filterCondition: [, (_) => se_FilterCondition(_, context), `FilterCondition`],
  });
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
  return take(input, {
    criterion: [, (_) => se_Criterion(_, context), `Criterion`],
  });
};

// se_FindingIds omitted.

// se_FindingStatisticTypes omitted.

// se_FindingTypes omitted.

/**
 * serializeAws_restJson1KubernetesAuditLogsConfiguration
 */
const se_KubernetesAuditLogsConfiguration = (input: KubernetesAuditLogsConfiguration, context: __SerdeContext): any => {
  return take(input, {
    enable: [, , `Enable`],
  });
};

/**
 * serializeAws_restJson1KubernetesConfiguration
 */
const se_KubernetesConfiguration = (input: KubernetesConfiguration, context: __SerdeContext): any => {
  return take(input, {
    auditLogs: [, (_) => se_KubernetesAuditLogsConfiguration(_, context), `AuditLogs`],
  });
};

/**
 * serializeAws_restJson1MalwareProtectionConfiguration
 */
const se_MalwareProtectionConfiguration = (input: MalwareProtectionConfiguration, context: __SerdeContext): any => {
  return take(input, {
    scanEc2InstanceWithFindings: [, (_) => se_ScanEc2InstanceWithFindings(_, context), `ScanEc2InstanceWithFindings`],
  });
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
  return take(input, {
    name: [, , `Name`],
    status: [, , `Status`],
  });
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
  return take(input, {
    additionalConfiguration: [, (_) => se_MemberAdditionalConfigurations(_, context), `AdditionalConfiguration`],
    name: [, , `Name`],
    status: [, , `Status`],
  });
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

// se_Neq omitted.

// se_NotEquals omitted.

/**
 * serializeAws_restJson1OrganizationAdditionalConfiguration
 */
const se_OrganizationAdditionalConfiguration = (
  input: OrganizationAdditionalConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    autoEnable: [, , `AutoEnable`],
    name: [, , `Name`],
  });
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
  return take(input, {
    kubernetes: [, (_) => se_OrganizationKubernetesConfiguration(_, context), `Kubernetes`],
    malwareProtection: [, (_) => se_OrganizationMalwareProtectionConfiguration(_, context), `MalwareProtection`],
    s3Logs: [, (_) => se_OrganizationS3LogsConfiguration(_, context), `S3Logs`],
  });
};

/**
 * serializeAws_restJson1OrganizationEbsVolumes
 */
const se_OrganizationEbsVolumes = (input: OrganizationEbsVolumes, context: __SerdeContext): any => {
  return take(input, {
    autoEnable: [, , `AutoEnable`],
  });
};

/**
 * serializeAws_restJson1OrganizationFeatureConfiguration
 */
const se_OrganizationFeatureConfiguration = (input: OrganizationFeatureConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalConfiguration: [, (_) => se_OrganizationAdditionalConfigurations(_, context), `AdditionalConfiguration`],
    autoEnable: [, , `AutoEnable`],
    name: [, , `Name`],
  });
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
  return take(input, {
    autoEnable: [, , `AutoEnable`],
  });
};

/**
 * serializeAws_restJson1OrganizationKubernetesConfiguration
 */
const se_OrganizationKubernetesConfiguration = (
  input: OrganizationKubernetesConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    auditLogs: [, (_) => se_OrganizationKubernetesAuditLogsConfiguration(_, context), `AuditLogs`],
  });
};

/**
 * serializeAws_restJson1OrganizationMalwareProtectionConfiguration
 */
const se_OrganizationMalwareProtectionConfiguration = (
  input: OrganizationMalwareProtectionConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    scanEc2InstanceWithFindings: [
      ,
      (_) => se_OrganizationScanEc2InstanceWithFindings(_, context),
      `ScanEc2InstanceWithFindings`,
    ],
  });
};

/**
 * serializeAws_restJson1OrganizationS3LogsConfiguration
 */
const se_OrganizationS3LogsConfiguration = (input: OrganizationS3LogsConfiguration, context: __SerdeContext): any => {
  return take(input, {
    autoEnable: [, , `AutoEnable`],
  });
};

/**
 * serializeAws_restJson1OrganizationScanEc2InstanceWithFindings
 */
const se_OrganizationScanEc2InstanceWithFindings = (
  input: OrganizationScanEc2InstanceWithFindings,
  context: __SerdeContext
): any => {
  return take(input, {
    ebsVolumes: [, (_) => se_OrganizationEbsVolumes(_, context), `EbsVolumes`],
  });
};

// se_ResourceList omitted.

/**
 * serializeAws_restJson1S3LogsConfiguration
 */
const se_S3LogsConfiguration = (input: S3LogsConfiguration, context: __SerdeContext): any => {
  return take(input, {
    enable: [, , `Enable`],
  });
};

/**
 * serializeAws_restJson1ScanCondition
 */
const se_ScanCondition = (input: ScanCondition, context: __SerdeContext): any => {
  return take(input, {
    mapEquals: [, (_) => se_MapEquals(_, context), `MapEquals`],
  });
};

/**
 * serializeAws_restJson1ScanConditionPair
 */
const se_ScanConditionPair = (input: ScanConditionPair, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `Key`],
    value: [, , `Value`],
  });
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
  return take(input, {
    ebsVolumes: [, , `EbsVolumes`],
  });
};

/**
 * serializeAws_restJson1ScanResourceCriteria
 */
const se_ScanResourceCriteria = (input: ScanResourceCriteria, context: __SerdeContext): any => {
  return take(input, {
    exclude: [, (_) => se_ScanCriterion(_, context), `Exclude`],
    include: [, (_) => se_ScanCriterion(_, context), `Include`],
  });
};

/**
 * serializeAws_restJson1SortCriteria
 */
const se_SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `AttributeName`],
    orderBy: [, , `OrderBy`],
  });
};

// se_TagMap omitted.

/**
 * serializeAws_restJson1UsageCriteria
 */
const se_UsageCriteria = (input: UsageCriteria, context: __SerdeContext): any => {
  return take(input, {
    accountIds: [, _json, `AccountIds`],
    dataSources: [, _json, `DataSources`],
    features: [, _json, `Features`],
    resources: [, _json, `Resources`],
  });
};

// se_UsageFeatureList omitted.

/**
 * deserializeAws_restJson1AccessControlList
 */
const de_AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return take(output, {
    AllowsPublicReadAccess: [, __expectBoolean, `allowsPublicReadAccess`],
    AllowsPublicWriteAccess: [, __expectBoolean, `allowsPublicWriteAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccessKeyDetails
 */
const de_AccessKeyDetails = (output: any, context: __SerdeContext): AccessKeyDetails => {
  return take(output, {
    AccessKeyId: [, __expectString, `accessKeyId`],
    PrincipalId: [, __expectString, `principalId`],
    UserName: [, __expectString, `userName`],
    UserType: [, __expectString, `userType`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccountFreeTrialInfo
 */
const de_AccountFreeTrialInfo = (output: any, context: __SerdeContext): AccountFreeTrialInfo => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    DataSources: [, (_: any) => de_DataSourcesFreeTrial(_, context), `dataSources`],
    Features: [, (_: any) => de_FreeTrialFeatureConfigurationsResults(_, context), `features`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccountFreeTrialInfos
 */
const de_AccountFreeTrialInfos = (output: any, context: __SerdeContext): AccountFreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountFreeTrialInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccountLevelPermissions
 */
const de_AccountLevelPermissions = (output: any, context: __SerdeContext): AccountLevelPermissions => {
  return take(output, {
    BlockPublicAccess: [, (_: any) => de_BlockPublicAccess(_, context), `blockPublicAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return take(output, {
    ActionType: [, __expectString, `actionType`],
    AwsApiCallAction: [, (_: any) => de_AwsApiCallAction(_, context), `awsApiCallAction`],
    DnsRequestAction: [, (_: any) => de_DnsRequestAction(_, context), `dnsRequestAction`],
    KubernetesApiCallAction: [, (_: any) => de_KubernetesApiCallAction(_, context), `kubernetesApiCallAction`],
    NetworkConnectionAction: [, (_: any) => de_NetworkConnectionAction(_, context), `networkConnectionAction`],
    PortProbeAction: [, (_: any) => de_PortProbeAction(_, context), `portProbeAction`],
    RdsLoginAttemptAction: [, (_: any) => de_RdsLoginAttemptAction(_, context), `rdsLoginAttemptAction`],
  }) as any;
};

/**
 * deserializeAws_restJson1AddonDetails
 */
const de_AddonDetails = (output: any, context: __SerdeContext): AddonDetails => {
  return take(output, {
    AddonStatus: [, __expectString, `addonStatus`],
    AddonVersion: [, __expectString, `addonVersion`],
  }) as any;
};

/**
 * deserializeAws_restJson1AdminAccount
 */
const de_AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return take(output, {
    AdminAccountId: [, __expectString, `adminAccountId`],
    AdminStatus: [, __expectString, `adminStatus`],
  }) as any;
};

/**
 * deserializeAws_restJson1AdminAccounts
 */
const de_AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdminAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Administrator
 */
const de_Administrator = (output: any, context: __SerdeContext): Administrator => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    InvitationId: [, __expectString, `invitationId`],
    InvitedAt: [, __expectString, `invitedAt`],
    RelationshipStatus: [, __expectString, `relationshipStatus`],
  }) as any;
};

// de_AffectedResources omitted.

/**
 * deserializeAws_restJson1AwsApiCallAction
 */
const de_AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return take(output, {
    AffectedResources: [, _json, `affectedResources`],
    Api: [, __expectString, `api`],
    CallerType: [, __expectString, `callerType`],
    DomainDetails: [, (_: any) => de_DomainDetails(_, context), `domainDetails`],
    ErrorCode: [, __expectString, `errorCode`],
    RemoteAccountDetails: [, (_: any) => de_RemoteAccountDetails(_, context), `remoteAccountDetails`],
    RemoteIpDetails: [, (_: any) => de_RemoteIpDetails(_, context), `remoteIpDetails`],
    ServiceName: [, __expectString, `serviceName`],
    UserAgent: [, __expectString, `userAgent`],
  }) as any;
};

/**
 * deserializeAws_restJson1BlockPublicAccess
 */
const de_BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return take(output, {
    BlockPublicAcls: [, __expectBoolean, `blockPublicAcls`],
    BlockPublicPolicy: [, __expectBoolean, `blockPublicPolicy`],
    IgnorePublicAcls: [, __expectBoolean, `ignorePublicAcls`],
    RestrictPublicBuckets: [, __expectBoolean, `restrictPublicBuckets`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketLevelPermissions
 */
const de_BucketLevelPermissions = (output: any, context: __SerdeContext): BucketLevelPermissions => {
  return take(output, {
    AccessControlList: [, (_: any) => de_AccessControlList(_, context), `accessControlList`],
    BlockPublicAccess: [, (_: any) => de_BlockPublicAccess(_, context), `blockPublicAccess`],
    BucketPolicy: [, (_: any) => de_BucketPolicy(_, context), `bucketPolicy`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketPolicy
 */
const de_BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return take(output, {
    AllowsPublicReadAccess: [, __expectBoolean, `allowsPublicReadAccess`],
    AllowsPublicWriteAccess: [, __expectBoolean, `allowsPublicWriteAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1City
 */
const de_City = (output: any, context: __SerdeContext): City => {
  return take(output, {
    CityName: [, __expectString, `cityName`],
  }) as any;
};

/**
 * deserializeAws_restJson1CloudTrailConfigurationResult
 */
const de_CloudTrailConfigurationResult = (output: any, context: __SerdeContext): CloudTrailConfigurationResult => {
  return take(output, {
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return take(output, {
    Eq: [, _json, `eq`],
    Equals: [, _json, `equals`],
    GreaterThan: [, __expectLong, `greaterThan`],
    GreaterThanOrEqual: [, __expectLong, `greaterThanOrEqual`],
    Gt: [, __expectInt32, `gt`],
    Gte: [, __expectInt32, `gte`],
    LessThan: [, __expectLong, `lessThan`],
    LessThanOrEqual: [, __expectLong, `lessThanOrEqual`],
    Lt: [, __expectInt32, `lt`],
    Lte: [, __expectInt32, `lte`],
    Neq: [, _json, `neq`],
    NotEquals: [, _json, `notEquals`],
  }) as any;
};

/**
 * deserializeAws_restJson1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return take(output, {
    ContainerRuntime: [, __expectString, `containerRuntime`],
    Id: [, __expectString, `id`],
    Image: [, __expectString, `image`],
    ImagePrefix: [, __expectString, `imagePrefix`],
    Name: [, __expectString, `name`],
    SecurityContext: [, (_: any) => de_SecurityContext(_, context), `securityContext`],
    VolumeMounts: [, (_: any) => de_VolumeMounts(_, context), `volumeMounts`],
  }) as any;
};

/**
 * deserializeAws_restJson1Containers
 */
const de_Containers = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Container(entry, context);
    });
  return retVal;
};

// de_CountByCoverageStatus omitted.

// de_CountByResourceType omitted.

// de_CountBySeverity omitted.

/**
 * deserializeAws_restJson1Country
 */
const de_Country = (output: any, context: __SerdeContext): Country => {
  return take(output, {
    CountryCode: [, __expectString, `countryCode`],
    CountryName: [, __expectString, `countryName`],
  }) as any;
};

/**
 * deserializeAws_restJson1CoverageEksClusterDetails
 */
const de_CoverageEksClusterDetails = (output: any, context: __SerdeContext): CoverageEksClusterDetails => {
  return take(output, {
    AddonDetails: [, (_: any) => de_AddonDetails(_, context), `addonDetails`],
    ClusterName: [, __expectString, `clusterName`],
    CompatibleNodes: [, __expectLong, `compatibleNodes`],
    CoveredNodes: [, __expectLong, `coveredNodes`],
  }) as any;
};

/**
 * deserializeAws_restJson1CoverageResource
 */
const de_CoverageResource = (output: any, context: __SerdeContext): CoverageResource => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    CoverageStatus: [, __expectString, `coverageStatus`],
    DetectorId: [, __expectString, `detectorId`],
    Issue: [, __expectString, `issue`],
    ResourceDetails: [, (_: any) => de_CoverageResourceDetails(_, context), `resourceDetails`],
    ResourceId: [, __expectString, `resourceId`],
    UpdatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1CoverageResourceDetails
 */
const de_CoverageResourceDetails = (output: any, context: __SerdeContext): CoverageResourceDetails => {
  return take(output, {
    EksClusterDetails: [, (_: any) => de_CoverageEksClusterDetails(_, context), `eksClusterDetails`],
    ResourceType: [, __expectString, `resourceType`],
  }) as any;
};

/**
 * deserializeAws_restJson1CoverageResources
 */
const de_CoverageResources = (output: any, context: __SerdeContext): CoverageResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CoverageResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoverageStatistics
 */
const de_CoverageStatistics = (output: any, context: __SerdeContext): CoverageStatistics => {
  return take(output, {
    CountByCoverageStatus: [, _json, `countByCoverageStatus`],
    CountByResourceType: [, _json, `countByResourceType`],
  }) as any;
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
  return take(output, {
    CloudTrail: [, (_: any) => de_CloudTrailConfigurationResult(_, context), `cloudTrail`],
    DNSLogs: [, (_: any) => de_DNSLogsConfigurationResult(_, context), `dnsLogs`],
    FlowLogs: [, (_: any) => de_FlowLogsConfigurationResult(_, context), `flowLogs`],
    Kubernetes: [, (_: any) => de_KubernetesConfigurationResult(_, context), `kubernetes`],
    MalwareProtection: [, (_: any) => de_MalwareProtectionConfigurationResult(_, context), `malwareProtection`],
    S3Logs: [, (_: any) => de_S3LogsConfigurationResult(_, context), `s3Logs`],
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceFreeTrial
 */
const de_DataSourceFreeTrial = (output: any, context: __SerdeContext): DataSourceFreeTrial => {
  return take(output, {
    FreeTrialDaysRemaining: [, __expectInt32, `freeTrialDaysRemaining`],
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourcesFreeTrial
 */
const de_DataSourcesFreeTrial = (output: any, context: __SerdeContext): DataSourcesFreeTrial => {
  return take(output, {
    CloudTrail: [, (_: any) => de_DataSourceFreeTrial(_, context), `cloudTrail`],
    DnsLogs: [, (_: any) => de_DataSourceFreeTrial(_, context), `dnsLogs`],
    FlowLogs: [, (_: any) => de_DataSourceFreeTrial(_, context), `flowLogs`],
    Kubernetes: [, (_: any) => de_KubernetesDataSourceFreeTrial(_, context), `kubernetes`],
    MalwareProtection: [, (_: any) => de_MalwareProtectionDataSourceFreeTrial(_, context), `malwareProtection`],
    S3Logs: [, (_: any) => de_DataSourceFreeTrial(_, context), `s3Logs`],
  }) as any;
};

/**
 * deserializeAws_restJson1DefaultServerSideEncryption
 */
const de_DefaultServerSideEncryption = (output: any, context: __SerdeContext): DefaultServerSideEncryption => {
  return take(output, {
    EncryptionType: [, __expectString, `encryptionType`],
    KmsMasterKeyArn: [, __expectString, `kmsMasterKeyArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return take(output, {
    DestinationId: [, __expectString, `destinationId`],
    DestinationType: [, __expectString, `destinationType`],
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1DestinationProperties
 */
const de_DestinationProperties = (output: any, context: __SerdeContext): DestinationProperties => {
  return take(output, {
    DestinationArn: [, __expectString, `destinationArn`],
    KmsKeyArn: [, __expectString, `kmsKeyArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1Destinations
 */
const de_Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    UpdatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `updatedAt`],
  }) as any;
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
  return take(output, {
    AdditionalConfiguration: [
      ,
      (_: any) => de_DetectorAdditionalConfigurationResults(_, context),
      `additionalConfiguration`,
    ],
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    UpdatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `updatedAt`],
  }) as any;
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
      return de_DetectorFeatureConfigurationResult(entry, context);
    });
  return retVal;
};

// de_DetectorIds omitted.

/**
 * deserializeAws_restJson1DNSLogsConfigurationResult
 */
const de_DNSLogsConfigurationResult = (output: any, context: __SerdeContext): DNSLogsConfigurationResult => {
  return take(output, {
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1DnsRequestAction
 */
const de_DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return take(output, {
    Blocked: [, __expectBoolean, `blocked`],
    Domain: [, __expectString, `domain`],
    Protocol: [, __expectString, `protocol`],
  }) as any;
};

/**
 * deserializeAws_restJson1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return take(output, {
    Domain: [, __expectString, `domain`],
  }) as any;
};

/**
 * deserializeAws_restJson1EbsVolumeDetails
 */
const de_EbsVolumeDetails = (output: any, context: __SerdeContext): EbsVolumeDetails => {
  return take(output, {
    ScannedVolumeDetails: [, (_: any) => de_VolumeDetails(_, context), `scannedVolumeDetails`],
    SkippedVolumeDetails: [, (_: any) => de_VolumeDetails(_, context), `skippedVolumeDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1EbsVolumeScanDetails
 */
const de_EbsVolumeScanDetails = (output: any, context: __SerdeContext): EbsVolumeScanDetails => {
  return take(output, {
    ScanCompletedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `scanCompletedAt`],
    ScanDetections: [, (_: any) => de_ScanDetections(_, context), `scanDetections`],
    ScanId: [, __expectString, `scanId`],
    ScanStartedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `scanStartedAt`],
    ScanType: [, __expectString, `scanType`],
    Sources: [, _json, `sources`],
    TriggerFindingId: [, __expectString, `triggerFindingId`],
  }) as any;
};

/**
 * deserializeAws_restJson1EbsVolumesResult
 */
const de_EbsVolumesResult = (output: any, context: __SerdeContext): EbsVolumesResult => {
  return take(output, {
    Reason: [, __expectString, `reason`],
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1EcsClusterDetails
 */
const de_EcsClusterDetails = (output: any, context: __SerdeContext): EcsClusterDetails => {
  return take(output, {
    ActiveServicesCount: [, __expectInt32, `activeServicesCount`],
    Arn: [, __expectString, `arn`],
    Name: [, __expectString, `name`],
    RegisteredContainerInstancesCount: [, __expectInt32, `registeredContainerInstancesCount`],
    RunningTasksCount: [, __expectInt32, `runningTasksCount`],
    Status: [, __expectString, `status`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
    TaskDetails: [, (_: any) => de_EcsTaskDetails(_, context), `taskDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1EcsTaskDetails
 */
const de_EcsTaskDetails = (output: any, context: __SerdeContext): EcsTaskDetails => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Containers: [, (_: any) => de_Containers(_, context), `containers`],
    DefinitionArn: [, __expectString, `definitionArn`],
    Group: [, __expectString, `group`],
    StartedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `startedAt`],
    StartedBy: [, __expectString, `startedBy`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
    TaskCreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    Version: [, __expectString, `version`],
    Volumes: [, (_: any) => de_Volumes(_, context), `volumes`],
  }) as any;
};

/**
 * deserializeAws_restJson1EksClusterDetails
 */
const de_EksClusterDetails = (output: any, context: __SerdeContext): EksClusterDetails => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
    VpcId: [, __expectString, `vpcId`],
  }) as any;
};

// de_Eq omitted.

// de_Equals omitted.

/**
 * deserializeAws_restJson1Evidence
 */
const de_Evidence = (output: any, context: __SerdeContext): Evidence => {
  return take(output, {
    ThreatIntelligenceDetails: [, (_: any) => de_ThreatIntelligenceDetails(_, context), `threatIntelligenceDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1FilePaths
 */
const de_FilePaths = (output: any, context: __SerdeContext): ScanFilePath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScanFilePath(entry, context);
    });
  return retVal;
};

// de_FilterNames omitted.

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    Arn: [, __expectString, `arn`],
    Confidence: [, __limitedParseDouble, `confidence`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    Id: [, __expectString, `id`],
    Partition: [, __expectString, `partition`],
    Region: [, __expectString, `region`],
    Resource: [, (_: any) => de_Resource(_, context), `resource`],
    SchemaVersion: [, __expectString, `schemaVersion`],
    Service: [, (_: any) => de_Service(_, context), `service`],
    Severity: [, __limitedParseDouble, `severity`],
    Title: [, __expectString, `title`],
    Type: [, __expectString, `type`],
    UpdatedAt: [, __expectString, `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1FindingCriteria
 */
const de_FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return take(output, {
    Criterion: [, (_: any) => de_Criterion(_, context), `criterion`],
  }) as any;
};

// de_FindingIds omitted.

/**
 * deserializeAws_restJson1Findings
 */
const de_Findings = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Finding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingStatistics
 */
const de_FindingStatistics = (output: any, context: __SerdeContext): FindingStatistics => {
  return take(output, {
    CountBySeverity: [, _json, `countBySeverity`],
  }) as any;
};

// de_FlagsList omitted.

/**
 * deserializeAws_restJson1FlowLogsConfigurationResult
 */
const de_FlowLogsConfigurationResult = (output: any, context: __SerdeContext): FlowLogsConfigurationResult => {
  return take(output, {
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1FreeTrialFeatureConfigurationResult
 */
const de_FreeTrialFeatureConfigurationResult = (
  output: any,
  context: __SerdeContext
): FreeTrialFeatureConfigurationResult => {
  return take(output, {
    FreeTrialDaysRemaining: [, __expectInt32, `freeTrialDaysRemaining`],
    Name: [, __expectString, `name`],
  }) as any;
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
      return de_FreeTrialFeatureConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeoLocation
 */
const de_GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return take(output, {
    Lat: [, __limitedParseDouble, `lat`],
    Lon: [, __limitedParseDouble, `lon`],
  }) as any;
};

// de_Groups omitted.

/**
 * deserializeAws_restJson1HighestSeverityThreatDetails
 */
const de_HighestSeverityThreatDetails = (output: any, context: __SerdeContext): HighestSeverityThreatDetails => {
  return take(output, {
    Count: [, __expectInt32, `count`],
    Severity: [, __expectString, `severity`],
    ThreatName: [, __expectString, `threatName`],
  }) as any;
};

/**
 * deserializeAws_restJson1HostPath
 */
const de_HostPath = (output: any, context: __SerdeContext): HostPath => {
  return take(output, {
    Path: [, __expectString, `path`],
  }) as any;
};

/**
 * deserializeAws_restJson1IamInstanceProfile
 */
const de_IamInstanceProfile = (output: any, context: __SerdeContext): IamInstanceProfile => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Id: [, __expectString, `id`],
  }) as any;
};

/**
 * deserializeAws_restJson1InstanceDetails
 */
const de_InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return take(output, {
    AvailabilityZone: [, __expectString, `availabilityZone`],
    IamInstanceProfile: [, (_: any) => de_IamInstanceProfile(_, context), `iamInstanceProfile`],
    ImageDescription: [, __expectString, `imageDescription`],
    ImageId: [, __expectString, `imageId`],
    InstanceId: [, __expectString, `instanceId`],
    InstanceState: [, __expectString, `instanceState`],
    InstanceType: [, __expectString, `instanceType`],
    LaunchTime: [, __expectString, `launchTime`],
    NetworkInterfaces: [, (_: any) => de_NetworkInterfaces(_, context), `networkInterfaces`],
    OutpostArn: [, __expectString, `outpostArn`],
    Platform: [, __expectString, `platform`],
    ProductCodes: [, (_: any) => de_ProductCodes(_, context), `productCodes`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    InvitationId: [, __expectString, `invitationId`],
    InvitedAt: [, __expectString, `invitedAt`],
    RelationshipStatus: [, __expectString, `relationshipStatus`],
  }) as any;
};

/**
 * deserializeAws_restJson1Invitations
 */
const de_Invitations = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Invitation(entry, context);
    });
  return retVal;
};

// de_IpSetIds omitted.

// de_Ipv6Addresses omitted.

/**
 * deserializeAws_restJson1KubernetesApiCallAction
 */
const de_KubernetesApiCallAction = (output: any, context: __SerdeContext): KubernetesApiCallAction => {
  return take(output, {
    Parameters: [, __expectString, `parameters`],
    RemoteIpDetails: [, (_: any) => de_RemoteIpDetails(_, context), `remoteIpDetails`],
    RequestUri: [, __expectString, `requestUri`],
    SourceIps: [, _json, `sourceIps`],
    StatusCode: [, __expectInt32, `statusCode`],
    UserAgent: [, __expectString, `userAgent`],
    Verb: [, __expectString, `verb`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesAuditLogsConfigurationResult
 */
const de_KubernetesAuditLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): KubernetesAuditLogsConfigurationResult => {
  return take(output, {
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesConfigurationResult
 */
const de_KubernetesConfigurationResult = (output: any, context: __SerdeContext): KubernetesConfigurationResult => {
  return take(output, {
    AuditLogs: [, (_: any) => de_KubernetesAuditLogsConfigurationResult(_, context), `auditLogs`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesDataSourceFreeTrial
 */
const de_KubernetesDataSourceFreeTrial = (output: any, context: __SerdeContext): KubernetesDataSourceFreeTrial => {
  return take(output, {
    AuditLogs: [, (_: any) => de_DataSourceFreeTrial(_, context), `auditLogs`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesDetails
 */
const de_KubernetesDetails = (output: any, context: __SerdeContext): KubernetesDetails => {
  return take(output, {
    KubernetesUserDetails: [, (_: any) => de_KubernetesUserDetails(_, context), `kubernetesUserDetails`],
    KubernetesWorkloadDetails: [, (_: any) => de_KubernetesWorkloadDetails(_, context), `kubernetesWorkloadDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesUserDetails
 */
const de_KubernetesUserDetails = (output: any, context: __SerdeContext): KubernetesUserDetails => {
  return take(output, {
    Groups: [, _json, `groups`],
    SessionName: [, _json, `sessionName`],
    Uid: [, __expectString, `uid`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1KubernetesWorkloadDetails
 */
const de_KubernetesWorkloadDetails = (output: any, context: __SerdeContext): KubernetesWorkloadDetails => {
  return take(output, {
    Containers: [, (_: any) => de_Containers(_, context), `containers`],
    HostNetwork: [, __expectBoolean, `hostNetwork`],
    Name: [, __expectString, `name`],
    Namespace: [, __expectString, `namespace`],
    Type: [, __expectString, `type`],
    Uid: [, __expectString, `uid`],
    Volumes: [, (_: any) => de_Volumes(_, context), `volumes`],
  }) as any;
};

/**
 * deserializeAws_restJson1LambdaDetails
 */
const de_LambdaDetails = (output: any, context: __SerdeContext): LambdaDetails => {
  return take(output, {
    Description: [, __expectString, `description`],
    FunctionArn: [, __expectString, `functionArn`],
    FunctionName: [, __expectString, `functionName`],
    FunctionVersion: [, __expectString, `functionVersion`],
    LastModifiedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `lastModifiedAt`],
    RevisionId: [, __expectString, `revisionId`],
    Role: [, __expectString, `role`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
    VpcConfig: [, (_: any) => de_VpcConfig(_, context), `vpcConfig`],
  }) as any;
};

/**
 * deserializeAws_restJson1Lineage
 */
const de_Lineage = (output: any, context: __SerdeContext): LineageObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineageObject
 */
const de_LineageObject = (output: any, context: __SerdeContext): LineageObject => {
  return take(output, {
    Euid: [, __expectInt32, `euid`],
    ExecutablePath: [, __expectString, `executablePath`],
    Name: [, __expectString, `name`],
    NamespacePid: [, __expectInt32, `namespacePid`],
    ParentUuid: [, __expectString, `parentUuid`],
    Pid: [, __expectInt32, `pid`],
    StartTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `startTime`],
    UserId: [, __expectInt32, `userId`],
    Uuid: [, __expectString, `uuid`],
  }) as any;
};

/**
 * deserializeAws_restJson1LocalIpDetails
 */
const de_LocalIpDetails = (output: any, context: __SerdeContext): LocalIpDetails => {
  return take(output, {
    IpAddressV4: [, __expectString, `ipAddressV4`],
  }) as any;
};

/**
 * deserializeAws_restJson1LocalPortDetails
 */
const de_LocalPortDetails = (output: any, context: __SerdeContext): LocalPortDetails => {
  return take(output, {
    Port: [, __expectInt32, `port`],
    PortName: [, __expectString, `portName`],
  }) as any;
};

/**
 * deserializeAws_restJson1LoginAttribute
 */
const de_LoginAttribute = (output: any, context: __SerdeContext): LoginAttribute => {
  return take(output, {
    Application: [, __expectString, `application`],
    FailedLoginAttempts: [, __expectInt32, `failedLoginAttempts`],
    SuccessfulLoginAttempts: [, __expectInt32, `successfulLoginAttempts`],
    User: [, __expectString, `user`],
  }) as any;
};

/**
 * deserializeAws_restJson1LoginAttributes
 */
const de_LoginAttributes = (output: any, context: __SerdeContext): LoginAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    ScanEc2InstanceWithFindings: [
      ,
      (_: any) => de_ScanEc2InstanceWithFindingsResult(_, context),
      `scanEc2InstanceWithFindings`,
    ],
    ServiceRole: [, __expectString, `serviceRole`],
  }) as any;
};

/**
 * deserializeAws_restJson1MalwareProtectionDataSourceFreeTrial
 */
const de_MalwareProtectionDataSourceFreeTrial = (
  output: any,
  context: __SerdeContext
): MalwareProtectionDataSourceFreeTrial => {
  return take(output, {
    ScanEc2InstanceWithFindings: [, (_: any) => de_DataSourceFreeTrial(_, context), `scanEc2InstanceWithFindings`],
  }) as any;
};

/**
 * deserializeAws_restJson1MapEquals
 */
const de_MapEquals = (output: any, context: __SerdeContext): ScanConditionPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScanConditionPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Master
 */
const de_Master = (output: any, context: __SerdeContext): Master => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    InvitationId: [, __expectString, `invitationId`],
    InvitedAt: [, __expectString, `invitedAt`],
    RelationshipStatus: [, __expectString, `relationshipStatus`],
  }) as any;
};

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    AdministratorId: [, __expectString, `administratorId`],
    DetectorId: [, __expectString, `detectorId`],
    Email: [, __expectString, `email`],
    InvitedAt: [, __expectString, `invitedAt`],
    MasterId: [, __expectString, `masterId`],
    RelationshipStatus: [, __expectString, `relationshipStatus`],
    UpdatedAt: [, __expectString, `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1MemberAdditionalConfigurationResult
 */
const de_MemberAdditionalConfigurationResult = (
  output: any,
  context: __SerdeContext
): MemberAdditionalConfigurationResult => {
  return take(output, {
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    UpdatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `updatedAt`],
  }) as any;
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
      return de_MemberAdditionalConfigurationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemberDataSourceConfiguration
 */
const de_MemberDataSourceConfiguration = (output: any, context: __SerdeContext): MemberDataSourceConfiguration => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    DataSources: [, (_: any) => de_DataSourceConfigurationsResult(_, context), `dataSources`],
    Features: [, (_: any) => de_MemberFeaturesConfigurationsResults(_, context), `features`],
  }) as any;
};

/**
 * deserializeAws_restJson1MemberDataSourceConfigurations
 */
const de_MemberDataSourceConfigurations = (output: any, context: __SerdeContext): MemberDataSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    AdditionalConfiguration: [
      ,
      (_: any) => de_MemberAdditionalConfigurationResults(_, context),
      `additionalConfiguration`,
    ],
    Name: [, __expectString, `name`],
    Status: [, __expectString, `status`],
    UpdatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `updatedAt`],
  }) as any;
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
      return de_Member(entry, context);
    });
  return retVal;
};

// de_MemoryRegionsList omitted.

// de_Neq omitted.

/**
 * deserializeAws_restJson1NetworkConnectionAction
 */
const de_NetworkConnectionAction = (output: any, context: __SerdeContext): NetworkConnectionAction => {
  return take(output, {
    Blocked: [, __expectBoolean, `blocked`],
    ConnectionDirection: [, __expectString, `connectionDirection`],
    LocalIpDetails: [, (_: any) => de_LocalIpDetails(_, context), `localIpDetails`],
    LocalPortDetails: [, (_: any) => de_LocalPortDetails(_, context), `localPortDetails`],
    Protocol: [, __expectString, `protocol`],
    RemoteIpDetails: [, (_: any) => de_RemoteIpDetails(_, context), `remoteIpDetails`],
    RemotePortDetails: [, (_: any) => de_RemotePortDetails(_, context), `remotePortDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return take(output, {
    Ipv6Addresses: [, _json, `ipv6Addresses`],
    NetworkInterfaceId: [, __expectString, `networkInterfaceId`],
    PrivateDnsName: [, __expectString, `privateDnsName`],
    PrivateIpAddress: [, __expectString, `privateIpAddress`],
    PrivateIpAddresses: [, (_: any) => de_PrivateIpAddresses(_, context), `privateIpAddresses`],
    PublicDnsName: [, __expectString, `publicDnsName`],
    PublicIp: [, __expectString, `publicIp`],
    SecurityGroups: [, (_: any) => de_SecurityGroups(_, context), `securityGroups`],
    SubnetId: [, __expectString, `subnetId`],
    VpcId: [, __expectString, `vpcId`],
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

// de_NotEquals omitted.

/**
 * deserializeAws_restJson1Organization
 */
const de_Organization = (output: any, context: __SerdeContext): Organization => {
  return take(output, {
    Asn: [, __expectString, `asn`],
    AsnOrg: [, __expectString, `asnOrg`],
    Isp: [, __expectString, `isp`],
    Org: [, __expectString, `org`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationAdditionalConfigurationResult
 */
const de_OrganizationAdditionalConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationAdditionalConfigurationResult => {
  return take(output, {
    AutoEnable: [, __expectString, `autoEnable`],
    Name: [, __expectString, `name`],
  }) as any;
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
  return take(output, {
    Kubernetes: [, (_: any) => de_OrganizationKubernetesConfigurationResult(_, context), `kubernetes`],
    MalwareProtection: [
      ,
      (_: any) => de_OrganizationMalwareProtectionConfigurationResult(_, context),
      `malwareProtection`,
    ],
    S3Logs: [, (_: any) => de_OrganizationS3LogsConfigurationResult(_, context), `s3Logs`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationEbsVolumesResult
 */
const de_OrganizationEbsVolumesResult = (output: any, context: __SerdeContext): OrganizationEbsVolumesResult => {
  return take(output, {
    AutoEnable: [, __expectBoolean, `autoEnable`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationFeatureConfigurationResult
 */
const de_OrganizationFeatureConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationFeatureConfigurationResult => {
  return take(output, {
    AdditionalConfiguration: [
      ,
      (_: any) => de_OrganizationAdditionalConfigurationResults(_, context),
      `additionalConfiguration`,
    ],
    AutoEnable: [, __expectString, `autoEnable`],
    Name: [, __expectString, `name`],
  }) as any;
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
  return take(output, {
    AutoEnable: [, __expectBoolean, `autoEnable`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationKubernetesConfigurationResult
 */
const de_OrganizationKubernetesConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationKubernetesConfigurationResult => {
  return take(output, {
    AuditLogs: [, (_: any) => de_OrganizationKubernetesAuditLogsConfigurationResult(_, context), `auditLogs`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationMalwareProtectionConfigurationResult
 */
const de_OrganizationMalwareProtectionConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationMalwareProtectionConfigurationResult => {
  return take(output, {
    ScanEc2InstanceWithFindings: [
      ,
      (_: any) => de_OrganizationScanEc2InstanceWithFindingsResult(_, context),
      `scanEc2InstanceWithFindings`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationS3LogsConfigurationResult
 */
const de_OrganizationS3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationS3LogsConfigurationResult => {
  return take(output, {
    AutoEnable: [, __expectBoolean, `autoEnable`],
  }) as any;
};

/**
 * deserializeAws_restJson1OrganizationScanEc2InstanceWithFindingsResult
 */
const de_OrganizationScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): OrganizationScanEc2InstanceWithFindingsResult => {
  return take(output, {
    EbsVolumes: [, (_: any) => de_OrganizationEbsVolumesResult(_, context), `ebsVolumes`],
  }) as any;
};

/**
 * deserializeAws_restJson1Owner
 */
const de_Owner = (output: any, context: __SerdeContext): Owner => {
  return take(output, {
    Id: [, __expectString, `id`],
  }) as any;
};

/**
 * deserializeAws_restJson1PermissionConfiguration
 */
const de_PermissionConfiguration = (output: any, context: __SerdeContext): PermissionConfiguration => {
  return take(output, {
    AccountLevelPermissions: [, (_: any) => de_AccountLevelPermissions(_, context), `accountLevelPermissions`],
    BucketLevelPermissions: [, (_: any) => de_BucketLevelPermissions(_, context), `bucketLevelPermissions`],
  }) as any;
};

/**
 * deserializeAws_restJson1PortProbeAction
 */
const de_PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return take(output, {
    Blocked: [, __expectBoolean, `blocked`],
    PortProbeDetails: [, (_: any) => de_PortProbeDetails(_, context), `portProbeDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1PortProbeDetail
 */
const de_PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return take(output, {
    LocalIpDetails: [, (_: any) => de_LocalIpDetails(_, context), `localIpDetails`],
    LocalPortDetails: [, (_: any) => de_LocalPortDetails(_, context), `localPortDetails`],
    RemoteIpDetails: [, (_: any) => de_RemoteIpDetails(_, context), `remoteIpDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1PortProbeDetails
 */
const de_PortProbeDetails = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PortProbeDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrivateIpAddressDetails
 */
const de_PrivateIpAddressDetails = (output: any, context: __SerdeContext): PrivateIpAddressDetails => {
  return take(output, {
    PrivateDnsName: [, __expectString, `privateDnsName`],
    PrivateIpAddress: [, __expectString, `privateIpAddress`],
  }) as any;
};

/**
 * deserializeAws_restJson1PrivateIpAddresses
 */
const de_PrivateIpAddresses = (output: any, context: __SerdeContext): PrivateIpAddressDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PrivateIpAddressDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProcessDetails
 */
const de_ProcessDetails = (output: any, context: __SerdeContext): ProcessDetails => {
  return take(output, {
    Euid: [, __expectInt32, `euid`],
    ExecutablePath: [, __expectString, `executablePath`],
    ExecutableSha256: [, __expectString, `executableSha256`],
    Lineage: [, (_: any) => de_Lineage(_, context), `lineage`],
    Name: [, __expectString, `name`],
    NamespacePid: [, __expectInt32, `namespacePid`],
    ParentUuid: [, __expectString, `parentUuid`],
    Pid: [, __expectInt32, `pid`],
    Pwd: [, __expectString, `pwd`],
    StartTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `startTime`],
    User: [, __expectString, `user`],
    UserId: [, __expectInt32, `userId`],
    Uuid: [, __expectString, `uuid`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProductCode
 */
const de_ProductCode = (output: any, context: __SerdeContext): ProductCode => {
  return take(output, {
    Code: [, __expectString, `productCodeId`],
    ProductType: [, __expectString, `productCodeType`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProductCodes
 */
const de_ProductCodes = (output: any, context: __SerdeContext): ProductCode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductCode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PublicAccess
 */
const de_PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return take(output, {
    EffectivePermission: [, __expectString, `effectivePermission`],
    PermissionConfiguration: [, (_: any) => de_PermissionConfiguration(_, context), `permissionConfiguration`],
  }) as any;
};

/**
 * deserializeAws_restJson1RdsDbInstanceDetails
 */
const de_RdsDbInstanceDetails = (output: any, context: __SerdeContext): RdsDbInstanceDetails => {
  return take(output, {
    DbClusterIdentifier: [, __expectString, `dbClusterIdentifier`],
    DbInstanceArn: [, __expectString, `dbInstanceArn`],
    DbInstanceIdentifier: [, __expectString, `dbInstanceIdentifier`],
    Engine: [, __expectString, `engine`],
    EngineVersion: [, __expectString, `engineVersion`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1RdsDbUserDetails
 */
const de_RdsDbUserDetails = (output: any, context: __SerdeContext): RdsDbUserDetails => {
  return take(output, {
    Application: [, __expectString, `application`],
    AuthMethod: [, __expectString, `authMethod`],
    Database: [, __expectString, `database`],
    Ssl: [, __expectString, `ssl`],
    User: [, __expectString, `user`],
  }) as any;
};

/**
 * deserializeAws_restJson1RdsLoginAttemptAction
 */
const de_RdsLoginAttemptAction = (output: any, context: __SerdeContext): RdsLoginAttemptAction => {
  return take(output, {
    LoginAttributes: (_: any) => de_LoginAttributes(_, context),
    RemoteIpDetails: [, (_: any) => de_RemoteIpDetails(_, context), `remoteIpDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1RemoteAccountDetails
 */
const de_RemoteAccountDetails = (output: any, context: __SerdeContext): RemoteAccountDetails => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    Affiliated: [, __expectBoolean, `affiliated`],
  }) as any;
};

/**
 * deserializeAws_restJson1RemoteIpDetails
 */
const de_RemoteIpDetails = (output: any, context: __SerdeContext): RemoteIpDetails => {
  return take(output, {
    City: [, (_: any) => de_City(_, context), `city`],
    Country: [, (_: any) => de_Country(_, context), `country`],
    GeoLocation: [, (_: any) => de_GeoLocation(_, context), `geoLocation`],
    IpAddressV4: [, __expectString, `ipAddressV4`],
    Organization: [, (_: any) => de_Organization(_, context), `organization`],
  }) as any;
};

/**
 * deserializeAws_restJson1RemotePortDetails
 */
const de_RemotePortDetails = (output: any, context: __SerdeContext): RemotePortDetails => {
  return take(output, {
    Port: [, __expectInt32, `port`],
    PortName: [, __expectString, `portName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    AccessKeyDetails: [, (_: any) => de_AccessKeyDetails(_, context), `accessKeyDetails`],
    ContainerDetails: [, (_: any) => de_Container(_, context), `containerDetails`],
    EbsVolumeDetails: [, (_: any) => de_EbsVolumeDetails(_, context), `ebsVolumeDetails`],
    EcsClusterDetails: [, (_: any) => de_EcsClusterDetails(_, context), `ecsClusterDetails`],
    EksClusterDetails: [, (_: any) => de_EksClusterDetails(_, context), `eksClusterDetails`],
    InstanceDetails: [, (_: any) => de_InstanceDetails(_, context), `instanceDetails`],
    KubernetesDetails: [, (_: any) => de_KubernetesDetails(_, context), `kubernetesDetails`],
    LambdaDetails: [, (_: any) => de_LambdaDetails(_, context), `lambdaDetails`],
    RdsDbInstanceDetails: [, (_: any) => de_RdsDbInstanceDetails(_, context), `rdsDbInstanceDetails`],
    RdsDbUserDetails: [, (_: any) => de_RdsDbUserDetails(_, context), `rdsDbUserDetails`],
    ResourceType: [, __expectString, `resourceType`],
    S3BucketDetails: [, (_: any) => de_S3BucketDetails(_, context), `s3BucketDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return take(output, {
    InstanceArn: [, __expectString, `instanceArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1RuntimeContext
 */
const de_RuntimeContext = (output: any, context: __SerdeContext): RuntimeContext => {
  return take(output, {
    AddressFamily: [, __expectString, `addressFamily`],
    FileSystemType: [, __expectString, `fileSystemType`],
    Flags: [, _json, `flags`],
    IanaProtocolNumber: [, __expectInt32, `ianaProtocolNumber`],
    LdPreloadValue: [, __expectString, `ldPreloadValue`],
    LibraryPath: [, __expectString, `libraryPath`],
    MemoryRegions: [, _json, `memoryRegions`],
    ModifiedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `modifiedAt`],
    ModifyingProcess: [, (_: any) => de_ProcessDetails(_, context), `modifyingProcess`],
    ModuleFilePath: [, __expectString, `moduleFilePath`],
    ModuleName: [, __expectString, `moduleName`],
    ModuleSha256: [, __expectString, `moduleSha256`],
    MountSource: [, __expectString, `mountSource`],
    MountTarget: [, __expectString, `mountTarget`],
    ReleaseAgentPath: [, __expectString, `releaseAgentPath`],
    RuncBinaryPath: [, __expectString, `runcBinaryPath`],
    ScriptPath: [, __expectString, `scriptPath`],
    ShellHistoryFilePath: [, __expectString, `shellHistoryFilePath`],
    SocketPath: [, __expectString, `socketPath`],
    TargetProcess: [, (_: any) => de_ProcessDetails(_, context), `targetProcess`],
  }) as any;
};

/**
 * deserializeAws_restJson1RuntimeDetails
 */
const de_RuntimeDetails = (output: any, context: __SerdeContext): RuntimeDetails => {
  return take(output, {
    Context: [, (_: any) => de_RuntimeContext(_, context), `context`],
    Process: [, (_: any) => de_ProcessDetails(_, context), `process`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketDetail
 */
const de_S3BucketDetail = (output: any, context: __SerdeContext): S3BucketDetail => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    DefaultServerSideEncryption: [
      ,
      (_: any) => de_DefaultServerSideEncryption(_, context),
      `defaultServerSideEncryption`,
    ],
    Name: [, __expectString, `name`],
    Owner: [, (_: any) => de_Owner(_, context), `owner`],
    PublicAccess: [, (_: any) => de_PublicAccess(_, context), `publicAccess`],
    Tags: [, (_: any) => de_Tags(_, context), `tags`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketDetails
 */
const de_S3BucketDetails = (output: any, context: __SerdeContext): S3BucketDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3BucketDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3LogsConfigurationResult
 */
const de_S3LogsConfigurationResult = (output: any, context: __SerdeContext): S3LogsConfigurationResult => {
  return take(output, {
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scan
 */
const de_Scan = (output: any, context: __SerdeContext): Scan => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    AdminDetectorId: [, __expectString, `adminDetectorId`],
    AttachedVolumes: [, (_: any) => de_VolumeDetails(_, context), `attachedVolumes`],
    DetectorId: [, __expectString, `detectorId`],
    FailureReason: [, __expectString, `failureReason`],
    FileCount: [, __expectLong, `fileCount`],
    ResourceDetails: [, (_: any) => de_ResourceDetails(_, context), `resourceDetails`],
    ScanEndTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `scanEndTime`],
    ScanId: [, __expectString, `scanId`],
    ScanResultDetails: [, (_: any) => de_ScanResultDetails(_, context), `scanResultDetails`],
    ScanStartTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `scanStartTime`],
    ScanStatus: [, __expectString, `scanStatus`],
    ScanType: [, __expectString, `scanType`],
    TotalBytes: [, __expectLong, `totalBytes`],
    TriggerDetails: [, (_: any) => de_TriggerDetails(_, context), `triggerDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanCondition
 */
const de_ScanCondition = (output: any, context: __SerdeContext): ScanCondition => {
  return take(output, {
    MapEquals: [, (_: any) => de_MapEquals(_, context), `mapEquals`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanConditionPair
 */
const de_ScanConditionPair = (output: any, context: __SerdeContext): ScanConditionPair => {
  return take(output, {
    Key: [, __expectString, `key`],
    Value: [, __expectString, `value`],
  }) as any;
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
  return take(output, {
    HighestSeverityThreatDetails: [
      ,
      (_: any) => de_HighestSeverityThreatDetails(_, context),
      `highestSeverityThreatDetails`,
    ],
    ScannedItemCount: [, (_: any) => de_ScannedItemCount(_, context), `scannedItemCount`],
    ThreatDetectedByName: [, (_: any) => de_ThreatDetectedByName(_, context), `threatDetectedByName`],
    ThreatsDetectedItemCount: [, (_: any) => de_ThreatsDetectedItemCount(_, context), `threatsDetectedItemCount`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanEc2InstanceWithFindingsResult
 */
const de_ScanEc2InstanceWithFindingsResult = (
  output: any,
  context: __SerdeContext
): ScanEc2InstanceWithFindingsResult => {
  return take(output, {
    EbsVolumes: [, (_: any) => de_EbsVolumesResult(_, context), `ebsVolumes`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanFilePath
 */
const de_ScanFilePath = (output: any, context: __SerdeContext): ScanFilePath => {
  return take(output, {
    FileName: [, __expectString, `fileName`],
    FilePath: [, __expectString, `filePath`],
    Hash: [, __expectString, `hash`],
    VolumeArn: [, __expectString, `volumeArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScannedItemCount
 */
const de_ScannedItemCount = (output: any, context: __SerdeContext): ScannedItemCount => {
  return take(output, {
    Files: [, __expectInt32, `files`],
    TotalGb: [, __expectInt32, `totalGb`],
    Volumes: [, __expectInt32, `volumes`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanResourceCriteria
 */
const de_ScanResourceCriteria = (output: any, context: __SerdeContext): ScanResourceCriteria => {
  return take(output, {
    Exclude: [, (_: any) => de_ScanCriterion(_, context), `exclude`],
    Include: [, (_: any) => de_ScanCriterion(_, context), `include`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanResultDetails
 */
const de_ScanResultDetails = (output: any, context: __SerdeContext): ScanResultDetails => {
  return take(output, {
    ScanResult: [, __expectString, `scanResult`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scans
 */
const de_Scans = (output: any, context: __SerdeContext): Scan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Scan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScanThreatName
 */
const de_ScanThreatName = (output: any, context: __SerdeContext): ScanThreatName => {
  return take(output, {
    FilePaths: [, (_: any) => de_FilePaths(_, context), `filePaths`],
    ItemCount: [, __expectInt32, `itemCount`],
    Name: [, __expectString, `name`],
    Severity: [, __expectString, `severity`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScanThreatNames
 */
const de_ScanThreatNames = (output: any, context: __SerdeContext): ScanThreatName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScanThreatName(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityContext
 */
const de_SecurityContext = (output: any, context: __SerdeContext): SecurityContext => {
  return take(output, {
    Privileged: [, __expectBoolean, `privileged`],
  }) as any;
};

/**
 * deserializeAws_restJson1SecurityGroup
 */
const de_SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return take(output, {
    GroupId: [, __expectString, `groupId`],
    GroupName: [, __expectString, `groupName`],
  }) as any;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    Action: [, (_: any) => de_Action(_, context), `action`],
    AdditionalInfo: [, (_: any) => de_ServiceAdditionalInfo(_, context), `additionalInfo`],
    Archived: [, __expectBoolean, `archived`],
    Count: [, __expectInt32, `count`],
    DetectorId: [, __expectString, `detectorId`],
    EbsVolumeScanDetails: [, (_: any) => de_EbsVolumeScanDetails(_, context), `ebsVolumeScanDetails`],
    EventFirstSeen: [, __expectString, `eventFirstSeen`],
    EventLastSeen: [, __expectString, `eventLastSeen`],
    Evidence: [, (_: any) => de_Evidence(_, context), `evidence`],
    FeatureName: [, __expectString, `featureName`],
    ResourceRole: [, __expectString, `resourceRole`],
    RuntimeDetails: [, (_: any) => de_RuntimeDetails(_, context), `runtimeDetails`],
    ServiceName: [, __expectString, `serviceName`],
    UserFeedback: [, __expectString, `userFeedback`],
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceAdditionalInfo
 */
const de_ServiceAdditionalInfo = (output: any, context: __SerdeContext): ServiceAdditionalInfo => {
  return take(output, {
    Type: [, __expectString, `type`],
    Value: [, __expectString, `value`],
  }) as any;
};

// de_SessionNameList omitted.

// de_SourceIps omitted.

// de_Sources omitted.

// de_SubnetIds omitted.

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return take(output, {
    Key: [, __expectString, `key`],
    Value: [, __expectString, `value`],
  }) as any;
};

// de_TagMap omitted.

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreatDetectedByName
 */
const de_ThreatDetectedByName = (output: any, context: __SerdeContext): ThreatDetectedByName => {
  return take(output, {
    ItemCount: [, __expectInt32, `itemCount`],
    Shortened: [, __expectBoolean, `shortened`],
    ThreatNames: [, (_: any) => de_ScanThreatNames(_, context), `threatNames`],
    UniqueThreatNameCount: [, __expectInt32, `uniqueThreatNameCount`],
  }) as any;
};

/**
 * deserializeAws_restJson1ThreatIntelligenceDetail
 */
const de_ThreatIntelligenceDetail = (output: any, context: __SerdeContext): ThreatIntelligenceDetail => {
  return take(output, {
    ThreatListName: [, __expectString, `threatListName`],
    ThreatNames: [, _json, `threatNames`],
  }) as any;
};

/**
 * deserializeAws_restJson1ThreatIntelligenceDetails
 */
const de_ThreatIntelligenceDetails = (output: any, context: __SerdeContext): ThreatIntelligenceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThreatIntelligenceDetail(entry, context);
    });
  return retVal;
};

// de_ThreatIntelSetIds omitted.

// de_ThreatNames omitted.

/**
 * deserializeAws_restJson1ThreatsDetectedItemCount
 */
const de_ThreatsDetectedItemCount = (output: any, context: __SerdeContext): ThreatsDetectedItemCount => {
  return take(output, {
    Files: [, __expectInt32, `files`],
  }) as any;
};

/**
 * deserializeAws_restJson1Total
 */
const de_Total = (output: any, context: __SerdeContext): Total => {
  return take(output, {
    Amount: [, __expectString, `amount`],
    Unit: [, __expectString, `unit`],
  }) as any;
};

/**
 * deserializeAws_restJson1TriggerDetails
 */
const de_TriggerDetails = (output: any, context: __SerdeContext): TriggerDetails => {
  return take(output, {
    Description: [, __expectString, `description`],
    GuardDutyFindingId: [, __expectString, `guardDutyFindingId`],
  }) as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccount
 */
const de_UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    Result: [, __expectString, `result`],
  }) as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccounts
 */
const de_UnprocessedAccounts = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnprocessedAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnprocessedDataSourcesResult
 */
const de_UnprocessedDataSourcesResult = (output: any, context: __SerdeContext): UnprocessedDataSourcesResult => {
  return take(output, {
    MalwareProtection: [, (_: any) => de_MalwareProtectionConfigurationResult(_, context), `malwareProtection`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageAccountResult
 */
const de_UsageAccountResult = (output: any, context: __SerdeContext): UsageAccountResult => {
  return take(output, {
    AccountId: [, __expectString, `accountId`],
    Total: [, (_: any) => de_Total(_, context), `total`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageAccountResultList
 */
const de_UsageAccountResultList = (output: any, context: __SerdeContext): UsageAccountResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageAccountResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageDataSourceResult
 */
const de_UsageDataSourceResult = (output: any, context: __SerdeContext): UsageDataSourceResult => {
  return take(output, {
    DataSource: [, __expectString, `dataSource`],
    Total: [, (_: any) => de_Total(_, context), `total`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageDataSourceResultList
 */
const de_UsageDataSourceResultList = (output: any, context: __SerdeContext): UsageDataSourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageDataSourceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageFeatureResult
 */
const de_UsageFeatureResult = (output: any, context: __SerdeContext): UsageFeatureResult => {
  return take(output, {
    Feature: [, __expectString, `feature`],
    Total: [, (_: any) => de_Total(_, context), `total`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageFeatureResultList
 */
const de_UsageFeatureResultList = (output: any, context: __SerdeContext): UsageFeatureResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageFeatureResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageResourceResult
 */
const de_UsageResourceResult = (output: any, context: __SerdeContext): UsageResourceResult => {
  return take(output, {
    Resource: [, __expectString, `resource`],
    Total: [, (_: any) => de_Total(_, context), `total`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageResourceResultList
 */
const de_UsageResourceResultList = (output: any, context: __SerdeContext): UsageResourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageResourceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageStatistics
 */
const de_UsageStatistics = (output: any, context: __SerdeContext): UsageStatistics => {
  return take(output, {
    SumByAccount: [, (_: any) => de_UsageAccountResultList(_, context), `sumByAccount`],
    SumByDataSource: [, (_: any) => de_UsageDataSourceResultList(_, context), `sumByDataSource`],
    SumByFeature: [, (_: any) => de_UsageFeatureResultList(_, context), `sumByFeature`],
    SumByResource: [, (_: any) => de_UsageResourceResultList(_, context), `sumByResource`],
    TopResources: [, (_: any) => de_UsageResourceResultList(_, context), `topResources`],
  }) as any;
};

/**
 * deserializeAws_restJson1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return take(output, {
    HostPath: [, (_: any) => de_HostPath(_, context), `hostPath`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1VolumeDetail
 */
const de_VolumeDetail = (output: any, context: __SerdeContext): VolumeDetail => {
  return take(output, {
    DeviceName: [, __expectString, `deviceName`],
    EncryptionType: [, __expectString, `encryptionType`],
    KmsKeyArn: [, __expectString, `kmsKeyArn`],
    SnapshotArn: [, __expectString, `snapshotArn`],
    VolumeArn: [, __expectString, `volumeArn`],
    VolumeSizeInGB: [, __expectInt32, `volumeSizeInGB`],
    VolumeType: [, __expectString, `volumeType`],
  }) as any;
};

/**
 * deserializeAws_restJson1VolumeDetails
 */
const de_VolumeDetails = (output: any, context: __SerdeContext): VolumeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VolumeDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VolumeMount
 */
const de_VolumeMount = (output: any, context: __SerdeContext): VolumeMount => {
  return take(output, {
    MountPath: [, __expectString, `mountPath`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1VolumeMounts
 */
const de_VolumeMounts = (output: any, context: __SerdeContext): VolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Volume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return take(output, {
    SecurityGroups: [, (_: any) => de_SecurityGroups(_, context), `securityGroups`],
    SubnetIds: [, _json, `subnetIds`],
    VpcId: [, __expectString, `vpcId`],
  }) as any;
};

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
