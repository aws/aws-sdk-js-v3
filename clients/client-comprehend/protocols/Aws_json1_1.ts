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
import { ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput } from "../commands/ClassifyDocumentCommand";
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
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
} from "../commands/DescribeKeyPhrasesDetectionJobCommand";
import {
  DescribeSentimentDetectionJobCommandInput,
  DescribeSentimentDetectionJobCommandOutput,
} from "../commands/DescribeSentimentDetectionJobCommand";
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
import { DetectSentimentCommandInput, DetectSentimentCommandOutput } from "../commands/DetectSentimentCommand";
import { DetectSyntaxCommandInput, DetectSyntaxCommandOutput } from "../commands/DetectSyntaxCommand";
import {
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "../commands/ListDocumentClassificationJobsCommand";
import {
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "../commands/ListDocumentClassifiersCommand";
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
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "../commands/ListKeyPhrasesDetectionJobsCommand";
import {
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "../commands/ListSentimentDetectionJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "../commands/ListTopicsDetectionJobsCommand";
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
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
} from "../commands/StartKeyPhrasesDetectionJobCommand";
import {
  StartSentimentDetectionJobCommandInput,
  StartSentimentDetectionJobCommandOutput,
} from "../commands/StartSentimentDetectionJobCommand";
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
  StopKeyPhrasesDetectionJobCommandInput,
  StopKeyPhrasesDetectionJobCommandOutput,
} from "../commands/StopKeyPhrasesDetectionJobCommand";
import {
  StopSentimentDetectionJobCommandInput,
  StopSentimentDetectionJobCommandOutput,
} from "../commands/StopSentimentDetectionJobCommand";
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
import {
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
  BatchItemError,
  BatchSizeLimitExceededException,
  ClassifierEvaluationMetrics,
  ClassifierMetadata,
  ClassifyDocumentRequest,
  ClassifyDocumentResponse,
  ConcurrentModificationException,
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
  DescribeKeyPhrasesDetectionJobRequest,
  DescribeKeyPhrasesDetectionJobResponse,
  DescribeSentimentDetectionJobRequest,
  DescribeSentimentDetectionJobResponse,
  DescribeTopicsDetectionJobRequest,
  DescribeTopicsDetectionJobResponse,
  DetectDominantLanguageRequest,
  DetectDominantLanguageResponse,
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectKeyPhrasesRequest,
  DetectKeyPhrasesResponse,
  DetectSentimentRequest,
  DetectSentimentResponse,
  DetectSyntaxRequest,
  DetectSyntaxResponse,
  DocumentClass,
  DocumentClassificationJobFilter,
  DocumentClassificationJobProperties,
  DocumentClassifierFilter,
  DocumentClassifierInputDataConfig,
  DocumentClassifierOutputDataConfig,
  DocumentClassifierProperties,
  DocumentLabel,
  DominantLanguage,
  DominantLanguageDetectionJobFilter,
  DominantLanguageDetectionJobProperties,
  EndpointFilter,
  EndpointProperties,
  EntitiesDetectionJobFilter,
  EntitiesDetectionJobProperties,
  Entity,
  EntityRecognizerAnnotations,
  EntityRecognizerDocuments,
  EntityRecognizerEntityList,
  EntityRecognizerEvaluationMetrics,
  EntityRecognizerFilter,
  EntityRecognizerInputDataConfig,
  EntityRecognizerMetadata,
  EntityRecognizerMetadataEntityTypesListItem,
  EntityRecognizerProperties,
  EntityTypesEvaluationMetrics,
  EntityTypesListItem,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
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
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEntitiesDetectionJobsRequest,
  ListEntitiesDetectionJobsResponse,
  ListEntityRecognizersRequest,
  ListEntityRecognizersResponse,
  ListKeyPhrasesDetectionJobsRequest,
  ListKeyPhrasesDetectionJobsResponse,
  ListSentimentDetectionJobsRequest,
  ListSentimentDetectionJobsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTopicsDetectionJobsRequest,
  ListTopicsDetectionJobsResponse,
  OutputDataConfig,
  PartOfSpeechTag,
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
  StartKeyPhrasesDetectionJobRequest,
  StartKeyPhrasesDetectionJobResponse,
  StartSentimentDetectionJobRequest,
  StartSentimentDetectionJobResponse,
  StartTopicsDetectionJobRequest,
  StartTopicsDetectionJobResponse,
  StopDominantLanguageDetectionJobRequest,
  StopDominantLanguageDetectionJobResponse,
  StopEntitiesDetectionJobRequest,
  StopEntitiesDetectionJobResponse,
  StopKeyPhrasesDetectionJobRequest,
  StopKeyPhrasesDetectionJobResponse,
  StopSentimentDetectionJobRequest,
  StopSentimentDetectionJobResponse,
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierResponse,
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerResponse,
  SyntaxToken,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
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
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1BatchDetectDominantLanguageCommand = async (
  input: BatchDetectDominantLanguageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.BatchDetectDominantLanguage",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.BatchDetectEntities",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.BatchDetectKeyPhrases",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.BatchDetectSentiment",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.BatchDetectSyntax",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDetectSyntaxRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ClassifyDocumentCommand = async (
  input: ClassifyDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ClassifyDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ClassifyDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDocumentClassifierCommand = async (
  input: CreateDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.CreateDocumentClassifier",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.CreateEndpoint",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.CreateEntityRecognizer",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DeleteDocumentClassifier",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DeleteEndpoint",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DeleteEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDocumentClassificationJobCommand = async (
  input: DescribeDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeDocumentClassificationJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeDocumentClassifier",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeDominantLanguageDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeEndpoint",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeEntitiesDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeEntityRecognizer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntityRecognizerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = async (
  input: DescribeKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSentimentDetectionJobCommand = async (
  input: DescribeSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTopicsDetectionJobCommand = async (
  input: DescribeTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DescribeTopicsDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DetectDominantLanguage",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DetectEntities",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DetectKeyPhrases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectKeyPhrasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectSentimentCommand = async (
  input: DetectSentimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DetectSentiment",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.DetectSyntax",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectSyntaxRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDocumentClassificationJobsCommand = async (
  input: ListDocumentClassificationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListDocumentClassificationJobs",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListDocumentClassifiers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDocumentClassifiersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDominantLanguageDetectionJobsCommand = async (
  input: ListDominantLanguageDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListDominantLanguageDetectionJobs",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListEndpoints",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListEntitiesDetectionJobs",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListEntityRecognizers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntityRecognizersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = async (
  input: ListKeyPhrasesDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListKeyPhrasesDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSentimentDetectionJobsCommand = async (
  input: ListSentimentDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListSentimentDetectionJobs",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTopicsDetectionJobsCommand = async (
  input: ListTopicsDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.ListTopicsDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTopicsDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDocumentClassificationJobCommand = async (
  input: StartDocumentClassificationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartDocumentClassificationJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartDominantLanguageDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartKeyPhrasesDetectionJobCommand = async (
  input: StartKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSentimentDetectionJobCommand = async (
  input: StartSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTopicsDetectionJobCommand = async (
  input: StartTopicsDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StartTopicsDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopDominantLanguageDetectionJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopEntitiesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopKeyPhrasesDetectionJobCommand = async (
  input: StopKeyPhrasesDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopKeyPhrasesDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopKeyPhrasesDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSentimentDetectionJobCommand = async (
  input: StopSentimentDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopSentimentDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSentimentDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTrainingDocumentClassifierCommand = async (
  input: StopTrainingDocumentClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopTrainingDocumentClassifier",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.StopTrainingEntityRecognizer",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.TagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.UntagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Comprehend_20171127.UpdateEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchDetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectDominantLanguageResponse(data, context);
  const response: BatchDetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDetectDominantLanguageResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectEntitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectEntitiesResponse(data, context);
  const response: BatchDetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDetectEntitiesResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectKeyPhrasesResponse(data, context);
  const response: BatchDetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDetectKeyPhrasesResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSentimentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectSentimentResponse(data, context);
  const response: BatchDetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDetectSentimentResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDetectSyntaxCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDetectSyntaxResponse(data, context);
  const response: BatchDetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDetectSyntaxResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchSizeLimitExceededException":
    case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ClassifyDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClassifyDocumentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ClassifyDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ClassifyDocumentResponse(data, context);
  const response: ClassifyDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ClassifyDocumentResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDocumentClassifierResponse(data, context);
  const response: CreateDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDocumentClassifierResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEndpointResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEntityRecognizerResponse(data, context);
  const response: CreateEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEntityRecognizerResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDocumentClassifierResponse(data, context);
  const response: DeleteDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDocumentClassifierResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEndpointResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEntityRecognizerResponse(data, context);
  const response: DeleteEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEntityRecognizerResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentClassificationJobResponse(data, context);
  const response: DescribeDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDocumentClassificationJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDocumentClassifierResponse(data, context);
  const response: DescribeDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDocumentClassifierResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse(data, context);
  const response: DescribeDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDominantLanguageDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointResponse(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEndpointResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntitiesDetectionJobResponse(data, context);
  const response: DescribeEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEntitiesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntityRecognizerResponse(data, context);
  const response: DescribeEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEntityRecognizerResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse(data, context);
  const response: DescribeKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeKeyPhrasesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSentimentDetectionJobResponse(data, context);
  const response: DescribeSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSentimentDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTopicsDetectionJobResponse(data, context);
  const response: DescribeTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTopicsDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectDominantLanguageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDominantLanguageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectDominantLanguageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectDominantLanguageResponse(data, context);
  const response: DetectDominantLanguageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectDominantLanguageResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectEntitiesResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectKeyPhrasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectKeyPhrasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectKeyPhrasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectKeyPhrasesResponse(data, context);
  const response: DetectKeyPhrasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectKeyPhrasesResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectSentimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSentimentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectSentimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectSentimentResponse(data, context);
  const response: DetectSentimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectSentimentResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetectSyntaxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectSyntaxCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectSyntaxCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectSyntaxResponse(data, context);
  const response: DetectSyntaxCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectSyntaxResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehend#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguageException":
    case "com.amazonaws.comprehend#UnsupportedLanguageException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDocumentClassificationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassificationJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDocumentClassificationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentClassificationJobsResponse(data, context);
  const response: ListDocumentClassificationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDocumentClassificationJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDocumentClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentClassifiersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDocumentClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDocumentClassifiersResponse(data, context);
  const response: ListDocumentClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDocumentClassifiersResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse(data, context);
  const response: ListDominantLanguageDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDominantLanguageDetectionJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEndpointsResponse(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEndpointsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEntitiesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEntitiesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntitiesDetectionJobsResponse(data, context);
  const response: ListEntitiesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntitiesDetectionJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEntityRecognizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityRecognizersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEntityRecognizersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntityRecognizersResponse(data, context);
  const response: ListEntityRecognizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntityRecognizersResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse(data, context);
  const response: ListKeyPhrasesDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListKeyPhrasesDetectionJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSentimentDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSentimentDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSentimentDetectionJobsResponse(data, context);
  const response: ListSentimentDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSentimentDetectionJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTopicsDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTopicsDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTopicsDetectionJobsResponse(data, context);
  const response: ListTopicsDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTopicsDetectionJobsResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.comprehend#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartDocumentClassificationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentClassificationJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDocumentClassificationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentClassificationJobResponse(data, context);
  const response: StartDocumentClassificationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDocumentClassificationJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDominantLanguageDetectionJobResponse(data, context);
  const response: StartDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDominantLanguageDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEntitiesDetectionJobResponse(data, context);
  const response: StartEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartEntitiesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse(data, context);
  const response: StartKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartKeyPhrasesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSentimentDetectionJobResponse(data, context);
  const response: StartSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSentimentDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartTopicsDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTopicsDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTopicsDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTopicsDetectionJobResponse(data, context);
  const response: StartTopicsDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTopicsDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsKeyValidationException":
    case "com.amazonaws.comprehend#KmsKeyValidationException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopDominantLanguageDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDominantLanguageDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDominantLanguageDetectionJobResponse(data, context);
  const response: StopDominantLanguageDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDominantLanguageDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopEntitiesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopEntitiesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEntitiesDetectionJobResponse(data, context);
  const response: StopEntitiesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopEntitiesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyPhrasesDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse(data, context);
  const response: StopKeyPhrasesDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopKeyPhrasesDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopSentimentDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSentimentDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopSentimentDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopSentimentDetectionJobResponse(data, context);
  const response: StopSentimentDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopSentimentDetectionJobResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.comprehend#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopTrainingDocumentClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingDocumentClassifierCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopTrainingDocumentClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTrainingDocumentClassifierResponse(data, context);
  const response: StopTrainingDocumentClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopTrainingDocumentClassifierResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopTrainingEntityRecognizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingEntityRecognizerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopTrainingEntityRecognizerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTrainingEntityRecognizerResponse(data, context);
  const response: StopTrainingEntityRecognizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopTrainingEntityRecognizerResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.comprehend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.comprehend#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagKeysException":
    case "com.amazonaws.comprehend#TooManyTagKeysException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEndpointResponse(data, context);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEndpointResponse",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehend#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehend#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.comprehend#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.comprehend#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehend#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.comprehend#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BatchSizeLimitExceededException(body, context);
  const contents: BatchSizeLimitExceededException = {
    name: "BatchSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterException(body, context);
  const contents: InvalidFilterException = {
    name: "InvalidFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1JobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1JobNotFoundException(body, context);
  const contents: JobNotFoundException = {
    name: "JobNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KmsKeyValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyValidationException(body, context);
  const contents: KmsKeyValidationException = {
    name: "KmsKeyValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
  const contents: TextSizeLimitExceededException = {
    name: "TextSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagKeysException(body, context);
  const contents: TooManyTagKeysException = {
    name: "TooManyTagKeysException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguageException(body, context);
  const contents: UnsupportedLanguageException = {
    name: "UnsupportedLanguageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1BatchDetectDominantLanguageRequest = (
  input: BatchDetectDominantLanguageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TextList !== undefined && { TextList: serializeAws_json1_1StringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectEntitiesRequest = (
  input: BatchDetectEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.TextList !== undefined && { TextList: serializeAws_json1_1StringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectKeyPhrasesRequest = (
  input: BatchDetectKeyPhrasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.TextList !== undefined && { TextList: serializeAws_json1_1StringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectSentimentRequest = (
  input: BatchDetectSentimentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.TextList !== undefined && { TextList: serializeAws_json1_1StringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1BatchDetectSyntaxRequest = (
  input: BatchDetectSyntaxRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.TextList !== undefined && { TextList: serializeAws_json1_1StringList(input.TextList, context) }),
  };
};

const serializeAws_json1_1ClassifyDocumentRequest = (input: ClassifyDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn !== undefined && { EndpointArn: input.EndpointArn }),
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1CreateDocumentClassifierRequest = (
  input: CreateDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierName !== undefined && { DocumentClassifierName: input.DocumentClassifierName }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1DocumentClassifierInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Mode !== undefined && { Mode: input.Mode }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1DocumentClassifierOutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateEndpointRequest = (input: CreateEndpointRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DesiredInferenceUnits !== undefined && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.EndpointName !== undefined && { EndpointName: input.EndpointName }),
    ...(input.ModelArn !== undefined && { ModelArn: input.ModelArn }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateEntityRecognizerRequest = (
  input: CreateEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1EntityRecognizerInputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.RecognizerName !== undefined && { RecognizerName: input.RecognizerName }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1DeleteDocumentClassifierRequest = (
  input: DeleteDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn !== undefined && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1DeleteEndpointRequest = (input: DeleteEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn !== undefined && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DeleteEntityRecognizerRequest = (
  input: DeleteEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn !== undefined && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1DescribeDocumentClassificationJobRequest = (
  input: DescribeDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeDocumentClassifierRequest = (
  input: DescribeDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn !== undefined && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest = (
  input: DescribeDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeEndpointRequest = (input: DescribeEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn !== undefined && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DescribeEntitiesDetectionJobRequest = (
  input: DescribeEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeEntityRecognizerRequest = (
  input: DescribeEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn !== undefined && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest = (
  input: DescribeKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeSentimentDetectionJobRequest = (
  input: DescribeSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeTopicsDetectionJobRequest = (
  input: DescribeTopicsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DetectDominantLanguageRequest = (
  input: DetectDominantLanguageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectKeyPhrasesRequest = (input: DetectKeyPhrasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectSentimentRequest = (input: DetectSentimentRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectSyntaxRequest = (input: DetectSyntaxRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1DocumentClassificationJobFilter = (
  input: DocumentClassificationJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1DocumentClassifierFilter = (
  input: DocumentClassifierFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1DocumentClassifierInputDataConfig = (
  input: DocumentClassifierInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.LabelDelimiter !== undefined && { LabelDelimiter: input.LabelDelimiter }),
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1DocumentClassifierOutputDataConfig = (
  input: DocumentClassifierOutputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1DominantLanguageDetectionJobFilter = (
  input: DominantLanguageDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1EndpointFilter = (input: EndpointFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreationTimeAfter !== undefined && {
      CreationTimeAfter: Math.round(input.CreationTimeAfter.getTime() / 1000),
    }),
    ...(input.CreationTimeBefore !== undefined && {
      CreationTimeBefore: Math.round(input.CreationTimeBefore.getTime() / 1000),
    }),
    ...(input.ModelArn !== undefined && { ModelArn: input.ModelArn }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_json1_1EntitiesDetectionJobFilter = (
  input: EntitiesDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1EntityRecognizerAnnotations = (
  input: EntityRecognizerAnnotations,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerDocuments = (
  input: EntityRecognizerDocuments,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerEntityList = (
  input: EntityRecognizerEntityList,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1EntityRecognizerFilter = (input: EntityRecognizerFilter, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1EntityRecognizerInputDataConfig = (
  input: EntityRecognizerInputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Annotations !== undefined && {
      Annotations: serializeAws_json1_1EntityRecognizerAnnotations(input.Annotations, context),
    }),
    ...(input.Documents !== undefined && {
      Documents: serializeAws_json1_1EntityRecognizerDocuments(input.Documents, context),
    }),
    ...(input.EntityList !== undefined && {
      EntityList: serializeAws_json1_1EntityRecognizerEntityList(input.EntityList, context),
    }),
    ...(input.EntityTypes !== undefined && {
      EntityTypes: serializeAws_json1_1EntityTypesList(input.EntityTypes, context),
    }),
  };
};

const serializeAws_json1_1EntityTypesList = (input: EntityTypesListItem[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1EntityTypesListItem(entry, context));
};

const serializeAws_json1_1EntityTypesListItem = (input: EntityTypesListItem, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.InputFormat !== undefined && { InputFormat: input.InputFormat }),
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1KeyPhrasesDetectionJobFilter = (
  input: KeyPhrasesDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1ListDocumentClassificationJobsRequest = (
  input: ListDocumentClassificationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1DocumentClassificationJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDocumentClassifiersRequest = (
  input: ListDocumentClassifiersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && { Filter: serializeAws_json1_1DocumentClassifierFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDominantLanguageDetectionJobsRequest = (
  input: ListDominantLanguageDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1DominantLanguageDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEndpointsRequest = (input: ListEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined && { Filter: serializeAws_json1_1EndpointFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntitiesDetectionJobsRequest = (
  input: ListEntitiesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1EntitiesDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntityRecognizersRequest = (
  input: ListEntityRecognizersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && { Filter: serializeAws_json1_1EntityRecognizerFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest = (
  input: ListKeyPhrasesDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1KeyPhrasesDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSentimentDetectionJobsRequest = (
  input: ListSentimentDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1SentimentDetectionJobFilter(input.Filter, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTopicsDetectionJobsRequest = (
  input: ListTopicsDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && { Filter: serializeAws_json1_1TopicsDetectionJobFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri !== undefined && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SentimentDetectionJobFilter = (
  input: SentimentDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1StartDocumentClassificationJobRequest = (
  input: StartDocumentClassificationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DocumentClassifierArn !== undefined && { DocumentClassifierArn: input.DocumentClassifierArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartDominantLanguageDetectionJobRequest = (
  input: StartDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartEntitiesDetectionJobRequest = (
  input: StartEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.EntityRecognizerArn !== undefined && { EntityRecognizerArn: input.EntityRecognizerArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartKeyPhrasesDetectionJobRequest = (
  input: StartKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartSentimentDetectionJobRequest = (
  input: StartSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StartTopicsDetectionJobRequest = (
  input: StartTopicsDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.NumberOfTopics !== undefined && { NumberOfTopics: input.NumberOfTopics }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.VolumeKmsKeyId !== undefined && { VolumeKmsKeyId: input.VolumeKmsKeyId }),
    ...(input.VpcConfig !== undefined && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1StopDominantLanguageDetectionJobRequest = (
  input: StopDominantLanguageDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopEntitiesDetectionJobRequest = (
  input: StopEntitiesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopKeyPhrasesDetectionJobRequest = (
  input: StopKeyPhrasesDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopSentimentDetectionJobRequest = (
  input: StopSentimentDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopTrainingDocumentClassifierRequest = (
  input: StopTrainingDocumentClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentClassifierArn !== undefined && { DocumentClassifierArn: input.DocumentClassifierArn }),
  };
};

const serializeAws_json1_1StopTrainingEntityRecognizerRequest = (
  input: StopTrainingEntityRecognizerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityRecognizerArn !== undefined && { EntityRecognizerArn: input.EntityRecognizerArn }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Subnets = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TopicsDetectionJobFilter = (
  input: TopicsDetectionJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateEndpointRequest = (input: UpdateEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.DesiredInferenceUnits !== undefined && { DesiredInferenceUnits: input.DesiredInferenceUnits }),
    ...(input.EndpointArn !== undefined && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.Subnets !== undefined && { Subnets: serializeAws_json1_1Subnets(input.Subnets, context) }),
  };
};

const deserializeAws_json1_1BatchDetectDominantLanguageItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult => {
  return {
    __type: "BatchDetectDominantLanguageItemResult",
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
    Languages:
      output.Languages !== undefined && output.Languages !== null
        ? deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageResponse => {
  return {
    __type: "BatchDetectDominantLanguageResponse",
    ErrorList:
      output.ErrorList !== undefined && output.ErrorList !== null
        ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context)
        : undefined,
    ResultList:
      output.ResultList !== undefined && output.ResultList !== null
        ? deserializeAws_json1_1ListOfDetectDominantLanguageResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectEntitiesItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesItemResult => {
  return {
    __type: "BatchDetectEntitiesItemResult",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1ListOfEntities(output.Entities, context)
        : undefined,
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectEntitiesResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesResponse => {
  return {
    __type: "BatchDetectEntitiesResponse",
    ErrorList:
      output.ErrorList !== undefined && output.ErrorList !== null
        ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context)
        : undefined,
    ResultList:
      output.ResultList !== undefined && output.ResultList !== null
        ? deserializeAws_json1_1ListOfDetectEntitiesResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectKeyPhrasesItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesItemResult => {
  return {
    __type: "BatchDetectKeyPhrasesItemResult",
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
    KeyPhrases:
      output.KeyPhrases !== undefined && output.KeyPhrases !== null
        ? deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectKeyPhrasesResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesResponse => {
  return {
    __type: "BatchDetectKeyPhrasesResponse",
    ErrorList:
      output.ErrorList !== undefined && output.ErrorList !== null
        ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context)
        : undefined,
    ResultList:
      output.ResultList !== undefined && output.ResultList !== null
        ? deserializeAws_json1_1ListOfDetectKeyPhrasesResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSentimentItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentItemResult => {
  return {
    __type: "BatchDetectSentimentItemResult",
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
    Sentiment: output.Sentiment !== undefined && output.Sentiment !== null ? output.Sentiment : undefined,
    SentimentScore:
      output.SentimentScore !== undefined && output.SentimentScore !== null
        ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSentimentResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentResponse => {
  return {
    __type: "BatchDetectSentimentResponse",
    ErrorList:
      output.ErrorList !== undefined && output.ErrorList !== null
        ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context)
        : undefined,
    ResultList:
      output.ResultList !== undefined && output.ResultList !== null
        ? deserializeAws_json1_1ListOfDetectSentimentResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSyntaxItemResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxItemResult => {
  return {
    __type: "BatchDetectSyntaxItemResult",
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
    SyntaxTokens:
      output.SyntaxTokens !== undefined && output.SyntaxTokens !== null
        ? deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDetectSyntaxResponse = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxResponse => {
  return {
    __type: "BatchDetectSyntaxResponse",
    ErrorList:
      output.ErrorList !== undefined && output.ErrorList !== null
        ? deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context)
        : undefined,
    ResultList:
      output.ResultList !== undefined && output.ResultList !== null
        ? deserializeAws_json1_1ListOfDetectSyntaxResult(output.ResultList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    __type: "BatchItemError",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Index: output.Index !== undefined && output.Index !== null ? output.Index : undefined,
  } as any;
};

const deserializeAws_json1_1BatchItemErrorList = (output: any, context: __SerdeContext): BatchItemError[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BatchItemError(entry, context));
};

const deserializeAws_json1_1BatchSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): BatchSizeLimitExceededException => {
  return {
    __type: "BatchSizeLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ClassifierEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): ClassifierEvaluationMetrics => {
  return {
    __type: "ClassifierEvaluationMetrics",
    Accuracy: output.Accuracy !== undefined && output.Accuracy !== null ? output.Accuracy : undefined,
    F1Score: output.F1Score !== undefined && output.F1Score !== null ? output.F1Score : undefined,
    HammingLoss: output.HammingLoss !== undefined && output.HammingLoss !== null ? output.HammingLoss : undefined,
    MicroF1Score: output.MicroF1Score !== undefined && output.MicroF1Score !== null ? output.MicroF1Score : undefined,
    MicroPrecision:
      output.MicroPrecision !== undefined && output.MicroPrecision !== null ? output.MicroPrecision : undefined,
    MicroRecall: output.MicroRecall !== undefined && output.MicroRecall !== null ? output.MicroRecall : undefined,
    Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
    Recall: output.Recall !== undefined && output.Recall !== null ? output.Recall : undefined,
  } as any;
};

const deserializeAws_json1_1ClassifierMetadata = (output: any, context: __SerdeContext): ClassifierMetadata => {
  return {
    __type: "ClassifierMetadata",
    EvaluationMetrics:
      output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
        ? deserializeAws_json1_1ClassifierEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfLabels:
      output.NumberOfLabels !== undefined && output.NumberOfLabels !== null ? output.NumberOfLabels : undefined,
    NumberOfTestDocuments:
      output.NumberOfTestDocuments !== undefined && output.NumberOfTestDocuments !== null
        ? output.NumberOfTestDocuments
        : undefined,
    NumberOfTrainedDocuments:
      output.NumberOfTrainedDocuments !== undefined && output.NumberOfTrainedDocuments !== null
        ? output.NumberOfTrainedDocuments
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClassifyDocumentResponse = (
  output: any,
  context: __SerdeContext
): ClassifyDocumentResponse => {
  return {
    __type: "ClassifyDocumentResponse",
    Classes:
      output.Classes !== undefined && output.Classes !== null
        ? deserializeAws_json1_1ListOfClasses(output.Classes, context)
        : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_json1_1ListOfLabels(output.Labels, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateDocumentClassifierResponse => {
  return {
    __type: "CreateDocumentClassifierResponse",
    DocumentClassifierArn:
      output.DocumentClassifierArn !== undefined && output.DocumentClassifierArn !== null
        ? output.DocumentClassifierArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    __type: "CreateEndpointResponse",
    EndpointArn: output.EndpointArn !== undefined && output.EndpointArn !== null ? output.EndpointArn : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): CreateEntityRecognizerResponse => {
  return {
    __type: "CreateEntityRecognizerResponse",
    EntityRecognizerArn:
      output.EntityRecognizerArn !== undefined && output.EntityRecognizerArn !== null
        ? output.EntityRecognizerArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteDocumentClassifierResponse => {
  return {
    __type: "DeleteDocumentClassifierResponse",
  } as any;
};

const deserializeAws_json1_1DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {
    __type: "DeleteEndpointResponse",
  } as any;
};

const deserializeAws_json1_1DeleteEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DeleteEntityRecognizerResponse => {
  return {
    __type: "DeleteEntityRecognizerResponse",
  } as any;
};

const deserializeAws_json1_1DescribeDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassificationJobResponse => {
  return {
    __type: "DescribeDocumentClassificationJobResponse",
    DocumentClassificationJobProperties:
      output.DocumentClassificationJobProperties !== undefined && output.DocumentClassificationJobProperties !== null
        ? deserializeAws_json1_1DocumentClassificationJobProperties(output.DocumentClassificationJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): DescribeDocumentClassifierResponse => {
  return {
    __type: "DescribeDocumentClassifierResponse",
    DocumentClassifierProperties:
      output.DocumentClassifierProperties !== undefined && output.DocumentClassifierProperties !== null
        ? deserializeAws_json1_1DocumentClassifierProperties(output.DocumentClassifierProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDominantLanguageDetectionJobResponse => {
  return {
    __type: "DescribeDominantLanguageDetectionJobResponse",
    DominantLanguageDetectionJobProperties:
      output.DominantLanguageDetectionJobProperties !== undefined &&
      output.DominantLanguageDetectionJobProperties !== null
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
    __type: "DescribeEndpointResponse",
    EndpointProperties:
      output.EndpointProperties !== undefined && output.EndpointProperties !== null
        ? deserializeAws_json1_1EndpointProperties(output.EndpointProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionJobResponse => {
  return {
    __type: "DescribeEntitiesDetectionJobResponse",
    EntitiesDetectionJobProperties:
      output.EntitiesDetectionJobProperties !== undefined && output.EntitiesDetectionJobProperties !== null
        ? deserializeAws_json1_1EntitiesDetectionJobProperties(output.EntitiesDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityRecognizerResponse => {
  return {
    __type: "DescribeEntityRecognizerResponse",
    EntityRecognizerProperties:
      output.EntityRecognizerProperties !== undefined && output.EntityRecognizerProperties !== null
        ? deserializeAws_json1_1EntityRecognizerProperties(output.EntityRecognizerProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyPhrasesDetectionJobResponse => {
  return {
    __type: "DescribeKeyPhrasesDetectionJobResponse",
    KeyPhrasesDetectionJobProperties:
      output.KeyPhrasesDetectionJobProperties !== undefined && output.KeyPhrasesDetectionJobProperties !== null
        ? deserializeAws_json1_1KeyPhrasesDetectionJobProperties(output.KeyPhrasesDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSentimentDetectionJobResponse => {
  return {
    __type: "DescribeSentimentDetectionJobResponse",
    SentimentDetectionJobProperties:
      output.SentimentDetectionJobProperties !== undefined && output.SentimentDetectionJobProperties !== null
        ? deserializeAws_json1_1SentimentDetectionJobProperties(output.SentimentDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTopicsDetectionJobResponse => {
  return {
    __type: "DescribeTopicsDetectionJobResponse",
    TopicsDetectionJobProperties:
      output.TopicsDetectionJobProperties !== undefined && output.TopicsDetectionJobProperties !== null
        ? deserializeAws_json1_1TopicsDetectionJobProperties(output.TopicsDetectionJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectDominantLanguageResponse = (
  output: any,
  context: __SerdeContext
): DetectDominantLanguageResponse => {
  return {
    __type: "DetectDominantLanguageResponse",
    Languages:
      output.Languages !== undefined && output.Languages !== null
        ? deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return {
    __type: "DetectEntitiesResponse",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1ListOfEntities(output.Entities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectKeyPhrasesResponse = (
  output: any,
  context: __SerdeContext
): DetectKeyPhrasesResponse => {
  return {
    __type: "DetectKeyPhrasesResponse",
    KeyPhrases:
      output.KeyPhrases !== undefined && output.KeyPhrases !== null
        ? deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectSentimentResponse = (
  output: any,
  context: __SerdeContext
): DetectSentimentResponse => {
  return {
    __type: "DetectSentimentResponse",
    Sentiment: output.Sentiment !== undefined && output.Sentiment !== null ? output.Sentiment : undefined,
    SentimentScore:
      output.SentimentScore !== undefined && output.SentimentScore !== null
        ? deserializeAws_json1_1SentimentScore(output.SentimentScore, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectSyntaxResponse = (output: any, context: __SerdeContext): DetectSyntaxResponse => {
  return {
    __type: "DetectSyntaxResponse",
    SyntaxTokens:
      output.SyntaxTokens !== undefined && output.SyntaxTokens !== null
        ? deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClass = (output: any, context: __SerdeContext): DocumentClass => {
  return {
    __type: "DocumentClass",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassificationJobProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties => {
  return {
    __type: "DocumentClassificationJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    DocumentClassifierArn:
      output.DocumentClassifierArn !== undefined && output.DocumentClassifierArn !== null
        ? output.DocumentClassifierArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassificationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DocumentClassificationJobProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentClassificationJobProperties(entry, context));
};

const deserializeAws_json1_1DocumentClassifierInputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierInputDataConfig => {
  return {
    __type: "DocumentClassifierInputDataConfig",
    LabelDelimiter:
      output.LabelDelimiter !== undefined && output.LabelDelimiter !== null ? output.LabelDelimiter : undefined,
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassifierOutputDataConfig = (
  output: any,
  context: __SerdeContext
): DocumentClassifierOutputDataConfig => {
  return {
    __type: "DocumentClassifierOutputDataConfig",
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassifierProperties = (
  output: any,
  context: __SerdeContext
): DocumentClassifierProperties => {
  return {
    __type: "DocumentClassifierProperties",
    ClassifierMetadata:
      output.ClassifierMetadata !== undefined && output.ClassifierMetadata !== null
        ? deserializeAws_json1_1ClassifierMetadata(output.ClassifierMetadata, context)
        : undefined,
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    DocumentClassifierArn:
      output.DocumentClassifierArn !== undefined && output.DocumentClassifierArn !== null
        ? output.DocumentClassifierArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1DocumentClassifierInputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1DocumentClassifierOutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    TrainingEndTime:
      output.TrainingEndTime !== undefined && output.TrainingEndTime !== null
        ? new Date(Math.round(output.TrainingEndTime * 1000))
        : undefined,
    TrainingStartTime:
      output.TrainingStartTime !== undefined && output.TrainingStartTime !== null
        ? new Date(Math.round(output.TrainingStartTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentClassifierPropertiesList = (
  output: any,
  context: __SerdeContext
): DocumentClassifierProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentClassifierProperties(entry, context));
};

const deserializeAws_json1_1DocumentLabel = (output: any, context: __SerdeContext): DocumentLabel => {
  return {
    __type: "DocumentLabel",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
  } as any;
};

const deserializeAws_json1_1DominantLanguage = (output: any, context: __SerdeContext): DominantLanguage => {
  return {
    __type: "DominantLanguage",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
  } as any;
};

const deserializeAws_json1_1DominantLanguageDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties => {
  return {
    __type: "DominantLanguageDetectionJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): DominantLanguageDetectionJobProperties[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DominantLanguageDetectionJobProperties(entry, context)
  );
};

const deserializeAws_json1_1EndpointProperties = (output: any, context: __SerdeContext): EndpointProperties => {
  return {
    __type: "EndpointProperties",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    CurrentInferenceUnits:
      output.CurrentInferenceUnits !== undefined && output.CurrentInferenceUnits !== null
        ? output.CurrentInferenceUnits
        : undefined,
    DesiredInferenceUnits:
      output.DesiredInferenceUnits !== undefined && output.DesiredInferenceUnits !== null
        ? output.DesiredInferenceUnits
        : undefined,
    EndpointArn: output.EndpointArn !== undefined && output.EndpointArn !== null ? output.EndpointArn : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1EndpointPropertiesList = (output: any, context: __SerdeContext): EndpointProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EndpointProperties(entry, context));
};

const deserializeAws_json1_1EntitiesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): EntitiesDetectionJobProperties => {
  return {
    __type: "EntitiesDetectionJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    EntityRecognizerArn:
      output.EntityRecognizerArn !== undefined && output.EntityRecognizerArn !== null
        ? output.EntityRecognizerArn
        : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntitiesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): EntitiesDetectionJobProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EntitiesDetectionJobProperties(entry, context));
};

const deserializeAws_json1_1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    __type: "Entity",
    BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
    EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerAnnotations = (
  output: any,
  context: __SerdeContext
): EntityRecognizerAnnotations => {
  return {
    __type: "EntityRecognizerAnnotations",
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerDocuments = (
  output: any,
  context: __SerdeContext
): EntityRecognizerDocuments => {
  return {
    __type: "EntityRecognizerDocuments",
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerEntityList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEntityList => {
  return {
    __type: "EntityRecognizerEntityList",
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityRecognizerEvaluationMetrics => {
  return {
    __type: "EntityRecognizerEvaluationMetrics",
    F1Score: output.F1Score !== undefined && output.F1Score !== null ? output.F1Score : undefined,
    Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
    Recall: output.Recall !== undefined && output.Recall !== null ? output.Recall : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerInputDataConfig = (
  output: any,
  context: __SerdeContext
): EntityRecognizerInputDataConfig => {
  return {
    __type: "EntityRecognizerInputDataConfig",
    Annotations:
      output.Annotations !== undefined && output.Annotations !== null
        ? deserializeAws_json1_1EntityRecognizerAnnotations(output.Annotations, context)
        : undefined,
    Documents:
      output.Documents !== undefined && output.Documents !== null
        ? deserializeAws_json1_1EntityRecognizerDocuments(output.Documents, context)
        : undefined,
    EntityList:
      output.EntityList !== undefined && output.EntityList !== null
        ? deserializeAws_json1_1EntityRecognizerEntityList(output.EntityList, context)
        : undefined,
    EntityTypes:
      output.EntityTypes !== undefined && output.EntityTypes !== null
        ? deserializeAws_json1_1EntityTypesList(output.EntityTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerMetadata = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadata => {
  return {
    __type: "EntityRecognizerMetadata",
    EntityTypes:
      output.EntityTypes !== undefined && output.EntityTypes !== null
        ? deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList(output.EntityTypes, context)
        : undefined,
    EvaluationMetrics:
      output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
        ? deserializeAws_json1_1EntityRecognizerEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfTestDocuments:
      output.NumberOfTestDocuments !== undefined && output.NumberOfTestDocuments !== null
        ? output.NumberOfTestDocuments
        : undefined,
    NumberOfTrainedDocuments:
      output.NumberOfTrainedDocuments !== undefined && output.NumberOfTrainedDocuments !== null
        ? output.NumberOfTrainedDocuments
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem(entry, context)
  );
};

const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem = (
  output: any,
  context: __SerdeContext
): EntityRecognizerMetadataEntityTypesListItem => {
  return {
    __type: "EntityRecognizerMetadataEntityTypesListItem",
    EvaluationMetrics:
      output.EvaluationMetrics !== undefined && output.EvaluationMetrics !== null
        ? deserializeAws_json1_1EntityTypesEvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    NumberOfTrainMentions:
      output.NumberOfTrainMentions !== undefined && output.NumberOfTrainMentions !== null
        ? output.NumberOfTrainMentions
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerProperties = (
  output: any,
  context: __SerdeContext
): EntityRecognizerProperties => {
  return {
    __type: "EntityRecognizerProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    EntityRecognizerArn:
      output.EntityRecognizerArn !== undefined && output.EntityRecognizerArn !== null
        ? output.EntityRecognizerArn
        : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1EntityRecognizerInputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RecognizerMetadata:
      output.RecognizerMetadata !== undefined && output.RecognizerMetadata !== null
        ? deserializeAws_json1_1EntityRecognizerMetadata(output.RecognizerMetadata, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    TrainingEndTime:
      output.TrainingEndTime !== undefined && output.TrainingEndTime !== null
        ? new Date(Math.round(output.TrainingEndTime * 1000))
        : undefined,
    TrainingStartTime:
      output.TrainingStartTime !== undefined && output.TrainingStartTime !== null
        ? new Date(Math.round(output.TrainingStartTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntityRecognizerPropertiesList = (
  output: any,
  context: __SerdeContext
): EntityRecognizerProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EntityRecognizerProperties(entry, context));
};

const deserializeAws_json1_1EntityTypesEvaluationMetrics = (
  output: any,
  context: __SerdeContext
): EntityTypesEvaluationMetrics => {
  return {
    __type: "EntityTypesEvaluationMetrics",
    F1Score: output.F1Score !== undefined && output.F1Score !== null ? output.F1Score : undefined,
    Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
    Recall: output.Recall !== undefined && output.Recall !== null ? output.Recall : undefined,
  } as any;
};

const deserializeAws_json1_1EntityTypesList = (output: any, context: __SerdeContext): EntityTypesListItem[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EntityTypesListItem(entry, context));
};

const deserializeAws_json1_1EntityTypesListItem = (output: any, context: __SerdeContext): EntityTypesListItem => {
  return {
    __type: "EntityTypesListItem",
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    __type: "InputDataConfig",
    InputFormat: output.InputFormat !== undefined && output.InputFormat !== null ? output.InputFormat : undefined,
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    __type: "InvalidFilterException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1JobNotFoundException = (output: any, context: __SerdeContext): JobNotFoundException => {
  return {
    __type: "JobNotFoundException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPhrase = (output: any, context: __SerdeContext): KeyPhrase => {
  return {
    __type: "KeyPhrase",
    BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
    EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPhrasesDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties => {
  return {
    __type: "KeyPhrasesDetectionJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): KeyPhrasesDetectionJobProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1KeyPhrasesDetectionJobProperties(entry, context));
};

const deserializeAws_json1_1KmsKeyValidationException = (
  output: any,
  context: __SerdeContext
): KmsKeyValidationException => {
  return {
    __type: "KmsKeyValidationException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListDocumentClassificationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassificationJobsResponse => {
  return {
    __type: "ListDocumentClassificationJobsResponse",
    DocumentClassificationJobPropertiesList:
      output.DocumentClassificationJobPropertiesList !== undefined &&
      output.DocumentClassificationJobPropertiesList !== null
        ? deserializeAws_json1_1DocumentClassificationJobPropertiesList(
            output.DocumentClassificationJobPropertiesList,
            context
          )
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListDocumentClassifiersResponse = (
  output: any,
  context: __SerdeContext
): ListDocumentClassifiersResponse => {
  return {
    __type: "ListDocumentClassifiersResponse",
    DocumentClassifierPropertiesList:
      output.DocumentClassifierPropertiesList !== undefined && output.DocumentClassifierPropertiesList !== null
        ? deserializeAws_json1_1DocumentClassifierPropertiesList(output.DocumentClassifierPropertiesList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDominantLanguageDetectionJobsResponse => {
  return {
    __type: "ListDominantLanguageDetectionJobsResponse",
    DominantLanguageDetectionJobPropertiesList:
      output.DominantLanguageDetectionJobPropertiesList !== undefined &&
      output.DominantLanguageDetectionJobPropertiesList !== null
        ? deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList(
            output.DominantLanguageDetectionJobPropertiesList,
            context
          )
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return {
    __type: "ListEndpointsResponse",
    EndpointPropertiesList:
      output.EndpointPropertiesList !== undefined && output.EndpointPropertiesList !== null
        ? deserializeAws_json1_1EndpointPropertiesList(output.EndpointPropertiesList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListEntitiesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionJobsResponse => {
  return {
    __type: "ListEntitiesDetectionJobsResponse",
    EntitiesDetectionJobPropertiesList:
      output.EntitiesDetectionJobPropertiesList !== undefined && output.EntitiesDetectionJobPropertiesList !== null
        ? deserializeAws_json1_1EntitiesDetectionJobPropertiesList(output.EntitiesDetectionJobPropertiesList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListEntityRecognizersResponse = (
  output: any,
  context: __SerdeContext
): ListEntityRecognizersResponse => {
  return {
    __type: "ListEntityRecognizersResponse",
    EntityRecognizerPropertiesList:
      output.EntityRecognizerPropertiesList !== undefined && output.EntityRecognizerPropertiesList !== null
        ? deserializeAws_json1_1EntityRecognizerPropertiesList(output.EntityRecognizerPropertiesList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPhrasesDetectionJobsResponse => {
  return {
    __type: "ListKeyPhrasesDetectionJobsResponse",
    KeyPhrasesDetectionJobPropertiesList:
      output.KeyPhrasesDetectionJobPropertiesList !== undefined && output.KeyPhrasesDetectionJobPropertiesList !== null
        ? deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList(
            output.KeyPhrasesDetectionJobPropertiesList,
            context
          )
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListOfClasses = (output: any, context: __SerdeContext): DocumentClass[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentClass(entry, context));
};

const deserializeAws_json1_1ListOfDetectDominantLanguageResult = (
  output: any,
  context: __SerdeContext
): BatchDetectDominantLanguageItemResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchDetectDominantLanguageItemResult(entry, context)
  );
};

const deserializeAws_json1_1ListOfDetectEntitiesResult = (
  output: any,
  context: __SerdeContext
): BatchDetectEntitiesItemResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BatchDetectEntitiesItemResult(entry, context));
};

const deserializeAws_json1_1ListOfDetectKeyPhrasesResult = (
  output: any,
  context: __SerdeContext
): BatchDetectKeyPhrasesItemResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BatchDetectKeyPhrasesItemResult(entry, context));
};

const deserializeAws_json1_1ListOfDetectSentimentResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSentimentItemResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BatchDetectSentimentItemResult(entry, context));
};

const deserializeAws_json1_1ListOfDetectSyntaxResult = (
  output: any,
  context: __SerdeContext
): BatchDetectSyntaxItemResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BatchDetectSyntaxItemResult(entry, context));
};

const deserializeAws_json1_1ListOfDominantLanguages = (output: any, context: __SerdeContext): DominantLanguage[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DominantLanguage(entry, context));
};

const deserializeAws_json1_1ListOfEntities = (output: any, context: __SerdeContext): Entity[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Entity(entry, context));
};

const deserializeAws_json1_1ListOfKeyPhrases = (output: any, context: __SerdeContext): KeyPhrase[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1KeyPhrase(entry, context));
};

const deserializeAws_json1_1ListOfLabels = (output: any, context: __SerdeContext): DocumentLabel[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentLabel(entry, context));
};

const deserializeAws_json1_1ListOfSyntaxTokens = (output: any, context: __SerdeContext): SyntaxToken[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1SyntaxToken(entry, context));
};

const deserializeAws_json1_1ListSentimentDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSentimentDetectionJobsResponse => {
  return {
    __type: "ListSentimentDetectionJobsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SentimentDetectionJobPropertiesList:
      output.SentimentDetectionJobPropertiesList !== undefined && output.SentimentDetectionJobPropertiesList !== null
        ? deserializeAws_json1_1SentimentDetectionJobPropertiesList(output.SentimentDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTopicsDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTopicsDetectionJobsResponse => {
  return {
    __type: "ListTopicsDetectionJobsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TopicsDetectionJobPropertiesList:
      output.TopicsDetectionJobPropertiesList !== undefined && output.TopicsDetectionJobPropertiesList !== null
        ? deserializeAws_json1_1TopicsDetectionJobPropertiesList(output.TopicsDetectionJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    __type: "OutputDataConfig",
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    S3Uri: output.S3Uri !== undefined && output.S3Uri !== null ? output.S3Uri : undefined,
  } as any;
};

const deserializeAws_json1_1PartOfSpeechTag = (output: any, context: __SerdeContext): PartOfSpeechTag => {
  return {
    __type: "PartOfSpeechTag",
    Score: output.Score !== undefined && output.Score !== null ? output.Score : undefined,
    Tag: output.Tag !== undefined && output.Tag !== null ? output.Tag : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    __type: "ResourceLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    __type: "ResourceUnavailableException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SentimentDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): SentimentDetectionJobProperties => {
  return {
    __type: "SentimentDetectionJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SentimentDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): SentimentDetectionJobProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1SentimentDetectionJobProperties(entry, context));
};

const deserializeAws_json1_1SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    __type: "SentimentScore",
    Mixed: output.Mixed !== undefined && output.Mixed !== null ? output.Mixed : undefined,
    Negative: output.Negative !== undefined && output.Negative !== null ? output.Negative : undefined,
    Neutral: output.Neutral !== undefined && output.Neutral !== null ? output.Neutral : undefined,
    Positive: output.Positive !== undefined && output.Positive !== null ? output.Positive : undefined,
  } as any;
};

const deserializeAws_json1_1StartDocumentClassificationJobResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentClassificationJobResponse => {
  return {
    __type: "StartDocumentClassificationJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StartDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartDominantLanguageDetectionJobResponse => {
  return {
    __type: "StartDominantLanguageDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StartEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionJobResponse => {
  return {
    __type: "StartEntitiesDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartKeyPhrasesDetectionJobResponse => {
  return {
    __type: "StartKeyPhrasesDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StartSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartSentimentDetectionJobResponse => {
  return {
    __type: "StartSentimentDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StartTopicsDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTopicsDetectionJobResponse => {
  return {
    __type: "StartTopicsDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StopDominantLanguageDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopDominantLanguageDetectionJobResponse => {
  return {
    __type: "StopDominantLanguageDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StopEntitiesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionJobResponse => {
  return {
    __type: "StopEntitiesDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopKeyPhrasesDetectionJobResponse => {
  return {
    __type: "StopKeyPhrasesDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StopSentimentDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopSentimentDetectionJobResponse => {
  return {
    __type: "StopSentimentDetectionJobResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_1StopTrainingDocumentClassifierResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingDocumentClassifierResponse => {
  return {
    __type: "StopTrainingDocumentClassifierResponse",
  } as any;
};

const deserializeAws_json1_1StopTrainingEntityRecognizerResponse = (
  output: any,
  context: __SerdeContext
): StopTrainingEntityRecognizerResponse => {
  return {
    __type: "StopTrainingEntityRecognizerResponse",
  } as any;
};

const deserializeAws_json1_1Subnets = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SyntaxToken = (output: any, context: __SerdeContext): SyntaxToken => {
  return {
    __type: "SyntaxToken",
    BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
    EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    PartOfSpeech:
      output.PartOfSpeech !== undefined && output.PartOfSpeech !== null
        ? deserializeAws_json1_1PartOfSpeechTag(output.PartOfSpeech, context)
        : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    TokenId: output.TokenId !== undefined && output.TokenId !== null ? output.TokenId : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    __type: "TagResourceResponse",
  } as any;
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    __type: "TextSizeLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1TooManyTagKeysException = (
  output: any,
  context: __SerdeContext
): TooManyTagKeysException => {
  return {
    __type: "TooManyTagKeysException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    __type: "TooManyTagsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1TopicsDetectionJobProperties = (
  output: any,
  context: __SerdeContext
): TopicsDetectionJobProperties => {
  return {
    __type: "TopicsDetectionJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    NumberOfTopics:
      output.NumberOfTopics !== undefined && output.NumberOfTopics !== null ? output.NumberOfTopics : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    VolumeKmsKeyId:
      output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null ? output.VolumeKmsKeyId : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TopicsDetectionJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TopicsDetectionJobProperties[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1TopicsDetectionJobProperties(entry, context));
};

const deserializeAws_json1_1UnsupportedLanguageException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguageException => {
  return {
    __type: "UnsupportedLanguageException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse",
  } as any;
};

const deserializeAws_json1_1UpdateEndpointResponse = (output: any, context: __SerdeContext): UpdateEndpointResponse => {
  return {
    __type: "UpdateEndpointResponse",
  } as any;
};

const deserializeAws_json1_1VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    __type: "VpcConfig",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1Subnets(output.Subnets, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
