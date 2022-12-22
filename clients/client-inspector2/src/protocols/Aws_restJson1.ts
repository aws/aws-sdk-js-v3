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

export const serializeAws_restJson1AssociateMemberCommand = async (
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

export const serializeAws_restJson1BatchGetAccountStatusCommand = async (
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
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1AccountIdSet(input.accountIds, context) }),
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

export const serializeAws_restJson1BatchGetFreeTrialInfoCommand = async (
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
    ...(input.accountIds != null && {
      accountIds: serializeAws_restJson1MeteringAccountIdList(input.accountIds, context),
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

export const serializeAws_restJson1CancelFindingsReportCommand = async (
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

export const serializeAws_restJson1CreateFilterCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1FilterCriteria(input.filterCriteria, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateFindingsReportCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1FilterCriteria(input.filterCriteria, context),
    }),
    ...(input.reportFormat != null && { reportFormat: input.reportFormat }),
    ...(input.s3Destination != null && {
      s3Destination: serializeAws_restJson1Destination(input.s3Destination, context),
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

export const serializeAws_restJson1DeleteFilterCommand = async (
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

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
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

export const serializeAws_restJson1DisableCommand = async (
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
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1AccountIdSet(input.accountIds, context) }),
    ...(input.resourceTypes != null && {
      resourceTypes: serializeAws_restJson1DisableResourceTypeList(input.resourceTypes, context),
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

export const serializeAws_restJson1DisableDelegatedAdminAccountCommand = async (
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

export const serializeAws_restJson1DisassociateMemberCommand = async (
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

export const serializeAws_restJson1EnableCommand = async (
  input: EnableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1AccountIdSet(input.accountIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.resourceTypes != null && {
      resourceTypes: serializeAws_restJson1EnableResourceTypeList(input.resourceTypes, context),
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

export const serializeAws_restJson1EnableDelegatedAdminAccountCommand = async (
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

export const serializeAws_restJson1GetConfigurationCommand = async (
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

export const serializeAws_restJson1GetDelegatedAdminAccountCommand = async (
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

export const serializeAws_restJson1GetFindingsReportStatusCommand = async (
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

export const serializeAws_restJson1GetMemberCommand = async (
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

export const serializeAws_restJson1ListAccountPermissionsCommand = async (
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

export const serializeAws_restJson1ListCoverageCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1CoverageFilterCriteria(input.filterCriteria, context),
    }),
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

export const serializeAws_restJson1ListCoverageStatisticsCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1CoverageFilterCriteria(input.filterCriteria, context),
    }),
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

export const serializeAws_restJson1ListDelegatedAdminAccountsCommand = async (
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

export const serializeAws_restJson1ListFiltersCommand = async (
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
    ...(input.arns != null && { arns: serializeAws_restJson1FilterArnList(input.arns, context) }),
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

export const serializeAws_restJson1ListFindingAggregationsCommand = async (
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
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1StringFilterList(input.accountIds, context) }),
    ...(input.aggregationRequest != null && {
      aggregationRequest: serializeAws_restJson1AggregationRequest(input.aggregationRequest, context),
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

export const serializeAws_restJson1ListFindingsCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1FilterCriteria(input.filterCriteria, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && {
      sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context),
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

export const serializeAws_restJson1ListMembersCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListUsageTotalsCommand = async (
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
    ...(input.accountIds != null && {
      accountIds: serializeAws_restJson1UsageAccountIdList(input.accountIds, context),
    }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UpdateConfigurationCommand = async (
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
    ...(input.ecrConfiguration != null && {
      ecrConfiguration: serializeAws_restJson1EcrConfiguration(input.ecrConfiguration, context),
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

export const serializeAws_restJson1UpdateFilterCommand = async (
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
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1FilterCriteria(input.filterCriteria, context),
    }),
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

export const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
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
    ...(input.autoEnable != null && { autoEnable: serializeAws_restJson1AutoEnable(input.autoEnable, context) }),
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

export const deserializeAws_restJson1AssociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateMemberCommandError(output, context);
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

const deserializeAws_restJson1AssociateMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchGetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetAccountStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = deserializeAws_restJson1AccountStateList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = deserializeAws_restJson1FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetAccountStatusCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchGetFreeTrialInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFreeTrialInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetFreeTrialInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = deserializeAws_restJson1FreeTrialAccountInfoList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = deserializeAws_restJson1FreeTrialInfoErrorList(data.failedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetFreeTrialInfoCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelFindingsReportCommandError(output, context);
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

const deserializeAws_restJson1CancelFindingsReportCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.inspector2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.inspector2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFindingsReportCommandError(output, context);
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

const deserializeAws_restJson1CreateFindingsReportCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.autoEnable = deserializeAws_restJson1AutoEnable(data.autoEnable, context);
  }
  if (data.maxAccountLimitReached != null) {
    contents.maxAccountLimitReached = __expectBoolean(data.maxAccountLimitReached);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = deserializeAws_restJson1AccountList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = deserializeAws_restJson1FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DisableCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableDelegatedAdminAccountCommandError(output, context);
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

const deserializeAws_restJson1DisableDelegatedAdminAccountCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.inspector2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMemberCommandError(output, context);
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

const deserializeAws_restJson1DisassociateMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = deserializeAws_restJson1AccountList(data.accounts, context);
  }
  if (data.failedAccounts != null) {
    contents.failedAccounts = deserializeAws_restJson1FailedAccountList(data.failedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1EnableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EnableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableDelegatedAdminAccountCommandError(output, context);
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

const deserializeAws_restJson1EnableDelegatedAdminAccountCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.inspector2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ecrConfiguration != null) {
    contents.ecrConfiguration = deserializeAws_restJson1EcrConfigurationState(data.ecrConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDelegatedAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdmin != null) {
    contents.delegatedAdmin = deserializeAws_restJson1DelegatedAdmin(data.delegatedAdmin, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDelegatedAdminAccountCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFindingsReportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsReportStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.destination != null) {
    contents.destination = deserializeAws_restJson1Destination(data.destination, context);
  }
  if (data.errorCode != null) {
    contents.errorCode = __expectString(data.errorCode);
  }
  if (data.errorMessage != null) {
    contents.errorMessage = __expectString(data.errorMessage);
  }
  if (data.filterCriteria != null) {
    contents.filterCriteria = deserializeAws_restJson1FilterCriteria(data.filterCriteria, context);
  }
  if (data.reportId != null) {
    contents.reportId = __expectString(data.reportId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsReportStatusCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member != null) {
    contents.member = deserializeAws_restJson1Member(data.member, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAccountPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccountPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1Permissions(data.permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListAccountPermissionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoverageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.coveredResources != null) {
    contents.coveredResources = deserializeAws_restJson1CoveredResources(data.coveredResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCoverageCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoverageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoverageStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.countsByGroup != null) {
    contents.countsByGroup = deserializeAws_restJson1CountsList(data.countsByGroup, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.totalCounts != null) {
    contents.totalCounts = __expectLong(data.totalCounts);
  }
  return contents;
};

const deserializeAws_restJson1ListCoverageStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDelegatedAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDelegatedAdminAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegatedAdminAccounts != null) {
    contents.delegatedAdminAccounts = deserializeAws_restJson1DelegatedAdminAccountList(
      data.delegatedAdminAccounts,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDelegatedAdminAccountsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.filters != null) {
    contents.filters = deserializeAws_restJson1FilterList(data.filters, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFindingAggregationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingAggregationsCommandError(output, context);
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
    contents.responses = deserializeAws_restJson1AggregationResponseList(data.responses, context);
  }
  return contents;
};

const deserializeAws_restJson1ListFindingAggregationsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.findings != null) {
    contents.findings = deserializeAws_restJson1FindingList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.members = deserializeAws_restJson1MemberList(data.members, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsageTotalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.totals != null) {
    contents.totals = deserializeAws_restJson1UsageTotalList(data.totals, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUsageTotalsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "com.amazonaws.inspector2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.autoEnable != null) {
    contents.autoEnable = deserializeAws_restJson1AutoEnable(data.autoEnable, context);
  }
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fields != null) {
    contents.fields = deserializeAws_restJson1ValidationExceptionFields(data.fields, context);
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

const serializeAws_restJson1AccountAggregation = (input: AccountAggregation, context: __SerdeContext): any => {
  return {
    ...(input.findingType != null && { findingType: input.findingType }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1AccountIdSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AggregationRequest = (input: AggregationRequest, context: __SerdeContext): any => {
  return AggregationRequest.visit(input, {
    accountAggregation: (value) => ({ accountAggregation: serializeAws_restJson1AccountAggregation(value, context) }),
    amiAggregation: (value) => ({ amiAggregation: serializeAws_restJson1AmiAggregation(value, context) }),
    awsEcrContainerAggregation: (value) => ({
      awsEcrContainerAggregation: serializeAws_restJson1AwsEcrContainerAggregation(value, context),
    }),
    ec2InstanceAggregation: (value) => ({
      ec2InstanceAggregation: serializeAws_restJson1Ec2InstanceAggregation(value, context),
    }),
    findingTypeAggregation: (value) => ({
      findingTypeAggregation: serializeAws_restJson1FindingTypeAggregation(value, context),
    }),
    imageLayerAggregation: (value) => ({
      imageLayerAggregation: serializeAws_restJson1ImageLayerAggregation(value, context),
    }),
    lambdaFunctionAggregation: (value) => ({
      lambdaFunctionAggregation: serializeAws_restJson1LambdaFunctionAggregation(value, context),
    }),
    lambdaLayerAggregation: (value) => ({
      lambdaLayerAggregation: serializeAws_restJson1LambdaLayerAggregation(value, context),
    }),
    packageAggregation: (value) => ({ packageAggregation: serializeAws_restJson1PackageAggregation(value, context) }),
    repositoryAggregation: (value) => ({
      repositoryAggregation: serializeAws_restJson1RepositoryAggregation(value, context),
    }),
    titleAggregation: (value) => ({ titleAggregation: serializeAws_restJson1TitleAggregation(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1AmiAggregation = (input: AmiAggregation, context: __SerdeContext): any => {
  return {
    ...(input.amis != null && { amis: serializeAws_restJson1StringFilterList(input.amis, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1AutoEnable = (input: AutoEnable, context: __SerdeContext): any => {
  return {
    ...(input.ec2 != null && { ec2: input.ec2 }),
    ...(input.ecr != null && { ecr: input.ecr }),
    ...(input.lambda != null && { lambda: input.lambda }),
  };
};

const serializeAws_restJson1AwsEcrContainerAggregation = (
  input: AwsEcrContainerAggregation,
  context: __SerdeContext
): any => {
  return {
    ...(input.architectures != null && {
      architectures: serializeAws_restJson1StringFilterList(input.architectures, context),
    }),
    ...(input.imageShas != null && { imageShas: serializeAws_restJson1StringFilterList(input.imageShas, context) }),
    ...(input.imageTags != null && { imageTags: serializeAws_restJson1StringFilterList(input.imageTags, context) }),
    ...(input.repositories != null && {
      repositories: serializeAws_restJson1StringFilterList(input.repositories, context),
    }),
    ...(input.resourceIds != null && {
      resourceIds: serializeAws_restJson1StringFilterList(input.resourceIds, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1CoverageFilterCriteria = (input: CoverageFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && {
      accountId: serializeAws_restJson1CoverageStringFilterList(input.accountId, context),
    }),
    ...(input.ec2InstanceTags != null && {
      ec2InstanceTags: serializeAws_restJson1CoverageMapFilterList(input.ec2InstanceTags, context),
    }),
    ...(input.ecrImageTags != null && {
      ecrImageTags: serializeAws_restJson1CoverageStringFilterList(input.ecrImageTags, context),
    }),
    ...(input.ecrRepositoryName != null && {
      ecrRepositoryName: serializeAws_restJson1CoverageStringFilterList(input.ecrRepositoryName, context),
    }),
    ...(input.lambdaFunctionName != null && {
      lambdaFunctionName: serializeAws_restJson1CoverageStringFilterList(input.lambdaFunctionName, context),
    }),
    ...(input.lambdaFunctionRuntime != null && {
      lambdaFunctionRuntime: serializeAws_restJson1CoverageStringFilterList(input.lambdaFunctionRuntime, context),
    }),
    ...(input.lambdaFunctionTags != null && {
      lambdaFunctionTags: serializeAws_restJson1CoverageMapFilterList(input.lambdaFunctionTags, context),
    }),
    ...(input.resourceId != null && {
      resourceId: serializeAws_restJson1CoverageStringFilterList(input.resourceId, context),
    }),
    ...(input.resourceType != null && {
      resourceType: serializeAws_restJson1CoverageStringFilterList(input.resourceType, context),
    }),
    ...(input.scanStatusCode != null && {
      scanStatusCode: serializeAws_restJson1CoverageStringFilterList(input.scanStatusCode, context),
    }),
    ...(input.scanStatusReason != null && {
      scanStatusReason: serializeAws_restJson1CoverageStringFilterList(input.scanStatusReason, context),
    }),
    ...(input.scanType != null && {
      scanType: serializeAws_restJson1CoverageStringFilterList(input.scanType, context),
    }),
  };
};

const serializeAws_restJson1CoverageMapFilter = (input: CoverageMapFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1CoverageMapFilterList = (input: CoverageMapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CoverageMapFilter(entry, context);
    });
};

const serializeAws_restJson1CoverageStringFilter = (input: CoverageStringFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1CoverageStringFilterList = (
  input: CoverageStringFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CoverageStringFilter(entry, context);
    });
};

const serializeAws_restJson1DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return {
    ...(input.endInclusive != null && { endInclusive: Math.round(input.endInclusive.getTime() / 1000) }),
    ...(input.startInclusive != null && { startInclusive: Math.round(input.startInclusive.getTime() / 1000) }),
  };
};

const serializeAws_restJson1DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DateFilter(entry, context);
    });
};

const serializeAws_restJson1Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

const serializeAws_restJson1DisableResourceTypeList = (
  input: (ResourceScanType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Ec2InstanceAggregation = (input: Ec2InstanceAggregation, context: __SerdeContext): any => {
  return {
    ...(input.amis != null && { amis: serializeAws_restJson1StringFilterList(input.amis, context) }),
    ...(input.instanceIds != null && {
      instanceIds: serializeAws_restJson1StringFilterList(input.instanceIds, context),
    }),
    ...(input.instanceTags != null && {
      instanceTags: serializeAws_restJson1MapFilterList(input.instanceTags, context),
    }),
    ...(input.operatingSystems != null && {
      operatingSystems: serializeAws_restJson1StringFilterList(input.operatingSystems, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1EcrConfiguration = (input: EcrConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.rescanDuration != null && { rescanDuration: input.rescanDuration }),
  };
};

const serializeAws_restJson1EnableResourceTypeList = (
  input: (ResourceScanType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FilterArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId != null && {
      awsAccountId: serializeAws_restJson1StringFilterList(input.awsAccountId, context),
    }),
    ...(input.componentId != null && {
      componentId: serializeAws_restJson1StringFilterList(input.componentId, context),
    }),
    ...(input.componentType != null && {
      componentType: serializeAws_restJson1StringFilterList(input.componentType, context),
    }),
    ...(input.ec2InstanceImageId != null && {
      ec2InstanceImageId: serializeAws_restJson1StringFilterList(input.ec2InstanceImageId, context),
    }),
    ...(input.ec2InstanceSubnetId != null && {
      ec2InstanceSubnetId: serializeAws_restJson1StringFilterList(input.ec2InstanceSubnetId, context),
    }),
    ...(input.ec2InstanceVpcId != null && {
      ec2InstanceVpcId: serializeAws_restJson1StringFilterList(input.ec2InstanceVpcId, context),
    }),
    ...(input.ecrImageArchitecture != null && {
      ecrImageArchitecture: serializeAws_restJson1StringFilterList(input.ecrImageArchitecture, context),
    }),
    ...(input.ecrImageHash != null && {
      ecrImageHash: serializeAws_restJson1StringFilterList(input.ecrImageHash, context),
    }),
    ...(input.ecrImagePushedAt != null && {
      ecrImagePushedAt: serializeAws_restJson1DateFilterList(input.ecrImagePushedAt, context),
    }),
    ...(input.ecrImageRegistry != null && {
      ecrImageRegistry: serializeAws_restJson1StringFilterList(input.ecrImageRegistry, context),
    }),
    ...(input.ecrImageRepositoryName != null && {
      ecrImageRepositoryName: serializeAws_restJson1StringFilterList(input.ecrImageRepositoryName, context),
    }),
    ...(input.ecrImageTags != null && {
      ecrImageTags: serializeAws_restJson1StringFilterList(input.ecrImageTags, context),
    }),
    ...(input.exploitAvailable != null && {
      exploitAvailable: serializeAws_restJson1StringFilterList(input.exploitAvailable, context),
    }),
    ...(input.findingArn != null && { findingArn: serializeAws_restJson1StringFilterList(input.findingArn, context) }),
    ...(input.findingStatus != null && {
      findingStatus: serializeAws_restJson1StringFilterList(input.findingStatus, context),
    }),
    ...(input.findingType != null && {
      findingType: serializeAws_restJson1StringFilterList(input.findingType, context),
    }),
    ...(input.firstObservedAt != null && {
      firstObservedAt: serializeAws_restJson1DateFilterList(input.firstObservedAt, context),
    }),
    ...(input.fixAvailable != null && {
      fixAvailable: serializeAws_restJson1StringFilterList(input.fixAvailable, context),
    }),
    ...(input.inspectorScore != null && {
      inspectorScore: serializeAws_restJson1NumberFilterList(input.inspectorScore, context),
    }),
    ...(input.lambdaFunctionExecutionRoleArn != null && {
      lambdaFunctionExecutionRoleArn: serializeAws_restJson1StringFilterList(
        input.lambdaFunctionExecutionRoleArn,
        context
      ),
    }),
    ...(input.lambdaFunctionLastModifiedAt != null && {
      lambdaFunctionLastModifiedAt: serializeAws_restJson1DateFilterList(input.lambdaFunctionLastModifiedAt, context),
    }),
    ...(input.lambdaFunctionLayers != null && {
      lambdaFunctionLayers: serializeAws_restJson1StringFilterList(input.lambdaFunctionLayers, context),
    }),
    ...(input.lambdaFunctionName != null && {
      lambdaFunctionName: serializeAws_restJson1StringFilterList(input.lambdaFunctionName, context),
    }),
    ...(input.lambdaFunctionRuntime != null && {
      lambdaFunctionRuntime: serializeAws_restJson1StringFilterList(input.lambdaFunctionRuntime, context),
    }),
    ...(input.lastObservedAt != null && {
      lastObservedAt: serializeAws_restJson1DateFilterList(input.lastObservedAt, context),
    }),
    ...(input.networkProtocol != null && {
      networkProtocol: serializeAws_restJson1StringFilterList(input.networkProtocol, context),
    }),
    ...(input.portRange != null && { portRange: serializeAws_restJson1PortRangeFilterList(input.portRange, context) }),
    ...(input.relatedVulnerabilities != null && {
      relatedVulnerabilities: serializeAws_restJson1StringFilterList(input.relatedVulnerabilities, context),
    }),
    ...(input.resourceId != null && { resourceId: serializeAws_restJson1StringFilterList(input.resourceId, context) }),
    ...(input.resourceTags != null && {
      resourceTags: serializeAws_restJson1MapFilterList(input.resourceTags, context),
    }),
    ...(input.resourceType != null && {
      resourceType: serializeAws_restJson1StringFilterList(input.resourceType, context),
    }),
    ...(input.severity != null && { severity: serializeAws_restJson1StringFilterList(input.severity, context) }),
    ...(input.title != null && { title: serializeAws_restJson1StringFilterList(input.title, context) }),
    ...(input.updatedAt != null && { updatedAt: serializeAws_restJson1DateFilterList(input.updatedAt, context) }),
    ...(input.vendorSeverity != null && {
      vendorSeverity: serializeAws_restJson1StringFilterList(input.vendorSeverity, context),
    }),
    ...(input.vulnerabilityId != null && {
      vulnerabilityId: serializeAws_restJson1StringFilterList(input.vulnerabilityId, context),
    }),
    ...(input.vulnerabilitySource != null && {
      vulnerabilitySource: serializeAws_restJson1StringFilterList(input.vulnerabilitySource, context),
    }),
    ...(input.vulnerablePackages != null && {
      vulnerablePackages: serializeAws_restJson1PackageFilterList(input.vulnerablePackages, context),
    }),
  };
};

const serializeAws_restJson1FindingTypeAggregation = (input: FindingTypeAggregation, context: __SerdeContext): any => {
  return {
    ...(input.findingType != null && { findingType: input.findingType }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1ImageLayerAggregation = (input: ImageLayerAggregation, context: __SerdeContext): any => {
  return {
    ...(input.layerHashes != null && {
      layerHashes: serializeAws_restJson1StringFilterList(input.layerHashes, context),
    }),
    ...(input.repositories != null && {
      repositories: serializeAws_restJson1StringFilterList(input.repositories, context),
    }),
    ...(input.resourceIds != null && {
      resourceIds: serializeAws_restJson1StringFilterList(input.resourceIds, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1LambdaFunctionAggregation = (
  input: LambdaFunctionAggregation,
  context: __SerdeContext
): any => {
  return {
    ...(input.functionNames != null && {
      functionNames: serializeAws_restJson1StringFilterList(input.functionNames, context),
    }),
    ...(input.functionTags != null && {
      functionTags: serializeAws_restJson1MapFilterList(input.functionTags, context),
    }),
    ...(input.resourceIds != null && {
      resourceIds: serializeAws_restJson1StringFilterList(input.resourceIds, context),
    }),
    ...(input.runtimes != null && { runtimes: serializeAws_restJson1StringFilterList(input.runtimes, context) }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1LambdaLayerAggregation = (input: LambdaLayerAggregation, context: __SerdeContext): any => {
  return {
    ...(input.functionNames != null && {
      functionNames: serializeAws_restJson1StringFilterList(input.functionNames, context),
    }),
    ...(input.layerArns != null && { layerArns: serializeAws_restJson1StringFilterList(input.layerArns, context) }),
    ...(input.resourceIds != null && {
      resourceIds: serializeAws_restJson1StringFilterList(input.resourceIds, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1MapFilter = (input: MapFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1MapFilterList = (input: MapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MapFilter(entry, context);
    });
};

const serializeAws_restJson1MeteringAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.lowerInclusive != null && { lowerInclusive: __serializeFloat(input.lowerInclusive) }),
    ...(input.upperInclusive != null && { upperInclusive: __serializeFloat(input.upperInclusive) }),
  };
};

const serializeAws_restJson1NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NumberFilter(entry, context);
    });
};

const serializeAws_restJson1PackageAggregation = (input: PackageAggregation, context: __SerdeContext): any => {
  return {
    ...(input.packageNames != null && {
      packageNames: serializeAws_restJson1StringFilterList(input.packageNames, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1PackageFilter = (input: PackageFilter, context: __SerdeContext): any => {
  return {
    ...(input.architecture != null && {
      architecture: serializeAws_restJson1StringFilter(input.architecture, context),
    }),
    ...(input.epoch != null && { epoch: serializeAws_restJson1NumberFilter(input.epoch, context) }),
    ...(input.name != null && { name: serializeAws_restJson1StringFilter(input.name, context) }),
    ...(input.release != null && { release: serializeAws_restJson1StringFilter(input.release, context) }),
    ...(input.sourceLambdaLayerArn != null && {
      sourceLambdaLayerArn: serializeAws_restJson1StringFilter(input.sourceLambdaLayerArn, context),
    }),
    ...(input.sourceLayerHash != null && {
      sourceLayerHash: serializeAws_restJson1StringFilter(input.sourceLayerHash, context),
    }),
    ...(input.version != null && { version: serializeAws_restJson1StringFilter(input.version, context) }),
  };
};

const serializeAws_restJson1PackageFilterList = (input: PackageFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PackageFilter(entry, context);
    });
};

const serializeAws_restJson1PortRangeFilter = (input: PortRangeFilter, context: __SerdeContext): any => {
  return {
    ...(input.beginInclusive != null && { beginInclusive: input.beginInclusive }),
    ...(input.endInclusive != null && { endInclusive: input.endInclusive }),
  };
};

const serializeAws_restJson1PortRangeFilterList = (input: PortRangeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PortRangeFilter(entry, context);
    });
};

const serializeAws_restJson1RepositoryAggregation = (input: RepositoryAggregation, context: __SerdeContext): any => {
  return {
    ...(input.repositories != null && {
      repositories: serializeAws_restJson1StringFilterList(input.repositories, context),
    }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1StringFilter = (input: StringFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparison != null && { comparison: input.comparison }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1StringFilterList = (input: StringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StringFilter(entry, context);
    });
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

const serializeAws_restJson1TitleAggregation = (input: TitleAggregation, context: __SerdeContext): any => {
  return {
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
    ...(input.titles != null && { titles: serializeAws_restJson1StringFilterList(input.titles, context) }),
    ...(input.vulnerabilityIds != null && {
      vulnerabilityIds: serializeAws_restJson1StringFilterList(input.vulnerabilityIds, context),
    }),
  };
};

const serializeAws_restJson1UsageAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1Account = (output: any, context: __SerdeContext): Account => {
  return {
    accountId: __expectString(output.accountId),
    resourceStatus:
      output.resourceStatus != null
        ? deserializeAws_restJson1ResourceStatus(output.resourceStatus, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AccountAggregationResponse = (
  output: any,
  context: __SerdeContext
): AccountAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccountList = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Account(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccountState = (output: any, context: __SerdeContext): AccountState => {
  return {
    accountId: __expectString(output.accountId),
    resourceState:
      output.resourceState != null ? deserializeAws_restJson1ResourceState(output.resourceState, context) : undefined,
    state: output.state != null ? deserializeAws_restJson1State(output.state, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AccountStateList = (output: any, context: __SerdeContext): AccountState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountState(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AggregationResponse = (output: any, context: __SerdeContext): AggregationResponse => {
  if (output.accountAggregation != null) {
    return {
      accountAggregation: deserializeAws_restJson1AccountAggregationResponse(output.accountAggregation, context),
    };
  }
  if (output.amiAggregation != null) {
    return {
      amiAggregation: deserializeAws_restJson1AmiAggregationResponse(output.amiAggregation, context),
    };
  }
  if (output.awsEcrContainerAggregation != null) {
    return {
      awsEcrContainerAggregation: deserializeAws_restJson1AwsEcrContainerAggregationResponse(
        output.awsEcrContainerAggregation,
        context
      ),
    };
  }
  if (output.ec2InstanceAggregation != null) {
    return {
      ec2InstanceAggregation: deserializeAws_restJson1Ec2InstanceAggregationResponse(
        output.ec2InstanceAggregation,
        context
      ),
    };
  }
  if (output.findingTypeAggregation != null) {
    return {
      findingTypeAggregation: deserializeAws_restJson1FindingTypeAggregationResponse(
        output.findingTypeAggregation,
        context
      ),
    };
  }
  if (output.imageLayerAggregation != null) {
    return {
      imageLayerAggregation: deserializeAws_restJson1ImageLayerAggregationResponse(
        output.imageLayerAggregation,
        context
      ),
    };
  }
  if (output.lambdaFunctionAggregation != null) {
    return {
      lambdaFunctionAggregation: deserializeAws_restJson1LambdaFunctionAggregationResponse(
        output.lambdaFunctionAggregation,
        context
      ),
    };
  }
  if (output.lambdaLayerAggregation != null) {
    return {
      lambdaLayerAggregation: deserializeAws_restJson1LambdaLayerAggregationResponse(
        output.lambdaLayerAggregation,
        context
      ),
    };
  }
  if (output.packageAggregation != null) {
    return {
      packageAggregation: deserializeAws_restJson1PackageAggregationResponse(output.packageAggregation, context),
    };
  }
  if (output.repositoryAggregation != null) {
    return {
      repositoryAggregation: deserializeAws_restJson1RepositoryAggregationResponse(
        output.repositoryAggregation,
        context
      ),
    };
  }
  if (output.titleAggregation != null) {
    return {
      titleAggregation: deserializeAws_restJson1TitleAggregationResponse(output.titleAggregation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AggregationResponseList = (
  output: any,
  context: __SerdeContext
): AggregationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AggregationResponse(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1AmiAggregationResponse = (
  output: any,
  context: __SerdeContext
): AmiAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    affectedInstances: __expectLong(output.affectedInstances),
    ami: __expectString(output.ami),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ArchitectureList = (output: any, context: __SerdeContext): (Architecture | string)[] => {
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

const deserializeAws_restJson1AutoEnable = (output: any, context: __SerdeContext): AutoEnable => {
  return {
    ec2: __expectBoolean(output.ec2),
    ecr: __expectBoolean(output.ecr),
    lambda: __expectBoolean(output.lambda),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    iamInstanceProfileArn: __expectString(output.iamInstanceProfileArn),
    imageId: __expectString(output.imageId),
    ipV4Addresses:
      output.ipV4Addresses != null ? deserializeAws_restJson1IpV4AddressList(output.ipV4Addresses, context) : undefined,
    ipV6Addresses:
      output.ipV6Addresses != null ? deserializeAws_restJson1IpV6AddressList(output.ipV6Addresses, context) : undefined,
    keyName: __expectString(output.keyName),
    launchedAt:
      output.launchedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.launchedAt))) : undefined,
    platform: __expectString(output.platform),
    subnetId: __expectString(output.subnetId),
    type: __expectString(output.type),
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1AwsEcrContainerAggregationResponse = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    architecture: __expectString(output.architecture),
    imageSha: __expectString(output.imageSha),
    imageTags: output.imageTags != null ? deserializeAws_restJson1StringList(output.imageTags, context) : undefined,
    repository: __expectString(output.repository),
    resourceId: __expectString(output.resourceId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcrContainerImageDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerImageDetails => {
  return {
    architecture: __expectString(output.architecture),
    author: __expectString(output.author),
    imageHash: __expectString(output.imageHash),
    imageTags: output.imageTags != null ? deserializeAws_restJson1ImageTagList(output.imageTags, context) : undefined,
    platform: __expectString(output.platform),
    pushedAt:
      output.pushedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pushedAt))) : undefined,
    registry: __expectString(output.registry),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  return {
    architectures:
      output.architectures != null
        ? deserializeAws_restJson1ArchitectureList(output.architectures, context)
        : undefined,
    codeSha256: __expectString(output.codeSha256),
    executionRoleArn: __expectString(output.executionRoleArn),
    functionName: __expectString(output.functionName),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    layers: output.layers != null ? deserializeAws_restJson1LayerList(output.layers, context) : undefined,
    packageType: __expectString(output.packageType),
    runtime: __expectString(output.runtime),
    version: __expectString(output.version),
    vpcConfig:
      output.vpcConfig != null ? deserializeAws_restJson1LambdaVpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Counts = (output: any, context: __SerdeContext): Counts => {
  return {
    count: __expectLong(output.count),
    groupKey: __expectString(output.groupKey),
  } as any;
};

const deserializeAws_restJson1CountsList = (output: any, context: __SerdeContext): Counts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Counts(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoveredResource = (output: any, context: __SerdeContext): CoveredResource => {
  return {
    accountId: __expectString(output.accountId),
    resourceId: __expectString(output.resourceId),
    resourceMetadata:
      output.resourceMetadata != null
        ? deserializeAws_restJson1ResourceScanMetadata(output.resourceMetadata, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    scanStatus: output.scanStatus != null ? deserializeAws_restJson1ScanStatus(output.scanStatus, context) : undefined,
    scanType: __expectString(output.scanType),
  } as any;
};

const deserializeAws_restJson1CoveredResources = (output: any, context: __SerdeContext): CoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoveredResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return {
    baseScore: __limitedParseDouble(output.baseScore),
    scoringVector: __expectString(output.scoringVector),
    source: __expectString(output.source),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1CvssScoreAdjustment = (output: any, context: __SerdeContext): CvssScoreAdjustment => {
  return {
    metric: __expectString(output.metric),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1CvssScoreAdjustmentList = (
  output: any,
  context: __SerdeContext
): CvssScoreAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CvssScoreAdjustment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return {
    adjustments:
      output.adjustments != null
        ? deserializeAws_restJson1CvssScoreAdjustmentList(output.adjustments, context)
        : undefined,
    cvssSource: __expectString(output.cvssSource),
    score: __limitedParseDouble(output.score),
    scoreSource: __expectString(output.scoreSource),
    scoringVector: __expectString(output.scoringVector),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CvssScore(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DateFilter = (output: any, context: __SerdeContext): DateFilter => {
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

const deserializeAws_restJson1DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DateFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DelegatedAdmin = (output: any, context: __SerdeContext): DelegatedAdmin => {
  return {
    accountId: __expectString(output.accountId),
    relationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1DelegatedAdminAccount = (output: any, context: __SerdeContext): DelegatedAdminAccount => {
  return {
    accountId: __expectString(output.accountId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DelegatedAdminAccountList = (
  output: any,
  context: __SerdeContext
): DelegatedAdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DelegatedAdminAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    bucketName: __expectString(output.bucketName),
    keyPrefix: __expectString(output.keyPrefix),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1Ec2InstanceAggregationResponse = (
  output: any,
  context: __SerdeContext
): Ec2InstanceAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    ami: __expectString(output.ami),
    instanceId: __expectString(output.instanceId),
    instanceTags:
      output.instanceTags != null ? deserializeAws_restJson1TagMap(output.instanceTags, context) : undefined,
    networkFindings: __expectLong(output.networkFindings),
    operatingSystem: __expectString(output.operatingSystem),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Ec2Metadata = (output: any, context: __SerdeContext): Ec2Metadata => {
  return {
    amiId: __expectString(output.amiId),
    platform: __expectString(output.platform),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EcrConfigurationState = (output: any, context: __SerdeContext): EcrConfigurationState => {
  return {
    rescanDurationState:
      output.rescanDurationState != null
        ? deserializeAws_restJson1EcrRescanDurationState(output.rescanDurationState, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EcrContainerImageMetadata = (
  output: any,
  context: __SerdeContext
): EcrContainerImageMetadata => {
  return {
    tags: output.tags != null ? deserializeAws_restJson1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EcrRepositoryMetadata = (output: any, context: __SerdeContext): EcrRepositoryMetadata => {
  return {
    name: __expectString(output.name),
    scanFrequency: __expectString(output.scanFrequency),
  } as any;
};

const deserializeAws_restJson1EcrRescanDurationState = (
  output: any,
  context: __SerdeContext
): EcrRescanDurationState => {
  return {
    rescanDuration: __expectString(output.rescanDuration),
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1ExploitabilityDetails = (output: any, context: __SerdeContext): ExploitabilityDetails => {
  return {
    lastKnownExploitAt:
      output.lastKnownExploitAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastKnownExploitAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1FailedAccount = (output: any, context: __SerdeContext): FailedAccount => {
  return {
    accountId: __expectString(output.accountId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    resourceStatus:
      output.resourceStatus != null
        ? deserializeAws_restJson1ResourceStatus(output.resourceStatus, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1FailedAccountList = (output: any, context: __SerdeContext): FailedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    action: __expectString(output.action),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    criteria: output.criteria != null ? deserializeAws_restJson1FilterCriteria(output.criteria, context) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    ownerId: __expectString(output.ownerId),
    reason: __expectString(output.reason),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    awsAccountId:
      output.awsAccountId != null ? deserializeAws_restJson1StringFilterList(output.awsAccountId, context) : undefined,
    componentId:
      output.componentId != null ? deserializeAws_restJson1StringFilterList(output.componentId, context) : undefined,
    componentType:
      output.componentType != null
        ? deserializeAws_restJson1StringFilterList(output.componentType, context)
        : undefined,
    ec2InstanceImageId:
      output.ec2InstanceImageId != null
        ? deserializeAws_restJson1StringFilterList(output.ec2InstanceImageId, context)
        : undefined,
    ec2InstanceSubnetId:
      output.ec2InstanceSubnetId != null
        ? deserializeAws_restJson1StringFilterList(output.ec2InstanceSubnetId, context)
        : undefined,
    ec2InstanceVpcId:
      output.ec2InstanceVpcId != null
        ? deserializeAws_restJson1StringFilterList(output.ec2InstanceVpcId, context)
        : undefined,
    ecrImageArchitecture:
      output.ecrImageArchitecture != null
        ? deserializeAws_restJson1StringFilterList(output.ecrImageArchitecture, context)
        : undefined,
    ecrImageHash:
      output.ecrImageHash != null ? deserializeAws_restJson1StringFilterList(output.ecrImageHash, context) : undefined,
    ecrImagePushedAt:
      output.ecrImagePushedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ecrImagePushedAt, context)
        : undefined,
    ecrImageRegistry:
      output.ecrImageRegistry != null
        ? deserializeAws_restJson1StringFilterList(output.ecrImageRegistry, context)
        : undefined,
    ecrImageRepositoryName:
      output.ecrImageRepositoryName != null
        ? deserializeAws_restJson1StringFilterList(output.ecrImageRepositoryName, context)
        : undefined,
    ecrImageTags:
      output.ecrImageTags != null ? deserializeAws_restJson1StringFilterList(output.ecrImageTags, context) : undefined,
    exploitAvailable:
      output.exploitAvailable != null
        ? deserializeAws_restJson1StringFilterList(output.exploitAvailable, context)
        : undefined,
    findingArn:
      output.findingArn != null ? deserializeAws_restJson1StringFilterList(output.findingArn, context) : undefined,
    findingStatus:
      output.findingStatus != null
        ? deserializeAws_restJson1StringFilterList(output.findingStatus, context)
        : undefined,
    findingType:
      output.findingType != null ? deserializeAws_restJson1StringFilterList(output.findingType, context) : undefined,
    firstObservedAt:
      output.firstObservedAt != null
        ? deserializeAws_restJson1DateFilterList(output.firstObservedAt, context)
        : undefined,
    fixAvailable:
      output.fixAvailable != null ? deserializeAws_restJson1StringFilterList(output.fixAvailable, context) : undefined,
    inspectorScore:
      output.inspectorScore != null
        ? deserializeAws_restJson1NumberFilterList(output.inspectorScore, context)
        : undefined,
    lambdaFunctionExecutionRoleArn:
      output.lambdaFunctionExecutionRoleArn != null
        ? deserializeAws_restJson1StringFilterList(output.lambdaFunctionExecutionRoleArn, context)
        : undefined,
    lambdaFunctionLastModifiedAt:
      output.lambdaFunctionLastModifiedAt != null
        ? deserializeAws_restJson1DateFilterList(output.lambdaFunctionLastModifiedAt, context)
        : undefined,
    lambdaFunctionLayers:
      output.lambdaFunctionLayers != null
        ? deserializeAws_restJson1StringFilterList(output.lambdaFunctionLayers, context)
        : undefined,
    lambdaFunctionName:
      output.lambdaFunctionName != null
        ? deserializeAws_restJson1StringFilterList(output.lambdaFunctionName, context)
        : undefined,
    lambdaFunctionRuntime:
      output.lambdaFunctionRuntime != null
        ? deserializeAws_restJson1StringFilterList(output.lambdaFunctionRuntime, context)
        : undefined,
    lastObservedAt:
      output.lastObservedAt != null
        ? deserializeAws_restJson1DateFilterList(output.lastObservedAt, context)
        : undefined,
    networkProtocol:
      output.networkProtocol != null
        ? deserializeAws_restJson1StringFilterList(output.networkProtocol, context)
        : undefined,
    portRange:
      output.portRange != null ? deserializeAws_restJson1PortRangeFilterList(output.portRange, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? deserializeAws_restJson1StringFilterList(output.relatedVulnerabilities, context)
        : undefined,
    resourceId:
      output.resourceId != null ? deserializeAws_restJson1StringFilterList(output.resourceId, context) : undefined,
    resourceTags:
      output.resourceTags != null ? deserializeAws_restJson1MapFilterList(output.resourceTags, context) : undefined,
    resourceType:
      output.resourceType != null ? deserializeAws_restJson1StringFilterList(output.resourceType, context) : undefined,
    severity: output.severity != null ? deserializeAws_restJson1StringFilterList(output.severity, context) : undefined,
    title: output.title != null ? deserializeAws_restJson1StringFilterList(output.title, context) : undefined,
    updatedAt: output.updatedAt != null ? deserializeAws_restJson1DateFilterList(output.updatedAt, context) : undefined,
    vendorSeverity:
      output.vendorSeverity != null
        ? deserializeAws_restJson1StringFilterList(output.vendorSeverity, context)
        : undefined,
    vulnerabilityId:
      output.vulnerabilityId != null
        ? deserializeAws_restJson1StringFilterList(output.vulnerabilityId, context)
        : undefined,
    vulnerabilitySource:
      output.vulnerabilitySource != null
        ? deserializeAws_restJson1StringFilterList(output.vulnerabilitySource, context)
        : undefined,
    vulnerablePackages:
      output.vulnerablePackages != null
        ? deserializeAws_restJson1PackageFilterList(output.vulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Filter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    description: __expectString(output.description),
    exploitAvailable: __expectString(output.exploitAvailable),
    exploitabilityDetails:
      output.exploitabilityDetails != null
        ? deserializeAws_restJson1ExploitabilityDetails(output.exploitabilityDetails, context)
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
        ? deserializeAws_restJson1InspectorScoreDetails(output.inspectorScoreDetails, context)
        : undefined,
    lastObservedAt:
      output.lastObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastObservedAt)))
        : undefined,
    networkReachabilityDetails:
      output.networkReachabilityDetails != null
        ? deserializeAws_restJson1NetworkReachabilityDetails(output.networkReachabilityDetails, context)
        : undefined,
    packageVulnerabilityDetails:
      output.packageVulnerabilityDetails != null
        ? deserializeAws_restJson1PackageVulnerabilityDetails(output.packageVulnerabilityDetails, context)
        : undefined,
    remediation:
      output.remediation != null ? deserializeAws_restJson1Remediation(output.remediation, context) : undefined,
    resources: output.resources != null ? deserializeAws_restJson1ResourceList(output.resources, context) : undefined,
    severity: __expectString(output.severity),
    status: __expectString(output.status),
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingList = (output: any, context: __SerdeContext): Finding[] => {
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

const deserializeAws_restJson1FindingTypeAggregationResponse = (
  output: any,
  context: __SerdeContext
): FindingTypeAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FreeTrialAccountInfo = (output: any, context: __SerdeContext): FreeTrialAccountInfo => {
  return {
    accountId: __expectString(output.accountId),
    freeTrialInfo:
      output.freeTrialInfo != null
        ? deserializeAws_restJson1FreeTrialInfoList(output.freeTrialInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FreeTrialAccountInfoList = (
  output: any,
  context: __SerdeContext
): FreeTrialAccountInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FreeTrialAccountInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FreeTrialInfo = (output: any, context: __SerdeContext): FreeTrialInfo => {
  return {
    end: output.end != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.end))) : undefined,
    start: output.start != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.start))) : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FreeTrialInfoError = (output: any, context: __SerdeContext): FreeTrialInfoError => {
  return {
    accountId: __expectString(output.accountId),
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1FreeTrialInfoErrorList = (output: any, context: __SerdeContext): FreeTrialInfoError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FreeTrialInfoError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FreeTrialInfoList = (output: any, context: __SerdeContext): FreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FreeTrialInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImageLayerAggregationResponse = (
  output: any,
  context: __SerdeContext
): ImageLayerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    layerHash: __expectString(output.layerHash),
    repository: __expectString(output.repository),
    resourceId: __expectString(output.resourceId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImageTagList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return {
    adjustedCvss:
      output.adjustedCvss != null ? deserializeAws_restJson1CvssScoreDetails(output.adjustedCvss, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IpV4AddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1IpV6AddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LambdaFunctionAggregationResponse = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    functionName: __expectString(output.functionName),
    lambdaTags: output.lambdaTags != null ? deserializeAws_restJson1TagMap(output.lambdaTags, context) : undefined,
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    runtime: __expectString(output.runtime),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LambdaFunctionMetadata = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMetadata => {
  return {
    functionName: __expectString(output.functionName),
    functionTags:
      output.functionTags != null ? deserializeAws_restJson1TagMap(output.functionTags, context) : undefined,
    layers: output.layers != null ? deserializeAws_restJson1LambdaLayerList(output.layers, context) : undefined,
    runtime: __expectString(output.runtime),
  } as any;
};

const deserializeAws_restJson1LambdaLayerAggregationResponse = (
  output: any,
  context: __SerdeContext
): LambdaLayerAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    functionName: __expectString(output.functionName),
    layerArn: __expectString(output.layerArn),
    resourceId: __expectString(output.resourceId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LambdaLayerList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LambdaVpcConfig = (output: any, context: __SerdeContext): LambdaVpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1LayerList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MapFilter = (output: any, context: __SerdeContext): MapFilter => {
  return {
    comparison: __expectString(output.comparison),
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1MapFilterList = (output: any, context: __SerdeContext): MapFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MapFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    accountId: __expectString(output.accountId),
    delegatedAdminAccountId: __expectString(output.delegatedAdminAccountId),
    relationshipStatus: __expectString(output.relationshipStatus),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberList = (output: any, context: __SerdeContext): Member[] => {
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

const deserializeAws_restJson1NetworkPath = (output: any, context: __SerdeContext): NetworkPath => {
  return {
    steps: output.steps != null ? deserializeAws_restJson1StepList(output.steps, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkReachabilityDetails = (
  output: any,
  context: __SerdeContext
): NetworkReachabilityDetails => {
  return {
    networkPath:
      output.networkPath != null ? deserializeAws_restJson1NetworkPath(output.networkPath, context) : undefined,
    openPortRange:
      output.openPortRange != null ? deserializeAws_restJson1PortRange(output.openPortRange, context) : undefined,
    protocol: __expectString(output.protocol),
  } as any;
};

const deserializeAws_restJson1NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    lowerInclusive: __limitedParseDouble(output.lowerInclusive),
    upperInclusive: __limitedParseDouble(output.upperInclusive),
  } as any;
};

const deserializeAws_restJson1NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NumberFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageAggregationResponse = (
  output: any,
  context: __SerdeContext
): PackageAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    packageName: __expectString(output.packageName),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageFilter = (output: any, context: __SerdeContext): PackageFilter => {
  return {
    architecture:
      output.architecture != null ? deserializeAws_restJson1StringFilter(output.architecture, context) : undefined,
    epoch: output.epoch != null ? deserializeAws_restJson1NumberFilter(output.epoch, context) : undefined,
    name: output.name != null ? deserializeAws_restJson1StringFilter(output.name, context) : undefined,
    release: output.release != null ? deserializeAws_restJson1StringFilter(output.release, context) : undefined,
    sourceLambdaLayerArn:
      output.sourceLambdaLayerArn != null
        ? deserializeAws_restJson1StringFilter(output.sourceLambdaLayerArn, context)
        : undefined,
    sourceLayerHash:
      output.sourceLayerHash != null
        ? deserializeAws_restJson1StringFilter(output.sourceLayerHash, context)
        : undefined,
    version: output.version != null ? deserializeAws_restJson1StringFilter(output.version, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PackageFilterList = (output: any, context: __SerdeContext): PackageFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageVulnerabilityDetails = (
  output: any,
  context: __SerdeContext
): PackageVulnerabilityDetails => {
  return {
    cvss: output.cvss != null ? deserializeAws_restJson1CvssScoreList(output.cvss, context) : undefined,
    referenceUrls:
      output.referenceUrls != null
        ? deserializeAws_restJson1NonEmptyStringList(output.referenceUrls, context)
        : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? deserializeAws_restJson1VulnerabilityIdList(output.relatedVulnerabilities, context)
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
      output.vulnerablePackages != null
        ? deserializeAws_restJson1VulnerablePackageList(output.vulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    operation: __expectString(output.operation),
    service: __expectString(output.service),
  } as any;
};

const deserializeAws_restJson1Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    begin: __expectInt32(output.begin),
    end: __expectInt32(output.end),
  } as any;
};

const deserializeAws_restJson1PortRangeFilter = (output: any, context: __SerdeContext): PortRangeFilter => {
  return {
    beginInclusive: __expectInt32(output.beginInclusive),
    endInclusive: __expectInt32(output.endInclusive),
  } as any;
};

const deserializeAws_restJson1PortRangeFilterList = (output: any, context: __SerdeContext): PortRangeFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortRangeFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Url: __expectString(output.Url),
    text: __expectString(output.text),
  } as any;
};

const deserializeAws_restJson1Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    recommendation:
      output.recommendation != null
        ? deserializeAws_restJson1Recommendation(output.recommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RepositoryAggregationResponse = (
  output: any,
  context: __SerdeContext
): RepositoryAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    affectedImages: __expectLong(output.affectedImages),
    repository: __expectString(output.repository),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    details: output.details != null ? deserializeAws_restJson1ResourceDetails(output.details, context) : undefined,
    id: __expectString(output.id),
    partition: __expectString(output.partition),
    region: __expectString(output.region),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    awsEc2Instance:
      output.awsEc2Instance != null
        ? deserializeAws_restJson1AwsEc2InstanceDetails(output.awsEc2Instance, context)
        : undefined,
    awsEcrContainerImage:
      output.awsEcrContainerImage != null
        ? deserializeAws_restJson1AwsEcrContainerImageDetails(output.awsEcrContainerImage, context)
        : undefined,
    awsLambdaFunction:
      output.awsLambdaFunction != null
        ? deserializeAws_restJson1AwsLambdaFunctionDetails(output.awsLambdaFunction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceScanMetadata = (output: any, context: __SerdeContext): ResourceScanMetadata => {
  return {
    ec2: output.ec2 != null ? deserializeAws_restJson1Ec2Metadata(output.ec2, context) : undefined,
    ecrImage:
      output.ecrImage != null ? deserializeAws_restJson1EcrContainerImageMetadata(output.ecrImage, context) : undefined,
    ecrRepository:
      output.ecrRepository != null
        ? deserializeAws_restJson1EcrRepositoryMetadata(output.ecrRepository, context)
        : undefined,
    lambdaFunction:
      output.lambdaFunction != null
        ? deserializeAws_restJson1LambdaFunctionMetadata(output.lambdaFunction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceState = (output: any, context: __SerdeContext): ResourceState => {
  return {
    ec2: output.ec2 != null ? deserializeAws_restJson1State(output.ec2, context) : undefined,
    ecr: output.ecr != null ? deserializeAws_restJson1State(output.ecr, context) : undefined,
    lambda: output.lambda != null ? deserializeAws_restJson1State(output.lambda, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceStatus = (output: any, context: __SerdeContext): ResourceStatus => {
  return {
    ec2: __expectString(output.ec2),
    ecr: __expectString(output.ecr),
    lambda: __expectString(output.lambda),
  } as any;
};

const deserializeAws_restJson1ScanStatus = (output: any, context: __SerdeContext): ScanStatus => {
  return {
    reason: __expectString(output.reason),
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SeverityCounts = (output: any, context: __SerdeContext): SeverityCounts => {
  return {
    all: __expectLong(output.all),
    critical: __expectLong(output.critical),
    high: __expectLong(output.high),
    medium: __expectLong(output.medium),
  } as any;
};

const deserializeAws_restJson1State = (output: any, context: __SerdeContext): State => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1Step = (output: any, context: __SerdeContext): Step => {
  return {
    componentId: __expectString(output.componentId),
    componentType: __expectString(output.componentType),
  } as any;
};

const deserializeAws_restJson1StepList = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Step(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringFilter = (output: any, context: __SerdeContext): StringFilter => {
  return {
    comparison: __expectString(output.comparison),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1StringFilterList = (output: any, context: __SerdeContext): StringFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StringFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TitleAggregationResponse = (
  output: any,
  context: __SerdeContext
): TitleAggregationResponse => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts:
      output.severityCounts != null
        ? deserializeAws_restJson1SeverityCounts(output.severityCounts, context)
        : undefined,
    title: __expectString(output.title),
    vulnerabilityId: __expectString(output.vulnerabilityId),
  } as any;
};

const deserializeAws_restJson1Usage = (output: any, context: __SerdeContext): Usage => {
  return {
    currency: __expectString(output.currency),
    estimatedMonthlyCost: __limitedParseDouble(output.estimatedMonthlyCost),
    total: __limitedParseDouble(output.total),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UsageList = (output: any, context: __SerdeContext): Usage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Usage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return {
    accountId: __expectString(output.accountId),
    usage: output.usage != null ? deserializeAws_restJson1UsageList(output.usage, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UsageTotalList = (output: any, context: __SerdeContext): UsageTotal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageTotal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFields = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VulnerabilityIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1VulnerablePackage = (output: any, context: __SerdeContext): VulnerablePackage => {
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

const deserializeAws_restJson1VulnerablePackageList = (output: any, context: __SerdeContext): VulnerablePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VulnerablePackage(entry, context);
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
