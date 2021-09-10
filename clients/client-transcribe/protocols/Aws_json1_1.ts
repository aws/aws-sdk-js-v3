import {
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
} from "../commands/CreateCallAnalyticsCategoryCommand";
import {
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
} from "../commands/CreateLanguageModelCommand";
import {
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
} from "../commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "../commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
} from "../commands/CreateVocabularyFilterCommand";
import {
  DeleteCallAnalyticsCategoryCommandInput,
  DeleteCallAnalyticsCategoryCommandOutput,
} from "../commands/DeleteCallAnalyticsCategoryCommand";
import {
  DeleteCallAnalyticsJobCommandInput,
  DeleteCallAnalyticsJobCommandOutput,
} from "../commands/DeleteCallAnalyticsJobCommand";
import {
  DeleteLanguageModelCommandInput,
  DeleteLanguageModelCommandOutput,
} from "../commands/DeleteLanguageModelCommand";
import {
  DeleteMedicalTranscriptionJobCommandInput,
  DeleteMedicalTranscriptionJobCommandOutput,
} from "../commands/DeleteMedicalTranscriptionJobCommand";
import {
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
} from "../commands/DeleteMedicalVocabularyCommand";
import {
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "../commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "../commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput,
} from "../commands/DeleteVocabularyFilterCommand";
import {
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
} from "../commands/DescribeLanguageModelCommand";
import {
  GetCallAnalyticsCategoryCommandInput,
  GetCallAnalyticsCategoryCommandOutput,
} from "../commands/GetCallAnalyticsCategoryCommand";
import {
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
} from "../commands/GetCallAnalyticsJobCommand";
import {
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
} from "../commands/GetMedicalTranscriptionJobCommand";
import {
  GetMedicalVocabularyCommandInput,
  GetMedicalVocabularyCommandOutput,
} from "../commands/GetMedicalVocabularyCommand";
import {
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "../commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "../commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
} from "../commands/GetVocabularyFilterCommand";
import {
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "../commands/ListCallAnalyticsCategoriesCommand";
import {
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "../commands/ListCallAnalyticsJobsCommand";
import { ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput } from "../commands/ListLanguageModelsCommand";
import {
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "../commands/ListMedicalTranscriptionJobsCommand";
import {
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "../commands/ListMedicalVocabulariesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "../commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "../commands/ListVocabularyFiltersCommand";
import {
  StartCallAnalyticsJobCommandInput,
  StartCallAnalyticsJobCommandOutput,
} from "../commands/StartCallAnalyticsJobCommand";
import {
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
} from "../commands/StartMedicalTranscriptionJobCommand";
import {
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "../commands/StartTranscriptionJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCallAnalyticsCategoryCommandInput,
  UpdateCallAnalyticsCategoryCommandOutput,
} from "../commands/UpdateCallAnalyticsCategoryCommand";
import {
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
} from "../commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "../commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
} from "../commands/UpdateVocabularyFilterCommand";
import {
  AbsoluteTimeRange,
  BadRequestException,
  CallAnalyticsJob,
  CallAnalyticsJobSettings,
  CallAnalyticsJobSummary,
  CategoryProperties,
  ChannelDefinition,
  ConflictException,
  ContentRedaction,
  CreateCallAnalyticsCategoryRequest,
  CreateCallAnalyticsCategoryResponse,
  CreateLanguageModelRequest,
  CreateLanguageModelResponse,
  CreateMedicalVocabularyRequest,
  CreateMedicalVocabularyResponse,
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterResponse,
  CreateVocabularyRequest,
  CreateVocabularyResponse,
  DeleteCallAnalyticsCategoryRequest,
  DeleteCallAnalyticsCategoryResponse,
  DeleteCallAnalyticsJobRequest,
  DeleteCallAnalyticsJobResponse,
  DeleteLanguageModelRequest,
  DeleteMedicalTranscriptionJobRequest,
  DeleteMedicalVocabularyRequest,
  DeleteTranscriptionJobRequest,
  DeleteVocabularyFilterRequest,
  DeleteVocabularyRequest,
  DescribeLanguageModelRequest,
  DescribeLanguageModelResponse,
  GetCallAnalyticsCategoryRequest,
  GetCallAnalyticsCategoryResponse,
  GetCallAnalyticsJobRequest,
  GetCallAnalyticsJobResponse,
  GetMedicalTranscriptionJobRequest,
  GetMedicalTranscriptionJobResponse,
  GetMedicalVocabularyRequest,
  GetMedicalVocabularyResponse,
  GetTranscriptionJobRequest,
  GetTranscriptionJobResponse,
  GetVocabularyFilterRequest,
  GetVocabularyFilterResponse,
  GetVocabularyRequest,
  GetVocabularyResponse,
  InputDataConfig,
  InternalFailureException,
  InterruptionFilter,
  JobExecutionSettings,
  LanguageCode,
  LanguageModel,
  LimitExceededException,
  ListCallAnalyticsCategoriesRequest,
  ListCallAnalyticsCategoriesResponse,
  ListCallAnalyticsJobsRequest,
  ListCallAnalyticsJobsResponse,
  ListLanguageModelsRequest,
  ListLanguageModelsResponse,
  ListMedicalTranscriptionJobsRequest,
  ListMedicalTranscriptionJobsResponse,
  ListMedicalVocabulariesRequest,
  ListMedicalVocabulariesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTranscriptionJobsRequest,
  ListTranscriptionJobsResponse,
  ListVocabulariesRequest,
  ListVocabulariesResponse,
  ListVocabularyFiltersRequest,
  ListVocabularyFiltersResponse,
  Media,
  MedicalTranscript,
  MedicalTranscriptionJob,
  MedicalTranscriptionJobSummary,
  MedicalTranscriptionSetting,
  ModelSettings,
  NonTalkTimeFilter,
  NotFoundException,
  RelativeTimeRange,
  Rule,
  SentimentFilter,
  SentimentValue,
  Settings,
  StartCallAnalyticsJobRequest,
  StartCallAnalyticsJobResponse,
  StartMedicalTranscriptionJobRequest,
  StartMedicalTranscriptionJobResponse,
  StartTranscriptionJobRequest,
  StartTranscriptionJobResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Transcript,
  TranscriptFilter,
  TranscriptionJob,
  TranscriptionJobSummary,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateCallAnalyticsCategoryRequest,
  UpdateCallAnalyticsCategoryResponse,
  UpdateMedicalVocabularyRequest,
  UpdateMedicalVocabularyResponse,
  UpdateVocabularyFilterRequest,
  UpdateVocabularyFilterResponse,
  UpdateVocabularyRequest,
  UpdateVocabularyResponse,
  VocabularyFilterInfo,
  VocabularyInfo,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateCallAnalyticsCategoryCommand = async (
  input: CreateCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLanguageModelCommand = async (
  input: CreateLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateLanguageModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMedicalVocabularyCommand = async (
  input: CreateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVocabularyFilterCommand = async (
  input: CreateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCallAnalyticsCategoryCommand = async (
  input: DeleteCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCallAnalyticsJobCommand = async (
  input: DeleteCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLanguageModelCommand = async (
  input: DeleteLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteLanguageModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (
  input: DeleteMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMedicalVocabularyCommand = async (
  input: DeleteMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTranscriptionJobCommand = async (
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVocabularyFilterCommand = async (
  input: DeleteVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLanguageModelCommand = async (
  input: DescribeLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DescribeLanguageModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCallAnalyticsCategoryCommand = async (
  input: GetCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCallAnalyticsJobCommand = async (
  input: GetCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMedicalTranscriptionJobCommand = async (
  input: GetMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMedicalVocabularyCommand = async (
  input: GetMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTranscriptionJobCommand = async (
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVocabularyCommand = async (
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVocabularyFilterCommand = async (
  input: GetVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCallAnalyticsCategoriesCommand = async (
  input: ListCallAnalyticsCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListCallAnalyticsCategories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCallAnalyticsCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCallAnalyticsJobsCommand = async (
  input: ListCallAnalyticsJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListCallAnalyticsJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCallAnalyticsJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLanguageModelsCommand = async (
  input: ListLanguageModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListLanguageModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLanguageModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (
  input: ListMedicalTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListMedicalTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMedicalTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMedicalVocabulariesCommand = async (
  input: ListMedicalVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListMedicalVocabularies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMedicalVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTranscriptionJobsCommand = async (
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVocabulariesCommand = async (
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListVocabularies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVocabularyFiltersCommand = async (
  input: ListVocabularyFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListVocabularyFilters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVocabularyFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCallAnalyticsJobCommand = async (
  input: StartCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMedicalTranscriptionJobCommand = async (
  input: StartMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTranscriptionJobCommand = async (
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.TagResource",
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
    "x-amz-target": "Transcribe.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCallAnalyticsCategoryCommand = async (
  input: UpdateCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMedicalVocabularyCommand = async (
  input: UpdateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVocabularyCommand = async (
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVocabularyFilterCommand = async (
  input: UpdateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCallAnalyticsCategoryResponse(data, context);
  const response: CreateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLanguageModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLanguageModelResponse(data, context);
  const response: CreateLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMedicalVocabularyResponse(data, context);
  const response: CreateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyFilterResponse(data, context);
  const response: CreateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCallAnalyticsCategoryResponse(data, context);
  const response: DeleteCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCallAnalyticsJobResponse(data, context);
  const response: DeleteCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLanguageModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMedicalVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVocabularyFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLanguageModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLanguageModelResponse(data, context);
  const response: DescribeLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCallAnalyticsCategoryResponse(data, context);
  const response: GetCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCallAnalyticsJobResponse(data, context);
  const response: GetCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMedicalTranscriptionJobResponse(data, context);
  const response: GetMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMedicalVocabularyResponse(data, context);
  const response: GetMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyFilterResponse(data, context);
  const response: GetVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCallAnalyticsCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCallAnalyticsCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCallAnalyticsCategoriesResponse(data, context);
  const response: ListCallAnalyticsCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCallAnalyticsCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCallAnalyticsJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCallAnalyticsJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCallAnalyticsJobsResponse(data, context);
  const response: ListCallAnalyticsJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCallAnalyticsJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListLanguageModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguageModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLanguageModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLanguageModelsResponse(data, context);
  const response: ListLanguageModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLanguageModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguageModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMedicalTranscriptionJobsResponse(data, context);
  const response: ListMedicalTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMedicalVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMedicalVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMedicalVocabulariesResponse(data, context);
  const response: ListMedicalVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMedicalVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListVocabularyFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVocabularyFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabularyFiltersResponse(data, context);
  const response: ListVocabularyFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVocabularyFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCallAnalyticsJobResponse(data, context);
  const response: StartCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMedicalTranscriptionJobResponse(data, context);
  const response: StartMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCallAnalyticsCategoryResponse(data, context);
  const response: UpdateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMedicalVocabularyResponse(data, context);
  const response: UpdateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyFilterResponse(data, context);
  const response: UpdateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(body, context);
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(body, context);
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AbsoluteTimeRange = (input: AbsoluteTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined && input.EndTime !== null && { EndTime: input.EndTime }),
    ...(input.First !== undefined && input.First !== null && { First: input.First }),
    ...(input.Last !== undefined && input.Last !== null && { Last: input.Last }),
    ...(input.StartTime !== undefined && input.StartTime !== null && { StartTime: input.StartTime }),
  };
};

const serializeAws_json1_1CallAnalyticsJobSettings = (
  input: CallAnalyticsJobSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentRedaction !== undefined &&
      input.ContentRedaction !== null && {
        ContentRedaction: serializeAws_json1_1ContentRedaction(input.ContentRedaction, context),
      }),
    ...(input.LanguageModelName !== undefined &&
      input.LanguageModelName !== null && { LanguageModelName: input.LanguageModelName }),
    ...(input.LanguageOptions !== undefined &&
      input.LanguageOptions !== null && {
        LanguageOptions: serializeAws_json1_1LanguageOptions(input.LanguageOptions, context),
      }),
    ...(input.VocabularyFilterMethod !== undefined &&
      input.VocabularyFilterMethod !== null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1ChannelDefinition = (input: ChannelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ChannelId !== undefined && input.ChannelId !== null && { ChannelId: input.ChannelId }),
    ...(input.ParticipantRole !== undefined &&
      input.ParticipantRole !== null && { ParticipantRole: input.ParticipantRole }),
  };
};

const serializeAws_json1_1ChannelDefinitions = (input: ChannelDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ChannelDefinition(entry, context);
    });
};

const serializeAws_json1_1ContentRedaction = (input: ContentRedaction, context: __SerdeContext): any => {
  return {
    ...(input.RedactionOutput !== undefined &&
      input.RedactionOutput !== null && { RedactionOutput: input.RedactionOutput }),
    ...(input.RedactionType !== undefined && input.RedactionType !== null && { RedactionType: input.RedactionType }),
  };
};

const serializeAws_json1_1CreateCallAnalyticsCategoryRequest = (
  input: CreateCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName !== undefined && input.CategoryName !== null && { CategoryName: input.CategoryName }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1RuleList(input.Rules, context) }),
  };
};

const serializeAws_json1_1CreateLanguageModelRequest = (
  input: CreateLanguageModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaseModelName !== undefined && input.BaseModelName !== null && { BaseModelName: input.BaseModelName }),
    ...(input.InputDataConfig !== undefined &&
      input.InputDataConfig !== null && {
        InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateMedicalVocabularyRequest = (
  input: CreateMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VocabularyFileUri !== undefined &&
      input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1CreateVocabularyFilterRequest = (
  input: CreateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VocabularyFilterFileUri !== undefined &&
      input.VocabularyFilterFileUri !== null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words !== undefined &&
      input.Words !== null && { Words: serializeAws_json1_1Words(input.Words, context) }),
  };
};

const serializeAws_json1_1CreateVocabularyRequest = (input: CreateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases !== undefined &&
      input.Phrases !== null && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VocabularyFileUri !== undefined &&
      input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1DeleteCallAnalyticsCategoryRequest = (
  input: DeleteCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName !== undefined && input.CategoryName !== null && { CategoryName: input.CategoryName }),
  };
};

const serializeAws_json1_1DeleteCallAnalyticsJobRequest = (
  input: DeleteCallAnalyticsJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallAnalyticsJobName !== undefined &&
      input.CallAnalyticsJobName !== null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
  };
};

const serializeAws_json1_1DeleteLanguageModelRequest = (
  input: DeleteLanguageModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_1DeleteMedicalTranscriptionJobRequest = (
  input: DeleteMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName !== undefined &&
      input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
  };
};

const serializeAws_json1_1DeleteMedicalVocabularyRequest = (
  input: DeleteMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1DeleteTranscriptionJobRequest = (
  input: DeleteTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TranscriptionJobName !== undefined &&
      input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1DeleteVocabularyFilterRequest = (
  input: DeleteVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

const serializeAws_json1_1DeleteVocabularyRequest = (input: DeleteVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1DescribeLanguageModelRequest = (
  input: DescribeLanguageModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_1GetCallAnalyticsCategoryRequest = (
  input: GetCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName !== undefined && input.CategoryName !== null && { CategoryName: input.CategoryName }),
  };
};

const serializeAws_json1_1GetCallAnalyticsJobRequest = (
  input: GetCallAnalyticsJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallAnalyticsJobName !== undefined &&
      input.CallAnalyticsJobName !== null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
  };
};

const serializeAws_json1_1GetMedicalTranscriptionJobRequest = (
  input: GetMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName !== undefined &&
      input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
  };
};

const serializeAws_json1_1GetMedicalVocabularyRequest = (
  input: GetMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1GetTranscriptionJobRequest = (
  input: GetTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TranscriptionJobName !== undefined &&
      input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1GetVocabularyFilterRequest = (
  input: GetVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

const serializeAws_json1_1GetVocabularyRequest = (input: GetVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn !== undefined &&
      input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
    ...(input.TuningDataS3Uri !== undefined &&
      input.TuningDataS3Uri !== null && { TuningDataS3Uri: input.TuningDataS3Uri }),
  };
};

const serializeAws_json1_1InterruptionFilter = (input: InterruptionFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange !== undefined &&
      input.AbsoluteTimeRange !== null && {
        AbsoluteTimeRange: serializeAws_json1_1AbsoluteTimeRange(input.AbsoluteTimeRange, context),
      }),
    ...(input.Negate !== undefined && input.Negate !== null && { Negate: input.Negate }),
    ...(input.ParticipantRole !== undefined &&
      input.ParticipantRole !== null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange !== undefined &&
      input.RelativeTimeRange !== null && {
        RelativeTimeRange: serializeAws_json1_1RelativeTimeRange(input.RelativeTimeRange, context),
      }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
  };
};

const serializeAws_json1_1JobExecutionSettings = (input: JobExecutionSettings, context: __SerdeContext): any => {
  return {
    ...(input.AllowDeferredExecution !== undefined &&
      input.AllowDeferredExecution !== null && { AllowDeferredExecution: input.AllowDeferredExecution }),
    ...(input.DataAccessRoleArn !== undefined &&
      input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
  };
};

const serializeAws_json1_1KMSEncryptionContextMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1LanguageOptions = (input: (LanguageCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListCallAnalyticsCategoriesRequest = (
  input: ListCallAnalyticsCategoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCallAnalyticsJobsRequest = (
  input: ListCallAnalyticsJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains !== undefined &&
      input.JobNameContains !== null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListLanguageModelsRequest = (
  input: ListLanguageModelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusEquals !== undefined && input.StatusEquals !== null && { StatusEquals: input.StatusEquals }),
  };
};

const serializeAws_json1_1ListMedicalTranscriptionJobsRequest = (
  input: ListMedicalTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains !== undefined &&
      input.JobNameContains !== null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListMedicalVocabulariesRequest = (
  input: ListMedicalVocabulariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StateEquals !== undefined && input.StateEquals !== null && { StateEquals: input.StateEquals }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTranscriptionJobsRequest = (
  input: ListTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains !== undefined &&
      input.JobNameContains !== null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListVocabulariesRequest = (input: ListVocabulariesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StateEquals !== undefined && input.StateEquals !== null && { StateEquals: input.StateEquals }),
  };
};

const serializeAws_json1_1ListVocabularyFiltersRequest = (
  input: ListVocabularyFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && input.NameContains !== null && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Media = (input: Media, context: __SerdeContext): any => {
  return {
    ...(input.MediaFileUri !== undefined && input.MediaFileUri !== null && { MediaFileUri: input.MediaFileUri }),
    ...(input.RedactedMediaFileUri !== undefined &&
      input.RedactedMediaFileUri !== null && { RedactedMediaFileUri: input.RedactedMediaFileUri }),
  };
};

const serializeAws_json1_1MedicalTranscriptionSetting = (
  input: MedicalTranscriptionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelIdentification !== undefined &&
      input.ChannelIdentification !== null && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives !== undefined &&
      input.MaxAlternatives !== null && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels !== undefined &&
      input.MaxSpeakerLabels !== null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives !== undefined &&
      input.ShowAlternatives !== null && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels !== undefined &&
      input.ShowSpeakerLabels !== null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1ModelSettings = (input: ModelSettings, context: __SerdeContext): any => {
  return {
    ...(input.LanguageModelName !== undefined &&
      input.LanguageModelName !== null && { LanguageModelName: input.LanguageModelName }),
  };
};

const serializeAws_json1_1NonTalkTimeFilter = (input: NonTalkTimeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange !== undefined &&
      input.AbsoluteTimeRange !== null && {
        AbsoluteTimeRange: serializeAws_json1_1AbsoluteTimeRange(input.AbsoluteTimeRange, context),
      }),
    ...(input.Negate !== undefined && input.Negate !== null && { Negate: input.Negate }),
    ...(input.RelativeTimeRange !== undefined &&
      input.RelativeTimeRange !== null && {
        RelativeTimeRange: serializeAws_json1_1RelativeTimeRange(input.RelativeTimeRange, context),
      }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
  };
};

const serializeAws_json1_1Phrases = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RelativeTimeRange = (input: RelativeTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndPercentage !== undefined && input.EndPercentage !== null && { EndPercentage: input.EndPercentage }),
    ...(input.First !== undefined && input.First !== null && { First: input.First }),
    ...(input.Last !== undefined && input.Last !== null && { Last: input.Last }),
    ...(input.StartPercentage !== undefined &&
      input.StartPercentage !== null && { StartPercentage: input.StartPercentage }),
  };
};

const serializeAws_json1_1Rule = (input: Rule, context: __SerdeContext): any => {
  return Rule.visit(input, {
    InterruptionFilter: (value) => ({ InterruptionFilter: serializeAws_json1_1InterruptionFilter(value, context) }),
    NonTalkTimeFilter: (value) => ({ NonTalkTimeFilter: serializeAws_json1_1NonTalkTimeFilter(value, context) }),
    SentimentFilter: (value) => ({ SentimentFilter: serializeAws_json1_1SentimentFilter(value, context) }),
    TranscriptFilter: (value) => ({ TranscriptFilter: serializeAws_json1_1TranscriptFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_1RuleList = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Rule(entry, context);
    });
};

const serializeAws_json1_1SentimentFilter = (input: SentimentFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange !== undefined &&
      input.AbsoluteTimeRange !== null && {
        AbsoluteTimeRange: serializeAws_json1_1AbsoluteTimeRange(input.AbsoluteTimeRange, context),
      }),
    ...(input.Negate !== undefined && input.Negate !== null && { Negate: input.Negate }),
    ...(input.ParticipantRole !== undefined &&
      input.ParticipantRole !== null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange !== undefined &&
      input.RelativeTimeRange !== null && {
        RelativeTimeRange: serializeAws_json1_1RelativeTimeRange(input.RelativeTimeRange, context),
      }),
    ...(input.Sentiments !== undefined &&
      input.Sentiments !== null && { Sentiments: serializeAws_json1_1SentimentValueList(input.Sentiments, context) }),
  };
};

const serializeAws_json1_1SentimentValueList = (input: (SentimentValue | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelIdentification !== undefined &&
      input.ChannelIdentification !== null && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives !== undefined &&
      input.MaxAlternatives !== null && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels !== undefined &&
      input.MaxSpeakerLabels !== null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives !== undefined &&
      input.ShowAlternatives !== null && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels !== undefined &&
      input.ShowSpeakerLabels !== null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyFilterMethod !== undefined &&
      input.VocabularyFilterMethod !== null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1StartCallAnalyticsJobRequest = (
  input: StartCallAnalyticsJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallAnalyticsJobName !== undefined &&
      input.CallAnalyticsJobName !== null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
    ...(input.ChannelDefinitions !== undefined &&
      input.ChannelDefinitions !== null && {
        ChannelDefinitions: serializeAws_json1_1ChannelDefinitions(input.ChannelDefinitions, context),
      }),
    ...(input.DataAccessRoleArn !== undefined &&
      input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.Media !== undefined &&
      input.Media !== null && { Media: serializeAws_json1_1Media(input.Media, context) }),
    ...(input.OutputEncryptionKMSKeyId !== undefined &&
      input.OutputEncryptionKMSKeyId !== null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && { OutputLocation: input.OutputLocation }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { Settings: serializeAws_json1_1CallAnalyticsJobSettings(input.Settings, context) }),
  };
};

const serializeAws_json1_1StartMedicalTranscriptionJobRequest = (
  input: StartMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType !== undefined &&
      input.ContentIdentificationType !== null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.KMSEncryptionContext !== undefined &&
      input.KMSEncryptionContext !== null && {
        KMSEncryptionContext: serializeAws_json1_1KMSEncryptionContextMap(input.KMSEncryptionContext, context),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Media !== undefined &&
      input.Media !== null && { Media: serializeAws_json1_1Media(input.Media, context) }),
    ...(input.MediaFormat !== undefined && input.MediaFormat !== null && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz !== undefined &&
      input.MediaSampleRateHertz !== null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.MedicalTranscriptionJobName !== undefined &&
      input.MedicalTranscriptionJobName !== null && { MedicalTranscriptionJobName: input.MedicalTranscriptionJobName }),
    ...(input.OutputBucketName !== undefined &&
      input.OutputBucketName !== null && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId !== undefined &&
      input.OutputEncryptionKMSKeyId !== null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputKey !== undefined && input.OutputKey !== null && { OutputKey: input.OutputKey }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && {
        Settings: serializeAws_json1_1MedicalTranscriptionSetting(input.Settings, context),
      }),
    ...(input.Specialty !== undefined && input.Specialty !== null && { Specialty: input.Specialty }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1StartTranscriptionJobRequest = (
  input: StartTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentRedaction !== undefined &&
      input.ContentRedaction !== null && {
        ContentRedaction: serializeAws_json1_1ContentRedaction(input.ContentRedaction, context),
      }),
    ...(input.IdentifyLanguage !== undefined &&
      input.IdentifyLanguage !== null && { IdentifyLanguage: input.IdentifyLanguage }),
    ...(input.JobExecutionSettings !== undefined &&
      input.JobExecutionSettings !== null && {
        JobExecutionSettings: serializeAws_json1_1JobExecutionSettings(input.JobExecutionSettings, context),
      }),
    ...(input.KMSEncryptionContext !== undefined &&
      input.KMSEncryptionContext !== null && {
        KMSEncryptionContext: serializeAws_json1_1KMSEncryptionContextMap(input.KMSEncryptionContext, context),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageOptions !== undefined &&
      input.LanguageOptions !== null && {
        LanguageOptions: serializeAws_json1_1LanguageOptions(input.LanguageOptions, context),
      }),
    ...(input.Media !== undefined &&
      input.Media !== null && { Media: serializeAws_json1_1Media(input.Media, context) }),
    ...(input.MediaFormat !== undefined && input.MediaFormat !== null && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz !== undefined &&
      input.MediaSampleRateHertz !== null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.ModelSettings !== undefined &&
      input.ModelSettings !== null && {
        ModelSettings: serializeAws_json1_1ModelSettings(input.ModelSettings, context),
      }),
    ...(input.OutputBucketName !== undefined &&
      input.OutputBucketName !== null && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId !== undefined &&
      input.OutputEncryptionKMSKeyId !== null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputKey !== undefined && input.OutputKey !== null && { OutputKey: input.OutputKey }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { Settings: serializeAws_json1_1Settings(input.Settings, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TranscriptionJobName !== undefined &&
      input.TranscriptionJobName !== null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1StringTargetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange !== undefined &&
      input.AbsoluteTimeRange !== null && {
        AbsoluteTimeRange: serializeAws_json1_1AbsoluteTimeRange(input.AbsoluteTimeRange, context),
      }),
    ...(input.Negate !== undefined && input.Negate !== null && { Negate: input.Negate }),
    ...(input.ParticipantRole !== undefined &&
      input.ParticipantRole !== null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange !== undefined &&
      input.RelativeTimeRange !== null && {
        RelativeTimeRange: serializeAws_json1_1RelativeTimeRange(input.RelativeTimeRange, context),
      }),
    ...(input.Targets !== undefined &&
      input.Targets !== null && { Targets: serializeAws_json1_1StringTargetList(input.Targets, context) }),
    ...(input.TranscriptFilterType !== undefined &&
      input.TranscriptFilterType !== null && { TranscriptFilterType: input.TranscriptFilterType }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateCallAnalyticsCategoryRequest = (
  input: UpdateCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName !== undefined && input.CategoryName !== null && { CategoryName: input.CategoryName }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1RuleList(input.Rules, context) }),
  };
};

const serializeAws_json1_1UpdateMedicalVocabularyRequest = (
  input: UpdateMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.VocabularyFileUri !== undefined &&
      input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1UpdateVocabularyFilterRequest = (
  input: UpdateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterFileUri !== undefined &&
      input.VocabularyFilterFileUri !== null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words !== undefined &&
      input.Words !== null && { Words: serializeAws_json1_1Words(input.Words, context) }),
  };
};

const serializeAws_json1_1UpdateVocabularyRequest = (input: UpdateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases !== undefined &&
      input.Phrases !== null && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
    ...(input.VocabularyFileUri !== undefined &&
      input.VocabularyFileUri !== null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1Words = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AbsoluteTimeRange = (output: any, context: __SerdeContext): AbsoluteTimeRange => {
  return {
    EndTime: __expectLong(output.EndTime),
    First: __expectLong(output.First),
    Last: __expectLong(output.Last),
    StartTime: __expectLong(output.StartTime),
  } as any;
};

const deserializeAws_json1_1BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CallAnalyticsJob = (output: any, context: __SerdeContext): CallAnalyticsJob => {
  return {
    CallAnalyticsJobName: __expectString(output.CallAnalyticsJobName),
    CallAnalyticsJobStatus: __expectString(output.CallAnalyticsJobStatus),
    ChannelDefinitions:
      output.ChannelDefinitions !== undefined && output.ChannelDefinitions !== null
        ? deserializeAws_json1_1ChannelDefinitions(output.ChannelDefinitions, context)
        : undefined,
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    LanguageCode: __expectString(output.LanguageCode),
    Media:
      output.Media !== undefined && output.Media !== null
        ? deserializeAws_json1_1Media(output.Media, context)
        : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1CallAnalyticsJobSettings(output.Settings, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_json1_1Transcript(output.Transcript, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CallAnalyticsJobSettings = (
  output: any,
  context: __SerdeContext
): CallAnalyticsJobSettings => {
  return {
    ContentRedaction:
      output.ContentRedaction !== undefined && output.ContentRedaction !== null
        ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
        : undefined,
    LanguageModelName: __expectString(output.LanguageModelName),
    LanguageOptions:
      output.LanguageOptions !== undefined && output.LanguageOptions !== null
        ? deserializeAws_json1_1LanguageOptions(output.LanguageOptions, context)
        : undefined,
    VocabularyFilterMethod: __expectString(output.VocabularyFilterMethod),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

const deserializeAws_json1_1CallAnalyticsJobSummaries = (
  output: any,
  context: __SerdeContext
): CallAnalyticsJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CallAnalyticsJobSummary(entry, context);
    });
};

const deserializeAws_json1_1CallAnalyticsJobSummary = (
  output: any,
  context: __SerdeContext
): CallAnalyticsJobSummary => {
  return {
    CallAnalyticsJobName: __expectString(output.CallAnalyticsJobName),
    CallAnalyticsJobStatus: __expectString(output.CallAnalyticsJobStatus),
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1CategoryProperties = (output: any, context: __SerdeContext): CategoryProperties => {
  return {
    CategoryName: __expectString(output.CategoryName),
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime)))
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CategoryPropertiesList = (output: any, context: __SerdeContext): CategoryProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CategoryProperties(entry, context);
    });
};

const deserializeAws_json1_1ChannelDefinition = (output: any, context: __SerdeContext): ChannelDefinition => {
  return {
    ChannelId: __expectInt32(output.ChannelId),
    ParticipantRole: __expectString(output.ParticipantRole),
  } as any;
};

const deserializeAws_json1_1ChannelDefinitions = (output: any, context: __SerdeContext): ChannelDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ChannelDefinition(entry, context);
    });
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ContentRedaction = (output: any, context: __SerdeContext): ContentRedaction => {
  return {
    RedactionOutput: __expectString(output.RedactionOutput),
    RedactionType: __expectString(output.RedactionType),
  } as any;
};

const deserializeAws_json1_1CreateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): CreateCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties !== undefined && output.CategoryProperties !== null
        ? deserializeAws_json1_1CategoryProperties(output.CategoryProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLanguageModelResponse = (
  output: any,
  context: __SerdeContext
): CreateLanguageModelResponse => {
  return {
    BaseModelName: __expectString(output.BaseModelName),
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    ModelName: __expectString(output.ModelName),
    ModelStatus: __expectString(output.ModelStatus),
  } as any;
};

const deserializeAws_json1_1CreateMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): CreateMedicalVocabularyResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1CreateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyFilterResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

const deserializeAws_json1_1CreateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1DeleteCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteCallAnalyticsCategoryResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCallAnalyticsJobResponse = (
  output: any,
  context: __SerdeContext
): DeleteCallAnalyticsJobResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeLanguageModelResponse = (
  output: any,
  context: __SerdeContext
): DescribeLanguageModelResponse => {
  return {
    LanguageModel:
      output.LanguageModel !== undefined && output.LanguageModel !== null
        ? deserializeAws_json1_1LanguageModel(output.LanguageModel, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): GetCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties !== undefined && output.CategoryProperties !== null
        ? deserializeAws_json1_1CategoryProperties(output.CategoryProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCallAnalyticsJobResponse = (
  output: any,
  context: __SerdeContext
): GetCallAnalyticsJobResponse => {
  return {
    CallAnalyticsJob:
      output.CallAnalyticsJob !== undefined && output.CallAnalyticsJob !== null
        ? deserializeAws_json1_1CallAnalyticsJob(output.CallAnalyticsJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalTranscriptionJobResponse => {
  return {
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
        ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalVocabularyResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1GetTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetTranscriptionJobResponse => {
  return {
    TranscriptionJob:
      output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
        ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): GetVocabularyFilterResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

const deserializeAws_json1_1GetVocabularyResponse = (output: any, context: __SerdeContext): GetVocabularyResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    S3Uri: __expectString(output.S3Uri),
    TuningDataS3Uri: __expectString(output.TuningDataS3Uri),
  } as any;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InterruptionFilter = (output: any, context: __SerdeContext): InterruptionFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange !== undefined && output.AbsoluteTimeRange !== null
        ? deserializeAws_json1_1AbsoluteTimeRange(output.AbsoluteTimeRange, context)
        : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange !== undefined && output.RelativeTimeRange !== null
        ? deserializeAws_json1_1RelativeTimeRange(output.RelativeTimeRange, context)
        : undefined,
    Threshold: __expectLong(output.Threshold),
  } as any;
};

const deserializeAws_json1_1JobExecutionSettings = (output: any, context: __SerdeContext): JobExecutionSettings => {
  return {
    AllowDeferredExecution: __expectBoolean(output.AllowDeferredExecution),
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
  } as any;
};

const deserializeAws_json1_1LanguageModel = (output: any, context: __SerdeContext): LanguageModel => {
  return {
    BaseModelName: __expectString(output.BaseModelName),
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    ModelName: __expectString(output.ModelName),
    ModelStatus: __expectString(output.ModelStatus),
    UpgradeAvailability: __expectBoolean(output.UpgradeAvailability),
  } as any;
};

const deserializeAws_json1_1LanguageOptions = (output: any, context: __SerdeContext): (LanguageCode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListCallAnalyticsCategoriesResponse = (
  output: any,
  context: __SerdeContext
): ListCallAnalyticsCategoriesResponse => {
  return {
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_json1_1CategoryPropertiesList(output.Categories, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCallAnalyticsJobsResponse = (
  output: any,
  context: __SerdeContext
): ListCallAnalyticsJobsResponse => {
  return {
    CallAnalyticsJobSummaries:
      output.CallAnalyticsJobSummaries !== undefined && output.CallAnalyticsJobSummaries !== null
        ? deserializeAws_json1_1CallAnalyticsJobSummaries(output.CallAnalyticsJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ListLanguageModelsResponse = (
  output: any,
  context: __SerdeContext
): ListLanguageModelsResponse => {
  return {
    Models:
      output.Models !== undefined && output.Models !== null
        ? deserializeAws_json1_1Models(output.Models, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMedicalTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalTranscriptionJobsResponse => {
  return {
    MedicalTranscriptionJobSummaries:
      output.MedicalTranscriptionJobSummaries !== undefined && output.MedicalTranscriptionJobSummaries !== null
        ? deserializeAws_json1_1MedicalTranscriptionJobSummaries(output.MedicalTranscriptionJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ListMedicalVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalVocabulariesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    Vocabularies:
      output.Vocabularies !== undefined && output.Vocabularies !== null
        ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTranscriptionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    TranscriptionJobSummaries:
      output.TranscriptionJobSummaries !== undefined && output.TranscriptionJobSummaries !== null
        ? deserializeAws_json1_1TranscriptionJobSummaries(output.TranscriptionJobSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListVocabulariesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    Vocabularies:
      output.Vocabularies !== undefined && output.Vocabularies !== null
        ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVocabularyFiltersResponse = (
  output: any,
  context: __SerdeContext
): ListVocabularyFiltersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    VocabularyFilters:
      output.VocabularyFilters !== undefined && output.VocabularyFilters !== null
        ? deserializeAws_json1_1VocabularyFilters(output.VocabularyFilters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Media = (output: any, context: __SerdeContext): Media => {
  return {
    MediaFileUri: __expectString(output.MediaFileUri),
    RedactedMediaFileUri: __expectString(output.RedactedMediaFileUri),
  } as any;
};

const deserializeAws_json1_1MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    TranscriptFileUri: __expectString(output.TranscriptFileUri),
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionJob = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJob => {
  return {
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    Media:
      output.Media !== undefined && output.Media !== null
        ? deserializeAws_json1_1Media(output.Media, context)
        : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    MedicalTranscriptionJobName: __expectString(output.MedicalTranscriptionJobName),
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1MedicalTranscriptionSetting(output.Settings, context)
        : undefined,
    Specialty: __expectString(output.Specialty),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_json1_1MedicalTranscript(output.Transcript, context)
        : undefined,
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MedicalTranscriptionJobSummary(entry, context);
    });
};

const deserializeAws_json1_1MedicalTranscriptionJobSummary = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJobSummary => {
  return {
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    MedicalTranscriptionJobName: __expectString(output.MedicalTranscriptionJobName),
    OutputLocationType: __expectString(output.OutputLocationType),
    Specialty: __expectString(output.Specialty),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionSetting = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionSetting => {
  return {
    ChannelIdentification: __expectBoolean(output.ChannelIdentification),
    MaxAlternatives: __expectInt32(output.MaxAlternatives),
    MaxSpeakerLabels: __expectInt32(output.MaxSpeakerLabels),
    ShowAlternatives: __expectBoolean(output.ShowAlternatives),
    ShowSpeakerLabels: __expectBoolean(output.ShowSpeakerLabels),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

const deserializeAws_json1_1Models = (output: any, context: __SerdeContext): LanguageModel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LanguageModel(entry, context);
    });
};

const deserializeAws_json1_1ModelSettings = (output: any, context: __SerdeContext): ModelSettings => {
  return {
    LanguageModelName: __expectString(output.LanguageModelName),
  } as any;
};

const deserializeAws_json1_1NonTalkTimeFilter = (output: any, context: __SerdeContext): NonTalkTimeFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange !== undefined && output.AbsoluteTimeRange !== null
        ? deserializeAws_json1_1AbsoluteTimeRange(output.AbsoluteTimeRange, context)
        : undefined,
    Negate: __expectBoolean(output.Negate),
    RelativeTimeRange:
      output.RelativeTimeRange !== undefined && output.RelativeTimeRange !== null
        ? deserializeAws_json1_1RelativeTimeRange(output.RelativeTimeRange, context)
        : undefined,
    Threshold: __expectLong(output.Threshold),
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RelativeTimeRange = (output: any, context: __SerdeContext): RelativeTimeRange => {
  return {
    EndPercentage: __expectInt32(output.EndPercentage),
    First: __expectInt32(output.First),
    Last: __expectInt32(output.Last),
    StartPercentage: __expectInt32(output.StartPercentage),
  } as any;
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
  if (output.InterruptionFilter !== undefined && output.InterruptionFilter !== null) {
    return {
      InterruptionFilter: deserializeAws_json1_1InterruptionFilter(output.InterruptionFilter, context),
    };
  }
  if (output.NonTalkTimeFilter !== undefined && output.NonTalkTimeFilter !== null) {
    return {
      NonTalkTimeFilter: deserializeAws_json1_1NonTalkTimeFilter(output.NonTalkTimeFilter, context),
    };
  }
  if (output.SentimentFilter !== undefined && output.SentimentFilter !== null) {
    return {
      SentimentFilter: deserializeAws_json1_1SentimentFilter(output.SentimentFilter, context),
    };
  }
  if (output.TranscriptFilter !== undefined && output.TranscriptFilter !== null) {
    return {
      TranscriptFilter: deserializeAws_json1_1TranscriptFilter(output.TranscriptFilter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1RuleList = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(__expectUnion(entry), context);
    });
};

const deserializeAws_json1_1SentimentFilter = (output: any, context: __SerdeContext): SentimentFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange !== undefined && output.AbsoluteTimeRange !== null
        ? deserializeAws_json1_1AbsoluteTimeRange(output.AbsoluteTimeRange, context)
        : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange !== undefined && output.RelativeTimeRange !== null
        ? deserializeAws_json1_1RelativeTimeRange(output.RelativeTimeRange, context)
        : undefined,
    Sentiments:
      output.Sentiments !== undefined && output.Sentiments !== null
        ? deserializeAws_json1_1SentimentValueList(output.Sentiments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SentimentValueList = (
  output: any,
  context: __SerdeContext
): (SentimentValue | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    ChannelIdentification: __expectBoolean(output.ChannelIdentification),
    MaxAlternatives: __expectInt32(output.MaxAlternatives),
    MaxSpeakerLabels: __expectInt32(output.MaxSpeakerLabels),
    ShowAlternatives: __expectBoolean(output.ShowAlternatives),
    ShowSpeakerLabels: __expectBoolean(output.ShowSpeakerLabels),
    VocabularyFilterMethod: __expectString(output.VocabularyFilterMethod),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

const deserializeAws_json1_1StartCallAnalyticsJobResponse = (
  output: any,
  context: __SerdeContext
): StartCallAnalyticsJobResponse => {
  return {
    CallAnalyticsJob:
      output.CallAnalyticsJob !== undefined && output.CallAnalyticsJob !== null
        ? deserializeAws_json1_1CallAnalyticsJob(output.CallAnalyticsJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartMedicalTranscriptionJobResponse => {
  return {
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
        ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTranscriptionJobResponse => {
  return {
    TranscriptionJob:
      output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
        ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StringTargetList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    RedactedTranscriptFileUri: __expectString(output.RedactedTranscriptFileUri),
    TranscriptFileUri: __expectString(output.TranscriptFileUri),
  } as any;
};

const deserializeAws_json1_1TranscriptFilter = (output: any, context: __SerdeContext): TranscriptFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange !== undefined && output.AbsoluteTimeRange !== null
        ? deserializeAws_json1_1AbsoluteTimeRange(output.AbsoluteTimeRange, context)
        : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange !== undefined && output.RelativeTimeRange !== null
        ? deserializeAws_json1_1RelativeTimeRange(output.RelativeTimeRange, context)
        : undefined,
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1StringTargetList(output.Targets, context)
        : undefined,
    TranscriptFilterType: __expectString(output.TranscriptFilterType),
  } as any;
};

const deserializeAws_json1_1TranscriptionJob = (output: any, context: __SerdeContext): TranscriptionJob => {
  return {
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentRedaction:
      output.ContentRedaction !== undefined && output.ContentRedaction !== null
        ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    IdentifyLanguage: __expectBoolean(output.IdentifyLanguage),
    JobExecutionSettings:
      output.JobExecutionSettings !== undefined && output.JobExecutionSettings !== null
        ? deserializeAws_json1_1JobExecutionSettings(output.JobExecutionSettings, context)
        : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    LanguageOptions:
      output.LanguageOptions !== undefined && output.LanguageOptions !== null
        ? deserializeAws_json1_1LanguageOptions(output.LanguageOptions, context)
        : undefined,
    Media:
      output.Media !== undefined && output.Media !== null
        ? deserializeAws_json1_1Media(output.Media, context)
        : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    ModelSettings:
      output.ModelSettings !== undefined && output.ModelSettings !== null
        ? deserializeAws_json1_1ModelSettings(output.ModelSettings, context)
        : undefined,
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1Settings(output.Settings, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_json1_1Transcript(output.Transcript, context)
        : undefined,
    TranscriptionJobName: __expectString(output.TranscriptionJobName),
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
  } as any;
};

const deserializeAws_json1_1TranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): TranscriptionJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TranscriptionJobSummary(entry, context);
    });
};

const deserializeAws_json1_1TranscriptionJobSummary = (
  output: any,
  context: __SerdeContext
): TranscriptionJobSummary => {
  return {
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentRedaction:
      output.ContentRedaction !== undefined && output.ContentRedaction !== null
        ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    IdentifyLanguage: __expectBoolean(output.IdentifyLanguage),
    LanguageCode: __expectString(output.LanguageCode),
    ModelSettings:
      output.ModelSettings !== undefined && output.ModelSettings !== null
        ? deserializeAws_json1_1ModelSettings(output.ModelSettings, context)
        : undefined,
    OutputLocationType: __expectString(output.OutputLocationType),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    TranscriptionJobName: __expectString(output.TranscriptionJobName),
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): UpdateCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties !== undefined && output.CategoryProperties !== null
        ? deserializeAws_json1_1CategoryProperties(output.CategoryProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateMedicalVocabularyResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1UpdateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyFilterResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

const deserializeAws_json1_1UpdateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeAws_json1_1Vocabularies = (output: any, context: __SerdeContext): VocabularyInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VocabularyInfo(entry, context);
    });
};

const deserializeAws_json1_1VocabularyFilterInfo = (output: any, context: __SerdeContext): VocabularyFilterInfo => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

const deserializeAws_json1_1VocabularyFilters = (output: any, context: __SerdeContext): VocabularyFilterInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VocabularyFilterInfo(entry, context);
    });
};

const deserializeAws_json1_1VocabularyInfo = (output: any, context: __SerdeContext): VocabularyInfo => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
