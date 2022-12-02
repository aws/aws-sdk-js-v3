// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
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
import {
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "../commands/CreateDocumentClassifierCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import {
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "../commands/CreateEntityRecognizerCommand";
import {
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "../commands/DeleteDocumentClassifierCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "../commands/DeleteEntityRecognizerCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
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
  ConcurrentModificationException,
  ContainsPiiEntitiesRequest,
  ContainsPiiEntitiesResponse,
  CreateDocumentClassifierRequest,
  CreateDocumentClassifierResponse,
  CreateEndpointRequest,
  CreateEndpointResponse,
  CreateEntityRecognizerRequest,
  CreateEntityRecognizerResponse,
  DeleteDocumentClassifierRequest,
  DeleteDocumentClassifierResponse,
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEntityRecognizerRequest,
  DeleteEntityRecognizerResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
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
  ErrorsListItem,
  EventsDetectionJobFilter,
  EventsDetectionJobProperties,
  ExtractedCharactersListItem,
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
  StopTargetedSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobResponse,
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierResponse,
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerResponse,
  SyntaxToken,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetedSentimentDetectionJobFilter,
  TargetedSentimentDetectionJobProperties,
  TargetedSentimentEntity,
  TargetedSentimentMention,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  TooManyTagKeysException,
  TooManyTagsException,
  TopicsDetectionJobFilter,
  TopicsDetectionJobProperties,
  UnsupportedLanguageException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateEndpointRequest,
  UpdateEndpointResponse,
  VpcConfig,
} from "../models/models_0";

export const serializeAws_json1_1BatchDetectDominantLanguageCommand = async (
  input: BatchDetectDominantLanguageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectDominantLanguage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectDominantLanguageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDetectEntitiesCommand = async (
  input: BatchDetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDetectKeyPhrasesCommand = async (
  input: BatchDetectKeyPhrasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectKeyPhrases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectKeyPhrasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDetectSentimentCommand = async (
  input: BatchDetectSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectSentiment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectSentimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDetectSyntaxCommand = async (
  input: BatchDetectSyntaxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectSyntax",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectSyntaxRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDetectTargetedSentimentCommand = async (
  input: BatchDetectTargetedSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.BatchDetectTargetedSentiment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectTargetedSentimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ClassifyDocumentCommand = async (
  input: ClassifyDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ClassifyDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ClassifyDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ContainsPiiEntitiesCommand = async (
  input: ContainsPiiEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ContainsPiiEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ContainsPiiEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDocumentClassifierCommand = async (
  input: CreateDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.CreateDocumentClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDocumentClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.CreateEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEntityRecognizerCommand = async (
  input: CreateEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.CreateEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDocumentClassifierCommand = async (
  input: DeleteDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DeleteDocumentClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDocumentClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DeleteEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEntityRecognizerCommand = async (
  input: DeleteEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DeleteEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDocumentClassificationJobCommand = async (
  input: DescribeDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeDocumentClassificationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDocumentClassificationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDocumentClassifierCommand = async (
  input: DescribeDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeDocumentClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDocumentClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDominantLanguageDetectionJobCommand = async (
  input: DescribeDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeDominantLanguageDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEntitiesDetectionJobCommand = async (
  input: DescribeEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEntityRecognizerCommand = async (
  input: DescribeEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsDetectionJobCommand = async (
  input: DescribeEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeEventsDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = async (
  input: DescribeKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand = async (
  input: DescribePiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribePiiEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePiiEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSentimentDetectionJobCommand = async (
  input: DescribeSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand = async (
  input: DescribeTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeTargetedSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTargetedSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTopicsDetectionJobCommand = async (
  input: DescribeTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DescribeTopicsDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTopicsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectDominantLanguageCommand = async (
  input: DetectDominantLanguageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectDominantLanguage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectDominantLanguageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectEntitiesCommand = async (
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectKeyPhrasesCommand = async (
  input: DetectKeyPhrasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectKeyPhrases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectKeyPhrasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectPiiEntitiesCommand = async (
  input: DetectPiiEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectPiiEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectPiiEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectSentimentCommand = async (
  input: DetectSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectSentiment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectSentimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectSyntaxCommand = async (
  input: DetectSyntaxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectSyntax",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectSyntaxRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectTargetedSentimentCommand = async (
  input: DetectTargetedSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.DetectTargetedSentiment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectTargetedSentimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportModelCommand = async (
  input: ImportModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ImportModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentClassificationJobsCommand = async (
  input: ListDocumentClassificationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListDocumentClassificationJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentClassificationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentClassifiersCommand = async (
  input: ListDocumentClassifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListDocumentClassifiers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentClassifiersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentClassifierSummariesCommand = async (
  input: ListDocumentClassifierSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListDocumentClassifierSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentClassifierSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDominantLanguageDetectionJobsCommand = async (
  input: ListDominantLanguageDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListDominantLanguageDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDominantLanguageDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntitiesDetectionJobsCommand = async (
  input: ListEntitiesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListEntitiesDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntitiesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntityRecognizersCommand = async (
  input: ListEntityRecognizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListEntityRecognizers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntityRecognizersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntityRecognizerSummariesCommand = async (
  input: ListEntityRecognizerSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListEntityRecognizerSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntityRecognizerSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventsDetectionJobsCommand = async (
  input: ListEventsDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListEventsDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventsDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = async (
  input: ListKeyPhrasesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListKeyPhrasesDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand = async (
  input: ListPiiEntitiesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListPiiEntitiesDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPiiEntitiesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSentimentDetectionJobsCommand = async (
  input: ListSentimentDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListSentimentDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSentimentDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTargetedSentimentDetectionJobsCommand = async (
  input: ListTargetedSentimentDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListTargetedSentimentDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTargetedSentimentDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTopicsDetectionJobsCommand = async (
  input: ListTopicsDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.ListTopicsDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTopicsDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDocumentClassificationJobCommand = async (
  input: StartDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartDocumentClassificationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDocumentClassificationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDominantLanguageDetectionJobCommand = async (
  input: StartDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartDominantLanguageDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDominantLanguageDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartEntitiesDetectionJobCommand = async (
  input: StartEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartEventsDetectionJobCommand = async (
  input: StartEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartEventsDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartEventsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartKeyPhrasesDetectionJobCommand = async (
  input: StartKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPiiEntitiesDetectionJobCommand = async (
  input: StartPiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartPiiEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartPiiEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSentimentDetectionJobCommand = async (
  input: StartSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTargetedSentimentDetectionJobCommand = async (
  input: StartTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartTargetedSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTargetedSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTopicsDetectionJobCommand = async (
  input: StartTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StartTopicsDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTopicsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDominantLanguageDetectionJobCommand = async (
  input: StopDominantLanguageDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopDominantLanguageDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopDominantLanguageDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopEntitiesDetectionJobCommand = async (
  input: StopEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopEventsDetectionJobCommand = async (
  input: StopEventsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopEventsDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopEventsDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopKeyPhrasesDetectionJobCommand = async (
  input: StopKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopPiiEntitiesDetectionJobCommand = async (
  input: StopPiiEntitiesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopPiiEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopPiiEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSentimentDetectionJobCommand = async (
  input: StopSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTargetedSentimentDetectionJobCommand = async (
  input: StopTargetedSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopTargetedSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTargetedSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTrainingDocumentClassifierCommand = async (
  input: StopTrainingDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopTrainingDocumentClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTrainingDocumentClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTrainingEntityRecognizerCommand = async (
  input: StopTrainingEntityRecognizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.StopTrainingEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTrainingEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.TagResource",
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
    "x-amz-target": "Comprehend_20171127.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Comprehend_20171127.UpdateEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchDetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectDominantLanguageResponse(data, context);
  const response: BatchDetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectDominantLanguageCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectEntitiesResponse(data, context);
  const response: BatchDetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectKeyPhrasesResponse(data, context);
  const response: BatchDetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectKeyPhrasesCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectSentimentResponse(data, context);
  const response: BatchDetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectSentimentCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSyntaxCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectSyntaxResponse(data, context);
  const response: BatchDetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectSyntaxCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1BatchDetectTargetedSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectTargetedSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDetectTargetedSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectTargetedSentimentResponse(data, context);
  const response: BatchDetectTargetedSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDetectTargetedSentimentCommandError = async (
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
      throw await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ClassifyDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClassifyDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ClassifyDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ClassifyDocumentResponse(data, context);
  const response: ClassifyDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ClassifyDocumentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ContainsPiiEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContainsPiiEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ContainsPiiEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ContainsPiiEntitiesResponse(data, context);
  const response: ContainsPiiEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ContainsPiiEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDocumentClassifierResponse(data, context);
  const response: CreateDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDocumentClassifierCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEndpointCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEntityRecognizerResponse(data, context);
  const response: CreateEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEntityRecognizerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDocumentClassifierResponse(data, context);
  const response: DeleteDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDocumentClassifierCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEndpointCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEntityRecognizerResponse(data, context);
  const response: DeleteEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEntityRecognizerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentClassificationJobResponse(data, context);
  const response: DescribeDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDocumentClassificationJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentClassifierResponse(data, context);
  const response: DescribeDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDocumentClassifierCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse(data, context);
  const response: DescribeDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointResponse(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEndpointCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntitiesDetectionJobResponse(data, context);
  const response: DescribeEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntityRecognizerResponse(data, context);
  const response: DescribeEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntityRecognizerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsDetectionJobResponse(data, context);
  const response: DescribeEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse(data, context);
  const response: DescribeKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePiiEntitiesDetectionJobResponse(data, context);
  const response: DescribePiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSentimentDetectionJobResponse(data, context);
  const response: DescribeSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTargetedSentimentDetectionJobResponse(data, context);
  const response: DescribeTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTopicsDetectionJobResponse(data, context);
  const response: DescribeTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTopicsDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectDominantLanguageResponse(data, context);
  const response: DetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectDominantLanguageCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectKeyPhrasesResponse(data, context);
  const response: DetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectKeyPhrasesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectPiiEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPiiEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectPiiEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectPiiEntitiesResponse(data, context);
  const response: DetectPiiEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectPiiEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectSentimentResponse(data, context);
  const response: DetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectSentimentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSyntaxCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectSyntaxResponse(data, context);
  const response: DetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectSyntaxCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DetectTargetedSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectTargetedSentimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectTargetedSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectTargetedSentimentResponse(data, context);
  const response: DetectTargetedSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectTargetedSentimentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      throw await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ImportModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportModelResponse(data, context);
  const response: ImportModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportModelCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDocumentClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassificationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentClassificationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentClassificationJobsResponse(data, context);
  const response: ListDocumentClassificationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentClassificationJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDocumentClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifiersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentClassifiersResponse(data, context);
  const response: ListDocumentClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentClassifiersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDocumentClassifierSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifierSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDocumentClassifierSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentClassifierSummariesResponse(data, context);
  const response: ListDocumentClassifierSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDocumentClassifierSummariesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse(data, context);
  const response: ListDominantLanguageDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEndpointsResponse(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEndpointsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListEntitiesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntitiesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntitiesDetectionJobsResponse(data, context);
  const response: ListEntitiesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntitiesDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListEntityRecognizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntityRecognizersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntityRecognizersResponse(data, context);
  const response: ListEntityRecognizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntityRecognizersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListEntityRecognizerSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizerSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntityRecognizerSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntityRecognizerSummariesResponse(data, context);
  const response: ListEntityRecognizerSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntityRecognizerSummariesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListEventsDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventsDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventsDetectionJobsResponse(data, context);
  const response: ListEventsDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventsDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse(data, context);
  const response: ListKeyPhrasesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPiiEntitiesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPiiEntitiesDetectionJobsResponse(data, context);
  const response: ListPiiEntitiesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListSentimentDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSentimentDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSentimentDetectionJobsResponse(data, context);
  const response: ListSentimentDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSentimentDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
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
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListTargetedSentimentDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetedSentimentDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTargetedSentimentDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetedSentimentDetectionJobsResponse(data, context);
  const response: ListTargetedSentimentDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTargetedSentimentDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListTopicsDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTopicsDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTopicsDetectionJobsResponse(data, context);
  const response: ListTopicsDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTopicsDetectionJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentClassificationJobResponse(data, context);
  const response: StartDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDocumentClassificationJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDominantLanguageDetectionJobResponse(data, context);
  const response: StartDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEntitiesDetectionJobResponse(data, context);
  const response: StartEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEventsDetectionJobResponse(data, context);
  const response: StartEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartEventsDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse(data, context);
  const response: StartKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartPiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartPiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPiiEntitiesDetectionJobResponse(data, context);
  const response: StartPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPiiEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSentimentDetectionJobResponse(data, context);
  const response: StartSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTargetedSentimentDetectionJobResponse(data, context);
  const response: StartTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTargetedSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StartTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTopicsDetectionJobResponse(data, context);
  const response: StartTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTopicsDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      throw await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDominantLanguageDetectionJobResponse(data, context);
  const response: StopDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEntitiesDetectionJobResponse(data, context);
  const response: StopEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopEventsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEventsDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopEventsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEventsDetectionJobResponse(data, context);
  const response: StopEventsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopEventsDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse(data, context);
  const response: StopKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopPiiEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPiiEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopPiiEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopPiiEntitiesDetectionJobResponse(data, context);
  const response: StopPiiEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopPiiEntitiesDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopSentimentDetectionJobResponse(data, context);
  const response: StopSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopTargetedSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTargetedSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTargetedSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTargetedSentimentDetectionJobResponse(data, context);
  const response: StopTargetedSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTargetedSentimentDetectionJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopTrainingDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTrainingDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTrainingDocumentClassifierResponse(data, context);
  const response: StopTrainingDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTrainingDocumentClassifierCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1StopTrainingEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTrainingEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTrainingEntityRecognizerResponse(data, context);
  const response: StopTrainingEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTrainingEntityRecognizerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
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
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    default:
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
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagKeysException":
    case "com.amazonaws.comprehend#TooManyTagKeysException":
      throw await deserializeAws_json1_1TooManyTagKeysExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEndpointResponse(data, context);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEndpointCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BatchSizeLimitExceededException(body, context);
  const exception = new BatchSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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

const deserializeAws_json1_1InvalidFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterException(body, context);
  const exception = new InvalidFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1JobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1JobNotFoundException(body, context);
  const exception = new JobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KmsKeyValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyValidationException(body, context);
  const exception = new KmsKeyValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
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

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagKeysException(body, context);
  const exception = new TooManyTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedLanguageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguageException(body, context);
  const exception = new UnsupportedLanguageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AttributeNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AugmentedManifestsListItem = (
  input: AugmentedManifestsListItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnnotationDataS3Uri != null && { AnnotationDataS3Uri: input.AnnotationDataS3Uri }),
    ...(input.AttributeNames != null && {
      AttributeNames: serializeAws_json1_1AttributeNamesList(input.AttributeNames, context),
    }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.SourceDocumentsS3Uri != null && { SourceDocumentsS3Uri: input.SourceDocumentsS3Uri }),
    ...(input.Split != null && { Split: input.Split }),
  };
};

const serializeAws_json1_1BatchDetectDominantLanguageRequest = (
  input: BatchDetectDominantLanguageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectEntitiesRequest = (
  input: BatchDetectEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectKeyPhrasesRequest = (
  input: BatchDetectKeyPhrasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectSentimentRequest = (
  input: BatchDetectSentimentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectSyntaxRequest = (
  input: BatchDetectSyntaxRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectTargetedSentimentRequest = (
  input: BatchDetectTargetedSentimentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TextList != null && { TextList: serializeAws_json1_1CustomerInputStringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1ClassifyDocumentRequest = (input: ClassifyDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: serializeAws_json1_1DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1ContainsPiiEntitiesRequest = (
  input: ContainsPiiEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1CreateDocumentClassifierRequest = (
  input: CreateDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierName != null && { DocumentClassifierName: input.DocumentClassifierName }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1DocumentClassifierInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelPolicy != null && { ModelPolicy: input.ModelPolicy }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1DocumentClassifierOutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateEndpointRequest = (input: CreateEndpointRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DesiredInferenceUnits != null && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
    ...(input.ModelArn != null && { ModelArn: input.ModelArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateEntityRecognizerRequest = (
  input: CreateEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1EntityRecognizerInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelPolicy != null && { ModelPolicy: input.ModelPolicy }),
    ...(input.RecognizerName != null && { RecognizerName: input.RecognizerName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1CustomerInputStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteDocumentClassifierRequest = (
  input: DeleteDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1DeleteEndpointRequest = (input: DeleteEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DeleteEntityRecognizerRequest = (
  input: DeleteEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeDocumentClassificationJobRequest = (
  input: DescribeDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeDocumentClassifierRequest = (
  input: DescribeDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest = (
  input: DescribeDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeEndpointRequest = (input: DescribeEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DescribeEntitiesDetectionJobRequest = (
  input: DescribeEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeEntityRecognizerRequest = (
  input: DescribeEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1DescribeEventsDetectionJobRequest = (
  input: DescribeEventsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest = (
  input: DescribeKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribePiiEntitiesDetectionJobRequest = (
  input: DescribePiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeResourcePolicyRequest = (
  input: DescribeResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeSentimentDetectionJobRequest = (
  input: DescribeSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeTargetedSentimentDetectionJobRequest = (
  input: DescribeTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeTopicsDetectionJobRequest = (
  input: DescribeTopicsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DetectDominantLanguageRequest = (
  input: DetectDominantLanguageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: serializeAws_json1_1DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectKeyPhrasesRequest = (input: DetectKeyPhrasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectPiiEntitiesRequest = (
  input: DetectPiiEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectSentimentRequest = (input: DetectSentimentRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectSyntaxRequest = (input: DetectSyntaxRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectTargetedSentimentRequest = (
  input: DetectTargetedSentimentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DocumentClassificationJobFilter = (
  input: DocumentClassificationJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DocumentClassifierAugmentedManifestsList = (
  input: AugmentedManifestsListItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AugmentedManifestsListItem(entry, context);
    });
};

const serializeAws_json1_1DocumentClassifierFilter = (
  input: DocumentClassifierFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierName != null && { DocumentClassifierName: input.DocumentClassifierName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DocumentClassifierInputDataConfig = (
  input: DocumentClassifierInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AugmentedManifests != null && {
      AugmentedManifests: serializeAws_json1_1DocumentClassifierAugmentedManifestsList(
        input.AugmentedManifests,
        context
      ),
    }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.LabelDelimiter != null && { LabelDelimiter: input.LabelDelimiter }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

const serializeAws_json1_1DocumentClassifierOutputDataConfig = (
  input: DocumentClassifierOutputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1DocumentReaderConfig = (input: DocumentReaderConfig, context: __SerdeContext): any => {
  return {
    ...(input.DocumentReadAction != null && { DocumentReadAction: input.DocumentReadAction }),
    ...(input.DocumentReadMode != null && { DocumentReadMode: input.DocumentReadMode }),
    ...(input.FeatureTypes != null && {
      FeatureTypes: serializeAws_json1_1ListOfDocumentReadFeatureTypes(input.FeatureTypes, context),
    }),
  };
};

const serializeAws_json1_1DominantLanguageDetectionJobFilter = (
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

const serializeAws_json1_1EndpointFilter = (input: EndpointFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter != null && { CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000) }),
    ...(input.CreationTimeBefore != null && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
    ...(input.ModelArn != null && { ModelArn: input.ModelArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1EntitiesDetectionJobFilter = (
  input: EntitiesDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1EntityRecognizerAnnotations = (
  input: EntityRecognizerAnnotations,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerAugmentedManifestsList = (
  input: AugmentedManifestsListItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AugmentedManifestsListItem(entry, context);
    });
};

const serializeAws_json1_1EntityRecognizerDocuments = (
  input: EntityRecognizerDocuments,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TestS3Uri != null && { TestS3Uri: input.TestS3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerEntityList = (
  input: EntityRecognizerEntityList,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerFilter = (input: EntityRecognizerFilter, context: __SerdeContext): any => {
  return {
    ...(input.RecognizerName != null && { RecognizerName: input.RecognizerName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1EntityRecognizerInputDataConfig = (
  input: EntityRecognizerInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Annotations != null && {
      Annotations: serializeAws_json1_1EntityRecognizerAnnotations(input.Annotations, context),
    }),
    ...(input.AugmentedManifests != null && {
      AugmentedManifests: serializeAws_json1_1EntityRecognizerAugmentedManifestsList(input.AugmentedManifests, context),
    }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.Documents != null && {
      Documents: serializeAws_json1_1EntityRecognizerDocuments(input.Documents, context),
    }),
    ...(input.EntityList != null && {
      EntityList: serializeAws_json1_1EntityRecognizerEntityList(input.EntityList, context),
    }),
    ...(input.EntityTypes != null && { EntityTypes: serializeAws_json1_1EntityTypesList(input.EntityTypes, context) }),
  };
};

const serializeAws_json1_1EntityTypesList = (input: EntityTypesListItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntityTypesListItem(entry, context);
    });
};

const serializeAws_json1_1EntityTypesListItem = (input: EntityTypesListItem, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1EventsDetectionJobFilter = (
  input: EventsDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ImportModelRequest = (input: ImportModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.ModelKmsKeyId != null && { ModelKmsKeyId: input.ModelKmsKeyId }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.SourceModelArn != null && { SourceModelArn: input.SourceModelArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DocumentReaderConfig != null && {
      DocumentReaderConfig: serializeAws_json1_1DocumentReaderConfig(input.DocumentReaderConfig, context),
    }),
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1KeyPhrasesDetectionJobFilter = (
  input: KeyPhrasesDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListDocumentClassificationJobsRequest = (
  input: ListDocumentClassificationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1DocumentClassificationJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDocumentClassifiersRequest = (
  input: ListDocumentClassifiersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1DocumentClassifierFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDocumentClassifierSummariesRequest = (
  input: ListDocumentClassifierSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDominantLanguageDetectionJobsRequest = (
  input: ListDominantLanguageDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && {
      Filter: serializeAws_json1_1DominantLanguageDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEndpointsRequest = (input: ListEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1EndpointFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntitiesDetectionJobsRequest = (
  input: ListEntitiesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1EntitiesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntityRecognizersRequest = (
  input: ListEntityRecognizersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1EntityRecognizerFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntityRecognizerSummariesRequest = (
  input: ListEntityRecognizerSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEventsDetectionJobsRequest = (
  input: ListEventsDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1EventsDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest = (
  input: ListKeyPhrasesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1KeyPhrasesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListOfDocumentReadFeatureTypes = (
  input: (DocumentReadFeatureTypes | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListOfPiiEntityTypes = (input: (PiiEntityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListPiiEntitiesDetectionJobsRequest = (
  input: ListPiiEntitiesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1PiiEntitiesDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSentimentDetectionJobsRequest = (
  input: ListSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1SentimentDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTargetedSentimentDetectionJobsRequest = (
  input: ListTargetedSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && {
      Filter: serializeAws_json1_1TargetedSentimentDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTopicsDetectionJobsRequest = (
  input: ListTopicsDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1TopicsDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1PiiEntitiesDetectionJobFilter = (
  input: PiiEntitiesDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourcePolicy != null && { ResourcePolicy: input.ResourcePolicy }),
  };
};

const serializeAws_json1_1RedactionConfig = (input: RedactionConfig, context: __SerdeContext): any => {
  return {
    ...(input.MaskCharacter != null && { MaskCharacter: input.MaskCharacter }),
    ...(input.MaskMode != null && { MaskMode: input.MaskMode }),
    ...(input.PiiEntityTypes != null && {
      PiiEntityTypes: serializeAws_json1_1ListOfPiiEntityTypes(input.PiiEntityTypes, context),
    }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SentimentDetectionJobFilter = (
  input: SentimentDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1StartDocumentClassificationJobRequest = (
  input: StartDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartDominantLanguageDetectionJobRequest = (
  input: StartDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartEntitiesDetectionJobRequest = (
  input: StartEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartEventsDetectionJobRequest = (
  input: StartEventsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetEventTypes != null && {
      TargetEventTypes: serializeAws_json1_1TargetEventTypes(input.TargetEventTypes, context),
    }),
  };
};

const serializeAws_json1_1StartKeyPhrasesDetectionJobRequest = (
  input: StartKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartPiiEntitiesDetectionJobRequest = (
  input: StartPiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.RedactionConfig != null && {
      RedactionConfig: serializeAws_json1_1RedactionConfig(input.RedactionConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1StartSentimentDetectionJobRequest = (
  input: StartSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartTargetedSentimentDetectionJobRequest = (
  input: StartTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartTopicsDetectionJobRequest = (
  input: StartTopicsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.NumberOfTopics != null && { NumberOfTopics: input.NumberOfTopics }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId != null && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StopDominantLanguageDetectionJobRequest = (
  input: StopDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopEntitiesDetectionJobRequest = (
  input: StopEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopEventsDetectionJobRequest = (
  input: StopEventsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopKeyPhrasesDetectionJobRequest = (
  input: StopKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopPiiEntitiesDetectionJobRequest = (
  input: StopPiiEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopSentimentDetectionJobRequest = (
  input: StopSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopTargetedSentimentDetectionJobRequest = (
  input: StopTargetedSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopTrainingDocumentClassifierRequest = (
  input: StopTrainingDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn != null && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1StopTrainingEntityRecognizerRequest = (
  input: StopTrainingEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn != null && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetedSentimentDetectionJobFilter = (
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

const serializeAws_json1_1TargetEventTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TopicsDetectionJobFilter = (
  input: TopicsDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateEndpointRequest = (input: UpdateEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.DesiredDataAccessRoleArn != null && { DesiredDataAccessRoleArn: input.DesiredDataAccessRoleArn }),
    ...(input.DesiredInferenceUnits != null && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.DesiredModelArn != null && { DesiredModelArn: input.DesiredModelArn }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_json1_1Subnets(input.Subnets, context) }),
  };
};

const deserializeAws_json1_1AttributeNamesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AugmentedManifestsListItem = (
  output: any,
  context: __SerdeContext
): AugmentedManifestsListItem => {
  return {
    AnnotationDataS3Uri: __expectString(output.AnnotationDataS3Uri),
    AttributeNames:
      output.AttributeNames != null
        ? deserializeAws_json1_1AttributeNamesList(output.AttributeNames, context)
        : undefined,
    DocumentType: __expectString(output.DocumentType),
    S3Uri: __expectString(output.S3Uri),
    SourceDocumentsS3Uri: __expectString(output.SourceDocumentsS3Uri),
    Split: __expectString(output.Split),
  } as any;
};

const deserializeAws_json1_1BatchDetectDominantLanguageItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult => {
  return {
    Index: __expectInt32(output.Index),
    Languages:
      output.Languages != null ? deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectDominantLanguageResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectEntitiesItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesItemResult => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1ListOfEntities(output.Entities, context) : undefined,
    Index: __expectInt32(output.Index),
  } as any;
};

const deserializeAws_json1_1BatchDetectEntitiesResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectEntitiesResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectKeyPhrasesItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesItemResult => {
  return {
    Index: __expectInt32(output.Index),
    KeyPhrases:
      output.KeyPhrases != null ? deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectKeyPhrasesResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectKeyPhrasesResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSentimentItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentItemResult => {
  return {
    Index: __expectInt32(output.Index),
    Sentiment: __expectString(output.Sentiment),
    SentimentScore:
      output.SentimentScore != null ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSentimentResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectSentimentResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSyntaxItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxItemResult => {
  return {
    Index: __expectInt32(output.Index),
    SyntaxTokens:
      output.SyntaxTokens != null ? deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSyntaxResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectSyntaxResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectTargetedSentimentItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentItemResult => {
  return {
    Entities:
      output.Entities != null
        ? deserializeAws_json1_1ListOfTargetedSentimentEntities(output.Entities, context)
        : undefined,
    Index: __expectInt32(output.Index),
  } as any;
};

const deserializeAws_json1_1BatchDetectTargetedSentimentResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentResponse => {
  return {
    ErrorList:
      output.ErrorList != null ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context) : undefined,
    ResultList:
      output.ResultList != null
        ? deserializeAws_json1_1ListOfDetectTargetedSentimentResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Index: __expectInt32(output.Index),
  } as any;
};

const deserializeAws_json1_1BatchItemErrorList = (output: any, context: __SerdeContext): BatchItemError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchItemError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): BatchSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Block = (output: any, context: __SerdeContext): Block => {
  return {
    BlockType: __expectString(output.BlockType),
    Geometry: output.Geometry != null ? deserializeAws_json1_1Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Page: __expectInt32(output.Page),
    Relationships:
      output.Relationships != null
        ? deserializeAws_json1_1ListOfRelationships(output.Relationships, context)
        : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1BlockReference = (output: any, context: __SerdeContext): BlockReference => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    BlockId: __expectString(output.BlockId),
    ChildBlocks:
      output.ChildBlocks != null ? deserializeAws_json1_1ListOfChildBlocks(output.ChildBlocks, context) : undefined,
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

const deserializeAws_json1_1ChildBlock = (output: any, context: __SerdeContext): ChildBlock => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    ChildBlockId: __expectString(output.ChildBlockId),
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

const deserializeAws_json1_1ClassifierEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): ClassifierEvaluationMetrics => {
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

const deserializeAws_json1_1ClassifierMetadata = (output: any, context: __SerdeContext): ClassifierMetadata => {
  return {
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? deserializeAws_json1_1ClassifierEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfLabels: __expectInt32(output.NumberOfLabels),
    NumberOfTestDocuments: __expectInt32(output.NumberOfTestDocuments),
    NumberOfTrainedDocuments: __expectInt32(output.NumberOfTrainedDocuments),
  } as any;
};

const deserializeAws_json1_1ClassifyDocumentResponse = (
  output: any,
  context: __SerdeContext
): ClassifyDocumentResponse => {
  return {
    Classes: output.Classes != null ? deserializeAws_json1_1ListOfClasses(output.Classes, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    DocumentType:
      output.DocumentType != null ? deserializeAws_json1_1ListOfDocumentType(output.DocumentType, context) : undefined,
    Errors: output.Errors != null ? deserializeAws_json1_1ListOfErrors(output.Errors, context) : undefined,
    Labels: output.Labels != null ? deserializeAws_json1_1ListOfLabels(output.Labels, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ContainsPiiEntitiesResponse = (
  output: any,
  context: __SerdeContext
): ContainsPiiEntitiesResponse => {
  return {
    Labels: output.Labels != null ? deserializeAws_json1_1ListOfEntityLabels(output.Labels, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateDocumentClassifierResponse => {
  return {
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
  } as any;
};

const deserializeAws_json1_1CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    EndpointArn: __expectString(output.EndpointArn),
  } as any;
};

const deserializeAws_json1_1CreateEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): CreateEntityRecognizerResponse => {
  return {
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
  } as any;
};

const deserializeAws_json1_1DeleteDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteDocumentClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DeleteEntityRecognizerResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassificationJobResponse => {
  return {
    DocumentClassificationJobProperties:
      output.DocumentClassificationJobProperties != null
        ? deserializeAws_json1_1DocumentClassificationJobProperties(output.DocumentClassificationJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassifierResponse => {
  return {
    DocumentClassifierProperties:
      output.DocumentClassifierProperties != null
        ? deserializeAws_json1_1DocumentClassifierProperties(output.DocumentClassifierProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDominantLanguageDetectionJobResponse => {
  return {
    DominantLanguageDetectionJobProperties:
      output.DominantLanguageDetectionJobProperties != null
        ? deserializeAws_json1_1DominantLanguageDetectionJobProperties(
            output.DominantLanguageDetectionJobProperties,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEndpointResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointResponse => {
  return {
    EndpointProperties:
      output.EndpointProperties != null
        ? deserializeAws_json1_1EndpointProperties(output.EndpointProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionJobResponse => {
  return {
    EntitiesDetectionJobProperties:
      output.EntitiesDetectionJobProperties != null
        ? deserializeAws_json1_1EntitiesDetectionJobProperties(output.EntitiesDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityRecognizerResponse => {
  return {
    EntityRecognizerProperties:
      output.EntityRecognizerProperties != null
        ? deserializeAws_json1_1EntityRecognizerProperties(output.EntityRecognizerProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsDetectionJobResponse => {
  return {
    EventsDetectionJobProperties:
      output.EventsDetectionJobProperties != null
        ? deserializeAws_json1_1EventsDetectionJobProperties(output.EventsDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyPhrasesDetectionJobResponse => {
  return {
    KeyPhrasesDetectionJobProperties:
      output.KeyPhrasesDetectionJobProperties != null
        ? deserializeAws_json1_1KeyPhrasesDetectionJobProperties(output.KeyPhrasesDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePiiEntitiesDetectionJobResponse => {
  return {
    PiiEntitiesDetectionJobProperties:
      output.PiiEntitiesDetectionJobProperties != null
        ? deserializeAws_json1_1PiiEntitiesDetectionJobProperties(output.PiiEntitiesDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePolicyResponse => {
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

const deserializeAws_json1_1DescribeSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSentimentDetectionJobResponse => {
  return {
    SentimentDetectionJobProperties:
      output.SentimentDetectionJobProperties != null
        ? deserializeAws_json1_1SentimentDetectionJobProperties(output.SentimentDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTargetedSentimentDetectionJobResponse => {
  return {
    TargetedSentimentDetectionJobProperties:
      output.TargetedSentimentDetectionJobProperties != null
        ? deserializeAws_json1_1TargetedSentimentDetectionJobProperties(
            output.TargetedSentimentDetectionJobProperties,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTopicsDetectionJobResponse => {
  return {
    TopicsDetectionJobProperties:
      output.TopicsDetectionJobProperties != null
        ? deserializeAws_json1_1TopicsDetectionJobProperties(output.TopicsDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): DetectDominantLanguageResponse => {
  return {
    Languages:
      output.Languages != null ? deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return {
    Blocks: output.Blocks != null ? deserializeAws_json1_1ListOfBlocks(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    DocumentType:
      output.DocumentType != null ? deserializeAws_json1_1ListOfDocumentType(output.DocumentType, context) : undefined,
    Entities: output.Entities != null ? deserializeAws_json1_1ListOfEntities(output.Entities, context) : undefined,
    Errors: output.Errors != null ? deserializeAws_json1_1ListOfErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectKeyPhrasesResponse = (
  output: any,
  context: __SerdeContext
): DetectKeyPhrasesResponse => {
  return {
    KeyPhrases:
      output.KeyPhrases != null ? deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectPiiEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DetectPiiEntitiesResponse => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1ListOfPiiEntities(output.Entities, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectSentimentResponse = (
  output: any,
  context: __SerdeContext
): DetectSentimentResponse => {
  return {
    Sentiment: __expectString(output.Sentiment),
    SentimentScore:
      output.SentimentScore != null ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectSyntaxResponse = (output: any, context: __SerdeContext): DetectSyntaxResponse => {
  return {
    SyntaxTokens:
      output.SyntaxTokens != null ? deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectTargetedSentimentResponse = (
  output: any,
  context: __SerdeContext
): DetectTargetedSentimentResponse => {
  return {
    Entities:
      output.Entities != null
        ? deserializeAws_json1_1ListOfTargetedSentimentEntities(output.Entities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClass = (output: any, context: __SerdeContext): DocumentClass => {
  return {
    Name: __expectString(output.Name),
    Page: __expectInt32(output.Page),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1DocumentClassificationJobProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassificationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentClassificationJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentClassifierAugmentedManifestsList = (
  output: any,
  context: __SerdeContext
): AugmentedManifestsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AugmentedManifestsListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentClassifierInputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierInputDataConfig => {
  return {
    AugmentedManifests:
      output.AugmentedManifests != null
        ? deserializeAws_json1_1DocumentClassifierAugmentedManifestsList(output.AugmentedManifests, context)
        : undefined,
    DataFormat: __expectString(output.DataFormat),
    LabelDelimiter: __expectString(output.LabelDelimiter),
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

const deserializeAws_json1_1DocumentClassifierOutputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierOutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1DocumentClassifierProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassifierProperties => {
  return {
    ClassifierMetadata:
      output.ClassifierMetadata != null
        ? deserializeAws_json1_1ClassifierMetadata(output.ClassifierMetadata, context)
        : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DocumentClassifierArn: __expectString(output.DocumentClassifierArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1DocumentClassifierInputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    Mode: __expectString(output.Mode),
    ModelKmsKeyId: __expectString(output.ModelKmsKeyId),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1DocumentClassifierOutputDataConfig(output.OutputDataConfig, context)
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
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassifierPropertiesList = (
  output: any,
  context: __SerdeContext
): DocumentClassifierProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentClassifierProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentClassifierSummariesList = (
  output: any,
  context: __SerdeContext
): DocumentClassifierSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentClassifierSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentClassifierSummary = (
  output: any,
  context: __SerdeContext
): DocumentClassifierSummary => {
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

const deserializeAws_json1_1DocumentLabel = (output: any, context: __SerdeContext): DocumentLabel => {
  return {
    Name: __expectString(output.Name),
    Page: __expectInt32(output.Page),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    ExtractedCharacters:
      output.ExtractedCharacters != null
        ? deserializeAws_json1_1ListOfExtractedCharacters(output.ExtractedCharacters, context)
        : undefined,
    Pages: __expectInt32(output.Pages),
  } as any;
};

const deserializeAws_json1_1DocumentReaderConfig = (output: any, context: __SerdeContext): DocumentReaderConfig => {
  return {
    DocumentReadAction: __expectString(output.DocumentReadAction),
    DocumentReadMode: __expectString(output.DocumentReadMode),
    FeatureTypes:
      output.FeatureTypes != null
        ? deserializeAws_json1_1ListOfDocumentReadFeatureTypes(output.FeatureTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentTypeListItem = (output: any, context: __SerdeContext): DocumentTypeListItem => {
  return {
    Page: __expectInt32(output.Page),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DominantLanguage = (output: any, context: __SerdeContext): DominantLanguage => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1DominantLanguageDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DominantLanguageDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EndpointProperties = (output: any, context: __SerdeContext): EndpointProperties => {
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
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Message: __expectString(output.Message),
    ModelArn: __expectString(output.ModelArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1EndpointPropertiesList = (output: any, context: __SerdeContext): EndpointProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EndpointProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitiesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): EntitiesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EntitiesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): EntitiesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    BlockReferences:
      output.BlockReferences != null
        ? deserializeAws_json1_1ListOfBlockReferences(output.BlockReferences, context)
        : undefined,
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1EntityLabel = (output: any, context: __SerdeContext): EntityLabel => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerAnnotations = (
  output: any,
  context: __SerdeContext
): EntityRecognizerAnnotations => {
  return {
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerAugmentedManifestsList = (
  output: any,
  context: __SerdeContext
): AugmentedManifestsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AugmentedManifestsListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityRecognizerDocuments = (
  output: any,
  context: __SerdeContext
): EntityRecognizerDocuments => {
  return {
    InputFormat: __expectString(output.InputFormat),
    S3Uri: __expectString(output.S3Uri),
    TestS3Uri: __expectString(output.TestS3Uri),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerEntityList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEntityList => {
  return {
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEvaluationMetrics => {
  return {
    F1Score: __limitedParseDouble(output.F1Score),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerInputDataConfig = (
  output: any,
  context: __SerdeContext
): EntityRecognizerInputDataConfig => {
  return {
    Annotations:
      output.Annotations != null
        ? deserializeAws_json1_1EntityRecognizerAnnotations(output.Annotations, context)
        : undefined,
    AugmentedManifests:
      output.AugmentedManifests != null
        ? deserializeAws_json1_1EntityRecognizerAugmentedManifestsList(output.AugmentedManifests, context)
        : undefined,
    DataFormat: __expectString(output.DataFormat),
    Documents:
      output.Documents != null ? deserializeAws_json1_1EntityRecognizerDocuments(output.Documents, context) : undefined,
    EntityList:
      output.EntityList != null
        ? deserializeAws_json1_1EntityRecognizerEntityList(output.EntityList, context)
        : undefined,
    EntityTypes:
      output.EntityTypes != null ? deserializeAws_json1_1EntityTypesList(output.EntityTypes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerMetadata = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadata => {
  return {
    EntityTypes:
      output.EntityTypes != null
        ? deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList(output.EntityTypes, context)
        : undefined,
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? deserializeAws_json1_1EntityRecognizerEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfTestDocuments: __expectInt32(output.NumberOfTestDocuments),
    NumberOfTrainedDocuments: __expectInt32(output.NumberOfTrainedDocuments),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem => {
  return {
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? deserializeAws_json1_1EntityTypesEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfTrainMentions: __expectInt32(output.NumberOfTrainMentions),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1EntityRecognizerProperties = (
  output: any,
  context: __SerdeContext
): EntityRecognizerProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityRecognizerArn: __expectString(output.EntityRecognizerArn),
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1EntityRecognizerInputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    ModelKmsKeyId: __expectString(output.ModelKmsKeyId),
    RecognizerMetadata:
      output.RecognizerMetadata != null
        ? deserializeAws_json1_1EntityRecognizerMetadata(output.RecognizerMetadata, context)
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
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerPropertiesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityRecognizerProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityRecognizerSummariesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityRecognizerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityRecognizerSummary = (
  output: any,
  context: __SerdeContext
): EntityRecognizerSummary => {
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

const deserializeAws_json1_1EntityTypesEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityTypesEvaluationMetrics => {
  return {
    F1Score: __limitedParseDouble(output.F1Score),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

const deserializeAws_json1_1EntityTypesList = (output: any, context: __SerdeContext): EntityTypesListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityTypesListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityTypesListItem = (output: any, context: __SerdeContext): EntityTypesListItem => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ErrorsListItem = (output: any, context: __SerdeContext): ErrorsListItem => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Page: __expectInt32(output.Page),
  } as any;
};

const deserializeAws_json1_1EventsDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): EventsDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    TargetEventTypes:
      output.TargetEventTypes != null
        ? deserializeAws_json1_1TargetEventTypes(output.TargetEventTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventsDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): EventsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventsDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExtractedCharactersListItem = (
  output: any,
  context: __SerdeContext
): ExtractedCharactersListItem => {
  return {
    Count: __expectInt32(output.Count),
    Page: __expectInt32(output.Page),
  } as any;
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox:
      output.BoundingBox != null ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? deserializeAws_json1_1Polygon(output.Polygon, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImportModelResponse = (output: any, context: __SerdeContext): ImportModelResponse => {
  return {
    ModelArn: __expectString(output.ModelArn),
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DocumentReaderConfig:
      output.DocumentReaderConfig != null
        ? deserializeAws_json1_1DocumentReaderConfig(output.DocumentReaderConfig, context)
        : undefined,
    InputFormat: __expectString(output.InputFormat),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestDetail = (output: any, context: __SerdeContext): InvalidRequestDetail => {
  return {
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Detail: output.Detail != null ? deserializeAws_json1_1InvalidRequestDetail(output.Detail, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1JobNotFoundException = (output: any, context: __SerdeContext): JobNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KeyPhrase = (output: any, context: __SerdeContext): KeyPhrase => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1KeyPhrasesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyPhrasesDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1KmsKeyValidationException = (
  output: any,
  context: __SerdeContext
): KmsKeyValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListDocumentClassificationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassificationJobsResponse => {
  return {
    DocumentClassificationJobPropertiesList:
      output.DocumentClassificationJobPropertiesList != null
        ? deserializeAws_json1_1DocumentClassificationJobPropertiesList(
            output.DocumentClassificationJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDocumentClassifiersResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassifiersResponse => {
  return {
    DocumentClassifierPropertiesList:
      output.DocumentClassifierPropertiesList != null
        ? deserializeAws_json1_1DocumentClassifierPropertiesList(output.DocumentClassifierPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDocumentClassifierSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassifierSummariesResponse => {
  return {
    DocumentClassifierSummariesList:
      output.DocumentClassifierSummariesList != null
        ? deserializeAws_json1_1DocumentClassifierSummariesList(output.DocumentClassifierSummariesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDominantLanguageDetectionJobsResponse => {
  return {
    DominantLanguageDetectionJobPropertiesList:
      output.DominantLanguageDetectionJobPropertiesList != null
        ? deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList(
            output.DominantLanguageDetectionJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return {
    EndpointPropertiesList:
      output.EndpointPropertiesList != null
        ? deserializeAws_json1_1EndpointPropertiesList(output.EndpointPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionJobsResponse => {
  return {
    EntitiesDetectionJobPropertiesList:
      output.EntitiesDetectionJobPropertiesList != null
        ? deserializeAws_json1_1EntitiesDetectionJobPropertiesList(output.EntitiesDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEntityRecognizersResponse = (
  output: any,
  context: __SerdeContext
): ListEntityRecognizersResponse => {
  return {
    EntityRecognizerPropertiesList:
      output.EntityRecognizerPropertiesList != null
        ? deserializeAws_json1_1EntityRecognizerPropertiesList(output.EntityRecognizerPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEntityRecognizerSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListEntityRecognizerSummariesResponse => {
  return {
    EntityRecognizerSummariesList:
      output.EntityRecognizerSummariesList != null
        ? deserializeAws_json1_1EntityRecognizerSummariesList(output.EntityRecognizerSummariesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEventsDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListEventsDetectionJobsResponse => {
  return {
    EventsDetectionJobPropertiesList:
      output.EventsDetectionJobPropertiesList != null
        ? deserializeAws_json1_1EventsDetectionJobPropertiesList(output.EventsDetectionJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPhrasesDetectionJobsResponse => {
  return {
    KeyPhrasesDetectionJobPropertiesList:
      output.KeyPhrasesDetectionJobPropertiesList != null
        ? deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList(
            output.KeyPhrasesDetectionJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListOfBlockReferences = (output: any, context: __SerdeContext): BlockReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BlockReference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfBlocks = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Block(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfChildBlocks = (output: any, context: __SerdeContext): ChildBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ChildBlock(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfClasses = (output: any, context: __SerdeContext): DocumentClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentClass(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDescriptiveMentionIndices = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1ListOfDetectDominantLanguageResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectDominantLanguageItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDetectEntitiesResult = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectEntitiesItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDetectKeyPhrasesResult = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectKeyPhrasesItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDetectSentimentResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectSentimentItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDetectSyntaxResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectSyntaxItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDetectTargetedSentimentResult = (
  output: any,
  context: __SerdeContext
): BatchDetectTargetedSentimentItemResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDetectTargetedSentimentItemResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDocumentReadFeatureTypes = (
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

const deserializeAws_json1_1ListOfDocumentType = (output: any, context: __SerdeContext): DocumentTypeListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentTypeListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfDominantLanguages = (output: any, context: __SerdeContext): DominantLanguage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DominantLanguage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfEntities = (output: any, context: __SerdeContext): Entity[] => {
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

const deserializeAws_json1_1ListOfEntityLabels = (output: any, context: __SerdeContext): EntityLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityLabel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfErrors = (output: any, context: __SerdeContext): ErrorsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ErrorsListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfExtractedCharacters = (
  output: any,
  context: __SerdeContext
): ExtractedCharactersListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExtractedCharactersListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfKeyPhrases = (output: any, context: __SerdeContext): KeyPhrase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyPhrase(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfLabels = (output: any, context: __SerdeContext): DocumentLabel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentLabel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfMentions = (output: any, context: __SerdeContext): TargetedSentimentMention[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetedSentimentMention(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfPiiEntities = (output: any, context: __SerdeContext): PiiEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PiiEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfPiiEntityTypes = (
  output: any,
  context: __SerdeContext
): (PiiEntityType | string)[] => {
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

const deserializeAws_json1_1ListOfRelationships = (output: any, context: __SerdeContext): RelationshipsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationshipsListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfSyntaxTokens = (output: any, context: __SerdeContext): SyntaxToken[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SyntaxToken(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfTargetedSentimentEntities = (
  output: any,
  context: __SerdeContext
): TargetedSentimentEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetedSentimentEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListPiiEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPiiEntitiesDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PiiEntitiesDetectionJobPropertiesList:
      output.PiiEntitiesDetectionJobPropertiesList != null
        ? deserializeAws_json1_1PiiEntitiesDetectionJobPropertiesList(
            output.PiiEntitiesDetectionJobPropertiesList,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSentimentDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SentimentDetectionJobPropertiesList:
      output.SentimentDetectionJobPropertiesList != null
        ? deserializeAws_json1_1SentimentDetectionJobPropertiesList(output.SentimentDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTargetedSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTargetedSentimentDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TargetedSentimentDetectionJobPropertiesList:
      output.TargetedSentimentDetectionJobPropertiesList != null
        ? deserializeAws_json1_1TargetedSentimentDetectionJobPropertiesList(
            output.TargetedSentimentDetectionJobPropertiesList,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTopicsDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTopicsDetectionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TopicsDetectionJobPropertiesList:
      output.TopicsDetectionJobPropertiesList != null
        ? deserializeAws_json1_1TopicsDetectionJobPropertiesList(output.TopicsDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MentionSentiment = (output: any, context: __SerdeContext): MentionSentiment => {
  return {
    Sentiment: __expectString(output.Sentiment),
    SentimentScore:
      output.SentimentScore != null ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context) : undefined,
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1PartOfSpeechTag = (output: any, context: __SerdeContext): PartOfSpeechTag => {
  return {
    Score: __limitedParseFloat32(output.Score),
    Tag: __expectString(output.Tag),
  } as any;
};

const deserializeAws_json1_1PiiEntitiesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): PiiEntitiesDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    Mode: __expectString(output.Mode),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1PiiOutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    RedactionConfig:
      output.RedactionConfig != null
        ? deserializeAws_json1_1RedactionConfig(output.RedactionConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1PiiEntitiesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): PiiEntitiesDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PiiEntitiesDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PiiEntity = (output: any, context: __SerdeContext): PiiEntity => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Score: __limitedParseFloat32(output.Score),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PiiOutputDataConfig = (output: any, context: __SerdeContext): PiiOutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Point(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
  } as any;
};

const deserializeAws_json1_1RedactionConfig = (output: any, context: __SerdeContext): RedactionConfig => {
  return {
    MaskCharacter: __expectString(output.MaskCharacter),
    MaskMode: __expectString(output.MaskMode),
    PiiEntityTypes:
      output.PiiEntityTypes != null
        ? deserializeAws_json1_1ListOfPiiEntityTypes(output.PiiEntityTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RelationshipsListItem = (output: any, context: __SerdeContext): RelationshipsListItem => {
  return {
    Ids: output.Ids != null ? deserializeAws_json1_1StringList(output.Ids, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SentimentDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): SentimentDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SentimentDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): SentimentDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    Mixed: __limitedParseFloat32(output.Mixed),
    Negative: __limitedParseFloat32(output.Negative),
    Neutral: __limitedParseFloat32(output.Neutral),
    Positive: __limitedParseFloat32(output.Positive),
  } as any;
};

const deserializeAws_json1_1StartDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentClassificationJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartDominantLanguageDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartEventsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartEventsDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartKeyPhrasesDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartPiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartPiiEntitiesDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartSentimentDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTargetedSentimentDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StartTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTopicsDetectionJobResponse => {
  return {
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopDominantLanguageDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopEventsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopEventsDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopKeyPhrasesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopPiiEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopPiiEntitiesDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopSentimentDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopTargetedSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopTargetedSentimentDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopTrainingDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingDocumentClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopTrainingEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingEntityRecognizerResponse => {
  return {} as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Subnets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SyntaxToken = (output: any, context: __SerdeContext): SyntaxToken => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    PartOfSpeech:
      output.PartOfSpeech != null ? deserializeAws_json1_1PartOfSpeechTag(output.PartOfSpeech, context) : undefined,
    Text: __expectString(output.Text),
    TokenId: __expectInt32(output.TokenId),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TargetedSentimentDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): TargetedSentimentDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    LanguageCode: __expectString(output.LanguageCode),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TargetedSentimentDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TargetedSentimentDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetedSentimentDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TargetedSentimentEntity = (
  output: any,
  context: __SerdeContext
): TargetedSentimentEntity => {
  return {
    DescriptiveMentionIndex:
      output.DescriptiveMentionIndex != null
        ? deserializeAws_json1_1ListOfDescriptiveMentionIndices(output.DescriptiveMentionIndex, context)
        : undefined,
    Mentions: output.Mentions != null ? deserializeAws_json1_1ListOfMentions(output.Mentions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TargetedSentimentMention = (
  output: any,
  context: __SerdeContext
): TargetedSentimentMention => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    GroupScore: __limitedParseFloat32(output.GroupScore),
    MentionSentiment:
      output.MentionSentiment != null
        ? deserializeAws_json1_1MentionSentiment(output.MentionSentiment, context)
        : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1TargetEventTypes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyTagKeysException = (
  output: any,
  context: __SerdeContext
): TooManyTagKeysException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TopicsDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): TopicsDetectionJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobArn: __expectString(output.JobArn),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    NumberOfTopics: __expectInt32(output.NumberOfTopics),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    VolumeKmsKeyId: __expectString(output.VolumeKmsKeyId),
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TopicsDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TopicsDetectionJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TopicsDetectionJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnsupportedLanguageException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateEndpointResponse = (output: any, context: __SerdeContext): UpdateEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_json1_1Subnets(output.Subnets, context) : undefined,
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
