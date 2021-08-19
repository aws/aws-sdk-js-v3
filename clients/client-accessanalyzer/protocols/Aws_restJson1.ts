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
  ResourceNotFoundException,
  S3AccessPointConfiguration,
  S3BucketAclGrantConfiguration,
  S3BucketConfiguration,
  S3PublicAccessBlockConfiguration,
  SecretsManagerSecretConfiguration,
  ServiceQuotaExceededException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1ApplyArchiveRuleCommand = async (
  input: ApplyArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/archive-rule";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurations !== undefined &&
      input.configurations !== null && {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerName !== undefined && input.analyzerName !== null && { analyzerName: input.analyzerName }),
    ...(input.archiveRules !== undefined &&
      input.archiveRules !== null && {
        archiveRules: serializeAws_restJson1InlineArchiveRulesList(input.archiveRules, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
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
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
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

export const serializeAws_restJson1DeleteArchiveRuleCommand = async (
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
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

export const serializeAws_restJson1GetAccessPreviewCommand = async (
  input: GetAccessPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview/{accessPreviewId}";
  if (input.accessPreviewId !== undefined) {
    const labelValue: string = input.accessPreviewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPreviewId.");
    }
    resolvedPath = resolvedPath.replace("{accessPreviewId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPreviewId.");
  }
  const query: any = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
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

export const serializeAws_restJson1GetAnalyzedResourceCommand = async (
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzed-resource";
  const query: any = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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

export const serializeAws_restJson1GetAnalyzerCommand = async (
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
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

export const serializeAws_restJson1GetArchiveRuleCommand = async (
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
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

export const serializeAws_restJson1GetFindingCommand = async (
  input: GetFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query: any = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
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

export const serializeAws_restJson1GetGeneratedPolicyCommand = async (
  input: GetGeneratedPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  const query: any = {
    ...(input.includeResourcePlaceholders !== undefined && {
      includeResourcePlaceholders: input.includeResourcePlaceholders.toString(),
    }),
    ...(input.includeServiceLevelTemplate !== undefined && {
      includeServiceLevelTemplate: input.includeServiceLevelTemplate.toString(),
    }),
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
  if (input.accessPreviewId !== undefined) {
    const labelValue: string = input.accessPreviewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPreviewId.");
    }
    resolvedPath = resolvedPath.replace("{accessPreviewId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPreviewId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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

export const serializeAws_restJson1ListAccessPreviewsCommand = async (
  input: ListAccessPreviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-preview";
  const query: any = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListAnalyzedResourcesCommand = async (
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzed-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.type !== undefined && { type: input.type }),
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

export const serializeAws_restJson1ListArchiveRulesCommand = async (
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sort !== undefined &&
      input.sort !== null && { sort: serializeAws_restJson1SortCriteria(input.sort, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation";
  const query: any = {
    ...(input.principalArn !== undefined && { principalArn: input.principalArn }),
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

export const serializeAws_restJson1StartPolicyGenerationCommand = async (
  input: StartPolicyGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/generation";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.cloudTrailDetails !== undefined &&
      input.cloudTrailDetails !== null && {
        cloudTrailDetails: serializeAws_restJson1CloudTrailDetails(input.cloudTrailDetails, context),
      }),
    ...(input.policyGenerationDetails !== undefined &&
      input.policyGenerationDetails !== null && {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource/scan";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
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
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/finding";
  let body: any;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.ids !== undefined &&
      input.ids !== null && { ids: serializeAws_restJson1FindingIdList(input.ids, context) }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/validation";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.policyDocument !== undefined &&
      input.policyDocument !== null && { policyDocument: input.policyDocument }),
    ...(input.policyType !== undefined && input.policyType !== null && { policyType: input.policyType }),
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
  const contents: ApplyArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ApplyArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CancelPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelPolicyGenerationCommandError(output, context);
  }
  const contents: CancelPolicyGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelPolicyGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessPreviewCommandError(output, context);
  }
  const contents: CreateAccessPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAccessPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnalyzerCommandError(output, context);
  }
  const contents: CreateAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1CreateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateArchiveRuleCommandError(output, context);
  }
  const contents: CreateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1DeleteAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnalyzerCommandError(output, context);
  }
  const contents: DeleteAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1DeleteArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteArchiveRuleCommandError(output, context);
  }
  const contents: DeleteArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccessPreviewCommandError(output, context);
  }
  const contents: GetAccessPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessPreview: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessPreview !== undefined && data.accessPreview !== null) {
    contents.accessPreview = deserializeAws_restJson1AccessPreview(data.accessPreview, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAccessPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAnalyzedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzedResourceCommandError(output, context);
  }
  const contents: GetAnalyzedResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    resource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resource !== undefined && data.resource !== null) {
    contents.resource = deserializeAws_restJson1AnalyzedResource(data.resource, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAnalyzedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzerCommandError(output, context);
  }
  const contents: GetAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
    analyzer: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzer !== undefined && data.analyzer !== null) {
    contents.analyzer = deserializeAws_restJson1AnalyzerSummary(data.analyzer, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetArchiveRuleCommandError(output, context);
  }
  const contents: GetArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    archiveRule: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.archiveRule !== undefined && data.archiveRule !== null) {
    contents.archiveRule = deserializeAws_restJson1ArchiveRuleSummary(data.archiveRule, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingCommandError(output, context);
  }
  const contents: GetFindingCommandOutput = {
    $metadata: deserializeMetadata(output),
    finding: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.finding !== undefined && data.finding !== null) {
    contents.finding = deserializeAws_restJson1Finding(data.finding, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1GetGeneratedPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeneratedPolicyCommandError(output, context);
  }
  const contents: GetGeneratedPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    generatedPolicyResult: undefined,
    jobDetails: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.generatedPolicyResult !== undefined && data.generatedPolicyResult !== null) {
    contents.generatedPolicyResult = deserializeAws_restJson1GeneratedPolicyResult(data.generatedPolicyResult, context);
  }
  if (data.jobDetails !== undefined && data.jobDetails !== null) {
    contents.jobDetails = deserializeAws_restJson1JobDetails(data.jobDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGeneratedPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAccessPreviewFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewFindingsCommandError(output, context);
  }
  const contents: ListAccessPreviewFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    findings: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1AccessPreviewFindingsList(data.findings, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccessPreviewFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAccessPreviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewsCommandError(output, context);
  }
  const contents: ListAccessPreviewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessPreviews: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessPreviews !== undefined && data.accessPreviews !== null) {
    contents.accessPreviews = deserializeAws_restJson1AccessPreviewsList(data.accessPreviews, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccessPreviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAnalyzedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzedResourcesCommandError(output, context);
  }
  const contents: ListAnalyzedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    analyzedResources: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzedResources !== undefined && data.analyzedResources !== null) {
    contents.analyzedResources = deserializeAws_restJson1AnalyzedResourcesList(data.analyzedResources, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnalyzedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListAnalyzersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzersCommandError(output, context);
  }
  const contents: ListAnalyzersCommandOutput = {
    $metadata: deserializeMetadata(output),
    analyzers: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzers !== undefined && data.analyzers !== null) {
    contents.analyzers = deserializeAws_restJson1AnalyzersList(data.analyzers, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnalyzersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListArchiveRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListArchiveRulesCommandError(output, context);
  }
  const contents: ListArchiveRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    archiveRules: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.archiveRules !== undefined && data.archiveRules !== null) {
    contents.archiveRules = deserializeAws_restJson1ArchiveRulesList(data.archiveRules, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListArchiveRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    findings: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1FindingsList(data.findings, context);
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
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ListPolicyGenerationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPolicyGenerationsCommandError(output, context);
  }
  const contents: ListPolicyGenerationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    policyGenerations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.policyGenerations !== undefined && data.policyGenerations !== null) {
    contents.policyGenerations = deserializeAws_restJson1PolicyGenerationList(data.policyGenerations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPolicyGenerationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1StartPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartPolicyGenerationCommandError(output, context);
  }
  const contents: StartPolicyGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartPolicyGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1StartResourceScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartResourceScanCommandError(output, context);
  }
  const contents: StartResourceScanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartResourceScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1UpdateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateArchiveRuleCommandError(output, context);
  }
  const contents: UpdateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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

export const deserializeAws_restJson1ValidatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidatePolicyCommandError(output, context);
  }
  const contents: ValidatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    findings: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1ValidatePolicyFindingList(data.findings, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ValidatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
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
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
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
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseInt(parsedOutput.headers["retry-after"]);
  }
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
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
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
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
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
    $retryable: {
      throttling: true,
    },
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseInt(parsedOutput.headers["retry-after"]);
  }
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
    fieldList: undefined,
    message: undefined,
    reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  return contents;
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
    ...(input.accessRole !== undefined && input.accessRole !== null && { accessRole: input.accessRole }),
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: input.endTime.toISOString().split(".")[0] + "Z" }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: input.startTime.toISOString().split(".")[0] + "Z" }),
    ...(input.trails !== undefined &&
      input.trails !== null && { trails: serializeAws_restJson1TrailList(input.trails, context) }),
  };
};

const serializeAws_restJson1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return Configuration.visit(input, {
    iamRole: (value) => ({ iamRole: serializeAws_restJson1IamRoleConfiguration(value, context) }),
    kmsKey: (value) => ({ kmsKey: serializeAws_restJson1KmsKeyConfiguration(value, context) }),
    s3Bucket: (value) => ({ s3Bucket: serializeAws_restJson1S3BucketConfiguration(value, context) }),
    secretsManagerSecret: (value) => ({
      secretsManagerSecret: serializeAws_restJson1SecretsManagerSecretConfiguration(value, context),
    }),
    sqsQueue: (value) => ({ sqsQueue: serializeAws_restJson1SqsQueueConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ConfigurationsMap = (
  input: { [key: string]: Configuration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Configuration(value, context),
    };
  }, {});
};

const serializeAws_restJson1Criterion = (input: Criterion, context: __SerdeContext): any => {
  return {
    ...(input.contains !== undefined &&
      input.contains !== null && { contains: serializeAws_restJson1ValueList(input.contains, context) }),
    ...(input.eq !== undefined && input.eq !== null && { eq: serializeAws_restJson1ValueList(input.eq, context) }),
    ...(input.exists !== undefined && input.exists !== null && { exists: input.exists }),
    ...(input.neq !== undefined && input.neq !== null && { neq: serializeAws_restJson1ValueList(input.neq, context) }),
  };
};

const serializeAws_restJson1FilterCriteriaMap = (input: { [key: string]: Criterion }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Criterion(value, context),
    };
  }, {});
};

const serializeAws_restJson1FindingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1IamRoleConfiguration = (input: IamRoleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.trustPolicy !== undefined && input.trustPolicy !== null && { trustPolicy: input.trustPolicy }),
  };
};

const serializeAws_restJson1InlineArchiveRule = (input: InlineArchiveRule, context: __SerdeContext): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
  };
};

