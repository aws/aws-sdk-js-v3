// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
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

import {
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
} from "../commands/CreateModelCustomizationJobCommand";
import {
  CreateProvisionedModelThroughputCommandInput,
  CreateProvisionedModelThroughputCommandOutput,
} from "../commands/CreateProvisionedModelThroughputCommand";
import { DeleteCustomModelCommandInput, DeleteCustomModelCommandOutput } from "../commands/DeleteCustomModelCommand";
import {
  DeleteModelInvocationLoggingConfigurationCommandInput,
  DeleteModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/DeleteModelInvocationLoggingConfigurationCommand";
import {
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
} from "../commands/DeleteProvisionedModelThroughputCommand";
import { GetCustomModelCommandInput, GetCustomModelCommandOutput } from "../commands/GetCustomModelCommand";
import { GetFoundationModelCommandInput, GetFoundationModelCommandOutput } from "../commands/GetFoundationModelCommand";
import {
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
} from "../commands/GetModelCustomizationJobCommand";
import {
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/GetModelInvocationLoggingConfigurationCommand";
import {
  GetProvisionedModelThroughputCommandInput,
  GetProvisionedModelThroughputCommandOutput,
} from "../commands/GetProvisionedModelThroughputCommand";
import { ListCustomModelsCommandInput, ListCustomModelsCommandOutput } from "../commands/ListCustomModelsCommand";
import {
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
} from "../commands/ListFoundationModelsCommand";
import {
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "../commands/ListModelCustomizationJobsCommand";
import {
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "../commands/ListProvisionedModelThroughputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutModelInvocationLoggingConfigurationCommandInput,
  PutModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/PutModelInvocationLoggingConfigurationCommand";
import {
  StopModelCustomizationJobCommandInput,
  StopModelCustomizationJobCommandOutput,
} from "../commands/StopModelCustomizationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateProvisionedModelThroughputCommandInput,
  UpdateProvisionedModelThroughputCommandOutput,
} from "../commands/UpdateProvisionedModelThroughputCommand";
import { BedrockServiceException as __BaseException } from "../models/BedrockServiceException";
import {
  AccessDeniedException,
  CloudWatchConfig,
  ConflictException,
  CustomModelSummary,
  InternalServerException,
  LoggingConfig,
  ModelCustomizationJobSummary,
  OutputDataConfig,
  ProvisionedModelSummary,
  ResourceNotFoundException,
  S3Config,
  ServiceQuotaExceededException,
  Tag,
  ThrottlingException,
  TooManyTagsException,
  TrainingDataConfig,
  TrainingMetrics,
  ValidationDataConfig,
  ValidationException,
  Validator,
  ValidatorMetric,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateModelCustomizationJobCommand
 */
export const se_CreateModelCustomizationJobCommand = async (
  input: CreateModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model-customization-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baseModelIdentifier: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customModelKmsKeyId: [],
      customModelName: [],
      customModelTags: (_) => _json(_),
      customizationType: [],
      hyperParameters: (_) => _json(_),
      jobName: [],
      jobTags: (_) => _json(_),
      outputDataConfig: (_) => _json(_),
      roleArn: [],
      trainingDataConfig: (_) => _json(_),
      validationDataConfig: (_) => _json(_),
      vpcConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisionedModelThroughputCommand
 */
export const se_CreateProvisionedModelThroughputCommand = async (
  input: CreateProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioned-model-throughput");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      commitmentDuration: [],
      modelId: [],
      modelUnits: [],
      provisionedModelName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomModelCommand
 */
export const se_DeleteCustomModelCommand = async (
  input: DeleteCustomModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteModelInvocationLoggingConfigurationCommand
 */
export const se_DeleteModelInvocationLoggingConfigurationCommand = async (
  input: DeleteModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging/modelinvocations");
  let body: any;
  body = "";
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisionedModelThroughputCommand
 */
export const se_DeleteProvisionedModelThroughputCommand = async (
  input: DeleteProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomModelCommand
 */
export const se_GetCustomModelCommand = async (
  input: GetCustomModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFoundationModelCommand
 */
export const se_GetFoundationModelCommand = async (
  input: GetFoundationModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/foundation-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelCustomizationJobCommand
 */
export const se_GetModelCustomizationJobCommand = async (
  input: GetModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs/{jobIdentifier}");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelInvocationLoggingConfigurationCommand
 */
export const se_GetModelInvocationLoggingConfigurationCommand = async (
  input: GetModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging/modelinvocations");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProvisionedModelThroughputCommand
 */
export const se_GetProvisionedModelThroughputCommand = async (
  input: GetProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomModelsCommand
 */
export const se_ListCustomModelsCommand = async (
  input: ListCustomModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models");
  const query: any = map({
    [_cTB]: [
      () => input.creationTimeBefore !== void 0,
      () => (input[_cTB]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_cTA]: [
      () => input.creationTimeAfter !== void 0,
      () => (input[_cTA]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_nC]: [, input[_nC]!],
    [_bMAE]: [, input[_bMAE]!],
    [_fMAE]: [, input[_fMAE]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFoundationModelsCommand
 */
export const se_ListFoundationModelsCommand = async (
  input: ListFoundationModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/foundation-models");
  const query: any = map({
    [_bP]: [, input[_bP]!],
    [_bCT]: [, input[_bCT]!],
    [_bOM]: [, input[_bOM]!],
    [_bIT]: [, input[_bIT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListModelCustomizationJobsCommand
 */
export const se_ListModelCustomizationJobsCommand = async (
  input: ListModelCustomizationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs");
  const query: any = map({
    [_cTA]: [
      () => input.creationTimeAfter !== void 0,
      () => (input[_cTA]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_cTB]: [
      () => input.creationTimeBefore !== void 0,
      () => (input[_cTB]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_sE]: [, input[_sE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisionedModelThroughputsCommand
 */
export const se_ListProvisionedModelThroughputsCommand = async (
  input: ListProvisionedModelThroughputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughputs");
  const query: any = map({
    [_cTA]: [
      () => input.creationTimeAfter !== void 0,
      () => (input[_cTA]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_cTB]: [
      () => input.creationTimeBefore !== void 0,
      () => (input[_cTB]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_sE]: [, input[_sE]!],
    [_mAE]: [, input[_mAE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutModelInvocationLoggingConfigurationCommand
 */
export const se_PutModelInvocationLoggingConfigurationCommand = async (
  input: PutModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging/modelinvocations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopModelCustomizationJobCommand
 */
export const se_StopModelCustomizationJobCommand = async (
  input: StopModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs/{jobIdentifier}/stop");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
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
  b.bp("/tagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProvisionedModelThroughputCommand
 */
export const se_UpdateProvisionedModelThroughputCommand = async (
  input: UpdateProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      desiredModelId: [],
      desiredProvisionedModelName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateModelCustomizationJobCommand
 */
export const de_CreateModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCustomizationJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisionedModelThroughputCommand
 */
export const de_CreateProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    provisionedModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomModelCommand
 */
export const de_DeleteCustomModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteModelInvocationLoggingConfigurationCommand
 */
export const de_DeleteModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelInvocationLoggingConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteProvisionedModelThroughputCommand
 */
export const de_DeleteProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedModelThroughputCommandOutput> => {
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
 * deserializeAws_restJson1GetCustomModelCommand
 */
export const de_GetCustomModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baseModelArn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationType: __expectString,
    hyperParameters: _json,
    jobArn: __expectString,
    jobName: __expectString,
    modelArn: __expectString,
    modelKmsKeyArn: __expectString,
    modelName: __expectString,
    outputDataConfig: _json,
    trainingDataConfig: _json,
    trainingMetrics: (_) => de_TrainingMetrics(_, context),
    validationDataConfig: _json,
    validationMetrics: (_) => de_ValidationMetrics(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFoundationModelCommand
 */
export const de_GetFoundationModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFoundationModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelCustomizationJobCommand
 */
export const de_GetModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCustomizationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baseModelArn: __expectString,
    clientRequestToken: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationType: __expectString,
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    hyperParameters: _json,
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    outputDataConfig: _json,
    outputModelArn: __expectString,
    outputModelKmsKeyArn: __expectString,
    outputModelName: __expectString,
    roleArn: __expectString,
    status: __expectString,
    trainingDataConfig: _json,
    trainingMetrics: (_) => de_TrainingMetrics(_, context),
    validationDataConfig: _json,
    validationMetrics: (_) => de_ValidationMetrics(_, context),
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelInvocationLoggingConfigurationCommand
 */
export const de_GetModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelInvocationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    loggingConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProvisionedModelThroughputCommand
 */
export const de_GetProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commitmentDuration: __expectString,
    commitmentExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    desiredModelArn: __expectString,
    desiredModelUnits: __expectInt32,
    failureMessage: __expectString,
    foundationModelArn: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    modelUnits: __expectInt32,
    provisionedModelArn: __expectString,
    provisionedModelName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomModelsCommand
 */
export const de_ListCustomModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelSummaries: (_) => de_CustomModelSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFoundationModelsCommand
 */
export const de_ListFoundationModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoundationModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelCustomizationJobsCommand
 */
export const de_ListModelCustomizationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCustomizationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelCustomizationJobSummaries: (_) => de_ModelCustomizationJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisionedModelThroughputsCommand
 */
export const de_ListProvisionedModelThroughputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedModelThroughputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    provisionedModelSummaries: (_) => de_ProvisionedModelSummaries(_, context),
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
 * deserializeAws_restJson1PutModelInvocationLoggingConfigurationCommand
 */
export const de_PutModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelInvocationLoggingConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1StopModelCustomizationJobCommand
 */
export const de_StopModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelCustomizationJobCommandOutput> => {
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
 * deserializeAws_restJson1UpdateProvisionedModelThroughputCommand
 */
export const de_UpdateProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedModelThroughputCommandOutput> => {
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
    case "com.amazonaws.bedrock#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrock#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrock#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrock#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrock#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrock#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.bedrock#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrock#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const contents: any = map({});
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
  const contents: any = map({});
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
  const contents: any = map({});
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
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
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
  const contents: any = map({});
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
  const contents: any = map({});
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
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CloudWatchConfig omitted.

// se_LoggingConfig omitted.

// se_ModelCustomizationHyperParameters omitted.

// se_OutputDataConfig omitted.

// se_S3Config omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TrainingDataConfig omitted.

// se_ValidationDataConfig omitted.

// se_Validator omitted.

// se_Validators omitted.

// se_VpcConfig omitted.

// de_CloudWatchConfig omitted.

/**
 * deserializeAws_restJson1CustomModelSummary
 */
const de_CustomModelSummary = (output: any, context: __SerdeContext): CustomModelSummary => {
  return take(output, {
    baseModelArn: __expectString,
    baseModelName: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationType: __expectString,
    modelArn: __expectString,
    modelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomModelSummaryList
 */
const de_CustomModelSummaryList = (output: any, context: __SerdeContext): CustomModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomModelSummary(entry, context);
    });
  return retVal;
};

// de_FoundationModelDetails omitted.

// de_FoundationModelLifecycle omitted.

// de_FoundationModelSummary omitted.

// de_FoundationModelSummaryList omitted.

// de_InferenceTypeList omitted.

// de_LoggingConfig omitted.

// de_ModelCustomizationHyperParameters omitted.

/**
 * deserializeAws_restJson1ModelCustomizationJobSummaries
 */
const de_ModelCustomizationJobSummaries = (output: any, context: __SerdeContext): ModelCustomizationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCustomizationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModelCustomizationJobSummary
 */
const de_ModelCustomizationJobSummary = (output: any, context: __SerdeContext): ModelCustomizationJobSummary => {
  return take(output, {
    baseModelArn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customModelArn: __expectString,
    customModelName: __expectString,
    customizationType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_ModelCustomizationList omitted.

// de_ModelModalityList omitted.

// de_OutputDataConfig omitted.

/**
 * deserializeAws_restJson1ProvisionedModelSummaries
 */
const de_ProvisionedModelSummaries = (output: any, context: __SerdeContext): ProvisionedModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisionedModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProvisionedModelSummary
 */
const de_ProvisionedModelSummary = (output: any, context: __SerdeContext): ProvisionedModelSummary => {
  return take(output, {
    commitmentDuration: __expectString,
    commitmentExpirationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    desiredModelArn: __expectString,
    desiredModelUnits: __expectInt32,
    foundationModelArn: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    modelUnits: __expectInt32,
    provisionedModelArn: __expectString,
    provisionedModelName: __expectString,
    status: __expectString,
  }) as any;
};

// de_S3Config omitted.

// de_SecurityGroupIds omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TrainingDataConfig omitted.

/**
 * deserializeAws_restJson1TrainingMetrics
 */
const de_TrainingMetrics = (output: any, context: __SerdeContext): TrainingMetrics => {
  return take(output, {
    trainingLoss: __limitedParseFloat32,
  }) as any;
};

// de_ValidationDataConfig omitted.

/**
 * deserializeAws_restJson1ValidationMetrics
 */
const de_ValidationMetrics = (output: any, context: __SerdeContext): ValidatorMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidatorMetric(entry, context);
    });
  return retVal;
};

// de_Validator omitted.

/**
 * deserializeAws_restJson1ValidatorMetric
 */
const de_ValidatorMetric = (output: any, context: __SerdeContext): ValidatorMetric => {
  return take(output, {
    validationLoss: __limitedParseFloat32,
  }) as any;
};

// de_Validators omitted.

// de_VpcConfig omitted.

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

const _bCT = "byCustomizationType";
const _bIT = "byInferenceType";
const _bMAE = "baseModelArnEquals";
const _bOM = "byOutputModality";
const _bP = "byProvider";
const _cTA = "creationTimeAfter";
const _cTB = "creationTimeBefore";
const _fMAE = "foundationModelArnEquals";
const _mAE = "modelArnEquals";
const _mR = "maxResults";
const _nC = "nameContains";
const _nT = "nextToken";
const _sB = "sortBy";
const _sE = "statusEquals";
const _sO = "sortOrder";
