// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "../commands/BatchGetCustomDataIdentifiersCommand";
import { CreateAllowListCommandInput, CreateAllowListCommandOutput } from "../commands/CreateAllowListCommand";
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
import { DeleteAllowListCommandInput, DeleteAllowListCommandOutput } from "../commands/DeleteAllowListCommand";
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
import { GetAllowListCommandInput, GetAllowListCommandOutput } from "../commands/GetAllowListCommand";
import {
  GetAutomatedDiscoveryConfigurationCommandInput,
  GetAutomatedDiscoveryConfigurationCommandOutput,
} from "../commands/GetAutomatedDiscoveryConfigurationCommand";
import {
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "../commands/GetBucketStatisticsCommand";
import {
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "../commands/GetClassificationExportConfigurationCommand";
import {
  GetClassificationScopeCommandInput,
  GetClassificationScopeCommandOutput,
} from "../commands/GetClassificationScopeCommand";
import {
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "../commands/GetCustomDataIdentifierCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "../commands/GetFindingsFilterCommand";
import {
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "../commands/GetFindingsPublicationConfigurationCommand";
import {
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "../commands/GetFindingStatisticsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "../commands/GetMacieSessionCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import { GetResourceProfileCommandInput, GetResourceProfileCommandOutput } from "../commands/GetResourceProfileCommand";
import {
  GetRevealConfigurationCommandInput,
  GetRevealConfigurationCommandOutput,
} from "../commands/GetRevealConfigurationCommand";
import {
  GetSensitiveDataOccurrencesAvailabilityCommandInput,
  GetSensitiveDataOccurrencesAvailabilityCommandOutput,
} from "../commands/GetSensitiveDataOccurrencesAvailabilityCommand";
import {
  GetSensitiveDataOccurrencesCommandInput,
  GetSensitiveDataOccurrencesCommandOutput,
} from "../commands/GetSensitiveDataOccurrencesCommand";
import {
  GetSensitivityInspectionTemplateCommandInput,
  GetSensitivityInspectionTemplateCommandOutput,
} from "../commands/GetSensitivityInspectionTemplateCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "../commands/GetUsageTotalsCommand";
import { ListAllowListsCommandInput, ListAllowListsCommandOutput } from "../commands/ListAllowListsCommand";
import {
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "../commands/ListClassificationJobsCommand";
import {
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput,
} from "../commands/ListClassificationScopesCommand";
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
import {
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "../commands/ListManagedDataIdentifiersCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput,
} from "../commands/ListResourceProfileArtifactsCommand";
import {
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput,
} from "../commands/ListResourceProfileDetectionsCommand";
import {
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput,
} from "../commands/ListSensitivityInspectionTemplatesCommand";
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
import { UpdateAllowListCommandInput, UpdateAllowListCommandOutput } from "../commands/UpdateAllowListCommand";
import {
  UpdateAutomatedDiscoveryConfigurationCommandInput,
  UpdateAutomatedDiscoveryConfigurationCommandOutput,
} from "../commands/UpdateAutomatedDiscoveryConfigurationCommand";
import {
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "../commands/UpdateClassificationJobCommand";
import {
  UpdateClassificationScopeCommandInput,
  UpdateClassificationScopeCommandOutput,
} from "../commands/UpdateClassificationScopeCommand";
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
  UpdateResourceProfileCommandInput,
  UpdateResourceProfileCommandOutput,
} from "../commands/UpdateResourceProfileCommand";
import {
  UpdateResourceProfileDetectionsCommandInput,
  UpdateResourceProfileDetectionsCommandOutput,
} from "../commands/UpdateResourceProfileDetectionsCommand";
import {
  UpdateRevealConfigurationCommandInput,
  UpdateRevealConfigurationCommandOutput,
} from "../commands/UpdateRevealConfigurationCommand";
import {
  UpdateSensitivityInspectionTemplateCommandInput,
  UpdateSensitivityInspectionTemplateCommandOutput,
} from "../commands/UpdateSensitivityInspectionTemplateCommand";
import { Macie2ServiceException as __BaseException } from "../models/Macie2ServiceException";
import {
  _Record,
  AccessControlList,
  AccessDeniedException,
  AccountDetail,
  AccountLevelPermissions,
  AdminAccount,
  AllowListCriteria,
  AllowListStatus,
  AllowListSummary,
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
  BucketStatisticsBySensitivity,
  Cell,
  ClassificationDetails,
  ClassificationExportConfiguration,
  ClassificationResult,
  ClassificationResultStatus,
  ClassificationScopeSummary,
  ConflictException,
  CriteriaBlockForJob,
  CriteriaForJob,
  CriterionAdditionalProperties,
  CustomDataIdentifiers,
  CustomDataIdentifierSummary,
  CustomDetection,
  DailySchedule,
  DefaultDetection,
  DetectedDataDetails,
  Detection,
  DomainDetails,
  FederatedUser,
  Finding,
  FindingAction,
  FindingActor,
  FindingCriteria,
  FindingsFilterListItem,
  FindingStatisticsSortCriteria,
  FindingType,
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
  ManagedDataIdentifierSummary,
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
  ResourceProfileArtifact,
  ResourcesAffected,
  ResourceStatistics,
  RevealConfiguration,
  S3Bucket,
  S3BucketCriteriaForJob,
  S3BucketDefinitionForJob,
  S3BucketOwner,
  S3ClassificationScope,
  S3ClassificationScopeExclusion,
  S3Destination,
  S3JobDefinition,
  S3Object,
  S3WordsList,
  Scoping,
  SearchResourcesCriteria,
  SearchResourcesSimpleCriterion,
  SearchResourcesTagCriterion,
  SearchResourcesTagCriterionPair,
  SecurityHubConfiguration,
  SensitiveDataItem,
  SensitivityAggregations,
  SensitivityInspectionTemplateExcludes,
  SensitivityInspectionTemplateIncludes,
  SensitivityInspectionTemplatesEntry,
  ServerSideEncryption,
  ServiceLimit,
  ServiceQuotaExceededException,
  SessionContext,
  SessionContextAttributes,
  SessionIssuer,
  Severity,
  SeverityLevel,
  SimpleCriterionForJob,
  SimpleScopeTerm,
  SortCriteria,
  Statistics,
  SuppressDataIdentifier,
  TagCriterionForJob,
  TagCriterionPairForJob,
  TagScopeTerm,
  TagValuePair,
  ThrottlingException,
  UnavailabilityReasonCode,
  UnprocessableEntityException,
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
} from "../models/models_0";
import {
  S3ClassificationScopeExclusionUpdate,
  S3ClassificationScopeUpdate,
  SearchResourcesBucketCriteria,
  SearchResourcesCriteriaBlock,
  SearchResourcesSortCriteria,
} from "../models/models_1";

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/accept";
  let body: any;
  body = JSON.stringify({
    ...(input.administratorAccountId != null && { administratorAccountId: input.administratorAccountId }),
    ...(input.invitationId != null && { invitationId: input.invitationId }),
    ...(input.masterAccount != null && { masterAccount: input.masterAccount }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ids != null && { ids: serializeAws_restJson1__listOf__string(input.ids, context) }),
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

export const serializeAws_restJson1CreateAllowListCommand = async (
  input: CreateAllowListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/allow-lists";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.criteria != null && { criteria: serializeAws_restJson1AllowListCriteria(input.criteria, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
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

export const serializeAws_restJson1CreateClassificationJobCommand = async (
  input: CreateClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.allowListIds != null && {
      allowListIds: serializeAws_restJson1__listOf__string(input.allowListIds, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customDataIdentifierIds != null && {
      customDataIdentifierIds: serializeAws_restJson1__listOf__string(input.customDataIdentifierIds, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.initialRun != null && { initialRun: input.initialRun }),
    ...(input.jobType != null && { jobType: input.jobType }),
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: serializeAws_restJson1__listOf__string(input.managedDataIdentifierIds, context),
    }),
    ...(input.managedDataIdentifierSelector != null && {
      managedDataIdentifierSelector: input.managedDataIdentifierSelector,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3JobDefinition != null && {
      s3JobDefinition: serializeAws_restJson1S3JobDefinition(input.s3JobDefinition, context),
    }),
    ...(input.samplingPercentage != null && { samplingPercentage: input.samplingPercentage }),
    ...(input.scheduleFrequency != null && {
      scheduleFrequency: serializeAws_restJson1JobScheduleFrequency(input.scheduleFrequency, context),
    }),
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

export const serializeAws_restJson1CreateCustomDataIdentifierCommand = async (
  input: CreateCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.ignoreWords != null && {
      ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
    }),
    ...(input.keywords != null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
    ...(input.maximumMatchDistance != null && { maximumMatchDistance: input.maximumMatchDistance }),
    ...(input.name != null && { name: input.name }),
    ...(input.regex != null && { regex: input.regex }),
    ...(input.severityLevels != null && {
      severityLevels: serializeAws_restJson1SeverityLevelList(input.severityLevels, context),
    }),
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

export const serializeAws_restJson1CreateFindingsFilterCommand = async (
  input: CreateFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.findingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.position != null && { position: input.position }),
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

export const serializeAws_restJson1CreateInvitationsCommand = async (
  input: CreateInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
    ...(input.disableEmailNotification != null && { disableEmailNotification: input.disableEmailNotification }),
    ...(input.message != null && { message: input.message }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.account != null && { account: serializeAws_restJson1AccountDetail(input.account, context) }),
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

export const serializeAws_restJson1CreateSampleFindingsCommand = async (
  input: CreateSampleFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/sample";
  let body: any;
  body = JSON.stringify({
    ...(input.findingTypes != null && {
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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

export const serializeAws_restJson1DeleteAllowListCommand = async (
  input: DeleteAllowListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/allow-lists/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    ignoreJobChecks: [, input.ignoreJobChecks!],
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

export const serializeAws_restJson1DeleteCustomDataIdentifierCommand = async (
  input: DeleteCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/s3";
  let body: any;
  body = JSON.stringify({
    ...(input.criteria != null && { criteria: serializeAws_restJson1BucketCriteria(input.criteria, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/configuration";
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  const query: any = map({
    adminAccountId: [, __expectNonNull(input.adminAccountId!, `adminAccountId`)],
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

export const serializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
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

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
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

export const serializeAws_restJson1DisassociateMemberCommand = async (
  input: DisassociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.findingPublishingFrequency != null && { findingPublishingFrequency: input.findingPublishingFrequency }),
    ...(input.status != null && { status: input.status }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId != null && { adminAccountId: input.adminAccountId }),
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

export const serializeAws_restJson1GetAllowListCommand = async (
  input: GetAllowListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/allow-lists/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand = async (
  input: GetAutomatedDiscoveryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automated-discovery/configuration";
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/s3/statistics";
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

export const serializeAws_restJson1GetClassificationExportConfigurationCommand = async (
  input: GetClassificationExportConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
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

export const serializeAws_restJson1GetClassificationScopeCommand = async (
  input: GetClassificationScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-scopes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1GetCustomDataIdentifierCommand = async (
  input: GetCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.findingIds != null && { findingIds: serializeAws_restJson1__listOf__string(input.findingIds, context) }),
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

export const serializeAws_restJson1GetFindingsFilterCommand = async (
  input: GetFindingsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath =
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.findingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
    }),
    ...(input.groupBy != null && { groupBy: input.groupBy }),
    ...(input.size != null && { size: input.size }),
    ...(input.sortCriteria != null && {
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

export const serializeAws_restJson1GetMacieSessionCommand = async (
  input: GetMacieSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
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

export const serializeAws_restJson1GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1GetResourceProfileCommand = async (
  input: GetResourceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-profiles";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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

export const serializeAws_restJson1GetRevealConfigurationCommand = async (
  input: GetRevealConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reveal-configuration";
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

export const serializeAws_restJson1GetSensitiveDataOccurrencesCommand = async (
  input: GetSensitiveDataOccurrencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/{findingId}/reveal";
  resolvedPath = __resolvedPath(resolvedPath, input, "findingId", () => input.findingId!, "{findingId}", false);
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

export const serializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommand = async (
  input: GetSensitiveDataOccurrencesAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/{findingId}/reveal/availability";
  resolvedPath = __resolvedPath(resolvedPath, input, "findingId", () => input.findingId!, "{findingId}", false);
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

export const serializeAws_restJson1GetSensitivityInspectionTemplateCommand = async (
  input: GetSensitivityInspectionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/sensitivity-inspections/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.filterBy != null && {
      filterBy: serializeAws_restJson1__listOfUsageStatisticsFilter(input.filterBy, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1UsageStatisticsSortBy(input.sortBy, context) }),
    ...(input.timeRange != null && { timeRange: input.timeRange }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage";
  const query: any = map({
    timeRange: [, input.timeRange!],
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

export const serializeAws_restJson1ListAllowListsCommand = async (
  input: ListAllowListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/allow-lists";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListClassificationJobsCommand = async (
  input: ListClassificationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filterCriteria != null && {
      filterCriteria: serializeAws_restJson1ListJobsFilterCriteria(input.filterCriteria, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && {
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

export const serializeAws_restJson1ListClassificationScopesCommand = async (
  input: ListClassificationScopesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-scopes";
  const query: any = map({
    name: [, input.name!],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListCustomDataIdentifiersCommand = async (
  input: ListCustomDataIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/list";
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

export const serializeAws_restJson1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.findingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
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

export const serializeAws_restJson1ListFindingsFiltersCommand = async (
  input: ListFindingsFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingsfilters";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListManagedDataIdentifiersCommand = async (
  input: ListManagedDataIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/managed-data-identifiers/list";
  let body: any;
  body = JSON.stringify({
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

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    onlyAssociated: [, input.onlyAssociated!],
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
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListResourceProfileArtifactsCommand = async (
  input: ListResourceProfileArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-profiles/artifacts";
  const query: any = map({
    nextToken: [, input.nextToken!],
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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

export const serializeAws_restJson1ListResourceProfileDetectionsCommand = async (
  input: ListResourceProfileDetectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-profiles/detections";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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

export const serializeAws_restJson1ListSensitivityInspectionTemplatesCommand = async (
  input: ListSensitivityInspectionTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/sensitivity-inspections";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1PutClassificationExportConfigurationCommand = async (
  input: PutClassificationExportConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-export-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.configuration != null && {
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings-publication-configuration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.securityHubConfiguration != null && {
      securityHubConfiguration: serializeAws_restJson1SecurityHubConfiguration(input.securityHubConfiguration, context),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasources/search-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.bucketCriteria != null && {
      bucketCriteria: serializeAws_restJson1SearchResourcesBucketCriteria(input.bucketCriteria, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && {
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

export const serializeAws_restJson1TestCustomDataIdentifierCommand = async (
  input: TestCustomDataIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/custom-data-identifiers/test";
  let body: any;
  body = JSON.stringify({
    ...(input.ignoreWords != null && {
      ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
    }),
    ...(input.keywords != null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
    ...(input.maximumMatchDistance != null && { maximumMatchDistance: input.maximumMatchDistance }),
    ...(input.regex != null && { regex: input.regex }),
    ...(input.sampleText != null && { sampleText: input.sampleText }),
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

export const serializeAws_restJson1UpdateAllowListCommand = async (
  input: UpdateAllowListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/allow-lists/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.criteria != null && { criteria: serializeAws_restJson1AllowListCriteria(input.criteria, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
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

export const serializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommand = async (
  input: UpdateAutomatedDiscoveryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/automated-discovery/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.status != null && { status: input.status }),
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

export const serializeAws_restJson1UpdateClassificationJobCommand = async (
  input: UpdateClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.jobStatus != null && { jobStatus: input.jobStatus }),
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

export const serializeAws_restJson1UpdateClassificationScopeCommand = async (
  input: UpdateClassificationScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/classification-scopes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.s3 != null && { s3: serializeAws_restJson1S3ClassificationScopeUpdate(input.s3, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.findingCriteria != null && {
      findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.position != null && { position: input.position }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/macie";
  let body: any;
  body = JSON.stringify({
    ...(input.findingPublishingFrequency != null && { findingPublishingFrequency: input.findingPublishingFrequency }),
    ...(input.status != null && { status: input.status }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.status != null && { status: input.status }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.autoEnable != null && { autoEnable: input.autoEnable }),
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

export const serializeAws_restJson1UpdateResourceProfileCommand = async (
  input: UpdateResourceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-profiles";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.sensitivityScoreOverride != null && { sensitivityScoreOverride: input.sensitivityScoreOverride }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateResourceProfileDetectionsCommand = async (
  input: UpdateResourceProfileDetectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-profiles/detections";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.suppressDataIdentifiers != null && {
      suppressDataIdentifiers: serializeAws_restJson1__listOfSuppressDataIdentifier(
        input.suppressDataIdentifiers,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateRevealConfigurationCommand = async (
  input: UpdateRevealConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reveal-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.configuration != null && {
      configuration: serializeAws_restJson1RevealConfiguration(input.configuration, context),
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

export const serializeAws_restJson1UpdateSensitivityInspectionTemplateCommand = async (
  input: UpdateSensitivityInspectionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/sensitivity-inspections/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.excludes != null && {
      excludes: serializeAws_restJson1SensitivityInspectionTemplateExcludes(input.excludes, context),
    }),
    ...(input.includes != null && {
      includes: serializeAws_restJson1SensitivityInspectionTemplateIncludes(input.includes, context),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataIdentifiers != null) {
    contents.customDataIdentifiers = deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary(
      data.customDataIdentifiers,
      context
    );
  }
  if (data.notFoundIdentifierIds != null) {
    contents.notFoundIdentifierIds = deserializeAws_restJson1__listOf__string(data.notFoundIdentifierIds, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomDataIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1CreateAllowListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAllowListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateClassificationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  return contents;
};

const deserializeAws_restJson1CreateClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataIdentifierId != null) {
    contents.customDataIdentifierId = __expectString(data.customDataIdentifierId);
  }
  return contents;
};

const deserializeAws_restJson1CreateCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFindingsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1CreateFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMemberCommandError(output, context);
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

const deserializeAws_restJson1CreateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DeleteAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAllowListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAllowListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DeleteCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DeleteFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFindingsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(
      data.unprocessedAccounts,
      context
    );
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DescribeBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.buckets != null) {
    contents.buckets = deserializeAws_restJson1__listOfBucketMetadata(data.buckets, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DescribeClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClassificationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.allowListIds != null) {
    contents.allowListIds = deserializeAws_restJson1__listOf__string(data.allowListIds, context);
  }
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.customDataIdentifierIds != null) {
    contents.customDataIdentifierIds = deserializeAws_restJson1__listOf__string(data.customDataIdentifierIds, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.initialRun != null) {
    contents.initialRun = __expectBoolean(data.initialRun);
  }
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  if (data.jobType != null) {
    contents.jobType = __expectString(data.jobType);
  }
  if (data.lastRunErrorStatus != null) {
    contents.lastRunErrorStatus = deserializeAws_restJson1LastRunErrorStatus(data.lastRunErrorStatus, context);
  }
  if (data.lastRunTime != null) {
    contents.lastRunTime = __expectNonNull(__parseRfc3339DateTime(data.lastRunTime));
  }
  if (data.managedDataIdentifierIds != null) {
    contents.managedDataIdentifierIds = deserializeAws_restJson1__listOf__string(
      data.managedDataIdentifierIds,
      context
    );
  }
  if (data.managedDataIdentifierSelector != null) {
    contents.managedDataIdentifierSelector = __expectString(data.managedDataIdentifierSelector);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.s3JobDefinition != null) {
    contents.s3JobDefinition = deserializeAws_restJson1S3JobDefinition(data.s3JobDefinition, context);
  }
  if (data.samplingPercentage != null) {
    contents.samplingPercentage = __expectInt32(data.samplingPercentage);
  }
  if (data.scheduleFrequency != null) {
    contents.scheduleFrequency = deserializeAws_restJson1JobScheduleFrequency(data.scheduleFrequency, context);
  }
  if (data.statistics != null) {
    contents.statistics = deserializeAws_restJson1Statistics(data.statistics, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.userPausedDetails != null) {
    contents.userPausedDetails = deserializeAws_restJson1UserPausedDetails(data.userPausedDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.autoEnable = __expectBoolean(data.autoEnable);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1DisableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableMacieCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisableMacieCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMacieCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  await collectBody(output.body, context);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1EnableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableMacieCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EnableMacieCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMacieCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.administrator = deserializeAws_restJson1Invitation(data.administrator, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.criteria != null) {
    contents.criteria = deserializeAws_restJson1AllowListCriteria(data.criteria, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = deserializeAws_restJson1AllowListStatus(data.status, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTime(data.updatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetAllowListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAllowListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomatedDiscoveryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.classificationScopeId != null) {
    contents.classificationScopeId = __expectString(data.classificationScopeId);
  }
  if (data.disabledAt != null) {
    contents.disabledAt = __expectNonNull(__parseRfc3339DateTime(data.disabledAt));
  }
  if (data.firstEnabledAt != null) {
    contents.firstEnabledAt = __expectNonNull(__parseRfc3339DateTime(data.firstEnabledAt));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.lastUpdatedAt));
  }
  if (data.sensitivityInspectionTemplateId != null) {
    contents.sensitivityInspectionTemplateId = __expectString(data.sensitivityInspectionTemplateId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomatedDiscoveryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetBucketStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBucketStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bucketCount != null) {
    contents.bucketCount = __expectLong(data.bucketCount);
  }
  if (data.bucketCountByEffectivePermission != null) {
    contents.bucketCountByEffectivePermission = deserializeAws_restJson1BucketCountByEffectivePermission(
      data.bucketCountByEffectivePermission,
      context
    );
  }
  if (data.bucketCountByEncryptionType != null) {
    contents.bucketCountByEncryptionType = deserializeAws_restJson1BucketCountByEncryptionType(
      data.bucketCountByEncryptionType,
      context
    );
  }
  if (data.bucketCountByObjectEncryptionRequirement != null) {
    contents.bucketCountByObjectEncryptionRequirement =
      deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads(
        data.bucketCountByObjectEncryptionRequirement,
        context
      );
  }
  if (data.bucketCountBySharedAccessType != null) {
    contents.bucketCountBySharedAccessType = deserializeAws_restJson1BucketCountBySharedAccessType(
      data.bucketCountBySharedAccessType,
      context
    );
  }
  if (data.bucketStatisticsBySensitivity != null) {
    contents.bucketStatisticsBySensitivity = deserializeAws_restJson1BucketStatisticsBySensitivity(
      data.bucketStatisticsBySensitivity,
      context
    );
  }
  if (data.classifiableObjectCount != null) {
    contents.classifiableObjectCount = __expectLong(data.classifiableObjectCount);
  }
  if (data.classifiableSizeInBytes != null) {
    contents.classifiableSizeInBytes = __expectLong(data.classifiableSizeInBytes);
  }
  if (data.lastUpdated != null) {
    contents.lastUpdated = __expectNonNull(__parseRfc3339DateTime(data.lastUpdated));
  }
  if (data.objectCount != null) {
    contents.objectCount = __expectLong(data.objectCount);
  }
  if (data.sizeInBytes != null) {
    contents.sizeInBytes = __expectLong(data.sizeInBytes);
  }
  if (data.sizeInBytesCompressed != null) {
    contents.sizeInBytesCompressed = __expectLong(data.sizeInBytesCompressed);
  }
  if (data.unclassifiableObjectCount != null) {
    contents.unclassifiableObjectCount = deserializeAws_restJson1ObjectLevelStatistics(
      data.unclassifiableObjectCount,
      context
    );
  }
  if (data.unclassifiableObjectSizeInBytes != null) {
    contents.unclassifiableObjectSizeInBytes = deserializeAws_restJson1ObjectLevelStatistics(
      data.unclassifiableObjectSizeInBytes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetBucketStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClassificationExportConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetClassificationExportConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationExportConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetClassificationScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClassificationScopeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.s3 != null) {
    contents.s3 = deserializeAws_restJson1S3ClassificationScope(data.s3, context);
  }
  return contents;
};

const deserializeAws_restJson1GetClassificationScopeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationScopeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.deleted != null) {
    contents.deleted = __expectBoolean(data.deleted);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.ignoreWords != null) {
    contents.ignoreWords = deserializeAws_restJson1__listOf__string(data.ignoreWords, context);
  }
  if (data.keywords != null) {
    contents.keywords = deserializeAws_restJson1__listOf__string(data.keywords, context);
  }
  if (data.maximumMatchDistance != null) {
    contents.maximumMatchDistance = __expectInt32(data.maximumMatchDistance);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.regex != null) {
    contents.regex = __expectString(data.regex);
  }
  if (data.severityLevels != null) {
    contents.severityLevels = deserializeAws_restJson1SeverityLevelList(data.severityLevels, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.findings = deserializeAws_restJson1__listOfFinding(data.findings, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.action = __expectString(data.action);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.findingCriteria != null) {
    contents.findingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.position != null) {
    contents.position = __expectInt32(data.position);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.securityHubConfiguration != null) {
    contents.securityHubConfiguration = deserializeAws_restJson1SecurityHubConfiguration(
      data.securityHubConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsPublicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetFindingStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.countsByGroup != null) {
    contents.countsByGroup = deserializeAws_restJson1__listOfGroupCount(data.countsByGroup, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.invitationsCount = __expectLong(data.invitationsCount);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMacieSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.findingPublishingFrequency != null) {
    contents.findingPublishingFrequency = __expectString(data.findingPublishingFrequency);
  }
  if (data.serviceRole != null) {
    contents.serviceRole = __expectString(data.serviceRole);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTime(data.updatedAt));
  }
  return contents;
};

const deserializeAws_restJson1GetMacieSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMacieSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.master = deserializeAws_restJson1Invitation(data.master, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  if (data.accountId != null) {
    contents.accountId = __expectString(data.accountId);
  }
  if (data.administratorAccountId != null) {
    contents.administratorAccountId = __expectString(data.administratorAccountId);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.email != null) {
    contents.email = __expectString(data.email);
  }
  if (data.invitedAt != null) {
    contents.invitedAt = __expectNonNull(__parseRfc3339DateTime(data.invitedAt));
  }
  if (data.masterAccountId != null) {
    contents.masterAccountId = __expectString(data.masterAccountId);
  }
  if (data.relationshipStatus != null) {
    contents.relationshipStatus = __expectString(data.relationshipStatus);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTime(data.updatedAt));
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetResourceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profileUpdatedAt != null) {
    contents.profileUpdatedAt = __expectNonNull(__parseRfc3339DateTime(data.profileUpdatedAt));
  }
  if (data.sensitivityScore != null) {
    contents.sensitivityScore = __expectInt32(data.sensitivityScore);
  }
  if (data.sensitivityScoreOverridden != null) {
    contents.sensitivityScoreOverridden = __expectBoolean(data.sensitivityScoreOverridden);
  }
  if (data.statistics != null) {
    contents.statistics = deserializeAws_restJson1ResourceStatistics(data.statistics, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetRevealConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevealConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRevealConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = deserializeAws_restJson1RevealConfiguration(data.configuration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRevealConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevealConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetSensitiveDataOccurrencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSensitiveDataOccurrencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = __expectString(data.error);
  }
  if (data.sensitiveDataOccurrences != null) {
    contents.sensitiveDataOccurrences = deserializeAws_restJson1SensitiveDataOccurrences(
      data.sensitiveDataOccurrences,
      context
    );
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1GetSensitiveDataOccurrencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.macie2#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.reasons != null) {
    contents.reasons = deserializeAws_restJson1__listOfUnavailabilityReasonCode(data.reasons, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
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

export const deserializeAws_restJson1GetSensitivityInspectionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitivityInspectionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSensitivityInspectionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.excludes != null) {
    contents.excludes = deserializeAws_restJson1SensitivityInspectionTemplateExcludes(data.excludes, context);
  }
  if (data.includes != null) {
    contents.includes = deserializeAws_restJson1SensitivityInspectionTemplateIncludes(data.includes, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sensitivityInspectionTemplateId != null) {
    contents.sensitivityInspectionTemplateId = __expectString(data.sensitivityInspectionTemplateId);
  }
  return contents;
};

const deserializeAws_restJson1GetSensitivityInspectionTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitivityInspectionTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.records != null) {
    contents.records = deserializeAws_restJson1__listOfUsageRecord(data.records, context);
  }
  if (data.timeRange != null) {
    contents.timeRange = __expectString(data.timeRange);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1GetUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageTotalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.timeRange != null) {
    contents.timeRange = __expectString(data.timeRange);
  }
  if (data.usageTotals != null) {
    contents.usageTotals = deserializeAws_restJson1__listOfUsageTotal(data.usageTotals, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUsageTotalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageTotalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListAllowListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAllowListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.allowLists != null) {
    contents.allowLists = deserializeAws_restJson1__listOfAllowListSummary(data.allowLists, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAllowListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClassificationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1__listOfJobSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListClassificationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListClassificationScopesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationScopesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClassificationScopesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.classificationScopes != null) {
    contents.classificationScopes = deserializeAws_restJson1__listOfClassificationScopeSummary(
      data.classificationScopes,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListClassificationScopesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationScopesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1__listOfCustomDataIdentifierSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCustomDataIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  if (data.findingIds != null) {
    contents.findingIds = deserializeAws_restJson1__listOf__string(data.findingIds, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListFindingsFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsFiltersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingsFilterListItems != null) {
    contents.findingsFilterListItems = deserializeAws_restJson1__listOfFindingsFilterListItem(
      data.findingsFilterListItems,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFindingsFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.invitations = deserializeAws_restJson1__listOfInvitation(data.invitations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListManagedDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListManagedDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1__listOfManagedDataIdentifierSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListManagedDataIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedDataIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    contents.members = deserializeAws_restJson1__listOfMember(data.members, context);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.adminAccounts = deserializeAws_restJson1__listOfAdminAccount(data.adminAccounts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListResourceProfileArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileArtifactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceProfileArtifactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.artifacts != null) {
    contents.artifacts = deserializeAws_restJson1__listOfResourceProfileArtifact(data.artifacts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceProfileArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListResourceProfileDetectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileDetectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceProfileDetectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detections != null) {
    contents.detections = deserializeAws_restJson1__listOfDetection(data.detections, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceProfileDetectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileDetectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1ListSensitivityInspectionTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensitivityInspectionTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSensitivityInspectionTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sensitivityInspectionTemplates != null) {
    contents.sensitivityInspectionTemplates = deserializeAws_restJson1__listOfSensitivityInspectionTemplatesEntry(
      data.sensitivityInspectionTemplates,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSensitivityInspectionTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensitivityInspectionTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1PutClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutClassificationExportConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
  }
  return contents;
};

const deserializeAws_restJson1PutClassificationExportConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClassificationExportConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFindingsPublicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.matchingResources != null) {
    contents.matchingResources = deserializeAws_restJson1__listOfMatchingResource(data.matchingResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TestCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.matchCount != null) {
    contents.matchCount = __expectInt32(data.matchCount);
  }
  return contents;
};

const deserializeAws_restJson1TestCustomDataIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestCustomDataIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UpdateAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAllowListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAllowListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomatedDiscoveryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomatedDiscoveryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClassificationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateClassificationScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClassificationScopeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateClassificationScopeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationScopeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFindingsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMacieSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMacieSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMacieSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateMemberSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMemberSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateResourceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateResourceProfileDetectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileDetectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceProfileDetectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourceProfileDetectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileDetectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateRevealConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevealConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRevealConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = deserializeAws_restJson1RevealConfiguration(data.configuration, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRevealConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevealConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

export const deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSensitivityInspectionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSensitivityInspectionTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const contents: any = map({});
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
  const contents: any = map({});
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

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnprocessableEntityException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfCriteriaForJob = (input: CriteriaForJob[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CriteriaForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfFindingType = (input: (FindingType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfJobScopeTerm = (input: JobScopeTerm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfS3BucketName = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfSearchResourcesCriteria = (
  input: SearchResourcesCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1SearchResourcesTagCriterionPair(entry, context);
    });
};

const serializeAws_restJson1__listOfSuppressDataIdentifier = (
  input: SuppressDataIdentifier[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SuppressDataIdentifier(entry, context);
    });
};

const serializeAws_restJson1__listOfTagCriterionPairForJob = (
  input: TagCriterionPairForJob[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};

const serializeAws_restJson1__listOfTagValuePair = (input: TagValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1UsageStatisticsFilter(entry, context);
    });
};

const serializeAws_restJson1AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.email != null && { email: input.email }),
  };
};

const serializeAws_restJson1AllowListCriteria = (input: AllowListCriteria, context: __SerdeContext): any => {
  return {
    ...(input.regex != null && { regex: input.regex }),
    ...(input.s3WordsList != null && { s3WordsList: serializeAws_restJson1S3WordsList(input.s3WordsList, context) }),
  };
};

const serializeAws_restJson1BucketCriteria = (
  input: Record<string, BucketCriteriaAdditionalProperties>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1BucketCriteriaAdditionalProperties(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1BucketCriteriaAdditionalProperties = (
  input: BucketCriteriaAdditionalProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.eq != null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
    ...(input.gt != null && { gt: input.gt }),
    ...(input.gte != null && { gte: input.gte }),
    ...(input.lt != null && { lt: input.lt }),
    ...(input.lte != null && { lte: input.lte }),
    ...(input.neq != null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1BucketSortCriteria = (input: BucketSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1ClassificationExportConfiguration = (
  input: ClassificationExportConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3Destination != null && {
      s3Destination: serializeAws_restJson1S3Destination(input.s3Destination, context),
    }),
  };
};

const serializeAws_restJson1CriteriaBlockForJob = (input: CriteriaBlockForJob, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: serializeAws_restJson1__listOfCriteriaForJob(input.and, context) }),
  };
};

const serializeAws_restJson1CriteriaForJob = (input: CriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.simpleCriterion != null && {
      simpleCriterion: serializeAws_restJson1SimpleCriterionForJob(input.simpleCriterion, context),
    }),
    ...(input.tagCriterion != null && {
      tagCriterion: serializeAws_restJson1TagCriterionForJob(input.tagCriterion, context),
    }),
  };
};

const serializeAws_restJson1Criterion = (
  input: Record<string, CriterionAdditionalProperties>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1CriterionAdditionalProperties(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1CriterionAdditionalProperties = (
  input: CriterionAdditionalProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.eq != null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
    ...(input.eqExactMatch != null && {
      eqExactMatch: serializeAws_restJson1__listOf__string(input.eqExactMatch, context),
    }),
    ...(input.gt != null && { gt: input.gt }),
    ...(input.gte != null && { gte: input.gte }),
    ...(input.lt != null && { lt: input.lt }),
    ...(input.lte != null && { lte: input.lte }),
    ...(input.neq != null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
  };
};

const serializeAws_restJson1DailySchedule = (input: DailySchedule, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.criterion != null && { criterion: serializeAws_restJson1Criterion(input.criterion, context) }),
  };
};

const serializeAws_restJson1FindingStatisticsSortCriteria = (
  input: FindingStatisticsSortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1JobScheduleFrequency = (input: JobScheduleFrequency, context: __SerdeContext): any => {
  return {
    ...(input.dailySchedule != null && {
      dailySchedule: serializeAws_restJson1DailySchedule(input.dailySchedule, context),
    }),
    ...(input.monthlySchedule != null && {
      monthlySchedule: serializeAws_restJson1MonthlySchedule(input.monthlySchedule, context),
    }),
    ...(input.weeklySchedule != null && {
      weeklySchedule: serializeAws_restJson1WeeklySchedule(input.weeklySchedule, context),
    }),
  };
};

const serializeAws_restJson1JobScopeTerm = (input: JobScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.simpleScopeTerm != null && {
      simpleScopeTerm: serializeAws_restJson1SimpleScopeTerm(input.simpleScopeTerm, context),
    }),
    ...(input.tagScopeTerm != null && {
      tagScopeTerm: serializeAws_restJson1TagScopeTerm(input.tagScopeTerm, context),
    }),
  };
};

const serializeAws_restJson1JobScopingBlock = (input: JobScopingBlock, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: serializeAws_restJson1__listOfJobScopeTerm(input.and, context) }),
  };
};

const serializeAws_restJson1ListJobsFilterCriteria = (input: ListJobsFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && {
      excludes: serializeAws_restJson1__listOfListJobsFilterTerm(input.excludes, context),
    }),
    ...(input.includes != null && {
      includes: serializeAws_restJson1__listOfListJobsFilterTerm(input.includes, context),
    }),
  };
};

const serializeAws_restJson1ListJobsFilterTerm = (input: ListJobsFilterTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1ListJobsSortCriteria = (input: ListJobsSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1MonthlySchedule = (input: MonthlySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfMonth != null && { dayOfMonth: input.dayOfMonth }),
  };
};

const serializeAws_restJson1RevealConfiguration = (input: RevealConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_restJson1S3BucketCriteriaForJob = (input: S3BucketCriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: serializeAws_restJson1CriteriaBlockForJob(input.excludes, context) }),
    ...(input.includes != null && { includes: serializeAws_restJson1CriteriaBlockForJob(input.includes, context) }),
  };
};

const serializeAws_restJson1S3BucketDefinitionForJob = (
  input: S3BucketDefinitionForJob,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.buckets != null && { buckets: serializeAws_restJson1__listOf__string(input.buckets, context) }),
  };
};

const serializeAws_restJson1S3ClassificationScopeExclusionUpdate = (
  input: S3ClassificationScopeExclusionUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketNames != null && {
      bucketNames: serializeAws_restJson1__listOfS3BucketName(input.bucketNames, context),
    }),
    ...(input.operation != null && { operation: input.operation }),
  };
};

const serializeAws_restJson1S3ClassificationScopeUpdate = (
  input: S3ClassificationScopeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.excludes != null && {
      excludes: serializeAws_restJson1S3ClassificationScopeExclusionUpdate(input.excludes, context),
    }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

const serializeAws_restJson1S3JobDefinition = (input: S3JobDefinition, context: __SerdeContext): any => {
  return {
    ...(input.bucketCriteria != null && {
      bucketCriteria: serializeAws_restJson1S3BucketCriteriaForJob(input.bucketCriteria, context),
    }),
    ...(input.bucketDefinitions != null && {
      bucketDefinitions: serializeAws_restJson1__listOfS3BucketDefinitionForJob(input.bucketDefinitions, context),
    }),
    ...(input.scoping != null && { scoping: serializeAws_restJson1Scoping(input.scoping, context) }),
  };
};

const serializeAws_restJson1S3WordsList = (input: S3WordsList, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.objectKey != null && { objectKey: input.objectKey }),
  };
};

const serializeAws_restJson1Scoping = (input: Scoping, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: serializeAws_restJson1JobScopingBlock(input.excludes, context) }),
    ...(input.includes != null && { includes: serializeAws_restJson1JobScopingBlock(input.includes, context) }),
  };
};

const serializeAws_restJson1SearchResourcesBucketCriteria = (
  input: SearchResourcesBucketCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.excludes != null && {
      excludes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.excludes, context),
    }),
    ...(input.includes != null && {
      includes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.includes, context),
    }),
  };
};

const serializeAws_restJson1SearchResourcesCriteria = (
  input: SearchResourcesCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.simpleCriterion != null && {
      simpleCriterion: serializeAws_restJson1SearchResourcesSimpleCriterion(input.simpleCriterion, context),
    }),
    ...(input.tagCriterion != null && {
      tagCriterion: serializeAws_restJson1SearchResourcesTagCriterion(input.tagCriterion, context),
    }),
  };
};

const serializeAws_restJson1SearchResourcesCriteriaBlock = (
  input: SearchResourcesCriteriaBlock,
  context: __SerdeContext
): any => {
  return {
    ...(input.and != null && { and: serializeAws_restJson1__listOfSearchResourcesCriteria(input.and, context) }),
  };
};

const serializeAws_restJson1SearchResourcesSimpleCriterion = (
  input: SearchResourcesSimpleCriterion,
  context: __SerdeContext
): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SearchResourcesSortCriteria = (
  input: SearchResourcesSortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1SearchResourcesTagCriterion = (
  input: SearchResourcesTagCriterion,
  context: __SerdeContext
): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.tagValues != null && {
      tagValues: serializeAws_restJson1__listOfSearchResourcesTagCriterionPair(input.tagValues, context),
    }),
  };
};

const serializeAws_restJson1SearchResourcesTagCriterionPair = (
  input: SearchResourcesTagCriterionPair,
  context: __SerdeContext
): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1SecurityHubConfiguration = (
  input: SecurityHubConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.publishClassificationFindings != null && {
      publishClassificationFindings: input.publishClassificationFindings,
    }),
    ...(input.publishPolicyFindings != null && { publishPolicyFindings: input.publishPolicyFindings }),
  };
};

const serializeAws_restJson1SensitivityInspectionTemplateExcludes = (
  input: SensitivityInspectionTemplateExcludes,
  context: __SerdeContext
): any => {
  return {
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: serializeAws_restJson1__listOf__string(input.managedDataIdentifierIds, context),
    }),
  };
};

const serializeAws_restJson1SensitivityInspectionTemplateIncludes = (
  input: SensitivityInspectionTemplateIncludes,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowListIds != null && {
      allowListIds: serializeAws_restJson1__listOf__string(input.allowListIds, context),
    }),
    ...(input.customDataIdentifierIds != null && {
      customDataIdentifierIds: serializeAws_restJson1__listOf__string(input.customDataIdentifierIds, context),
    }),
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: serializeAws_restJson1__listOf__string(input.managedDataIdentifierIds, context),
    }),
  };
};

const serializeAws_restJson1SeverityLevel = (input: SeverityLevel, context: __SerdeContext): any => {
  return {
    ...(input.occurrencesThreshold != null && { occurrencesThreshold: input.occurrencesThreshold }),
    ...(input.severity != null && { severity: input.severity }),
  };
};

const serializeAws_restJson1SeverityLevelList = (input: SeverityLevel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SeverityLevel(entry, context);
    });
};

const serializeAws_restJson1SimpleCriterionForJob = (input: SimpleCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SimpleScopeTerm = (input: SimpleScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1SuppressDataIdentifier = (input: SuppressDataIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1TagCriterionForJob = (input: TagCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.tagValues != null && {
      tagValues: serializeAws_restJson1__listOfTagCriterionPairForJob(input.tagValues, context),
    }),
  };
};

const serializeAws_restJson1TagCriterionPairForJob = (input: TagCriterionPairForJob, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
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

const serializeAws_restJson1TagScopeTerm = (input: TagScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.tagValues != null && { tagValues: serializeAws_restJson1__listOfTagValuePair(input.tagValues, context) }),
    ...(input.target != null && { target: input.target }),
  };
};

const serializeAws_restJson1TagValuePair = (input: TagValuePair, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1UsageStatisticsFilter = (input: UsageStatisticsFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
  };
};

const serializeAws_restJson1UsageStatisticsSortBy = (input: UsageStatisticsSortBy, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1WeeklySchedule = (input: WeeklySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfWeek != null && { dayOfWeek: input.dayOfWeek }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfAdminAccount = (output: any, context: __SerdeContext): AdminAccount[] => {
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

const deserializeAws_restJson1__listOfAllowListSummary = (output: any, context: __SerdeContext): AllowListSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AllowListSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetCustomDataIdentifierSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfBucketMetadata = (output: any, context: __SerdeContext): BucketMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BucketMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfClassificationScopeSummary = (
  output: any,
  context: __SerdeContext
): ClassificationScopeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClassificationScopeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfCriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CriteriaForJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDataIdentifierSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDetectedDataDetails = (
  output: any,
  context: __SerdeContext
): DetectedDataDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectedDataDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDetection = (output: any, context: __SerdeContext): Detection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Detection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfFinding = (output: any, context: __SerdeContext): Finding[] => {
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

const deserializeAws_restJson1__listOfFindingsFilterListItem = (
  output: any,
  context: __SerdeContext
): FindingsFilterListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingsFilterListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfGroupCount = (output: any, context: __SerdeContext): GroupCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupCount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfInvitation = (output: any, context: __SerdeContext): Invitation[] => {
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

const deserializeAws_restJson1__listOfJobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobScopeTerm(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfJobSummary = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfKeyValuePair = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfManagedDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): ManagedDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ManagedDataIdentifierSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfMatchingResource = (output: any, context: __SerdeContext): MatchingResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MatchingResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfMember = (output: any, context: __SerdeContext): Member[] => {
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

const deserializeAws_restJson1__listOfResourceProfileArtifact = (
  output: any,
  context: __SerdeContext
): ResourceProfileArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceProfileArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfS3BucketDefinitionForJob = (
  output: any,
  context: __SerdeContext
): S3BucketDefinitionForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfS3BucketName = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfSensitivityInspectionTemplatesEntry = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplatesEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitivityInspectionTemplatesEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfTagCriterionPairForJob = (
  output: any,
  context: __SerdeContext
): TagCriterionPairForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfTagValuePair = (output: any, context: __SerdeContext): TagValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfUnavailabilityReasonCode = (
  output: any,
  context: __SerdeContext
): (UnavailabilityReasonCode | string)[] => {
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

const deserializeAws_restJson1__listOfUnprocessedAccount = (
  output: any,
  context: __SerdeContext
): UnprocessedAccount[] => {
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

const deserializeAws_restJson1__listOfUsageByAccount = (output: any, context: __SerdeContext): UsageByAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageByAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfUsageRecord = (output: any, context: __SerdeContext): UsageRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfUsageTotal = (output: any, context: __SerdeContext): UsageTotal[] => {
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
      output.blockPublicAccess != null
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

const deserializeAws_restJson1AllowListCriteria = (output: any, context: __SerdeContext): AllowListCriteria => {
  return {
    regex: __expectString(output.regex),
    s3WordsList:
      output.s3WordsList != null ? deserializeAws_restJson1S3WordsList(output.s3WordsList, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AllowListStatus = (output: any, context: __SerdeContext): AllowListStatus => {
  return {
    code: __expectString(output.code),
    description: __expectString(output.description),
  } as any;
};

const deserializeAws_restJson1AllowListSummary = (output: any, context: __SerdeContext): AllowListSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1ApiCallDetails = (output: any, context: __SerdeContext): ApiCallDetails => {
  return {
    api: __expectString(output.api),
    apiServiceName: __expectString(output.apiServiceName),
    firstSeen: output.firstSeen != null ? __expectNonNull(__parseRfc3339DateTime(output.firstSeen)) : undefined,
    lastSeen: output.lastSeen != null ? __expectNonNull(__parseRfc3339DateTime(output.lastSeen)) : undefined,
  } as any;
};

const deserializeAws_restJson1AssumedRole = (output: any, context: __SerdeContext): AssumedRole => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    sessionContext:
      output.sessionContext != null
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
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
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
      output.accessControlList != null
        ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
        : undefined,
    blockPublicAccess:
      output.blockPublicAccess != null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
    bucketPolicy:
      output.bucketPolicy != null ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BucketMetadata = (output: any, context: __SerdeContext): BucketMetadata => {
  return {
    accountId: __expectString(output.accountId),
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    bucketArn: __expectString(output.bucketArn),
    bucketCreatedAt:
      output.bucketCreatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.bucketCreatedAt)) : undefined,
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    jobDetails: output.jobDetails != null ? deserializeAws_restJson1JobDetails(output.jobDetails, context) : undefined,
    lastAutomatedDiscoveryTime:
      output.lastAutomatedDiscoveryTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.lastAutomatedDiscoveryTime))
        : undefined,
    lastUpdated: output.lastUpdated != null ? __expectNonNull(__parseRfc3339DateTime(output.lastUpdated)) : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType != null
        ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    publicAccess:
      output.publicAccess != null
        ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
        : undefined,
    region: __expectString(output.region),
    replicationDetails:
      output.replicationDetails != null
        ? deserializeAws_restJson1ReplicationDetails(output.replicationDetails, context)
        : undefined,
    sensitivityScore: __expectInt32(output.sensitivityScore),
    serverSideEncryption:
      output.serverSideEncryption != null
        ? deserializeAws_restJson1BucketServerSideEncryption(output.serverSideEncryption, context)
        : undefined,
    sharedAccess: __expectString(output.sharedAccess),
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    tags: output.tags != null ? deserializeAws_restJson1__listOfKeyValuePair(output.tags, context) : undefined,
    unclassifiableObjectCount:
      output.unclassifiableObjectCount != null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes != null
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
      output.accountLevelPermissions != null
        ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    bucketLevelPermissions:
      output.bucketLevelPermissions != null
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
      output.permissionConfiguration != null
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

const deserializeAws_restJson1BucketStatisticsBySensitivity = (
  output: any,
  context: __SerdeContext
): BucketStatisticsBySensitivity => {
  return {
    classificationError:
      output.classificationError != null
        ? deserializeAws_restJson1SensitivityAggregations(output.classificationError, context)
        : undefined,
    notClassified:
      output.notClassified != null
        ? deserializeAws_restJson1SensitivityAggregations(output.notClassified, context)
        : undefined,
    notSensitive:
      output.notSensitive != null
        ? deserializeAws_restJson1SensitivityAggregations(output.notSensitive, context)
        : undefined,
    sensitive:
      output.sensitive != null ? deserializeAws_restJson1SensitivityAggregations(output.sensitive, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cell(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ClassificationDetails = (output: any, context: __SerdeContext): ClassificationDetails => {
  return {
    detailedResultsLocation: __expectString(output.detailedResultsLocation),
    jobArn: __expectString(output.jobArn),
    jobId: __expectString(output.jobId),
    originType: __expectString(output.originType),
    result: output.result != null ? deserializeAws_restJson1ClassificationResult(output.result, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationExportConfiguration = (
  output: any,
  context: __SerdeContext
): ClassificationExportConfiguration => {
  return {
    s3Destination:
      output.s3Destination != null ? deserializeAws_restJson1S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return {
    additionalOccurrences: __expectBoolean(output.additionalOccurrences),
    customDataIdentifiers:
      output.customDataIdentifiers != null
        ? deserializeAws_restJson1CustomDataIdentifiers(output.customDataIdentifiers, context)
        : undefined,
    mimeType: __expectString(output.mimeType),
    sensitiveData:
      output.sensitiveData != null ? deserializeAws_restJson1SensitiveData(output.sensitiveData, context) : undefined,
    sizeClassified: __expectLong(output.sizeClassified),
    status:
      output.status != null ? deserializeAws_restJson1ClassificationResultStatus(output.status, context) : undefined,
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

const deserializeAws_restJson1ClassificationScopeSummary = (
  output: any,
  context: __SerdeContext
): ClassificationScopeSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1CriteriaBlockForJob = (output: any, context: __SerdeContext): CriteriaBlockForJob => {
  return {
    and: output.and != null ? deserializeAws_restJson1__listOfCriteriaForJob(output.and, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob => {
  return {
    simpleCriterion:
      output.simpleCriterion != null
        ? deserializeAws_restJson1SimpleCriterionForJob(output.simpleCriterion, context)
        : undefined,
    tagCriterion:
      output.tagCriterion != null
        ? deserializeAws_restJson1TagCriterionForJob(output.tagCriterion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Criterion = (
  output: any,
  context: __SerdeContext
): Record<string, CriterionAdditionalProperties> => {
  return Object.entries(output).reduce(
    (acc: Record<string, CriterionAdditionalProperties>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1CriterionAdditionalProperties(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1CriterionAdditionalProperties = (
  output: any,
  context: __SerdeContext
): CriterionAdditionalProperties => {
  return {
    eq: output.eq != null ? deserializeAws_restJson1__listOf__string(output.eq, context) : undefined,
    eqExactMatch:
      output.eqExactMatch != null ? deserializeAws_restJson1__listOf__string(output.eqExactMatch, context) : undefined,
    gt: __expectLong(output.gt),
    gte: __expectLong(output.gte),
    lt: __expectLong(output.lt),
    lte: __expectLong(output.lte),
    neq: output.neq != null ? deserializeAws_restJson1__listOf__string(output.neq, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiers = (output: any, context: __SerdeContext): CustomDataIdentifiers => {
  return {
    detections:
      output.detections != null ? deserializeAws_restJson1CustomDetections(output.detections, context) : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifierSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
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
      output.occurrences != null ? deserializeAws_restJson1Occurrences(output.occurrences, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDetections = (output: any, context: __SerdeContext): CustomDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DailySchedule = (output: any, context: __SerdeContext): DailySchedule => {
  return {} as any;
};

const deserializeAws_restJson1DefaultDetection = (output: any, context: __SerdeContext): DefaultDetection => {
  return {
    count: __expectLong(output.count),
    occurrences:
      output.occurrences != null ? deserializeAws_restJson1Occurrences(output.occurrences, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DefaultDetections = (output: any, context: __SerdeContext): DefaultDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DefaultDetection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectedDataDetails = (output: any, context: __SerdeContext): DetectedDataDetails => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Detection = (output: any, context: __SerdeContext): Detection => {
  return {
    arn: __expectString(output.arn),
    count: __expectLong(output.count),
    id: __expectString(output.id),
    name: __expectString(output.name),
    suppressed: __expectBoolean(output.suppressed),
    type: __expectString(output.type),
  } as any;
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
      output.sessionContext != null
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
      output.classificationDetails != null
        ? deserializeAws_restJson1ClassificationDetails(output.classificationDetails, context)
        : undefined,
    count: __expectLong(output.count),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    partition: __expectString(output.partition),
    policyDetails:
      output.policyDetails != null ? deserializeAws_restJson1PolicyDetails(output.policyDetails, context) : undefined,
    region: __expectString(output.region),
    resourcesAffected:
      output.resourcesAffected != null
        ? deserializeAws_restJson1ResourcesAffected(output.resourcesAffected, context)
        : undefined,
    sample: __expectBoolean(output.sample),
    schemaVersion: __expectString(output.schemaVersion),
    severity: output.severity != null ? deserializeAws_restJson1Severity(output.severity, context) : undefined,
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingAction = (output: any, context: __SerdeContext): FindingAction => {
  return {
    actionType: __expectString(output.actionType),
    apiCallDetails:
      output.apiCallDetails != null
        ? deserializeAws_restJson1ApiCallDetails(output.apiCallDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingActor = (output: any, context: __SerdeContext): FindingActor => {
  return {
    domainDetails:
      output.domainDetails != null ? deserializeAws_restJson1DomainDetails(output.domainDetails, context) : undefined,
    ipAddressDetails:
      output.ipAddressDetails != null
        ? deserializeAws_restJson1IpAddressDetails(output.ipAddressDetails, context)
        : undefined,
    userIdentity:
      output.userIdentity != null ? deserializeAws_restJson1UserIdentity(output.userIdentity, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    criterion: output.criterion != null ? deserializeAws_restJson1Criterion(output.criterion, context) : undefined,
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
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
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
    invitedAt: output.invitedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.invitedAt)) : undefined,
    relationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1IpAddressDetails = (output: any, context: __SerdeContext): IpAddressDetails => {
  return {
    ipAddressV4: __expectString(output.ipAddressV4),
    ipCity: output.ipCity != null ? deserializeAws_restJson1IpCity(output.ipCity, context) : undefined,
    ipCountry: output.ipCountry != null ? deserializeAws_restJson1IpCountry(output.ipCountry, context) : undefined,
    ipGeoLocation:
      output.ipGeoLocation != null ? deserializeAws_restJson1IpGeoLocation(output.ipGeoLocation, context) : undefined,
    ipOwner: output.ipOwner != null ? deserializeAws_restJson1IpOwner(output.ipOwner, context) : undefined,
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
      output.lastJobRunTime != null ? __expectNonNull(__parseRfc3339DateTime(output.lastJobRunTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1JobScheduleFrequency = (output: any, context: __SerdeContext): JobScheduleFrequency => {
  return {
    dailySchedule:
      output.dailySchedule != null ? deserializeAws_restJson1DailySchedule(output.dailySchedule, context) : undefined,
    monthlySchedule:
      output.monthlySchedule != null
        ? deserializeAws_restJson1MonthlySchedule(output.monthlySchedule, context)
        : undefined,
    weeklySchedule:
      output.weeklySchedule != null
        ? deserializeAws_restJson1WeeklySchedule(output.weeklySchedule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm => {
  return {
    simpleScopeTerm:
      output.simpleScopeTerm != null
        ? deserializeAws_restJson1SimpleScopeTerm(output.simpleScopeTerm, context)
        : undefined,
    tagScopeTerm:
      output.tagScopeTerm != null ? deserializeAws_restJson1TagScopeTerm(output.tagScopeTerm, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobScopingBlock = (output: any, context: __SerdeContext): JobScopingBlock => {
  return {
    and: output.and != null ? deserializeAws_restJson1__listOfJobScopeTerm(output.and, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    bucketCriteria:
      output.bucketCriteria != null
        ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
        : undefined,
    bucketDefinitions:
      output.bucketDefinitions != null
        ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    jobId: __expectString(output.jobId),
    jobStatus: __expectString(output.jobStatus),
    jobType: __expectString(output.jobType),
    lastRunErrorStatus:
      output.lastRunErrorStatus != null
        ? deserializeAws_restJson1LastRunErrorStatus(output.lastRunErrorStatus, context)
        : undefined,
    name: __expectString(output.name),
    userPausedDetails:
      output.userPausedDetails != null
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LastRunErrorStatus = (output: any, context: __SerdeContext): LastRunErrorStatus => {
  return {
    code: __expectString(output.code),
  } as any;
};

const deserializeAws_restJson1ManagedDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): ManagedDataIdentifierSummary => {
  return {
    category: __expectString(output.category),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1MatchingBucket = (output: any, context: __SerdeContext): MatchingBucket => {
  return {
    accountId: __expectString(output.accountId),
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    jobDetails: output.jobDetails != null ? deserializeAws_restJson1JobDetails(output.jobDetails, context) : undefined,
    lastAutomatedDiscoveryTime:
      output.lastAutomatedDiscoveryTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.lastAutomatedDiscoveryTime))
        : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType != null
        ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    sensitivityScore: __expectInt32(output.sensitivityScore),
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    unclassifiableObjectCount:
      output.unclassifiableObjectCount != null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes != null
        ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MatchingResource = (output: any, context: __SerdeContext): MatchingResource => {
  return {
    matchingBucket:
      output.matchingBucket != null
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
    invitedAt: output.invitedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.invitedAt)) : undefined,
    masterAccountId: __expectString(output.masterAccountId),
    relationshipStatus: __expectString(output.relationshipStatus),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
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
    cells: output.cells != null ? deserializeAws_restJson1Cells(output.cells, context) : undefined,
    lineRanges: output.lineRanges != null ? deserializeAws_restJson1Ranges(output.lineRanges, context) : undefined,
    offsetRanges:
      output.offsetRanges != null ? deserializeAws_restJson1Ranges(output.offsetRanges, context) : undefined,
    pages: output.pages != null ? deserializeAws_restJson1Pages(output.pages, context) : undefined,
    records: output.records != null ? deserializeAws_restJson1Records(output.records, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Page = (output: any, context: __SerdeContext): Page => {
  return {
    lineRange: output.lineRange != null ? deserializeAws_restJson1Range(output.lineRange, context) : undefined,
    offsetRange: output.offsetRange != null ? deserializeAws_restJson1Range(output.offsetRange, context) : undefined,
    pageNumber: __expectLong(output.pageNumber),
  } as any;
};

const deserializeAws_restJson1Pages = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Page(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return {
    action: output.action != null ? deserializeAws_restJson1FindingAction(output.action, context) : undefined,
    actor: output.actor != null ? deserializeAws_restJson1FindingActor(output.actor, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Range(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    jsonPath: __expectString(output.jsonPath),
    recordIndex: __expectLong(output.recordIndex),
  } as any;
};

const deserializeAws_restJson1Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationDetails = (output: any, context: __SerdeContext): ReplicationDetails => {
  return {
    replicated: __expectBoolean(output.replicated),
    replicatedExternally: __expectBoolean(output.replicatedExternally),
    replicationAccounts:
      output.replicationAccounts != null
        ? deserializeAws_restJson1__listOf__string(output.replicationAccounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceProfileArtifact = (
  output: any,
  context: __SerdeContext
): ResourceProfileArtifact => {
  return {
    arn: __expectString(output.arn),
    classificationResultStatus: __expectString(output.classificationResultStatus),
    sensitive: __expectBoolean(output.sensitive),
  } as any;
};

const deserializeAws_restJson1ResourcesAffected = (output: any, context: __SerdeContext): ResourcesAffected => {
  return {
    s3Bucket: output.s3Bucket != null ? deserializeAws_restJson1S3Bucket(output.s3Bucket, context) : undefined,
    s3Object: output.s3Object != null ? deserializeAws_restJson1S3Object(output.s3Object, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceStatistics = (output: any, context: __SerdeContext): ResourceStatistics => {
  return {
    totalBytesClassified: __expectLong(output.totalBytesClassified),
    totalDetections: __expectLong(output.totalDetections),
    totalDetectionsSuppressed: __expectLong(output.totalDetectionsSuppressed),
    totalItemsClassified: __expectLong(output.totalItemsClassified),
    totalItemsSensitive: __expectLong(output.totalItemsSensitive),
    totalItemsSkipped: __expectLong(output.totalItemsSkipped),
    totalItemsSkippedInvalidEncryption: __expectLong(output.totalItemsSkippedInvalidEncryption),
    totalItemsSkippedInvalidKms: __expectLong(output.totalItemsSkippedInvalidKms),
    totalItemsSkippedPermissionDenied: __expectLong(output.totalItemsSkippedPermissionDenied),
  } as any;
};

const deserializeAws_restJson1RevealConfiguration = (output: any, context: __SerdeContext): RevealConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1S3Bucket = (output: any, context: __SerdeContext): S3Bucket => {
  return {
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    defaultServerSideEncryption:
      output.defaultServerSideEncryption != null
        ? deserializeAws_restJson1ServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    name: __expectString(output.name),
    owner: output.owner != null ? deserializeAws_restJson1S3BucketOwner(output.owner, context) : undefined,
    publicAccess:
      output.publicAccess != null
        ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1KeyValuePairList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketCriteriaForJob = (
  output: any,
  context: __SerdeContext
): S3BucketCriteriaForJob => {
  return {
    excludes:
      output.excludes != null ? deserializeAws_restJson1CriteriaBlockForJob(output.excludes, context) : undefined,
    includes:
      output.includes != null ? deserializeAws_restJson1CriteriaBlockForJob(output.includes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketDefinitionForJob = (
  output: any,
  context: __SerdeContext
): S3BucketDefinitionForJob => {
  return {
    accountId: __expectString(output.accountId),
    buckets: output.buckets != null ? deserializeAws_restJson1__listOf__string(output.buckets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketOwner = (output: any, context: __SerdeContext): S3BucketOwner => {
  return {
    displayName: __expectString(output.displayName),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1S3ClassificationScope = (output: any, context: __SerdeContext): S3ClassificationScope => {
  return {
    excludes:
      output.excludes != null
        ? deserializeAws_restJson1S3ClassificationScopeExclusion(output.excludes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3ClassificationScopeExclusion = (
  output: any,
  context: __SerdeContext
): S3ClassificationScopeExclusion => {
  return {
    bucketNames:
      output.bucketNames != null
        ? deserializeAws_restJson1__listOfS3BucketName(output.bucketNames, context)
        : undefined,
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
      output.bucketCriteria != null
        ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
        : undefined,
    bucketDefinitions:
      output.bucketDefinitions != null
        ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    scoping: output.scoping != null ? deserializeAws_restJson1Scoping(output.scoping, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucketArn: __expectString(output.bucketArn),
    eTag: __expectString(output.eTag),
    extension: __expectString(output.extension),
    key: __expectString(output.key),
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTime(output.lastModified)) : undefined,
    path: __expectString(output.path),
    publicAccess: __expectBoolean(output.publicAccess),
    serverSideEncryption:
      output.serverSideEncryption != null
        ? deserializeAws_restJson1ServerSideEncryption(output.serverSideEncryption, context)
        : undefined,
    size: __expectLong(output.size),
    storageClass: __expectString(output.storageClass),
    tags: output.tags != null ? deserializeAws_restJson1KeyValuePairList(output.tags, context) : undefined,
    versionId: __expectString(output.versionId),
  } as any;
};

const deserializeAws_restJson1S3WordsList = (output: any, context: __SerdeContext): S3WordsList => {
  return {
    bucketName: __expectString(output.bucketName),
    objectKey: __expectString(output.objectKey),
  } as any;
};

const deserializeAws_restJson1Scoping = (output: any, context: __SerdeContext): Scoping => {
  return {
    excludes: output.excludes != null ? deserializeAws_restJson1JobScopingBlock(output.excludes, context) : undefined,
    includes: output.includes != null ? deserializeAws_restJson1JobScopingBlock(output.includes, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SensitiveDataItem = (output: any, context: __SerdeContext): SensitiveDataItem => {
  return {
    category: __expectString(output.category),
    detections:
      output.detections != null ? deserializeAws_restJson1DefaultDetections(output.detections, context) : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

const deserializeAws_restJson1SensitiveDataOccurrences = (
  output: any,
  context: __SerdeContext
): Record<string, DetectedDataDetails[]> => {
  return Object.entries(output).reduce((acc: Record<string, DetectedDataDetails[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1__listOfDetectedDataDetails(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SensitivityAggregations = (
  output: any,
  context: __SerdeContext
): SensitivityAggregations => {
  return {
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    publiclyAccessibleCount: __expectLong(output.publiclyAccessibleCount),
    totalCount: __expectLong(output.totalCount),
    totalSizeInBytes: __expectLong(output.totalSizeInBytes),
  } as any;
};

const deserializeAws_restJson1SensitivityInspectionTemplateExcludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateExcludes => {
  return {
    managedDataIdentifierIds:
      output.managedDataIdentifierIds != null
        ? deserializeAws_restJson1__listOf__string(output.managedDataIdentifierIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SensitivityInspectionTemplateIncludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateIncludes => {
  return {
    allowListIds:
      output.allowListIds != null ? deserializeAws_restJson1__listOf__string(output.allowListIds, context) : undefined,
    customDataIdentifierIds:
      output.customDataIdentifierIds != null
        ? deserializeAws_restJson1__listOf__string(output.customDataIdentifierIds, context)
        : undefined,
    managedDataIdentifierIds:
      output.managedDataIdentifierIds != null
        ? deserializeAws_restJson1__listOf__string(output.managedDataIdentifierIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SensitivityInspectionTemplatesEntry = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplatesEntry => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
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
      output.attributes != null
        ? deserializeAws_restJson1SessionContextAttributes(output.attributes, context)
        : undefined,
    sessionIssuer:
      output.sessionIssuer != null ? deserializeAws_restJson1SessionIssuer(output.sessionIssuer, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SessionContextAttributes = (
  output: any,
  context: __SerdeContext
): SessionContextAttributes => {
  return {
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.creationDate)) : undefined,
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

const deserializeAws_restJson1SeverityLevel = (output: any, context: __SerdeContext): SeverityLevel => {
  return {
    occurrencesThreshold: __expectLong(output.occurrencesThreshold),
    severity: __expectString(output.severity),
  } as any;
};

const deserializeAws_restJson1SeverityLevelList = (output: any, context: __SerdeContext): SeverityLevel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SeverityLevel(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimpleCriterionForJob = (output: any, context: __SerdeContext): SimpleCriterionForJob => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values: output.values != null ? deserializeAws_restJson1__listOf__string(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleScopeTerm = (output: any, context: __SerdeContext): SimpleScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values: output.values != null ? deserializeAws_restJson1__listOf__string(output.values, context) : undefined,
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
      output.tagValues != null
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TagScopeTerm = (output: any, context: __SerdeContext): TagScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    tagValues:
      output.tagValues != null ? deserializeAws_restJson1__listOfTagValuePair(output.tagValues, context) : undefined,
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
      output.serviceLimit != null ? deserializeAws_restJson1ServiceLimit(output.serviceLimit, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return {
    accountId: __expectString(output.accountId),
    automatedDiscoveryFreeTrialStartDate:
      output.automatedDiscoveryFreeTrialStartDate != null
        ? __expectNonNull(__parseRfc3339DateTime(output.automatedDiscoveryFreeTrialStartDate))
        : undefined,
    freeTrialStartDate:
      output.freeTrialStartDate != null
        ? __expectNonNull(__parseRfc3339DateTime(output.freeTrialStartDate))
        : undefined,
    usage: output.usage != null ? deserializeAws_restJson1__listOfUsageByAccount(output.usage, context) : undefined,
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
      output.assumedRole != null ? deserializeAws_restJson1AssumedRole(output.assumedRole, context) : undefined,
    awsAccount: output.awsAccount != null ? deserializeAws_restJson1AwsAccount(output.awsAccount, context) : undefined,
    awsService: output.awsService != null ? deserializeAws_restJson1AwsService(output.awsService, context) : undefined,
    federatedUser:
      output.federatedUser != null ? deserializeAws_restJson1FederatedUser(output.federatedUser, context) : undefined,
    iamUser: output.iamUser != null ? deserializeAws_restJson1IamUser(output.iamUser, context) : undefined,
    root: output.root != null ? deserializeAws_restJson1UserIdentityRoot(output.root, context) : undefined,
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
      output.jobExpiresAt != null ? __expectNonNull(__parseRfc3339DateTime(output.jobExpiresAt)) : undefined,
    jobImminentExpirationHealthEventArn: __expectString(output.jobImminentExpirationHealthEventArn),
    jobPausedAt: output.jobPausedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.jobPausedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1WeeklySchedule = (output: any, context: __SerdeContext): WeeklySchedule => {
  return {
    dayOfWeek: __expectString(output.dayOfWeek),
  } as any;
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
