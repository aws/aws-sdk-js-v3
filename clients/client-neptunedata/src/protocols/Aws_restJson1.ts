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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelGremlinQueryCommandInput, CancelGremlinQueryCommandOutput } from "../commands/CancelGremlinQueryCommand";
import { CancelLoaderJobCommandInput, CancelLoaderJobCommandOutput } from "../commands/CancelLoaderJobCommand";
import {
  CancelMLDataProcessingJobCommandInput,
  CancelMLDataProcessingJobCommandOutput,
} from "../commands/CancelMLDataProcessingJobCommand";
import {
  CancelMLModelTrainingJobCommandInput,
  CancelMLModelTrainingJobCommandOutput,
} from "../commands/CancelMLModelTrainingJobCommand";
import {
  CancelMLModelTransformJobCommandInput,
  CancelMLModelTransformJobCommandOutput,
} from "../commands/CancelMLModelTransformJobCommand";
import {
  CancelOpenCypherQueryCommandInput,
  CancelOpenCypherQueryCommandOutput,
} from "../commands/CancelOpenCypherQueryCommand";
import { CreateMLEndpointCommandInput, CreateMLEndpointCommandOutput } from "../commands/CreateMLEndpointCommand";
import { DeleteMLEndpointCommandInput, DeleteMLEndpointCommandOutput } from "../commands/DeleteMLEndpointCommand";
import {
  DeletePropertygraphStatisticsCommandInput,
  DeletePropertygraphStatisticsCommandOutput,
} from "../commands/DeletePropertygraphStatisticsCommand";
import {
  DeleteSparqlStatisticsCommandInput,
  DeleteSparqlStatisticsCommandOutput,
} from "../commands/DeleteSparqlStatisticsCommand";
import { ExecuteFastResetCommandInput, ExecuteFastResetCommandOutput } from "../commands/ExecuteFastResetCommand";
import {
  ExecuteGremlinExplainQueryCommandInput,
  ExecuteGremlinExplainQueryCommandOutput,
} from "../commands/ExecuteGremlinExplainQueryCommand";
import {
  ExecuteGremlinProfileQueryCommandInput,
  ExecuteGremlinProfileQueryCommandOutput,
} from "../commands/ExecuteGremlinProfileQueryCommand";
import {
  ExecuteGremlinQueryCommandInput,
  ExecuteGremlinQueryCommandOutput,
} from "../commands/ExecuteGremlinQueryCommand";
import {
  ExecuteOpenCypherExplainQueryCommandInput,
  ExecuteOpenCypherExplainQueryCommandOutput,
} from "../commands/ExecuteOpenCypherExplainQueryCommand";
import {
  ExecuteOpenCypherQueryCommandInput,
  ExecuteOpenCypherQueryCommandOutput,
} from "../commands/ExecuteOpenCypherQueryCommand";
import { GetEngineStatusCommandInput, GetEngineStatusCommandOutput } from "../commands/GetEngineStatusCommand";
import {
  GetGremlinQueryStatusCommandInput,
  GetGremlinQueryStatusCommandOutput,
} from "../commands/GetGremlinQueryStatusCommand";
import { GetLoaderJobStatusCommandInput, GetLoaderJobStatusCommandOutput } from "../commands/GetLoaderJobStatusCommand";
import {
  GetMLDataProcessingJobCommandInput,
  GetMLDataProcessingJobCommandOutput,
} from "../commands/GetMLDataProcessingJobCommand";
import { GetMLEndpointCommandInput, GetMLEndpointCommandOutput } from "../commands/GetMLEndpointCommand";
import {
  GetMLModelTrainingJobCommandInput,
  GetMLModelTrainingJobCommandOutput,
} from "../commands/GetMLModelTrainingJobCommand";
import {
  GetMLModelTransformJobCommandInput,
  GetMLModelTransformJobCommandOutput,
} from "../commands/GetMLModelTransformJobCommand";
import {
  GetOpenCypherQueryStatusCommandInput,
  GetOpenCypherQueryStatusCommandOutput,
} from "../commands/GetOpenCypherQueryStatusCommand";
import {
  GetPropertygraphStatisticsCommandInput,
  GetPropertygraphStatisticsCommandOutput,
} from "../commands/GetPropertygraphStatisticsCommand";
import {
  GetPropertygraphStreamCommandInput,
  GetPropertygraphStreamCommandOutput,
} from "../commands/GetPropertygraphStreamCommand";
import {
  GetPropertygraphSummaryCommandInput,
  GetPropertygraphSummaryCommandOutput,
} from "../commands/GetPropertygraphSummaryCommand";
import { GetRDFGraphSummaryCommandInput, GetRDFGraphSummaryCommandOutput } from "../commands/GetRDFGraphSummaryCommand";
import {
  GetSparqlStatisticsCommandInput,
  GetSparqlStatisticsCommandOutput,
} from "../commands/GetSparqlStatisticsCommand";
import { GetSparqlStreamCommandInput, GetSparqlStreamCommandOutput } from "../commands/GetSparqlStreamCommand";
import { ListGremlinQueriesCommandInput, ListGremlinQueriesCommandOutput } from "../commands/ListGremlinQueriesCommand";
import { ListLoaderJobsCommandInput, ListLoaderJobsCommandOutput } from "../commands/ListLoaderJobsCommand";
import {
  ListMLDataProcessingJobsCommandInput,
  ListMLDataProcessingJobsCommandOutput,
} from "../commands/ListMLDataProcessingJobsCommand";
import { ListMLEndpointsCommandInput, ListMLEndpointsCommandOutput } from "../commands/ListMLEndpointsCommand";
import {
  ListMLModelTrainingJobsCommandInput,
  ListMLModelTrainingJobsCommandOutput,
} from "../commands/ListMLModelTrainingJobsCommand";
import {
  ListMLModelTransformJobsCommandInput,
  ListMLModelTransformJobsCommandOutput,
} from "../commands/ListMLModelTransformJobsCommand";
import {
  ListOpenCypherQueriesCommandInput,
  ListOpenCypherQueriesCommandOutput,
} from "../commands/ListOpenCypherQueriesCommand";
import {
  ManagePropertygraphStatisticsCommandInput,
  ManagePropertygraphStatisticsCommandOutput,
} from "../commands/ManagePropertygraphStatisticsCommand";
import {
  ManageSparqlStatisticsCommandInput,
  ManageSparqlStatisticsCommandOutput,
} from "../commands/ManageSparqlStatisticsCommand";
import { StartLoaderJobCommandInput, StartLoaderJobCommandOutput } from "../commands/StartLoaderJobCommand";
import {
  StartMLDataProcessingJobCommandInput,
  StartMLDataProcessingJobCommandOutput,
} from "../commands/StartMLDataProcessingJobCommand";
import {
  StartMLModelTrainingJobCommandInput,
  StartMLModelTrainingJobCommandOutput,
} from "../commands/StartMLModelTrainingJobCommand";
import {
  StartMLModelTransformJobCommandInput,
  StartMLModelTransformJobCommandOutput,
} from "../commands/StartMLModelTransformJobCommand";
import {
  AccessDeniedException,
  BadRequestException,
  BulkLoadIdNotFoundException,
  CancelledByUserException,
  ClientTimeoutException,
  ConcurrentModificationException,
  ConstraintViolationException,
  CustomModelTrainingParameters,
  CustomModelTransformParameters,
  ExpiredStreamException,
  FailureByQueryException,
  GremlinQueryStatus,
  GremlinQueryStatusAttributes,
  IllegalArgumentException,
  InternalFailureException,
  InvalidArgumentException,
  InvalidNumericDataException,
  InvalidParameterException,
  LoadUrlAccessDeniedException,
  MalformedQueryException,
  MemoryLimitExceededException,
  MethodNotAllowedException,
  MissingParameterException,
  MLResourceNotFoundException,
  ParsingException,
  PreconditionsFailedException,
  PropertygraphData,
  PropertygraphRecord,
  PropertygraphSummaryValueMap,
  QueryEvalStats,
  QueryLimitExceededException,
  QueryLimitException,
  QueryTooLargeException,
  RDFGraphSummaryValueMap,
  ReadOnlyViolationException,
  S3Exception,
  ServerShutdownException,
  SparqlRecord,
  Statistics,
  StatisticsNotAvailableException,
  StreamRecordsNotFoundException,
  ThrottlingException,
  TimeLimitExceededException,
  TooManyRequestsException,
  UnsupportedOperationException,
} from "../models/models_0";
import { NeptunedataServiceException as __BaseException } from "../models/NeptunedataServiceException";

