// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AgentlessDialerConfig,
  AnswerMachineDetectionConfig,
  Campaign,
  CampaignFilters,
  ConflictException,
  DialerConfig,
  DialRequest,
  EncryptionConfig,
  InstanceIdFilter,
  InternalServerException,
  InvalidCampaignStateException,
  InvalidStateException,
  OutboundCallConfig,
  PredictiveDialerConfig,
  ProgressiveDialerConfig,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns");
  let body: any;
  body = JSON.stringify(
    take(input, {
      connectInstanceId: [],
      dialerConfig: (_) => se_DialerConfig(_, context),
      name: [],
      outboundCallConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectInstanceConfigCommand
 */
export const se_DeleteConnectInstanceConfigCommand = async (
  input: DeleteConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-instance/{connectInstanceId}/config");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInstanceOnboardingJobCommand
 */
export const se_DeleteInstanceOnboardingJobCommand = async (
  input: DeleteInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCampaignCommand
 */
export const se_DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCampaignStateCommand
 */
export const se_GetCampaignStateCommand = async (
  input: GetCampaignStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}/state");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCampaignStateBatchCommand
 */
export const se_GetCampaignStateBatchCommand = async (
  input: GetCampaignStateBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns-state");
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectInstanceConfigCommand
 */
export const se_GetConnectInstanceConfigCommand = async (
  input: GetConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-instance/{connectInstanceId}/config");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInstanceOnboardingJobStatusCommand
 */
export const se_GetInstanceOnboardingJobStatusCommand = async (
  input: GetInstanceOnboardingJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCampaignsCommand
 */
export const se_ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns-summary");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PauseCampaignCommand
 */
export const se_PauseCampaignCommand = async (
  input: PauseCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}/pause");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDialRequestBatchCommand
 */
export const se_PutDialRequestBatchCommand = async (
  input: PutDialRequestBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns/{id}/dial-requests");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dialRequests: (_) => se_DialRequestList(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResumeCampaignCommand
 */
export const se_ResumeCampaignCommand = async (
  input: ResumeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}/resume");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCampaignCommand
 */
export const se_StartCampaignCommand = async (
  input: StartCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}/start");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartInstanceOnboardingJobCommand
 */
export const se_StartInstanceOnboardingJobCommand = async (
  input: StartInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopCampaignCommand
 */
export const se_StopCampaignCommand = async (
  input: StopCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/campaigns/{id}/stop");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignDialerConfigCommand
 */
export const se_UpdateCampaignDialerConfigCommand = async (
  input: UpdateCampaignDialerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns/{id}/dialer-config");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dialerConfig: (_) => se_DialerConfig(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignNameCommand
 */
export const se_UpdateCampaignNameCommand = async (
  input: UpdateCampaignNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns/{id}/name");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignOutboundCallConfigCommand
 */
export const se_UpdateCampaignOutboundCallConfigCommand = async (
  input: UpdateCampaignOutboundCallConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/campaigns/{id}/outbound-call-config");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      answerMachineDetectionConfig: (_) => _json(_),
      connectContactFlowId: [],
      connectSourcePhoneNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateCampaignCommand
 */
export const de_CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCampaignCommand
 */
export const de_DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectInstanceConfigCommand
 */
export const de_DeleteConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectInstanceConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInstanceOnboardingJobCommand
 */
export const de_DeleteInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceOnboardingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCampaignCommand
 */
export const de_DescribeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    campaign: (_) => de_Campaign(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignStateCommand
 */
export const de_GetCampaignStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignStateBatchCommand
 */
export const de_GetCampaignStateBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedRequests: _json,
    successfulRequests: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectInstanceConfigCommand
 */
export const de_GetConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectInstanceConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInstanceOnboardingJobStatusCommand
 */
export const de_GetInstanceOnboardingJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceOnboardingJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceOnboardingJobStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCampaignsCommand
 */
export const de_ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    campaignSummaryList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PauseCampaignCommand
 */
export const de_PauseCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDialRequestBatchCommand
 */
export const de_PutDialRequestBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDialRequestBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedRequests: _json,
    successfulRequests: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResumeCampaignCommand
 */
export const de_ResumeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartCampaignCommand
 */
export const de_StartCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartInstanceOnboardingJobCommand
 */
export const de_StartInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceOnboardingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceOnboardingJobStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopCampaignCommand
 */
export const de_StopCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCampaignDialerConfigCommand
 */
export const de_UpdateCampaignDialerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignDialerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCampaignNameCommand
 */
export const de_UpdateCampaignNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommand
 */
export const de_UpdateCampaignOutboundCallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignOutboundCallConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaigns#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaigns#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaigns#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaigns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcampaigns#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaigns#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaigns#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.connectcampaigns#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaigns#InvalidCampaignStateException":
      throw await de_InvalidCampaignStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidCampaignStateExceptionRes
 */
const de_InvalidCampaignStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCampaignStateException> => {
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    state: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidCampaignStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidStateException({
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AgentlessDialerConfig
 */
const se_AgentlessDialerConfig = (input: AgentlessDialerConfig, context: __SerdeContext): any => {
  return take(input, {
    dialingCapacity: __serializeFloat,
  });
};

// se_AnswerMachineDetectionConfig omitted.

// se_Attributes omitted.

// se_CampaignFilters omitted.

// se_CampaignIdList omitted.

/**
 * serializeAws_restJson1DialerConfig
 */
const se_DialerConfig = (input: DialerConfig, context: __SerdeContext): any => {
  return DialerConfig.visit(input, {
    agentlessDialerConfig: (value) => ({ agentlessDialerConfig: se_AgentlessDialerConfig(value, context) }),
    predictiveDialerConfig: (value) => ({ predictiveDialerConfig: se_PredictiveDialerConfig(value, context) }),
    progressiveDialerConfig: (value) => ({ progressiveDialerConfig: se_ProgressiveDialerConfig(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1DialRequest
 */
const se_DialRequest = (input: DialRequest, context: __SerdeContext): any => {
  return take(input, {
    attributes: _json,
    clientToken: [],
    expirationTime: __serializeDateTime,
    phoneNumber: [],
  });
};

/**
 * serializeAws_restJson1DialRequestList
 */
const se_DialRequestList = (input: DialRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DialRequest(entry, context);
    });
};

// se_EncryptionConfig omitted.

// se_InstanceIdFilter omitted.

// se_OutboundCallConfig omitted.

/**
 * serializeAws_restJson1PredictiveDialerConfig
 */
const se_PredictiveDialerConfig = (input: PredictiveDialerConfig, context: __SerdeContext): any => {
  return take(input, {
    bandwidthAllocation: __serializeFloat,
    dialingCapacity: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ProgressiveDialerConfig
 */
const se_ProgressiveDialerConfig = (input: ProgressiveDialerConfig, context: __SerdeContext): any => {
  return take(input, {
    bandwidthAllocation: __serializeFloat,
    dialingCapacity: __serializeFloat,
  });
};

// se_TagMap omitted.

/**
 * deserializeAws_restJson1AgentlessDialerConfig
 */
const de_AgentlessDialerConfig = (output: any, context: __SerdeContext): AgentlessDialerConfig => {
  return take(output, {
    dialingCapacity: __limitedParseDouble,
  }) as any;
};

// de_AnswerMachineDetectionConfig omitted.

/**
 * deserializeAws_restJson1Campaign
 */
const de_Campaign = (output: any, context: __SerdeContext): Campaign => {
  return take(output, {
    arn: __expectString,
    connectInstanceId: __expectString,
    dialerConfig: (_: any) => de_DialerConfig(__expectUnion(_), context),
    id: __expectString,
    name: __expectString,
    outboundCallConfig: _json,
    tags: _json,
  }) as any;
};

// de_CampaignSummary omitted.

// de_CampaignSummaryList omitted.

/**
 * deserializeAws_restJson1DialerConfig
 */
const de_DialerConfig = (output: any, context: __SerdeContext): DialerConfig => {
  if (output.agentlessDialerConfig != null) {
    return {
      agentlessDialerConfig: de_AgentlessDialerConfig(output.agentlessDialerConfig, context),
    };
  }
  if (output.predictiveDialerConfig != null) {
    return {
      predictiveDialerConfig: de_PredictiveDialerConfig(output.predictiveDialerConfig, context),
    };
  }
  if (output.progressiveDialerConfig != null) {
    return {
      progressiveDialerConfig: de_ProgressiveDialerConfig(output.progressiveDialerConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_EncryptionConfig omitted.

// de_FailedCampaignStateResponse omitted.

// de_FailedCampaignStateResponseList omitted.

// de_FailedRequest omitted.

// de_FailedRequestList omitted.

// de_InstanceConfig omitted.

// de_InstanceOnboardingJobStatus omitted.

// de_OutboundCallConfig omitted.

/**
 * deserializeAws_restJson1PredictiveDialerConfig
 */
const de_PredictiveDialerConfig = (output: any, context: __SerdeContext): PredictiveDialerConfig => {
  return take(output, {
    bandwidthAllocation: __limitedParseDouble,
    dialingCapacity: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ProgressiveDialerConfig
 */
const de_ProgressiveDialerConfig = (output: any, context: __SerdeContext): ProgressiveDialerConfig => {
  return take(output, {
    bandwidthAllocation: __limitedParseDouble,
    dialingCapacity: __limitedParseDouble,
  }) as any;
};

// de_SuccessfulCampaignStateResponse omitted.

// de_SuccessfulCampaignStateResponseList omitted.

// de_SuccessfulRequest omitted.

// de_SuccessfulRequestList omitted.

// de_TagMap omitted.

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

const _tK = "tagKeys";
const _xAET = "xAmzErrorType";
const _xae = "x-amzn-errortype";
