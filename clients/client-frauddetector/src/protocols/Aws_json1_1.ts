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

export const serializeAws_json1_1BatchCreateVariableCommand = async (
  input: BatchCreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.BatchCreateVariable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchCreateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetVariableCommand = async (
  input: BatchGetVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.BatchGetVariable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelBatchImportJobCommand = async (
  input: CancelBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CancelBatchImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelBatchPredictionJobCommand = async (
  input: CancelBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CancelBatchPredictionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBatchImportJobCommand = async (
  input: CreateBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateBatchImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBatchPredictionJobCommand = async (
  input: CreateBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateBatchPredictionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDetectorVersionCommand = async (
  input: CreateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateDetectorVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateModelVersionCommand = async (
  input: CreateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateModelVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVariableCommand = async (
  input: CreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.CreateVariable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBatchImportJobCommand = async (
  input: DeleteBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteBatchImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBatchImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBatchPredictionJobCommand = async (
  input: DeleteBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteBatchPredictionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBatchPredictionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteDetector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDetectorVersionCommand = async (
  input: DeleteDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteDetectorVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEntityTypeCommand = async (
  input: DeleteEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventCommand = async (
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteEvent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventsByEventTypeCommand = async (
  input: DeleteEventsByEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteEventsByEventType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventsByEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventTypeCommand = async (
  input: DeleteEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteEventType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteExternalModelCommand = async (
  input: DeleteExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteExternalModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteExternalModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLabelCommand = async (
  input: DeleteLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteModelVersionCommand = async (
  input: DeleteModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteModelVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOutcomeCommand = async (
  input: DeleteOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteOutcome",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVariableCommand = async (
  input: DeleteVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DeleteVariable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DescribeDetector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeModelVersionsCommand = async (
  input: DescribeModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.DescribeModelVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeModelVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBatchImportJobsCommand = async (
  input: GetBatchImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetBatchImportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBatchImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBatchPredictionJobsCommand = async (
  input: GetBatchPredictionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetBatchPredictionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBatchPredictionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand = async (
  input: GetDeleteEventsByEventTypeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeleteEventsByEventTypeStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDetectorsCommand = async (
  input: GetDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetDetectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDetectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDetectorVersionCommand = async (
  input: GetDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetDetectorVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEntityTypesCommand = async (
  input: GetEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetEntityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventCommand = async (
  input: GetEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetEvent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventPredictionCommand = async (
  input: GetEventPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetEventPrediction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventPredictionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventPredictionMetadataCommand = async (
  input: GetEventPredictionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetEventPredictionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventPredictionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEventTypesCommand = async (
  input: GetEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetEventTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEventTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetExternalModelsCommand = async (
  input: GetExternalModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetExternalModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetExternalModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKMSEncryptionKeyCommand = async (
  input: GetKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetKMSEncryptionKey",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLabelsCommand = async (
  input: GetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetModelVersionCommand = async (
  input: GetModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetModelVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOutcomesCommand = async (
  input: GetOutcomesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetOutcomes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOutcomesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRulesCommand = async (
  input: GetRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVariablesCommand = async (
  input: GetVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.GetVariables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVariablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventPredictionsCommand = async (
  input: ListEventPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.ListEventPredictions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventPredictionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDetectorCommand = async (
  input: PutDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutDetector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEntityTypeCommand = async (
  input: PutEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEventTypeCommand = async (
  input: PutEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutEventType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEventTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutExternalModelCommand = async (
  input: PutExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutExternalModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutExternalModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutKMSEncryptionKeyCommand = async (
  input: PutKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutKMSEncryptionKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutKMSEncryptionKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLabelCommand = async (
  input: PutLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutOutcomeCommand = async (
  input: PutOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.PutOutcome",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.SendEvent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionCommand = async (
  input: UpdateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (
  input: UpdateDetectorVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionStatusCommand = async (
  input: UpdateDetectorVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateDetectorVersionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDetectorVersionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEventLabelCommand = async (
  input: UpdateEventLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateEventLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEventLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateModelCommand = async (
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateModelVersionCommand = async (
  input: UpdateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateModelVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateModelVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateModelVersionStatusCommand = async (
  input: UpdateModelVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateModelVersionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateModelVersionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleMetadataCommand = async (
  input: UpdateRuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateRuleMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuleMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleVersionCommand = async (
  input: UpdateRuleVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateRuleVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuleVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVariableCommand = async (
  input: UpdateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHawksNestServiceFacade.UpdateVariable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVariableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchCreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchCreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCreateVariableResult(data, context);
  const response: BatchCreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchCreateVariableCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetVariableResult(data, context);
  const response: BatchGetVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetVariableCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelBatchImportJobResult(data, context);
  const response: CancelBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelBatchImportJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelBatchPredictionJobResult(data, context);
  const response: CancelBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelBatchPredictionJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchImportJobResult(data, context);
  const response: CreateBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchImportJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchPredictionJobResult(data, context);
  const response: CreateBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchPredictionJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDetectorVersionResult(data, context);
  const response: CreateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDetectorVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateModelResult(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateModelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateModelVersionResult(data, context);
  const response: CreateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateModelVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRuleResult(data, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRuleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVariableResult(data, context);
  const response: CreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVariableCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBatchImportJobResult(data, context);
  const response: DeleteBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBatchImportJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBatchPredictionJobResult(data, context);
  const response: DeleteBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBatchPredictionJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDetectorResult(data, context);
  const response: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDetectorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDetectorVersionResult(data, context);
  const response: DeleteDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDetectorVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEntityTypeResult(data, context);
  const response: DeleteEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEntityTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventResult(data, context);
  const response: DeleteEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEventsByEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsByEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventsByEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventsByEventTypeResult(data, context);
  const response: DeleteEventsByEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventsByEventTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventTypeResult(data, context);
  const response: DeleteEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteExternalModelResult(data, context);
  const response: DeleteExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteExternalModelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLabelResult(data, context);
  const response: DeleteLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLabelCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteModelResult(data, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteModelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteModelVersionResult(data, context);
  const response: DeleteModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteModelVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteOutcomeResult(data, context);
  const response: DeleteOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOutcomeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRuleResult(data, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVariableResult(data, context);
  const response: DeleteVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVariableCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDetectorResult(data, context);
  const response: DescribeDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDetectorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeModelVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeModelVersionsResult(data, context);
  const response: DescribeModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeModelVersionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBatchImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBatchImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBatchImportJobsResult(data, context);
  const response: GetBatchImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBatchImportJobsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBatchPredictionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBatchPredictionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBatchPredictionJobsResult(data, context);
  const response: GetBatchPredictionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBatchPredictionJobsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeleteEventsByEventTypeStatusResult(data, context);
  const response: GetDeleteEventsByEventTypeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDetectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDetectorsResult(data, context);
  const response: GetDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDetectorsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDetectorVersionResult(data, context);
  const response: GetDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDetectorVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntityTypesResult(data, context);
  const response: GetEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEntityTypesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventResult(data, context);
  const response: GetEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEventPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventPredictionResult(data, context);
  const response: GetEventPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventPredictionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.frauddetector#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEventPredictionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventPredictionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventPredictionMetadataResult(data, context);
  const response: GetEventPredictionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventPredictionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEventTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventTypesResult(data, context);
  const response: GetEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEventTypesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetExternalModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetExternalModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExternalModelsResult(data, context);
  const response: GetExternalModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetExternalModelsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKMSEncryptionKeyResult(data, context);
  const response: GetKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKMSEncryptionKeyCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLabelsResult(data, context);
  const response: GetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLabelsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetModelsResult(data, context);
  const response: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetModelsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetModelVersionResult(data, context);
  const response: GetModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetModelVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOutcomesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOutcomesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOutcomesResult(data, context);
  const response: GetOutcomesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOutcomesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRulesResult(data, context);
  const response: GetRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRulesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetVariablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVariablesResult(data, context);
  const response: GetVariablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVariablesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEventPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventPredictionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventPredictionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventPredictionsResult(data, context);
  const response: ListEventPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventPredictionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDetectorResult(data, context);
  const response: PutDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDetectorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEntityTypeResult(data, context);
  const response: PutEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEntityTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventTypeResult(data, context);
  const response: PutEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEventTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutExternalModelResult(data, context);
  const response: PutExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutExternalModelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutKMSEncryptionKeyResult(data, context);
  const response: PutKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutKMSEncryptionKeyCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLabelResult(data, context);
  const response: PutLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLabelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutOutcomeResult(data, context);
  const response: PutOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutOutcomeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendEventResult(data, context);
  const response: SendEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendEventCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionResult(data, context);
  const response: UpdateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDetectorVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionMetadataResult(data, context);
  const response: UpdateDetectorVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDetectorVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionStatusResult(data, context);
  const response: UpdateDetectorVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDetectorVersionStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateEventLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEventLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEventLabelResult(data, context);
  const response: UpdateEventLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEventLabelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateModelResult(data, context);
  const response: UpdateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateModelCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateModelVersionResult(data, context);
  const response: UpdateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateModelVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateModelVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateModelVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateModelVersionStatusResult(data, context);
  const response: UpdateModelVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateModelVersionStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRuleMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleMetadataResult(data, context);
  const response: UpdateRuleMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuleMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRuleVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRuleVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleVersionResult(data, context);
  const response: UpdateRuleVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuleVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVariableResult(data, context);
  const response: UpdateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVariableCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BatchCreateVariableRequest = (
  input: BatchCreateVariableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    ...(input.variableEntries != null && {
      variableEntries: serializeAws_json1_1VariableEntryList(input.variableEntries, context),
    }),
  };
};

const serializeAws_json1_1BatchGetVariableRequest = (input: BatchGetVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.names != null && { names: serializeAws_json1_1NameList(input.names, context) }),
  };
};

const serializeAws_json1_1CancelBatchImportJobRequest = (
  input: CancelBatchImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1CancelBatchPredictionJobRequest = (
  input: CancelBatchPredictionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1CreateBatchImportJobRequest = (
  input: CreateBatchImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.iamRoleArn != null && { iamRoleArn: input.iamRoleArn }),
    ...(input.inputPath != null && { inputPath: input.inputPath }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputPath != null && { outputPath: input.outputPath }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateBatchPredictionJobRequest = (
  input: CreateBatchPredictionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorName != null && { detectorName: input.detectorName }),
    ...(input.detectorVersion != null && { detectorVersion: input.detectorVersion }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.iamRoleArn != null && { iamRoleArn: input.iamRoleArn }),
    ...(input.inputPath != null && { inputPath: input.inputPath }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputPath != null && { outputPath: input.outputPath }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDetectorVersionRequest = (
  input: CreateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.externalModelEndpoints != null && {
      externalModelEndpoints: serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context),
    }),
    ...(input.modelVersions != null && {
      modelVersions: serializeAws_json1_1ListOfModelVersions(input.modelVersions, context),
    }),
    ...(input.ruleExecutionMode != null && { ruleExecutionMode: input.ruleExecutionMode }),
    ...(input.rules != null && { rules: serializeAws_json1_1RuleList(input.rules, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateModelVersionRequest = (
  input: CreateModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.externalEventsDetail != null && {
      externalEventsDetail: serializeAws_json1_1ExternalEventsDetail(input.externalEventsDetail, context),
    }),
    ...(input.ingestedEventsDetail != null && {
      ingestedEventsDetail: serializeAws_json1_1IngestedEventsDetail(input.ingestedEventsDetail, context),
    }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    ...(input.trainingDataSchema != null && {
      trainingDataSchema: serializeAws_json1_1TrainingDataSchema(input.trainingDataSchema, context),
    }),
    ...(input.trainingDataSource != null && { trainingDataSource: input.trainingDataSource }),
  };
};

const serializeAws_json1_1CreateRuleRequest = (input: CreateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.language != null && { language: input.language }),
    ...(input.outcomes != null && { outcomes: serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context) }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateVariableRequest = (input: CreateVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.dataSource != null && { dataSource: input.dataSource }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

const serializeAws_json1_1CsvIndexToVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1DeleteBatchImportJobRequest = (
  input: DeleteBatchImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1DeleteBatchPredictionJobRequest = (
  input: DeleteBatchPredictionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1DeleteDetectorRequest = (input: DeleteDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
  };
};

const serializeAws_json1_1DeleteDetectorVersionRequest = (
  input: DeleteDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

const serializeAws_json1_1DeleteEntityTypeRequest = (input: DeleteEntityTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteEventRequest = (input: DeleteEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.deleteAuditHistory != null && { deleteAuditHistory: input.deleteAuditHistory }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

const serializeAws_json1_1DeleteEventsByEventTypeRequest = (
  input: DeleteEventsByEventTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

const serializeAws_json1_1DeleteEventTypeRequest = (input: DeleteEventTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteExternalModelRequest = (
  input: DeleteExternalModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
  };
};

const serializeAws_json1_1DeleteLabelRequest = (input: DeleteLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteModelRequest = (input: DeleteModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
  };
};

const serializeAws_json1_1DeleteModelVersionRequest = (
  input: DeleteModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

const serializeAws_json1_1DeleteOutcomeRequest = (input: DeleteOutcomeRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.rule != null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
  };
};

const serializeAws_json1_1DeleteVariableRequest = (input: DeleteVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DescribeDetectorRequest = (input: DescribeDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeModelVersionsRequest = (
  input: DescribeModelVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1Entity = (input: Entity, context: __SerdeContext): any => {
  return {
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.entityType != null && { entityType: input.entityType }),
  };
};

const serializeAws_json1_1EventVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ExternalEventsDetail = (input: ExternalEventsDetail, context: __SerdeContext): any => {
  return {
    ...(input.dataAccessRoleArn != null && { dataAccessRoleArn: input.dataAccessRoleArn }),
    ...(input.dataLocation != null && { dataLocation: input.dataLocation }),
  };
};

const serializeAws_json1_1ExternalModelEndpointDataBlobMap = (
  input: Record<string, ModelEndpointDataBlob>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ModelEndpointDataBlob(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1GetBatchImportJobsRequest = (
  input: GetBatchImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetBatchPredictionJobsRequest = (
  input: GetBatchPredictionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetDeleteEventsByEventTypeStatusRequest = (
  input: GetDeleteEventsByEventTypeStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

const serializeAws_json1_1GetDetectorsRequest = (input: GetDetectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetDetectorVersionRequest = (
  input: GetDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

const serializeAws_json1_1GetEntityTypesRequest = (input: GetEntityTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetEventPredictionMetadataRequest = (
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

const serializeAws_json1_1GetEventPredictionRequest = (
  input: GetEventPredictionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.entities != null && { entities: serializeAws_json1_1listOfEntities(input.entities, context) }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTimestamp != null && { eventTimestamp: input.eventTimestamp }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.eventVariables != null && {
      eventVariables: serializeAws_json1_1EventVariableMap(input.eventVariables, context),
    }),
    ...(input.externalModelEndpointDataBlobs != null && {
      externalModelEndpointDataBlobs: serializeAws_json1_1ExternalModelEndpointDataBlobMap(
        input.externalModelEndpointDataBlobs,
        context
      ),
    }),
  };
};

const serializeAws_json1_1GetEventRequest = (input: GetEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
  };
};

const serializeAws_json1_1GetEventTypesRequest = (input: GetEventTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetExternalModelsRequest = (
  input: GetExternalModelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetLabelsRequest = (input: GetLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetModelsRequest = (input: GetModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetModelVersionRequest = (input: GetModelVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

const serializeAws_json1_1GetOutcomesRequest = (input: GetOutcomesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetRulesRequest = (input: GetRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.ruleVersion != null && { ruleVersion: input.ruleVersion }),
  };
};

const serializeAws_json1_1GetVariablesRequest = (input: GetVariablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1IngestedEventsDetail = (input: IngestedEventsDetail, context: __SerdeContext): any => {
  return {
    ...(input.ingestedEventsTimeWindow != null && {
      ingestedEventsTimeWindow: serializeAws_json1_1IngestedEventsTimeWindow(input.ingestedEventsTimeWindow, context),
    }),
  };
};

const serializeAws_json1_1IngestedEventsTimeWindow = (
  input: IngestedEventsTimeWindow,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

const serializeAws_json1_1JsonKeyToVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1labelMapper = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ListOfStrings(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1LabelSchema = (input: LabelSchema, context: __SerdeContext): any => {
  return {
    ...(input.labelMapper != null && { labelMapper: serializeAws_json1_1labelMapper(input.labelMapper, context) }),
    ...(input.unlabeledEventsTreatment != null && { unlabeledEventsTreatment: input.unlabeledEventsTreatment }),
  };
};

const serializeAws_json1_1ListEventPredictionsRequest = (
  input: ListEventPredictionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: serializeAws_json1_1FilterCondition(input.detectorId, context) }),
    ...(input.detectorVersionId != null && {
      detectorVersionId: serializeAws_json1_1FilterCondition(input.detectorVersionId, context),
    }),
    ...(input.eventId != null && { eventId: serializeAws_json1_1FilterCondition(input.eventId, context) }),
    ...(input.eventType != null && { eventType: serializeAws_json1_1FilterCondition(input.eventType, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.predictionTimeRange != null && {
      predictionTimeRange: serializeAws_json1_1PredictionTimeRange(input.predictionTimeRange, context),
    }),
  };
};

const serializeAws_json1_1listOfEntities = (input: Entity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Entity(entry, context);
    });
};

const serializeAws_json1_1ListOfModelVersions = (input: ModelVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ModelVersion(entry, context);
    });
};

const serializeAws_json1_1ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
  };
};

const serializeAws_json1_1ModelEndpointDataBlob = (input: ModelEndpointDataBlob, context: __SerdeContext): any => {
  return {
    ...(input.byteBuffer != null && { byteBuffer: context.base64Encoder(input.byteBuffer) }),
    ...(input.contentType != null && { contentType: input.contentType }),
  };
};

const serializeAws_json1_1ModelInputConfiguration = (input: ModelInputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.csvInputTemplate != null && { csvInputTemplate: input.csvInputTemplate }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.format != null && { format: input.format }),
    ...(input.jsonInputTemplate != null && { jsonInputTemplate: input.jsonInputTemplate }),
    ...(input.useEventVariables != null && { useEventVariables: input.useEventVariables }),
  };
};

const serializeAws_json1_1ModelOutputConfiguration = (
  input: ModelOutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.csvIndexToVariableMap != null && {
      csvIndexToVariableMap: serializeAws_json1_1CsvIndexToVariableMap(input.csvIndexToVariableMap, context),
    }),
    ...(input.format != null && { format: input.format }),
    ...(input.jsonKeyToVariableMap != null && {
      jsonKeyToVariableMap: serializeAws_json1_1JsonKeyToVariableMap(input.jsonKeyToVariableMap, context),
    }),
  };
};

const serializeAws_json1_1ModelVersion = (input: ModelVersion, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
  };
};

const serializeAws_json1_1NameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1NonEmptyListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PredictionTimeRange = (input: PredictionTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

const serializeAws_json1_1PutDetectorRequest = (input: PutDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1PutEntityTypeRequest = (input: PutEntityTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1PutEventTypeRequest = (input: PutEventTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.entityTypes != null && {
      entityTypes: serializeAws_json1_1NonEmptyListOfStrings(input.entityTypes, context),
    }),
    ...(input.eventIngestion != null && { eventIngestion: input.eventIngestion }),
    ...(input.eventVariables != null && {
      eventVariables: serializeAws_json1_1NonEmptyListOfStrings(input.eventVariables, context),
    }),
    ...(input.labels != null && { labels: serializeAws_json1_1ListOfStrings(input.labels, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1PutExternalModelRequest = (input: PutExternalModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.inputConfiguration != null && {
      inputConfiguration: serializeAws_json1_1ModelInputConfiguration(input.inputConfiguration, context),
    }),
    ...(input.invokeModelEndpointRoleArn != null && { invokeModelEndpointRoleArn: input.invokeModelEndpointRoleArn }),
    ...(input.modelEndpoint != null && { modelEndpoint: input.modelEndpoint }),
    ...(input.modelEndpointStatus != null && { modelEndpointStatus: input.modelEndpointStatus }),
    ...(input.modelSource != null && { modelSource: input.modelSource }),
    ...(input.outputConfiguration != null && {
      outputConfiguration: serializeAws_json1_1ModelOutputConfiguration(input.outputConfiguration, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1PutKMSEncryptionKeyRequest = (
  input: PutKMSEncryptionKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsEncryptionKeyArn != null && { kmsEncryptionKeyArn: input.kmsEncryptionKeyArn }),
  };
};

const serializeAws_json1_1PutLabelRequest = (input: PutLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1PutOutcomeRequest = (input: PutOutcomeRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.ruleId != null && { ruleId: input.ruleId }),
    ...(input.ruleVersion != null && { ruleVersion: input.ruleVersion }),
  };
};

const serializeAws_json1_1RuleList = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Rule(entry, context);
    });
};

const serializeAws_json1_1SendEventRequest = (input: SendEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.assignedLabel != null && { assignedLabel: input.assignedLabel }),
    ...(input.entities != null && { entities: serializeAws_json1_1listOfEntities(input.entities, context) }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTimestamp != null && { eventTimestamp: input.eventTimestamp }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.eventVariables != null && {
      eventVariables: serializeAws_json1_1EventVariableMap(input.eventVariables, context),
    }),
    ...(input.labelTimestamp != null && { labelTimestamp: input.labelTimestamp }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1tagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1tagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1TrainingDataSchema = (input: TrainingDataSchema, context: __SerdeContext): any => {
  return {
    ...(input.labelSchema != null && { labelSchema: serializeAws_json1_1LabelSchema(input.labelSchema, context) }),
    ...(input.modelVariables != null && {
      modelVariables: serializeAws_json1_1ListOfStrings(input.modelVariables, context),
    }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1tagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDetectorVersionMetadataRequest = (
  input: UpdateDetectorVersionMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
  };
};

const serializeAws_json1_1UpdateDetectorVersionRequest = (
  input: UpdateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.externalModelEndpoints != null && {
      externalModelEndpoints: serializeAws_json1_1ListOfStrings(input.externalModelEndpoints, context),
    }),
    ...(input.modelVersions != null && {
      modelVersions: serializeAws_json1_1ListOfModelVersions(input.modelVersions, context),
    }),
    ...(input.ruleExecutionMode != null && { ruleExecutionMode: input.ruleExecutionMode }),
    ...(input.rules != null && { rules: serializeAws_json1_1RuleList(input.rules, context) }),
  };
};

const serializeAws_json1_1UpdateDetectorVersionStatusRequest = (
  input: UpdateDetectorVersionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId != null && { detectorId: input.detectorId }),
    ...(input.detectorVersionId != null && { detectorVersionId: input.detectorVersionId }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1UpdateEventLabelRequest = (input: UpdateEventLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.assignedLabel != null && { assignedLabel: input.assignedLabel }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventTypeName != null && { eventTypeName: input.eventTypeName }),
    ...(input.labelTimestamp != null && { labelTimestamp: input.labelTimestamp }),
  };
};

const serializeAws_json1_1UpdateModelRequest = (input: UpdateModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
  };
};

const serializeAws_json1_1UpdateModelVersionRequest = (
  input: UpdateModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.externalEventsDetail != null && {
      externalEventsDetail: serializeAws_json1_1ExternalEventsDetail(input.externalEventsDetail, context),
    }),
    ...(input.ingestedEventsDetail != null && {
      ingestedEventsDetail: serializeAws_json1_1IngestedEventsDetail(input.ingestedEventsDetail, context),
    }),
    ...(input.majorVersionNumber != null && { majorVersionNumber: input.majorVersionNumber }),
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UpdateModelVersionStatusRequest = (
  input: UpdateModelVersionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.modelId != null && { modelId: input.modelId }),
    ...(input.modelType != null && { modelType: input.modelType }),
    ...(input.modelVersionNumber != null && { modelVersionNumber: input.modelVersionNumber }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1UpdateRuleMetadataRequest = (
  input: UpdateRuleMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.rule != null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
  };
};

const serializeAws_json1_1UpdateRuleVersionRequest = (
  input: UpdateRuleVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.language != null && { language: input.language }),
    ...(input.outcomes != null && { outcomes: serializeAws_json1_1NonEmptyListOfStrings(input.outcomes, context) }),
    ...(input.rule != null && { rule: serializeAws_json1_1Rule(input.rule, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UpdateVariableRequest = (input: UpdateVariableRequest, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

const serializeAws_json1_1VariableEntry = (input: VariableEntry, context: __SerdeContext): any => {
  return {
    ...(input.dataSource != null && { dataSource: input.dataSource }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.variableType != null && { variableType: input.variableType }),
  };
};

const serializeAws_json1_1VariableEntryList = (input: VariableEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1VariableEntry(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AggregatedLogOddsMetric = (
  output: any,
  context: __SerdeContext
): AggregatedLogOddsMetric => {
  return {
    aggregatedVariablesImportance: __limitedParseFloat32(output.aggregatedVariablesImportance),
    variableNames:
      output.variableNames != null ? deserializeAws_json1_1ListOfStrings(output.variableNames, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AggregatedVariablesImpactExplanation = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation => {
  return {
    eventVariableNames:
      output.eventVariableNames != null
        ? deserializeAws_json1_1ListOfStrings(output.eventVariableNames, context)
        : undefined,
    logOddsImpact: __limitedParseFloat32(output.logOddsImpact),
    relativeImpact: __expectString(output.relativeImpact),
  } as any;
};

const deserializeAws_json1_1AggregatedVariablesImportanceMetrics = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImportanceMetrics => {
  return {
    logOddsMetrics:
      output.logOddsMetrics != null
        ? deserializeAws_json1_1ListOfAggregatedLogOddsMetrics(output.logOddsMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ATIMetricDataPoint = (output: any, context: __SerdeContext): ATIMetricDataPoint => {
  return {
    adr: __limitedParseFloat32(output.adr),
    atodr: __limitedParseFloat32(output.atodr),
    cr: __limitedParseFloat32(output.cr),
    threshold: __limitedParseFloat32(output.threshold),
  } as any;
};

const deserializeAws_json1_1ATIMetricDataPointsList = (output: any, context: __SerdeContext): ATIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ATIMetricDataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ATIModelPerformance = (output: any, context: __SerdeContext): ATIModelPerformance => {
  return {
    asi: __limitedParseFloat32(output.asi),
  } as any;
};

const deserializeAws_json1_1ATITrainingMetricsValue = (
  output: any,
  context: __SerdeContext
): ATITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null
        ? deserializeAws_json1_1ATIMetricDataPointsList(output.metricDataPoints, context)
        : undefined,
    modelPerformance:
      output.modelPerformance != null
        ? deserializeAws_json1_1ATIModelPerformance(output.modelPerformance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchCreateVariableError = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1BatchCreateVariableErrorList = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchCreateVariableError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchCreateVariableResult = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableResult => {
  return {
    errors:
      output.errors != null ? deserializeAws_json1_1BatchCreateVariableErrorList(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetVariableError = (output: any, context: __SerdeContext): BatchGetVariableError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1BatchGetVariableErrorList = (
  output: any,
  context: __SerdeContext
): BatchGetVariableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchGetVariableError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetVariableResult = (output: any, context: __SerdeContext): BatchGetVariableResult => {
  return {
    errors: output.errors != null ? deserializeAws_json1_1BatchGetVariableErrorList(output.errors, context) : undefined,
    variables: output.variables != null ? deserializeAws_json1_1VariableList(output.variables, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchImport = (output: any, context: __SerdeContext): BatchImport => {
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

const deserializeAws_json1_1BatchImportList = (output: any, context: __SerdeContext): BatchImport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchImport(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchPrediction = (output: any, context: __SerdeContext): BatchPrediction => {
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

const deserializeAws_json1_1BatchPredictionList = (output: any, context: __SerdeContext): BatchPrediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchPrediction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CancelBatchImportJobResult = (
  output: any,
  context: __SerdeContext
): CancelBatchImportJobResult => {
  return {} as any;
};

const deserializeAws_json1_1CancelBatchPredictionJobResult = (
  output: any,
  context: __SerdeContext
): CancelBatchPredictionJobResult => {
  return {} as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateBatchImportJobResult = (
  output: any,
  context: __SerdeContext
): CreateBatchImportJobResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateBatchPredictionJobResult = (
  output: any,
  context: __SerdeContext
): CreateBatchPredictionJobResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): CreateDetectorVersionResult => {
  return {
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1CreateModelResult = (output: any, context: __SerdeContext): CreateModelResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateModelVersionResult = (
  output: any,
  context: __SerdeContext
): CreateModelVersionResult => {
  return {
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1CreateRuleResult = (output: any, context: __SerdeContext): CreateRuleResult => {
  return {
    rule: output.rule != null ? deserializeAws_json1_1Rule(output.rule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVariableResult = (output: any, context: __SerdeContext): CreateVariableResult => {
  return {} as any;
};

const deserializeAws_json1_1CsvIndexToVariableMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1DataValidationMetrics = (output: any, context: __SerdeContext): DataValidationMetrics => {
  return {
    fieldLevelMessages:
      output.fieldLevelMessages != null
        ? deserializeAws_json1_1fieldValidationMessageList(output.fieldLevelMessages, context)
        : undefined,
    fileLevelMessages:
      output.fileLevelMessages != null
        ? deserializeAws_json1_1fileValidationMessageList(output.fileLevelMessages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBatchImportJobResult = (
  output: any,
  context: __SerdeContext
): DeleteBatchImportJobResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteBatchPredictionJobResult = (
  output: any,
  context: __SerdeContext
): DeleteBatchPredictionJobResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDetectorResult = (output: any, context: __SerdeContext): DeleteDetectorResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): DeleteDetectorVersionResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEntityTypeResult = (output: any, context: __SerdeContext): DeleteEntityTypeResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEventResult = (output: any, context: __SerdeContext): DeleteEventResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEventsByEventTypeResult = (
  output: any,
  context: __SerdeContext
): DeleteEventsByEventTypeResult => {
  return {
    eventTypeName: __expectString(output.eventTypeName),
    eventsDeletionStatus: __expectString(output.eventsDeletionStatus),
  } as any;
};

const deserializeAws_json1_1DeleteEventTypeResult = (output: any, context: __SerdeContext): DeleteEventTypeResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteExternalModelResult = (
  output: any,
  context: __SerdeContext
): DeleteExternalModelResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLabelResult = (output: any, context: __SerdeContext): DeleteLabelResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteModelResult = (output: any, context: __SerdeContext): DeleteModelResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteModelVersionResult = (
  output: any,
  context: __SerdeContext
): DeleteModelVersionResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteOutcomeResult = (output: any, context: __SerdeContext): DeleteOutcomeResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRuleResult = (output: any, context: __SerdeContext): DeleteRuleResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteVariableResult = (output: any, context: __SerdeContext): DeleteVariableResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeDetectorResult = (output: any, context: __SerdeContext): DescribeDetectorResult => {
  return {
    arn: __expectString(output.arn),
    detectorId: __expectString(output.detectorId),
    detectorVersionSummaries:
      output.detectorVersionSummaries != null
        ? deserializeAws_json1_1DetectorVersionSummaryList(output.detectorVersionSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeModelVersionsResult = (
  output: any,
  context: __SerdeContext
): DescribeModelVersionsResult => {
  return {
    modelVersionDetails:
      output.modelVersionDetails != null
        ? deserializeAws_json1_1modelVersionDetailList(output.modelVersionDetails, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1Detector = (output: any, context: __SerdeContext): Detector => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    eventTypeName: __expectString(output.eventTypeName),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
  } as any;
};

const deserializeAws_json1_1DetectorList = (output: any, context: __SerdeContext): Detector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Detector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DetectorVersionSummary = (output: any, context: __SerdeContext): DetectorVersionSummary => {
  return {
    description: __expectString(output.description),
    detectorVersionId: __expectString(output.detectorVersionId),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DetectorVersionSummaryList = (
  output: any,
  context: __SerdeContext
): DetectorVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DetectorVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    entityId: __expectString(output.entityId),
    entityType: __expectString(output.entityType),
  } as any;
};

const deserializeAws_json1_1EntityType = (output: any, context: __SerdeContext): EntityType => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1entityTypeList = (output: any, context: __SerdeContext): EntityType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EvaluatedExternalModel = (output: any, context: __SerdeContext): EvaluatedExternalModel => {
  return {
    inputVariables:
      output.inputVariables != null ? deserializeAws_json1_1MapOfStrings(output.inputVariables, context) : undefined,
    modelEndpoint: __expectString(output.modelEndpoint),
    outputVariables:
      output.outputVariables != null ? deserializeAws_json1_1MapOfStrings(output.outputVariables, context) : undefined,
    useEventVariables: __expectBoolean(output.useEventVariables),
  } as any;
};

const deserializeAws_json1_1EvaluatedModelVersion = (output: any, context: __SerdeContext): EvaluatedModelVersion => {
  return {
    evaluations:
      output.evaluations != null
        ? deserializeAws_json1_1ListOfModelVersionEvaluations(output.evaluations, context)
        : undefined,
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersion: __expectString(output.modelVersion),
  } as any;
};

const deserializeAws_json1_1EvaluatedRule = (output: any, context: __SerdeContext): EvaluatedRule => {
  return {
    evaluated: __expectBoolean(output.evaluated),
    expression: __expectString(output.expression),
    expressionWithValues: __expectString(output.expressionWithValues),
    matched: __expectBoolean(output.matched),
    outcomes: output.outcomes != null ? deserializeAws_json1_1ListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

const deserializeAws_json1_1EvaluatedRuleList = (output: any, context: __SerdeContext): EvaluatedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluatedRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    currentLabel: __expectString(output.currentLabel),
    entities: output.entities != null ? deserializeAws_json1_1listOfEntities(output.entities, context) : undefined,
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    eventVariables:
      output.eventVariables != null
        ? deserializeAws_json1_1EventAttributeMap(output.eventVariables, context)
        : undefined,
    labelTimestamp: __expectString(output.labelTimestamp),
  } as any;
};

const deserializeAws_json1_1EventAttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1EventPredictionSummary = (output: any, context: __SerdeContext): EventPredictionSummary => {
  return {
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    predictionTimestamp: __expectString(output.predictionTimestamp),
  } as any;
};

const deserializeAws_json1_1EventType = (output: any, context: __SerdeContext): EventType => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    entityTypes:
      output.entityTypes != null ? deserializeAws_json1_1NonEmptyListOfStrings(output.entityTypes, context) : undefined,
    eventIngestion: __expectString(output.eventIngestion),
    eventVariables:
      output.eventVariables != null ? deserializeAws_json1_1ListOfStrings(output.eventVariables, context) : undefined,
    ingestedEventStatistics:
      output.ingestedEventStatistics != null
        ? deserializeAws_json1_1IngestedEventStatistics(output.ingestedEventStatistics, context)
        : undefined,
    labels: output.labels != null ? deserializeAws_json1_1ListOfStrings(output.labels, context) : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1eventTypeList = (output: any, context: __SerdeContext): EventType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventVariableSummary = (output: any, context: __SerdeContext): EventVariableSummary => {
  return {
    name: __expectString(output.name),
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1ExternalEventsDetail = (output: any, context: __SerdeContext): ExternalEventsDetail => {
  return {
    dataAccessRoleArn: __expectString(output.dataAccessRoleArn),
    dataLocation: __expectString(output.dataLocation),
  } as any;
};

const deserializeAws_json1_1ExternalModel = (output: any, context: __SerdeContext): ExternalModel => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    inputConfiguration:
      output.inputConfiguration != null
        ? deserializeAws_json1_1ModelInputConfiguration(output.inputConfiguration, context)
        : undefined,
    invokeModelEndpointRoleArn: __expectString(output.invokeModelEndpointRoleArn),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelEndpoint: __expectString(output.modelEndpoint),
    modelEndpointStatus: __expectString(output.modelEndpointStatus),
    modelSource: __expectString(output.modelSource),
    outputConfiguration:
      output.outputConfiguration != null
        ? deserializeAws_json1_1ModelOutputConfiguration(output.outputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExternalModelList = (output: any, context: __SerdeContext): ExternalModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExternalModel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExternalModelOutputs = (output: any, context: __SerdeContext): ExternalModelOutputs => {
  return {
    externalModel:
      output.externalModel != null
        ? deserializeAws_json1_1ExternalModelSummary(output.externalModel, context)
        : undefined,
    outputs:
      output.outputs != null ? deserializeAws_json1_1ExternalModelPredictionMap(output.outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ExternalModelPredictionMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ExternalModelSummary = (output: any, context: __SerdeContext): ExternalModelSummary => {
  return {
    modelEndpoint: __expectString(output.modelEndpoint),
    modelSource: __expectString(output.modelSource),
  } as any;
};

const deserializeAws_json1_1FieldValidationMessage = (output: any, context: __SerdeContext): FieldValidationMessage => {
  return {
    content: __expectString(output.content),
    fieldName: __expectString(output.fieldName),
    identifier: __expectString(output.identifier),
    title: __expectString(output.title),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1fieldValidationMessageList = (
  output: any,
  context: __SerdeContext
): FieldValidationMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FieldValidationMessage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FileValidationMessage = (output: any, context: __SerdeContext): FileValidationMessage => {
  return {
    content: __expectString(output.content),
    title: __expectString(output.title),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1fileValidationMessageList = (
  output: any,
  context: __SerdeContext
): FileValidationMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileValidationMessage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetBatchImportJobsResult = (
  output: any,
  context: __SerdeContext
): GetBatchImportJobsResult => {
  return {
    batchImports:
      output.batchImports != null ? deserializeAws_json1_1BatchImportList(output.batchImports, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetBatchPredictionJobsResult = (
  output: any,
  context: __SerdeContext
): GetBatchPredictionJobsResult => {
  return {
    batchPredictions:
      output.batchPredictions != null
        ? deserializeAws_json1_1BatchPredictionList(output.batchPredictions, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetDeleteEventsByEventTypeStatusResult = (
  output: any,
  context: __SerdeContext
): GetDeleteEventsByEventTypeStatusResult => {
  return {
    eventTypeName: __expectString(output.eventTypeName),
    eventsDeletionStatus: __expectString(output.eventsDeletionStatus),
  } as any;
};

const deserializeAws_json1_1GetDetectorsResult = (output: any, context: __SerdeContext): GetDetectorsResult => {
  return {
    detectors: output.detectors != null ? deserializeAws_json1_1DetectorList(output.detectors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): GetDetectorVersionResult => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    detectorVersionId: __expectString(output.detectorVersionId),
    externalModelEndpoints:
      output.externalModelEndpoints != null
        ? deserializeAws_json1_1ListOfStrings(output.externalModelEndpoints, context)
        : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelVersions:
      output.modelVersions != null
        ? deserializeAws_json1_1ListOfModelVersions(output.modelVersions, context)
        : undefined,
    ruleExecutionMode: __expectString(output.ruleExecutionMode),
    rules: output.rules != null ? deserializeAws_json1_1RuleList(output.rules, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1GetEntityTypesResult = (output: any, context: __SerdeContext): GetEntityTypesResult => {
  return {
    entityTypes:
      output.entityTypes != null ? deserializeAws_json1_1entityTypeList(output.entityTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetEventPredictionMetadataResult = (
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
        ? deserializeAws_json1_1ListOfEvaluatedExternalModels(output.evaluatedExternalModels, context)
        : undefined,
    evaluatedModelVersions:
      output.evaluatedModelVersions != null
        ? deserializeAws_json1_1ListOfEvaluatedModelVersions(output.evaluatedModelVersions, context)
        : undefined,
    eventId: __expectString(output.eventId),
    eventTimestamp: __expectString(output.eventTimestamp),
    eventTypeName: __expectString(output.eventTypeName),
    eventVariables:
      output.eventVariables != null
        ? deserializeAws_json1_1ListOfEventVariableSummaries(output.eventVariables, context)
        : undefined,
    outcomes: output.outcomes != null ? deserializeAws_json1_1ListOfStrings(output.outcomes, context) : undefined,
    predictionTimestamp: __expectString(output.predictionTimestamp),
    ruleExecutionMode: __expectString(output.ruleExecutionMode),
    rules: output.rules != null ? deserializeAws_json1_1EvaluatedRuleList(output.rules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetEventPredictionResult = (
  output: any,
  context: __SerdeContext
): GetEventPredictionResult => {
  return {
    externalModelOutputs:
      output.externalModelOutputs != null
        ? deserializeAws_json1_1ListOfExternalModelOutputs(output.externalModelOutputs, context)
        : undefined,
    modelScores:
      output.modelScores != null ? deserializeAws_json1_1ListOfModelScores(output.modelScores, context) : undefined,
    ruleResults:
      output.ruleResults != null ? deserializeAws_json1_1ListOfRuleResults(output.ruleResults, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetEventResult = (output: any, context: __SerdeContext): GetEventResult => {
  return {
    event: output.event != null ? deserializeAws_json1_1Event(output.event, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetEventTypesResult = (output: any, context: __SerdeContext): GetEventTypesResult => {
  return {
    eventTypes: output.eventTypes != null ? deserializeAws_json1_1eventTypeList(output.eventTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetExternalModelsResult = (
  output: any,
  context: __SerdeContext
): GetExternalModelsResult => {
  return {
    externalModels:
      output.externalModels != null
        ? deserializeAws_json1_1ExternalModelList(output.externalModels, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetKMSEncryptionKeyResult = (
  output: any,
  context: __SerdeContext
): GetKMSEncryptionKeyResult => {
  return {
    kmsKey: output.kmsKey != null ? deserializeAws_json1_1KMSKey(output.kmsKey, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLabelsResult = (output: any, context: __SerdeContext): GetLabelsResult => {
  return {
    labels: output.labels != null ? deserializeAws_json1_1labelList(output.labels, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetModelsResult = (output: any, context: __SerdeContext): GetModelsResult => {
  return {
    models: output.models != null ? deserializeAws_json1_1modelList(output.models, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetModelVersionResult = (output: any, context: __SerdeContext): GetModelVersionResult => {
  return {
    arn: __expectString(output.arn),
    externalEventsDetail:
      output.externalEventsDetail != null
        ? deserializeAws_json1_1ExternalEventsDetail(output.externalEventsDetail, context)
        : undefined,
    ingestedEventsDetail:
      output.ingestedEventsDetail != null
        ? deserializeAws_json1_1IngestedEventsDetail(output.ingestedEventsDetail, context)
        : undefined,
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
    trainingDataSchema:
      output.trainingDataSchema != null
        ? deserializeAws_json1_1TrainingDataSchema(output.trainingDataSchema, context)
        : undefined,
    trainingDataSource: __expectString(output.trainingDataSource),
  } as any;
};

const deserializeAws_json1_1GetOutcomesResult = (output: any, context: __SerdeContext): GetOutcomesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    outcomes: output.outcomes != null ? deserializeAws_json1_1OutcomeList(output.outcomes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRulesResult = (output: any, context: __SerdeContext): GetRulesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    ruleDetails:
      output.ruleDetails != null ? deserializeAws_json1_1RuleDetailList(output.ruleDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetVariablesResult = (output: any, context: __SerdeContext): GetVariablesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    variables: output.variables != null ? deserializeAws_json1_1VariableList(output.variables, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IngestedEventsDetail = (output: any, context: __SerdeContext): IngestedEventsDetail => {
  return {
    ingestedEventsTimeWindow:
      output.ingestedEventsTimeWindow != null
        ? deserializeAws_json1_1IngestedEventsTimeWindow(output.ingestedEventsTimeWindow, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IngestedEventStatistics = (
  output: any,
  context: __SerdeContext
): IngestedEventStatistics => {
  return {
    eventDataSizeInBytes: __expectLong(output.eventDataSizeInBytes),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    leastRecentEvent: __expectString(output.leastRecentEvent),
    mostRecentEvent: __expectString(output.mostRecentEvent),
    numberOfEvents: __expectLong(output.numberOfEvents),
  } as any;
};

const deserializeAws_json1_1IngestedEventsTimeWindow = (
  output: any,
  context: __SerdeContext
): IngestedEventsTimeWindow => {
  return {
    endTime: __expectString(output.endTime),
    startTime: __expectString(output.startTime),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1JsonKeyToVariableMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1KMSKey = (output: any, context: __SerdeContext): KMSKey => {
  return {
    kmsEncryptionKeyArn: __expectString(output.kmsEncryptionKeyArn),
  } as any;
};

const deserializeAws_json1_1Label = (output: any, context: __SerdeContext): Label => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1labelList = (output: any, context: __SerdeContext): Label[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Label(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1labelMapper = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ListOfStrings(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1LabelSchema = (output: any, context: __SerdeContext): LabelSchema => {
  return {
    labelMapper:
      output.labelMapper != null ? deserializeAws_json1_1labelMapper(output.labelMapper, context) : undefined,
    unlabeledEventsTreatment: __expectString(output.unlabeledEventsTreatment),
  } as any;
};

const deserializeAws_json1_1ListEventPredictionsResult = (
  output: any,
  context: __SerdeContext
): ListEventPredictionsResult => {
  return {
    eventPredictionSummaries:
      output.eventPredictionSummaries != null
        ? deserializeAws_json1_1ListOfEventPredictionSummaries(output.eventPredictionSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListOfAggregatedLogOddsMetrics = (
  output: any,
  context: __SerdeContext
): AggregatedLogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregatedLogOddsMetric(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfAggregatedVariablesImpactExplanations = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregatedVariablesImpactExplanation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1listOfEntities = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Entity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfEvaluatedExternalModels = (
  output: any,
  context: __SerdeContext
): EvaluatedExternalModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluatedExternalModel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfEvaluatedModelVersions = (
  output: any,
  context: __SerdeContext
): EvaluatedModelVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluatedModelVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfEventPredictionSummaries = (
  output: any,
  context: __SerdeContext
): EventPredictionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventPredictionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfEventVariableSummaries = (
  output: any,
  context: __SerdeContext
): EventVariableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventVariableSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfExternalModelOutputs = (
  output: any,
  context: __SerdeContext
): ExternalModelOutputs[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExternalModelOutputs(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfLogOddsMetrics = (output: any, context: __SerdeContext): LogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogOddsMetric(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfModelScores = (output: any, context: __SerdeContext): ModelScores[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModelScores(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfModelVersionEvaluations = (
  output: any,
  context: __SerdeContext
): ModelVersionEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModelVersionEvaluation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfModelVersions = (output: any, context: __SerdeContext): ModelVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModelVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfRuleResults = (output: any, context: __SerdeContext): RuleResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RuleResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfStrings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1listOfVariableImpactExplanations = (
  output: any,
  context: __SerdeContext
): VariableImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VariableImpactExplanation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListTagsForResourceResult = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_1tagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogOddsMetric = (output: any, context: __SerdeContext): LogOddsMetric => {
  return {
    variableImportance: __limitedParseFloat32(output.variableImportance),
    variableName: __expectString(output.variableName),
    variableType: __expectString(output.variableType),
  } as any;
};

const deserializeAws_json1_1MapOfStrings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1MetricDataPoint = (output: any, context: __SerdeContext): MetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

const deserializeAws_json1_1metricDataPointsList = (output: any, context: __SerdeContext): MetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Model = (output: any, context: __SerdeContext): Model => {
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

const deserializeAws_json1_1ModelInputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelInputConfiguration => {
  return {
    csvInputTemplate: __expectString(output.csvInputTemplate),
    eventTypeName: __expectString(output.eventTypeName),
    format: __expectString(output.format),
    jsonInputTemplate: __expectString(output.jsonInputTemplate),
    useEventVariables: __expectBoolean(output.useEventVariables),
  } as any;
};

const deserializeAws_json1_1modelList = (output: any, context: __SerdeContext): Model[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Model(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ModelOutputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelOutputConfiguration => {
  return {
    csvIndexToVariableMap:
      output.csvIndexToVariableMap != null
        ? deserializeAws_json1_1CsvIndexToVariableMap(output.csvIndexToVariableMap, context)
        : undefined,
    format: __expectString(output.format),
    jsonKeyToVariableMap:
      output.jsonKeyToVariableMap != null
        ? deserializeAws_json1_1JsonKeyToVariableMap(output.jsonKeyToVariableMap, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModelPredictionMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ModelScores = (output: any, context: __SerdeContext): ModelScores => {
  return {
    modelVersion:
      output.modelVersion != null ? deserializeAws_json1_1ModelVersion(output.modelVersion, context) : undefined,
    scores: output.scores != null ? deserializeAws_json1_1ModelPredictionMap(output.scores, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ModelVersion = (output: any, context: __SerdeContext): ModelVersion => {
  return {
    arn: __expectString(output.arn),
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
  } as any;
};

const deserializeAws_json1_1ModelVersionDetail = (output: any, context: __SerdeContext): ModelVersionDetail => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    externalEventsDetail:
      output.externalEventsDetail != null
        ? deserializeAws_json1_1ExternalEventsDetail(output.externalEventsDetail, context)
        : undefined,
    ingestedEventsDetail:
      output.ingestedEventsDetail != null
        ? deserializeAws_json1_1IngestedEventsDetail(output.ingestedEventsDetail, context)
        : undefined,
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
    trainingDataSchema:
      output.trainingDataSchema != null
        ? deserializeAws_json1_1TrainingDataSchema(output.trainingDataSchema, context)
        : undefined,
    trainingDataSource: __expectString(output.trainingDataSource),
    trainingResult:
      output.trainingResult != null ? deserializeAws_json1_1TrainingResult(output.trainingResult, context) : undefined,
    trainingResultV2:
      output.trainingResultV2 != null
        ? deserializeAws_json1_1TrainingResultV2(output.trainingResultV2, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1modelVersionDetailList = (output: any, context: __SerdeContext): ModelVersionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModelVersionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ModelVersionEvaluation = (output: any, context: __SerdeContext): ModelVersionEvaluation => {
  return {
    evaluationScore: __expectString(output.evaluationScore),
    outputVariableName: __expectString(output.outputVariableName),
    predictionExplanations:
      output.predictionExplanations != null
        ? deserializeAws_json1_1PredictionExplanations(output.predictionExplanations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NonEmptyListOfStrings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OFIMetricDataPoint = (output: any, context: __SerdeContext): OFIMetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

const deserializeAws_json1_1OFIMetricDataPointsList = (output: any, context: __SerdeContext): OFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OFIMetricDataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OFIModelPerformance = (output: any, context: __SerdeContext): OFIModelPerformance => {
  return {
    auc: __limitedParseFloat32(output.auc),
  } as any;
};

const deserializeAws_json1_1OFITrainingMetricsValue = (
  output: any,
  context: __SerdeContext
): OFITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null
        ? deserializeAws_json1_1OFIMetricDataPointsList(output.metricDataPoints, context)
        : undefined,
    modelPerformance:
      output.modelPerformance != null
        ? deserializeAws_json1_1OFIModelPerformance(output.modelPerformance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Outcome = (output: any, context: __SerdeContext): Outcome => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1OutcomeList = (output: any, context: __SerdeContext): Outcome[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Outcome(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PredictionExplanations = (output: any, context: __SerdeContext): PredictionExplanations => {
  return {
    aggregatedVariablesImpactExplanations:
      output.aggregatedVariablesImpactExplanations != null
        ? deserializeAws_json1_1ListOfAggregatedVariablesImpactExplanations(
            output.aggregatedVariablesImpactExplanations,
            context
          )
        : undefined,
    variableImpactExplanations:
      output.variableImpactExplanations != null
        ? deserializeAws_json1_1listOfVariableImpactExplanations(output.variableImpactExplanations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutDetectorResult = (output: any, context: __SerdeContext): PutDetectorResult => {
  return {} as any;
};

const deserializeAws_json1_1PutEntityTypeResult = (output: any, context: __SerdeContext): PutEntityTypeResult => {
  return {} as any;
};

const deserializeAws_json1_1PutEventTypeResult = (output: any, context: __SerdeContext): PutEventTypeResult => {
  return {} as any;
};

const deserializeAws_json1_1PutExternalModelResult = (output: any, context: __SerdeContext): PutExternalModelResult => {
  return {} as any;
};

const deserializeAws_json1_1PutKMSEncryptionKeyResult = (
  output: any,
  context: __SerdeContext
): PutKMSEncryptionKeyResult => {
  return {} as any;
};

const deserializeAws_json1_1PutLabelResult = (output: any, context: __SerdeContext): PutLabelResult => {
  return {} as any;
};

const deserializeAws_json1_1PutOutcomeResult = (output: any, context: __SerdeContext): PutOutcomeResult => {
  return {} as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    detectorId: __expectString(output.detectorId),
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

const deserializeAws_json1_1RuleDetail = (output: any, context: __SerdeContext): RuleDetail => {
  return {
    arn: __expectString(output.arn),
    createdTime: __expectString(output.createdTime),
    description: __expectString(output.description),
    detectorId: __expectString(output.detectorId),
    expression: __expectString(output.expression),
    language: __expectString(output.language),
    lastUpdatedTime: __expectString(output.lastUpdatedTime),
    outcomes:
      output.outcomes != null ? deserializeAws_json1_1NonEmptyListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
    ruleVersion: __expectString(output.ruleVersion),
  } as any;
};

const deserializeAws_json1_1RuleDetailList = (output: any, context: __SerdeContext): RuleDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RuleDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RuleList = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RuleResult = (output: any, context: __SerdeContext): RuleResult => {
  return {
    outcomes: output.outcomes != null ? deserializeAws_json1_1ListOfStrings(output.outcomes, context) : undefined,
    ruleId: __expectString(output.ruleId),
  } as any;
};

const deserializeAws_json1_1SendEventResult = (output: any, context: __SerdeContext): SendEventResult => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1tagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1TFIMetricDataPoint = (output: any, context: __SerdeContext): TFIMetricDataPoint => {
  return {
    fpr: __limitedParseFloat32(output.fpr),
    precision: __limitedParseFloat32(output.precision),
    threshold: __limitedParseFloat32(output.threshold),
    tpr: __limitedParseFloat32(output.tpr),
  } as any;
};

const deserializeAws_json1_1TFIMetricDataPointsList = (output: any, context: __SerdeContext): TFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TFIMetricDataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TFIModelPerformance = (output: any, context: __SerdeContext): TFIModelPerformance => {
  return {
    auc: __limitedParseFloat32(output.auc),
  } as any;
};

const deserializeAws_json1_1TFITrainingMetricsValue = (
  output: any,
  context: __SerdeContext
): TFITrainingMetricsValue => {
  return {
    metricDataPoints:
      output.metricDataPoints != null
        ? deserializeAws_json1_1TFIMetricDataPointsList(output.metricDataPoints, context)
        : undefined,
    modelPerformance:
      output.modelPerformance != null
        ? deserializeAws_json1_1TFIModelPerformance(output.modelPerformance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TrainingDataSchema = (output: any, context: __SerdeContext): TrainingDataSchema => {
  return {
    labelSchema:
      output.labelSchema != null ? deserializeAws_json1_1LabelSchema(output.labelSchema, context) : undefined,
    modelVariables:
      output.modelVariables != null ? deserializeAws_json1_1ListOfStrings(output.modelVariables, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingMetrics = (output: any, context: __SerdeContext): TrainingMetrics => {
  return {
    auc: __limitedParseFloat32(output.auc),
    metricDataPoints:
      output.metricDataPoints != null
        ? deserializeAws_json1_1metricDataPointsList(output.metricDataPoints, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingMetricsV2 = (output: any, context: __SerdeContext): TrainingMetricsV2 => {
  return {
    ati: output.ati != null ? deserializeAws_json1_1ATITrainingMetricsValue(output.ati, context) : undefined,
    ofi: output.ofi != null ? deserializeAws_json1_1OFITrainingMetricsValue(output.ofi, context) : undefined,
    tfi: output.tfi != null ? deserializeAws_json1_1TFITrainingMetricsValue(output.tfi, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingResult = (output: any, context: __SerdeContext): TrainingResult => {
  return {
    dataValidationMetrics:
      output.dataValidationMetrics != null
        ? deserializeAws_json1_1DataValidationMetrics(output.dataValidationMetrics, context)
        : undefined,
    trainingMetrics:
      output.trainingMetrics != null
        ? deserializeAws_json1_1TrainingMetrics(output.trainingMetrics, context)
        : undefined,
    variableImportanceMetrics:
      output.variableImportanceMetrics != null
        ? deserializeAws_json1_1VariableImportanceMetrics(output.variableImportanceMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TrainingResultV2 = (output: any, context: __SerdeContext): TrainingResultV2 => {
  return {
    aggregatedVariablesImportanceMetrics:
      output.aggregatedVariablesImportanceMetrics != null
        ? deserializeAws_json1_1AggregatedVariablesImportanceMetrics(
            output.aggregatedVariablesImportanceMetrics,
            context
          )
        : undefined,
    dataValidationMetrics:
      output.dataValidationMetrics != null
        ? deserializeAws_json1_1DataValidationMetrics(output.dataValidationMetrics, context)
        : undefined,
    trainingMetricsV2:
      output.trainingMetricsV2 != null
        ? deserializeAws_json1_1TrainingMetricsV2(output.trainingMetricsV2, context)
        : undefined,
    variableImportanceMetrics:
      output.variableImportanceMetrics != null
        ? deserializeAws_json1_1VariableImportanceMetrics(output.variableImportanceMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDetectorVersionMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionMetadataResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDetectorVersionStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionStatusResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateEventLabelResult = (output: any, context: __SerdeContext): UpdateEventLabelResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateModelResult = (output: any, context: __SerdeContext): UpdateModelResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateModelVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateModelVersionResult => {
  return {
    modelId: __expectString(output.modelId),
    modelType: __expectString(output.modelType),
    modelVersionNumber: __expectString(output.modelVersionNumber),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1UpdateModelVersionStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateModelVersionStatusResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRuleMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleMetadataResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRuleVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleVersionResult => {
  return {
    rule: output.rule != null ? deserializeAws_json1_1Rule(output.rule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVariableResult = (output: any, context: __SerdeContext): UpdateVariableResult => {
  return {} as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Variable = (output: any, context: __SerdeContext): Variable => {
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

const deserializeAws_json1_1VariableImpactExplanation = (
  output: any,
  context: __SerdeContext
): VariableImpactExplanation => {
  return {
    eventVariableName: __expectString(output.eventVariableName),
    logOddsImpact: __limitedParseFloat32(output.logOddsImpact),
    relativeImpact: __expectString(output.relativeImpact),
  } as any;
};

const deserializeAws_json1_1VariableImportanceMetrics = (
  output: any,
  context: __SerdeContext
): VariableImportanceMetrics => {
  return {
    logOddsMetrics:
      output.logOddsMetrics != null
        ? deserializeAws_json1_1ListOfLogOddsMetrics(output.logOddsMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VariableList = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Variable(entry, context);
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