const serializeAws_restJson1InlineArchiveRulesList = (input: InlineArchiveRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InlineArchiveRule(entry, context);
    });
};

const serializeAws_restJson1InternetConfiguration = (input: InternetConfiguration, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1KmsConstraintsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1KmsGrantConfiguration = (input: KmsGrantConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.constraints !== undefined &&
      input.constraints !== null && {
        constraints: serializeAws_restJson1KmsGrantConstraints(input.constraints, context),
      }),
    ...(input.granteePrincipal !== undefined &&
      input.granteePrincipal !== null && { granteePrincipal: input.granteePrincipal }),
    ...(input.issuingAccount !== undefined &&
      input.issuingAccount !== null && { issuingAccount: input.issuingAccount }),
    ...(input.operations !== undefined &&
      input.operations !== null && {
        operations: serializeAws_restJson1KmsGrantOperationsList(input.operations, context),
      }),
    ...(input.retiringPrincipal !== undefined &&
      input.retiringPrincipal !== null && { retiringPrincipal: input.retiringPrincipal }),
  };
};

const serializeAws_restJson1KmsGrantConfigurationsList = (
  input: KmsGrantConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
};

const serializeAws_restJson1KmsGrantConstraints = (input: KmsGrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.encryptionContextEquals !== undefined &&
      input.encryptionContextEquals !== null && {
        encryptionContextEquals: serializeAws_restJson1KmsConstraintsMap(input.encryptionContextEquals, context),
      }),
    ...(input.encryptionContextSubset !== undefined &&
      input.encryptionContextSubset !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1KmsKeyConfiguration = (input: KmsKeyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.grants !== undefined &&
      input.grants !== null && { grants: serializeAws_restJson1KmsGrantConfigurationsList(input.grants, context) }),
    ...(input.keyPolicies !== undefined &&
      input.keyPolicies !== null && {
        keyPolicies: serializeAws_restJson1KmsKeyPoliciesMap(input.keyPolicies, context),
      }),
  };
};

