import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "../commands/BatchGetCustomDataIdentifiersCommand";
import {
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
} from "../commands/CreateClassificationJobCommand";
import {
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
} from "../commands/CreateCustomDataIdentifierCommand";
import {
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
} from "../commands/CreateFindingsFilterCommand";
import { CreateInvitationsCommandInput, CreateInvitationsCommandOutput } from "../commands/CreateInvitationsCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "../commands/CreateMemberCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "../commands/CreateSampleFindingsCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import {
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
} from "../commands/DeleteCustomDataIdentifierCommand";
import {
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
} from "../commands/DeleteFindingsFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "../commands/DeleteMemberCommand";
import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "../commands/DescribeBucketsCommand";
import {
  DescribeClassificationJobCommandInput,
  DescribeClassificationJobCommandOutput,
} from "../commands/DescribeClassificationJobCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { DisableMacieCommandInput, DisableMacieCommandOutput } from "../commands/DisableMacieCommand";
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
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "../commands/DisassociateMemberCommand";
import { EnableMacieCommandInput, EnableMacieCommandOutput } from "../commands/EnableMacieCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "../commands/GetAdministratorAccountCommand";
import {
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "../commands/GetBucketStatisticsCommand";
import {
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "../commands/GetClassificationExportConfigurationCommand";
import {
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "../commands/GetCustomDataIdentifierCommand";
import {
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "../commands/GetFindingStatisticsCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "../commands/GetFindingsFilterCommand";
import {
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "../commands/GetFindingsPublicationConfigurationCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "../commands/GetMacieSessionCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "../commands/GetUsageTotalsCommand";
import {
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "../commands/ListClassificationJobsCommand";
import {
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "../commands/ListCustomDataIdentifiersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import {
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "../commands/ListFindingsFiltersCommand";
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
import {
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
} from "../commands/PutClassificationExportConfigurationCommand";
import {
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
} from "../commands/PutFindingsPublicationConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
} from "../commands/TestCustomDataIdentifierCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "../commands/UpdateClassificationJobCommand";
import {
  UpdateFindingsFilterCommandInput,
  UpdateFindingsFilterCommandOutput,
} from "../commands/UpdateFindingsFilterCommand";
import { UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput } from "../commands/UpdateMacieSessionCommand";
import {
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
} from "../commands/UpdateMemberSessionCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  AccessControlList,
  AccessDeniedException,
  AccountDetail,
  AccountLevelPermissions,
  AdminAccount,
  ApiCallDetails,
  AssumedRole,
  AwsAccount,
  AwsService,
  BatchGetCustomDataIdentifierSummary,
  BlockPublicAccess,
  BucketCountByEffectivePermission,
  BucketCountByEncryptionType,
  BucketCountBySharedAccessType,
  BucketCountPolicyAllowsUnencryptedObjectUploads,
  BucketCriteriaAdditionalProperties,
  BucketLevelPermissions,
  BucketMetadata,
  BucketPermissionConfiguration,
  BucketPolicy,
  BucketPublicAccess,
  BucketServerSideEncryption,
  BucketSortCriteria,
  Cell,
  ClassificationDetails,
  ClassificationExportConfiguration,
  ClassificationResult,
  ClassificationResultStatus,
  ConflictException,
  CriteriaBlockForJob,
  CriteriaForJob,
  CriterionAdditionalProperties,
  CustomDataIdentifierSummary,
  CustomDataIdentifiers,
  CustomDetection,
  DailySchedule,
  DefaultDetection,
  DomainDetails,
  FederatedUser,
  Finding,
  FindingAction,
  FindingActor,
  FindingCriteria,
  FindingStatisticsSortCriteria,
  FindingType,
  FindingsFilterListItem,
  GroupCount,
  IamUser,
  InternalServerException,
  Invitation,
  IpAddressDetails,
  IpCity,
  IpCountry,
  IpGeoLocation,
  IpOwner,
  JobDetails,
  JobScheduleFrequency,
  JobScopeTerm,
  JobScopingBlock,
  JobSummary,
  KeyValuePair,
  LastRunErrorStatus,
  ListJobsFilterCriteria,
  ListJobsFilterTerm,
  ListJobsSortCriteria,
  MatchingBucket,
  MatchingResource,
  Member,
  MonthlySchedule,
  ObjectCountByEncryptionType,
  ObjectLevelStatistics,
  Occurrences,
  Page,
  PolicyDetails,
  Range,
  ReplicationDetails,
  ResourceNotFoundException,
  ResourcesAffected,
  S3Bucket,
  S3BucketCriteriaForJob,
  S3BucketDefinitionForJob,
  S3BucketOwner,
  S3Destination,
  S3JobDefinition,
  S3Object,
  Scoping,
  SearchResourcesBucketCriteria,
  SearchResourcesCriteria,
  SearchResourcesCriteriaBlock,
  SearchResourcesSimpleCriterion,
  SearchResourcesSortCriteria,
  SearchResourcesTagCriterion,
  SearchResourcesTagCriterionPair,
  SecurityHubConfiguration,
  SensitiveDataItem,
  ServerSideEncryption,
  ServiceLimit,
  ServiceQuotaExceededException,
  SessionContext,
  SessionContextAttributes,
  SessionIssuer,
  Severity,
  SimpleCriterionForJob,
  SimpleScopeTerm,
  SortCriteria,
  Statistics,
  TagCriterionForJob,
  TagCriterionPairForJob,
  TagScopeTerm,
  TagValuePair,
  ThrottlingException,
  UnprocessedAccount,
  UsageByAccount,
  UsageRecord,
  UsageStatisticsFilter,
  UsageStatisticsSortBy,
  UsageTotal,
  UserIdentity,
  UserIdentityRoot,
  UserPausedDetails,
  ValidationException,
  WeeklySchedule,
  _Record,
} from "../models/models_0";
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
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/accept";
  let body: any;
  body = JSON.stringify({
    ...(input.administratorAccountId !== undefined &&
      input.administratorAccountId !== null && { administratorAccountId: input.administratorAccountId }),
    ...(input.invitationId !== undefined && input.invitationId !== null && { invitationId: input.invitationId }),
    ...(input.masterAccount !== undefined && input.masterAccount !== null && { masterAccount: input.masterAccount }),
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

export const serializeAws_restJson1BatchGetCustomDataIdentifiersCommand = async (
  input: BatchGetCustomDataIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ids !== undefined &&
      input.ids !== null && { ids: serializeAws_restJson1__listOf__string(input.ids, context) }),
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

export const serializeAws_restJson1CreateClassificationJobCommand = async (
  input: CreateClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customDataIdentifierIds !== undefined &&
      input.customDataIdentifierIds !== null && {
        customDataIdentifierIds: serializeAws_restJson1__listOf__string(input.customDataIdentifierIds, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.initialRun !== undefined && input.initialRun !== null && { initialRun: input.initialRun }),
    ...(input.jobType !== undefined && input.jobType !== null && { jobType: input.jobType }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.s3JobDefinition !== undefined &&
      input.s3JobDefinition !== null && {
        s3JobDefinition: serializeAws_restJson1S3JobDefinition(input.s3JobDefinition, context),
      }),
    ...(input.samplingPercentage !== undefined &&
      input.samplingPercentage !== null && { samplingPercentage: input.samplingPercentage }),
    ...(input.scheduleFrequency !== undefined &&
      input.scheduleFrequency !== null && {
        scheduleFrequency: serializeAws_restJson1JobScheduleFrequency(input.scheduleFrequency, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateCustomDataIdentifierCommand = async (
  input: CreateCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.ignoreWords !== undefined &&
      input.ignoreWords !== null && {
        ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
      }),
    ...(input.keywords !== undefined &&
      input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
    ...(input.maximumMatchDistance !== undefined &&
      input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.regex !== undefined && input.regex !== null && { regex: input.regex }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateFindingsFilterCommand = async (
  input: CreateFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters";
  let body: any;
  body = JSON.stringify({
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.findingCriteria !== undefined &&
      input.findingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.position !== undefined && input.position !== null && { position: input.position }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateInvitationsCommand = async (
  input: CreateInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
    ...(input.disableEmailNotification !== undefined &&
      input.disableEmailNotification !== null && { disableEmailNotification: input.disableEmailNotification }),
    ...(input.message !== undefined && input.message !== null && { message: input.message }),
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

export const serializeAws_restJson1CreateMemberCommand = async (
  input: CreateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.account !== undefined &&
      input.account !== null && { account: serializeAws_restJson1AccountDetail(input.account, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/sample";
  let body: any;
  body = JSON.stringify({
    ...(input.findingTypes !== undefined &&
      input.findingTypes !== null && {
        findingTypes: serializeAws_restJson1__listOfFindingType(input.findingTypes, context),
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
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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

export const serializeAws_restJson1DeleteCustomDataIdentifierCommand = async (
  input: DeleteCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1DeleteFindingsFilterCommand = async (
  input: DeleteFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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

export const serializeAws_restJson1DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1DescribeBucketsCommand = async (
  input: DescribeBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/s3";
  let body: any;
  body = JSON.stringify({
    ...(input.criteria !== undefined &&
      input.criteria !== null && { criteria: serializeAws_restJson1BucketCriteria(input.criteria, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && {
        sortCriteria: serializeAws_restJson1BucketSortCriteria(input.sortCriteria, context),
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

export const serializeAws_restJson1DescribeClassificationJobCommand = async (
  input: DescribeClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
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

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/configuration";
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

export const serializeAws_restJson1DisableMacieCommand = async (
  input: DisableMacieCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
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

export const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  const query: any = {
    ...(input.adminAccountId !== undefined && { adminAccountId: input.adminAccountId }),
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

export const serializeAws_restJson1DisassociateMemberCommand = async (
  input: DisassociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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

export const serializeAws_restJson1EnableMacieCommand = async (
  input: EnableMacieCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.findingPublishingFrequency !== undefined &&
      input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId !== undefined &&
      input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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

export const serializeAws_restJson1GetBucketStatisticsCommand = async (
  input: GetBucketStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/s3/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
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

export const serializeAws_restJson1GetClassificationExportConfigurationCommand = async (
  input: GetClassificationExportConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-export-configuration";
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

export const serializeAws_restJson1GetCustomDataIdentifierCommand = async (
  input: GetCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.findingIds !== undefined &&
      input.findingIds !== null && { findingIds: serializeAws_restJson1__listOf__string(input.findingIds, context) }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) }),
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

export const serializeAws_restJson1GetFindingsFilterCommand = async (
  input: GetFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1GetFindingsPublicationConfigurationCommand = async (
  input: GetFindingsPublicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings-publication-configuration";
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

export const serializeAws_restJson1GetFindingStatisticsCommand = async (
  input: GetFindingStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.findingCriteria !== undefined &&
      input.findingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
      }),
    ...(input.groupBy !== undefined && input.groupBy !== null && { groupBy: input.groupBy }),
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && {
        sortCriteria: serializeAws_restJson1FindingStatisticsSortCriteria(input.sortCriteria, context),
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

export const serializeAws_restJson1GetMacieSessionCommand = async (
  input: GetMacieSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
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

export const serializeAws_restJson1GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1GetUsageStatisticsCommand = async (
  input: GetUsageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.filterBy !== undefined &&
      input.filterBy !== null && {
        filterBy: serializeAws_restJson1__listOfUsageStatisticsFilter(input.filterBy, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1UsageStatisticsSortBy(input.sortBy, context) }),
    ...(input.timeRange !== undefined && input.timeRange !== null && { timeRange: input.timeRange }),
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

export const serializeAws_restJson1GetUsageTotalsCommand = async (
  input: GetUsageTotalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage";
  const query: any = {
    ...(input.timeRange !== undefined && { timeRange: input.timeRange }),
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

export const serializeAws_restJson1ListClassificationJobsCommand = async (
  input: ListClassificationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria !== undefined &&
      input.filterCriteria !== null && {
        filterCriteria: serializeAws_restJson1ListJobsFilterCriteria(input.filterCriteria, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && {
        sortCriteria: serializeAws_restJson1ListJobsSortCriteria(input.sortCriteria, context),
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

export const serializeAws_restJson1ListCustomDataIdentifiersCommand = async (
  input: ListCustomDataIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.findingCriteria !== undefined &&
      input.findingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) }),
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

export const serializeAws_restJson1ListFindingsFiltersCommand = async (
  input: ListFindingsFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.onlyAssociated !== undefined && { onlyAssociated: input.onlyAssociated }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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

export const serializeAws_restJson1PutClassificationExportConfigurationCommand = async (
  input: PutClassificationExportConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-export-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_restJson1ClassificationExportConfiguration(input.configuration, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutFindingsPublicationConfigurationCommand = async (
  input: PutFindingsPublicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings-publication-configuration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.securityHubConfiguration !== undefined &&
      input.securityHubConfiguration !== null && {
        securityHubConfiguration: serializeAws_restJson1SecurityHubConfiguration(
          input.securityHubConfiguration,
          context
        ),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchResourcesCommand = async (
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/search-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.bucketCriteria !== undefined &&
      input.bucketCriteria !== null && {
        bucketCriteria: serializeAws_restJson1SearchResourcesBucketCriteria(input.bucketCriteria, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortCriteria !== undefined &&
      input.sortCriteria !== null && {
        sortCriteria: serializeAws_restJson1SearchResourcesSortCriteria(input.sortCriteria, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1TestCustomDataIdentifierCommand = async (
  input: TestCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/test";
  let body: any;
  body = JSON.stringify({
    ...(input.ignoreWords !== undefined &&
      input.ignoreWords !== null && {
        ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
      }),
    ...(input.keywords !== undefined &&
      input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
    ...(input.maximumMatchDistance !== undefined &&
      input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance }),
    ...(input.regex !== undefined && input.regex !== null && { regex: input.regex }),
    ...(input.sampleText !== undefined && input.sampleText !== null && { sampleText: input.sampleText }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateClassificationJobCommand = async (
  input: UpdateClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }),
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

export const serializeAws_restJson1UpdateFindingsFilterCommand = async (
  input: UpdateFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.findingCriteria !== undefined &&
      input.findingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.position !== undefined && input.position !== null && { position: input.position }),
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

export const serializeAws_restJson1UpdateMacieSessionCommand = async (
  input: UpdateMacieSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
  let body: any;
  body = JSON.stringify({
    ...(input.findingPublishingFrequency !== undefined &&
      input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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

export const serializeAws_restJson1UpdateMemberSessionCommand = async (
  input: UpdateMemberSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie/members/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.autoEnable !== undefined && input.autoEnable !== null && { autoEnable: input.autoEnable }),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError(output, context);
  }
  const contents: BatchGetCustomDataIdentifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    customDataIdentifiers: undefined,
    notFoundIdentifierIds: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataIdentifiers !== undefined && data.customDataIdentifiers !== null) {
    contents.customDataIdentifiers = deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary(
      data.customDataIdentifiers,
      context
    );
  }
  if (data.notFoundIdentifierIds !== undefined && data.notFoundIdentifierIds !== null) {
    contents.notFoundIdentifierIds = deserializeAws_restJson1__listOf__string(data.notFoundIdentifierIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomDataIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateClassificationJobCommandError(output, context);
  }
  const contents: CreateClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobArn: undefined,
    jobId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobArn !== undefined && data.jobArn !== null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomDataIdentifierCommandError(output, context);
  }
  const contents: CreateCustomDataIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    customDataIdentifierId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataIdentifierId !== undefined && data.customDataIdentifierId !== null) {
    contents.customDataIdentifierId = __expectString(data.customDataIdentifierId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFindingsFilterCommandError(output, context);
  }
  const contents: CreateFindingsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    id: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInvitationsCommandError(output, context);
  }
  const contents: CreateInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    unprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMemberCommandError(output, context);
  }
  const contents: CreateMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateSampleFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSampleFindingsCommandError(output, context);
  }
  const contents: CreateSampleFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSampleFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    unprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomDataIdentifierCommandError(output, context);
  }
  const contents: DeleteCustomDataIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFindingsFilterCommandError(output, context);
  }
  const contents: DeleteFindingsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    unprocessedAccounts: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: DeleteMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBucketsCommandError(output, context);
  }
  const contents: DescribeBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    buckets: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.buckets !== undefined && data.buckets !== null) {
    contents.buckets = deserializeAws_restJson1__listOfBucketMetadata(data.buckets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClassificationJobCommandError(output, context);
  }
  const contents: DescribeClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    clientToken: undefined,
    createdAt: undefined,
    customDataIdentifierIds: undefined,
    description: undefined,
    initialRun: undefined,
    jobArn: undefined,
    jobId: undefined,
    jobStatus: undefined,
    jobType: undefined,
    lastRunErrorStatus: undefined,
    lastRunTime: undefined,
    name: undefined,
    s3JobDefinition: undefined,
    samplingPercentage: undefined,
    scheduleFrequency: undefined,
    statistics: undefined,
    tags: undefined,
    userPausedDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(data.createdAt);
  }
  if (data.customDataIdentifierIds !== undefined && data.customDataIdentifierIds !== null) {
    contents.customDataIdentifierIds = deserializeAws_restJson1__listOf__string(data.customDataIdentifierIds, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.initialRun !== undefined && data.initialRun !== null) {
    contents.initialRun = __expectBoolean(data.initialRun);
  }
  if (data.jobArn !== undefined && data.jobArn !== null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobStatus !== undefined && data.jobStatus !== null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  if (data.jobType !== undefined && data.jobType !== null) {
    contents.jobType = __expectString(data.jobType);
  }
  if (data.lastRunErrorStatus !== undefined && data.lastRunErrorStatus !== null) {
    contents.lastRunErrorStatus = deserializeAws_restJson1LastRunErrorStatus(data.lastRunErrorStatus, context);
  }
  if (data.lastRunTime !== undefined && data.lastRunTime !== null) {
    contents.lastRunTime = new Date(data.lastRunTime);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.s3JobDefinition !== undefined && data.s3JobDefinition !== null) {
    contents.s3JobDefinition = deserializeAws_restJson1S3JobDefinition(data.s3JobDefinition, context);
  }
  if (data.samplingPercentage !== undefined && data.samplingPercentage !== null) {
    contents.samplingPercentage = __expectInt32(data.samplingPercentage);
  }
  if (data.scheduleFrequency !== undefined && data.scheduleFrequency !== null) {
    contents.scheduleFrequency = deserializeAws_restJson1JobScheduleFrequency(data.scheduleFrequency, context);
  }
  if (data.statistics !== undefined && data.statistics !== null) {
    contents.statistics = deserializeAws_restJson1Statistics(data.statistics, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.userPausedDetails !== undefined && data.userPausedDetails !== null) {
    contents.userPausedDetails = deserializeAws_restJson1UserPausedDetails(data.userPausedDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    autoEnable: undefined,
    maxAccountLimitReached: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.autoEnable !== undefined && data.autoEnable !== null) {
    contents.autoEnable = __expectBoolean(data.autoEnable);
  }
  if (data.maxAccountLimitReached !== undefined && data.maxAccountLimitReached !== null) {
    contents.maxAccountLimitReached = __expectBoolean(data.maxAccountLimitReached);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DisableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableMacieCommandError(output, context);
  }
  const contents: DisableMacieCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableMacieCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMacieCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DisassociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMemberCommandError(output, context);
  }
  const contents: DisassociateMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1EnableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableMacieCommandError(output, context);
  }
  const contents: EnableMacieCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableMacieCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMacieCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    administrator: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.administrator !== undefined && data.administrator !== null) {
    contents.administrator = deserializeAws_restJson1Invitation(data.administrator, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBucketStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBucketStatisticsCommandError(output, context);
  }
  const contents: GetBucketStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    bucketCount: undefined,
    bucketCountByEffectivePermission: undefined,
    bucketCountByEncryptionType: undefined,
    bucketCountByObjectEncryptionRequirement: undefined,
    bucketCountBySharedAccessType: undefined,
    classifiableObjectCount: undefined,
    classifiableSizeInBytes: undefined,
    lastUpdated: undefined,
    objectCount: undefined,
    sizeInBytes: undefined,
    sizeInBytesCompressed: undefined,
    unclassifiableObjectCount: undefined,
    unclassifiableObjectSizeInBytes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bucketCount !== undefined && data.bucketCount !== null) {
    contents.bucketCount = __expectLong(data.bucketCount);
  }
  if (data.bucketCountByEffectivePermission !== undefined && data.bucketCountByEffectivePermission !== null) {
    contents.bucketCountByEffectivePermission = deserializeAws_restJson1BucketCountByEffectivePermission(
      data.bucketCountByEffectivePermission,
      context
    );
  }
  if (data.bucketCountByEncryptionType !== undefined && data.bucketCountByEncryptionType !== null) {
    contents.bucketCountByEncryptionType = deserializeAws_restJson1BucketCountByEncryptionType(
      data.bucketCountByEncryptionType,
      context
    );
  }
  if (
    data.bucketCountByObjectEncryptionRequirement !== undefined &&
    data.bucketCountByObjectEncryptionRequirement !== null
  ) {
    contents.bucketCountByObjectEncryptionRequirement =
      deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads(
        data.bucketCountByObjectEncryptionRequirement,
        context
      );
  }
  if (data.bucketCountBySharedAccessType !== undefined && data.bucketCountBySharedAccessType !== null) {
    contents.bucketCountBySharedAccessType = deserializeAws_restJson1BucketCountBySharedAccessType(
      data.bucketCountBySharedAccessType,
      context
    );
  }
  if (data.classifiableObjectCount !== undefined && data.classifiableObjectCount !== null) {
    contents.classifiableObjectCount = __expectLong(data.classifiableObjectCount);
  }
  if (data.classifiableSizeInBytes !== undefined && data.classifiableSizeInBytes !== null) {
    contents.classifiableSizeInBytes = __expectLong(data.classifiableSizeInBytes);
  }
  if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
    contents.lastUpdated = new Date(data.lastUpdated);
  }
  if (data.objectCount !== undefined && data.objectCount !== null) {
    contents.objectCount = __expectLong(data.objectCount);
  }
  if (data.sizeInBytes !== undefined && data.sizeInBytes !== null) {
    contents.sizeInBytes = __expectLong(data.sizeInBytes);
  }
  if (data.sizeInBytesCompressed !== undefined && data.sizeInBytesCompressed !== null) {
    contents.sizeInBytesCompressed = __expectLong(data.sizeInBytesCompressed);
  }
  if (data.unclassifiableObjectCount !== undefined && data.unclassifiableObjectCount !== null) {
    contents.unclassifiableObjectCount = deserializeAws_restJson1ObjectLevelStatistics(
      data.unclassifiableObjectCount,
      context
    );
  }
  if (data.unclassifiableObjectSizeInBytes !== undefined && data.unclassifiableObjectSizeInBytes !== null) {
    contents.unclassifiableObjectSizeInBytes = deserializeAws_restJson1ObjectLevelStatistics(
      data.unclassifiableObjectSizeInBytes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBucketStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClassificationExportConfigurationCommandError(output, context);
  }
  const contents: GetClassificationExportConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configuration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration !== undefined && data.configuration !== null) {
    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetClassificationExportConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationExportConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCustomDataIdentifierCommandError(output, context);
  }
  const contents: GetCustomDataIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    deleted: undefined,
    description: undefined,
    id: undefined,
    ignoreWords: undefined,
    keywords: undefined,
    maximumMatchDistance: undefined,
    name: undefined,
    regex: undefined,
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(data.createdAt);
  }
  if (data.deleted !== undefined && data.deleted !== null) {
    contents.deleted = __expectBoolean(data.deleted);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.ignoreWords !== undefined && data.ignoreWords !== null) {
    contents.ignoreWords = deserializeAws_restJson1__listOf__string(data.ignoreWords, context);
  }
  if (data.keywords !== undefined && data.keywords !== null) {
    contents.keywords = deserializeAws_restJson1__listOf__string(data.keywords, context);
  }
  if (data.maximumMatchDistance !== undefined && data.maximumMatchDistance !== null) {
    contents.maximumMatchDistance = __expectInt32(data.maximumMatchDistance);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.regex !== undefined && data.regex !== null) {
    contents.regex = __expectString(data.regex);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    findings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1__listOfFinding(data.findings, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsFilterCommandError(output, context);
  }
  const contents: GetFindingsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    action: undefined,
    arn: undefined,
    description: undefined,
    findingCriteria: undefined,
    id: undefined,
    name: undefined,
    position: undefined,
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action !== undefined && data.action !== null) {
    contents.action = __expectString(data.action);
  }
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
    contents.findingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = __expectInt32(data.position);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: GetFindingsPublicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    securityHubConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.securityHubConfiguration !== undefined && data.securityHubConfiguration !== null) {
    contents.securityHubConfiguration = deserializeAws_restJson1SecurityHubConfiguration(
      data.securityHubConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsPublicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetFindingStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingStatisticsCommandError(output, context);
  }
  const contents: GetFindingStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    countsByGroup: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.countsByGroup !== undefined && data.countsByGroup !== null) {
    contents.countsByGroup = deserializeAws_restJson1__listOfGroupCount(data.countsByGroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    invitationsCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
    contents.invitationsCount = __expectLong(data.invitationsCount);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMacieSessionCommandError(output, context);
  }
  const contents: GetMacieSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    findingPublishingFrequency: undefined,
    serviceRole: undefined,
    status: undefined,
    updatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(data.createdAt);
  }
  if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
    contents.findingPublishingFrequency = __expectString(data.findingPublishingFrequency);
  }
  if (data.serviceRole !== undefined && data.serviceRole !== null) {
    contents.serviceRole = __expectString(data.serviceRole);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.updatedAt !== undefined && data.updatedAt !== null) {
    contents.updatedAt = new Date(data.updatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMacieSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMacieSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    master: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.master !== undefined && data.master !== null) {
    contents.master = deserializeAws_restJson1Invitation(data.master, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberCommandError(output, context);
  }
  const contents: GetMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    accountId: undefined,
    administratorAccountId: undefined,
    arn: undefined,
    email: undefined,
    invitedAt: undefined,
    masterAccountId: undefined,
    relationshipStatus: undefined,
    tags: undefined,
    updatedAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountId !== undefined && data.accountId !== null) {
    contents.accountId = __expectString(data.accountId);
  }
  if (data.administratorAccountId !== undefined && data.administratorAccountId !== null) {
    contents.administratorAccountId = __expectString(data.administratorAccountId);
  }
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.email !== undefined && data.email !== null) {
    contents.email = __expectString(data.email);
  }
  if (data.invitedAt !== undefined && data.invitedAt !== null) {
    contents.invitedAt = new Date(data.invitedAt);
  }
  if (data.masterAccountId !== undefined && data.masterAccountId !== null) {
    contents.masterAccountId = __expectString(data.masterAccountId);
  }
  if (data.relationshipStatus !== undefined && data.relationshipStatus !== null) {
    contents.relationshipStatus = __expectString(data.relationshipStatus);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.updatedAt !== undefined && data.updatedAt !== null) {
    contents.updatedAt = new Date(data.updatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetUsageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageStatisticsCommandError(output, context);
  }
  const contents: GetUsageStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    records: undefined,
    timeRange: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.records !== undefined && data.records !== null) {
    contents.records = deserializeAws_restJson1__listOfUsageRecord(data.records, context);
  }
  if (data.timeRange !== undefined && data.timeRange !== null) {
    contents.timeRange = __expectString(data.timeRange);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUsageStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageTotalsCommandError(output, context);
  }
  const contents: GetUsageTotalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    timeRange: undefined,
    usageTotals: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.timeRange !== undefined && data.timeRange !== null) {
    contents.timeRange = __expectString(data.timeRange);
  }
  if (data.usageTotals !== undefined && data.usageTotals !== null) {
    contents.usageTotals = deserializeAws_restJson1__listOfUsageTotal(data.usageTotals, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUsageTotalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageTotalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClassificationJobsCommandError(output, context);
  }
  const contents: ListClassificationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1__listOfJobSummary(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClassificationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomDataIdentifiersCommandError(output, context);
  }
  const contents: ListCustomDataIdentifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items !== undefined && data.items !== null) {
    contents.items = deserializeAws_restJson1__listOfCustomDataIdentifierSummary(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCustomDataIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsCommandError(output, context);
  }
  const contents: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    findingIds: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingIds !== undefined && data.findingIds !== null) {
    contents.findingIds = deserializeAws_restJson1__listOf__string(data.findingIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListFindingsFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsFiltersCommandError(output, context);
  }
  const contents: ListFindingsFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    findingsFilterListItems: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingsFilterListItems !== undefined && data.findingsFilterListItems !== null) {
    contents.findingsFilterListItems = deserializeAws_restJson1__listOfFindingsFilterListItem(
      data.findingsFilterListItems,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFindingsFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    invitations: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.invitations !== undefined && data.invitations !== null) {
    contents.invitations = deserializeAws_restJson1__listOfInvitation(data.invitations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    members: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members !== undefined && data.members !== null) {
    contents.members = deserializeAws_restJson1__listOfMember(data.members, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    adminAccounts: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
    contents.adminAccounts = deserializeAws_restJson1__listOfAdminAccount(data.adminAccounts, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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

export const deserializeAws_restJson1PutClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutClassificationExportConfigurationCommandError(output, context);
  }
  const contents: PutClassificationExportConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configuration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration !== undefined && data.configuration !== null) {
    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutClassificationExportConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClassificationExportConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: PutFindingsPublicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFindingsPublicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchResourcesCommandError(output, context);
  }
  const contents: SearchResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    matchingResources: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.matchingResources !== undefined && data.matchingResources !== null) {
    contents.matchingResources = deserializeAws_restJson1__listOfMatchingResource(data.matchingResources, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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

export const deserializeAws_restJson1TestCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestCustomDataIdentifierCommandError(output, context);
  }
  const contents: TestCustomDataIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    matchCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.matchCount !== undefined && data.matchCount !== null) {
    contents.matchCount = __expectInt32(data.matchCount);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TestCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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

export const deserializeAws_restJson1UpdateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClassificationJobCommandError(output, context);
  }
  const contents: UpdateClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsFilterCommandError(output, context);
  }
  const contents: UpdateFindingsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    id: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMacieSessionCommandError(output, context);
  }
  const contents: UpdateMacieSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMacieSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMacieSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateMemberSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberSessionCommandError(output, context);
  }
  const contents: UpdateMemberSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMemberSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfCriteriaForJob = (input: CriteriaForJob[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CriteriaForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfFindingType = (input: (FindingType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfJobScopeTerm = (input: JobScopeTerm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1JobScopeTerm(entry, context);
    });
};

const serializeAws_restJson1__listOfListJobsFilterTerm = (
  input: ListJobsFilterTerm[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ListJobsFilterTerm(entry, context);
    });
};

const serializeAws_restJson1__listOfS3BucketDefinitionForJob = (
  input: S3BucketDefinitionForJob[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfSearchResourcesCriteria = (
  input: SearchResourcesCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SearchResourcesCriteria(entry, context);
    });
};

const serializeAws_restJson1__listOfSearchResourcesTagCriterionPair = (
  input: SearchResourcesTagCriterionPair[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SearchResourcesTagCriterionPair(entry, context);
    });
};

const serializeAws_restJson1__listOfTagCriterionPairForJob = (
  input: TagCriterionPairForJob[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfTagValuePair = (input: TagValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TagValuePair(entry, context);
    });
};

const serializeAws_restJson1__listOfUsageStatisticsFilter = (
  input: UsageStatisticsFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1UsageStatisticsFilter(entry, context);
    });
};

const serializeAws_restJson1AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
  };
};

const serializeAws_restJson1BucketCriteria = (
  input: { [key: string]: BucketCriteriaAdditionalProperties },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1BucketCriteriaAdditionalProperties(value, context),
    };
  }, {});
};

const serializeAws_restJson1BucketCriteriaAdditionalProperties = (
  input: BucketCriteriaAdditionalProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.eq !== undefined &&
      input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
    ...(input.gt !== undefined && input.gt !== null && { gt: input.gt }),
    ...(input.gte !== undefined && input.gte !== null && { gte: input.gte }),
    ...(input.lt !== undefined && input.lt !== null && { lt: input.lt }),
    ...(input.lte !== undefined && input.lte !== null && { lte: input.lte }),
    ...(input.neq !== undefined &&
      input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1BucketSortCriteria = (input: BucketSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1ClassificationExportConfiguration = (
  input: ClassificationExportConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3Destination !== undefined &&
      input.s3Destination !== null && {
        s3Destination: serializeAws_restJson1S3Destination(input.s3Destination, context),
      }),
  };
};

const serializeAws_restJson1CriteriaBlockForJob = (input: CriteriaBlockForJob, context: __SerdeContext): any => {
  return {
    ...(input.and !== undefined &&
      input.and !== null && { and: serializeAws_restJson1__listOfCriteriaForJob(input.and, context) }),
  };
};

const serializeAws_restJson1CriteriaForJob = (input: CriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.simpleCriterion !== undefined &&
      input.simpleCriterion !== null && {
        simpleCriterion: serializeAws_restJson1SimpleCriterionForJob(input.simpleCriterion, context),
      }),
    ...(input.tagCriterion !== undefined &&
      input.tagCriterion !== null && {
        tagCriterion: serializeAws_restJson1TagCriterionForJob(input.tagCriterion, context),
      }),
  };
};

const serializeAws_restJson1Criterion = (
  input: { [key: string]: CriterionAdditionalProperties },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1CriterionAdditionalProperties(value, context),
    };
  }, {});
};

const serializeAws_restJson1CriterionAdditionalProperties = (
  input: CriterionAdditionalProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.eq !== undefined &&
      input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
    ...(input.eqExactMatch !== undefined &&
      input.eqExactMatch !== null && {
        eqExactMatch: serializeAws_restJson1__listOf__string(input.eqExactMatch, context),
      }),
    ...(input.gt !== undefined && input.gt !== null && { gt: input.gt }),
    ...(input.gte !== undefined && input.gte !== null && { gte: input.gte }),
    ...(input.lt !== undefined && input.lt !== null && { lt: input.lt }),
    ...(input.lte !== undefined && input.lte !== null && { lte: input.lte }),
    ...(input.neq !== undefined &&
      input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
  };
};

const serializeAws_restJson1DailySchedule = (input: DailySchedule, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.criterion !== undefined &&
      input.criterion !== null && { criterion: serializeAws_restJson1Criterion(input.criterion, context) }),
  };
};

const serializeAws_restJson1FindingStatisticsSortCriteria = (
  input: FindingStatisticsSortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1JobScheduleFrequency = (input: JobScheduleFrequency, context: __SerdeContext): any => {
  return {
    ...(input.dailySchedule !== undefined &&
      input.dailySchedule !== null && {
        dailySchedule: serializeAws_restJson1DailySchedule(input.dailySchedule, context),
      }),
    ...(input.monthlySchedule !== undefined &&
      input.monthlySchedule !== null && {
        monthlySchedule: serializeAws_restJson1MonthlySchedule(input.monthlySchedule, context),
      }),
    ...(input.weeklySchedule !== undefined &&
      input.weeklySchedule !== null && {
        weeklySchedule: serializeAws_restJson1WeeklySchedule(input.weeklySchedule, context),
      }),
  };
};

const serializeAws_restJson1JobScopeTerm = (input: JobScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.simpleScopeTerm !== undefined &&
      input.simpleScopeTerm !== null && {
        simpleScopeTerm: serializeAws_restJson1SimpleScopeTerm(input.simpleScopeTerm, context),
      }),
    ...(input.tagScopeTerm !== undefined &&
      input.tagScopeTerm !== null && { tagScopeTerm: serializeAws_restJson1TagScopeTerm(input.tagScopeTerm, context) }),
  };
};

const serializeAws_restJson1JobScopingBlock = (input: JobScopingBlock, context: __SerdeContext): any => {
  return {
    ...(input.and !== undefined &&
      input.and !== null && { and: serializeAws_restJson1__listOfJobScopeTerm(input.and, context) }),
  };
};

const serializeAws_restJson1ListJobsFilterCriteria = (input: ListJobsFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.excludes !== undefined &&
      input.excludes !== null && {
        excludes: serializeAws_restJson1__listOfListJobsFilterTerm(input.excludes, context),
      }),
    ...(input.includes !== undefined &&
      input.includes !== null && {
        includes: serializeAws_restJson1__listOfListJobsFilterTerm(input.includes, context),
      }),
  };
};

const serializeAws_restJson1ListJobsFilterTerm = (input: ListJobsFilterTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1ListJobsSortCriteria = (input: ListJobsSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1MonthlySchedule = (input: MonthlySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfMonth !== undefined && input.dayOfMonth !== null && { dayOfMonth: input.dayOfMonth }),
  };
};

const serializeAws_restJson1S3BucketCriteriaForJob = (input: S3BucketCriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.excludes !== undefined &&
      input.excludes !== null && { excludes: serializeAws_restJson1CriteriaBlockForJob(input.excludes, context) }),
    ...(input.includes !== undefined &&
      input.includes !== null && { includes: serializeAws_restJson1CriteriaBlockForJob(input.includes, context) }),
  };
};

const serializeAws_restJson1S3BucketDefinitionForJob = (
  input: S3BucketDefinitionForJob,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
    ...(input.buckets !== undefined &&
      input.buckets !== null && { buckets: serializeAws_restJson1__listOf__string(input.buckets, context) }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
    ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

const serializeAws_restJson1S3JobDefinition = (input: S3JobDefinition, context: __SerdeContext): any => {
  return {
    ...(input.bucketCriteria !== undefined &&
      input.bucketCriteria !== null && {
        bucketCriteria: serializeAws_restJson1S3BucketCriteriaForJob(input.bucketCriteria, context),
      }),
    ...(input.bucketDefinitions !== undefined &&
      input.bucketDefinitions !== null && {
        bucketDefinitions: serializeAws_restJson1__listOfS3BucketDefinitionForJob(input.bucketDefinitions, context),
      }),
    ...(input.scoping !== undefined &&
      input.scoping !== null && { scoping: serializeAws_restJson1Scoping(input.scoping, context) }),
  };
};

const serializeAws_restJson1Scoping = (input: Scoping, context: __SerdeContext): any => {
  return {
    ...(input.excludes !== undefined &&
      input.excludes !== null && { excludes: serializeAws_restJson1JobScopingBlock(input.excludes, context) }),
    ...(input.includes !== undefined &&
      input.includes !== null && { includes: serializeAws_restJson1JobScopingBlock(input.includes, context) }),
  };
};

const serializeAws_restJson1SearchResourcesBucketCriteria = (
  input: SearchResourcesBucketCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.excludes !== undefined &&
      input.excludes !== null && {
        excludes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.excludes, context),
      }),
    ...(input.includes !== undefined &&
      input.includes !== null && {
        includes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.includes, context),
      }),
  };
};

const serializeAws_restJson1SearchResourcesCriteria = (
  input: SearchResourcesCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.simpleCriterion !== undefined &&
      input.simpleCriterion !== null && {
        simpleCriterion: serializeAws_restJson1SearchResourcesSimpleCriterion(input.simpleCriterion, context),
      }),
    ...(input.tagCriterion !== undefined &&
      input.tagCriterion !== null && {
        tagCriterion: serializeAws_restJson1SearchResourcesTagCriterion(input.tagCriterion, context),
      }),
  };
};

const serializeAws_restJson1SearchResourcesCriteriaBlock = (
  input: SearchResourcesCriteriaBlock,
  context: __SerdeContext
): any => {
  return {
    ...(input.and !== undefined &&
      input.and !== null && { and: serializeAws_restJson1__listOfSearchResourcesCriteria(input.and, context) }),
  };
};

const serializeAws_restJson1SearchResourcesSimpleCriterion = (
  input: SearchResourcesSimpleCriterion,
  context: __SerdeContext
): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SearchResourcesSortCriteria = (
  input: SearchResourcesSortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1SearchResourcesTagCriterion = (
  input: SearchResourcesTagCriterion,
  context: __SerdeContext
): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.tagValues !== undefined &&
      input.tagValues !== null && {
        tagValues: serializeAws_restJson1__listOfSearchResourcesTagCriterionPair(input.tagValues, context),
      }),
  };
};

const serializeAws_restJson1SearchResourcesTagCriterionPair = (
  input: SearchResourcesTagCriterionPair,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1SecurityHubConfiguration = (
  input: SecurityHubConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.publishClassificationFindings !== undefined &&
      input.publishClassificationFindings !== null && {
        publishClassificationFindings: input.publishClassificationFindings,
      }),
    ...(input.publishPolicyFindings !== undefined &&
      input.publishPolicyFindings !== null && { publishPolicyFindings: input.publishPolicyFindings }),
  };
};

const serializeAws_restJson1SimpleCriterionForJob = (input: SimpleCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SimpleScopeTerm = (input: SimpleScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1TagCriterionForJob = (input: TagCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.tagValues !== undefined &&
      input.tagValues !== null && {
        tagValues: serializeAws_restJson1__listOfTagCriterionPairForJob(input.tagValues, context),
      }),
  };
};

const serializeAws_restJson1TagCriterionPairForJob = (input: TagCriterionPairForJob, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
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

const serializeAws_restJson1TagScopeTerm = (input: TagScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.tagValues !== undefined &&
      input.tagValues !== null && { tagValues: serializeAws_restJson1__listOfTagValuePair(input.tagValues, context) }),
    ...(input.target !== undefined && input.target !== null && { target: input.target }),
  };
};

const serializeAws_restJson1TagValuePair = (input: TagValuePair, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1UsageStatisticsFilter = (input: UsageStatisticsFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1UsageStatisticsSortBy = (input: UsageStatisticsSortBy, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1WeeklySchedule = (input: WeeklySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfWeek !== undefined && input.dayOfWeek !== null && { dayOfWeek: input.dayOfWeek }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfAdminAccount = (output: any, context: __SerdeContext): AdminAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdminAccount(entry, context);
    });
};

const deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetCustomDataIdentifierSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfBucketMetadata = (output: any, context: __SerdeContext): BucketMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BucketMetadata(entry, context);
    });
};

const deserializeAws_restJson1__listOfCriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CriteriaForJob(entry, context);
    });
};

const deserializeAws_restJson1__listOfCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifierSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDataIdentifierSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfFinding = (output: any, context: __SerdeContext): Finding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Finding(entry, context);
    });
};

const deserializeAws_restJson1__listOfFindingsFilterListItem = (
  output: any,
  context: __SerdeContext
): FindingsFilterListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingsFilterListItem(entry, context);
    });
};

const deserializeAws_restJson1__listOfGroupCount = (output: any, context: __SerdeContext): GroupCount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupCount(entry, context);
    });
};

const deserializeAws_restJson1__listOfInvitation = (output: any, context: __SerdeContext): Invitation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
};

const deserializeAws_restJson1__listOfJobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobScopeTerm(entry, context);
    });
};

const deserializeAws_restJson1__listOfJobSummary = (output: any, context: __SerdeContext): JobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfKeyValuePair = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};

const deserializeAws_restJson1__listOfMatchingResource = (output: any, context: __SerdeContext): MatchingResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MatchingResource(entry, context);
    });
};

const deserializeAws_restJson1__listOfMember = (output: any, context: __SerdeContext): Member[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Member(entry, context);
    });
};

