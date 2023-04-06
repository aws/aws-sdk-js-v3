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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssociateResourceCommandInput, AssociateResourceCommandOutput } from "../commands/AssociateResourceCommand";
import { CreateCanaryCommandInput, CreateCanaryCommandOutput } from "../commands/CreateCanaryCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { DeleteCanaryCommandInput, DeleteCanaryCommandOutput } from "../commands/DeleteCanaryCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { DescribeCanariesCommandInput, DescribeCanariesCommandOutput } from "../commands/DescribeCanariesCommand";
import {
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "../commands/DescribeCanariesLastRunCommand";
import {
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "../commands/DescribeRuntimeVersionsCommand";
import {
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "../commands/DisassociateResourceCommand";
import { GetCanaryCommandInput, GetCanaryCommandOutput } from "../commands/GetCanaryCommand";
import { GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput } from "../commands/GetCanaryRunsCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import {
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput,
} from "../commands/ListAssociatedGroupsCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "../commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartCanaryCommandInput, StartCanaryCommandOutput } from "../commands/StartCanaryCommand";
import { StopCanaryCommandInput, StopCanaryCommandOutput } from "../commands/StopCanaryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCanaryCommandInput, UpdateCanaryCommandOutput } from "../commands/UpdateCanaryCommand";
import {
  ArtifactConfigInput,
  ArtifactConfigOutput,
  BadRequestException,
  BaseScreenshot,
  Canary,
  CanaryCodeInput,
  CanaryCodeOutput,
  CanaryLastRun,
  CanaryRun,
  CanaryRunConfigInput,
  CanaryRunConfigOutput,
  CanaryRunStatus,
  CanaryRunTimeline,
  CanaryScheduleInput,
  CanaryScheduleOutput,
  CanaryStatus,
  CanaryTimeline,
  ConflictException,
  Group,
  GroupSummary,
  InternalFailureException,
  InternalServerException,
  NotFoundException,
  RequestEntityTooLargeException,
  ResourceNotFoundException,
  RuntimeVersion,
  S3EncryptionConfig,
  ServiceQuotaExceededException,
  TooManyRequestsException,
  ValidationException,
  VisualReferenceInput,
  VisualReferenceOutput,
  VpcConfigInput,
  VpcConfigOutput,
} from "../models/models_0";
import { SyntheticsServiceException as __BaseException } from "../models/SyntheticsServiceException";

/**
 * serializeAws_restJson1AssociateResourceCommand
 */
export const se_AssociateResourceCommand = async (
  input: AssociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group/{GroupIdentifier}/associate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupIdentifier",
    () => input.GroupIdentifier!,
    "{GroupIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
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
 * serializeAws_restJson1CreateCanaryCommand
 */
export const se_CreateCanaryCommand = async (
  input: CreateCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary";
  let body: any;
  body = JSON.stringify({
    ...(input.ArtifactConfig != null && { ArtifactConfig: se_ArtifactConfigInput(input.ArtifactConfig, context) }),
    ...(input.ArtifactS3Location != null && { ArtifactS3Location: input.ArtifactS3Location }),
    ...(input.Code != null && { Code: se_CanaryCodeInput(input.Code, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.FailureRetentionPeriodInDays != null && {
      FailureRetentionPeriodInDays: input.FailureRetentionPeriodInDays,
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunConfig != null && { RunConfig: se_CanaryRunConfigInput(input.RunConfig, context) }),
    ...(input.RuntimeVersion != null && { RuntimeVersion: input.RuntimeVersion }),
    ...(input.Schedule != null && { Schedule: se_CanaryScheduleInput(input.Schedule, context) }),
    ...(input.SuccessRetentionPeriodInDays != null && {
      SuccessRetentionPeriodInDays: input.SuccessRetentionPeriodInDays,
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfigInput(input.VpcConfig, context) }),
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
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group";
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteCanaryCommand
 */
export const se_DeleteCanaryCommand = async (
  input: DeleteCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    deleteLambda: [() => input.DeleteLambda !== void 0, () => input.DeleteLambda!.toString()],
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
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group/{GroupIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupIdentifier",
    () => input.GroupIdentifier!,
    "{GroupIdentifier}",
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
 * serializeAws_restJson1DescribeCanariesCommand
 */
export const se_DescribeCanariesCommand = async (
  input: DescribeCanariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canaries";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: se_DescribeCanariesNameFilter(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1DescribeCanariesLastRunCommand
 */
export const se_DescribeCanariesLastRunCommand = async (
  input: DescribeCanariesLastRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canaries/last-run";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: se_DescribeCanariesLastRunNameFilter(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1DescribeRuntimeVersionsCommand
 */
export const se_DescribeRuntimeVersionsCommand = async (
  input: DescribeRuntimeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runtime-versions";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1DisassociateResourceCommand
 */
export const se_DisassociateResourceCommand = async (
  input: DisassociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group/{GroupIdentifier}/disassociate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupIdentifier",
    () => input.GroupIdentifier!,
    "{GroupIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
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
 * serializeAws_restJson1GetCanaryCommand
 */
export const se_GetCanaryCommand = async (
  input: GetCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1GetCanaryRunsCommand
 */
export const se_GetCanaryRunsCommand = async (
  input: GetCanaryRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/runs";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group/{GroupIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupIdentifier",
    () => input.GroupIdentifier!,
    "{GroupIdentifier}",
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
 * serializeAws_restJson1ListAssociatedGroupsCommand
 */
export const se_ListAssociatedGroupsCommand = async (
  input: ListAssociatedGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource/{ResourceArn}/groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListGroupResourcesCommand
 */
export const se_ListGroupResourcesCommand = async (
  input: ListGroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group/{GroupIdentifier}/resources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GroupIdentifier",
    () => input.GroupIdentifier!,
    "{GroupIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/groups";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1StartCanaryCommand
 */
export const se_StartCanaryCommand = async (
  input: StartCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1StopCanaryCommand
 */
export const se_StopCanaryCommand = async (
  input: StopCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1UpdateCanaryCommand
 */
export const se_UpdateCanaryCommand = async (
  input: UpdateCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ArtifactConfig != null && { ArtifactConfig: se_ArtifactConfigInput(input.ArtifactConfig, context) }),
    ...(input.ArtifactS3Location != null && { ArtifactS3Location: input.ArtifactS3Location }),
    ...(input.Code != null && { Code: se_CanaryCodeInput(input.Code, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.FailureRetentionPeriodInDays != null && {
      FailureRetentionPeriodInDays: input.FailureRetentionPeriodInDays,
    }),
    ...(input.RunConfig != null && { RunConfig: se_CanaryRunConfigInput(input.RunConfig, context) }),
    ...(input.RuntimeVersion != null && { RuntimeVersion: input.RuntimeVersion }),
    ...(input.Schedule != null && { Schedule: se_CanaryScheduleInput(input.Schedule, context) }),
    ...(input.SuccessRetentionPeriodInDays != null && {
      SuccessRetentionPeriodInDays: input.SuccessRetentionPeriodInDays,
    }),
    ...(input.VisualReference != null && { VisualReference: se_VisualReferenceInput(input.VisualReference, context) }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfigInput(input.VpcConfig, context) }),
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
 * deserializeAws_restJson1AssociateResourceCommand
 */
export const de_AssociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateResourceCommandError
 */
const de_AssociateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.synthetics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1CreateCanaryCommand
 */
export const de_CreateCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canary != null) {
    contents.Canary = de_Canary(data.Canary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCanaryCommandError
 */
const de_CreateCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestEntityTooLargeException":
    case "com.amazonaws.synthetics#RequestEntityTooLargeException":
      throw await de_RequestEntityTooLargeExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = de_Group(data.Group, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.synthetics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DeleteCanaryCommand
 */
export const de_DeleteCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCanaryCommandError
 */
const de_DeleteCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DescribeCanariesCommand
 */
export const de_DescribeCanariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCanariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canaries != null) {
    contents.Canaries = de_Canaries(data.Canaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCanariesCommandError
 */
const de_DescribeCanariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DescribeCanariesLastRunCommand
 */
export const de_DescribeCanariesLastRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesLastRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCanariesLastRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CanariesLastRun != null) {
    contents.CanariesLastRun = de_CanariesLastRun(data.CanariesLastRun, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCanariesLastRunCommandError
 */
const de_DescribeCanariesLastRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesLastRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DescribeRuntimeVersionsCommand
 */
export const de_DescribeRuntimeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRuntimeVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RuntimeVersions != null) {
    contents.RuntimeVersions = de_RuntimeVersionList(data.RuntimeVersions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRuntimeVersionsCommandError
 */
const de_DescribeRuntimeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1DisassociateResourceCommand
 */
export const de_DisassociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateResourceCommandError
 */
const de_DisassociateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1GetCanaryCommand
 */
export const de_GetCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canary != null) {
    contents.Canary = de_Canary(data.Canary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCanaryCommandError
 */
const de_GetCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1GetCanaryRunsCommand
 */
export const de_GetCanaryRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCanaryRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CanaryRuns != null) {
    contents.CanaryRuns = de_CanaryRuns(data.CanaryRuns, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCanaryRunsCommandError
 */
const de_GetCanaryRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = de_Group(data.Group, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommandError
 */
const de_GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1ListAssociatedGroupsCommand
 */
export const de_ListAssociatedGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssociatedGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = de_GroupSummaryList(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedGroupsCommandError
 */
const de_ListAssociatedGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1ListGroupResourcesCommand
 */
export const de_ListGroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroupResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Resources != null) {
    contents.Resources = de_StringList(data.Resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupResourcesCommandError
 */
const de_ListGroupResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = de_GroupSummaryList(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.synthetics#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.synthetics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.synthetics#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.synthetics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1StartCanaryCommand
 */
export const de_StartCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartCanaryCommandError
 */
const de_StartCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1StopCanaryCommand
 */
export const de_StopCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopCanaryCommandError
 */
const de_StopCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
    case "com.amazonaws.synthetics#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.synthetics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.synthetics#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.synthetics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.synthetics#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.synthetics#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.synthetics#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.synthetics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateCanaryCommand
 */
export const de_UpdateCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCanaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCanaryCommandError
 */
const de_UpdateCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestEntityTooLargeException":
    case "com.amazonaws.synthetics#RequestEntityTooLargeException":
      throw await de_RequestEntityTooLargeExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalFailureException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestEntityTooLargeExceptionRes
 */
const de_RequestEntityTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestEntityTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new RequestEntityTooLargeException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequestsException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ArtifactConfigInput
 */
const se_ArtifactConfigInput = (input: ArtifactConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.S3Encryption != null && { S3Encryption: se_S3EncryptionConfig(input.S3Encryption, context) }),
  };
};

/**
 * serializeAws_restJson1BaseScreenshot
 */
const se_BaseScreenshot = (input: BaseScreenshot, context: __SerdeContext): any => {
  return {
    ...(input.IgnoreCoordinates != null && {
      IgnoreCoordinates: se_BaseScreenshotIgnoreCoordinates(input.IgnoreCoordinates, context),
    }),
    ...(input.ScreenshotName != null && { ScreenshotName: input.ScreenshotName }),
  };
};

/**
 * serializeAws_restJson1BaseScreenshotIgnoreCoordinates
 */
const se_BaseScreenshotIgnoreCoordinates = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BaseScreenshots
 */
const se_BaseScreenshots = (input: BaseScreenshot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BaseScreenshot(entry, context);
    });
};

/**
 * serializeAws_restJson1CanaryCodeInput
 */
const se_CanaryCodeInput = (input: CanaryCodeInput, context: __SerdeContext): any => {
  return {
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3Version != null && { S3Version: input.S3Version }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

/**
 * serializeAws_restJson1CanaryRunConfigInput
 */
const se_CanaryRunConfigInput = (input: CanaryRunConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.ActiveTracing != null && { ActiveTracing: input.ActiveTracing }),
    ...(input.EnvironmentVariables != null && {
      EnvironmentVariables: se_EnvironmentVariablesMap(input.EnvironmentVariables, context),
    }),
    ...(input.MemoryInMB != null && { MemoryInMB: input.MemoryInMB }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1CanaryScheduleInput
 */
const se_CanaryScheduleInput = (input: CanaryScheduleInput, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
    ...(input.Expression != null && { Expression: input.Expression }),
  };
};

/**
 * serializeAws_restJson1DescribeCanariesLastRunNameFilter
 */
const se_DescribeCanariesLastRunNameFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DescribeCanariesNameFilter
 */
const se_DescribeCanariesNameFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EnvironmentVariablesMap
 */
const se_EnvironmentVariablesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1S3EncryptionConfig
 */
const se_S3EncryptionConfig = (input: S3EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

/**
 * serializeAws_restJson1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
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
 * serializeAws_restJson1VisualReferenceInput
 */
const se_VisualReferenceInput = (input: VisualReferenceInput, context: __SerdeContext): any => {
  return {
    ...(input.BaseCanaryRunId != null && { BaseCanaryRunId: input.BaseCanaryRunId }),
    ...(input.BaseScreenshots != null && { BaseScreenshots: se_BaseScreenshots(input.BaseScreenshots, context) }),
  };
};

/**
 * serializeAws_restJson1VpcConfigInput
 */
const se_VpcConfigInput = (input: VpcConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_restJson1ArtifactConfigOutput
 */
const de_ArtifactConfigOutput = (output: any, context: __SerdeContext): ArtifactConfigOutput => {
  return {
    S3Encryption: output.S3Encryption != null ? de_S3EncryptionConfig(output.S3Encryption, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BaseScreenshot
 */
const de_BaseScreenshot = (output: any, context: __SerdeContext): BaseScreenshot => {
  return {
    IgnoreCoordinates:
      output.IgnoreCoordinates != null
        ? de_BaseScreenshotIgnoreCoordinates(output.IgnoreCoordinates, context)
        : undefined,
    ScreenshotName: __expectString(output.ScreenshotName),
  } as any;
};

/**
 * deserializeAws_restJson1BaseScreenshotIgnoreCoordinates
 */
const de_BaseScreenshotIgnoreCoordinates = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1BaseScreenshots
 */
const de_BaseScreenshots = (output: any, context: __SerdeContext): BaseScreenshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BaseScreenshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Canaries
 */
const de_Canaries = (output: any, context: __SerdeContext): Canary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Canary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CanariesLastRun
 */
const de_CanariesLastRun = (output: any, context: __SerdeContext): CanaryLastRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CanaryLastRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Canary
 */
const de_Canary = (output: any, context: __SerdeContext): Canary => {
  return {
    ArtifactConfig: output.ArtifactConfig != null ? de_ArtifactConfigOutput(output.ArtifactConfig, context) : undefined,
    ArtifactS3Location: __expectString(output.ArtifactS3Location),
    Code: output.Code != null ? de_CanaryCodeOutput(output.Code, context) : undefined,
    EngineArn: __expectString(output.EngineArn),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    FailureRetentionPeriodInDays: __expectInt32(output.FailureRetentionPeriodInDays),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RunConfig: output.RunConfig != null ? de_CanaryRunConfigOutput(output.RunConfig, context) : undefined,
    RuntimeVersion: __expectString(output.RuntimeVersion),
    Schedule: output.Schedule != null ? de_CanaryScheduleOutput(output.Schedule, context) : undefined,
    Status: output.Status != null ? de_CanaryStatus(output.Status, context) : undefined,
    SuccessRetentionPeriodInDays: __expectInt32(output.SuccessRetentionPeriodInDays),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Timeline: output.Timeline != null ? de_CanaryTimeline(output.Timeline, context) : undefined,
    VisualReference:
      output.VisualReference != null ? de_VisualReferenceOutput(output.VisualReference, context) : undefined,
    VpcConfig: output.VpcConfig != null ? de_VpcConfigOutput(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CanaryCodeOutput
 */
const de_CanaryCodeOutput = (output: any, context: __SerdeContext): CanaryCodeOutput => {
  return {
    Handler: __expectString(output.Handler),
    SourceLocationArn: __expectString(output.SourceLocationArn),
  } as any;
};

/**
 * deserializeAws_restJson1CanaryLastRun
 */
const de_CanaryLastRun = (output: any, context: __SerdeContext): CanaryLastRun => {
  return {
    CanaryName: __expectString(output.CanaryName),
    LastRun: output.LastRun != null ? de_CanaryRun(output.LastRun, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CanaryRun
 */
const de_CanaryRun = (output: any, context: __SerdeContext): CanaryRun => {
  return {
    ArtifactS3Location: __expectString(output.ArtifactS3Location),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: output.Status != null ? de_CanaryRunStatus(output.Status, context) : undefined,
    Timeline: output.Timeline != null ? de_CanaryRunTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CanaryRunConfigOutput
 */
const de_CanaryRunConfigOutput = (output: any, context: __SerdeContext): CanaryRunConfigOutput => {
  return {
    ActiveTracing: __expectBoolean(output.ActiveTracing),
    MemoryInMB: __expectInt32(output.MemoryInMB),
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1CanaryRuns
 */
const de_CanaryRuns = (output: any, context: __SerdeContext): CanaryRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CanaryRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CanaryRunStatus
 */
const de_CanaryRunStatus = (output: any, context: __SerdeContext): CanaryRunStatus => {
  return {
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
  } as any;
};

/**
 * deserializeAws_restJson1CanaryRunTimeline
 */
const de_CanaryRunTimeline = (output: any, context: __SerdeContext): CanaryRunTimeline => {
  return {
    Completed:
      output.Completed != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Completed))) : undefined,
    Started:
      output.Started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Started))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CanaryScheduleOutput
 */
const de_CanaryScheduleOutput = (output: any, context: __SerdeContext): CanaryScheduleOutput => {
  return {
    DurationInSeconds: __expectLong(output.DurationInSeconds),
    Expression: __expectString(output.Expression),
  } as any;
};

/**
 * deserializeAws_restJson1CanaryStatus
 */
const de_CanaryStatus = (output: any, context: __SerdeContext): CanaryStatus => {
  return {
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
  } as any;
};

/**
 * deserializeAws_restJson1CanaryTimeline
 */
const de_CanaryTimeline = (output: any, context: __SerdeContext): CanaryTimeline => {
  return {
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    LastStarted:
      output.LastStarted != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStarted)))
        : undefined,
    LastStopped:
      output.LastStopped != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStopped)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Id: __expectString(output.Id),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GroupSummary
 */
const de_GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1GroupSummaryList
 */
const de_GroupSummaryList = (output: any, context: __SerdeContext): GroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuntimeVersion
 */
const de_RuntimeVersion = (output: any, context: __SerdeContext): RuntimeVersion => {
  return {
    DeprecationDate:
      output.DeprecationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeprecationDate)))
        : undefined,
    Description: __expectString(output.Description),
    ReleaseDate:
      output.ReleaseDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReleaseDate)))
        : undefined,
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeVersionList
 */
const de_RuntimeVersionList = (output: any, context: __SerdeContext): RuntimeVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuntimeVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3EncryptionConfig
 */
const de_S3EncryptionConfig = (output: any, context: __SerdeContext): S3EncryptionConfig => {
  return {
    EncryptionMode: __expectString(output.EncryptionMode),
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1VisualReferenceOutput
 */
const de_VisualReferenceOutput = (output: any, context: __SerdeContext): VisualReferenceOutput => {
  return {
    BaseCanaryRunId: __expectString(output.BaseCanaryRunId),
    BaseScreenshots: output.BaseScreenshots != null ? de_BaseScreenshots(output.BaseScreenshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VpcConfigOutput
 */
const de_VpcConfigOutput = (output: any, context: __SerdeContext): VpcConfigOutput => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
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
