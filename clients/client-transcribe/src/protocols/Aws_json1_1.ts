// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
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
  LanguageCodeItem,
  LanguageIdSettings,
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
  PiiEntityType,
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
  SubtitleFormat,
  Subtitles,
  SubtitlesOutput,
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
import { TranscribeServiceException as __BaseException } from "../models/TranscribeServiceException";

/**
 * serializeAws_json1_1CreateCallAnalyticsCategoryCommand
 */
export const se_CreateCallAnalyticsCategoryCommand = async (
  input: CreateCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(se_CreateCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLanguageModelCommand
 */
export const se_CreateLanguageModelCommand = async (
  input: CreateLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateLanguageModel",
  };
  let body: any;
  body = JSON.stringify(se_CreateLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMedicalVocabularyCommand
 */
export const se_CreateMedicalVocabularyCommand = async (
  input: CreateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_CreateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVocabularyCommand
 */
export const se_CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_CreateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVocabularyFilterCommand
 */
export const se_CreateVocabularyFilterCommand = async (
  input: CreateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.CreateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(se_CreateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsCategoryCommand
 */
export const se_DeleteCallAnalyticsCategoryCommand = async (
  input: DeleteCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsJobCommand
 */
export const se_DeleteCallAnalyticsJobCommand = async (
  input: DeleteCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLanguageModelCommand
 */
export const se_DeleteLanguageModelCommand = async (
  input: DeleteLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteLanguageModel",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMedicalTranscriptionJobCommand
 */
export const se_DeleteMedicalTranscriptionJobCommand = async (
  input: DeleteMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMedicalVocabularyCommand
 */
export const se_DeleteMedicalVocabularyCommand = async (
  input: DeleteMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTranscriptionJobCommand
 */
export const se_DeleteTranscriptionJobCommand = async (
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVocabularyCommand
 */
export const se_DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVocabularyFilterCommand
 */
export const se_DeleteVocabularyFilterCommand = async (
  input: DeleteVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DeleteVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLanguageModelCommand
 */
export const se_DescribeLanguageModelCommand = async (
  input: DescribeLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.DescribeLanguageModel",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLanguageModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCallAnalyticsCategoryCommand
 */
export const se_GetCallAnalyticsCategoryCommand = async (
  input: GetCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(se_GetCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCallAnalyticsJobCommand
 */
export const se_GetCallAnalyticsJobCommand = async (
  input: GetCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(se_GetCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMedicalTranscriptionJobCommand
 */
export const se_GetMedicalTranscriptionJobCommand = async (
  input: GetMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_GetMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMedicalVocabularyCommand
 */
export const se_GetMedicalVocabularyCommand = async (
  input: GetMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_GetMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTranscriptionJobCommand
 */
export const se_GetTranscriptionJobCommand = async (
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_GetTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVocabularyCommand
 */
export const se_GetVocabularyCommand = async (
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_GetVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVocabularyFilterCommand
 */
export const se_GetVocabularyFilterCommand = async (
  input: GetVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.GetVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(se_GetVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCallAnalyticsCategoriesCommand
 */
export const se_ListCallAnalyticsCategoriesCommand = async (
  input: ListCallAnalyticsCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListCallAnalyticsCategories",
  };
  let body: any;
  body = JSON.stringify(se_ListCallAnalyticsCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCallAnalyticsJobsCommand
 */
export const se_ListCallAnalyticsJobsCommand = async (
  input: ListCallAnalyticsJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListCallAnalyticsJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListCallAnalyticsJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLanguageModelsCommand
 */
export const se_ListLanguageModelsCommand = async (
  input: ListLanguageModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListLanguageModels",
  };
  let body: any;
  body = JSON.stringify(se_ListLanguageModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMedicalTranscriptionJobsCommand
 */
export const se_ListMedicalTranscriptionJobsCommand = async (
  input: ListMedicalTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListMedicalTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListMedicalTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMedicalVocabulariesCommand
 */
export const se_ListMedicalVocabulariesCommand = async (
  input: ListMedicalVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListMedicalVocabularies",
  };
  let body: any;
  body = JSON.stringify(se_ListMedicalVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTranscriptionJobsCommand
 */
export const se_ListTranscriptionJobsCommand = async (
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVocabulariesCommand
 */
export const se_ListVocabulariesCommand = async (
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListVocabularies",
  };
  let body: any;
  body = JSON.stringify(se_ListVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVocabularyFiltersCommand
 */
export const se_ListVocabularyFiltersCommand = async (
  input: ListVocabularyFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.ListVocabularyFilters",
  };
  let body: any;
  body = JSON.stringify(se_ListVocabularyFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCallAnalyticsJobCommand
 */
export const se_StartCallAnalyticsJobCommand = async (
  input: StartCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartCallAnalyticsJob",
  };
  let body: any;
  body = JSON.stringify(se_StartCallAnalyticsJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMedicalTranscriptionJobCommand
 */
export const se_StartMedicalTranscriptionJobCommand = async (
  input: StartMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_StartMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTranscriptionJobCommand
 */
export const se_StartTranscriptionJobCommand = async (
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.StartTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(se_StartTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.TagResource",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCallAnalyticsCategoryCommand
 */
export const se_UpdateCallAnalyticsCategoryCommand = async (
  input: UpdateCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateCallAnalyticsCategory",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCallAnalyticsCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMedicalVocabularyCommand
 */
export const se_UpdateMedicalVocabularyCommand = async (
  input: UpdateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_UpdateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVocabularyCommand
 */
export const se_UpdateVocabularyCommand = async (
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateVocabulary",
  };
  let body: any;
  body = JSON.stringify(se_UpdateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVocabularyFilterCommand
 */
export const se_UpdateVocabularyFilterCommand = async (
  input: UpdateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Transcribe.UpdateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(se_UpdateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateCallAnalyticsCategoryCommand
 */
export const de_CreateCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCallAnalyticsCategoryResponse(data, context);
  const response: CreateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCallAnalyticsCategoryCommandError
 */
const de_CreateCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1CreateLanguageModelCommand
 */
export const de_CreateLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLanguageModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLanguageModelResponse(data, context);
  const response: CreateLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLanguageModelCommandError
 */
const de_CreateLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1CreateMedicalVocabularyCommand
 */
export const de_CreateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMedicalVocabularyResponse(data, context);
  const response: CreateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMedicalVocabularyCommandError
 */
const de_CreateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1CreateVocabularyCommand
 */
export const de_CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateVocabularyCommandError
 */
const de_CreateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1CreateVocabularyFilterCommand
 */
export const de_CreateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVocabularyFilterResponse(data, context);
  const response: CreateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateVocabularyFilterCommandError
 */
const de_CreateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteCallAnalyticsCategoryCommand
 */
export const de_DeleteCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCallAnalyticsCategoryResponse(data, context);
  const response: DeleteCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsCategoryCommandError
 */
const de_DeleteCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteCallAnalyticsJobCommand
 */
export const de_DeleteCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCallAnalyticsJobResponse(data, context);
  const response: DeleteCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsJobCommandError
 */
const de_DeleteCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteLanguageModelCommand
 */
export const de_DeleteLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLanguageModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLanguageModelCommandError
 */
const de_DeleteLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand
 */
export const de_DeleteMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMedicalTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError
 */
const de_DeleteMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteMedicalVocabularyCommand
 */
export const de_DeleteMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMedicalVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMedicalVocabularyCommandError
 */
const de_DeleteMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteTranscriptionJobCommand
 */
export const de_DeleteTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTranscriptionJobCommandError
 */
const de_DeleteTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteVocabularyCommand
 */
export const de_DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteVocabularyCommandError
 */
const de_DeleteVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DeleteVocabularyFilterCommand
 */
export const de_DeleteVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVocabularyFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteVocabularyFilterCommandError
 */
const de_DeleteVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1DescribeLanguageModelCommand
 */
export const de_DescribeLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLanguageModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLanguageModelResponse(data, context);
  const response: DescribeLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLanguageModelCommandError
 */
const de_DescribeLanguageModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLanguageModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetCallAnalyticsCategoryCommand
 */
export const de_GetCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCallAnalyticsCategoryResponse(data, context);
  const response: GetCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCallAnalyticsCategoryCommandError
 */
const de_GetCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetCallAnalyticsJobCommand
 */
export const de_GetCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCallAnalyticsJobResponse(data, context);
  const response: GetCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCallAnalyticsJobCommandError
 */
const de_GetCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetMedicalTranscriptionJobCommand
 */
export const de_GetMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMedicalTranscriptionJobResponse(data, context);
  const response: GetMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMedicalTranscriptionJobCommandError
 */
const de_GetMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetMedicalVocabularyCommand
 */
export const de_GetMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMedicalVocabularyResponse(data, context);
  const response: GetMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMedicalVocabularyCommandError
 */
const de_GetMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetTranscriptionJobCommand
 */
export const de_GetTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTranscriptionJobCommandError
 */
const de_GetTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetVocabularyCommand
 */
export const de_GetVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetVocabularyCommandError
 */
const de_GetVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1GetVocabularyFilterCommand
 */
export const de_GetVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVocabularyFilterResponse(data, context);
  const response: GetVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetVocabularyFilterCommandError
 */
const de_GetVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListCallAnalyticsCategoriesCommand
 */
export const de_ListCallAnalyticsCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCallAnalyticsCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCallAnalyticsCategoriesResponse(data, context);
  const response: ListCallAnalyticsCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCallAnalyticsCategoriesCommandError
 */
const de_ListCallAnalyticsCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListCallAnalyticsJobsCommand
 */
export const de_ListCallAnalyticsJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCallAnalyticsJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCallAnalyticsJobsResponse(data, context);
  const response: ListCallAnalyticsJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCallAnalyticsJobsCommandError
 */
const de_ListCallAnalyticsJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListLanguageModelsCommand
 */
export const de_ListLanguageModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguageModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLanguageModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLanguageModelsResponse(data, context);
  const response: ListLanguageModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLanguageModelsCommandError
 */
const de_ListLanguageModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguageModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListMedicalTranscriptionJobsCommand
 */
export const de_ListMedicalTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMedicalTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMedicalTranscriptionJobsResponse(data, context);
  const response: ListMedicalTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError
 */
const de_ListMedicalTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListMedicalVocabulariesCommand
 */
export const de_ListMedicalVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMedicalVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMedicalVocabulariesResponse(data, context);
  const response: ListMedicalVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMedicalVocabulariesCommandError
 */
const de_ListMedicalVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListTranscriptionJobsCommand
 */
export const de_ListTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTranscriptionJobsCommandError
 */
const de_ListTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListVocabulariesCommand
 */
export const de_ListVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVocabulariesCommandError
 */
const de_ListVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1ListVocabularyFiltersCommand
 */
export const de_ListVocabularyFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVocabularyFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVocabularyFiltersResponse(data, context);
  const response: ListVocabularyFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVocabularyFiltersCommandError
 */
const de_ListVocabularyFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1StartCallAnalyticsJobCommand
 */
export const de_StartCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartCallAnalyticsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartCallAnalyticsJobResponse(data, context);
  const response: StartCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartCallAnalyticsJobCommandError
 */
const de_StartCallAnalyticsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1StartMedicalTranscriptionJobCommand
 */
export const de_StartMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMedicalTranscriptionJobResponse(data, context);
  const response: StartMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartMedicalTranscriptionJobCommandError
 */
const de_StartMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1StartTranscriptionJobCommand
 */
export const de_StartTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartTranscriptionJobCommandError
 */
const de_StartTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1UpdateCallAnalyticsCategoryCommand
 */
export const de_UpdateCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCallAnalyticsCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCallAnalyticsCategoryResponse(data, context);
  const response: UpdateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCallAnalyticsCategoryCommandError
 */
const de_UpdateCallAnalyticsCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCallAnalyticsCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1UpdateMedicalVocabularyCommand
 */
export const de_UpdateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMedicalVocabularyResponse(data, context);
  const response: UpdateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMedicalVocabularyCommandError
 */
const de_UpdateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1UpdateVocabularyCommand
 */
export const de_UpdateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVocabularyCommandError
 */
const de_UpdateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1UpdateVocabularyFilterCommand
 */
export const de_UpdateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVocabularyFilterResponse(data, context);
  const response: UpdateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVocabularyFilterCommandError
 */
const de_UpdateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_json1_1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BadRequestException(body, context);
  const exception = new BadRequestException({
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
 * deserializeAws_json1_1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalFailureException(body, context);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AbsoluteTimeRange
 */
const se_AbsoluteTimeRange = (input: AbsoluteTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime }),
    ...(input.First != null && { First: input.First }),
    ...(input.Last != null && { Last: input.Last }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
  };
};

/**
 * serializeAws_json1_1CallAnalyticsJobSettings
 */
const se_CallAnalyticsJobSettings = (input: CallAnalyticsJobSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContentRedaction != null && { ContentRedaction: se_ContentRedaction(input.ContentRedaction, context) }),
    ...(input.LanguageIdSettings != null && {
      LanguageIdSettings: se_LanguageIdSettingsMap(input.LanguageIdSettings, context),
    }),
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
    ...(input.LanguageOptions != null && { LanguageOptions: se_LanguageOptions(input.LanguageOptions, context) }),
    ...(input.VocabularyFilterMethod != null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1ChannelDefinition
 */
const se_ChannelDefinition = (input: ChannelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ChannelId != null && { ChannelId: input.ChannelId }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
  };
};

/**
 * serializeAws_json1_1ChannelDefinitions
 */
const se_ChannelDefinitions = (input: ChannelDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ChannelDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1ContentRedaction
 */
const se_ContentRedaction = (input: ContentRedaction, context: __SerdeContext): any => {
  return {
    ...(input.PiiEntityTypes != null && { PiiEntityTypes: se_PiiEntityTypes(input.PiiEntityTypes, context) }),
    ...(input.RedactionOutput != null && { RedactionOutput: input.RedactionOutput }),
    ...(input.RedactionType != null && { RedactionType: input.RedactionType }),
  };
};

/**
 * serializeAws_json1_1CreateCallAnalyticsCategoryRequest
 */
const se_CreateCallAnalyticsCategoryRequest = (
  input: CreateCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName != null && { CategoryName: input.CategoryName }),
    ...(input.InputType != null && { InputType: input.InputType }),
    ...(input.Rules != null && { Rules: se_RuleList(input.Rules, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLanguageModelRequest
 */
const se_CreateLanguageModelRequest = (input: CreateLanguageModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BaseModelName != null && { BaseModelName: input.BaseModelName }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateMedicalVocabularyRequest
 */
const se_CreateMedicalVocabularyRequest = (input: CreateMedicalVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VocabularyFileUri != null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1CreateVocabularyFilterRequest
 */
const se_CreateVocabularyFilterRequest = (input: CreateVocabularyFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VocabularyFilterFileUri != null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words != null && { Words: se_Words(input.Words, context) }),
  };
};

/**
 * serializeAws_json1_1CreateVocabularyRequest
 */
const se_CreateVocabularyRequest = (input: CreateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases != null && { Phrases: se_Phrases(input.Phrases, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VocabularyFileUri != null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsCategoryRequest
 */
const se_DeleteCallAnalyticsCategoryRequest = (
  input: DeleteCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName != null && { CategoryName: input.CategoryName }),
  };
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsJobRequest
 */
const se_DeleteCallAnalyticsJobRequest = (input: DeleteCallAnalyticsJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.CallAnalyticsJobName != null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
  };
};

/**
 * serializeAws_json1_1DeleteLanguageModelRequest
 */
const se_DeleteLanguageModelRequest = (input: DeleteLanguageModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

/**
 * serializeAws_json1_1DeleteMedicalTranscriptionJobRequest
 */
const se_DeleteMedicalTranscriptionJobRequest = (
  input: DeleteMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName != null && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteMedicalVocabularyRequest
 */
const se_DeleteMedicalVocabularyRequest = (input: DeleteMedicalVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1DeleteTranscriptionJobRequest
 */
const se_DeleteTranscriptionJobRequest = (input: DeleteTranscriptionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.TranscriptionJobName != null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

/**
 * serializeAws_json1_1DeleteVocabularyFilterRequest
 */
const se_DeleteVocabularyFilterRequest = (input: DeleteVocabularyFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

/**
 * serializeAws_json1_1DeleteVocabularyRequest
 */
const se_DeleteVocabularyRequest = (input: DeleteVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1DescribeLanguageModelRequest
 */
const se_DescribeLanguageModelRequest = (input: DescribeLanguageModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

/**
 * serializeAws_json1_1GetCallAnalyticsCategoryRequest
 */
const se_GetCallAnalyticsCategoryRequest = (input: GetCallAnalyticsCategoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.CategoryName != null && { CategoryName: input.CategoryName }),
  };
};

/**
 * serializeAws_json1_1GetCallAnalyticsJobRequest
 */
const se_GetCallAnalyticsJobRequest = (input: GetCallAnalyticsJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.CallAnalyticsJobName != null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
  };
};

/**
 * serializeAws_json1_1GetMedicalTranscriptionJobRequest
 */
const se_GetMedicalTranscriptionJobRequest = (
  input: GetMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName != null && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
  };
};

/**
 * serializeAws_json1_1GetMedicalVocabularyRequest
 */
const se_GetMedicalVocabularyRequest = (input: GetMedicalVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1GetTranscriptionJobRequest
 */
const se_GetTranscriptionJobRequest = (input: GetTranscriptionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.TranscriptionJobName != null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

/**
 * serializeAws_json1_1GetVocabularyFilterRequest
 */
const se_GetVocabularyFilterRequest = (input: GetVocabularyFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

/**
 * serializeAws_json1_1GetVocabularyRequest
 */
const se_GetVocabularyRequest = (input: GetVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
    ...(input.TuningDataS3Uri != null && { TuningDataS3Uri: input.TuningDataS3Uri }),
  };
};

/**
 * serializeAws_json1_1InterruptionFilter
 */
const se_InterruptionFilter = (input: InterruptionFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange != null && {
      AbsoluteTimeRange: se_AbsoluteTimeRange(input.AbsoluteTimeRange, context),
    }),
    ...(input.Negate != null && { Negate: input.Negate }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange != null && {
      RelativeTimeRange: se_RelativeTimeRange(input.RelativeTimeRange, context),
    }),
    ...(input.Threshold != null && { Threshold: input.Threshold }),
  };
};

/**
 * serializeAws_json1_1JobExecutionSettings
 */
const se_JobExecutionSettings = (input: JobExecutionSettings, context: __SerdeContext): any => {
  return {
    ...(input.AllowDeferredExecution != null && { AllowDeferredExecution: input.AllowDeferredExecution }),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1KMSEncryptionContextMap
 */
const se_KMSEncryptionContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LanguageIdSettings
 */
const se_LanguageIdSettings = (input: LanguageIdSettings, context: __SerdeContext): any => {
  return {
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1LanguageIdSettingsMap
 */
const se_LanguageIdSettingsMap = (input: Record<string, LanguageIdSettings>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [LanguageCode | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_LanguageIdSettings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LanguageOptions
 */
const se_LanguageOptions = (input: (LanguageCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListCallAnalyticsCategoriesRequest
 */
const se_ListCallAnalyticsCategoriesRequest = (
  input: ListCallAnalyticsCategoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCallAnalyticsJobsRequest
 */
const se_ListCallAnalyticsJobsRequest = (input: ListCallAnalyticsJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobNameContains != null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListLanguageModelsRequest
 */
const se_ListLanguageModelsRequest = (input: ListLanguageModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NameContains != null && { NameContains: input.NameContains }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusEquals != null && { StatusEquals: input.StatusEquals }),
  };
};

/**
 * serializeAws_json1_1ListMedicalTranscriptionJobsRequest
 */
const se_ListMedicalTranscriptionJobsRequest = (
  input: ListMedicalTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains != null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListMedicalVocabulariesRequest
 */
const se_ListMedicalVocabulariesRequest = (input: ListMedicalVocabulariesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NameContains != null && { NameContains: input.NameContains }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StateEquals != null && { StateEquals: input.StateEquals }),
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
 * serializeAws_json1_1ListTranscriptionJobsRequest
 */
const se_ListTranscriptionJobsRequest = (input: ListTranscriptionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobNameContains != null && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListVocabulariesRequest
 */
const se_ListVocabulariesRequest = (input: ListVocabulariesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NameContains != null && { NameContains: input.NameContains }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StateEquals != null && { StateEquals: input.StateEquals }),
  };
};

/**
 * serializeAws_json1_1ListVocabularyFiltersRequest
 */
const se_ListVocabularyFiltersRequest = (input: ListVocabularyFiltersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NameContains != null && { NameContains: input.NameContains }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1Media
 */
const se_Media = (input: Media, context: __SerdeContext): any => {
  return {
    ...(input.MediaFileUri != null && { MediaFileUri: input.MediaFileUri }),
    ...(input.RedactedMediaFileUri != null && { RedactedMediaFileUri: input.RedactedMediaFileUri }),
  };
};

/**
 * serializeAws_json1_1MedicalTranscriptionSetting
 */
const se_MedicalTranscriptionSetting = (input: MedicalTranscriptionSetting, context: __SerdeContext): any => {
  return {
    ...(input.ChannelIdentification != null && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives != null && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels != null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives != null && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels != null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1ModelSettings
 */
const se_ModelSettings = (input: ModelSettings, context: __SerdeContext): any => {
  return {
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
  };
};

/**
 * serializeAws_json1_1NonTalkTimeFilter
 */
const se_NonTalkTimeFilter = (input: NonTalkTimeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange != null && {
      AbsoluteTimeRange: se_AbsoluteTimeRange(input.AbsoluteTimeRange, context),
    }),
    ...(input.Negate != null && { Negate: input.Negate }),
    ...(input.RelativeTimeRange != null && {
      RelativeTimeRange: se_RelativeTimeRange(input.RelativeTimeRange, context),
    }),
    ...(input.Threshold != null && { Threshold: input.Threshold }),
  };
};

/**
 * serializeAws_json1_1Phrases
 */
const se_Phrases = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PiiEntityTypes
 */
const se_PiiEntityTypes = (input: (PiiEntityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RelativeTimeRange
 */
const se_RelativeTimeRange = (input: RelativeTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndPercentage != null && { EndPercentage: input.EndPercentage }),
    ...(input.First != null && { First: input.First }),
    ...(input.Last != null && { Last: input.Last }),
    ...(input.StartPercentage != null && { StartPercentage: input.StartPercentage }),
  };
};

/**
 * serializeAws_json1_1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return Rule.visit(input, {
    InterruptionFilter: (value) => ({ InterruptionFilter: se_InterruptionFilter(value, context) }),
    NonTalkTimeFilter: (value) => ({ NonTalkTimeFilter: se_NonTalkTimeFilter(value, context) }),
    SentimentFilter: (value) => ({ SentimentFilter: se_SentimentFilter(value, context) }),
    TranscriptFilter: (value) => ({ TranscriptFilter: se_TranscriptFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
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
 * serializeAws_json1_1SentimentFilter
 */
const se_SentimentFilter = (input: SentimentFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange != null && {
      AbsoluteTimeRange: se_AbsoluteTimeRange(input.AbsoluteTimeRange, context),
    }),
    ...(input.Negate != null && { Negate: input.Negate }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange != null && {
      RelativeTimeRange: se_RelativeTimeRange(input.RelativeTimeRange, context),
    }),
    ...(input.Sentiments != null && { Sentiments: se_SentimentValueList(input.Sentiments, context) }),
  };
};

/**
 * serializeAws_json1_1SentimentValueList
 */
const se_SentimentValueList = (input: (SentimentValue | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Settings
 */
const se_Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelIdentification != null && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives != null && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels != null && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives != null && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels != null && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyFilterMethod != null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1StartCallAnalyticsJobRequest
 */
const se_StartCallAnalyticsJobRequest = (input: StartCallAnalyticsJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.CallAnalyticsJobName != null && { CallAnalyticsJobName: input.CallAnalyticsJobName }),
    ...(input.ChannelDefinitions != null && {
      ChannelDefinitions: se_ChannelDefinitions(input.ChannelDefinitions, context),
    }),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.Media != null && { Media: se_Media(input.Media, context) }),
    ...(input.OutputEncryptionKMSKeyId != null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
    ...(input.Settings != null && { Settings: se_CallAnalyticsJobSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1StartMedicalTranscriptionJobRequest
 */
const se_StartMedicalTranscriptionJobRequest = (
  input: StartMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType != null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.KMSEncryptionContext != null && {
      KMSEncryptionContext: se_KMSEncryptionContextMap(input.KMSEncryptionContext, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Media != null && { Media: se_Media(input.Media, context) }),
    ...(input.MediaFormat != null && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz != null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.MedicalTranscriptionJobName != null && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
    ...(input.OutputBucketName != null && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId != null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputKey != null && { OutputKey: input.OutputKey }),
    ...(input.Settings != null && { Settings: se_MedicalTranscriptionSetting(input.Settings, context) }),
    ...(input.Specialty != null && { Specialty: input.Specialty }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1StartTranscriptionJobRequest
 */
const se_StartTranscriptionJobRequest = (input: StartTranscriptionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContentRedaction != null && { ContentRedaction: se_ContentRedaction(input.ContentRedaction, context) }),
    ...(input.IdentifyLanguage != null && { IdentifyLanguage: input.IdentifyLanguage }),
    ...(input.IdentifyMultipleLanguages != null && { IdentifyMultipleLanguages: input.IdentifyMultipleLanguages }),
    ...(input.JobExecutionSettings != null && {
      JobExecutionSettings: se_JobExecutionSettings(input.JobExecutionSettings, context),
    }),
    ...(input.KMSEncryptionContext != null && {
      KMSEncryptionContext: se_KMSEncryptionContextMap(input.KMSEncryptionContext, context),
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageIdSettings != null && {
      LanguageIdSettings: se_LanguageIdSettingsMap(input.LanguageIdSettings, context),
    }),
    ...(input.LanguageOptions != null && { LanguageOptions: se_LanguageOptions(input.LanguageOptions, context) }),
    ...(input.Media != null && { Media: se_Media(input.Media, context) }),
    ...(input.MediaFormat != null && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz != null && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.ModelSettings != null && { ModelSettings: se_ModelSettings(input.ModelSettings, context) }),
    ...(input.OutputBucketName != null && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId != null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputKey != null && { OutputKey: input.OutputKey }),
    ...(input.Settings != null && { Settings: se_Settings(input.Settings, context) }),
    ...(input.Subtitles != null && { Subtitles: se_Subtitles(input.Subtitles, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TranscriptionJobName != null && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

/**
 * serializeAws_json1_1StringTargetList
 */
const se_StringTargetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubtitleFormats
 */
const se_SubtitleFormats = (input: (SubtitleFormat | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Subtitles
 */
const se_Subtitles = (input: Subtitles, context: __SerdeContext): any => {
  return {
    ...(input.Formats != null && { Formats: se_SubtitleFormats(input.Formats, context) }),
    ...(input.OutputStartIndex != null && { OutputStartIndex: input.OutputStartIndex }),
  };
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
 * serializeAws_json1_1TranscriptFilter
 */
const se_TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.AbsoluteTimeRange != null && {
      AbsoluteTimeRange: se_AbsoluteTimeRange(input.AbsoluteTimeRange, context),
    }),
    ...(input.Negate != null && { Negate: input.Negate }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
    ...(input.RelativeTimeRange != null && {
      RelativeTimeRange: se_RelativeTimeRange(input.RelativeTimeRange, context),
    }),
    ...(input.Targets != null && { Targets: se_StringTargetList(input.Targets, context) }),
    ...(input.TranscriptFilterType != null && { TranscriptFilterType: input.TranscriptFilterType }),
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
 * serializeAws_json1_1UpdateCallAnalyticsCategoryRequest
 */
const se_UpdateCallAnalyticsCategoryRequest = (
  input: UpdateCallAnalyticsCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryName != null && { CategoryName: input.CategoryName }),
    ...(input.InputType != null && { InputType: input.InputType }),
    ...(input.Rules != null && { Rules: se_RuleList(input.Rules, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateMedicalVocabularyRequest
 */
const se_UpdateMedicalVocabularyRequest = (input: UpdateMedicalVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.VocabularyFileUri != null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1UpdateVocabularyFilterRequest
 */
const se_UpdateVocabularyFilterRequest = (input: UpdateVocabularyFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.VocabularyFilterFileUri != null && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words != null && { Words: se_Words(input.Words, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateVocabularyRequest
 */
const se_UpdateVocabularyRequest = (input: UpdateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases != null && { Phrases: se_Phrases(input.Phrases, context) }),
    ...(input.VocabularyFileUri != null && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_json1_1Words
 */
const se_Words = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AbsoluteTimeRange
 */
const de_AbsoluteTimeRange = (output: any, context: __SerdeContext): AbsoluteTimeRange => {
  return {
    EndTime: __expectLong(output.EndTime),
    First: __expectLong(output.First),
    Last: __expectLong(output.Last),
    StartTime: __expectLong(output.StartTime),
  } as any;
};

/**
 * deserializeAws_json1_1BadRequestException
 */
const de_BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CallAnalyticsJob
 */
const de_CallAnalyticsJob = (output: any, context: __SerdeContext): CallAnalyticsJob => {
  return {
    CallAnalyticsJobName: __expectString(output.CallAnalyticsJobName),
    CallAnalyticsJobStatus: __expectString(output.CallAnalyticsJobStatus),
    ChannelDefinitions:
      output.ChannelDefinitions != null ? de_ChannelDefinitions(output.ChannelDefinitions, context) : undefined,
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    LanguageCode: __expectString(output.LanguageCode),
    Media: output.Media != null ? de_Media(output.Media, context) : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    Settings: output.Settings != null ? de_CallAnalyticsJobSettings(output.Settings, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Transcript: output.Transcript != null ? de_Transcript(output.Transcript, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CallAnalyticsJobSettings
 */
const de_CallAnalyticsJobSettings = (output: any, context: __SerdeContext): CallAnalyticsJobSettings => {
  return {
    ContentRedaction:
      output.ContentRedaction != null ? de_ContentRedaction(output.ContentRedaction, context) : undefined,
    LanguageIdSettings:
      output.LanguageIdSettings != null ? de_LanguageIdSettingsMap(output.LanguageIdSettings, context) : undefined,
    LanguageModelName: __expectString(output.LanguageModelName),
    LanguageOptions: output.LanguageOptions != null ? de_LanguageOptions(output.LanguageOptions, context) : undefined,
    VocabularyFilterMethod: __expectString(output.VocabularyFilterMethod),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_json1_1CallAnalyticsJobSummaries
 */
const de_CallAnalyticsJobSummaries = (output: any, context: __SerdeContext): CallAnalyticsJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CallAnalyticsJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CallAnalyticsJobSummary
 */
const de_CallAnalyticsJobSummary = (output: any, context: __SerdeContext): CallAnalyticsJobSummary => {
  return {
    CallAnalyticsJobName: __expectString(output.CallAnalyticsJobName),
    CallAnalyticsJobStatus: __expectString(output.CallAnalyticsJobStatus),
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CategoryProperties
 */
const de_CategoryProperties = (output: any, context: __SerdeContext): CategoryProperties => {
  return {
    CategoryName: __expectString(output.CategoryName),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    InputType: __expectString(output.InputType),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Rules: output.Rules != null ? de_RuleList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CategoryPropertiesList
 */
const de_CategoryPropertiesList = (output: any, context: __SerdeContext): CategoryProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CategoryProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ChannelDefinition
 */
const de_ChannelDefinition = (output: any, context: __SerdeContext): ChannelDefinition => {
  return {
    ChannelId: __expectInt32(output.ChannelId),
    ParticipantRole: __expectString(output.ParticipantRole),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelDefinitions
 */
const de_ChannelDefinitions = (output: any, context: __SerdeContext): ChannelDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ContentRedaction
 */
const de_ContentRedaction = (output: any, context: __SerdeContext): ContentRedaction => {
  return {
    PiiEntityTypes: output.PiiEntityTypes != null ? de_PiiEntityTypes(output.PiiEntityTypes, context) : undefined,
    RedactionOutput: __expectString(output.RedactionOutput),
    RedactionType: __expectString(output.RedactionType),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCallAnalyticsCategoryResponse
 */
const de_CreateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): CreateCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties != null ? de_CategoryProperties(output.CategoryProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateLanguageModelResponse
 */
const de_CreateLanguageModelResponse = (output: any, context: __SerdeContext): CreateLanguageModelResponse => {
  return {
    BaseModelName: __expectString(output.BaseModelName),
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    ModelName: __expectString(output.ModelName),
    ModelStatus: __expectString(output.ModelStatus),
  } as any;
};

/**
 * deserializeAws_json1_1CreateMedicalVocabularyResponse
 */
const de_CreateMedicalVocabularyResponse = (output: any, context: __SerdeContext): CreateMedicalVocabularyResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1CreateVocabularyFilterResponse
 */
const de_CreateVocabularyFilterResponse = (output: any, context: __SerdeContext): CreateVocabularyFilterResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

/**
 * deserializeAws_json1_1CreateVocabularyResponse
 */
const de_CreateVocabularyResponse = (output: any, context: __SerdeContext): CreateVocabularyResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsCategoryResponse
 */
const de_DeleteCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteCallAnalyticsCategoryResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsJobResponse
 */
const de_DeleteCallAnalyticsJobResponse = (output: any, context: __SerdeContext): DeleteCallAnalyticsJobResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeLanguageModelResponse
 */
const de_DescribeLanguageModelResponse = (output: any, context: __SerdeContext): DescribeLanguageModelResponse => {
  return {
    LanguageModel: output.LanguageModel != null ? de_LanguageModel(output.LanguageModel, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsCategoryResponse
 */
const de_GetCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): GetCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties != null ? de_CategoryProperties(output.CategoryProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsJobResponse
 */
const de_GetCallAnalyticsJobResponse = (output: any, context: __SerdeContext): GetCallAnalyticsJobResponse => {
  return {
    CallAnalyticsJob:
      output.CallAnalyticsJob != null ? de_CallAnalyticsJob(output.CallAnalyticsJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMedicalTranscriptionJobResponse
 */
const de_GetMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalTranscriptionJobResponse => {
  return {
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob != null
        ? de_MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMedicalVocabularyResponse
 */
const de_GetMedicalVocabularyResponse = (output: any, context: __SerdeContext): GetMedicalVocabularyResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1GetTranscriptionJobResponse
 */
const de_GetTranscriptionJobResponse = (output: any, context: __SerdeContext): GetTranscriptionJobResponse => {
  return {
    TranscriptionJob:
      output.TranscriptionJob != null ? de_TranscriptionJob(output.TranscriptionJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetVocabularyFilterResponse
 */
const de_GetVocabularyFilterResponse = (output: any, context: __SerdeContext): GetVocabularyFilterResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

/**
 * deserializeAws_json1_1GetVocabularyResponse
 */
const de_GetVocabularyResponse = (output: any, context: __SerdeContext): GetVocabularyResponse => {
  return {
    DownloadUri: __expectString(output.DownloadUri),
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    S3Uri: __expectString(output.S3Uri),
    TuningDataS3Uri: __expectString(output.TuningDataS3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1InternalFailureException
 */
const de_InternalFailureException = (output: any, context: __SerdeContext): InternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InterruptionFilter
 */
const de_InterruptionFilter = (output: any, context: __SerdeContext): InterruptionFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange != null ? de_AbsoluteTimeRange(output.AbsoluteTimeRange, context) : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange != null ? de_RelativeTimeRange(output.RelativeTimeRange, context) : undefined,
    Threshold: __expectLong(output.Threshold),
  } as any;
};

/**
 * deserializeAws_json1_1JobExecutionSettings
 */
const de_JobExecutionSettings = (output: any, context: __SerdeContext): JobExecutionSettings => {
  return {
    AllowDeferredExecution: __expectBoolean(output.AllowDeferredExecution),
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1LanguageCodeItem
 */
const de_LanguageCodeItem = (output: any, context: __SerdeContext): LanguageCodeItem => {
  return {
    DurationInSeconds: __limitedParseFloat32(output.DurationInSeconds),
    LanguageCode: __expectString(output.LanguageCode),
  } as any;
};

/**
 * deserializeAws_json1_1LanguageCodeList
 */
const de_LanguageCodeList = (output: any, context: __SerdeContext): LanguageCodeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LanguageCodeItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LanguageIdSettings
 */
const de_LanguageIdSettings = (output: any, context: __SerdeContext): LanguageIdSettings => {
  return {
    LanguageModelName: __expectString(output.LanguageModelName),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_json1_1LanguageIdSettingsMap
 */
const de_LanguageIdSettingsMap = (output: any, context: __SerdeContext): Record<string, LanguageIdSettings> => {
  return Object.entries(output).reduce(
    (acc: Record<string, LanguageIdSettings>, [key, value]: [LanguageCode | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_LanguageIdSettings(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1LanguageModel
 */
const de_LanguageModel = (output: any, context: __SerdeContext): LanguageModel => {
  return {
    BaseModelName: __expectString(output.BaseModelName),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    FailureReason: __expectString(output.FailureReason),
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    ModelName: __expectString(output.ModelName),
    ModelStatus: __expectString(output.ModelStatus),
    UpgradeAvailability: __expectBoolean(output.UpgradeAvailability),
  } as any;
};

/**
 * deserializeAws_json1_1LanguageOptions
 */
const de_LanguageOptions = (output: any, context: __SerdeContext): (LanguageCode | string)[] => {
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
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListCallAnalyticsCategoriesResponse
 */
const de_ListCallAnalyticsCategoriesResponse = (
  output: any,
  context: __SerdeContext
): ListCallAnalyticsCategoriesResponse => {
  return {
    Categories: output.Categories != null ? de_CategoryPropertiesList(output.Categories, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCallAnalyticsJobsResponse
 */
const de_ListCallAnalyticsJobsResponse = (output: any, context: __SerdeContext): ListCallAnalyticsJobsResponse => {
  return {
    CallAnalyticsJobSummaries:
      output.CallAnalyticsJobSummaries != null
        ? de_CallAnalyticsJobSummaries(output.CallAnalyticsJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ListLanguageModelsResponse
 */
const de_ListLanguageModelsResponse = (output: any, context: __SerdeContext): ListLanguageModelsResponse => {
  return {
    Models: output.Models != null ? de_Models(output.Models, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMedicalTranscriptionJobsResponse
 */
const de_ListMedicalTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalTranscriptionJobsResponse => {
  return {
    MedicalTranscriptionJobSummaries:
      output.MedicalTranscriptionJobSummaries != null
        ? de_MedicalTranscriptionJobSummaries(output.MedicalTranscriptionJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ListMedicalVocabulariesResponse
 */
const de_ListMedicalVocabulariesResponse = (output: any, context: __SerdeContext): ListMedicalVocabulariesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    Vocabularies: output.Vocabularies != null ? de_Vocabularies(output.Vocabularies, context) : undefined,
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
 * deserializeAws_json1_1ListTranscriptionJobsResponse
 */
const de_ListTranscriptionJobsResponse = (output: any, context: __SerdeContext): ListTranscriptionJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    TranscriptionJobSummaries:
      output.TranscriptionJobSummaries != null
        ? de_TranscriptionJobSummaries(output.TranscriptionJobSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVocabulariesResponse
 */
const de_ListVocabulariesResponse = (output: any, context: __SerdeContext): ListVocabulariesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: __expectString(output.Status),
    Vocabularies: output.Vocabularies != null ? de_Vocabularies(output.Vocabularies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVocabularyFiltersResponse
 */
const de_ListVocabularyFiltersResponse = (output: any, context: __SerdeContext): ListVocabularyFiltersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    VocabularyFilters:
      output.VocabularyFilters != null ? de_VocabularyFilters(output.VocabularyFilters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Media
 */
const de_Media = (output: any, context: __SerdeContext): Media => {
  return {
    MediaFileUri: __expectString(output.MediaFileUri),
    RedactedMediaFileUri: __expectString(output.RedactedMediaFileUri),
  } as any;
};

/**
 * deserializeAws_json1_1MedicalTranscript
 */
const de_MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    TranscriptFileUri: __expectString(output.TranscriptFileUri),
  } as any;
};

/**
 * deserializeAws_json1_1MedicalTranscriptionJob
 */
const de_MedicalTranscriptionJob = (output: any, context: __SerdeContext): MedicalTranscriptionJob => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    Media: output.Media != null ? de_Media(output.Media, context) : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    MedicalTranscriptionJobName: __expectString(output.MedicalTranscriptionJobName),
    Settings: output.Settings != null ? de_MedicalTranscriptionSetting(output.Settings, context) : undefined,
    Specialty: __expectString(output.Specialty),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Transcript: output.Transcript != null ? de_MedicalTranscript(output.Transcript, context) : undefined,
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1MedicalTranscriptionJobSummaries
 */
const de_MedicalTranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MedicalTranscriptionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MedicalTranscriptionJobSummary
 */
const de_MedicalTranscriptionJobSummary = (output: any, context: __SerdeContext): MedicalTranscriptionJobSummary => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    LanguageCode: __expectString(output.LanguageCode),
    MedicalTranscriptionJobName: __expectString(output.MedicalTranscriptionJobName),
    OutputLocationType: __expectString(output.OutputLocationType),
    Specialty: __expectString(output.Specialty),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1MedicalTranscriptionSetting
 */
const de_MedicalTranscriptionSetting = (output: any, context: __SerdeContext): MedicalTranscriptionSetting => {
  return {
    ChannelIdentification: __expectBoolean(output.ChannelIdentification),
    MaxAlternatives: __expectInt32(output.MaxAlternatives),
    MaxSpeakerLabels: __expectInt32(output.MaxSpeakerLabels),
    ShowAlternatives: __expectBoolean(output.ShowAlternatives),
    ShowSpeakerLabels: __expectBoolean(output.ShowSpeakerLabels),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_json1_1Models
 */
const de_Models = (output: any, context: __SerdeContext): LanguageModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LanguageModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelSettings
 */
const de_ModelSettings = (output: any, context: __SerdeContext): ModelSettings => {
  return {
    LanguageModelName: __expectString(output.LanguageModelName),
  } as any;
};

/**
 * deserializeAws_json1_1NonTalkTimeFilter
 */
const de_NonTalkTimeFilter = (output: any, context: __SerdeContext): NonTalkTimeFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange != null ? de_AbsoluteTimeRange(output.AbsoluteTimeRange, context) : undefined,
    Negate: __expectBoolean(output.Negate),
    RelativeTimeRange:
      output.RelativeTimeRange != null ? de_RelativeTimeRange(output.RelativeTimeRange, context) : undefined,
    Threshold: __expectLong(output.Threshold),
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PiiEntityTypes
 */
const de_PiiEntityTypes = (output: any, context: __SerdeContext): (PiiEntityType | string)[] => {
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
 * deserializeAws_json1_1RelativeTimeRange
 */
const de_RelativeTimeRange = (output: any, context: __SerdeContext): RelativeTimeRange => {
  return {
    EndPercentage: __expectInt32(output.EndPercentage),
    First: __expectInt32(output.First),
    Last: __expectInt32(output.Last),
    StartPercentage: __expectInt32(output.StartPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  if (output.InterruptionFilter != null) {
    return {
      InterruptionFilter: de_InterruptionFilter(output.InterruptionFilter, context),
    };
  }
  if (output.NonTalkTimeFilter != null) {
    return {
      NonTalkTimeFilter: de_NonTalkTimeFilter(output.NonTalkTimeFilter, context),
    };
  }
  if (output.SentimentFilter != null) {
    return {
      SentimentFilter: de_SentimentFilter(output.SentimentFilter, context),
    };
  }
  if (output.TranscriptFilter != null) {
    return {
      TranscriptFilter: de_TranscriptFilter(output.TranscriptFilter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
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
      return de_Rule(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SentimentFilter
 */
const de_SentimentFilter = (output: any, context: __SerdeContext): SentimentFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange != null ? de_AbsoluteTimeRange(output.AbsoluteTimeRange, context) : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange != null ? de_RelativeTimeRange(output.RelativeTimeRange, context) : undefined,
    Sentiments: output.Sentiments != null ? de_SentimentValueList(output.Sentiments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SentimentValueList
 */
const de_SentimentValueList = (output: any, context: __SerdeContext): (SentimentValue | string)[] => {
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
 * deserializeAws_json1_1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Settings => {
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

/**
 * deserializeAws_json1_1StartCallAnalyticsJobResponse
 */
const de_StartCallAnalyticsJobResponse = (output: any, context: __SerdeContext): StartCallAnalyticsJobResponse => {
  return {
    CallAnalyticsJob:
      output.CallAnalyticsJob != null ? de_CallAnalyticsJob(output.CallAnalyticsJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartMedicalTranscriptionJobResponse
 */
const de_StartMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartMedicalTranscriptionJobResponse => {
  return {
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob != null
        ? de_MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartTranscriptionJobResponse
 */
const de_StartTranscriptionJobResponse = (output: any, context: __SerdeContext): StartTranscriptionJobResponse => {
  return {
    TranscriptionJob:
      output.TranscriptionJob != null ? de_TranscriptionJob(output.TranscriptionJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringTargetList
 */
const de_StringTargetList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SubtitleFileUris
 */
const de_SubtitleFileUris = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SubtitleFormats
 */
const de_SubtitleFormats = (output: any, context: __SerdeContext): (SubtitleFormat | string)[] => {
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
 * deserializeAws_json1_1SubtitlesOutput
 */
const de_SubtitlesOutput = (output: any, context: __SerdeContext): SubtitlesOutput => {
  return {
    Formats: output.Formats != null ? de_SubtitleFormats(output.Formats, context) : undefined,
    OutputStartIndex: __expectInt32(output.OutputStartIndex),
    SubtitleFileUris:
      output.SubtitleFileUris != null ? de_SubtitleFileUris(output.SubtitleFileUris, context) : undefined,
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
 * deserializeAws_json1_1Transcript
 */
const de_Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    RedactedTranscriptFileUri: __expectString(output.RedactedTranscriptFileUri),
    TranscriptFileUri: __expectString(output.TranscriptFileUri),
  } as any;
};

/**
 * deserializeAws_json1_1TranscriptFilter
 */
const de_TranscriptFilter = (output: any, context: __SerdeContext): TranscriptFilter => {
  return {
    AbsoluteTimeRange:
      output.AbsoluteTimeRange != null ? de_AbsoluteTimeRange(output.AbsoluteTimeRange, context) : undefined,
    Negate: __expectBoolean(output.Negate),
    ParticipantRole: __expectString(output.ParticipantRole),
    RelativeTimeRange:
      output.RelativeTimeRange != null ? de_RelativeTimeRange(output.RelativeTimeRange, context) : undefined,
    Targets: output.Targets != null ? de_StringTargetList(output.Targets, context) : undefined,
    TranscriptFilterType: __expectString(output.TranscriptFilterType),
  } as any;
};

/**
 * deserializeAws_json1_1TranscriptionJob
 */
const de_TranscriptionJob = (output: any, context: __SerdeContext): TranscriptionJob => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentRedaction:
      output.ContentRedaction != null ? de_ContentRedaction(output.ContentRedaction, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    IdentifyLanguage: __expectBoolean(output.IdentifyLanguage),
    IdentifyMultipleLanguages: __expectBoolean(output.IdentifyMultipleLanguages),
    JobExecutionSettings:
      output.JobExecutionSettings != null ? de_JobExecutionSettings(output.JobExecutionSettings, context) : undefined,
    LanguageCode: __expectString(output.LanguageCode),
    LanguageCodes: output.LanguageCodes != null ? de_LanguageCodeList(output.LanguageCodes, context) : undefined,
    LanguageIdSettings:
      output.LanguageIdSettings != null ? de_LanguageIdSettingsMap(output.LanguageIdSettings, context) : undefined,
    LanguageOptions: output.LanguageOptions != null ? de_LanguageOptions(output.LanguageOptions, context) : undefined,
    Media: output.Media != null ? de_Media(output.Media, context) : undefined,
    MediaFormat: __expectString(output.MediaFormat),
    MediaSampleRateHertz: __expectInt32(output.MediaSampleRateHertz),
    ModelSettings: output.ModelSettings != null ? de_ModelSettings(output.ModelSettings, context) : undefined,
    Settings: output.Settings != null ? de_Settings(output.Settings, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Subtitles: output.Subtitles != null ? de_SubtitlesOutput(output.Subtitles, context) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Transcript: output.Transcript != null ? de_Transcript(output.Transcript, context) : undefined,
    TranscriptionJobName: __expectString(output.TranscriptionJobName),
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1TranscriptionJobSummaries
 */
const de_TranscriptionJobSummaries = (output: any, context: __SerdeContext): TranscriptionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TranscriptionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TranscriptionJobSummary
 */
const de_TranscriptionJobSummary = (output: any, context: __SerdeContext): TranscriptionJobSummary => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    ContentRedaction:
      output.ContentRedaction != null ? de_ContentRedaction(output.ContentRedaction, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    IdentifiedLanguageScore: __limitedParseFloat32(output.IdentifiedLanguageScore),
    IdentifyLanguage: __expectBoolean(output.IdentifyLanguage),
    IdentifyMultipleLanguages: __expectBoolean(output.IdentifyMultipleLanguages),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageCodes: output.LanguageCodes != null ? de_LanguageCodeList(output.LanguageCodes, context) : undefined,
    ModelSettings: output.ModelSettings != null ? de_ModelSettings(output.ModelSettings, context) : undefined,
    OutputLocationType: __expectString(output.OutputLocationType),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TranscriptionJobName: __expectString(output.TranscriptionJobName),
    TranscriptionJobStatus: __expectString(output.TranscriptionJobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateCallAnalyticsCategoryResponse
 */
const de_UpdateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): UpdateCallAnalyticsCategoryResponse => {
  return {
    CategoryProperties:
      output.CategoryProperties != null ? de_CategoryProperties(output.CategoryProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMedicalVocabularyResponse
 */
const de_UpdateMedicalVocabularyResponse = (output: any, context: __SerdeContext): UpdateMedicalVocabularyResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVocabularyFilterResponse
 */
const de_UpdateVocabularyFilterResponse = (output: any, context: __SerdeContext): UpdateVocabularyFilterResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVocabularyResponse
 */
const de_UpdateVocabularyResponse = (output: any, context: __SerdeContext): UpdateVocabularyResponse => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
  } as any;
};

/**
 * deserializeAws_json1_1Vocabularies
 */
const de_Vocabularies = (output: any, context: __SerdeContext): VocabularyInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VocabularyInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VocabularyFilterInfo
 */
const de_VocabularyFilterInfo = (output: any, context: __SerdeContext): VocabularyFilterInfo => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
  } as any;
};

/**
 * deserializeAws_json1_1VocabularyFilters
 */
const de_VocabularyFilters = (output: any, context: __SerdeContext): VocabularyFilterInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VocabularyFilterInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VocabularyInfo
 */
const de_VocabularyInfo = (output: any, context: __SerdeContext): VocabularyInfo => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    VocabularyName: __expectString(output.VocabularyName),
    VocabularyState: __expectString(output.VocabularyState),
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