const deserializeAws_restJson1__listOfS3BucketDefinitionForJob = (
  output: any,
  context: __SerdeContext
): S3BucketDefinitionForJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};

const deserializeAws_restJson1__listOfTagCriterionPairForJob = (
  output: any,
  context: __SerdeContext
): TagCriterionPairForJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};

const deserializeAws_restJson1__listOfTagValuePair = (output: any, context: __SerdeContext): TagValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagValuePair(entry, context);
    });
};

const deserializeAws_restJson1__listOfUnprocessedAccount = (
  output: any,
  context: __SerdeContext
): UnprocessedAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};

const deserializeAws_restJson1__listOfUsageByAccount = (output: any, context: __SerdeContext): UsageByAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageByAccount(entry, context);
    });
};

const deserializeAws_restJson1__listOfUsageRecord = (output: any, context: __SerdeContext): UsageRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageRecord(entry, context);
    });
};

const deserializeAws_restJson1__listOfUsageTotal = (output: any, context: __SerdeContext): UsageTotal[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageTotal(entry, context);
    });
};

const deserializeAws_restJson1AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return {
    allowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    allowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1AccountLevelPermissions = (
  output: any,
  context: __SerdeContext
): AccountLevelPermissions => {
  return {
    blockPublicAccess:
      output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    accountId: __expectString(output.accountId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ApiCallDetails = (output: any, context: __SerdeContext): ApiCallDetails => {
  return {
    api: __expectString(output.api),
    apiServiceName: __expectString(output.apiServiceName),
    firstSeen: output.firstSeen !== undefined && output.firstSeen !== null ? new Date(output.firstSeen) : undefined,
    lastSeen: output.lastSeen !== undefined && output.lastSeen !== null ? new Date(output.lastSeen) : undefined,
  } as any;
};

const deserializeAws_restJson1AssumedRole = (output: any, context: __SerdeContext): AssumedRole => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    sessionContext:
      output.sessionContext !== undefined && output.sessionContext !== null
        ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAccount = (output: any, context: __SerdeContext): AwsAccount => {
  return {
    accountId: __expectString(output.accountId),
    principalId: __expectString(output.principalId),
  } as any;
};

const deserializeAws_restJson1AwsService = (output: any, context: __SerdeContext): AwsService => {
  return {
    invokedBy: __expectString(output.invokedBy),
  } as any;
};

const deserializeAws_restJson1BatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    deleted: __expectBoolean(output.deleted),
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return {
    blockPublicAcls: __expectBoolean(output.blockPublicAcls),
    blockPublicPolicy: __expectBoolean(output.blockPublicPolicy),
    ignorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    restrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1BucketCountByEffectivePermission = (
  output: any,
  context: __SerdeContext
): BucketCountByEffectivePermission => {
  return {
    publiclyAccessible: __expectLong(output.publiclyAccessible),
    publiclyReadable: __expectLong(output.publiclyReadable),
    publiclyWritable: __expectLong(output.publiclyWritable),
    unknown: __expectLong(output.unknown),
  } as any;
};

const deserializeAws_restJson1BucketCountByEncryptionType = (
  output: any,
  context: __SerdeContext
): BucketCountByEncryptionType => {
  return {
    kmsManaged: __expectLong(output.kmsManaged),
    s3Managed: __expectLong(output.s3Managed),
    unencrypted: __expectLong(output.unencrypted),
    unknown: __expectLong(output.unknown),
  } as any;
};

const deserializeAws_restJson1BucketCountBySharedAccessType = (
  output: any,
  context: __SerdeContext
): BucketCountBySharedAccessType => {
  return {
    external: __expectLong(output.external),
    internal: __expectLong(output.internal),
    notShared: __expectLong(output.notShared),
    unknown: __expectLong(output.unknown),
  } as any;
};

const deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads = (
  output: any,
  context: __SerdeContext
): BucketCountPolicyAllowsUnencryptedObjectUploads => {
  return {
    allowsUnencryptedObjectUploads: __expectLong(output.allowsUnencryptedObjectUploads),
    deniesUnencryptedObjectUploads: __expectLong(output.deniesUnencryptedObjectUploads),
    unknown: __expectLong(output.unknown),
  } as any;
};

const deserializeAws_restJson1BucketLevelPermissions = (
  output: any,
  context: __SerdeContext
): BucketLevelPermissions => {
  return {
    accessControlList:
      output.accessControlList !== undefined && output.accessControlList !== null
        ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
        : undefined,
    blockPublicAccess:
      output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
    bucketPolicy:
      output.bucketPolicy !== undefined && output.bucketPolicy !== null
        ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BucketMetadata = (output: any, context: __SerdeContext): BucketMetadata => {
  return {
    accountId: __expectString(output.accountId),
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    bucketArn: __expectString(output.bucketArn),
    bucketCreatedAt:
      output.bucketCreatedAt !== undefined && output.bucketCreatedAt !== null
        ? new Date(output.bucketCreatedAt)
        : undefined,
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    jobDetails:
      output.jobDetails !== undefined && output.jobDetails !== null
        ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
        : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null ? new Date(output.lastUpdated) : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
        ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    publicAccess:
      output.publicAccess !== undefined && output.publicAccess !== null
        ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
        : undefined,
    region: __expectString(output.region),
    replicationDetails:
      output.replicationDetails !== undefined && output.replicationDetails !== null
        ? deserializeAws_restJson1ReplicationDetails(output.replicationDetails, context)
        : undefined,
    serverSideEncryption:
      output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
        ? deserializeAws_restJson1BucketServerSideEncryption(output.serverSideEncryption, context)
        : undefined,
    sharedAccess: __expectString(output.sharedAccess),
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__listOfKeyValuePair(output.tags, context)
        : undefined,
    unclassifiableObjectCount:
      output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
        : undefined,
    versioning: __expectBoolean(output.versioning),
  } as any;
};

const deserializeAws_restJson1BucketPermissionConfiguration = (
  output: any,
  context: __SerdeContext
): BucketPermissionConfiguration => {
  return {
    accountLevelPermissions:
      output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
        ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    bucketLevelPermissions:
      output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
        ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return {
    allowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    allowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1BucketPublicAccess = (output: any, context: __SerdeContext): BucketPublicAccess => {
  return {
    effectivePermission: __expectString(output.effectivePermission),
    permissionConfiguration:
      output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
        ? deserializeAws_restJson1BucketPermissionConfiguration(output.permissionConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BucketServerSideEncryption = (
  output: any,
  context: __SerdeContext
): BucketServerSideEncryption => {
  return {
    kmsMasterKeyId: __expectString(output.kmsMasterKeyId),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    cellReference: __expectString(output.cellReference),
    column: __expectLong(output.column),
    columnName: __expectString(output.columnName),
    row: __expectLong(output.row),
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

const deserializeAws_restJson1ClassificationDetails = (output: any, context: __SerdeContext): ClassificationDetails => {
  return {
    detailedResultsLocation: __expectString(output.detailedResultsLocation),
    jobArn: __expectString(output.jobArn),
    jobId: __expectString(output.jobId),
    result:
      output.result !== undefined && output.result !== null
        ? deserializeAws_restJson1ClassificationResult(output.result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationExportConfiguration = (
  output: any,
  context: __SerdeContext
): ClassificationExportConfiguration => {
  return {
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return {
    additionalOccurrences: __expectBoolean(output.additionalOccurrences),
    customDataIdentifiers:
      output.customDataIdentifiers !== undefined && output.customDataIdentifiers !== null
        ? deserializeAws_restJson1CustomDataIdentifiers(output.customDataIdentifiers, context)
        : undefined,
    mimeType: __expectString(output.mimeType),
    sensitiveData:
      output.sensitiveData !== undefined && output.sensitiveData !== null
        ? deserializeAws_restJson1SensitiveData(output.sensitiveData, context)
        : undefined,
    sizeClassified: __expectLong(output.sizeClassified),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1ClassificationResultStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationResultStatus = (
  output: any,
  context: __SerdeContext
): ClassificationResultStatus => {
  return {
    code: __expectString(output.code),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1CriteriaBlockForJob = (output: any, context: __SerdeContext): CriteriaBlockForJob => {
  return {
    and:
      output.and !== undefined && output.and !== null
        ? deserializeAws_restJson1__listOfCriteriaForJob(output.and, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob => {
  return {
    simpleCriterion:
      output.simpleCriterion !== undefined && output.simpleCriterion !== null
        ? deserializeAws_restJson1SimpleCriterionForJob(output.simpleCriterion, context)
        : undefined,
    tagCriterion:
      output.tagCriterion !== undefined && output.tagCriterion !== null
        ? deserializeAws_restJson1TagCriterionForJob(output.tagCriterion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Criterion = (
  output: any,
  context: __SerdeContext
): { [key: string]: CriterionAdditionalProperties } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: CriterionAdditionalProperties }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1CriterionAdditionalProperties(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1CriterionAdditionalProperties = (
  output: any,
  context: __SerdeContext
): CriterionAdditionalProperties => {
  return {
    eq:
      output.eq !== undefined && output.eq !== null
        ? deserializeAws_restJson1__listOf__string(output.eq, context)
        : undefined,
    eqExactMatch:
      output.eqExactMatch !== undefined && output.eqExactMatch !== null
        ? deserializeAws_restJson1__listOf__string(output.eqExactMatch, context)
        : undefined,
    gt: __expectLong(output.gt),
    gte: __expectLong(output.gte),
    lt: __expectLong(output.lt),
    lte: __expectLong(output.lte),
    neq:
      output.neq !== undefined && output.neq !== null
        ? deserializeAws_restJson1__listOf__string(output.neq, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiers = (output: any, context: __SerdeContext): CustomDataIdentifiers => {
  return {
    detections:
      output.detections !== undefined && output.detections !== null
        ? deserializeAws_restJson1CustomDetections(output.detections, context)
        : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifierSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1CustomDetection = (output: any, context: __SerdeContext): CustomDetection => {
  return {
    arn: __expectString(output.arn),
    count: __expectLong(output.count),
    name: __expectString(output.name),
    occurrences:
      output.occurrences !== undefined && output.occurrences !== null
        ? deserializeAws_restJson1Occurrences(output.occurrences, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDetections = (output: any, context: __SerdeContext): CustomDetection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDetection(entry, context);
    });
};

const deserializeAws_restJson1DailySchedule = (output: any, context: __SerdeContext): DailySchedule => {
  return {} as any;
};

const deserializeAws_restJson1DefaultDetection = (output: any, context: __SerdeContext): DefaultDetection => {
  return {
    count: __expectLong(output.count),
    occurrences:
      output.occurrences !== undefined && output.occurrences !== null
        ? deserializeAws_restJson1Occurrences(output.occurrences, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DefaultDetections = (output: any, context: __SerdeContext): DefaultDetection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DefaultDetection(entry, context);
    });
};

const deserializeAws_restJson1DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return {
    domainName: __expectString(output.domainName),
  } as any;
};

const deserializeAws_restJson1FederatedUser = (output: any, context: __SerdeContext): FederatedUser => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    sessionContext:
      output.sessionContext !== undefined && output.sessionContext !== null
        ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    accountId: __expectString(output.accountId),
    archived: __expectBoolean(output.archived),
    category: __expectString(output.category),
    classificationDetails:
      output.classificationDetails !== undefined && output.classificationDetails !== null
        ? deserializeAws_restJson1ClassificationDetails(output.classificationDetails, context)
        : undefined,
    count: __expectLong(output.count),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    partition: __expectString(output.partition),
    policyDetails:
      output.policyDetails !== undefined && output.policyDetails !== null
        ? deserializeAws_restJson1PolicyDetails(output.policyDetails, context)
        : undefined,
    region: __expectString(output.region),
    resourcesAffected:
      output.resourcesAffected !== undefined && output.resourcesAffected !== null
        ? deserializeAws_restJson1ResourcesAffected(output.resourcesAffected, context)
        : undefined,
    sample: __expectBoolean(output.sample),
    schemaVersion: __expectString(output.schemaVersion),
    severity:
      output.severity !== undefined && output.severity !== null
        ? deserializeAws_restJson1Severity(output.severity, context)
        : undefined,
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingAction = (output: any, context: __SerdeContext): FindingAction => {
  return {
    actionType: __expectString(output.actionType),
    apiCallDetails:
      output.apiCallDetails !== undefined && output.apiCallDetails !== null
        ? deserializeAws_restJson1ApiCallDetails(output.apiCallDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingActor = (output: any, context: __SerdeContext): FindingActor => {
  return {
    domainDetails:
      output.domainDetails !== undefined && output.domainDetails !== null
        ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
        : undefined,
    ipAddressDetails:
      output.ipAddressDetails !== undefined && output.ipAddressDetails !== null
        ? deserializeAws_restJson1IpAddressDetails(output.ipAddressDetails, context)
        : undefined,
    userIdentity:
      output.userIdentity !== undefined && output.userIdentity !== null
        ? deserializeAws_restJson1UserIdentity(output.userIdentity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    criterion:
      output.criterion !== undefined && output.criterion !== null
        ? deserializeAws_restJson1Criterion(output.criterion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingsFilterListItem = (
  output: any,
  context: __SerdeContext
): FindingsFilterListItem => {
  return {
    action: __expectString(output.action),
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    name: __expectString(output.name),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupCount = (output: any, context: __SerdeContext): GroupCount => {
  return {
    count: __expectLong(output.count),
    groupKey: __expectString(output.groupKey),
  } as any;
};

const deserializeAws_restJson1IamUser = (output: any, context: __SerdeContext): IamUser => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    userName: __expectString(output.userName),
  } as any;
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    accountId: __expectString(output.accountId),
    invitationId: __expectString(output.invitationId),
    invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
    relationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1IpAddressDetails = (output: any, context: __SerdeContext): IpAddressDetails => {
  return {
    ipAddressV4: __expectString(output.ipAddressV4),
    ipCity:
      output.ipCity !== undefined && output.ipCity !== null
        ? deserializeAws_restJson1IpCity(output.ipCity, context)
        : undefined,
    ipCountry:
      output.ipCountry !== undefined && output.ipCountry !== null
        ? deserializeAws_restJson1IpCountry(output.ipCountry, context)
        : undefined,
    ipGeoLocation:
      output.ipGeoLocation !== undefined && output.ipGeoLocation !== null
        ? deserializeAws_restJson1IpGeoLocation(output.ipGeoLocation, context)
        : undefined,
    ipOwner:
      output.ipOwner !== undefined && output.ipOwner !== null
        ? deserializeAws_restJson1IpOwner(output.ipOwner, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IpCity = (output: any, context: __SerdeContext): IpCity => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1IpCountry = (output: any, context: __SerdeContext): IpCountry => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1IpGeoLocation = (output: any, context: __SerdeContext): IpGeoLocation => {
  return {
    lat: __limitedParseDouble(output.lat),
    lon: __limitedParseDouble(output.lon),
  } as any;
};

const deserializeAws_restJson1IpOwner = (output: any, context: __SerdeContext): IpOwner => {
  return {
    asn: __expectString(output.asn),
    asnOrg: __expectString(output.asnOrg),
    isp: __expectString(output.isp),
    org: __expectString(output.org),
  } as any;
};

const deserializeAws_restJson1JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    isDefinedInJob: __expectString(output.isDefinedInJob),
    isMonitoredByJob: __expectString(output.isMonitoredByJob),
    lastJobId: __expectString(output.lastJobId),
    lastJobRunTime:
      output.lastJobRunTime !== undefined && output.lastJobRunTime !== null
        ? new Date(output.lastJobRunTime)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobScheduleFrequency = (output: any, context: __SerdeContext): JobScheduleFrequency => {
  return {
    dailySchedule:
      output.dailySchedule !== undefined && output.dailySchedule !== null
        ? deserializeAws_restJson1DailySchedule(output.dailySchedule, context)
        : undefined,
    monthlySchedule:
      output.monthlySchedule !== undefined && output.monthlySchedule !== null
        ? deserializeAws_restJson1MonthlySchedule(output.monthlySchedule, context)
        : undefined,
    weeklySchedule:
      output.weeklySchedule !== undefined && output.weeklySchedule !== null
        ? deserializeAws_restJson1WeeklySchedule(output.weeklySchedule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm => {
  return {
    simpleScopeTerm:
      output.simpleScopeTerm !== undefined && output.simpleScopeTerm !== null
        ? deserializeAws_restJson1SimpleScopeTerm(output.simpleScopeTerm, context)
        : undefined,
    tagScopeTerm:
      output.tagScopeTerm !== undefined && output.tagScopeTerm !== null
        ? deserializeAws_restJson1TagScopeTerm(output.tagScopeTerm, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobScopingBlock = (output: any, context: __SerdeContext): JobScopingBlock => {
  return {
    and:
      output.and !== undefined && output.and !== null
        ? deserializeAws_restJson1__listOfJobScopeTerm(output.and, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    bucketCriteria:
      output.bucketCriteria !== undefined && output.bucketCriteria !== null
        ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
        : undefined,
    bucketDefinitions:
      output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
        ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    jobId: __expectString(output.jobId),
    jobStatus: __expectString(output.jobStatus),
    jobType: __expectString(output.jobType),
    lastRunErrorStatus:
      output.lastRunErrorStatus !== undefined && output.lastRunErrorStatus !== null
        ? deserializeAws_restJson1LastRunErrorStatus(output.lastRunErrorStatus, context)
        : undefined,
    name: __expectString(output.name),
    userPausedDetails:
      output.userPausedDetails !== undefined && output.userPausedDetails !== null
        ? deserializeAws_restJson1UserPausedDetails(output.userPausedDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1KeyValuePairList = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};

const deserializeAws_restJson1LastRunErrorStatus = (output: any, context: __SerdeContext): LastRunErrorStatus => {
  return {
    code: __expectString(output.code),
  } as any;
};

const deserializeAws_restJson1MatchingBucket = (output: any, context: __SerdeContext): MatchingBucket => {
  return {
    accountId: __expectString(output.accountId),
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    jobDetails:
      output.jobDetails !== undefined && output.jobDetails !== null
        ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
        : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
        ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    unclassifiableObjectCount:
      output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MatchingResource = (output: any, context: __SerdeContext): MatchingResource => {
  return {
    matchingBucket:
      output.matchingBucket !== undefined && output.matchingBucket !== null
        ? deserializeAws_restJson1MatchingBucket(output.matchingBucket, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    accountId: __expectString(output.accountId),
    administratorAccountId: __expectString(output.administratorAccountId),
    arn: __expectString(output.arn),
    email: __expectString(output.email),
    invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
    masterAccountId: __expectString(output.masterAccountId),
    relationshipStatus: __expectString(output.relationshipStatus),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1MonthlySchedule = (output: any, context: __SerdeContext): MonthlySchedule => {
  return {
    dayOfMonth: __expectInt32(output.dayOfMonth),
  } as any;
};

const deserializeAws_restJson1ObjectCountByEncryptionType = (
  output: any,
  context: __SerdeContext
): ObjectCountByEncryptionType => {
  return {
    customerManaged: __expectLong(output.customerManaged),
    kmsManaged: __expectLong(output.kmsManaged),
    s3Managed: __expectLong(output.s3Managed),
    unencrypted: __expectLong(output.unencrypted),
    unknown: __expectLong(output.unknown),
  } as any;
};

const deserializeAws_restJson1ObjectLevelStatistics = (output: any, context: __SerdeContext): ObjectLevelStatistics => {
  return {
    fileType: __expectLong(output.fileType),
    storageClass: __expectLong(output.storageClass),
    total: __expectLong(output.total),
  } as any;
};

const deserializeAws_restJson1Occurrences = (output: any, context: __SerdeContext): Occurrences => {
  return {
    cells:
      output.cells !== undefined && output.cells !== null
        ? deserializeAws_restJson1Cells(output.cells, context)
        : undefined,
    lineRanges:
      output.lineRanges !== undefined && output.lineRanges !== null
        ? deserializeAws_restJson1Ranges(output.lineRanges, context)
        : undefined,
    offsetRanges:
      output.offsetRanges !== undefined && output.offsetRanges !== null
        ? deserializeAws_restJson1Ranges(output.offsetRanges, context)
        : undefined,
    pages:
      output.pages !== undefined && output.pages !== null
        ? deserializeAws_restJson1Pages(output.pages, context)
        : undefined,
    records:
      output.records !== undefined && output.records !== null
        ? deserializeAws_restJson1Records(output.records, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Page = (output: any, context: __SerdeContext): Page => {
  return {
    lineRange:
      output.lineRange !== undefined && output.lineRange !== null
        ? deserializeAws_restJson1Range(output.lineRange, context)
        : undefined,
    offsetRange:
      output.offsetRange !== undefined && output.offsetRange !== null
        ? deserializeAws_restJson1Range(output.offsetRange, context)
        : undefined,
    pageNumber: __expectLong(output.pageNumber),
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

const deserializeAws_restJson1PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1FindingAction(output.action, context)
        : undefined,
    actor:
      output.actor !== undefined && output.actor !== null
        ? deserializeAws_restJson1FindingActor(output.actor, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Range = (output: any, context: __SerdeContext): Range => {
  return {
    end: __expectLong(output.end),
    start: __expectLong(output.start),
    startColumn: __expectLong(output.startColumn),
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

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    jsonPath: __expectString(output.jsonPath),
    recordIndex: __expectLong(output.recordIndex),
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

const deserializeAws_restJson1ReplicationDetails = (output: any, context: __SerdeContext): ReplicationDetails => {
  return {
    replicated: __expectBoolean(output.replicated),
    replicatedExternally: __expectBoolean(output.replicatedExternally),
    replicationAccounts:
      output.replicationAccounts !== undefined && output.replicationAccounts !== null
        ? deserializeAws_restJson1__listOf__string(output.replicationAccounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourcesAffected = (output: any, context: __SerdeContext): ResourcesAffected => {
  return {
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? deserializeAws_restJson1S3Bucket(output.s3Bucket, context)
        : undefined,
    s3Object:
      output.s3Object !== undefined && output.s3Object !== null
        ? deserializeAws_restJson1S3Object(output.s3Object, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Bucket = (output: any, context: __SerdeContext): S3Bucket => {
  return {
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    defaultServerSideEncryption:
      output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
        ? deserializeAws_restJson1ServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    name: __expectString(output.name),
    owner:
      output.owner !== undefined && output.owner !== null
        ? deserializeAws_restJson1S3BucketOwner(output.owner, context)
        : undefined,
    publicAccess:
      output.publicAccess !== undefined && output.publicAccess !== null
        ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketCriteriaForJob = (
  output: any,
  context: __SerdeContext
): S3BucketCriteriaForJob => {
  return {
    excludes:
      output.excludes !== undefined && output.excludes !== null
        ? deserializeAws_restJson1CriteriaBlockForJob(output.excludes, context)
        : undefined,
    includes:
      output.includes !== undefined && output.includes !== null
        ? deserializeAws_restJson1CriteriaBlockForJob(output.includes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketDefinitionForJob = (
  output: any,
  context: __SerdeContext
): S3BucketDefinitionForJob => {
  return {
    accountId: __expectString(output.accountId),
    buckets:
      output.buckets !== undefined && output.buckets !== null
        ? deserializeAws_restJson1__listOf__string(output.buckets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketOwner = (output: any, context: __SerdeContext): S3BucketOwner => {
  return {
    displayName: __expectString(output.displayName),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    bucketName: __expectString(output.bucketName),
    keyPrefix: __expectString(output.keyPrefix),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1S3JobDefinition = (output: any, context: __SerdeContext): S3JobDefinition => {
  return {
    bucketCriteria:
      output.bucketCriteria !== undefined && output.bucketCriteria !== null
        ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
        : undefined,
    bucketDefinitions:
      output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
        ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    scoping:
      output.scoping !== undefined && output.scoping !== null
        ? deserializeAws_restJson1Scoping(output.scoping, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucketArn: __expectString(output.bucketArn),
    eTag: __expectString(output.eTag),
    extension: __expectString(output.extension),
    key: __expectString(output.key),
    lastModified:
      output.lastModified !== undefined && output.lastModified !== null ? new Date(output.lastModified) : undefined,
    path: __expectString(output.path),
    publicAccess: __expectBoolean(output.publicAccess),
    serverSideEncryption:
      output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
        ? deserializeAws_restJson1ServerSideEncryption(output.serverSideEncryption, context)
        : undefined,
    size: __expectLong(output.size),
    storageClass: __expectString(output.storageClass),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
        : undefined,
    versionId: __expectString(output.versionId),
  } as any;
};

const deserializeAws_restJson1Scoping = (output: any, context: __SerdeContext): Scoping => {
  return {
    excludes:
      output.excludes !== undefined && output.excludes !== null
        ? deserializeAws_restJson1JobScopingBlock(output.excludes, context)
        : undefined,
    includes:
      output.includes !== undefined && output.includes !== null
        ? deserializeAws_restJson1JobScopingBlock(output.includes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityHubConfiguration = (
  output: any,
  context: __SerdeContext
): SecurityHubConfiguration => {
  return {
    publishClassificationFindings: __expectBoolean(output.publishClassificationFindings),
    publishPolicyFindings: __expectBoolean(output.publishPolicyFindings),
  } as any;
};

const deserializeAws_restJson1SensitiveData = (output: any, context: __SerdeContext): SensitiveDataItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataItem(entry, context);
    });
};

const deserializeAws_restJson1SensitiveDataItem = (output: any, context: __SerdeContext): SensitiveDataItem => {
  return {
    category: __expectString(output.category),
    detections:
      output.detections !== undefined && output.detections !== null
        ? deserializeAws_restJson1DefaultDetections(output.detections, context)
        : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

const deserializeAws_restJson1ServerSideEncryption = (output: any, context: __SerdeContext): ServerSideEncryption => {
  return {
    encryptionType: __expectString(output.encryptionType),
    kmsMasterKeyId: __expectString(output.kmsMasterKeyId),
  } as any;
};

const deserializeAws_restJson1ServiceLimit = (output: any, context: __SerdeContext): ServiceLimit => {
  return {
    isServiceLimited: __expectBoolean(output.isServiceLimited),
    unit: __expectString(output.unit),
    value: __expectLong(output.value),
  } as any;
};

const deserializeAws_restJson1SessionContext = (output: any, context: __SerdeContext): SessionContext => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1SessionContextAttributes(output.attributes, context)
        : undefined,
    sessionIssuer:
      output.sessionIssuer !== undefined && output.sessionIssuer !== null
        ? deserializeAws_restJson1SessionIssuer(output.sessionIssuer, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SessionContextAttributes = (
  output: any,
  context: __SerdeContext
): SessionContextAttributes => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null ? new Date(output.creationDate) : undefined,
    mfaAuthenticated: __expectBoolean(output.mfaAuthenticated),
  } as any;
};

const deserializeAws_restJson1SessionIssuer = (output: any, context: __SerdeContext): SessionIssuer => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    type: __expectString(output.type),
    userName: __expectString(output.userName),
  } as any;
};

const deserializeAws_restJson1Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    description: __expectString(output.description),
    score: __expectLong(output.score),
  } as any;
};

const deserializeAws_restJson1SimpleCriterionForJob = (output: any, context: __SerdeContext): SimpleCriterionForJob => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_restJson1__listOf__string(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleScopeTerm = (output: any, context: __SerdeContext): SimpleScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_restJson1__listOf__string(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Statistics = (output: any, context: __SerdeContext): Statistics => {
  return {
    approximateNumberOfObjectsToProcess: __limitedParseDouble(output.approximateNumberOfObjectsToProcess),
    numberOfRuns: __limitedParseDouble(output.numberOfRuns),
  } as any;
};

const deserializeAws_restJson1TagCriterionForJob = (output: any, context: __SerdeContext): TagCriterionForJob => {
  return {
    comparator: __expectString(output.comparator),
    tagValues:
      output.tagValues !== undefined && output.tagValues !== null
        ? deserializeAws_restJson1__listOfTagCriterionPairForJob(output.tagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagCriterionPairForJob = (
  output: any,
  context: __SerdeContext
): TagCriterionPairForJob => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
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

const deserializeAws_restJson1TagScopeTerm = (output: any, context: __SerdeContext): TagScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    tagValues:
      output.tagValues !== undefined && output.tagValues !== null
        ? deserializeAws_restJson1__listOfTagValuePair(output.tagValues, context)
        : undefined,
    target: __expectString(output.target),
  } as any;
};

const deserializeAws_restJson1TagValuePair = (output: any, context: __SerdeContext): TagValuePair => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return {
    accountId: __expectString(output.accountId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1UsageByAccount = (output: any, context: __SerdeContext): UsageByAccount => {
  return {
    currency: __expectString(output.currency),
    estimatedCost: __expectString(output.estimatedCost),
    serviceLimit:
      output.serviceLimit !== undefined && output.serviceLimit !== null
        ? deserializeAws_restJson1ServiceLimit(output.serviceLimit, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return {
    accountId: __expectString(output.accountId),
    freeTrialStartDate:
      output.freeTrialStartDate !== undefined && output.freeTrialStartDate !== null
        ? new Date(output.freeTrialStartDate)
        : undefined,
    usage:
      output.usage !== undefined && output.usage !== null
        ? deserializeAws_restJson1__listOfUsageByAccount(output.usage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return {
    currency: __expectString(output.currency),
    estimatedCost: __expectString(output.estimatedCost),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return {
    assumedRole:
      output.assumedRole !== undefined && output.assumedRole !== null
        ? deserializeAws_restJson1AssumedRole(output.assumedRole, context)
        : undefined,
    awsAccount:
      output.awsAccount !== undefined && output.awsAccount !== null
        ? deserializeAws_restJson1AwsAccount(output.awsAccount, context)
        : undefined,
    awsService:
      output.awsService !== undefined && output.awsService !== null
        ? deserializeAws_restJson1AwsService(output.awsService, context)
        : undefined,
    federatedUser:
      output.federatedUser !== undefined && output.federatedUser !== null
        ? deserializeAws_restJson1FederatedUser(output.federatedUser, context)
        : undefined,
    iamUser:
      output.iamUser !== undefined && output.iamUser !== null
        ? deserializeAws_restJson1IamUser(output.iamUser, context)
        : undefined,
    root:
      output.root !== undefined && output.root !== null
        ? deserializeAws_restJson1UserIdentityRoot(output.root, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UserIdentityRoot = (output: any, context: __SerdeContext): UserIdentityRoot => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
  } as any;
};

const deserializeAws_restJson1UserPausedDetails = (output: any, context: __SerdeContext): UserPausedDetails => {
  return {
    jobExpiresAt:
      output.jobExpiresAt !== undefined && output.jobExpiresAt !== null ? new Date(output.jobExpiresAt) : undefined,
    jobImminentExpirationHealthEventArn: __expectString(output.jobImminentExpirationHealthEventArn),
    jobPausedAt:
      output.jobPausedAt !== undefined && output.jobPausedAt !== null ? new Date(output.jobPausedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1WeeklySchedule = (output: any, context: __SerdeContext): WeeklySchedule => {
  return {
    dayOfWeek: __expectString(output.dayOfWeek),
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
