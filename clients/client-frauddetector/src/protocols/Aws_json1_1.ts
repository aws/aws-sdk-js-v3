// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "../commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "../commands/BatchGetVariableCommand";
import {
  CancelBatchImportJobCommandInput,
  CancelBatchImportJobCommandOutput,
} from "../commands/CancelBatchImportJobCommand";
import {
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
} from "../commands/CancelBatchPredictionJobCommand";
import {
  CreateBatchImportJobCommandInput,
  CreateBatchImportJobCommandOutput,
} from "../commands/CreateBatchImportJobCommand";
import {
  CreateBatchPredictionJobCommandInput,
  CreateBatchPredictionJobCommandOutput,
} from "../commands/CreateBatchPredictionJobCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "../commands/CreateDetectorVersionCommand";
import { CreateListCommandInput, CreateListCommandOutput } from "../commands/CreateListCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "../commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "../commands/CreateVariableCommand";
import {
  DeleteBatchImportJobCommandInput,
  DeleteBatchImportJobCommandOutput,
} from "../commands/DeleteBatchImportJobCommand";
import {
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
} from "../commands/DeleteBatchPredictionJobCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "../commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "../commands/DeleteDetectorVersionCommand";
import { DeleteEntityTypeCommandInput, DeleteEntityTypeCommandOutput } from "../commands/DeleteEntityTypeCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "../commands/DeleteEventCommand";
import {
  DeleteEventsByEventTypeCommandInput,
  DeleteEventsByEventTypeCommandOutput,
} from "../commands/DeleteEventsByEventTypeCommand";
import { DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput } from "../commands/DeleteEventTypeCommand";
import {
  DeleteExternalModelCommandInput,
  DeleteExternalModelCommandOutput,
} from "../commands/DeleteExternalModelCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "../commands/DeleteLabelCommand";
import { DeleteListCommandInput, DeleteListCommandOutput } from "../commands/DeleteListCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import { DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput } from "../commands/DeleteModelVersionCommand";
import { DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput } from "../commands/DeleteOutcomeCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteVariableCommandInput, DeleteVariableCommandOutput } from "../commands/DeleteVariableCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "../commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "../commands/DescribeModelVersionsCommand";
import { GetBatchImportJobsCommandInput, GetBatchImportJobsCommandOutput } from "../commands/GetBatchImportJobsCommand";
import {
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "../commands/GetBatchPredictionJobsCommand";
import {
  GetDeleteEventsByEventTypeStatusCommandInput,
  GetDeleteEventsByEventTypeStatusCommandOutput,
} from "../commands/GetDeleteEventsByEventTypeStatusCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "../commands/GetDetectorsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "../commands/GetDetectorVersionCommand";
import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "../commands/GetEntityTypesCommand";
import { GetEventCommandInput, GetEventCommandOutput } from "../commands/GetEventCommand";
import { GetEventPredictionCommandInput, GetEventPredictionCommandOutput } from "../commands/GetEventPredictionCommand";
import {
  GetEventPredictionMetadataCommandInput,
  GetEventPredictionMetadataCommandOutput,
} from "../commands/GetEventPredictionMetadataCommand";
import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "../commands/GetEventTypesCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "../commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "../commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { GetListElementsCommandInput, GetListElementsCommandOutput } from "../commands/GetListElementsCommand";
import { GetListsMetadataCommandInput, GetListsMetadataCommandOutput } from "../commands/GetListsMetadataCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "../commands/GetModelVersionCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "../commands/GetOutcomesCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "../commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "../commands/GetVariablesCommand";
import {
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "../commands/ListEventPredictionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "../commands/PutDetectorCommand";
import { PutEntityTypeCommandInput, PutEntityTypeCommandOutput } from "../commands/PutEntityTypeCommand";
import { PutEventTypeCommandInput, PutEventTypeCommandOutput } from "../commands/PutEventTypeCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "../commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "../commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommandInput, PutLabelCommandOutput } from "../commands/PutLabelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "../commands/PutOutcomeCommand";
import { SendEventCommandInput, SendEventCommandOutput } from "../commands/SendEventCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "../commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "../commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "../commands/UpdateDetectorVersionStatusCommand";
import { UpdateEventLabelCommandInput, UpdateEventLabelCommandOutput } from "../commands/UpdateEventLabelCommand";
import { UpdateListCommandInput, UpdateListCommandOutput } from "../commands/UpdateListCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "../commands/UpdateModelCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "../commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "../commands/UpdateModelVersionStatusCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "../commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "../commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "../commands/UpdateVariableCommand";
import { FraudDetectorServiceException as __BaseException } from "../models/FraudDetectorServiceException";
import {
  AccessDeniedException,
  AggregatedLogOddsMetric,
  AggregatedVariablesImpactExplanation,
  AggregatedVariablesImportanceMetrics,
  AllowDenyList,
  ATIMetricDataPoint,
  ATIModelPerformance,
  ATITrainingMetricsValue,
  BatchCreateVariableError,
  BatchCreateVariableRequest,
  BatchCreateVariableResult,
  BatchGetVariableError,
  BatchGetVariableRequest,
  BatchGetVariableResult,
  BatchImport,
  BatchPrediction,
  CancelBatchImportJobRequest,
  CancelBatchImportJobResult,
  CancelBatchPredictionJobRequest,
  CancelBatchPredictionJobResult,
  ConflictException,
  CreateBatchImportJobRequest,
  CreateBatchImportJobResult,
  CreateBatchPredictionJobRequest,
  CreateBatchPredictionJobResult,
  CreateDetectorVersionRequest,
  CreateDetectorVersionResult,
  CreateListRequest,
  CreateListResult,
  CreateModelRequest,
  CreateModelResult,
  CreateModelVersionRequest,
  CreateModelVersionResult,
  CreateRuleRequest,
  CreateRuleResult,
  CreateVariableRequest,
  CreateVariableResult,
  DataValidationMetrics,
  DeleteBatchImportJobRequest,
  DeleteBatchImportJobResult,
  DeleteBatchPredictionJobRequest,
  DeleteBatchPredictionJobResult,
  DeleteDetectorRequest,
  DeleteDetectorResult,
  DeleteDetectorVersionRequest,
  DeleteDetectorVersionResult,
  DeleteEntityTypeRequest,
  DeleteEntityTypeResult,
  DeleteEventRequest,
  DeleteEventResult,
  DeleteEventsByEventTypeRequest,
  DeleteEventsByEventTypeResult,
  DeleteEventTypeRequest,
  DeleteEventTypeResult,
  DeleteExternalModelRequest,
  DeleteExternalModelResult,
  DeleteLabelRequest,
  DeleteLabelResult,
  DeleteListRequest,
  DeleteListResult,
  DeleteModelRequest,
  DeleteModelResult,
  DeleteModelVersionRequest,
  DeleteModelVersionResult,
  DeleteOutcomeRequest,
  DeleteOutcomeResult,
  DeleteRuleRequest,
  DeleteRuleResult,
  DeleteVariableRequest,
  DeleteVariableResult,
  DescribeDetectorRequest,
  DescribeDetectorResult,
  DescribeModelVersionsRequest,
  DescribeModelVersionsResult,
  Detector,
  DetectorVersionSummary,
  Entity,
  EntityType,
  EvaluatedExternalModel,
  EvaluatedModelVersion,
  EvaluatedRule,
  Event,
  EventPredictionSummary,
  EventType,
  EventVariableSummary,
  ExternalEventsDetail,
  ExternalModel,
  ExternalModelOutputs,
  ExternalModelSummary,
  FieldValidationMessage,
  FileValidationMessage,
  FilterCondition,
  GetBatchImportJobsRequest,
  GetBatchImportJobsResult,
  GetBatchPredictionJobsRequest,
  GetBatchPredictionJobsResult,
  GetDeleteEventsByEventTypeStatusRequest,
  GetDeleteEventsByEventTypeStatusResult,
  GetDetectorsRequest,
  GetDetectorsResult,
  GetDetectorVersionRequest,
  GetDetectorVersionResult,
  GetEntityTypesRequest,
  GetEntityTypesResult,
  GetEventPredictionMetadataRequest,
  GetEventPredictionMetadataResult,
  GetEventPredictionRequest,
  GetEventPredictionResult,
  GetEventRequest,
  GetEventResult,
  GetEventTypesRequest,
  GetEventTypesResult,
  GetExternalModelsRequest,
  GetExternalModelsResult,
  GetKMSEncryptionKeyResult,
  GetLabelsRequest,
  GetLabelsResult,
  GetListElementsRequest,
  GetListElementsResult,
  GetListsMetadataRequest,
  GetListsMetadataResult,
  GetModelsRequest,
  GetModelsResult,
  GetModelVersionRequest,
  GetModelVersionResult,
  GetOutcomesRequest,
  GetOutcomesResult,
  GetRulesRequest,
  GetRulesResult,
  GetVariablesRequest,
  GetVariablesResult,
  IngestedEventsDetail,
  IngestedEventStatistics,
  IngestedEventsTimeWindow,
  InternalServerException,
  KMSKey,
  Label,
  LabelSchema,
  ListEventPredictionsRequest,
  ListEventPredictionsResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  LogOddsMetric,
  MetricDataPoint,
  Model,
  ModelEndpointDataBlob,
  ModelInputConfiguration,
  ModelOutputConfiguration,
  ModelScores,
  ModelVersion,
  ModelVersionDetail,
  ModelVersionEvaluation,
  OFIMetricDataPoint,
  OFIModelPerformance,
  OFITrainingMetricsValue,
  Outcome,
  PredictionExplanations,
  PredictionTimeRange,
  PutDetectorRequest,
  PutDetectorResult,
  PutEntityTypeRequest,
  PutEntityTypeResult,
  PutEventTypeRequest,
  PutEventTypeResult,
  PutExternalModelRequest,
  PutExternalModelResult,
  PutKMSEncryptionKeyRequest,
  PutKMSEncryptionKeyResult,
  PutLabelRequest,
  PutLabelResult,
  PutOutcomeRequest,
  PutOutcomeResult,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Rule,
  RuleDetail,
  RuleResult,
  SendEventRequest,
  SendEventResult,
  Tag,
  TagResourceRequest,
  TagResourceResult,
  TFIMetricDataPoint,
  TFIModelPerformance,
  TFITrainingMetricsValue,
  ThrottlingException,
  TrainingDataSchema,
  TrainingMetrics,
  TrainingMetricsV2,
  TrainingResult,
  TrainingResultV2,
  UncertaintyRange,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateDetectorVersionMetadataRequest,
  UpdateDetectorVersionMetadataResult,
  UpdateDetectorVersionRequest,
  UpdateDetectorVersionResult,
  UpdateDetectorVersionStatusRequest,
  UpdateDetectorVersionStatusResult,
  UpdateEventLabelRequest,
  UpdateEventLabelResult,
  UpdateListRequest,
  UpdateListResult,
  UpdateModelRequest,
  UpdateModelResult,
  UpdateModelVersionRequest,
  UpdateModelVersionResult,
  UpdateModelVersionStatusRequest,
  UpdateModelVersionStatusResult,
  UpdateRuleMetadataRequest,
  UpdateRuleMetadataResult,
  UpdateRuleVersionRequest,
  UpdateRuleVersionResult,
  UpdateVariableRequest,
  UpdateVariableResult,
  ValidationException,
  Variable,
  VariableEntry,
  VariableImpactExplanation,
  VariableImportanceMetrics,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchCreateVariableCommand
 */
export const se_BatchCreateVariableCommand = async (
  input: BatchCreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateVariable");
  let body: any;
  body = JSON.stringify(se_BatchCreateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetVariableCommand
 */
export const se_BatchGetVariableCommand = async (
  input: BatchGetVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetVariable");
  let body: any;
  body = JSON.stringify(se_BatchGetVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelBatchImportJobCommand
 */
export const se_CancelBatchImportJobCommand = async (
  input: CancelBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelBatchImportJob");
  let body: any;
  body = JSON.stringify(se_CancelBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelBatchPredictionJobCommand
 */
export const se_CancelBatchPredictionJobCommand = async (
  input: CancelBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelBatchPredictionJob");
  let body: any;
  body = JSON.stringify(se_CancelBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchImportJobCommand
 */
export const se_CreateBatchImportJobCommand = async (
  input: CreateBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchImportJob");
  let body: any;
  body = JSON.stringify(se_CreateBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchPredictionJobCommand
 */
export const se_CreateBatchPredictionJobCommand = async (
  input: CreateBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchPredictionJob");
  let body: any;
  body = JSON.stringify(se_CreateBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDetectorVersionCommand
 */
export const se_CreateDetectorVersionCommand = async (
  input: CreateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDetectorVersion");
  let body: any;
  body = JSON.stringify(se_CreateDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateListCommand
 */
export const se_CreateListCommand = async (
  input: CreateListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateList");
  let body: any;
  body = JSON.stringify(se_CreateListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModel");
  let body: any;
  body = JSON.stringify(se_CreateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelVersionCommand
 */
export const se_CreateModelVersionCommand = async (
  input: CreateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelVersion");
  let body: any;
  body = JSON.stringify(se_CreateModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRule");
  let body: any;
  body = JSON.stringify(se_CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVariableCommand
 */
export const se_CreateVariableCommand = async (
  input: CreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVariable");
  let body: any;
  body = JSON.stringify(se_CreateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchImportJobCommand
 */
export const se_DeleteBatchImportJobCommand = async (
  input: DeleteBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBatchImportJob");
  let body: any;
  body = JSON.stringify(se_DeleteBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchPredictionJobCommand
 */
export const se_DeleteBatchPredictionJobCommand = async (
  input: DeleteBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBatchPredictionJob");
  let body: any;
  body = JSON.stringify(se_DeleteBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDetectorCommand
 */
export const se_DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDetector");
  let body: any;
  body = JSON.stringify(se_DeleteDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDetectorVersionCommand
 */
export const se_DeleteDetectorVersionCommand = async (
  input: DeleteDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDetectorVersion");
  let body: any;
  body = JSON.stringify(se_DeleteDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEntityTypeCommand
 */
export const se_DeleteEntityTypeCommand = async (
  input: DeleteEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEntityType");
  let body: any;
  body = JSON.stringify(se_DeleteEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventCommand
 */
export const se_DeleteEventCommand = async (
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEvent");
  let body: any;
  body = JSON.stringify(se_DeleteEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventsByEventTypeCommand
 */
export const se_DeleteEventsByEventTypeCommand = async (
  input: DeleteEventsByEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventsByEventType");
  let body: any;
  body = JSON.stringify(se_DeleteEventsByEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventTypeCommand
 */
export const se_DeleteEventTypeCommand = async (
  input: DeleteEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventType");
  let body: any;
  body = JSON.stringify(se_DeleteEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExternalModelCommand
 */
export const se_DeleteExternalModelCommand = async (
  input: DeleteExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExternalModel");
  let body: any;
  body = JSON.stringify(se_DeleteExternalModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLabelCommand
 */
export const se_DeleteLabelCommand = async (
  input: DeleteLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLabel");
  let body: any;
  body = JSON.stringify(se_DeleteLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteListCommand
 */
export const se_DeleteListCommand = async (
  input: DeleteListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteList");
  let body: any;
  body = JSON.stringify(se_DeleteListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModel");
  let body: any;
  body = JSON.stringify(se_DeleteModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelVersionCommand
 */
export const se_DeleteModelVersionCommand = async (
  input: DeleteModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelVersion");
  let body: any;
  body = JSON.stringify(se_DeleteModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOutcomeCommand
 */
export const se_DeleteOutcomeCommand = async (
  input: DeleteOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOutcome");
  let body: any;
  body = JSON.stringify(se_DeleteOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRule");
  let body: any;
  body = JSON.stringify(se_DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVariableCommand
 */
export const se_DeleteVariableCommand = async (
  input: DeleteVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVariable");
  let body: any;
  body = JSON.stringify(se_DeleteVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDetectorCommand
 */
export const se_DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDetector");
  let body: any;
  body = JSON.stringify(se_DescribeDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelVersionsCommand
 */
export const se_DescribeModelVersionsCommand = async (
  input: DescribeModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelVersions");
  let body: any;
  body = JSON.stringify(se_DescribeModelVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchImportJobsCommand
 */
export const se_GetBatchImportJobsCommand = async (
  input: GetBatchImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBatchImportJobs");
  let body: any;
  body = JSON.stringify(se_GetBatchImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchPredictionJobsCommand
 */
export const se_GetBatchPredictionJobsCommand = async (
  input: GetBatchPredictionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBatchPredictionJobs");
  let body: any;
  body = JSON.stringify(se_GetBatchPredictionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand
 */
export const se_GetDeleteEventsByEventTypeStatusCommand = async (
  input: GetDeleteEventsByEventTypeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeleteEventsByEventTypeStatus");
  let body: any;
  body = JSON.stringify(se_GetDeleteEventsByEventTypeStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDetectorsCommand
 */
export const se_GetDetectorsCommand = async (
  input: GetDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDetectors");
  let body: any;
  body = JSON.stringify(se_GetDetectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDetectorVersionCommand
 */
export const se_GetDetectorVersionCommand = async (
  input: GetDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDetectorVersion");
  let body: any;
  body = JSON.stringify(se_GetDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEntityTypesCommand
 */
export const se_GetEntityTypesCommand = async (
  input: GetEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEntityTypes");
  let body: any;
  body = JSON.stringify(se_GetEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventCommand
 */
export const se_GetEventCommand = async (
  input: GetEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEvent");
  let body: any;
  body = JSON.stringify(se_GetEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventPredictionCommand
 */
export const se_GetEventPredictionCommand = async (
  input: GetEventPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventPrediction");
  let body: any;
  body = JSON.stringify(se_GetEventPredictionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventPredictionMetadataCommand
 */
export const se_GetEventPredictionMetadataCommand = async (
  input: GetEventPredictionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventPredictionMetadata");
  let body: any;
  body = JSON.stringify(se_GetEventPredictionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventTypesCommand
 */
export const se_GetEventTypesCommand = async (
  input: GetEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventTypes");
  let body: any;
  body = JSON.stringify(se_GetEventTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExternalModelsCommand
 */
export const se_GetExternalModelsCommand = async (
  input: GetExternalModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExternalModels");
  let body: any;
  body = JSON.stringify(se_GetExternalModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKMSEncryptionKeyCommand
 */
export const se_GetKMSEncryptionKeyCommand = async (
  input: GetKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKMSEncryptionKey");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLabelsCommand
 */
export const se_GetLabelsCommand = async (
  input: GetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLabels");
  let body: any;
  body = JSON.stringify(se_GetLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetListElementsCommand
 */
export const se_GetListElementsCommand = async (
  input: GetListElementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetListElements");
  let body: any;
  body = JSON.stringify(se_GetListElementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetListsMetadataCommand
 */
export const se_GetListsMetadataCommand = async (
  input: GetListsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetListsMetadata");
  let body: any;
  body = JSON.stringify(se_GetListsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelsCommand
 */
export const se_GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModels");
  let body: any;
  body = JSON.stringify(se_GetModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelVersionCommand
 */
export const se_GetModelVersionCommand = async (
  input: GetModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModelVersion");
  let body: any;
  body = JSON.stringify(se_GetModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOutcomesCommand
 */
export const se_GetOutcomesCommand = async (
  input: GetOutcomesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOutcomes");
  let body: any;
  body = JSON.stringify(se_GetOutcomesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRulesCommand
 */
export const se_GetRulesCommand = async (
  input: GetRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRules");
  let body: any;
  body = JSON.stringify(se_GetRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVariablesCommand
 */
export const se_GetVariablesCommand = async (
  input: GetVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVariables");
  let body: any;
  body = JSON.stringify(se_GetVariablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventPredictionsCommand
 */
export const se_ListEventPredictionsCommand = async (
  input: ListEventPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventPredictions");
  let body: any;
  body = JSON.stringify(se_ListEventPredictionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDetectorCommand
 */
export const se_PutDetectorCommand = async (
  input: PutDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDetector");
  let body: any;
  body = JSON.stringify(se_PutDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEntityTypeCommand
 */
export const se_PutEntityTypeCommand = async (
  input: PutEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEntityType");
  let body: any;
  body = JSON.stringify(se_PutEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEventTypeCommand
 */
export const se_PutEventTypeCommand = async (
  input: PutEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEventType");
  let body: any;
  body = JSON.stringify(se_PutEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutExternalModelCommand
 */
export const se_PutExternalModelCommand = async (
  input: PutExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutExternalModel");
  let body: any;
  body = JSON.stringify(se_PutExternalModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutKMSEncryptionKeyCommand
 */
export const se_PutKMSEncryptionKeyCommand = async (
  input: PutKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutKMSEncryptionKey");
  let body: any;
  body = JSON.stringify(se_PutKMSEncryptionKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLabelCommand
 */
export const se_PutLabelCommand = async (
  input: PutLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLabel");
  let body: any;
  body = JSON.stringify(se_PutLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutOutcomeCommand
 */
export const se_PutOutcomeCommand = async (
  input: PutOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutOutcome");
  let body: any;
  body = JSON.stringify(se_PutOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendEventCommand
 */
export const se_SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendEvent");
  let body: any;
  body = JSON.stringify(se_SendEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDetectorVersionCommand
 */
export const se_UpdateDetectorVersionCommand = async (
  input: UpdateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersion");
  let body: any;
  body = JSON.stringify(se_UpdateDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDetectorVersionMetadataCommand
 */
export const se_UpdateDetectorVersionMetadataCommand = async (
  input: UpdateDetectorVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersionMetadata");
  let body: any;
  body = JSON.stringify(se_UpdateDetectorVersionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDetectorVersionStatusCommand
 */
export const se_UpdateDetectorVersionStatusCommand = async (
  input: UpdateDetectorVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersionStatus");
  let body: any;
  body = JSON.stringify(se_UpdateDetectorVersionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEventLabelCommand
 */
export const se_UpdateEventLabelCommand = async (
  input: UpdateEventLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEventLabel");
  let body: any;
  body = JSON.stringify(se_UpdateEventLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateListCommand
 */
export const se_UpdateListCommand = async (
  input: UpdateListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateList");
  let body: any;
  body = JSON.stringify(se_UpdateListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelCommand
 */
export const se_UpdateModelCommand = async (
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModel");
  let body: any;
  body = JSON.stringify(se_UpdateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelVersionCommand
 */
export const se_UpdateModelVersionCommand = async (
  input: UpdateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelVersion");
  let body: any;
  body = JSON.stringify(se_UpdateModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelVersionStatusCommand
 */
export const se_UpdateModelVersionStatusCommand = async (
  input: UpdateModelVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelVersionStatus");
  let body: any;
  body = JSON.stringify(se_UpdateModelVersionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleMetadataCommand
 */
export const se_UpdateRuleMetadataCommand = async (
  input: UpdateRuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleMetadata");
  let body: any;
  body = JSON.stringify(se_UpdateRuleMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleVersionCommand
 */
export const se_UpdateRuleVersionCommand = async (
  input: UpdateRuleVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleVersion");
  let body: any;
  body = JSON.stringify(se_UpdateRuleVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVariableCommand
 */
export const se_UpdateVariableCommand = async (
  input: UpdateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVariable");
  let body: any;
  body = JSON.stringify(se_UpdateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchCreateVariableCommand
 */
export const de_BatchCreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchCreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCreateVariableResult(data, context);
  const response: BatchCreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchCreateVariableCommandError
 */
const de_BatchCreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1BatchGetVariableCommand
 */
export const de_BatchGetVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetVariableResult(data, context);
  const response: BatchGetVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetVariableCommandError
 */
const de_BatchGetVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CancelBatchImportJobCommand
 */
export const de_CancelBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelBatchImportJobResult(data, context);
  const response: CancelBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelBatchImportJobCommandError
 */
const de_CancelBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CancelBatchPredictionJobCommand
 */
export const de_CancelBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelBatchPredictionJobResult(data, context);
  const response: CancelBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelBatchPredictionJobCommandError
 */
const de_CancelBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateBatchImportJobCommand
 */
export const de_CreateBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBatchImportJobResult(data, context);
  const response: CreateBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBatchImportJobCommandError
 */
const de_CreateBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateBatchPredictionJobCommand
 */
export const de_CreateBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBatchPredictionJobResult(data, context);
  const response: CreateBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBatchPredictionJobCommandError
 */
const de_CreateBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateDetectorVersionCommand
 */
export const de_CreateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDetectorVersionResult(data, context);
  const response: CreateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDetectorVersionCommandError
 */
const de_CreateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateListCommand
 */
export const de_CreateListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateListResult(data, context);
  const response: CreateListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateListCommandError
 */
const de_CreateListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelResult(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateModelCommandError
 */
const de_CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateModelVersionCommand
 */
export const de_CreateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelVersionResult(data, context);
  const response: CreateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateModelVersionCommandError
 */
const de_CreateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRuleResult(data, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRuleCommandError
 */
const de_CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateVariableCommand
 */
export const de_CreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVariableResult(data, context);
  const response: CreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateVariableCommandError
 */
const de_CreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteBatchImportJobCommand
 */
export const de_DeleteBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBatchImportJobResult(data, context);
  const response: DeleteBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBatchImportJobCommandError
 */
const de_DeleteBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteBatchPredictionJobCommand
 */
export const de_DeleteBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBatchPredictionJobResult(data, context);
  const response: DeleteBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBatchPredictionJobCommandError
 */
const de_DeleteBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteDetectorCommand
 */
export const de_DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDetectorResult(data, context);
  const response: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDetectorCommandError
 */
const de_DeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteDetectorVersionCommand
 */
export const de_DeleteDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDetectorVersionResult(data, context);
  const response: DeleteDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDetectorVersionCommandError
 */
const de_DeleteDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEntityTypeCommand
 */
export const de_DeleteEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEntityTypeResult(data, context);
  const response: DeleteEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEntityTypeCommandError
 */
const de_DeleteEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventCommand
 */
export const de_DeleteEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventResult(data, context);
  const response: DeleteEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventCommandError
 */
const de_DeleteEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventsByEventTypeCommand
 */
export const de_DeleteEventsByEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsByEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventsByEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventsByEventTypeResult(data, context);
  const response: DeleteEventsByEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventsByEventTypeCommandError
 */
const de_DeleteEventsByEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsByEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventTypeCommand
 */
export const de_DeleteEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventTypeResult(data, context);
  const response: DeleteEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventTypeCommandError
 */
const de_DeleteEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteExternalModelCommand
 */
export const de_DeleteExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteExternalModelResult(data, context);
  const response: DeleteExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteExternalModelCommandError
 */
const de_DeleteExternalModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExternalModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteLabelCommand
 */
export const de_DeleteLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLabelResult(data, context);
  const response: DeleteLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLabelCommandError
 */
const de_DeleteLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteListCommand
 */
export const de_DeleteListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteListResult(data, context);
  const response: DeleteListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteListCommandError
 */
const de_DeleteListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteModelResult(data, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteModelCommandError
 */
const de_DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteModelVersionCommand
 */
export const de_DeleteModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteModelVersionResult(data, context);
  const response: DeleteModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteModelVersionCommandError
 */
const de_DeleteModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteOutcomeCommand
 */
export const de_DeleteOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteOutcomeResult(data, context);
  const response: DeleteOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOutcomeCommandError
 */
const de_DeleteOutcomeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutcomeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRuleResult(data, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteVariableCommand
 */
export const de_DeleteVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVariableResult(data, context);
  const response: DeleteVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteVariableCommandError
 */
const de_DeleteVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DescribeDetectorCommand
 */
export const de_DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDetectorResult(data, context);
  const response: DescribeDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDetectorCommandError
 */
const de_DescribeDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DescribeModelVersionsCommand
 */
export const de_DescribeModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelVersionsResult(data, context);
  const response: DescribeModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeModelVersionsCommandError
 */
const de_DescribeModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetBatchImportJobsCommand
 */
export const de_GetBatchImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBatchImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBatchImportJobsResult(data, context);
  const response: GetBatchImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBatchImportJobsCommandError
 */
const de_GetBatchImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetBatchPredictionJobsCommand
 */
export const de_GetBatchPredictionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBatchPredictionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBatchPredictionJobsResult(data, context);
  const response: GetBatchPredictionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBatchPredictionJobsCommandError
 */
const de_GetBatchPredictionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand
 */
export const de_GetDeleteEventsByEventTypeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeleteEventsByEventTypeStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeleteEventsByEventTypeStatusResult(data, context);
  const response: GetDeleteEventsByEventTypeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommandError
 */
const de_GetDeleteEventsByEventTypeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDetectorsCommand
 */
export const de_GetDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDetectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDetectorsResult(data, context);
  const response: GetDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDetectorsCommandError
 */
const de_GetDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDetectorVersionCommand
 */
export const de_GetDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDetectorVersionResult(data, context);
  const response: GetDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDetectorVersionCommandError
 */
const de_GetDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEntityTypesCommand
 */
export const de_GetEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEntityTypesResult(data, context);
  const response: GetEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEntityTypesCommandError
 */
const de_GetEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventCommand
 */
export const de_GetEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventResult(data, context);
  const response: GetEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventCommandError
 */
const de_GetEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventPredictionCommand
 */
export const de_GetEventPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventPredictionResult(data, context);
  const response: GetEventPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventPredictionCommandError
 */
const de_GetEventPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.frauddetector#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventPredictionMetadataCommand
 */
export const de_GetEventPredictionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventPredictionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventPredictionMetadataResult(data, context);
  const response: GetEventPredictionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventPredictionMetadataCommandError
 */
const de_GetEventPredictionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventTypesCommand
 */
export const de_GetEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventTypesResult(data, context);
  const response: GetEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventTypesCommandError
 */
const de_GetEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetExternalModelsCommand
 */
export const de_GetExternalModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExternalModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetExternalModelsResult(data, context);
  const response: GetExternalModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetExternalModelsCommandError
 */
const de_GetExternalModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetKMSEncryptionKeyCommand
 */
export const de_GetKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetKMSEncryptionKeyResult(data, context);
  const response: GetKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetKMSEncryptionKeyCommandError
 */
const de_GetKMSEncryptionKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKMSEncryptionKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLabelsCommand
 */
export const de_GetLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLabelsResult(data, context);
  const response: GetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLabelsCommandError
 */
const de_GetLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetListElementsCommand
 */
export const de_GetListElementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListElementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetListElementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetListElementsResult(data, context);
  const response: GetListElementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetListElementsCommandError
 */
const de_GetListElementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListElementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetListsMetadataCommand
 */
export const de_GetListsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetListsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetListsMetadataResult(data, context);
  const response: GetListsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetListsMetadataCommandError
 */
const de_GetListsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetModelsCommand
 */
export const de_GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetModelsResult(data, context);
  const response: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetModelsCommandError
 */
const de_GetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetModelVersionCommand
 */
export const de_GetModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetModelVersionResult(data, context);
  const response: GetModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetModelVersionCommandError
 */
const de_GetModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetOutcomesCommand
 */
export const de_GetOutcomesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOutcomesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOutcomesResult(data, context);
  const response: GetOutcomesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOutcomesCommandError
 */
const de_GetOutcomesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetRulesCommand
 */
export const de_GetRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRulesResult(data, context);
  const response: GetRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRulesCommandError
 */
const de_GetRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetVariablesCommand
 */
export const de_GetVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVariablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVariablesResult(data, context);
  const response: GetVariablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetVariablesCommandError
 */
const de_GetVariablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1ListEventPredictionsCommand
 */
export const de_ListEventPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventPredictionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventPredictionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventPredictionsResult(data, context);
  const response: ListEventPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEventPredictionsCommandError
 */
const de_ListEventPredictionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventPredictionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutDetectorCommand
 */
export const de_PutDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutDetectorResult(data, context);
  const response: PutDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutDetectorCommandError
 */
const de_PutDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutEntityTypeCommand
 */
export const de_PutEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEntityTypeResult(data, context);
  const response: PutEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEntityTypeCommandError
 */
const de_PutEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutEventTypeCommand
 */
export const de_PutEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEventTypeResult(data, context);
  const response: PutEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEventTypeCommandError
 */
const de_PutEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutExternalModelCommand
 */
export const de_PutExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutExternalModelResult(data, context);
  const response: PutExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutExternalModelCommandError
 */
const de_PutExternalModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutKMSEncryptionKeyCommand
 */
export const de_PutKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutKMSEncryptionKeyResult(data, context);
  const response: PutKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutKMSEncryptionKeyCommandError
 */
const de_PutKMSEncryptionKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKMSEncryptionKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutLabelCommand
 */
export const de_PutLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLabelResult(data, context);
  const response: PutLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLabelCommandError
 */
const de_PutLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutOutcomeCommand
 */
export const de_PutOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutOutcomeResult(data, context);
  const response: PutOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutOutcomeCommandError
 */
const de_PutOutcomeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1SendEventCommand
 */
export const de_SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendEventResult(data, context);
  const response: SendEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendEventCommandError
 */
const de_SendEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionCommand
 */
export const de_UpdateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDetectorVersionResult(data, context);
  const response: UpdateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionCommandError
 */
const de_UpdateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionMetadataCommand
 */
export const de_UpdateDetectorVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDetectorVersionMetadataResult(data, context);
  const response: UpdateDetectorVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError
 */
const de_UpdateDetectorVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionStatusCommand
 */
export const de_UpdateDetectorVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDetectorVersionStatusResult(data, context);
  const response: UpdateDetectorVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionStatusCommandError
 */
const de_UpdateDetectorVersionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateEventLabelCommand
 */
export const de_UpdateEventLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEventLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEventLabelResult(data, context);
  const response: UpdateEventLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEventLabelCommandError
 */
const de_UpdateEventLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateListCommand
 */
export const de_UpdateListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateListResult(data, context);
  const response: UpdateListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateListCommandError
 */
const de_UpdateListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelCommand
 */
export const de_UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelResult(data, context);
  const response: UpdateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateModelCommandError
 */
const de_UpdateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelVersionCommand
 */
export const de_UpdateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelVersionResult(data, context);
  const response: UpdateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateModelVersionCommandError
 */
const de_UpdateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelVersionStatusCommand
 */
export const de_UpdateModelVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelVersionStatusResult(data, context);
  const response: UpdateModelVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateModelVersionStatusCommandError
 */
const de_UpdateModelVersionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateRuleMetadataCommand
 */
export const de_UpdateRuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRuleMetadataResult(data, context);
  const response: UpdateRuleMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRuleMetadataCommandError
 */
const de_UpdateRuleMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateRuleVersionCommand
 */
export const de_UpdateRuleVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRuleVersionResult(data, context);
  const response: UpdateRuleVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRuleVersionCommandError
 */
const de_UpdateRuleVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateVariableCommand
 */
export const de_UpdateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVariableResult(data, context);
  const response: UpdateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVariableCommandError
 */
const de_UpdateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1BatchCreateVariableRequest
 */
const se_BatchCreateVariableRequest = (input: BatchCreateVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
    ...(input.variableEntries != null && { variableEntries: se_VariableEntryList(input.variableEntries, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetVariableRequest
 */
const se_BatchGetVariableRequest = (input: BatchGetVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.names != null && { names: se_NameList(input.names, context) }),
  };
};

/**
 * serializeAws_json1_1CancelBatchImportJobRequest
 */
const se_CancelBatchImportJobRequest = (input: CancelBatchImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1CancelBatchPredictionJobRequest
 */
const se_CancelBatchPredictionJobRequest = (input: CancelBatchPredictionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1CreateBatchImportJobRequest
 */
const se_CreateBatchImportJobRequest = (input: CreateBatchImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.iamRoleArn != null && { iamRoleArn: input.iamRoleArn }),
    ...(input.inputPath != null && { inputPath: input.inputPath }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputPath != null && { outputPath: input.outputPath }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBatchPredictionJobRequest
 */
const se_CreateBatchPredictionJobRequest = (input: CreateBatchPredictionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorName != null && { detectorName: input.detectorName }),
    ...(input.detectorVersion != null && { detectorVersion: input.detectorVersion }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.iamRoleArn != null && { iamRoleArn: input.iamRoleArn }),
    ...(input.inputPath != null && { inputPath: input.inputPath }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputPath != null && { outputPath: input.outputPath }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDetectorVersionRequest
 */
const se_CreateDetectorVersionRequest = (input: CreateDetectorVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.externalModelEndpoints != null && {
      externalModelEndpoints: se_ListOfStrings(input.externalModelEndpoints, context),
    }),
    ...(input.modelVersions != null && { modelVersions: se_ListOfModelVersions(input.modelVersions, context) }),
    ...(input.ruleExecutionMode != null && { ruleExecutionMode: input.ruleExecutionMode }),
    ...(input.rules != null && { rules: se_RuleList(input.rules, context) }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateListRequest
 */
const se_CreateListRequest = (input: CreateListRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.elements != null && { elements: se_ElementsList(input.elements, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

/**
 * serializeAws_json1_1CreateModelRequest
 */
const se_CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateModelVersionRequest
 */
const se_CreateModelVersionRequest = (input: CreateModelVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.externalEventsDetail != null && {
      externalEventsDetail: se_ExternalEventsDetail(input.externalEventsDetail, context),
    }),
    ...(input.ingestedEventsDetail != null && {
      ingestedEventsDetail: se_IngestedEventsDetail(input.ingestedEventsDetail, context),
    }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
    ...(input.trainingDataSchema != null && {
      trainingDataSchema: se_TrainingDataSchema(input.trainingDataSchema, context),
    }),
    ...(input.trainingDataSource != null && { trainingDataSource: input.trainingDataSource }),
  };
};

/**
 * serializeAws_json1_1CreateRuleRequest
 */
const se_CreateRuleRequest = (input: CreateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.language != null && { language: input.language }),
    ...(input.outcomes != null && { outcomes: se_NonEmptyListOfStrings(input.outcomes, context) }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateVariableRequest
 */
const se_CreateVariableRequest = (input: CreateVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.dataSource != null && { dataSource: input.dataSource }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

/**
 * serializeAws_json1_1CsvIndexToVariableMap
 */
const se_CsvIndexToVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DeleteBatchImportJobRequest
 */
const se_DeleteBatchImportJobRequest = (input: DeleteBatchImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1DeleteBatchPredictionJobRequest
 */
const se_DeleteBatchPredictionJobRequest = (input: DeleteBatchPredictionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1DeleteDetectorRequest
 */
const se_DeleteDetectorRequest = (input: DeleteDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
  };
};

/**
 * serializeAws_json1_1DeleteDetectorVersionRequest
 */
const se_DeleteDetectorVersionRequest = (input: DeleteDetectorVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

/**
 * serializeAws_json1_1DeleteEntityTypeRequest
 */
const se_DeleteEntityTypeRequest = (input: DeleteEntityTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteEventRequest
 */
const se_DeleteEventRequest = (input: DeleteEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.deleteAuditHistory != null && { deleteAuditHistory: input.deleteAuditHistory }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

/**
 * serializeAws_json1_1DeleteEventsByEventTypeRequest
 */
const se_DeleteEventsByEventTypeRequest = (input: DeleteEventsByEventTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

/**
 * serializeAws_json1_1DeleteEventTypeRequest
 */
const se_DeleteEventTypeRequest = (input: DeleteEventTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteExternalModelRequest
 */
const se_DeleteExternalModelRequest = (input: DeleteExternalModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
  };
};

/**
 * serializeAws_json1_1DeleteLabelRequest
 */
const se_DeleteLabelRequest = (input: DeleteLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteListRequest
 */
const se_DeleteListRequest = (input: DeleteListRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteModelRequest
 */
const se_DeleteModelRequest = (input: DeleteModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
  };
};

/**
 * serializeAws_json1_1DeleteModelVersionRequest
 */
const se_DeleteModelVersionRequest = (input: DeleteModelVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

/**
 * serializeAws_json1_1DeleteOutcomeRequest
 */
const se_DeleteOutcomeRequest = (input: DeleteOutcomeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteRuleRequest
 */
const se_DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.rule != null && { rule: se_Rule(input.rule, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteVariableRequest
 */
const se_DeleteVariableRequest = (input: DeleteVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DescribeDetectorRequest
 */
const se_DescribeDetectorRequest = (input: DescribeDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeModelVersionsRequest
 */
const se_DescribeModelVersionsRequest = (input: DescribeModelVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ElementsList
 */
const se_ElementsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Entity
 */
const se_Entity = (input: Entity, context: __SerdeContext): any => {
  return {
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.entityType != null && { entityType: input.entityType }),
  };
};

/**
 * serializeAws_json1_1EventVariableMap
 */
const se_EventVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ExternalEventsDetail
 */
const se_ExternalEventsDetail = (input: ExternalEventsDetail, context: __SerdeContext): any => {
  return {
    ...(input.dataAccessRoleArn != null && { dataAccessRoleArn: input.dataAccessRoleArn }),
    ...(input.dataLocation != null && { dataLocation: input.dataLocation }),
  };
};

/**
 * serializeAws_json1_1ExternalModelEndpointDataBlobMap
 */
const se_ExternalModelEndpointDataBlobMap = (
  input: Record<string, ModelEndpointDataBlob>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ModelEndpointDataBlob(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1FilterCondition
 */
const se_FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1GetBatchImportJobsRequest
 */
const se_GetBatchImportJobsRequest = (input: GetBatchImportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetBatchPredictionJobsRequest
 */
const se_GetBatchPredictionJobsRequest = (input: GetBatchPredictionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetDeleteEventsByEventTypeStatusRequest
 */
const se_GetDeleteEventsByEventTypeStatusRequest = (
  input: GetDeleteEventsByEventTypeStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

/**
 * serializeAws_json1_1GetDetectorsRequest
 */
const se_GetDetectorsRequest = (input: GetDetectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetDetectorVersionRequest
 */
const se_GetDetectorVersionRequest = (input: GetDetectorVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

/**
 * serializeAws_json1_1GetEntityTypesRequest
 */
const se_GetEntityTypesRequest = (input: GetEntityTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetEventPredictionMetadataRequest
 */
const se_GetEventPredictionMetadataRequest = (
  input: GetEventPredictionMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.predictionTimestamp != null && { predictionTimestamp: input.predictionTimestamp }),
  };
};

/**
 * serializeAws_json1_1GetEventPredictionRequest
 */
const se_GetEventPredictionRequest = (input: GetEventPredictionRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.entities != null && { entities: se_listOfEntities(input.entities, context) }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTimestamp != null && { eventTimestamp: input.eventTimestamp }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.eventVariables != null && { eventVariables: se_EventVariableMap(input.eventVariables, context) }),
    ...(input.externalModelEndpointDataBlobs != null && {
      externalModelEndpointDataBlobs: se_ExternalModelEndpointDataBlobMap(
        input.externalModelEndpointDataBlobs,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1GetEventRequest
 */
const se_GetEventRequest = (input: GetEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

/**
 * serializeAws_json1_1GetEventTypesRequest
 */
const se_GetEventTypesRequest = (input: GetEventTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetExternalModelsRequest
 */
const se_GetExternalModelsRequest = (input: GetExternalModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetLabelsRequest
 */
const se_GetLabelsRequest = (input: GetLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetListElementsRequest
 */
const se_GetListElementsRequest = (input: GetListElementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetListsMetadataRequest
 */
const se_GetListsMetadataRequest = (input: GetListsMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetModelsRequest
 */
const se_GetModelsRequest = (input: GetModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetModelVersionRequest
 */
const se_GetModelVersionRequest = (input: GetModelVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

/**
 * serializeAws_json1_1GetOutcomesRequest
 */
const se_GetOutcomesRequest = (input: GetOutcomesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetRulesRequest
 */
const se_GetRulesRequest = (input: GetRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.ruleVersion != null && { ruleVersion: input.ruleVersion }),
  };
};

/**
 * serializeAws_json1_1GetVariablesRequest
 */
const se_GetVariablesRequest = (input: GetVariablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1IngestedEventsDetail
 */
const se_IngestedEventsDetail = (input: IngestedEventsDetail, context: __SerdeContext): any => {
  return {
    ...(input.ingestedEventsTimeWindow != null && {
      ingestedEventsTimeWindow: se_IngestedEventsTimeWindow(input.ingestedEventsTimeWindow, context),
    }),
  };
};

/**
 * serializeAws_json1_1IngestedEventsTimeWindow
 */
const se_IngestedEventsTimeWindow = (input: IngestedEventsTimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

/**
 * serializeAws_json1_1JsonKeyToVariableMap
 */
const se_JsonKeyToVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1labelMapper
 */
const se_labelMapper = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ListOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LabelSchema
 */
const se_LabelSchema = (input: LabelSchema, context: __SerdeContext): any => {
  return {
    ...(input.labelMapper != null && { labelMapper: se_labelMapper(input.labelMapper, context) }),
    ...(input.unlabeledEventsTreatment != null && { unlabeledEventsTreatment: input.unlabeledEventsTreatment }),
  };
};

/**
 * serializeAws_json1_1ListEventPredictionsRequest
 */
const se_ListEventPredictionsRequest = (input: ListEventPredictionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: se_FilterCondition(input.detectorId, context) }),
    ...(input.detectorVersionId != null && { detectorVersionId: se_FilterCondition(input.detectorVersionId, context) }),
    ...(input.eventId != null && { eventId: se_FilterCondition(input.eventId, context) }),
    ...(input.eventType != null && { eventType: se_FilterCondition(input.eventType, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.predictionTimeRange != null && {
      predictionTimeRange: se_PredictionTimeRange(input.predictionTimeRange, context),
    }),
  };
};

/**
 * serializeAws_json1_1listOfEntities
 */
const se_listOfEntities = (input: Entity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Entity(entry, context);
    });
};

/**
 * serializeAws_json1_1ListOfModelVersions
 */
const se_ListOfModelVersions = (input: ModelVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ModelVersion(entry, context);
    });
};

/**
 * serializeAws_json1_1ListOfStrings
 */
const se_ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
  };
};

/**
 * serializeAws_json1_1ModelEndpointDataBlob
 */
const se_ModelEndpointDataBlob = (input: ModelEndpointDataBlob, context: __SerdeContext): any => {
  return {
    ...(input.byteBuffer != null && { byteBuffer: context.base64Encoder(input.byteBuffer) }),
    ...(input.contentType != null && { contentType: input.contentType }),
  };
};

/**
 * serializeAws_json1_1ModelInputConfiguration
 */
const se_ModelInputConfiguration = (input: ModelInputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.csvInputTemplate != null && { csvInputTemplate: input.csvInputTemplate }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.format != null && { format: input.format }),
    ...(input.jsonInputTemplate != null && { jsonInputTemplate: input.jsonInputTemplate }),
    ...(input.useEventVariables != null && { useEventVariables: input.useEventVariables }),
  };
};

/**
 * serializeAws_json1_1ModelOutputConfiguration
 */
const se_ModelOutputConfiguration = (input: ModelOutputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.csvIndexToVariableMap != null && {
      csvIndexToVariableMap: se_CsvIndexToVariableMap(input.csvIndexToVariableMap, context),
    }),
    ...(input.format != null && { format: input.format }),
    ...(input.jsonKeyToVariableMap != null && {
      jsonKeyToVariableMap: se_JsonKeyToVariableMap(input.jsonKeyToVariableMap, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModelVersion
 */
const se_ModelVersion = (input: ModelVersion, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

/**
 * serializeAws_json1_1NameList
 */
const se_NameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1NonEmptyListOfStrings
 */
const se_NonEmptyListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PredictionTimeRange
 */
const se_PredictionTimeRange = (input: PredictionTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

/**
 * serializeAws_json1_1PutDetectorRequest
 */
const se_PutDetectorRequest = (input: PutDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutEntityTypeRequest
 */
const se_PutEntityTypeRequest = (input: PutEntityTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutEventTypeRequest
 */
const se_PutEventTypeRequest = (input: PutEventTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.entityTypes != null && { entityTypes: se_NonEmptyListOfStrings(input.entityTypes, context) }),
    ...(input.eventIngestion != null && { eventIngestion: input.eventIngestion }),
    ...(input.eventVariables != null && { eventVariables: se_NonEmptyListOfStrings(input.eventVariables, context) }),
    ...(input.labels != null && { labels: se_ListOfStrings(input.labels, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutExternalModelRequest
 */
const se_PutExternalModelRequest = (input: PutExternalModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.inputConfiguration != null && {
      inputConfiguration: se_ModelInputConfiguration(input.inputConfiguration, context),
    }),
    ...(input.invokeModelEndpointRoleArn != null && { invokeModelEndpointRoleArn: input.invokeModelEndpointRoleArn }),
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
    ...(input.modelEndpointStatus != null && { modelEndpointStatus: input.modelEndpointStatus }),
    ...(input.modelSource != null && { modelSource: input.modelSource }),
    ...(input.outputConfiguration != null && {
      outputConfiguration: se_ModelOutputConfiguration(input.outputConfiguration, context),
    }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutKMSEncryptionKeyRequest
 */
const se_PutKMSEncryptionKeyRequest = (input: PutKMSEncryptionKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.kmsEncryptionKeyArn != null && { kmsEncryptionKeyArn: input.kmsEncryptionKeyArn }),
  };
};

/**
 * serializeAws_json1_1PutLabelRequest
 */
const se_PutLabelRequest = (input: PutLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutOutcomeRequest
 */
const se_PutOutcomeRequest = (input: PutOutcomeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.ruleVersion != null && { ruleVersion: input.ruleVersion }),
  };
};

/**
 * serializeAws_json1_1RuleList
 */
const se_RuleList = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Rule(entry, context);
    });
};

/**
 * serializeAws_json1_1SendEventRequest
 */
const se_SendEventRequest = (input: SendEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.assignedLabel != null && { assignedLabel: input.assignedLabel }),
    ...(input.entities != null && { entities: se_listOfEntities(input.entities, context) }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTimestamp != null && { eventTimestamp: input.eventTimestamp }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.eventVariables != null && { eventVariables: se_EventVariableMap(input.eventVariables, context) }),
    ...(input.labelTimestamp != null && { labelTimestamp: input.labelTimestamp }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1tagKeyList
 */
const se_tagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1tagList
 */
const se_tagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1TrainingDataSchema
 */
const se_TrainingDataSchema = (input: TrainingDataSchema, context: __SerdeContext): any => {
  return {
    ...(input.labelSchema != null && { labelSchema: se_LabelSchema(input.labelSchema, context) }),
    ...(input.modelVariables != null && { modelVariables: se_ListOfStrings(input.modelVariables, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tagKeys != null && { tagKeys: se_tagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDetectorVersionMetadataRequest
 */
const se_UpdateDetectorVersionMetadataRequest = (
  input: UpdateDetectorVersionMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

/**
 * serializeAws_json1_1UpdateDetectorVersionRequest
 */
const se_UpdateDetectorVersionRequest = (input: UpdateDetectorVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.externalModelEndpoints != null && {
      externalModelEndpoints: se_ListOfStrings(input.externalModelEndpoints, context),
    }),
    ...(input.modelVersions != null && { modelVersions: se_ListOfModelVersions(input.modelVersions, context) }),
    ...(input.ruleExecutionMode != null && { ruleExecutionMode: input.ruleExecutionMode }),
    ...(input.rules != null && { rules: se_RuleList(input.rules, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDetectorVersionStatusRequest
 */
const se_UpdateDetectorVersionStatusRequest = (
  input: UpdateDetectorVersionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1UpdateEventLabelRequest
 */
const se_UpdateEventLabelRequest = (input: UpdateEventLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.assignedLabel != null && { assignedLabel: input.assignedLabel }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.labelTimestamp != null && { labelTimestamp: input.labelTimestamp }),
  };
};

/**
 * serializeAws_json1_1UpdateListRequest
 */
const se_UpdateListRequest = (input: UpdateListRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.elements != null && { elements: se_ElementsList(input.elements, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.updateMode != null && { updateMode: input.updateMode }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

/**
 * serializeAws_json1_1UpdateModelRequest
 */
const se_UpdateModelRequest = (input: UpdateModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
  };
};

/**
 * serializeAws_json1_1UpdateModelVersionRequest
 */
const se_UpdateModelVersionRequest = (input: UpdateModelVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.externalEventsDetail != null && {
      externalEventsDetail: se_ExternalEventsDetail(input.externalEventsDetail, context),
    }),
    ...(input.ingestedEventsDetail != null && {
      ingestedEventsDetail: se_IngestedEventsDetail(input.ingestedEventsDetail, context),
    }),
    ...(input.majorVersionNumber != null && { majorVersionNumber: input.majorVersionNumber }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateModelVersionStatusRequest
 */
const se_UpdateModelVersionStatusRequest = (input: UpdateModelVersionStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1UpdateRuleMetadataRequest
 */
const se_UpdateRuleMetadataRequest = (input: UpdateRuleMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.rule != null && { rule: se_Rule(input.rule, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRuleVersionRequest
 */
const se_UpdateRuleVersionRequest = (input: UpdateRuleVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.language != null && { language: input.language }),
    ...(input.outcomes != null && { outcomes: se_NonEmptyListOfStrings(input.outcomes, context) }),
    ...(input.rule != null && { rule: se_Rule(input.rule, context) }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateVariableRequest
 */
const se_UpdateVariableRequest = (input: UpdateVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

/**
 * serializeAws_json1_1VariableEntry
 */
const se_VariableEntry = (input: VariableEntry, context: __SerdeContext): any => {
  return {
    ...(input.dataSource != null && { dataSource: input.dataSource }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

/**
 * serializeAws_json1_1VariableEntryList
 */
const se_VariableEntryList = (input: VariableEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VariableEntry(entry, context);
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AggregatedLogOddsMetric
 */
const de_AggregatedLogOddsMetric = (output: any, context: __SerdeContext): AggregatedLogOddsMetric => {
  return {
    aggregatedVariablesImportance: __limitedParseFloat32(output.aggregatedVariablesImportance),
    variableNames: output.variableNames != null ? de_ListOfStrings(output.variableNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AggregatedVariablesImpactExplanation
 */
const de_AggregatedVariablesImpactExplanation = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation => {
  return {
    eventVariableNames:
      output.eventVariableNames != null ? de_ListOfStrings(output.eventVariableNames, context) : undefined,
    logOddsImpact: __limitedParseFloat32(output.logOddsImpact),
    relativeImpact: __expectString(output.relativeImpact),
  } as any;
};

/**
 * deserializeAws_json1_1AggregatedVariablesImportanceMetrics
 */
const de_AggregatedVariablesImportanceMetrics = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImportanceMetrics => {
  return {
    logOddsMetrics:
      output.logOddsMetrics != null ? de_ListOfAggregatedLogOddsMetrics(output.logOddsMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AllowDenyList
 */
const de_AllowDenyList = (output: any, context: __SerdeContext): AllowDenyList => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    name: __expectString(output.name),
    updatedTime: __expectString(output.updatedTime),
    variableType: __expectString(output.variableType),
  } as any;
};

/**
 * deserializeAws_json1_1AllowDenyLists
 */
const de_AllowDenyLists = (output: any, context: __SerdeContext): AllowDenyList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AllowDenyList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ATIMetricDataPoint
 */
const de_ATIMetricDataPoint = (output: any, context: __SerdeContext): ATIMetricDataPoint => {
  return {
    adr: __limitedParseFloat32(output.adr),
    atodr: __limitedParseFloat32(output.atodr),
    cr: __limitedParseFloat32(output.cr),
    threshold: __limitedParseFloat32(output.threshold),
  } as any;
};

/**
 * deserializeAws_json1_1ATIMetricDataPointsList
 */
const de_ATIMetricDataPointsList = (output: any, context: __SerdeContext): ATIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ATIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ATIModelPerformance
 */
const de_ATIModelPerformance = (output: any, context: __SerdeContext): ATIModelPerformance => {
  return {
    asi: __limitedParseFloat32(output.asi),
  } as any;
};

/**
 * deserializeAws_json1_1ATITrainingMetricsValue
 */
const de_ATITrainingMetricsValue = (output: any, context: __SerdeContext): ATITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null ? de_ATIMetricDataPointsList(output.metricDataPoints, context) : undefined,
    modelPerformance:
      output.modelPerformance != null ? de_ATIModelPerformance(output.modelPerformance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchCreateVariableError
 */
const de_BatchCreateVariableError = (output: any, context: __SerdeContext): BatchCreateVariableError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1BatchCreateVariableErrorList
 */
const de_BatchCreateVariableErrorList = (output: any, context: __SerdeContext): BatchCreateVariableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchCreateVariableError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchCreateVariableResult
 */
const de_BatchCreateVariableResult = (output: any, context: __SerdeContext): BatchCreateVariableResult => {
  return {
    errors: output.errors != null ? de_BatchCreateVariableErrorList(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetVariableError
 */
const de_BatchGetVariableError = (output: any, context: __SerdeContext): BatchGetVariableError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetVariableErrorList
 */
const de_BatchGetVariableErrorList = (output: any, context: __SerdeContext): BatchGetVariableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetVariableError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchGetVariableResult
 */
const de_BatchGetVariableResult = (output: any, context: __SerdeContext): BatchGetVariableResult => {
  return {
    errors: output.errors != null ? de_BatchGetVariableErrorList(output.errors, context) : undefined,
    variables: output.variables != null ? de_VariableList(output.variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchImport
 */
const de_BatchImport = (output: any, context: __SerdeContext): BatchImport => {
  return {
    arn: __expectString(output.arn),
    completionTime: __expectString(output.completionTime),
    eventTypeName: __expectString(output.eventTypeName),
    failedRecordsCount: __expectInt32(output.failedRecordsCount),
    failureReason: __expectString(output.failureReason),
    iamRoleArn: __expectString(output.iamRoleArn),
    inputPath: __expectString(output.inputPath),
    jobId: __expectString(output.jobId),
    outputPath: __expectString(output.outputPath),
    processedRecordsCount: __expectInt32(output.processedRecordsCount),
    startTime: __expectString(output.startTime),
    status: __expectString(output.status),
    totalRecordsCount: __expectInt32(output.totalRecordsCount),
  } as any;
};

/**
 * deserializeAws_json1_1BatchImportList
 */
const de_BatchImportList = (output: any, context: __SerdeContext): BatchImport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchImport(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchPrediction
 */
const de_BatchPrediction = (output: any, context: __SerdeContext): BatchPrediction => {
  return {
    arn: __expectString(output.arn),
    completionTime: __expectString(output.completionTime),
    detectorName: __expectString(output.detectorName),
    detectorVersion: __expectString(output.detectorVersion),
    eventTypeName: __expectString(output.eventTypeName),
    failureReason: __expectString(output.failureReason),
    iamRoleArn: __expectString(output.iamRoleArn),
    inputPath: __expectString(output.inputPath),
    jobId: __expectString(output.jobId),
    lastHeartbeatTime: __expectString(output.lastHeartbeatTime),
    outputPath: __expectString(output.outputPath),
    processedRecordsCount: __expectInt32(output.processedRecordsCount),
    startTime: __expectString(output.startTime),
    status: __expectString(output.status),
    totalRecordsCount: __expectInt32(output.totalRecordsCount),
  } as any;
};

/**
 * deserializeAws_json1_1BatchPredictionList
 */
const de_BatchPredictionList = (output: any, context: __SerdeContext): BatchPrediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPrediction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelBatchImportJobResult
 */
const de_CancelBatchImportJobResult = (output: any, context: __SerdeContext): CancelBatchImportJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CancelBatchPredictionJobResult
 */
const de_CancelBatchPredictionJobResult = (output: any, context: __SerdeContext): CancelBatchPredictionJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateBatchImportJobResult
 */
const de_CreateBatchImportJobResult = (output: any, context: __SerdeContext): CreateBatchImportJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateBatchPredictionJobResult
 */
const de_CreateBatchPredictionJobResult = (output: any, context: __SerdeContext): CreateBatchPredictionJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateDetectorVersionResult
 */
const de_CreateDetectorVersionResult = (output: any, context: __SerdeContext): CreateDetectorVersionResult => {
  return {
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CreateListResult
 */
const de_CreateListResult = (output: any, context: __SerdeContext): CreateListResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateModelResult
 */
const de_CreateModelResult = (output: any, context: __SerdeContext): CreateModelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateModelVersionResult
 */
const de_CreateModelVersionResult = (output: any, context: __SerdeContext): CreateModelVersionResult => {
  return {
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRuleResult
 */
const de_CreateRuleResult = (output: any, context: __SerdeContext): CreateRuleResult => {
  return {
    rule: output.rule != null ? de_Rule(output.rule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVariableResult
 */
const de_CreateVariableResult = (output: any, context: __SerdeContext): CreateVariableResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CsvIndexToVariableMap
 */
const de_CsvIndexToVariableMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DataValidationMetrics
 */
const de_DataValidationMetrics = (output: any, context: __SerdeContext): DataValidationMetrics => {
  return {
    fieldLevelMessages:
      output.fieldLevelMessages != null ? de_fieldValidationMessageList(output.fieldLevelMessages, context) : undefined,
    fileLevelMessages:
      output.fileLevelMessages != null ? de_fileValidationMessageList(output.fileLevelMessages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBatchImportJobResult
 */
const de_DeleteBatchImportJobResult = (output: any, context: __SerdeContext): DeleteBatchImportJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteBatchPredictionJobResult
 */
const de_DeleteBatchPredictionJobResult = (output: any, context: __SerdeContext): DeleteBatchPredictionJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDetectorResult
 */
const de_DeleteDetectorResult = (output: any, context: __SerdeContext): DeleteDetectorResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDetectorVersionResult
 */
const de_DeleteDetectorVersionResult = (output: any, context: __SerdeContext): DeleteDetectorVersionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEntityTypeResult
 */
const de_DeleteEntityTypeResult = (output: any, context: __SerdeContext): DeleteEntityTypeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEventResult
 */
const de_DeleteEventResult = (output: any, context: __SerdeContext): DeleteEventResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEventsByEventTypeResult
 */
const de_DeleteEventsByEventTypeResult = (output: any, context: __SerdeContext): DeleteEventsByEventTypeResult => {
  return {
    eventTypeName: __expectString(output.eventTypeName),
    eventsDeletionStatus: __expectString(output.eventsDeletionStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEventTypeResult
 */
const de_DeleteEventTypeResult = (output: any, context: __SerdeContext): DeleteEventTypeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteExternalModelResult
 */
const de_DeleteExternalModelResult = (output: any, context: __SerdeContext): DeleteExternalModelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLabelResult
 */
const de_DeleteLabelResult = (output: any, context: __SerdeContext): DeleteLabelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteListResult
 */
const de_DeleteListResult = (output: any, context: __SerdeContext): DeleteListResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteModelResult
 */
const de_DeleteModelResult = (output: any, context: __SerdeContext): DeleteModelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteModelVersionResult
 */
const de_DeleteModelVersionResult = (output: any, context: __SerdeContext): DeleteModelVersionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteOutcomeResult
 */
const de_DeleteOutcomeResult = (output: any, context: __SerdeContext): DeleteOutcomeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRuleResult
 */
const de_DeleteRuleResult = (output: any, context: __SerdeContext): DeleteRuleResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteVariableResult
 */
const de_DeleteVariableResult = (output: any, context: __SerdeContext): DeleteVariableResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeDetectorResult
 */
const de_DescribeDetectorResult = (output: any, context: __SerdeContext): DescribeDetectorResult => {
  return {
    arn: __expectString(output.arn),
    detectorId: __expectString(output.detectorId),
    detectorVersionSummaries:
      output.detectorVersionSummaries != null
        ? de_DetectorVersionSummaryList(output.detectorVersionSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeModelVersionsResult
 */
const de_DescribeModelVersionsResult = (output: any, context: __SerdeContext): DescribeModelVersionsResult => {
  return {
    modelVersionDetails:
      output.modelVersionDetails != null ? de_modelVersionDetailList(output.modelVersionDetails, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1Detector
 */
const de_Detector = (output: any, context: __SerdeContext): Detector => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    eventTypeName: __expectString(output.eventTypeName),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
  } as any;
};

/**
 * deserializeAws_json1_1DetectorList
 */
const de_DetectorList = (output: any, context: __SerdeContext): Detector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Detector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DetectorVersionSummary
 */
const de_DetectorVersionSummary = (output: any, context: __SerdeContext): DetectorVersionSummary => {
  return {
    description: __expectString(output.description),
    detectorVersionId: __expectString(output.detectorVersionId),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DetectorVersionSummaryList
 */
const de_DetectorVersionSummaryList = (output: any, context: __SerdeContext): DetectorVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ElementsList
 */
const de_ElementsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    entityId: __expectString(output.entityId),
    entityType: __expectString(output.entityType),
  } as any;
};

/**
 * deserializeAws_json1_1EntityType
 */
const de_EntityType = (output: any, context: __SerdeContext): EntityType => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1entityTypeList
 */
const de_entityTypeList = (output: any, context: __SerdeContext): EntityType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntityType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluatedExternalModel
 */
const de_EvaluatedExternalModel = (output: any, context: __SerdeContext): EvaluatedExternalModel => {
  return {
    inputVariables: output.inputVariables != null ? de_MapOfStrings(output.inputVariables, context) : undefined,
    modelEndpoint: __expectString(output.modelEndpoint),
    outputVariables: output.outputVariables != null ? de_MapOfStrings(output.outputVariables, context) : undefined,
    useEventVariables: __expectBoolean(output.useEventVariables),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluatedModelVersion
 */
const de_EvaluatedModelVersion = (output: any, context: __SerdeContext): EvaluatedModelVersion => {
  return {
    evaluations: output.evaluations != null ? de_ListOfModelVersionEvaluations(output.evaluations, context) : undefined,
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersion: __expectString(output.modelVersion),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluatedRule
 */
const de_EvaluatedRule = (output: any, context: __SerdeContext): EvaluatedRule => {
  return {
    evaluated: __expectBoolean(output.evaluated),
    expression: __expectString(output.expression),
    expressionWithValues: __expectString(output.expressionWithValues),
    matched: __expectBoolean(output.matched),
    outcomes: output.outcomes != null ? de_ListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluatedRuleList
 */
const de_EvaluatedRuleList = (output: any, context: __SerdeContext): EvaluatedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluatedRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    currentLabel: __expectString(output.currentLabel),
    entities: output.entities != null ? de_listOfEntities(output.entities, context) : undefined,
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    eventVariables: output.eventVariables != null ? de_EventAttributeMap(output.eventVariables, context) : undefined,
    labelTimestamp: __expectString(output.labelTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1EventAttributeMap
 */
const de_EventAttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1EventPredictionSummary
 */
const de_EventPredictionSummary = (output: any, context: __SerdeContext): EventPredictionSummary => {
  return {
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    predictionTimestamp: __expectString(output.predictionTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1EventType
 */
const de_EventType = (output: any, context: __SerdeContext): EventType => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    entityTypes: output.entityTypes != null ? de_NonEmptyListOfStrings(output.entityTypes, context) : undefined,
    eventIngestion: __expectString(output.eventIngestion),
    eventVariables: output.eventVariables != null ? de_ListOfStrings(output.eventVariables, context) : undefined,
    ingestedEventStatistics:
      output.ingestedEventStatistics != null
        ? de_IngestedEventStatistics(output.ingestedEventStatistics, context)
        : undefined,
    labels: output.labels != null ? de_ListOfStrings(output.labels, context) : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1eventTypeList
 */
const de_eventTypeList = (output: any, context: __SerdeContext): EventType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventVariableSummary
 */
const de_EventVariableSummary = (output: any, context: __SerdeContext): EventVariableSummary => {
  return {
    name: __expectString(output.name),
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ExternalEventsDetail
 */
const de_ExternalEventsDetail = (output: any, context: __SerdeContext): ExternalEventsDetail => {
  return {
    dataAccessRoleArn: __expectString(output.dataAccessRoleArn),
    dataLocation: __expectString(output.dataLocation),
  } as any;
};

/**
 * deserializeAws_json1_1ExternalModel
 */
const de_ExternalModel = (output: any, context: __SerdeContext): ExternalModel => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    inputConfiguration:
      output.inputConfiguration != null ? de_ModelInputConfiguration(output.inputConfiguration, context) : undefined,
    invokeModelEndpointRoleArn: __expectString(output.invokeModelEndpointRoleArn),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelEndpoint: __expectString(output.modelEndpoint),
    modelEndpointStatus: __expectString(output.modelEndpointStatus),
    modelSource: __expectString(output.modelSource),
    outputConfiguration:
      output.outputConfiguration != null ? de_ModelOutputConfiguration(output.outputConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExternalModelList
 */
const de_ExternalModelList = (output: any, context: __SerdeContext): ExternalModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExternalModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExternalModelOutputs
 */
const de_ExternalModelOutputs = (output: any, context: __SerdeContext): ExternalModelOutputs => {
  return {
    externalModel: output.externalModel != null ? de_ExternalModelSummary(output.externalModel, context) : undefined,
    outputs: output.outputs != null ? de_ExternalModelPredictionMap(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExternalModelPredictionMap
 */
const de_ExternalModelPredictionMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ExternalModelSummary
 */
const de_ExternalModelSummary = (output: any, context: __SerdeContext): ExternalModelSummary => {
  return {
    modelEndpoint: __expectString(output.modelEndpoint),
    modelSource: __expectString(output.modelSource),
  } as any;
};

/**
 * deserializeAws_json1_1FieldValidationMessage
 */
const de_FieldValidationMessage = (output: any, context: __SerdeContext): FieldValidationMessage => {
  return {
    content: __expectString(output.content),
    fieldName: __expectString(output.fieldName),
    identifier: __expectString(output.identifier),
    title: __expectString(output.title),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1fieldValidationMessageList
 */
const de_fieldValidationMessageList = (output: any, context: __SerdeContext): FieldValidationMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldValidationMessage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileValidationMessage
 */
const de_FileValidationMessage = (output: any, context: __SerdeContext): FileValidationMessage => {
  return {
    content: __expectString(output.content),
    title: __expectString(output.title),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1fileValidationMessageList
 */
const de_fileValidationMessageList = (output: any, context: __SerdeContext): FileValidationMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileValidationMessage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetBatchImportJobsResult
 */
const de_GetBatchImportJobsResult = (output: any, context: __SerdeContext): GetBatchImportJobsResult => {
  return {
    batchImports: output.batchImports != null ? de_BatchImportList(output.batchImports, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetBatchPredictionJobsResult
 */
const de_GetBatchPredictionJobsResult = (output: any, context: __SerdeContext): GetBatchPredictionJobsResult => {
  return {
    batchPredictions:
      output.batchPredictions != null ? de_BatchPredictionList(output.batchPredictions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetDeleteEventsByEventTypeStatusResult
 */
const de_GetDeleteEventsByEventTypeStatusResult = (
  output: any,
  context: __SerdeContext
): GetDeleteEventsByEventTypeStatusResult => {
  return {
    eventTypeName: __expectString(output.eventTypeName),
    eventsDeletionStatus: __expectString(output.eventsDeletionStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetDetectorsResult
 */
const de_GetDetectorsResult = (output: any, context: __SerdeContext): GetDetectorsResult => {
  return {
    detectors: output.detectors != null ? de_DetectorList(output.detectors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetDetectorVersionResult
 */
const de_GetDetectorVersionResult = (output: any, context: __SerdeContext): GetDetectorVersionResult => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    externalModelEndpoints:
      output.externalModelEndpoints != null ? de_ListOfStrings(output.externalModelEndpoints, context) : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelVersions: output.modelVersions != null ? de_ListOfModelVersions(output.modelVersions, context) : undefined,
    ruleExecutionMode: __expectString(output.ruleExecutionMode),
    rules: output.rules != null ? de_RuleList(output.rules, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1GetEntityTypesResult
 */
const de_GetEntityTypesResult = (output: any, context: __SerdeContext): GetEntityTypesResult => {
  return {
    entityTypes: output.entityTypes != null ? de_entityTypeList(output.entityTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetEventPredictionMetadataResult
 */
const de_GetEventPredictionMetadataResult = (
  output: any,
  context: __SerdeContext
): GetEventPredictionMetadataResult => {
  return {
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    detectorVersionStatus: __expectString(output.detectorVersionStatus),
    entityId: __expectString(output.entityId),
    entityType: __expectString(output.entityType),
    evaluatedExternalModels:
      output.evaluatedExternalModels != null
        ? de_ListOfEvaluatedExternalModels(output.evaluatedExternalModels, context)
        : undefined,
    evaluatedModelVersions:
      output.evaluatedModelVersions != null
        ? de_ListOfEvaluatedModelVersions(output.evaluatedModelVersions, context)
        : undefined,
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    eventVariables:
      output.eventVariables != null ? de_ListOfEventVariableSummaries(output.eventVariables, context) : undefined,
    outcomes: output.outcomes != null ? de_ListOfStrings(output.outcomes, context) : undefined,
    predictionTimestamp: __expectString(output.predictionTimestamp),
    ruleExecutionMode: __expectString(output.ruleExecutionMode),
    rules: output.rules != null ? de_EvaluatedRuleList(output.rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEventPredictionResult
 */
const de_GetEventPredictionResult = (output: any, context: __SerdeContext): GetEventPredictionResult => {
  return {
    externalModelOutputs:
      output.externalModelOutputs != null
        ? de_ListOfExternalModelOutputs(output.externalModelOutputs, context)
        : undefined,
    modelScores: output.modelScores != null ? de_ListOfModelScores(output.modelScores, context) : undefined,
    ruleResults: output.ruleResults != null ? de_ListOfRuleResults(output.ruleResults, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEventResult
 */
const de_GetEventResult = (output: any, context: __SerdeContext): GetEventResult => {
  return {
    event: output.event != null ? de_Event(output.event, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEventTypesResult
 */
const de_GetEventTypesResult = (output: any, context: __SerdeContext): GetEventTypesResult => {
  return {
    eventTypes: output.eventTypes != null ? de_eventTypeList(output.eventTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetExternalModelsResult
 */
const de_GetExternalModelsResult = (output: any, context: __SerdeContext): GetExternalModelsResult => {
  return {
    externalModels: output.externalModels != null ? de_ExternalModelList(output.externalModels, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetKMSEncryptionKeyResult
 */
const de_GetKMSEncryptionKeyResult = (output: any, context: __SerdeContext): GetKMSEncryptionKeyResult => {
  return {
    kmsKey: output.kmsKey != null ? de_KMSKey(output.kmsKey, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLabelsResult
 */
const de_GetLabelsResult = (output: any, context: __SerdeContext): GetLabelsResult => {
  return {
    labels: output.labels != null ? de_labelList(output.labels, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetListElementsResult
 */
const de_GetListElementsResult = (output: any, context: __SerdeContext): GetListElementsResult => {
  return {
    elements: output.elements != null ? de_ElementsList(output.elements, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetListsMetadataResult
 */
const de_GetListsMetadataResult = (output: any, context: __SerdeContext): GetListsMetadataResult => {
  return {
    lists: output.lists != null ? de_AllowDenyLists(output.lists, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetModelsResult
 */
const de_GetModelsResult = (output: any, context: __SerdeContext): GetModelsResult => {
  return {
    models: output.models != null ? de_modelList(output.models, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetModelVersionResult
 */
const de_GetModelVersionResult = (output: any, context: __SerdeContext): GetModelVersionResult => {
  return {
    arn: __expectString(output.arn),
    externalEventsDetail:
      output.externalEventsDetail != null ? de_ExternalEventsDetail(output.externalEventsDetail, context) : undefined,
    ingestedEventsDetail:
      output.ingestedEventsDetail != null ? de_IngestedEventsDetail(output.ingestedEventsDetail, context) : undefined,
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
    trainingDataSchema:
      output.trainingDataSchema != null ? de_TrainingDataSchema(output.trainingDataSchema, context) : undefined,
    trainingDataSource: __expectString(output.trainingDataSource),
  } as any;
};

/**
 * deserializeAws_json1_1GetOutcomesResult
 */
const de_GetOutcomesResult = (output: any, context: __SerdeContext): GetOutcomesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    outcomes: output.outcomes != null ? de_OutcomeList(output.outcomes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRulesResult
 */
const de_GetRulesResult = (output: any, context: __SerdeContext): GetRulesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    ruleDetails: output.ruleDetails != null ? de_RuleDetailList(output.ruleDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetVariablesResult
 */
const de_GetVariablesResult = (output: any, context: __SerdeContext): GetVariablesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    variables: output.variables != null ? de_VariableList(output.variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IngestedEventsDetail
 */
const de_IngestedEventsDetail = (output: any, context: __SerdeContext): IngestedEventsDetail => {
  return {
    ingestedEventsTimeWindow:
      output.ingestedEventsTimeWindow != null
        ? de_IngestedEventsTimeWindow(output.ingestedEventsTimeWindow, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IngestedEventStatistics
 */
const de_IngestedEventStatistics = (output: any, context: __SerdeContext): IngestedEventStatistics => {
  return {
    eventDataSizeInBytes: __expectLong(output.eventDataSizeInBytes),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    leastRecentEvent: __expectString(output.leastRecentEvent),
    mostRecentEvent: __expectString(output.mostRecentEvent),
    numberOfEvents: __expectLong(output.numberOfEvents),
  } as any;
};

/**
 * deserializeAws_json1_1IngestedEventsTimeWindow
 */
const de_IngestedEventsTimeWindow = (output: any, context: __SerdeContext): IngestedEventsTimeWindow => {
  return {
    endTime: __expectString(output.endTime),
    startTime: __expectString(output.startTime),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1JsonKeyToVariableMap
 */
const de_JsonKeyToVariableMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1KMSKey
 */
const de_KMSKey = (output: any, context: __SerdeContext): KMSKey => {
  return {
    kmsEncryptionKeyArn: __expectString(output.kmsEncryptionKeyArn),
  } as any;
};

/**
 * deserializeAws_json1_1Label
 */
const de_Label = (output: any, context: __SerdeContext): Label => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1labelList
 */
const de_labelList = (output: any, context: __SerdeContext): Label[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Label(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1labelMapper
 */
const de_labelMapper = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ListOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1LabelSchema
 */
const de_LabelSchema = (output: any, context: __SerdeContext): LabelSchema => {
  return {
    labelMapper: output.labelMapper != null ? de_labelMapper(output.labelMapper, context) : undefined,
    unlabeledEventsTreatment: __expectString(output.unlabeledEventsTreatment),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventPredictionsResult
 */
const de_ListEventPredictionsResult = (output: any, context: __SerdeContext): ListEventPredictionsResult => {
  return {
    eventPredictionSummaries:
      output.eventPredictionSummaries != null
        ? de_ListOfEventPredictionSummaries(output.eventPredictionSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOfAggregatedLogOddsMetrics
 */
const de_ListOfAggregatedLogOddsMetrics = (output: any, context: __SerdeContext): AggregatedLogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregatedLogOddsMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfAggregatedVariablesImpactExplanations
 */
const de_ListOfAggregatedVariablesImpactExplanations = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregatedVariablesImpactExplanation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1listOfEntities
 */
const de_listOfEntities = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEvaluatedExternalModels
 */
const de_ListOfEvaluatedExternalModels = (output: any, context: __SerdeContext): EvaluatedExternalModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluatedExternalModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEvaluatedModelVersions
 */
const de_ListOfEvaluatedModelVersions = (output: any, context: __SerdeContext): EvaluatedModelVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluatedModelVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEventPredictionSummaries
 */
const de_ListOfEventPredictionSummaries = (output: any, context: __SerdeContext): EventPredictionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventPredictionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEventVariableSummaries
 */
const de_ListOfEventVariableSummaries = (output: any, context: __SerdeContext): EventVariableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventVariableSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfExternalModelOutputs
 */
const de_ListOfExternalModelOutputs = (output: any, context: __SerdeContext): ExternalModelOutputs[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExternalModelOutputs(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfLogOddsMetrics
 */
const de_ListOfLogOddsMetrics = (output: any, context: __SerdeContext): LogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogOddsMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfModelScores
 */
const de_ListOfModelScores = (output: any, context: __SerdeContext): ModelScores[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelScores(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfModelVersionEvaluations
 */
const de_ListOfModelVersionEvaluations = (output: any, context: __SerdeContext): ModelVersionEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelVersionEvaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfModelVersions
 */
const de_ListOfModelVersions = (output: any, context: __SerdeContext): ModelVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfRuleResults
 */
const de_ListOfRuleResults = (output: any, context: __SerdeContext): RuleResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfStrings
 */
const de_ListOfStrings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1listOfVariableImpactExplanations
 */
const de_listOfVariableImpactExplanations = (output: any, context: __SerdeContext): VariableImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VariableImpactExplanation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResult
 */
const de_ListTagsForResourceResult = (output: any, context: __SerdeContext): ListTagsForResourceResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_tagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogOddsMetric
 */
const de_LogOddsMetric = (output: any, context: __SerdeContext): LogOddsMetric => {
  return {
    variableImportance: __limitedParseFloat32(output.variableImportance),
    variableName: __expectString(output.variableName),
    variableType: __expectString(output.variableType),
  } as any;
};

/**
 * deserializeAws_json1_1MapOfStrings
 */
const de_MapOfStrings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MetricDataPoint
 */
const de_MetricDataPoint = (output: any, context: __SerdeContext): MetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

/**
 * deserializeAws_json1_1metricDataPointsList
 */
const de_metricDataPointsList = (output: any, context: __SerdeContext): MetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Model
 */
const de_Model = (output: any, context: __SerdeContext): Model => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    eventTypeName: __expectString(output.eventTypeName),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
  } as any;
};

/**
 * deserializeAws_json1_1ModelInputConfiguration
 */
const de_ModelInputConfiguration = (output: any, context: __SerdeContext): ModelInputConfiguration => {
  return {
    csvInputTemplate: __expectString(output.csvInputTemplate),
    eventTypeName: __expectString(output.eventTypeName),
    format: __expectString(output.format),
    jsonInputTemplate: __expectString(output.jsonInputTemplate),
    useEventVariables: __expectBoolean(output.useEventVariables),
  } as any;
};

/**
 * deserializeAws_json1_1modelList
 */
const de_modelList = (output: any, context: __SerdeContext): Model[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Model(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelOutputConfiguration
 */
const de_ModelOutputConfiguration = (output: any, context: __SerdeContext): ModelOutputConfiguration => {
  return {
    csvIndexToVariableMap:
      output.csvIndexToVariableMap != null
        ? de_CsvIndexToVariableMap(output.csvIndexToVariableMap, context)
        : undefined,
    format: __expectString(output.format),
    jsonKeyToVariableMap:
      output.jsonKeyToVariableMap != null ? de_JsonKeyToVariableMap(output.jsonKeyToVariableMap, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModelPredictionMap
 */
const de_ModelPredictionMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ModelScores
 */
const de_ModelScores = (output: any, context: __SerdeContext): ModelScores => {
  return {
    modelVersion: output.modelVersion != null ? de_ModelVersion(output.modelVersion, context) : undefined,
    scores: output.scores != null ? de_ModelPredictionMap(output.scores, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModelVersion
 */
const de_ModelVersion = (output: any, context: __SerdeContext): ModelVersion => {
  return {
    arn: __expectString(output.arn),
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
  } as any;
};

/**
 * deserializeAws_json1_1ModelVersionDetail
 */
const de_ModelVersionDetail = (output: any, context: __SerdeContext): ModelVersionDetail => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    externalEventsDetail:
      output.externalEventsDetail != null ? de_ExternalEventsDetail(output.externalEventsDetail, context) : undefined,
    ingestedEventsDetail:
      output.ingestedEventsDetail != null ? de_IngestedEventsDetail(output.ingestedEventsDetail, context) : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
    trainingDataSchema:
      output.trainingDataSchema != null ? de_TrainingDataSchema(output.trainingDataSchema, context) : undefined,
    trainingDataSource: __expectString(output.trainingDataSource),
    trainingResult: output.trainingResult != null ? de_TrainingResult(output.trainingResult, context) : undefined,
    trainingResultV2:
      output.trainingResultV2 != null ? de_TrainingResultV2(output.trainingResultV2, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1modelVersionDetailList
 */
const de_modelVersionDetailList = (output: any, context: __SerdeContext): ModelVersionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelVersionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelVersionEvaluation
 */
const de_ModelVersionEvaluation = (output: any, context: __SerdeContext): ModelVersionEvaluation => {
  return {
    evaluationScore: __expectString(output.evaluationScore),
    outputVariableName: __expectString(output.outputVariableName),
    predictionExplanations:
      output.predictionExplanations != null
        ? de_PredictionExplanations(output.predictionExplanations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NonEmptyListOfStrings
 */
const de_NonEmptyListOfStrings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1OFIMetricDataPoint
 */
const de_OFIMetricDataPoint = (output: any, context: __SerdeContext): OFIMetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

/**
 * deserializeAws_json1_1OFIMetricDataPointsList
 */
const de_OFIMetricDataPointsList = (output: any, context: __SerdeContext): OFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OFIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OFIModelPerformance
 */
const de_OFIModelPerformance = (output: any, context: __SerdeContext): OFIModelPerformance => {
  return {
    auc: __limitedParseFloat32(output.auc),
    uncertaintyRange:
      output.uncertaintyRange != null ? de_UncertaintyRange(output.uncertaintyRange, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OFITrainingMetricsValue
 */
const de_OFITrainingMetricsValue = (output: any, context: __SerdeContext): OFITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null ? de_OFIMetricDataPointsList(output.metricDataPoints, context) : undefined,
    modelPerformance:
      output.modelPerformance != null ? de_OFIModelPerformance(output.modelPerformance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Outcome
 */
const de_Outcome = (output: any, context: __SerdeContext): Outcome => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1OutcomeList
 */
const de_OutcomeList = (output: any, context: __SerdeContext): Outcome[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Outcome(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictionExplanations
 */
const de_PredictionExplanations = (output: any, context: __SerdeContext): PredictionExplanations => {
  return {
    aggregatedVariablesImpactExplanations:
      output.aggregatedVariablesImpactExplanations != null
        ? de_ListOfAggregatedVariablesImpactExplanations(output.aggregatedVariablesImpactExplanations, context)
        : undefined,
    variableImpactExplanations:
      output.variableImpactExplanations != null
        ? de_listOfVariableImpactExplanations(output.variableImpactExplanations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutDetectorResult
 */
const de_PutDetectorResult = (output: any, context: __SerdeContext): PutDetectorResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutEntityTypeResult
 */
const de_PutEntityTypeResult = (output: any, context: __SerdeContext): PutEntityTypeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutEventTypeResult
 */
const de_PutEventTypeResult = (output: any, context: __SerdeContext): PutEventTypeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutExternalModelResult
 */
const de_PutExternalModelResult = (output: any, context: __SerdeContext): PutExternalModelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutKMSEncryptionKeyResult
 */
const de_PutKMSEncryptionKeyResult = (output: any, context: __SerdeContext): PutKMSEncryptionKeyResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutLabelResult
 */
const de_PutLabelResult = (output: any, context: __SerdeContext): PutLabelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutOutcomeResult
 */
const de_PutOutcomeResult = (output: any, context: __SerdeContext): PutOutcomeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    detectorId: __expectString(output.detectorId),
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

/**
 * deserializeAws_json1_1RuleDetail
 */
const de_RuleDetail = (output: any, context: __SerdeContext): RuleDetail => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    expression: __expectString(output.expression),
    language: __expectString(output.language),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    outcomes: output.outcomes != null ? de_NonEmptyListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

/**
 * deserializeAws_json1_1RuleDetailList
 */
const de_RuleDetailList = (output: any, context: __SerdeContext): RuleDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleList
 */
const de_RuleList = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Rule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleResult
 */
const de_RuleResult = (output: any, context: __SerdeContext): RuleResult => {
  return {
    outcomes: output.outcomes != null ? de_ListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
  } as any;
};

/**
 * deserializeAws_json1_1SendEventResult
 */
const de_SendEventResult = (output: any, context: __SerdeContext): SendEventResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1tagList
 */
const de_tagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResult
 */
const de_TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TFIMetricDataPoint
 */
const de_TFIMetricDataPoint = (output: any, context: __SerdeContext): TFIMetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

/**
 * deserializeAws_json1_1TFIMetricDataPointsList
 */
const de_TFIMetricDataPointsList = (output: any, context: __SerdeContext): TFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TFIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TFIModelPerformance
 */
const de_TFIModelPerformance = (output: any, context: __SerdeContext): TFIModelPerformance => {
  return {
    auc: __limitedParseFloat32(output.auc),
    uncertaintyRange:
      output.uncertaintyRange != null ? de_UncertaintyRange(output.uncertaintyRange, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TFITrainingMetricsValue
 */
const de_TFITrainingMetricsValue = (output: any, context: __SerdeContext): TFITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null ? de_TFIMetricDataPointsList(output.metricDataPoints, context) : undefined,
    modelPerformance:
      output.modelPerformance != null ? de_TFIModelPerformance(output.modelPerformance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TrainingDataSchema
 */
const de_TrainingDataSchema = (output: any, context: __SerdeContext): TrainingDataSchema => {
  return {
    labelSchema: output.labelSchema != null ? de_LabelSchema(output.labelSchema, context) : undefined,
    modelVariables: output.modelVariables != null ? de_ListOfStrings(output.modelVariables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrainingMetrics
 */
const de_TrainingMetrics = (output: any, context: __SerdeContext): TrainingMetrics => {
  return {
    auc: __limitedParseFloat32(output.auc),
    metricDataPoints:
      output.metricDataPoints != null ? de_metricDataPointsList(output.metricDataPoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrainingMetricsV2
 */
const de_TrainingMetricsV2 = (output: any, context: __SerdeContext): TrainingMetricsV2 => {
  return {
    ati: output.ati != null ? de_ATITrainingMetricsValue(output.ati, context) : undefined,
    ofi: output.ofi != null ? de_OFITrainingMetricsValue(output.ofi, context) : undefined,
    tfi: output.tfi != null ? de_TFITrainingMetricsValue(output.tfi, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrainingResult
 */
const de_TrainingResult = (output: any, context: __SerdeContext): TrainingResult => {
  return {
    dataValidationMetrics:
      output.dataValidationMetrics != null
        ? de_DataValidationMetrics(output.dataValidationMetrics, context)
        : undefined,
    trainingMetrics: output.trainingMetrics != null ? de_TrainingMetrics(output.trainingMetrics, context) : undefined,
    variableImportanceMetrics:
      output.variableImportanceMetrics != null
        ? de_VariableImportanceMetrics(output.variableImportanceMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrainingResultV2
 */
const de_TrainingResultV2 = (output: any, context: __SerdeContext): TrainingResultV2 => {
  return {
    aggregatedVariablesImportanceMetrics:
      output.aggregatedVariablesImportanceMetrics != null
        ? de_AggregatedVariablesImportanceMetrics(output.aggregatedVariablesImportanceMetrics, context)
        : undefined,
    dataValidationMetrics:
      output.dataValidationMetrics != null
        ? de_DataValidationMetrics(output.dataValidationMetrics, context)
        : undefined,
    trainingMetricsV2:
      output.trainingMetricsV2 != null ? de_TrainingMetricsV2(output.trainingMetricsV2, context) : undefined,
    variableImportanceMetrics:
      output.variableImportanceMetrics != null
        ? de_VariableImportanceMetrics(output.variableImportanceMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UncertaintyRange
 */
const de_UncertaintyRange = (output: any, context: __SerdeContext): UncertaintyRange => {
  return {
    lowerBoundValue: __limitedParseFloat32(output.lowerBoundValue),
    upperBoundValue: __limitedParseFloat32(output.upperBoundValue),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResult
 */
const de_UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionMetadataResult
 */
const de_UpdateDetectorVersionMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionMetadataResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionResult
 */
const de_UpdateDetectorVersionResult = (output: any, context: __SerdeContext): UpdateDetectorVersionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionStatusResult
 */
const de_UpdateDetectorVersionStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionStatusResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateEventLabelResult
 */
const de_UpdateEventLabelResult = (output: any, context: __SerdeContext): UpdateEventLabelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateListResult
 */
const de_UpdateListResult = (output: any, context: __SerdeContext): UpdateListResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateModelResult
 */
const de_UpdateModelResult = (output: any, context: __SerdeContext): UpdateModelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateModelVersionResult
 */
const de_UpdateModelVersionResult = (output: any, context: __SerdeContext): UpdateModelVersionResult => {
  return {
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateModelVersionStatusResult
 */
const de_UpdateModelVersionStatusResult = (output: any, context: __SerdeContext): UpdateModelVersionStatusResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateRuleMetadataResult
 */
const de_UpdateRuleMetadataResult = (output: any, context: __SerdeContext): UpdateRuleMetadataResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateRuleVersionResult
 */
const de_UpdateRuleVersionResult = (output: any, context: __SerdeContext): UpdateRuleVersionResult => {
  return {
    rule: output.rule != null ? de_Rule(output.rule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVariableResult
 */
const de_UpdateVariableResult = (output: any, context: __SerdeContext): UpdateVariableResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Variable
 */
const de_Variable = (output: any, context: __SerdeContext): Variable => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    dataSource: __expectString(output.dataSource),
    dataType: __expectString(output.dataType),
    defaultValue: __expectString(output.defaultValue),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
    variableType: __expectString(output.variableType),
  } as any;
};

/**
 * deserializeAws_json1_1VariableImpactExplanation
 */
const de_VariableImpactExplanation = (output: any, context: __SerdeContext): VariableImpactExplanation => {
  return {
    eventVariableName: __expectString(output.eventVariableName),
    logOddsImpact: __limitedParseFloat32(output.logOddsImpact),
    relativeImpact: __expectString(output.relativeImpact),
  } as any;
};

/**
 * deserializeAws_json1_1VariableImportanceMetrics
 */
const de_VariableImportanceMetrics = (output: any, context: __SerdeContext): VariableImportanceMetrics => {
  return {
    logOddsMetrics: output.logOddsMetrics != null ? de_ListOfLogOddsMetrics(output.logOddsMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VariableList
 */
const de_VariableList = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Variable(entry, context);
    });
  return retVal;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSHawksNestServiceFacade.${operation}`,
  };
}

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
