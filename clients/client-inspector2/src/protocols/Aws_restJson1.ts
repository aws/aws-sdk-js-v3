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
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateMemberCommandInput, AssociateMemberCommandOutput } from "../commands/AssociateMemberCommand";
import {
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "../commands/BatchGetAccountStatusCommand";
import {
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "../commands/BatchGetFreeTrialInfoCommand";
import {
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "../commands/CancelFindingsReportCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "../commands/CreateFilterCommand";
import {
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "../commands/CreateFindingsReportCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "../commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { DisableCommandInput, DisableCommandOutput } from "../commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "../commands/DisableDelegatedAdminAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "../commands/DisassociateMemberCommand";
import { EnableCommandInput, EnableCommandOutput } from "../commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "../commands/EnableDelegatedAdminAccountCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import {
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "../commands/GetDelegatedAdminAccountCommand";
import {
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "../commands/GetFindingsReportStatusCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import {
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "../commands/ListAccountPermissionsCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "../commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "../commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "../commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "../commands/ListFindingAggregationsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput } from "../commands/ListUsageTotalsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "../commands/UpdateConfigurationCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "../commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import { Inspector2ServiceException as __BaseException } from "../models/Inspector2ServiceException";
import {
  AccessDeniedException,
  Account,
  AccountAggregation,
  AccountAggregationResponse,
  AccountState,
  AggregationRequest,
  AggregationResponse,
  AmiAggregation,
  AmiAggregationResponse,
  Architecture,
  AutoEnable,
  AwsEc2InstanceDetails,
  AwsEcrContainerAggregation,
  AwsEcrContainerAggregationResponse,
  AwsEcrContainerImageDetails,
  AwsLambdaFunctionDetails,
  BadRequestException,
  ConflictException,
  Counts,
  CoverageFilterCriteria,
  CoverageMapFilter,
  CoverageStringFilter,
  CoveredResource,
  CvssScore,
  CvssScoreAdjustment,
  CvssScoreDetails,
  DateFilter,
  DelegatedAdmin,
  DelegatedAdminAccount,
  Destination,
  Ec2InstanceAggregation,
  Ec2InstanceAggregationResponse,
  Ec2Metadata,
  EcrConfiguration,
  EcrConfigurationState,
  EcrContainerImageMetadata,
  EcrRepositoryMetadata,
  EcrRescanDurationState,
  ExploitabilityDetails,
  FailedAccount,
  Filter,
  FilterCriteria,
  Finding,
  FindingTypeAggregation,
  FindingTypeAggregationResponse,
  FreeTrialAccountInfo,
  FreeTrialInfo,
  FreeTrialInfoError,
  ImageLayerAggregation,
  ImageLayerAggregationResponse,
  InspectorScoreDetails,
  InternalServerException,
  LambdaFunctionAggregation,
  LambdaFunctionAggregationResponse,
  LambdaFunctionMetadata,
  LambdaLayerAggregation,
  LambdaLayerAggregationResponse,
  LambdaVpcConfig,
  MapFilter,
  Member,
  NetworkPath,
  NetworkReachabilityDetails,
  NumberFilter,
  PackageAggregation,
  PackageAggregationResponse,
  PackageFilter,
  PackageVulnerabilityDetails,
  Permission,
  PortRange,
  PortRangeFilter,
  Recommendation,
  Remediation,
  RepositoryAggregation,
  RepositoryAggregationResponse,
  Resource,
  ResourceDetails,
  ResourceNotFoundException,
  ResourceScanMetadata,
  ResourceScanType,
  ResourceState,
  ResourceStatus,
  ScanStatus,
  ServiceQuotaExceededException,
  SeverityCounts,
  SortCriteria,
  State,
  Step,
  StringFilter,
  ThrottlingException,
  TitleAggregation,
  TitleAggregationResponse,
  Usage,
  UsageTotal,
  ValidationException,
  ValidationExceptionField,
  VulnerablePackage,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateMemberCommand
 */
export const se_AssociateMemberCommand = async (
  input: AssociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/associate";
  let body: any;
  body = JSON.stringify({
    ...(input.accountId != null && { accountId: input.accountId }),
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
 * serializeAws_restJson1BatchGetAccountStatusCommand
 */
export const se_BatchGetAccountStatusCommand = async (
  input: BatchGetAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/status/batch/get";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_AccountIdSet(input.accountIds, context) }),
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
 * serializeAws_restJson1BatchGetFreeTrialInfoCommand
 */
export const se_BatchGetFreeTrialInfoCommand = async (
  input: BatchGetFreeTrialInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/freetrialinfo/batchget";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_MeteringAccountIdList(input.accountIds, context) }),
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
 * serializeAws_restJson1CancelFindingsReportCommand
 */
export const se_CancelFindingsReportCommand = async (
  input: CancelFindingsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reporting/cancel";
  let body: any;
  body = JSON.stringify({
    ...(input.reportId != null && { reportId: input.reportId }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/filters/create";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    ...(input.description != null && { description: input.description }),
    ...(input.filterCriteria != null && { filterCriteria: se_FilterCriteria(input.filterCriteria, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateFindingsReportCommand
 */
export const se_CreateFindingsReportCommand = async (
  input: CreateFindingsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reporting/create";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria != null && { filterCriteria: se_FilterCriteria(input.filterCriteria, context) }),
    ...(input.reportFormat != null && { reportFormat: input.reportFormat }),
    ...(input.s3Destination != null && { s3Destination: se_Destination(input.s3Destination, context) }),
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
 * serializeAws_restJson1DeleteFilterCommand
 */
export const se_DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/filters/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organizationconfiguration/describe";
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
 * serializeAws_restJson1DisableCommand
 */
export const se_DisableCommand = async (
  input: DisableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_AccountIdSet(input.accountIds, context) }),
    ...(input.resourceTypes != null && { resourceTypes: se_DisableResourceTypeList(input.resourceTypes, context) }),
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
 * serializeAws_restJson1DisableDelegatedAdminAccountCommand
 */
export const se_DisableDelegatedAdminAccountCommand = async (
  input: DisableDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegatedadminaccounts/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.delegatedAdminAccountId != null && { delegatedAdminAccountId: input.delegatedAdminAccountId }),
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
 * serializeAws_restJson1DisassociateMemberCommand
 */
export const se_DisassociateMemberCommand = async (
  input: DisassociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate";
  let body: any;
  body = JSON.stringify({
    ...(input.accountId != null && { accountId: input.accountId }),
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
 * serializeAws_restJson1EnableCommand
 */
export const se_EnableCommand = async (input: EnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_AccountIdSet(input.accountIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.resourceTypes != null && { resourceTypes: se_EnableResourceTypeList(input.resourceTypes, context) }),
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
 * serializeAws_restJson1EnableDelegatedAdminAccountCommand
 */
export const se_EnableDelegatedAdminAccountCommand = async (
  input: EnableDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegatedadminaccounts/enable";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.delegatedAdminAccountId != null && { delegatedAdminAccountId: input.delegatedAdminAccountId }),
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
 * serializeAws_restJson1GetConfigurationCommand
 */
export const se_GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/get";
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
 * serializeAws_restJson1GetDelegatedAdminAccountCommand
 */
export const se_GetDelegatedAdminAccountCommand = async (
  input: GetDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegatedadminaccounts/get";
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
 * serializeAws_restJson1GetFindingsReportStatusCommand
 */
export const se_GetFindingsReportStatusCommand = async (
  input: GetFindingsReportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reporting/status/get";
  let body: any;
  body = JSON.stringify({
    ...(input.reportId != null && { reportId: input.reportId }),
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
 * serializeAws_restJson1GetMemberCommand
 */
export const se_GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/get";
  let body: any;
  body = JSON.stringify({
    ...(input.accountId != null && { accountId: input.accountId }),
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
 * serializeAws_restJson1ListAccountPermissionsCommand
 */
export const se_ListAccountPermissionsCommand = async (
  input: ListAccountPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accountpermissions/list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.service != null && { service: input.service }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/coverage/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria != null && { filterCriteria: se_CoverageFilterCriteria(input.filterCriteria, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListCoverageStatisticsCommand
 */
export const se_ListCoverageStatisticsCommand = async (
  input: ListCoverageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/coverage/statistics/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria != null && { filterCriteria: se_CoverageFilterCriteria(input.filterCriteria, context) }),
    ...(input.groupBy != null && { groupBy: input.groupBy }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListDelegatedAdminAccountsCommand
 */
export const se_ListDelegatedAdminAccountsCommand = async (
  input: ListDelegatedAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegatedadminaccounts/list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListFiltersCommand
 */
export const se_ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/filters/list";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    ...(input.arns != null && { arns: se_FilterArnList(input.arns, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListFindingAggregationsCommand
 */
export const se_ListFindingAggregationsCommand = async (
  input: ListFindingAggregationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/aggregation/list";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_StringFilterList(input.accountIds, context) }),
    ...(input.aggregationRequest != null && {
      aggregationRequest: se_AggregationRequest(input.aggregationRequest, context),
    }),
    ...(input.aggregationType != null && { aggregationType: input.aggregationType }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria != null && { filterCriteria: se_FilterCriteria(input.filterCriteria, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && { sortCriteria: se_SortCriteria(input.sortCriteria, context) }),
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
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.onlyAssociated != null && { onlyAssociated: input.onlyAssociated }),
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
 * serializeAws_restJson1ListUsageTotalsCommand
 */
export const se_ListUsageTotalsCommand = async (
  input: ListUsageTotalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage/list";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se_UsageAccountIdList(input.accountIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateConfigurationCommand
 */
export const se_UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/update";
  let body: any;
  body = JSON.stringify({
    ...(input.ecrConfiguration != null && { ecrConfiguration: se_EcrConfiguration(input.ecrConfiguration, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/filters/update";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    ...(input.description != null && { description: input.description }),
    ...(input.filterArn != null && { filterArn: input.filterArn }),
    ...(input.filterCriteria != null && { filterCriteria: se_FilterCriteria(input.filterCriteria, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.reason != null && { reason: input.reason }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organizationconfiguration/update";
  let body: any;
  body = JSON.stringify({
    ...(input.autoEnable != null && { autoEnable: se_AutoEnable(input.autoEnable, context) }),
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
 * deserializeAws_restJson1AssociateMemberCommand
 */
export const de_AssociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountId != null) {
    contents.accountId = __expectString(data.accountId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateMemberCommandError
 */
const de_AssociateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchGetAccountStatusCommand
 */
export const de_BatchGetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetAccountStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = de_AccountStateList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = de_FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAccountStatusCommandError
 */
const de_BatchGetAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchGetFreeTrialInfoCommand
 */
export const de_BatchGetFreeTrialInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFreeTrialInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetFreeTrialInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = de_FreeTrialAccountInfoList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = de_FreeTrialInfoErrorList(data.failedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFreeTrialInfoCommandError
 */
const de_BatchGetFreeTrialInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFreeTrialInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelFindingsReportCommand
 */
export const de_CancelFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelFindingsReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reportId != null) {
    contents.reportId = __expectString(data.reportId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelFindingsReportCommandError
 */
const de_CancelFindingsReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFindingsReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.inspector2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.inspector2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateFindingsReportCommand
 */
export const de_CreateFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFindingsReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reportId != null) {
    contents.reportId = __expectString(data.reportId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFindingsReportCommandError
 */
const de_CreateFindingsReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.autoEnable = de_AutoEnable(data.autoEnable, context);
  }
  if (data.maxAccountLimitReached != null) {
    contents.maxAccountLimitReached = __expectBoolean(data.maxAccountLimitReached);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableCommand
 */
export const de_DisableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = de_AccountList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = de_FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableCommandError
 */
const de_DisableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableDelegatedAdminAccountCommand
 */
export const de_DisableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableDelegatedAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdminAccountId != null) {
    contents.delegatedAdminAccountId = __expectString(data.delegatedAdminAccountId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableDelegatedAdminAccountCommandError
 */
const de_DisableDelegatedAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDelegatedAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.inspector2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateMemberCommand
 */
export const de_DisassociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountId != null) {
    contents.accountId = __expectString(data.accountId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMemberCommandError
 */
const de_DisassociateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableCommand
 */
export const de_EnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = de_AccountList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = de_FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableCommandError
 */
const de_EnableCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<EnableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableDelegatedAdminAccountCommand
 */
export const de_EnableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableDelegatedAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdminAccountId != null) {
    contents.delegatedAdminAccountId = __expectString(data.delegatedAdminAccountId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableDelegatedAdminAccountCommandError
 */
const de_EnableDelegatedAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDelegatedAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.inspector2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfigurationCommand
 */
export const de_GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ecrConfiguration != null) {
    contents.ecrConfiguration = de_EcrConfigurationState(data.ecrConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationCommandError
 */
const de_GetConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDelegatedAdminAccountCommand
 */
export const de_GetDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDelegatedAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdmin != null) {
    contents.delegatedAdmin = de_DelegatedAdmin(data.delegatedAdmin, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDelegatedAdminAccountCommandError
 */
const de_GetDelegatedAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegatedAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetFindingsReportStatusCommand
 */
export const de_GetFindingsReportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsReportStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destination != null) {
    contents.destination = de_Destination(data.destination, context);
  }
  if (data.errorCode != null) {
    contents.errorCode = __expectString(data.errorCode);
  }
  if (data.errorMessage != null) {
    contents.errorMessage = __expectString(data.errorMessage);
  }
  if (data.filterCriteria != null) {
    contents.filterCriteria = de_FilterCriteria(data.filterCriteria, context);
  }
  if (data.reportId != null) {
    contents.reportId = __expectString(data.reportId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsReportStatusCommandError
 */
const de_GetFindingsReportStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMemberCommand
 */
export const de_GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member != null) {
    contents.member = de_Member(data.member, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMemberCommandError
 */
const de_GetMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAccountPermissionsCommand
 */
export const de_ListAccountPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccountPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = de_Permissions(data.permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountPermissionsCommandError
 */
const de_ListAccountPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.coveredResources != null) {
    contents.coveredResources = de_CoveredResources(data.coveredResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListCoverageStatisticsCommand
 */
export const de_ListCoverageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoverageStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.countsByGroup != null) {
    contents.countsByGroup = de_CountsList(data.countsByGroup, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.totalCounts != null) {
    contents.totalCounts = __expectLong(data.totalCounts);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoverageStatisticsCommandError
 */
const de_ListCoverageStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDelegatedAdminAccountsCommand
 */
export const de_ListDelegatedAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDelegatedAdminAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdminAccounts != null) {
    contents.delegatedAdminAccounts = de_DelegatedAdminAccountList(data.delegatedAdminAccounts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDelegatedAdminAccountsCommandError
 */
const de_ListDelegatedAdminAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdminAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.filters != null) {
    contents.filters = de_FilterList(data.filters, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListFindingAggregationsCommand
 */
export const de_ListFindingAggregationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFindingAggregationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregationType != null) {
    contents.aggregationType = __expectString(data.aggregationType);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.responses != null) {
    contents.responses = de_AggregationResponseList(data.responses, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingAggregationsCommandError
 */
const de_ListFindingAggregationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.findings != null) {
    contents.findings = de_FindingList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.members = de_MemberList(data.members, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.tags = de_TagMap(data.tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUsageTotalsCommand
 */
export const de_ListUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUsageTotalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.totals != null) {
    contents.totals = de_UsageTotalList(data.totals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUsageTotalsCommandError
 */
const de_ListUsageTotalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageTotalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.inspector2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigurationCommand
 */
export const de_UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationCommandError
 */
const de_UpdateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.autoEnable != null) {
    contents.autoEnable = de_AutoEnable(data.autoEnable, context);
  }
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fields != null) {
    contents.fields = de_ValidationExceptionFields(data.fields, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccountAggregation
 */
const se_AccountAggregation = (input: AccountAggregation, context: __SerdeContext): any => {
  return {
    ...(input.findingType != null && { findingType: input.findingType }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1AccountIdSet
 */
const se_AccountIdSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AggregationRequest
 */
const se_AggregationRequest = (input: AggregationRequest, context: __SerdeContext): any => {
  return AggregationRequest.visit(input, {
    accountAggregation: (value) => ({ accountAggregation: se_AccountAggregation(value, context) }),
    amiAggregation: (value) => ({ amiAggregation: se_AmiAggregation(value, context) }),
    awsEcrContainerAggregation: (value) => ({
      awsEcrContainerAggregation: se_AwsEcrContainerAggregation(value, context),
    }),
    ec2InstanceAggregation: (value) => ({ ec2InstanceAggregation: se_Ec2InstanceAggregation(value, context) }),
    findingTypeAggregation: (value) => ({ findingTypeAggregation: se_FindingTypeAggregation(value, context) }),
    imageLayerAggregation: (value) => ({ imageLayerAggregation: se_ImageLayerAggregation(value, context) }),
    lambdaFunctionAggregation: (value) => ({ lambdaFunctionAggregation: se_LambdaFunctionAggregation(value, context) }),
    lambdaLayerAggregation: (value) => ({ lambdaLayerAggregation: se_LambdaLayerAggregation(value, context) }),
    packageAggregation: (value) => ({ packageAggregation: se_PackageAggregation(value, context) }),
    repositoryAggregation: (value) => ({ repositoryAggregation: se_RepositoryAggregation(value, context) }),
    titleAggregation: (value) => ({ titleAggregation: se_TitleAggregation(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1AmiAggregation
 */
const se_AmiAggregation = (input: AmiAggregation, context: __SerdeContext): any => {
  return {
    ...(input.amis != null && { amis: se_StringFilterList(input.amis, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1AutoEnable
 */
const se_AutoEnable = (input: AutoEnable, context: __SerdeContext): any => {
  return {
    ...(input.ec2 != null && { ec2: input.ec2 }),
    ...(input.ecr != null && { ecr: input.ecr }),
    ...(input.lambda != null && { lambda: input.lambda }),
  };
};

/**
 * serializeAws_restJson1AwsEcrContainerAggregation
 */
const se_AwsEcrContainerAggregation = (input: AwsEcrContainerAggregation, context: __SerdeContext): any => {
  return {
    ...(input.architectures != null && { architectures: se_StringFilterList(input.architectures, context) }),
    ...(input.imageShas != null && { imageShas: se_StringFilterList(input.imageShas, context) }),
    ...(input.imageTags != null && { imageTags: se_StringFilterList(input.imageTags, context) }),
    ...(input.repositories != null && { repositories: se_StringFilterList(input.repositories, context) }),
    ...(input.resourceIds != null && { resourceIds: se_StringFilterList(input.resourceIds, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1CoverageFilterCriteria
 */
const se_CoverageFilterCriteria = (input: CoverageFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: se_CoverageStringFilterList(input.accountId, context) }),
    ...(input.ec2InstanceTags != null && { ec2InstanceTags: se_CoverageMapFilterList(input.ec2InstanceTags, context) }),
    ...(input.ecrImageTags != null && { ecrImageTags: se_CoverageStringFilterList(input.ecrImageTags, context) }),
    ...(input.ecrRepositoryName != null && {
      ecrRepositoryName: se_CoverageStringFilterList(input.ecrRepositoryName, context),
    }),
    ...(input.lambdaFunctionName != null && {
      lambdaFunctionName: se_CoverageStringFilterList(input.lambdaFunctionName, context),
    }),
    ...(input.lambdaFunctionRuntime != null && {
      lambdaFunctionRuntime: se_CoverageStringFilterList(input.lambdaFunctionRuntime, context),
    }),
    ...(input.lambdaFunctionTags != null && {
      lambdaFunctionTags: se_CoverageMapFilterList(input.lambdaFunctionTags, context),
    }),
    ...(input.resourceId != null && { resourceId: se_CoverageStringFilterList(input.resourceId, context) }),
    ...(input.resourceType != null && { resourceType: se_CoverageStringFilterList(input.resourceType, context) }),
    ...(input.scanStatusCode != null && { scanStatusCode: se_CoverageStringFilterList(input.scanStatusCode, context) }),
    ...(input.scanStatusReason != null && {
      scanStatusReason: se_CoverageStringFilterList(input.scanStatusReason, context),
    }),
    ...(input.scanType != null && { scanType: se_CoverageStringFilterList(input.scanType, context) }),
  };
};

/**
 * serializeAws_restJson1CoverageMapFilter
 */
const se_CoverageMapFilter = (input: CoverageMapFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1CoverageMapFilterList
 */
const se_CoverageMapFilterList = (input: CoverageMapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CoverageMapFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1CoverageStringFilter
 */
const se_CoverageStringFilter = (input: CoverageStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1CoverageStringFilterList
 */
const se_CoverageStringFilterList = (input: CoverageStringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CoverageStringFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1DateFilter
 */
const se_DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return {
    ...(input.endInclusive != null && { endInclusive: Math.round(input.endInclusive.getTime() / 1000) }),
    ...(input.startInclusive != null && { startInclusive: Math.round(input.startInclusive.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1DateFilterList
 */
const se_DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DateFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1Destination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

/**
 * serializeAws_restJson1DisableResourceTypeList
 */
const se_DisableResourceTypeList = (input: (ResourceScanType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Ec2InstanceAggregation
 */
const se_Ec2InstanceAggregation = (input: Ec2InstanceAggregation, context: __SerdeContext): any => {
  return {
    ...(input.amis != null && { amis: se_StringFilterList(input.amis, context) }),
    ...(input.instanceIds != null && { instanceIds: se_StringFilterList(input.instanceIds, context) }),
    ...(input.instanceTags != null && { instanceTags: se_MapFilterList(input.instanceTags, context) }),
    ...(input.operatingSystems != null && { operatingSystems: se_StringFilterList(input.operatingSystems, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1EcrConfiguration
 */
const se_EcrConfiguration = (input: EcrConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.rescanDuration != null && { rescanDuration: input.rescanDuration }),
  };
};

/**
 * serializeAws_restJson1EnableResourceTypeList
 */
const se_EnableResourceTypeList = (input: (ResourceScanType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FilterArnList
 */
const se_FilterArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId != null && { awsAccountId: se_StringFilterList(input.awsAccountId, context) }),
    ...(input.componentId != null && { componentId: se_StringFilterList(input.componentId, context) }),
    ...(input.componentType != null && { componentType: se_StringFilterList(input.componentType, context) }),
    ...(input.ec2InstanceImageId != null && {
      ec2InstanceImageId: se_StringFilterList(input.ec2InstanceImageId, context),
    }),
    ...(input.ec2InstanceSubnetId != null && {
      ec2InstanceSubnetId: se_StringFilterList(input.ec2InstanceSubnetId, context),
    }),
    ...(input.ec2InstanceVpcId != null && { ec2InstanceVpcId: se_StringFilterList(input.ec2InstanceVpcId, context) }),
    ...(input.ecrImageArchitecture != null && {
      ecrImageArchitecture: se_StringFilterList(input.ecrImageArchitecture, context),
    }),
    ...(input.ecrImageHash != null && { ecrImageHash: se_StringFilterList(input.ecrImageHash, context) }),
    ...(input.ecrImagePushedAt != null && { ecrImagePushedAt: se_DateFilterList(input.ecrImagePushedAt, context) }),
    ...(input.ecrImageRegistry != null && { ecrImageRegistry: se_StringFilterList(input.ecrImageRegistry, context) }),
    ...(input.ecrImageRepositoryName != null && {
      ecrImageRepositoryName: se_StringFilterList(input.ecrImageRepositoryName, context),
    }),
    ...(input.ecrImageTags != null && { ecrImageTags: se_StringFilterList(input.ecrImageTags, context) }),
    ...(input.exploitAvailable != null && { exploitAvailable: se_StringFilterList(input.exploitAvailable, context) }),
    ...(input.findingArn != null && { findingArn: se_StringFilterList(input.findingArn, context) }),
    ...(input.findingStatus != null && { findingStatus: se_StringFilterList(input.findingStatus, context) }),
    ...(input.findingType != null && { findingType: se_StringFilterList(input.findingType, context) }),
    ...(input.firstObservedAt != null && { firstObservedAt: se_DateFilterList(input.firstObservedAt, context) }),
    ...(input.fixAvailable != null && { fixAvailable: se_StringFilterList(input.fixAvailable, context) }),
    ...(input.inspectorScore != null && { inspectorScore: se_NumberFilterList(input.inspectorScore, context) }),
    ...(input.lambdaFunctionExecutionRoleArn != null && {
      lambdaFunctionExecutionRoleArn: se_StringFilterList(input.lambdaFunctionExecutionRoleArn, context),
    }),
    ...(input.lambdaFunctionLastModifiedAt != null && {
      lambdaFunctionLastModifiedAt: se_DateFilterList(input.lambdaFunctionLastModifiedAt, context),
    }),
    ...(input.lambdaFunctionLayers != null && {
      lambdaFunctionLayers: se_StringFilterList(input.lambdaFunctionLayers, context),
    }),
    ...(input.lambdaFunctionName != null && {
      lambdaFunctionName: se_StringFilterList(input.lambdaFunctionName, context),
    }),
    ...(input.lambdaFunctionRuntime != null && {
      lambdaFunctionRuntime: se_StringFilterList(input.lambdaFunctionRuntime, context),
    }),
    ...(input.lastObservedAt != null && { lastObservedAt: se_DateFilterList(input.lastObservedAt, context) }),
    ...(input.networkProtocol != null && { networkProtocol: se_StringFilterList(input.networkProtocol, context) }),
    ...(input.portRange != null && { portRange: se_PortRangeFilterList(input.portRange, context) }),
    ...(input.relatedVulnerabilities != null && {
      relatedVulnerabilities: se_StringFilterList(input.relatedVulnerabilities, context),
    }),
    ...(input.resourceId != null && { resourceId: se_StringFilterList(input.resourceId, context) }),
    ...(input.resourceTags != null && { resourceTags: se_MapFilterList(input.resourceTags, context) }),
    ...(input.resourceType != null && { resourceType: se_StringFilterList(input.resourceType, context) }),
    ...(input.severity != null && { severity: se_StringFilterList(input.severity, context) }),
    ...(input.title != null && { title: se_StringFilterList(input.title, context) }),
    ...(input.updatedAt != null && { updatedAt: se_DateFilterList(input.updatedAt, context) }),
    ...(input.vendorSeverity != null && { vendorSeverity: se_StringFilterList(input.vendorSeverity, context) }),
    ...(input.vulnerabilityId != null && { vulnerabilityId: se_StringFilterList(input.vulnerabilityId, context) }),
    ...(input.vulnerabilitySource != null && {
      vulnerabilitySource: se_StringFilterList(input.vulnerabilitySource, context),
    }),
    ...(input.vulnerablePackages != null && {
      vulnerablePackages: se_PackageFilterList(input.vulnerablePackages, context),
    }),
  };
};

/**
 * serializeAws_restJson1FindingTypeAggregation
 */
const se_FindingTypeAggregation = (input: FindingTypeAggregation, context: __SerdeContext): any => {
  return {
    ...(input.findingType != null && { findingType: input.findingType }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1ImageLayerAggregation
 */
const se_ImageLayerAggregation = (input: ImageLayerAggregation, context: __SerdeContext): any => {
  return {
    ...(input.layerHashes != null && { layerHashes: se_StringFilterList(input.layerHashes, context) }),
    ...(input.repositories != null && { repositories: se_StringFilterList(input.repositories, context) }),
    ...(input.resourceIds != null && { resourceIds: se_StringFilterList(input.resourceIds, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1LambdaFunctionAggregation
 */
const se_LambdaFunctionAggregation = (input: LambdaFunctionAggregation, context: __SerdeContext): any => {
  return {
    ...(input.functionNames != null && { functionNames: se_StringFilterList(input.functionNames, context) }),
    ...(input.functionTags != null && { functionTags: se_MapFilterList(input.functionTags, context) }),
    ...(input.resourceIds != null && { resourceIds: se_StringFilterList(input.resourceIds, context) }),
    ...(input.runtimes != null && { runtimes: se_StringFilterList(input.runtimes, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1LambdaLayerAggregation
 */
const se_LambdaLayerAggregation = (input: LambdaLayerAggregation, context: __SerdeContext): any => {
  return {
    ...(input.functionNames != null && { functionNames: se_StringFilterList(input.functionNames, context) }),
    ...(input.layerArns != null && { layerArns: se_StringFilterList(input.layerArns, context) }),
    ...(input.resourceIds != null && { resourceIds: se_StringFilterList(input.resourceIds, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1MapFilter
 */
const se_MapFilter = (input: MapFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1MapFilterList
 */
const se_MapFilterList = (input: MapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MapFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1MeteringAccountIdList
 */
const se_MeteringAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1NumberFilter
 */
const se_NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.lowerInclusive != null && { lowerInclusive: __serializeFloat(input.lowerInclusive) }),
    ...(input.upperInclusive != null && { upperInclusive: __serializeFloat(input.upperInclusive) }),
  };
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

/**
 * serializeAws_restJson1PackageAggregation
 */
const se_PackageAggregation = (input: PackageAggregation, context: __SerdeContext): any => {
  return {
    ...(input.packageNames != null && { packageNames: se_StringFilterList(input.packageNames, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1PackageFilter
 */
const se_PackageFilter = (input: PackageFilter, context: __SerdeContext): any => {
  return {
    ...(input.architecture != null && { architecture: se_StringFilter(input.architecture, context) }),
    ...(input.epoch != null && { epoch: se_NumberFilter(input.epoch, context) }),
    ...(input.name != null && { name: se_StringFilter(input.name, context) }),
    ...(input.release != null && { release: se_StringFilter(input.release, context) }),
    ...(input.sourceLambdaLayerArn != null && {
      sourceLambdaLayerArn: se_StringFilter(input.sourceLambdaLayerArn, context),
    }),
    ...(input.sourceLayerHash != null && { sourceLayerHash: se_StringFilter(input.sourceLayerHash, context) }),
    ...(input.version != null && { version: se_StringFilter(input.version, context) }),
  };
};

/**
 * serializeAws_restJson1PackageFilterList
 */
const se_PackageFilterList = (input: PackageFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PackageFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1PortRangeFilter
 */
const se_PortRangeFilter = (input: PortRangeFilter, context: __SerdeContext): any => {
  return {
    ...(input.beginInclusive != null && { beginInclusive: input.beginInclusive }),
    ...(input.endInclusive != null && { endInclusive: input.endInclusive }),
  };
};

/**
 * serializeAws_restJson1PortRangeFilterList
 */
const se_PortRangeFilterList = (input: PortRangeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortRangeFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RepositoryAggregation
 */
const se_RepositoryAggregation = (input: RepositoryAggregation, context: __SerdeContext): any => {
  return {
    ...(input.repositories != null && { repositories: se_StringFilterList(input.repositories, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1SortCriteria
 */
const se_SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1StringFilter
 */
const se_StringFilter = (input: StringFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1StringFilterList
 */
const se_StringFilterList = (input: StringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StringFilter(entry, context);
    });
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
 * serializeAws_restJson1TitleAggregation
 */
const se_TitleAggregation = (input: TitleAggregation, context: __SerdeContext): any => {
  return {
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
    ...(input.titles != null && { titles: se_StringFilterList(input.titles, context) }),
    ...(input.vulnerabilityIds != null && { vulnerabilityIds: se_StringFilterList(input.vulnerabilityIds, context) }),
  };
};

/**
 * serializeAws_restJson1UsageAccountIdList
 */
const se_UsageAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
  return {
    accountId: __expectString(output.accountId),
    resourceStatus: output.resourceStatus != null ? de_ResourceStatus(output.resourceStatus, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AccountAggregationResponse
 */
const de_AccountAggregationResponse = (output: any, context: __SerdeContext): AccountAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Account(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccountState
 */
const de_AccountState = (output: any, context: __SerdeContext): AccountState => {
  return {
    accountId: __expectString(output.accountId),
    resourceState: output.resourceState != null ? de_ResourceState(output.resourceState, context) : undefined,
    state: output.state != null ? de_State(output.state, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccountStateList
 */
const de_AccountStateList = (output: any, context: __SerdeContext): AccountState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AggregationResponse
 */
const de_AggregationResponse = (output: any, context: __SerdeContext): AggregationResponse => {
  if (output.accountAggregation != null) {
    return {
      accountAggregation: de_AccountAggregationResponse(output.accountAggregation, context),
    };
  }
  if (output.amiAggregation != null) {
    return {
      amiAggregation: de_AmiAggregationResponse(output.amiAggregation, context),
    };
  }
  if (output.awsEcrContainerAggregation != null) {
    return {
      awsEcrContainerAggregation: de_AwsEcrContainerAggregationResponse(output.awsEcrContainerAggregation, context),
    };
  }
  if (output.ec2InstanceAggregation != null) {
    return {
      ec2InstanceAggregation: de_Ec2InstanceAggregationResponse(output.ec2InstanceAggregation, context),
    };
  }
  if (output.findingTypeAggregation != null) {
    return {
      findingTypeAggregation: de_FindingTypeAggregationResponse(output.findingTypeAggregation, context),
    };
  }
  if (output.imageLayerAggregation != null) {
    return {
      imageLayerAggregation: de_ImageLayerAggregationResponse(output.imageLayerAggregation, context),
    };
  }
  if (output.lambdaFunctionAggregation != null) {
    return {
      lambdaFunctionAggregation: de_LambdaFunctionAggregationResponse(output.lambdaFunctionAggregation, context),
    };
  }
  if (output.lambdaLayerAggregation != null) {
    return {
      lambdaLayerAggregation: de_LambdaLayerAggregationResponse(output.lambdaLayerAggregation, context),
    };
  }
  if (output.packageAggregation != null) {
    return {
      packageAggregation: de_PackageAggregationResponse(output.packageAggregation, context),
    };
  }
  if (output.repositoryAggregation != null) {
    return {
      repositoryAggregation: de_RepositoryAggregationResponse(output.repositoryAggregation, context),
    };
  }
  if (output.titleAggregation != null) {
    return {
      titleAggregation: de_TitleAggregationResponse(output.titleAggregation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AggregationResponseList
 */
const de_AggregationResponseList = (output: any, context: __SerdeContext): AggregationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregationResponse(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AmiAggregationResponse
 */
const de_AmiAggregationResponse = (output: any, context: __SerdeContext): AmiAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    affectedInstances: __expectLong(output.affectedInstances),
    ami: __expectString(output.ami),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArchitectureList
 */
const de_ArchitectureList = (output: any, context: __SerdeContext): (Architecture | string)[] => {
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
 * deserializeAws_restJson1AutoEnable
 */
const de_AutoEnable = (output: any, context: __SerdeContext): AutoEnable => {
  return {
    ec2: __expectBoolean(output.ec2),
    ecr: __expectBoolean(output.ecr),
    lambda: __expectBoolean(output.lambda),
  } as any;
};

/**
 * deserializeAws_restJson1AwsEc2InstanceDetails
 */
const de_AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    iamInstanceProfileArn: __expectString(output.iamInstanceProfileArn),
    imageId: __expectString(output.imageId),
    ipV4Addresses: output.ipV4Addresses != null ? de_IpV4AddressList(output.ipV4Addresses, context) : undefined,
    ipV6Addresses: output.ipV6Addresses != null ? de_IpV6AddressList(output.ipV6Addresses, context) : undefined,
    keyName: __expectString(output.keyName),
    launchedAt:
      output.launchedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.launchedAt))) : undefined,
    platform: __expectString(output.platform),
    subnetId: __expectString(output.subnetId),
    type: __expectString(output.type),
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1AwsEcrContainerAggregationResponse
 */
const de_AwsEcrContainerAggregationResponse = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    architecture: __expectString(output.architecture),
    imageSha: __expectString(output.imageSha),
    imageTags: output.imageTags != null ? de_StringList(output.imageTags, context) : undefined,
    repository: __expectString(output.repository),
    resourceId: __expectString(output.resourceId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AwsEcrContainerImageDetails
 */
const de_AwsEcrContainerImageDetails = (output: any, context: __SerdeContext): AwsEcrContainerImageDetails => {
  return {
    architecture: __expectString(output.architecture),
    author: __expectString(output.author),
    imageHash: __expectString(output.imageHash),
    imageTags: output.imageTags != null ? de_ImageTagList(output.imageTags, context) : undefined,
    platform: __expectString(output.platform),
    pushedAt:
      output.pushedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pushedAt))) : undefined,
    registry: __expectString(output.registry),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_restJson1AwsLambdaFunctionDetails
 */
const de_AwsLambdaFunctionDetails = (output: any, context: __SerdeContext): AwsLambdaFunctionDetails => {
  return {
    architectures: output.architectures != null ? de_ArchitectureList(output.architectures, context) : undefined,
    codeSha256: __expectString(output.codeSha256),
    executionRoleArn: __expectString(output.executionRoleArn),
    functionName: __expectString(output.functionName),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    layers: output.layers != null ? de_LayerList(output.layers, context) : undefined,
    packageType: __expectString(output.packageType),
    runtime: __expectString(output.runtime),
    version: __expectString(output.version),
    vpcConfig: output.vpcConfig != null ? de_LambdaVpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Counts
 */
const de_Counts = (output: any, context: __SerdeContext): Counts => {
  return {
    count: __expectLong(output.count),
    groupKey: __expectString(output.groupKey),
  } as any;
};

/**
 * deserializeAws_restJson1CountsList
 */
const de_CountsList = (output: any, context: __SerdeContext): Counts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Counts(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoveredResource
 */
const de_CoveredResource = (output: any, context: __SerdeContext): CoveredResource => {
  return {
    accountId: __expectString(output.accountId),
    resourceId: __expectString(output.resourceId),
    resourceMetadata:
      output.resourceMetadata != null ? de_ResourceScanMetadata(output.resourceMetadata, context) : undefined,
    resourceType: __expectString(output.resourceType),
    scanStatus: output.scanStatus != null ? de_ScanStatus(output.scanStatus, context) : undefined,
    scanType: __expectString(output.scanType),
  } as any;
};

/**
 * deserializeAws_restJson1CoveredResources
 */
const de_CoveredResources = (output: any, context: __SerdeContext): CoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoveredResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return {
    baseScore: __limitedParseDouble(output.baseScore),
    scoringVector: __expectString(output.scoringVector),
    source: __expectString(output.source),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreAdjustment
 */
const de_CvssScoreAdjustment = (output: any, context: __SerdeContext): CvssScoreAdjustment => {
  return {
    metric: __expectString(output.metric),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreAdjustmentList
 */
const de_CvssScoreAdjustmentList = (output: any, context: __SerdeContext): CvssScoreAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScoreAdjustment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return {
    adjustments: output.adjustments != null ? de_CvssScoreAdjustmentList(output.adjustments, context) : undefined,
    cvssSource: __expectString(output.cvssSource),
    score: __limitedParseDouble(output.score),
    scoreSource: __expectString(output.scoreSource),
    scoringVector: __expectString(output.scoringVector),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateFilter
 */
const de_DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return {
    endInclusive:
      output.endInclusive != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endInclusive)))
        : undefined,
    startInclusive:
      output.startInclusive != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startInclusive)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DateFilterList
 */
const de_DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DateFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DelegatedAdmin
 */
const de_DelegatedAdmin = (output: any, context: __SerdeContext): DelegatedAdmin => {
  return {
    accountId: __expectString(output.accountId),
    relationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

/**
 * deserializeAws_restJson1DelegatedAdminAccount
 */
const de_DelegatedAdminAccount = (output: any, context: __SerdeContext): DelegatedAdminAccount => {
  return {
    accountId: __expectString(output.accountId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DelegatedAdminAccountList
 */
const de_DelegatedAdminAccountList = (output: any, context: __SerdeContext): DelegatedAdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DelegatedAdminAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    bucketName: __expectString(output.bucketName),
    keyPrefix: __expectString(output.keyPrefix),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1Ec2InstanceAggregationResponse
 */
const de_Ec2InstanceAggregationResponse = (output: any, context: __SerdeContext): Ec2InstanceAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    ami: __expectString(output.ami),
    instanceId: __expectString(output.instanceId),
    instanceTags: output.instanceTags != null ? de_TagMap(output.instanceTags, context) : undefined,
    networkFindings: __expectLong(output.networkFindings),
    operatingSystem: __expectString(output.operatingSystem),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Ec2Metadata
 */
const de_Ec2Metadata = (output: any, context: __SerdeContext): Ec2Metadata => {
  return {
    amiId: __expectString(output.amiId),
    platform: __expectString(output.platform),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EcrConfigurationState
 */
const de_EcrConfigurationState = (output: any, context: __SerdeContext): EcrConfigurationState => {
  return {
    rescanDurationState:
      output.rescanDurationState != null ? de_EcrRescanDurationState(output.rescanDurationState, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EcrContainerImageMetadata
 */
const de_EcrContainerImageMetadata = (output: any, context: __SerdeContext): EcrContainerImageMetadata => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EcrRepositoryMetadata
 */
const de_EcrRepositoryMetadata = (output: any, context: __SerdeContext): EcrRepositoryMetadata => {
  return {
    name: __expectString(output.name),
    scanFrequency: __expectString(output.scanFrequency),
  } as any;
};

/**
 * deserializeAws_restJson1EcrRescanDurationState
 */
const de_EcrRescanDurationState = (output: any, context: __SerdeContext): EcrRescanDurationState => {
  return {
    rescanDuration: __expectString(output.rescanDuration),
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExploitabilityDetails
 */
const de_ExploitabilityDetails = (output: any, context: __SerdeContext): ExploitabilityDetails => {
  return {
    lastKnownExploitAt:
      output.lastKnownExploitAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastKnownExploitAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailedAccount
 */
const de_FailedAccount = (output: any, context: __SerdeContext): FailedAccount => {
  return {
    accountId: __expectString(output.accountId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    resourceStatus: output.resourceStatus != null ? de_ResourceStatus(output.resourceStatus, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1FailedAccountList
 */
const de_FailedAccountList = (output: any, context: __SerdeContext): FailedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    action: __expectString(output.action),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    criteria: output.criteria != null ? de_FilterCriteria(output.criteria, context) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    ownerId: __expectString(output.ownerId),
    reason: __expectString(output.reason),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilterCriteria
 */
const de_FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    awsAccountId: output.awsAccountId != null ? de_StringFilterList(output.awsAccountId, context) : undefined,
    componentId: output.componentId != null ? de_StringFilterList(output.componentId, context) : undefined,
    componentType: output.componentType != null ? de_StringFilterList(output.componentType, context) : undefined,
    ec2InstanceImageId:
      output.ec2InstanceImageId != null ? de_StringFilterList(output.ec2InstanceImageId, context) : undefined,
    ec2InstanceSubnetId:
      output.ec2InstanceSubnetId != null ? de_StringFilterList(output.ec2InstanceSubnetId, context) : undefined,
    ec2InstanceVpcId:
      output.ec2InstanceVpcId != null ? de_StringFilterList(output.ec2InstanceVpcId, context) : undefined,
    ecrImageArchitecture:
      output.ecrImageArchitecture != null ? de_StringFilterList(output.ecrImageArchitecture, context) : undefined,
    ecrImageHash: output.ecrImageHash != null ? de_StringFilterList(output.ecrImageHash, context) : undefined,
    ecrImagePushedAt: output.ecrImagePushedAt != null ? de_DateFilterList(output.ecrImagePushedAt, context) : undefined,
    ecrImageRegistry:
      output.ecrImageRegistry != null ? de_StringFilterList(output.ecrImageRegistry, context) : undefined,
    ecrImageRepositoryName:
      output.ecrImageRepositoryName != null ? de_StringFilterList(output.ecrImageRepositoryName, context) : undefined,
    ecrImageTags: output.ecrImageTags != null ? de_StringFilterList(output.ecrImageTags, context) : undefined,
    exploitAvailable:
      output.exploitAvailable != null ? de_StringFilterList(output.exploitAvailable, context) : undefined,
    findingArn: output.findingArn != null ? de_StringFilterList(output.findingArn, context) : undefined,
    findingStatus: output.findingStatus != null ? de_StringFilterList(output.findingStatus, context) : undefined,
    findingType: output.findingType != null ? de_StringFilterList(output.findingType, context) : undefined,
    firstObservedAt: output.firstObservedAt != null ? de_DateFilterList(output.firstObservedAt, context) : undefined,
    fixAvailable: output.fixAvailable != null ? de_StringFilterList(output.fixAvailable, context) : undefined,
    inspectorScore: output.inspectorScore != null ? de_NumberFilterList(output.inspectorScore, context) : undefined,
    lambdaFunctionExecutionRoleArn:
      output.lambdaFunctionExecutionRoleArn != null
        ? de_StringFilterList(output.lambdaFunctionExecutionRoleArn, context)
        : undefined,
    lambdaFunctionLastModifiedAt:
      output.lambdaFunctionLastModifiedAt != null
        ? de_DateFilterList(output.lambdaFunctionLastModifiedAt, context)
        : undefined,
    lambdaFunctionLayers:
      output.lambdaFunctionLayers != null ? de_StringFilterList(output.lambdaFunctionLayers, context) : undefined,
    lambdaFunctionName:
      output.lambdaFunctionName != null ? de_StringFilterList(output.lambdaFunctionName, context) : undefined,
    lambdaFunctionRuntime:
      output.lambdaFunctionRuntime != null ? de_StringFilterList(output.lambdaFunctionRuntime, context) : undefined,
    lastObservedAt: output.lastObservedAt != null ? de_DateFilterList(output.lastObservedAt, context) : undefined,
    networkProtocol: output.networkProtocol != null ? de_StringFilterList(output.networkProtocol, context) : undefined,
    portRange: output.portRange != null ? de_PortRangeFilterList(output.portRange, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null ? de_StringFilterList(output.relatedVulnerabilities, context) : undefined,
    resourceId: output.resourceId != null ? de_StringFilterList(output.resourceId, context) : undefined,
    resourceTags: output.resourceTags != null ? de_MapFilterList(output.resourceTags, context) : undefined,
    resourceType: output.resourceType != null ? de_StringFilterList(output.resourceType, context) : undefined,
    severity: output.severity != null ? de_StringFilterList(output.severity, context) : undefined,
    title: output.title != null ? de_StringFilterList(output.title, context) : undefined,
    updatedAt: output.updatedAt != null ? de_DateFilterList(output.updatedAt, context) : undefined,
    vendorSeverity: output.vendorSeverity != null ? de_StringFilterList(output.vendorSeverity, context) : undefined,
    vulnerabilityId: output.vulnerabilityId != null ? de_StringFilterList(output.vulnerabilityId, context) : undefined,
    vulnerabilitySource:
      output.vulnerabilitySource != null ? de_StringFilterList(output.vulnerabilitySource, context) : undefined,
    vulnerablePackages:
      output.vulnerablePackages != null ? de_PackageFilterList(output.vulnerablePackages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    description: __expectString(output.description),
    exploitAvailable: __expectString(output.exploitAvailable),
    exploitabilityDetails:
      output.exploitabilityDetails != null
        ? de_ExploitabilityDetails(output.exploitabilityDetails, context)
        : undefined,
    findingArn: __expectString(output.findingArn),
    firstObservedAt:
      output.firstObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstObservedAt)))
        : undefined,
    fixAvailable: __expectString(output.fixAvailable),
    inspectorScore: __limitedParseDouble(output.inspectorScore),
    inspectorScoreDetails:
      output.inspectorScoreDetails != null
        ? de_InspectorScoreDetails(output.inspectorScoreDetails, context)
        : undefined,
    lastObservedAt:
      output.lastObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastObservedAt)))
        : undefined,
    networkReachabilityDetails:
      output.networkReachabilityDetails != null
        ? de_NetworkReachabilityDetails(output.networkReachabilityDetails, context)
        : undefined,
    packageVulnerabilityDetails:
      output.packageVulnerabilityDetails != null
        ? de_PackageVulnerabilityDetails(output.packageVulnerabilityDetails, context)
        : undefined,
    remediation: output.remediation != null ? de_Remediation(output.remediation, context) : undefined,
    resources: output.resources != null ? de_ResourceList(output.resources, context) : undefined,
    severity: __expectString(output.severity),
    status: __expectString(output.status),
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingList
 */
const de_FindingList = (output: any, context: __SerdeContext): Finding[] => {
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
 * deserializeAws_restJson1FindingTypeAggregationResponse
 */
const de_FindingTypeAggregationResponse = (output: any, context: __SerdeContext): FindingTypeAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialAccountInfo
 */
const de_FreeTrialAccountInfo = (output: any, context: __SerdeContext): FreeTrialAccountInfo => {
  return {
    accountId: __expectString(output.accountId),
    freeTrialInfo: output.freeTrialInfo != null ? de_FreeTrialInfoList(output.freeTrialInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialAccountInfoList
 */
const de_FreeTrialAccountInfoList = (output: any, context: __SerdeContext): FreeTrialAccountInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FreeTrialAccountInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FreeTrialInfo
 */
const de_FreeTrialInfo = (output: any, context: __SerdeContext): FreeTrialInfo => {
  return {
    end: output.end != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.end))) : undefined,
    start: output.start != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.start))) : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialInfoError
 */
const de_FreeTrialInfoError = (output: any, context: __SerdeContext): FreeTrialInfoError => {
  return {
    accountId: __expectString(output.accountId),
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1FreeTrialInfoErrorList
 */
const de_FreeTrialInfoErrorList = (output: any, context: __SerdeContext): FreeTrialInfoError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FreeTrialInfoError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FreeTrialInfoList
 */
const de_FreeTrialInfoList = (output: any, context: __SerdeContext): FreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FreeTrialInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageLayerAggregationResponse
 */
const de_ImageLayerAggregationResponse = (output: any, context: __SerdeContext): ImageLayerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    layerHash: __expectString(output.layerHash),
    repository: __expectString(output.repository),
    resourceId: __expectString(output.resourceId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageTagList
 */
const de_ImageTagList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1InspectorScoreDetails
 */
const de_InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return {
    adjustedCvss: output.adjustedCvss != null ? de_CvssScoreDetails(output.adjustedCvss, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IpV4AddressList
 */
const de_IpV4AddressList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1IpV6AddressList
 */
const de_IpV6AddressList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1LambdaFunctionAggregationResponse
 */
const de_LambdaFunctionAggregationResponse = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    functionName: __expectString(output.functionName),
    lambdaTags: output.lambdaTags != null ? de_TagMap(output.lambdaTags, context) : undefined,
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    runtime: __expectString(output.runtime),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LambdaFunctionMetadata
 */
const de_LambdaFunctionMetadata = (output: any, context: __SerdeContext): LambdaFunctionMetadata => {
  return {
    functionName: __expectString(output.functionName),
    functionTags: output.functionTags != null ? de_TagMap(output.functionTags, context) : undefined,
    layers: output.layers != null ? de_LambdaLayerList(output.layers, context) : undefined,
    runtime: __expectString(output.runtime),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaLayerAggregationResponse
 */
const de_LambdaLayerAggregationResponse = (output: any, context: __SerdeContext): LambdaLayerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    functionName: __expectString(output.functionName),
    layerArn: __expectString(output.layerArn),
    resourceId: __expectString(output.resourceId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LambdaLayerList
 */
const de_LambdaLayerList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1LambdaVpcConfig
 */
const de_LambdaVpcConfig = (output: any, context: __SerdeContext): LambdaVpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIdList(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_SubnetIdList(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1LayerList
 */
const de_LayerList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MapFilter
 */
const de_MapFilter = (output: any, context: __SerdeContext): MapFilter => {
  return {
    comparison: __expectString(output.comparison),
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1MapFilterList
 */
const de_MapFilterList = (output: any, context: __SerdeContext): MapFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MapFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return {
    accountId: __expectString(output.accountId),
    delegatedAdminAccountId: __expectString(output.delegatedAdminAccountId),
    relationshipStatus: __expectString(output.relationshipStatus),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MemberList
 */
const de_MemberList = (output: any, context: __SerdeContext): Member[] => {
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
 * deserializeAws_restJson1NetworkPath
 */
const de_NetworkPath = (output: any, context: __SerdeContext): NetworkPath => {
  return {
    steps: output.steps != null ? de_StepList(output.steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkReachabilityDetails
 */
const de_NetworkReachabilityDetails = (output: any, context: __SerdeContext): NetworkReachabilityDetails => {
  return {
    networkPath: output.networkPath != null ? de_NetworkPath(output.networkPath, context) : undefined,
    openPortRange: output.openPortRange != null ? de_PortRange(output.openPortRange, context) : undefined,
    protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_restJson1NonEmptyStringList
 */
const de_NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1NumberFilter
 */
const de_NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    lowerInclusive: __limitedParseDouble(output.lowerInclusive),
    upperInclusive: __limitedParseDouble(output.upperInclusive),
  } as any;
};

/**
 * deserializeAws_restJson1NumberFilterList
 */
const de_NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NumberFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageAggregationResponse
 */
const de_PackageAggregationResponse = (output: any, context: __SerdeContext): PackageAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    packageName: __expectString(output.packageName),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageFilter
 */
const de_PackageFilter = (output: any, context: __SerdeContext): PackageFilter => {
  return {
    architecture: output.architecture != null ? de_StringFilter(output.architecture, context) : undefined,
    epoch: output.epoch != null ? de_NumberFilter(output.epoch, context) : undefined,
    name: output.name != null ? de_StringFilter(output.name, context) : undefined,
    release: output.release != null ? de_StringFilter(output.release, context) : undefined,
    sourceLambdaLayerArn:
      output.sourceLambdaLayerArn != null ? de_StringFilter(output.sourceLambdaLayerArn, context) : undefined,
    sourceLayerHash: output.sourceLayerHash != null ? de_StringFilter(output.sourceLayerHash, context) : undefined,
    version: output.version != null ? de_StringFilter(output.version, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageFilterList
 */
const de_PackageFilterList = (output: any, context: __SerdeContext): PackageFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return {
    cvss: output.cvss != null ? de_CvssScoreList(output.cvss, context) : undefined,
    referenceUrls: output.referenceUrls != null ? de_NonEmptyStringList(output.referenceUrls, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? de_VulnerabilityIdList(output.relatedVulnerabilities, context)
        : undefined,
    source: __expectString(output.source),
    sourceUrl: __expectString(output.sourceUrl),
    vendorCreatedAt:
      output.vendorCreatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorCreatedAt)))
        : undefined,
    vendorSeverity: __expectString(output.vendorSeverity),
    vendorUpdatedAt:
      output.vendorUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorUpdatedAt)))
        : undefined,
    vulnerabilityId: __expectString(output.vulnerabilityId),
    vulnerablePackages:
      output.vulnerablePackages != null ? de_VulnerablePackageList(output.vulnerablePackages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    operation: __expectString(output.operation),
    service: __expectString(output.service),
  } as any;
};

/**
 * deserializeAws_restJson1Permissions
 */
const de_Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Permission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PortRange
 */
const de_PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    begin: __expectInt32(output.begin),
    end: __expectInt32(output.end),
  } as any;
};

/**
 * deserializeAws_restJson1PortRangeFilter
 */
const de_PortRangeFilter = (output: any, context: __SerdeContext): PortRangeFilter => {
  return {
    beginInclusive: __expectInt32(output.beginInclusive),
    endInclusive: __expectInt32(output.endInclusive),
  } as any;
};

/**
 * deserializeAws_restJson1PortRangeFilterList
 */
const de_PortRangeFilterList = (output: any, context: __SerdeContext): PortRangeFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortRangeFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Url: __expectString(output.Url),
    text: __expectString(output.text),
  } as any;
};

/**
 * deserializeAws_restJson1Remediation
 */
const de_Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    recommendation: output.recommendation != null ? de_Recommendation(output.recommendation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RepositoryAggregationResponse
 */
const de_RepositoryAggregationResponse = (output: any, context: __SerdeContext): RepositoryAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    affectedImages: __expectLong(output.affectedImages),
    repository: __expectString(output.repository),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    details: output.details != null ? de_ResourceDetails(output.details, context) : undefined,
    id: __expectString(output.id),
    partition: __expectString(output.partition),
    region: __expectString(output.region),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    awsEc2Instance:
      output.awsEc2Instance != null ? de_AwsEc2InstanceDetails(output.awsEc2Instance, context) : undefined,
    awsEcrContainerImage:
      output.awsEcrContainerImage != null
        ? de_AwsEcrContainerImageDetails(output.awsEcrContainerImage, context)
        : undefined,
    awsLambdaFunction:
      output.awsLambdaFunction != null ? de_AwsLambdaFunctionDetails(output.awsLambdaFunction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceScanMetadata
 */
const de_ResourceScanMetadata = (output: any, context: __SerdeContext): ResourceScanMetadata => {
  return {
    ec2: output.ec2 != null ? de_Ec2Metadata(output.ec2, context) : undefined,
    ecrImage: output.ecrImage != null ? de_EcrContainerImageMetadata(output.ecrImage, context) : undefined,
    ecrRepository: output.ecrRepository != null ? de_EcrRepositoryMetadata(output.ecrRepository, context) : undefined,
    lambdaFunction:
      output.lambdaFunction != null ? de_LambdaFunctionMetadata(output.lambdaFunction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceState
 */
const de_ResourceState = (output: any, context: __SerdeContext): ResourceState => {
  return {
    ec2: output.ec2 != null ? de_State(output.ec2, context) : undefined,
    ecr: output.ecr != null ? de_State(output.ecr, context) : undefined,
    lambda: output.lambda != null ? de_State(output.lambda, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceStatus
 */
const de_ResourceStatus = (output: any, context: __SerdeContext): ResourceStatus => {
  return {
    ec2: __expectString(output.ec2),
    ecr: __expectString(output.ecr),
    lambda: __expectString(output.lambda),
  } as any;
};

/**
 * deserializeAws_restJson1ScanStatus
 */
const de_ScanStatus = (output: any, context: __SerdeContext): ScanStatus => {
  return {
    reason: __expectString(output.reason),
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SeverityCounts
 */
const de_SeverityCounts = (output: any, context: __SerdeContext): SeverityCounts => {
  return {
    all: __expectLong(output.all),
    critical: __expectLong(output.critical),
    high: __expectLong(output.high),
    medium: __expectLong(output.medium),
  } as any;
};

/**
 * deserializeAws_restJson1State
 */
const de_State = (output: any, context: __SerdeContext): State => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return {
    componentId: __expectString(output.componentId),
    componentType: __expectString(output.componentType),
  } as any;
};

/**
 * deserializeAws_restJson1StepList
 */
const de_StepList = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Step(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringFilter
 */
const de_StringFilter = (output: any, context: __SerdeContext): StringFilter => {
  return {
    comparison: __expectString(output.comparison),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1StringFilterList
 */
const de_StringFilterList = (output: any, context: __SerdeContext): StringFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StringFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TitleAggregationResponse
 */
const de_TitleAggregationResponse = (output: any, context: __SerdeContext): TitleAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
    title: __expectString(output.title),
    vulnerabilityId: __expectString(output.vulnerabilityId),
  } as any;
};

/**
 * deserializeAws_restJson1Usage
 */
const de_Usage = (output: any, context: __SerdeContext): Usage => {
  return {
    currency: __expectString(output.currency),
    estimatedMonthlyCost: __limitedParseDouble(output.estimatedMonthlyCost),
    total: __limitedParseDouble(output.total),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1UsageList
 */
const de_UsageList = (output: any, context: __SerdeContext): Usage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Usage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageTotal
 */
const de_UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return {
    accountId: __expectString(output.accountId),
    usage: output.usage != null ? de_UsageList(output.usage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageTotalList
 */
const de_UsageTotalList = (output: any, context: __SerdeContext): UsageTotal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageTotal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFields
 */
const de_ValidationExceptionFields = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VulnerabilityIdList
 */
const de_VulnerabilityIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1VulnerablePackage
 */
const de_VulnerablePackage = (output: any, context: __SerdeContext): VulnerablePackage => {
  return {
    arch: __expectString(output.arch),
    epoch: __expectInt32(output.epoch),
    filePath: __expectString(output.filePath),
    fixedInVersion: __expectString(output.fixedInVersion),
    name: __expectString(output.name),
    packageManager: __expectString(output.packageManager),
    release: __expectString(output.release),
    remediation: __expectString(output.remediation),
    sourceLambdaLayerArn: __expectString(output.sourceLambdaLayerArn),
    sourceLayerHash: __expectString(output.sourceLayerHash),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1VulnerablePackageList
 */
const de_VulnerablePackageList = (output: any, context: __SerdeContext): VulnerablePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VulnerablePackage(entry, context);
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
