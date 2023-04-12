// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  BatchItemError,
  BatchSizeLimitExceededException,
  Block,
  BlockReference,
  BoundingBox,
  ChildBlock,
  ClassifierEvaluationMetrics,
  ClassifierMetadata,
  ClassifyDocumentRequest,
  ClassifyDocumentResponse,
  ContainsPiiEntitiesRequest,
  ContainsPiiEntitiesResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDocumentClassifierRequest,
  CreateDocumentClassifierResponse,
  CreateEndpointRequest,
  CreateEndpointResponse,
  CreateEntityRecognizerRequest,
  CreateEntityRecognizerResponse,
  CreateFlywheelRequest,
  CreateFlywheelResponse,
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
  DeleteDocumentClassifierResponse,
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEntityRecognizerRequest,
  DeleteEntityRecognizerResponse,
  DeleteFlywheelRequest,
  DeleteFlywheelResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
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
  DocumentClassifierFilter,
  DocumentClassifierInputDataConfig,
  DocumentClassifierOutputDataConfig,
  DocumentClassifierProperties,
  DocumentClassifierSummary,
  DocumentLabel,
  DocumentMetadata,
  DocumentReaderConfig,
  DocumentReadFeatureTypes,
  DocumentTypeListItem,
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
  EntityRecognizerOutputDataConfig,
  EntityRecognizerProperties,
  EntityRecognizerSummary,
  EntityTypesEvaluationMetrics,
  EntityTypesListItem,
  ErrorsListItem,
  EventsDetectionJobFilter,
  EventsDetectionJobProperties,
  ExtractedCharactersListItem,
  FlywheelFilter,
  FlywheelIterationFilter,
  FlywheelIterationProperties,
  FlywheelModelEvaluationMetrics,
  FlywheelProperties,
  FlywheelSummary,
  Geometry,
  ImportModelRequest,
  ImportModelResponse,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
  InvalidRequestDetail,
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
  ListTagsForResourceResponse,
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
  PiiOutputDataConfig,
  Point,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  RedactionConfig,
  RelationshipsListItem,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  SentimentDetectionJobFilter,
  SentimentDetectionJobProperties,
  SentimentScore,
  StartDocumentClassificationJobRequest,
  StartDocumentClassificationJobResponse,
  StartDominantLanguageDetectionJobRequest,
  StartDominantLanguageDetectionJobResponse,
  StartEntitiesDetectionJobRequest,
  StartEntitiesDetectionJobResponse,
  StartEventsDetectionJobRequest,
  StartEventsDetectionJobResponse,
  StartFlywheelIterationRequest,
  StartFlywheelIterationResponse,
  StartKeyPhrasesDetectionJobRequest,
  StartKeyPhrasesDetectionJobResponse,
  StartPiiEntitiesDetectionJobRequest,
  StartPiiEntitiesDetectionJobResponse,
  StartSentimentDetectionJobRequest,
  StartSentimentDetectionJobResponse,
  StartTargetedSentimentDetectionJobRequest,
  StartTargetedSentimentDetectionJobResponse,
  StartTopicsDetectionJobRequest,
  StartTopicsDetectionJobResponse,
  StopDominantLanguageDetectionJobRequest,
  StopDominantLanguageDetectionJobResponse,
  StopEntitiesDetectionJobRequest,
  StopEntitiesDetectionJobResponse,
  StopEventsDetectionJobRequest,
  StopEventsDetectionJobResponse,
  StopKeyPhrasesDetectionJobRequest,
  StopKeyPhrasesDetectionJobResponse,
  StopPiiEntitiesDetectionJobRequest,
  StopPiiEntitiesDetectionJobResponse,
  StopSentimentDetectionJobRequest,
  StopSentimentDetectionJobResponse,
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
  StopTargetedSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobResponse,
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierResponse,
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerResponse,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagKeysException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDataSecurityConfig,
  UpdateEndpointRequest,
  UpdateEndpointResponse,
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
  body = JSON.stringify(se_BatchDetectDominantLanguageRequest(input, context));
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
  body = JSON.stringify(se_BatchDetectEntitiesRequest(input, context));
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
  body = JSON.stringify(se_BatchDetectKeyPhrasesRequest(input, context));
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
  body = JSON.stringify(se_BatchDetectSentimentRequest(input, context));
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
  body = JSON.stringify(se_BatchDetectSyntaxRequest(input, context));
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
  body = JSON.stringify(se_BatchDetectTargetedSentimentRequest(input, context));
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
  body = JSON.stringify(se_ContainsPiiEntitiesRequest(input, context));
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
  body = JSON.stringify(se_DeleteDocumentClassifierRequest(input, context));
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
  body = JSON.stringify(se_DeleteEndpointRequest(input, context));
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
  body = JSON.stringify(se_DeleteEntityRecognizerRequest(input, context));
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
  body = JSON.stringify(se_DeleteFlywheelRequest(input, context));
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
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
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
  body = JSON.stringify(se_DescribeDatasetRequest(input, context));
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
  body = JSON.stringify(se_DescribeDocumentClassificationJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeDocumentClassifierRequest(input, context));
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
  body = JSON.stringify(se_DescribeDominantLanguageDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeEndpointRequest(input, context));
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
  body = JSON.stringify(se_DescribeEntitiesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeEntityRecognizerRequest(input, context));
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
  body = JSON.stringify(se_DescribeEventsDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeFlywheelRequest(input, context));
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
  body = JSON.stringify(se_DescribeFlywheelIterationRequest(input, context));
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
  body = JSON.stringify(se_DescribeKeyPhrasesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribePiiEntitiesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeResourcePolicyRequest(input, context));
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
  body = JSON.stringify(se_DescribeSentimentDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeTargetedSentimentDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DescribeTopicsDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_DetectDominantLanguageRequest(input, context));
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
  body = JSON.stringify(se_DetectKeyPhrasesRequest(input, context));
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
  body = JSON.stringify(se_DetectPiiEntitiesRequest(input, context));
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
  body = JSON.stringify(se_DetectSentimentRequest(input, context));
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
  body = JSON.stringify(se_DetectSyntaxRequest(input, context));
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
  body = JSON.stringify(se_DetectTargetedSentimentRequest(input, context));
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
  body = JSON.stringify(se_ImportModelRequest(input, context));
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
  body = JSON.stringify(se_ListDocumentClassifierSummariesRequest(input, context));
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
  body = JSON.stringify(se_ListEntityRecognizerSummariesRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
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
  body = JSON.stringify(se_StartFlywheelIterationRequest(input, context));
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
  body = JSON.stringify(se_StopDominantLanguageDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopEntitiesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopEventsDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopKeyPhrasesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopPiiEntitiesDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopSentimentDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopTargetedSentimentDetectionJobRequest(input, context));
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
  body = JSON.stringify(se_StopTrainingDocumentClassifierRequest(input, context));
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
  body = JSON.stringify(se_StopTrainingEntityRecognizerRequest(input, context));
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
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpoint");
  let body: any;
  body = JSON.stringify(se_UpdateEndpointRequest(input, context));
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
  body = JSON.stringify(se_UpdateFlywheelRequest(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateDocumentClassifierResponse(data, context);
  const response: CreateDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateEntityRecognizerResponse(data, context);
  const response: CreateEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateFlywheelResponse(data, context);
  const response: CreateFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteDocumentClassifierResponse(data, context);
  const response: DeleteDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteEntityRecognizerResponse(data, context);
  const response: DeleteEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFlywheelResponse(data, context);
  const response: DeleteFlywheelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ImportModelResponse(data, context);
  const response: ImportModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  contents = de_ListTagsForResourceResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartDocumentClassificationJobResponse(data, context);
  const response: StartDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartDominantLanguageDetectionJobResponse(data, context);
  const response: StartDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartEntitiesDetectionJobResponse(data, context);
  const response: StartEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartEventsDetectionJobResponse(data, context);
  const response: StartEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartFlywheelIterationResponse(data, context);
  const response: StartFlywheelIterationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartKeyPhrasesDetectionJobResponse(data, context);
  const response: StartKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartPiiEntitiesDetectionJobResponse(data, context);
  const response: StartPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartSentimentDetectionJobResponse(data, context);
  const response: StartSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartTargetedSentimentDetectionJobResponse(data, context);
  const response: StartTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StartTopicsDetectionJobResponse(data, context);
  const response: StartTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
  contents = de_StopDominantLanguageDetectionJobResponse(data, context);
  const response: StopDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopEntitiesDetectionJobResponse(data, context);
  const response: StopEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopEventsDetectionJobResponse(data, context);
  const response: StopEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopKeyPhrasesDetectionJobResponse(data, context);
  const response: StopKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopPiiEntitiesDetectionJobResponse(data, context);
  const response: StopPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopSentimentDetectionJobResponse(data, context);
  const response: StopSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopTargetedSentimentDetectionJobResponse(data, context);
  const response: StopTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopTrainingDocumentClassifierResponse(data, context);
  const response: StopTrainingDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopTrainingEntityRecognizerResponse(data, context);
  const response: StopTrainingEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  contents = de_TagResourceResponse(data, context);
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
  contents = de_UntagResourceResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateEndpointResponse(data, context);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_BatchSizeLimitExceededException(body, context);
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
  const deserialized: any = de_ConcurrentModificationException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
  const deserialized: any = de_InvalidFilterException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_JobNotFoundException(body, context);
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
  const deserialized: any = de_KmsKeyValidationException(body, context);
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
  const deserialized: any = de_ResourceInUseException(body, context);
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
  const deserialized: any = de_ResourceLimitExceededException(body, context);
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
 * deserializeAws_json1_1TextSizeLimitExceededExceptionRes
 */
const de_TextSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TextSizeLimitExceededException(body, context);
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
  const deserialized: any = de_TooManyRequestsException(body, context);
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
  const deserialized: any = de_TooManyTagKeysException(body, context);
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
  const deserialized: any = de_TooManyTagsException(body, context);
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
  const deserialized: any = de_UnsupportedLanguageException(body, context);
  const exception = new UnsupportedLanguageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AttributeNamesList
 */
const se_AttributeNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AugmentedManifestsListItem
 */
const se_AugmentedManifestsListItem = (input: AugmentedManifestsListItem, context: __SerdeContext): any => {
  return {
    ...(input.AnnotationDataS3Uri != null && { AnnotationDataS3Uri: input.AnnotationDataS3Uri }),
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNamesList(input.AttributeNames, context) }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.SourceDocumentsS3Uri != null && { SourceDocumentsS3Uri: input.SourceDocumentsS3Uri }),
    ...(input.Split != null && { Split: input.Split }),
  };
};

/**
 * serializeAws_json1_1BatchDetectDominantLanguageRequest
 */
const se_BatchDetectDominantLanguageRequest = (
  input: BatchDetectDominantLanguageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDetectEntitiesRequest
 */
const se_BatchDetectEntitiesRequest = (input: BatchDetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDetectKeyPhrasesRequest
 */
const se_BatchDetectKeyPhrasesRequest = (input: BatchDetectKeyPhrasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDetectSentimentRequest
 */
const se_BatchDetectSentimentRequest = (input: BatchDetectSentimentRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDetectSyntaxRequest
 */
const se_BatchDetectSyntaxRequest = (input: BatchDetectSyntaxRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDetectTargetedSentimentRequest
 */
const se_BatchDetectTargetedSentimentRequest = (
  input: BatchDetectTargetedSentimentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: se_CustomerInputStringList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1ClassifyDocumentRequest
 */
const se_ClassifyDocumentRequest = (input: ClassifyDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: se_DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1ContainsPiiEntitiesRequest
 */
const se_ContainsPiiEntitiesRequest = (input: ContainsPiiEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: se_DatasetInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDocumentClassifierRequest
 */
const se_CreateDocumentClassifierRequest = (input: CreateDocumentClassifierRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierName != null && { DocumentClassifierName: input.DocumentClassifierName }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: se_DocumentClassifierInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelPolicy != null && { ModelPolicy: input.ModelPolicy }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: se_DocumentClassifierOutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEndpointRequest
 */
const se_CreateEndpointRequest = (input: CreateEndpointRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DesiredInferenceUnits != null && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.ModelArn != null && { ModelArn: input.ModelArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEntityRecognizerRequest
 */
const se_CreateEntityRecognizerRequest = (input: CreateEntityRecognizerRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: se_EntityRecognizerInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelPolicy != null && { ModelPolicy: input.ModelPolicy }),
    ...(input.RecognizerName != null && { RecognizerName: input.RecognizerName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFlywheelRequest
 */
const se_CreateFlywheelRequest = (input: CreateFlywheelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActiveModelArn != null && { ActiveModelArn: input.ActiveModelArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DataLakeS3Uri != null && { DataLakeS3Uri: input.DataLakeS3Uri }),
    ...(input.DataSecurityConfig != null && {
      DataSecurityConfig: se_DataSecurityConfig(input.DataSecurityConfig, context),
    }),
    ...(input.FlywheelName != null && { FlywheelName: input.FlywheelName }),
    ...(input.ModelType != null && { ModelType: input.ModelType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TaskConfig != null && { TaskConfig: se_TaskConfig(input.TaskConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CustomerInputStringList
 */
const se_CustomerInputStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DataSecurityConfig
 */
const se_DataSecurityConfig = (input: DataSecurityConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataLakeKmsKeyId != null && { DataLakeKmsKeyId: input.DataLakeKmsKeyId }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1DatasetAugmentedManifestsList
 */
const se_DatasetAugmentedManifestsList = (input: DatasetAugmentedManifestsListItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatasetAugmentedManifestsListItem(entry, context);
    });
};

/**
 * serializeAws_json1_1DatasetAugmentedManifestsListItem
 */
const se_DatasetAugmentedManifestsListItem = (
  input: DatasetAugmentedManifestsListItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnnotationDataS3Uri != null && { AnnotationDataS3Uri: input.AnnotationDataS3Uri }),
    ...(input.AttributeNames != null && { AttributeNames: se_AttributeNamesList(input.AttributeNames, context) }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.SourceDocumentsS3Uri != null && { SourceDocumentsS3Uri: input.SourceDocumentsS3Uri }),
  };
};

/**
 * serializeAws_json1_1DatasetDocumentClassifierInputDataConfig
 */
const se_DatasetDocumentClassifierInputDataConfig = (
  input: DatasetDocumentClassifierInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.LabelDelimiter != null && { LabelDelimiter: input.LabelDelimiter }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1DatasetEntityRecognizerAnnotations
 */
const se_DatasetEntityRecognizerAnnotations = (
  input: DatasetEntityRecognizerAnnotations,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1DatasetEntityRecognizerDocuments
 */
const se_DatasetEntityRecognizerDocuments = (input: DatasetEntityRecognizerDocuments, context: __SerdeContext): any => {
  return {
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1DatasetEntityRecognizerEntityList
 */
const se_DatasetEntityRecognizerEntityList = (
  input: DatasetEntityRecognizerEntityList,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1DatasetEntityRecognizerInputDataConfig
 */
const se_DatasetEntityRecognizerInputDataConfig = (
  input: DatasetEntityRecognizerInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Annotations != null && {
      Annotations: se_DatasetEntityRecognizerAnnotations(input.Annotations, context),
    }),
    ...(input.Documents != null && { Documents: se_DatasetEntityRecognizerDocuments(input.Documents, context) }),
    ...(input.EntityList != null && { EntityList: se_DatasetEntityRecognizerEntityList(input.EntityList, context) }),
  };
};

/**
 * serializeAws_json1_1DatasetFilter
 */
const se_DatasetFilter = (input: DatasetFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter != null && { CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000) }),
    ...(input.CreationTimeBefore != null && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1DatasetInputDataConfig
 */
const se_DatasetInputDataConfig = (input: DatasetInputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.AugmentedManifests != null && {
      AugmentedManifests: se_DatasetAugmentedManifestsList(input.AugmentedManifests, context),
    }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.DocumentClassifierInputDataConfig != null && {
      DocumentClassifierInputDataConfig: se_DatasetDocumentClassifierInputDataConfig(
        input.DocumentClassifierInputDataConfig,
        context
      ),
    }),
    ...(input.EntityRecognizerInputDataConfig != null && {
      EntityRecognizerInputDataConfig: se_DatasetEntityRecognizerInputDataConfig(
        input.EntityRecognizerInputDataConfig,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteDocumentClassifierRequest
 */
const se_DeleteDocumentClassifierRequest = (input: DeleteDocumentClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEndpointRequest
 */
const se_DeleteEndpointRequest = (input: DeleteEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEntityRecognizerRequest
 */
const se_DeleteEntityRecognizerRequest = (input: DeleteEntityRecognizerRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

/**
 * serializeAws_json1_1DeleteFlywheelRequest
 */
const se_DeleteFlywheelRequest = (input: DeleteFlywheelRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetRequest
 */
const se_DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDocumentClassificationJobRequest
 */
const se_DescribeDocumentClassificationJobRequest = (
  input: DescribeDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeDocumentClassifierRequest
 */
const se_DescribeDocumentClassifierRequest = (
  input: DescribeDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest
 */
const se_DescribeDominantLanguageDetectionJobRequest = (
  input: DescribeDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointRequest
 */
const se_DescribeEndpointRequest = (input: DescribeEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

/**
 * serializeAws_json1_1DescribeEntitiesDetectionJobRequest
 */
const se_DescribeEntitiesDetectionJobRequest = (
  input: DescribeEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeEntityRecognizerRequest
 */
const se_DescribeEntityRecognizerRequest = (input: DescribeEntityRecognizerRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsDetectionJobRequest
 */
const se_DescribeEventsDetectionJobRequest = (
  input: DescribeEventsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeFlywheelIterationRequest
 */
const se_DescribeFlywheelIterationRequest = (input: DescribeFlywheelIterationRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.FlywheelIterationId != null && { FlywheelIterationId: input.FlywheelIterationId }),
  };
};

/**
 * serializeAws_json1_1DescribeFlywheelRequest
 */
const se_DescribeFlywheelRequest = (input: DescribeFlywheelRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
  };
};

/**
 * serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest
 */
const se_DescribeKeyPhrasesDetectionJobRequest = (
  input: DescribeKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribePiiEntitiesDetectionJobRequest
 */
const se_DescribePiiEntitiesDetectionJobRequest = (
  input: DescribePiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeResourcePolicyRequest
 */
const se_DescribeResourcePolicyRequest = (input: DescribeResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeSentimentDetectionJobRequest
 */
const se_DescribeSentimentDetectionJobRequest = (
  input: DescribeSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeTargetedSentimentDetectionJobRequest
 */
const se_DescribeTargetedSentimentDetectionJobRequest = (
  input: DescribeTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeTopicsDetectionJobRequest
 */
const se_DescribeTopicsDetectionJobRequest = (
  input: DescribeTopicsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DetectDominantLanguageRequest
 */
const se_DetectDominantLanguageRequest = (input: DetectDominantLanguageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectEntitiesRequest
 */
const se_DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: se_DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectKeyPhrasesRequest
 */
const se_DetectKeyPhrasesRequest = (input: DetectKeyPhrasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectPiiEntitiesRequest
 */
const se_DetectPiiEntitiesRequest = (input: DetectPiiEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectSentimentRequest
 */
const se_DetectSentimentRequest = (input: DetectSentimentRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectSyntaxRequest
 */
const se_DetectSyntaxRequest = (input: DetectSyntaxRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectTargetedSentimentRequest
 */
const se_DetectTargetedSentimentRequest = (input: DetectTargetedSentimentRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DocumentClassificationConfig
 */
const se_DocumentClassificationConfig = (input: DocumentClassificationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Labels != null && { Labels: se_LabelsList(input.Labels, context) }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_json1_1DocumentClassificationJobFilter
 */
const se_DocumentClassificationJobFilter = (input: DocumentClassificationJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DocumentClassifierAugmentedManifestsList
 */
const se_DocumentClassifierAugmentedManifestsList = (
  input: AugmentedManifestsListItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AugmentedManifestsListItem(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentClassifierFilter
 */
const se_DocumentClassifierFilter = (input: DocumentClassifierFilter, context: __SerdeContext): any => {
  return {
    ...(input.DocumentClassifierName != null && { DocumentClassifierName: input.DocumentClassifierName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DocumentClassifierInputDataConfig
 */
const se_DocumentClassifierInputDataConfig = (
  input: DocumentClassifierInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AugmentedManifests != null && {
      AugmentedManifests: se_DocumentClassifierAugmentedManifestsList(input.AugmentedManifests, context),
    }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.LabelDelimiter != null && { LabelDelimiter: input.LabelDelimiter }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

/**
 * serializeAws_json1_1DocumentClassifierOutputDataConfig
 */
const se_DocumentClassifierOutputDataConfig = (
  input: DocumentClassifierOutputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.FlywheelStatsS3Prefix != null && { FlywheelStatsS3Prefix: input.FlywheelStatsS3Prefix }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1DocumentReaderConfig
 */
const se_DocumentReaderConfig = (input: DocumentReaderConfig, context: __SerdeContext): any => {
  return {
    ...(input.DocumentReadAction != null && { DocumentReadAction: input.DocumentReadAction }),
    ...(input.DocumentReadMode != null && { DocumentReadMode: input.DocumentReadMode }),
    ...(input.FeatureTypes != null && { FeatureTypes: se_ListOfDocumentReadFeatureTypes(input.FeatureTypes, context) }),
  };
};

/**
 * serializeAws_json1_1DominantLanguageDetectionJobFilter
 */
const se_DominantLanguageDetectionJobFilter = (
  input: DominantLanguageDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1EndpointFilter
 */
const se_EndpointFilter = (input: EndpointFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter != null && { CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000) }),
    ...(input.CreationTimeBefore != null && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
    ...(input.ModelArn != null && { ModelArn: input.ModelArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1EntitiesDetectionJobFilter
 */
const se_EntitiesDetectionJobFilter = (input: EntitiesDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1EntityRecognitionConfig
 */
const se_EntityRecognitionConfig = (input: EntityRecognitionConfig, context: __SerdeContext): any => {
  return {
    ...(input.EntityTypes != null && { EntityTypes: se_EntityTypesList(input.EntityTypes, context) }),
  };
};

/**
 * serializeAws_json1_1EntityRecognizerAnnotations
 */
const se_EntityRecognizerAnnotations = (input: EntityRecognizerAnnotations, context: __SerdeContext): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

/**
 * serializeAws_json1_1EntityRecognizerAugmentedManifestsList
 */
const se_EntityRecognizerAugmentedManifestsList = (
  input: AugmentedManifestsListItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AugmentedManifestsListItem(entry, context);
    });
};

/**
 * serializeAws_json1_1EntityRecognizerDocuments
 */
const se_EntityRecognizerDocuments = (input: EntityRecognizerDocuments, context: __SerdeContext): any => {
  return {
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

/**
 * serializeAws_json1_1EntityRecognizerEntityList
 */
const se_EntityRecognizerEntityList = (input: EntityRecognizerEntityList, context: __SerdeContext): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1EntityRecognizerFilter
 */
const se_EntityRecognizerFilter = (input: EntityRecognizerFilter, context: __SerdeContext): any => {
  return {
    ...(input.RecognizerName != null && { RecognizerName: input.RecognizerName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1EntityRecognizerInputDataConfig
 */
const se_EntityRecognizerInputDataConfig = (input: EntityRecognizerInputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.Annotations != null && { Annotations: se_EntityRecognizerAnnotations(input.Annotations, context) }),
    ...(input.AugmentedManifests != null && {
      AugmentedManifests: se_EntityRecognizerAugmentedManifestsList(input.AugmentedManifests, context),
    }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.Documents != null && { Documents: se_EntityRecognizerDocuments(input.Documents, context) }),
    ...(input.EntityList != null && { EntityList: se_EntityRecognizerEntityList(input.EntityList, context) }),
    ...(input.EntityTypes != null && { EntityTypes: se_EntityTypesList(input.EntityTypes, context) }),
  };
};

/**
 * serializeAws_json1_1EntityTypesList
 */
const se_EntityTypesList = (input: EntityTypesListItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityTypesListItem(entry, context);
    });
};

/**
 * serializeAws_json1_1EntityTypesListItem
 */
const se_EntityTypesListItem = (input: EntityTypesListItem, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1EventsDetectionJobFilter
 */
const se_EventsDetectionJobFilter = (input: EventsDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1FlywheelFilter
 */
const se_FlywheelFilter = (input: FlywheelFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter != null && { CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000) }),
    ...(input.CreationTimeBefore != null && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1FlywheelIterationFilter
 */
const se_FlywheelIterationFilter = (input: FlywheelIterationFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter != null && { CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000) }),
    ...(input.CreationTimeBefore != null && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_1ImportModelRequest
 */
const se_ImportModelRequest = (input: ImportModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.SourceModelArn != null && { SourceModelArn: input.SourceModelArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: se_DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1KeyPhrasesDetectionJobFilter
 */
const se_KeyPhrasesDetectionJobFilter = (input: KeyPhrasesDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1LabelsList
 */
const se_LabelsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListDatasetsRequest
 */
const se_ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_DatasetFilter(input.Filter, context) }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentClassificationJobsRequest
 */
const se_ListDocumentClassificationJobsRequest = (
  input: ListDocumentClassificationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_DocumentClassificationJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentClassifiersRequest
 */
const se_ListDocumentClassifiersRequest = (input: ListDocumentClassifiersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_DocumentClassifierFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDocumentClassifierSummariesRequest
 */
const se_ListDocumentClassifierSummariesRequest = (
  input: ListDocumentClassifierSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDominantLanguageDetectionJobsRequest
 */
const se_ListDominantLanguageDetectionJobsRequest = (
  input: ListDominantLanguageDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_DominantLanguageDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEndpointsRequest
 */
const se_ListEndpointsRequest = (input: ListEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_EndpointFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEntitiesDetectionJobsRequest
 */
const se_ListEntitiesDetectionJobsRequest = (input: ListEntitiesDetectionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_EntitiesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEntityRecognizersRequest
 */
const se_ListEntityRecognizersRequest = (input: ListEntityRecognizersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_EntityRecognizerFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEntityRecognizerSummariesRequest
 */
const se_ListEntityRecognizerSummariesRequest = (
  input: ListEntityRecognizerSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventsDetectionJobsRequest
 */
const se_ListEventsDetectionJobsRequest = (input: ListEventsDetectionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_EventsDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFlywheelIterationHistoryRequest
 */
const se_ListFlywheelIterationHistoryRequest = (
  input: ListFlywheelIterationHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_FlywheelIterationFilter(input.Filter, context) }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFlywheelsRequest
 */
const se_ListFlywheelsRequest = (input: ListFlywheelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_FlywheelFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest
 */
const se_ListKeyPhrasesDetectionJobsRequest = (
  input: ListKeyPhrasesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_KeyPhrasesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListOfDocumentReadFeatureTypes
 */
const se_ListOfDocumentReadFeatureTypes = (
  input: (DocumentReadFeatureTypes | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListOfPiiEntityTypes
 */
const se_ListOfPiiEntityTypes = (input: (PiiEntityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListPiiEntitiesDetectionJobsRequest
 */
const se_ListPiiEntitiesDetectionJobsRequest = (
  input: ListPiiEntitiesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_PiiEntitiesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSentimentDetectionJobsRequest
 */
const se_ListSentimentDetectionJobsRequest = (
  input: ListSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_SentimentDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTargetedSentimentDetectionJobsRequest
 */
const se_ListTargetedSentimentDetectionJobsRequest = (
  input: ListTargetedSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_TargetedSentimentDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTopicsDetectionJobsRequest
 */
const se_ListTopicsDetectionJobsRequest = (input: ListTopicsDetectionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_TopicsDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OutputDataConfig
 */
const se_OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1PiiEntitiesDetectionJobFilter
 */
const se_PiiEntitiesDetectionJobFilter = (input: PiiEntitiesDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourcePolicy != null && { ResourcePolicy: input.ResourcePolicy }),
  };
};

/**
 * serializeAws_json1_1RedactionConfig
 */
const se_RedactionConfig = (input: RedactionConfig, context: __SerdeContext): any => {
  return {
    ...(input.MaskCharacter != null && { MaskCharacter: input.MaskCharacter }),
    ...(input.MaskMode != null && { MaskMode: input.MaskMode }),
    ...(input.PiiEntityTypes != null && { PiiEntityTypes: se_ListOfPiiEntityTypes(input.PiiEntityTypes, context) }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SentimentDetectionJobFilter
 */
const se_SentimentDetectionJobFilter = (input: SentimentDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1StartDocumentClassificationJobRequest
 */
const se_StartDocumentClassificationJobRequest = (
  input: StartDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartDominantLanguageDetectionJobRequest
 */
const se_StartDominantLanguageDetectionJobRequest = (
  input: StartDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartEntitiesDetectionJobRequest
 */
const se_StartEntitiesDetectionJobRequest = (input: StartEntitiesDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartEventsDetectionJobRequest
 */
const se_StartEventsDetectionJobRequest = (input: StartEventsDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetEventTypes != null && { TargetEventTypes: se_TargetEventTypes(input.TargetEventTypes, context) }),
  };
};

/**
 * serializeAws_json1_1StartFlywheelIterationRequest
 */
const se_StartFlywheelIterationRequest = (input: StartFlywheelIterationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
  };
};

/**
 * serializeAws_json1_1StartKeyPhrasesDetectionJobRequest
 */
const se_StartKeyPhrasesDetectionJobRequest = (
  input: StartKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartPiiEntitiesDetectionJobRequest
 */
const se_StartPiiEntitiesDetectionJobRequest = (
  input: StartPiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.RedactionConfig != null && { RedactionConfig: se_RedactionConfig(input.RedactionConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1StartSentimentDetectionJobRequest
 */
const se_StartSentimentDetectionJobRequest = (
  input: StartSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartTargetedSentimentDetectionJobRequest
 */
const se_StartTargetedSentimentDetectionJobRequest = (
  input: StartTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartTopicsDetectionJobRequest
 */
const se_StartTopicsDetectionJobRequest = (input: StartTopicsDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.NumberOfTopics != null && { NumberOfTopics: input.NumberOfTopics }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StopDominantLanguageDetectionJobRequest
 */
const se_StopDominantLanguageDetectionJobRequest = (
  input: StopDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopEntitiesDetectionJobRequest
 */
const se_StopEntitiesDetectionJobRequest = (input: StopEntitiesDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopEventsDetectionJobRequest
 */
const se_StopEventsDetectionJobRequest = (input: StopEventsDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopKeyPhrasesDetectionJobRequest
 */
const se_StopKeyPhrasesDetectionJobRequest = (
  input: StopKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopPiiEntitiesDetectionJobRequest
 */
const se_StopPiiEntitiesDetectionJobRequest = (
  input: StopPiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopSentimentDetectionJobRequest
 */
const se_StopSentimentDetectionJobRequest = (input: StopSentimentDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopTargetedSentimentDetectionJobRequest
 */
const se_StopTargetedSentimentDetectionJobRequest = (
  input: StopTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopTrainingDocumentClassifierRequest
 */
const se_StopTrainingDocumentClassifierRequest = (
  input: StopTrainingDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

/**
 * serializeAws_json1_1StopTrainingEntityRecognizerRequest
 */
const se_StopTrainingEntityRecognizerRequest = (
  input: StopTrainingEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

/**
 * serializeAws_json1_1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
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
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetedSentimentDetectionJobFilter
 */
const se_TargetedSentimentDetectionJobFilter = (
  input: TargetedSentimentDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1TargetEventTypes
 */
const se_TargetEventTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TaskConfig
 */
const se_TaskConfig = (input: TaskConfig, context: __SerdeContext): any => {
  return {
    ...(input.DocumentClassificationConfig != null && {
      DocumentClassificationConfig: se_DocumentClassificationConfig(input.DocumentClassificationConfig, context),
    }),
    ...(input.EntityRecognitionConfig != null && {
      EntityRecognitionConfig: se_EntityRecognitionConfig(input.EntityRecognitionConfig, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
  };
};

/**
 * serializeAws_json1_1TopicsDetectionJobFilter
 */
const se_TopicsDetectionJobFilter = (input: TopicsDetectionJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDataSecurityConfig
 */
const se_UpdateDataSecurityConfig = (input: UpdateDataSecurityConfig, context: __SerdeContext): any => {
  return {
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateEndpointRequest
 */
const se_UpdateEndpointRequest = (input: UpdateEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.DesiredDataAccessRoleArn != null && { DesiredDataAccessRoleArn: input.DesiredDataAccessRoleArn }),
    ...(input.DesiredInferenceUnits != null && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.DesiredModelArn != null && { DesiredModelArn: input.DesiredModelArn }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
  };
};

/**
 * serializeAws_json1_1UpdateFlywheelRequest
 */
const se_UpdateFlywheelRequest = (input: UpdateFlywheelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActiveModelArn != null && { ActiveModelArn: input.ActiveModelArn }),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DataSecurityConfig != null && {
      DataSecurityConfig: se_UpdateDataSecurityConfig(input.DataSecurityConfig, context),
    }),
    ...(input.FlywheelArn != null && { FlywheelArn: input.FlywheelArn }),
  };
};

/**
 * serializeAws_json1_1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.Subnets != null && { Subnets: se_Subnets(input.Subnets, context) }),
  };
};

/**
 * deserializeAws_json1_1AttributeNamesList
 */
const de_AttributeNamesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AugmentedManifestsListItem
 */
const de_AugmentedManifestsListItem = (output: any, context: __SerdeContext): AugmentedManifestsListItem => {
  return {
    AnnotationDataS3Uri: __expectString(output.AnnotationDataS3Uri),
    AttributeNames: output.AttributeNames != null ? de_AttributeNamesList(output.AttributeNames, context) : undefined,
    DocumentType: __expectString(output.DocumentType),
    S3Uri: __expectString(output.S3Uri),
    SourceDocumentsS3Uri: __expectString(output.SourceDocumentsS3Uri),
    Split: __expectString(output.Split),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageItemResult
 */
const de_BatchDetectDominantLanguageItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult => {
  return {
    Index: __expectInt32(output.Index),
    Languages: output.Languages != null ? de_ListOfDominantLanguages(output.Languages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectDominantLanguageResponse
 */
const de_BatchDetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null ? de_ListOfDetectDominantLanguageResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesItemResult
 */
const de_BatchDetectEntitiesItemResult = (output: any, context: __SerdeContext): BatchDetectEntitiesItemResult => {
  return {
    Entities: output.Entities != null ? de_ListOfEntities(output.Entities, context) : undefined,
    Index: __expectInt32(output.Index),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectEntitiesResponse
 */
const de_BatchDetectEntitiesResponse = (output: any, context: __SerdeContext): BatchDetectEntitiesResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList: output.ResultList != null ? de_ListOfDetectEntitiesResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesItemResult
 */
const de_BatchDetectKeyPhrasesItemResult = (output: any, context: __SerdeContext): BatchDetectKeyPhrasesItemResult => {
  return {
    Index: __expectInt32(output.Index),
    KeyPhrases: output.KeyPhrases != null ? de_ListOfKeyPhrases(output.KeyPhrases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectKeyPhrasesResponse
 */
const de_BatchDetectKeyPhrasesResponse = (output: any, context: __SerdeContext): BatchDetectKeyPhrasesResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList: output.ResultList != null ? de_ListOfDetectKeyPhrasesResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectSentimentItemResult
 */
const de_BatchDetectSentimentItemResult = (output: any, context: __SerdeContext): BatchDetectSentimentItemResult => {
  return {
    Index: __expectInt32(output.Index),
    Sentiment: __expectString(output.Sentiment),
    SentimentScore: output.SentimentScore != null ? de_SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectSentimentResponse
 */
const de_BatchDetectSentimentResponse = (output: any, context: __SerdeContext): BatchDetectSentimentResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList: output.ResultList != null ? de_ListOfDetectSentimentResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxItemResult
 */
const de_BatchDetectSyntaxItemResult = (output: any, context: __SerdeContext): BatchDetectSyntaxItemResult => {
  return {
    Index: __expectInt32(output.Index),
    SyntaxTokens: output.SyntaxTokens != null ? de_ListOfSyntaxTokens(output.SyntaxTokens, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectSyntaxResponse
 */
const de_BatchDetectSyntaxResponse = (output: any, context: __SerdeContext): BatchDetectSyntaxResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList: output.ResultList != null ? de_ListOfDetectSyntaxResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentItemResult
 */
const de_BatchDetectTargetedSentimentItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentItemResult => {
  return {
    Entities: output.Entities != null ? de_ListOfTargetedSentimentEntities(output.Entities, context) : undefined,
    Index: __expectInt32(output.Index),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDetectTargetedSentimentResponse
 */
const de_BatchDetectTargetedSentimentResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentResponse => {
  return {
    ErrorList: output.ErrorList != null ? de_BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null ? de_ListOfDetectTargetedSentimentResult(output.ResultList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchItemError
 */
const de_BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Index: __expectInt32(output.Index),
  } as any;
};

/**
 * deserializeAws_json1_1BatchItemErrorList
 */
const de_BatchItemErrorList = (output: any, context: __SerdeContext): BatchItemError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchItemError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchSizeLimitExceededException
 */
const de_BatchSizeLimitExceededException = (output: any, context: __SerdeContext): BatchSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Block
 */
const de_Block = (output: any, context: __SerdeContext): Block => {
  return {
    BlockType: __expectString(output.BlockType),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Page: __expectInt32(output.Page),
    Relationships: output.Relationships != null ? de_ListOfRelationships(output.Relationships, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1BlockReference
 */
const de_BlockReference = (output: any, context: __SerdeContext): BlockReference => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    BlockId: __expectString(output.BlockId),
    ChildBlocks: output.ChildBlocks != null ? de_ListOfChildBlocks(output.ChildBlocks, context) : undefined,
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

/**
 * deserializeAws_json1_1ChildBlock
 */
const de_ChildBlock = (output: any, context: __SerdeContext): ChildBlock => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    ChildBlockId: __expectString(output.ChildBlockId),
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

/**
 * deserializeAws_json1_1ClassifierEvaluationMetrics
 */
const de_ClassifierEvaluationMetrics = (output: any, context: __SerdeContext): ClassifierEvaluationMetrics => {
  return {
    Accuracy: __limitedParseDouble(output.Accuracy),
    F1Score: __limitedParseDouble(output.F1Score),
    HammingLoss: __limitedParseDouble(output.HammingLoss),
    MicroF1Score: __limitedParseDouble(output.MicroF1Score),
    MicroPrecision: __limitedParseDouble(output.MicroPrecision),
    MicroRecall: __limitedParseDouble(output.MicroRecall),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

/**
 * deserializeAws_json1_1ClassifierMetadata
 */
const de_ClassifierMetadata = (output: any, context: __SerdeContext): ClassifierMetadata => {
  return {
    EvaluationMetrics:
      output.EvaluationMetrics != null ? de_ClassifierEvaluationMetrics(output.EvaluationMetrics, context) : undefined,
    NumberOfLabels: __expectInt32(output.NumberOfLabels),
    NumberOfTestDocuments: __expectInt32(output.NumberOfTestDocuments),
    NumberOfTrainedDocuments: __expectInt32(output.NumberOfTrainedDocuments),
  } as any;
};

/**
 * deserializeAws_json1_1ClassifyDocumentResponse
 */
const de_ClassifyDocumentResponse = (output: any, context: __SerdeContext): ClassifyDocumentResponse => {
  return {
    Classes: output.Classes != null ? de_ListOfClasses(output.Classes, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    DocumentType: output.DocumentType != null ? de_ListOfDocumentType(output.DocumentType, context) : undefined,
    Errors: output.Errors != null ? de_ListOfErrors(output.Errors, context) : undefined,
    Labels: output.Labels != null ? de_ListOfLabels(output.Labels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ContainsPiiEntitiesResponse
 */
const de_ContainsPiiEntitiesResponse = (output: any, context: __SerdeContext): ContainsPiiEntitiesResponse => {
  return {
    Labels: output.Labels != null ? de_ListOfEntityLabels(output.Labels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetResponse
 */
const de_CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDocumentClassifierResponse
 */
const de_CreateDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateDocumentClassifierResponse => {
  return {
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEndpointResponse
 */
const de_CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    EndpointArn: __expectString(output.EndpointArn),
    ModelArn: __expectString(output.ModelArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEntityRecognizerResponse
 */
const de_CreateEntityRecognizerResponse = (output: any, context: __SerdeContext): CreateEntityRecognizerResponse => {
  return {
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFlywheelResponse
 */
const de_CreateFlywheelResponse = (output: any, context: __SerdeContext): CreateFlywheelResponse => {
  return {
    ActiveModelArn: __expectString(output.ActiveModelArn),
    FlywheelArn: __expectString(output.FlywheelArn),
  } as any;
};

/**
 * deserializeAws_json1_1DataSecurityConfig
 */
const de_DataSecurityConfig = (output: any, context: __SerdeContext): DataSecurityConfig => {
  return {
    DataLakeKmsKeyId: __expectString(output.DataLakeKmsKeyId),
    ModelKmsKeyId: __expectString(output.ModelKmsKeyId),
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatasetProperties
 */
const de_DatasetProperties = (output: any, context: __SerdeContext): DatasetProperties => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    DatasetS3Uri: __expectString(output.DatasetS3Uri),
    DatasetType: __expectString(output.DatasetType),
    Description: __expectString(output.Description),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Message: __expectString(output.Message),
    NumberOfDocuments: __expectLong(output.NumberOfDocuments),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetPropertiesList
 */
const de_DatasetPropertiesList = (output: any, context: __SerdeContext): DatasetProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteDocumentClassifierResponse
 */
const de_DeleteDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteDocumentClassifierResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEndpointResponse
 */
const de_DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEntityRecognizerResponse
 */
const de_DeleteEntityRecognizerResponse = (output: any, context: __SerdeContext): DeleteEntityRecognizerResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteFlywheelResponse
 */
const de_DeleteFlywheelResponse = (output: any, context: __SerdeContext): DeleteFlywheelResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return {
    DatasetProperties:
      output.DatasetProperties != null ? de_DatasetProperties(output.DatasetProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassificationJobResponse
 */
const de_DescribeDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassificationJobResponse => {
  return {
    DocumentClassificationJobProperties:
      output.DocumentClassificationJobProperties != null
        ? de_DocumentClassificationJobProperties(output.DocumentClassificationJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDocumentClassifierResponse
 */
const de_DescribeDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassifierResponse => {
  return {
    DocumentClassifierProperties:
      output.DocumentClassifierProperties != null
        ? de_DocumentClassifierProperties(output.DocumentClassifierProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse
 */
const de_DescribeDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDominantLanguageDetectionJobResponse => {
  return {
    DominantLanguageDetectionJobProperties:
      output.DominantLanguageDetectionJobProperties != null
        ? de_DominantLanguageDetectionJobProperties(output.DominantLanguageDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointResponse
 */
const de_DescribeEndpointResponse = (output: any, context: __SerdeContext): DescribeEndpointResponse => {
  return {
    EndpointProperties:
      output.EndpointProperties != null ? de_EndpointProperties(output.EndpointProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionJobResponse
 */
const de_DescribeEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionJobResponse => {
  return {
    EntitiesDetectionJobProperties:
      output.EntitiesDetectionJobProperties != null
        ? de_EntitiesDetectionJobProperties(output.EntitiesDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEntityRecognizerResponse
 */
const de_DescribeEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityRecognizerResponse => {
  return {
    EntityRecognizerProperties:
      output.EntityRecognizerProperties != null
        ? de_EntityRecognizerProperties(output.EntityRecognizerProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsDetectionJobResponse
 */
const de_DescribeEventsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsDetectionJobResponse => {
  return {
    EventsDetectionJobProperties:
      output.EventsDetectionJobProperties != null
        ? de_EventsDetectionJobProperties(output.EventsDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFlywheelIterationResponse
 */
const de_DescribeFlywheelIterationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFlywheelIterationResponse => {
  return {
    FlywheelIterationProperties:
      output.FlywheelIterationProperties != null
        ? de_FlywheelIterationProperties(output.FlywheelIterationProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFlywheelResponse
 */
const de_DescribeFlywheelResponse = (output: any, context: __SerdeContext): DescribeFlywheelResponse => {
  return {
    FlywheelProperties:
      output.FlywheelProperties != null ? de_FlywheelProperties(output.FlywheelProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse
 */
const de_DescribeKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyPhrasesDetectionJobResponse => {
  return {
    KeyPhrasesDetectionJobProperties:
      output.KeyPhrasesDetectionJobProperties != null
        ? de_KeyPhrasesDetectionJobProperties(output.KeyPhrasesDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePiiEntitiesDetectionJobResponse
 */
const de_DescribePiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePiiEntitiesDetectionJobResponse => {
  return {
    PiiEntitiesDetectionJobProperties:
      output.PiiEntitiesDetectionJobProperties != null
        ? de_PiiEntitiesDetectionJobProperties(output.PiiEntitiesDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyResponse
 */
const de_DescribeResourcePolicyResponse = (output: any, context: __SerdeContext): DescribeResourcePolicyResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
    ResourcePolicy: __expectString(output.ResourcePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSentimentDetectionJobResponse
 */
const de_DescribeSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSentimentDetectionJobResponse => {
  return {
    SentimentDetectionJobProperties:
      output.SentimentDetectionJobProperties != null
        ? de_SentimentDetectionJobProperties(output.SentimentDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTargetedSentimentDetectionJobResponse
 */
const de_DescribeTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTargetedSentimentDetectionJobResponse => {
  return {
    TargetedSentimentDetectionJobProperties:
      output.TargetedSentimentDetectionJobProperties != null
        ? de_TargetedSentimentDetectionJobProperties(output.TargetedSentimentDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTopicsDetectionJobResponse
 */
const de_DescribeTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTopicsDetectionJobResponse => {
  return {
    TopicsDetectionJobProperties:
      output.TopicsDetectionJobProperties != null
        ? de_TopicsDetectionJobProperties(output.TopicsDetectionJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectDominantLanguageResponse
 */
const de_DetectDominantLanguageResponse = (output: any, context: __SerdeContext): DetectDominantLanguageResponse => {
  return {
    Languages: output.Languages != null ? de_ListOfDominantLanguages(output.Languages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesResponse
 */
const de_DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return {
    Blocks: output.Blocks != null ? de_ListOfBlocks(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    DocumentType: output.DocumentType != null ? de_ListOfDocumentType(output.DocumentType, context) : undefined,
    Entities: output.Entities != null ? de_ListOfEntities(output.Entities, context) : undefined,
    Errors: output.Errors != null ? de_ListOfErrors(output.Errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectKeyPhrasesResponse
 */
const de_DetectKeyPhrasesResponse = (output: any, context: __SerdeContext): DetectKeyPhrasesResponse => {
  return {
    KeyPhrases: output.KeyPhrases != null ? de_ListOfKeyPhrases(output.KeyPhrases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectPiiEntitiesResponse
 */
const de_DetectPiiEntitiesResponse = (output: any, context: __SerdeContext): DetectPiiEntitiesResponse => {
  return {
    Entities: output.Entities != null ? de_ListOfPiiEntities(output.Entities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectSentimentResponse
 */
const de_DetectSentimentResponse = (output: any, context: __SerdeContext): DetectSentimentResponse => {
  return {
    Sentiment: __expectString(output.Sentiment),
    SentimentScore: output.SentimentScore != null ? de_SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectSyntaxResponse
 */
const de_DetectSyntaxResponse = (output: any, context: __SerdeContext): DetectSyntaxResponse => {
  return {
    SyntaxTokens: output.SyntaxTokens != null ? de_ListOfSyntaxTokens(output.SyntaxTokens, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectTargetedSentimentResponse
 */
const de_DetectTargetedSentimentResponse = (output: any, context: __SerdeContext): DetectTargetedSentimentResponse => {
  return {
    Entities: output.Entities != null ? de_ListOfTargetedSentimentEntities(output.Entities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClass
 */
const de_DocumentClass = (output: any, context: __SerdeContext): DocumentClass => {
  return {
    Name: __expectString(output.Name),
    Page: __expectInt32(output.Page),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClassificationConfig
 */
const de_DocumentClassificationConfig = (output: any, context: __SerdeContext): DocumentClassificationConfig => {
  return {
    Labels: output.Labels != null ? de_LabelsList(output.Labels, context) : undefined,
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClassificationJobProperties
 */
const de_DocumentClassificationJobProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    FlywheelArn: __expectString(output.FlywheelArn),
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_DocumentClassificationJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentClassifierAugmentedManifestsList
 */
const de_DocumentClassifierAugmentedManifestsList = (
  output: any,
  context: __SerdeContext
): AugmentedManifestsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AugmentedManifestsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentClassifierInputDataConfig
 */
const de_DocumentClassifierInputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierInputDataConfig => {
  return {
    AugmentedManifests:
      output.AugmentedManifests != null
        ? de_DocumentClassifierAugmentedManifestsList(output.AugmentedManifests, context)
        : undefined,
    DataFormat: __expectString(output.DataFormat),
    LabelDelimiter: __expectString(output.LabelDelimiter),
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClassifierOutputDataConfig
 */
const de_DocumentClassifierOutputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierOutputDataConfig => {
  return {
    FlywheelStatsS3Prefix: __expectString(output.FlywheelStatsS3Prefix),
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClassifierProperties
 */
const de_DocumentClassifierProperties = (output: any, context: __SerdeContext): DocumentClassifierProperties => {
  return {
    ClassifierMetadata:
      output.ClassifierMetadata != null ? de_ClassifierMetadata(output.ClassifierMetadata, context) : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    FlywheelArn: __expectString(output.FlywheelArn),
    InputDataConfig:
      output.InputDataConfig != null
        ? de_DocumentClassifierInputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    Mode: __expectString(output.Mode),
    ModelKmsKeyId: __expectString(output.ModelKmsKeyId),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? de_DocumentClassifierOutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SourceModelArn: __expectString(output.SourceModelArn),
    Status: __expectString(output.Status),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    TrainingEndTime:
      output.TrainingEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingEndTime)))
        : undefined,
    TrainingStartTime:
      output.TrainingStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingStartTime)))
        : undefined,
    VersionName: __expectString(output.VersionName),
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentClassifierPropertiesList
 */
const de_DocumentClassifierPropertiesList = (output: any, context: __SerdeContext): DocumentClassifierProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_DocumentClassifierSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentClassifierSummary
 */
const de_DocumentClassifierSummary = (output: any, context: __SerdeContext): DocumentClassifierSummary => {
  return {
    DocumentClassifierName: __expectString(output.DocumentClassifierName),
    LatestVersionCreatedAt:
      output.LatestVersionCreatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestVersionCreatedAt)))
        : undefined,
    LatestVersionName: __expectString(output.LatestVersionName),
    LatestVersionStatus: __expectString(output.LatestVersionStatus),
    NumberOfVersions: __expectInt32(output.NumberOfVersions),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentLabel
 */
const de_DocumentLabel = (output: any, context: __SerdeContext): DocumentLabel => {
  return {
    Name: __expectString(output.Name),
    Page: __expectInt32(output.Page),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentMetadata
 */
const de_DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    ExtractedCharacters:
      output.ExtractedCharacters != null
        ? de_ListOfExtractedCharacters(output.ExtractedCharacters, context)
        : undefined,
    Pages: __expectInt32(output.Pages),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentReaderConfig
 */
const de_DocumentReaderConfig = (output: any, context: __SerdeContext): DocumentReaderConfig => {
  return {
    DocumentReadAction: __expectString(output.DocumentReadAction),
    DocumentReadMode: __expectString(output.DocumentReadMode),
    FeatureTypes:
      output.FeatureTypes != null ? de_ListOfDocumentReadFeatureTypes(output.FeatureTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentTypeListItem
 */
const de_DocumentTypeListItem = (output: any, context: __SerdeContext): DocumentTypeListItem => {
  return {
    Page: __expectInt32(output.Page),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DominantLanguage
 */
const de_DominantLanguage = (output: any, context: __SerdeContext): DominantLanguage => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1DominantLanguageDetectionJobProperties
 */
const de_DominantLanguageDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_DominantLanguageDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointProperties
 */
const de_EndpointProperties = (output: any, context: __SerdeContext): EndpointProperties => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CurrentInferenceUnits: __expectInt32(output.CurrentInferenceUnits),
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DesiredDataAccessRoleArn: __expectString(output.DesiredDataAccessRoleArn),
    DesiredInferenceUnits: __expectInt32(output.DesiredInferenceUnits),
    DesiredModelArn: __expectString(output.DesiredModelArn),
    EndpointArn: __expectString(output.EndpointArn),
    FlywheelArn: __expectString(output.FlywheelArn),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Message: __expectString(output.Message),
    ModelArn: __expectString(output.ModelArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointPropertiesList
 */
const de_EndpointPropertiesList = (output: any, context: __SerdeContext): EndpointProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitiesDetectionJobProperties
 */
const de_EntitiesDetectionJobProperties = (output: any, context: __SerdeContext): EntitiesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
    FlywheelArn: __expectString(output.FlywheelArn),
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_EntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    BlockReferences:
      output.BlockReferences != null ? de_ListOfBlockReferences(output.BlockReferences, context) : undefined,
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1EntityLabel
 */
const de_EntityLabel = (output: any, context: __SerdeContext): EntityLabel => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognitionConfig
 */
const de_EntityRecognitionConfig = (output: any, context: __SerdeContext): EntityRecognitionConfig => {
  return {
    EntityTypes: output.EntityTypes != null ? de_EntityTypesList(output.EntityTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerAnnotations
 */
const de_EntityRecognizerAnnotations = (output: any, context: __SerdeContext): EntityRecognizerAnnotations => {
  return {
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerAugmentedManifestsList
 */
const de_EntityRecognizerAugmentedManifestsList = (
  output: any,
  context: __SerdeContext
): AugmentedManifestsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AugmentedManifestsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityRecognizerDocuments
 */
const de_EntityRecognizerDocuments = (output: any, context: __SerdeContext): EntityRecognizerDocuments => {
  return {
    InputFormat: __expectString(output.InputFormat),
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerEntityList
 */
const de_EntityRecognizerEntityList = (output: any, context: __SerdeContext): EntityRecognizerEntityList => {
  return {
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerEvaluationMetrics
 */
const de_EntityRecognizerEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEvaluationMetrics => {
  return {
    F1Score: __limitedParseDouble(output.F1Score),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerInputDataConfig
 */
const de_EntityRecognizerInputDataConfig = (output: any, context: __SerdeContext): EntityRecognizerInputDataConfig => {
  return {
    Annotations: output.Annotations != null ? de_EntityRecognizerAnnotations(output.Annotations, context) : undefined,
    AugmentedManifests:
      output.AugmentedManifests != null
        ? de_EntityRecognizerAugmentedManifestsList(output.AugmentedManifests, context)
        : undefined,
    DataFormat: __expectString(output.DataFormat),
    Documents: output.Documents != null ? de_EntityRecognizerDocuments(output.Documents, context) : undefined,
    EntityList: output.EntityList != null ? de_EntityRecognizerEntityList(output.EntityList, context) : undefined,
    EntityTypes: output.EntityTypes != null ? de_EntityTypesList(output.EntityTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerMetadata
 */
const de_EntityRecognizerMetadata = (output: any, context: __SerdeContext): EntityRecognizerMetadata => {
  return {
    EntityTypes:
      output.EntityTypes != null ? de_EntityRecognizerMetadataEntityTypesList(output.EntityTypes, context) : undefined,
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? de_EntityRecognizerEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfTestDocuments: __expectInt32(output.NumberOfTestDocuments),
    NumberOfTrainedDocuments: __expectInt32(output.NumberOfTrainedDocuments),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    EvaluationMetrics:
      output.EvaluationMetrics != null ? de_EntityTypesEvaluationMetrics(output.EvaluationMetrics, context) : undefined,
    NumberOfTrainMentions: __expectInt32(output.NumberOfTrainMentions),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerOutputDataConfig
 */
const de_EntityRecognizerOutputDataConfig = (
  output: any,
  context: __SerdeContext
): EntityRecognizerOutputDataConfig => {
  return {
    FlywheelStatsS3Prefix: __expectString(output.FlywheelStatsS3Prefix),
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerProperties
 */
const de_EntityRecognizerProperties = (output: any, context: __SerdeContext): EntityRecognizerProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
    FlywheelArn: __expectString(output.FlywheelArn),
    InputDataConfig:
      output.InputDataConfig != null ? de_EntityRecognizerInputDataConfig(output.InputDataConfig, context) : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    ModelKmsKeyId: __expectString(output.ModelKmsKeyId),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? de_EntityRecognizerOutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    RecognizerMetadata:
      output.RecognizerMetadata != null ? de_EntityRecognizerMetadata(output.RecognizerMetadata, context) : undefined,
    SourceModelArn: __expectString(output.SourceModelArn),
    Status: __expectString(output.Status),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    TrainingEndTime:
      output.TrainingEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingEndTime)))
        : undefined,
    TrainingStartTime:
      output.TrainingStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingStartTime)))
        : undefined,
    VersionName: __expectString(output.VersionName),
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EntityRecognizerPropertiesList
 */
const de_EntityRecognizerPropertiesList = (output: any, context: __SerdeContext): EntityRecognizerProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_EntityRecognizerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityRecognizerSummary
 */
const de_EntityRecognizerSummary = (output: any, context: __SerdeContext): EntityRecognizerSummary => {
  return {
    LatestVersionCreatedAt:
      output.LatestVersionCreatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestVersionCreatedAt)))
        : undefined,
    LatestVersionName: __expectString(output.LatestVersionName),
    LatestVersionStatus: __expectString(output.LatestVersionStatus),
    NumberOfVersions: __expectInt32(output.NumberOfVersions),
    RecognizerName: __expectString(output.RecognizerName),
  } as any;
};

/**
 * deserializeAws_json1_1EntityTypesEvaluationMetrics
 */
const de_EntityTypesEvaluationMetrics = (output: any, context: __SerdeContext): EntityTypesEvaluationMetrics => {
  return {
    F1Score: __limitedParseDouble(output.F1Score),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

/**
 * deserializeAws_json1_1EntityTypesList
 */
const de_EntityTypesList = (output: any, context: __SerdeContext): EntityTypesListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntityTypesListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityTypesListItem
 */
const de_EntityTypesListItem = (output: any, context: __SerdeContext): EntityTypesListItem => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorsListItem
 */
const de_ErrorsListItem = (output: any, context: __SerdeContext): ErrorsListItem => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Page: __expectInt32(output.Page),
  } as any;
};

/**
 * deserializeAws_json1_1EventsDetectionJobProperties
 */
const de_EventsDetectionJobProperties = (output: any, context: __SerdeContext): EventsDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    TargetEventTypes:
      output.TargetEventTypes != null ? de_TargetEventTypes(output.TargetEventTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventsDetectionJobPropertiesList
 */
const de_EventsDetectionJobPropertiesList = (output: any, context: __SerdeContext): EventsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventsDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExtractedCharactersListItem
 */
const de_ExtractedCharactersListItem = (output: any, context: __SerdeContext): ExtractedCharactersListItem => {
  return {
    Count: __expectInt32(output.Count),
    Page: __expectInt32(output.Page),
  } as any;
};

/**
 * deserializeAws_json1_1FlywheelIterationProperties
 */
const de_FlywheelIterationProperties = (output: any, context: __SerdeContext): FlywheelIterationProperties => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EvaluatedModelArn: __expectString(output.EvaluatedModelArn),
    EvaluatedModelMetrics:
      output.EvaluatedModelMetrics != null
        ? de_FlywheelModelEvaluationMetrics(output.EvaluatedModelMetrics, context)
        : undefined,
    EvaluationManifestS3Prefix: __expectString(output.EvaluationManifestS3Prefix),
    FlywheelArn: __expectString(output.FlywheelArn),
    FlywheelIterationId: __expectString(output.FlywheelIterationId),
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TrainedModelArn: __expectString(output.TrainedModelArn),
    TrainedModelMetrics:
      output.TrainedModelMetrics != null
        ? de_FlywheelModelEvaluationMetrics(output.TrainedModelMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlywheelIterationPropertiesList
 */
const de_FlywheelIterationPropertiesList = (output: any, context: __SerdeContext): FlywheelIterationProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlywheelIterationProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlywheelModelEvaluationMetrics
 */
const de_FlywheelModelEvaluationMetrics = (output: any, context: __SerdeContext): FlywheelModelEvaluationMetrics => {
  return {
    AverageAccuracy: __limitedParseDouble(output.AverageAccuracy),
    AverageF1Score: __limitedParseDouble(output.AverageF1Score),
    AveragePrecision: __limitedParseDouble(output.AveragePrecision),
    AverageRecall: __limitedParseDouble(output.AverageRecall),
  } as any;
};

/**
 * deserializeAws_json1_1FlywheelProperties
 */
const de_FlywheelProperties = (output: any, context: __SerdeContext): FlywheelProperties => {
  return {
    ActiveModelArn: __expectString(output.ActiveModelArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DataLakeS3Uri: __expectString(output.DataLakeS3Uri),
    DataSecurityConfig:
      output.DataSecurityConfig != null ? de_DataSecurityConfig(output.DataSecurityConfig, context) : undefined,
    FlywheelArn: __expectString(output.FlywheelArn),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LatestFlywheelIteration: __expectString(output.LatestFlywheelIteration),
    Message: __expectString(output.Message),
    ModelType: __expectString(output.ModelType),
    Status: __expectString(output.Status),
    TaskConfig: output.TaskConfig != null ? de_TaskConfig(output.TaskConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlywheelSummary
 */
const de_FlywheelSummary = (output: any, context: __SerdeContext): FlywheelSummary => {
  return {
    ActiveModelArn: __expectString(output.ActiveModelArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataLakeS3Uri: __expectString(output.DataLakeS3Uri),
    FlywheelArn: __expectString(output.FlywheelArn),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LatestFlywheelIteration: __expectString(output.LatestFlywheelIteration),
    Message: __expectString(output.Message),
    ModelType: __expectString(output.ModelType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FlywheelSummaryList
 */
const de_FlywheelSummaryList = (output: any, context: __SerdeContext): FlywheelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlywheelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? de_Polygon(output.Polygon, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportModelResponse
 */
const de_ImportModelResponse = (output: any, context: __SerdeContext): ImportModelResponse => {
  return {
    ModelArn: __expectString(output.ModelArn),
  } as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DocumentReaderConfig:
      output.DocumentReaderConfig != null ? de_DocumentReaderConfig(output.DocumentReaderConfig, context) : undefined,
    InputFormat: __expectString(output.InputFormat),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilterException
 */
const de_InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestDetail
 */
const de_InvalidRequestDetail = (output: any, context: __SerdeContext): InvalidRequestDetail => {
  return {
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Detail: output.Detail != null ? de_InvalidRequestDetail(output.Detail, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1JobNotFoundException
 */
const de_JobNotFoundException = (output: any, context: __SerdeContext): JobNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KeyPhrase
 */
const de_KeyPhrase = (output: any, context: __SerdeContext): KeyPhrase => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1KeyPhrasesDetectionJobProperties
 */
const de_KeyPhrasesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_KeyPhrasesDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1KmsKeyValidationException
 */
const de_KmsKeyValidationException = (output: any, context: __SerdeContext): KmsKeyValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LabelsList
 */
const de_LabelsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    DatasetPropertiesList:
      output.DatasetPropertiesList != null
        ? de_DatasetPropertiesList(output.DatasetPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassificationJobsResponse
 */
const de_ListDocumentClassificationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassificationJobsResponse => {
  return {
    DocumentClassificationJobPropertiesList:
      output.DocumentClassificationJobPropertiesList != null
        ? de_DocumentClassificationJobPropertiesList(output.DocumentClassificationJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassifiersResponse
 */
const de_ListDocumentClassifiersResponse = (output: any, context: __SerdeContext): ListDocumentClassifiersResponse => {
  return {
    DocumentClassifierPropertiesList:
      output.DocumentClassifierPropertiesList != null
        ? de_DocumentClassifierPropertiesList(output.DocumentClassifierPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDocumentClassifierSummariesResponse
 */
const de_ListDocumentClassifierSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassifierSummariesResponse => {
  return {
    DocumentClassifierSummariesList:
      output.DocumentClassifierSummariesList != null
        ? de_DocumentClassifierSummariesList(output.DocumentClassifierSummariesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse
 */
const de_ListDominantLanguageDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDominantLanguageDetectionJobsResponse => {
  return {
    DominantLanguageDetectionJobPropertiesList:
      output.DominantLanguageDetectionJobPropertiesList != null
        ? de_DominantLanguageDetectionJobPropertiesList(output.DominantLanguageDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEndpointsResponse
 */
const de_ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return {
    EndpointPropertiesList:
      output.EndpointPropertiesList != null
        ? de_EndpointPropertiesList(output.EndpointPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionJobsResponse
 */
const de_ListEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionJobsResponse => {
  return {
    EntitiesDetectionJobPropertiesList:
      output.EntitiesDetectionJobPropertiesList != null
        ? de_EntitiesDetectionJobPropertiesList(output.EntitiesDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntityRecognizersResponse
 */
const de_ListEntityRecognizersResponse = (output: any, context: __SerdeContext): ListEntityRecognizersResponse => {
  return {
    EntityRecognizerPropertiesList:
      output.EntityRecognizerPropertiesList != null
        ? de_EntityRecognizerPropertiesList(output.EntityRecognizerPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntityRecognizerSummariesResponse
 */
const de_ListEntityRecognizerSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListEntityRecognizerSummariesResponse => {
  return {
    EntityRecognizerSummariesList:
      output.EntityRecognizerSummariesList != null
        ? de_EntityRecognizerSummariesList(output.EntityRecognizerSummariesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventsDetectionJobsResponse
 */
const de_ListEventsDetectionJobsResponse = (output: any, context: __SerdeContext): ListEventsDetectionJobsResponse => {
  return {
    EventsDetectionJobPropertiesList:
      output.EventsDetectionJobPropertiesList != null
        ? de_EventsDetectionJobPropertiesList(output.EventsDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFlywheelIterationHistoryResponse
 */
const de_ListFlywheelIterationHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListFlywheelIterationHistoryResponse => {
  return {
    FlywheelIterationPropertiesList:
      output.FlywheelIterationPropertiesList != null
        ? de_FlywheelIterationPropertiesList(output.FlywheelIterationPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFlywheelsResponse
 */
const de_ListFlywheelsResponse = (output: any, context: __SerdeContext): ListFlywheelsResponse => {
  return {
    FlywheelSummaryList:
      output.FlywheelSummaryList != null ? de_FlywheelSummaryList(output.FlywheelSummaryList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse
 */
const de_ListKeyPhrasesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPhrasesDetectionJobsResponse => {
  return {
    KeyPhrasesDetectionJobPropertiesList:
      output.KeyPhrasesDetectionJobPropertiesList != null
        ? de_KeyPhrasesDetectionJobPropertiesList(output.KeyPhrasesDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOfBlockReferences
 */
const de_ListOfBlockReferences = (output: any, context: __SerdeContext): BlockReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BlockReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfBlocks
 */
const de_ListOfBlocks = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Block(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfChildBlocks
 */
const de_ListOfChildBlocks = (output: any, context: __SerdeContext): ChildBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChildBlock(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfClasses
 */
const de_ListOfClasses = (output: any, context: __SerdeContext): DocumentClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentClass(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDescriptiveMentionIndices
 */
const de_ListOfDescriptiveMentionIndices = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_BatchDetectTargetedSentimentItemResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDocumentReadFeatureTypes
 */
const de_ListOfDocumentReadFeatureTypes = (
  output: any,
  context: __SerdeContext
): (DocumentReadFeatureTypes | string)[] => {
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
 * deserializeAws_json1_1ListOfDocumentType
 */
const de_ListOfDocumentType = (output: any, context: __SerdeContext): DocumentTypeListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentTypeListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfDominantLanguages
 */
const de_ListOfDominantLanguages = (output: any, context: __SerdeContext): DominantLanguage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_EntityLabel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfErrors
 */
const de_ListOfErrors = (output: any, context: __SerdeContext): ErrorsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfExtractedCharacters
 */
const de_ListOfExtractedCharacters = (output: any, context: __SerdeContext): ExtractedCharactersListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtractedCharactersListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfKeyPhrases
 */
const de_ListOfKeyPhrases = (output: any, context: __SerdeContext): KeyPhrase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_PiiEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfPiiEntityTypes
 */
const de_ListOfPiiEntityTypes = (output: any, context: __SerdeContext): (PiiEntityType | string)[] => {
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
 * deserializeAws_json1_1ListOfRelationships
 */
const de_ListOfRelationships = (output: any, context: __SerdeContext): RelationshipsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationshipsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfSyntaxTokens
 */
const de_ListOfSyntaxTokens = (output: any, context: __SerdeContext): SyntaxToken[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_TargetedSentimentEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListPiiEntitiesDetectionJobsResponse
 */
const de_ListPiiEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPiiEntitiesDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PiiEntitiesDetectionJobPropertiesList:
      output.PiiEntitiesDetectionJobPropertiesList != null
        ? de_PiiEntitiesDetectionJobPropertiesList(output.PiiEntitiesDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSentimentDetectionJobsResponse
 */
const de_ListSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSentimentDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SentimentDetectionJobPropertiesList:
      output.SentimentDetectionJobPropertiesList != null
        ? de_SentimentDetectionJobPropertiesList(output.SentimentDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTargetedSentimentDetectionJobsResponse
 */
const de_ListTargetedSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTargetedSentimentDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TargetedSentimentDetectionJobPropertiesList:
      output.TargetedSentimentDetectionJobPropertiesList != null
        ? de_TargetedSentimentDetectionJobPropertiesList(output.TargetedSentimentDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTopicsDetectionJobsResponse
 */
const de_ListTopicsDetectionJobsResponse = (output: any, context: __SerdeContext): ListTopicsDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TopicsDetectionJobPropertiesList:
      output.TopicsDetectionJobPropertiesList != null
        ? de_TopicsDetectionJobPropertiesList(output.TopicsDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MentionSentiment
 */
const de_MentionSentiment = (output: any, context: __SerdeContext): MentionSentiment => {
  return {
    Sentiment: __expectString(output.Sentiment),
    SentimentScore: output.SentimentScore != null ? de_SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1PartOfSpeechTag
 */
const de_PartOfSpeechTag = (output: any, context: __SerdeContext): PartOfSpeechTag => {
  return {
    Score: __limitedParseFloat32(output.Score),
    Tag: __expectString(output.Tag),
  } as any;
};

/**
 * deserializeAws_json1_1PiiEntitiesDetectionJobProperties
 */
const de_PiiEntitiesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): PiiEntitiesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    Mode: __expectString(output.Mode),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_PiiOutputDataConfig(output.OutputDataConfig, context) : undefined,
    RedactionConfig: output.RedactionConfig != null ? de_RedactionConfig(output.RedactionConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_PiiEntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PiiEntity
 */
const de_PiiEntity = (output: any, context: __SerdeContext): PiiEntity => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PiiOutputDataConfig
 */
const de_PiiOutputDataConfig = (output: any, context: __SerdeContext): PiiOutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Point(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
  } as any;
};

/**
 * deserializeAws_json1_1RedactionConfig
 */
const de_RedactionConfig = (output: any, context: __SerdeContext): RedactionConfig => {
  return {
    MaskCharacter: __expectString(output.MaskCharacter),
    MaskMode: __expectString(output.MaskMode),
    PiiEntityTypes: output.PiiEntityTypes != null ? de_ListOfPiiEntityTypes(output.PiiEntityTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RelationshipsListItem
 */
const de_RelationshipsListItem = (output: any, context: __SerdeContext): RelationshipsListItem => {
  return {
    Ids: output.Ids != null ? de_StringList(output.Ids, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceLimitExceededException
 */
const de_ResourceLimitExceededException = (output: any, context: __SerdeContext): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
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
 * deserializeAws_json1_1SentimentDetectionJobProperties
 */
const de_SentimentDetectionJobProperties = (output: any, context: __SerdeContext): SentimentDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_SentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SentimentScore
 */
const de_SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    Mixed: __limitedParseFloat32(output.Mixed),
    Negative: __limitedParseFloat32(output.Negative),
    Neutral: __limitedParseFloat32(output.Neutral),
    Positive: __limitedParseFloat32(output.Positive),
  } as any;
};

/**
 * deserializeAws_json1_1StartDocumentClassificationJobResponse
 */
const de_StartDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentClassificationJobResponse => {
  return {
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartDominantLanguageDetectionJobResponse
 */
const de_StartDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartDominantLanguageDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartEntitiesDetectionJobResponse
 */
const de_StartEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionJobResponse => {
  return {
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartEventsDetectionJobResponse
 */
const de_StartEventsDetectionJobResponse = (output: any, context: __SerdeContext): StartEventsDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartFlywheelIterationResponse
 */
const de_StartFlywheelIterationResponse = (output: any, context: __SerdeContext): StartFlywheelIterationResponse => {
  return {
    FlywheelArn: __expectString(output.FlywheelArn),
    FlywheelIterationId: __expectString(output.FlywheelIterationId),
  } as any;
};

/**
 * deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse
 */
const de_StartKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartKeyPhrasesDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartPiiEntitiesDetectionJobResponse
 */
const de_StartPiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartPiiEntitiesDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartSentimentDetectionJobResponse
 */
const de_StartSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartSentimentDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartTargetedSentimentDetectionJobResponse
 */
const de_StartTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTargetedSentimentDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StartTopicsDetectionJobResponse
 */
const de_StartTopicsDetectionJobResponse = (output: any, context: __SerdeContext): StartTopicsDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopDominantLanguageDetectionJobResponse
 */
const de_StopDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopDominantLanguageDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopEntitiesDetectionJobResponse
 */
const de_StopEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopEventsDetectionJobResponse
 */
const de_StopEventsDetectionJobResponse = (output: any, context: __SerdeContext): StopEventsDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse
 */
const de_StopKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopKeyPhrasesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopPiiEntitiesDetectionJobResponse
 */
const de_StopPiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopPiiEntitiesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopSentimentDetectionJobResponse
 */
const de_StopSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopSentimentDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopTargetedSentimentDetectionJobResponse
 */
const de_StopTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopTargetedSentimentDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopTrainingDocumentClassifierResponse
 */
const de_StopTrainingDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingDocumentClassifierResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StopTrainingEntityRecognizerResponse
 */
const de_StopTrainingEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingEntityRecognizerResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StringList
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
 * deserializeAws_json1_1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SyntaxToken
 */
const de_SyntaxToken = (output: any, context: __SerdeContext): SyntaxToken => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    PartOfSpeech: output.PartOfSpeech != null ? de_PartOfSpeechTag(output.PartOfSpeech, context) : undefined,
    Text: __expectString(output.Text),
    TokenId: __expectInt32(output.TokenId),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetedSentimentDetectionJobProperties
 */
const de_TargetedSentimentDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): TargetedSentimentDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_TargetedSentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetedSentimentEntity
 */
const de_TargetedSentimentEntity = (output: any, context: __SerdeContext): TargetedSentimentEntity => {
  return {
    DescriptiveMentionIndex:
      output.DescriptiveMentionIndex != null
        ? de_ListOfDescriptiveMentionIndices(output.DescriptiveMentionIndex, context)
        : undefined,
    Mentions: output.Mentions != null ? de_ListOfMentions(output.Mentions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetedSentimentMention
 */
const de_TargetedSentimentMention = (output: any, context: __SerdeContext): TargetedSentimentMention => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    GroupScore: __limitedParseFloat32(output.GroupScore),
    MentionSentiment:
      output.MentionSentiment != null ? de_MentionSentiment(output.MentionSentiment, context) : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1TargetEventTypes
 */
const de_TargetEventTypes = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1TaskConfig
 */
const de_TaskConfig = (output: any, context: __SerdeContext): TaskConfig => {
  return {
    DocumentClassificationConfig:
      output.DocumentClassificationConfig != null
        ? de_DocumentClassificationConfig(output.DocumentClassificationConfig, context)
        : undefined,
    EntityRecognitionConfig:
      output.EntityRecognitionConfig != null
        ? de_EntityRecognitionConfig(output.EntityRecognitionConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
  } as any;
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededException
 */
const de_TextSizeLimitExceededException = (output: any, context: __SerdeContext): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagKeysException
 */
const de_TooManyTagKeysException = (output: any, context: __SerdeContext): TooManyTagKeysException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TopicsDetectionJobProperties
 */
const de_TopicsDetectionJobProperties = (output: any, context: __SerdeContext): TopicsDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    NumberOfTopics: __expectInt32(output.NumberOfTopics),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TopicsDetectionJobPropertiesList
 */
const de_TopicsDetectionJobPropertiesList = (output: any, context: __SerdeContext): TopicsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TopicsDetectionJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedLanguageException
 */
const de_UnsupportedLanguageException = (output: any, context: __SerdeContext): UnsupportedLanguageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointResponse
 */
const de_UpdateEndpointResponse = (output: any, context: __SerdeContext): UpdateEndpointResponse => {
  return {
    DesiredModelArn: __expectString(output.DesiredModelArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFlywheelResponse
 */
const de_UpdateFlywheelResponse = (output: any, context: __SerdeContext): UpdateFlywheelResponse => {
  return {
    FlywheelProperties:
      output.FlywheelProperties != null ? de_FlywheelProperties(output.FlywheelProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    Subnets: output.Subnets != null ? de_Subnets(output.Subnets, context) : undefined,
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
