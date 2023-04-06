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
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

/**
 * serializeAws_restJson1BatchGetCustomDataIdentifiersCommand
 */
export const se_BatchGetCustomDataIdentifiersCommand = async (
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
    ...(input.ids != null && { ids: se___listOf__string(input.ids, context) }),
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
 * serializeAws_restJson1CreateAllowListCommand
 */
export const se_CreateAllowListCommand = async (
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
    ...(input.criteria != null && { criteria: se_AllowListCriteria(input.criteria, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1CreateClassificationJobCommand
 */
export const se_CreateClassificationJobCommand = async (
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
    ...(input.allowListIds != null && { allowListIds: se___listOf__string(input.allowListIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customDataIdentifierIds != null && {
      customDataIdentifierIds: se___listOf__string(input.customDataIdentifierIds, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.initialRun != null && { initialRun: input.initialRun }),
    ...(input.jobType != null && { jobType: input.jobType }),
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: se___listOf__string(input.managedDataIdentifierIds, context),
    }),
    ...(input.managedDataIdentifierSelector != null && {
      managedDataIdentifierSelector: input.managedDataIdentifierSelector,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3JobDefinition != null && { s3JobDefinition: se_S3JobDefinition(input.s3JobDefinition, context) }),
    ...(input.samplingPercentage != null && { samplingPercentage: input.samplingPercentage }),
    ...(input.scheduleFrequency != null && {
      scheduleFrequency: se_JobScheduleFrequency(input.scheduleFrequency, context),
    }),
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
 * serializeAws_restJson1CreateCustomDataIdentifierCommand
 */
export const se_CreateCustomDataIdentifierCommand = async (
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
    ...(input.ignoreWords != null && { ignoreWords: se___listOf__string(input.ignoreWords, context) }),
    ...(input.keywords != null && { keywords: se___listOf__string(input.keywords, context) }),
    ...(input.maximumMatchDistance != null && { maximumMatchDistance: input.maximumMatchDistance }),
    ...(input.name != null && { name: input.name }),
    ...(input.regex != null && { regex: input.regex }),
    ...(input.severityLevels != null && { severityLevels: se_SeverityLevelList(input.severityLevels, context) }),
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
 * serializeAws_restJson1CreateFindingsFilterCommand
 */
export const se_CreateFindingsFilterCommand = async (
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
    ...(input.findingCriteria != null && { findingCriteria: se_FindingCriteria(input.findingCriteria, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.position != null && { position: input.position }),
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
 * serializeAws_restJson1CreateInvitationsCommand
 */
export const se_CreateInvitationsCommand = async (
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
    ...(input.accountIds != null && { accountIds: se___listOf__string(input.accountIds, context) }),
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

/**
 * serializeAws_restJson1CreateMemberCommand
 */
export const se_CreateMemberCommand = async (
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
    ...(input.account != null && { account: se_AccountDetail(input.account, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/sample";
  let body: any;
  body = JSON.stringify({
    ...(input.findingTypes != null && { findingTypes: se___listOfFindingType(input.findingTypes, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se___listOf__string(input.accountIds, context) }),
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
 * serializeAws_restJson1DeleteAllowListCommand
 */
export const se_DeleteAllowListCommand = async (
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

/**
 * serializeAws_restJson1DeleteCustomDataIdentifierCommand
 */
export const se_DeleteCustomDataIdentifierCommand = async (
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

/**
 * serializeAws_restJson1DeleteFindingsFilterCommand
 */
export const se_DeleteFindingsFilterCommand = async (
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
  body = JSON.stringify({
    ...(input.accountIds != null && { accountIds: se___listOf__string(input.accountIds, context) }),
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
 * serializeAws_restJson1DeleteMemberCommand
 */
export const se_DeleteMemberCommand = async (
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

/**
 * serializeAws_restJson1DescribeBucketsCommand
 */
export const se_DescribeBucketsCommand = async (
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
    ...(input.criteria != null && { criteria: se_BucketCriteria(input.criteria, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && { sortCriteria: se_BucketSortCriteria(input.sortCriteria, context) }),
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
 * serializeAws_restJson1DescribeClassificationJobCommand
 */
export const se_DescribeClassificationJobCommand = async (
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

/**
 * serializeAws_restJson1DisableMacieCommand
 */
export const se_DisableMacieCommand = async (
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

/**
 * serializeAws_restJson1DisableOrganizationAdminAccountCommand
 */
export const se_DisableOrganizationAdminAccountCommand = async (
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
 * serializeAws_restJson1DisassociateMemberCommand
 */
export const se_DisassociateMemberCommand = async (
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

/**
 * serializeAws_restJson1EnableMacieCommand
 */
export const se_EnableMacieCommand = async (
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
 * serializeAws_restJson1GetAllowListCommand
 */
export const se_GetAllowListCommand = async (
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

/**
 * serializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand
 */
export const se_GetAutomatedDiscoveryConfigurationCommand = async (
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

/**
 * serializeAws_restJson1GetBucketStatisticsCommand
 */
export const se_GetBucketStatisticsCommand = async (
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

/**
 * serializeAws_restJson1GetClassificationExportConfigurationCommand
 */
export const se_GetClassificationExportConfigurationCommand = async (
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

/**
 * serializeAws_restJson1GetClassificationScopeCommand
 */
export const se_GetClassificationScopeCommand = async (
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

/**
 * serializeAws_restJson1GetCustomDataIdentifierCommand
 */
export const se_GetCustomDataIdentifierCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.findingIds != null && { findingIds: se___listOf__string(input.findingIds, context) }),
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
 * serializeAws_restJson1GetFindingsFilterCommand
 */
export const se_GetFindingsFilterCommand = async (
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

/**
 * serializeAws_restJson1GetFindingsPublicationConfigurationCommand
 */
export const se_GetFindingsPublicationConfigurationCommand = async (
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

/**
 * serializeAws_restJson1GetFindingStatisticsCommand
 */
export const se_GetFindingStatisticsCommand = async (
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
    ...(input.findingCriteria != null && { findingCriteria: se_FindingCriteria(input.findingCriteria, context) }),
    ...(input.groupBy != null && { groupBy: input.groupBy }),
    ...(input.size != null && { size: input.size }),
    ...(input.sortCriteria != null && { sortCriteria: se_FindingStatisticsSortCriteria(input.sortCriteria, context) }),
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
 * serializeAws_restJson1GetMacieSessionCommand
 */
export const se_GetMacieSessionCommand = async (
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
 * serializeAws_restJson1GetMemberCommand
 */
export const se_GetMemberCommand = async (
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

/**
 * serializeAws_restJson1GetResourceProfileCommand
 */
export const se_GetResourceProfileCommand = async (
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

/**
 * serializeAws_restJson1GetRevealConfigurationCommand
 */
export const se_GetRevealConfigurationCommand = async (
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

/**
 * serializeAws_restJson1GetSensitiveDataOccurrencesCommand
 */
export const se_GetSensitiveDataOccurrencesCommand = async (
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

/**
 * serializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommand
 */
export const se_GetSensitiveDataOccurrencesAvailabilityCommand = async (
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

/**
 * serializeAws_restJson1GetSensitivityInspectionTemplateCommand
 */
export const se_GetSensitivityInspectionTemplateCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usage/statistics";
  let body: any;
  body = JSON.stringify({
    ...(input.filterBy != null && { filterBy: se___listOfUsageStatisticsFilter(input.filterBy, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_UsageStatisticsSortBy(input.sortBy, context) }),
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

/**
 * serializeAws_restJson1GetUsageTotalsCommand
 */
export const se_GetUsageTotalsCommand = async (
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

/**
 * serializeAws_restJson1ListAllowListsCommand
 */
export const se_ListAllowListsCommand = async (
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

/**
 * serializeAws_restJson1ListClassificationJobsCommand
 */
export const se_ListClassificationJobsCommand = async (
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
    ...(input.filterCriteria != null && { filterCriteria: se_ListJobsFilterCriteria(input.filterCriteria, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && { sortCriteria: se_ListJobsSortCriteria(input.sortCriteria, context) }),
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
 * serializeAws_restJson1ListClassificationScopesCommand
 */
export const se_ListClassificationScopesCommand = async (
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

/**
 * serializeAws_restJson1ListCustomDataIdentifiersCommand
 */
export const se_ListCustomDataIdentifiersCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.findingCriteria != null && { findingCriteria: se_FindingCriteria(input.findingCriteria, context) }),
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
 * serializeAws_restJson1ListFindingsFiltersCommand
 */
export const se_ListFindingsFiltersCommand = async (
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

/**
 * serializeAws_restJson1ListManagedDataIdentifiersCommand
 */
export const se_ListManagedDataIdentifiersCommand = async (
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

/**
 * serializeAws_restJson1ListResourceProfileArtifactsCommand
 */
export const se_ListResourceProfileArtifactsCommand = async (
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

/**
 * serializeAws_restJson1ListResourceProfileDetectionsCommand
 */
export const se_ListResourceProfileDetectionsCommand = async (
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

/**
 * serializeAws_restJson1ListSensitivityInspectionTemplatesCommand
 */
export const se_ListSensitivityInspectionTemplatesCommand = async (
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
 * serializeAws_restJson1PutClassificationExportConfigurationCommand
 */
export const se_PutClassificationExportConfigurationCommand = async (
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
      configuration: se_ClassificationExportConfiguration(input.configuration, context),
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

/**
 * serializeAws_restJson1PutFindingsPublicationConfigurationCommand
 */
export const se_PutFindingsPublicationConfigurationCommand = async (
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
      securityHubConfiguration: se_SecurityHubConfiguration(input.securityHubConfiguration, context),
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

/**
 * serializeAws_restJson1SearchResourcesCommand
 */
export const se_SearchResourcesCommand = async (
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
      bucketCriteria: se_SearchResourcesBucketCriteria(input.bucketCriteria, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortCriteria != null && { sortCriteria: se_SearchResourcesSortCriteria(input.sortCriteria, context) }),
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
 * serializeAws_restJson1TestCustomDataIdentifierCommand
 */
export const se_TestCustomDataIdentifierCommand = async (
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
    ...(input.ignoreWords != null && { ignoreWords: se___listOf__string(input.ignoreWords, context) }),
    ...(input.keywords != null && { keywords: se___listOf__string(input.keywords, context) }),
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
 * serializeAws_restJson1UpdateAllowListCommand
 */
export const se_UpdateAllowListCommand = async (
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
    ...(input.criteria != null && { criteria: se_AllowListCriteria(input.criteria, context) }),
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

/**
 * serializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommand
 */
export const se_UpdateAutomatedDiscoveryConfigurationCommand = async (
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

/**
 * serializeAws_restJson1UpdateClassificationJobCommand
 */
export const se_UpdateClassificationJobCommand = async (
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

/**
 * serializeAws_restJson1UpdateClassificationScopeCommand
 */
export const se_UpdateClassificationScopeCommand = async (
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
    ...(input.s3 != null && { s3: se_S3ClassificationScopeUpdate(input.s3, context) }),
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

/**
 * serializeAws_restJson1UpdateFindingsFilterCommand
 */
export const se_UpdateFindingsFilterCommand = async (
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
    ...(input.findingCriteria != null && { findingCriteria: se_FindingCriteria(input.findingCriteria, context) }),
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

/**
 * serializeAws_restJson1UpdateMacieSessionCommand
 */
export const se_UpdateMacieSessionCommand = async (
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

/**
 * serializeAws_restJson1UpdateMemberSessionCommand
 */
export const se_UpdateMemberSessionCommand = async (
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

/**
 * serializeAws_restJson1UpdateResourceProfileCommand
 */
export const se_UpdateResourceProfileCommand = async (
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

/**
 * serializeAws_restJson1UpdateResourceProfileDetectionsCommand
 */
export const se_UpdateResourceProfileDetectionsCommand = async (
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
      suppressDataIdentifiers: se___listOfSuppressDataIdentifier(input.suppressDataIdentifiers, context),
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

/**
 * serializeAws_restJson1UpdateRevealConfigurationCommand
 */
export const se_UpdateRevealConfigurationCommand = async (
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
    ...(input.configuration != null && { configuration: se_RevealConfiguration(input.configuration, context) }),
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

/**
 * serializeAws_restJson1UpdateSensitivityInspectionTemplateCommand
 */
export const se_UpdateSensitivityInspectionTemplateCommand = async (
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
    ...(input.excludes != null && { excludes: se_SensitivityInspectionTemplateExcludes(input.excludes, context) }),
    ...(input.includes != null && { includes: se_SensitivityInspectionTemplateIncludes(input.includes, context) }),
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand
 */
export const de_BatchGetCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetCustomDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataIdentifiers != null) {
    contents.customDataIdentifiers = de___listOfBatchGetCustomDataIdentifierSummary(
      data.customDataIdentifiers,
      context
    );
  }
  if (data.notFoundIdentifierIds != null) {
    contents.notFoundIdentifierIds = de___listOf__string(data.notFoundIdentifierIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError
 */
const de_BatchGetCustomDataIdentifiersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateAllowListCommand
 */
export const de_CreateAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAllowListCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateAllowListCommandError
 */
const de_CreateAllowListCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateClassificationJobCommand
 */
export const de_CreateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateClassificationJobCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateClassificationJobCommandError
 */
const de_CreateClassificationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateCustomDataIdentifierCommand
 */
export const de_CreateCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCustomDataIdentifierCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateCustomDataIdentifierCommandError
 */
const de_CreateCustomDataIdentifierCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateFindingsFilterCommand
 */
export const de_CreateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFindingsFilterCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateFindingsFilterCommandError
 */
const de_CreateFindingsFilterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateInvitationsCommand
 */
export const de_CreateInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedAccounts != null) {
    contents.unprocessedAccounts = de___listOfUnprocessedAccount(data.unprocessedAccounts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateInvitationsCommandError
 */
const de_CreateInvitationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1CreateMemberCommand
 */
export const de_CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMemberCommandError(output, context);
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
 * deserializeAws_restJson1CreateMemberCommandError
 */
const de_CreateMemberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.unprocessedAccounts = de___listOfUnprocessedAccount(data.unprocessedAccounts, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DeleteAllowListCommand
 */
export const de_DeleteAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAllowListCommandError
 */
const de_DeleteAllowListCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DeleteCustomDataIdentifierCommand
 */
export const de_DeleteCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomDataIdentifierCommandError
 */
const de_DeleteCustomDataIdentifierCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DeleteFindingsFilterCommand
 */
export const de_DeleteFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFindingsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFindingsFilterCommandError
 */
const de_DeleteFindingsFilterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.unprocessedAccounts = de___listOfUnprocessedAccount(data.unprocessedAccounts, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DeleteMemberCommand
 */
export const de_DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemberCommandError
 */
const de_DeleteMemberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DescribeBucketsCommand
 */
export const de_DescribeBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.buckets != null) {
    contents.buckets = de___listOfBucketMetadata(data.buckets, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBucketsCommandError
 */
const de_DescribeBucketsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DescribeClassificationJobCommand
 */
export const de_DescribeClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClassificationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.allowListIds != null) {
    contents.allowListIds = de___listOf__string(data.allowListIds, context);
  }
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
  }
  if (data.customDataIdentifierIds != null) {
    contents.customDataIdentifierIds = de___listOf__string(data.customDataIdentifierIds, context);
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
    contents.lastRunErrorStatus = de_LastRunErrorStatus(data.lastRunErrorStatus, context);
  }
  if (data.lastRunTime != null) {
    contents.lastRunTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastRunTime));
  }
  if (data.managedDataIdentifierIds != null) {
    contents.managedDataIdentifierIds = de___listOf__string(data.managedDataIdentifierIds, context);
  }
  if (data.managedDataIdentifierSelector != null) {
    contents.managedDataIdentifierSelector = __expectString(data.managedDataIdentifierSelector);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.s3JobDefinition != null) {
    contents.s3JobDefinition = de_S3JobDefinition(data.s3JobDefinition, context);
  }
  if (data.samplingPercentage != null) {
    contents.samplingPercentage = __expectInt32(data.samplingPercentage);
  }
  if (data.scheduleFrequency != null) {
    contents.scheduleFrequency = de_JobScheduleFrequency(data.scheduleFrequency, context);
  }
  if (data.statistics != null) {
    contents.statistics = de_Statistics(data.statistics, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.userPausedDetails != null) {
    contents.userPausedDetails = de_UserPausedDetails(data.userPausedDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClassificationJobCommandError
 */
const de_DescribeClassificationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.autoEnable = __expectBoolean(data.autoEnable);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1DisableMacieCommand
 */
export const de_DisableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableMacieCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisableMacieCommandError
 */
const de_DisableMacieCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  await collectBody(output.body, context);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1EnableMacieCommand
 */
export const de_EnableMacieCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMacieCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableMacieCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EnableMacieCommandError
 */
const de_EnableMacieCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.administrator = de_Invitation(data.administrator, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetAllowListCommand
 */
export const de_GetAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAllowListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
  }
  if (data.criteria != null) {
    contents.criteria = de_AllowListCriteria(data.criteria, context);
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
    contents.status = de_AllowListStatus(data.status, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updatedAt));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAllowListCommandError
 */
const de_GetAllowListCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand
 */
export const de_GetAutomatedDiscoveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutomatedDiscoveryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAutomatedDiscoveryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.classificationScopeId != null) {
    contents.classificationScopeId = __expectString(data.classificationScopeId);
  }
  if (data.disabledAt != null) {
    contents.disabledAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.disabledAt));
  }
  if (data.firstEnabledAt != null) {
    contents.firstEnabledAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.firstEnabledAt));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedAt));
  }
  if (data.sensitivityInspectionTemplateId != null) {
    contents.sensitivityInspectionTemplateId = __expectString(data.sensitivityInspectionTemplateId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommandError
 */
const de_GetAutomatedDiscoveryConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetBucketStatisticsCommand
 */
export const de_GetBucketStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bucketCount != null) {
    contents.bucketCount = __expectLong(data.bucketCount);
  }
  if (data.bucketCountByEffectivePermission != null) {
    contents.bucketCountByEffectivePermission = de_BucketCountByEffectivePermission(
      data.bucketCountByEffectivePermission,
      context
    );
  }
  if (data.bucketCountByEncryptionType != null) {
    contents.bucketCountByEncryptionType = de_BucketCountByEncryptionType(data.bucketCountByEncryptionType, context);
  }
  if (data.bucketCountByObjectEncryptionRequirement != null) {
    contents.bucketCountByObjectEncryptionRequirement = de_BucketCountPolicyAllowsUnencryptedObjectUploads(
      data.bucketCountByObjectEncryptionRequirement,
      context
    );
  }
  if (data.bucketCountBySharedAccessType != null) {
    contents.bucketCountBySharedAccessType = de_BucketCountBySharedAccessType(
      data.bucketCountBySharedAccessType,
      context
    );
  }
  if (data.bucketStatisticsBySensitivity != null) {
    contents.bucketStatisticsBySensitivity = de_BucketStatisticsBySensitivity(
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
    contents.lastUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdated));
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
    contents.unclassifiableObjectCount = de_ObjectLevelStatistics(data.unclassifiableObjectCount, context);
  }
  if (data.unclassifiableObjectSizeInBytes != null) {
    contents.unclassifiableObjectSizeInBytes = de_ObjectLevelStatistics(data.unclassifiableObjectSizeInBytes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBucketStatisticsCommandError
 */
const de_GetBucketStatisticsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetClassificationExportConfigurationCommand
 */
export const de_GetClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetClassificationExportConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = de_ClassificationExportConfiguration(data.configuration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetClassificationExportConfigurationCommandError
 */
const de_GetClassificationExportConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetClassificationScopeCommand
 */
export const de_GetClassificationScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassificationScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetClassificationScopeCommandError(output, context);
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
    contents.s3 = de_S3ClassificationScope(data.s3, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetClassificationScopeCommandError
 */
const de_GetClassificationScopeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetCustomDataIdentifierCommand
 */
export const de_GetCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCustomDataIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
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
    contents.ignoreWords = de___listOf__string(data.ignoreWords, context);
  }
  if (data.keywords != null) {
    contents.keywords = de___listOf__string(data.keywords, context);
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
    contents.severityLevels = de_SeverityLevelList(data.severityLevels, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomDataIdentifierCommandError
 */
const de_GetCustomDataIdentifierCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.findings = de___listOfFinding(data.findings, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetFindingsFilterCommand
 */
export const de_GetFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsFilterCommandError(output, context);
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
    contents.findingCriteria = de_FindingCriteria(data.findingCriteria, context);
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
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsFilterCommandError
 */
const de_GetFindingsFilterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetFindingsPublicationConfigurationCommand
 */
export const de_GetFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.securityHubConfiguration != null) {
    contents.securityHubConfiguration = de_SecurityHubConfiguration(data.securityHubConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError
 */
const de_GetFindingsPublicationConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetFindingStatisticsCommand
 */
export const de_GetFindingStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.countsByGroup != null) {
    contents.countsByGroup = de___listOfGroupCount(data.countsByGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingStatisticsCommandError
 */
const de_GetFindingStatisticsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.invitationsCount = __expectLong(data.invitationsCount);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetMacieSessionCommand
 */
export const de_GetMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMacieSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
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
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updatedAt));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMacieSessionCommandError
 */
const de_GetMacieSessionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.master = de_Invitation(data.master, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.invitedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.invitedAt));
  }
  if (data.masterAccountId != null) {
    contents.masterAccountId = __expectString(data.masterAccountId);
  }
  if (data.relationshipStatus != null) {
    contents.relationshipStatus = __expectString(data.relationshipStatus);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.updatedAt != null) {
    contents.updatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.updatedAt));
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetResourceProfileCommand
 */
export const de_GetResourceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profileUpdatedAt != null) {
    contents.profileUpdatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.profileUpdatedAt));
  }
  if (data.sensitivityScore != null) {
    contents.sensitivityScore = __expectInt32(data.sensitivityScore);
  }
  if (data.sensitivityScoreOverridden != null) {
    contents.sensitivityScoreOverridden = __expectBoolean(data.sensitivityScoreOverridden);
  }
  if (data.statistics != null) {
    contents.statistics = de_ResourceStatistics(data.statistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceProfileCommandError
 */
const de_GetResourceProfileCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetRevealConfigurationCommand
 */
export const de_GetRevealConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevealConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRevealConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = de_RevealConfiguration(data.configuration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRevealConfigurationCommandError
 */
const de_GetRevealConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetSensitiveDataOccurrencesCommand
 */
export const de_GetSensitiveDataOccurrencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSensitiveDataOccurrencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = __expectString(data.error);
  }
  if (data.sensitiveDataOccurrences != null) {
    contents.sensitiveDataOccurrences = de_SensitiveDataOccurrences(data.sensitiveDataOccurrences, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSensitiveDataOccurrencesCommandError
 */
const de_GetSensitiveDataOccurrencesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.macie2#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommand
 */
export const de_GetSensitiveDataOccurrencesAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSensitiveDataOccurrencesAvailabilityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.reasons != null) {
    contents.reasons = de___listOfUnavailabilityReasonCode(data.reasons, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSensitiveDataOccurrencesAvailabilityCommandError
 */
const de_GetSensitiveDataOccurrencesAvailabilityCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
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
 * deserializeAws_restJson1GetSensitivityInspectionTemplateCommand
 */
export const de_GetSensitivityInspectionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSensitivityInspectionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSensitivityInspectionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.excludes != null) {
    contents.excludes = de_SensitivityInspectionTemplateExcludes(data.excludes, context);
  }
  if (data.includes != null) {
    contents.includes = de_SensitivityInspectionTemplateIncludes(data.includes, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.sensitivityInspectionTemplateId != null) {
    contents.sensitivityInspectionTemplateId = __expectString(data.sensitivityInspectionTemplateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSensitivityInspectionTemplateCommandError
 */
const de_GetSensitivityInspectionTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.records != null) {
    contents.records = de___listOfUsageRecord(data.records, context);
  }
  if (data.timeRange != null) {
    contents.timeRange = __expectString(data.timeRange);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1GetUsageTotalsCommand
 */
export const de_GetUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUsageTotalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.timeRange != null) {
    contents.timeRange = __expectString(data.timeRange);
  }
  if (data.usageTotals != null) {
    contents.usageTotals = de___listOfUsageTotal(data.usageTotals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUsageTotalsCommandError
 */
const de_GetUsageTotalsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListAllowListsCommand
 */
export const de_ListAllowListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAllowListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.allowLists != null) {
    contents.allowLists = de___listOfAllowListSummary(data.allowLists, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAllowListsCommandError
 */
const de_ListAllowListsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListClassificationJobsCommand
 */
export const de_ListClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClassificationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de___listOfJobSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClassificationJobsCommandError
 */
const de_ListClassificationJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListClassificationScopesCommand
 */
export const de_ListClassificationScopesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClassificationScopesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClassificationScopesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.classificationScopes != null) {
    contents.classificationScopes = de___listOfClassificationScopeSummary(data.classificationScopes, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClassificationScopesCommandError
 */
const de_ListClassificationScopesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListCustomDataIdentifiersCommand
 */
export const de_ListCustomDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCustomDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de___listOfCustomDataIdentifierSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomDataIdentifiersCommandError
 */
const de_ListCustomDataIdentifiersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  if (data.findingIds != null) {
    contents.findingIds = de___listOf__string(data.findingIds, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListFindingsFiltersCommand
 */
export const de_ListFindingsFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFindingsFiltersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingsFilterListItems != null) {
    contents.findingsFilterListItems = de___listOfFindingsFilterListItem(data.findingsFilterListItems, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsFiltersCommandError
 */
const de_ListFindingsFiltersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.invitations = de___listOfInvitation(data.invitations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListManagedDataIdentifiersCommand
 */
export const de_ListManagedDataIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedDataIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListManagedDataIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de___listOfManagedDataIdentifierSummary(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedDataIdentifiersCommandError
 */
const de_ListManagedDataIdentifiersCommandError = async (
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
    contents.members = de___listOfMember(data.members, context);
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
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    contents.adminAccounts = de___listOfAdminAccount(data.adminAccounts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListResourceProfileArtifactsCommand
 */
export const de_ListResourceProfileArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileArtifactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceProfileArtifactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.artifacts != null) {
    contents.artifacts = de___listOfResourceProfileArtifact(data.artifacts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceProfileArtifactsCommandError
 */
const de_ListResourceProfileArtifactsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListResourceProfileDetectionsCommand
 */
export const de_ListResourceProfileDetectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceProfileDetectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceProfileDetectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detections != null) {
    contents.detections = de___listOfDetection(data.detections, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceProfileDetectionsCommandError
 */
const de_ListResourceProfileDetectionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ListSensitivityInspectionTemplatesCommand
 */
export const de_ListSensitivityInspectionTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensitivityInspectionTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSensitivityInspectionTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sensitivityInspectionTemplates != null) {
    contents.sensitivityInspectionTemplates = de___listOfSensitivityInspectionTemplatesEntry(
      data.sensitivityInspectionTemplates,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSensitivityInspectionTemplatesCommandError
 */
const de_ListSensitivityInspectionTemplatesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PutClassificationExportConfigurationCommand
 */
export const de_PutClassificationExportConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClassificationExportConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutClassificationExportConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = de_ClassificationExportConfiguration(data.configuration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutClassificationExportConfigurationCommandError
 */
const de_PutClassificationExportConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1PutFindingsPublicationConfigurationCommand
 */
export const de_PutFindingsPublicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFindingsPublicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFindingsPublicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError
 */
const de_PutFindingsPublicationConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1SearchResourcesCommand
 */
export const de_SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.matchingResources != null) {
    contents.matchingResources = de___listOfMatchingResource(data.matchingResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchResourcesCommandError
 */
const de_SearchResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TestCustomDataIdentifierCommand
 */
export const de_TestCustomDataIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestCustomDataIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestCustomDataIdentifierCommandError(output, context);
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

/**
 * deserializeAws_restJson1TestCustomDataIdentifierCommandError
 */
const de_TestCustomDataIdentifierCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateAllowListCommand
 */
export const de_UpdateAllowListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAllowListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAllowListCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdateAllowListCommandError
 */
const de_UpdateAllowListCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommand
 */
export const de_UpdateAutomatedDiscoveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomatedDiscoveryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAutomatedDiscoveryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAutomatedDiscoveryConfigurationCommandError
 */
const de_UpdateAutomatedDiscoveryConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateClassificationJobCommand
 */
export const de_UpdateClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClassificationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClassificationJobCommandError
 */
const de_UpdateClassificationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateClassificationScopeCommand
 */
export const de_UpdateClassificationScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassificationScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClassificationScopeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClassificationScopeCommandError
 */
const de_UpdateClassificationScopeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateFindingsFilterCommand
 */
export const de_UpdateFindingsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFindingsFilterCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdateFindingsFilterCommandError
 */
const de_UpdateFindingsFilterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateMacieSessionCommand
 */
export const de_UpdateMacieSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMacieSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMacieSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMacieSessionCommandError
 */
const de_UpdateMacieSessionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateMemberSessionCommand
 */
export const de_UpdateMemberSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMemberSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMemberSessionCommandError
 */
const de_UpdateMemberSessionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.macie2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.macie2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateResourceProfileCommand
 */
export const de_UpdateResourceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceProfileCommandError
 */
const de_UpdateResourceProfileCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateResourceProfileDetectionsCommand
 */
export const de_UpdateResourceProfileDetectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceProfileDetectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceProfileDetectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceProfileDetectionsCommandError
 */
const de_UpdateResourceProfileDetectionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.macie2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateRevealConfigurationCommand
 */
export const de_UpdateRevealConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevealConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRevealConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = de_RevealConfiguration(data.configuration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRevealConfigurationCommandError
 */
const de_UpdateRevealConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommand
 */
export const de_UpdateSensitivityInspectionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSensitivityInspectionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSensitivityInspectionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommandError
 */
const de_UpdateSensitivityInspectionTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.macie2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.macie2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.macie2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.macie2#ValidationException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfCriteriaForJob
 */
const se___listOfCriteriaForJob = (input: CriteriaForJob[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CriteriaForJob(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfFindingType
 */
const se___listOfFindingType = (input: (FindingType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfJobScopeTerm
 */
const se___listOfJobScopeTerm = (input: JobScopeTerm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobScopeTerm(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfListJobsFilterTerm
 */
const se___listOfListJobsFilterTerm = (input: ListJobsFilterTerm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListJobsFilterTerm(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfS3BucketDefinitionForJob
 */
const se___listOfS3BucketDefinitionForJob = (input: S3BucketDefinitionForJob[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3BucketDefinitionForJob(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfS3BucketName
 */
const se___listOfS3BucketName = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfSearchResourcesCriteria
 */
const se___listOfSearchResourcesCriteria = (input: SearchResourcesCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchResourcesCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfSearchResourcesTagCriterionPair
 */
const se___listOfSearchResourcesTagCriterionPair = (
  input: SearchResourcesTagCriterionPair[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchResourcesTagCriterionPair(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfSuppressDataIdentifier
 */
const se___listOfSuppressDataIdentifier = (input: SuppressDataIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SuppressDataIdentifier(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfTagCriterionPairForJob
 */
const se___listOfTagCriterionPairForJob = (input: TagCriterionPairForJob[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagCriterionPairForJob(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfTagValuePair
 */
const se___listOfTagValuePair = (input: TagValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagValuePair(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfUsageStatisticsFilter
 */
const se___listOfUsageStatisticsFilter = (input: UsageStatisticsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UsageStatisticsFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1AccountDetail
 */
const se_AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.email != null && { email: input.email }),
  };
};

/**
 * serializeAws_restJson1AllowListCriteria
 */
const se_AllowListCriteria = (input: AllowListCriteria, context: __SerdeContext): any => {
  return {
    ...(input.regex != null && { regex: input.regex }),
    ...(input.s3WordsList != null && { s3WordsList: se_S3WordsList(input.s3WordsList, context) }),
  };
};

/**
 * serializeAws_restJson1BucketCriteria
 */
const se_BucketCriteria = (input: Record<string, BucketCriteriaAdditionalProperties>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_BucketCriteriaAdditionalProperties(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BucketCriteriaAdditionalProperties
 */
const se_BucketCriteriaAdditionalProperties = (
  input: BucketCriteriaAdditionalProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.eq != null && { eq: se___listOf__string(input.eq, context) }),
    ...(input.gt != null && { gt: input.gt }),
    ...(input.gte != null && { gte: input.gte }),
    ...(input.lt != null && { lt: input.lt }),
    ...(input.lte != null && { lte: input.lte }),
    ...(input.neq != null && { neq: se___listOf__string(input.neq, context) }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1BucketSortCriteria
 */
const se_BucketSortCriteria = (input: BucketSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1ClassificationExportConfiguration
 */
const se_ClassificationExportConfiguration = (
  input: ClassificationExportConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3Destination != null && { s3Destination: se_S3Destination(input.s3Destination, context) }),
  };
};

/**
 * serializeAws_restJson1CriteriaBlockForJob
 */
const se_CriteriaBlockForJob = (input: CriteriaBlockForJob, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: se___listOfCriteriaForJob(input.and, context) }),
  };
};

/**
 * serializeAws_restJson1CriteriaForJob
 */
const se_CriteriaForJob = (input: CriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.simpleCriterion != null && { simpleCriterion: se_SimpleCriterionForJob(input.simpleCriterion, context) }),
    ...(input.tagCriterion != null && { tagCriterion: se_TagCriterionForJob(input.tagCriterion, context) }),
  };
};

/**
 * serializeAws_restJson1Criterion
 */
const se_Criterion = (input: Record<string, CriterionAdditionalProperties>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CriterionAdditionalProperties(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1CriterionAdditionalProperties
 */
const se_CriterionAdditionalProperties = (input: CriterionAdditionalProperties, context: __SerdeContext): any => {
  return {
    ...(input.eq != null && { eq: se___listOf__string(input.eq, context) }),
    ...(input.eqExactMatch != null && { eqExactMatch: se___listOf__string(input.eqExactMatch, context) }),
    ...(input.gt != null && { gt: input.gt }),
    ...(input.gte != null && { gte: input.gte }),
    ...(input.lt != null && { lt: input.lt }),
    ...(input.lte != null && { lte: input.lte }),
    ...(input.neq != null && { neq: se___listOf__string(input.neq, context) }),
  };
};

/**
 * serializeAws_restJson1DailySchedule
 */
const se_DailySchedule = (input: DailySchedule, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1FindingCriteria
 */
const se_FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.criterion != null && { criterion: se_Criterion(input.criterion, context) }),
  };
};

/**
 * serializeAws_restJson1FindingStatisticsSortCriteria
 */
const se_FindingStatisticsSortCriteria = (input: FindingStatisticsSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1JobScheduleFrequency
 */
const se_JobScheduleFrequency = (input: JobScheduleFrequency, context: __SerdeContext): any => {
  return {
    ...(input.dailySchedule != null && { dailySchedule: se_DailySchedule(input.dailySchedule, context) }),
    ...(input.monthlySchedule != null && { monthlySchedule: se_MonthlySchedule(input.monthlySchedule, context) }),
    ...(input.weeklySchedule != null && { weeklySchedule: se_WeeklySchedule(input.weeklySchedule, context) }),
  };
};

/**
 * serializeAws_restJson1JobScopeTerm
 */
const se_JobScopeTerm = (input: JobScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.simpleScopeTerm != null && { simpleScopeTerm: se_SimpleScopeTerm(input.simpleScopeTerm, context) }),
    ...(input.tagScopeTerm != null && { tagScopeTerm: se_TagScopeTerm(input.tagScopeTerm, context) }),
  };
};

/**
 * serializeAws_restJson1JobScopingBlock
 */
const se_JobScopingBlock = (input: JobScopingBlock, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: se___listOfJobScopeTerm(input.and, context) }),
  };
};

/**
 * serializeAws_restJson1ListJobsFilterCriteria
 */
const se_ListJobsFilterCriteria = (input: ListJobsFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: se___listOfListJobsFilterTerm(input.excludes, context) }),
    ...(input.includes != null && { includes: se___listOfListJobsFilterTerm(input.includes, context) }),
  };
};

/**
 * serializeAws_restJson1ListJobsFilterTerm
 */
const se_ListJobsFilterTerm = (input: ListJobsFilterTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se___listOf__string(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ListJobsSortCriteria
 */
const se_ListJobsSortCriteria = (input: ListJobsSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1MonthlySchedule
 */
const se_MonthlySchedule = (input: MonthlySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfMonth != null && { dayOfMonth: input.dayOfMonth }),
  };
};

/**
 * serializeAws_restJson1RevealConfiguration
 */
const se_RevealConfiguration = (input: RevealConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1S3BucketCriteriaForJob
 */
const se_S3BucketCriteriaForJob = (input: S3BucketCriteriaForJob, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: se_CriteriaBlockForJob(input.excludes, context) }),
    ...(input.includes != null && { includes: se_CriteriaBlockForJob(input.includes, context) }),
  };
};

/**
 * serializeAws_restJson1S3BucketDefinitionForJob
 */
const se_S3BucketDefinitionForJob = (input: S3BucketDefinitionForJob, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.buckets != null && { buckets: se___listOf__string(input.buckets, context) }),
  };
};

/**
 * serializeAws_restJson1S3ClassificationScopeExclusionUpdate
 */
const se_S3ClassificationScopeExclusionUpdate = (
  input: S3ClassificationScopeExclusionUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketNames != null && { bucketNames: se___listOfS3BucketName(input.bucketNames, context) }),
    ...(input.operation != null && { operation: input.operation }),
  };
};

/**
 * serializeAws_restJson1S3ClassificationScopeUpdate
 */
const se_S3ClassificationScopeUpdate = (input: S3ClassificationScopeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: se_S3ClassificationScopeExclusionUpdate(input.excludes, context) }),
  };
};

/**
 * serializeAws_restJson1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

/**
 * serializeAws_restJson1S3JobDefinition
 */
const se_S3JobDefinition = (input: S3JobDefinition, context: __SerdeContext): any => {
  return {
    ...(input.bucketCriteria != null && { bucketCriteria: se_S3BucketCriteriaForJob(input.bucketCriteria, context) }),
    ...(input.bucketDefinitions != null && {
      bucketDefinitions: se___listOfS3BucketDefinitionForJob(input.bucketDefinitions, context),
    }),
    ...(input.scoping != null && { scoping: se_Scoping(input.scoping, context) }),
  };
};

/**
 * serializeAws_restJson1S3WordsList
 */
const se_S3WordsList = (input: S3WordsList, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.objectKey != null && { objectKey: input.objectKey }),
  };
};

/**
 * serializeAws_restJson1Scoping
 */
const se_Scoping = (input: Scoping, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: se_JobScopingBlock(input.excludes, context) }),
    ...(input.includes != null && { includes: se_JobScopingBlock(input.includes, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesBucketCriteria
 */
const se_SearchResourcesBucketCriteria = (input: SearchResourcesBucketCriteria, context: __SerdeContext): any => {
  return {
    ...(input.excludes != null && { excludes: se_SearchResourcesCriteriaBlock(input.excludes, context) }),
    ...(input.includes != null && { includes: se_SearchResourcesCriteriaBlock(input.includes, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesCriteria
 */
const se_SearchResourcesCriteria = (input: SearchResourcesCriteria, context: __SerdeContext): any => {
  return {
    ...(input.simpleCriterion != null && {
      simpleCriterion: se_SearchResourcesSimpleCriterion(input.simpleCriterion, context),
    }),
    ...(input.tagCriterion != null && { tagCriterion: se_SearchResourcesTagCriterion(input.tagCriterion, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesCriteriaBlock
 */
const se_SearchResourcesCriteriaBlock = (input: SearchResourcesCriteriaBlock, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: se___listOfSearchResourcesCriteria(input.and, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesSimpleCriterion
 */
const se_SearchResourcesSimpleCriterion = (input: SearchResourcesSimpleCriterion, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se___listOf__string(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesSortCriteria
 */
const se_SearchResourcesSortCriteria = (input: SearchResourcesSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesTagCriterion
 */
const se_SearchResourcesTagCriterion = (input: SearchResourcesTagCriterion, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.tagValues != null && { tagValues: se___listOfSearchResourcesTagCriterionPair(input.tagValues, context) }),
  };
};

/**
 * serializeAws_restJson1SearchResourcesTagCriterionPair
 */
const se_SearchResourcesTagCriterionPair = (input: SearchResourcesTagCriterionPair, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1SecurityHubConfiguration
 */
const se_SecurityHubConfiguration = (input: SecurityHubConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.publishClassificationFindings != null && {
      publishClassificationFindings: input.publishClassificationFindings,
    }),
    ...(input.publishPolicyFindings != null && { publishPolicyFindings: input.publishPolicyFindings }),
  };
};

/**
 * serializeAws_restJson1SensitivityInspectionTemplateExcludes
 */
const se_SensitivityInspectionTemplateExcludes = (
  input: SensitivityInspectionTemplateExcludes,
  context: __SerdeContext
): any => {
  return {
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: se___listOf__string(input.managedDataIdentifierIds, context),
    }),
  };
};

/**
 * serializeAws_restJson1SensitivityInspectionTemplateIncludes
 */
const se_SensitivityInspectionTemplateIncludes = (
  input: SensitivityInspectionTemplateIncludes,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowListIds != null && { allowListIds: se___listOf__string(input.allowListIds, context) }),
    ...(input.customDataIdentifierIds != null && {
      customDataIdentifierIds: se___listOf__string(input.customDataIdentifierIds, context),
    }),
    ...(input.managedDataIdentifierIds != null && {
      managedDataIdentifierIds: se___listOf__string(input.managedDataIdentifierIds, context),
    }),
  };
};

/**
 * serializeAws_restJson1SeverityLevel
 */
const se_SeverityLevel = (input: SeverityLevel, context: __SerdeContext): any => {
  return {
    ...(input.occurrencesThreshold != null && { occurrencesThreshold: input.occurrencesThreshold }),
    ...(input.severity != null && { severity: input.severity }),
  };
};

/**
 * serializeAws_restJson1SeverityLevelList
 */
const se_SeverityLevelList = (input: SeverityLevel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SeverityLevel(entry, context);
    });
};

/**
 * serializeAws_restJson1SimpleCriterionForJob
 */
const se_SimpleCriterionForJob = (input: SimpleCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se___listOf__string(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SimpleScopeTerm
 */
const se_SimpleScopeTerm = (input: SimpleScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se___listOf__string(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SortCriteria
 */
const se_SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1SuppressDataIdentifier
 */
const se_SuppressDataIdentifier = (input: SuppressDataIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1TagCriterionForJob
 */
const se_TagCriterionForJob = (input: TagCriterionForJob, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.tagValues != null && { tagValues: se___listOfTagCriterionPairForJob(input.tagValues, context) }),
  };
};

/**
 * serializeAws_restJson1TagCriterionPairForJob
 */
const se_TagCriterionPairForJob = (input: TagCriterionPairForJob, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
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
 * serializeAws_restJson1TagScopeTerm
 */
const se_TagScopeTerm = (input: TagScopeTerm, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.tagValues != null && { tagValues: se___listOfTagValuePair(input.tagValues, context) }),
    ...(input.target != null && { target: input.target }),
  };
};

/**
 * serializeAws_restJson1TagValuePair
 */
const se_TagValuePair = (input: TagValuePair, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1UsageStatisticsFilter
 */
const se_UsageStatisticsFilter = (input: UsageStatisticsFilter, context: __SerdeContext): any => {
  return {
    ...(input.comparator != null && { comparator: input.comparator }),
    ...(input.key != null && { key: input.key }),
    ...(input.values != null && { values: se___listOf__string(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1UsageStatisticsSortBy
 */
const se_UsageStatisticsSortBy = (input: UsageStatisticsSortBy, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_restJson1WeeklySchedule
 */
const se_WeeklySchedule = (input: WeeklySchedule, context: __SerdeContext): any => {
  return {
    ...(input.dayOfWeek != null && { dayOfWeek: input.dayOfWeek }),
  };
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfAdminAccount
 */
const de___listOfAdminAccount = (output: any, context: __SerdeContext): AdminAccount[] => {
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
 * deserializeAws_restJson1__listOfAllowListSummary
 */
const de___listOfAllowListSummary = (output: any, context: __SerdeContext): AllowListSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AllowListSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary
 */
const de___listOfBatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetCustomDataIdentifierSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBucketMetadata
 */
const de___listOfBucketMetadata = (output: any, context: __SerdeContext): BucketMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BucketMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClassificationScopeSummary
 */
const de___listOfClassificationScopeSummary = (output: any, context: __SerdeContext): ClassificationScopeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClassificationScopeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCriteriaForJob
 */
const de___listOfCriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CriteriaForJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCustomDataIdentifierSummary
 */
const de___listOfCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomDataIdentifierSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDetectedDataDetails
 */
const de___listOfDetectedDataDetails = (output: any, context: __SerdeContext): DetectedDataDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectedDataDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDetection
 */
const de___listOfDetection = (output: any, context: __SerdeContext): Detection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Detection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfFinding
 */
const de___listOfFinding = (output: any, context: __SerdeContext): Finding[] => {
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
 * deserializeAws_restJson1__listOfFindingsFilterListItem
 */
const de___listOfFindingsFilterListItem = (output: any, context: __SerdeContext): FindingsFilterListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FindingsFilterListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfGroupCount
 */
const de___listOfGroupCount = (output: any, context: __SerdeContext): GroupCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupCount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInvitation
 */
const de___listOfInvitation = (output: any, context: __SerdeContext): Invitation[] => {
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
 * deserializeAws_restJson1__listOfJobScopeTerm
 */
const de___listOfJobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobScopeTerm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfJobSummary
 */
const de___listOfJobSummary = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfKeyValuePair
 */
const de___listOfKeyValuePair = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfManagedDataIdentifierSummary
 */
const de___listOfManagedDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): ManagedDataIdentifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedDataIdentifierSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMatchingResource
 */
const de___listOfMatchingResource = (output: any, context: __SerdeContext): MatchingResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchingResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMember
 */
const de___listOfMember = (output: any, context: __SerdeContext): Member[] => {
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
 * deserializeAws_restJson1__listOfResourceProfileArtifact
 */
const de___listOfResourceProfileArtifact = (output: any, context: __SerdeContext): ResourceProfileArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceProfileArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfS3BucketDefinitionForJob
 */
const de___listOfS3BucketDefinitionForJob = (output: any, context: __SerdeContext): S3BucketDefinitionForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3BucketDefinitionForJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfS3BucketName
 */
const de___listOfS3BucketName = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfSensitivityInspectionTemplatesEntry
 */
const de___listOfSensitivityInspectionTemplatesEntry = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplatesEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SensitivityInspectionTemplatesEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfTagCriterionPairForJob
 */
const de___listOfTagCriterionPairForJob = (output: any, context: __SerdeContext): TagCriterionPairForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagCriterionPairForJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfTagValuePair
 */
const de___listOfTagValuePair = (output: any, context: __SerdeContext): TagValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfUnavailabilityReasonCode
 */
const de___listOfUnavailabilityReasonCode = (
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

/**
 * deserializeAws_restJson1__listOfUnprocessedAccount
 */
const de___listOfUnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
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
 * deserializeAws_restJson1__listOfUsageByAccount
 */
const de___listOfUsageByAccount = (output: any, context: __SerdeContext): UsageByAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageByAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfUsageRecord
 */
const de___listOfUsageRecord = (output: any, context: __SerdeContext): UsageRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfUsageTotal
 */
const de___listOfUsageTotal = (output: any, context: __SerdeContext): UsageTotal[] => {
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
 * deserializeAws_restJson1AccessControlList
 */
const de_AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return {
    allowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    allowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

/**
 * deserializeAws_restJson1AccountLevelPermissions
 */
const de_AccountLevelPermissions = (output: any, context: __SerdeContext): AccountLevelPermissions => {
  return {
    blockPublicAccess:
      output.blockPublicAccess != null ? de_BlockPublicAccess(output.blockPublicAccess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdminAccount
 */
const de_AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    accountId: __expectString(output.accountId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AllowListCriteria
 */
const de_AllowListCriteria = (output: any, context: __SerdeContext): AllowListCriteria => {
  return {
    regex: __expectString(output.regex),
    s3WordsList: output.s3WordsList != null ? de_S3WordsList(output.s3WordsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AllowListStatus
 */
const de_AllowListStatus = (output: any, context: __SerdeContext): AllowListStatus => {
  return {
    code: __expectString(output.code),
    description: __expectString(output.description),
  } as any;
};

/**
 * deserializeAws_restJson1AllowListSummary
 */
const de_AllowListSummary = (output: any, context: __SerdeContext): AllowListSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ApiCallDetails
 */
const de_ApiCallDetails = (output: any, context: __SerdeContext): ApiCallDetails => {
  return {
    api: __expectString(output.api),
    apiServiceName: __expectString(output.apiServiceName),
    firstSeen:
      output.firstSeen != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.firstSeen)) : undefined,
    lastSeen: output.lastSeen != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastSeen)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssumedRole
 */
const de_AssumedRole = (output: any, context: __SerdeContext): AssumedRole => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    sessionContext: output.sessionContext != null ? de_SessionContext(output.sessionContext, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AwsAccount
 */
const de_AwsAccount = (output: any, context: __SerdeContext): AwsAccount => {
  return {
    accountId: __expectString(output.accountId),
    principalId: __expectString(output.principalId),
  } as any;
};

/**
 * deserializeAws_restJson1AwsService
 */
const de_AwsService = (output: any, context: __SerdeContext): AwsService => {
  return {
    invokedBy: __expectString(output.invokedBy),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetCustomDataIdentifierSummary
 */
const de_BatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    deleted: __expectBoolean(output.deleted),
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1BlockPublicAccess
 */
const de_BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return {
    blockPublicAcls: __expectBoolean(output.blockPublicAcls),
    blockPublicPolicy: __expectBoolean(output.blockPublicPolicy),
    ignorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    restrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

/**
 * deserializeAws_restJson1BucketCountByEffectivePermission
 */
const de_BucketCountByEffectivePermission = (
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

/**
 * deserializeAws_restJson1BucketCountByEncryptionType
 */
const de_BucketCountByEncryptionType = (output: any, context: __SerdeContext): BucketCountByEncryptionType => {
  return {
    kmsManaged: __expectLong(output.kmsManaged),
    s3Managed: __expectLong(output.s3Managed),
    unencrypted: __expectLong(output.unencrypted),
    unknown: __expectLong(output.unknown),
  } as any;
};

/**
 * deserializeAws_restJson1BucketCountBySharedAccessType
 */
const de_BucketCountBySharedAccessType = (output: any, context: __SerdeContext): BucketCountBySharedAccessType => {
  return {
    external: __expectLong(output.external),
    internal: __expectLong(output.internal),
    notShared: __expectLong(output.notShared),
    unknown: __expectLong(output.unknown),
  } as any;
};

/**
 * deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads
 */
const de_BucketCountPolicyAllowsUnencryptedObjectUploads = (
  output: any,
  context: __SerdeContext
): BucketCountPolicyAllowsUnencryptedObjectUploads => {
  return {
    allowsUnencryptedObjectUploads: __expectLong(output.allowsUnencryptedObjectUploads),
    deniesUnencryptedObjectUploads: __expectLong(output.deniesUnencryptedObjectUploads),
    unknown: __expectLong(output.unknown),
  } as any;
};

/**
 * deserializeAws_restJson1BucketLevelPermissions
 */
const de_BucketLevelPermissions = (output: any, context: __SerdeContext): BucketLevelPermissions => {
  return {
    accessControlList:
      output.accessControlList != null ? de_AccessControlList(output.accessControlList, context) : undefined,
    blockPublicAccess:
      output.blockPublicAccess != null ? de_BlockPublicAccess(output.blockPublicAccess, context) : undefined,
    bucketPolicy: output.bucketPolicy != null ? de_BucketPolicy(output.bucketPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BucketMetadata
 */
const de_BucketMetadata = (output: any, context: __SerdeContext): BucketMetadata => {
  return {
    accountId: __expectString(output.accountId),
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    bucketArn: __expectString(output.bucketArn),
    bucketCreatedAt:
      output.bucketCreatedAt != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.bucketCreatedAt))
        : undefined,
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    jobDetails: output.jobDetails != null ? de_JobDetails(output.jobDetails, context) : undefined,
    lastAutomatedDiscoveryTime:
      output.lastAutomatedDiscoveryTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastAutomatedDiscoveryTime))
        : undefined,
    lastUpdated:
      output.lastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastUpdated)) : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType != null
        ? de_ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    publicAccess: output.publicAccess != null ? de_BucketPublicAccess(output.publicAccess, context) : undefined,
    region: __expectString(output.region),
    replicationDetails:
      output.replicationDetails != null ? de_ReplicationDetails(output.replicationDetails, context) : undefined,
    sensitivityScore: __expectInt32(output.sensitivityScore),
    serverSideEncryption:
      output.serverSideEncryption != null
        ? de_BucketServerSideEncryption(output.serverSideEncryption, context)
        : undefined,
    sharedAccess: __expectString(output.sharedAccess),
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    tags: output.tags != null ? de___listOfKeyValuePair(output.tags, context) : undefined,
    unclassifiableObjectCount:
      output.unclassifiableObjectCount != null
        ? de_ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes != null
        ? de_ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
        : undefined,
    versioning: __expectBoolean(output.versioning),
  } as any;
};

/**
 * deserializeAws_restJson1BucketPermissionConfiguration
 */
const de_BucketPermissionConfiguration = (output: any, context: __SerdeContext): BucketPermissionConfiguration => {
  return {
    accountLevelPermissions:
      output.accountLevelPermissions != null
        ? de_AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    bucketLevelPermissions:
      output.bucketLevelPermissions != null
        ? de_BucketLevelPermissions(output.bucketLevelPermissions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BucketPolicy
 */
const de_BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return {
    allowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    allowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

/**
 * deserializeAws_restJson1BucketPublicAccess
 */
const de_BucketPublicAccess = (output: any, context: __SerdeContext): BucketPublicAccess => {
  return {
    effectivePermission: __expectString(output.effectivePermission),
    permissionConfiguration:
      output.permissionConfiguration != null
        ? de_BucketPermissionConfiguration(output.permissionConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BucketServerSideEncryption
 */
const de_BucketServerSideEncryption = (output: any, context: __SerdeContext): BucketServerSideEncryption => {
  return {
    kmsMasterKeyId: __expectString(output.kmsMasterKeyId),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1BucketStatisticsBySensitivity
 */
const de_BucketStatisticsBySensitivity = (output: any, context: __SerdeContext): BucketStatisticsBySensitivity => {
  return {
    classificationError:
      output.classificationError != null ? de_SensitivityAggregations(output.classificationError, context) : undefined,
    notClassified: output.notClassified != null ? de_SensitivityAggregations(output.notClassified, context) : undefined,
    notSensitive: output.notSensitive != null ? de_SensitivityAggregations(output.notSensitive, context) : undefined,
    sensitive: output.sensitive != null ? de_SensitivityAggregations(output.sensitive, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Cell
 */
const de_Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    cellReference: __expectString(output.cellReference),
    column: __expectLong(output.column),
    columnName: __expectString(output.columnName),
    row: __expectLong(output.row),
  } as any;
};

/**
 * deserializeAws_restJson1Cells
 */
const de_Cells = (output: any, context: __SerdeContext): Cell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cell(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ClassificationDetails
 */
const de_ClassificationDetails = (output: any, context: __SerdeContext): ClassificationDetails => {
  return {
    detailedResultsLocation: __expectString(output.detailedResultsLocation),
    jobArn: __expectString(output.jobArn),
    jobId: __expectString(output.jobId),
    originType: __expectString(output.originType),
    result: output.result != null ? de_ClassificationResult(output.result, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClassificationExportConfiguration
 */
const de_ClassificationExportConfiguration = (
  output: any,
  context: __SerdeContext
): ClassificationExportConfiguration => {
  return {
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClassificationResult
 */
const de_ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return {
    additionalOccurrences: __expectBoolean(output.additionalOccurrences),
    customDataIdentifiers:
      output.customDataIdentifiers != null
        ? de_CustomDataIdentifiers(output.customDataIdentifiers, context)
        : undefined,
    mimeType: __expectString(output.mimeType),
    sensitiveData: output.sensitiveData != null ? de_SensitiveData(output.sensitiveData, context) : undefined,
    sizeClassified: __expectLong(output.sizeClassified),
    status: output.status != null ? de_ClassificationResultStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClassificationResultStatus
 */
const de_ClassificationResultStatus = (output: any, context: __SerdeContext): ClassificationResultStatus => {
  return {
    code: __expectString(output.code),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1ClassificationScopeSummary
 */
const de_ClassificationScopeSummary = (output: any, context: __SerdeContext): ClassificationScopeSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1CriteriaBlockForJob
 */
const de_CriteriaBlockForJob = (output: any, context: __SerdeContext): CriteriaBlockForJob => {
  return {
    and: output.and != null ? de___listOfCriteriaForJob(output.and, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CriteriaForJob
 */
const de_CriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob => {
  return {
    simpleCriterion:
      output.simpleCriterion != null ? de_SimpleCriterionForJob(output.simpleCriterion, context) : undefined,
    tagCriterion: output.tagCriterion != null ? de_TagCriterionForJob(output.tagCriterion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Criterion
 */
const de_Criterion = (output: any, context: __SerdeContext): Record<string, CriterionAdditionalProperties> => {
  return Object.entries(output).reduce(
    (acc: Record<string, CriterionAdditionalProperties>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_CriterionAdditionalProperties(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1CriterionAdditionalProperties
 */
const de_CriterionAdditionalProperties = (output: any, context: __SerdeContext): CriterionAdditionalProperties => {
  return {
    eq: output.eq != null ? de___listOf__string(output.eq, context) : undefined,
    eqExactMatch: output.eqExactMatch != null ? de___listOf__string(output.eqExactMatch, context) : undefined,
    gt: __expectLong(output.gt),
    gte: __expectLong(output.gte),
    lt: __expectLong(output.lt),
    lte: __expectLong(output.lte),
    neq: output.neq != null ? de___listOf__string(output.neq, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomDataIdentifiers
 */
const de_CustomDataIdentifiers = (output: any, context: __SerdeContext): CustomDataIdentifiers => {
  return {
    detections: output.detections != null ? de_CustomDetections(output.detections, context) : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

/**
 * deserializeAws_restJson1CustomDataIdentifierSummary
 */
const de_CustomDataIdentifierSummary = (output: any, context: __SerdeContext): CustomDataIdentifierSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1CustomDetection
 */
const de_CustomDetection = (output: any, context: __SerdeContext): CustomDetection => {
  return {
    arn: __expectString(output.arn),
    count: __expectLong(output.count),
    name: __expectString(output.name),
    occurrences: output.occurrences != null ? de_Occurrences(output.occurrences, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomDetections
 */
const de_CustomDetections = (output: any, context: __SerdeContext): CustomDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DailySchedule
 */
const de_DailySchedule = (output: any, context: __SerdeContext): DailySchedule => {
  return {} as any;
};

/**
 * deserializeAws_restJson1DefaultDetection
 */
const de_DefaultDetection = (output: any, context: __SerdeContext): DefaultDetection => {
  return {
    count: __expectLong(output.count),
    occurrences: output.occurrences != null ? de_Occurrences(output.occurrences, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultDetections
 */
const de_DefaultDetections = (output: any, context: __SerdeContext): DefaultDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefaultDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectedDataDetails
 */
const de_DetectedDataDetails = (output: any, context: __SerdeContext): DetectedDataDetails => {
  return {
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Detection
 */
const de_Detection = (output: any, context: __SerdeContext): Detection => {
  return {
    arn: __expectString(output.arn),
    count: __expectLong(output.count),
    id: __expectString(output.id),
    name: __expectString(output.name),
    suppressed: __expectBoolean(output.suppressed),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return {
    domainName: __expectString(output.domainName),
  } as any;
};

/**
 * deserializeAws_restJson1FederatedUser
 */
const de_FederatedUser = (output: any, context: __SerdeContext): FederatedUser => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    sessionContext: output.sessionContext != null ? de_SessionContext(output.sessionContext, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    accountId: __expectString(output.accountId),
    archived: __expectBoolean(output.archived),
    category: __expectString(output.category),
    classificationDetails:
      output.classificationDetails != null
        ? de_ClassificationDetails(output.classificationDetails, context)
        : undefined,
    count: __expectLong(output.count),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    partition: __expectString(output.partition),
    policyDetails: output.policyDetails != null ? de_PolicyDetails(output.policyDetails, context) : undefined,
    region: __expectString(output.region),
    resourcesAffected:
      output.resourcesAffected != null ? de_ResourcesAffected(output.resourcesAffected, context) : undefined,
    sample: __expectBoolean(output.sample),
    schemaVersion: __expectString(output.schemaVersion),
    severity: output.severity != null ? de_Severity(output.severity, context) : undefined,
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingAction
 */
const de_FindingAction = (output: any, context: __SerdeContext): FindingAction => {
  return {
    actionType: __expectString(output.actionType),
    apiCallDetails: output.apiCallDetails != null ? de_ApiCallDetails(output.apiCallDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingActor
 */
const de_FindingActor = (output: any, context: __SerdeContext): FindingActor => {
  return {
    domainDetails: output.domainDetails != null ? de_DomainDetails(output.domainDetails, context) : undefined,
    ipAddressDetails:
      output.ipAddressDetails != null ? de_IpAddressDetails(output.ipAddressDetails, context) : undefined,
    userIdentity: output.userIdentity != null ? de_UserIdentity(output.userIdentity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingCriteria
 */
const de_FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    criterion: output.criterion != null ? de_Criterion(output.criterion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingsFilterListItem
 */
const de_FindingsFilterListItem = (output: any, context: __SerdeContext): FindingsFilterListItem => {
  return {
    action: __expectString(output.action),
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GroupCount
 */
const de_GroupCount = (output: any, context: __SerdeContext): GroupCount => {
  return {
    count: __expectLong(output.count),
    groupKey: __expectString(output.groupKey),
  } as any;
};

/**
 * deserializeAws_restJson1IamUser
 */
const de_IamUser = (output: any, context: __SerdeContext): IamUser => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    userName: __expectString(output.userName),
  } as any;
};

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    accountId: __expectString(output.accountId),
    invitationId: __expectString(output.invitationId),
    invitedAt:
      output.invitedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.invitedAt)) : undefined,
    relationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

/**
 * deserializeAws_restJson1IpAddressDetails
 */
const de_IpAddressDetails = (output: any, context: __SerdeContext): IpAddressDetails => {
  return {
    ipAddressV4: __expectString(output.ipAddressV4),
    ipCity: output.ipCity != null ? de_IpCity(output.ipCity, context) : undefined,
    ipCountry: output.ipCountry != null ? de_IpCountry(output.ipCountry, context) : undefined,
    ipGeoLocation: output.ipGeoLocation != null ? de_IpGeoLocation(output.ipGeoLocation, context) : undefined,
    ipOwner: output.ipOwner != null ? de_IpOwner(output.ipOwner, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IpCity
 */
const de_IpCity = (output: any, context: __SerdeContext): IpCity => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1IpCountry
 */
const de_IpCountry = (output: any, context: __SerdeContext): IpCountry => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1IpGeoLocation
 */
const de_IpGeoLocation = (output: any, context: __SerdeContext): IpGeoLocation => {
  return {
    lat: __limitedParseDouble(output.lat),
    lon: __limitedParseDouble(output.lon),
  } as any;
};

/**
 * deserializeAws_restJson1IpOwner
 */
const de_IpOwner = (output: any, context: __SerdeContext): IpOwner => {
  return {
    asn: __expectString(output.asn),
    asnOrg: __expectString(output.asnOrg),
    isp: __expectString(output.isp),
    org: __expectString(output.org),
  } as any;
};

/**
 * deserializeAws_restJson1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    isDefinedInJob: __expectString(output.isDefinedInJob),
    isMonitoredByJob: __expectString(output.isMonitoredByJob),
    lastJobId: __expectString(output.lastJobId),
    lastJobRunTime:
      output.lastJobRunTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastJobRunTime))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobScheduleFrequency
 */
const de_JobScheduleFrequency = (output: any, context: __SerdeContext): JobScheduleFrequency => {
  return {
    dailySchedule: output.dailySchedule != null ? de_DailySchedule(output.dailySchedule, context) : undefined,
    monthlySchedule: output.monthlySchedule != null ? de_MonthlySchedule(output.monthlySchedule, context) : undefined,
    weeklySchedule: output.weeklySchedule != null ? de_WeeklySchedule(output.weeklySchedule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobScopeTerm
 */
const de_JobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm => {
  return {
    simpleScopeTerm: output.simpleScopeTerm != null ? de_SimpleScopeTerm(output.simpleScopeTerm, context) : undefined,
    tagScopeTerm: output.tagScopeTerm != null ? de_TagScopeTerm(output.tagScopeTerm, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobScopingBlock
 */
const de_JobScopingBlock = (output: any, context: __SerdeContext): JobScopingBlock => {
  return {
    and: output.and != null ? de___listOfJobScopeTerm(output.and, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    bucketCriteria:
      output.bucketCriteria != null ? de_S3BucketCriteriaForJob(output.bucketCriteria, context) : undefined,
    bucketDefinitions:
      output.bucketDefinitions != null
        ? de___listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    jobId: __expectString(output.jobId),
    jobStatus: __expectString(output.jobStatus),
    jobType: __expectString(output.jobType),
    lastRunErrorStatus:
      output.lastRunErrorStatus != null ? de_LastRunErrorStatus(output.lastRunErrorStatus, context) : undefined,
    name: __expectString(output.name),
    userPausedDetails:
      output.userPausedDetails != null ? de_UserPausedDetails(output.userPausedDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KeyValuePair
 */
const de_KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1KeyValuePairList
 */
const de_KeyValuePairList = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LastRunErrorStatus
 */
const de_LastRunErrorStatus = (output: any, context: __SerdeContext): LastRunErrorStatus => {
  return {
    code: __expectString(output.code),
  } as any;
};

/**
 * deserializeAws_restJson1ManagedDataIdentifierSummary
 */
const de_ManagedDataIdentifierSummary = (output: any, context: __SerdeContext): ManagedDataIdentifierSummary => {
  return {
    category: __expectString(output.category),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1MatchingBucket
 */
const de_MatchingBucket = (output: any, context: __SerdeContext): MatchingBucket => {
  return {
    accountId: __expectString(output.accountId),
    bucketName: __expectString(output.bucketName),
    classifiableObjectCount: __expectLong(output.classifiableObjectCount),
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    jobDetails: output.jobDetails != null ? de_JobDetails(output.jobDetails, context) : undefined,
    lastAutomatedDiscoveryTime:
      output.lastAutomatedDiscoveryTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastAutomatedDiscoveryTime))
        : undefined,
    objectCount: __expectLong(output.objectCount),
    objectCountByEncryptionType:
      output.objectCountByEncryptionType != null
        ? de_ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
        : undefined,
    sensitivityScore: __expectInt32(output.sensitivityScore),
    sizeInBytes: __expectLong(output.sizeInBytes),
    sizeInBytesCompressed: __expectLong(output.sizeInBytesCompressed),
    unclassifiableObjectCount:
      output.unclassifiableObjectCount != null
        ? de_ObjectLevelStatistics(output.unclassifiableObjectCount, context)
        : undefined,
    unclassifiableObjectSizeInBytes:
      output.unclassifiableObjectSizeInBytes != null
        ? de_ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MatchingResource
 */
const de_MatchingResource = (output: any, context: __SerdeContext): MatchingResource => {
  return {
    matchingBucket: output.matchingBucket != null ? de_MatchingBucket(output.matchingBucket, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return {
    accountId: __expectString(output.accountId),
    administratorAccountId: __expectString(output.administratorAccountId),
    arn: __expectString(output.arn),
    email: __expectString(output.email),
    invitedAt:
      output.invitedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.invitedAt)) : undefined,
    masterAccountId: __expectString(output.masterAccountId),
    relationshipStatus: __expectString(output.relationshipStatus),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MonthlySchedule
 */
const de_MonthlySchedule = (output: any, context: __SerdeContext): MonthlySchedule => {
  return {
    dayOfMonth: __expectInt32(output.dayOfMonth),
  } as any;
};

/**
 * deserializeAws_restJson1ObjectCountByEncryptionType
 */
const de_ObjectCountByEncryptionType = (output: any, context: __SerdeContext): ObjectCountByEncryptionType => {
  return {
    customerManaged: __expectLong(output.customerManaged),
    kmsManaged: __expectLong(output.kmsManaged),
    s3Managed: __expectLong(output.s3Managed),
    unencrypted: __expectLong(output.unencrypted),
    unknown: __expectLong(output.unknown),
  } as any;
};

/**
 * deserializeAws_restJson1ObjectLevelStatistics
 */
const de_ObjectLevelStatistics = (output: any, context: __SerdeContext): ObjectLevelStatistics => {
  return {
    fileType: __expectLong(output.fileType),
    storageClass: __expectLong(output.storageClass),
    total: __expectLong(output.total),
  } as any;
};

/**
 * deserializeAws_restJson1Occurrences
 */
const de_Occurrences = (output: any, context: __SerdeContext): Occurrences => {
  return {
    cells: output.cells != null ? de_Cells(output.cells, context) : undefined,
    lineRanges: output.lineRanges != null ? de_Ranges(output.lineRanges, context) : undefined,
    offsetRanges: output.offsetRanges != null ? de_Ranges(output.offsetRanges, context) : undefined,
    pages: output.pages != null ? de_Pages(output.pages, context) : undefined,
    records: output.records != null ? de_Records(output.records, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
  return {
    lineRange: output.lineRange != null ? de_Range(output.lineRange, context) : undefined,
    offsetRange: output.offsetRange != null ? de_Range(output.offsetRange, context) : undefined,
    pageNumber: __expectLong(output.pageNumber),
  } as any;
};

/**
 * deserializeAws_restJson1Pages
 */
const de_Pages = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Page(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyDetails
 */
const de_PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return {
    action: output.action != null ? de_FindingAction(output.action, context) : undefined,
    actor: output.actor != null ? de_FindingActor(output.actor, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Range
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  return {
    end: __expectLong(output.end),
    start: __expectLong(output.start),
    startColumn: __expectLong(output.startColumn),
  } as any;
};

/**
 * deserializeAws_restJson1Ranges
 */
const de_Ranges = (output: any, context: __SerdeContext): Range[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Range(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return {
    jsonPath: __expectString(output.jsonPath),
    recordIndex: __expectLong(output.recordIndex),
  } as any;
};

/**
 * deserializeAws_restJson1Records
 */
const de_Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReplicationDetails
 */
const de_ReplicationDetails = (output: any, context: __SerdeContext): ReplicationDetails => {
  return {
    replicated: __expectBoolean(output.replicated),
    replicatedExternally: __expectBoolean(output.replicatedExternally),
    replicationAccounts:
      output.replicationAccounts != null ? de___listOf__string(output.replicationAccounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceProfileArtifact
 */
const de_ResourceProfileArtifact = (output: any, context: __SerdeContext): ResourceProfileArtifact => {
  return {
    arn: __expectString(output.arn),
    classificationResultStatus: __expectString(output.classificationResultStatus),
    sensitive: __expectBoolean(output.sensitive),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcesAffected
 */
const de_ResourcesAffected = (output: any, context: __SerdeContext): ResourcesAffected => {
  return {
    s3Bucket: output.s3Bucket != null ? de_S3Bucket(output.s3Bucket, context) : undefined,
    s3Object: output.s3Object != null ? de_S3Object(output.s3Object, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceStatistics
 */
const de_ResourceStatistics = (output: any, context: __SerdeContext): ResourceStatistics => {
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

/**
 * deserializeAws_restJson1RevealConfiguration
 */
const de_RevealConfiguration = (output: any, context: __SerdeContext): RevealConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1S3Bucket
 */
const de_S3Bucket = (output: any, context: __SerdeContext): S3Bucket => {
  return {
    allowsUnencryptedObjectUploads: __expectString(output.allowsUnencryptedObjectUploads),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    defaultServerSideEncryption:
      output.defaultServerSideEncryption != null
        ? de_ServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    name: __expectString(output.name),
    owner: output.owner != null ? de_S3BucketOwner(output.owner, context) : undefined,
    publicAccess: output.publicAccess != null ? de_BucketPublicAccess(output.publicAccess, context) : undefined,
    tags: output.tags != null ? de_KeyValuePairList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketCriteriaForJob
 */
const de_S3BucketCriteriaForJob = (output: any, context: __SerdeContext): S3BucketCriteriaForJob => {
  return {
    excludes: output.excludes != null ? de_CriteriaBlockForJob(output.excludes, context) : undefined,
    includes: output.includes != null ? de_CriteriaBlockForJob(output.includes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketDefinitionForJob
 */
const de_S3BucketDefinitionForJob = (output: any, context: __SerdeContext): S3BucketDefinitionForJob => {
  return {
    accountId: __expectString(output.accountId),
    buckets: output.buckets != null ? de___listOf__string(output.buckets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketOwner
 */
const de_S3BucketOwner = (output: any, context: __SerdeContext): S3BucketOwner => {
  return {
    displayName: __expectString(output.displayName),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1S3ClassificationScope
 */
const de_S3ClassificationScope = (output: any, context: __SerdeContext): S3ClassificationScope => {
  return {
    excludes: output.excludes != null ? de_S3ClassificationScopeExclusion(output.excludes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3ClassificationScopeExclusion
 */
const de_S3ClassificationScopeExclusion = (output: any, context: __SerdeContext): S3ClassificationScopeExclusion => {
  return {
    bucketNames: output.bucketNames != null ? de___listOfS3BucketName(output.bucketNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    bucketName: __expectString(output.bucketName),
    keyPrefix: __expectString(output.keyPrefix),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1S3JobDefinition
 */
const de_S3JobDefinition = (output: any, context: __SerdeContext): S3JobDefinition => {
  return {
    bucketCriteria:
      output.bucketCriteria != null ? de_S3BucketCriteriaForJob(output.bucketCriteria, context) : undefined,
    bucketDefinitions:
      output.bucketDefinitions != null
        ? de___listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
        : undefined,
    scoping: output.scoping != null ? de_Scoping(output.scoping, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucketArn: __expectString(output.bucketArn),
    eTag: __expectString(output.eTag),
    extension: __expectString(output.extension),
    key: __expectString(output.key),
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
    path: __expectString(output.path),
    publicAccess: __expectBoolean(output.publicAccess),
    serverSideEncryption:
      output.serverSideEncryption != null ? de_ServerSideEncryption(output.serverSideEncryption, context) : undefined,
    size: __expectLong(output.size),
    storageClass: __expectString(output.storageClass),
    tags: output.tags != null ? de_KeyValuePairList(output.tags, context) : undefined,
    versionId: __expectString(output.versionId),
  } as any;
};

/**
 * deserializeAws_restJson1S3WordsList
 */
const de_S3WordsList = (output: any, context: __SerdeContext): S3WordsList => {
  return {
    bucketName: __expectString(output.bucketName),
    objectKey: __expectString(output.objectKey),
  } as any;
};

/**
 * deserializeAws_restJson1Scoping
 */
const de_Scoping = (output: any, context: __SerdeContext): Scoping => {
  return {
    excludes: output.excludes != null ? de_JobScopingBlock(output.excludes, context) : undefined,
    includes: output.includes != null ? de_JobScopingBlock(output.includes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityHubConfiguration
 */
const de_SecurityHubConfiguration = (output: any, context: __SerdeContext): SecurityHubConfiguration => {
  return {
    publishClassificationFindings: __expectBoolean(output.publishClassificationFindings),
    publishPolicyFindings: __expectBoolean(output.publishPolicyFindings),
  } as any;
};

/**
 * deserializeAws_restJson1SensitiveData
 */
const de_SensitiveData = (output: any, context: __SerdeContext): SensitiveDataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SensitiveDataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SensitiveDataItem
 */
const de_SensitiveDataItem = (output: any, context: __SerdeContext): SensitiveDataItem => {
  return {
    category: __expectString(output.category),
    detections: output.detections != null ? de_DefaultDetections(output.detections, context) : undefined,
    totalCount: __expectLong(output.totalCount),
  } as any;
};

/**
 * deserializeAws_restJson1SensitiveDataOccurrences
 */
const de_SensitiveDataOccurrences = (output: any, context: __SerdeContext): Record<string, DetectedDataDetails[]> => {
  return Object.entries(output).reduce((acc: Record<string, DetectedDataDetails[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de___listOfDetectedDataDetails(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SensitivityAggregations
 */
const de_SensitivityAggregations = (output: any, context: __SerdeContext): SensitivityAggregations => {
  return {
    classifiableSizeInBytes: __expectLong(output.classifiableSizeInBytes),
    publiclyAccessibleCount: __expectLong(output.publiclyAccessibleCount),
    totalCount: __expectLong(output.totalCount),
    totalSizeInBytes: __expectLong(output.totalSizeInBytes),
  } as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplateExcludes
 */
const de_SensitivityInspectionTemplateExcludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateExcludes => {
  return {
    managedDataIdentifierIds:
      output.managedDataIdentifierIds != null
        ? de___listOf__string(output.managedDataIdentifierIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplateIncludes
 */
const de_SensitivityInspectionTemplateIncludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateIncludes => {
  return {
    allowListIds: output.allowListIds != null ? de___listOf__string(output.allowListIds, context) : undefined,
    customDataIdentifierIds:
      output.customDataIdentifierIds != null ? de___listOf__string(output.customDataIdentifierIds, context) : undefined,
    managedDataIdentifierIds:
      output.managedDataIdentifierIds != null
        ? de___listOf__string(output.managedDataIdentifierIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplatesEntry
 */
const de_SensitivityInspectionTemplatesEntry = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplatesEntry => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ServerSideEncryption
 */
const de_ServerSideEncryption = (output: any, context: __SerdeContext): ServerSideEncryption => {
  return {
    encryptionType: __expectString(output.encryptionType),
    kmsMasterKeyId: __expectString(output.kmsMasterKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceLimit
 */
const de_ServiceLimit = (output: any, context: __SerdeContext): ServiceLimit => {
  return {
    isServiceLimited: __expectBoolean(output.isServiceLimited),
    unit: __expectString(output.unit),
    value: __expectLong(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SessionContext
 */
const de_SessionContext = (output: any, context: __SerdeContext): SessionContext => {
  return {
    attributes: output.attributes != null ? de_SessionContextAttributes(output.attributes, context) : undefined,
    sessionIssuer: output.sessionIssuer != null ? de_SessionIssuer(output.sessionIssuer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SessionContextAttributes
 */
const de_SessionContextAttributes = (output: any, context: __SerdeContext): SessionContextAttributes => {
  return {
    creationDate:
      output.creationDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationDate)) : undefined,
    mfaAuthenticated: __expectBoolean(output.mfaAuthenticated),
  } as any;
};

/**
 * deserializeAws_restJson1SessionIssuer
 */
const de_SessionIssuer = (output: any, context: __SerdeContext): SessionIssuer => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
    type: __expectString(output.type),
    userName: __expectString(output.userName),
  } as any;
};

/**
 * deserializeAws_restJson1Severity
 */
const de_Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    description: __expectString(output.description),
    score: __expectLong(output.score),
  } as any;
};

/**
 * deserializeAws_restJson1SeverityLevel
 */
const de_SeverityLevel = (output: any, context: __SerdeContext): SeverityLevel => {
  return {
    occurrencesThreshold: __expectLong(output.occurrencesThreshold),
    severity: __expectString(output.severity),
  } as any;
};

/**
 * deserializeAws_restJson1SeverityLevelList
 */
const de_SeverityLevelList = (output: any, context: __SerdeContext): SeverityLevel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SeverityLevel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimpleCriterionForJob
 */
const de_SimpleCriterionForJob = (output: any, context: __SerdeContext): SimpleCriterionForJob => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values: output.values != null ? de___listOf__string(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimpleScopeTerm
 */
const de_SimpleScopeTerm = (output: any, context: __SerdeContext): SimpleScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    values: output.values != null ? de___listOf__string(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return {
    approximateNumberOfObjectsToProcess: __limitedParseDouble(output.approximateNumberOfObjectsToProcess),
    numberOfRuns: __limitedParseDouble(output.numberOfRuns),
  } as any;
};

/**
 * deserializeAws_restJson1TagCriterionForJob
 */
const de_TagCriterionForJob = (output: any, context: __SerdeContext): TagCriterionForJob => {
  return {
    comparator: __expectString(output.comparator),
    tagValues: output.tagValues != null ? de___listOfTagCriterionPairForJob(output.tagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagCriterionPairForJob
 */
const de_TagCriterionPairForJob = (output: any, context: __SerdeContext): TagCriterionPairForJob => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
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
 * deserializeAws_restJson1TagScopeTerm
 */
const de_TagScopeTerm = (output: any, context: __SerdeContext): TagScopeTerm => {
  return {
    comparator: __expectString(output.comparator),
    key: __expectString(output.key),
    tagValues: output.tagValues != null ? de___listOfTagValuePair(output.tagValues, context) : undefined,
    target: __expectString(output.target),
  } as any;
};

/**
 * deserializeAws_restJson1TagValuePair
 */
const de_TagValuePair = (output: any, context: __SerdeContext): TagValuePair => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccount
 */
const de_UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return {
    accountId: __expectString(output.accountId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1UsageByAccount
 */
const de_UsageByAccount = (output: any, context: __SerdeContext): UsageByAccount => {
  return {
    currency: __expectString(output.currency),
    estimatedCost: __expectString(output.estimatedCost),
    serviceLimit: output.serviceLimit != null ? de_ServiceLimit(output.serviceLimit, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1UsageRecord
 */
const de_UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return {
    accountId: __expectString(output.accountId),
    automatedDiscoveryFreeTrialStartDate:
      output.automatedDiscoveryFreeTrialStartDate != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.automatedDiscoveryFreeTrialStartDate))
        : undefined,
    freeTrialStartDate:
      output.freeTrialStartDate != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.freeTrialStartDate))
        : undefined,
    usage: output.usage != null ? de___listOfUsageByAccount(output.usage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UsageTotal
 */
const de_UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return {
    currency: __expectString(output.currency),
    estimatedCost: __expectString(output.estimatedCost),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdentity
 */
const de_UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return {
    assumedRole: output.assumedRole != null ? de_AssumedRole(output.assumedRole, context) : undefined,
    awsAccount: output.awsAccount != null ? de_AwsAccount(output.awsAccount, context) : undefined,
    awsService: output.awsService != null ? de_AwsService(output.awsService, context) : undefined,
    federatedUser: output.federatedUser != null ? de_FederatedUser(output.federatedUser, context) : undefined,
    iamUser: output.iamUser != null ? de_IamUser(output.iamUser, context) : undefined,
    root: output.root != null ? de_UserIdentityRoot(output.root, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdentityRoot
 */
const de_UserIdentityRoot = (output: any, context: __SerdeContext): UserIdentityRoot => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    principalId: __expectString(output.principalId),
  } as any;
};

/**
 * deserializeAws_restJson1UserPausedDetails
 */
const de_UserPausedDetails = (output: any, context: __SerdeContext): UserPausedDetails => {
  return {
    jobExpiresAt:
      output.jobExpiresAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.jobExpiresAt)) : undefined,
    jobImminentExpirationHealthEventArn: __expectString(output.jobImminentExpirationHealthEventArn),
    jobPausedAt:
      output.jobPausedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.jobPausedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WeeklySchedule
 */
const de_WeeklySchedule = (output: any, context: __SerdeContext): WeeklySchedule => {
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