const serializeAws_restJson1KmsKeyPoliciesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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
    ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
  };
};

const serializeAws_restJson1RegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1S3AccessPointConfiguration = (
  input: S3AccessPointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessPointPolicy !== undefined &&
      input.accessPointPolicy !== null && { accessPointPolicy: input.accessPointPolicy }),
    ...(input.networkOrigin !== undefined &&
      input.networkOrigin !== null && {
        networkOrigin: serializeAws_restJson1NetworkOriginConfiguration(input.networkOrigin, context),
      }),
    ...(input.publicAccessBlock !== undefined &&
      input.publicAccessBlock !== null && {
        publicAccessBlock: serializeAws_restJson1S3PublicAccessBlockConfiguration(input.publicAccessBlock, context),
      }),
  };
};

const serializeAws_restJson1S3AccessPointConfigurationsMap = (
  input: { [key: string]: S3AccessPointConfiguration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1S3AccessPointConfiguration(value, context),
    };
  }, {});
};

const serializeAws_restJson1S3BucketAclGrantConfiguration = (
  input: S3BucketAclGrantConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.grantee !== undefined &&
      input.grantee !== null && { grantee: serializeAws_restJson1AclGrantee(input.grantee, context) }),
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
  };
};

const serializeAws_restJson1S3BucketAclGrantConfigurationsList = (
  input: S3BucketAclGrantConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
};

