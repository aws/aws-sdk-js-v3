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
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
  body = JSON.stringify(
    take(input, {
      administratorAccountId: [, , `administratorAccountId`],
      invitationId: [, , `invitationId`],
      masterAccount: [, , `masterAccount`],
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
  body = JSON.stringify(
    take(input, {
      ids: [, (_) => _json(_), `ids`],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      criteria: [, (_) => se_AllowListCriteria(_, context), `criteria`],
      description: [, , `description`],
      name: [, , `name`],
      tags: [, (_) => _json(_), `tags`],
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
  body = JSON.stringify(
    take(input, {
      allowListIds: [, (_) => _json(_), `allowListIds`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      customDataIdentifierIds: [, (_) => _json(_), `customDataIdentifierIds`],
      description: [, , `description`],
      initialRun: [, , `initialRun`],
      jobType: [, , `jobType`],
      managedDataIdentifierIds: [, (_) => _json(_), `managedDataIdentifierIds`],
      managedDataIdentifierSelector: [, , `managedDataIdentifierSelector`],
      name: [, , `name`],
      s3JobDefinition: [, (_) => se_S3JobDefinition(_, context), `s3JobDefinition`],
      samplingPercentage: [, , `samplingPercentage`],
      scheduleFrequency: [, (_) => se_JobScheduleFrequency(_, context), `scheduleFrequency`],
      tags: [, (_) => _json(_), `tags`],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      description: [, , `description`],
      ignoreWords: [, (_) => _json(_), `ignoreWords`],
      keywords: [, (_) => _json(_), `keywords`],
      maximumMatchDistance: [, , `maximumMatchDistance`],
      name: [, , `name`],
      regex: [, , `regex`],
      severityLevels: [, (_) => se_SeverityLevelList(_, context), `severityLevels`],
      tags: [, (_) => _json(_), `tags`],
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
  body = JSON.stringify(
    take(input, {
      action: [, , `action`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      description: [, , `description`],
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `findingCriteria`],
      name: [, , `name`],
      position: [, , `position`],
      tags: [, (_) => _json(_), `tags`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `accountIds`],
      disableEmailNotification: [, , `disableEmailNotification`],
      message: [, , `message`],
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
  body = JSON.stringify(
    take(input, {
      account: [, (_) => se_AccountDetail(_, context), `account`],
      tags: [, (_) => _json(_), `tags`],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/sample";
  let body: any;
  body = JSON.stringify(
    take(input, {
      findingTypes: [, (_) => _json(_), `findingTypes`],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `accountIds`],
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
  body = JSON.stringify(
    take(input, {
      accountIds: [, (_) => _json(_), `accountIds`],
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
  body = JSON.stringify(
    take(input, {
      criteria: [, (_) => se_BucketCriteria(_, context), `criteria`],
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
      sortCriteria: [, (_) => se_BucketSortCriteria(_, context), `sortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      findingPublishingFrequency: [, , `findingPublishingFrequency`],
      status: [, , `status`],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminAccountId: [, , `adminAccountId`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
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
  body = JSON.stringify(
    take(input, {
      accountId: [, , `accountId`],
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
  body = JSON.stringify(
    take(input, {
      findingIds: [, (_) => _json(_), `findingIds`],
      sortCriteria: [, (_) => se_SortCriteria(_, context), `sortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `findingCriteria`],
      groupBy: [, , `groupBy`],
      size: [, , `size`],
      sortCriteria: [, (_) => se_FindingStatisticsSortCriteria(_, context), `sortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      filterBy: [, (_) => se___listOfUsageStatisticsFilter(_, context), `filterBy`],
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
      sortBy: [, (_) => se_UsageStatisticsSortBy(_, context), `sortBy`],
      timeRange: [, , `timeRange`],
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
  body = JSON.stringify(
    take(input, {
      filterCriteria: [, (_) => se_ListJobsFilterCriteria(_, context), `filterCriteria`],
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
      sortCriteria: [, (_) => se_ListJobsSortCriteria(_, context), `sortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
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
  body = JSON.stringify(
    take(input, {
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `findingCriteria`],
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
      sortCriteria: [, (_) => se_SortCriteria(_, context), `sortCriteria`],
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
  body = JSON.stringify(
    take(input, {
      nextToken: [, , `nextToken`],
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
  body = JSON.stringify(
    take(input, {
      configuration: [, (_) => se_ClassificationExportConfiguration(_, context), `configuration`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      securityHubConfiguration: [, (_) => se_SecurityHubConfiguration(_, context), `securityHubConfiguration`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      bucketCriteria: [, (_) => se_SearchResourcesBucketCriteria(_, context), `bucketCriteria`],
      maxResults: [, , `maxResults`],
      nextToken: [, , `nextToken`],
      sortCriteria: [, (_) => se_SearchResourcesSortCriteria(_, context), `sortCriteria`],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `tags`],
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
  body = JSON.stringify(
    take(input, {
      ignoreWords: [, (_) => _json(_), `ignoreWords`],
      keywords: [, (_) => _json(_), `keywords`],
      maximumMatchDistance: [, , `maximumMatchDistance`],
      regex: [, , `regex`],
      sampleText: [, , `sampleText`],
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
  body = JSON.stringify(
    take(input, {
      criteria: [, (_) => se_AllowListCriteria(_, context), `criteria`],
      description: [, , `description`],
      name: [, , `name`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      status: [, , `status`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      jobStatus: [, , `jobStatus`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      s3: [, (_) => se_S3ClassificationScopeUpdate(_, context), `s3`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      action: [, , `action`],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken(), `clientToken`],
      description: [, , `description`],
      findingCriteria: [, (_) => se_FindingCriteria(_, context), `findingCriteria`],
      name: [, , `name`],
      position: [, , `position`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      findingPublishingFrequency: [, , `findingPublishingFrequency`],
      status: [, , `status`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      status: [, , `status`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      autoEnable: [, , `autoEnable`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      sensitivityScoreOverride: [, , `sensitivityScoreOverride`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      suppressDataIdentifiers: [, (_) => se___listOfSuppressDataIdentifier(_, context), `suppressDataIdentifiers`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      configuration: [, (_) => se_RevealConfiguration(_, context), `configuration`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [, , `description`],
      excludes: [, (_) => se_SensitivityInspectionTemplateExcludes(_, context), `excludes`],
      includes: [, (_) => se_SensitivityInspectionTemplateIncludes(_, context), `includes`],
    })
  );
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    customDataIdentifiers: [
      ,
      (_) => de___listOfBatchGetCustomDataIdentifierSummary(_, context),
      `customDataIdentifiers`,
    ],
    notFoundIdentifierIds: [, _json, `notFoundIdentifierIds`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    id: [, __expectString, `id`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobArn: [, __expectString, `jobArn`],
    jobId: [, __expectString, `jobId`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    customDataIdentifierId: [, __expectString, `customDataIdentifierId`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    id: [, __expectString, `id`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    unprocessedAccounts: [, (_) => de___listOfUnprocessedAccount(_, context), `unprocessedAccounts`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
  });
  Object.assign(contents, doc);
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
    unprocessedAccounts: [, (_) => de___listOfUnprocessedAccount(_, context), `unprocessedAccounts`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
    unprocessedAccounts: [, (_) => de___listOfUnprocessedAccount(_, context), `unprocessedAccounts`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    buckets: [, (_) => de___listOfBucketMetadata(_, context), `buckets`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    allowListIds: [, _json, `allowListIds`],
    clientToken: [, __expectString, `clientToken`],
    createdAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    customDataIdentifierIds: [, _json, `customDataIdentifierIds`],
    description: [, __expectString, `description`],
    initialRun: [, __expectBoolean, `initialRun`],
    jobArn: [, __expectString, `jobArn`],
    jobId: [, __expectString, `jobId`],
    jobStatus: [, __expectString, `jobStatus`],
    jobType: [, __expectString, `jobType`],
    lastRunErrorStatus: [, (_) => de_LastRunErrorStatus(_, context), `lastRunErrorStatus`],
    lastRunTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastRunTime`],
    managedDataIdentifierIds: [, _json, `managedDataIdentifierIds`],
    managedDataIdentifierSelector: [, __expectString, `managedDataIdentifierSelector`],
    name: [, __expectString, `name`],
    s3JobDefinition: [, (_) => de_S3JobDefinition(_, context), `s3JobDefinition`],
    samplingPercentage: [, __expectInt32, `samplingPercentage`],
    scheduleFrequency: [, (_) => de_JobScheduleFrequency(_, context), `scheduleFrequency`],
    statistics: [, (_) => de_Statistics(_, context), `statistics`],
    tags: [, _json, `tags`],
    userPausedDetails: [, (_) => de_UserPausedDetails(_, context), `userPausedDetails`],
  });
  Object.assign(contents, doc);
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
    autoEnable: [, __expectBoolean, `autoEnable`],
    maxAccountLimitReached: [, __expectBoolean, `maxAccountLimitReached`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
    administrator: [, (_) => de_Invitation(_, context), `administrator`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    createdAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    criteria: [, (_) => de_AllowListCriteria(_, context), `criteria`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    status: [, (_) => de_AllowListStatus(_, context), `status`],
    tags: [, _json, `tags`],
    updatedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    classificationScopeId: [, __expectString, `classificationScopeId`],
    disabledAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `disabledAt`],
    firstEnabledAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `firstEnabledAt`],
    lastUpdatedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdatedAt`],
    sensitivityInspectionTemplateId: [, __expectString, `sensitivityInspectionTemplateId`],
    status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    bucketCount: [, __expectLong, `bucketCount`],
    bucketCountByEffectivePermission: [
      ,
      (_) => de_BucketCountByEffectivePermission(_, context),
      `bucketCountByEffectivePermission`,
    ],
    bucketCountByEncryptionType: [, (_) => de_BucketCountByEncryptionType(_, context), `bucketCountByEncryptionType`],
    bucketCountByObjectEncryptionRequirement: [
      ,
      (_) => de_BucketCountPolicyAllowsUnencryptedObjectUploads(_, context),
      `bucketCountByObjectEncryptionRequirement`,
    ],
    bucketCountBySharedAccessType: [
      ,
      (_) => de_BucketCountBySharedAccessType(_, context),
      `bucketCountBySharedAccessType`,
    ],
    bucketStatisticsBySensitivity: [
      ,
      (_) => de_BucketStatisticsBySensitivity(_, context),
      `bucketStatisticsBySensitivity`,
    ],
    classifiableObjectCount: [, __expectLong, `classifiableObjectCount`],
    classifiableSizeInBytes: [, __expectLong, `classifiableSizeInBytes`],
    lastUpdated: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdated`],
    objectCount: [, __expectLong, `objectCount`],
    sizeInBytes: [, __expectLong, `sizeInBytes`],
    sizeInBytesCompressed: [, __expectLong, `sizeInBytesCompressed`],
    unclassifiableObjectCount: [, (_) => de_ObjectLevelStatistics(_, context), `unclassifiableObjectCount`],
    unclassifiableObjectSizeInBytes: [, (_) => de_ObjectLevelStatistics(_, context), `unclassifiableObjectSizeInBytes`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    configuration: [, (_) => de_ClassificationExportConfiguration(_, context), `configuration`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    s3: [, (_) => de_S3ClassificationScope(_, context), `s3`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    createdAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    deleted: [, __expectBoolean, `deleted`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    ignoreWords: [, _json, `ignoreWords`],
    keywords: [, _json, `keywords`],
    maximumMatchDistance: [, __expectInt32, `maximumMatchDistance`],
    name: [, __expectString, `name`],
    regex: [, __expectString, `regex`],
    severityLevels: [, (_) => de_SeverityLevelList(_, context), `severityLevels`],
    tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
    findings: [, (_) => de___listOfFinding(_, context), `findings`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    action: [, __expectString, `action`],
    arn: [, __expectString, `arn`],
    description: [, __expectString, `description`],
    findingCriteria: [, (_) => de_FindingCriteria(_, context), `findingCriteria`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    position: [, __expectInt32, `position`],
    tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    securityHubConfiguration: [, (_) => de_SecurityHubConfiguration(_, context), `securityHubConfiguration`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    countsByGroup: [, (_) => de___listOfGroupCount(_, context), `countsByGroup`],
  });
  Object.assign(contents, doc);
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
    invitationsCount: [, __expectLong, `invitationsCount`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    findingPublishingFrequency: [, __expectString, `findingPublishingFrequency`],
    serviceRole: [, __expectString, `serviceRole`],
    status: [, __expectString, `status`],
    updatedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  });
  Object.assign(contents, doc);
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
    master: [, (_) => de_Invitation(_, context), `master`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    accountId: [, __expectString, `accountId`],
    administratorAccountId: [, __expectString, `administratorAccountId`],
    arn: [, __expectString, `arn`],
    email: [, __expectString, `email`],
    invitedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `invitedAt`],
    masterAccountId: [, __expectString, `masterAccountId`],
    relationshipStatus: [, __expectString, `relationshipStatus`],
    tags: [, _json, `tags`],
    updatedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    profileUpdatedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `profileUpdatedAt`],
    sensitivityScore: [, __expectInt32, `sensitivityScore`],
    sensitivityScoreOverridden: [, __expectBoolean, `sensitivityScoreOverridden`],
    statistics: [, (_) => de_ResourceStatistics(_, context), `statistics`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    configuration: [, (_) => de_RevealConfiguration(_, context), `configuration`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    error: [, __expectString, `error`],
    sensitiveDataOccurrences: [, (_) => de_SensitiveDataOccurrences(_, context), `sensitiveDataOccurrences`],
    status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    code: [, __expectString, `code`],
    reasons: [, _json, `reasons`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    description: [, __expectString, `description`],
    excludes: [, (_) => de_SensitivityInspectionTemplateExcludes(_, context), `excludes`],
    includes: [, (_) => de_SensitivityInspectionTemplateIncludes(_, context), `includes`],
    name: [, __expectString, `name`],
    sensitivityInspectionTemplateId: [, __expectString, `sensitivityInspectionTemplateId`],
  });
  Object.assign(contents, doc);
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
    nextToken: [, __expectString, `nextToken`],
    records: [, (_) => de___listOfUsageRecord(_, context), `records`],
    timeRange: [, __expectString, `timeRange`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    timeRange: [, __expectString, `timeRange`],
    usageTotals: [, (_) => de___listOfUsageTotal(_, context), `usageTotals`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    allowLists: [, (_) => de___listOfAllowListSummary(_, context), `allowLists`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: [, (_) => de___listOfJobSummary(_, context), `items`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    classificationScopes: [, (_) => de___listOfClassificationScopeSummary(_, context), `classificationScopes`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: [, (_) => de___listOfCustomDataIdentifierSummary(_, context), `items`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
    findingIds: [, _json, `findingIds`],
    nextToken: [, __expectString, `nextToken`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    findingsFilterListItems: [, (_) => de___listOfFindingsFilterListItem(_, context), `findingsFilterListItems`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
    invitations: [, (_) => de___listOfInvitation(_, context), `invitations`],
    nextToken: [, __expectString, `nextToken`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    items: [, (_) => de___listOfManagedDataIdentifierSummary(_, context), `items`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    members: [, (_) => de___listOfMember(_, context), `members`],
    nextToken: [, __expectString, `nextToken`],
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
    adminAccounts: [, (_) => de___listOfAdminAccount(_, context), `adminAccounts`],
    nextToken: [, __expectString, `nextToken`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    artifacts: [, (_) => de___listOfResourceProfileArtifact(_, context), `artifacts`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    detections: [, (_) => de___listOfDetection(_, context), `detections`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: [, __expectString, `nextToken`],
    sensitivityInspectionTemplates: [
      ,
      (_) => de___listOfSensitivityInspectionTemplatesEntry(_, context),
      `sensitivityInspectionTemplates`,
    ],
  });
  Object.assign(contents, doc);
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
    tags: [, _json, `tags`],
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    configuration: [, (_) => de_ClassificationExportConfiguration(_, context), `configuration`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    matchingResources: [, (_) => de___listOfMatchingResource(_, context), `matchingResources`],
    nextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    matchCount: [, __expectInt32, `matchCount`],
  });
  Object.assign(contents, doc);
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    id: [, __expectString, `id`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: [, __expectString, `arn`],
    id: [, __expectString, `id`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    configuration: [, (_) => de_RevealConfiguration(_, context), `configuration`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

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

// se___listOfFindingType omitted.

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

// se___listOfS3BucketName omitted.

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
  return take(input, {
    accountId: [, , `accountId`],
    email: [, , `email`],
  });
};

/**
 * serializeAws_restJson1AllowListCriteria
 */
const se_AllowListCriteria = (input: AllowListCriteria, context: __SerdeContext): any => {
  return take(input, {
    regex: [, , `regex`],
    s3WordsList: [, (_) => se_S3WordsList(_, context), `s3WordsList`],
  });
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
  return take(input, {
    eq: [, _json, `eq`],
    gt: [, , `gt`],
    gte: [, , `gte`],
    lt: [, , `lt`],
    lte: [, , `lte`],
    neq: [, _json, `neq`],
    prefix: [, , `prefix`],
  });
};

/**
 * serializeAws_restJson1BucketSortCriteria
 */
const se_BucketSortCriteria = (input: BucketSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `attributeName`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1ClassificationExportConfiguration
 */
const se_ClassificationExportConfiguration = (
  input: ClassificationExportConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    s3Destination: [, (_) => se_S3Destination(_, context), `s3Destination`],
  });
};

/**
 * serializeAws_restJson1CriteriaBlockForJob
 */
const se_CriteriaBlockForJob = (input: CriteriaBlockForJob, context: __SerdeContext): any => {
  return take(input, {
    and: [, (_) => se___listOfCriteriaForJob(_, context), `and`],
  });
};

/**
 * serializeAws_restJson1CriteriaForJob
 */
const se_CriteriaForJob = (input: CriteriaForJob, context: __SerdeContext): any => {
  return take(input, {
    simpleCriterion: [, (_) => se_SimpleCriterionForJob(_, context), `simpleCriterion`],
    tagCriterion: [, (_) => se_TagCriterionForJob(_, context), `tagCriterion`],
  });
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
  return take(input, {
    eq: [, _json, `eq`],
    eqExactMatch: [, _json, `eqExactMatch`],
    gt: [, , `gt`],
    gte: [, , `gte`],
    lt: [, , `lt`],
    lte: [, , `lte`],
    neq: [, _json, `neq`],
  });
};

// se_DailySchedule omitted.

/**
 * serializeAws_restJson1FindingCriteria
 */
const se_FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return take(input, {
    criterion: [, (_) => se_Criterion(_, context), `criterion`],
  });
};

/**
 * serializeAws_restJson1FindingStatisticsSortCriteria
 */
const se_FindingStatisticsSortCriteria = (input: FindingStatisticsSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `attributeName`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1JobScheduleFrequency
 */
const se_JobScheduleFrequency = (input: JobScheduleFrequency, context: __SerdeContext): any => {
  return take(input, {
    dailySchedule: [, _json, `dailySchedule`],
    monthlySchedule: [, (_) => se_MonthlySchedule(_, context), `monthlySchedule`],
    weeklySchedule: [, (_) => se_WeeklySchedule(_, context), `weeklySchedule`],
  });
};

/**
 * serializeAws_restJson1JobScopeTerm
 */
const se_JobScopeTerm = (input: JobScopeTerm, context: __SerdeContext): any => {
  return take(input, {
    simpleScopeTerm: [, (_) => se_SimpleScopeTerm(_, context), `simpleScopeTerm`],
    tagScopeTerm: [, (_) => se_TagScopeTerm(_, context), `tagScopeTerm`],
  });
};

/**
 * serializeAws_restJson1JobScopingBlock
 */
const se_JobScopingBlock = (input: JobScopingBlock, context: __SerdeContext): any => {
  return take(input, {
    and: [, (_) => se___listOfJobScopeTerm(_, context), `and`],
  });
};

/**
 * serializeAws_restJson1ListJobsFilterCriteria
 */
const se_ListJobsFilterCriteria = (input: ListJobsFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    excludes: [, (_) => se___listOfListJobsFilterTerm(_, context), `excludes`],
    includes: [, (_) => se___listOfListJobsFilterTerm(_, context), `includes`],
  });
};

/**
 * serializeAws_restJson1ListJobsFilterTerm
 */
const se_ListJobsFilterTerm = (input: ListJobsFilterTerm, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    values: [, _json, `values`],
  });
};

/**
 * serializeAws_restJson1ListJobsSortCriteria
 */
const se_ListJobsSortCriteria = (input: ListJobsSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `attributeName`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1MonthlySchedule
 */
const se_MonthlySchedule = (input: MonthlySchedule, context: __SerdeContext): any => {
  return take(input, {
    dayOfMonth: [, , `dayOfMonth`],
  });
};

/**
 * serializeAws_restJson1RevealConfiguration
 */
const se_RevealConfiguration = (input: RevealConfiguration, context: __SerdeContext): any => {
  return take(input, {
    kmsKeyId: [, , `kmsKeyId`],
    status: [, , `status`],
  });
};

/**
 * serializeAws_restJson1S3BucketCriteriaForJob
 */
const se_S3BucketCriteriaForJob = (input: S3BucketCriteriaForJob, context: __SerdeContext): any => {
  return take(input, {
    excludes: [, (_) => se_CriteriaBlockForJob(_, context), `excludes`],
    includes: [, (_) => se_CriteriaBlockForJob(_, context), `includes`],
  });
};

/**
 * serializeAws_restJson1S3BucketDefinitionForJob
 */
const se_S3BucketDefinitionForJob = (input: S3BucketDefinitionForJob, context: __SerdeContext): any => {
  return take(input, {
    accountId: [, , `accountId`],
    buckets: [, _json, `buckets`],
  });
};

/**
 * serializeAws_restJson1S3ClassificationScopeExclusionUpdate
 */
const se_S3ClassificationScopeExclusionUpdate = (
  input: S3ClassificationScopeExclusionUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    bucketNames: [, _json, `bucketNames`],
    operation: [, , `operation`],
  });
};

/**
 * serializeAws_restJson1S3ClassificationScopeUpdate
 */
const se_S3ClassificationScopeUpdate = (input: S3ClassificationScopeUpdate, context: __SerdeContext): any => {
  return take(input, {
    excludes: [, (_) => se_S3ClassificationScopeExclusionUpdate(_, context), `excludes`],
  });
};

/**
 * serializeAws_restJson1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return take(input, {
    bucketName: [, , `bucketName`],
    keyPrefix: [, , `keyPrefix`],
    kmsKeyArn: [, , `kmsKeyArn`],
  });
};

/**
 * serializeAws_restJson1S3JobDefinition
 */
const se_S3JobDefinition = (input: S3JobDefinition, context: __SerdeContext): any => {
  return take(input, {
    bucketCriteria: [, (_) => se_S3BucketCriteriaForJob(_, context), `bucketCriteria`],
    bucketDefinitions: [, (_) => se___listOfS3BucketDefinitionForJob(_, context), `bucketDefinitions`],
    scoping: [, (_) => se_Scoping(_, context), `scoping`],
  });
};

/**
 * serializeAws_restJson1S3WordsList
 */
const se_S3WordsList = (input: S3WordsList, context: __SerdeContext): any => {
  return take(input, {
    bucketName: [, , `bucketName`],
    objectKey: [, , `objectKey`],
  });
};

/**
 * serializeAws_restJson1Scoping
 */
const se_Scoping = (input: Scoping, context: __SerdeContext): any => {
  return take(input, {
    excludes: [, (_) => se_JobScopingBlock(_, context), `excludes`],
    includes: [, (_) => se_JobScopingBlock(_, context), `includes`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesBucketCriteria
 */
const se_SearchResourcesBucketCriteria = (input: SearchResourcesBucketCriteria, context: __SerdeContext): any => {
  return take(input, {
    excludes: [, (_) => se_SearchResourcesCriteriaBlock(_, context), `excludes`],
    includes: [, (_) => se_SearchResourcesCriteriaBlock(_, context), `includes`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesCriteria
 */
const se_SearchResourcesCriteria = (input: SearchResourcesCriteria, context: __SerdeContext): any => {
  return take(input, {
    simpleCriterion: [, (_) => se_SearchResourcesSimpleCriterion(_, context), `simpleCriterion`],
    tagCriterion: [, (_) => se_SearchResourcesTagCriterion(_, context), `tagCriterion`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesCriteriaBlock
 */
const se_SearchResourcesCriteriaBlock = (input: SearchResourcesCriteriaBlock, context: __SerdeContext): any => {
  return take(input, {
    and: [, (_) => se___listOfSearchResourcesCriteria(_, context), `and`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesSimpleCriterion
 */
const se_SearchResourcesSimpleCriterion = (input: SearchResourcesSimpleCriterion, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    values: [, _json, `values`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesSortCriteria
 */
const se_SearchResourcesSortCriteria = (input: SearchResourcesSortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `attributeName`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesTagCriterion
 */
const se_SearchResourcesTagCriterion = (input: SearchResourcesTagCriterion, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    tagValues: [, (_) => se___listOfSearchResourcesTagCriterionPair(_, context), `tagValues`],
  });
};

/**
 * serializeAws_restJson1SearchResourcesTagCriterionPair
 */
const se_SearchResourcesTagCriterionPair = (input: SearchResourcesTagCriterionPair, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `key`],
    value: [, , `value`],
  });
};

/**
 * serializeAws_restJson1SecurityHubConfiguration
 */
const se_SecurityHubConfiguration = (input: SecurityHubConfiguration, context: __SerdeContext): any => {
  return take(input, {
    publishClassificationFindings: [, , `publishClassificationFindings`],
    publishPolicyFindings: [, , `publishPolicyFindings`],
  });
};

/**
 * serializeAws_restJson1SensitivityInspectionTemplateExcludes
 */
const se_SensitivityInspectionTemplateExcludes = (
  input: SensitivityInspectionTemplateExcludes,
  context: __SerdeContext
): any => {
  return take(input, {
    managedDataIdentifierIds: [, _json, `managedDataIdentifierIds`],
  });
};

/**
 * serializeAws_restJson1SensitivityInspectionTemplateIncludes
 */
const se_SensitivityInspectionTemplateIncludes = (
  input: SensitivityInspectionTemplateIncludes,
  context: __SerdeContext
): any => {
  return take(input, {
    allowListIds: [, _json, `allowListIds`],
    customDataIdentifierIds: [, _json, `customDataIdentifierIds`],
    managedDataIdentifierIds: [, _json, `managedDataIdentifierIds`],
  });
};

/**
 * serializeAws_restJson1SeverityLevel
 */
const se_SeverityLevel = (input: SeverityLevel, context: __SerdeContext): any => {
  return take(input, {
    occurrencesThreshold: [, , `occurrencesThreshold`],
    severity: [, , `severity`],
  });
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
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    values: [, _json, `values`],
  });
};

/**
 * serializeAws_restJson1SimpleScopeTerm
 */
const se_SimpleScopeTerm = (input: SimpleScopeTerm, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    values: [, _json, `values`],
  });
};

/**
 * serializeAws_restJson1SortCriteria
 */
const se_SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return take(input, {
    attributeName: [, , `attributeName`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1SuppressDataIdentifier
 */
const se_SuppressDataIdentifier = (input: SuppressDataIdentifier, context: __SerdeContext): any => {
  return take(input, {
    id: [, , `id`],
    type: [, , `type`],
  });
};

/**
 * serializeAws_restJson1TagCriterionForJob
 */
const se_TagCriterionForJob = (input: TagCriterionForJob, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    tagValues: [, (_) => se___listOfTagCriterionPairForJob(_, context), `tagValues`],
  });
};

/**
 * serializeAws_restJson1TagCriterionPairForJob
 */
const se_TagCriterionPairForJob = (input: TagCriterionPairForJob, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `key`],
    value: [, , `value`],
  });
};

// se_TagMap omitted.

/**
 * serializeAws_restJson1TagScopeTerm
 */
const se_TagScopeTerm = (input: TagScopeTerm, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    tagValues: [, (_) => se___listOfTagValuePair(_, context), `tagValues`],
    target: [, , `target`],
  });
};

/**
 * serializeAws_restJson1TagValuePair
 */
const se_TagValuePair = (input: TagValuePair, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `key`],
    value: [, , `value`],
  });
};

/**
 * serializeAws_restJson1UsageStatisticsFilter
 */
const se_UsageStatisticsFilter = (input: UsageStatisticsFilter, context: __SerdeContext): any => {
  return take(input, {
    comparator: [, , `comparator`],
    key: [, , `key`],
    values: [, _json, `values`],
  });
};

/**
 * serializeAws_restJson1UsageStatisticsSortBy
 */
const se_UsageStatisticsSortBy = (input: UsageStatisticsSortBy, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `key`],
    orderBy: [, , `orderBy`],
  });
};

/**
 * serializeAws_restJson1WeeklySchedule
 */
const se_WeeklySchedule = (input: WeeklySchedule, context: __SerdeContext): any => {
  return take(input, {
    dayOfWeek: [, , `dayOfWeek`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfAdminAccount
 */
const de___listOfAdminAccount = (output: any, context: __SerdeContext): AdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_S3BucketDefinitionForJob(entry, context);
    });
  return retVal;
};

// de___listOfS3BucketName omitted.

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
      return de_TagValuePair(entry, context);
    });
  return retVal;
};

// de___listOfUnavailabilityReasonCode omitted.

/**
 * deserializeAws_restJson1__listOfUnprocessedAccount
 */
const de___listOfUnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_UsageTotal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessControlList
 */
const de_AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return take(output, {
    allowsPublicReadAccess: [, __expectBoolean, `allowsPublicReadAccess`],
    allowsPublicWriteAccess: [, __expectBoolean, `allowsPublicWriteAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccountLevelPermissions
 */
const de_AccountLevelPermissions = (output: any, context: __SerdeContext): AccountLevelPermissions => {
  return take(output, {
    blockPublicAccess: [, (_: any) => de_BlockPublicAccess(_, context), `blockPublicAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1AdminAccount
 */
const de_AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1AllowListCriteria
 */
const de_AllowListCriteria = (output: any, context: __SerdeContext): AllowListCriteria => {
  return take(output, {
    regex: [, __expectString, `regex`],
    s3WordsList: [, (_: any) => de_S3WordsList(_, context), `s3WordsList`],
  }) as any;
};

/**
 * deserializeAws_restJson1AllowListStatus
 */
const de_AllowListStatus = (output: any, context: __SerdeContext): AllowListStatus => {
  return take(output, {
    code: [, __expectString, `code`],
    description: [, __expectString, `description`],
  }) as any;
};

/**
 * deserializeAws_restJson1AllowListSummary
 */
const de_AllowListSummary = (output: any, context: __SerdeContext): AllowListSummary => {
  return take(output, {
    arn: [, __expectString, `arn`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    updatedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1ApiCallDetails
 */
const de_ApiCallDetails = (output: any, context: __SerdeContext): ApiCallDetails => {
  return take(output, {
    api: [, __expectString, `api`],
    apiServiceName: [, __expectString, `apiServiceName`],
    firstSeen: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `firstSeen`],
    lastSeen: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastSeen`],
  }) as any;
};

/**
 * deserializeAws_restJson1AssumedRole
 */
const de_AssumedRole = (output: any, context: __SerdeContext): AssumedRole => {
  return take(output, {
    accessKeyId: [, __expectString, `accessKeyId`],
    accountId: [, __expectString, `accountId`],
    arn: [, __expectString, `arn`],
    principalId: [, __expectString, `principalId`],
    sessionContext: [, (_: any) => de_SessionContext(_, context), `sessionContext`],
  }) as any;
};

/**
 * deserializeAws_restJson1AwsAccount
 */
const de_AwsAccount = (output: any, context: __SerdeContext): AwsAccount => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    principalId: [, __expectString, `principalId`],
  }) as any;
};

/**
 * deserializeAws_restJson1AwsService
 */
const de_AwsService = (output: any, context: __SerdeContext): AwsService => {
  return take(output, {
    invokedBy: [, __expectString, `invokedBy`],
  }) as any;
};

/**
 * deserializeAws_restJson1BatchGetCustomDataIdentifierSummary
 */
const de_BatchGetCustomDataIdentifierSummary = (
  output: any,
  context: __SerdeContext
): BatchGetCustomDataIdentifierSummary => {
  return take(output, {
    arn: [, __expectString, `arn`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    deleted: [, __expectBoolean, `deleted`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1BlockPublicAccess
 */
const de_BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return take(output, {
    blockPublicAcls: [, __expectBoolean, `blockPublicAcls`],
    blockPublicPolicy: [, __expectBoolean, `blockPublicPolicy`],
    ignorePublicAcls: [, __expectBoolean, `ignorePublicAcls`],
    restrictPublicBuckets: [, __expectBoolean, `restrictPublicBuckets`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketCountByEffectivePermission
 */
const de_BucketCountByEffectivePermission = (
  output: any,
  context: __SerdeContext
): BucketCountByEffectivePermission => {
  return take(output, {
    publiclyAccessible: [, __expectLong, `publiclyAccessible`],
    publiclyReadable: [, __expectLong, `publiclyReadable`],
    publiclyWritable: [, __expectLong, `publiclyWritable`],
    unknown: [, __expectLong, `unknown`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketCountByEncryptionType
 */
const de_BucketCountByEncryptionType = (output: any, context: __SerdeContext): BucketCountByEncryptionType => {
  return take(output, {
    kmsManaged: [, __expectLong, `kmsManaged`],
    s3Managed: [, __expectLong, `s3Managed`],
    unencrypted: [, __expectLong, `unencrypted`],
    unknown: [, __expectLong, `unknown`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketCountBySharedAccessType
 */
const de_BucketCountBySharedAccessType = (output: any, context: __SerdeContext): BucketCountBySharedAccessType => {
  return take(output, {
    external: [, __expectLong, `external`],
    internal: [, __expectLong, `internal`],
    notShared: [, __expectLong, `notShared`],
    unknown: [, __expectLong, `unknown`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads
 */
const de_BucketCountPolicyAllowsUnencryptedObjectUploads = (
  output: any,
  context: __SerdeContext
): BucketCountPolicyAllowsUnencryptedObjectUploads => {
  return take(output, {
    allowsUnencryptedObjectUploads: [, __expectLong, `allowsUnencryptedObjectUploads`],
    deniesUnencryptedObjectUploads: [, __expectLong, `deniesUnencryptedObjectUploads`],
    unknown: [, __expectLong, `unknown`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketLevelPermissions
 */
const de_BucketLevelPermissions = (output: any, context: __SerdeContext): BucketLevelPermissions => {
  return take(output, {
    accessControlList: [, (_: any) => de_AccessControlList(_, context), `accessControlList`],
    blockPublicAccess: [, (_: any) => de_BlockPublicAccess(_, context), `blockPublicAccess`],
    bucketPolicy: [, (_: any) => de_BucketPolicy(_, context), `bucketPolicy`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketMetadata
 */
const de_BucketMetadata = (output: any, context: __SerdeContext): BucketMetadata => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    allowsUnencryptedObjectUploads: [, __expectString, `allowsUnencryptedObjectUploads`],
    bucketArn: [, __expectString, `bucketArn`],
    bucketCreatedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `bucketCreatedAt`],
    bucketName: [, __expectString, `bucketName`],
    classifiableObjectCount: [, __expectLong, `classifiableObjectCount`],
    classifiableSizeInBytes: [, __expectLong, `classifiableSizeInBytes`],
    errorCode: [, __expectString, `errorCode`],
    errorMessage: [, __expectString, `errorMessage`],
    jobDetails: [, (_: any) => de_JobDetails(_, context), `jobDetails`],
    lastAutomatedDiscoveryTime: [
      ,
      (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
      `lastAutomatedDiscoveryTime`,
    ],
    lastUpdated: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdated`],
    objectCount: [, __expectLong, `objectCount`],
    objectCountByEncryptionType: [
      ,
      (_: any) => de_ObjectCountByEncryptionType(_, context),
      `objectCountByEncryptionType`,
    ],
    publicAccess: [, (_: any) => de_BucketPublicAccess(_, context), `publicAccess`],
    region: [, __expectString, `region`],
    replicationDetails: [, (_: any) => de_ReplicationDetails(_, context), `replicationDetails`],
    sensitivityScore: [, __expectInt32, `sensitivityScore`],
    serverSideEncryption: [, (_: any) => de_BucketServerSideEncryption(_, context), `serverSideEncryption`],
    sharedAccess: [, __expectString, `sharedAccess`],
    sizeInBytes: [, __expectLong, `sizeInBytes`],
    sizeInBytesCompressed: [, __expectLong, `sizeInBytesCompressed`],
    tags: [, (_: any) => de___listOfKeyValuePair(_, context), `tags`],
    unclassifiableObjectCount: [, (_: any) => de_ObjectLevelStatistics(_, context), `unclassifiableObjectCount`],
    unclassifiableObjectSizeInBytes: [
      ,
      (_: any) => de_ObjectLevelStatistics(_, context),
      `unclassifiableObjectSizeInBytes`,
    ],
    versioning: [, __expectBoolean, `versioning`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketPermissionConfiguration
 */
const de_BucketPermissionConfiguration = (output: any, context: __SerdeContext): BucketPermissionConfiguration => {
  return take(output, {
    accountLevelPermissions: [, (_: any) => de_AccountLevelPermissions(_, context), `accountLevelPermissions`],
    bucketLevelPermissions: [, (_: any) => de_BucketLevelPermissions(_, context), `bucketLevelPermissions`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketPolicy
 */
const de_BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return take(output, {
    allowsPublicReadAccess: [, __expectBoolean, `allowsPublicReadAccess`],
    allowsPublicWriteAccess: [, __expectBoolean, `allowsPublicWriteAccess`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketPublicAccess
 */
const de_BucketPublicAccess = (output: any, context: __SerdeContext): BucketPublicAccess => {
  return take(output, {
    effectivePermission: [, __expectString, `effectivePermission`],
    permissionConfiguration: [, (_: any) => de_BucketPermissionConfiguration(_, context), `permissionConfiguration`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketServerSideEncryption
 */
const de_BucketServerSideEncryption = (output: any, context: __SerdeContext): BucketServerSideEncryption => {
  return take(output, {
    kmsMasterKeyId: [, __expectString, `kmsMasterKeyId`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1BucketStatisticsBySensitivity
 */
const de_BucketStatisticsBySensitivity = (output: any, context: __SerdeContext): BucketStatisticsBySensitivity => {
  return take(output, {
    classificationError: [, (_: any) => de_SensitivityAggregations(_, context), `classificationError`],
    notClassified: [, (_: any) => de_SensitivityAggregations(_, context), `notClassified`],
    notSensitive: [, (_: any) => de_SensitivityAggregations(_, context), `notSensitive`],
    sensitive: [, (_: any) => de_SensitivityAggregations(_, context), `sensitive`],
  }) as any;
};

/**
 * deserializeAws_restJson1Cell
 */
const de_Cell = (output: any, context: __SerdeContext): Cell => {
  return take(output, {
    cellReference: [, __expectString, `cellReference`],
    column: [, __expectLong, `column`],
    columnName: [, __expectString, `columnName`],
    row: [, __expectLong, `row`],
  }) as any;
};

/**
 * deserializeAws_restJson1Cells
 */
const de_Cells = (output: any, context: __SerdeContext): Cell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cell(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ClassificationDetails
 */
const de_ClassificationDetails = (output: any, context: __SerdeContext): ClassificationDetails => {
  return take(output, {
    detailedResultsLocation: [, __expectString, `detailedResultsLocation`],
    jobArn: [, __expectString, `jobArn`],
    jobId: [, __expectString, `jobId`],
    originType: [, __expectString, `originType`],
    result: [, (_: any) => de_ClassificationResult(_, context), `result`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClassificationExportConfiguration
 */
const de_ClassificationExportConfiguration = (
  output: any,
  context: __SerdeContext
): ClassificationExportConfiguration => {
  return take(output, {
    s3Destination: [, (_: any) => de_S3Destination(_, context), `s3Destination`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClassificationResult
 */
const de_ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return take(output, {
    additionalOccurrences: [, __expectBoolean, `additionalOccurrences`],
    customDataIdentifiers: [, (_: any) => de_CustomDataIdentifiers(_, context), `customDataIdentifiers`],
    mimeType: [, __expectString, `mimeType`],
    sensitiveData: [, (_: any) => de_SensitiveData(_, context), `sensitiveData`],
    sizeClassified: [, __expectLong, `sizeClassified`],
    status: [, (_: any) => de_ClassificationResultStatus(_, context), `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClassificationResultStatus
 */
const de_ClassificationResultStatus = (output: any, context: __SerdeContext): ClassificationResultStatus => {
  return take(output, {
    code: [, __expectString, `code`],
    reason: [, __expectString, `reason`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClassificationScopeSummary
 */
const de_ClassificationScopeSummary = (output: any, context: __SerdeContext): ClassificationScopeSummary => {
  return take(output, {
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1CriteriaBlockForJob
 */
const de_CriteriaBlockForJob = (output: any, context: __SerdeContext): CriteriaBlockForJob => {
  return take(output, {
    and: [, (_: any) => de___listOfCriteriaForJob(_, context), `and`],
  }) as any;
};

/**
 * deserializeAws_restJson1CriteriaForJob
 */
const de_CriteriaForJob = (output: any, context: __SerdeContext): CriteriaForJob => {
  return take(output, {
    simpleCriterion: [, (_: any) => de_SimpleCriterionForJob(_, context), `simpleCriterion`],
    tagCriterion: [, (_: any) => de_TagCriterionForJob(_, context), `tagCriterion`],
  }) as any;
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
  return take(output, {
    eq: [, _json, `eq`],
    eqExactMatch: [, _json, `eqExactMatch`],
    gt: [, __expectLong, `gt`],
    gte: [, __expectLong, `gte`],
    lt: [, __expectLong, `lt`],
    lte: [, __expectLong, `lte`],
    neq: [, _json, `neq`],
  }) as any;
};

/**
 * deserializeAws_restJson1CustomDataIdentifiers
 */
const de_CustomDataIdentifiers = (output: any, context: __SerdeContext): CustomDataIdentifiers => {
  return take(output, {
    detections: [, (_: any) => de_CustomDetections(_, context), `detections`],
    totalCount: [, __expectLong, `totalCount`],
  }) as any;
};

/**
 * deserializeAws_restJson1CustomDataIdentifierSummary
 */
const de_CustomDataIdentifierSummary = (output: any, context: __SerdeContext): CustomDataIdentifierSummary => {
  return take(output, {
    arn: [, __expectString, `arn`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1CustomDetection
 */
const de_CustomDetection = (output: any, context: __SerdeContext): CustomDetection => {
  return take(output, {
    arn: [, __expectString, `arn`],
    count: [, __expectLong, `count`],
    name: [, __expectString, `name`],
    occurrences: [, (_: any) => de_Occurrences(_, context), `occurrences`],
  }) as any;
};

/**
 * deserializeAws_restJson1CustomDetections
 */
const de_CustomDetections = (output: any, context: __SerdeContext): CustomDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomDetection(entry, context);
    });
  return retVal;
};

// de_DailySchedule omitted.

/**
 * deserializeAws_restJson1DefaultDetection
 */
const de_DefaultDetection = (output: any, context: __SerdeContext): DefaultDetection => {
  return take(output, {
    count: [, __expectLong, `count`],
    occurrences: [, (_: any) => de_Occurrences(_, context), `occurrences`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1DefaultDetections
 */
const de_DefaultDetections = (output: any, context: __SerdeContext): DefaultDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DefaultDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectedDataDetails
 */
const de_DetectedDataDetails = (output: any, context: __SerdeContext): DetectedDataDetails => {
  return take(output, {
    value: [, __expectString, `value`],
  }) as any;
};

/**
 * deserializeAws_restJson1Detection
 */
const de_Detection = (output: any, context: __SerdeContext): Detection => {
  return take(output, {
    arn: [, __expectString, `arn`],
    count: [, __expectLong, `count`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    suppressed: [, __expectBoolean, `suppressed`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return take(output, {
    domainName: [, __expectString, `domainName`],
  }) as any;
};

/**
 * deserializeAws_restJson1FederatedUser
 */
const de_FederatedUser = (output: any, context: __SerdeContext): FederatedUser => {
  return take(output, {
    accessKeyId: [, __expectString, `accessKeyId`],
    accountId: [, __expectString, `accountId`],
    arn: [, __expectString, `arn`],
    principalId: [, __expectString, `principalId`],
    sessionContext: [, (_: any) => de_SessionContext(_, context), `sessionContext`],
  }) as any;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    archived: [, __expectBoolean, `archived`],
    category: [, __expectString, `category`],
    classificationDetails: [, (_: any) => de_ClassificationDetails(_, context), `classificationDetails`],
    count: [, __expectLong, `count`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    description: [, __expectString, `description`],
    id: [, __expectString, `id`],
    partition: [, __expectString, `partition`],
    policyDetails: [, (_: any) => de_PolicyDetails(_, context), `policyDetails`],
    region: [, __expectString, `region`],
    resourcesAffected: [, (_: any) => de_ResourcesAffected(_, context), `resourcesAffected`],
    sample: [, __expectBoolean, `sample`],
    schemaVersion: [, __expectString, `schemaVersion`],
    severity: [, (_: any) => de_Severity(_, context), `severity`],
    title: [, __expectString, `title`],
    type: [, __expectString, `type`],
    updatedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1FindingAction
 */
const de_FindingAction = (output: any, context: __SerdeContext): FindingAction => {
  return take(output, {
    actionType: [, __expectString, `actionType`],
    apiCallDetails: [, (_: any) => de_ApiCallDetails(_, context), `apiCallDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1FindingActor
 */
const de_FindingActor = (output: any, context: __SerdeContext): FindingActor => {
  return take(output, {
    domainDetails: [, (_: any) => de_DomainDetails(_, context), `domainDetails`],
    ipAddressDetails: [, (_: any) => de_IpAddressDetails(_, context), `ipAddressDetails`],
    userIdentity: [, (_: any) => de_UserIdentity(_, context), `userIdentity`],
  }) as any;
};

/**
 * deserializeAws_restJson1FindingCriteria
 */
const de_FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return take(output, {
    criterion: [, (_: any) => de_Criterion(_, context), `criterion`],
  }) as any;
};

/**
 * deserializeAws_restJson1FindingsFilterListItem
 */
const de_FindingsFilterListItem = (output: any, context: __SerdeContext): FindingsFilterListItem => {
  return take(output, {
    action: [, __expectString, `action`],
    arn: [, __expectString, `arn`],
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
    tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1GroupCount
 */
const de_GroupCount = (output: any, context: __SerdeContext): GroupCount => {
  return take(output, {
    count: [, __expectLong, `count`],
    groupKey: [, __expectString, `groupKey`],
  }) as any;
};

/**
 * deserializeAws_restJson1IamUser
 */
const de_IamUser = (output: any, context: __SerdeContext): IamUser => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    arn: [, __expectString, `arn`],
    principalId: [, __expectString, `principalId`],
    userName: [, __expectString, `userName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    invitationId: [, __expectString, `invitationId`],
    invitedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `invitedAt`],
    relationshipStatus: [, __expectString, `relationshipStatus`],
  }) as any;
};

/**
 * deserializeAws_restJson1IpAddressDetails
 */
const de_IpAddressDetails = (output: any, context: __SerdeContext): IpAddressDetails => {
  return take(output, {
    ipAddressV4: [, __expectString, `ipAddressV4`],
    ipCity: [, (_: any) => de_IpCity(_, context), `ipCity`],
    ipCountry: [, (_: any) => de_IpCountry(_, context), `ipCountry`],
    ipGeoLocation: [, (_: any) => de_IpGeoLocation(_, context), `ipGeoLocation`],
    ipOwner: [, (_: any) => de_IpOwner(_, context), `ipOwner`],
  }) as any;
};

/**
 * deserializeAws_restJson1IpCity
 */
const de_IpCity = (output: any, context: __SerdeContext): IpCity => {
  return take(output, {
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1IpCountry
 */
const de_IpCountry = (output: any, context: __SerdeContext): IpCountry => {
  return take(output, {
    code: [, __expectString, `code`],
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1IpGeoLocation
 */
const de_IpGeoLocation = (output: any, context: __SerdeContext): IpGeoLocation => {
  return take(output, {
    lat: [, __limitedParseDouble, `lat`],
    lon: [, __limitedParseDouble, `lon`],
  }) as any;
};

/**
 * deserializeAws_restJson1IpOwner
 */
const de_IpOwner = (output: any, context: __SerdeContext): IpOwner => {
  return take(output, {
    asn: [, __expectString, `asn`],
    asnOrg: [, __expectString, `asnOrg`],
    isp: [, __expectString, `isp`],
    org: [, __expectString, `org`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return take(output, {
    isDefinedInJob: [, __expectString, `isDefinedInJob`],
    isMonitoredByJob: [, __expectString, `isMonitoredByJob`],
    lastJobId: [, __expectString, `lastJobId`],
    lastJobRunTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastJobRunTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobScheduleFrequency
 */
const de_JobScheduleFrequency = (output: any, context: __SerdeContext): JobScheduleFrequency => {
  return take(output, {
    dailySchedule: [, _json, `dailySchedule`],
    monthlySchedule: [, (_: any) => de_MonthlySchedule(_, context), `monthlySchedule`],
    weeklySchedule: [, (_: any) => de_WeeklySchedule(_, context), `weeklySchedule`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobScopeTerm
 */
const de_JobScopeTerm = (output: any, context: __SerdeContext): JobScopeTerm => {
  return take(output, {
    simpleScopeTerm: [, (_: any) => de_SimpleScopeTerm(_, context), `simpleScopeTerm`],
    tagScopeTerm: [, (_: any) => de_TagScopeTerm(_, context), `tagScopeTerm`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobScopingBlock
 */
const de_JobScopingBlock = (output: any, context: __SerdeContext): JobScopingBlock => {
  return take(output, {
    and: [, (_: any) => de___listOfJobScopeTerm(_, context), `and`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return take(output, {
    bucketCriteria: [, (_: any) => de_S3BucketCriteriaForJob(_, context), `bucketCriteria`],
    bucketDefinitions: [, (_: any) => de___listOfS3BucketDefinitionForJob(_, context), `bucketDefinitions`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    jobId: [, __expectString, `jobId`],
    jobStatus: [, __expectString, `jobStatus`],
    jobType: [, __expectString, `jobType`],
    lastRunErrorStatus: [, (_: any) => de_LastRunErrorStatus(_, context), `lastRunErrorStatus`],
    name: [, __expectString, `name`],
    userPausedDetails: [, (_: any) => de_UserPausedDetails(_, context), `userPausedDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1KeyValuePair
 */
const de_KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return take(output, {
    key: [, __expectString, `key`],
    value: [, __expectString, `value`],
  }) as any;
};

/**
 * deserializeAws_restJson1KeyValuePairList
 */
const de_KeyValuePairList = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LastRunErrorStatus
 */
const de_LastRunErrorStatus = (output: any, context: __SerdeContext): LastRunErrorStatus => {
  return take(output, {
    code: [, __expectString, `code`],
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedDataIdentifierSummary
 */
const de_ManagedDataIdentifierSummary = (output: any, context: __SerdeContext): ManagedDataIdentifierSummary => {
  return take(output, {
    category: [, __expectString, `category`],
    id: [, __expectString, `id`],
  }) as any;
};

/**
 * deserializeAws_restJson1MatchingBucket
 */
const de_MatchingBucket = (output: any, context: __SerdeContext): MatchingBucket => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    bucketName: [, __expectString, `bucketName`],
    classifiableObjectCount: [, __expectLong, `classifiableObjectCount`],
    classifiableSizeInBytes: [, __expectLong, `classifiableSizeInBytes`],
    errorCode: [, __expectString, `errorCode`],
    errorMessage: [, __expectString, `errorMessage`],
    jobDetails: [, (_: any) => de_JobDetails(_, context), `jobDetails`],
    lastAutomatedDiscoveryTime: [
      ,
      (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
      `lastAutomatedDiscoveryTime`,
    ],
    objectCount: [, __expectLong, `objectCount`],
    objectCountByEncryptionType: [
      ,
      (_: any) => de_ObjectCountByEncryptionType(_, context),
      `objectCountByEncryptionType`,
    ],
    sensitivityScore: [, __expectInt32, `sensitivityScore`],
    sizeInBytes: [, __expectLong, `sizeInBytes`],
    sizeInBytesCompressed: [, __expectLong, `sizeInBytesCompressed`],
    unclassifiableObjectCount: [, (_: any) => de_ObjectLevelStatistics(_, context), `unclassifiableObjectCount`],
    unclassifiableObjectSizeInBytes: [
      ,
      (_: any) => de_ObjectLevelStatistics(_, context),
      `unclassifiableObjectSizeInBytes`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1MatchingResource
 */
const de_MatchingResource = (output: any, context: __SerdeContext): MatchingResource => {
  return take(output, {
    matchingBucket: [, (_: any) => de_MatchingBucket(_, context), `matchingBucket`],
  }) as any;
};

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    administratorAccountId: [, __expectString, `administratorAccountId`],
    arn: [, __expectString, `arn`],
    email: [, __expectString, `email`],
    invitedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `invitedAt`],
    masterAccountId: [, __expectString, `masterAccountId`],
    relationshipStatus: [, __expectString, `relationshipStatus`],
    tags: [, _json, `tags`],
    updatedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `updatedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1MonthlySchedule
 */
const de_MonthlySchedule = (output: any, context: __SerdeContext): MonthlySchedule => {
  return take(output, {
    dayOfMonth: [, __expectInt32, `dayOfMonth`],
  }) as any;
};

/**
 * deserializeAws_restJson1ObjectCountByEncryptionType
 */
const de_ObjectCountByEncryptionType = (output: any, context: __SerdeContext): ObjectCountByEncryptionType => {
  return take(output, {
    customerManaged: [, __expectLong, `customerManaged`],
    kmsManaged: [, __expectLong, `kmsManaged`],
    s3Managed: [, __expectLong, `s3Managed`],
    unencrypted: [, __expectLong, `unencrypted`],
    unknown: [, __expectLong, `unknown`],
  }) as any;
};

/**
 * deserializeAws_restJson1ObjectLevelStatistics
 */
const de_ObjectLevelStatistics = (output: any, context: __SerdeContext): ObjectLevelStatistics => {
  return take(output, {
    fileType: [, __expectLong, `fileType`],
    storageClass: [, __expectLong, `storageClass`],
    total: [, __expectLong, `total`],
  }) as any;
};

/**
 * deserializeAws_restJson1Occurrences
 */
const de_Occurrences = (output: any, context: __SerdeContext): Occurrences => {
  return take(output, {
    cells: [, (_: any) => de_Cells(_, context), `cells`],
    lineRanges: [, (_: any) => de_Ranges(_, context), `lineRanges`],
    offsetRanges: [, (_: any) => de_Ranges(_, context), `offsetRanges`],
    pages: [, (_: any) => de_Pages(_, context), `pages`],
    records: [, (_: any) => de_Records(_, context), `records`],
  }) as any;
};

/**
 * deserializeAws_restJson1Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
  return take(output, {
    lineRange: [, (_: any) => de_Range(_, context), `lineRange`],
    offsetRange: [, (_: any) => de_Range(_, context), `offsetRange`],
    pageNumber: [, __expectLong, `pageNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1Pages
 */
const de_Pages = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Page(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyDetails
 */
const de_PolicyDetails = (output: any, context: __SerdeContext): PolicyDetails => {
  return take(output, {
    action: [, (_: any) => de_FindingAction(_, context), `action`],
    actor: [, (_: any) => de_FindingActor(_, context), `actor`],
  }) as any;
};

/**
 * deserializeAws_restJson1Range
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  return take(output, {
    end: [, __expectLong, `end`],
    start: [, __expectLong, `start`],
    startColumn: [, __expectLong, `startColumn`],
  }) as any;
};

/**
 * deserializeAws_restJson1Ranges
 */
const de_Ranges = (output: any, context: __SerdeContext): Range[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Range(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return take(output, {
    jsonPath: [, __expectString, `jsonPath`],
    recordIndex: [, __expectLong, `recordIndex`],
  }) as any;
};

/**
 * deserializeAws_restJson1Records
 */
const de_Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReplicationDetails
 */
const de_ReplicationDetails = (output: any, context: __SerdeContext): ReplicationDetails => {
  return take(output, {
    replicated: [, __expectBoolean, `replicated`],
    replicatedExternally: [, __expectBoolean, `replicatedExternally`],
    replicationAccounts: [, _json, `replicationAccounts`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceProfileArtifact
 */
const de_ResourceProfileArtifact = (output: any, context: __SerdeContext): ResourceProfileArtifact => {
  return take(output, {
    arn: [, __expectString, `arn`],
    classificationResultStatus: [, __expectString, `classificationResultStatus`],
    sensitive: [, __expectBoolean, `sensitive`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourcesAffected
 */
const de_ResourcesAffected = (output: any, context: __SerdeContext): ResourcesAffected => {
  return take(output, {
    s3Bucket: [, (_: any) => de_S3Bucket(_, context), `s3Bucket`],
    s3Object: [, (_: any) => de_S3Object(_, context), `s3Object`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceStatistics
 */
const de_ResourceStatistics = (output: any, context: __SerdeContext): ResourceStatistics => {
  return take(output, {
    totalBytesClassified: [, __expectLong, `totalBytesClassified`],
    totalDetections: [, __expectLong, `totalDetections`],
    totalDetectionsSuppressed: [, __expectLong, `totalDetectionsSuppressed`],
    totalItemsClassified: [, __expectLong, `totalItemsClassified`],
    totalItemsSensitive: [, __expectLong, `totalItemsSensitive`],
    totalItemsSkipped: [, __expectLong, `totalItemsSkipped`],
    totalItemsSkippedInvalidEncryption: [, __expectLong, `totalItemsSkippedInvalidEncryption`],
    totalItemsSkippedInvalidKms: [, __expectLong, `totalItemsSkippedInvalidKms`],
    totalItemsSkippedPermissionDenied: [, __expectLong, `totalItemsSkippedPermissionDenied`],
  }) as any;
};

/**
 * deserializeAws_restJson1RevealConfiguration
 */
const de_RevealConfiguration = (output: any, context: __SerdeContext): RevealConfiguration => {
  return take(output, {
    kmsKeyId: [, __expectString, `kmsKeyId`],
    status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3Bucket
 */
const de_S3Bucket = (output: any, context: __SerdeContext): S3Bucket => {
  return take(output, {
    allowsUnencryptedObjectUploads: [, __expectString, `allowsUnencryptedObjectUploads`],
    arn: [, __expectString, `arn`],
    createdAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdAt`],
    defaultServerSideEncryption: [, (_: any) => de_ServerSideEncryption(_, context), `defaultServerSideEncryption`],
    name: [, __expectString, `name`],
    owner: [, (_: any) => de_S3BucketOwner(_, context), `owner`],
    publicAccess: [, (_: any) => de_BucketPublicAccess(_, context), `publicAccess`],
    tags: [, (_: any) => de_KeyValuePairList(_, context), `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketCriteriaForJob
 */
const de_S3BucketCriteriaForJob = (output: any, context: __SerdeContext): S3BucketCriteriaForJob => {
  return take(output, {
    excludes: [, (_: any) => de_CriteriaBlockForJob(_, context), `excludes`],
    includes: [, (_: any) => de_CriteriaBlockForJob(_, context), `includes`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketDefinitionForJob
 */
const de_S3BucketDefinitionForJob = (output: any, context: __SerdeContext): S3BucketDefinitionForJob => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    buckets: [, _json, `buckets`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketOwner
 */
const de_S3BucketOwner = (output: any, context: __SerdeContext): S3BucketOwner => {
  return take(output, {
    displayName: [, __expectString, `displayName`],
    id: [, __expectString, `id`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3ClassificationScope
 */
const de_S3ClassificationScope = (output: any, context: __SerdeContext): S3ClassificationScope => {
  return take(output, {
    excludes: [, (_: any) => de_S3ClassificationScopeExclusion(_, context), `excludes`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3ClassificationScopeExclusion
 */
const de_S3ClassificationScopeExclusion = (output: any, context: __SerdeContext): S3ClassificationScopeExclusion => {
  return take(output, {
    bucketNames: [, _json, `bucketNames`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return take(output, {
    bucketName: [, __expectString, `bucketName`],
    keyPrefix: [, __expectString, `keyPrefix`],
    kmsKeyArn: [, __expectString, `kmsKeyArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3JobDefinition
 */
const de_S3JobDefinition = (output: any, context: __SerdeContext): S3JobDefinition => {
  return take(output, {
    bucketCriteria: [, (_: any) => de_S3BucketCriteriaForJob(_, context), `bucketCriteria`],
    bucketDefinitions: [, (_: any) => de___listOfS3BucketDefinitionForJob(_, context), `bucketDefinitions`],
    scoping: [, (_: any) => de_Scoping(_, context), `scoping`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return take(output, {
    bucketArn: [, __expectString, `bucketArn`],
    eTag: [, __expectString, `eTag`],
    extension: [, __expectString, `extension`],
    key: [, __expectString, `key`],
    lastModified: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastModified`],
    path: [, __expectString, `path`],
    publicAccess: [, __expectBoolean, `publicAccess`],
    serverSideEncryption: [, (_: any) => de_ServerSideEncryption(_, context), `serverSideEncryption`],
    size: [, __expectLong, `size`],
    storageClass: [, __expectString, `storageClass`],
    tags: [, (_: any) => de_KeyValuePairList(_, context), `tags`],
    versionId: [, __expectString, `versionId`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3WordsList
 */
const de_S3WordsList = (output: any, context: __SerdeContext): S3WordsList => {
  return take(output, {
    bucketName: [, __expectString, `bucketName`],
    objectKey: [, __expectString, `objectKey`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scoping
 */
const de_Scoping = (output: any, context: __SerdeContext): Scoping => {
  return take(output, {
    excludes: [, (_: any) => de_JobScopingBlock(_, context), `excludes`],
    includes: [, (_: any) => de_JobScopingBlock(_, context), `includes`],
  }) as any;
};

/**
 * deserializeAws_restJson1SecurityHubConfiguration
 */
const de_SecurityHubConfiguration = (output: any, context: __SerdeContext): SecurityHubConfiguration => {
  return take(output, {
    publishClassificationFindings: [, __expectBoolean, `publishClassificationFindings`],
    publishPolicyFindings: [, __expectBoolean, `publishPolicyFindings`],
  }) as any;
};

/**
 * deserializeAws_restJson1SensitiveData
 */
const de_SensitiveData = (output: any, context: __SerdeContext): SensitiveDataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SensitiveDataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SensitiveDataItem
 */
const de_SensitiveDataItem = (output: any, context: __SerdeContext): SensitiveDataItem => {
  return take(output, {
    category: [, __expectString, `category`],
    detections: [, (_: any) => de_DefaultDetections(_, context), `detections`],
    totalCount: [, __expectLong, `totalCount`],
  }) as any;
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
  return take(output, {
    classifiableSizeInBytes: [, __expectLong, `classifiableSizeInBytes`],
    publiclyAccessibleCount: [, __expectLong, `publiclyAccessibleCount`],
    totalCount: [, __expectLong, `totalCount`],
    totalSizeInBytes: [, __expectLong, `totalSizeInBytes`],
  }) as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplateExcludes
 */
const de_SensitivityInspectionTemplateExcludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateExcludes => {
  return take(output, {
    managedDataIdentifierIds: [, _json, `managedDataIdentifierIds`],
  }) as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplateIncludes
 */
const de_SensitivityInspectionTemplateIncludes = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplateIncludes => {
  return take(output, {
    allowListIds: [, _json, `allowListIds`],
    customDataIdentifierIds: [, _json, `customDataIdentifierIds`],
    managedDataIdentifierIds: [, _json, `managedDataIdentifierIds`],
  }) as any;
};

/**
 * deserializeAws_restJson1SensitivityInspectionTemplatesEntry
 */
const de_SensitivityInspectionTemplatesEntry = (
  output: any,
  context: __SerdeContext
): SensitivityInspectionTemplatesEntry => {
  return take(output, {
    id: [, __expectString, `id`],
    name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ServerSideEncryption
 */
const de_ServerSideEncryption = (output: any, context: __SerdeContext): ServerSideEncryption => {
  return take(output, {
    encryptionType: [, __expectString, `encryptionType`],
    kmsMasterKeyId: [, __expectString, `kmsMasterKeyId`],
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceLimit
 */
const de_ServiceLimit = (output: any, context: __SerdeContext): ServiceLimit => {
  return take(output, {
    isServiceLimited: [, __expectBoolean, `isServiceLimited`],
    unit: [, __expectString, `unit`],
    value: [, __expectLong, `value`],
  }) as any;
};

/**
 * deserializeAws_restJson1SessionContext
 */
const de_SessionContext = (output: any, context: __SerdeContext): SessionContext => {
  return take(output, {
    attributes: [, (_: any) => de_SessionContextAttributes(_, context), `attributes`],
    sessionIssuer: [, (_: any) => de_SessionIssuer(_, context), `sessionIssuer`],
  }) as any;
};

/**
 * deserializeAws_restJson1SessionContextAttributes
 */
const de_SessionContextAttributes = (output: any, context: __SerdeContext): SessionContextAttributes => {
  return take(output, {
    creationDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationDate`],
    mfaAuthenticated: [, __expectBoolean, `mfaAuthenticated`],
  }) as any;
};

/**
 * deserializeAws_restJson1SessionIssuer
 */
const de_SessionIssuer = (output: any, context: __SerdeContext): SessionIssuer => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    arn: [, __expectString, `arn`],
    principalId: [, __expectString, `principalId`],
    type: [, __expectString, `type`],
    userName: [, __expectString, `userName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Severity
 */
const de_Severity = (output: any, context: __SerdeContext): Severity => {
  return take(output, {
    description: [, __expectString, `description`],
    score: [, __expectLong, `score`],
  }) as any;
};

/**
 * deserializeAws_restJson1SeverityLevel
 */
const de_SeverityLevel = (output: any, context: __SerdeContext): SeverityLevel => {
  return take(output, {
    occurrencesThreshold: [, __expectLong, `occurrencesThreshold`],
    severity: [, __expectString, `severity`],
  }) as any;
};

/**
 * deserializeAws_restJson1SeverityLevelList
 */
const de_SeverityLevelList = (output: any, context: __SerdeContext): SeverityLevel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SeverityLevel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimpleCriterionForJob
 */
const de_SimpleCriterionForJob = (output: any, context: __SerdeContext): SimpleCriterionForJob => {
  return take(output, {
    comparator: [, __expectString, `comparator`],
    key: [, __expectString, `key`],
    values: [, _json, `values`],
  }) as any;
};

/**
 * deserializeAws_restJson1SimpleScopeTerm
 */
const de_SimpleScopeTerm = (output: any, context: __SerdeContext): SimpleScopeTerm => {
  return take(output, {
    comparator: [, __expectString, `comparator`],
    key: [, __expectString, `key`],
    values: [, _json, `values`],
  }) as any;
};

/**
 * deserializeAws_restJson1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return take(output, {
    approximateNumberOfObjectsToProcess: [, __limitedParseDouble, `approximateNumberOfObjectsToProcess`],
    numberOfRuns: [, __limitedParseDouble, `numberOfRuns`],
  }) as any;
};

/**
 * deserializeAws_restJson1TagCriterionForJob
 */
const de_TagCriterionForJob = (output: any, context: __SerdeContext): TagCriterionForJob => {
  return take(output, {
    comparator: [, __expectString, `comparator`],
    tagValues: [, (_: any) => de___listOfTagCriterionPairForJob(_, context), `tagValues`],
  }) as any;
};

/**
 * deserializeAws_restJson1TagCriterionPairForJob
 */
const de_TagCriterionPairForJob = (output: any, context: __SerdeContext): TagCriterionPairForJob => {
  return take(output, {
    key: [, __expectString, `key`],
    value: [, __expectString, `value`],
  }) as any;
};

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TagScopeTerm
 */
const de_TagScopeTerm = (output: any, context: __SerdeContext): TagScopeTerm => {
  return take(output, {
    comparator: [, __expectString, `comparator`],
    key: [, __expectString, `key`],
    tagValues: [, (_: any) => de___listOfTagValuePair(_, context), `tagValues`],
    target: [, __expectString, `target`],
  }) as any;
};

/**
 * deserializeAws_restJson1TagValuePair
 */
const de_TagValuePair = (output: any, context: __SerdeContext): TagValuePair => {
  return take(output, {
    key: [, __expectString, `key`],
    value: [, __expectString, `value`],
  }) as any;
};

/**
 * deserializeAws_restJson1UnprocessedAccount
 */
const de_UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    errorCode: [, __expectString, `errorCode`],
    errorMessage: [, __expectString, `errorMessage`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageByAccount
 */
const de_UsageByAccount = (output: any, context: __SerdeContext): UsageByAccount => {
  return take(output, {
    currency: [, __expectString, `currency`],
    estimatedCost: [, __expectString, `estimatedCost`],
    serviceLimit: [, (_: any) => de_ServiceLimit(_, context), `serviceLimit`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageRecord
 */
const de_UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    automatedDiscoveryFreeTrialStartDate: [
      ,
      (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
      `automatedDiscoveryFreeTrialStartDate`,
    ],
    freeTrialStartDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `freeTrialStartDate`],
    usage: [, (_: any) => de___listOfUsageByAccount(_, context), `usage`],
  }) as any;
};

/**
 * deserializeAws_restJson1UsageTotal
 */
const de_UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return take(output, {
    currency: [, __expectString, `currency`],
    estimatedCost: [, __expectString, `estimatedCost`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserIdentity
 */
const de_UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return take(output, {
    assumedRole: [, (_: any) => de_AssumedRole(_, context), `assumedRole`],
    awsAccount: [, (_: any) => de_AwsAccount(_, context), `awsAccount`],
    awsService: [, (_: any) => de_AwsService(_, context), `awsService`],
    federatedUser: [, (_: any) => de_FederatedUser(_, context), `federatedUser`],
    iamUser: [, (_: any) => de_IamUser(_, context), `iamUser`],
    root: [, (_: any) => de_UserIdentityRoot(_, context), `root`],
    type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserIdentityRoot
 */
const de_UserIdentityRoot = (output: any, context: __SerdeContext): UserIdentityRoot => {
  return take(output, {
    accountId: [, __expectString, `accountId`],
    arn: [, __expectString, `arn`],
    principalId: [, __expectString, `principalId`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserPausedDetails
 */
const de_UserPausedDetails = (output: any, context: __SerdeContext): UserPausedDetails => {
  return take(output, {
    jobExpiresAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `jobExpiresAt`],
    jobImminentExpirationHealthEventArn: [, __expectString, `jobImminentExpirationHealthEventArn`],
    jobPausedAt: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `jobPausedAt`],
  }) as any;
};

/**
 * deserializeAws_restJson1WeeklySchedule
 */
const de_WeeklySchedule = (output: any, context: __SerdeContext): WeeklySchedule => {
  return take(output, {
    dayOfWeek: [, __expectString, `dayOfWeek`],
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
