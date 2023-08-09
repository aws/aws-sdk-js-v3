// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
} from "../commands/BatchDetectDominantLanguageCommand";
import {
  BatchDetectEntitiesCommandInput,
  BatchDetectEntitiesCommandOutput,
} from "../commands/BatchDetectEntitiesCommand";
import {
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
} from "../commands/BatchDetectKeyPhrasesCommand";
import {
  BatchDetectSentimentCommandInput,
  BatchDetectSentimentCommandOutput,
} from "../commands/BatchDetectSentimentCommand";
import { BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput } from "../commands/BatchDetectSyntaxCommand";
import {
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
} from "../commands/BatchDetectTargetedSentimentCommand";
import { ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput } from "../commands/ClassifyDocumentCommand";
import {
  ContainsPiiEntitiesCommandInput,
  ContainsPiiEntitiesCommandOutput,
} from "../commands/ContainsPiiEntitiesCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import {
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "../commands/CreateDocumentClassifierCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import {
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "../commands/CreateEntityRecognizerCommand";
import { CreateFlywheelCommandInput, CreateFlywheelCommandOutput } from "../commands/CreateFlywheelCommand";
import {
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "../commands/DeleteDocumentClassifierCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "../commands/DeleteEntityRecognizerCommand";
import { DeleteFlywheelCommandInput, DeleteFlywheelCommandOutput } from "../commands/DeleteFlywheelCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeDocumentClassificationJobCommandInput,
  DescribeDocumentClassificationJobCommandOutput,
} from "../commands/DescribeDocumentClassificationJobCommand";
import {
  DescribeDocumentClassifierCommandInput,
  DescribeDocumentClassifierCommandOutput,
} from "../commands/DescribeDocumentClassifierCommand";
import {
  DescribeDominantLanguageDetectionJobCommandInput,
  DescribeDominantLanguageDetectionJobCommandOutput,
} from "../commands/DescribeDominantLanguageDetectionJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import {
  DescribeEntitiesDetectionJobCommandInput,
  DescribeEntitiesDetectionJobCommandOutput,
} from "../commands/DescribeEntitiesDetectionJobCommand";
import {
  DescribeEntityRecognizerCommandInput,
  DescribeEntityRecognizerCommandOutput,
} from "../commands/DescribeEntityRecognizerCommand";
import {
  DescribeEventsDetectionJobCommandInput,
  DescribeEventsDetectionJobCommandOutput,
} from "../commands/DescribeEventsDetectionJobCommand";
import { DescribeFlywheelCommandInput, DescribeFlywheelCommandOutput } from "../commands/DescribeFlywheelCommand";
import {
  DescribeFlywheelIterationCommandInput,
  DescribeFlywheelIterationCommandOutput,
} from "../commands/DescribeFlywheelIterationCommand";
import {
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
} from "../commands/DescribeKeyPhrasesDetectionJobCommand";
import {
  DescribePiiEntitiesDetectionJobCommandInput,
  DescribePiiEntitiesDetectionJobCommandOutput,
} from "../commands/DescribePiiEntitiesDetectionJobCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "../commands/DescribeResourcePolicyCommand";
import {
  DescribeSentimentDetectionJobCommandInput,
  DescribeSentimentDetectionJobCommandOutput,
} from "../commands/DescribeSentimentDetectionJobCommand";
import {
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
} from "../commands/DescribeTargetedSentimentDetectionJobCommand";
import {
  DescribeTopicsDetectionJobCommandInput,
  DescribeTopicsDetectionJobCommandOutput,
} from "../commands/DescribeTopicsDetectionJobCommand";
import {
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
} from "../commands/DetectDominantLanguageCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "../commands/DetectEntitiesCommand";
import { DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput } from "../commands/DetectKeyPhrasesCommand";
import { DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput } from "../commands/DetectPiiEntitiesCommand";
import { DetectSentimentCommandInput, DetectSentimentCommandOutput } from "../commands/DetectSentimentCommand";
import { DetectSyntaxCommandInput, DetectSyntaxCommandOutput } from "../commands/DetectSyntaxCommand";
import {
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
} from "../commands/DetectTargetedSentimentCommand";
import { ImportModelCommandInput, ImportModelCommandOutput } from "../commands/ImportModelCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "../commands/ListDocumentClassificationJobsCommand";
import {
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "../commands/ListDocumentClassifiersCommand";
import {
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "../commands/ListDocumentClassifierSummariesCommand";
import {
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "../commands/ListDominantLanguageDetectionJobsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import {
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "../commands/ListEntitiesDetectionJobsCommand";
import {
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "../commands/ListEntityRecognizersCommand";
import {
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "../commands/ListEntityRecognizerSummariesCommand";
import {
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput,
} from "../commands/ListEventsDetectionJobsCommand";
import {
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "../commands/ListFlywheelIterationHistoryCommand";
import { ListFlywheelsCommandInput, ListFlywheelsCommandOutput } from "../commands/ListFlywheelsCommand";
import {
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "../commands/ListKeyPhrasesDetectionJobsCommand";
import {
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
} from "../commands/ListPiiEntitiesDetectionJobsCommand";
import {
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "../commands/ListSentimentDetectionJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "../commands/ListTargetedSentimentDetectionJobsCommand";
import {
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "../commands/ListTopicsDetectionJobsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  StartDocumentClassificationJobCommandInput,
  StartDocumentClassificationJobCommandOutput,
} from "../commands/StartDocumentClassificationJobCommand";
import {
  StartDominantLanguageDetectionJobCommandInput,
  StartDominantLanguageDetectionJobCommandOutput,
} from "../commands/StartDominantLanguageDetectionJobCommand";
import {
  StartEntitiesDetectionJobCommandInput,
  StartEntitiesDetectionJobCommandOutput,
} from "../commands/StartEntitiesDetectionJobCommand";
import {
  StartEventsDetectionJobCommandInput,
  StartEventsDetectionJobCommandOutput,
} from "../commands/StartEventsDetectionJobCommand";
import {
  StartFlywheelIterationCommandInput,
  StartFlywheelIterationCommandOutput,
} from "../commands/StartFlywheelIterationCommand";
import {
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
} from "../commands/StartKeyPhrasesDetectionJobCommand";
import {
  StartPiiEntitiesDetectionJobCommandInput,
  StartPiiEntitiesDetectionJobCommandOutput,
} from "../commands/StartPiiEntitiesDetectionJobCommand";
import {
  StartSentimentDetectionJobCommandInput,
  StartSentimentDetectionJobCommandOutput,
} from "../commands/StartSentimentDetectionJobCommand";
import {
  StartTargetedSentimentDetectionJobCommandInput,
  StartTargetedSentimentDetectionJobCommandOutput,
} from "../commands/StartTargetedSentimentDetectionJobCommand";
import {
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
} from "../commands/StartTopicsDetectionJobCommand";
import {
  StopDominantLanguageDetectionJobCommandInput,
  StopDominantLanguageDetectionJobCommandOutput,
} from "../commands/StopDominantLanguageDetectionJobCommand";
import {
  StopEntitiesDetectionJobCommandInput,
  StopEntitiesDetectionJobCommandOutput,
} from "../commands/StopEntitiesDetectionJobCommand";
import {
  StopEventsDetectionJobCommandInput,
  StopEventsDetectionJobCommandOutput,
} from "../commands/StopEventsDetectionJobCommand";
import {
  StopKeyPhrasesDetectionJobCommandInput,
  StopKeyPhrasesDetectionJobCommandOutput,
} from "../commands/StopKeyPhrasesDetectionJobCommand";
import {
  StopPiiEntitiesDetectionJobCommandInput,
  StopPiiEntitiesDetectionJobCommandOutput,
} from "../commands/StopPiiEntitiesDetectionJobCommand";
import {
  StopSentimentDetectionJobCommandInput,
  StopSentimentDetectionJobCommandOutput,
} from "../commands/StopSentimentDetectionJobCommand";
import {
  StopTargetedSentimentDetectionJobCommandInput,
  StopTargetedSentimentDetectionJobCommandOutput,
} from "../commands/StopTargetedSentimentDetectionJobCommand";
import {
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
} from "../commands/StopTrainingDocumentClassifierCommand";
import {
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
} from "../commands/StopTrainingEntityRecognizerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import { UpdateFlywheelCommandInput, UpdateFlywheelCommandOutput } from "../commands/UpdateFlywheelCommand";
import { ComprehendServiceException as __BaseException } from "../models/ComprehendServiceException";
import {
  AugmentedManifestsListItem,
  BatchDetectDominantLanguageItemResult,
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageResponse,
  BatchDetectEntitiesItemResult,
  BatchDetectEntitiesRequest,
  BatchDetectEntitiesResponse,
  BatchDetectKeyPhrasesItemResult,
  BatchDetectKeyPhrasesRequest,
  BatchDetectKeyPhrasesResponse,
  BatchDetectSentimentItemResult,
  BatchDetectSentimentRequest,
  BatchDetectSentimentResponse,
  BatchDetectSyntaxItemResult,
  BatchDetectSyntaxRequest,
  BatchDetectSyntaxResponse,
  BatchDetectTargetedSentimentItemResult,
  BatchDetectTargetedSentimentRequest,
  BatchDetectTargetedSentimentResponse,
  BatchSizeLimitExceededException,
  Block,
  BoundingBox,
  ClassifierEvaluationMetrics,
  ClassifierMetadata,
  ClassifyDocumentRequest,
  ClassifyDocumentResponse,
  ContainsPiiEntitiesRequest,
  ContainsPiiEntitiesResponse,
  CreateDatasetRequest,
  CreateDocumentClassifierRequest,
  CreateEndpointRequest,
  CreateEntityRecognizerRequest,
  CreateFlywheelRequest,
  DataSecurityConfig,
  DatasetAugmentedManifestsListItem,
  DatasetDocumentClassifierInputDataConfig,
  DatasetEntityRecognizerAnnotations,
  DatasetEntityRecognizerDocuments,
  DatasetEntityRecognizerEntityList,
  DatasetEntityRecognizerInputDataConfig,
  DatasetFilter,
  DatasetInputDataConfig,
  DatasetProperties,
  DeleteDocumentClassifierRequest,
  DeleteEndpointRequest,
  DeleteEntityRecognizerRequest,
  DeleteFlywheelRequest,
  DeleteResourcePolicyRequest,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeDocumentClassificationJobRequest,
  DescribeDocumentClassificationJobResponse,
  DescribeDocumentClassifierRequest,
  DescribeDocumentClassifierResponse,
  DescribeDominantLanguageDetectionJobRequest,
  DescribeDominantLanguageDetectionJobResponse,
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEntitiesDetectionJobRequest,
  DescribeEntitiesDetectionJobResponse,
  DescribeEntityRecognizerRequest,
  DescribeEntityRecognizerResponse,
  DescribeEventsDetectionJobRequest,
  DescribeEventsDetectionJobResponse,
  DescribeFlywheelIterationRequest,
  DescribeFlywheelIterationResponse,
  DescribeFlywheelRequest,
  DescribeFlywheelResponse,
  DescribeKeyPhrasesDetectionJobRequest,
  DescribeKeyPhrasesDetectionJobResponse,
  DescribePiiEntitiesDetectionJobRequest,
  DescribePiiEntitiesDetectionJobResponse,
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeSentimentDetectionJobRequest,
  DescribeSentimentDetectionJobResponse,
  DescribeTargetedSentimentDetectionJobRequest,
  DescribeTargetedSentimentDetectionJobResponse,
  DescribeTopicsDetectionJobRequest,
  DescribeTopicsDetectionJobResponse,
  DetectDominantLanguageRequest,
  DetectDominantLanguageResponse,
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectKeyPhrasesRequest,
  DetectKeyPhrasesResponse,
  DetectPiiEntitiesRequest,
  DetectPiiEntitiesResponse,
  DetectSentimentRequest,
  DetectSentimentResponse,
  DetectSyntaxRequest,
  DetectSyntaxResponse,
  DetectTargetedSentimentRequest,
  DetectTargetedSentimentResponse,
  DocumentClass,
  DocumentClassificationConfig,
  DocumentClassificationJobFilter,
  DocumentClassificationJobProperties,
  DocumentClassifierDocuments,
  DocumentClassifierFilter,
  DocumentClassifierInputDataConfig,
  DocumentClassifierOutputDataConfig,
  DocumentClassifierProperties,
  DocumentClassifierSummary,
  DocumentLabel,
  DocumentReaderConfig,
  DocumentReadFeatureTypes,
  DominantLanguage,
  DominantLanguageDetectionJobFilter,
  DominantLanguageDetectionJobProperties,
  EndpointFilter,
  EndpointProperties,
  EntitiesDetectionJobFilter,
  EntitiesDetectionJobProperties,
  Entity,
  EntityLabel,
  EntityRecognitionConfig,
  EntityRecognizerAnnotations,
  EntityRecognizerDocuments,
  EntityRecognizerEntityList,
  EntityRecognizerEvaluationMetrics,
  EntityRecognizerFilter,
  EntityRecognizerInputDataConfig,
  EntityRecognizerMetadata,
  EntityRecognizerMetadataEntityTypesListItem,
  EntityRecognizerProperties,
  EntityRecognizerSummary,
  EntityTypesEvaluationMetrics,
  EntityTypesListItem,
  EventsDetectionJobFilter,
  EventsDetectionJobProperties,
  FlywheelFilter,
  FlywheelIterationFilter,
  FlywheelIterationProperties,
  FlywheelModelEvaluationMetrics,
  FlywheelProperties,
  FlywheelSummary,
  Geometry,
  ImportModelRequest,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
  InvalidRequestException,
  JobNotFoundException,
  KeyPhrase,
  KeyPhrasesDetectionJobFilter,
  KeyPhrasesDetectionJobProperties,
  KmsKeyValidationException,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDocumentClassificationJobsRequest,
  ListDocumentClassificationJobsResponse,
  ListDocumentClassifiersRequest,
  ListDocumentClassifiersResponse,
  ListDocumentClassifierSummariesRequest,
  ListDocumentClassifierSummariesResponse,
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEntitiesDetectionJobsRequest,
  ListEntitiesDetectionJobsResponse,
  ListEntityRecognizersRequest,
  ListEntityRecognizersResponse,
  ListEntityRecognizerSummariesRequest,
  ListEntityRecognizerSummariesResponse,
  ListEventsDetectionJobsRequest,
  ListEventsDetectionJobsResponse,
  ListFlywheelIterationHistoryRequest,
  ListFlywheelIterationHistoryResponse,
  ListFlywheelsRequest,
  ListFlywheelsResponse,
  ListKeyPhrasesDetectionJobsRequest,
  ListKeyPhrasesDetectionJobsResponse,
  ListPiiEntitiesDetectionJobsRequest,
  ListPiiEntitiesDetectionJobsResponse,
  ListSentimentDetectionJobsRequest,
  ListSentimentDetectionJobsResponse,
  ListTagsForResourceRequest,
  ListTargetedSentimentDetectionJobsRequest,
  ListTargetedSentimentDetectionJobsResponse,
  ListTopicsDetectionJobsRequest,
  ListTopicsDetectionJobsResponse,
  MentionSentiment,
  OutputDataConfig,
  PartOfSpeechTag,
  PiiEntitiesDetectionJobFilter,
  PiiEntitiesDetectionJobProperties,
  PiiEntity,
  PiiEntityType,
  Point,
  PutResourcePolicyRequest,
  RedactionConfig,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  SentimentDetectionJobFilter,
  SentimentDetectionJobProperties,
  SentimentScore,
  StartDocumentClassificationJobRequest,
  StartDominantLanguageDetectionJobRequest,
  StartEntitiesDetectionJobRequest,
  StartEventsDetectionJobRequest,
  StartFlywheelIterationRequest,
  StartKeyPhrasesDetectionJobRequest,
  StartPiiEntitiesDetectionJobRequest,
  StartSentimentDetectionJobRequest,
  StartTargetedSentimentDetectionJobRequest,
  StartTopicsDetectionJobRequest,
  StopDominantLanguageDetectionJobRequest,
  StopEntitiesDetectionJobRequest,
  StopEventsDetectionJobRequest,
  StopKeyPhrasesDetectionJobRequest,
  SyntaxToken,
  Tag,
  TargetedSentimentDetectionJobFilter,
  TargetedSentimentDetectionJobProperties,
  TargetedSentimentEntity,
  TargetedSentimentMention,
  TaskConfig,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  TooManyTagsException,
  TopicsDetectionJobFilter,
  TopicsDetectionJobProperties,
  UnsupportedLanguageException,
  VpcConfig,
} from "../models/models_0";
import {
  ConcurrentModificationException,
  StopPiiEntitiesDetectionJobRequest,
  StopSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobRequest,
  StopTrainingDocumentClassifierRequest,
  StopTrainingEntityRecognizerRequest,
  TagResourceRequest,
  TooManyTagKeysException,
  UntagResourceRequest,
  UpdateDataSecurityConfig,
  UpdateEndpointRequest,
  UpdateFlywheelRequest,
  UpdateFlywheelResponse,
} from "../models/models_1";

/**
 * serializeAws_json1_1BatchDetectDominantLanguageCommand
 */
export const se_BatchDetectDominantLanguageCommand = async (
  input: BatchDetectDominantLanguageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectDominantLanguage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDetectEntitiesCommand
 */
export const se_BatchDetectEntitiesCommand = async (
  input: BatchDetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDetectKeyPhrasesCommand
 */
export const se_BatchDetectKeyPhrasesCommand = async (
  input: BatchDetectKeyPhrasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectKeyPhrases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDetectSentimentCommand
 */
export const se_BatchDetectSentimentCommand = async (
  input: BatchDetectSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectSentiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDetectSyntaxCommand
 */
export const se_BatchDetectSyntaxCommand = async (
  input: BatchDetectSyntaxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectSyntax");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDetectTargetedSentimentCommand
 */
export const se_BatchDetectTargetedSentimentCommand = async (
  input: BatchDetectTargetedSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDetectTargetedSentiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ClassifyDocumentCommand
 */
export const se_ClassifyDocumentCommand = async (
  input: ClassifyDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ClassifyDocument");
  let body: any;
  body = JSON.stringify(se_ClassifyDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ContainsPiiEntitiesCommand
 */
export const se_ContainsPiiEntitiesCommand = async (
  input: ContainsPiiEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ContainsPiiEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataset");
  let body: any;
  body = JSON.stringify(se_CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDocumentClassifierCommand
 */
export const se_CreateDocumentClassifierCommand = async (
  input: CreateDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDocumentClassifier");
  let body: any;
  body = JSON.stringify(se_CreateDocumentClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpoint");
  let body: any;
  body = JSON.stringify(se_CreateEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEntityRecognizerCommand
 */
export const se_CreateEntityRecognizerCommand = async (
  input: CreateEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEntityRecognizer");
  let body: any;
  body = JSON.stringify(se_CreateEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFlywheelCommand
 */
export const se_CreateFlywheelCommand = async (
  input: CreateFlywheelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFlywheel");
  let body: any;
  body = JSON.stringify(se_CreateFlywheelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDocumentClassifierCommand
 */
export const se_DeleteDocumentClassifierCommand = async (
  input: DeleteDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDocumentClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEntityRecognizerCommand
 */
export const se_DeleteEntityRecognizerCommand = async (
  input: DeleteEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEntityRecognizer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFlywheelCommand
 */
export const se_DeleteFlywheelCommand = async (
  input: DeleteFlywheelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFlywheel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentClassificationJobCommand
 */
export const se_DescribeDocumentClassificationJobCommand = async (
  input: DescribeDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDocumentClassificationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDocumentClassifierCommand
 */
export const se_DescribeDocumentClassifierCommand = async (
  input: DescribeDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDocumentClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDominantLanguageDetectionJobCommand
 */
export const se_DescribeDominantLanguageDetectionJobCommand = async (
  input: DescribeDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDominantLanguageDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntitiesDetectionJobCommand
 */
export const se_DescribeEntitiesDetectionJobCommand = async (
  input: DescribeEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntityRecognizerCommand
 */
export const se_DescribeEntityRecognizerCommand = async (
  input: DescribeEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntityRecognizer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsDetectionJobCommand
 */
export const se_DescribeEventsDetectionJobCommand = async (
  input: DescribeEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventsDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFlywheelCommand
 */
export const se_DescribeFlywheelCommand = async (
  input: DescribeFlywheelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFlywheel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFlywheelIterationCommand
 */
export const se_DescribeFlywheelIterationCommand = async (
  input: DescribeFlywheelIterationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFlywheelIteration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand
 */
export const se_DescribeKeyPhrasesDetectionJobCommand = async (
  input: DescribeKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeKeyPhrasesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand
 */
export const se_DescribePiiEntitiesDetectionJobCommand = async (
  input: DescribePiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePiiEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourcePolicyCommand
 */
export const se_DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSentimentDetectionJobCommand
 */
export const se_DescribeSentimentDetectionJobCommand = async (
  input: DescribeSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand
 */
export const se_DescribeTargetedSentimentDetectionJobCommand = async (
  input: DescribeTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTargetedSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTopicsDetectionJobCommand
 */
export const se_DescribeTopicsDetectionJobCommand = async (
  input: DescribeTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTopicsDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectDominantLanguageCommand
 */
export const se_DetectDominantLanguageCommand = async (
  input: DetectDominantLanguageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectDominantLanguage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectEntitiesCommand
 */
export const se_DetectEntitiesCommand = async (
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectEntities");
  let body: any;
  body = JSON.stringify(se_DetectEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectKeyPhrasesCommand
 */
export const se_DetectKeyPhrasesCommand = async (
  input: DetectKeyPhrasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectKeyPhrases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectPiiEntitiesCommand
 */
export const se_DetectPiiEntitiesCommand = async (
  input: DetectPiiEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectPiiEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectSentimentCommand
 */
export const se_DetectSentimentCommand = async (
  input: DetectSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectSentiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectSyntaxCommand
 */
export const se_DetectSyntaxCommand = async (
  input: DetectSyntaxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectSyntax");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectTargetedSentimentCommand
 */
export const se_DetectTargetedSentimentCommand = async (
  input: DetectTargetedSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectTargetedSentiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportModelCommand
 */
export const se_ImportModelCommand = async (
  input: ImportModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasets");
  let body: any;
  body = JSON.stringify(se_ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentClassificationJobsCommand
 */
export const se_ListDocumentClassificationJobsCommand = async (
  input: ListDocumentClassificationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocumentClassificationJobs");
  let body: any;
  body = JSON.stringify(se_ListDocumentClassificationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentClassifiersCommand
 */
export const se_ListDocumentClassifiersCommand = async (
  input: ListDocumentClassifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocumentClassifiers");
  let body: any;
  body = JSON.stringify(se_ListDocumentClassifiersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDocumentClassifierSummariesCommand
 */
export const se_ListDocumentClassifierSummariesCommand = async (
  input: ListDocumentClassifierSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDocumentClassifierSummaries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDominantLanguageDetectionJobsCommand
 */
export const se_ListDominantLanguageDetectionJobsCommand = async (
  input: ListDominantLanguageDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDominantLanguageDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListDominantLanguageDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export const se_ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpoints");
  let body: any;
  body = JSON.stringify(se_ListEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntitiesDetectionJobsCommand
 */
export const se_ListEntitiesDetectionJobsCommand = async (
  input: ListEntitiesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntitiesDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListEntitiesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntityRecognizersCommand
 */
export const se_ListEntityRecognizersCommand = async (
  input: ListEntityRecognizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntityRecognizers");
  let body: any;
  body = JSON.stringify(se_ListEntityRecognizersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntityRecognizerSummariesCommand
 */
export const se_ListEntityRecognizerSummariesCommand = async (
  input: ListEntityRecognizerSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntityRecognizerSummaries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventsDetectionJobsCommand
 */
export const se_ListEventsDetectionJobsCommand = async (
  input: ListEventsDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventsDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListEventsDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFlywheelIterationHistoryCommand
 */
export const se_ListFlywheelIterationHistoryCommand = async (
  input: ListFlywheelIterationHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFlywheelIterationHistory");
  let body: any;
  body = JSON.stringify(se_ListFlywheelIterationHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFlywheelsCommand
 */
export const se_ListFlywheelsCommand = async (
  input: ListFlywheelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFlywheels");
  let body: any;
  body = JSON.stringify(se_ListFlywheelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand
 */
export const se_ListKeyPhrasesDetectionJobsCommand = async (
  input: ListKeyPhrasesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeyPhrasesDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListKeyPhrasesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand
 */
export const se_ListPiiEntitiesDetectionJobsCommand = async (
  input: ListPiiEntitiesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPiiEntitiesDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListPiiEntitiesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSentimentDetectionJobsCommand
 */
export const se_ListSentimentDetectionJobsCommand = async (
  input: ListSentimentDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSentimentDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListSentimentDetectionJobsRequest(input, context));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTargetedSentimentDetectionJobsCommand
 */
export const se_ListTargetedSentimentDetectionJobsCommand = async (
  input: ListTargetedSentimentDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTargetedSentimentDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListTargetedSentimentDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTopicsDetectionJobsCommand
 */
export const se_ListTopicsDetectionJobsCommand = async (
  input: ListTopicsDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTopicsDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListTopicsDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDocumentClassificationJobCommand
 */
export const se_StartDocumentClassificationJobCommand = async (
  input: StartDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDocumentClassificationJob");
  let body: any;
  body = JSON.stringify(se_StartDocumentClassificationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDominantLanguageDetectionJobCommand
 */
export const se_StartDominantLanguageDetectionJobCommand = async (
  input: StartDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDominantLanguageDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartDominantLanguageDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEntitiesDetectionJobCommand
 */
export const se_StartEntitiesDetectionJobCommand = async (
  input: StartEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEventsDetectionJobCommand
 */
export const se_StartEventsDetectionJobCommand = async (
  input: StartEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEventsDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartEventsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFlywheelIterationCommand
 */
export const se_StartFlywheelIterationCommand = async (
  input: StartFlywheelIterationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFlywheelIteration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartKeyPhrasesDetectionJobCommand
 */
export const se_StartKeyPhrasesDetectionJobCommand = async (
  input: StartKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartKeyPhrasesDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPiiEntitiesDetectionJobCommand
 */
export const se_StartPiiEntitiesDetectionJobCommand = async (
  input: StartPiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPiiEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartPiiEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSentimentDetectionJobCommand
 */
export const se_StartSentimentDetectionJobCommand = async (
  input: StartSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTargetedSentimentDetectionJobCommand
 */
export const se_StartTargetedSentimentDetectionJobCommand = async (
  input: StartTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTargetedSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartTargetedSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTopicsDetectionJobCommand
 */
export const se_StartTopicsDetectionJobCommand = async (
  input: StartTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTopicsDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartTopicsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDominantLanguageDetectionJobCommand
 */
export const se_StopDominantLanguageDetectionJobCommand = async (
  input: StopDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDominantLanguageDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEntitiesDetectionJobCommand
 */
export const se_StopEntitiesDetectionJobCommand = async (
  input: StopEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEventsDetectionJobCommand
 */
export const se_StopEventsDetectionJobCommand = async (
  input: StopEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEventsDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopKeyPhrasesDetectionJobCommand
 */
export const se_StopKeyPhrasesDetectionJobCommand = async (
  input: StopKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopKeyPhrasesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopPiiEntitiesDetectionJobCommand
 */
export const se_StopPiiEntitiesDetectionJobCommand = async (
  input: StopPiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopPiiEntitiesDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopSentimentDetectionJobCommand
 */
export const se_StopSentimentDetectionJobCommand = async (
  input: StopSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTargetedSentimentDetectionJobCommand
 */
export const se_StopTargetedSentimentDetectionJobCommand = async (
  input: StopTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTargetedSentimentDetectionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTrainingDocumentClassifierCommand
 */
export const se_StopTrainingDocumentClassifierCommand = async (
  input: StopTrainingDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTrainingDocumentClassifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTrainingEntityRecognizerCommand
 */
export const se_StopTrainingEntityRecognizerCommand = async (
  input: StopTrainingEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTrainingEntityRecognizer");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFlywheelCommand
 */
export const se_UpdateFlywheelCommand = async (
  input: UpdateFlywheelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFlywheel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageCommand
 */
export const de_BatchDetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectDominantLanguageResponse(data, context);
  const response: BatchDetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageCommandError
 */
const de_BatchDetectDominantLanguageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectDominantLanguageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesCommand
 */
export const de_BatchDetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectEntitiesResponse(data, context);
  const response: BatchDetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesCommandError
 */
const de_BatchDetectEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesCommand
 */
export const de_BatchDetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectKeyPhrasesResponse(data, context);
  const response: BatchDetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesCommandError
 */
const de_BatchDetectKeyPhrasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectKeyPhrasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDetectSentimentCommand
 */
export const de_BatchDetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectSentimentResponse(data, context);
  const response: BatchDetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectSentimentCommandError
 */
const de_BatchDetectSentimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSentimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxCommand
 */
export const de_BatchDetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSyntaxCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectSyntaxResponse(data, context);
  const response: BatchDetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxCommandError
 */
const de_BatchDetectSyntaxCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSyntaxCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentCommand
 */
export const de_BatchDetectTargetedSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectTargetedSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDetectTargetedSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDetectTargetedSentimentResponse(data, context);
  const response: BatchDetectTargetedSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentCommandError
 */
const de_BatchDetectTargetedSentimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectTargetedSentimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      throw await de_BatchSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ClassifyDocumentCommand
 */
export const de_ClassifyDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClassifyDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ClassifyDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClassifyDocumentResponse(data, context);
  const response: ClassifyDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ClassifyDocumentCommandError
 */
const de_ClassifyDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClassifyDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ContainsPiiEntitiesCommand
 */
export const de_ContainsPiiEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContainsPiiEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ContainsPiiEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ContainsPiiEntitiesResponse(data, context);
  const response: ContainsPiiEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ContainsPiiEntitiesCommandError
 */
const de_ContainsPiiEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContainsPiiEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDocumentClassifierCommand
 */
export const de_CreateDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDocumentClassifierCommandError
 */
const de_CreateDocumentClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointCommandError
 */
const de_CreateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEntityRecognizerCommand
 */
export const de_CreateEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEntityRecognizerCommandError
 */
const de_CreateEntityRecognizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityRecognizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFlywheelCommand
 */
export const de_CreateFlywheelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlywheelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFlywheelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFlywheelCommandError
 */
const de_CreateFlywheelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlywheelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDocumentClassifierCommand
 */
export const de_DeleteDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDocumentClassifierCommandError
 */
const de_DeleteDocumentClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEntityRecognizerCommand
 */
export const de_DeleteEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEntityRecognizerCommandError
 */
const de_DeleteEntityRecognizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityRecognizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFlywheelCommand
 */
export const de_DeleteFlywheelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlywheelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFlywheelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFlywheelCommandError
 */
const de_DeleteFlywheelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlywheelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDocumentClassificationJobCommand
 */
export const de_DescribeDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDocumentClassificationJobResponse(data, context);
  const response: DescribeDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassificationJobCommandError
 */
const de_DescribeDocumentClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDocumentClassifierCommand
 */
export const de_DescribeDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDocumentClassifierResponse(data, context);
  const response: DescribeDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassifierCommandError
 */
const de_DescribeDocumentClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand
 */
export const de_DescribeDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDominantLanguageDetectionJobResponse(data, context);
  const response: DescribeDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError
 */
const de_DescribeDominantLanguageDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDominantLanguageDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointResponse(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointCommandError
 */
const de_DescribeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionJobCommand
 */
export const de_DescribeEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEntitiesDetectionJobResponse(data, context);
  const response: DescribeEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError
 */
const de_DescribeEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEntityRecognizerCommand
 */
export const de_DescribeEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEntityRecognizerResponse(data, context);
  const response: DescribeEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEntityRecognizerCommandError
 */
const de_DescribeEntityRecognizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityRecognizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEventsDetectionJobCommand
 */
export const de_DescribeEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsDetectionJobResponse(data, context);
  const response: DescribeEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventsDetectionJobCommandError
 */
const de_DescribeEventsDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFlywheelCommand
 */
export const de_DescribeFlywheelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlywheelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFlywheelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFlywheelResponse(data, context);
  const response: DescribeFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFlywheelCommandError
 */
const de_DescribeFlywheelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlywheelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFlywheelIterationCommand
 */
export const de_DescribeFlywheelIterationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlywheelIterationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFlywheelIterationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFlywheelIterationResponse(data, context);
  const response: DescribeFlywheelIterationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFlywheelIterationCommandError
 */
const de_DescribeFlywheelIterationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlywheelIterationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand
 */
export const de_DescribeKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeKeyPhrasesDetectionJobResponse(data, context);
  const response: DescribeKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError
 */
const de_DescribeKeyPhrasesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyPhrasesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand
 */
export const de_DescribePiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePiiEntitiesDetectionJobResponse(data, context);
  const response: DescribePiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommandError
 */
const de_DescribePiiEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePiiEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyCommand
 */
export const de_DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyCommandError
 */
const de_DescribeResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSentimentDetectionJobCommand
 */
export const de_DescribeSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSentimentDetectionJobResponse(data, context);
  const response: DescribeSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSentimentDetectionJobCommandError
 */
const de_DescribeSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand
 */
export const de_DescribeTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetedSentimentDetectionJobResponse(data, context);
  const response: DescribeTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommandError
 */
const de_DescribeTargetedSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetedSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTopicsDetectionJobCommand
 */
export const de_DescribeTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTopicsDetectionJobResponse(data, context);
  const response: DescribeTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTopicsDetectionJobCommandError
 */
const de_DescribeTopicsDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicsDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectDominantLanguageCommand
 */
export const de_DetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectDominantLanguageResponse(data, context);
  const response: DetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectDominantLanguageCommandError
 */
const de_DetectDominantLanguageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDominantLanguageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectEntitiesCommand
 */
export const de_DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectEntitiesCommandError
 */
const de_DetectEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectKeyPhrasesCommand
 */
export const de_DetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectKeyPhrasesResponse(data, context);
  const response: DetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectKeyPhrasesCommandError
 */
const de_DetectKeyPhrasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectKeyPhrasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectPiiEntitiesCommand
 */
export const de_DetectPiiEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPiiEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectPiiEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectPiiEntitiesResponse(data, context);
  const response: DetectPiiEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectPiiEntitiesCommandError
 */
const de_DetectPiiEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPiiEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectSentimentCommand
 */
export const de_DetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectSentimentResponse(data, context);
  const response: DetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectSentimentCommandError
 */
const de_DetectSentimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSentimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectSyntaxCommand
 */
export const de_DetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSyntaxCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectSyntaxResponse(data, context);
  const response: DetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectSyntaxCommandError
 */
const de_DetectSyntaxCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSyntaxCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectTargetedSentimentCommand
 */
export const de_DetectTargetedSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTargetedSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectTargetedSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectTargetedSentimentResponse(data, context);
  const response: DetectTargetedSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectTargetedSentimentCommandError
 */
const de_DetectTargetedSentimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTargetedSentimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await de_UnsupportedLanguageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportModelCommand
 */
export const de_ImportModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportModelCommandError
 */
const de_ImportModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentClassificationJobsCommand
 */
export const de_ListDocumentClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassificationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentClassificationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentClassificationJobsResponse(data, context);
  const response: ListDocumentClassificationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDocumentClassificationJobsCommandError
 */
const de_ListDocumentClassificationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassificationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentClassifiersCommand
 */
export const de_ListDocumentClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifiersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentClassifiersResponse(data, context);
  const response: ListDocumentClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDocumentClassifiersCommandError
 */
const de_ListDocumentClassifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDocumentClassifierSummariesCommand
 */
export const de_ListDocumentClassifierSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifierSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDocumentClassifierSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDocumentClassifierSummariesResponse(data, context);
  const response: ListDocumentClassifierSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDocumentClassifierSummariesCommandError
 */
const de_ListDocumentClassifierSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifierSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand
 */
export const de_ListDominantLanguageDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDominantLanguageDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDominantLanguageDetectionJobsResponse(data, context);
  const response: ListDominantLanguageDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError
 */
const de_ListDominantLanguageDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEndpointsCommand
 */
export const de_ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsResponse(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointsCommandError
 */
const de_ListEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionJobsCommand
 */
export const de_ListEntitiesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntitiesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntitiesDetectionJobsResponse(data, context);
  const response: ListEntitiesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionJobsCommandError
 */
const de_ListEntitiesDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEntityRecognizersCommand
 */
export const de_ListEntityRecognizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntityRecognizersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntityRecognizersResponse(data, context);
  const response: ListEntityRecognizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEntityRecognizersCommandError
 */
const de_ListEntityRecognizersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEntityRecognizerSummariesCommand
 */
export const de_ListEntityRecognizerSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizerSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntityRecognizerSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntityRecognizerSummariesResponse(data, context);
  const response: ListEntityRecognizerSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEntityRecognizerSummariesCommandError
 */
const de_ListEntityRecognizerSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizerSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEventsDetectionJobsCommand
 */
export const de_ListEventsDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventsDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventsDetectionJobsResponse(data, context);
  const response: ListEventsDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEventsDetectionJobsCommandError
 */
const de_ListEventsDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFlywheelIterationHistoryCommand
 */
export const de_ListFlywheelIterationHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlywheelIterationHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFlywheelIterationHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFlywheelIterationHistoryResponse(data, context);
  const response: ListFlywheelIterationHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFlywheelIterationHistoryCommandError
 */
const de_ListFlywheelIterationHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlywheelIterationHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFlywheelsCommand
 */
export const de_ListFlywheelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlywheelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFlywheelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFlywheelsResponse(data, context);
  const response: ListFlywheelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFlywheelsCommandError
 */
const de_ListFlywheelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlywheelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand
 */
export const de_ListKeyPhrasesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListKeyPhrasesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListKeyPhrasesDetectionJobsResponse(data, context);
  const response: ListKeyPhrasesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError
 */
const de_ListKeyPhrasesDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand
 */
export const de_ListPiiEntitiesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPiiEntitiesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPiiEntitiesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPiiEntitiesDetectionJobsResponse(data, context);
  const response: ListPiiEntitiesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommandError
 */
const de_ListPiiEntitiesDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPiiEntitiesDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSentimentDetectionJobsCommand
 */
export const de_ListSentimentDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSentimentDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSentimentDetectionJobsResponse(data, context);
  const response: ListSentimentDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSentimentDetectionJobsCommandError
 */
const de_ListSentimentDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTargetedSentimentDetectionJobsCommand
 */
export const de_ListTargetedSentimentDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetedSentimentDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTargetedSentimentDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTargetedSentimentDetectionJobsResponse(data, context);
  const response: ListTargetedSentimentDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTargetedSentimentDetectionJobsCommandError
 */
const de_ListTargetedSentimentDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetedSentimentDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTopicsDetectionJobsCommand
 */
export const de_ListTopicsDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTopicsDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTopicsDetectionJobsResponse(data, context);
  const response: ListTopicsDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTopicsDetectionJobsCommandError
 */
const de_ListTopicsDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDocumentClassificationJobCommand
 */
export const de_StartDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDocumentClassificationJobCommandError
 */
const de_StartDocumentClassificationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentClassificationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDominantLanguageDetectionJobCommand
 */
export const de_StartDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError
 */
const de_StartDominantLanguageDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDominantLanguageDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartEntitiesDetectionJobCommand
 */
export const de_StartEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEntitiesDetectionJobCommandError
 */
const de_StartEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartEventsDetectionJobCommand
 */
export const de_StartEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEventsDetectionJobCommandError
 */
const de_StartEventsDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEventsDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartFlywheelIterationCommand
 */
export const de_StartFlywheelIterationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlywheelIterationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFlywheelIterationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartFlywheelIterationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartFlywheelIterationCommandError
 */
const de_StartFlywheelIterationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlywheelIterationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand
 */
export const de_StartKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError
 */
const de_StartKeyPhrasesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyPhrasesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartPiiEntitiesDetectionJobCommand
 */
export const de_StartPiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartPiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartPiiEntitiesDetectionJobCommandError
 */
const de_StartPiiEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPiiEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartSentimentDetectionJobCommand
 */
export const de_StartSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartSentimentDetectionJobCommandError
 */
const de_StartSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartTargetedSentimentDetectionJobCommand
 */
export const de_StartTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTargetedSentimentDetectionJobCommandError
 */
const de_StartTargetedSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTargetedSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartTopicsDetectionJobCommand
 */
export const de_StartTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTopicsDetectionJobCommandError
 */
const de_StartTopicsDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTopicsDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopDominantLanguageDetectionJobCommand
 */
export const de_StopDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError
 */
const de_StopDominantLanguageDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDominantLanguageDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopEntitiesDetectionJobCommand
 */
export const de_StopEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEntitiesDetectionJobCommandError
 */
const de_StopEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopEventsDetectionJobCommand
 */
export const de_StopEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEventsDetectionJobCommandError
 */
const de_StopEventsDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEventsDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand
 */
export const de_StopKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError
 */
const de_StopKeyPhrasesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyPhrasesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopPiiEntitiesDetectionJobCommand
 */
export const de_StopPiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopPiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopPiiEntitiesDetectionJobCommandError
 */
const de_StopPiiEntitiesDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPiiEntitiesDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopSentimentDetectionJobCommand
 */
export const de_StopSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopSentimentDetectionJobCommandError
 */
const de_StopSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTargetedSentimentDetectionJobCommand
 */
export const de_StopTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTargetedSentimentDetectionJobCommandError
 */
const de_StopTargetedSentimentDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTargetedSentimentDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTrainingDocumentClassifierCommand
 */
export const de_StopTrainingDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTrainingDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopTrainingDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTrainingDocumentClassifierCommandError
 */
const de_StopTrainingDocumentClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingDocumentClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTrainingEntityRecognizerCommand
 */
export const de_StopTrainingEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTrainingEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopTrainingEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTrainingEntityRecognizerCommandError
 */
const de_StopTrainingEntityRecognizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingEntityRecognizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagKeysException":
    case "com.amazonaws.comprehend#TooManyTagKeysException":
      throw await de_TooManyTagKeysExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointCommandError
 */
const de_UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFlywheelCommand
 */
export const de_UpdateFlywheelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlywheelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFlywheelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFlywheelResponse(data, context);
  const response: UpdateFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFlywheelCommandError
 */
const de_UpdateFlywheelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlywheelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await de_KmsKeyValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchSizeLimitExceededExceptionRes
 */
const de_BatchSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BatchSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
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
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilterExceptionRes
 */
const de_InvalidFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1JobNotFoundExceptionRes
 */
const de_JobNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new JobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KmsKeyValidationExceptionRes
 */
const de_KmsKeyValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsKeyValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceLimitExceededException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededExceptionRes
 */
const de_TextSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagKeysExceptionRes
 */
const de_TooManyTagKeysExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedLanguageExceptionRes
 */
const de_UnsupportedLanguageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguageException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedLanguageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AttributeNamesList omitted.

// se_AugmentedManifestsListItem omitted.

// se_BatchDetectDominantLanguageRequest omitted.

// se_BatchDetectEntitiesRequest omitted.

// se_BatchDetectKeyPhrasesRequest omitted.

// se_BatchDetectSentimentRequest omitted.

// se_BatchDetectSyntaxRequest omitted.

// se_BatchDetectTargetedSentimentRequest omitted.

/**
 * serializeAws_json1_1ClassifyDocumentRequest
 */
const se_ClassifyDocumentRequest = (input: ClassifyDocumentRequest, context: __SerdeContext): any => {
  return take(input, {
    Bytes: context.base64Encoder,
    DocumentReaderConfig: _json,
    EndpointArn: [],
    Text: [],
  });
};

// se_ContainsPiiEntitiesRequest omitted.

/**
 * serializeAws_json1_1CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DatasetName: [],
    DatasetType: [],
    Description: [],
    FlywheelArn: [],
    InputDataConfig: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateDocumentClassifierRequest
 */
const se_CreateDocumentClassifierRequest = (input: CreateDocumentClassifierRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DocumentClassifierName: [],
    InputDataConfig: _json,
    LanguageCode: [],
    Mode: [],
    ModelKmsKeyId: [],
    ModelPolicy: [],
    OutputDataConfig: _json,
    Tags: _json,
    VersionName: [],
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1CreateEndpointRequest
 */
const se_CreateEndpointRequest = (input: CreateEndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DesiredInferenceUnits: [],
    EndpointName: [],
    FlywheelArn: [],
    ModelArn: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateEntityRecognizerRequest
 */
const se_CreateEntityRecognizerRequest = (input: CreateEntityRecognizerRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    LanguageCode: [],
    ModelKmsKeyId: [],
    ModelPolicy: [],
    RecognizerName: [],
    Tags: _json,
    VersionName: [],
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1CreateFlywheelRequest
 */
const se_CreateFlywheelRequest = (input: CreateFlywheelRequest, context: __SerdeContext): any => {
  return take(input, {
    ActiveModelArn: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DataLakeS3Uri: [],
    DataSecurityConfig: _json,
    FlywheelName: [],
    ModelType: [],
    Tags: _json,
    TaskConfig: _json,
  });
};

// se_CustomerInputStringList omitted.

// se_DataSecurityConfig omitted.

// se_DatasetAugmentedManifestsList omitted.

// se_DatasetAugmentedManifestsListItem omitted.

// se_DatasetDocumentClassifierInputDataConfig omitted.

// se_DatasetEntityRecognizerAnnotations omitted.

// se_DatasetEntityRecognizerDocuments omitted.

// se_DatasetEntityRecognizerEntityList omitted.

// se_DatasetEntityRecognizerInputDataConfig omitted.

/**
 * serializeAws_json1_1DatasetFilter
 */
const se_DatasetFilter = (input: DatasetFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    DatasetType: [],
    Status: [],
  });
};

// se_DatasetInputDataConfig omitted.

// se_DeleteDocumentClassifierRequest omitted.

// se_DeleteEndpointRequest omitted.

// se_DeleteEntityRecognizerRequest omitted.

// se_DeleteFlywheelRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DescribeDatasetRequest omitted.

// se_DescribeDocumentClassificationJobRequest omitted.

// se_DescribeDocumentClassifierRequest omitted.

// se_DescribeDominantLanguageDetectionJobRequest omitted.

// se_DescribeEndpointRequest omitted.

// se_DescribeEntitiesDetectionJobRequest omitted.

// se_DescribeEntityRecognizerRequest omitted.

// se_DescribeEventsDetectionJobRequest omitted.

// se_DescribeFlywheelIterationRequest omitted.

// se_DescribeFlywheelRequest omitted.

// se_DescribeKeyPhrasesDetectionJobRequest omitted.

// se_DescribePiiEntitiesDetectionJobRequest omitted.

// se_DescribeResourcePolicyRequest omitted.

// se_DescribeSentimentDetectionJobRequest omitted.

// se_DescribeTargetedSentimentDetectionJobRequest omitted.

// se_DescribeTopicsDetectionJobRequest omitted.

// se_DetectDominantLanguageRequest omitted.

/**
 * serializeAws_json1_1DetectEntitiesRequest
 */
const se_DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return take(input, {
    Bytes: context.base64Encoder,
    DocumentReaderConfig: _json,
    EndpointArn: [],
    LanguageCode: [],
    Text: [],
  });
};

// se_DetectKeyPhrasesRequest omitted.

// se_DetectPiiEntitiesRequest omitted.

// se_DetectSentimentRequest omitted.

// se_DetectSyntaxRequest omitted.

// se_DetectTargetedSentimentRequest omitted.

// se_DocumentClassificationConfig omitted.

/**
 * serializeAws_json1_1DocumentClassificationJobFilter
 */
const se_DocumentClassificationJobFilter = (input: DocumentClassificationJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DocumentClassifierAugmentedManifestsList omitted.

// se_DocumentClassifierDocuments omitted.

/**
 * serializeAws_json1_1DocumentClassifierFilter
 */
const se_DocumentClassifierFilter = (input: DocumentClassifierFilter, context: __SerdeContext): any => {
  return take(input, {
    DocumentClassifierName: [],
    Status: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DocumentClassifierInputDataConfig omitted.

// se_DocumentClassifierOutputDataConfig omitted.

// se_DocumentReaderConfig omitted.

/**
 * serializeAws_json1_1DominantLanguageDetectionJobFilter
 */
const se_DominantLanguageDetectionJobFilter = (
  input: DominantLanguageDetectionJobFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1EndpointFilter
 */
const se_EndpointFilter = (input: EndpointFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    ModelArn: [],
    Status: [],
  });
};

/**
 * serializeAws_json1_1EntitiesDetectionJobFilter
 */
const se_EntitiesDetectionJobFilter = (input: EntitiesDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_EntityRecognitionConfig omitted.

// se_EntityRecognizerAnnotations omitted.

// se_EntityRecognizerAugmentedManifestsList omitted.

// se_EntityRecognizerDocuments omitted.

// se_EntityRecognizerEntityList omitted.

/**
 * serializeAws_json1_1EntityRecognizerFilter
 */
const se_EntityRecognizerFilter = (input: EntityRecognizerFilter, context: __SerdeContext): any => {
  return take(input, {
    RecognizerName: [],
    Status: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_EntityRecognizerInputDataConfig omitted.

// se_EntityTypesList omitted.

// se_EntityTypesListItem omitted.

/**
 * serializeAws_json1_1EventsDetectionJobFilter
 */
const se_EventsDetectionJobFilter = (input: EventsDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1FlywheelFilter
 */
const se_FlywheelFilter = (input: FlywheelFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    Status: [],
  });
};

/**
 * serializeAws_json1_1FlywheelIterationFilter
 */
const se_FlywheelIterationFilter = (input: FlywheelIterationFilter, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ImportModelRequest omitted.

// se_InputDataConfig omitted.

/**
 * serializeAws_json1_1KeyPhrasesDetectionJobFilter
 */
const se_KeyPhrasesDetectionJobFilter = (input: KeyPhrasesDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_LabelsList omitted.

/**
 * serializeAws_json1_1ListDatasetsRequest
 */
const se_ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_DatasetFilter(_, context),
    FlywheelArn: [],
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListDocumentClassificationJobsRequest
 */
const se_ListDocumentClassificationJobsRequest = (
  input: ListDocumentClassificationJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_DocumentClassificationJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListDocumentClassifiersRequest
 */
const se_ListDocumentClassifiersRequest = (input: ListDocumentClassifiersRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_DocumentClassifierFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListDocumentClassifierSummariesRequest omitted.

/**
 * serializeAws_json1_1ListDominantLanguageDetectionJobsRequest
 */
const se_ListDominantLanguageDetectionJobsRequest = (
  input: ListDominantLanguageDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_DominantLanguageDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListEndpointsRequest
 */
const se_ListEndpointsRequest = (input: ListEndpointsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_EndpointFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListEntitiesDetectionJobsRequest
 */
const se_ListEntitiesDetectionJobsRequest = (input: ListEntitiesDetectionJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_EntitiesDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListEntityRecognizersRequest
 */
const se_ListEntityRecognizersRequest = (input: ListEntityRecognizersRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_EntityRecognizerFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListEntityRecognizerSummariesRequest omitted.

/**
 * serializeAws_json1_1ListEventsDetectionJobsRequest
 */
const se_ListEventsDetectionJobsRequest = (input: ListEventsDetectionJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_EventsDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListFlywheelIterationHistoryRequest
 */
const se_ListFlywheelIterationHistoryRequest = (
  input: ListFlywheelIterationHistoryRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_FlywheelIterationFilter(_, context),
    FlywheelArn: [],
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListFlywheelsRequest
 */
const se_ListFlywheelsRequest = (input: ListFlywheelsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_FlywheelFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest
 */
const se_ListKeyPhrasesDetectionJobsRequest = (
  input: ListKeyPhrasesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_KeyPhrasesDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListOfDocumentReadFeatureTypes omitted.

// se_ListOfPiiEntityTypes omitted.

/**
 * serializeAws_json1_1ListPiiEntitiesDetectionJobsRequest
 */
const se_ListPiiEntitiesDetectionJobsRequest = (
  input: ListPiiEntitiesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_PiiEntitiesDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListSentimentDetectionJobsRequest
 */
const se_ListSentimentDetectionJobsRequest = (
  input: ListSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_SentimentDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListTagsForResourceRequest omitted.

/**
 * serializeAws_json1_1ListTargetedSentimentDetectionJobsRequest
 */
const se_ListTargetedSentimentDetectionJobsRequest = (
  input: ListTargetedSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_TargetedSentimentDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListTopicsDetectionJobsRequest
 */
const se_ListTopicsDetectionJobsRequest = (input: ListTopicsDetectionJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_TopicsDetectionJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_OutputDataConfig omitted.

/**
 * serializeAws_json1_1PiiEntitiesDetectionJobFilter
 */
const se_PiiEntitiesDetectionJobFilter = (input: PiiEntitiesDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_PutResourcePolicyRequest omitted.

// se_RedactionConfig omitted.

// se_SecurityGroupIds omitted.

/**
 * serializeAws_json1_1SentimentDetectionJobFilter
 */
const se_SentimentDetectionJobFilter = (input: SentimentDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1StartDocumentClassificationJobRequest
 */
const se_StartDocumentClassificationJobRequest = (
  input: StartDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DocumentClassifierArn: [],
    FlywheelArn: [],
    InputDataConfig: _json,
    JobName: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartDominantLanguageDetectionJobRequest
 */
const se_StartDominantLanguageDetectionJobRequest = (
  input: StartDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartEntitiesDetectionJobRequest
 */
const se_StartEntitiesDetectionJobRequest = (input: StartEntitiesDetectionJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    EntityRecognizerArn: [],
    FlywheelArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartEventsDetectionJobRequest
 */
const se_StartEventsDetectionJobRequest = (input: StartEventsDetectionJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    OutputDataConfig: _json,
    Tags: _json,
    TargetEventTypes: _json,
  });
};

// se_StartFlywheelIterationRequest omitted.

/**
 * serializeAws_json1_1StartKeyPhrasesDetectionJobRequest
 */
const se_StartKeyPhrasesDetectionJobRequest = (
  input: StartKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartPiiEntitiesDetectionJobRequest
 */
const se_StartPiiEntitiesDetectionJobRequest = (
  input: StartPiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    Mode: [],
    OutputDataConfig: _json,
    RedactionConfig: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1StartSentimentDetectionJobRequest
 */
const se_StartSentimentDetectionJobRequest = (
  input: StartSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartTargetedSentimentDetectionJobRequest
 */
const se_StartTargetedSentimentDetectionJobRequest = (
  input: StartTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    LanguageCode: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartTopicsDetectionJobRequest
 */
const se_StartTopicsDetectionJobRequest = (input: StartTopicsDetectionJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    NumberOfTopics: [],
    OutputDataConfig: _json,
    Tags: _json,
    VolumeKmsKeyId: [],
    VpcConfig: _json,
  });
};

// se_StopDominantLanguageDetectionJobRequest omitted.

// se_StopEntitiesDetectionJobRequest omitted.

// se_StopEventsDetectionJobRequest omitted.

// se_StopKeyPhrasesDetectionJobRequest omitted.

// se_StopPiiEntitiesDetectionJobRequest omitted.

// se_StopSentimentDetectionJobRequest omitted.

// se_StopTargetedSentimentDetectionJobRequest omitted.

// se_StopTrainingDocumentClassifierRequest omitted.

// se_StopTrainingEntityRecognizerRequest omitted.

// se_Subnets omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_1TargetedSentimentDetectionJobFilter
 */
const se_TargetedSentimentDetectionJobFilter = (
  input: TargetedSentimentDetectionJobFilter,
  context: __SerdeContext
): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_TargetEventTypes omitted.

// se_TaskConfig omitted.

/**
 * serializeAws_json1_1TopicsDetectionJobFilter
 */
const se_TopicsDetectionJobFilter = (input: TopicsDetectionJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateDataSecurityConfig omitted.

// se_UpdateEndpointRequest omitted.

// se_UpdateFlywheelRequest omitted.

// se_VpcConfig omitted.

// de_AttributeNamesList omitted.

// de_AugmentedManifestsListItem omitted.

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageItemResult
 */
const de_BatchDetectDominantLanguageItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult => {
  return take(output, {
    Index: __expectInt32,
    Languages: (_: any) => de_ListOfDominantLanguages(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageResponse
 */
const de_BatchDetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectDominantLanguageResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesItemResult
 */
const de_BatchDetectEntitiesItemResult = (output: any, context: __SerdeContext): BatchDetectEntitiesItemResult => {
  return take(output, {
    Entities: (_: any) => de_ListOfEntities(_, context),
    Index: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesResponse
 */
const de_BatchDetectEntitiesResponse = (output: any, context: __SerdeContext): BatchDetectEntitiesResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectEntitiesResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesItemResult
 */
const de_BatchDetectKeyPhrasesItemResult = (output: any, context: __SerdeContext): BatchDetectKeyPhrasesItemResult => {
  return take(output, {
    Index: __expectInt32,
    KeyPhrases: (_: any) => de_ListOfKeyPhrases(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesResponse
 */
const de_BatchDetectKeyPhrasesResponse = (output: any, context: __SerdeContext): BatchDetectKeyPhrasesResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectKeyPhrasesResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectSentimentItemResult
 */
const de_BatchDetectSentimentItemResult = (output: any, context: __SerdeContext): BatchDetectSentimentItemResult => {
  return take(output, {
    Index: __expectInt32,
    Sentiment: __expectString,
    SentimentScore: (_: any) => de_SentimentScore(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectSentimentResponse
 */
const de_BatchDetectSentimentResponse = (output: any, context: __SerdeContext): BatchDetectSentimentResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectSentimentResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxItemResult
 */
const de_BatchDetectSyntaxItemResult = (output: any, context: __SerdeContext): BatchDetectSyntaxItemResult => {
  return take(output, {
    Index: __expectInt32,
    SyntaxTokens: (_: any) => de_ListOfSyntaxTokens(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxResponse
 */
const de_BatchDetectSyntaxResponse = (output: any, context: __SerdeContext): BatchDetectSyntaxResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectSyntaxResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentItemResult
 */
const de_BatchDetectTargetedSentimentItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentItemResult => {
  return take(output, {
    Entities: (_: any) => de_ListOfTargetedSentimentEntities(_, context),
    Index: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentResponse
 */
const de_BatchDetectTargetedSentimentResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentResponse => {
  return take(output, {
    ErrorList: _json,
    ResultList: (_: any) => de_ListOfDetectTargetedSentimentResult(_, context),
  }) as any;
};

// de_BatchItemError omitted.

// de_BatchItemErrorList omitted.

// de_BatchSizeLimitExceededException omitted.

/**
 * deserializeAws_json1_1Block
 */
const de_Block = (output: any, context: __SerdeContext): Block => {
  return take(output, {
    BlockType: __expectString,
    Geometry: (_: any) => de_Geometry(_, context),
    Id: __expectString,
    Page: __expectInt32,
    Relationships: _json,
    Text: __expectString,
  }) as any;
};

// de_BlockReference omitted.

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return take(output, {
    Height: __limitedParseFloat32,
    Left: __limitedParseFloat32,
    Top: __limitedParseFloat32,
    Width: __limitedParseFloat32,
  }) as any;
};

// de_ChildBlock omitted.

/**
 * deserializeAws_json1_1ClassifierEvaluationMetrics
 */
const de_ClassifierEvaluationMetrics = (output: any, context: __SerdeContext): ClassifierEvaluationMetrics => {
  return take(output, {
    Accuracy: __limitedParseDouble,
    F1Score: __limitedParseDouble,
    HammingLoss: __limitedParseDouble,
    MicroF1Score: __limitedParseDouble,
    MicroPrecision: __limitedParseDouble,
    MicroRecall: __limitedParseDouble,
    Precision: __limitedParseDouble,
    Recall: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ClassifierMetadata
 */
const de_ClassifierMetadata = (output: any, context: __SerdeContext): ClassifierMetadata => {
  return take(output, {
    EvaluationMetrics: (_: any) => de_ClassifierEvaluationMetrics(_, context),
    NumberOfLabels: __expectInt32,
    NumberOfTestDocuments: __expectInt32,
    NumberOfTrainedDocuments: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ClassifyDocumentResponse
 */
const de_ClassifyDocumentResponse = (output: any, context: __SerdeContext): ClassifyDocumentResponse => {
  return take(output, {
    Classes: (_: any) => de_ListOfClasses(_, context),
    DocumentMetadata: _json,
    DocumentType: _json,
    Errors: _json,
    Labels: (_: any) => de_ListOfLabels(_, context),
    Warnings: _json,
  }) as any;
};

// de_ConcurrentModificationException omitted.

/**
 * deserializeAws_json1_1ContainsPiiEntitiesResponse
 */
const de_ContainsPiiEntitiesResponse = (output: any, context: __SerdeContext): ContainsPiiEntitiesResponse => {
  return take(output, {
    Labels: (_: any) => de_ListOfEntityLabels(_, context),
  }) as any;
};

// de_CreateDatasetResponse omitted.

// de_CreateDocumentClassifierResponse omitted.

// de_CreateEndpointResponse omitted.

// de_CreateEntityRecognizerResponse omitted.

// de_CreateFlywheelResponse omitted.

// de_DataSecurityConfig omitted.

/**
 * deserializeAws_json1_1DatasetProperties
 */
const de_DatasetProperties = (output: any, context: __SerdeContext): DatasetProperties => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetName: __expectString,
    DatasetS3Uri: __expectString,
    DatasetType: __expectString,
    Description: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    NumberOfDocuments: __expectLong,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetPropertiesList
 */
const de_DatasetPropertiesList = (output: any, context: __SerdeContext): DatasetProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetProperties(entry, context);
    });
  return retVal;
};

// de_DeleteDocumentClassifierResponse omitted.

// de_DeleteEndpointResponse omitted.

// de_DeleteEntityRecognizerResponse omitted.

// de_DeleteFlywheelResponse omitted.

// de_DeleteResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return take(output, {
    DatasetProperties: (_: any) => de_DatasetProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassificationJobResponse
 */
const de_DescribeDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassificationJobResponse => {
  return take(output, {
    DocumentClassificationJobProperties: (_: any) => de_DocumentClassificationJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassifierResponse
 */
const de_DescribeDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassifierResponse => {
  return take(output, {
    DocumentClassifierProperties: (_: any) => de_DocumentClassifierProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse
 */
const de_DescribeDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDominantLanguageDetectionJobResponse => {
  return take(output, {
    DominantLanguageDetectionJobProperties: (_: any) => de_DominantLanguageDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointResponse
 */
const de_DescribeEndpointResponse = (output: any, context: __SerdeContext): DescribeEndpointResponse => {
  return take(output, {
    EndpointProperties: (_: any) => de_EndpointProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionJobResponse
 */
const de_DescribeEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionJobResponse => {
  return take(output, {
    EntitiesDetectionJobProperties: (_: any) => de_EntitiesDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEntityRecognizerResponse
 */
const de_DescribeEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityRecognizerResponse => {
  return take(output, {
    EntityRecognizerProperties: (_: any) => de_EntityRecognizerProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventsDetectionJobResponse
 */
const de_DescribeEventsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsDetectionJobResponse => {
  return take(output, {
    EventsDetectionJobProperties: (_: any) => de_EventsDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFlywheelIterationResponse
 */
const de_DescribeFlywheelIterationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFlywheelIterationResponse => {
  return take(output, {
    FlywheelIterationProperties: (_: any) => de_FlywheelIterationProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFlywheelResponse
 */
const de_DescribeFlywheelResponse = (output: any, context: __SerdeContext): DescribeFlywheelResponse => {
  return take(output, {
    FlywheelProperties: (_: any) => de_FlywheelProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse
 */
const de_DescribeKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyPhrasesDetectionJobResponse => {
  return take(output, {
    KeyPhrasesDetectionJobProperties: (_: any) => de_KeyPhrasesDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePiiEntitiesDetectionJobResponse
 */
const de_DescribePiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePiiEntitiesDetectionJobResponse => {
  return take(output, {
    PiiEntitiesDetectionJobProperties: (_: any) => de_PiiEntitiesDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyResponse
 */
const de_DescribeResourcePolicyResponse = (output: any, context: __SerdeContext): DescribeResourcePolicyResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyRevisionId: __expectString,
    ResourcePolicy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSentimentDetectionJobResponse
 */
const de_DescribeSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSentimentDetectionJobResponse => {
  return take(output, {
    SentimentDetectionJobProperties: (_: any) => de_SentimentDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTargetedSentimentDetectionJobResponse
 */
const de_DescribeTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTargetedSentimentDetectionJobResponse => {
  return take(output, {
    TargetedSentimentDetectionJobProperties: (_: any) => de_TargetedSentimentDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTopicsDetectionJobResponse
 */
const de_DescribeTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTopicsDetectionJobResponse => {
  return take(output, {
    TopicsDetectionJobProperties: (_: any) => de_TopicsDetectionJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectDominantLanguageResponse
 */
const de_DetectDominantLanguageResponse = (output: any, context: __SerdeContext): DetectDominantLanguageResponse => {
  return take(output, {
    Languages: (_: any) => de_ListOfDominantLanguages(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesResponse
 */
const de_DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return take(output, {
    Blocks: (_: any) => de_ListOfBlocks(_, context),
    DocumentMetadata: _json,
    DocumentType: _json,
    Entities: (_: any) => de_ListOfEntities(_, context),
    Errors: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DetectKeyPhrasesResponse
 */
const de_DetectKeyPhrasesResponse = (output: any, context: __SerdeContext): DetectKeyPhrasesResponse => {
  return take(output, {
    KeyPhrases: (_: any) => de_ListOfKeyPhrases(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectPiiEntitiesResponse
 */
const de_DetectPiiEntitiesResponse = (output: any, context: __SerdeContext): DetectPiiEntitiesResponse => {
  return take(output, {
    Entities: (_: any) => de_ListOfPiiEntities(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectSentimentResponse
 */
const de_DetectSentimentResponse = (output: any, context: __SerdeContext): DetectSentimentResponse => {
  return take(output, {
    Sentiment: __expectString,
    SentimentScore: (_: any) => de_SentimentScore(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectSyntaxResponse
 */
const de_DetectSyntaxResponse = (output: any, context: __SerdeContext): DetectSyntaxResponse => {
  return take(output, {
    SyntaxTokens: (_: any) => de_ListOfSyntaxTokens(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectTargetedSentimentResponse
 */
const de_DetectTargetedSentimentResponse = (output: any, context: __SerdeContext): DetectTargetedSentimentResponse => {
  return take(output, {
    Entities: (_: any) => de_ListOfTargetedSentimentEntities(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentClass
 */
const de_DocumentClass = (output: any, context: __SerdeContext): DocumentClass => {
  return take(output, {
    Name: __expectString,
    Page: __expectInt32,
    Score: __limitedParseFloat32,
  }) as any;
};

// de_DocumentClassificationConfig omitted.

/**
 * deserializeAws_json1_1DocumentClassificationJobProperties
 */
const de_DocumentClassificationJobProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    DocumentClassifierArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FlywheelArn: __expectString,
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentClassificationJobPropertiesList
 */
const de_DocumentClassificationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentClassificationJobProperties(entry, context);
    });
  return retVal;
};

// de_DocumentClassifierAugmentedManifestsList omitted.

// de_DocumentClassifierDocuments omitted.

// de_DocumentClassifierInputDataConfig omitted.

// de_DocumentClassifierOutputDataConfig omitted.

/**
 * deserializeAws_json1_1DocumentClassifierProperties
 */
const de_DocumentClassifierProperties = (output: any, context: __SerdeContext): DocumentClassifierProperties => {
  return take(output, {
    ClassifierMetadata: (_: any) => de_ClassifierMetadata(_, context),
    DataAccessRoleArn: __expectString,
    DocumentClassifierArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FlywheelArn: __expectString,
    InputDataConfig: _json,
    LanguageCode: __expectString,
    Message: __expectString,
    Mode: __expectString,
    ModelKmsKeyId: __expectString,
    OutputDataConfig: _json,
    SourceModelArn: __expectString,
    Status: __expectString,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionName: __expectString,
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentClassifierPropertiesList
 */
const de_DocumentClassifierPropertiesList = (output: any, context: __SerdeContext): DocumentClassifierProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentClassifierProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentClassifierSummariesList
 */
const de_DocumentClassifierSummariesList = (output: any, context: __SerdeContext): DocumentClassifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentClassifierSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentClassifierSummary
 */
const de_DocumentClassifierSummary = (output: any, context: __SerdeContext): DocumentClassifierSummary => {
  return take(output, {
    DocumentClassifierName: __expectString,
    LatestVersionCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestVersionName: __expectString,
    LatestVersionStatus: __expectString,
    NumberOfVersions: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentLabel
 */
const de_DocumentLabel = (output: any, context: __SerdeContext): DocumentLabel => {
  return take(output, {
    Name: __expectString,
    Page: __expectInt32,
    Score: __limitedParseFloat32,
  }) as any;
};

// de_DocumentMetadata omitted.

// de_DocumentReaderConfig omitted.

// de_DocumentTypeListItem omitted.

/**
 * deserializeAws_json1_1DominantLanguage
 */
const de_DominantLanguage = (output: any, context: __SerdeContext): DominantLanguage => {
  return take(output, {
    LanguageCode: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1DominantLanguageDetectionJobProperties
 */
const de_DominantLanguageDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList
 */
const de_DominantLanguageDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DominantLanguageDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointProperties
 */
const de_EndpointProperties = (output: any, context: __SerdeContext): EndpointProperties => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentInferenceUnits: __expectInt32,
    DataAccessRoleArn: __expectString,
    DesiredDataAccessRoleArn: __expectString,
    DesiredInferenceUnits: __expectInt32,
    DesiredModelArn: __expectString,
    EndpointArn: __expectString,
    FlywheelArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    ModelArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointPropertiesList
 */
const de_EndpointPropertiesList = (output: any, context: __SerdeContext): EndpointProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitiesDetectionJobProperties
 */
const de_EntitiesDetectionJobProperties = (output: any, context: __SerdeContext): EntitiesDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EntityRecognizerArn: __expectString,
    FlywheelArn: __expectString,
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1EntitiesDetectionJobPropertiesList
 */
const de_EntitiesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): EntitiesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return take(output, {
    BeginOffset: __expectInt32,
    BlockReferences: _json,
    EndOffset: __expectInt32,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EntityLabel
 */
const de_EntityLabel = (output: any, context: __SerdeContext): EntityLabel => {
  return take(output, {
    Name: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

// de_EntityRecognitionConfig omitted.

// de_EntityRecognizerAnnotations omitted.

// de_EntityRecognizerAugmentedManifestsList omitted.

// de_EntityRecognizerDocuments omitted.

// de_EntityRecognizerEntityList omitted.

/**
 * deserializeAws_json1_1EntityRecognizerEvaluationMetrics
 */
const de_EntityRecognizerEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEvaluationMetrics => {
  return take(output, {
    F1Score: __limitedParseDouble,
    Precision: __limitedParseDouble,
    Recall: __limitedParseDouble,
  }) as any;
};

// de_EntityRecognizerInputDataConfig omitted.

/**
 * deserializeAws_json1_1EntityRecognizerMetadata
 */
const de_EntityRecognizerMetadata = (output: any, context: __SerdeContext): EntityRecognizerMetadata => {
  return take(output, {
    EntityTypes: (_: any) => de_EntityRecognizerMetadataEntityTypesList(_, context),
    EvaluationMetrics: (_: any) => de_EntityRecognizerEvaluationMetrics(_, context),
    NumberOfTestDocuments: __expectInt32,
    NumberOfTrainedDocuments: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList
 */
const de_EntityRecognizerMetadataEntityTypesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntityRecognizerMetadataEntityTypesListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem
 */
const de_EntityRecognizerMetadataEntityTypesListItem = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem => {
  return take(output, {
    EvaluationMetrics: (_: any) => de_EntityTypesEvaluationMetrics(_, context),
    NumberOfTrainMentions: __expectInt32,
    Type: __expectString,
  }) as any;
};

// de_EntityRecognizerOutputDataConfig omitted.

/**
 * deserializeAws_json1_1EntityRecognizerProperties
 */
const de_EntityRecognizerProperties = (output: any, context: __SerdeContext): EntityRecognizerProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EntityRecognizerArn: __expectString,
    FlywheelArn: __expectString,
    InputDataConfig: _json,
    LanguageCode: __expectString,
    Message: __expectString,
    ModelKmsKeyId: __expectString,
    OutputDataConfig: _json,
    RecognizerMetadata: (_: any) => de_EntityRecognizerMetadata(_, context),
    SourceModelArn: __expectString,
    Status: __expectString,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionName: __expectString,
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerPropertiesList
 */
const de_EntityRecognizerPropertiesList = (output: any, context: __SerdeContext): EntityRecognizerProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntityRecognizerProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityRecognizerSummariesList
 */
const de_EntityRecognizerSummariesList = (output: any, context: __SerdeContext): EntityRecognizerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntityRecognizerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityRecognizerSummary
 */
const de_EntityRecognizerSummary = (output: any, context: __SerdeContext): EntityRecognizerSummary => {
  return take(output, {
    LatestVersionCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestVersionName: __expectString,
    LatestVersionStatus: __expectString,
    NumberOfVersions: __expectInt32,
    RecognizerName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EntityTypesEvaluationMetrics
 */
const de_EntityTypesEvaluationMetrics = (output: any, context: __SerdeContext): EntityTypesEvaluationMetrics => {
  return take(output, {
    F1Score: __limitedParseDouble,
    Precision: __limitedParseDouble,
    Recall: __limitedParseDouble,
  }) as any;
};

// de_EntityTypesList omitted.

// de_EntityTypesListItem omitted.

// de_ErrorsListItem omitted.

/**
 * deserializeAws_json1_1EventsDetectionJobProperties
 */
const de_EventsDetectionJobProperties = (output: any, context: __SerdeContext): EventsDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TargetEventTypes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1EventsDetectionJobPropertiesList
 */
const de_EventsDetectionJobPropertiesList = (output: any, context: __SerdeContext): EventsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventsDetectionJobProperties(entry, context);
    });
  return retVal;
};

// de_ExtractedCharactersListItem omitted.

/**
 * deserializeAws_json1_1FlywheelIterationProperties
 */
const de_FlywheelIterationProperties = (output: any, context: __SerdeContext): FlywheelIterationProperties => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluatedModelArn: __expectString,
    EvaluatedModelMetrics: (_: any) => de_FlywheelModelEvaluationMetrics(_, context),
    EvaluationManifestS3Prefix: __expectString,
    FlywheelArn: __expectString,
    FlywheelIterationId: __expectString,
    Message: __expectString,
    Status: __expectString,
    TrainedModelArn: __expectString,
    TrainedModelMetrics: (_: any) => de_FlywheelModelEvaluationMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1FlywheelIterationPropertiesList
 */
const de_FlywheelIterationPropertiesList = (output: any, context: __SerdeContext): FlywheelIterationProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlywheelIterationProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlywheelModelEvaluationMetrics
 */
const de_FlywheelModelEvaluationMetrics = (output: any, context: __SerdeContext): FlywheelModelEvaluationMetrics => {
  return take(output, {
    AverageAccuracy: __limitedParseDouble,
    AverageF1Score: __limitedParseDouble,
    AveragePrecision: __limitedParseDouble,
    AverageRecall: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1FlywheelProperties
 */
const de_FlywheelProperties = (output: any, context: __SerdeContext): FlywheelProperties => {
  return take(output, {
    ActiveModelArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataAccessRoleArn: __expectString,
    DataLakeS3Uri: __expectString,
    DataSecurityConfig: _json,
    FlywheelArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestFlywheelIteration: __expectString,
    Message: __expectString,
    ModelType: __expectString,
    Status: __expectString,
    TaskConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1FlywheelSummary
 */
const de_FlywheelSummary = (output: any, context: __SerdeContext): FlywheelSummary => {
  return take(output, {
    ActiveModelArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataLakeS3Uri: __expectString,
    FlywheelArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestFlywheelIteration: __expectString,
    Message: __expectString,
    ModelType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FlywheelSummaryList
 */
const de_FlywheelSummaryList = (output: any, context: __SerdeContext): FlywheelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlywheelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Polygon: (_: any) => de_Polygon(_, context),
  }) as any;
};

// de_ImportModelResponse omitted.

// de_InputDataConfig omitted.

// de_InternalServerException omitted.

// de_InvalidFilterException omitted.

// de_InvalidRequestDetail omitted.

// de_InvalidRequestException omitted.

// de_JobNotFoundException omitted.

/**
 * deserializeAws_json1_1KeyPhrase
 */
const de_KeyPhrase = (output: any, context: __SerdeContext): KeyPhrase => {
  return take(output, {
    BeginOffset: __expectInt32,
    EndOffset: __expectInt32,
    Score: __limitedParseFloat32,
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1KeyPhrasesDetectionJobProperties
 */
const de_KeyPhrasesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList
 */
const de_KeyPhrasesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyPhrasesDetectionJobProperties(entry, context);
    });
  return retVal;
};

// de_KmsKeyValidationException omitted.

// de_LabelsList omitted.

/**
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return take(output, {
    DatasetPropertiesList: (_: any) => de_DatasetPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassificationJobsResponse
 */
const de_ListDocumentClassificationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassificationJobsResponse => {
  return take(output, {
    DocumentClassificationJobPropertiesList: (_: any) => de_DocumentClassificationJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassifiersResponse
 */
const de_ListDocumentClassifiersResponse = (output: any, context: __SerdeContext): ListDocumentClassifiersResponse => {
  return take(output, {
    DocumentClassifierPropertiesList: (_: any) => de_DocumentClassifierPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassifierSummariesResponse
 */
const de_ListDocumentClassifierSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassifierSummariesResponse => {
  return take(output, {
    DocumentClassifierSummariesList: (_: any) => de_DocumentClassifierSummariesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse
 */
const de_ListDominantLanguageDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDominantLanguageDetectionJobsResponse => {
  return take(output, {
    DominantLanguageDetectionJobPropertiesList: (_: any) => de_DominantLanguageDetectionJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointsResponse
 */
const de_ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return take(output, {
    EndpointPropertiesList: (_: any) => de_EndpointPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionJobsResponse
 */
const de_ListEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionJobsResponse => {
  return take(output, {
    EntitiesDetectionJobPropertiesList: (_: any) => de_EntitiesDetectionJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEntityRecognizersResponse
 */
const de_ListEntityRecognizersResponse = (output: any, context: __SerdeContext): ListEntityRecognizersResponse => {
  return take(output, {
    EntityRecognizerPropertiesList: (_: any) => de_EntityRecognizerPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEntityRecognizerSummariesResponse
 */
const de_ListEntityRecognizerSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListEntityRecognizerSummariesResponse => {
  return take(output, {
    EntityRecognizerSummariesList: (_: any) => de_EntityRecognizerSummariesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEventsDetectionJobsResponse
 */
const de_ListEventsDetectionJobsResponse = (output: any, context: __SerdeContext): ListEventsDetectionJobsResponse => {
  return take(output, {
    EventsDetectionJobPropertiesList: (_: any) => de_EventsDetectionJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFlywheelIterationHistoryResponse
 */
const de_ListFlywheelIterationHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListFlywheelIterationHistoryResponse => {
  return take(output, {
    FlywheelIterationPropertiesList: (_: any) => de_FlywheelIterationPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFlywheelsResponse
 */
const de_ListFlywheelsResponse = (output: any, context: __SerdeContext): ListFlywheelsResponse => {
  return take(output, {
    FlywheelSummaryList: (_: any) => de_FlywheelSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse
 */
const de_ListKeyPhrasesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPhrasesDetectionJobsResponse => {
  return take(output, {
    KeyPhrasesDetectionJobPropertiesList: (_: any) => de_KeyPhrasesDetectionJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListOfBlockReferences omitted.

/**
 * deserializeAws_json1_1ListOfBlocks
 */
const de_ListOfBlocks = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Block(entry, context);
    });
  return retVal;
};

// de_ListOfChildBlocks omitted.

/**
 * deserializeAws_json1_1ListOfClasses
 */
const de_ListOfClasses = (output: any, context: __SerdeContext): DocumentClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentClass(entry, context);
    });
  return retVal;
};

// de_ListOfDescriptiveMentionIndices omitted.

/**
 * deserializeAws_json1_1ListOfDetectDominantLanguageResult
 */
const de_ListOfDetectDominantLanguageResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectDominantLanguageItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDetectEntitiesResult
 */
const de_ListOfDetectEntitiesResult = (output: any, context: __SerdeContext): BatchDetectEntitiesItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectEntitiesItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDetectKeyPhrasesResult
 */
const de_ListOfDetectKeyPhrasesResult = (output: any, context: __SerdeContext): BatchDetectKeyPhrasesItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectKeyPhrasesItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDetectSentimentResult
 */
const de_ListOfDetectSentimentResult = (output: any, context: __SerdeContext): BatchDetectSentimentItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectSentimentItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDetectSyntaxResult
 */
const de_ListOfDetectSyntaxResult = (output: any, context: __SerdeContext): BatchDetectSyntaxItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectSyntaxItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDetectTargetedSentimentResult
 */
const de_ListOfDetectTargetedSentimentResult = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDetectTargetedSentimentItemResult(entry, context);
    });
  return retVal;
};

// de_ListOfDocumentReadFeatureTypes omitted.

// de_ListOfDocumentType omitted.

/**
 * deserializeAws_json1_1ListOfDominantLanguages
 */
const de_ListOfDominantLanguages = (output: any, context: __SerdeContext): DominantLanguage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DominantLanguage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEntities
 */
const de_ListOfEntities = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Entity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfEntityLabels
 */
const de_ListOfEntityLabels = (output: any, context: __SerdeContext): EntityLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntityLabel(entry, context);
    });
  return retVal;
};

// de_ListOfErrors omitted.

// de_ListOfExtractedCharacters omitted.

/**
 * deserializeAws_json1_1ListOfKeyPhrases
 */
const de_ListOfKeyPhrases = (output: any, context: __SerdeContext): KeyPhrase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyPhrase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfLabels
 */
const de_ListOfLabels = (output: any, context: __SerdeContext): DocumentLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfMentions
 */
const de_ListOfMentions = (output: any, context: __SerdeContext): TargetedSentimentMention[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetedSentimentMention(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfPiiEntities
 */
const de_ListOfPiiEntities = (output: any, context: __SerdeContext): PiiEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PiiEntity(entry, context);
    });
  return retVal;
};

// de_ListOfPiiEntityTypes omitted.

// de_ListOfRelationships omitted.

/**
 * deserializeAws_json1_1ListOfSyntaxTokens
 */
const de_ListOfSyntaxTokens = (output: any, context: __SerdeContext): SyntaxToken[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SyntaxToken(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfTargetedSentimentEntities
 */
const de_ListOfTargetedSentimentEntities = (output: any, context: __SerdeContext): TargetedSentimentEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetedSentimentEntity(entry, context);
    });
  return retVal;
};

// de_ListOfWarnings omitted.

/**
 * deserializeAws_json1_1ListPiiEntitiesDetectionJobsResponse
 */
const de_ListPiiEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPiiEntitiesDetectionJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    PiiEntitiesDetectionJobPropertiesList: (_: any) => de_PiiEntitiesDetectionJobPropertiesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSentimentDetectionJobsResponse
 */
const de_ListSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSentimentDetectionJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    SentimentDetectionJobPropertiesList: (_: any) => de_SentimentDetectionJobPropertiesList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListTargetedSentimentDetectionJobsResponse
 */
const de_ListTargetedSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTargetedSentimentDetectionJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TargetedSentimentDetectionJobPropertiesList: (_: any) => de_TargetedSentimentDetectionJobPropertiesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTopicsDetectionJobsResponse
 */
const de_ListTopicsDetectionJobsResponse = (output: any, context: __SerdeContext): ListTopicsDetectionJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TopicsDetectionJobPropertiesList: (_: any) => de_TopicsDetectionJobPropertiesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MentionSentiment
 */
const de_MentionSentiment = (output: any, context: __SerdeContext): MentionSentiment => {
  return take(output, {
    Sentiment: __expectString,
    SentimentScore: (_: any) => de_SentimentScore(_, context),
  }) as any;
};

// de_OutputDataConfig omitted.

/**
 * deserializeAws_json1_1PartOfSpeechTag
 */
const de_PartOfSpeechTag = (output: any, context: __SerdeContext): PartOfSpeechTag => {
  return take(output, {
    Score: __limitedParseFloat32,
    Tag: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PiiEntitiesDetectionJobProperties
 */
const de_PiiEntitiesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): PiiEntitiesDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    Mode: __expectString,
    OutputDataConfig: _json,
    RedactionConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PiiEntitiesDetectionJobPropertiesList
 */
const de_PiiEntitiesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): PiiEntitiesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PiiEntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PiiEntity
 */
const de_PiiEntity = (output: any, context: __SerdeContext): PiiEntity => {
  return take(output, {
    BeginOffset: __expectInt32,
    EndOffset: __expectInt32,
    Score: __limitedParseFloat32,
    Type: __expectString,
  }) as any;
};

// de_PiiOutputDataConfig omitted.

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return take(output, {
    X: __limitedParseFloat32,
    Y: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Point(entry, context);
    });
  return retVal;
};

// de_PutResourcePolicyResponse omitted.

// de_RedactionConfig omitted.

// de_RelationshipsListItem omitted.

// de_ResourceInUseException omitted.

// de_ResourceLimitExceededException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceUnavailableException omitted.

// de_SecurityGroupIds omitted.

/**
 * deserializeAws_json1_1SentimentDetectionJobProperties
 */
const de_SentimentDetectionJobProperties = (output: any, context: __SerdeContext): SentimentDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1SentimentDetectionJobPropertiesList
 */
const de_SentimentDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): SentimentDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SentimentScore
 */
const de_SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return take(output, {
    Mixed: __limitedParseFloat32,
    Negative: __limitedParseFloat32,
    Neutral: __limitedParseFloat32,
    Positive: __limitedParseFloat32,
  }) as any;
};

// de_StartDocumentClassificationJobResponse omitted.

// de_StartDominantLanguageDetectionJobResponse omitted.

// de_StartEntitiesDetectionJobResponse omitted.

// de_StartEventsDetectionJobResponse omitted.

// de_StartFlywheelIterationResponse omitted.

// de_StartKeyPhrasesDetectionJobResponse omitted.

// de_StartPiiEntitiesDetectionJobResponse omitted.

// de_StartSentimentDetectionJobResponse omitted.

// de_StartTargetedSentimentDetectionJobResponse omitted.

// de_StartTopicsDetectionJobResponse omitted.

// de_StopDominantLanguageDetectionJobResponse omitted.

// de_StopEntitiesDetectionJobResponse omitted.

// de_StopEventsDetectionJobResponse omitted.

// de_StopKeyPhrasesDetectionJobResponse omitted.

// de_StopPiiEntitiesDetectionJobResponse omitted.

// de_StopSentimentDetectionJobResponse omitted.

// de_StopTargetedSentimentDetectionJobResponse omitted.

// de_StopTrainingDocumentClassifierResponse omitted.

// de_StopTrainingEntityRecognizerResponse omitted.

// de_StringList omitted.

// de_Subnets omitted.

/**
 * deserializeAws_json1_1SyntaxToken
 */
const de_SyntaxToken = (output: any, context: __SerdeContext): SyntaxToken => {
  return take(output, {
    BeginOffset: __expectInt32,
    EndOffset: __expectInt32,
    PartOfSpeech: (_: any) => de_PartOfSpeechTag(_, context),
    Text: __expectString,
    TokenId: __expectInt32,
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1TargetedSentimentDetectionJobProperties
 */
const de_TargetedSentimentDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): TargetedSentimentDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    LanguageCode: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TargetedSentimentDetectionJobPropertiesList
 */
const de_TargetedSentimentDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TargetedSentimentDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetedSentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetedSentimentEntity
 */
const de_TargetedSentimentEntity = (output: any, context: __SerdeContext): TargetedSentimentEntity => {
  return take(output, {
    DescriptiveMentionIndex: _json,
    Mentions: (_: any) => de_ListOfMentions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TargetedSentimentMention
 */
const de_TargetedSentimentMention = (output: any, context: __SerdeContext): TargetedSentimentMention => {
  return take(output, {
    BeginOffset: __expectInt32,
    EndOffset: __expectInt32,
    GroupScore: __limitedParseFloat32,
    MentionSentiment: (_: any) => de_MentionSentiment(_, context),
    Score: __limitedParseFloat32,
    Text: __expectString,
    Type: __expectString,
  }) as any;
};

// de_TargetEventTypes omitted.

// de_TaskConfig omitted.

// de_TextSizeLimitExceededException omitted.

// de_TooManyRequestsException omitted.

// de_TooManyTagKeysException omitted.

// de_TooManyTagsException omitted.

/**
 * deserializeAws_json1_1TopicsDetectionJobProperties
 */
const de_TopicsDetectionJobProperties = (output: any, context: __SerdeContext): TopicsDetectionJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobArn: __expectString,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    Message: __expectString,
    NumberOfTopics: __expectInt32,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeKmsKeyId: __expectString,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TopicsDetectionJobPropertiesList
 */
const de_TopicsDetectionJobPropertiesList = (output: any, context: __SerdeContext): TopicsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicsDetectionJobProperties(entry, context);
    });
  return retVal;
};

// de_UnsupportedLanguageException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateEndpointResponse omitted.

/**
 * deserializeAws_json1_1UpdateFlywheelResponse
 */
const de_UpdateFlywheelResponse = (output: any, context: __SerdeContext): UpdateFlywheelResponse => {
  return take(output, {
    FlywheelProperties: (_: any) => de_FlywheelProperties(_, context),
  }) as any;
};

// de_VpcConfig omitted.

// de_WarningsListItem omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
    "x-amz-target": `Comprehend_20171127.${operation}`,
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
