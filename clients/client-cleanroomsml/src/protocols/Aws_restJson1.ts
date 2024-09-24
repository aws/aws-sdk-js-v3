// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateAudienceModelCommandInput,
  CreateAudienceModelCommandOutput,
} from "../commands/CreateAudienceModelCommand";
import {
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
} from "../commands/CreateConfiguredAudienceModelCommand";
import {
  CreateTrainingDatasetCommandInput,
  CreateTrainingDatasetCommandOutput,
} from "../commands/CreateTrainingDatasetCommand";
import {
  DeleteAudienceGenerationJobCommandInput,
  DeleteAudienceGenerationJobCommandOutput,
} from "../commands/DeleteAudienceGenerationJobCommand";
import {
  DeleteAudienceModelCommandInput,
  DeleteAudienceModelCommandOutput,
} from "../commands/DeleteAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelCommandInput,
  DeleteConfiguredAudienceModelCommandOutput,
} from "../commands/DeleteConfiguredAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelPolicyCommandInput,
  DeleteConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/DeleteConfiguredAudienceModelPolicyCommand";
import {
  DeleteTrainingDatasetCommandInput,
  DeleteTrainingDatasetCommandOutput,
} from "../commands/DeleteTrainingDatasetCommand";
import {
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
} from "../commands/GetAudienceGenerationJobCommand";
import { GetAudienceModelCommandInput, GetAudienceModelCommandOutput } from "../commands/GetAudienceModelCommand";
import {
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
} from "../commands/GetConfiguredAudienceModelCommand";
import {
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/GetConfiguredAudienceModelPolicyCommand";
import { GetTrainingDatasetCommandInput, GetTrainingDatasetCommandOutput } from "../commands/GetTrainingDatasetCommand";
import {
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "../commands/ListAudienceExportJobsCommand";
import {
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "../commands/ListAudienceGenerationJobsCommand";
import { ListAudienceModelsCommandInput, ListAudienceModelsCommandOutput } from "../commands/ListAudienceModelsCommand";
import {
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "../commands/ListConfiguredAudienceModelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "../commands/ListTrainingDatasetsCommand";
import {
  PutConfiguredAudienceModelPolicyCommandInput,
  PutConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/PutConfiguredAudienceModelPolicyCommand";
import {
  StartAudienceExportJobCommandInput,
  StartAudienceExportJobCommandOutput,
} from "../commands/StartAudienceExportJobCommand";
import {
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
} from "../commands/StartAudienceGenerationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfiguredAudienceModelCommandInput,
  UpdateConfiguredAudienceModelCommandOutput,
} from "../commands/UpdateConfiguredAudienceModelCommand";
import { CleanRoomsMLServiceException as __BaseException } from "../models/CleanRoomsMLServiceException";
import {
  AccessDeniedException,
  AudienceDestination,
  AudienceExportJobSummary,
  AudienceGenerationJobDataSource,
  AudienceGenerationJobSummary,
  AudienceModelSummary,
  AudienceQualityMetrics,
  AudienceSize,
  AudienceSizeConfig,
  ColumnSchema,
  ColumnType,
  ConfiguredAudienceModelOutputConfig,
  ConfiguredAudienceModelSummary,
  ConflictException,
  Dataset,
  DatasetInputConfig,
  DataSource,
  GlueDataSource,
  ProtectedQuerySQLParameters,
  RelevanceMetric,
  ResourceNotFoundException,
  S3ConfigMap,
  ServiceQuotaExceededException,
  SharedAudienceMetrics,
  TrainingDatasetSummary,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAudienceModelCommand
 */
export const se_CreateAudienceModelCommand = async (
  input: CreateAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-model");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      kmsKeyArn: [],
      name: [],
      tags: (_) => _json(_),
      trainingDataEndTime: (_) => __serializeDateTime(_),
      trainingDataStartTime: (_) => __serializeDateTime(_),
      trainingDatasetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredAudienceModelCommand
 */
export const se_CreateConfiguredAudienceModelCommand = async (
  input: CreateConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model");
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceModelArn: [],
      audienceSizeConfig: (_) => _json(_),
      childResourceTagOnCreatePolicy: [],
      description: [],
      minMatchingSeedSize: [],
      name: [],
      outputConfig: (_) => _json(_),
      sharedAudienceMetrics: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrainingDatasetCommand
 */
export const se_CreateTrainingDatasetCommand = async (
  input: CreateTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/training-dataset");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      roleArn: [],
      tags: (_) => _json(_),
      trainingData: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAudienceGenerationJobCommand
 */
export const se_DeleteAudienceGenerationJobCommand = async (
  input: DeleteAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job/{audienceGenerationJobArn}");
  b.p("audienceGenerationJobArn", () => input.audienceGenerationJobArn!, "{audienceGenerationJobArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAudienceModelCommand
 */
export const se_DeleteAudienceModelCommand = async (
  input: DeleteAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model/{audienceModelArn}");
  b.p("audienceModelArn", () => input.audienceModelArn!, "{audienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredAudienceModelCommand
 */
export const se_DeleteConfiguredAudienceModelCommand = async (
  input: DeleteConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredAudienceModelPolicyCommand
 */
export const se_DeleteConfiguredAudienceModelPolicyCommand = async (
  input: DeleteConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrainingDatasetCommand
 */
export const se_DeleteTrainingDatasetCommand = async (
  input: DeleteTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset/{trainingDatasetArn}");
  b.p("trainingDatasetArn", () => input.trainingDatasetArn!, "{trainingDatasetArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAudienceGenerationJobCommand
 */
export const se_GetAudienceGenerationJobCommand = async (
  input: GetAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job/{audienceGenerationJobArn}");
  b.p("audienceGenerationJobArn", () => input.audienceGenerationJobArn!, "{audienceGenerationJobArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAudienceModelCommand
 */
export const se_GetAudienceModelCommand = async (
  input: GetAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model/{audienceModelArn}");
  b.p("audienceModelArn", () => input.audienceModelArn!, "{audienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredAudienceModelCommand
 */
export const se_GetConfiguredAudienceModelCommand = async (
  input: GetConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredAudienceModelPolicyCommand
 */
export const se_GetConfiguredAudienceModelPolicyCommand = async (
  input: GetConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrainingDatasetCommand
 */
export const se_GetTrainingDatasetCommand = async (
  input: GetTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset/{trainingDatasetArn}");
  b.p("trainingDatasetArn", () => input.trainingDatasetArn!, "{trainingDatasetArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceExportJobsCommand
 */
export const se_ListAudienceExportJobsCommand = async (
  input: ListAudienceExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-export-job");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aGJA]: [, input[_aGJA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceGenerationJobsCommand
 */
export const se_ListAudienceGenerationJobsCommand = async (
  input: ListAudienceGenerationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_cAMA]: [, input[_cAMA]!],
    [_cI]: [, input[_cI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceModelsCommand
 */
export const se_ListAudienceModelsCommand = async (
  input: ListAudienceModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredAudienceModelsCommand
 */
export const se_ListConfiguredAudienceModelsCommand = async (
  input: ListConfiguredAudienceModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrainingDatasetsCommand
 */
export const se_ListTrainingDatasetsCommand = async (
  input: ListTrainingDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfiguredAudienceModelPolicyCommand
 */
export const se_PutConfiguredAudienceModelPolicyCommand = async (
  input: PutConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredAudienceModelPolicy: [],
      policyExistenceCondition: [],
      previousPolicyHash: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAudienceExportJobCommand
 */
export const se_StartAudienceExportJobCommand = async (
  input: StartAudienceExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-export-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceGenerationJobArn: [],
      audienceSize: (_) => _json(_),
      description: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAudienceGenerationJobCommand
 */
export const se_StartAudienceGenerationJobCommand = async (
  input: StartAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-generation-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      collaborationId: [],
      configuredAudienceModelArn: [],
      description: [],
      includeSeedInOutput: [],
      name: [],
      seedAudience: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredAudienceModelCommand
 */
export const se_UpdateConfiguredAudienceModelCommand = async (
  input: UpdateConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceModelArn: [],
      audienceSizeConfig: (_) => _json(_),
      description: [],
      minMatchingSeedSize: [],
      outputConfig: (_) => _json(_),
      sharedAudienceMetrics: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAudienceModelCommand
 */
export const de_CreateAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredAudienceModelCommand
 */
export const de_CreateConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrainingDatasetCommand
 */
export const de_CreateTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainingDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trainingDatasetArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAudienceGenerationJobCommand
 */
export const de_DeleteAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAudienceGenerationJobCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAudienceModelCommand
 */
export const de_DeleteAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAudienceModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredAudienceModelCommand
 */
export const de_DeleteConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredAudienceModelPolicyCommand
 */
export const de_DeleteConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTrainingDatasetCommand
 */
export const de_DeleteTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrainingDatasetCommandOutput> => {
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
 * deserializeAws_restJson1GetAudienceGenerationJobCommand
 */
export const de_GetAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAudienceGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    includeSeedInOutput: __expectBoolean,
    metrics: (_) => de_AudienceQualityMetrics(_, context),
    name: __expectString,
    protectedQueryIdentifier: __expectString,
    seedAudience: _json,
    startedBy: __expectString,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAudienceModelCommand
 */
export const de_GetAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    trainingDataEndTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    trainingDataStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    trainingDatasetArn: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelCommand
 */
export const de_GetConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
    audienceSizeConfig: _json,
    childResourceTagOnCreatePolicy: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    minMatchingSeedSize: __expectInt32,
    name: __expectString,
    outputConfig: _json,
    sharedAudienceMetrics: _json,
    status: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelPolicyCommand
 */
export const de_GetConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
    configuredAudienceModelPolicy: __expectString,
    policyHash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrainingDatasetCommand
 */
export const de_GetTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrainingDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    roleArn: __expectString,
    status: __expectString,
    tags: _json,
    trainingData: _json,
    trainingDatasetArn: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceExportJobsCommand
 */
export const de_ListAudienceExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceExportJobs: (_) => de_AudienceExportJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceGenerationJobsCommand
 */
export const de_ListAudienceGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobs: (_) => de_AudienceGenerationJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceModelsCommand
 */
export const de_ListAudienceModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModels: (_) => de_AudienceModelList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredAudienceModelsCommand
 */
export const de_ListConfiguredAudienceModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredAudienceModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModels: (_) => de_ConfiguredAudienceModelList(_, context),
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
 * deserializeAws_restJson1ListTrainingDatasetsCommand
 */
export const de_ListTrainingDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trainingDatasets: (_) => de_TrainingDatasetList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfiguredAudienceModelPolicyCommand
 */
export const de_PutConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfiguredAudienceModelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelPolicy: __expectString,
    policyHash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartAudienceExportJobCommand
 */
export const de_StartAudienceExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAudienceExportJobCommandOutput> => {
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
 * deserializeAws_restJson1StartAudienceGenerationJobCommand
 */
export const de_StartAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAudienceGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobArn: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UpdateConfiguredAudienceModelCommand
 */
export const de_UpdateConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
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
    case "com.amazonaws.cleanroomsml#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanroomsml#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanroomsml#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanroomsml#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanroomsml#ValidationException":
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

// se_AudienceDestination omitted.

// se_AudienceGenerationJobDataSource omitted.

// se_AudienceSize omitted.

// se_AudienceSizeBins omitted.

// se_AudienceSizeConfig omitted.

// se_ColumnSchema omitted.

// se_ColumnTypeList omitted.

// se_ConfiguredAudienceModelOutputConfig omitted.

// se_Dataset omitted.

// se_DatasetInputConfig omitted.

// se_DatasetList omitted.

// se_DatasetSchemaList omitted.

// se_DataSource omitted.

// se_GlueDataSource omitted.

// se_MetricsList omitted.

// se_ParameterMap omitted.

// se_ProtectedQuerySQLParameters omitted.

// se_S3ConfigMap omitted.

// se_TagMap omitted.

// de_AudienceDestination omitted.

/**
 * deserializeAws_restJson1AudienceExportJobList
 */
const de_AudienceExportJobList = (output: any, context: __SerdeContext): AudienceExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceExportJobSummary
 */
const de_AudienceExportJobSummary = (output: any, context: __SerdeContext): AudienceExportJobSummary => {
  return take(output, {
    audienceGenerationJobArn: __expectString,
    audienceSize: _json,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    outputLocation: __expectString,
    status: __expectString,
    statusDetails: _json,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_AudienceGenerationJobDataSource omitted.

/**
 * deserializeAws_restJson1AudienceGenerationJobList
 */
const de_AudienceGenerationJobList = (output: any, context: __SerdeContext): AudienceGenerationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceGenerationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceGenerationJobSummary
 */
const de_AudienceGenerationJobSummary = (output: any, context: __SerdeContext): AudienceGenerationJobSummary => {
  return take(output, {
    audienceGenerationJobArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    startedBy: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AudienceModelList
 */
const de_AudienceModelList = (output: any, context: __SerdeContext): AudienceModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceModelSummary
 */
const de_AudienceModelSummary = (output: any, context: __SerdeContext): AudienceModelSummary => {
  return take(output, {
    audienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
    trainingDatasetArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AudienceQualityMetrics
 */
const de_AudienceQualityMetrics = (output: any, context: __SerdeContext): AudienceQualityMetrics => {
  return take(output, {
    recallMetric: __limitedParseDouble,
    relevanceMetrics: (_: any) => de_RelevanceMetrics(_, context),
  }) as any;
};

// de_AudienceSize omitted.

// de_AudienceSizeBins omitted.

// de_AudienceSizeConfig omitted.

// de_ColumnSchema omitted.

// de_ColumnTypeList omitted.

/**
 * deserializeAws_restJson1ConfiguredAudienceModelList
 */
const de_ConfiguredAudienceModelList = (output: any, context: __SerdeContext): ConfiguredAudienceModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredAudienceModelSummary(entry, context);
    });
  return retVal;
};

// de_ConfiguredAudienceModelOutputConfig omitted.

/**
 * deserializeAws_restJson1ConfiguredAudienceModelSummary
 */
const de_ConfiguredAudienceModelSummary = (output: any, context: __SerdeContext): ConfiguredAudienceModelSummary => {
  return take(output, {
    audienceModelArn: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    outputConfig: _json,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_Dataset omitted.

// de_DatasetInputConfig omitted.

// de_DatasetList omitted.

// de_DatasetSchemaList omitted.

// de_DataSource omitted.

// de_GlueDataSource omitted.

// de_MetricsList omitted.

// de_ParameterMap omitted.

// de_ProtectedQuerySQLParameters omitted.

/**
 * deserializeAws_restJson1RelevanceMetric
 */
const de_RelevanceMetric = (output: any, context: __SerdeContext): RelevanceMetric => {
  return take(output, {
    audienceSize: _json,
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RelevanceMetrics
 */
const de_RelevanceMetrics = (output: any, context: __SerdeContext): RelevanceMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelevanceMetric(entry, context);
    });
  return retVal;
};

// de_S3ConfigMap omitted.

// de_StatusDetails omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TrainingDatasetList
 */
const de_TrainingDatasetList = (output: any, context: __SerdeContext): TrainingDatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainingDatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrainingDatasetSummary
 */
const de_TrainingDatasetSummary = (output: any, context: __SerdeContext): TrainingDatasetSummary => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
    trainingDatasetArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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

const _aGJA = "audienceGenerationJobArn";
const _cAMA = "configuredAudienceModelArn";
const _cI = "collaborationId";
const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