const serializeAws_restJson1S3BucketConfiguration = (input: S3BucketConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accessPoints !== undefined &&
      input.accessPoints !== null && {
        accessPoints: serializeAws_restJson1S3AccessPointConfigurationsMap(input.accessPoints, context),
      }),
    ...(input.bucketAclGrants !== undefined &&
      input.bucketAclGrants !== null && {
        bucketAclGrants: serializeAws_restJson1S3BucketAclGrantConfigurationsList(input.bucketAclGrants, context),
      }),
    ...(input.bucketPolicy !== undefined && input.bucketPolicy !== null && { bucketPolicy: input.bucketPolicy }),
    ...(input.bucketPublicAccessBlock !== undefined &&
      input.bucketPublicAccessBlock !== null && {
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
    ...(input.ignorePublicAcls !== undefined &&
      input.ignorePublicAcls !== null && { ignorePublicAcls: input.ignorePublicAcls }),
    ...(input.restrictPublicBuckets !== undefined &&
      input.restrictPublicBuckets !== null && { restrictPublicBuckets: input.restrictPublicBuckets }),
  };
};

const serializeAws_restJson1SecretsManagerSecretConfiguration = (
  input: SecretsManagerSecretConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.secretPolicy !== undefined && input.secretPolicy !== null && { secretPolicy: input.secretPolicy }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};

