// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import {
  DeleteConnectInstanceConfigCommandInput,
  DeleteConnectInstanceConfigCommandOutput,
} from "../commands/DeleteConnectInstanceConfigCommand";
import {
  DeleteInstanceOnboardingJobCommandInput,
  DeleteInstanceOnboardingJobCommandOutput,
} from "../commands/DeleteInstanceOnboardingJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "../commands/DescribeCampaignCommand";
import {
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
} from "../commands/GetCampaignStateBatchCommand";
import { GetCampaignStateCommandInput, GetCampaignStateCommandOutput } from "../commands/GetCampaignStateCommand";
import {
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
} from "../commands/GetConnectInstanceConfigCommand";
import {
  GetInstanceOnboardingJobStatusCommandInput,
  GetInstanceOnboardingJobStatusCommandOutput,
} from "../commands/GetInstanceOnboardingJobStatusCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "../commands/ListCampaignsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PauseCampaignCommandInput, PauseCampaignCommandOutput } from "../commands/PauseCampaignCommand";
import {
  PutDialRequestBatchCommandInput,
  PutDialRequestBatchCommandOutput,
} from "../commands/PutDialRequestBatchCommand";
import { ResumeCampaignCommandInput, ResumeCampaignCommandOutput } from "../commands/ResumeCampaignCommand";
import { StartCampaignCommandInput, StartCampaignCommandOutput } from "../commands/StartCampaignCommand";
import {
  StartInstanceOnboardingJobCommandInput,
  StartInstanceOnboardingJobCommandOutput,
} from "../commands/StartInstanceOnboardingJobCommand";
import { StopCampaignCommandInput, StopCampaignCommandOutput } from "../commands/StopCampaignCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCampaignDialerConfigCommandInput,
  UpdateCampaignDialerConfigCommandOutput,
} from "../commands/UpdateCampaignDialerConfigCommand";
import { UpdateCampaignNameCommandInput, UpdateCampaignNameCommandOutput } from "../commands/UpdateCampaignNameCommand";
import {
  UpdateCampaignOutboundCallConfigCommandInput,
  UpdateCampaignOutboundCallConfigCommandOutput,
} from "../commands/UpdateCampaignOutboundCallConfigCommand";
import { ConnectCampaignsServiceException as __BaseException } from "../models/ConnectCampaignsServiceException";
import {
  AccessDeniedException,
  AnswerMachineDetectionConfig,
  Campaign,
  CampaignFilters,
  CampaignSummary,
  ConflictException,
  DialerConfig,
  DialRequest,
  EncryptionConfig,
  FailedCampaignStateResponse,
  FailedRequest,
  InstanceConfig,
  InstanceIdFilter,
  InstanceOnboardingJobStatus,
  InternalServerException,
  InvalidCampaignStateException,
  InvalidStateException,
  OutboundCallConfig,
  PredictiveDialerConfig,
  ProgressiveDialerConfig,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SuccessfulCampaignStateResponse,
  SuccessfulRequest,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns";
  let body: any;
  body = JSON.stringify({
    ...(input.connectInstanceId != null && { connectInstanceId: input.connectInstanceId }),
    ...(input.dialerConfig != null && {
      dialerConfig: serializeAws_restJson1DialerConfig(input.dialerConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.outboundCallConfig != null && {
      outboundCallConfig: serializeAws_restJson1OutboundCallConfig(input.outboundCallConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}";
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

export const serializeAws_restJson1DeleteConnectInstanceConfigCommand = async (
  input: DeleteConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/connect-instance/{connectInstanceId}/config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectInstanceId",
    () => input.connectInstanceId!,
    "{connectInstanceId}",
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

export const serializeAws_restJson1DeleteInstanceOnboardingJobCommand = async (
  input: DeleteInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/connect-instance/{connectInstanceId}/onboarding";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectInstanceId",
    () => input.connectInstanceId!,
    "{connectInstanceId}",
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

export const serializeAws_restJson1DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}";
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

export const serializeAws_restJson1GetCampaignStateCommand = async (
  input: GetCampaignStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/state";
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

export const serializeAws_restJson1GetCampaignStateBatchCommand = async (
  input: GetCampaignStateBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns-state";
  let body: any;
  body = JSON.stringify({
    ...(input.campaignIds != null && { campaignIds: serializeAws_restJson1CampaignIdList(input.campaignIds, context) }),
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

export const serializeAws_restJson1GetConnectInstanceConfigCommand = async (
  input: GetConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/connect-instance/{connectInstanceId}/config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectInstanceId",
    () => input.connectInstanceId!,
    "{connectInstanceId}",
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

export const serializeAws_restJson1GetInstanceOnboardingJobStatusCommand = async (
  input: GetInstanceOnboardingJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/connect-instance/{connectInstanceId}/onboarding";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectInstanceId",
    () => input.connectInstanceId!,
    "{connectInstanceId}",
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

export const serializeAws_restJson1ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns-summary";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1CampaignFilters(input.filters, context) }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
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

export const serializeAws_restJson1PauseCampaignCommand = async (
  input: PauseCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/pause";
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

export const serializeAws_restJson1PutDialRequestBatchCommand = async (
  input: PutDialRequestBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/dial-requests";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.dialRequests != null && {
      dialRequests: serializeAws_restJson1DialRequestList(input.dialRequests, context),
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

export const serializeAws_restJson1ResumeCampaignCommand = async (
  input: ResumeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/resume";
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

export const serializeAws_restJson1StartCampaignCommand = async (
  input: StartCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/start";
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

export const serializeAws_restJson1StartInstanceOnboardingJobCommand = async (
  input: StartInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/connect-instance/{connectInstanceId}/onboarding";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "connectInstanceId",
    () => input.connectInstanceId!,
    "{connectInstanceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionConfig != null && {
      encryptionConfig: serializeAws_restJson1EncryptionConfig(input.encryptionConfig, context),
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

export const serializeAws_restJson1StopCampaignCommand = async (
  input: StopCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/stop";
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
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

export const serializeAws_restJson1UpdateCampaignDialerConfigCommand = async (
  input: UpdateCampaignDialerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/dialer-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.dialerConfig != null && {
      dialerConfig: serializeAws_restJson1DialerConfig(input.dialerConfig, context),
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

export const serializeAws_restJson1UpdateCampaignNameCommand = async (
  input: UpdateCampaignNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/name";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
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

export const serializeAws_restJson1UpdateCampaignOutboundCallConfigCommand = async (
  input: UpdateCampaignOutboundCallConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/campaigns/{id}/outbound-call-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.answerMachineDetectionConfig != null && {
      answerMachineDetectionConfig: serializeAws_restJson1AnswerMachineDetectionConfig(
        input.answerMachineDetectionConfig,
        context
      ),
    }),
    ...(input.connectContactFlowId != null && { connectContactFlowId: input.connectContactFlowId }),
    ...(input.connectSourcePhoneNumber != null && { connectSourcePhoneNumber: input.connectSourcePhoneNumber }),
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

export const deserializeAws_restJson1CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCampaignCommandError(output, context);
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
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcampaigns#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1DeleteConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectInstanceConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectInstanceConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConnectInstanceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectInstanceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.connectcampaigns#InvalidStateException":
      throw await deserializeAws_restJson1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1DeleteInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceOnboardingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInstanceOnboardingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteInstanceOnboardingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceOnboardingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.connectcampaigns#InvalidStateException":
      throw await deserializeAws_restJson1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1DescribeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.campaign != null) {
    contents.campaign = deserializeAws_restJson1Campaign(data.campaign, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1GetCampaignStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

const deserializeAws_restJson1GetCampaignStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1GetCampaignStateBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignStateBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedRequests != null) {
    contents.failedRequests = deserializeAws_restJson1FailedCampaignStateResponseList(data.failedRequests, context);
  }
  if (data.successfulRequests != null) {
    contents.successfulRequests = deserializeAws_restJson1SuccessfulCampaignStateResponseList(
      data.successfulRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetCampaignStateBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1GetConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectInstanceConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectInstanceConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectInstanceConfig != null) {
    contents.connectInstanceConfig = deserializeAws_restJson1InstanceConfig(data.connectInstanceConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectInstanceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectInstanceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1GetInstanceOnboardingJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceOnboardingJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInstanceOnboardingJobStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectInstanceOnboardingJobStatus != null) {
    contents.connectInstanceOnboardingJobStatus = deserializeAws_restJson1InstanceOnboardingJobStatus(
      data.connectInstanceOnboardingJobStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetInstanceOnboardingJobStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceOnboardingJobStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCampaignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.campaignSummaryList != null) {
    contents.campaignSummaryList = deserializeAws_restJson1CampaignSummaryList(data.campaignSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1PauseCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PauseCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PauseCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await deserializeAws_restJson1InvalidCampaignStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1PutDialRequestBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDialRequestBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDialRequestBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedRequests != null) {
    contents.failedRequests = deserializeAws_restJson1FailedRequestList(data.failedRequests, context);
  }
  if (data.successfulRequests != null) {
    contents.successfulRequests = deserializeAws_restJson1SuccessfulRequestList(data.successfulRequests, context);
  }
  return contents;
};

const deserializeAws_restJson1PutDialRequestBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDialRequestBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await deserializeAws_restJson1InvalidCampaignStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1ResumeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResumeCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ResumeCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await deserializeAws_restJson1InvalidCampaignStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1StartCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await deserializeAws_restJson1InvalidCampaignStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1StartInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceOnboardingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartInstanceOnboardingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectInstanceOnboardingJobStatus != null) {
    contents.connectInstanceOnboardingJobStatus = deserializeAws_restJson1InstanceOnboardingJobStatus(
      data.connectInstanceOnboardingJobStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1StartInstanceOnboardingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceOnboardingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1StopCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await deserializeAws_restJson1InvalidCampaignStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1UpdateCampaignDialerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignDialerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCampaignDialerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCampaignDialerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignDialerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1UpdateCampaignNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCampaignNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCampaignNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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

export const deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignOutboundCallConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignOutboundCallConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
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

const deserializeAws_restJson1InvalidCampaignStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCampaignStateException> => {
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  const exception = new InvalidCampaignStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
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
  const contents: any = map({
    xAmzErrorType: [, parsedOutput.headers["x-amzn-errortype"]],
  });
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

const serializeAws_restJson1AnswerMachineDetectionConfig = (
  input: AnswerMachineDetectionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.enableAnswerMachineDetection != null && {
      enableAnswerMachineDetection: input.enableAnswerMachineDetection,
    }),
  };
};

const serializeAws_restJson1Attributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1CampaignFilters = (input: CampaignFilters, context: __SerdeContext): any => {
  return {
    ...(input.instanceIdFilter != null && {
      instanceIdFilter: serializeAws_restJson1InstanceIdFilter(input.instanceIdFilter, context),
    }),
  };
};

const serializeAws_restJson1CampaignIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DialerConfig = (input: DialerConfig, context: __SerdeContext): any => {
  return DialerConfig.visit(input, {
    predictiveDialerConfig: (value) => ({
      predictiveDialerConfig: serializeAws_restJson1PredictiveDialerConfig(value, context),
    }),
    progressiveDialerConfig: (value) => ({
      progressiveDialerConfig: serializeAws_restJson1ProgressiveDialerConfig(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DialRequest = (input: DialRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: serializeAws_restJson1Attributes(input.attributes, context) }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.expirationTime != null && { expirationTime: input.expirationTime.toISOString().split(".")[0] + "Z" }),
    ...(input.phoneNumber != null && { phoneNumber: input.phoneNumber }),
  };
};

const serializeAws_restJson1DialRequestList = (input: DialRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DialRequest(entry, context);
    });
};

const serializeAws_restJson1EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
    ...(input.keyArn != null && { keyArn: input.keyArn }),
  };
};

const serializeAws_restJson1InstanceIdFilter = (input: InstanceIdFilter, context: __SerdeContext): any => {
  return {
    ...(input.operator != null && { operator: input.operator }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1OutboundCallConfig = (input: OutboundCallConfig, context: __SerdeContext): any => {
  return {
    ...(input.answerMachineDetectionConfig != null && {
      answerMachineDetectionConfig: serializeAws_restJson1AnswerMachineDetectionConfig(
        input.answerMachineDetectionConfig,
        context
      ),
    }),
    ...(input.connectContactFlowId != null && { connectContactFlowId: input.connectContactFlowId }),
    ...(input.connectQueueId != null && { connectQueueId: input.connectQueueId }),
    ...(input.connectSourcePhoneNumber != null && { connectSourcePhoneNumber: input.connectSourcePhoneNumber }),
  };
};

const serializeAws_restJson1PredictiveDialerConfig = (input: PredictiveDialerConfig, context: __SerdeContext): any => {
  return {
    ...(input.bandwidthAllocation != null && { bandwidthAllocation: __serializeFloat(input.bandwidthAllocation) }),
  };
};

const serializeAws_restJson1ProgressiveDialerConfig = (
  input: ProgressiveDialerConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidthAllocation != null && { bandwidthAllocation: __serializeFloat(input.bandwidthAllocation) }),
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

const deserializeAws_restJson1AnswerMachineDetectionConfig = (
  output: any,
  context: __SerdeContext
): AnswerMachineDetectionConfig => {
  return {
    enableAnswerMachineDetection: __expectBoolean(output.enableAnswerMachineDetection),
  } as any;
};

const deserializeAws_restJson1Campaign = (output: any, context: __SerdeContext): Campaign => {
  return {
    arn: __expectString(output.arn),
    connectInstanceId: __expectString(output.connectInstanceId),
    dialerConfig:
      output.dialerConfig != null
        ? deserializeAws_restJson1DialerConfig(__expectUnion(output.dialerConfig), context)
        : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    outboundCallConfig:
      output.outboundCallConfig != null
        ? deserializeAws_restJson1OutboundCallConfig(output.outboundCallConfig, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return {
    arn: __expectString(output.arn),
    connectInstanceId: __expectString(output.connectInstanceId),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1CampaignSummaryList = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CampaignSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DialerConfig = (output: any, context: __SerdeContext): DialerConfig => {
  if (output.predictiveDialerConfig != null) {
    return {
      predictiveDialerConfig: deserializeAws_restJson1PredictiveDialerConfig(output.predictiveDialerConfig, context),
    };
  }
  if (output.progressiveDialerConfig != null) {
    return {
      progressiveDialerConfig: deserializeAws_restJson1ProgressiveDialerConfig(output.progressiveDialerConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    enabled: __expectBoolean(output.enabled),
    encryptionType: __expectString(output.encryptionType),
    keyArn: __expectString(output.keyArn),
  } as any;
};

const deserializeAws_restJson1FailedCampaignStateResponse = (
  output: any,
  context: __SerdeContext
): FailedCampaignStateResponse => {
  return {
    campaignId: __expectString(output.campaignId),
    failureCode: __expectString(output.failureCode),
  } as any;
};

const deserializeAws_restJson1FailedCampaignStateResponseList = (
  output: any,
  context: __SerdeContext
): FailedCampaignStateResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedCampaignStateResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FailedRequest = (output: any, context: __SerdeContext): FailedRequest => {
  return {
    clientToken: __expectString(output.clientToken),
    failureCode: __expectString(output.failureCode),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1FailedRequestList = (output: any, context: __SerdeContext): FailedRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceConfig = (output: any, context: __SerdeContext): InstanceConfig => {
  return {
    connectInstanceId: __expectString(output.connectInstanceId),
    encryptionConfig:
      output.encryptionConfig != null
        ? deserializeAws_restJson1EncryptionConfig(output.encryptionConfig, context)
        : undefined,
    serviceLinkedRoleArn: __expectString(output.serviceLinkedRoleArn),
  } as any;
};

const deserializeAws_restJson1InstanceOnboardingJobStatus = (
  output: any,
  context: __SerdeContext
): InstanceOnboardingJobStatus => {
  return {
    connectInstanceId: __expectString(output.connectInstanceId),
    failureCode: __expectString(output.failureCode),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1OutboundCallConfig = (output: any, context: __SerdeContext): OutboundCallConfig => {
  return {
    answerMachineDetectionConfig:
      output.answerMachineDetectionConfig != null
        ? deserializeAws_restJson1AnswerMachineDetectionConfig(output.answerMachineDetectionConfig, context)
        : undefined,
    connectContactFlowId: __expectString(output.connectContactFlowId),
    connectQueueId: __expectString(output.connectQueueId),
    connectSourcePhoneNumber: __expectString(output.connectSourcePhoneNumber),
  } as any;
};

const deserializeAws_restJson1PredictiveDialerConfig = (
  output: any,
  context: __SerdeContext
): PredictiveDialerConfig => {
  return {
    bandwidthAllocation: __limitedParseDouble(output.bandwidthAllocation),
  } as any;
};

const deserializeAws_restJson1ProgressiveDialerConfig = (
  output: any,
  context: __SerdeContext
): ProgressiveDialerConfig => {
  return {
    bandwidthAllocation: __limitedParseDouble(output.bandwidthAllocation),
  } as any;
};

const deserializeAws_restJson1SuccessfulCampaignStateResponse = (
  output: any,
  context: __SerdeContext
): SuccessfulCampaignStateResponse => {
  return {
    campaignId: __expectString(output.campaignId),
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1SuccessfulCampaignStateResponseList = (
  output: any,
  context: __SerdeContext
): SuccessfulCampaignStateResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuccessfulCampaignStateResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SuccessfulRequest = (output: any, context: __SerdeContext): SuccessfulRequest => {
  return {
    clientToken: __expectString(output.clientToken),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1SuccessfulRequestList = (output: any, context: __SerdeContext): SuccessfulRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuccessfulRequest(entry, context);
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