/**
 * serializeAws_restJson1CancelGremlinQueryCommand
 */
export const se_CancelGremlinQueryCommand = async (
  input: CancelGremlinQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gremlin/status/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelLoaderJobCommand
 */
export const se_CancelLoaderJobCommand = async (
  input: CancelLoaderJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/loader/{loadId}");
  b.p("loadId", () => input.loadId!, "{loadId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMLDataProcessingJobCommand
 */
export const se_CancelMLDataProcessingJobCommand = async (
  input: CancelMLDataProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/dataprocessing/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
    [_c]: [() => input.clean !== void 0, () => input[_c]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMLModelTrainingJobCommand
 */
export const se_CancelMLModelTrainingJobCommand = async (
  input: CancelMLModelTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltraining/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
    [_c]: [() => input.clean !== void 0, () => input[_c]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMLModelTransformJobCommand
 */
export const se_CancelMLModelTransformJobCommand = async (
  input: CancelMLModelTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltransform/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
    [_c]: [() => input.clean !== void 0, () => input[_c]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelOpenCypherQueryCommand
 */
export const se_CancelOpenCypherQueryCommand = async (
  input: CancelOpenCypherQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/opencypher/status/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  const query: any = map({
    [_s]: [() => input.silent !== void 0, () => input[_s]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMLEndpointCommand
 */
export const se_CreateMLEndpointCommand = async (
  input: CreateMLEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ml/endpoints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      id: [],
      instanceCount: [],
      instanceType: [],
      mlModelTrainingJobId: [],
      mlModelTransformJobId: [],
      modelName: [],
      neptuneIamRoleArn: [],
      update: [],
      volumeEncryptionKMSKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMLEndpointCommand
 */
export const se_DeleteMLEndpointCommand = async (
  input: DeleteMLEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/endpoints/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
    [_c]: [() => input.clean !== void 0, () => input[_c]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePropertygraphStatisticsCommand
 */
export const se_DeletePropertygraphStatisticsCommand = async (
  input: DeletePropertygraphStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/propertygraph/statistics");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSparqlStatisticsCommand
 */
export const se_DeleteSparqlStatisticsCommand = async (
  input: DeleteSparqlStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sparql/statistics");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteFastResetCommand
 */
export const se_ExecuteFastResetCommand = async (
  input: ExecuteFastResetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/system");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      token: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteGremlinExplainQueryCommand
 */
export const se_ExecuteGremlinExplainQueryCommand = async (
  input: ExecuteGremlinExplainQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gremlin/explain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      gremlin: [, , `gremlinQuery`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteGremlinProfileQueryCommand
 */
export const se_ExecuteGremlinProfileQueryCommand = async (
  input: ExecuteGremlinProfileQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gremlin/profile");
  let body: any;
  body = JSON.stringify(
    take(input, {
      "profile.chop": [, , `chop`],
      gremlin: [, , `gremlinQuery`],
      "profile.indexOps": [, , `indexOps`],
      "profile.results": [, , `results`],
      "profile.serializer": [, , `serializer`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteGremlinQueryCommand
 */
export const se_ExecuteGremlinQueryCommand = async (
  input: ExecuteGremlinQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_se]!,
  });
  b.bp("/gremlin");
  let body: any;
  body = JSON.stringify(
    take(input, {
      gremlin: [, , `gremlinQuery`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteOpenCypherExplainQueryCommand
 */
export const se_ExecuteOpenCypherExplainQueryCommand = async (
  input: ExecuteOpenCypherExplainQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/opencypher/explain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      explain: [, , `explainMode`],
      query: [, , `openCypherQuery`],
      parameters: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteOpenCypherQueryCommand
 */
export const se_ExecuteOpenCypherQueryCommand = async (
  input: ExecuteOpenCypherQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/opencypher");
  let body: any;
  body = JSON.stringify(
    take(input, {
      query: [, , `openCypherQuery`],
      parameters: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEngineStatusCommand
 */
export const se_GetEngineStatusCommand = async (
  input: GetEngineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/status");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGremlinQueryStatusCommand
 */
export const se_GetGremlinQueryStatusCommand = async (
  input: GetGremlinQueryStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gremlin/status/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLoaderJobStatusCommand
 */
export const se_GetLoaderJobStatusCommand = async (
  input: GetLoaderJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/loader/{loadId}");
  b.p("loadId", () => input.loadId!, "{loadId}", false);
  const query: any = map({
    [_d]: [() => input.details !== void 0, () => input[_d]!.toString()],
    [_e]: [() => input.errors !== void 0, () => input[_e]!.toString()],
    [_p]: [() => input.page !== void 0, () => input[_p]!.toString()],
    [_ePP]: [() => input.errorsPerPage !== void 0, () => input[_ePP]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLDataProcessingJobCommand
 */
export const se_GetMLDataProcessingJobCommand = async (
  input: GetMLDataProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/dataprocessing/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLEndpointCommand
 */
export const se_GetMLEndpointCommand = async (
  input: GetMLEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/endpoints/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLModelTrainingJobCommand
 */
export const se_GetMLModelTrainingJobCommand = async (
  input: GetMLModelTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltraining/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLModelTransformJobCommand
 */
export const se_GetMLModelTransformJobCommand = async (
  input: GetMLModelTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltransform/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOpenCypherQueryStatusCommand
 */
export const se_GetOpenCypherQueryStatusCommand = async (
  input: GetOpenCypherQueryStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/opencypher/status/{queryId}");
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPropertygraphStatisticsCommand
 */
export const se_GetPropertygraphStatisticsCommand = async (
  input: GetPropertygraphStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/propertygraph/statistics");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPropertygraphStreamCommand
 */
export const se_GetPropertygraphStreamCommand = async (
  input: GetPropertygraphStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ae]: input[_en]!,
  });
  b.bp("/propertygraph/stream");
  const query: any = map({
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_iT]: [, input[_iT]!],
    [_cN]: [() => input.commitNum !== void 0, () => input[_cN]!.toString()],
    [_oN]: [() => input.opNum !== void 0, () => input[_oN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPropertygraphSummaryCommand
 */
export const se_GetPropertygraphSummaryCommand = async (
  input: GetPropertygraphSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/propertygraph/statistics/summary");
  const query: any = map({
    [_m]: [, input[_m]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRDFGraphSummaryCommand
 */
export const se_GetRDFGraphSummaryCommand = async (
  input: GetRDFGraphSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rdf/statistics/summary");
  const query: any = map({
    [_m]: [, input[_m]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSparqlStatisticsCommand
 */
export const se_GetSparqlStatisticsCommand = async (
  input: GetSparqlStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sparql/statistics");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSparqlStreamCommand
 */
export const se_GetSparqlStreamCommand = async (
  input: GetSparqlStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ae]: input[_en]!,
  });
  b.bp("/sparql/stream");
  const query: any = map({
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_iT]: [, input[_iT]!],
    [_cN]: [() => input.commitNum !== void 0, () => input[_cN]!.toString()],
    [_oN]: [() => input.opNum !== void 0, () => input[_oN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGremlinQueriesCommand
 */
export const se_ListGremlinQueriesCommand = async (
  input: ListGremlinQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gremlin/status");
  const query: any = map({
    [_iW]: [() => input.includeWaiting !== void 0, () => input[_iW]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLoaderJobsCommand
 */
export const se_ListLoaderJobsCommand = async (
  input: ListLoaderJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/loader");
  const query: any = map({
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_iQL]: [() => input.includeQueuedLoads !== void 0, () => input[_iQL]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMLDataProcessingJobsCommand
 */
export const se_ListMLDataProcessingJobsCommand = async (
  input: ListMLDataProcessingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/dataprocessing");
  const query: any = map({
    [_mI]: [() => input.maxItems !== void 0, () => input[_mI]!.toString()],
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMLEndpointsCommand
 */
export const se_ListMLEndpointsCommand = async (
  input: ListMLEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/endpoints");
  const query: any = map({
    [_mI]: [() => input.maxItems !== void 0, () => input[_mI]!.toString()],
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMLModelTrainingJobsCommand
 */
export const se_ListMLModelTrainingJobsCommand = async (
  input: ListMLModelTrainingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltraining");
  const query: any = map({
    [_mI]: [() => input.maxItems !== void 0, () => input[_mI]!.toString()],
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMLModelTransformJobsCommand
 */
export const se_ListMLModelTransformJobsCommand = async (
  input: ListMLModelTransformJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ml/modeltransform");
  const query: any = map({
    [_mI]: [() => input.maxItems !== void 0, () => input[_mI]!.toString()],
    [_nIRA]: [, input[_nIRA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOpenCypherQueriesCommand
 */
export const se_ListOpenCypherQueriesCommand = async (
  input: ListOpenCypherQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/opencypher/status");
  const query: any = map({
    [_iW]: [() => input.includeWaiting !== void 0, () => input[_iW]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ManagePropertygraphStatisticsCommand
 */
export const se_ManagePropertygraphStatisticsCommand = async (
  input: ManagePropertygraphStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/propertygraph/statistics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      mode: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ManageSparqlStatisticsCommand
 */
export const se_ManageSparqlStatisticsCommand = async (
  input: ManageSparqlStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sparql/statistics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      mode: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartLoaderJobCommand
 */
export const se_StartLoaderJobCommand = async (
  input: StartLoaderJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/loader");
  let body: any;
  body = JSON.stringify(
    take(input, {
      dependencies: (_) => _json(_),
      failOnError: [],
      format: [],
      iamRoleArn: [],
      mode: [],
      parallelism: [],
      parserConfiguration: (_) => _json(_),
      queueRequest: [],
      region: [, , `s3BucketRegion`],
      source: [],
      updateSingleCardinalityProperties: [],
      userProvidedEdgeIds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMLDataProcessingJobCommand
 */
export const se_StartMLDataProcessingJobCommand = async (
  input: StartMLDataProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ml/dataprocessing");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configFileName: [],
      id: [],
      inputDataS3Location: [],
      modelType: [],
      neptuneIamRoleArn: [],
      previousDataProcessingJobId: [],
      processedDataS3Location: [],
      processingInstanceType: [],
      processingInstanceVolumeSizeInGB: [],
      processingTimeOutInSeconds: [],
      s3OutputEncryptionKMSKey: [],
      sagemakerIamRoleArn: [],
      securityGroupIds: (_) => _json(_),
      subnets: (_) => _json(_),
      volumeEncryptionKMSKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMLModelTrainingJobCommand
 */
export const se_StartMLModelTrainingJobCommand = async (
  input: StartMLModelTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ml/modeltraining");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baseProcessingInstanceType: [],
      customModelTrainingParameters: (_) => _json(_),
      dataProcessingJobId: [],
      enableManagedSpotTraining: [],
      id: [],
      maxHPONumberOfTrainingJobs: [],
      maxHPOParallelTrainingJobs: [],
      neptuneIamRoleArn: [],
      previousModelTrainingJobId: [],
      s3OutputEncryptionKMSKey: [],
      sagemakerIamRoleArn: [],
      securityGroupIds: (_) => _json(_),
      subnets: (_) => _json(_),
      trainModelS3Location: [],
      trainingInstanceType: [],
      trainingInstanceVolumeSizeInGB: [],
      trainingTimeOutInSeconds: [],
      volumeEncryptionKMSKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMLModelTransformJobCommand
 */
export const se_StartMLModelTransformJobCommand = async (
  input: StartMLModelTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ml/modeltransform");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baseProcessingInstanceType: [],
      baseProcessingInstanceVolumeSizeInGB: [],
      customModelTransformParameters: (_) => _json(_),
      dataProcessingJobId: [],
      id: [],
      mlModelTrainingJobId: [],
      modelTransformOutputS3Location: [],
      neptuneIamRoleArn: [],
      s3OutputEncryptionKMSKey: [],
      sagemakerIamRoleArn: [],
      securityGroupIds: (_) => _json(_),
      subnets: (_) => _json(_),
      trainingJobName: [],
      volumeEncryptionKMSKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelGremlinQueryCommand
 */
export const de_CancelGremlinQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelGremlinQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelLoaderJobCommand
 */
export const de_CancelLoaderJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLoaderJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMLDataProcessingJobCommand
 */
export const de_CancelMLDataProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLDataProcessingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMLModelTrainingJobCommand
 */
export const de_CancelMLModelTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLModelTrainingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMLModelTransformJobCommand
 */
export const de_CancelMLModelTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLModelTransformJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelOpenCypherQueryCommand
 */
export const de_CancelOpenCypherQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelOpenCypherQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: __expectBoolean,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMLEndpointCommand
 */
export const de_CreateMLEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationTimeInMillis: __expectLong,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMLEndpointCommand
 */
export const de_DeleteMLEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePropertygraphStatisticsCommand
 */
export const de_DeletePropertygraphStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePropertygraphStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    statusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSparqlStatisticsCommand
 */
export const de_DeleteSparqlStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSparqlStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    statusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteFastResetCommand
 */
export const de_ExecuteFastResetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteFastResetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteGremlinExplainQueryCommand
 */
export const de_ExecuteGremlinExplainQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteGremlinExplainQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.output = data;
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteGremlinProfileQueryCommand
 */
export const de_ExecuteGremlinProfileQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteGremlinProfileQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.output = data;
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteGremlinQueryCommand
 */
export const de_ExecuteGremlinQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteGremlinQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    meta: (_) => de_Document(_, context),
    requestId: __expectString,
    result: (_) => de_Document(_, context),
    status: (_) => de_GremlinQueryStatusAttributes(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteOpenCypherExplainQueryCommand
 */
export const de_ExecuteOpenCypherExplainQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteOpenCypherExplainQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.results = data;
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteOpenCypherQueryCommand
 */
export const de_ExecuteOpenCypherQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteOpenCypherQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    results: (_) => de_Document(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEngineStatusCommand
 */
export const de_GetEngineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEngineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dbEngineVersion: __expectString,
    dfeQueryEngine: __expectString,
    features: (_) => de_DocumentValuedMap(_, context),
    gremlin: _json,
    labMode: _json,
    opencypher: _json,
    role: __expectString,
    rollingBackTrxCount: __expectInt32,
    rollingBackTrxEarliestStartTime: __expectString,
    settings: _json,
    sparql: _json,
    startTime: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGremlinQueryStatusCommand
 */
export const de_GetGremlinQueryStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGremlinQueryStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queryEvalStats: (_) => de_QueryEvalStats(_, context),
    queryId: __expectString,
    queryString: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLoaderJobStatusCommand
 */
export const de_GetLoaderJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoaderJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: (_) => de_Document(_, context),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLDataProcessingJobCommand
 */
export const de_GetMLDataProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLDataProcessingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    processingJob: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLEndpointCommand
 */
export const de_GetMLEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endpoint: _json,
    endpointConfig: _json,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLModelTrainingJobCommand
 */
export const de_GetMLModelTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelTrainingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    hpoJob: _json,
    id: __expectString,
    mlModels: _json,
    modelTransformJob: _json,
    processingJob: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLModelTransformJobCommand
 */
export const de_GetMLModelTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelTransformJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baseProcessingJob: _json,
    id: __expectString,
    models: _json,
    remoteModelTransformJob: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOpenCypherQueryStatusCommand
 */
export const de_GetOpenCypherQueryStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenCypherQueryStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queryEvalStats: (_) => de_QueryEvalStats(_, context),
    queryId: __expectString,
    queryString: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertygraphStatisticsCommand
 */
export const de_GetPropertygraphStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertygraphStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: (_) => de_Statistics(_, context),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertygraphStreamCommand
 */
export const de_GetPropertygraphStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertygraphStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    lastEventId: _json,
    lastTrxTimestampInMillis: [, __expectLong, `lastTrxTimestamp`],
    records: (_) => de_PropertygraphRecordsList(_, context),
    totalRecords: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertygraphSummaryCommand
 */
export const de_GetPropertygraphSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertygraphSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: (_) => de_PropertygraphSummaryValueMap(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    statusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetRDFGraphSummaryCommand
 */
export const de_GetRDFGraphSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRDFGraphSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: (_) => de_RDFGraphSummaryValueMap(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    statusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetSparqlStatisticsCommand
 */
export const de_GetSparqlStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSparqlStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: (_) => de_Statistics(_, context),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSparqlStreamCommand
 */
export const de_GetSparqlStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSparqlStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    lastEventId: _json,
    lastTrxTimestampInMillis: [, __expectLong, `lastTrxTimestamp`],
    records: (_) => de_SparqlRecordsList(_, context),
    totalRecords: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGremlinQueriesCommand
 */
export const de_ListGremlinQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGremlinQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    acceptedQueryCount: __expectInt32,
    queries: (_) => de_GremlinQueries(_, context),
    runningQueryCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLoaderJobsCommand
 */
export const de_ListLoaderJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoaderJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMLDataProcessingJobsCommand
 */
export const de_ListMLDataProcessingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLDataProcessingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMLEndpointsCommand
 */
export const de_ListMLEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMLModelTrainingJobsCommand
 */
export const de_ListMLModelTrainingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLModelTrainingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMLModelTransformJobsCommand
 */
export const de_ListMLModelTransformJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLModelTransformJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOpenCypherQueriesCommand
 */
export const de_ListOpenCypherQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenCypherQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    acceptedQueryCount: __expectInt32,
    queries: (_) => de_OpenCypherQueries(_, context),
    runningQueryCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ManagePropertygraphStatisticsCommand
 */
export const de_ManagePropertygraphStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ManagePropertygraphStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ManageSparqlStatisticsCommand
 */
export const de_ManageSparqlStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ManageSparqlStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartLoaderJobCommand
 */
export const de_StartLoaderJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoaderJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    payload: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMLDataProcessingJobCommand
 */
export const de_StartMLDataProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLDataProcessingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationTimeInMillis: __expectLong,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMLModelTrainingJobCommand
 */
export const de_StartMLModelTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLModelTrainingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationTimeInMillis: __expectLong,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMLModelTransformJobCommand
 */
export const de_StartMLModelTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLModelTransformJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationTimeInMillis: __expectLong,
    id: __expectString,
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
    case "BadRequestException":
    case "com.amazonaws.neptunedata#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ClientTimeoutException":
    case "com.amazonaws.neptunedata#ClientTimeoutException":
      throw await de_ClientTimeoutExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.neptunedata#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.neptunedata#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "FailureByQueryException":
    case "com.amazonaws.neptunedata#FailureByQueryException":
      throw await de_FailureByQueryExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.neptunedata#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.neptunedata#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.neptunedata#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingParameterException":
    case "com.amazonaws.neptunedata#MissingParameterException":
      throw await de_MissingParameterExceptionRes(parsedOutput, context);
    case "ParsingException":
    case "com.amazonaws.neptunedata#ParsingException":
      throw await de_ParsingExceptionRes(parsedOutput, context);
    case "PreconditionsFailedException":
    case "com.amazonaws.neptunedata#PreconditionsFailedException":
      throw await de_PreconditionsFailedExceptionRes(parsedOutput, context);
    case "TimeLimitExceededException":
    case "com.amazonaws.neptunedata#TimeLimitExceededException":
      throw await de_TimeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.neptunedata#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.neptunedata#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "BulkLoadIdNotFoundException":
    case "com.amazonaws.neptunedata#BulkLoadIdNotFoundException":
      throw await de_BulkLoadIdNotFoundExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.neptunedata#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LoadUrlAccessDeniedException":
    case "com.amazonaws.neptunedata#LoadUrlAccessDeniedException":
      throw await de_LoadUrlAccessDeniedExceptionRes(parsedOutput, context);
    case "MLResourceNotFoundException":
    case "com.amazonaws.neptunedata#MLResourceNotFoundException":
      throw await de_MLResourceNotFoundExceptionRes(parsedOutput, context);
    case "InvalidNumericDataException":
    case "com.amazonaws.neptunedata#InvalidNumericDataException":
      throw await de_InvalidNumericDataExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.neptunedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ReadOnlyViolationException":
    case "com.amazonaws.neptunedata#ReadOnlyViolationException":
      throw await de_ReadOnlyViolationExceptionRes(parsedOutput, context);
    case "StatisticsNotAvailableException":
    case "com.amazonaws.neptunedata#StatisticsNotAvailableException":
      throw await de_StatisticsNotAvailableExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.neptunedata#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ServerShutdownException":
    case "com.amazonaws.neptunedata#ServerShutdownException":
      throw await de_ServerShutdownExceptionRes(parsedOutput, context);
    case "CancelledByUserException":
    case "com.amazonaws.neptunedata#CancelledByUserException":
      throw await de_CancelledByUserExceptionRes(parsedOutput, context);
    case "MalformedQueryException":
    case "com.amazonaws.neptunedata#MalformedQueryException":
      throw await de_MalformedQueryExceptionRes(parsedOutput, context);
    case "MemoryLimitExceededException":
    case "com.amazonaws.neptunedata#MemoryLimitExceededException":
      throw await de_MemoryLimitExceededExceptionRes(parsedOutput, context);
    case "QueryLimitExceededException":
    case "com.amazonaws.neptunedata#QueryLimitExceededException":
      throw await de_QueryLimitExceededExceptionRes(parsedOutput, context);
    case "QueryLimitException":
    case "com.amazonaws.neptunedata#QueryLimitException":
      throw await de_QueryLimitExceptionRes(parsedOutput, context);
    case "QueryTooLargeException":
    case "com.amazonaws.neptunedata#QueryTooLargeException":
      throw await de_QueryTooLargeExceptionRes(parsedOutput, context);
    case "ExpiredStreamException":
    case "com.amazonaws.neptunedata#ExpiredStreamException":
      throw await de_ExpiredStreamExceptionRes(parsedOutput, context);
    case "StreamRecordsNotFoundException":
    case "com.amazonaws.neptunedata#StreamRecordsNotFoundException":
      throw await de_StreamRecordsNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.neptunedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "S3Exception":
    case "com.amazonaws.neptunedata#S3Exception":
      throw await de_S3ExceptionRes(parsedOutput, context);
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
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BulkLoadIdNotFoundExceptionRes
 */
const de_BulkLoadIdNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BulkLoadIdNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BulkLoadIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CancelledByUserExceptionRes
 */
const de_CancelledByUserExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CancelledByUserException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CancelledByUserException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientTimeoutExceptionRes
 */
const de_ClientTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ClientTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConstraintViolationExceptionRes
 */
const de_ConstraintViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ExpiredStreamExceptionRes
 */
const de_ExpiredStreamExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredStreamException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ExpiredStreamException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FailureByQueryExceptionRes
 */
const de_FailureByQueryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailureByQueryException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new FailureByQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IllegalArgumentExceptionRes
 */
const de_IllegalArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IllegalArgumentException({
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
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNumericDataExceptionRes
 */
const de_InvalidNumericDataExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNumericDataException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidNumericDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LoadUrlAccessDeniedExceptionRes
 */
const de_LoadUrlAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadUrlAccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LoadUrlAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MalformedQueryExceptionRes
 */
const de_MalformedQueryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedQueryException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MalformedQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MemoryLimitExceededExceptionRes
 */
const de_MemoryLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MemoryLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MemoryLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MethodNotAllowedExceptionRes
 */
const de_MethodNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MethodNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MissingParameterExceptionRes
 */
const de_MissingParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MissingParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MLResourceNotFoundExceptionRes
 */
const de_MLResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MLResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MLResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ParsingExceptionRes
 */
const de_ParsingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ParsingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ParsingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionsFailedExceptionRes
 */
const de_PreconditionsFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionsFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PreconditionsFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1QueryLimitExceededExceptionRes
 */
const de_QueryLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new QueryLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1QueryLimitExceptionRes
 */
const de_QueryLimitExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<QueryLimitException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new QueryLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1QueryTooLargeExceptionRes
 */
const de_QueryTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new QueryTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ReadOnlyViolationExceptionRes
 */
const de_ReadOnlyViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReadOnlyViolationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ReadOnlyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1S3ExceptionRes
 */
const de_S3ExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<S3Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new S3Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServerShutdownExceptionRes
 */
const de_ServerShutdownExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerShutdownException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServerShutdownException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StatisticsNotAvailableExceptionRes
 */
const de_StatisticsNotAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatisticsNotAvailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new StatisticsNotAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StreamRecordsNotFoundExceptionRes
 */
const de_StreamRecordsNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamRecordsNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new StreamRecordsNotFoundException({
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
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TimeLimitExceededExceptionRes
 */
const de_TimeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TimeLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TimeLimitExceededException({
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
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    detailedMessage: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CustomModelTrainingParameters omitted.

// se_CustomModelTransformParameters omitted.

// se_StringList omitted.

// se_StringValuedMap omitted.

// de_Classes omitted.

// de_DeleteStatisticsValueMap omitted.

/**
 * deserializeAws_restJson1DocumentValuedMap
 */
const de_DocumentValuedMap = (output: any, context: __SerdeContext): Record<string, __DocumentType> => {
  return Object.entries(output).reduce((acc: Record<string, __DocumentType>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_Document(value, context);
    return acc;
  }, {} as Record<string, __DocumentType>);
};

// de_EdgeLabels omitted.

// de_EdgeProperties omitted.

// de_EdgeStructure omitted.

// de_EdgeStructures omitted.

// de_FastResetToken omitted.

/**
 * deserializeAws_restJson1GremlinQueries
 */
const de_GremlinQueries = (output: any, context: __SerdeContext): GremlinQueryStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GremlinQueryStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GremlinQueryStatus
 */
const de_GremlinQueryStatus = (output: any, context: __SerdeContext): GremlinQueryStatus => {
  return take(output, {
    queryEvalStats: (_: any) => de_QueryEvalStats(_, context),
    queryId: __expectString,
    queryString: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GremlinQueryStatusAttributes
 */
const de_GremlinQueryStatusAttributes = (output: any, context: __SerdeContext): GremlinQueryStatusAttributes => {
  return take(output, {
    attributes: (_: any) => de_Document(_, context),
    code: __expectInt32,
    message: __expectString,
  }) as any;
};

// de_LoaderIdResult omitted.

// de_LongValuedMap omitted.

// de_LongValuedMapList omitted.

// de_MlConfigDefinition omitted.

// de_MlModels omitted.

// de_MlResourceDefinition omitted.

// de_Models omitted.

// de_NodeLabels omitted.

// de_NodeProperties omitted.

// de_NodeStructure omitted.

// de_NodeStructures omitted.

/**
 * deserializeAws_restJson1OpenCypherQueries
 */
const de_OpenCypherQueries = (output: any, context: __SerdeContext): GremlinQueryStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GremlinQueryStatus(entry, context);
    });
  return retVal;
};

// de_OutgoingEdgeLabels omitted.

// de_Predicates omitted.

/**
 * deserializeAws_restJson1PropertygraphData
 */
const de_PropertygraphData = (output: any, context: __SerdeContext): PropertygraphData => {
  return take(output, {
    from: __expectString,
    id: __expectString,
    key: __expectString,
    to: __expectString,
    type: __expectString,
    value: (_: any) => de_Document(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertygraphRecord
 */
const de_PropertygraphRecord = (output: any, context: __SerdeContext): PropertygraphRecord => {
  return take(output, {
    commitTimestampInMillis: [, __expectLong, `commitTimestamp`],
    data: (_: any) => de_PropertygraphData(_, context),
    eventId: _json,
    isLastOp: __expectBoolean,
    op: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PropertygraphRecordsList
 */
const de_PropertygraphRecordsList = (output: any, context: __SerdeContext): PropertygraphRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PropertygraphRecord(entry, context);
    });
  return retVal;
};

// de_PropertygraphSummary omitted.

/**
 * deserializeAws_restJson1PropertygraphSummaryValueMap
 */
const de_PropertygraphSummaryValueMap = (output: any, context: __SerdeContext): PropertygraphSummaryValueMap => {
  return take(output, {
    graphSummary: _json,
    lastStatisticsComputationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1QueryEvalStats
 */
const de_QueryEvalStats = (output: any, context: __SerdeContext): QueryEvalStats => {
  return take(output, {
    cancelled: __expectBoolean,
    elapsed: __expectInt32,
    subqueries: (_: any) => de_Document(_, context),
    waited: __expectInt32,
  }) as any;
};

// de_QueryLanguageVersion omitted.

// de_RDFGraphSummary omitted.

/**
 * deserializeAws_restJson1RDFGraphSummaryValueMap
 */
const de_RDFGraphSummaryValueMap = (output: any, context: __SerdeContext): RDFGraphSummaryValueMap => {
  return take(output, {
    graphSummary: _json,
    lastStatisticsComputationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

// de_RefreshStatisticsIdMap omitted.

// de_SparqlData omitted.

/**
 * deserializeAws_restJson1SparqlRecord
 */
const de_SparqlRecord = (output: any, context: __SerdeContext): SparqlRecord => {
  return take(output, {
    commitTimestampInMillis: [, __expectLong, `commitTimestamp`],
    data: _json,
    eventId: _json,
    isLastOp: __expectBoolean,
    op: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SparqlRecordsList
 */
const de_SparqlRecordsList = (output: any, context: __SerdeContext): SparqlRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SparqlRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return take(output, {
    active: __expectBoolean,
    autoCompute: __expectBoolean,
    date: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    note: __expectString,
    signatureInfo: _json,
    statisticsId: __expectString,
  }) as any;
};

// de_StatisticsSummary omitted.

// de_StringList omitted.

// de_StringValuedMap omitted.

// de_SubjectStructure omitted.

// de_SubjectStructures omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
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

const _a = "accept";
const _ae = "accept-encoding";
const _c = "clean";
const _cN = "commitNum";
const _d = "details";
const _e = "errors";
const _ePP = "errorsPerPage";
const _en = "encoding";
const _iQL = "includeQueuedLoads";
const _iT = "iteratorType";
const _iW = "includeWaiting";
const _l = "limit";
const _m = "mode";
const _mI = "maxItems";
const _nIRA = "neptuneIamRoleArn";
const _oN = "opNum";
const _p = "page";
const _s = "silent";
const _se = "serializer";