const serializeAws_restJson1SqsQueueConfiguration = (input: SqsQueueConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.queuePolicy !== undefined && input.queuePolicy !== null && { queuePolicy: input.queuePolicy }),
  };
};

const serializeAws_restJson1TagsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1Trail = (input: Trail, context: __SerdeContext): any => {
  return {
    ...(input.allRegions !== undefined && input.allRegions !== null && { allRegions: input.allRegions }),
    ...(input.cloudTrailArn !== undefined && input.cloudTrailArn !== null && { cloudTrailArn: input.cloudTrailArn }),
    ...(input.regions !== undefined &&
      input.regions !== null && { regions: serializeAws_restJson1RegionList(input.regions, context) }),
  };
};

const serializeAws_restJson1TrailList = (input: Trail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Trail(entry, context);
    });
};

const serializeAws_restJson1ValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }),
  };
};

const deserializeAws_restJson1AccessPreview = (output: any, context: __SerdeContext): AccessPreview => {
  return {
    analyzerArn: __expectString(output.analyzerArn),
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_restJson1ConfigurationsMap(output.configurations, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? deserializeAws_restJson1AccessPreviewStatusReason(output.statusReason, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccessPreviewFinding = (output: any, context: __SerdeContext): AccessPreviewFinding => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    changeType: __expectString(output.changeType),
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: __expectString(output.error),
    existingFindingId: __expectString(output.existingFindingId),
    existingFindingStatus: __expectString(output.existingFindingStatus),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AccessPreviewFindingsList = (
  output: any,
  context: __SerdeContext
): AccessPreviewFinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPreviewFinding(entry, context);
    });
};

const deserializeAws_restJson1AccessPreviewsList = (output: any, context: __SerdeContext): AccessPreviewSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPreviewSummary(entry, context);
    });
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
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1AnalyzedResource = (output: any, context: __SerdeContext): AnalyzedResource => {
  return {
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1ActionList(output.actions, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: __expectString(output.error),
    isPublic: __expectBoolean(output.isPublic),
    resourceArn: __expectString(output.resourceArn),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sharedVia:
      output.sharedVia !== undefined && output.sharedVia !== null
        ? deserializeAws_restJson1SharedViaList(output.sharedVia, context)
        : undefined,
    status: __expectString(output.status),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1AnalyzedResourcesList = (
  output: any,
  context: __SerdeContext
): AnalyzedResourceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalyzedResourceSummary(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalyzerSummary(entry, context);
    });
};

const deserializeAws_restJson1AnalyzerSummary = (output: any, context: __SerdeContext): AnalyzerSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    lastResourceAnalyzed: __expectString(output.lastResourceAnalyzed),
    lastResourceAnalyzedAt:
      output.lastResourceAnalyzedAt !== undefined && output.lastResourceAnalyzedAt !== null
        ? new Date(output.lastResourceAnalyzedAt)
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? deserializeAws_restJson1StatusReason(output.statusReason, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ArchiveRulesList = (output: any, context: __SerdeContext): ArchiveRuleSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ArchiveRuleSummary(entry, context);
    });
};

