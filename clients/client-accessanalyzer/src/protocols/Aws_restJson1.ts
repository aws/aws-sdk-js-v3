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

export const serializeAws_restJson1ApplyArchiveRuleCommand = async (
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

export const serializeAws_restJson1CancelPolicyGenerationCommand = async (
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

export const serializeAws_restJson1CreateAccessPreviewCommand = async (
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
    ...(input.configurations != null && {
      configurations: serializeAws_restJson1ConfigurationsMap(input.configurations, context),
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

export const serializeAws_restJson1CreateAnalyzerCommand = async (
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
    ...(input.archiveRules != null && {
      archiveRules: serializeAws_restJson1InlineArchiveRulesList(input.archiveRules, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateArchiveRuleCommand = async (
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
    ...(input.filter != null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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

export const serializeAws_restJson1DeleteAnalyzerCommand = async (
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

export const serializeAws_restJson1DeleteArchiveRuleCommand = async (
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

export const serializeAws_restJson1GetAccessPreviewCommand = async (
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

export const serializeAws_restJson1GetAnalyzedResourceCommand = async (
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

export const serializeAws_restJson1GetAnalyzerCommand = async (
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

export const serializeAws_restJson1GetArchiveRuleCommand = async (
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

export const serializeAws_restJson1GetFindingCommand = async (
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

export const serializeAws_restJson1GetGeneratedPolicyCommand = async (
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

export const serializeAws_restJson1ListAccessPreviewFindingsCommand = async (
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
    ...(input.filter != null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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

export const serializeAws_restJson1ListAccessPreviewsCommand = async (
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

export const serializeAws_restJson1ListAnalyzedResourcesCommand = async (
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

export const serializeAws_restJson1ListAnalyzersCommand = async (
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

export const serializeAws_restJson1ListArchiveRulesCommand = async (
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

export const serializeAws_restJson1ListFindingsCommand = async (
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
    ...(input.filter != null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sort != null && { sort: serializeAws_restJson1SortCriteria(input.sort, context) }),
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

export const serializeAws_restJson1ListPolicyGenerationsCommand = async (
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

export const serializeAws_restJson1StartPolicyGenerationCommand = async (
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
      cloudTrailDetails: serializeAws_restJson1CloudTrailDetails(input.cloudTrailDetails, context),
    }),
    ...(input.policyGenerationDetails != null && {
      policyGenerationDetails: serializeAws_restJson1PolicyGenerationDetails(input.policyGenerationDetails, context),
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

export const serializeAws_restJson1StartResourceScanCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1UpdateArchiveRuleCommand = async (
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
    ...(input.filter != null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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

export const serializeAws_restJson1UpdateFindingsCommand = async (
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
    ...(input.ids != null && { ids: serializeAws_restJson1FindingIdList(input.ids, context) }),
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

export const serializeAws_restJson1ValidatePolicyCommand = async (
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

export const deserializeAws_restJson1ApplyArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ApplyArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ApplyArchiveRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CancelPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelPolicyGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelPolicyGenerationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessPreviewCommandError(output, context);
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

const deserializeAws_restJson1CreateAccessPreviewCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnalyzerCommandError(output, context);
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

const deserializeAws_restJson1CreateAnalyzerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateArchiveRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1DeleteAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnalyzerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAnalyzerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1DeleteArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteArchiveRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccessPreviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPreview != null) {
    contents.accessPreview = deserializeAws_restJson1AccessPreview(data.accessPreview, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccessPreviewCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAnalyzedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzedResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resource != null) {
    contents.resource = deserializeAws_restJson1AnalyzedResource(data.resource, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAnalyzedResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzer != null) {
    contents.analyzer = deserializeAws_restJson1AnalyzerSummary(data.analyzer, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAnalyzerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.archiveRule != null) {
    contents.archiveRule = deserializeAws_restJson1ArchiveRuleSummary(data.archiveRule, context);
  }
  return contents;
};

const deserializeAws_restJson1GetArchiveRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.finding != null) {
    contents.finding = deserializeAws_restJson1Finding(data.finding, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetGeneratedPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeneratedPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.generatedPolicyResult != null) {
    contents.generatedPolicyResult = deserializeAws_restJson1GeneratedPolicyResult(data.generatedPolicyResult, context);
  }
  if (data.jobDetails != null) {
    contents.jobDetails = deserializeAws_restJson1JobDetails(data.jobDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGeneratedPolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAccessPreviewFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.findings = deserializeAws_restJson1AccessPreviewFindingsList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAccessPreviewFindingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAccessPreviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPreviews != null) {
    contents.accessPreviews = deserializeAws_restJson1AccessPreviewsList(data.accessPreviews, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAccessPreviewsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAnalyzedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzedResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzedResources != null) {
    contents.analyzedResources = deserializeAws_restJson1AnalyzedResourcesList(data.analyzedResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAnalyzedResourcesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAnalyzersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analyzers != null) {
    contents.analyzers = deserializeAws_restJson1AnalyzersList(data.analyzers, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAnalyzersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListArchiveRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListArchiveRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.archiveRules != null) {
    contents.archiveRules = deserializeAws_restJson1ArchiveRulesList(data.archiveRules, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListArchiveRulesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    contents.findings = deserializeAws_restJson1FindingsList(data.findings, context);
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
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListPolicyGenerationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPolicyGenerationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.policyGenerations != null) {
    contents.policyGenerations = deserializeAws_restJson1PolicyGenerationList(data.policyGenerations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPolicyGenerationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1StartPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartPolicyGenerationCommandError(output, context);
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

const deserializeAws_restJson1StartPolicyGenerationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1StartResourceScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartResourceScanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartResourceScanCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1UpdateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateArchiveRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateArchiveRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFindingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ValidatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidatePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.findings = deserializeAws_restJson1ValidatePolicyFindingList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ValidatePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
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
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1AclGrantee = (input: AclGrantee, context: __SerdeContext): any => {
  return AclGrantee.visit(input, {
    id: (value) => ({ id: value }),
    uri: (value) => ({ uri: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1CloudTrailDetails = (input: CloudTrailDetails, context: __SerdeContext): any => {
  return {
    ...(input.accessRole != null && { accessRole: input.accessRole }),
    ...(input.endTime != null && { endTime: input.endTime.toISOString().split(".")[0] + "Z" }),
    ...(input.startTime != null && { startTime: input.startTime.toISOString().split(".")[0] + "Z" }),
    ...(input.trails != null && { trails: serializeAws_restJson1TrailList(input.trails, context) }),
  };
};

const serializeAws_restJson1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return Configuration.visit(input, {
    ebsSnapshot: (value) => ({ ebsSnapshot: serializeAws_restJson1EbsSnapshotConfiguration(value, context) }),
    ecrRepository: (value) => ({ ecrRepository: serializeAws_restJson1EcrRepositoryConfiguration(value, context) }),
    efsFileSystem: (value) => ({ efsFileSystem: serializeAws_restJson1EfsFileSystemConfiguration(value, context) }),
    iamRole: (value) => ({ iamRole: serializeAws_restJson1IamRoleConfiguration(value, context) }),
    kmsKey: (value) => ({ kmsKey: serializeAws_restJson1KmsKeyConfiguration(value, context) }),
    rdsDbClusterSnapshot: (value) => ({
      rdsDbClusterSnapshot: serializeAws_restJson1RdsDbClusterSnapshotConfiguration(value, context),
    }),
    rdsDbSnapshot: (value) => ({ rdsDbSnapshot: serializeAws_restJson1RdsDbSnapshotConfiguration(value, context) }),
    s3Bucket: (value) => ({ s3Bucket: serializeAws_restJson1S3BucketConfiguration(value, context) }),
    secretsManagerSecret: (value) => ({
      secretsManagerSecret: serializeAws_restJson1SecretsManagerSecretConfiguration(value, context),
    }),
    snsTopic: (value) => ({ snsTopic: serializeAws_restJson1SnsTopicConfiguration(value, context) }),
    sqsQueue: (value) => ({ sqsQueue: serializeAws_restJson1SqsQueueConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ConfigurationsMap = (
  input: Record<string, Configuration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Configuration(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1Criterion = (input: Criterion, context: __SerdeContext): any => {
  return {
    ...(input.contains != null && { contains: serializeAws_restJson1ValueList(input.contains, context) }),
    ...(input.eq != null && { eq: serializeAws_restJson1ValueList(input.eq, context) }),
    ...(input.exists != null && { exists: input.exists }),
    ...(input.neq != null && { neq: serializeAws_restJson1ValueList(input.neq, context) }),
  };
};

const serializeAws_restJson1EbsGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EbsSnapshotConfiguration = (
  input: EbsSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.groups != null && { groups: serializeAws_restJson1EbsGroupList(input.groups, context) }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.userIds != null && { userIds: serializeAws_restJson1EbsUserIdList(input.userIds, context) }),
  };
};

const serializeAws_restJson1EbsUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EcrRepositoryConfiguration = (
  input: EcrRepositoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryPolicy != null && { repositoryPolicy: input.repositoryPolicy }),
  };
};

const serializeAws_restJson1EfsFileSystemConfiguration = (
  input: EfsFileSystemConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.fileSystemPolicy != null && { fileSystemPolicy: input.fileSystemPolicy }),
  };
};

const serializeAws_restJson1FilterCriteriaMap = (input: Record<string, Criterion>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Criterion(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1FindingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IamRoleConfiguration = (input: IamRoleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.trustPolicy != null && { trustPolicy: input.trustPolicy }),
  };
};

const serializeAws_restJson1InlineArchiveRule = (input: InlineArchiveRule, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName != null && { ruleName: input.ruleName }),
  };
};

const serializeAws_restJson1InlineArchiveRulesList = (input: InlineArchiveRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InlineArchiveRule(entry, context);
    });
};

const serializeAws_restJson1InternetConfiguration = (input: InternetConfiguration, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1KmsConstraintsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1KmsGrantConfiguration = (input: KmsGrantConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.constraints != null && {
      constraints: serializeAws_restJson1KmsGrantConstraints(input.constraints, context),
    }),
    ...(input.granteePrincipal != null && { granteePrincipal: input.granteePrincipal }),
    ...(input.issuingAccount != null && { issuingAccount: input.issuingAccount }),
    ...(input.operations != null && {
      operations: serializeAws_restJson1KmsGrantOperationsList(input.operations, context),
    }),
    ...(input.retiringPrincipal != null && { retiringPrincipal: input.retiringPrincipal }),
  };
};

const serializeAws_restJson1KmsGrantConfigurationsList = (
  input: KmsGrantConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
};

const serializeAws_restJson1KmsGrantConstraints = (input: KmsGrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.encryptionContextEquals != null && {
      encryptionContextEquals: serializeAws_restJson1KmsConstraintsMap(input.encryptionContextEquals, context),
    }),
    ...(input.encryptionContextSubset != null && {
      encryptionContextSubset: serializeAws_restJson1KmsConstraintsMap(input.encryptionContextSubset, context),
    }),
  };
};

const serializeAws_restJson1KmsGrantOperationsList = (
  input: (KmsGrantOperation | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1KmsKeyConfiguration = (input: KmsKeyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.grants != null && { grants: serializeAws_restJson1KmsGrantConfigurationsList(input.grants, context) }),
    ...(input.keyPolicies != null && {
      keyPolicies: serializeAws_restJson1KmsKeyPoliciesMap(input.keyPolicies, context),
    }),
  };
};

const serializeAws_restJson1KmsKeyPoliciesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1NetworkOriginConfiguration = (
  input: NetworkOriginConfiguration,
  context: __SerdeContext
): any => {
  return NetworkOriginConfiguration.visit(input, {
    internetConfiguration: (value) => ({
      internetConfiguration: serializeAws_restJson1InternetConfiguration(value, context),
    }),
    vpcConfiguration: (value) => ({ vpcConfiguration: serializeAws_restJson1VpcConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1PolicyGenerationDetails = (
  input: PolicyGenerationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.principalArn != null && { principalArn: input.principalArn }),
  };
};

const serializeAws_restJson1RdsDbClusterSnapshotAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RdsDbClusterSnapshotAttributesMap = (
  input: Record<string, RdsDbClusterSnapshotAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1RdsDbClusterSnapshotAttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RdsDbClusterSnapshotAttributeValue = (
  input: RdsDbClusterSnapshotAttributeValue,
  context: __SerdeContext
): any => {
  return RdsDbClusterSnapshotAttributeValue.visit(input, {
    accountIds: (value) => ({ accountIds: serializeAws_restJson1RdsDbClusterSnapshotAccountIdsList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RdsDbClusterSnapshotConfiguration = (
  input: RdsDbClusterSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_restJson1RdsDbClusterSnapshotAttributesMap(input.attributes, context),
    }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  };
};

const serializeAws_restJson1RdsDbSnapshotAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RdsDbSnapshotAttributesMap = (
  input: Record<string, RdsDbSnapshotAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1RdsDbSnapshotAttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RdsDbSnapshotAttributeValue = (
  input: RdsDbSnapshotAttributeValue,
  context: __SerdeContext
): any => {
  return RdsDbSnapshotAttributeValue.visit(input, {
    accountIds: (value) => ({ accountIds: serializeAws_restJson1RdsDbSnapshotAccountIdsList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RdsDbSnapshotConfiguration = (
  input: RdsDbSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_restJson1RdsDbSnapshotAttributesMap(input.attributes, context),
    }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  };
};

const serializeAws_restJson1RegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1S3AccessPointConfiguration = (
  input: S3AccessPointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessPointPolicy != null && { accessPointPolicy: input.accessPointPolicy }),
    ...(input.networkOrigin != null && {
      networkOrigin: serializeAws_restJson1NetworkOriginConfiguration(input.networkOrigin, context),
    }),
    ...(input.publicAccessBlock != null && {
      publicAccessBlock: serializeAws_restJson1S3PublicAccessBlockConfiguration(input.publicAccessBlock, context),
    }),
  };
};

const serializeAws_restJson1S3AccessPointConfigurationsMap = (
  input: Record<string, S3AccessPointConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1S3AccessPointConfiguration(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1S3BucketAclGrantConfiguration = (
  input: S3BucketAclGrantConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.grantee != null && { grantee: serializeAws_restJson1AclGrantee(input.grantee, context) }),
    ...(input.permission != null && { permission: input.permission }),
  };
};

const serializeAws_restJson1S3BucketAclGrantConfigurationsList = (
  input: S3BucketAclGrantConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
};

const serializeAws_restJson1S3BucketConfiguration = (input: S3BucketConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accessPoints != null && {
      accessPoints: serializeAws_restJson1S3AccessPointConfigurationsMap(input.accessPoints, context),
    }),
    ...(input.bucketAclGrants != null && {
      bucketAclGrants: serializeAws_restJson1S3BucketAclGrantConfigurationsList(input.bucketAclGrants, context),
    }),
    ...(input.bucketPolicy != null && { bucketPolicy: input.bucketPolicy }),
    ...(input.bucketPublicAccessBlock != null && {
      bucketPublicAccessBlock: serializeAws_restJson1S3PublicAccessBlockConfiguration(
        input.bucketPublicAccessBlock,
        context
      ),
    }),
  };
};

const serializeAws_restJson1S3PublicAccessBlockConfiguration = (
  input: S3PublicAccessBlockConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ignorePublicAcls != null && { ignorePublicAcls: input.ignorePublicAcls }),
    ...(input.restrictPublicBuckets != null && { restrictPublicBuckets: input.restrictPublicBuckets }),
  };
};

const serializeAws_restJson1SecretsManagerSecretConfiguration = (
  input: SecretsManagerSecretConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.secretPolicy != null && { secretPolicy: input.secretPolicy }),
  };
};

const serializeAws_restJson1SnsTopicConfiguration = (input: SnsTopicConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.topicPolicy != null && { topicPolicy: input.topicPolicy }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1SqsQueueConfiguration = (input: SqsQueueConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.queuePolicy != null && { queuePolicy: input.queuePolicy }),
  };
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Trail = (input: Trail, context: __SerdeContext): any => {
  return {
    ...(input.allRegions != null && { allRegions: input.allRegions }),
    ...(input.cloudTrailArn != null && { cloudTrailArn: input.cloudTrailArn }),
    ...(input.regions != null && { regions: serializeAws_restJson1RegionList(input.regions, context) }),
  };
};

const serializeAws_restJson1TrailList = (input: Trail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Trail(entry, context);
    });
};

const serializeAws_restJson1ValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

const deserializeAws_restJson1AccessPreview = (output: any, context: __SerdeContext): AccessPreview => {
  return {
    analyzerArn: __expectString(output.analyzerArn),
    configurations:
      output.configurations != null
        ? deserializeAws_restJson1ConfigurationsMap(output.configurations, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason:
      output.statusReason != null
        ? deserializeAws_restJson1AccessPreviewStatusReason(output.statusReason, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccessPreviewFinding = (output: any, context: __SerdeContext): AccessPreviewFinding => {
  return {
    action: output.action != null ? deserializeAws_restJson1ActionList(output.action, context) : undefined,
    changeType: __expectString(output.changeType),
    condition:
      output.condition != null ? deserializeAws_restJson1ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    existingFindingId: __expectString(output.existingFindingId),
    existingFindingStatus: __expectString(output.existingFindingStatus),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? deserializeAws_restJson1PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? deserializeAws_restJson1FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AccessPreviewFindingsList = (
  output: any,
  context: __SerdeContext
): AccessPreviewFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPreviewFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccessPreviewsList = (output: any, context: __SerdeContext): AccessPreviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPreviewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccessPreviewStatusReason = (
  output: any,
  context: __SerdeContext
): AccessPreviewStatusReason => {
  return {
    code: __expectString(output.code),
  } as any;
};

const deserializeAws_restJson1AccessPreviewSummary = (output: any, context: __SerdeContext): AccessPreviewSummary => {
  return {
    analyzerArn: __expectString(output.analyzerArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason:
      output.statusReason != null
        ? deserializeAws_restJson1AccessPreviewStatusReason(output.statusReason, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AclGrantee = (output: any, context: __SerdeContext): AclGrantee => {
  if (__expectString(output.id) !== undefined) {
    return { id: __expectString(output.id) as any };
  }
  if (__expectString(output.uri) !== undefined) {
    return { uri: __expectString(output.uri) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ActionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AnalyzedResource = (output: any, context: __SerdeContext): AnalyzedResource => {
  return {
    actions: output.actions != null ? deserializeAws_restJson1ActionList(output.actions, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    isPublic: __expectBoolean(output.isPublic),
    resourceArn: __expectString(output.resourceArn),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sharedVia: output.sharedVia != null ? deserializeAws_restJson1SharedViaList(output.sharedVia, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1AnalyzedResourcesList = (
  output: any,
  context: __SerdeContext
): AnalyzedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalyzedResourceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnalyzedResourceSummary = (
  output: any,
  context: __SerdeContext
): AnalyzedResourceSummary => {
  return {
    resourceArn: __expectString(output.resourceArn),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1AnalyzersList = (output: any, context: __SerdeContext): AnalyzerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalyzerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnalyzerSummary = (output: any, context: __SerdeContext): AnalyzerSummary => {
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
    statusReason:
      output.statusReason != null ? deserializeAws_restJson1StatusReason(output.statusReason, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ArchiveRulesList = (output: any, context: __SerdeContext): ArchiveRuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ArchiveRuleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ArchiveRuleSummary = (output: any, context: __SerdeContext): ArchiveRuleSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    filter: output.filter != null ? deserializeAws_restJson1FilterCriteriaMap(output.filter, context) : undefined,
    ruleName: __expectString(output.ruleName),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1CloudTrailProperties = (output: any, context: __SerdeContext): CloudTrailProperties => {
  return {
    endTime: output.endTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endTime)) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    trailProperties:
      output.trailProperties != null
        ? deserializeAws_restJson1TrailPropertiesList(output.trailProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConditionKeyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  if (output.ebsSnapshot != null) {
    return {
      ebsSnapshot: deserializeAws_restJson1EbsSnapshotConfiguration(output.ebsSnapshot, context),
    };
  }
  if (output.ecrRepository != null) {
    return {
      ecrRepository: deserializeAws_restJson1EcrRepositoryConfiguration(output.ecrRepository, context),
    };
  }
  if (output.efsFileSystem != null) {
    return {
      efsFileSystem: deserializeAws_restJson1EfsFileSystemConfiguration(output.efsFileSystem, context),
    };
  }
  if (output.iamRole != null) {
    return {
      iamRole: deserializeAws_restJson1IamRoleConfiguration(output.iamRole, context),
    };
  }
  if (output.kmsKey != null) {
    return {
      kmsKey: deserializeAws_restJson1KmsKeyConfiguration(output.kmsKey, context),
    };
  }
  if (output.rdsDbClusterSnapshot != null) {
    return {
      rdsDbClusterSnapshot: deserializeAws_restJson1RdsDbClusterSnapshotConfiguration(
        output.rdsDbClusterSnapshot,
        context
      ),
    };
  }
  if (output.rdsDbSnapshot != null) {
    return {
      rdsDbSnapshot: deserializeAws_restJson1RdsDbSnapshotConfiguration(output.rdsDbSnapshot, context),
    };
  }
  if (output.s3Bucket != null) {
    return {
      s3Bucket: deserializeAws_restJson1S3BucketConfiguration(output.s3Bucket, context),
    };
  }
  if (output.secretsManagerSecret != null) {
    return {
      secretsManagerSecret: deserializeAws_restJson1SecretsManagerSecretConfiguration(
        output.secretsManagerSecret,
        context
      ),
    };
  }
  if (output.snsTopic != null) {
    return {
      snsTopic: deserializeAws_restJson1SnsTopicConfiguration(output.snsTopic, context),
    };
  }
  if (output.sqsQueue != null) {
    return {
      sqsQueue: deserializeAws_restJson1SqsQueueConfiguration(output.sqsQueue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<string, Configuration> => {
  return Object.entries(output).reduce((acc: Record<string, Configuration>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Configuration(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Criterion = (output: any, context: __SerdeContext): Criterion => {
  return {
    contains: output.contains != null ? deserializeAws_restJson1ValueList(output.contains, context) : undefined,
    eq: output.eq != null ? deserializeAws_restJson1ValueList(output.eq, context) : undefined,
    exists: __expectBoolean(output.exists),
    neq: output.neq != null ? deserializeAws_restJson1ValueList(output.neq, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EbsGroupList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EbsSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): EbsSnapshotConfiguration => {
  return {
    groups: output.groups != null ? deserializeAws_restJson1EbsGroupList(output.groups, context) : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    userIds: output.userIds != null ? deserializeAws_restJson1EbsUserIdList(output.userIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EbsUserIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EcrRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): EcrRepositoryConfiguration => {
  return {
    repositoryPolicy: __expectString(output.repositoryPolicy),
  } as any;
};

const deserializeAws_restJson1EfsFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): EfsFileSystemConfiguration => {
  return {
    fileSystemPolicy: __expectString(output.fileSystemPolicy),
  } as any;
};

const deserializeAws_restJson1FilterCriteriaMap = (output: any, context: __SerdeContext): Record<string, Criterion> => {
  return Object.entries(output).reduce((acc: Record<string, Criterion>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Criterion(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    action: output.action != null ? deserializeAws_restJson1ActionList(output.action, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    condition:
      output.condition != null ? deserializeAws_restJson1ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? deserializeAws_restJson1PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? deserializeAws_restJson1FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingsList = (output: any, context: __SerdeContext): FindingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FindingSource = (output: any, context: __SerdeContext): FindingSource => {
  return {
    detail: output.detail != null ? deserializeAws_restJson1FindingSourceDetail(output.detail, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FindingSourceDetail = (output: any, context: __SerdeContext): FindingSourceDetail => {
  return {
    accessPointAccount: __expectString(output.accessPointAccount),
    accessPointArn: __expectString(output.accessPointArn),
  } as any;
};

const deserializeAws_restJson1FindingSourceList = (output: any, context: __SerdeContext): FindingSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FindingSummary = (output: any, context: __SerdeContext): FindingSummary => {
  return {
    action: output.action != null ? deserializeAws_restJson1ActionList(output.action, context) : undefined,
    analyzedAt:
      output.analyzedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.analyzedAt)) : undefined,
    condition:
      output.condition != null ? deserializeAws_restJson1ConditionKeyMap(output.condition, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal: output.principal != null ? deserializeAws_restJson1PrincipalMap(output.principal, context) : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources: output.sources != null ? deserializeAws_restJson1FindingSourceList(output.sources, context) : undefined,
    status: __expectString(output.status),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1GeneratedPolicy = (output: any, context: __SerdeContext): GeneratedPolicy => {
  return {
    policy: __expectString(output.policy),
  } as any;
};

const deserializeAws_restJson1GeneratedPolicyList = (output: any, context: __SerdeContext): GeneratedPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GeneratedPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GeneratedPolicyProperties = (
  output: any,
  context: __SerdeContext
): GeneratedPolicyProperties => {
  return {
    cloudTrailProperties:
      output.cloudTrailProperties != null
        ? deserializeAws_restJson1CloudTrailProperties(output.cloudTrailProperties, context)
        : undefined,
    isComplete: __expectBoolean(output.isComplete),
    principalArn: __expectString(output.principalArn),
  } as any;
};

const deserializeAws_restJson1GeneratedPolicyResult = (output: any, context: __SerdeContext): GeneratedPolicyResult => {
  return {
    generatedPolicies:
      output.generatedPolicies != null
        ? deserializeAws_restJson1GeneratedPolicyList(output.generatedPolicies, context)
        : undefined,
    properties:
      output.properties != null
        ? deserializeAws_restJson1GeneratedPolicyProperties(output.properties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IamRoleConfiguration = (output: any, context: __SerdeContext): IamRoleConfiguration => {
  return {
    trustPolicy: __expectString(output.trustPolicy),
  } as any;
};

const deserializeAws_restJson1InternetConfiguration = (output: any, context: __SerdeContext): InternetConfiguration => {
  return {} as any;
};

const deserializeAws_restJson1JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    completedOn:
      output.completedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.completedOn)) : undefined,
    jobError: output.jobError != null ? deserializeAws_restJson1JobError(output.jobError, context) : undefined,
    jobId: __expectString(output.jobId),
    startedOn:
      output.startedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startedOn)) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1KmsConstraintsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1KmsGrantConfiguration = (output: any, context: __SerdeContext): KmsGrantConfiguration => {
  return {
    constraints:
      output.constraints != null ? deserializeAws_restJson1KmsGrantConstraints(output.constraints, context) : undefined,
    granteePrincipal: __expectString(output.granteePrincipal),
    issuingAccount: __expectString(output.issuingAccount),
    operations:
      output.operations != null
        ? deserializeAws_restJson1KmsGrantOperationsList(output.operations, context)
        : undefined,
    retiringPrincipal: __expectString(output.retiringPrincipal),
  } as any;
};

const deserializeAws_restJson1KmsGrantConfigurationsList = (
  output: any,
  context: __SerdeContext
): KmsGrantConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KmsGrantConstraints = (output: any, context: __SerdeContext): KmsGrantConstraints => {
  return {
    encryptionContextEquals:
      output.encryptionContextEquals != null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextEquals, context)
        : undefined,
    encryptionContextSubset:
      output.encryptionContextSubset != null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextSubset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KmsGrantOperationsList = (
  output: any,
  context: __SerdeContext
): (KmsGrantOperation | string)[] => {
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

const deserializeAws_restJson1KmsKeyConfiguration = (output: any, context: __SerdeContext): KmsKeyConfiguration => {
  return {
    grants:
      output.grants != null ? deserializeAws_restJson1KmsGrantConfigurationsList(output.grants, context) : undefined,
    keyPolicies:
      output.keyPolicies != null ? deserializeAws_restJson1KmsKeyPoliciesMap(output.keyPolicies, context) : undefined,
  } as any;
};

const deserializeAws_restJson1KmsKeyPoliciesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Location = (output: any, context: __SerdeContext): Location => {
  return {
    path: output.path != null ? deserializeAws_restJson1PathElementList(output.path, context) : undefined,
    span: output.span != null ? deserializeAws_restJson1Span(output.span, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LocationList = (output: any, context: __SerdeContext): Location[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Location(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkOriginConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkOriginConfiguration => {
  if (output.internetConfiguration != null) {
    return {
      internetConfiguration: deserializeAws_restJson1InternetConfiguration(output.internetConfiguration, context),
    };
  }
  if (output.vpcConfiguration != null) {
    return {
      vpcConfiguration: deserializeAws_restJson1VpcConfiguration(output.vpcConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PathElement = (output: any, context: __SerdeContext): PathElement => {
  if (__expectInt32(output.index) !== undefined) {
    return { index: __expectInt32(output.index) as any };
  }
  if (__expectString(output.key) !== undefined) {
    return { key: __expectString(output.key) as any };
  }
  if (output.substring != null) {
    return {
      substring: deserializeAws_restJson1Substring(output.substring, context),
    };
  }
  if (__expectString(output.value) !== undefined) {
    return { value: __expectString(output.value) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PathElementList = (output: any, context: __SerdeContext): PathElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PathElement(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1PolicyGeneration = (output: any, context: __SerdeContext): PolicyGeneration => {
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

const deserializeAws_restJson1PolicyGenerationList = (output: any, context: __SerdeContext): PolicyGeneration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PolicyGeneration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): Position => {
  return {
    column: __expectInt32(output.column),
    line: __expectInt32(output.line),
    offset: __expectInt32(output.offset),
  } as any;
};

const deserializeAws_restJson1PrincipalMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1RdsDbClusterSnapshotAccountIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RdsDbClusterSnapshotAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, RdsDbClusterSnapshotAttributeValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RdsDbClusterSnapshotAttributeValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1RdsDbClusterSnapshotAttributeValue(__expectUnion(value), context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1RdsDbClusterSnapshotAttributeValue = (
  output: any,
  context: __SerdeContext
): RdsDbClusterSnapshotAttributeValue => {
  if (output.accountIds != null) {
    return {
      accountIds: deserializeAws_restJson1RdsDbClusterSnapshotAccountIdsList(output.accountIds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RdsDbClusterSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): RdsDbClusterSnapshotConfiguration => {
  return {
    attributes:
      output.attributes != null
        ? deserializeAws_restJson1RdsDbClusterSnapshotAttributesMap(output.attributes, context)
        : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

const deserializeAws_restJson1RdsDbSnapshotAccountIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RdsDbSnapshotAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, RdsDbSnapshotAttributeValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RdsDbSnapshotAttributeValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1RdsDbSnapshotAttributeValue(__expectUnion(value), context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1RdsDbSnapshotAttributeValue = (
  output: any,
  context: __SerdeContext
): RdsDbSnapshotAttributeValue => {
  if (output.accountIds != null) {
    return {
      accountIds: deserializeAws_restJson1RdsDbSnapshotAccountIdsList(output.accountIds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RdsDbSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): RdsDbSnapshotConfiguration => {
  return {
    attributes:
      output.attributes != null
        ? deserializeAws_restJson1RdsDbSnapshotAttributesMap(output.attributes, context)
        : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

const deserializeAws_restJson1RegionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3AccessPointConfiguration = (
  output: any,
  context: __SerdeContext
): S3AccessPointConfiguration => {
  return {
    accessPointPolicy: __expectString(output.accessPointPolicy),
    networkOrigin:
      output.networkOrigin != null
        ? deserializeAws_restJson1NetworkOriginConfiguration(__expectUnion(output.networkOrigin), context)
        : undefined,
    publicAccessBlock:
      output.publicAccessBlock != null
        ? deserializeAws_restJson1S3PublicAccessBlockConfiguration(output.publicAccessBlock, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3AccessPointConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<string, S3AccessPointConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, S3AccessPointConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1S3AccessPointConfiguration(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1S3BucketAclGrantConfiguration = (
  output: any,
  context: __SerdeContext
): S3BucketAclGrantConfiguration => {
  return {
    grantee:
      output.grantee != null ? deserializeAws_restJson1AclGrantee(__expectUnion(output.grantee), context) : undefined,
    permission: __expectString(output.permission),
  } as any;
};

const deserializeAws_restJson1S3BucketAclGrantConfigurationsList = (
  output: any,
  context: __SerdeContext
): S3BucketAclGrantConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3BucketConfiguration = (output: any, context: __SerdeContext): S3BucketConfiguration => {
  return {
    accessPoints:
      output.accessPoints != null
        ? deserializeAws_restJson1S3AccessPointConfigurationsMap(output.accessPoints, context)
        : undefined,
    bucketAclGrants:
      output.bucketAclGrants != null
        ? deserializeAws_restJson1S3BucketAclGrantConfigurationsList(output.bucketAclGrants, context)
        : undefined,
    bucketPolicy: __expectString(output.bucketPolicy),
    bucketPublicAccessBlock:
      output.bucketPublicAccessBlock != null
        ? deserializeAws_restJson1S3PublicAccessBlockConfiguration(output.bucketPublicAccessBlock, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3PublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): S3PublicAccessBlockConfiguration => {
  return {
    ignorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    restrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1SecretsManagerSecretConfiguration = (
  output: any,
  context: __SerdeContext
): SecretsManagerSecretConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    secretPolicy: __expectString(output.secretPolicy),
  } as any;
};

const deserializeAws_restJson1SharedViaList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SnsTopicConfiguration = (output: any, context: __SerdeContext): SnsTopicConfiguration => {
  return {
    topicPolicy: __expectString(output.topicPolicy),
  } as any;
};

const deserializeAws_restJson1Span = (output: any, context: __SerdeContext): Span => {
  return {
    end: output.end != null ? deserializeAws_restJson1Position(output.end, context) : undefined,
    start: output.start != null ? deserializeAws_restJson1Position(output.start, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SqsQueueConfiguration = (output: any, context: __SerdeContext): SqsQueueConfiguration => {
  return {
    queuePolicy: __expectString(output.queuePolicy),
  } as any;
};

const deserializeAws_restJson1StatusReason = (output: any, context: __SerdeContext): StatusReason => {
  return {
    code: __expectString(output.code),
  } as any;
};

const deserializeAws_restJson1Substring = (output: any, context: __SerdeContext): Substring => {
  return {
    length: __expectInt32(output.length),
    start: __expectInt32(output.start),
  } as any;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TrailProperties = (output: any, context: __SerdeContext): TrailProperties => {
  return {
    allRegions: __expectBoolean(output.allRegions),
    cloudTrailArn: __expectString(output.cloudTrailArn),
    regions: output.regions != null ? deserializeAws_restJson1RegionList(output.regions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TrailPropertiesList = (output: any, context: __SerdeContext): TrailProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrailProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidatePolicyFinding = (output: any, context: __SerdeContext): ValidatePolicyFinding => {
  return {
    findingDetails: __expectString(output.findingDetails),
    findingType: __expectString(output.findingType),
    issueCode: __expectString(output.issueCode),
    learnMoreLink: __expectString(output.learnMoreLink),
    locations: output.locations != null ? deserializeAws_restJson1LocationList(output.locations, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ValidatePolicyFindingList = (
  output: any,
  context: __SerdeContext
): ValidatePolicyFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidatePolicyFinding(entry, context);
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

const deserializeAws_restJson1ValidationExceptionFieldList = (
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

const deserializeAws_restJson1ValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
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
