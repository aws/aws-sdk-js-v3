// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "../commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "../commands/CancelPolicyGenerationCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "../commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "../commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "../commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "../commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "../commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "../commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "../commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "../commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "../commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "../commands/GetFindingCommand";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "../commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "../commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "../commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "../commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "../commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "../commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "../commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "../commands/ValidatePolicyCommand";
import { AccessAnalyzerServiceException as __BaseException } from "../models/AccessAnalyzerServiceException";
import {
  AccessDeniedException,
  AccessPreview,
  AccessPreviewFinding,
  AccessPreviewStatusReason,
  AccessPreviewSummary,
  AclGrantee,
  AnalyzedResource,
  AnalyzedResourceSummary,
  AnalyzerSummary,
  ArchiveRuleSummary,
  CloudTrailDetails,
  CloudTrailProperties,
  Configuration,
  ConflictException,
  Criterion,
  EbsSnapshotConfiguration,
  EcrRepositoryConfiguration,
  EfsFileSystemConfiguration,
  Finding,
  FindingSource,
  FindingSourceDetail,
  FindingSummary,
  GeneratedPolicy,
  GeneratedPolicyProperties,
  GeneratedPolicyResult,
  IamRoleConfiguration,
  InlineArchiveRule,
  InternalServerException,
  InternetConfiguration,
  JobDetails,
  JobError,
  KmsGrantConfiguration,
  KmsGrantConstraints,
  KmsGrantOperation,
  KmsKeyConfiguration,
  Location,
  NetworkOriginConfiguration,
  PathElement,
  PolicyGeneration,
  PolicyGenerationDetails,
  Position,
  RdsDbClusterSnapshotAttributeValue,
  RdsDbClusterSnapshotConfiguration,
  RdsDbSnapshotAttributeValue,
  RdsDbSnapshotConfiguration,
  ResourceNotFoundException,
  S3AccessPointConfiguration,
  S3BucketAclGrantConfiguration,
  S3BucketConfiguration,
  S3PublicAccessBlockConfiguration,
  SecretsManagerSecretConfiguration,
  ServiceQuotaExceededException,
  SnsTopicConfiguration,
  SortCriteria,
  Span,
  SqsQueueConfiguration,
  StatusReason,
  Substring,
  ThrottlingException,
  Trail,
  TrailProperties,
  ValidatePolicyFinding,
  ValidationException,
  ValidationExceptionField,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1ApplyArchiveRuleCommand
 */
export const se_ApplyArchiveRuleCommand = async (
  input: ApplyArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/archive-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
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
 * serializeAws_restJson1CancelPolicyGenerationCommand
 */
export const se_CancelPolicyGenerationCommand = async (
  input: CancelPolicyGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
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
 * serializeAws_restJson1CreateAccessPreviewCommand
 */
export const se_CreateAccessPreviewCommand = async (
  input: CreateAccessPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurations != null && { configurations: se_ConfigurationsMap(input.configurations, context) }),
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
 * serializeAws_restJson1CreateAnalyzerCommand
 */
export const se_CreateAnalyzerCommand = async (
  input: CreateAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerName != null && { analyzerName: input.analyzerName }),
    ...(input.archiveRules != null && { archiveRules: se_InlineArchiveRulesList(input.archiveRules, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1CreateArchiveRuleCommand
 */
export const se_CreateArchiveRuleCommand = async (
  input: CreateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}/archive-rule";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.filter != null && { filter: se_FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
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
 * serializeAws_restJson1DeleteAnalyzerCommand
 */
export const se_DeleteAnalyzerCommand = async (
  input: DeleteAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1DeleteArchiveRuleCommand
 */
export const se_DeleteArchiveRuleCommand = async (
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ruleName", () => input.ruleName!, "{ruleName}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1GetAccessPreviewCommand
 */
export const se_GetAccessPreviewCommand = async (
  input: GetAccessPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview/{accessPreviewId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "accessPreviewId",
    () => input.accessPreviewId!,
    "{accessPreviewId}",
    false
  );
  const query: any = map({
    analyzerArn: [, __expectNonNull(input.analyzerArn!, `analyzerArn`)],
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
 * serializeAws_restJson1GetAnalyzedResourceCommand
 */
export const se_GetAnalyzedResourceCommand = async (
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzed-resource";
  const query: any = map({
    analyzerArn: [, __expectNonNull(input.analyzerArn!, `analyzerArn`)],
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
 * serializeAws_restJson1GetAnalyzerCommand
 */
export const se_GetAnalyzerCommand = async (
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
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
 * serializeAws_restJson1GetArchiveRuleCommand
 */
export const se_GetArchiveRuleCommand = async (
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ruleName", () => input.ruleName!, "{ruleName}", false);
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
 * serializeAws_restJson1GetFindingCommand
 */
export const se_GetFindingCommand = async (
  input: GetFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    analyzerArn: [, __expectNonNull(input.analyzerArn!, `analyzerArn`)],
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
 * serializeAws_restJson1GetGeneratedPolicyCommand
 */
export const se_GetGeneratedPolicyCommand = async (
  input: GetGeneratedPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    includeResourcePlaceholders: [
      () => input.includeResourcePlaceholders !== void 0,
      () => input.includeResourcePlaceholders!.toString(),
    ],
    includeServiceLevelTemplate: [
      () => input.includeServiceLevelTemplate !== void 0,
      () => input.includeServiceLevelTemplate!.toString(),
    ],
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
 * serializeAws_restJson1ListAccessPreviewFindingsCommand
 */
export const se_ListAccessPreviewFindingsCommand = async (
  input: ListAccessPreviewFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview/{accessPreviewId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "accessPreviewId",
    () => input.accessPreviewId!,
    "{accessPreviewId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    ...(input.filter != null && { filter: se_FilterCriteriaMap(input.filter, context) }),
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
 * serializeAws_restJson1ListAccessPreviewsCommand
 */
export const se_ListAccessPreviewsCommand = async (
  input: ListAccessPreviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview";
  const query: any = map({
    analyzerArn: [, __expectNonNull(input.analyzerArn!, `analyzerArn`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListAnalyzedResourcesCommand
 */
export const se_ListAnalyzedResourcesCommand = async (
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzed-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
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
 * serializeAws_restJson1ListAnalyzersCommand
 */
export const se_ListAnalyzersCommand = async (
  input: ListAnalyzersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    type: [, input.type!],
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
 * serializeAws_restJson1ListArchiveRulesCommand
 */
export const se_ListArchiveRulesCommand = async (
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}/archive-rule";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    ...(input.filter != null && { filter: se_FilterCriteriaMap(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sort != null && { sort: se_SortCriteria(input.sort, context) }),
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
 * serializeAws_restJson1ListPolicyGenerationsCommand
 */
export const se_ListPolicyGenerationsCommand = async (
  input: ListPolicyGenerationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation";
  const query: any = map({
    principalArn: [, input.principalArn!],
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
 * serializeAws_restJson1StartPolicyGenerationCommand
 */
export const se_StartPolicyGenerationCommand = async (
  input: StartPolicyGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.cloudTrailDetails != null && {
      cloudTrailDetails: se_CloudTrailDetails(input.cloudTrailDetails, context),
    }),
    ...(input.policyGenerationDetails != null && {
      policyGenerationDetails: se_PolicyGenerationDetails(input.policyGenerationDetails, context),
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
 * serializeAws_restJson1StartResourceScanCommand
 */
export const se_StartResourceScanCommand = async (
  input: StartResourceScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource/scan";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceOwnerAccount != null && { resourceOwnerAccount: input.resourceOwnerAccount }),
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
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1UpdateArchiveRuleCommand
 */
export const se_UpdateArchiveRuleCommand = async (
  input: UpdateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analyzerName",
    () => input.analyzerName!,
    "{analyzerName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.filter != null && { filter: se_FilterCriteriaMap(input.filter, context) }),
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
 * serializeAws_restJson1UpdateFindingsCommand
 */
export const se_UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn != null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.ids != null && { ids: se_FindingIdList(input.ids, context) }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
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
 * serializeAws_restJson1ValidatePolicyCommand
 */
export const se_ValidatePolicyCommand = async (
  input: ValidatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/validation";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.locale != null && { locale: input.locale }),
    ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
    ...(input.policyType != null && { policyType: input.policyType }),
    ...(input.validatePolicyResourceType != null && { validatePolicyResourceType: input.validatePolicyResourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1ApplyArchiveRuleCommand
 */
export const de_ApplyArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ApplyArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ApplyArchiveRuleCommandError
 */
const de_ApplyArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1CancelPolicyGenerationCommand
 */
export const de_CancelPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelPolicyGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelPolicyGenerationCommandError
 */
const de_CancelPolicyGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1CreateAccessPreviewCommand
 */
export const de_CreateAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAccessPreviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessPreviewCommandError
 */
const de_CreateAccessPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1CreateAnalyzerCommand
 */
export const de_CreateAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAnalyzerCommandError(output, context);
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
 * deserializeAws_restJson1CreateAnalyzerCommandError
 */
const de_CreateAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1CreateArchiveRuleCommand
 */
export const de_CreateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateArchiveRuleCommandError
 */
const de_CreateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1DeleteAnalyzerCommand
 */
export const de_DeleteAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAnalyzerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnalyzerCommandError
 */
const de_DeleteAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1DeleteArchiveRuleCommand
 */
export const de_DeleteArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteArchiveRuleCommandError
 */
const de_DeleteArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetAccessPreviewCommand
 */
export const de_GetAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPreviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPreview != null) {
    contents.accessPreview = de_AccessPreview(data.accessPreview, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAccessPreviewCommandError
 */
const de_GetAccessPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetAnalyzedResourceCommand
 */
export const de_GetAnalyzedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnalyzedResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resource != null) {
    contents.resource = de_AnalyzedResource(data.resource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnalyzedResourceCommandError
 */
const de_GetAnalyzedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetAnalyzerCommand
 */
export const de_GetAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnalyzerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzer != null) {
    contents.analyzer = de_AnalyzerSummary(data.analyzer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnalyzerCommandError
 */
const de_GetAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetArchiveRuleCommand
 */
export const de_GetArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.archiveRule != null) {
    contents.archiveRule = de_ArchiveRuleSummary(data.archiveRule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetArchiveRuleCommandError
 */
const de_GetArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetFindingCommand
 */
export const de_GetFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.finding != null) {
    contents.finding = de_Finding(data.finding, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingCommandError
 */
const de_GetFindingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1GetGeneratedPolicyCommand
 */
export const de_GetGeneratedPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGeneratedPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.generatedPolicyResult != null) {
    contents.generatedPolicyResult = de_GeneratedPolicyResult(data.generatedPolicyResult, context);
  }
  if (data.jobDetails != null) {
    contents.jobDetails = de_JobDetails(data.jobDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGeneratedPolicyCommandError
 */
const de_GetGeneratedPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListAccessPreviewFindingsCommand
 */
export const de_ListAccessPreviewFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessPreviewFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.findings = de_AccessPreviewFindingsList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPreviewFindingsCommandError
 */
const de_ListAccessPreviewFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListAccessPreviewsCommand
 */
export const de_ListAccessPreviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessPreviewsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPreviews != null) {
    contents.accessPreviews = de_AccessPreviewsList(data.accessPreviews, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPreviewsCommandError
 */
const de_ListAccessPreviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListAnalyzedResourcesCommand
 */
export const de_ListAnalyzedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnalyzedResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzedResources != null) {
    contents.analyzedResources = de_AnalyzedResourcesList(data.analyzedResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalyzedResourcesCommandError
 */
const de_ListAnalyzedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListAnalyzersCommand
 */
export const de_ListAnalyzersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnalyzersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzers != null) {
    contents.analyzers = de_AnalyzersList(data.analyzers, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalyzersCommandError
 */
const de_ListAnalyzersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListArchiveRulesCommand
 */
export const de_ListArchiveRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListArchiveRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.archiveRules != null) {
    contents.archiveRules = de_ArchiveRulesList(data.archiveRules, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListArchiveRulesCommandError
 */
const de_ListArchiveRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    contents.findings = de_FindingsList(data.findings, context);
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
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ListPolicyGenerationsCommand
 */
export const de_ListPolicyGenerationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPolicyGenerationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.policyGenerations != null) {
    contents.policyGenerations = de_PolicyGenerationList(data.policyGenerations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyGenerationsCommandError
 */
const de_ListPolicyGenerationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    contents.tags = de_TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1StartPolicyGenerationCommand
 */
export const de_StartPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartPolicyGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartPolicyGenerationCommandError
 */
const de_StartPolicyGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1StartResourceScanCommand
 */
export const de_StartResourceScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartResourceScanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartResourceScanCommandError
 */
const de_StartResourceScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1UpdateArchiveRuleCommand
 */
export const de_UpdateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateArchiveRuleCommandError
 */
const de_UpdateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1UpdateFindingsCommand
 */
export const de_UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFindingsCommandError
 */
const de_UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
 * deserializeAws_restJson1ValidatePolicyCommand
 */
export const de_ValidatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ValidatePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.findings = de_ValidatePolicyFindingList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ValidatePolicyCommandError
 */
const de_ValidatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
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
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
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
  if (data.fieldList != null) {
    contents.fieldList = de_ValidationExceptionFieldList(data.fieldList, context);
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
 * serializeAws_restJson1AclGrantee
 */
const se_AclGrantee = (input: AclGrantee, context: __SerdeContext): any => {
  return AclGrantee.visit(input, {
    id: (value) => ({ id: value }),
    uri: (value) => ({ uri: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1CloudTrailDetails
 */
const se_CloudTrailDetails = (input: CloudTrailDetails, context: __SerdeContext): any => {
  return {
    ...(input.accessRole != null && { accessRole: input.accessRole }),
    ...(input.endTime != null && { endTime: input.endTime.toISOString().split(".")[0] + "Z" }),
    ...(input.startTime != null && { startTime: input.startTime.toISOString().split(".")[0] + "Z" }),
    ...(input.trails != null && { trails: se_TrailList(input.trails, context) }),
  };
};

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return Configuration.visit(input, {
    ebsSnapshot: (value) => ({ ebsSnapshot: se_EbsSnapshotConfiguration(value, context) }),
    ecrRepository: (value) => ({ ecrRepository: se_EcrRepositoryConfiguration(value, context) }),
    efsFileSystem: (value) => ({ efsFileSystem: se_EfsFileSystemConfiguration(value, context) }),
    iamRole: (value) => ({ iamRole: se_IamRoleConfiguration(value, context) }),
    kmsKey: (value) => ({ kmsKey: se_KmsKeyConfiguration(value, context) }),
    rdsDbClusterSnapshot: (value) => ({ rdsDbClusterSnapshot: se_RdsDbClusterSnapshotConfiguration(value, context) }),
    rdsDbSnapshot: (value) => ({ rdsDbSnapshot: se_RdsDbSnapshotConfiguration(value, context) }),
    s3Bucket: (value) => ({ s3Bucket: se_S3BucketConfiguration(value, context) }),
    secretsManagerSecret: (value) => ({ secretsManagerSecret: se_SecretsManagerSecretConfiguration(value, context) }),
    snsTopic: (value) => ({ snsTopic: se_SnsTopicConfiguration(value, context) }),
    sqsQueue: (value) => ({ sqsQueue: se_SqsQueueConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ConfigurationsMap
 */
const se_ConfigurationsMap = (input: Record<string, Configuration>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Configuration(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Criterion
 */
const se_Criterion = (input: Criterion, context: __SerdeContext): any => {
  return {
    ...(input.contains != null && { contains: se_ValueList(input.contains, context) }),
    ...(input.eq != null && { eq: se_ValueList(input.eq, context) }),
    ...(input.exists != null && { exists: input.exists }),
    ...(input.neq != null && { neq: se_ValueList(input.neq, context) }),
  };
};

/**
 * serializeAws_restJson1EbsGroupList
 */
const se_EbsGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EbsSnapshotConfiguration
 */
const se_EbsSnapshotConfiguration = (input: EbsSnapshotConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.groups != null && { groups: se_EbsGroupList(input.groups, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.userIds != null && { userIds: se_EbsUserIdList(input.userIds, context) }),
  };
};

/**
 * serializeAws_restJson1EbsUserIdList
 */
const se_EbsUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EcrRepositoryConfiguration
 */
const se_EcrRepositoryConfiguration = (input: EcrRepositoryConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.repositoryPolicy != null && { repositoryPolicy: input.repositoryPolicy }),
  };
};

/**
 * serializeAws_restJson1EfsFileSystemConfiguration
 */
const se_EfsFileSystemConfiguration = (input: EfsFileSystemConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.fileSystemPolicy != null && { fileSystemPolicy: input.fileSystemPolicy }),
  };
};

/**
 * serializeAws_restJson1FilterCriteriaMap
 */
const se_FilterCriteriaMap = (input: Record<string, Criterion>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Criterion(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FindingIdList
 */
const se_FindingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1IamRoleConfiguration
 */
const se_IamRoleConfiguration = (input: IamRoleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.trustPolicy != null && { trustPolicy: input.trustPolicy }),
  };
};

/**
 * serializeAws_restJson1InlineArchiveRule
 */
const se_InlineArchiveRule = (input: InlineArchiveRule, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
  };
};

/**
 * serializeAws_restJson1InlineArchiveRulesList
 */
const se_InlineArchiveRulesList = (input: InlineArchiveRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InlineArchiveRule(entry, context);
    });
};

/**
 * serializeAws_restJson1InternetConfiguration
 */
const se_InternetConfiguration = (input: InternetConfiguration, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1KmsConstraintsMap
 */
const se_KmsConstraintsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1KmsGrantConfiguration
 */
const se_KmsGrantConfiguration = (input: KmsGrantConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.constraints != null && { constraints: se_KmsGrantConstraints(input.constraints, context) }),
    ...(input.granteePrincipal != null && { granteePrincipal: input.granteePrincipal }),
    ...(input.issuingAccount != null && { issuingAccount: input.issuingAccount }),
    ...(input.operations != null && { operations: se_KmsGrantOperationsList(input.operations, context) }),
    ...(input.retiringPrincipal != null && { retiringPrincipal: input.retiringPrincipal }),
  };
};

/**
 * serializeAws_restJson1KmsGrantConfigurationsList
 */
const se_KmsGrantConfigurationsList = (input: KmsGrantConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KmsGrantConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1KmsGrantConstraints
 */
const se_KmsGrantConstraints = (input: KmsGrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.encryptionContextEquals != null && {
      encryptionContextEquals: se_KmsConstraintsMap(input.encryptionContextEquals, context),
    }),
    ...(input.encryptionContextSubset != null && {
      encryptionContextSubset: se_KmsConstraintsMap(input.encryptionContextSubset, context),
    }),
  };
};

/**
 * serializeAws_restJson1KmsGrantOperationsList
 */
const se_KmsGrantOperationsList = (input: (KmsGrantOperation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KmsKeyConfiguration
 */
const se_KmsKeyConfiguration = (input: KmsKeyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.grants != null && { grants: se_KmsGrantConfigurationsList(input.grants, context) }),
    ...(input.keyPolicies != null && { keyPolicies: se_KmsKeyPoliciesMap(input.keyPolicies, context) }),
  };
};

/**
 * serializeAws_restJson1KmsKeyPoliciesMap
 */
const se_KmsKeyPoliciesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1NetworkOriginConfiguration
 */
const se_NetworkOriginConfiguration = (input: NetworkOriginConfiguration, context: __SerdeContext): any => {
  return NetworkOriginConfiguration.visit(input, {
    internetConfiguration: (value) => ({ internetConfiguration: se_InternetConfiguration(value, context) }),
    vpcConfiguration: (value) => ({ vpcConfiguration: se_VpcConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1PolicyGenerationDetails
 */
const se_PolicyGenerationDetails = (input: PolicyGenerationDetails, context: __SerdeContext): any => {
  return {
    ...(input.principalArn != null && { principalArn: input.principalArn }),
  };
};

/**
 * serializeAws_restJson1RdsDbClusterSnapshotAccountIdsList
 */
const se_RdsDbClusterSnapshotAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RdsDbClusterSnapshotAttributesMap
 */
const se_RdsDbClusterSnapshotAttributesMap = (
  input: Record<string, RdsDbClusterSnapshotAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RdsDbClusterSnapshotAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RdsDbClusterSnapshotAttributeValue
 */
const se_RdsDbClusterSnapshotAttributeValue = (
  input: RdsDbClusterSnapshotAttributeValue,
  context: __SerdeContext
): any => {
  return RdsDbClusterSnapshotAttributeValue.visit(input, {
    accountIds: (value) => ({ accountIds: se_RdsDbClusterSnapshotAccountIdsList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RdsDbClusterSnapshotConfiguration
 */
const se_RdsDbClusterSnapshotConfiguration = (
  input: RdsDbClusterSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && { attributes: se_RdsDbClusterSnapshotAttributesMap(input.attributes, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  };
};

/**
 * serializeAws_restJson1RdsDbSnapshotAccountIdsList
 */
const se_RdsDbSnapshotAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RdsDbSnapshotAttributesMap
 */
const se_RdsDbSnapshotAttributesMap = (
  input: Record<string, RdsDbSnapshotAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RdsDbSnapshotAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RdsDbSnapshotAttributeValue
 */
const se_RdsDbSnapshotAttributeValue = (input: RdsDbSnapshotAttributeValue, context: __SerdeContext): any => {
  return RdsDbSnapshotAttributeValue.visit(input, {
    accountIds: (value) => ({ accountIds: se_RdsDbSnapshotAccountIdsList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RdsDbSnapshotConfiguration
 */
const se_RdsDbSnapshotConfiguration = (input: RdsDbSnapshotConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_RdsDbSnapshotAttributesMap(input.attributes, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  };
};

/**
 * serializeAws_restJson1RegionList
 */
const se_RegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3AccessPointConfiguration
 */
const se_S3AccessPointConfiguration = (input: S3AccessPointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accessPointPolicy != null && { accessPointPolicy: input.accessPointPolicy }),
    ...(input.networkOrigin != null && { networkOrigin: se_NetworkOriginConfiguration(input.networkOrigin, context) }),
    ...(input.publicAccessBlock != null && {
      publicAccessBlock: se_S3PublicAccessBlockConfiguration(input.publicAccessBlock, context),
    }),
  };
};

/**
 * serializeAws_restJson1S3AccessPointConfigurationsMap
 */
const se_S3AccessPointConfigurationsMap = (
  input: Record<string, S3AccessPointConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_S3AccessPointConfiguration(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1S3BucketAclGrantConfiguration
 */
const se_S3BucketAclGrantConfiguration = (input: S3BucketAclGrantConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.grantee != null && { grantee: se_AclGrantee(input.grantee, context) }),
    ...(input.permission != null && { permission: input.permission }),
  };
};

/**
 * serializeAws_restJson1S3BucketAclGrantConfigurationsList
 */
const se_S3BucketAclGrantConfigurationsList = (
  input: S3BucketAclGrantConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3BucketAclGrantConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1S3BucketConfiguration
 */
const se_S3BucketConfiguration = (input: S3BucketConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accessPoints != null && { accessPoints: se_S3AccessPointConfigurationsMap(input.accessPoints, context) }),
    ...(input.bucketAclGrants != null && {
      bucketAclGrants: se_S3BucketAclGrantConfigurationsList(input.bucketAclGrants, context),
    }),
    ...(input.bucketPolicy != null && { bucketPolicy: input.bucketPolicy }),
    ...(input.bucketPublicAccessBlock != null && {
      bucketPublicAccessBlock: se_S3PublicAccessBlockConfiguration(input.bucketPublicAccessBlock, context),
    }),
  };
};

/**
 * serializeAws_restJson1S3PublicAccessBlockConfiguration
 */
const se_S3PublicAccessBlockConfiguration = (input: S3PublicAccessBlockConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ignorePublicAcls != null && { ignorePublicAcls: input.ignorePublicAcls }),
    ...(input.restrictPublicBuckets != null && { restrictPublicBuckets: input.restrictPublicBuckets }),
  };
};

/**
 * serializeAws_restJson1SecretsManagerSecretConfiguration
 */
const se_SecretsManagerSecretConfiguration = (
  input: SecretsManagerSecretConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.secretPolicy != null && { secretPolicy: input.secretPolicy }),
  };
};

/**
 * serializeAws_restJson1SnsTopicConfiguration
 */
const se_SnsTopicConfiguration = (input: SnsTopicConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.topicPolicy != null && { topicPolicy: input.topicPolicy }),
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
 * serializeAws_restJson1SqsQueueConfiguration
 */
const se_SqsQueueConfiguration = (input: SqsQueueConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.queuePolicy != null && { queuePolicy: input.queuePolicy }),
  };
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Trail
 */
const se_Trail = (input: Trail, context: __SerdeContext): any => {
  return {
    ...(input.allRegions != null && { allRegions: input.allRegions }),
    ...(input.cloudTrailArn != null && { cloudTrailArn: input.cloudTrailArn }),
    ...(input.regions != null && { regions: se_RegionList(input.regions, context) }),
  };
};

/**
 * serializeAws_restJson1TrailList
 */
const se_TrailList = (input: Trail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Trail(entry, context);
    });
};

/**
 * serializeAws_restJson1ValueList
 */
const se_ValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

/**
 * deserializeAws_restJson1AccessPreview
 */
const de_AccessPreview = (output: any, context: __SerdeContext): AccessPreview => {
  return {
    analyzerArn: __expectString(output.analyzerArn),
    configurations: output.configurations != null ? de_ConfigurationsMap(output.configurations, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason: output.statusReason != null ? de_AccessPreviewStatusReason(output.statusReason, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccessPreviewFinding
 */
const de_AccessPreviewFinding = (output: any, context: __SerdeContext): AccessPreviewFinding => {
  return {
    action: output.action != null ? de_ActionList(output.action, context) : undefined,
    changeType: __expectString(output.changeType),
    condition: output.condition != null ? de_ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    existingFindingId: __expectString(output.existingFindingId),
    existingFindingStatus: __expectString(output.existingFindingStatus),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? de_PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? de_FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AccessPreviewFindingsList
 */
const de_AccessPreviewFindingsList = (output: any, context: __SerdeContext): AccessPreviewFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessPreviewFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessPreviewsList
 */
const de_AccessPreviewsList = (output: any, context: __SerdeContext): AccessPreviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessPreviewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessPreviewStatusReason
 */
const de_AccessPreviewStatusReason = (output: any, context: __SerdeContext): AccessPreviewStatusReason => {
  return {
    code: __expectString(output.code),
  } as any;
};

/**
 * deserializeAws_restJson1AccessPreviewSummary
 */
const de_AccessPreviewSummary = (output: any, context: __SerdeContext): AccessPreviewSummary => {
  return {
    analyzerArn: __expectString(output.analyzerArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason: output.statusReason != null ? de_AccessPreviewStatusReason(output.statusReason, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AclGrantee
 */
const de_AclGrantee = (output: any, context: __SerdeContext): AclGrantee => {
  if (__expectString(output.id) !== undefined) {
    return { id: __expectString(output.id) as any };
  }
  if (__expectString(output.uri) !== undefined) {
    return { uri: __expectString(output.uri) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AnalyzedResource
 */
const de_AnalyzedResource = (output: any, context: __SerdeContext): AnalyzedResource => {
  return {
    actions: output.actions != null ? de_ActionList(output.actions, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    isPublic: __expectBoolean(output.isPublic),
    resourceArn: __expectString(output.resourceArn),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sharedVia: output.sharedVia != null ? de_SharedViaList(output.sharedVia, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnalyzedResourcesList
 */
const de_AnalyzedResourcesList = (output: any, context: __SerdeContext): AnalyzedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnalyzedResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyzedResourceSummary
 */
const de_AnalyzedResourceSummary = (output: any, context: __SerdeContext): AnalyzedResourceSummary => {
  return {
    resourceArn: __expectString(output.resourceArn),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1AnalyzersList
 */
const de_AnalyzersList = (output: any, context: __SerdeContext): AnalyzerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnalyzerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyzerSummary
 */
const de_AnalyzerSummary = (output: any, context: __SerdeContext): AnalyzerSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastResourceAnalyzed: __expectString(output.lastResourceAnalyzed),
    lastResourceAnalyzedAt:
      output.lastResourceAnalyzedAt != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastResourceAnalyzedAt))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    statusReason: output.statusReason != null ? de_StatusReason(output.statusReason, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveRulesList
 */
const de_ArchiveRulesList = (output: any, context: __SerdeContext): ArchiveRuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ArchiveRuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ArchiveRuleSummary
 */
const de_ArchiveRuleSummary = (output: any, context: __SerdeContext): ArchiveRuleSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    filter: output.filter != null ? de_FilterCriteriaMap(output.filter, context) : undefined,
    ruleName: __expectString(output.ruleName),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudTrailProperties
 */
const de_CloudTrailProperties = (output: any, context: __SerdeContext): CloudTrailProperties => {
  return {
    endTime: output.endTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endTime)) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    trailProperties:
      output.trailProperties != null ? de_TrailPropertiesList(output.trailProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConditionKeyMap
 */
const de_ConditionKeyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  if (output.ebsSnapshot != null) {
    return {
      ebsSnapshot: de_EbsSnapshotConfiguration(output.ebsSnapshot, context),
    };
  }
  if (output.ecrRepository != null) {
    return {
      ecrRepository: de_EcrRepositoryConfiguration(output.ecrRepository, context),
    };
  }
  if (output.efsFileSystem != null) {
    return {
      efsFileSystem: de_EfsFileSystemConfiguration(output.efsFileSystem, context),
    };
  }
  if (output.iamRole != null) {
    return {
      iamRole: de_IamRoleConfiguration(output.iamRole, context),
    };
  }
  if (output.kmsKey != null) {
    return {
      kmsKey: de_KmsKeyConfiguration(output.kmsKey, context),
    };
  }
  if (output.rdsDbClusterSnapshot != null) {
    return {
      rdsDbClusterSnapshot: de_RdsDbClusterSnapshotConfiguration(output.rdsDbClusterSnapshot, context),
    };
  }
  if (output.rdsDbSnapshot != null) {
    return {
      rdsDbSnapshot: de_RdsDbSnapshotConfiguration(output.rdsDbSnapshot, context),
    };
  }
  if (output.s3Bucket != null) {
    return {
      s3Bucket: de_S3BucketConfiguration(output.s3Bucket, context),
    };
  }
  if (output.secretsManagerSecret != null) {
    return {
      secretsManagerSecret: de_SecretsManagerSecretConfiguration(output.secretsManagerSecret, context),
    };
  }
  if (output.snsTopic != null) {
    return {
      snsTopic: de_SnsTopicConfiguration(output.snsTopic, context),
    };
  }
  if (output.sqsQueue != null) {
    return {
      sqsQueue: de_SqsQueueConfiguration(output.sqsQueue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConfigurationsMap
 */
const de_ConfigurationsMap = (output: any, context: __SerdeContext): Record<string, Configuration> => {
  return Object.entries(output).reduce((acc: Record<string, Configuration>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Configuration(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Criterion
 */
const de_Criterion = (output: any, context: __SerdeContext): Criterion => {
  return {
    contains: output.contains != null ? de_ValueList(output.contains, context) : undefined,
    eq: output.eq != null ? de_ValueList(output.eq, context) : undefined,
    exists: __expectBoolean(output.exists),
    neq: output.neq != null ? de_ValueList(output.neq, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EbsGroupList
 */
const de_EbsGroupList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EbsSnapshotConfiguration
 */
const de_EbsSnapshotConfiguration = (output: any, context: __SerdeContext): EbsSnapshotConfiguration => {
  return {
    groups: output.groups != null ? de_EbsGroupList(output.groups, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    userIds: output.userIds != null ? de_EbsUserIdList(output.userIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EbsUserIdList
 */
const de_EbsUserIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EcrRepositoryConfiguration
 */
const de_EcrRepositoryConfiguration = (output: any, context: __SerdeContext): EcrRepositoryConfiguration => {
  return {
    repositoryPolicy: __expectString(output.repositoryPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1EfsFileSystemConfiguration
 */
const de_EfsFileSystemConfiguration = (output: any, context: __SerdeContext): EfsFileSystemConfiguration => {
  return {
    fileSystemPolicy: __expectString(output.fileSystemPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1FilterCriteriaMap
 */
const de_FilterCriteriaMap = (output: any, context: __SerdeContext): Record<string, Criterion> => {
  return Object.entries(output).reduce((acc: Record<string, Criterion>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Criterion(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    action: output.action != null ? de_ActionList(output.action, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    condition: output.condition != null ? de_ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? de_PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? de_FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FindingsList
 */
const de_FindingsList = (output: any, context: __SerdeContext): FindingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FindingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingSource
 */
const de_FindingSource = (output: any, context: __SerdeContext): FindingSource => {
  return {
    detail: output.detail != null ? de_FindingSourceDetail(output.detail, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FindingSourceDetail
 */
const de_FindingSourceDetail = (output: any, context: __SerdeContext): FindingSourceDetail => {
  return {
    accessPointAccount: __expectString(output.accessPointAccount),
    accessPointArn: __expectString(output.accessPointArn),
  } as any;
};

/**
 * deserializeAws_restJson1FindingSourceList
 */
const de_FindingSourceList = (output: any, context: __SerdeContext): FindingSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FindingSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingSummary
 */
const de_FindingSummary = (output: any, context: __SerdeContext): FindingSummary => {
  return {
    action: output.action != null ? de_ActionList(output.action, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    condition: output.condition != null ? de_ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? de_PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? de_FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GeneratedPolicy
 */
const de_GeneratedPolicy = (output: any, context: __SerdeContext): GeneratedPolicy => {
  return {
    policy: __expectString(output.policy),
  } as any;
};

/**
 * deserializeAws_restJson1GeneratedPolicyList
 */
const de_GeneratedPolicyList = (output: any, context: __SerdeContext): GeneratedPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GeneratedPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeneratedPolicyProperties
 */
const de_GeneratedPolicyProperties = (output: any, context: __SerdeContext): GeneratedPolicyProperties => {
  return {
    cloudTrailProperties:
      output.cloudTrailProperties != null ? de_CloudTrailProperties(output.cloudTrailProperties, context) : undefined,
    isComplete: __expectBoolean(output.isComplete),
    principalArn: __expectString(output.principalArn),
  } as any;
};

/**
 * deserializeAws_restJson1GeneratedPolicyResult
 */
const de_GeneratedPolicyResult = (output: any, context: __SerdeContext): GeneratedPolicyResult => {
  return {
    generatedPolicies:
      output.generatedPolicies != null ? de_GeneratedPolicyList(output.generatedPolicies, context) : undefined,
    properties: output.properties != null ? de_GeneratedPolicyProperties(output.properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IamRoleConfiguration
 */
const de_IamRoleConfiguration = (output: any, context: __SerdeContext): IamRoleConfiguration => {
  return {
    trustPolicy: __expectString(output.trustPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1InternetConfiguration
 */
const de_InternetConfiguration = (output: any, context: __SerdeContext): InternetConfiguration => {
  return {} as any;
};

/**
 * deserializeAws_restJson1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    completedOn:
      output.completedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completedOn)) : undefined,
    jobError: output.jobError != null ? de_JobError(output.jobError, context) : undefined,
    jobId: __expectString(output.jobId),
    startedOn:
      output.startedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startedOn)) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1JobError
 */
const de_JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1KmsConstraintsMap
 */
const de_KmsConstraintsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1KmsGrantConfiguration
 */
const de_KmsGrantConfiguration = (output: any, context: __SerdeContext): KmsGrantConfiguration => {
  return {
    constraints: output.constraints != null ? de_KmsGrantConstraints(output.constraints, context) : undefined,
    granteePrincipal: __expectString(output.granteePrincipal),
    issuingAccount: __expectString(output.issuingAccount),
    operations: output.operations != null ? de_KmsGrantOperationsList(output.operations, context) : undefined,
    retiringPrincipal: __expectString(output.retiringPrincipal),
  } as any;
};

/**
 * deserializeAws_restJson1KmsGrantConfigurationsList
 */
const de_KmsGrantConfigurationsList = (output: any, context: __SerdeContext): KmsGrantConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KmsGrantConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KmsGrantConstraints
 */
const de_KmsGrantConstraints = (output: any, context: __SerdeContext): KmsGrantConstraints => {
  return {
    encryptionContextEquals:
      output.encryptionContextEquals != null
        ? de_KmsConstraintsMap(output.encryptionContextEquals, context)
        : undefined,
    encryptionContextSubset:
      output.encryptionContextSubset != null
        ? de_KmsConstraintsMap(output.encryptionContextSubset, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KmsGrantOperationsList
 */
const de_KmsGrantOperationsList = (output: any, context: __SerdeContext): (KmsGrantOperation | string)[] => {
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
 * deserializeAws_restJson1KmsKeyConfiguration
 */
const de_KmsKeyConfiguration = (output: any, context: __SerdeContext): KmsKeyConfiguration => {
  return {
    grants: output.grants != null ? de_KmsGrantConfigurationsList(output.grants, context) : undefined,
    keyPolicies: output.keyPolicies != null ? de_KmsKeyPoliciesMap(output.keyPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KmsKeyPoliciesMap
 */
const de_KmsKeyPoliciesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return {
    path: output.path != null ? de_PathElementList(output.path, context) : undefined,
    span: output.span != null ? de_Span(output.span, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LocationList
 */
const de_LocationList = (output: any, context: __SerdeContext): Location[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Location(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkOriginConfiguration
 */
const de_NetworkOriginConfiguration = (output: any, context: __SerdeContext): NetworkOriginConfiguration => {
  if (output.internetConfiguration != null) {
    return {
      internetConfiguration: de_InternetConfiguration(output.internetConfiguration, context),
    };
  }
  if (output.vpcConfiguration != null) {
    return {
      vpcConfiguration: de_VpcConfiguration(output.vpcConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PathElement
 */
const de_PathElement = (output: any, context: __SerdeContext): PathElement => {
  if (__expectInt32(output.index) !== undefined) {
    return { index: __expectInt32(output.index) as any };
  }
  if (__expectString(output.key) !== undefined) {
    return { key: __expectString(output.key) as any };
  }
  if (output.substring != null) {
    return {
      substring: de_Substring(output.substring, context),
    };
  }
  if (__expectString(output.value) !== undefined) {
    return { value: __expectString(output.value) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PathElementList
 */
const de_PathElementList = (output: any, context: __SerdeContext): PathElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PathElement(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyGeneration
 */
const de_PolicyGeneration = (output: any, context: __SerdeContext): PolicyGeneration => {
  return {
    completedOn:
      output.completedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completedOn)) : undefined,
    jobId: __expectString(output.jobId),
    principalArn: __expectString(output.principalArn),
    startedOn:
      output.startedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startedOn)) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1PolicyGenerationList
 */
const de_PolicyGenerationList = (output: any, context: __SerdeContext): PolicyGeneration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyGeneration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): Position => {
  return {
    column: __expectInt32(output.column),
    line: __expectInt32(output.line),
    offset: __expectInt32(output.offset),
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalMap
 */
const de_PrincipalMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RdsDbClusterSnapshotAccountIdsList
 */
const de_RdsDbClusterSnapshotAccountIdsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RdsDbClusterSnapshotAttributesMap
 */
const de_RdsDbClusterSnapshotAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, RdsDbClusterSnapshotAttributeValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RdsDbClusterSnapshotAttributeValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_RdsDbClusterSnapshotAttributeValue(__expectUnion(value), context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1RdsDbClusterSnapshotAttributeValue
 */
const de_RdsDbClusterSnapshotAttributeValue = (
  output: any,
  context: __SerdeContext
): RdsDbClusterSnapshotAttributeValue => {
  if (output.accountIds != null) {
    return {
      accountIds: de_RdsDbClusterSnapshotAccountIdsList(output.accountIds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RdsDbClusterSnapshotConfiguration
 */
const de_RdsDbClusterSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): RdsDbClusterSnapshotConfiguration => {
  return {
    attributes:
      output.attributes != null ? de_RdsDbClusterSnapshotAttributesMap(output.attributes, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1RdsDbSnapshotAccountIdsList
 */
const de_RdsDbSnapshotAccountIdsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RdsDbSnapshotAttributesMap
 */
const de_RdsDbSnapshotAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, RdsDbSnapshotAttributeValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RdsDbSnapshotAttributeValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_RdsDbSnapshotAttributeValue(__expectUnion(value), context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1RdsDbSnapshotAttributeValue
 */
const de_RdsDbSnapshotAttributeValue = (output: any, context: __SerdeContext): RdsDbSnapshotAttributeValue => {
  if (output.accountIds != null) {
    return {
      accountIds: de_RdsDbSnapshotAccountIdsList(output.accountIds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RdsDbSnapshotConfiguration
 */
const de_RdsDbSnapshotConfiguration = (output: any, context: __SerdeContext): RdsDbSnapshotConfiguration => {
  return {
    attributes: output.attributes != null ? de_RdsDbSnapshotAttributesMap(output.attributes, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1RegionList
 */
const de_RegionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1S3AccessPointConfiguration
 */
const de_S3AccessPointConfiguration = (output: any, context: __SerdeContext): S3AccessPointConfiguration => {
  return {
    accessPointPolicy: __expectString(output.accessPointPolicy),
    networkOrigin:
      output.networkOrigin != null
        ? de_NetworkOriginConfiguration(__expectUnion(output.networkOrigin), context)
        : undefined,
    publicAccessBlock:
      output.publicAccessBlock != null
        ? de_S3PublicAccessBlockConfiguration(output.publicAccessBlock, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3AccessPointConfigurationsMap
 */
const de_S3AccessPointConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<string, S3AccessPointConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, S3AccessPointConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_S3AccessPointConfiguration(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1S3BucketAclGrantConfiguration
 */
const de_S3BucketAclGrantConfiguration = (output: any, context: __SerdeContext): S3BucketAclGrantConfiguration => {
  return {
    grantee: output.grantee != null ? de_AclGrantee(__expectUnion(output.grantee), context) : undefined,
    permission: __expectString(output.permission),
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketAclGrantConfigurationsList
 */
const de_S3BucketAclGrantConfigurationsList = (
  output: any,
  context: __SerdeContext
): S3BucketAclGrantConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3BucketAclGrantConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3BucketConfiguration
 */
const de_S3BucketConfiguration = (output: any, context: __SerdeContext): S3BucketConfiguration => {
  return {
    accessPoints:
      output.accessPoints != null ? de_S3AccessPointConfigurationsMap(output.accessPoints, context) : undefined,
    bucketAclGrants:
      output.bucketAclGrants != null
        ? de_S3BucketAclGrantConfigurationsList(output.bucketAclGrants, context)
        : undefined,
    bucketPolicy: __expectString(output.bucketPolicy),
    bucketPublicAccessBlock:
      output.bucketPublicAccessBlock != null
        ? de_S3PublicAccessBlockConfiguration(output.bucketPublicAccessBlock, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3PublicAccessBlockConfiguration
 */
const de_S3PublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): S3PublicAccessBlockConfiguration => {
  return {
    ignorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    restrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

/**
 * deserializeAws_restJson1SecretsManagerSecretConfiguration
 */
const de_SecretsManagerSecretConfiguration = (
  output: any,
  context: __SerdeContext
): SecretsManagerSecretConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    secretPolicy: __expectString(output.secretPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1SharedViaList
 */
const de_SharedViaList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SnsTopicConfiguration
 */
const de_SnsTopicConfiguration = (output: any, context: __SerdeContext): SnsTopicConfiguration => {
  return {
    topicPolicy: __expectString(output.topicPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1Span
 */
const de_Span = (output: any, context: __SerdeContext): Span => {
  return {
    end: output.end != null ? de_Position(output.end, context) : undefined,
    start: output.start != null ? de_Position(output.start, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SqsQueueConfiguration
 */
const de_SqsQueueConfiguration = (output: any, context: __SerdeContext): SqsQueueConfiguration => {
  return {
    queuePolicy: __expectString(output.queuePolicy),
  } as any;
};

/**
 * deserializeAws_restJson1StatusReason
 */
const de_StatusReason = (output: any, context: __SerdeContext): StatusReason => {
  return {
    code: __expectString(output.code),
  } as any;
};

/**
 * deserializeAws_restJson1Substring
 */
const de_Substring = (output: any, context: __SerdeContext): Substring => {
  return {
    length: __expectInt32(output.length),
    start: __expectInt32(output.start),
  } as any;
};

/**
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TrailProperties
 */
const de_TrailProperties = (output: any, context: __SerdeContext): TrailProperties => {
  return {
    allRegions: __expectBoolean(output.allRegions),
    cloudTrailArn: __expectString(output.cloudTrailArn),
    regions: output.regions != null ? de_RegionList(output.regions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TrailPropertiesList
 */
const de_TrailPropertiesList = (output: any, context: __SerdeContext): TrailProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrailProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidatePolicyFinding
 */
const de_ValidatePolicyFinding = (output: any, context: __SerdeContext): ValidatePolicyFinding => {
  return {
    findingDetails: __expectString(output.findingDetails),
    findingType: __expectString(output.findingType),
    issueCode: __expectString(output.issueCode),
    learnMoreLink: __expectString(output.learnMoreLink),
    locations: output.locations != null ? de_LocationList(output.locations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ValidatePolicyFindingList
 */
const de_ValidatePolicyFindingList = (output: any, context: __SerdeContext): ValidatePolicyFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidatePolicyFinding(entry, context);
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
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
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
 * deserializeAws_restJson1ValueList
 */
const de_ValueList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1VpcConfiguration
 */
const de_VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    vpcId: __expectString(output.vpcId),
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