const deserializeAws_restJson1ArchiveRuleSummary = (output: any, context: __SerdeContext): ArchiveRuleSummary => {
  return {
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    filter:
      output.filter !== undefined && output.filter !== null
        ? deserializeAws_restJson1FilterCriteriaMap(output.filter, context)
        : undefined,
    ruleName: __expectString(output.ruleName),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1CloudTrailProperties = (output: any, context: __SerdeContext): CloudTrailProperties => {
  return {
    endTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
    startTime: output.startTime !== undefined && output.startTime !== null ? new Date(output.startTime) : undefined,
    trailProperties:
      output.trailProperties !== undefined && output.trailProperties !== null
        ? deserializeAws_restJson1TrailPropertiesList(output.trailProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConditionKeyMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  if (output.iamRole !== undefined && output.iamRole !== null) {
    return {
      iamRole: deserializeAws_restJson1IamRoleConfiguration(output.iamRole, context),
    };
  }
  if (output.kmsKey !== undefined && output.kmsKey !== null) {
    return {
      kmsKey: deserializeAws_restJson1KmsKeyConfiguration(output.kmsKey, context),
    };
  }
  if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
    return {
      s3Bucket: deserializeAws_restJson1S3BucketConfiguration(output.s3Bucket, context),
    };
  }
  if (output.secretsManagerSecret !== undefined && output.secretsManagerSecret !== null) {
    return {
      secretsManagerSecret: deserializeAws_restJson1SecretsManagerSecretConfiguration(
        output.secretsManagerSecret,
        context
      ),
    };
  }
  if (output.sqsQueue !== undefined && output.sqsQueue !== null) {
    return {
      sqsQueue: deserializeAws_restJson1SqsQueueConfiguration(output.sqsQueue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfigurationsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Configuration } => {
  return Object.entries(output).reduce((acc: { [key: string]: Configuration }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Configuration(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Criterion = (output: any, context: __SerdeContext): Criterion => {
  return {
    contains:
      output.contains !== undefined && output.contains !== null
        ? deserializeAws_restJson1ValueList(output.contains, context)
        : undefined,
    eq:
      output.eq !== undefined && output.eq !== null ? deserializeAws_restJson1ValueList(output.eq, context) : undefined,
    exists: __expectBoolean(output.exists),
    neq:
      output.neq !== undefined && output.neq !== null
        ? deserializeAws_restJson1ValueList(output.neq, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilterCriteriaMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Criterion } => {
  return Object.entries(output).reduce((acc: { [key: string]: Criterion }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Criterion(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: __expectString(output.status),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingsList = (output: any, context: __SerdeContext): FindingSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingSummary(entry, context);
    });
};

const deserializeAws_restJson1FindingSource = (output: any, context: __SerdeContext): FindingSource => {
  return {
    detail:
      output.detail !== undefined && output.detail !== null
        ? deserializeAws_restJson1FindingSourceDetail(output.detail, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FindingSourceDetail = (output: any, context: __SerdeContext): FindingSourceDetail => {
  return {
    accessPointArn: __expectString(output.accessPointArn),
  } as any;
};

const deserializeAws_restJson1FindingSourceList = (output: any, context: __SerdeContext): FindingSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingSource(entry, context);
    });
};

const deserializeAws_restJson1FindingSummary = (output: any, context: __SerdeContext): FindingSummary => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: __expectString(output.error),
    id: __expectString(output.id),
    isPublic: __expectBoolean(output.isPublic),
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: __expectString(output.resource),
    resourceOwnerAccount: __expectString(output.resourceOwnerAccount),
    resourceType: __expectString(output.resourceType),
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: __expectString(output.status),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1GeneratedPolicy = (output: any, context: __SerdeContext): GeneratedPolicy => {
  return {
    policy: __expectString(output.policy),
  } as any;
};

const deserializeAws_restJson1GeneratedPolicyList = (output: any, context: __SerdeContext): GeneratedPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GeneratedPolicy(entry, context);
    });
};

const deserializeAws_restJson1GeneratedPolicyProperties = (
  output: any,
  context: __SerdeContext
): GeneratedPolicyProperties => {
  return {
    cloudTrailProperties:
      output.cloudTrailProperties !== undefined && output.cloudTrailProperties !== null
        ? deserializeAws_restJson1CloudTrailProperties(output.cloudTrailProperties, context)
        : undefined,
    isComplete: __expectBoolean(output.isComplete),
    principalArn: __expectString(output.principalArn),
  } as any;
};

const deserializeAws_restJson1GeneratedPolicyResult = (output: any, context: __SerdeContext): GeneratedPolicyResult => {
  return {
    generatedPolicies:
      output.generatedPolicies !== undefined && output.generatedPolicies !== null
        ? deserializeAws_restJson1GeneratedPolicyList(output.generatedPolicies, context)
        : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
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
      output.completedOn !== undefined && output.completedOn !== null ? new Date(output.completedOn) : undefined,
    jobError:
      output.jobError !== undefined && output.jobError !== null
        ? deserializeAws_restJson1JobError(output.jobError, context)
        : undefined,
    jobId: __expectString(output.jobId),
    startedOn: output.startedOn !== undefined && output.startedOn !== null ? new Date(output.startedOn) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1KmsConstraintsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1KmsGrantConfiguration = (output: any, context: __SerdeContext): KmsGrantConfiguration => {
  return {
    constraints:
      output.constraints !== undefined && output.constraints !== null
        ? deserializeAws_restJson1KmsGrantConstraints(output.constraints, context)
        : undefined,
    granteePrincipal: __expectString(output.granteePrincipal),
    issuingAccount: __expectString(output.issuingAccount),
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_restJson1KmsGrantOperationsList(output.operations, context)
        : undefined,
    retiringPrincipal: __expectString(output.retiringPrincipal),
  } as any;
};

const deserializeAws_restJson1KmsGrantConfigurationsList = (
  output: any,
  context: __SerdeContext
): KmsGrantConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
};

const deserializeAws_restJson1KmsGrantConstraints = (output: any, context: __SerdeContext): KmsGrantConstraints => {
  return {
    encryptionContextEquals:
      output.encryptionContextEquals !== undefined && output.encryptionContextEquals !== null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextEquals, context)
        : undefined,
    encryptionContextSubset:
      output.encryptionContextSubset !== undefined && output.encryptionContextSubset !== null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextSubset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KmsGrantOperationsList = (
  output: any,
  context: __SerdeContext
): (KmsGrantOperation | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1KmsKeyConfiguration = (output: any, context: __SerdeContext): KmsKeyConfiguration => {
  return {
    grants:
      output.grants !== undefined && output.grants !== null
        ? deserializeAws_restJson1KmsGrantConfigurationsList(output.grants, context)
        : undefined,
    keyPolicies:
      output.keyPolicies !== undefined && output.keyPolicies !== null
        ? deserializeAws_restJson1KmsKeyPoliciesMap(output.keyPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KmsKeyPoliciesMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Location = (output: any, context: __SerdeContext): Location => {
  return {
    path:
      output.path !== undefined && output.path !== null
        ? deserializeAws_restJson1PathElementList(output.path, context)
        : undefined,
    span:
      output.span !== undefined && output.span !== null
        ? deserializeAws_restJson1Span(output.span, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LocationList = (output: any, context: __SerdeContext): Location[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Location(entry, context);
    });
};

const deserializeAws_restJson1NetworkOriginConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkOriginConfiguration => {
  if (output.internetConfiguration !== undefined && output.internetConfiguration !== null) {
    return {
      internetConfiguration: deserializeAws_restJson1InternetConfiguration(output.internetConfiguration, context),
    };
  }
  if (output.vpcConfiguration !== undefined && output.vpcConfiguration !== null) {
    return {
      vpcConfiguration: deserializeAws_restJson1VpcConfiguration(output.vpcConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PathElement = (output: any, context: __SerdeContext): PathElement => {
  if (__expectInt(output.index) !== undefined) {
    return { index: __expectInt(output.index) as any };
  }
  if (__expectString(output.key) !== undefined) {
    return { key: __expectString(output.key) as any };
  }
  if (output.substring !== undefined && output.substring !== null) {
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PathElement(entry, context);
    });
};

const deserializeAws_restJson1PolicyGeneration = (output: any, context: __SerdeContext): PolicyGeneration => {
  return {
    completedOn:
      output.completedOn !== undefined && output.completedOn !== null ? new Date(output.completedOn) : undefined,
    jobId: __expectString(output.jobId),
    principalArn: __expectString(output.principalArn),
    startedOn: output.startedOn !== undefined && output.startedOn !== null ? new Date(output.startedOn) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1PolicyGenerationList = (output: any, context: __SerdeContext): PolicyGeneration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PolicyGeneration(entry, context);
    });
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): Position => {
  return {
    column: __expectInt(output.column),
    line: __expectInt(output.line),
    offset: __expectInt(output.offset),
  } as any;
};

const deserializeAws_restJson1PrincipalMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1RegionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1S3AccessPointConfiguration = (
  output: any,
  context: __SerdeContext
): S3AccessPointConfiguration => {
  return {
    accessPointPolicy: __expectString(output.accessPointPolicy),
    networkOrigin:
      output.networkOrigin !== undefined && output.networkOrigin !== null
        ? deserializeAws_restJson1NetworkOriginConfiguration(output.networkOrigin, context)
        : undefined,
    publicAccessBlock:
      output.publicAccessBlock !== undefined && output.publicAccessBlock !== null
        ? deserializeAws_restJson1S3PublicAccessBlockConfiguration(output.publicAccessBlock, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3AccessPointConfigurationsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: S3AccessPointConfiguration } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: S3AccessPointConfiguration }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1S3AccessPointConfiguration(value, context),
      };
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
      output.grantee !== undefined && output.grantee !== null
        ? deserializeAws_restJson1AclGrantee(output.grantee, context)
        : undefined,
    permission: __expectString(output.permission),
  } as any;
};

const deserializeAws_restJson1S3BucketAclGrantConfigurationsList = (
  output: any,
  context: __SerdeContext
): S3BucketAclGrantConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
};

const deserializeAws_restJson1S3BucketConfiguration = (output: any, context: __SerdeContext): S3BucketConfiguration => {
  return {
    accessPoints:
      output.accessPoints !== undefined && output.accessPoints !== null
        ? deserializeAws_restJson1S3AccessPointConfigurationsMap(output.accessPoints, context)
        : undefined,
    bucketAclGrants:
      output.bucketAclGrants !== undefined && output.bucketAclGrants !== null
        ? deserializeAws_restJson1S3BucketAclGrantConfigurationsList(output.bucketAclGrants, context)
        : undefined,
    bucketPolicy: __expectString(output.bucketPolicy),
    bucketPublicAccessBlock:
      output.bucketPublicAccessBlock !== undefined && output.bucketPublicAccessBlock !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Span = (output: any, context: __SerdeContext): Span => {
  return {
    end:
      output.end !== undefined && output.end !== null
        ? deserializeAws_restJson1Position(output.end, context)
        : undefined,
    start:
      output.start !== undefined && output.start !== null
        ? deserializeAws_restJson1Position(output.start, context)
        : undefined,
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
    length: __expectInt(output.length),
    start: __expectInt(output.start),
  } as any;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1TrailProperties = (output: any, context: __SerdeContext): TrailProperties => {
  return {
    allRegions: __expectBoolean(output.allRegions),
    cloudTrailArn: __expectString(output.cloudTrailArn),
    regions:
      output.regions !== undefined && output.regions !== null
        ? deserializeAws_restJson1RegionList(output.regions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TrailPropertiesList = (output: any, context: __SerdeContext): TrailProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrailProperties(entry, context);
    });
};

const deserializeAws_restJson1ValidatePolicyFinding = (output: any, context: __SerdeContext): ValidatePolicyFinding => {
  return {
    findingDetails: __expectString(output.findingDetails),
    findingType: __expectString(output.findingType),
    issueCode: __expectString(output.issueCode),
    learnMoreLink: __expectString(output.learnMoreLink),
    locations:
      output.locations !== undefined && output.locations !== null
        ? deserializeAws_restJson1LocationList(output.locations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ValidatePolicyFindingList = (
  output: any,
  context: __SerdeContext
): ValidatePolicyFinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidatePolicyFinding(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeAws_restJson1ValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    vpcId: __expectString(output.vpcId),
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
